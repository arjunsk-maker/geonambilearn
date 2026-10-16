import React, { useState } from 'react';
import { Language } from '../types/geography';
import { UI_STRINGS } from '../data/translations';
import { CloudRain, Wind, Compass, Sun, ArrowUpRight, Thermometer, Droplets, Gauge } from 'lucide-react';

interface MonsoonLabProps {
  language: Language;
}

export const MonsoonLab: React.FC<MonsoonLabProps> = ({ language }) => {
  const [monsoonSeason, setMonsoonSeason] = useState<'sw' | 'ne'>('sw');
  const [cloudCoverOktas, setCloudCoverOktas] = useState<number>(6); // 0 to 8
  const [stationTemp, setStationTemp] = useState<number>(31);
  const [stationDewPoint, setStationDewPoint] = useState<number>(24);
  const [stationPressure, setStationPressure] = useState<number>(1008);
  const [windSpeedKnots, setWindSpeedKnots] = useState<number>(15);
  const [windDirectionDeg, setWindDirectionDeg] = useState<number>(225); // SW wind = 225 deg

  const t = UI_STRINGS[language].monsoon;

  // Calculate Relative Humidity approximation: 100 - 5 * (T - Td)
  const estimatedRH = Math.max(10, Math.min(100, Math.round(100 - 5 * (stationTemp - stationDewPoint))));

  return (
    <div className="w-full space-y-12 py-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
          <CloudRain className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 6 & 12 • வளிமண்டலம் மற்றும் வானிலை' : 'Unit 6 & 12 • Atmosphere & Weather Lab'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Part 1: Seasonal Monsoon Reversal Interactive Simulator */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Wind className="w-5 h-5 text-cyan-400" />
              <span>{language === 'ta' ? 'பருவமழை காற்று சுழற்சி மாதிரி' : 'Monsoon Wind Circulation Model'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ta' 
                ? 'அரபுச் சொல் "மௌசிம்" (Mausim) என்பதிலிருந்து உருவானது. சீரான காற்று திசை மாற்றம் (160° reversal).'
                : 'Derived from Arabic "Mausim" (Season). Demonstrates minimum 160° seasonal reversal of wind systems.'}
            </p>
          </div>

          {/* Season Toggle Pills */}
          <div className="flex items-center p-1 bg-black/40 rounded-2xl border border-white/10">
            <button
              onClick={() => {
                setMonsoonSeason('sw');
                setWindDirectionDeg(225);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                monsoonSeason === 'sw' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'ta' ? 'தென்மேற்கு பருவமழை (ஜூன் - செப்)' : 'SW Monsoon (June–Sept)'}
            </button>
            <button
              onClick={() => {
                setMonsoonSeason('ne');
                setWindDirectionDeg(45);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                monsoonSeason === 'ne' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'ta' ? 'வடகிழக்கு பருவமழை (அக் - நவ)' : 'NE Monsoon (Oct–Nov)'}
            </button>
          </div>
        </div>

        {/* Dynamic Graphic Stage for Monsoon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual SVG Map & Animated Vectors */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0c1a30] to-slate-950 border border-white/10 p-4 overflow-hidden flex items-center justify-center">
            {/* Background Map Contours of Indian Subcontinent & Oceans */}
            <svg viewBox="0 0 500 400" className="w-full h-full">
              {/* Ocean Area */}
              <rect x="0" y="0" width="500" height="400" fill="#0b172a" opacity="0.6" />
              
              {/* Indian Landmass Silhouette */}
              <path
                d="M 120 70 L 260 50 L 380 90 L 370 160 L 410 180 L 330 200 L 260 350 L 190 230 L 120 200 Z"
                fill="#1e293b"
                stroke="#334155"
                strokeWidth="2"
              />

              {/* Western Ghats barrier */}
              <path d="M 195 210 Q 215 280 250 335" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.75" />
              <text x="145" y="270" fill="#fbbf24" fontSize="10" fontWeight="bold">Western Ghats</text>

              {/* Khasi Hills (Mawsynram) */}
              <circle cx="365" cy="145" r="7" fill="#10b981" />
              <text x="380" y="145" fill="#34d399" fontSize="10" fontWeight="bold">Mawsynram</text>

              {/* Tamil Nadu Coromandel Coast */}
              <path d="M 245 345 L 290 280 L 295 240" stroke="#ec4899" strokeWidth="4" strokeDasharray="3,3" fill="none" />
              <text x="295" y="310" fill="#f472b6" fontSize="10" fontWeight="bold">Coromandel Coast</text>

              {/* High / Low Pressure Cells */}
              {monsoonSeason === 'sw' ? (
                <>
                  {/* Summer SW Monsoon: Low over Pakistan/North India, High over Indian Ocean */}
                  <g className="animate-pulse">
                    <circle cx="210" cy="90" r="24" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1.5" />
                    <text x="210" y="95" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="bold">LOW (L)</text>
                    <text x="210" y="125" textAnchor="middle" fill="#cbd5e1" fontSize="9">Peshawar / Thar (996 mb)</text>
                  </g>

                  <g>
                    <circle cx="120" cy="340" r="24" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="120" y="345" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">HIGH (H)</text>
                    <text x="120" y="375" textAnchor="middle" fill="#94a3b8" fontSize="9">Indian Ocean (1014 mb)</text>
                  </g>

                  {/* Wind Vectors: Arabian Sea Branch */}
                  <path d="M 80 340 Q 140 280 195 235" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" fill="none" strokeDasharray="8,4" />
                  <path d="M 120 370 Q 180 320 230 285" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" fill="none" strokeDasharray="8,4" />
                  <text x="90" y="270" fill="#38bdf8" fontSize="11" fontWeight="bold">Arabian Sea Branch</text>

                  {/* Wind Vectors: Bay of Bengal Branch */}
                  <path d="M 230 360 Q 340 300 365 160" stroke="#06b6d4" strokeWidth="3" markerEnd="url(#arrow)" fill="none" strokeDasharray="8,4" />
                  <text x="320" y="250" fill="#06b6d4" fontSize="11" fontWeight="bold">Bay of Bengal Branch</text>
                </>
              ) : (
                <>
                  {/* Winter NE Monsoon: High over Central Asia, Low over Bay of Bengal */}
                  <g className="animate-pulse">
                    <circle cx="280" cy="60" r="24" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="280" y="65" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">HIGH (H)</text>
                    <text x="280" y="95" textAnchor="middle" fill="#cbd5e1" fontSize="9">Central Asia (1016 mb)</text>
                  </g>

                  <g>
                    <circle cx="320" cy="330" r="24" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1.5" />
                    <text x="320" y="335" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="bold">LOW (L)</text>
                    <text x="320" y="365" textAnchor="middle" fill="#cbd5e1" fontSize="9">Bay of Bengal (1002 mb)</text>
                  </g>

                  {/* Wind Vectors: NE winds across Bay of Bengal to Tamil Nadu coast */}
                  <path d="M 360 110 Q 330 200 275 290" stroke="#818cf8" strokeWidth="3.5" markerEnd="url(#arrow)" fill="none" strokeDasharray="8,4" />
                  <path d="M 400 140 Q 360 230 290 325" stroke="#818cf8" strokeWidth="3.5" markerEnd="url(#arrow)" fill="none" strokeDasharray="8,4" />
                  <text x="330" y="190" fill="#a5b4fc" fontSize="11" fontWeight="bold">Northeast Retreating Winds</text>
                  <text x="270" y="350" fill="#f472b6" fontSize="11" fontWeight="bold">Rain in TN!</text>
                </>
              )}

              {/* Marker Defs */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Explanation Text & Facts */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {monsoonSeason === 'sw' ? t.swMonsoon : t.neMonsoon}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {monsoonSeason === 'sw' ? t.swDesc : t.neDesc}
              </p>
            </div>

            {/* Quick Fact Callouts from Textbook */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-slate-400 block mb-1">
                  {language === 'ta' ? 'அதிக மழை பெறும் பகுதி:' : 'Rainfall Beneficiary:'}
                </span>
                <span className="font-bold text-emerald-400">
                  {monsoonSeason === 'sw' 
                    ? (language === 'ta' ? 'கேரளா, மேற்கு தொடர்ச்சி மலை & மேகாலயா' : 'Kerala, Western Ghats & Meghalaya')
                    : (language === 'ta' ? 'தமிழ்நாடு சோழமண்டலக் கடற்கரை' : 'Coromandel Coast of Tamil Nadu')}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-slate-400 block mb-1">
                  {language === 'ta' ? 'காற்றின் தோற்றம்:' : 'Origin of Winds:'}
                </span>
                <span className="font-bold text-amber-400">
                  {monsoonSeason === 'sw'
                    ? (language === 'ta' ? 'தெற்கு இந்தியப் பெருங்கடல் (ஈரப்பதம்)' : 'Indian Ocean (Moisture saturated)')
                    : (language === 'ta' ? 'மத்திய ஆசியா / சைபீரியா (வறண்டது)' : 'Central Asia / Siberia (Continental)')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Orographic Rainfall Mechanism Interactive Diagram */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 text-left">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-indigo-400" />
            <span>{t.elevationEffect}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ta' 
              ? 'இயற்கை மலையரண்கள் (மேற்கு தொடர்ச்சி மலை / காசி குன்றுகள்) எவ்வாறு மழைப்பொழிவை தீர்மானிக்கின்றன?'
              : 'How high relief barriers create intense rainfall on the windward side and semi-arid conditions on the leeward slope.'}
          </p>
        </div>

        {/* Orographic Interactive Cross Section SVG */}
        <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 border border-white/10 overflow-hidden">
          <svg viewBox="0 0 800 350" className="w-full h-full">
            {/* Sea on left */}
            <rect x="0" y="270" width="220" height="80" fill="#0369a1" />
            <text x="30" y="310" fill="#bae6fd" fontSize="13" fontWeight="bold">Arabian Sea (அரபிக்கடல்)</text>

            {/* Mountain Profile (Western Ghats) */}
            <path
              d="M 200 270 L 420 80 L 520 220 L 800 250 L 800 350 L 0 350 L 0 270 Z"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="2"
            />

            {/* Windward Slope Text */}
            <text x="240" y="180" fill="#38bdf8" fontSize="12" fontWeight="bold">
              {language === 'ta' ? 'காற்று மோதும் பக்கம் (Windward)' : 'Windward Slope'}
            </text>
            <text x="240" y="198" fill="#94a3b8" fontSize="10">2,000–3,000 mm Rain</text>

            {/* Crest / Peak */}
            <circle cx="420" cy="80" r="5" fill="#f59e0b" />
            <text x="430" y="75" fill="#fbbf24" fontSize="11" fontWeight="bold">
              {language === 'ta' ? 'சிகரம் (Peak ~2695m)' : 'Anamudi Peak (2,695m)'}
            </text>

            {/* Leeward Slope Text */}
            <text x="560" y="190" fill="#f87171" fontSize="12" fontWeight="bold">
              {language === 'ta' ? 'மழை மறைவுப் பிரதேசம் (Leeward)' : 'Leeward Rain Shadow'}
            </text>
            <text x="560" y="208" fill="#94a3b8" fontSize="10">
              {language === 'ta' ? 'தமிழ்நாடு / தக்காண சமவெளிகள் (<600 mm)' : 'Tamil Nadu & Deccan (<600 mm)'}
            </text>

            {/* Rising warm moist air arrows */}
            <g stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4">
              <path d="M 80 250 Q 180 230 260 160" />
              <path d="M 140 260 Q 220 210 320 130" />
            </g>

            {/* Condensation Clouds at top */}
            <g fill="#94a3b8" opacity="0.85">
              <ellipse cx="360" cy="90" rx="40" ry="25" />
              <ellipse cx="400" cy="75" rx="55" ry="32" />
              <ellipse cx="450" cy="90" rx="45" ry="25" />
            </g>

            {/* Rain droplets falling on windward */}
            <g stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,6" opacity="0.8">
              <line x1="310" y1="120" x2="300" y2="200" />
              <line x1="340" y1="110" x2="330" y2="210" />
              <line x1="370" y1="115" x2="360" y2="215" />
              <line x1="400" y1="110" x2="390" y2="180" />
            </g>

            {/* Descending dry warm air on leeward */}
            <g stroke="#f87171" strokeWidth="3" strokeDasharray="6,4">
              <path d="M 460 110 Q 540 180 640 230" />
              <path d="M 490 130 Q 580 200 700 240" />
            </g>
          </svg>
        </div>

        {/* Detailed Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              {language === 'ta' ? 'காற்று மோதும் பக்கம் (Windward Side)' : 'Windward Side (Western Ghats / Meghalaya)'}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.windwardSide}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
              {language === 'ta' ? 'மழை மறைவுப் பிரதேசம் (Leeward Side)' : 'Leeward Rain Shadow (Tamil Nadu)'}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.leewardSide}
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: Interactive Weather Station Model (Class XI Unit 12) */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>{t.stationModelTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {t.stationModelDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Station Model Interactive Glyph */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-white/10 min-h-[300px]">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Center Circle representing Cloud Cover */}
              <div className="relative w-20 h-20 rounded-full border-2 border-white flex items-center justify-center overflow-hidden bg-slate-900 shadow-xl">
                {/* SVG shading representing Oktas */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {cloudCoverOktas === 0 && <circle cx="50" cy="50" r="48" fill="none" />}
                  {cloudCoverOktas === 2 && (
                    <path d="M 50 50 L 50 0 A 50 50 0 0 1 100 50 Z" fill="#ffffff" />
                  )}
                  {cloudCoverOktas === 4 && (
                    <path d="M 50 0 A 50 50 0 0 1 50 100 Z" fill="#ffffff" />
                  )}
                  {cloudCoverOktas === 6 && (
                    <path d="M 50 0 A 50 50 0 1 1 0 50 L 50 50 Z" fill="#ffffff" />
                  )}
                  {cloudCoverOktas === 8 && (
                    <circle cx="50" cy="50" r="50" fill="#ffffff" />
                  )}
                  {/* Cross in center for 8 oktas or line */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#000" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Wind Barb Staff radiating from center */}
              <div
                className="absolute w-28 h-1 origin-left flex items-center justify-end"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${windDirectionDeg - 90}deg)`
                }}
              >
                <div className="w-24 h-0.5 bg-cyan-400 relative">
                  {/* Wind Feathers (speed indicator) */}
                  <div className="absolute right-0 -top-3 w-0.5 h-3 bg-cyan-400 -rotate-45" />
                  {windSpeedKnots >= 15 && (
                    <div className="absolute right-3 -top-3 w-0.5 h-3 bg-cyan-400 -rotate-45" />
                  )}
                </div>
              </div>

              {/* Top-Left: Temperature */}
              <div className="absolute top-4 left-6 text-center">
                <span className="text-2xl font-black text-amber-400">{stationTemp}°</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">Temp (°C)</span>
              </div>

              {/* Bottom-Left: Dew Point */}
              <div className="absolute bottom-4 left-6 text-center">
                <span className="text-2xl font-black text-cyan-400">{stationDewPoint}°</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">Dew Point</span>
              </div>

              {/* Top-Right: Barometric Pressure (last 3 digits) */}
              <div className="absolute top-4 right-6 text-center">
                <span className="text-2xl font-black text-emerald-400">{stationPressure % 1000}</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">{stationPressure} mb</span>
              </div>

              {/* Bottom-Right: Cloud Oktas */}
              <div className="absolute bottom-4 right-6 text-center">
                <span className="text-xl font-bold text-slate-300">{cloudCoverOktas}/8</span>
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">Oktas</span>
              </div>
            </div>

            <div className="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
              <span className="text-indigo-400 font-semibold">{language === 'ta' ? 'கணக்கிடப்பட்ட ஈரப்பதம்:' : 'Calculated Relative Humidity:'} </span>
              <span className="font-bold text-white">{estimatedRH}%</span>
            </div>
          </div>

          {/* Controls Sliders */}
          <div className="lg:col-span-7 space-y-4">
            {/* Cloud Cover Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {language === 'ta' ? 'மேகமூட்டம் (Oktas 0-8)' : 'Cloud Cover (Oktas 0-8)'}
                </span>
                <span className="font-bold text-cyan-400">{cloudCoverOktas} Oktas ({cloudCoverOktas === 0 ? 'Clear' : cloudCoverOktas === 8 ? 'Overcast' : 'Cloudy'})</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="2"
                value={cloudCoverOktas}
                onChange={(e) => setCloudCoverOktas(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Temperature Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {language === 'ta' ? 'வெப்பநிலை (°C)' : 'Surface Temperature (°C)'}
                </span>
                <span className="font-bold text-amber-400">{stationTemp}°C</span>
              </div>
              <input
                type="range"
                min="15"
                max="45"
                value={stationTemp}
                onChange={(e) => setStationTemp(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Dew Point Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {language === 'ta' ? 'பனிநிலைப் புள்ளி (°C)' : 'Dew Point Temperature (°C)'}
                </span>
                <span className="font-bold text-cyan-400">{stationDewPoint}°C</span>
              </div>
              <input
                type="range"
                min="10"
                max={stationTemp}
                value={stationDewPoint}
                onChange={(e) => setStationDewPoint(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Pressure Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">
                  {language === 'ta' ? 'காற்றழுத்தம் (மில்லிபார் mb)' : 'Barometric Pressure (mb)'}
                </span>
                <span className="font-bold text-emerald-400">{stationPressure} mb</span>
              </div>
              <input
                type="range"
                min="980"
                max="1025"
                value={stationPressure}
                onChange={(e) => setStationPressure(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Wind Direction and Speed */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{language === 'ta' ? 'காற்று வேகம்' : 'Wind Speed'}</span>
                  <span className="font-bold text-indigo-400">{windSpeedKnots} kts</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="5"
                  value={windSpeedKnots}
                  onChange={(e) => setWindSpeedKnots(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{language === 'ta' ? 'காற்று திசை' : 'Wind Direction'}</span>
                  <span className="font-bold text-indigo-400">{windDirectionDeg}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="45"
                  value={windDirectionDeg}
                  onChange={(e) => setWindDirectionDeg(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
