import React, { useState } from 'react';
import { Language, TribeInfo } from '../types/geography';
import { TRIBES_DATA, LITERACY_TAMILNADU_DISTRICTS } from '../data/geographyData';
import { Users, BarChart3, GraduationCap, ShieldCheck, Search, Filter } from 'lucide-react';

interface SocialGeographyMatrixProps {
  language: Language;
}

export const SocialGeographyMatrix: React.FC<SocialGeographyMatrixProps> = ({ language }) => {
  const [selectedPyramid, setSelectedPyramid] = useState<'expansive' | 'constrictive' | 'stationary'>('expansive');
  const [selectedTribeCategory, setSelectedTribeCategory] = useState<'all' | 'tamilnadu' | 'india'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered tribes
  const filteredTribes = TRIBES_DATA.filter((tribe) => {
    const matchesCat = selectedTribeCategory === 'all' || tribe.category === selectedTribeCategory;
    const matchesSearch = 
      tribe.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tribe.name.ta.includes(searchQuery) ||
      tribe.region.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full space-y-12 py-6 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wider uppercase">
          <Users className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 1 & 5 • சமூகப் புவியியல் மற்றும் மானுடப் பண்பாடு' : 'Unit 1 & 5 • Social Geography & Demography'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {language === 'ta' ? 'மக்கள் தொகை & பழங்குடியின சமூக மேட்ரிக்ஸ்' : 'Population Dynamics & Tribal Heritage'}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {language === 'ta'
            ? 'வயது-பாலின பிரமிடுகள், தமிழ்நாடு மாவட்ட எழுத்தறிவு நிலவரங்கள் மற்றும் பழங்குடிகளின் பண்பாட்டுத் தொன்மை.'
            : 'Explore age-sex population pyramids, Tamil Nadu district literacy disparities, and indigenous tribal ethnography.'}
        </p>
      </div>

      {/* Part 1: Interactive Age-Sex Population Pyramid Simulator */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-violet-400" />
              <span>{language === 'ta' ? 'வயது - பாலின பிரமிடு மாதிரிகள் (Age-Sex Pyramids)' : 'Age-Sex Population Pyramids'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ta' 
                ? 'மக்கள் தொகையின் கட்டமைப்பு, பிறப்பு வீதம் மற்றும் சார்ந்து வாழ்வோர் விகிதத்தை (Dependency Ratio) தீர்மானிக்கிறது.'
                : 'Visualizing fertility rates, life expectancy, and dependency ratios across three classical economic stages.'}
            </p>
          </div>

          {/* Pyramid Selector Pills */}
          <div className="flex items-center p-1 bg-black/40 rounded-2xl border border-white/10">
            <button
              onClick={() => setSelectedPyramid('expansive')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPyramid === 'expansive' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'ta' ? 'விரிவடையும் (Expansive)' : 'Expansive (India/BD)'}
            </button>
            <button
              onClick={() => setSelectedPyramid('constrictive')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPyramid === 'constrictive' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'ta' ? 'சுருங்கும் (Constrictive)' : 'Constrictive (USA)'}
            </button>
            <button
              onClick={() => setSelectedPyramid('stationary')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedPyramid === 'stationary' ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'ta' ? 'நிலையான (Stationary)' : 'Stationary (Austria)'}
            </button>
          </div>
        </div>

        {/* Pyramid Graphic + Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* SVG Animated Pyramid Graphic */}
          <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl bg-slate-950 border border-white/10 p-4 flex flex-col justify-end">
            <div className="flex justify-between text-xs text-slate-400 mb-2 border-b border-white/5 pb-1">
              <span className="text-cyan-400 font-semibold">♂ Male (ஆண்)</span>
              <span className="font-mono text-slate-300">Age Groups (வயதுப் பிரிவுகள்)</span>
              <span className="text-rose-400 font-semibold">♀ Female (பெண்)</span>
            </div>

            {/* Simulated Age Bins (80+, 60-79, 40-59, 20-39, 0-19) */}
            <div className="flex flex-col gap-2.5">
              {[
                { label: '80+ Yrs', widthExp: 15, widthCon: 35, widthSta: 30 },
                { label: '60–79', widthExp: 25, widthCon: 60, widthSta: 50 },
                { label: '40–59', widthExp: 45, widthCon: 75, widthSta: 65 },
                { label: '20–39', widthExp: 75, widthCon: 65, widthSta: 70 },
                { label: '0–19 (Youth)', widthExp: 95, widthCon: 40, widthSta: 68 }
              ].map((tier, idx) => {
                const w =
                  selectedPyramid === 'expansive'
                    ? tier.widthExp
                    : selectedPyramid === 'constrictive'
                    ? tier.widthCon
                    : tier.widthSta;

                return (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    {/* Male Bar (Right-aligned to center) */}
                    <div className="flex-1 flex justify-end">
                      <div
                        className="h-6 rounded-l-md bg-gradient-to-l from-cyan-500 to-cyan-700 transition-all duration-500 flex items-center justify-start pl-2 text-[10px] text-white font-mono"
                        style={{ width: `${w}%` }}
                      >
                        {w}%
                      </div>
                    </div>

                    {/* Age Label */}
                    <span className="w-20 text-center font-mono text-[10px] text-slate-400 whitespace-nowrap">
                      {tier.label}
                    </span>

                    {/* Female Bar (Left-aligned from center) */}
                    <div className="flex-1 flex justify-start">
                      <div
                        className="h-6 rounded-r-md bg-gradient-to-r from-rose-500 to-rose-700 transition-all duration-500 flex items-center justify-end pr-2 text-[10px] text-white font-mono"
                        style={{ width: `${w}%` }}
                      >
                        {w}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Analysis description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-wider text-violet-400 font-bold">
                {selectedPyramid === 'expansive' && (language === 'ta' ? 'விரிவடையும் பிரமிடு (எ.கா: இந்தியா, வங்கதேசம்)' : 'Expansive Pyramid (e.g., India, Bangladesh)')}
                {selectedPyramid === 'constrictive' && (language === 'ta' ? 'சுருங்கும் பிரமிடு (எ.கா: அமெரிக்கா)' : 'Constrictive Pyramid (e.g., United States)')}
                {selectedPyramid === 'stationary' && (language === 'ta' ? 'நிலையான பிரமிடு (எ.கா: ஆஸ்திரியா)' : 'Stationary Pyramid (e.g., Austria)')}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPyramid === 'expansive' && (
                  language === 'ta'
                    ? 'பரந்த அடித்தளமும் கூர்மையான உச்சியும் கொண்டது. அதிக பிறப்பு விகிதமும், குறைந்த ஆயுட்காலமும் கொண்ட வளரும் நாடுகளின் பண்பு. இளைஞர் தொகை மிக அதிகம்.'
                    : 'Broad base and tapering top. Depicts high fertility rates with a large percentage of youth in younger age cohorts. Characteristic of emerging economies.'
                )}
                {selectedPyramid === 'constrictive' && (
                  language === 'ta'
                    ? 'அடித்தளம் குறுகி சுருங்கி காணப்படும். பிறப்பு விகிதம் குறைந்து முதியோர் சதவீதம் அதிகமாக உள்ள முன்னேறிய நாடுகளின் மாதிரி.'
                    : 'Constricted at bottom due to declining birth rates. Each successive younger age group is smaller, resulting in an aging workforce.'
                )}
                {selectedPyramid === 'stationary' && (
                  language === 'ta'
                    ? 'அனைத்து வயதுப் பிரிவுகளிலும் சமச்சீரான மக்கள் பரவல். நிலையான பிறப்பு மற்றும் இறப்பு விகிதங்களால் மக்கள் தொகை சமநிலையில் இருக்கும்.'
                    : 'Somewhat equal proportion across age groups. Stable population with minimal growth or decrease over decades.'
                )}
              </p>
            </div>

            {/* Dependency Ratio Formula Card */}
            <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-slate-300">
              <span className="font-semibold text-violet-300 block mb-1">
                {language === 'ta' ? 'சார்ந்து வாழ்வோர் விகித சூத்திரம் (Dependency Ratio):' : 'Dependency Ratio Formula (Unit 1):'}
              </span>
              <code className="text-emerald-400 font-mono text-[11px] block bg-black/40 p-2 rounded-lg">
                Dependency Ratio = [(Pop &lt; 15 + Pop &gt; 65) / (Working Pop 15-64)] × 100
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Tamil Nadu District Literacy Rate Ranking (SCERT Table 11.2 & 11.3) */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>{language === 'ta' ? 'தமிழ்நாடு மாவட்ட வாரியான எழுத்தறிவு விகிதம் (2011 கணக்கெடுப்பு)' : 'Tamil Nadu District Literacy Rate Rankings (2011 Census)'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ta'
              ? 'பாடநூல் அட்டவணை 11.2 & 11.3 படி, கன்னியாகுமரி முதலிடத்திலும் (91.75%), தருமபுரி (68.54%) கடைசியிடத்திலும் உள்ளன.'
              : 'Direct from Textbook Tables 11.2 & 11.3: Kanyakumari tops at 91.75%, while Dharmapuri is at 68.54%.'}
          </p>
        </div>

        {/* Visual Bar Chart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {LITERACY_TAMILNADU_DISTRICTS.map((item) => {
            const isTop = item.rank <= 3;
            const isLowest = item.rate < 70;
            return (
              <div
                key={item.rank}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isTop ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    #{item.rank}
                  </span>
                  <div>
                    <h5 className="text-sm font-semibold text-white">{item.district[language]}</h5>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.rate >= 85 ? 'Very High (>85%)' : item.rate >= 80 ? 'High (80-85%)' : item.rate >= 70 ? 'Medium (70-80%)' : 'Low (<70%)'}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-base font-bold font-mono ${
                    isTop ? 'text-emerald-400' : isLowest ? 'text-rose-400' : 'text-slate-200'
                  }`}>
                    {item.rate}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 3: Indigenous Tribes & Racial Groups */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>{language === 'ta' ? 'பாரம்பரிய பழங்குடியினர் பண்பாட்டு தொகுப்பு' : 'Indigenous Tribal Ethnography & Culture'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ta'
                ? 'தமிழ்நாடு (தோடர், இருளர், கோத்தர், படகர்) மற்றும் இந்தியப் பழங்குடிகளின் தனித்துவமான பண்புகள்.'
                : 'Documented field ethnography of Nilgiri tribes and Pan-Indian communities from Unit 5.'}
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'ta' ? 'தேடுக (எ.கா: தோடர்)...' : 'Search tribes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-28 sm:w-36 text-xs"
              />
            </div>

            <div className="flex items-center p-1 bg-black/40 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setSelectedTribeCategory('all')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                  selectedTribeCategory === 'all' ? 'bg-amber-600 text-white' : 'text-slate-400'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTribeCategory('tamilnadu')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                  selectedTribeCategory === 'tamilnadu' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                Tamil Nadu
              </button>
              <button
                onClick={() => setSelectedTribeCategory('india')}
                className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                  selectedTribeCategory === 'india' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                India
              </button>
            </div>
          </div>
        </div>

        {/* Tribe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTribes.map((tribe) => (
            <div
              key={tribe.id}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
                    {tribe.category === 'tamilnadu' ? 'Tamil Nadu' : 'India'}
                  </span>
                  <span className="text-xs text-slate-400">{tribe.region[language]}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{tribe.name[language]}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{tribe.description[language]}</p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                <span className="text-amber-400 font-semibold block mb-0.5">
                  {language === 'ta' ? 'தனித்துவ அடையாளம்:' : 'Distinctive Identity:'}
                </span>
                <span>{tribe.distinctFeature[language]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
