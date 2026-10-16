import { RiverInfo, MineralInfo, TribeInfo, LandmarkInfo, GreenEnergyInfo, GlossaryTerm, QuizQuestion } from '../types/geography';

export const RIVERS_DATA: RiverInfo[] = [
  {
    id: 'ganga',
    name: { en: 'Ganga', ta: 'கங்கை' },
    origin: { en: 'Gangotri Glacier, Bhagirathi, Uttarakhand', ta: 'கங்கோத்ரி பனிப்பாறை, பாகீரதி, உத்தராகண்ட்' },
    mouth: { en: 'Bay of Bengal (Ganga-Brahmaputra Delta)', ta: 'வங்காள விரிகுடா (கங்கை-பிரம்மபுத்திரா டெல்டா)' },
    lengthKm: 2510,
    type: 'delta',
    description: {
      en: 'The holiest and longest river within India. Forms the world’s largest and most fertile delta (Sundarbans).',
      ta: 'இந்தியாவின் மிக நீளமான மற்றும் புனிதமான ஆறு. உலகின் மிகப்பெரிய மற்றும் வளமான சுந்தரவன டெல்டாவை உருவாக்குகிறது.'
    },
    states: ['Uttarakhand', 'Uttar Pradesh', 'Bihar', 'West Bengal']
  },
  {
    id: 'brahmaputra',
    name: { en: 'Brahmaputra', ta: 'பிரம்மபுத்திரா' },
    origin: { en: 'Chemayungdung Glacier near Lake Mansarovar, Tibet (Tsangpo)', ta: 'திபெத்தில் மானசரோவர் ஏரி அருகில் செமாயுங்துங் பனிப்பாறை' },
    mouth: { en: 'Bay of Bengal (Meghna estuary with Ganga)', ta: 'வங்காள விரிகுடா (மேக்னா முகத்துவாரம்)' },
    lengthKm: 2580,
    type: 'delta',
    description: {
      en: 'Known for high sediment load, braided channels (Majuli Island), and massive monsoon riverine discharge.',
      ta: 'அதிக வண்டல் படிவு, பின்னிய கால்வாய்கள் (மஜூலி தீவு) மற்றும் பெரும் பருவமழை வெள்ளப்பெருக்குக்கு பெயர் பெற்றது.'
    },
    states: ['Arunachal Pradesh', 'Assam']
  },
  {
    id: 'cauvery',
    name: { en: 'Cauvery (Kaveri)', ta: 'காவிரி' },
    origin: { en: 'Talakaveri, Brahmagiri Range, Kodagu (Coorg), Karnataka', ta: 'தலக்காவிரி, பிரம்மகிரி மலைத்தொடர், குடகு, கர்நாடகா' },
    mouth: { en: 'Poompuhar, Bay of Bengal (Tamil Nadu)', ta: 'பூம்புகார், வங்காள விரிகுடா (தமிழ்நாடு)' },
    lengthKm: 805,
    type: 'delta',
    description: {
      en: 'The lifeline of Tamil Nadu and Southern Karnataka. Splits into Kollidam (Coleroon) and Cauvery at Srirangam.',
      ta: 'தமிழ்நாடு மற்றும் தெற்கு கர்நாடகத்தின் உயிர்நாடி. ஸ்ரீரங்கத்தில் கொள்ளிடம் மற்றும் காவிரி என பிரிகிறது.'
    },
    states: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Puducherry']
  },
  {
    id: 'narmada',
    name: { en: 'Narmada', ta: 'நர்மதை' },
    origin: { en: 'Amarkantak Plateau, Madhya Pradesh', ta: 'அமர்கண்டக் பீடபூமி, மத்தியப் பிரதேசம்' },
    mouth: { en: 'Gulf of Khambhat, Arabian Sea', ta: 'காம்பே வளைகுடா, அரபிக்கடல்' },
    lengthKm: 1312,
    type: 'estuary',
    description: {
      en: 'Flows westward through a tectonic rift valley between Vindhya and Satpura block mountain ranges, creating an estuary.',
      ta: 'விந்திய மற்றும் சாத்பூரா பிளவுப் பள்ளத்தாக்கு வழியாக மேற்கு நோக்கிப் பாய்ந்து கழிமுகத்தை (Estuary) உருவாக்குகிறது.'
    },
    states: ['Madhya Pradesh', 'Maharashtra', 'Gujarat']
  },
  {
    id: 'godavari',
    name: { en: 'Godavari (Dakshin Ganga)', ta: 'கோதாவரி (தென் கங்கை)' },
    origin: { en: 'Trimbakeshwar, Western Ghats, Nashik, Maharashtra', ta: 'திரிம்பகேஸ்வர், மேற்கு தொடர்ச்சி மலை, நாசிக், மகாராஷ்டிரா' },
    mouth: { en: 'Bay of Bengal (Andhra Pradesh)', ta: 'வங்காள விரிகுடா (ஆந்திரப் பிரதேசம்)' },
    lengthKm: 1465,
    type: 'delta',
    description: {
      en: 'Second longest river in India and largest peninsular river basin, renowned for the fertile Rajahmundry delta.',
      ta: 'இந்தியாவின் இரண்டாவது மிக நீளமான ஆறு மற்றும் மிகப்பெரிய தீபகற்ப ஆற்றுப்படுகை.'
    },
    states: ['Maharashtra', 'Telangana', 'Andhra Pradesh', 'Chhattisgarh', 'Odisha']
  },
  {
    id: 'krishna',
    name: { en: 'Krishna', ta: 'கிருஷ்ணா' },
    origin: { en: 'Mahabaleshwar, Western Ghats, Maharashtra', ta: 'மகாபலேஸ்வர், மேற்கு தொடர்ச்சி மலை, மகாராஷ்டிரா' },
    mouth: { en: 'Hamsaladeevi, Bay of Bengal', ta: 'ஹம்சலாதீவி, வங்காள விரிகுடா' },
    lengthKm: 1400,
    type: 'delta',
    description: {
      en: 'Key peninsular river fed by Tungabhadra and Bhima tributaries; vital for South Indian irrigation and hydro projects.',
      ta: 'துங்கபத்ரா, பீமா துணை ஆறுகளுடன் தென்னிந்திய பாசனத்திற்கும் நீர்மின் திட்டங்களுக்கும் முக்கிய ஆதாரமாகும்.'
    },
    states: ['Maharashtra', 'Karnataka', 'Telangana', 'Andhra Pradesh']
  }
];

export const MINERALS_DATA: MineralInfo[] = [
  {
    id: 'iron_ore',
    name: { en: 'Iron Ore (Fe)', ta: 'இரும்புத் தாது' },
    category: 'metallic_ferrous',
    leadingProducer: { en: 'Australia (33.7%), China, Brazil, India (7.9%)', ta: 'ஆஸ்திரேலியா (33.7%), சீனா, பிரேசில், இந்தியா (7.9%)' },
    indianHubs: { en: 'Odisha (Mayurbhanj), Chhattisgarh (Bastar), Karnataka (Kudremukh)', ta: 'ஒடிசா (மயூர்பஞ்ச்), சத்தீஸ்கர் (பஸ்தார்), கர்நாடகா (குத்ரேமுக்)' },
    uses: { en: 'Backbone of industrial development; raw material for steel, railways, infrastructure.', ta: 'தொழில்துறை வளர்ச்சியின் முதுகெலும்பு; எஃகு உற்பத்தி, ரயில்வே, உள்கட்டமைப்பு.' }
  },
  {
    id: 'manganese',
    name: { en: 'Manganese Ore', ta: 'மாங்கனீசு தாது' },
    category: 'metallic_ferrous',
    leadingProducer: { en: 'South Africa (30.8%), Australia, Gabon, India (8th)', ta: 'தென்னாப்பிரிக்கா (30.8%), ஆஸ்திரேலியா, காபோன், இந்தியா (8வது)' },
    indianHubs: { en: 'Madhya Pradesh (Balaghat), Maharashtra (Nagpur), Odisha', ta: 'மத்தியப் பிரதேசம் (பாலாக்காட்), மகாராஷ்டிரா, ஒடிசா' },
    uses: { en: 'Nearly 6 kg of manganese is used for making one ton of steel; acts as cleanser and anti-corrosive.', ta: 'ஒரு டன் எஃகு தயாரிக்க 6 கிலோ மாங்கனீசு தேவைப்படுகிறது; துருப்பிடிப்பைத் தடுக்கும் தூய்மையாக்கி.' }
  },
  {
    id: 'bauxite',
    name: { en: 'Bauxite (Aluminium Ore)', ta: 'பாக்சைட் (அலுமினியம் தாது)' },
    category: 'metallic_nonferrous',
    leadingProducer: { en: 'Australia (29.3%), China (22.8%), Brazil, India (5th)', ta: 'ஆஸ்திரேலியா (29.3%), சீனா (22.8%), பிரேசில், இந்தியா (5வது)' },
    indianHubs: { en: 'Odisha (Kalahandi, Koraput), Gujarat, Tamil Nadu (Shevaroy Hills, Kolli Hills)', ta: 'ஒடிசா, குஜராத், தமிழ்நாடு (சேர்வராயன் மலை, கொல்லிமலை)' },
    uses: { en: 'Manufacture of aluminium, aircraft bodies, electrical cables, cookware.', ta: 'அலுமினியம் உற்பத்தி, விமான உடற்பாகங்கள், மின்கம்பிகள், பாத்திரங்கள்.' }
  },
  {
    id: 'copper',
    name: { en: 'Copper', ta: 'தாமிரம்' },
    category: 'metallic_nonferrous',
    leadingProducer: { en: 'Chile (27.2%), Peru (11.5%), China, USA', ta: 'சிலி (27.2%), பெரு (11.5%), சீனா, அமெரிக்கா' },
    indianHubs: { en: 'Madhya Pradesh (Malanjkhand), Rajasthan (Khetri), Jharkhand (Singhbhum)', ta: 'மத்தியப் பிரதேசம் (மலாஞ்ச்கண்ட்), ராஜஸ்தான் (கேத்ரி), ஜார்க்கண்ட்' },
    uses: { en: 'High electrical conductivity and ductility; wires, motors, bronze/brass alloys.', ta: 'உயர் மின் கடத்துதிறன் மற்றும் கம்பியாக நீளும் தன்மை; மின்சாரக் கம்பிகள், மோட்டார்கள், வெண்கலம்.' }
  },
  {
    id: 'mica',
    name: { en: 'Mica', ta: 'மைக்கா' },
    category: 'nonmetallic',
    leadingProducer: { en: 'India (World leader in sheet mica exports), China, USA', ta: 'இந்தியா (தாள் மைக்கா ஏற்றுமதியில் உலகத் தலைவர்), சீனா, அமெரிக்கா' },
    indianHubs: { en: 'Andhra Pradesh (Nellore), Rajasthan (Bhilwara), Jharkhand (Koderma)', ta: 'ஆந்திரா (நெல்லூர்), ராஜஸ்தான் (பில்வாரா), ஜார்க்கண்ட் (கோடர்மா)' },
    uses: { en: 'Insulator resistant to high voltage and heat; essential for electronics, paints, automotive.', ta: 'உயர் மின்னழுத்தம் மற்றும் வெப்பத்தை எதிர்க்கும் மின்கடத்தாப் பொருள்; எலக்ட்ரானிக்ஸ், பெயிண்ட்கள்.' }
  },
  {
    id: 'coal_lignite',
    name: { en: 'Coal & Lignite', ta: 'நிலக்கரி மற்றும் பழுப்பு நிலக்கரி' },
    category: 'energy',
    leadingProducer: { en: 'China, India (2nd), USA, Australia', ta: 'சீனா, இந்தியா (2வது), அமெரிக்கா, ஆஸ்திரேலியா' },
    indianHubs: { en: 'Jharkhand (Jharia, Bokaro), West Bengal (Raniganj), Tamil Nadu (NLC Neyveli)', ta: 'ஜார்க்கண்ட் (ஜாரியா), மேற்கு வங்கம், தமிழ்நாடு (நெய்வேலி என்.எல்.சி)' },
    uses: { en: 'Thermal power generation (60%+ of base power), metallurgical coke for steel smelting.', ta: 'அனல் மின் உற்பத்தி (அடிப்படை மின்சாரத்தில் 60%+), எஃகு உருக்கு உலைகள்.' }
  }
];

export const TRIBES_DATA: TribeInfo[] = [
  {
    id: 'toda',
    name: { en: 'Toda Tribe', ta: 'தோடர் பழங்குடியினர்' },
    region: { en: 'Nilgiri Hills, Tamil Nadu', ta: 'நீலகிரி மலை, தமிழ்நாடு' },
    category: 'tamilnadu',
    description: {
      en: 'Pastoral tribe dwelling in unique barrel-shaped huts called "Munds". They herd sacred water buffaloes and refrain from worshipping conventional idols.',
      ta: '"மந்து" (Munds) எனப்படும் அரைவட்ட மூங்கில் குடிசைகளில் வாழும் மேய்ச்சல் சமூகம். புனித எருமைகளை வளர்த்து இயற்கை வழிபாட்டை மேற்கொள்கின்றனர்.'
    },
    distinctFeature: {
      en: 'Intricate red-and-black embroidered shawls (Poothkuli) and sacred buffalo dairies.',
      ta: 'பூத்துக்குளி (Poothkuli) எனப்படும் பாரம்பரிய எம்பிராய்டரி போர்வைகள் மற்றும் புனித பால் பண்ணைகள்.'
    },
    imagePlaceholderColor: '#1e3a8a'
  },
  {
    id: 'kota',
    name: { en: 'Kota Tribe', ta: 'கோத்தர் பழங்குடியினர்' },
    region: { en: 'Tiruchigadi, Nilgiris, Tamil Nadu', ta: 'திருச்சிகடி, நீலகிரி, தமிழ்நாடு' },
    category: 'tamilnadu',
    description: {
      en: 'Artisan and musician community famous for vibrant folk dances, iron smelting, pottery, and musical performances during Badaa funerals.',
      ta: 'கைவினைஞர்கள் மற்றும் இசைக் கலைஞர்கள்; துடிப்பான நாட்டுப்புற நடனங்கள், மண்பாண்டங்கள், இரும்பு வேலைகளில் கைதேர்ந்தவர்கள்.'
    },
    distinctFeature: {
      en: 'Expertise in traditional instruments, smithing, and elaborate artistic tattooing.',
      ta: 'பாரம்பரிய இசைக் கருவிகள், கொல்லு வேலை மற்றும் நேர்த்தியான பச்சை குத்தும் கலை.'
    },
    imagePlaceholderColor: '#b45309'
  },
  {
    id: 'irula',
    name: { en: 'Irula Tribe', ta: 'இருளர் பழங்குடியினர்' },
    region: { en: 'Nilgiri foothills & Northern Tamil Nadu', ta: 'நீலகிரி அடிவாரம் மற்றும் வட தமிழ்நாடு' },
    category: 'tamilnadu',
    description: {
      en: 'Renowned forest medicine experts, honey gatherers, and world-famous snake venom extractors for life-saving anti-venom.',
      ta: 'பாரம்பரிய மூலிகை மருத்துவ நிபுணர்கள், தேன் சேகரிப்பாளர்கள் மற்றும் உயிர்காக்கும் பாம்பு விஷம் எடுப்பதில் உலகப் புகழ்பெற்றவர்கள்.'
    },
    distinctFeature: {
      en: 'Traditional snake catchers cooperative providing vital anti-venom plasma across India.',
      ta: 'இந்தியா முழுவதும் பாம்பு கடிக்கு உயிர்காக்கும் மருந்து தயாரிக்கும் பாம்பு பிடிப்போர் கூட்டுறவு சங்கம்.'
    },
    imagePlaceholderColor: '#15803d'
  },
  {
    id: 'badaga',
    name: { en: 'Badagas', ta: 'படகர்கள்' },
    region: { en: 'High Plateau of Nilgiris, Tamil Nadu', ta: 'நீலகிரி உயர் பீடபூமி, தமிழ்நாடு' },
    category: 'tamilnadu',
    description: {
      en: 'Largest ethnic community in the Nilgiris; transitioned into prosperous tea planters, potato cultivators, and horticultural pioneers.',
      ta: 'நீலகிரியில் வாழும் மிகப்பெரிய சமுதாயம்; தேயிலைத் தோட்டங்கள் மற்றும் உருளைக்கிழங்கு சாகுபடியில் சிறந்து விளங்குகின்றனர்.'
    },
    distinctFeature: {
      en: 'Unique Badaga dialect, traditional Hethai Habba festival, and white dress culture.',
      ta: 'தனித்துவமான படக மொழி, ஹெத்தையம்மன் திருவிழா மற்றும் பாரம்பரிய வெள்ளை உடை கலாச்சாரம்.'
    },
    imagePlaceholderColor: '#047857'
  },
  {
    id: 'sentinelese',
    name: { en: 'Sentinelese', ta: 'சென்டினலீஸ்' },
    region: { en: 'North Sentinel Island, Andaman & Nicobar', ta: 'வடக்கு சென்டினல் தீவு, அந்தமான் & நிக்கோபார்' },
    category: 'india',
    description: {
      en: 'One of the most isolated uncontacted Stone Age tribes in the world. They fiercely protect their island sovereignty and live as hunter-gatherers.',
      ta: 'உலகின் மிகவும் தனிமைப்படுத்தப்பட்ட கற்காலப் பழங்குடியினர். வெளியுலகத் தொடர்புகளை முழுமையாக மறுத்து வேட்டையாடி வாழ்கின்றனர்.'
    },
    distinctFeature: {
      en: 'Pure stone-age lifestyle without agriculture; estimated population around 50–150 individuals.',
      ta: 'விவசாயம் அறியாத கற்கால வாழ்வியல்; 50-150 பேர் மட்டுமே உள்ளதாகக் கணக்கிடப்பட்டுள்ளது.'
    },
    imagePlaceholderColor: '#7c2d12'
  },
  {
    id: 'bhil',
    name: { en: 'Bhil Tribe', ta: 'பில் பழங்குடியினர்' },
    region: { en: 'Rajasthan, Gujarat, Madhya Pradesh', ta: 'ராஜஸ்தான், குஜராத், மத்தியப் பிரதேசம்' },
    category: 'india',
    description: {
      en: 'The largest tribal group in India. Known historically as master archers (Dhanush) and celebrated for Ghoomar dance and Pithora painting.',
      ta: 'இந்தியாவின் மிகப்பெரிய பழங்குடி இனம்; வில் வித்தையில் கைதேர்ந்தவர்கள், கூமர் நடனம் மற்றும் பித்தோரா ஓவியங்களுக்கு புகழ்பெற்றவர்கள்.'
    },
    distinctFeature: {
      en: 'Bowmen ("Bow men of Rajasthan") and creators of colorful sacred wall art.',
      ta: '"வில்லாளிகள்" எனப் போற்றப்படுபவர்கள் மற்றும் பல வண்ணப் பித்தோரா சுவர் ஓவியங்களை உருவாக்குபவர்கள்.'
    },
    imagePlaceholderColor: '#c026d3'
  }
];

export const LANDMARKS_DATA: LandmarkInfo[] = [
  {
    id: 'gandikota',
    name: { en: 'Gandikota Canyon', ta: 'கண்டிகோட்டா செங்குத்துப் பள்ளத்தாக்கு' },
    tamilName: 'இந்தியாவின் மறைந்திருக்கும் கிராண்ட் கேன்யன்',
    location: { en: 'Kadapa District, Andhra Pradesh (Pennar River)', ta: 'கடப்பா மாவட்டம், ஆந்திரப் பிரதேசம் (பெண்ணாறு)' },
    significance: {
      en: 'Known as the "Grand Canyon of India". Spectacular deep gorge cut through the Erramala hills by the Pennar River, overlooking the historic Gandikota fort.',
      ta: '"இந்தியாவின் கிராண்ட் கேன்யன்" என அழைக்கப்படுகிறது. எர்ரமலா மலைகளை பெண்ணாறு செதுக்கி உருவாக்கிய பிரம்மாண்ட செங்குத்துப் பள்ளத்தாக்கு.'
    },
    keyFact: {
      en: 'Deep red granite canyon formed over millions of years through fluvial erosion, adjacent to Belum Caves.',
      ta: 'மில்லியன் கணக்கான ஆண்டுகளாக ஆற்று அரிப்பினால் உருவான சிவப்பு கிரானைட் பள்ளத்தாக்கு; அருகில் பேலம் குகைகள் அமைந்துள்ளன.'
    },
    type: 'fluvial',
    imagePlaceholder: 'canyon'
  },
  {
    id: 'hogenakkal',
    name: { en: 'Hogenakkal Waterfalls', ta: 'ஒகேனக்கல் நீர்வீழ்ச்சி' },
    tamilName: 'புகை எழும் பாறை (ஸ்மோக்கிங் ராக்ஸ்)',
    location: { en: 'Dharmapuri District, Tamil Nadu (Cauvery River)', ta: 'தருமபுரி மாவட்டம், தமிழ்நாடு (காவிரி ஆறு)' },
    significance: {
      en: 'Often hailed as the "Niagara of India". The river drops into narrow deep gorges creating dense water-mist like smoke ("Hoge" = smoke, "Kal" = rock).',
      ta: '"இந்தியாவின் நயாகரா" என அழைக்கப்படுகிறது. காவிரி ஆறு செங்குத்து பாறைகளில் பாய்ந்து புகை போன்ற நீர் துகள்களை எழுப்புகிறது.'
    },
    keyFact: {
      en: 'Classic textbook example of plunge pools, cylindrical pot-holes in granite beds, and carbonatite rock formation.',
      ta: 'பாறைக்குடைவு குடங்கள் (Pot holes) மற்றும் கார்பனடைட் பாறை அமைப்புகளுக்கு சிறந்த பாடநூல் உதாரணம்.'
    },
    type: 'fluvial',
    imagePlaceholder: 'waterfall'
  },
  {
    id: 'krishna_butter_ball',
    name: { en: "Krishna's Butter Ball", ta: 'கிருஷ்ணரின் வெண்ணெய் உருண்டை (வானிறை கல்)' },
    tamilName: 'வானிறை கல் (Stone of the Sky God)',
    location: { en: 'Mahabalipuram, Chengalpattu, Tamil Nadu', ta: 'மாமல்லபுரம், செங்கல்பட்டு, தமிழ்நாடு' },
    significance: {
      en: 'A massive 6-meter-high, 5-meter-wide precariously balanced monolithic granite boulder weighing over 250 tons, resting on a 45-degree slope for 1200+ years.',
      ta: '6 மீட்டர் உயரமும் 5 மீட்டர் அகலமும் கொண்ட 250 டன் எடையுள்ள பிரம்மாண்ட கிரானைட் பாறை; 45 பாகை சாய்வில் 1200 ஆண்டுகளுக்கும் மேலாக நிற்கிறது.'
    },
    keyFact: {
      en: 'Demonstrates natural gravitational equilibrium, friction, and resistance to thermal exfoliating weathering.',
      ta: 'ஈர்ப்பு விசை சமநிலை, உராய்வு மற்றும் வெங்காய உரித்தல் பாறைச் சிதைவுக்கு (Exfoliation) இயற்கை சான்று.'
    },
    type: 'natural_geology',
    imagePlaceholder: 'boulder'
  },
  {
    id: 'barren_island',
    name: { en: 'Barren Island Volcano', ta: 'பேரன் தீவு எரிமலை' },
    tamilName: 'இந்தியாவின் ஒரே செயல்படும் எரிமலை',
    location: { en: 'Andaman Sea, 135 km northeast of Port Blair', ta: 'அந்தமான் கடல், போர்ட் பிளேருக்கு வடகிழக்கே 135 கி.மீ' },
    significance: {
      en: 'The only confirmed active volcano in South Asia, located along the volcanic arc boundary between the Indian and Burmese tectonic plates.',
      ta: 'தெற்காசியாவின் ஒரே உறுதிப்படுத்தப்பட்ட உயிருள்ள எரிமலை; இந்திய மற்றும் பர்மிய டெக்டானிக் தட்டுகளின் எல்லையில் அமைந்துள்ளது.'
    },
    keyFact: {
      en: 'Erupted in 1991, 1995, and continues episodic fumarolic and strombolian activity.',
      ta: '1991 மற்றும் 1995 இல் வெடித்தது; தொடர்ந்து எரிமலைக் குழம்பு மற்றும் வாயுக்களை உமிழ்ந்து வருகிறது.'
    },
    type: 'volcanic',
    imagePlaceholder: 'volcano'
  },
  {
    id: 'lonar_lake',
    name: { en: 'Lonar Crater Lake', ta: 'லோனார் விண்கல் ஏரி' },
    tamilName: 'விண்கல் வீழ்ச்சியால் உருவான ஏரி',
    location: { en: 'Buldhana District, Maharashtra', ta: 'புல்தானா மாவட்டம், மகாராஷ்டிரா' },
    significance: {
      en: 'A geo-heritage monument formed by a hypervelocity meteorite impact during the Pleistocene Epoch into basaltic Deccan rock.',
      ta: 'பிளைஸ்டோசீன் காலத்தில் விண்கல் தாக்கியதால் தக்காண எரிமலைப் பாறையில் உருவான உலக அதிசய உப்பு ஏரி.'
    },
    keyFact: {
      en: 'Both saline and alkaline lake harboring rare micro-organisms, measuring 1.8 km in diameter and 137 m deep.',
      ta: 'உப்பும் காரத்தன்மையும் கொண்ட நீர்நிலையாக திகழ்கிறது; 1.8 கி.மீ விட்டம் மற்றும் 137 மீ ஆழம் கொண்டது.'
    },
    type: 'meteorite',
    imagePlaceholder: 'crater'
  },
  {
    id: 'mawsynram',
    name: { en: 'Mawsynram - Wettest Place on Earth', ta: 'மௌசின்ராம் - உலகின் அதிக மழை பெய்யும் இடம்' },
    tamilName: 'பூமியின் மிக ஈரப்பதமான இடம்',
    location: { en: 'East Khasi Hills, Meghalaya', ta: 'கிழக்கு காசி குன்றுகள், மேகாலயா' },
    significance: {
      en: 'Holds the Guinness World Record for the highest average annual rainfall on Earth (11,861 mm) due to the funneling orographic effect of Khasi Hills.',
      ta: 'ஆண்டுக்கு சராசரியாக 11,861 மி.மீ மழைப் பொழிவைப் பெற்று கின்னஸ் சாதனை படைத்துள்ளது; காசி குன்றுகளின் புனல் வடிவம் காரணமாகிறது.'
    },
    keyFact: {
      en: 'Known paradoxically as "the wettest desert" in winter because karstic limestone terrain cannot retain rainwater after monsoons.',
      ta: 'சுண்ணாம்புப் பாறை நிலப்பரப்பு நீரைத் தேக்க இயலாததால், மழைக்காலம் முடிந்ததும் தண்ணீர் பற்றாக்குறை ஏற்படும் விநோத நிலை.'
    },
    type: 'natural_geology',
    imagePlaceholder: 'rainforest'
  }
];

export const GREEN_ENERGY_DATA: GreenEnergyInfo[] = [
  {
    id: 'kamuthi_solar',
    name: { en: 'Kamuthi Solar Power Project', ta: 'கமுதி சூரிய மின்சக்தி திட்டம்' },
    type: 'solar',
    capacity: '648 MW',
    location: { en: 'Kamuthi, Ramanathapuram District, Tamil Nadu', ta: 'கமுதி, ராமநாதபுரம் மாவட்டம், தமிழ்நாடு' },
    highlights: {
      en: 'Spread over 2,500 acres with 2.5 million solar modules. Built in record 8 months by 8,500 workers. Uses self-charged autonomous robotic cleaning systems.',
      ta: '2,500 ஏக்கர் பரப்பளவில் 25 லட்சம் சோலார் பேனல்கள். 8,500 தொழிலாளர்களால் 8 மாதங்களில் கட்டப்பட்டது. தானியங்கி ரோபோ சுத்தம் செய்யும் தொழில்நுட்பம் கொண்டது.'
    }
  },
  {
    id: 'muppandal_wind',
    name: { en: 'Muppandal Wind Farm', ta: 'முப்பந்தல் காற்றாலைப் பண்ணை' },
    type: 'wind',
    capacity: '1,500 MW',
    location: { en: 'Muppandal, Kanyakumari District, Tamil Nadu', ta: 'முப்பந்தல், கன்னியாகுமரி மாவட்டம், தமிழ்நாடு' },
    highlights: {
      en: 'One of the largest operational onshore wind farms in the world, harnessing high-velocity mountain wind gushing through the Palghat & Shencottah gaps.',
      ta: 'உலகின் மிகப்பெரிய தரைவழி காற்றாலைகளில் ஒன்று. மேற்கு தொடர்ச்சி மலைக் கணவாய்கள் வழியே வீசும் அதிவேகக் காற்றை மின்சாரமாக மாற்றுகிறது.'
    }
  },
  {
    id: 'dhanushkodi_offshore',
    name: { en: 'Dhanushkodi Offshore Wind Belt', ta: 'தனுஷ்கோடி கடல்சார் காற்றாலை மண்டலம்' },
    type: 'wind',
    capacity: '1,000 MW (Proposed/Pilot)',
    location: { en: 'Gulf of Mannar, Tamil Nadu', ta: 'மன்னார் வளைகுடா, தமிழ்நாடு' },
    highlights: {
      en: 'India’s pioneer zone for deep-sea offshore wind energy exploitation identified by the Ministry of New and Renewable Energy (MNRE).',
      ta: 'இந்தியாவின் முதல் ஆழ்கடல் காற்றாலை மின் உற்பத்திக்காக புதிய மற்றும் புதுப்பிக்கத்தக்க எரிசக்தி அமைச்சகத்தால் தேர்வு செய்யப்பட்ட பகுதி.'
    }
  },
  {
    id: 'puga_geothermal',
    name: { en: 'Puga Valley Geothermal Plant', ta: 'புகா பள்ளத்தாக்கு புவிவெப்ப சக்தி திட்டம்' },
    type: 'geothermal',
    capacity: 'Pilot 10 MW',
    location: { en: 'Ladakh, Himalayas', ta: 'லடாக், இமயமலை' },
    highlights: {
      en: 'Exploiting natural volcanic/tectonic geothermal steam reservoir at 4,400m altitude in Ladakh.',
      ta: 'லடாக்கில் 4,400 மீ உயரத்தில் உள்ள இயற்கை புவிவெப்ப நீராவி நீர்த்தேக்கத்தை பயன்படுத்தி மின்சாரம் தயாரிக்கும் திட்டம்.'
    }
  }
];

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    termEn: 'Albedo',
    termTa: 'ஒளி திருப்பும் திறன்',
    definitionEn: 'The proportion of solar radiation reflected back into space by the surface of the earth, snow, or clouds (fresh snow has highest albedo).',
    definitionTa: 'பூமியின் மேற்பரப்பு, பனி அல்லது மேகங்களால் விண்வெளிக்கு திருப்பி அனுப்பப்படும் சூரிய கதிர்வீச்சின் அளவு.',
    unit: 'Unit 6: Atmosphere'
  },
  {
    termEn: 'Cloud Burst',
    termTa: 'மேக வெடிப்பு',
    definitionEn: 'Sudden, extremely aggressive rainstorm yielding rainfall exceeding 100 mm/hour over a localized area, often causing devastating flash floods.',
    definitionTa: 'குறுகிய பரப்பளவில் ஒரு மணி நேரத்திற்கு 100 மி.மீ-க்கும் அதிகமாக கொட்டித் தீர்க்கும் திடீர் பெருமழை.',
    unit: 'Unit 6: Atmosphere'
  },
  {
    termEn: 'Isoneph',
    termTa: 'சம மேகக் கோடு',
    definitionEn: 'An imaginary line on a weather map connecting places experiencing an equal degree of cloudiness.',
    definitionTa: 'வானிலை வரைபடத்தில் சம அளவு மேகமூட்டம் உள்ள இடங்களை இணைக்கும் கற்பனைக் கோடு.',
    unit: 'Unit 12: Weather Maps'
  },
  {
    termEn: 'Isohaline',
    termTa: 'சம உப்புக் கோடு',
    definitionEn: 'An imaginary line joining places in the ocean that have equal salinity (average ocean salinity is 35‰).',
    definitionTa: 'பெருங்கடல்களில் சம அளவு உப்புத்தன்மை கொண்ட பகுதிகளை இணைக்கும் கற்பனைக் கோடு.',
    unit: 'Unit 5: Hydrosphere'
  },
  {
    termEn: 'Horst and Graben',
    termTa: 'ஹார்ஸ்ட் மற்றும் கிராபன் (பிளவு நிலத்தோற்றங்கள்)',
    definitionEn: 'Landforms created by faulting: Horst is an upthrown central block (Block Mountain like Vindhyas), Graben is a subsided rift valley (e.g. Narmada rift valley).',
    definitionTa: 'பிளவுகளால் ஏற்படும் அமைப்புகள்: மேலே தள்ளப்பட்ட பகுதி ஹார்ஸ்ட் (பீடபூமி/பிளாக் மலை), கீழே அமிழ்ந்த பகுதி கிராபன் (பிளவுப் பள்ளத்தாக்கு).',
    unit: 'Unit 3: Lithosphere'
  },
  {
    termEn: 'Permafrost',
    termTa: 'நிரந்தரப் பனிக்கட்டி நிலம்',
    definitionEn: 'Subsurface soil or rock layer that remains completely frozen below 0°C continuously for two or more consecutive years in tundra/polar regions.',
    definitionTa: 'துருவப் பகுதிகளில் இரண்டு அல்லது அதற்கு மேற்பட்ட ஆண்டுகள் தொடர்ச்சியாக 0°C-க்கு கீழ் உறைந்து காணப்படும் நிலத்தடி அடுக்கு.',
    unit: 'Unit 7: Biosphere'
  },
  {
    termEn: 'Watershed',
    termTa: 'நீர்ப்பிடிப்புப் பகுதி',
    definitionEn: 'A ridge of high land dividing two drainage basins, or the entire geographic catchment drained by a stream and its tributaries into a common water body.',
    definitionTa: 'ஒரு ஆறு மற்றும் அதன் துணை ஆறுகள் வழியே பாயும் மழைநீர் முழுவதையும் ஒரே பொதுவான வடிகாலுக்கு கொண்டு சேர்க்கும் நிலப்பரப்பு.',
    unit: 'Unit 7: Sustainable Development'
  },
  {
    termEn: 'Coriolis Effect',
    termTa: 'கொரியாலிஸ் விசை',
    definitionEn: 'Apparent deflection of moving air currents due to Earth’s rotation (deflects right in Northern Hemisphere, left in Southern Hemisphere).',
    definitionTa: 'பூமி சுழல்வதால் நகரும் காற்று வலப்பக்கமாக (வட அரைக்கோளம்) அல்லது இடப்பக்கமாக (தென் அரைக்கோளம்) விலகிச் செல்லும் நிகழ்வு.',
    unit: 'Unit 6: Atmosphere'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: {
      en: 'Which district in Tamil Nadu recorded the highest literacy rate in the 2011 Census?',
      ta: '2011 மக்கள் தொகை கணக்கெடுப்பின்படி தமிழ்நாட்டில் அதிக எழுத்தறிவு விகிதம் கொண்ட மாவட்டம் எது?'
    },
    options: {
      en: ['Chennai (90.18%)', 'Kanyakumari (91.75%)', 'Thoothukudi (86.16%)', 'Coimbatore (83.98%)'],
      ta: ['சென்னை (90.18%)', 'கன்னியாகுமரி (91.75%)', 'தூத்துக்குடி (86.16%)', 'கோயம்புத்தூர் (83.98%)']
    },
    correctIndex: 1,
    explanation: {
      en: 'Kanyakumari district recorded the highest literacy rate in Tamil Nadu at 91.75%, followed by Chennai at 90.18% (TN SCERT Table 11.3).',
      ta: 'கன்னியாகுமரி மாவட்டம் 91.75% எழுத்தறிவுடன் முதலிடத்திலும், சென்னை 90.18% உடன் இரண்டாம் இடத்திலும் உள்ளன.'
    },
    source: 'Class XII Unit 11 Thematic Mapping'
  },
  {
    id: 2,
    question: {
      en: 'The single-location 648 MW solar power project in Tamil Nadu is situated at:',
      ta: 'தமிழ்நாட்டில் 648 மெகாவாட் திறன் கொண்ட உலகின் மிகப்பெரிய ஒற்றை சூரிய மின் திட்டம் எங்கு அமைந்துள்ளது?'
    },
    options: {
      en: ['Neyveli, Cuddalore', 'Kamuthi, Ramanathapuram', 'Muppandal, Kanyakumari', 'Ennore, Chennai'],
      ta: ['நெய்வேலி, கடலூர்', 'கமுதி, ராமநாதபுரம்', 'முப்பந்தல், கன்னியாகுமரி', 'எண்ணூர், சென்னை']
    },
    correctIndex: 1,
    explanation: {
      en: 'The Kamuthi Solar Power Project in Ramanathapuram district covers 2,500 acres with a capacity of 648 MW, commissioned by Adani Power in 2016.',
      ta: 'ராமநாதபுரம் மாவட்டம் கமுதியில் 2,500 ஏக்கர் பரப்பளவில் 648 மெகாவாட் திறன் கொண்ட சூரிய மின் பூங்கா நிறுவப்பட்டுள்ளது.'
    },
    source: 'Class XII Unit 3 Resources'
  },
  {
    id: 3,
    question: {
      en: 'The Narmada River flows westward and forms an estuary because it travels through a:',
      ta: 'நர்மதை ஆறு மேற்கு நோக்கிப் பாய்ந்து கழிமுகத்தை உண்டாக்கக் காரணம், அது பாய்வது:'
    },
    options: {
      en: ['Glacial moraine', 'Tectonic Rift Valley between Vindhyas & Satpuras', 'Limestone karst cavern', 'Alluvial delta basin'],
      ta: ['பனியாற்று படிவு மண்டலம்', 'விந்திய-சாத்பூரா மலைகளுக்கு இடையிலான பிளவுப் பள்ளத்தாக்கு', 'சுண்ணாம்பு குகை நிலப்பரப்பு', 'வண்டல் டெல்டா சமவெளி']
    },
    correctIndex: 1,
    explanation: {
      en: 'The rift of River Narmada lies between the Vindhyas and Satpura block mountains, draining directly into the Gulf of Khambhat without forming a delta.',
      ta: 'நர்மதை ஆறு விந்திய மற்றும் சாத்பூரா பிளாக் மலைகளுக்கு இடைப்பட்ட பிளவுப் பள்ளத்தாக்கில் பாய்ந்து காம்பே வளைகுடாவில் சேர்கிறது.'
    },
    source: 'Class XI Unit 3 Lithosphere Endogenic'
  },
  {
    id: 4,
    question: {
      en: 'What is the recommended rule of action during a sudden earthquake inside a building?',
      ta: 'கட்டடத்தினுள் இருக்கும்போது திடீரென நிலநடுக்கம் ஏற்பட்டால் பின்பற்ற வேண்டிய பாதுகாப்பு விதி எது?'
    },
    options: {
      en: ['Run rapidly down the staircase', 'Drop, Cover, and Hold On under sturdy furniture', 'Use the elevator to escape', 'Stand directly next to glass windows'],
      ta: ['படிக்கட்டுகளில் வேகமாக ஓடுதல்', 'குனிந்து, மூடிக்கொண்டு, உறுதியான மேசையைப் பிடித்துக் கொள்ளுதல் (Drop, Cover, Hold)', 'மின்தூக்கியை (Elevator) பயன்படுத்துதல்', 'கண்ணாடி ஜன்னல் அருகே நிற்றல்']
    },
    correctIndex: 1,
    explanation: {
      en: 'Drop down onto your hands and knees, cover your head and neck under sturdy furniture, and hold on until shaking stops. Running outdoors causes the most injuries from falling debris.',
      ta: 'முழங்காலிட்டு அமர்ந்து (Drop), தலையை உறுதியான மேசையின் கீழ் மறைத்து (Cover), அதிர்வு நிற்கும் வரை பிடித்துக் கொள்ள வேண்டும் (Hold On).'
    },
    source: 'Class XI Unit 8 Disaster Management'
  },
  {
    id: 5,
    question: {
      en: 'Which indigenous tribe of the Nilgiris lives in barrel-shaped huts called "Munds" and herds sacred buffaloes?',
      ta: '"மந்து" (Munds) எனப்படும் வில்வளைவு குடிசைகளில் வாழ்ந்து புனித எருமைகளை வளர்க்கும் நீலகிரி பழங்குடியினர் யார்?'
    },
    options: {
      en: ['Toda', 'Irula', 'Kota', 'Badaga'],
      ta: ['தோடர் (Toda)', 'இருளர் (Irula)', 'கோத்தர் (Kota)', 'படகர்கள் (Badaga)']
    },
    correctIndex: 0,
    explanation: {
      en: 'Toda tribe men are traditionally occupied in grazing sacred buffalo herds. Their settlements are called Munds.',
      ta: 'தோடர் இன மக்கள் புனித எருமை மேய்த்தலை தொழிலாகக் கொண்டு மந்து எனப்படும் குடியிருப்பு அமைப்புகளில் வாழ்கின்றனர்.'
    },
    source: 'Class XII Unit 5 Cultural Geography'
  },
  {
    id: 6,
    question: {
      en: 'What is the 30/30 safety rule in lightning disaster mitigation?',
      ta: 'மின்னல் பேரிடர் தடுப்பு வழிகாட்டுதலில் 30/30 விதி என்பது என்ன?'
    },
    options: {
      en: ['Run 30 km/h for 30 minutes', 'If flash-to-bang is < 30 sec, seek shelter; stay inside 30 min after last strike', 'Drink 30 ml water every 30 minutes', 'Keep 30 feet distance from trees'],
      ta: ['30 கி.மீ வேகத்தில் 30 நிமிடம் ஓடுதல்', 'மின்னலுக்கும் இடிக்குமான இடைவெளி < 30 வினாடி எனில் புகலிடம் அடைந்து, கடைசி மின்னலுக்குப் பின் 30 நிமிடம் உள்ளே இருத்தல்', 'ஒவ்வொரு 30 நிமிடத்திற்கும் 30 மி.லி தண்ணீர் குடித்தல்', 'மரத்திலிருந்து 30 அடி தள்ளி நிற்றல்']
    },
    correctIndex: 1,
    explanation: {
      en: 'If the time between seeing lightning and hearing thunder is less than 30 seconds, you are in immediate danger. Remain in shelter for 30 minutes after the last thunderclap.',
      ta: 'மின்னல் தோன்றி 30 வினாடிகளுக்குள் இடிச் சத்தம் கேட்டால் ஆபத்து அருகில் உள்ளது; கடைசி இடி கேட்டு 30 நிமிடங்கள் வரை பாதுகாப்பான இடத்தில் இருக்க வேண்டும்.'
    },
    source: 'Class XI Unit 8 Disaster Management'
  },
  {
    id: 7,
    question: {
      en: 'The only active volcano in India and South Asia is located on:',
      ta: 'இந்தியா மற்றும் தெற்காசியாவின் ஒரே செயல்படும் எரிமலை எங்கு அமைந்துள்ளது?'
    },
    options: {
      en: ['Narcondam Island', 'Barren Island (Andaman)', 'Minicoy Island', 'Pamban Island'],
      ta: ['நார்கொண்டம் தீவு', 'பேரன் தீவு (அந்தமான்)', 'மினிகாய் தீவு', 'பாம்பன் தீவு']
    },
    correctIndex: 1,
    explanation: {
      en: 'Barren Island in the Andaman Sea is the only active volcano in South Asia, erupting in 1991, 1995 and intermittently active.',
      ta: 'அந்தமான் கடலில் அமைந்துள்ள பேரன் தீவு (Barren Island) இந்தியாவின் ஒரே செயல்படும் எரிமலையாகும்.'
    },
    source: 'Class XI Unit 3 Lithosphere'
  },
  {
    id: 8,
    question: {
      en: 'What does an Okta measurement of 8 represent on a weather map station model?',
      ta: 'வானிலை வரைபடத்தில் 8 ஆக்டா (8 Oktas) என்பது எதனைக் குறிக்கிறது?'
    },
    options: {
      en: ['Completely clear sky', 'Half cloudy sky', 'Completely overcast sky', 'Heavy thunderstorm'],
      ta: ['முழுக்க தெளிவான வானம்', 'பாதி மேகமூட்டம்', 'வானம் முழுவதும் மேகமூட்டம் (Overcast)', 'கடும் இடிமின்னல் புயல்']
    },
    correctIndex: 2,
    explanation: {
      en: 'Cloud cover is measured in Oktas (eighths of sky dome). 0 Oktas indicates completely clear sky, while 8 Oktas denotes completely overcast sky.',
      ta: 'மேகமூட்டம் ஆக்டா (Oktas) அலகில் அளவிடப்படுகிறது; 0 ஆக்டா என்பது தெளிவான வானம், 8 ஆக்டா என்பது வானம் முழுவதும் மேகமூட்டம்.'
    },
    source: 'Class XI Unit 12 Weather Maps'
  }
];

export const LITERACY_TAMILNADU_DISTRICTS = [
  { rank: 1, district: { en: 'Kanyakumari', ta: 'கன்னியாகுமரி' }, rate: 91.75 },
  { rank: 2, district: { en: 'Chennai', ta: 'சென்னை' }, rate: 90.18 },
  { rank: 3, district: { en: 'Thoothukudi', ta: 'தூத்துக்குடி' }, rate: 86.16 },
  { rank: 4, district: { en: 'The Nilgiris', ta: 'நீலகிரி' }, rate: 85.20 },
  { rank: 5, district: { en: 'Kancheepuram', ta: 'காஞ்சிபுரம்' }, rate: 84.49 },
  { rank: 6, district: { en: 'Thiruvallur', ta: 'திருவள்ளூர்' }, rate: 84.03 },
  { rank: 7, district: { en: 'Coimbatore', ta: 'கோயம்புத்தூர்' }, rate: 83.98 },
  { rank: 8, district: { en: 'Madurai', ta: 'மதுரை' }, rate: 83.45 },
  { rank: 9, district: { en: 'Tiruchirappalli', ta: 'திருச்சிராப்பள்ளி' }, rate: 83.23 },
  { rank: 10, district: { en: 'Thanjavur', ta: 'தஞ்சாவூர்' }, rate: 82.64 },
  { rank: 11, district: { en: 'Tirunelveli', ta: 'திருநெல்வேலி' }, rate: 82.50 },
  { rank: 12, district: { en: 'Salem', ta: 'சேலம்' }, rate: 72.86 },
  { rank: 13, district: { en: 'Erode', ta: 'ஈரோடு' }, rate: 72.58 },
  { rank: 14, district: { en: 'Villupuram', ta: 'விழுப்புரம்' }, rate: 71.88 },
  { rank: 15, district: { en: 'Dharmapuri', ta: 'தருமபுரி' }, rate: 68.54 }
];
