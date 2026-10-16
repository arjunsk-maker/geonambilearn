import React from 'react';
import { Language } from '../types/geography';
import { Radio, Satellite, Wind, Waves, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';

interface CurrentAffairsSectionProps {
  language: Language;
}

export const CurrentAffairsSection: React.FC<CurrentAffairsSectionProps> = ({ language }) => {
  const affairs = [
    {
      id: 'satellite_early_warning',
      tag: { en: 'Geoinformatics & Space', ta: 'புவித்தகவலியல் & விண்வெளி' },
      title: {
        en: 'ISRO NAVIC & Oceansat-3 Cyclone Radar Tracking',
        ta: 'இஸ்ரோவின் நாவிக்கு (NAVIC) மற்றும் ஓஷன்சாட்-3 புயல் கண்காணிப்பு'
      },
      desc: {
        en: 'India’s autonomous regional satellite constellation (NAVIC) paired with INSAT-3DR radar sensors provides real-time nowcasting for fishing fleets and early cyclone warnings across the Bay of Bengal.',
        ta: 'இந்தியாவின் சொந்த நாவிக்கு (NAVIC) வழிகாட்டல் மற்றும் இன்சாட்-3டிஆர் ரேடார்கள் மூலம் வங்காள விரிகுடா புயல்கள், கடல் அலைகள் மற்றும் மீனவர்களுக்கான சாத்தியமான மீன்பிடி மண்டலங்கள் (PFZ) உடனுக்குடன் கண்காணிக்கப்படுகின்றன.'
      },
      metric: '1,500 km Coverage',
      color: 'border-cyan-500/30'
    },
    {
      id: 'offshore_wind_policy',
      tag: { en: 'Renewable Transition', ta: 'புதுப்பிக்கத்தக்க ஆற்றல்' },
      title: {
        en: 'Tamil Nadu Deep-Sea Offshore Wind Energy Zone',
        ta: 'தமிழ்நாடு ஆழ்கடல் காற்றாலை மின் திட்டம் (தனுஷ்கோடி & மன்னார் வளைகுடா)'
      },
      desc: {
        en: 'The Ministry of New & Renewable Energy designated seabed zones off Dhanushkodi and Kanyakumari coast for 4,000 MW offshore wind installations, utilizing high-velocity maritime trade currents.',
        ta: 'மன்னார் வளைகுடா மற்றும் தனுஷ்கோடி கடற்பரப்பில் 4,000 மெகாவாட் ஆழ்கடல் காற்றாலைகள் நிறுவ மத்திய அரசு திட்டமிட்டுள்ளது. கடல் காற்றின் தொடர்ச்சியான வேகத்தை இது முழுமையாகப் பயன்படுத்தும்.'
      },
      metric: '4,000 MW Target',
      color: 'border-emerald-500/30'
    },
    {
      id: 'river_interlinking',
      tag: { en: 'Water Resources & Rivers', ta: 'நீர் மேலாண்மை & நதிகள் இணைப்பு' },
      title: {
        en: 'Cauvery - Vaigai - Gundar Intra-State River Link',
        ta: 'காவிரி - வைகை - குண்டாறு நதிகள் இணைப்பு திட்டம்'
      },
      desc: {
        en: 'A flagship hydrological diversion canal transferring 6,300 cusecs of surplus monsoon floodwater from Cauvery (Mayaunur barrage) to water-scarce southern dry farming districts of Tamil Nadu.',
        ta: 'காவிரி உபரி வெள்ள நீரை கரூர் மாயனூர் கதவணையில் இருந்து திருச்சி, புதுக்கோட்டை, சிவகங்கை, விருதுநகர் வழியாக வைகை மற்றும் குண்டாற்றுக்கு கொண்டு சேர்க்கும் பிரம்மாண்ட கால்வாய் திட்டம்.'
      },
      metric: '262 km Canal',
      color: 'border-indigo-500/30'
    },
    {
      id: 'urban_heat_islands',
      tag: { en: 'Climate Resilience', ta: 'காலநிலை மீள்தன்மை' },
      title: {
        en: 'Urban Heat Island (UHI) Mitigation in Coastal Megacities',
        ta: 'சென்னை, மும்பை பெருநகரங்களில் நகர்ப்புற வெப்பத் தீவு (UHI) தணிப்பு'
      },
      desc: {
        en: 'Implementing cool roofs, sponge city wetlands (Pallikaranai marshland preservation), and green corridors to curb 3–5°C localized temperature spikes in concrete-dense urban centers.',
        ta: 'பள்ளிக்கரணை சதுப்புநிலம் போன்ற ஈரநிலங்களைப் பாதுகாத்தல், குளிர் கூரைகள் (Cool roofs) மற்றும் பசுமை வழித்தடங்கள் மூலம் நகரங்களில் 3-5°C வரை அதிகரிக்கும் வெப்பத் தீவு விளைவைக் கட்டுப்படுத்துதல்.'
      },
      metric: '3-5°C Cooling',
      color: 'border-amber-500/30'
    }
  ];

  return (
    <div className="w-full space-y-8 py-6 text-left">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
          <Radio className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 2 • புவியியல் நடப்பு நிகழ்வுகள்' : 'Unit II • Geography Current Affairs'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {language === 'ta' ? 'புவியியல் தற்காலப் போக்குகள் & தொழில்நுட்பம்' : 'Contemporary Geographic Dynamics & Tech'}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {language === 'ta'
            ? 'விண்வெளி புவித்தகவலியல், ஆழ்கடல் காற்றாலைகள் மற்றும் நதிகள் இணைப்பு குறித்த தற்போதைய நிகழ்வுகள்.'
            : 'Explore breakthrough infrastructure, ISRO geoinformatics, and state policies reshaping Indian geography.'}
        </p>
      </div>

      {/* Affairs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {affairs.map((item) => (
          <div
            key={item.id}
            className={`glass-panel p-6 sm:p-7 rounded-3xl border ${item.color} space-y-4 hover:border-white/30 transition-all flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-300">
                  {item.tag[language]}
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full">
                  {item.metric}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {item.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc[language]}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Satellite className="w-3.5 h-3.5 text-indigo-400" />
                <span>TN SCERT Geography Focus</span>
              </span>
              <span className="text-slate-300 font-semibold">2024–2026 Curriculum</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
