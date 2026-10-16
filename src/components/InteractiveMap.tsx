import React, { useState } from 'react';
import { Language, RiverInfo, MineralInfo } from '../types/geography';
import { RIVERS_DATA, MINERALS_DATA } from '../data/geographyData';
import { Map, Droplet, Gem, Trees, Sprout, Info, ChevronRight, CheckCircle2 } from 'lucide-react';

interface InteractiveMapProps {
  language: Language;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'rivers' | 'minerals' | 'biospheres' | 'agriculture'>('rivers');
  const [selectedRiver, setSelectedRiver] = useState<RiverInfo>(RIVERS_DATA[0]);
  const [selectedMineral, setSelectedMineral] = useState<MineralInfo>(MINERALS_DATA[0]);

  // Biospheres data from textbook Class XI Unit 7
  const biospheres = [
    {
      id: 'nilgiris',
      name: { en: 'Nilgiri Biosphere Reserve', ta: 'நீலகிரி உயிர்க்கோளக் காப்பகம்' },
      state: { en: 'Tamil Nadu, Kerala, Karnataka', ta: 'தமிழ்நாடு, கேரளா, கர்நாடகா' },
      areaSqKm: 5520,
      highlights: {
        en: 'First biosphere reserve in India (1986). Encompasses Mudumalai, Bandipur, Silent Valley, and Nagarhole. Habitat of endangered Lion-tailed Macaque and Nilgiri Tahr.',
        ta: 'இந்தியாவின் முதல் உயிர்க்கோளக் காப்பகம் (1986). முதுமலை, பந்திப்பூர், அமைதிப் பள்ளத்தாக்கு ஆகியவற்றை உள்ளடக்கியது; சிங்கவால் குரங்கு மற்றும் வரையாடுகளின் தாயகம்.'
      },
      coords: { x: 195, y: 320 }
    },
    {
      id: 'gulf_of_mannar',
      name: { en: 'Gulf of Mannar Marine Biosphere', ta: 'மன்னார் வளைகுடா கடல்சார் உயிர்க்கோளக் காப்பகம்' },
      state: { en: 'Tamil Nadu Coast', ta: 'தமிழ்நாடு கடற்கரை' },
      areaSqKm: 10500,
      highlights: {
        en: 'Southeast coast of Tamil Nadu. Globally renowned for marine biodiversity, 21 islands, coral reefs, sea turtles, and endangered Dugong (sea cow).',
        ta: 'தென்கிழக்கு தமிழ்நாடு கடற்கரை; 21 தீவுகள், பவளப்பாறைகள், கடல் ஆமைகள் மற்றும் கடல் பசு (Dugong) ஆகியவற்றின் புகலிடம்.'
      },
      coords: { x: 230, y: 360 }
    },
    {
      id: 'agasthyamalai',
      name: { en: 'Agasthyamalai Biosphere Reserve', ta: 'அகஸ்தியர்மலை உயிர்க்கோளக் காப்பகம்' },
      state: { en: 'Tamil Nadu & Kerala (Southern Western Ghats)', ta: 'தமிழ்நாடு & கேரளா (தெற்கு மேற்கு தொடர்ச்சி மலை)' },
      areaSqKm: 3500,
      highlights: {
        en: 'Southernmost tip of Western Ghats. Houses 2,000+ species of medicinal plants and the ancient Kani tribal community.',
        ta: 'மேற்கு தொடர்ச்சி மலையின் தென்கோடி முனை; 2,000-க்கும் மேற்பட்ட மருத்துவ மூலிகைகள் மற்றும் காணி பழங்குடிகள் வாழும் பகுதி.'
      },
      coords: { x: 200, y: 355 }
    },
    {
      id: 'sundarbans',
      name: { en: 'Sundarbans Biosphere Reserve', ta: 'சுந்தரவன உயிர்க்கோளக் காப்பகம்' },
      state: { en: 'West Bengal (Ganga Delta)', ta: 'மேற்கு வங்கம் (கங்கை டெல்டா)' },
      areaSqKm: 9630,
      highlights: {
        en: 'World’s largest mangrove forest delta. Home to the Royal Bengal Tiger and Saltwater Crocodile. UNESCO World Heritage Site.',
        ta: 'உலகின் மிகப்பெரிய சதுப்புநில டெல்டா காடு; ராயல் பெங்கால் புலி மற்றும் உப்புநீர் முதலைகளின் வாழ்விடம்.'
      },
      coords: { x: 330, y: 190 }
    }
  ];

  const [selectedBio, setSelectedBio] = useState(biospheres[0]);

  // Agricultural patterns from textbook Class XII Unit 4
  const agriculturePatterns = [
    {
      id: 'shifting',
      name: { en: 'Shifting / Primitive Subsistence (Jhuming)', ta: 'இடப்பெயர்வு / பழமையான வேளாண்மை (ஜூமிங்)' },
      regions: { en: 'North-Eastern States (Assam, Meghalaya, Nagaland)', ta: 'வடகிழக்கு மாநிலங்கள் (அசாம், மேகாலயா, நாகாலாந்து)' },
      crop: { en: 'Rice, Maize, Millets, Vegetables', ta: 'நெல், மக்காச்சோளம், தினை, காய்கறிகள்' },
      desc: {
        en: 'Slash-and-burn farming where patches of forest are cleared, cultivated for a few years until fertility declines, and then abandoned.',
        ta: 'காடுகளை வெட்டி எரித்து, சில ஆண்டுகள் பயிரிட்டு நில வளம் குறையும்போது மற்றொரு இடத்திற்கு மாறும் முறை.'
      }
    },
    {
      id: 'intensive',
      name: { en: 'Intensive Subsistence Farming', ta: 'தீவிர தன்னிறைவு வேளாண்மை' },
      regions: { en: 'Ganga-Brahmaputra Plains, Cauvery Delta, Coastal Plains', ta: 'கங்கை-பிரம்மபுத்திரா சமவெளிகள், காவிரி டெல்டா, கடற்கரை சமவெளிகள்' },
      crop: { en: 'Paddy (Rice), Wheat, Pulses', ta: 'நெல், கோதுமை, பருப்பு வகைகள்' },
      desc: {
        en: 'High labor inputs per unit area with multiple cropping seasons per year (Kuruvai, Thaladi, Samba in Tamil Nadu).',
        ta: 'குறைந்த நிலப்பரப்பில் அதிக உழைப்பு மற்றும் ஆண்டுக்கு இரண்டு அல்லது மூன்று போகம் சாகுபடி (குறுவை, தாளடி, சம்பா).'
      }
    },
    {
      id: 'plantation',
      name: { en: 'Plantation Agriculture', ta: 'தோட்டப் பயிர் வேளாண்மை' },
      regions: { en: 'Nilgiris, Anaimalai, Assam hills, Kodagu', ta: 'நீலகிரி, ஆனைமலை, அசாம் குன்றுகள், குடகு' },
      crop: { en: 'Tea, Coffee, Rubber, Spices', ta: 'தேயிலை, காபி, ரப்பர், வாசனைப் பொருட்கள்' },
      desc: {
        en: 'Large estate single-crop agriculture requiring heavy capital, processing factories on-site, and export-oriented logistics.',
        ta: 'அதிக மூலதனத்துடன் ஒரு குறிப்பிட்ட பயிரை மட்டும் பெரிய தோட்டங்களில் பயிரிட்டு ஏற்றுமதி செய்யும் முறை.'
      }
    }
  ];

  const [selectedAgri, setSelectedAgri] = useState(agriculturePatterns[0]);

  return (
    <div className="w-full space-y-8 py-6">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
          <Map className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 2 & 3 • இந்திய புவியியல் நில வரைபடங்கள்' : 'Unit 2 & 3 • India Geographic Vector Maps'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {language === 'ta' ? 'ஊடாடும் இந்திய இயற்கை & வள வரைபடம்' : 'Interactive Map of Indian Features & Resources'}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {language === 'ta'
            ? 'முக்கிய நதிகள், கனிமப் படுகைகள், உயிர்க்கோளக் காப்பகங்கள் மற்றும் வேளாண் மண்டலங்களை ஆராயுங்கள்.'
            : 'Explore major river networks, mineral belts, biosphere reserves, and agricultural classification.'}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('rivers')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'rivers' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Droplet className="w-4 h-4" />
            <span>{language === 'ta' ? 'ஆறுகள் (Rivers)' : 'Rivers in India'}</span>
          </button>
          <button
            onClick={() => setActiveTab('minerals')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'minerals' ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>{language === 'ta' ? 'கனிமங்கள் (Minerals)' : 'Minerals & Soils'}</span>
          </button>
          <button
            onClick={() => setActiveTab('biospheres')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'biospheres' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trees className="w-4 h-4" />
            <span>{language === 'ta' ? 'உயிர்க்கோளங்கள் (Biospheres)' : 'Biosphere Reserves'}</span>
          </button>
          <button
            onClick={() => setActiveTab('agriculture')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'agriculture' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span>{language === 'ta' ? 'வேளாண்மை (Agriculture)' : 'Agriculture Patterns'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SVG Map of India with Interactive Points & Paths */}
        <div className="lg:col-span-7 glass-panel p-4 sm:p-6 rounded-3xl relative h-[420px] sm:h-[500px] flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-white/10 overflow-hidden">
          <svg viewBox="0 0 450 480" className="w-full h-full">
            {/* Base Outlines of India */}
            <path
              d="M 120 40 L 150 20 L 180 50 L 220 80 L 250 120 L 330 110 L 380 130 L 360 170 L 320 180 L 310 230 L 260 360 L 210 440 L 190 350 L 150 270 L 90 230 L 90 140 L 120 110 Z"
              fill="#131e32"
              stroke="#334155"
              strokeWidth="2"
            />

            {/* Deccan Plateau region shading */}
            <polygon points="160,250 260,260 230,380 180,350" fill="#1e293b" opacity="0.6" />

            {/* TAB 1: RIVERS */}
            {activeTab === 'rivers' && (
              <g>
                {/* Ganga */}
                <path
                  d="M 160 90 Q 240 140 330 190"
                  fill="none"
                  stroke={selectedRiver.id === 'ganga' ? '#38bdf8' : '#0284c7'}
                  strokeWidth={selectedRiver.id === 'ganga' ? '5' : '3'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'ganga')!)}
                />
                <circle cx="330" cy="190" r="5" fill="#38bdf8" />

                {/* Brahmaputra */}
                <path
                  d="M 280 80 Q 360 90 380 130 Q 360 160 330 190"
                  fill="none"
                  stroke={selectedRiver.id === 'brahmaputra' ? '#06b6d4' : '#0891b2'}
                  strokeWidth={selectedRiver.id === 'brahmaputra' ? '5' : '3'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'brahmaputra')!)}
                />

                {/* Narmada (Westward flowing) */}
                <path
                  d="M 230 215 Q 180 220 130 225"
                  fill="none"
                  stroke={selectedRiver.id === 'narmada' ? '#f59e0b' : '#d97706'}
                  strokeWidth={selectedRiver.id === 'narmada' ? '5' : '3'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'narmada')!)}
                />
                <circle cx="130" cy="225" r="5" fill="#f59e0b" />

                {/* Godavari */}
                <path
                  d="M 150 250 Q 210 260 270 270"
                  fill="none"
                  stroke={selectedRiver.id === 'godavari' ? '#60a5fa' : '#3b82f6'}
                  strokeWidth={selectedRiver.id === 'godavari' ? '5' : '3'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'godavari')!)}
                />

                {/* Krishna */}
                <path
                  d="M 160 285 Q 220 300 265 315"
                  fill="none"
                  stroke={selectedRiver.id === 'krishna' ? '#818cf8' : '#6366f1'}
                  strokeWidth={selectedRiver.id === 'krishna' ? '5' : '3'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'krishna')!)}
                />

                {/* Cauvery */}
                <path
                  d="M 175 370 Q 200 375 240 380"
                  fill="none"
                  stroke={selectedRiver.id === 'cauvery' ? '#10b981' : '#059669'}
                  strokeWidth={selectedRiver.id === 'cauvery' ? '6' : '3.5'}
                  strokeLinecap="round"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedRiver(RIVERS_DATA.find(r => r.id === 'cauvery')!)}
                />
                <circle cx="240" cy="380" r="5" fill="#10b981" />
              </g>
            )}

            {/* TAB 2: MINERAL BELTS */}
            {activeTab === 'minerals' && (
              <g>
                {/* Iron Belt (Odisha/Jharkhand) */}
                <circle
                  cx="280"
                  cy="210"
                  r="14"
                  fill="#ef4444"
                  opacity="0.8"
                  className="cursor-pointer"
                  onClick={() => setSelectedMineral(MINERALS_DATA.find(m => m.id === 'iron_ore')!)}
                />
                <text x="298" y="215" fill="#fca5a5" fontSize="10" fontWeight="bold">Iron (Mayurbhanj)</text>

                {/* Copper (Malanjkhand / Khetri) */}
                <circle
                  cx="160"
                  cy="160"
                  r="12"
                  fill="#f97316"
                  opacity="0.8"
                  className="cursor-pointer"
                  onClick={() => setSelectedMineral(MINERALS_DATA.find(m => m.id === 'copper')!)}
                />
                <text x="110" y="155" fill="#fdba74" fontSize="10" fontWeight="bold">Copper (Khetri)</text>

                {/* Bauxite (Shevaroy Hills, TN) */}
                <circle
                  cx="200"
                  cy="355"
                  r="12"
                  fill="#eab308"
                  opacity="0.8"
                  className="cursor-pointer"
                  onClick={() => setSelectedMineral(MINERALS_DATA.find(m => m.id === 'bauxite')!)}
                />
                <text x="216" y="360" fill="#fde047" fontSize="10" fontWeight="bold">Bauxite (TN Hills)</text>

                {/* Lignite (NLC Neyveli, TN) */}
                <circle
                  cx="220"
                  cy="380"
                  r="12"
                  fill="#84cc16"
                  opacity="0.8"
                  className="cursor-pointer"
                  onClick={() => setSelectedMineral(MINERALS_DATA.find(m => m.id === 'coal_lignite')!)}
                />
                <text x="236" y="385" fill="#bef264" fontSize="10" fontWeight="bold">Lignite (Neyveli)</text>
              </g>
            )}

            {/* TAB 3: BIOSPHERES */}
            {activeTab === 'biospheres' && (
              <g>
                {biospheres.map((bio) => (
                  <g key={bio.id} className="cursor-pointer" onClick={() => setSelectedBio(bio)}>
                    <circle
                      cx={bio.coords.x}
                      cy={bio.coords.y}
                      r={selectedBio.id === bio.id ? 10 : 7}
                      fill={selectedBio.id === bio.id ? '#10b981' : '#059669'}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x={bio.coords.x + 12}
                      y={bio.coords.y + 4}
                      fill="#34d399"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {bio.name.en.split(' ')[0]}
                    </text>
                  </g>
                ))}
              </g>
            )}

            {/* TAB 4: AGRICULTURE */}
            {activeTab === 'agriculture' && (
              <g>
                {/* Jhuming in Northeast */}
                <rect
                  x="330"
                  y="100"
                  width="60"
                  height="45"
                  fill="rgba(244, 63, 94, 0.4)"
                  stroke="#f43f5e"
                  strokeWidth="1.5"
                  rx="6"
                  className="cursor-pointer"
                  onClick={() => setSelectedAgri(agriculturePatterns[0])}
                />
                <text x="335" y="125" fill="#fda4af" fontSize="9" fontWeight="bold">Shifting (Jhum)</text>

                {/* Intensive in plains & delta */}
                <rect
                  x="180"
                  y="120"
                  width="110"
                  height="45"
                  fill="rgba(56, 189, 248, 0.3)"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  rx="6"
                  className="cursor-pointer"
                  onClick={() => setSelectedAgri(agriculturePatterns[1])}
                />
                <text x="190" y="145" fill="#bae6fd" fontSize="9" fontWeight="bold">Intensive Wet Paddy</text>

                {/* Plantation in Southern Hills */}
                <rect
                  x="170"
                  y="340"
                  width="70"
                  height="40"
                  fill="rgba(16, 185, 129, 0.3)"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  rx="6"
                  className="cursor-pointer"
                  onClick={() => setSelectedAgri(agriculturePatterns[2])}
                />
                <text x="175" y="365" fill="#a7f3d0" fontSize="9" fontWeight="bold">Tea / Plantation</text>
              </g>
            )}
          </svg>
        </div>

        {/* Details & Statistics Card for Selected Item */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl space-y-5 text-left border border-white/10">
          {activeTab === 'rivers' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-semibold">
                  {selectedRiver.type === 'delta' ? 'Delta-forming River' : 'Estuarine Rift Valley River'}
                </span>
                <span className="text-xs text-slate-400 font-mono">{selectedRiver.lengthKm} km</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedRiver.name[language]}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedRiver.description[language]}</p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{language === 'ta' ? 'தோற்றம் (Source):' : 'Origin / Source:'}</span>
                  <span className="text-slate-200 font-medium text-right max-w-[240px]">{selectedRiver.origin[language]}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{language === 'ta' ? 'முடிவு (Mouth):' : 'Drains into (Mouth):'}</span>
                  <span className="text-slate-200 font-medium">{selectedRiver.mouth[language]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{language === 'ta' ? 'மாநிலங்கள்:' : 'Riparian States:'}</span>
                  <span className="text-slate-200 font-medium">{selectedRiver.states.join(', ')}</span>
                </div>
              </div>

              {/* Quick Select Buttons for other rivers */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium block mb-2">{language === 'ta' ? 'மற்ற ஆறுகளைத் தேர்வு செய்க:' : 'Select River Basin:'}</span>
                <div className="flex flex-wrap gap-2">
                  {RIVERS_DATA.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRiver(r)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        selectedRiver.id === r.id ? 'bg-cyan-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {r.name[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'minerals' && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 font-semibold">
                {selectedMineral.category.replace('_', ' ')}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedMineral.name[language]}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedMineral.uses[language]}</p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{language === 'ta' ? 'உலக முன்னணி:' : 'Global Leaders:'}</span>
                  <span className="text-slate-200 font-medium text-right max-w-[240px]">{selectedMineral.leadingProducer[language]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{language === 'ta' ? 'இந்தியப் பகுதிகள்:' : 'Major Indian Deposits:'}</span>
                  <span className="text-slate-200 font-medium text-right max-w-[240px]">{selectedMineral.indianHubs[language]}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium block mb-2">{language === 'ta' ? 'கனிமங்களைத் தேர்ந்தெடுக்க:' : 'Select Mineral:'}</span>
                <div className="flex flex-wrap gap-2">
                  {MINERALS_DATA.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMineral(m)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        selectedMineral.id === m.id ? 'bg-amber-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {m.name[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'biospheres' && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-semibold">
                UNESCO MAB Network
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedBio.name[language]}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedBio.highlights[language]}</p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{language === 'ta' ? 'அமைவிடம்:' : 'Geographic States:'}</span>
                  <span className="text-slate-200 font-medium">{selectedBio.state[language]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{language === 'ta' ? 'பரப்பளவு:' : 'Total Core & Buffer Area:'}</span>
                  <span className="text-slate-200 font-mono font-semibold">{selectedBio.areaSqKm} sq km</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'agriculture' && (
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-semibold">
                Class XII Unit 4
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedAgri.name[language]}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedAgri.desc[language]}</p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{language === 'ta' ? 'முக்கிய மண்டலங்கள்:' : 'Key Regions:'}</span>
                  <span className="text-slate-200 font-medium">{selectedAgri.regions[language]}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">{language === 'ta' ? 'பயிர்கள்:' : 'Primary Crops:'}</span>
                  <span className="text-slate-200 font-medium">{selectedAgri.crop[language]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
