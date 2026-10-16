export const UI_STRINGS = {
  en: {
    siteTitle: 'NambiLearn',
    siteSubtitle: 'Geography of India & Tamil Nadu',
    curriculumBadge: 'TN SCERT Higher Secondary Curriculum • Unit II',
    languageToggle: 'தமிழ்',
    explore3D: '3D Explorer',
    monsoonLab: 'Monsoon Lab',
    interactiveMap: 'Interactive Maps',
    socialGeo: 'Social Geography',
    disasterDrill: 'Disasters & Safety',
    greenLandmarks: 'Landmarks & Green Energy',
    quizGlossary: 'Quiz & Glossary',
    designDoc: 'Design Architecture',
    
    // Hero section
    heroTag: 'Interactive School Syllabus Experience',
    heroHeadline: 'Discover the Physical & Human Landscape of India',
    heroDesc: 'An Apple-inspired spatial learning platform covering Unit II Indian Geography. Explore 3D procedural relief, dynamic monsoon wind streams, tribal culture, disaster management drills, and renewable energy transitions.',
    exploreNow: 'Launch 3D Explorer',
    startLab: 'Open Monsoon Lab',
    curriculumStats: '7 Key Syllabus Modules • 15+ Interactive Tools • Dual Language',

    // Topics list
    topicsTitle: 'Syllabus Curriculum Modules',
    topicsSubtitle: 'Meticulously crafted around the Class XI & XII Tamil Nadu Higher Secondary Geography syllabus',
    
    // Topic card details
    topics: {
      physical: {
        title: 'Physical Features, Climate & Resources',
        subtitle: 'Monsoon mechanisms, major river basins, soils, mineral belts, and wildlife biomes',
        desc: 'Detailed examination of Indian relief: the orographic burst of South-West Monsoon, Western Ghats rain-shadow, the sacred Ganga and Cauvery river systems, iron and bauxite mineral wealth, and agriculture classification.'
      },
      transport: {
        title: 'Transport & Geoinformatics',
        subtitle: 'Golden Quadrilateral, broad-gauge railway electrification, waterways & NAVIC satellite tracking',
        desc: 'Modern connectivity across India: National Highway corridors, maritime exclusive economic zones (EEZ), port hubs (Chennai, Tuticorin), and ISRO remote sensing satellite platforms (INSAT-3D, Oceansat).'
      },
      social: {
        title: 'Social Geography & Tribal Demography',
        subtitle: 'Population density, age-sex pyramids, literacy patterns & indigenous tribes',
        desc: 'Analyzing arithmetic vs physiological density, the 3 population pyramid models, Tamil Nadu district literacy disparities (Kanyakumari 91.75% vs Dharmapuri 68.54%), and tribal heritage (Toda, Irula, Kota, Badaga, Bhils, Sentinelese).'
      },
      disasters: {
        title: 'Natural Calamities & Disaster Management',
        subtitle: 'Cyclones (Vardah, Ockhi), earthquakes, landslides, floods, and practical safety drills',
        desc: 'Interactive disaster mitigation: Drop-Cover-Hold drill for earthquakes, the 30/30 safety rule for lightning, cyclone track prediction, and school emergency committee response frameworks.'
      },
      environment: {
        title: 'Environmental Protection & Green Energy',
        subtitle: 'Urban Heat Island, climate mitigation, Kamuthi 648MW Solar & Muppandal Wind',
        desc: 'Confronting climate change through green energy leadership in Tamil Nadu: the 2,500-acre Kamuthi solar farm, Muppandal mountain wind gaps, mandatory rainwater harvesting, and UN SDG Agenda 2030.'
      },
      landmarks: {
        title: 'Iconic Geographical Landmarks',
        subtitle: 'Gandikota Canyon, Hogenakkal Falls, Krishna’s Butter Ball & Barren Island volcano',
        desc: 'Fascinating geological wonders of India: fluvial gorge formation, plunge pool pot-holes, 250-ton monolithic balance boulders, meteorite impact craters, and active volcanic arcs in the Andaman Sea.'
      },
      current_affairs: {
        title: 'Geographical Current Affairs',
        subtitle: 'Green hydrogen initiatives, deep-sea mining, river linking & weather satellite early warning',
        desc: 'Up-to-date real-world developments: Tamil Nadu offshore wind policy in Dhanushkodi, Cauvery-Vaigai-Gundar river basin interconnection, and IMD radar nowcasting for cyclone preparedness.'
      }
    },

    // 3D explorer controls
    threeD: {
      badge: 'Interactive 3D Procedural Engine',
      instruction: 'Drag to rotate • Scroll to zoom • Click landmarks for detailed geographic insights',
      layerRelief: 'Physical Relief',
      layerMonsoon: 'Monsoon Wind Flow',
      layerPlates: 'Tectonic Plates',
      layerLandmarks: 'Geological Landmarks',
      cameraIndia: 'Focus India',
      cameraHimalayas: 'Himalayan Ridge',
      cameraBayOfBengal: 'Bay of Bengal',
      cameraGlobal: 'Global View',
      toggleRotate: 'Auto-Rotate',
      activeInfoTitle: 'Geographic Feature Details',
      elevationKey: 'Lowland Plains (0-300m) → Deccan Plateau (600-1200m) → Himalayan Peaks (8000m+)'
    },

    // Monsoon lab
    monsoon: {
      title: 'Atmospheric Physics & Monsoon Laboratory',
      subtitle: 'Simulate seasonal wind reversal, orographic rainfall over the Western Ghats, and weather station models',
      swMonsoon: 'South-West Monsoon (Summer: June–Sept)',
      neMonsoon: 'North-East Retreating Monsoon (Winter: Oct–Nov)',
      swDesc: 'Intense heating over the Indian subcontinent forms low pressure over Pakistan & North India. Moisture-laden winds from the Indian Ocean bifurcate into the Arabian Sea branch and Bay of Bengal branch, triggering heavy orographic rainfall along the windward side of the Western Ghats and Khasi Hills (Mawsynram).',
      neDesc: 'Subcontinent cools rapidly; high pressure develops over Central Asia and Lake Baikal. Dry continental winds blow from north-east to south-west. Picking up moisture over the warm Bay of Bengal, they bring copious rainfall to the Coromandel Coast of Tamil Nadu.',
      elevationEffect: 'Orographic Ascent & Rain Shadow Mechanism',
      windwardSide: 'Windward Slopes (Western Ghats / Meghalaya): Warm moist air rises, cools at lapse rate (6.5°C/1000m), reaches dew point and precipitates intensely (2000mm+).',
      leewardSide: 'Leeward Rain Shadow (Tamil Nadu plains / Deccan): Air descends, warms adiabatically, loses relative humidity; resulting in semi-arid conditions.',
      stationModelTitle: 'IMD Interactive Weather Station Model (Unit 12)',
      stationModelDesc: 'Click the parameters below to decode meteorological station models used by the Indian Meteorological Department (IMD) in daily weather forecasts.'
    },

    // Disasters
    drills: {
      title: 'Disaster Risk Reduction & Mock Drills',
      subtitle: 'Practical survival guidelines directly adapted from TN SCERT Chapter 8',
      earthquakeTitle: 'Earthquake Drill: Drop, Cover, Hold On!',
      earthquakeDesc: 'Practice the official three-step procedure when violent tremors strike.',
      lightningTitle: 'Lightning 30/30 Rule & Lightning Crouch',
      lightningDesc: 'Electrostatic discharge generates 10,000–20,000 amperes and temperatures up to 9,982°C. Follow the flash-to-bang rule.',
      cycloneTitle: 'Cyclone Preparedness Timeline: Case Study Vardah (2016)',
      cycloneDesc: 'Severe Cyclonic Storm Vardah hit Chennai coast with sustained winds of 130 km/h. Learn the before, during, and after protocols.'
    },

    // Footer & Credits
    footer: {
      rights: 'NambiLearn Educational Platform • Inspired by Apple Human Interface Guidelines',
      syllabusCredit: 'Content compiled rigorously from Tamil Nadu Textbook & Educational Services Corporation (SCERT) Class XI & XII Geography',
      designedFor: 'Higher Secondary Students, Competitive Exams (TNPSC / UPSC Aspirants), and Educators'
    }
  },

  ta: {
    siteTitle: 'நம்பி லேர்ன் (NambiLearn)',
    siteSubtitle: 'இந்திய மற்றும் தமிழ்நாட்டின் புவியியல்',
    curriculumBadge: 'தமிழ்நாடு அரசுப் பள்ளி மேல்நிலைக் கல்வி பாடத்திட்டம் • அலகு II',
    languageToggle: 'English',
    explore3D: '3D உருவகப்படுத்துதல்',
    monsoonLab: 'பருவமழை ஆய்வகம்',
    interactiveMap: 'ஊடாடும் வரைபடங்கள்',
    socialGeo: 'சமூகப் புவியியல்',
    disasterDrill: 'பேரிடர் மேலாண்மை',
    greenLandmarks: 'நிலத்தோற்றங்கள் & பசுமை ஆற்றல்',
    quizGlossary: 'வினாடி வினா & சொல்லடைவு',
    designDoc: 'வடிவமைப்பு ஆவணம்',

    // Hero section
    heroTag: 'ஊடாடும் பள்ளிப் பாடத்திட்ட அனுபவம்',
    heroHeadline: 'இந்தியாவின் இயற்கை மற்றும் சமூக நிலப்பரப்பைக் கண்டறியுங்கள்',
    heroDesc: 'ஆப்பிள் நிறுவனத்தின் எளிமையான, நேர்த்தியான வடிவமைப்பில் உருவான ஊடாடும் கல்வி தளம். 3D நிலத்தோற்றங்கள், பருவமழைக் காற்று சுழற்சி, பழங்குடியின பண்பாடு, பேரிடர் பாதுகாப்பு பயிற்சிகள் மற்றும் பசுமை ஆற்றல் மாற்றங்கள் ஆகியவற்றை அனுபவபூர்வமாகக் கற்றறியுங்கள்.',
    exploreNow: '3D உலகைத் தொடங்கு',
    startLab: 'பருவமழை ஆய்வகம் செல்',
    curriculumStats: '7 முழுமையான பாட அலகுகள் • 15+ ஊடாடும் கருவிகள் • இருமொழி தமிழ் & ஆங்கிலம்',

    // Topics list
    topicsTitle: 'பாடத்திட்ட பாடப் பிரிவுகள்',
    topicsSubtitle: 'தமிழ்நாடு மேல்நிலை 11 மற்றும் 12-ஆம் வகுப்பு புவியியல் பாடநூல்களின் துல்லியமான தகவல்கள்',
    
    // Topic card details
    topics: {
      physical: {
        title: 'இயற்கை அமைப்புகள், காலநிலை & வளங்கள்',
        subtitle: 'பருவமழை இயங்குமுறை, முக்கிய ஆறுகள், மண் வகைகள், கனிம வளங்கள் மற்றும் உயிர்க்கோளம்',
        desc: 'இந்தியாவின் நிலத்தோற்றங்கள்: தென்மேற்கு பருவமழையின் இயக்கம், மேற்கு தொடர்ச்சி மலையின் மழை மறைவுப் பிரதேசம், கங்கை மற்றும் காவிரி ஆற்று அமைப்புகள், இரும்பு மற்றும் பாக்சைட் கனிமப் படுகைகள்.'
      },
      transport: {
        title: 'போக்குவரத்து & புவித்தகவலியல்',
        subtitle: 'தங்க நாற்கரச் சாலை, அகல ரயில்பாதை மின்மயமாக்கல், நீர்வழிகள் & நாவிக்கின் (NAVIC) துணைக்கோள் வழிகாட்டல்',
        desc: 'இந்தியாவின் போக்குவரத்து இணைப்புகள்: தேசிய நெடுஞ்சாலைகள், சர்வதேச கடல்சார் தனித்த பொருளாதார மண்டலம் (EEZ), முக்கிய துறைமுகங்கள் (சென்னை, தூத்துக்குடி) மற்றும் இஸ்ரோவின் விண்வெளி கண்காணிப்பு செயற்கைக்கோள்கள்.'
      },
      social: {
        title: 'சமூகப் புவியியல் & பழங்குடியினர் மக்கள் தொகை',
        subtitle: 'மக்கள் தொகை அடர்த்தி, வயது-பாலின பிரமிடுகள், எழுத்தறிவு விகிதங்கள் மற்றும் பழங்குடிகள்',
        desc: 'இயற்கை மற்றும் ஊட்டச்சத்து அடர்த்தி, மூன்று வகை மக்கள் தொகை பிரமிடுகள், தமிழ்நாட்டின் மாவட்ட எழுத்தறிவு விகிதங்கள் (கன்னியாகுமரி 91.75% முதல் தருமபுரி 68.54% வரை) மற்றும் தோடர், இருளர், கோத்தர், படகர் பழங்குடிகள்.'
      },
      disasters: {
        title: 'இயற்கைப் பேரிடர்கள் & பேரிடர் மேலாண்மை',
        subtitle: 'புயல்கள் (வர்தா, ஒகி), நிலநடுக்கம், நிலச்சரிவு, வெள்ளம் மற்றும் பாதுகாப்பு பயிற்சிகள்',
        desc: 'செயல்முறை பேரிடர் தடுப்பு: நிலநடுக்கத்திற்கான குனிந்து-மூடி-பிடிக்கும் (Drop-Cover-Hold) பயிற்சி, மின்னலுக்கான 30/30 பாதுகாப்பு விதி மற்றும் பள்ளி பேரிடர் குழு நெறிமுறைகள்.'
      },
      environment: {
        title: 'சுற்றுச்சூழல் மாசுபாடு & பசுமை ஆற்றல்',
        subtitle: 'நகர்ப்புற வெப்பத் தீவு, காலநிலை மாற்றத் தணிப்பு, கமுதி 648MW சோலார் & முப்பந்தல் காற்றாலை',
        desc: 'தமிழ்நாட்டின் பசுமை ஆற்றல் தலைமைத்துவம்: ராமநாதபுரம் கமுதியில் உள்ள 2,500 ஏக்கர் சூரிய மின் பூங்கா, முப்பந்தல் பெருங்காற்றாலை பண்ணை, மழைநீர் சேகரிப்பு கட்டாயம் மற்றும் ஐ.நா.வின் 17 நீடித்த வளர்ச்சி இலக்குகள்.'
      },
      landmarks: {
        title: 'முக்கிய புவியியல் அடையாளங்கள்',
        subtitle: 'கண்டிகோட்டா பள்ளத்தாக்கு, ஒகேனக்கல், வானிறை கல் மற்றும் பேரன் தீவு எரிமலை',
        desc: 'இந்தியாவின் தனித்துவமான இயற்கை அதிசயங்கள்: ஆற்று அரிப்பு பள்ளத்தாக்குகள், பாறைக்குடைவு குடங்கள் (Pot holes), 250 டன் வானிறை கல் பாறைச் சமநிலை மற்றும் அந்தமான் கடல் செயல்படும் எரிமலை.'
      },
      current_affairs: {
        title: 'புவியியல் நடப்பு நிகழ்வுகள்',
        subtitle: 'பசுமை ஹைட்ரஜன், கடல்சார் காற்றாலை கொள்கை, நதிகள் இணைப்பு & நவீன செயற்கைக்கோள் எச்சரிக்கை',
        desc: 'சமீபத்திய வளர்ச்சித் திட்டங்கள்: தனுஷ்கோடி ஆழ்கடல் காற்றாலை, காவிரி-வைகை-குண்டாறு நதிநீர் இணைப்பு திட்டம் மற்றும் பேரிடர் முன்னறிவிப்புக்கான தானியங்கி வானிலை நிலையங்கள் (AWS).'
      }
    },

    // 3D explorer controls
    threeD: {
      badge: 'ஊடாடும் 3D இயங்குதளம் (Three.js)',
      instruction: 'சுழற்ற இழுக்கவும் • பெரிதாக்க ஸ்க்ரோல் செய்யவும் • கூடுதல் தகவல்களுக்கு இடங்களைத் தொடவும்',
      layerRelief: 'இயற்கை நிலத்தோற்றம்',
      layerMonsoon: 'பருவமழைக் காற்று',
      layerPlates: 'புவித்தட்டுகள் (Plates)',
      layerLandmarks: 'புவியியல் அடையாளங்கள்',
      cameraIndia: 'இந்தியா பார்வை',
      cameraHimalayas: 'இமயமலைத் தொடர்',
      cameraBayOfBengal: 'வங்காள விரிகுடா',
      cameraGlobal: 'உலக உருண்டை',
      toggleRotate: 'சுழற்சி நிலை',
      activeInfoTitle: 'நிலத்தோற்ற விபரங்கள்',
      elevationKey: 'சமவெளி நிலங்கள் (0-300மீ) → தக்காண பீடபூமி (600-1200மீ) → இமயமலை சிகரங்கள் (8000மீ+)'
    },

    // Monsoon lab
    monsoon: {
      title: 'வளிமண்டல இயற்பியல் & பருவமழை ஆய்வகம்',
      subtitle: 'பருவமழைக் காற்று சுழற்சி, மேற்கு தொடர்ச்சி மலையின் மலைத்தடை மழை மற்றும் வானிலை நிலைய குறியீடுகள்',
      swMonsoon: 'தென்மேற்கு பருவமழை (கோடைக் காலம்: ஜூன் - செப்டம்பர்)',
      neMonsoon: 'வடகிழக்கு பருவமழை (குளிர்காலம்: அக்டோபர் - நவம்பர்)',
      swDesc: 'இந்திய நிலப்பரப்பு தீவிரமாக வெப்பமடைவதால் பாகிஸ்தான் மற்றும் வட இந்தியாவில் குறைந்த காற்றழுத்தம் உருவாகிறது. இந்தியப் பெருங்கடலில் இருந்து ஈரப்பதத்துடன் வரும் காற்று அரபிக்கடல் மற்றும் வங்காள விரிகுடா கிளைகளாகப் பிரிந்து, மேற்கு தொடர்ச்சி மலையிலும் காசி குன்றுகளிலும் பெருமழையைப் பொழிகிறது.',
      neDesc: 'குளிர்காலத்தில் இந்திய நிலப்பரப்பு வேகமாக குளிர்ந்து மத்திய ஆசியாவில் அதிக காற்றழுத்தம் உண்டாகிறது. வறண்ட வடகிழக்கு காற்று நிலத்திலிருந்து கடலை நோக்கி வீசும்போது வங்காள விரிகுடாவில் ஈரப்பதத்தை ஈர்த்து, தமிழ்நாட்டின் சோழமண்டல கடற்கரைக்கு அளப்பரிய மழையைத் தருகிறது.',
      elevationEffect: 'மலைத்தடை மழை மற்றும் மழை மறைவுப் பிரதேச இயக்கம்',
      windwardSide: 'காற்று மோதும் பக்கம் (மேற்கு தொடர்ச்சி மலை / மேகாலயா): ஈரப்பதம் நிறைந்த காற்று உயரே எழும்பி, வெப்பத்தணிவு வீதத்தில் (1000 மீட்டருக்கு 6.5°C) குளிர்ந்து செறிவான மழையைத் தருகிறது (2000மி.மீ+).',
      leewardSide: 'மழை மறைவுப் பகுதி (தமிழ்நாடு சமவெளிகள் / தக்காணம்): காற்று மலையைக் கடந்து இறங்கும்போது வெப்பமடைந்து ஈரப்பதத்தை இழப்பதால் மிகக் குறைந்த மழையே பெய்கிறது.',
      stationModelTitle: 'இந்திய வானிலை ஆய்வுத் துறை (IMD) நிலைய மாதிரி (அலகு 12)',
      stationModelDesc: 'கீழே உள்ள அளவீடுகளை மாற்றி, வானிலை வரைபடங்களில் பயன்படுத்தப்படும் குறியீட்டு மாதிரியைப் புரிந்து கொள்ளுங்கள்.'
    },

    // Disasters
    drills: {
      title: 'பேரிடர் இடர் குறைப்பு & செயல்முறை ஒத்திகைகள்',
      subtitle: 'தமிழ்நாடு புவியியல் பாடநூல் அலகு 8-ல் உள்ள அதிகாரப்பூர்வ வழிகாட்டுதல்கள்',
      earthquakeTitle: 'நிலநடுக்க ஒத்திகை: குனிந்து, மூடிக்கொண்டு, பிடித்துக் கொள்ளுங்கள்!',
      earthquakeDesc: 'நிலநடுக்கத்தின் போது கட்டடத்திற்குள் இருக்கும்போது கடைபிடிக்க வேண்டிய மூன்று படிகள்.',
      lightningTitle: 'மின்னல் 30/30 விதி மற்றும் மின்னல் குத்தவைத்து அமர்தல் (Lightning Crouch)',
      lightningDesc: 'மின்னல் 10,000 முதல் 20,000 ஆம்பியர் மின்னோட்டத்தையும், 9,982°C வெப்பத்தையும் உருவாக்குகிறது. ஒளி-ஒலி நேர விதியைப் பின்பற்றுங்கள்.',
      cycloneTitle: 'வர்தா புயல் (2016) காலவரிசை & புயல் பாதுகாப்பு நெறிமுறைகள்',
      cycloneDesc: 'மணிக்கு 130 கி.மீ வேகத்தில் சென்னையைத் தாக்கிய மிகக் கடுமையான வர்தா புயல் பற்றிய ஆய்வு மற்றும் புயலுக்கு முன், புயலின் போது, புயலுக்குப் பின் செய்ய வேண்டியவை.'
    },

    // Footer & Credits
    footer: {
      rights: 'நம்பி லேர்ன் (NambiLearn) கல்வி தளம் • ஆப்பிள் வடிவமைப்பு நெறிமுறைகளின்படி உருவாக்கப்பட்டது',
      syllabusCredit: 'தமிழ்நாடு பாடநூல் மற்றும் கல்வியியல் பணிகள் கழகம் (SCERT) 11 மற்றும் 12-ஆம் வகுப்பு புவியியல் பாடநூல் தகவல்கள்',
      designedFor: 'பள்ளி மாணவர்கள், போட்டித் தேர்வு (TNPSC / UPSC) தேர்வர்கள் மற்றும் ஆசிரியர்களுக்கானது'
    }
  }
};
