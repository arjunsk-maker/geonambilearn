import React, { useState } from 'react';
import { Language, LandmarkInfo, GreenEnergyInfo } from '../types/geography';
import { LANDMARKS_DATA, GREEN_ENERGY_DATA } from '../data/geographyData';
import { Compass, Sun, Wind, Flame, Waves, Droplet, Sparkles, MapPin } from 'lucide-react';

interface LandmarksAndGreenEnergyProps {
  language: Language;
}

export const LandmarksAndGreenEnergy: React.FC<LandmarksAndGreenEnergyProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'landmarks' | 'greenEnergy' | 'rwh'>('landmarks');
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkInfo>(LANDMARKS_DATA[0]);
  const [selectedEnergy, setSelectedEnergy] = useState<GreenEnergyInfo>(GREEN_ENERGY_DATA[0]);

  return (
    <div className="w-full space-y-10 py-6 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 3 & 7 • நிலத்தோற்றங்கள் & புதுப்பிக்கத்தக்க ஆற்றல்' : 'Unit 3 & 7 • Landmarks & Renewable Energy Transition'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {language === 'ta' ? 'புவியியல் அடையாளங்கள் & பசுமை ஆற்றல் புரட்சி' : 'Geographical Landmarks & Green Energy'}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {language === 'ta'
            ? 'இந்தியாவின் தனித்துவமான இயற்கை நிலத்தோற்றங்கள் மற்றும் தமிழ்நாட்டின் உலக சாதனை சூரிய/காற்றாலை மின் திட்டங்கள்.'
            : 'Explore geological wonders and Tamil Nadu’s world-class renewable solar and wind energy leadership.'}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('landmarks')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'landmarks' ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{language === 'ta' ? 'புவியியல் அடையாளங்கள் (Landmarks)' : 'Geological Landmarks'}</span>
          </button>
          <button
            onClick={() => setActiveTab('greenEnergy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'greenEnergy' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>{language === 'ta' ? 'சூரிய & காற்றாலை பூங்காக்கள்' : 'Solar & Wind Superclusters'}</span>
          </button>
          <button
            onClick={() => setActiveTab('rwh')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'rwh' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Droplet className="w-4 h-4" />
            <span>{language === 'ta' ? 'மழைநீர் சேகரிப்பு (RWH)' : 'Rainwater Harvesting (TN RWH)'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: GEOGRAPHICAL LANDMARKS */}
      {activeTab === 'landmarks' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LANDMARKS_DATA.map((lm) => {
              const isSelected = selectedLandmark.id === lm.id;
              return (
                <div
                  key={lm.id}
                  onClick={() => setSelectedLandmark(lm)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-900 via-[#1a1429] to-slate-950 border-rose-500/50 shadow-2xl scale-[1.02]'
                      : 'glass-panel hover:border-white/20'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/10 text-rose-300">
                        {lm.type.replace('_', ' ')}
                      </span>
                      <span className="text-xs text-slate-400">{lm.location[language]}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{lm.name[language]}</h4>
                    {lm.tamilName && (
                      <span className="text-xs text-rose-300 font-medium block">{lm.tamilName}</span>
                    )}
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">{lm.significance[language]}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                    <span className="text-amber-400 font-semibold block mb-0.5">
                      {language === 'ta' ? 'பாடநூல் உண்மை:' : 'Textbook Fact:'}
                    </span>
                    <span>{lm.keyFact[language]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: GREEN ENERGY SUPERCLUSTERS */}
      {activeTab === 'greenEnergy' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GREEN_ENERGY_DATA.map((ge) => (
              <div
                key={ge.id}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {ge.type === 'solar' && <Sun className="w-5 h-5 text-amber-400" />}
                    {ge.type === 'wind' && <Wind className="w-5 h-5 text-emerald-400" />}
                    {ge.type === 'geothermal' && <Flame className="w-5 h-5 text-rose-400" />}
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                      {ge.type} Power
                    </span>
                  </div>
                  <span className="text-sm font-bold font-mono text-white bg-white/10 px-3 py-1 rounded-xl">
                    {ge.capacity}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white">{ge.name[language]}</h4>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{ge.location[language]}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                  {ge.highlights[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: RAINWATER HARVESTING & WATERSHED */}
      {activeTab === 'rwh' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Droplet className="w-6 h-6 text-cyan-400" />
              <span>{language === 'ta' ? 'தமிழ்நாடு கட்டாய மழைநீர் சேகரிப்பு திட்டம் (RWH)' : 'Tamil Nadu Mandatory Rain Water Harvesting (RWH) Model'}</span>
            </h3>
            <p className="text-sm text-slate-300">
              {language === 'ta'
                ? '2001-ல் தமிழ்நாட்டில் நடைமுறைப்படுத்தப்பட்ட முன்னோடித் திட்டம். அனைத்துக் கட்டடங்களிலும் மழைநீர் சேகரிப்பு கட்டாயமாக்கப்பட்டு நிலத்தடி நீர்மட்டம் கணிசமாக உயர்த்தப்பட்டது.'
                : 'Pioneered in Tamil Nadu in 2001 as the first mandatory rooftop rainwater harvesting scheme in India, reviving underground water tables across Chennai and rural districts.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">1. Recharge Pits & Aquifers</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'கூழாங்கற்கள், மணல் மற்றும் துளையிடப்பட்ட குழாய்கள் மூலம் கூரை மழைநீர் நேரடியாக நிலத்தடி பாறை அடுக்குகளுக்குள் (Aquifers) செலுத்தப்படுகிறது.'
                  : 'Recharge pits filled with coarse sand, gravel, and perforated shafts inject filtered rooftop water directly into depleted unconfined aquifers.'}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">2. Preventing Saltwater Intrusion</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'கடற்கரைப் பகுதிகளில் அதிகப்படியான நிலத்தடி நீர் உறிஞ்சப்படுவதால் ஏற்படும் கடல்நீர் உட்புகுதலை (Saltwater intrusion) மழைநீர் சேகரிப்பு தடுக்கிறது.'
                  : 'Replenishing coastal freshwater heads along the Coromandel coast prevents saline ocean water from entering freshwater drinking wells.'}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">3. Watershed Catchment Check Dams</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'சிற்றோடைகளின் குறுக்கே தடுப்பணைகள் (Check dams) கட்டி, மழைக்கால வெள்ள நீரைத் தேக்கி மண் அரிப்பைத் தடுத்து நீர் மட்டத்தை பெருக்குதல்.'
                  : 'Constructing masonry and loose boulder check dams across micro-watershed gullies slows surface runoff, mitigating flash floods and soil erosion.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
