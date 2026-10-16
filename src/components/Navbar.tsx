import React, { useState } from 'react';
import { Language } from '../types/geography';
import { UI_STRINGS } from '../data/translations';
import { Compass, Globe, Volume2, VolumeX, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenDesignDoc: () => void;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenDesignDoc,
  activeSection,
  onSelectSection
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = UI_STRINGS[language];

  // Procedural Nature Soundscape using Web Audio API (Zero external mp3 files!)
  const toggleAmbientAudio = () => {
    if (!isAudioPlaying) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        // Generate gentle white noise / ambient wind buffer
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Bandpass filter to simulate gentle mountain wind and rain breeze
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);
        filter.Q.setValueAtTime(1.8, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        setAudioContext(ctx);
        setIsAudioPlaying(true);
      } catch (err) {
        console.error('Audio init failed:', err);
      }
    } else {
      if (audioContext) {
        audioContext.close();
      }
      setIsAudioPlaying(false);
      setAudioContext(null);
    }
  };

  const navItems = [
    { id: '3d-explorer', label: t.explore3D },
    { id: 'monsoon-lab', label: t.monsoonLab },
    { id: 'interactive-map', label: t.interactiveMap },
    { id: 'social-geography', label: t.socialGeo },
    { id: 'disaster-drills', label: t.disasterDrill },
    { id: 'landmarks-green', label: t.greenLandmarks },
    { id: 'quiz-glossary', label: t.quizGlossary }
  ];

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20 group-hover:scale-105 transition-all">
            <Compass className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black text-white tracking-tight leading-none group-hover:text-indigo-300 transition-colors">
                NambiLearn
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {language === 'ta' ? 'நம்பி' : 'PRO'}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
              {language === 'ta' ? 'நம்பி லேர்ன் • புவியியல் கல்வி தளம்' : 'School Geography Education'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Design Document Button */}
          <button
            onClick={onOpenDesignDoc}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
            title="View Conceptual Design Document"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.designDoc}</span>
          </button>

          {/* Ambient Breeze Sound Toggle */}
          <button
            onClick={toggleAmbientAudio}
            className={`p-2 rounded-xl text-xs border transition-colors cursor-pointer ${
              isAudioPlaying
                ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
            title={isAudioPlaying ? 'Mute Ambient Nature Sound' : 'Play Ambient Wind Soundscape'}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Seamless Language Switcher Pill */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            title="Toggle between English and தமிழ்"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.languageToggle}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 lg:hidden text-slate-300 hover:text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-white/10 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenDesignDoc();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-indigo-400 hover:bg-indigo-500/10 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>{t.designDoc}</span>
          </button>
        </div>
      )}
    </header>
  );
};
