import React from 'react';
import { Language } from '../types/geography';
import { X, FileText, CheckCircle2, Layout, Layers, Palette, Eye, Activity, Sparkles, BookOpen } from 'lucide-react';

interface DesignDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const DesignDocumentModal: React.FC<DesignDocumentModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl text-left space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'ta' ? 'கருத்தியல் வடிவமைப்பு ஆவணம் (Design Document)' : 'Conceptual Design Architecture Document'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'ta' ? 'அதிகாரப்பூர்வ பாடத்திட்ட கட்டமைப்பு மற்றும் தொழில்நுட்ப விவரக்குறிப்பு' : 'Official Curriculum Architecture, Motion Graphics & UX Blueprint'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Website Structure & Sitemap */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-indigo-400 flex items-center gap-2">
            <Layout className="w-4 h-4" />
            <span>1. Website Structure & Navigation Flow (தளம் கட்டமைப்பு)</span>
          </h4>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3 text-xs sm:text-sm text-slate-300">
            <p>
              The platform adopts an ergonomic, viewport-first hierarchical flow anchored by a persistent, non-intrusive navigation bar and collapsible docks:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-xs">
              <li><strong className="text-slate-200">Hero & Global 3D Spatial Canvas:</strong> Three.js WebGL globe with procedural topographic relief, atmospheric cloud layer, and collapsible bottom dock.</li>
              <li><strong className="text-slate-200">Syllabus Overview Deck:</strong> 7 card modules mapped to Tamil Nadu Higher Secondary Units (Physical Features, Transport & Geoinformatics, Social Geography, Calamities, Green Energy, Landmarks, Current Affairs).</li>
              <li><strong className="text-slate-200">Monsoon & Climate Laboratory:</strong> Dual-season dynamic wind circulation model (SW vs NE Monsoon) and live Station Model generator.</li>
              <li><strong className="text-slate-200">Interactive Vector Maps:</strong> Clickable multi-layer map of India & Tamil Nadu displaying rivers, mineral belts, biosphere reserves, and agricultural patterns.</li>
              <li><strong className="text-slate-200">Social Demography & Tribal Matrix:</strong> Age-sex population pyramid simulator (Expansive/Constrictive/Stationary) and indigenous tribe ethnography.</li>
              <li><strong className="text-slate-200">Disaster Risk Reduction Labs:</strong> Interactive safety drills (Earthquake Drop-Cover-Hold, Lightning 30/30 rule, Cyclone Vardah timeline).</li>
              <li><strong className="text-slate-200">Evaluation Quiz & SCERT Glossary:</strong> 10-question evaluation engine with instant scoring and searchable 50+ term textbook glossary.</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Content Presentation & Visual Rationale */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-cyan-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>2. Content Presentation & Pedagogical Accuracy</span>
          </h4>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-xs sm:text-sm text-slate-300">
            <p>
              All concepts strictly adhere to Tamil Nadu Textbook & Educational Services Corporation (SCERT) Class XI and XII Geography textbooks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                <span className="text-cyan-400 font-semibold block mb-1">Authentic Local Context:</span>
                Highlights Tamil Nadu landmarks like Hogenakkal plunge pools, Mahabalipuram Krishna's Butter Ball balance physics, Kamuthi 648MW solar park in Ramanathapuram, and Muppandal wind gaps in Kanyakumari.
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                <span className="text-cyan-400 font-semibold block mb-1">Indigenous Ethnography:</span>
                Detailed coverage of Nilgiri tribes (Toda, Kota, Irula, Badaga) and Pan-Indian communities (Bhil, Gond, Santhal, Sentinelese) with accurate socio-economic attributes.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Dual-Language Toggle Implementation */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>3. Language Toggle Implementation (இருமொழி கட்டமைப்பு)</span>
          </h4>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-xs sm:text-sm text-slate-300">
            <p>
              Language switching is instantaneous and reactive throughout all state layers:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
              <li>A high-contrast pill button in the top navigation toggles between <code className="text-emerald-400 font-mono">English</code> and <code className="text-emerald-400 font-mono">தமிழ்</code>.</li>
              <li>Typography automatically loads Google Font <code className="text-white font-mono">Noto Sans Tamil</code> with optimal baseline alignment and line heights when Tamil is active.</li>
              <li>Every diagram label, interactive axis, textbook formula, and quiz option is bound to localized keys in <code className="text-white font-mono">src/data/translations.ts</code> and <code className="text-white font-mono">src/data/geographyData.ts</code>.</li>
            </ul>
          </div>
        </div>

        {/* Section 4: Design Elements & Apple Aesthetic Mood Board */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-amber-400 flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span>4. Design Elements & Apple-Inspired Minimalist Palette</span>
          </h4>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/10 text-center">
                <div className="w-6 h-6 rounded-full bg-[#0b0f19] border border-white/20 mx-auto mb-1" />
                <span className="font-mono text-[10px] text-slate-300">Deep Space #0b0f19</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-white/20 mx-auto mb-1" />
                <span className="font-mono text-[10px] text-slate-300">Slate Dark #0f172a</span>
              </div>
              <div className="p-3 rounded-xl bg-indigo-600/30 border border-indigo-500/30 text-center">
                <div className="w-6 h-6 rounded-full bg-indigo-500 mx-auto mb-1" />
                <span className="font-mono text-[10px] text-slate-300">Accent Indigo #6366f1</span>
              </div>
              <div className="p-3 rounded-xl bg-cyan-600/30 border border-cyan-500/30 text-center">
                <div className="w-6 h-6 rounded-full bg-cyan-400 mx-auto mb-1" />
                <span className="font-mono text-[10px] text-slate-300">Fluid Cyan #06b6d4</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Zero-pill discipline, subtle 1px border glows, frosted glass cards (backdrop-blur-md on HUD overlays), and clean typography without distracting animations.
            </p>
          </div>
        </div>

        {/* Section 5: Animation & Graphics Strategy */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-rose-400 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span>5. Motion Graphics & Three.js 3D Strategy</span>
          </h4>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-xs sm:text-sm text-slate-300">
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-xs">
              <li><strong className="text-slate-200">Three.js PBR Globe:</strong> Procedural 2048x1024 canvas texture with relief gradients, separate rotating cloud shell, and 3D beacon pins. Damped camera movements for smooth 60fps transitions.</li>
              <li><strong className="text-slate-200">Monsoon Reversal Particle Flow:</strong> Animated vector particles illustrating seasonal isobar gradients and wind deflection via Coriolis force.</li>
              <li><strong className="text-slate-200">Orographic Cross-Section:</strong> Real-time animated condensation cloud evolution and lapse-rate rain drop physics.</li>
              <li><strong className="text-slate-200">Zero-404 Discipline:</strong> 100% vector SVGs and procedural WebGL geometry—no broken external image links.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
