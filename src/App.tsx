/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types/geography';
import { UI_STRINGS } from './data/translations';
import { Navbar } from './components/Navbar';
import { ThreeDExplorer } from './components/ThreeDExplorer';
import { MonsoonLab } from './components/MonsoonLab';
import { InteractiveMap } from './components/InteractiveMap';
import { SocialGeographyMatrix } from './components/SocialGeographyMatrix';
import { DisasterDrillLab } from './components/DisasterDrillLab';
import { LandmarksAndGreenEnergy } from './components/LandmarksAndGreenEnergy';
import { CurrentAffairsSection } from './components/CurrentAffairsSection';
import { QuizAndGlossary } from './components/QuizAndGlossary';
import { DesignDocumentModal } from './components/DesignDocumentModal';
import { 
  Globe, 
  Wind, 
  MapPin, 
  Users, 
  ShieldAlert, 
  Sparkles, 
  Radio, 
  Compass, 
  BookOpen, 
  ArrowRight,
  Layers,
  Award
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('3d-explorer');
  const [isDesignDocOpen, setIsDesignDocOpen] = useState<boolean>(false);

  const t = UI_STRINGS[language];

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ta' : 'en'));
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Apple-style sticky top Navbar */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenDesignDoc={() => setIsDesignDocOpen(true)}
        activeSection={activeSection}
        onSelectSection={(id) => setActiveSection(id)}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* HERO SECTION */}
        <section className="relative text-center pt-8 pb-12 space-y-6">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Curriculum Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-indigo-300 font-semibold tracking-wide shadow-sm">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.curriculumBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            {t.heroHeadline}
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('3d-explorer')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{t.exploreNow}</span>
            </button>
            <button
              onClick={() => scrollTo('monsoon-lab')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Wind className="w-4 h-4 text-cyan-400" />
              <span>{t.startLab}</span>
            </button>
            <button
              onClick={() => setIsDesignDocOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>{t.designDoc}</span>
            </button>
          </div>

          {/* Feature Quick Ribbon */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Three.js 3D PBR WebGL</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Dual English & தமிழ் Support</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>TN SCERT Class XI & XII Syllabus</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Live Disaster Safety Drills</span>
            </span>
          </div>
        </section>

        {/* 1. THREE.JS 3D SPATIAL EXPLORER */}
        <section id="3d-explorer" className="scroll-mt-24 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
                3D
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {language === 'ta' ? 'முப்பரிமாண பூகோள ஆய்வு (3D Earth Explorer)' : 'Three.js 3D Spatial Earth Explorer'}
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Procedural Relief • Wind Currents • Landmarks
            </span>
          </div>
          <ThreeDExplorer language={language} />
        </section>

        {/* 2. ATMOSPHERIC PHYSICS & MONSOON LAB */}
        <section id="monsoon-lab" className="scroll-mt-24">
          <MonsoonLab language={language} />
        </section>

        {/* 3. INTERACTIVE MAP: RIVERS, MINERALS, BIOSPHERES, AGRICULTURE */}
        <section id="interactive-map" className="scroll-mt-24">
          <InteractiveMap language={language} />
        </section>

        {/* 4. SOCIAL GEOGRAPHY, AGE-SEX PYRAMIDS & TRIBAL MATRIX */}
        <section id="social-geography" className="scroll-mt-24">
          <SocialGeographyMatrix language={language} />
        </section>

        {/* 5. NATURAL CALAMITIES & DISASTER MANAGEMENT LAB */}
        <section id="disaster-drills" className="scroll-mt-24">
          <DisasterDrillLab language={language} />
        </section>

        {/* 6. ICONIC LANDMARKS & GREEN ENERGY SUPERCLUSTERS */}
        <section id="landmarks-green" className="scroll-mt-24">
          <LandmarksAndGreenEnergy language={language} />
        </section>

        {/* 7. CURRENT AFFAIRS & GEOINFORMATICS */}
        <section id="current-affairs" className="scroll-mt-24">
          <CurrentAffairsSection language={language} />
        </section>

        {/* 8. QUIZ & OFFICIAL BILINGUAL GLOSSARY */}
        <section id="quiz-glossary" className="scroll-mt-24">
          <QuizAndGlossary language={language} />
        </section>

      </main>

      {/* Conceptual Design Document Modal */}
      <DesignDocumentModal
        isOpen={isDesignDocOpen}
        onClose={() => setIsDesignDocOpen(false)}
        language={language}
      />

      {/* Minimalist Apple-Style Footer */}
      <footer className="w-full border-t border-white/10 bg-slate-950 py-12 px-4 sm:px-6 mt-20 text-center space-y-4">
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 ring-1 ring-white/15">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-base font-extrabold text-white tracking-tight">NambiLearn</span>
          <span className="text-[11px] text-indigo-400 font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 font-semibold">• 2026</span>
        </div>
        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          {t.footer.rights}
        </p>
        <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
          {t.footer.syllabusCredit}
        </p>
      </footer>
    </div>
  );
}
