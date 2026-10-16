import React, { useState } from 'react';
import { Language } from '../types/geography';
import { UI_STRINGS } from '../data/translations';
import { ShieldAlert, Zap, AlertTriangle, Activity, Check, CheckCircle2, ChevronRight, Play, RotateCcw } from 'lucide-react';

interface DisasterDrillLabProps {
  language: Language;
}

export const DisasterDrillLab: React.FC<DisasterDrillLabProps> = ({ language }) => {
  const [activeDrill, setActiveDrill] = useState<'earthquake' | 'lightning' | 'cyclone' | 'landslide'>('earthquake');
  const [earthquakeStep, setEarthquakeStep] = useState<number>(0);
  const [flashSeconds, setFlashSeconds] = useState<number>(12);

  const t = UI_STRINGS[language].drills;

  // Flash-to-bang distance in km = seconds / 3
  const lightningDistanceKm = (flashSeconds / 3).toFixed(1);
  const isDangerZone = flashSeconds < 30;

  return (
    <div className="w-full space-y-12 py-6 text-left">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wider uppercase">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'அலகு 8 • பேரிடர் மேலாண்மை & பொது விழிப்புணர்வு' : 'Unit 8 • Natural Calamities & Disaster Risk Reduction'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Drill Navigation Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 gap-1 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveDrill('earthquake')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeDrill === 'earthquake' ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{language === 'ta' ? 'நிலநடுக்கம் (Earthquake)' : 'Earthquake Drill'}</span>
          </button>
          <button
            onClick={() => setActiveDrill('lightning')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeDrill === 'lightning' ? 'bg-yellow-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>{language === 'ta' ? 'மின்னல் (Lightning 30/30)' : 'Lightning 30/30'}</span>
          </button>
          <button
            onClick={() => setActiveDrill('cyclone')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeDrill === 'cyclone' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{language === 'ta' ? 'புயல் (Cyclone Vardah)' : 'Cyclone Case Study'}</span>
          </button>
          <button
            onClick={() => setActiveDrill('landslide')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeDrill === 'landslide' ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{language === 'ta' ? 'நிலச்சரிவு (Landslides)' : 'Landslide Safety'}</span>
          </button>
        </div>
      </div>

      {/* DRILL 1: EARTHQUAKE DROP, COVER, HOLD ON */}
      {activeDrill === 'earthquake' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-400" />
                <span>{t.earthquakeTitle}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">{t.earthquakeDesc}</p>
            </div>
            <button
              onClick={() => setEarthquakeStep(0)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-white/10 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'ta' ? 'மீண்டும் தொடங்கு' : 'Restart Drill'}</span>
            </button>
          </div>

          {/* Interactive Steps Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: 1,
                name: { en: 'DROP!', ta: 'குனிந்து அமர்!' },
                desc: {
                  en: 'Drop down onto your hands and knees before the earthquake knocks you down. This position protects you from falling and allows you to move if needed.',
                  ta: 'நிலநடுக்கம் உங்களை கீழே தள்ளும் முன் உங்கள் கைகள் மற்றும் முழங்கால்களில் குனிந்து அமரவும்.'
                },
                color: 'from-amber-600 to-amber-800'
              },
              {
                num: 2,
                name: { en: 'COVER!', ta: 'மறைத்துக் கொள்!' },
                desc: {
                  en: 'Cover your head and neck (and whole body if possible) under a sturdy table or desk. If no shelter nearby, cover with hands in an interior corner.',
                  ta: 'உறுதியான மேசையின் கீழ் உங்கள் தலை, கழுத்து மற்றும் முழு உடலையும் மறைத்துக் கொள்ளவும். ஜன்னல்களை விட்டு விலகவும்.'
                },
                color: 'from-orange-600 to-orange-800'
              },
              {
                num: 3,
                name: { en: 'HOLD ON!', ta: 'பிடித்துக் கொள்!' },
                desc: {
                  en: 'Hold on to your shelter (table leg) until the shaking stops. Be prepared to move with your shelter if it shifts during violent tremors.',
                  ta: 'அதிர்வு முழுமையாக நிற்கும் வரை மேசைக் காலை உறுதியாகப் பிடித்துக் கொள்ளவும். மேசை நகர்ந்தால் அதனுடன் நகரவும்.'
                },
                color: 'from-emerald-600 to-emerald-800'
              }
            ].map((step, idx) => {
              const isActive = earthquakeStep >= idx;
              return (
                <div
                  key={idx}
                  onClick={() => setEarthquakeStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isActive
                      ? 'bg-slate-900/90 border-amber-500/40 shadow-xl'
                      : 'bg-white/5 border-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm text-white bg-gradient-to-br ${step.color}`}>
                        {step.num}
                      </span>
                      {isActive && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <h4 className="text-lg font-bold text-white">{step.name[language]}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc[language]}</p>
                  </div>

                  <div className="pt-2 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                    <span>{isActive ? 'Step Completed' : 'Click to Practice'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Do's and Don'ts Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                {language === 'ta' ? 'கண்டிப்பாக செய்ய வேண்டியவை (DO):' : 'Official Guidelines - DO:'}
              </span>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'அமைதியாக இருக்கவும், பீதியடைய வேண்டாம்.' : 'Stay calm; do not panic.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'வீட்டிலிருப்பின் மின் சாதனங்கள் மற்றும் எரிவாயுவை உடனடியாக அணைக்கவும்.' : 'Turn off main electrical breakers and gas valves immediately.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ta' ? 'தெருவில் இருந்தால், உயரமான கட்டடங்கள் மற்றும் மின்கம்பிகளை விட்டு விலகி திறந்தவெளிக்குச் செல்லவும்.' : 'If outdoors, stay in open fields away from overhead wires and facades.'}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <span className="font-bold text-rose-400 uppercase tracking-wider block">
                {language === 'ta' ? 'ஒருபோதும் செய்யக்கூடாதவை (DON\'T):' : 'Official Guidelines - NEVER DO:'}
              </span>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{language === 'ta' ? 'படிக்கட்டுகள், பால்கனி அல்லது மின்தூக்கி (Elevator) வழியே ஓட முயற்சிக்க வேண்டாம்.' : 'Never rush down staircases, balconies, or use elevators (collapses risk).'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{language === 'ta' ? 'கண்ணாடி ஜன்னல்கள் மற்றும் சுவர்களில் மாட்டப்பட்டுள்ள கனமான பொருட்களின் அருகே நிற்க வேண்டாம்.' : 'Never stand near glass windows, mirrors, or heavy falling furniture.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{language === 'ta' ? 'நிலநடுக்கத்திற்குப் பின் உடனே கட்டடத்திற்குள் நுழைய வேண்டாம் (பின்னதிர்வுகள் - Aftershocks).' : 'Never re-enter damaged buildings for 2-3 hours due to aftershocks.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* DRILL 2: LIGHTNING 30/30 RULE */}
      {activeDrill === 'lightning' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>{t.lightningTitle}</span>
            </h3>
            <p className="text-xs text-slate-400">{t.lightningDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Flash-to-Bang Calculator */}
            <div className="lg:col-span-6 space-y-5 p-6 rounded-2xl bg-slate-950 border border-white/10">
              <span className="text-xs uppercase tracking-wider text-yellow-400 font-bold block">
                {language === 'ta' ? 'ஒளி - இடி நேர இடைவெளி கால்குலேட்டர்' : 'Flash-to-Bang Distance Calculator'}
              </span>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{language === 'ta' ? 'மின்னல் பார்த்ததற்கும் இடி கேட்டதற்குமான வினாடிகள்:' : 'Seconds between Lightning Flash & Thunder Sound:'}</span>
                  <span className="font-bold font-mono text-yellow-400 text-sm">{flashSeconds} sec</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="45"
                  value={flashSeconds}
                  onChange={(e) => setFlashSeconds(Number(e.target.value))}
                  className="w-full accent-yellow-400 cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{language === 'ta' ? 'மதிப்பிடப்பட்ட தூரம்:' : 'Estimated Distance of Strike:'}</span>
                  <span className="text-lg font-bold font-mono text-white">{lightningDistanceKm} km</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{language === 'ta' ? 'பாதுகாப்பு நிலை:' : 'Safety Status:'}</span>
                  <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                    isDangerZone ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {isDangerZone ? (language === 'ta' ? 'ஆபத்து மண்டலம் (<30 வினாடி)' : 'DANGER ZONE (<30 sec)') : (language === 'ta' ? 'பாதுகாப்பானது (>30 வினாடி)' : 'SAFE (>30 sec)')}
                  </span>
                </div>
              </div>
            </div>

            {/* Lightning Crouch Instructions */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-yellow-950/20 border border-yellow-500/20 space-y-3">
                <h4 className="text-base font-bold text-yellow-300">
                  {language === 'ta' ? 'மின்னல் குத்தவைத்து அமர்தல் பயிற்சி (Lightning Crouch)' : 'The Proper Lightning Crouch Posture'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'ta'
                    ? 'திறந்தவெளியில் மாட்டிக்கொண்டால் மரங்களின் அடியில் நிற்கவோ, தரையில் படுக்கவோ கூடாது. கால்களின் விரல் நுனிகளில் குத்தவைத்து அமர்ந்து, இரு குதிகால்களையும் ஒன்றோடொன்று தொட வேண்டும். இதனால் மின்சாரம் உடலின் முக்கிய உறுப்புகளுக்குச் செல்லாமல் கால்கள் வழியே தரைக்குச் செல்லும்.'
                    : 'If caught in open terrain with no shelter: Squat low on the balls of your feet with heels touching, head tucked down, and ears covered. Touching heels allows ground electrical current to pass from one foot to the other instead of traveling through vital organs.'}
                </p>
                <div className="text-[11px] text-slate-400 bg-black/40 p-2.5 rounded-xl border border-white/5">
                  <span className="text-emerald-400 font-semibold">The 30/30 Rule: </span>
                  {language === 'ta'
                    ? 'மின்னல் தோன்றி 30 வினாடிக்குள் இடி கேட்டால் கட்டடத்தினுள் சென்று, கடைசி மின்னலுக்குப் பின் 30 நிமிடம் வரை உள்ளேயே இருங்கள்.'
                    : 'If flash-to-bang is < 30 seconds, immediately enter enclosed shelter; remain inside for 30 minutes after last strike.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DRILL 3: CYCLONE CASE STUDY (VARDAH 2016) */}
      {activeDrill === 'cyclone' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-cyan-400" />
              <span>{t.cycloneTitle}</span>
            </h3>
            <p className="text-xs text-slate-400">{t.cycloneDesc}</p>
          </div>

          {/* Vardah Timeline Grid (From Textbook page 224 / 273) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                date: 'Dec 6, 2016',
                stage: { en: 'Depression Formed', ta: 'காற்றழுத்த தாழ்வு மண்டலம்' },
                winds: '45–60 km/h',
                desc: { en: 'Originated near Malay Peninsula and entered Andaman Sea.', ta: 'மலேசிய தீபகற்பத்திற்கு அருகில் உருவாகி அந்தமான் கடலில் நுழைந்தது.' }
              },
              {
                date: 'Dec 9, 2016',
                stage: { en: 'Very Severe Cyclonic Storm (VSCS)', ta: 'மிக தீவிர புயல்' },
                winds: '130 km/h',
                desc: { en: 'Central pressure dropped to 975 mb with a clear eye formation.', ta: 'காற்றழுத்தம் 975 mb ஆக குறைந்து தெளிவான புயலின் கண் உருவானது.' }
              },
              {
                date: 'Dec 12, 2016',
                stage: { en: 'Landfall at Chennai Coast', ta: 'சென்னையில் கரையை கடந்தது' },
                winds: '130–155 km/h gusts',
                desc: { en: 'NDMA recorded massive devastation; over 4,000 trees uprooted.', ta: '10 பேர் பலி, 4000-க்கும் மேற்பட்ட மரங்கள் வேரோடு சாய்ந்தன.' }
              },
              {
                date: 'Dec 13, 2016',
                stage: { en: 'Dissipated into Low Pressure', ta: 'வலுவிழந்தது' },
                winds: '< 40 km/h',
                desc: { en: 'Weakened after crossing Tamil Nadu into interior Karnataka.', ta: 'தமிழ்நாட்டைக் கடந்து கர்நாடகத்தின் உட்பகுதிக்கு நகர்ந்து வலுவிழந்தது.' }
              }
            ].map((ev, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">{ev.date}</span>
                <h5 className="text-sm font-bold text-white">{ev.stage[language]}</h5>
                <span className="inline-block text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {ev.winds}
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">{ev.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DRILL 4: LANDSLIDES */}
      {activeDrill === 'landslide' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span>{language === 'ta' ? 'நீலகிரி நிலச்சரிவு முன்னெச்சரிக்கை & பாதுகாப்பு' : 'Nilgiris Landslide Vulnerability & Protocols'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'ta'
                ? 'தமிழ்நாட்டில் அதிக நிலச்சரிவு ஏற்படும் மாவட்டம் நீலகிரி (TN SCERT Evaluation Q3). காரணம்: செங்குத்து சரிவு, அதிக மழை மற்றும் மண்ணின் தளர்ச்சி.'
                : 'Highest landslide frequency in Tamil Nadu occurs in the Nilgiris district due to steep relief and monsoon saturation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <h5 className="text-sm font-bold text-rose-400">{language === 'ta' ? 'எச்சரிக்கை அறிகுறிகள்:' : 'Early Warning Signs:'}</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'மலை ஓடைகளில் திடீரென நீர் கலங்கலாக மாறுதல், மரங்கள் அல்லது பாறைகள் உராய்ந்து வெடிக்கும் சத்தம், கட்டட சுவர்கள் மற்றும் சாலைகளில் திடீர் விரிசல்.'
                  : 'Sudden increase or muddy turbidity in mountain streams, faint rumbling/cracking of tree roots and boulders, new fractures on roads or foundations.'}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <h5 className="text-sm font-bold text-amber-400">{language === 'ta' ? 'நிலச்சரிவின் போது:' : 'During Landslide:'}</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'சரிவுப் பாதையிலிருந்து உடனடியாக விலகி உயரமான பகுதிக்குச் செல்லவும். மின் இணைப்புகளைத் துண்டிக்கவும். வாகனத்தை நசுங்கும் இடங்களில் நிறுத்த வேண்டாம்.'
                  : 'Move immediately out of the direct debris path. Disconnect electrical power in the vicinity. Never park vehicles beneath unstable cut slopes.'}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <h5 className="text-sm font-bold text-emerald-400">{language === 'ta' ? 'நிலச்சரிவுக்குப் பின்:' : 'Post-Landslide Action:'}</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ta'
                  ? 'மீண்டும் நிலச்சரிவு ஏற்பட வாய்ப்புள்ளதால் சரிவுப் பகுதிக்குத் திரும்ப வேண்டாம். உள்ளூர் வானொலி/தொலைக்காட்சி அவசர செய்திகளைக் கவனிக்கவும்.'
                  : 'Stay away from slide boundaries due to danger of subsequent debris flow. Assist trained rescuers and report broken power lines immediately.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
