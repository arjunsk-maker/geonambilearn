import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { LANDMARKS_DATA } from '../data/geographyData';
import { Language, LandmarkInfo } from '../types/geography';
import { UI_STRINGS } from '../data/translations';
import { Globe, Layers, Navigation2, Compass, Eye, EyeOff, Maximize2, Wind, MapPin, Mountain, Sparkles } from 'lucide-react';

interface ThreeDExplorerProps {
  language: Language;
}

// Pre-allocated scratch vectors to prevent GC allocations
const _scratchVec = new THREE.Vector3();
const _targetCamPos = new THREE.Vector3();
const _targetLookAt = new THREE.Vector3();

// Helper to convert Lat/Long to Vector3 on sphere of given radius
function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export const ThreeDExplorer: React.FC<ThreeDExplorerProps> = ({ language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'relief' | 'monsoon' | 'plates' | 'landmarks'>('relief');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkInfo | null>(LANDMARKS_DATA[0]);
  const [cameraView, setCameraView] = useState<'india' | 'himalayas' | 'bayOfBengal' | 'global'>('india');
  const [bloomEnabled, setBloomEnabled] = useState<boolean>(true);

  const t = UI_STRINGS[language].threeD;

  // Refs for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const bloomPassRef = useRef<UnrealBloomPass | null>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);
  const monsoonParticlesRef = useRef<THREE.Points | null>(null);
  const landmarksGroupRef = useRef<THREE.Group | null>(null);
  const platesGroupRef = useRef<THREE.Group | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const earthMeshRef = useRef<THREE.Mesh | null>(null);

  // Landmark coords
  const landmarkCoords: Record<string, { lat: number; lon: number }> = {
    gandikota: { lat: 14.81, lon: 78.28 },
    hogenakkal: { lat: 12.11, lon: 77.77 },
    krishna_butter_ball: { lat: 12.61, lon: 80.19 },
    barren_island: { lat: 12.29, lon: 93.85 },
    lonar_lake: { lat: 19.97, lon: 76.51 },
    mawsynram: { lat: 25.30, lon: 91.58 }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup with matched horizon fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b1120, 0.035);
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3, 7.5);
    cameraRef.current = camera;

    // 3. Renderer with PBR pipeline & ACESFilmicToneMapping
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    const canvasEl = renderer.domElement;
    canvasEl.className = "w-full h-full block outline-none select-none";
    container.appendChild(canvasEl);

    // 3b. Post-Processing Pipeline: Subtle Bloom for Atmosphere & Landmarks (Apple Aesthetic)
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // High threshold (0.78) ensures continental landmass stays sharp & non-bloomed,
    // while emissive atmospheric corona, landmark beacons, and wind streams radiate an ethereal glow
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.65, // strength: refined and restrained
      0.45, // radius: smooth optical spread
      0.78  // threshold: activates on high-luminance elements
    );
    composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    composerRef.current = composer;
    bloomPassRef.current = bloomPass;
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Studio 3-point lighting
    // Warm Key Light
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.8);
    keyLight.position.set(6, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    // Cool Fill Light (Hemisphere)
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x0f172a, 1.4);
    scene.add(hemiLight);

    // Subtle blue rim light for atmospheric edge
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    rimLight.position.set(-6, -2, -6);
    scene.add(rimLight);

    // 6. Procedural Earth Texture Generation on 2D Canvas (Zero 404s!)
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Ocean deep blue background
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, 1024);
      oceanGrad.addColorStop(0, '#0c2340');
      oceanGrad.addColorStop(0.5, '#071829');
      oceanGrad.addColorStop(1, '#0c2340');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, 2048, 1024);

      // Draw latitude and longitude graticules
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let lat = 0; lat <= 1024; lat += 1024 / 12) {
        ctx.beginPath();
        ctx.moveTo(0, lat);
        ctx.lineTo(2048, lat);
        ctx.stroke();
      }
      for (let lon = 0; lon <= 2048; lon += 2048 / 24) {
        ctx.beginPath();
        ctx.moveTo(lon, 0);
        ctx.lineTo(lon, 1024);
        ctx.stroke();
      }

      // Draw equator in distinct subtle amber
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 512);
      ctx.lineTo(2048, 512);
      ctx.stroke();

      // Procedural continents approximation
      ctx.fillStyle = '#1e3a29'; // Land deep green
      // Africa
      ctx.beginPath();
      ctx.ellipse(1080, 530, 160, 220, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Eurasia
      ctx.beginPath();
      ctx.ellipse(1350, 320, 360, 180, 0, 0, Math.PI * 2);
      ctx.fill();

      // Indian Subcontinent (Prominently rendered and elevated)
      ctx.fillStyle = '#2d5a3f'; // Lush green
      ctx.beginPath();
      ctx.moveTo(1420, 410); // North Himalayas
      ctx.lineTo(1490, 480); // East / Bengal
      ctx.lineTo(1450, 590); // Kanyakumari south tip
      ctx.lineTo(1400, 490); // Gujarat / Arabian Sea
      ctx.closePath();
      ctx.fill();

      // Himalayas Mountain Ridge (Snow and rocky elevation)
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(1390, 395);
      ctx.quadraticCurveTo(1450, 420, 1530, 415);
      ctx.stroke();

      // Western Ghats ridge
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(1405, 495);
      ctx.lineTo(1440, 580);
      ctx.stroke();

      // Sri Lanka
      ctx.fillStyle = '#15803d';
      ctx.beginPath();
      ctx.ellipse(1465, 610, 16, 25, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Americas
      ctx.fillStyle = '#1e3a29';
      ctx.beginPath();
      ctx.ellipse(450, 320, 220, 160, -0.2, 0, Math.PI * 2); // North America
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(600, 650, 150, 200, 0.3, 0, Math.PI * 2); // South America
      ctx.fill();

      // Australia
      ctx.beginPath();
      ctx.ellipse(1720, 680, 120, 90, 0, 0, Math.PI * 2);
      ctx.fill();

      // Antarctica ice cap
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(0, 930, 2048, 94);
      ctx.fillRect(0, 0, 2048, 80); // Arctic ice
    }

    const earthTexture = new THREE.CanvasTexture(canvas);
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // 7. Composite Procedural 3D Earth System
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Primary Earth Sphere
    const earthGeo = new THREE.SphereGeometry(2.5, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.15,
      bumpScale: 0.05
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthMesh.receiveShadow = true;
    earthMesh.castShadow = true;
    globeGroup.add(earthMesh);
    earthMeshRef.current = earthMesh;

    // Atmospheric Glow rim mesh (Composite part 2)
    const atmoGeo = new THREE.SphereGeometry(2.55, 64, 64);
    const atmoMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      roughness: 0.2,
      transmission: 0.6,
      ior: 1.1,
      depthWrite: false
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    globeGroup.add(atmoMesh);

    // Procedural Clouds Layer (Composite part 3)
    const cloudCanvas = document.createElement('canvas');
    cloudCanvas.width = 1024;
    cloudCanvas.height = 512;
    const cctx = cloudCanvas.getContext('2d');
    if (cctx) {
      cctx.fillStyle = '#000000';
      cctx.fillRect(0, 0, 1024, 512);
      // Soft procedural white swirl clouds
      cctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      for (let i = 0; i < 90; i++) {
        const cx = Math.random() * 1024;
        const cy = 200 + Math.random() * 200;
        const cr = 20 + Math.random() * 60;
        cctx.beginPath();
        cctx.arc(cx, cy, cr, 0, Math.PI * 2);
        cctx.fill();
      }
    }
    const cloudTex = new THREE.CanvasTexture(cloudCanvas);
    cloudTex.colorSpace = THREE.SRGBColorSpace;
    const cloudGeo = new THREE.SphereGeometry(2.53, 48, 48);
    const cloudMat = new THREE.MeshStandardMaterial({
      alphaMap: cloudTex,
      transparent: true,
      opacity: 0.4,
      color: 0xffffff,
      roughness: 1.0,
      depthWrite: false
    });
    const cloudsMesh = new THREE.Mesh(cloudGeo, cloudMat);
    globeGroup.add(cloudsMesh);
    cloudsRef.current = cloudsMesh;

    // Orbit Ring Accent (Composite part 4)
    const ringGeo = new THREE.TorusGeometry(3.2, 0.012, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    globeGroup.add(orbitRing);

    // 8. Tectonic Plate Boundaries (Layer 3)
    const platesGroup = new THREE.Group();
    globeGroup.add(platesGroup);
    platesGroupRef.current = platesGroup;

    // Procedural plate boundary curves (Indo-Australian, Eurasian, Pacific)
    const platePoints = [
      // Himalayan Collision Suture
      [35, 74], [34, 78], [30, 84], [28, 90], [27, 96],
      // Indo-Australian Ocean Boundary
      [-10, 65], [-5, 75], [0, 85], [10, 95], [15, 100],
      // Mid-Atlantic Ridge
      [65, -20], [40, -30], [15, -40], [-10, -25], [-40, -15],
      // Pacific Ring of Fire
      [50, 160], [35, 140], [15, 125], [-10, 150], [-35, 175]
    ];
    platePoints.forEach(([lat, lon]) => {
      const pos = latLongToVector3(lat, lon, 2.52);
      const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      platesGroup.add(dot);
    });

    // 9. Monsoon Stream Particles (Layer 2)
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Clustered over Indian Ocean & Bay of Bengal heading to Subcontinent
      const lat = -5 + Math.random() * 32;
      const lon = 60 + Math.random() * 40;
      const p = latLongToVector3(lat, lon, 2.54 + Math.random() * 0.1);
      particlePositions[i * 3] = p.x;
      particlePositions[i * 3 + 1] = p.y;
      particlePositions[i * 3 + 2] = p.z;

      // Cyan to royal blue
      particleColors[i * 3] = 0.2;
      particleColors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
      particleColors[i * 3 + 2] = 0.95;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const monsoonParticles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(monsoonParticles);
    monsoonParticlesRef.current = monsoonParticles;

    // 10. 3D Landmark Beacons (Layer 4)
    // Assembled as a composite 3-part pin (Cylinder base, conical tip, emissive pulse beacon)
    const landmarksGroup = new THREE.Group();
    globeGroup.add(landmarksGroup);
    landmarksGroupRef.current = landmarksGroup;

    LANDMARKS_DATA.forEach((lm) => {
      const coords = landmarkCoords[lm.id] || { lat: 20, lon: 78 };
      const pos = latLongToVector3(coords.lat, coords.lon, 2.52);

      const pinGroup = new THREE.Group();
      pinGroup.position.copy(pos);
      pinGroup.lookAt(0, 0, 0); // Orient normal to globe surface

      // Pin base disc
      const baseGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 12);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.2 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.rotation.x = Math.PI / 2;
      pinGroup.add(baseMesh);

      // Pin stalk
      const stalkGeo = new THREE.ConeGeometry(0.035, 0.18, 12);
      const stalkMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.4, roughness: 0.3 });
      const stalkMesh = new THREE.Mesh(stalkGeo, stalkMat);
      stalkMesh.rotation.x = -Math.PI / 2;
      stalkMesh.position.z = 0.09;
      pinGroup.add(stalkMesh);

      // Emissive Beacon Head
      const headGeo = new THREE.SphereGeometry(0.055, 16, 16);
      const headMat = new THREE.MeshStandardMaterial({
        color: 0xff3b30,
        emissive: 0xff3b30,
        emissiveIntensity: 0.8,
        roughness: 0.1
      });
      const headMesh = new THREE.Mesh(headGeo, headMat);
      headMesh.position.z = 0.18;
      pinGroup.add(headMesh);

      pinGroup.userData = { landmark: lm };
      landmarksGroup.add(pinGroup);
    });

    // Initial orientation: Align India towards user (+Z direction)
    // India is roughly at lon 78E, lat 20N.
    globeGroup.rotation.y = -Math.PI * 0.72;
    globeGroup.rotation.x = 0.25;

    // Mouse drag rotation handling
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !globeGroupRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      prevMousePos = { x: e.clientX, y: e.clientY };

      globeGroupRef.current.rotation.y += deltaX * 0.005;
      globeGroupRef.current.rotation.x += deltaY * 0.005;
      // Clamp vertical tilt
      globeGroupRef.current.rotation.x = Math.max(-0.8, Math.min(0.8, globeGroupRef.current.rotation.x));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Zoom on wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;
      const cam = cameraRef.current;
      cam.position.z = Math.max(4.2, Math.min(12, cam.position.z + e.deltaY * 0.004));
    };
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // Handle resize
    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 11. 60 FPS Damped Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Cloud rotation at slight offset speed
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += delta * 0.03;
      }

      // Gentle auto-rotation when user is not dragging
      if (autoRotate && !isDragging && globeGroupRef.current) {
        globeGroupRef.current.rotation.y += delta * 0.04;
      }

      // Animate monsoon particles along flow paths
      if (monsoonParticlesRef.current) {
        const positions = monsoonParticlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          // Subtle pulsation
          const idx = i * 3 + 1;
          positions[idx] += Math.sin(time * 3 + i) * 0.0006;
        }
        monsoonParticlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      domElement.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      earthGeo.dispose();
      earthMat.dispose();
      earthTexture.dispose();
      cloudGeo.dispose();
      cloudMat.dispose();
      cloudTex.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  // Update visible layers when activeLayer changes
  useEffect(() => {
    if (monsoonParticlesRef.current) {
      monsoonParticlesRef.current.visible = activeLayer === 'monsoon';
    }
    if (platesGroupRef.current) {
      platesGroupRef.current.visible = activeLayer === 'plates';
    }
    if (landmarksGroupRef.current) {
      landmarksGroupRef.current.visible = activeLayer === 'landmarks' || activeLayer === 'relief';
    }
  }, [activeLayer]);

  // Camera preset handler
  const setCameraPreset = (preset: 'india' | 'himalayas' | 'bayOfBengal' | 'global') => {
    setCameraView(preset);
    if (!globeGroupRef.current || !cameraRef.current) return;

    if (preset === 'india') {
      globeGroupRef.current.rotation.y = -Math.PI * 0.72;
      globeGroupRef.current.rotation.x = 0.28;
      cameraRef.current.position.set(0, 1.8, 6.2);
    } else if (preset === 'himalayas') {
      globeGroupRef.current.rotation.y = -Math.PI * 0.70;
      globeGroupRef.current.rotation.x = 0.45;
      cameraRef.current.position.set(0, 2.2, 5.2);
    } else if (preset === 'bayOfBengal') {
      globeGroupRef.current.rotation.y = -Math.PI * 0.80;
      globeGroupRef.current.rotation.x = 0.15;
      cameraRef.current.position.set(0, 1.2, 5.5);
    } else {
      cameraRef.current.position.set(0, 3, 8.5);
    }
  };

  return (
    <div className="relative w-full h-[750px] lg:h-[820px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0a0f1d] via-[#0d1527] to-[#080d19] shadow-2xl">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Top Floating Badge Bar (Clean, minimalist Apple style) */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none z-10">
        <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg pointer-events-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">{t.badge}</span>
          <span className="text-xs text-slate-500 font-mono">| 60 FPS PBR</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg text-xs text-slate-400 pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-indigo-400" />
          <span>{t.instruction}</span>
        </div>
      </div>

      {/* Landmark Quick Info Floater (Top-right corner, non-obstructive) */}
      {selectedLandmark && activeLayer === 'landmarks' && (
        <div className="absolute top-20 right-6 max-w-sm glass-panel p-5 rounded-2xl text-left border border-indigo-500/30 z-10 transition-all duration-300">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-2.5 py-1 rounded-md">
              {selectedLandmark.type.replace('_', ' ')}
            </span>
            <span className="text-xs text-slate-400">{selectedLandmark.location[language]}</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-1">{selectedLandmark.name[language]}</h4>
          {selectedLandmark.tamilName && language === 'ta' && (
            <p className="text-xs text-indigo-300 mb-2 italic">{selectedLandmark.tamilName}</p>
          )}
          <p className="text-xs text-slate-300 leading-relaxed mb-3">{selectedLandmark.significance[language]}</p>
          <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-[11px] text-slate-400">
            <span className="text-amber-400 font-medium">Fact: </span>
            {selectedLandmark.keyFact[language]}
          </div>
        </div>
      )}

      {/* Collapsible Apple-Style Bottom Dock (Zero Viewport Occlusion Constitution) */}
      <div 
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-[94%] max-w-4xl z-20 transition-all duration-500 ease-out ${
          isDockCollapsed ? 'translate-y-[calc(100%-48px)]' : 'translate-y-0'
        }`}
      >
        {/* Toggle Collapse Edge Button */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/90 text-xs font-medium text-slate-300 border border-white/10 hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
          >
            {isDockCollapsed ? (
              <>
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
                <span>Show Controls (காட்டு)</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                <span>Hide Controls (மறை)</span>
              </>
            )}
          </button>
        </div>

        {/* Main Dock Surface */}
        <div className="glass-dock rounded-3xl p-4 sm:p-5 flex flex-col gap-4">
          {/* Row 1: Layer Selector Tabs & Camera Presets */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            {/* Layers */}
            <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-2xl border border-white/5">
              <button
                onClick={() => setActiveLayer('relief')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeLayer === 'relief' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mountain className="w-3.5 h-3.5" />
                <span>{t.layerRelief}</span>
              </button>
              <button
                onClick={() => setActiveLayer('monsoon')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeLayer === 'monsoon' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Wind className="w-3.5 h-3.5" />
                <span>{t.layerMonsoon}</span>
              </button>
              <button
                onClick={() => setActiveLayer('plates')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeLayer === 'plates' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t.layerPlates}</span>
              </button>
              <button
                onClick={() => setActiveLayer('landmarks')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeLayer === 'landmarks' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.layerLandmarks}</span>
              </button>
            </div>

            {/* Camera View Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium hidden md:inline">Camera:</span>
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-2xl border border-white/5">
                <button
                  onClick={() => setCameraPreset('india')}
                  className={`px-3 py-1 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    cameraView === 'india' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.cameraIndia}
                </button>
                <button
                  onClick={() => setCameraPreset('himalayas')}
                  className={`px-3 py-1 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    cameraView === 'himalayas' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.cameraHimalayas}
                </button>
                <button
                  onClick={() => setCameraPreset('bayOfBengal')}
                  className={`px-3 py-1 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    cameraView === 'bayOfBengal' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.cameraBayOfBengal}
                </button>
                <button
                  onClick={() => setCameraPreset('global')}
                  className={`px-3 py-1 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    cameraView === 'global' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.cameraGlobal}
                </button>
              </div>

              {/* Auto-rotate pill */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl text-xs border transition-colors cursor-pointer ${
                  autoRotate ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-black/40 text-slate-400 border-white/5'
                }`}
                title={t.toggleRotate}
              >
                <Navigation2 className={`w-3.5 h-3.5 ${autoRotate ? 'rotate-45 text-emerald-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Row 2: Contextual Details or Landmark Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {activeLayer === 'landmarks' ? (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-medium">Select Landmark:</span>
                {LANDMARKS_DATA.map((lm) => (
                  <button
                    key={lm.id}
                    onClick={() => {
                      setSelectedLandmark(lm);
                      const coords = landmarkCoords[lm.id];
                      if (coords && globeGroupRef.current) {
                        // Orient globe towards landmark
                        globeGroupRef.current.rotation.y = -Math.PI * (coords.lon / 100);
                        globeGroupRef.current.rotation.x = (coords.lat / 90) * 0.5;
                      }
                    }}
                    className={`px-3 py-1 rounded-lg border text-xs transition-colors cursor-pointer ${
                      selectedLandmark?.id === lm.id
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 font-semibold'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {lm.name[language]}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>
                  {activeLayer === 'relief' && t.elevationKey}
                  {activeLayer === 'monsoon' && (language === 'ta' ? 'அரபிக்கடல் மற்றும் வங்காள விரிகுடா தென்மேற்கு பருவமழை நீரோட்டங்கள்' : 'Arabian Sea & Bay of Bengal SW Monsoon wind particle trajectories')}
                  {activeLayer === 'plates' && (language === 'ta' ? 'இந்திய-ஆஸ்திரேலிய புவித்தட்டு மற்றும் இமயமலை மோதல் எல்லை' : 'Indo-Australian Plate boundary, Himalayan collision suture zone')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
