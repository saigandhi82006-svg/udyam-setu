/**
 * Udyam Setu - Dynamic RAG (Retrieval-Augmented Generation) & Scheme Intelligence Service
 * Combines Deterministic Sector/Demographic Retrieval with Gemini 2.5 Flash Multilingual Reasoning.
 * Supports: Telugu (తెలుగు), Marathi (मराठी), Hindi (हिन्दी), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Bengali (বাংলা), and English.
 */

const { GoogleGenAI } = require('@google/genai');
const dataStore = require('./dataStore');

let aiClient = null;

function getGenAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.warn('Could not initialize GoogleGenAI client for RAG:', err.message);
    }
  }
  return aiClient;
}

/**
 * Check if the message is primarily a greeting (e.g. "hi", "hello", "నమస్కారం", "नमस्ते", "ನಮಸ್ಕಾರ", "নমস্কার").
 * If user includes any business/loan/scheme inquiry, returns false.
 */
function isGreetingMessage(message = '') {
  if (!message) return false;
  const clean = message.trim().toLowerCase().replace(/[!.,?।]/g, '');

  const hasBusinessIntent = /(loan|scheme|business|auto|vehicle|lorry|truck|food|shop|kirana|tiffin|farm|crop|kisan|student|artisan|money|subsidy|transport|ricshaw|rickshaw|రుణం|లోన్|వ్యాపారం|పథకం|ఆటో|వాహనం|సబ్సిడీ|లోన్లు|పథకాలు|రైతు|పంట|కిరాణా|హోటల్|లారీ|లోహార్|లోహా|लोन|योजना|व्यापार|दुकान|गाड़ी|सब्सिडी|ऑटो|रिक्शा|ट्रक|किसान|खेती|ಸಾಲ|ಯೋಜನೆ|ವ್ಯವಹಾರ|ಉದ್ಯಮ|ವಾಹನ|ಆಟೋ|ಲಾರಿ|ಸಾರಿಗೆ|ಸಬ್ಸಿಡಿ|ರೈತ|ಕೃಷಿ|ಅಂಗಡಿ|ಹೋಟೆಲ್|ತಿಂಡಿ|ಋಣ|ঋণ|লোন|যোজনা|পরিকল্পনা|ব্যবসা|গাড়ি|অটো|রিকশা|লরি|ভর্তুকি|কৃষক|কৃষি|দোকান|হোটেল|টিফিন)/i.test(message);
  if (hasBusinessIntent) return false;

  const greetingExact = [
    'hi', 'hello', 'hey', 'namaste', 'namaskaram', 'namaskar', 'vanakkam', 'pranam', 'halo',
    'good morning', 'good afternoon', 'good evening', 'greetings',
    'నమస్కారం', 'నమస్తే', 'హలో', 'హాయ్', 'బాగున్నారా',
    'नमस्ते', 'प्रणाम', 'नमस्कार', 'राम राम', 'जय श्री राम', 'राधे राधे',
    'வணக்கம்', 'नमस्कार',
    'ನಮಸ್ಕಾರ', 'ನಮಸ್ಕಾರಗಳು', 'ನಮಸ್ತೆ', 'ಹಲೋ', 'ಹಾಯ್', 'ಶುಭೋದಯ', 'ಶುಭ ಸಂಜೆ', 'ಹೇಗಿದ್ದೀರ', 'ಹೇಗಿದ್ದೀರಿ',
    'নমস্কার', 'নমস্তে', 'হ্যালো', 'হাই', 'প্রণাম', 'কেমন আছেন', 'শুভ সকাল', 'শুভ সন্ধ্যা', 'কেমন আছো'
  ];

  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length <= 4) {
    if (greetingExact.includes(clean)) return true;
    if (words.some(w => greetingExact.includes(w))) return true;
  }
  return false;
}

/**
 * Generates a polite greeting response asking for user's business/loan intent
 * without dumping schemes (schemes: []).
 */
function buildGreetingResponse(language = 'English') {
  const lang = (language || 'English').toLowerCase();
  let message = '';
  if (lang.includes('telugu') || lang === 'te') {
    message = 'నమస్కారం! నేను ఉద్యమ్ సేతు ఏఐ ప్రభుత్వ పథకాల సలహాదారుని. మీకు నూతన వ్యాపార స్థాపనకు, వాణిజ్య వాహనం కొనుగోలుకు లేదా వ్యాపార విస్తరణకు అవసరమైన పూచీకత్తు లేని రుణాలు, ప్రభుత్వ రాయితీలు (సబ్సిడీలు) మరియు సంక్షేమ పథకాల గురించి పూర్తిగా మార్గదర్శనం చేస్తాను. మీకు ఏ వ్యాపారం, వాహనం లేదా ప్రాజెక్ట్ కోసం రుణ సహాయం కావాలో తెలియజేయండి.';
  } else if (lang.includes('kannada') || lang === 'kn') {
    message = 'ನಮಸ್ಕಾರ! ನಾನು ಉದ್ಯಮ್ ಸೇತು ಎಐ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಸಲಹೆಗಾರ. ಹೊಸ ವ್ಯಾಪಾರ, ಅಂಗಡಿ, ವಾಣಿಜ್ಯ ವಾಹನ (ಆಟೋ/ಲಾರಿ) ಅಥವಾ ಉದ್ಯಮಕ್ಕೆ ಅಗತ್ಯವಿರುವ ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲದ ಸಾಲಗಳು, ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತೇನೆ. ನಿಮಗೆ ಯಾವ ವ್ಯಾಪಾರ, ವಾಹನ ಅಥವಾ ಯೋಜನೆಗೆ ಸಾಲದ ನೆರವು ಬೇಕು?';
  } else if (lang.includes('bengali') || lang === 'bn') {
    message = 'নমস্কার! আমি উদ্যম সেতু এআই সরকারি প্রকল্পের পরামর্শদাতা। নতুন ব্যবসা শুরু, দোকান, বাণিজ্যিক যানবাহন (অটো/লরি) বা প্রকল্পের জন্য বিনা গ্যারান্টির সরকারি ঋণ, ভর্তুকি (সাবসিডি) এবং কল্যাণমূলক প্রকল্পের সম্পূর্ণ তথ্য এখানে পাবেন। আপনি কোন ব্যবসা, গাড়ি বা কাজের জন্য আর্থিক সহায়তা চান?';
  } else if (lang.includes('hindi') || lang === 'hi') {
    message = 'नमस्ते! मैं उद्यम सेतु एआई सरकारी योजना सलाहकार हूँ। आपको नए व्यवसाय, दुकान, वाणिज्यिक वाहन या उद्योग के लिए सरकारी ऋण, सब्सिडी और योजनाओं की पूरी जानकारी यहाँ मिलेगी। आप किस व्यवसाय या कार्य के लिए सहायता चाहते हैं?';
  } else if (lang.includes('marathi') || lang === 'mr') {
    message = 'नमस्कार! मी उद्यम सेतू एआय सरकारी योजना सल्लागार आहे. नवीन व्यवसाय, शेती किंवा व्यावसायिक वाहनासाठी सरकारी कर्ज आणि अनुदानाबद्दल माहिती हवी असल्यास सांगा. तुम्हाला कोणत्या व्यवसायासाठी मदत हवी आहे?';
  } else if (lang.includes('tamil') || lang === 'ta') {
    message = 'வணக்கம்! நான் உத்யம் சேது ஏஐ அரசு திட்ட ஆலோசகர். சிறு தொழில், வணிகம் அல்லது வாகனக் கடனுக்கான அரசு திட்டங்கள் மற்றும் மானியங்களைப் பற்றி நான் உங்களுக்கு வழிகாட்டுகிறேன். உங்களுக்கு என்ன தொழில் లేదా கடன் உதவி தேவை?';
  } else {
    message = 'Hello! I am Udyam Setu AI, your intelligent government scheme advisory engine. I can help you find collateral-free loans, capital subsidies, and welfare schemes tailored precisely to your enterprise goals. Which business, vehicle, or project do you need financial assistance for?';
  }

  return {
    type: 'greeting',
    message,
    target_sector: 'General Advisory',
    schemes: [],
    // Backward compatibility fields
    reply: message,
    recommendedSchemes: [],
    detectedSector: 'General Advisory',
    source: 'Udyam Setu AI Engine',
    language,
    bhashiniVoiceEnabled: true
  };
}

/**
 * Check if the message is an unspecified or discovery inquiry (e.g. "ask", "loan", "schemes", "help", "how to get loan").
 * When true, the AI must NOT dump schemes directly. It must ask who the user is and what business they run or want to start.
 */
function isDiscoveryOrUnspecifiedQuery(message = '', userProfile = null) {
  if (!message) return true;
  const clean = message.trim().toLowerCase().replace(/[!.,?।]/g, '');

  const explicitDiscoveryWords = [
    'ask', 'help', 'scheme', 'schemes', 'loan', 'loans', 'tell me', 'guide me',
    'find schemes', 'show schemes', 'government schemes', 'what schemes', 'how to get loan',
    'start business', 'start a business', 'new business', 'start', 'which scheme',
    'sahaayam', 'yojana', 'yojanayein', 'sarkaari yojana', 'pradhan mantri yojana',
    'అడగండి', 'పథకాలు', 'లోన్', 'రుణం', 'పథకం', 'సహాయం', 'ఏ పథకం', 'రుణాలు', 'ప్రభుత్వ పథకాలు',
    'ಕೇಳಿ', 'ಯೋಜನೆಗಳು', 'ಸಾಲ', 'ಯೋಜನೆ', 'ಸಹಾಯ', 'ಯಾವ ಯೋಜನೆ', 'ಸಾಲಗಳು', 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    'জিজ্ঞাসা', 'জিজ্ঞেস', 'প্রকল্প', 'ঋণ', 'যোজনা', 'সাহায্য', 'কী প্রকল্প', 'সরকারি প্রকল্প',
    'पूछें', 'पूछो', 'योजनाएं', 'लोन', 'ऋण', 'योजना', 'मदद', 'सहायता', 'सरकारी योजना',
    'கேளுங்கள்', 'திட்டங்கள்', 'கடன்', 'திட்டம்', 'உதவி',
    'विचारा', 'योजना', 'कर्ज', 'मदत'
  ];

  if (explicitDiscoveryWords.includes(clean)) return true;

  // Check if message mentions any specific domain/business sector
  const hasSpecificDomain = /(auto|vehicle|lorry|truck|cab|transport|car|tempo|rickshaw|food|tiffin|hotel|canteen|restaurant|tea stall|chai|bakery|catering|kirana|shop|grocery|thela|vendor|cart|hawker|farm|crop|kisan|cattle|dairy|tractor|fish|student|college|study|school|handicap|disability|divyang|pwd|women|mahila|female|shg|artisan|weaver|carpenter|potter|blacksmith|tailor|craft|vishwakarma|industry|factory|manufacturing|msme|ఆటో|వాహనం|లారీ|ఫుడ్|టిఫిన్|హోటల్|కిరాణా|షాప్|తోపుడు బండి|రైతు|వ్యవసాయం|పంట|పాడి|చదువు|విద్య|దివ్యాంగ|వైకల్యం|మహిళ|చేతివృత్తి|చేనేత|పరిశ్రమ|ಆಟೋ|ವಾಹನ|ಲಾರಿ|ಆಹಾರ|ತಿಂಡಿ|ಹೋಟೆಲ್|ಕಿರಾಣಿ|ಅಂಗಡಿ|ತಳ್ಳುವ ಗಾಡಿ|ಕೃಷಿ|ರೈತ|ಬೆಳೆ|ಹಾಲು|ಹೈನುಗಾರಿಕೆ|ಶಿಕ್ಷಣ|ವಿಕಲಚೇತನ|ದಿವ್ಯಾಂಗ|ಮಹಿಳೆ|ಕುಶಲಕರ್ಮಿ|ನೇಕಾರ|ಕೈಗಾರಿಕೆ|অটো|গাড়ি|লরি|খাবার|টিফিন|হোটেল|মুদি|দোকান|হকার|কৃষি|কৃষক|ফসল|দুগ্ধ|শিক্ষা|প্রতিবন্ধী|দিব্যাঙ্গ|মহিলা|কারিগর|তাঁতি|শিল্প|कारखाना|गाड़ी|ऑटो|रिक्शा|ट्रक|टिफिन|होटल|किराना|दुकान|ठेला|रेहड़ी|खेती|किसान|डेयरी|गाय|भैंस|पढ़ाई|छात्र|दिव्यांग|विकलांग|महिला|कारीगर|बुनकर|उद्योग|कारखाना)/i.test(message);

  if (!hasSpecificDomain && clean.length <= 40) {
    return true;
  }

  return false;
}

const DISCOVERY_BUSINESS_OPTIONS = {
  English: [
    { id: 'auto', label: '🛺 Commercial Vehicle / Auto-rickshaw', prompt: 'I want a loan for a commercial auto-rickshaw / transport vehicle' },
    { id: 'food', label: '🍲 Food Business / Tiffin / Hotel', prompt: 'I want a loan for starting a food business or tiffin center' },
    { id: 'retail', label: '🛒 Kirana / Retail Shop / Street Vendor', prompt: 'I want a loan for a kirana shop or retail business' },
    { id: 'agri', label: '🌾 Agriculture / Dairy Farming (KCC)', prompt: 'I want an agriculture or dairy farming loan (KCC)' },
    { id: 'artisan', label: '🧵 Traditional Artisan / Weaver (Vishwakarma)', prompt: 'I am an artisan/weaver looking for PM Vishwakarma scheme' },
    { id: 'msme', label: '🏭 Small Manufacturing / MSME Unit', prompt: 'I want a loan to set up a small manufacturing or MSME business' },
    { id: 'women', label: '👩‍💼 Women Entrepreneur Schemes', prompt: 'I am a woman entrepreneur looking for government schemes and subsidies' },
    { id: 'divyang', label: '♿ Differently Abled / Divyangjan Loan', prompt: 'I am a person with disability looking for NHFDC self-employment loan' }
  ],
  Telugu: [
    { id: 'auto', label: '🛺 వాణిజ్య వాహనం / ఆటో రిక్షా', prompt: 'నాకు కమర్షియల్ ఆటో రిక్షా / వాణిజ్య వాహనం కొనడానికి లోన్ కావాలి' },
    { id: 'food', label: '🍲 ఫుడ్ బిజినెస్ / టిఫిన్ సెంటర్ / హోటల్', prompt: 'నాకు టిఫిన్ సెంటర్ లేదా ఫుడ్ బిజినెస్ కోసం లోన్ కావాలి' },
    { id: 'retail', label: '🛒 కిరాణా దుకాణం / చిల్లర వ్యాపారం', prompt: 'నాకు కిరాణా షాప్ లేదా రిటైల్ వ్యాపారం కోసం లోన్ కావాలి' },
    { id: 'agri', label: '🌾 వ్యవసాయం / పాడి పరిశ్రమ (KCC)', prompt: 'నాకు వ్యవసాయం లేదా పాడి పెంపకం కోసం కిసాన్ క్రెడిట్ కార్డ్ లోన్ కావాలి' },
    { id: 'artisan', label: '🧵 చేతివృత్తులు / చేనేత (పీఎం విశ్వకర్మ)', prompt: 'నేను చేతివృత్తి కళాకారుడిని, నాకు పీఎం విశ్వకర్మ పథకం రుణం కావాలి' },
    { id: 'msme', label: '🏭 చిన్న పరిశ్రమ / తయారీ యూనిట్', prompt: 'నాకు చిన్న పరిశ్రమ లేదా తయారీ యూనిట్ ప్రారంభించడానికి రుణ సహాయం కావాలి' },
    { id: 'women', label: '👩‍💼 మహిళా పారిశ్రామికవేత్తల పథకాలు', prompt: 'మహిళా పారిశ్రామికవేత్తల కోసం ప్రభుత్వ ప్రత్యేక రాయితీ పథకాలు కావాలి' },
    { id: 'divyang', label: '♿ దివ్యాంగుల స్వయం ఉపాధి రుణం (NHFDC)', prompt: 'దివ్యాంగుల స్వయం ఉపాధి కోసం తక్కువ వడ్డీతో కూడిన ప్రభుత్వ రుణం కావాలి' }
  ],
  Kannada: [
    { id: 'auto', label: '🛺 ವಾಣಿಜ್ಯ ವಾಹನ / ಆಟೋ ರಿಕ್ಷಾ', prompt: 'ನನಗೆ ಕಮರ್ಷಿಯಲ್ ಆಟೋ ರಿಕ್ಷಾ ಅಥವಾ ಸರಕು ವಾಹನ ಖರೀದಿಸಲು ಸಾಲ ಬೇಕು' },
    { id: 'food', label: '🍲 ಆಹಾರ ವ್ಯವಹಾರ / ಹೋಟೆಲ್ / ತಿಂಡಿ ಕೇಂದ್ರ', prompt: 'ನನಗೆ ಹೋಟೆಲ್ ಅಥವಾ ತಿಂಡಿ ಕೇಂದ್ರ ಪ್ರಾರಂಭಿಸಲು ಸಾಲ ಬೇಕು' },
    { id: 'retail', label: '🛒 ಕಿರಾಣಿ ಅಂಗಡಿ / ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ', prompt: 'ನನಗೆ ಕಿರಾಣಿ ಅಂಗಡಿ ಅಥವಾ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಸಾಲ ಬೇಕು' },
    { id: 'agri', label: '🌾 ಕೃಷಿ / ಹೈನುಗಾರಿಕೆ (ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್)', prompt: 'ನನಗೆ ಕೃಷಿ ಅಥವಾ ಹೈನುಗಾರಿಕೆಗಾಗಿ ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಾಲ ಬೇಕು' },
    { id: 'artisan', label: '🧵 ಕುಶಲಕರ್ಮಿಗಳು / ನೇಕಾರರು (ವಿಶ್ವಕರ್ಮ)', prompt: 'ನಾನು ಕುಶಲಕರ್ಮಿ, ನನಗೆ ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆಯ ಸಾಲ ಬೇಕು' },
    { id: 'msme', label: '🏭 ಸಣ್ಣ ಕೈಗಾರಿಕೆ / ಉತ್ಪಾದನಾ ಘಟಕ', prompt: 'ನನಗೆ ಸಣ್ಣ ಕೈಗಾರಿಕೆ ಅಥವಾ ಉತ್ಪಾದನಾ ಘಟಕ ಸ್ಥಾಪಿಸಲು ಸಾಲ ಬೇಕು' },
    { id: 'women', label: '👩‍💼 ಮಹಿಳಾ ಉದ್ಯಮಿಗಳ ವಿಶೇಷ ಯೋಜನೆಗಳು', prompt: 'ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗಾಗಿ ಸರ್ಕಾರದ ವಿಶೇಷ ಸಾಲ ಮತ್ತು ಸಬ್ಸಿಡಿ ಯೋಜನೆಗಳು ಬೇಕು' },
    { id: 'divyang', label: '♿ ವಿಕಲಚೇತನರ ಸ್ವಯಂ ಉದ್ಯೋಗ ಸಾಲ (NHFDC)', prompt: 'ವಿಕಲಚೇತನರ ಸ್ವಯಂ ಉದ್ಯೋಗಕ್ಕಾಗಿ ಕಡಿಮೆ ಬಡ್ಡಿಯ ಸರ್ಕಾರಿ ಸಾಲ ಬೇಕು' }
  ],
  Bengali: [
    { id: 'auto', label: '🛺 বাণিজ্যিক যানবাহন / অটো-রিকশা', prompt: 'আমার বাণিজ্যিক অটো-রিকশা বা যানবাহন কেনার জন্য ঋণ প্রয়োজন' },
    { id: 'food', label: '🍲 খাদ্য ব্যবসা / টিফিন / হোটেল', prompt: 'আমার খাদ্য ব্যবসা বা টিফিন সেন্টার খোলার জন্য ঋণ প্রয়োজন' },
    { id: 'retail', label: '🛒 মুদি দোকান / খুচরা ব্যবসা / হকার', prompt: 'আমার মুদি দোকান বা খুচরা ব্যবসার জন্য ঋণ প্রয়োজন' },
    { id: 'agri', label: '🌾 কৃষি / দুগ্ধ খামার (কিসান ক্রেডিট)', prompt: 'আমার কৃষি বা দুগ্ধ খামারের জন্য কিসান ক্রেডিট কার্ড ঋণ প্রয়োজন' },
    { id: 'artisan', label: '🧵 ঐতিহ্যবাহী কারিগর / তাঁতি (বিশ্বকর্মা)', prompt: 'আমি একজন কারিগর, আমার প্রধানমন্ত্রী বিশ্বকর্মা ঋণ প্রয়োজন' },
    { id: 'msme', label: '🏭 ক্ষুদ্র শিল্প / উৎপাদন ইউনিট', prompt: 'আমার ক্ষুদ্র শিল্প বা ম্যানুফ্যাকচারিং ইউনিট স্থাপনের জন্য ঋণ প্রয়োজন' },
    { id: 'women', label: '👩‍💼 মহিলা উদ্যোক্তা বিশেষ প্রকল্প', prompt: 'মহিলা উদ্যোক্তাদের জন্য সরকারি বিশেষ অনুদান ও ঋণ প্রকল্প প্রয়োজন' },
    { id: 'divyang', label: '♿ প্রতিবন্ধী স্বনির্ভর ঋণ (NHFDC)', prompt: 'প্রতিবন্ধী ব্যক্তিদের স্বনির্ভরতার জন্য কম সুদের সরকারি ঋণ প্রকল্প প্রয়োজন' }
  ],
  Hindi: [
    { id: 'auto', label: '🛺 वाणिज्यिक वाहन / ऑटो-रिक्शा', prompt: 'मुझे कमर्शियल ऑटो रिक्शा या कमर्शियल वाहन खरीदने के लिए लोन चाहिए' },
    { id: 'food', label: '🍲 खाद्य व्यवसाय / टिफिन सेंटर / होटल', prompt: 'मुझे टिफिन सेंटर या खाद्य व्यवसाय शुरू करने के लिए लोन चाहिए' },
    { id: 'retail', label: '🛒 किराना दुकान / खुदरा व्यापार / रेहड़ी', prompt: 'मुझे किराना दुकान या खुदरा व्यापार के लिए लोन चाहिए' },
    { id: 'agri', label: '🌾 कृषि / डेयरी फार्मिंग (KCC)', prompt: 'मुझे कृषि या डेयरी फार्मिंग के लिए किसान क्रेडिट कार्ड लोन चाहिए' },
    { id: 'artisan', label: '🧵 दस्तकार / कारीगर / बुनकर (विश्वकर्मा)', prompt: 'मैं एक कारीगर हूँ, मुझे पीएम विश्वकर्मा योजना के तहत लोन चाहिए' },
    { id: 'msme', label: '🏭 लघु उद्योग / विनिर्माण इकाई', prompt: 'मुझे लघु उद्योग या विनिर्माण इकाई शुरू करने के लिए लोन चाहिए' },
    { id: 'women', label: '👩‍💼 महिला उद्यमी विशेष योजनाएं', prompt: 'महिला उद्यमियों के लिए सरकारी विशेष ऋण और सब्सिडी योजनाएं चाहिए' },
    { id: 'divyang', label: '♿ दिव्यांगजन स्वरोजगार ऋण (NHFDC)', prompt: 'दिव्यांगजनों के स्वरोजगार के लिए कम ब्याज वाला सरकारी लोन चाहिए' }
  ],
  Marathi: [
    { id: 'auto', label: '🛺 व्यावसायिक वाहन / ऑटो-रिक्षा', prompt: 'मला व्यावसायिक ऑटो रिक्षा किंवा वाहन खरेदीसाठी कर्ज हवे आहे' },
    { id: 'food', label: '🍲 खाद्य व्यवसाय / हॉटेल / टिफिन', prompt: 'मला हॉटेल किंवा खाद्य व्यवसाय सुरू करण्यासाठी कर्ज हवे आहे' },
    { id: 'retail', label: '🛒 किराणा दुकान / किरकोळ व्यापार', prompt: 'मला किराणा दुकान किंवा किरकोळ व्यवसायासाठी कर्ज हवे आहे' },
    { id: 'agri', label: '🌾 शेती / दुग्ध व्यवसाय (KCC)', prompt: 'मला शेती किंवा दुग्ध व्यवसायासाठी किसान क्रेडिट कार्ड कर्ज हवे आहे' },
    { id: 'artisan', label: '🧵 कारागीर / विणकर (विश्वकर्मा)', prompt: 'मी एक कारागीर आहे, मला पीएम विश्वकर्मा योजनेचे कर्ज हवे आहे' },
    { id: 'msme', label: '🏭 लहान उद्योग / मॅन्युफॅक्चरिंग', prompt: 'मला लहान उद्योग सुरू करण्यासाठी सरकारी कर्ज हवे आहे' },
    { id: 'women', label: '👩‍💼 महिला उद्योजक विशेष योजना', prompt: 'महिला उद्योजकांसाठी सरकारी विशेष अनुदान आणि कर्ज हवे आहे' },
    { id: 'divyang', label: '♿ दिव्यांगजन स्वयंरोजगार कर्ज (NHFDC)', prompt: 'दिव्यांगांच्या स्वयंरोजगारासाठी कमी व्याजाचे सरकारी कर्ज हवे आहे' }
  ],
  Tamil: [
    { id: 'auto', label: '🛺 வணிக வாகனம் / ஆட்டோ ரிக்ஷா', prompt: 'வணிக ஆட்டோ அல்லது வாகனம் வாங்க கடன் வேண்டும்' },
    { id: 'food', label: '🍲 உணவு வணிகம் / ஹோட்டல் / டிபன்', prompt: 'உணவு வணிகம் அல்லது ஹோட்டல் தொடங்க கடன் வேண்டும்' },
    { id: 'retail', label: '🛒 மளிகைக் கடை / சில்லறை வணிகம்', prompt: 'மளிகைக் கடை அல்லது சில்லறை வணிகத்திற்கு கடன் வேண்டும்' },
    { id: 'agri', label: '🌾 விவசாயம் / பால் பண்ணை (KCC)', prompt: 'விவசாயம் அல்லது பால் பண்ணைக்கு கிசான் கடன் அட்டை வேண்டும்' },
    { id: 'artisan', label: '🧵 கைவினைஞர்கள் / நெசவாளர்கள் (விஸ்வகர்மா)', prompt: 'கைவினைஞர் விஸ்வகர்மா கடன் உதவி வேண்டும்' },
    { id: 'msme', label: '🏭 குறுந்தொழில் / உற்பத்தி பிரிவு', prompt: 'சிறு தொழில் தொடங்க கடன் உதவி வேண்டும்' },
    { id: 'women', label: '👩‍💼 பெண் தொழில்முனைவோர் திட்டங்கள்', prompt: 'பெண் தொழில்முனைவோருக்கான அரசு மானிய திட்டங்கள் வேண்டும்' },
    { id: 'divyang', label: '♿ மாற்றுத்திறனாளிகள் சுயதொழில் கடன் (NHFDC)', prompt: 'மாற்றுத்திறனாளிகளுக்கான குறைந்த வட்டி அரசு கடன் வேண்டும்' }
  ]
};

/**
 * Generates an interactive conversational discovery response asking for user's identity & business.
 * Does NOT dump schemes directly. Provides business_options for the user to select.
 */
function buildDiscoveryResponse(language = 'English') {
  const lang = (language || 'English').toLowerCase();
  let message = '';
  let langKey = 'English';

  if (lang.includes('telugu') || lang === 'te') {
    langKey = 'Telugu';
    message = 'నమస్కారం! ఉద్యమ్ సేతు ఏఐ ప్రభుత్వ పథకాల సలహా కేంద్రానికి స్వాగతం. మీకు అత్యంత అనువైన ప్రభుత్వ పథకాలు, పూచీకత్తు లేని రుణాలు మరియు సబ్సిడీలను కనుగొనడానికి, దయచేసి మీరు ఎవరూ మరియు ఏ వ్యాపారాన్ని నడుపుతున్నారు లేదా ప్రారంభించాలనుకుంటున్నారో క్రింది ఎంపికలలో ఎంచుకోండి లేదా నేరుగా టైప్ చేయండి:';
  } else if (lang.includes('kannada') || lang === 'kn') {
    langKey = 'Kannada';
    message = 'ನಮಸ್ಕಾರ! ಉದ್ಯಮ ಸೇತು ಎಐ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಸಲಹಾ ಕೇಂದ್ರಕ್ಕೆ ಸ್ವಾಗತ. ನಿಮಗೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಸಾಲಗಳು, ಅಡಮಾನ ರಹಿತ ನೆರವು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಲು, ದಯವಿಟ್ಟು ನೀವು ಯಾರು ಮತ್ತು ಯಾವ ವ್ಯವಹಾರವನ್ನು ನಡೆಸುತ್ತಿದ್ದೀರಿ ಅಥವಾ ಪ್ರಾರಂಭಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂಬುದನ್ನು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಿಂದ ಆರಿಸಿ ಅಥವಾ ನೇರವಾಗಿ ಟೈಪ್ ಮಾಡಿ:';
  } else if (lang.includes('bengali') || lang === 'bn') {
    langKey = 'Bengali';
    message = 'নমস্কার! উদ্যম সেতু এআই সরকারি প্রকল্পের পরামর্শ কেন্দ্রে আপনাকে স্বাগত জানাই। আপনার জন্য সবচেয়ে উপযুক্ত সরকারি ঋণ, বিনা গ্যারান্টির সহায়তা এবং ভর্তুকি খুঁজে পেতে, অনুগ্রহ করে জানান আপনি কে এবং কোন ব্যবসা পরিচালনা করছেন বা শুরু করতে চান? নিচের বিকল্পগুলি থেকে বেছে নিন অথবা লিখে জানান:';
  } else if (lang.includes('hindi') || lang === 'hi') {
    langKey = 'Hindi';
    message = 'नमस्ते! उद्यम सेतु एआई सरकारी योजना सलाहकार केंद्र में आपका स्वागत है। आपके लिए सबसे उपयुक्त सरकारी योजनाएं, बिना गारंटी लोन और सब्सिडी ढूंढने के लिए, कृपया हमें बताएं कि आप कौन हैं और कौन सा व्यवसाय चला रहे हैं या शुरू करना चाहते हैं? नीचे दिए गए विकल्पों में से चुनें या लिखकर बताएं:';
  } else if (lang.includes('marathi') || lang === 'mr') {
    langKey = 'Marathi';
    message = 'नमस्कार! उद्यम सेतू एआय सरकारी योजना सल्लागार केंद्रात आपले स्वागत आहे. आपल्यासाठी सर्वात योग्य सरकारी योजना, विनातारण कर्ज आणि अनुदान शोधण्यासाठी, कृपया आपण कोण आहात आणि कोणता व्यवसाय सुरू करू इच्छिता किंवा चालवत आहात हे खालील पर्यायांमधून निवडा किंवा लिहून कळवा:';
  } else if (lang.includes('tamil') || lang === 'ta') {
    langKey = 'Tamil';
    message = 'வணக்கம்! உத்யம் சேது ஏஐ அரசு திட்ட ஆலோசனை மையத்திற்கு உங்களை வரவேற்கிறோம். உங்களுக்கு மிகவும் பொருத்தமான அரசு கடன்கள் மற்றும் மானியங்களைக் கண்டறிய, நீங்கள் என்ன தொழில் செய்கிறீர்கள் அல்லது தொடங்க திட்டமிட்டுள்ளீர்கள் என்பதை கீழே உள்ள விருப்பங்களில் இருந்து தேர்வு செய்யவும் அல்லது பதிவிடவும்:';
  } else {
    langKey = 'English';
    message = 'Welcome to Udyam Setu AI, your intelligent government scheme advisor. To recommend the most suitable collateral-free loans, subsidies, and schemes, please tell us: Who are you and which business or enterprise do you run or plan to start? You can select from the options below or type your details:';
  }

  const options = DISCOVERY_BUSINESS_OPTIONS[langKey] || DISCOVERY_BUSINESS_OPTIONS.English;

  return {
    type: 'business_selection',
    message,
    target_sector: 'Discovery',
    business_options: options,
    schemes: [],
    reply: message,
    recommendedSchemes: [],
    detectedSector: 'Discovery',
    source: 'Udyam Setu AI Engine',
    language,
    bhashiniVoiceEnabled: true
  };
}

/**
 * 1. Intelligent Sector & Intent Classifier
 * Accurately classifies user goal into explicit domain sectors.
 */
function classifyUserSector(message = '', userProfile = null) {
  if (isDiscoveryOrUnspecifiedQuery(message, userProfile)) {
    return 'Discovery';
  }

  const text = (message + ' ' + (userProfile?.businessType || '')).toLowerCase();

  // Commercial Vehicle / Transport / Logistics
  if (
    text.includes('commercial vehicle') || text.includes('vehicle') || text.includes('auto') ||
    text.includes('rickshaw') || text.includes('lorry') || text.includes('truck') ||
    text.includes('transport') || text.includes('taxi') || text.includes('cab') ||
    text.includes('goods carriage') || text.includes('delivery van') || text.includes('driver') ||
    text.includes('tempo') || text.includes('డ్రైవర్') || text.includes('ఆటో') || text.includes('వాహనం') ||
    text.includes('లారీ') || text.includes('రవాణా') || text.includes('టాక్సీ') || text.includes('గాడీ') ||
    text.includes('गाड़ी') || text.includes('ऑटो') || text.includes('रिक्शा') || text.includes('ट्रक') ||
    text.includes('ट्रांसपोर्ट') || text.includes('ड्राइवर') || text.includes('वाहन') || text.includes('टैक्सी') ||
    text.includes('ವಾಹನ') || text.includes('ಆಟೋ') || text.includes('ಲಾರಿ') || text.includes('ಟ್ಯಾಕ್ಸಿ') ||
    text.includes('ಸಾರಿಗೆ') || text.includes('ಚಾಲಕ') || text.includes('ರಿಕ್ಷಾ') || text.includes('ಗೂಡ್ಸ್') ||
    text.includes('গাড়ি') || text.includes('অটো') || text.includes('রিকশা') || text.includes('লরি') ||
    text.includes('ট্রাক') || text.includes('পরিবহন') || text.includes('ড্রাইভার') || text.includes('ট্যাক্সি')
  ) {
    return 'Commercial Transport';
  }

  // Food Business & Catering
  if (
    text.includes('food') || text.includes('tiffin') || text.includes('hotel') || text.includes('canteen') ||
    text.includes('restaurant') || text.includes('snack') || text.includes('tea stall') || text.includes('chai') ||
    text.includes('bakery') || text.includes('catering') || text.includes('కిరాణా') || text.includes('టిఫిన్') ||
    text.includes('హోటల్') || text.includes('భోజనం') || text.includes('ఆహారం') || text.includes('होटल') ||
    text.includes('टिफिन') || text.includes('चाय') || text.includes('खाना') || text.includes('भोजन') ||
    text.includes('ढाबा') || text.includes('नाश्ता') ||
    text.includes('ಹೋಟೆಲ್') || text.includes('ತಿಂಡಿ') || text.includes('ಊಟ') || text.includes('ಚಹಾ') ||
    text.includes('ಬೇಕರಿ') || text.includes('ಖಾದ್ಯ') || text.includes('ಆಹಾರ') ||
    text.includes('হোটেল') || text.includes('টিফিন') || text.includes('খাবার') || text.includes('চা') ||
    text.includes('বেকারি') || text.includes('রেস্তোরাঁ') || text.includes('ভোজন')
  ) {
    return 'Food Business';
  }

  // Street Vendors
  if (
    text.includes('street vendor') || text.includes('thela') || text.includes('cart') || text.includes('hawker') ||
    text.includes('footpath') || text.includes('roadside') || text.includes('తోపుడు బండి') || text.includes('బండి') ||
    text.includes('ఫెరీవాలా') || text.includes('ठेला') || text.includes('रेहड़ी') || text.includes('पटरी') ||
    text.includes('फेरीवाला') || text.includes('ತಳ್ಳುವ ಗಾಡಿ') || text.includes('ಬೀದಿ ಬದಿ') ||
    text.includes('হকার') || text.includes('ঠেলাগাড়ি') || text.includes('ফুটপাত')
  ) {
    return 'Street Vendors';
  }

  // Agriculture & Allied
  if (
    text.includes('farm') || text.includes('agri') || text.includes('kisan') || text.includes('crop') ||
    text.includes('tractor') || text.includes('dairy') || text.includes('cattle') || text.includes('fish') ||
    text.includes('రైతు') || text.includes('వ్యవసాయం') || text.includes('పంట') || text.includes('శెతి') ||
    text.includes('शेतकरी') || text.includes('खेती') || text.includes('किसान') ||
    text.includes('ಕೃಷಿ') || text.includes('ರೈತ') || text.includes('ಬೆಳೆ') || text.includes('ಟ್ರಾಕ್ಟರ್') ||
    text.includes('ಹಸು') || text.includes('ಹಾಲು') ||
    text.includes('কৃষি') || text.includes('কৃষক') || text.includes('ফসল') || text.includes('ট্র্যাক্টর') ||
    text.includes('গবাদি পশু') || text.includes('মৎস্য')
  ) {
    return 'Agriculture';
  }

  // Education / Students
  if (
    text.includes('student') || text.includes('college') || text.includes('education') || text.includes('study') ||
    text.includes('degree') || text.includes('fee') || text.includes('university') ||
    text.includes('చదువు') || text.includes('విద్య') || text.includes('शिक्षण') || text.includes('विद्यार्थी') ||
    text.includes('पढ़ाई') || text.includes('छात्र') ||
    text.includes('ಶಿಕ್ಷಣ') || text.includes('ವಿದ್ಯಾರ್ಥಿ') || text.includes('ಕಾಲೇಜು') || text.includes('ಶಾಲೆ') ||
    text.includes('শিক্ষা') || text.includes('ছাত্র') || text.includes('কলেজ') || text.includes('বিশ্ববিদ্যালয়')
  ) {
    return 'Education / Youth';
  }

  // Differently Abled / Divyangjan
  if (
    text.includes('disability') || text.includes('pwd') || text.includes('divyang') || text.includes('handicap') ||
    text.includes('దివ్యాంగుల') || text.includes('వైకల్యం') || text.includes('వికలాంగ') ||
    text.includes('दिव्यांग') || text.includes('विकलांग') ||
    text.includes('ವಿಕಲಚೇತನ') || text.includes('ಅಂಗವಿಕಲ') || text.includes('ದಿವ್ಯಾಂಗ') ||
    text.includes('প্রতিবন্ধী') || text.includes('দিব্যাঙ্গ') || text.includes('শারীরিক প্রতিবন্ধী') ||
    userProfile?.hasDisability
  ) {
    return 'Differently Abled / Divyangjan';
  }

  // Women Entrepreneur
  if (
    text.includes('women') || text.includes('mahila') || text.includes('shg') || text.includes('female') ||
    text.includes('మహిళ') || text.includes('ఆడ') || text.includes('महिला') ||
    text.includes('ಮಹಿಳೆ') || text.includes('ಸ್ತ್ರೀ') ||
    text.includes('মহিলা') || text.includes('নারী') ||
    userProfile?.category === 'Women Entrepreneur'
  ) {
    return 'Women Entrepreneur';
  }

  // Artisans & Weavers
  if (
    text.includes('artisan') || text.includes('weaver') || text.includes('carpenter') || text.includes('potter') ||
    text.includes('blacksmith') || text.includes('tailor') || text.includes('handloom') || text.includes('craft') ||
    text.includes('చేతివృత్తి') || text.includes('చేనేత') || text.includes('వడ్రంగి') || text.includes('కమ్మరి') ||
    text.includes('కుమ్మరి') || text.includes('దర్జీ') || text.includes('कारागीर') || text.includes('हातमाग') ||
    text.includes('बढ़ई') || text.includes('लोहार') || text.includes('दर्जी') ||
    text.includes('ಕುಂಬಾರ') || text.includes('ಕಮ್ಮಾರ') || text.includes('ಬಡಗಿ') || text.includes('ದರ್ಜಿ') ||
    text.includes('ನೇಯ್ಗೆ') || text.includes('ಕರಕುಶಲ') ||
    text.includes('কারিগর') || text.includes('তাঁতি') || text.includes('ছুতোর') || text.includes('কামার') ||
    text.includes('কুমার') || text.includes('দর্জি') || text.includes('হস্তশিল্প')
  ) {
    return 'Artisans & Weavers';
  }

  return 'MSME / Small Business';
}

/**
 * 2. Hybrid Dynamic Scheme Retriever with Strict Positive & Negative Sector Filtering
 */
async function retrieveRelevantSchemes(query, userProfile = null) {
  const allSchemes = await dataStore.getSchemes();
  const detectedSector = classifyUserSector(query, userProfile);
  const queryLower = query.toLowerCase();

  if (detectedSector === 'Discovery') {
    return [];
  }

  // Strict domain candidate filtering to prevent hallucinated cross-sector suggestions
  let candidateCodes = [];

  if (detectedSector === 'Commercial Transport') {
    // Stand-Up India (Vehicles/Transport), Mudra Tarun/Kishor, PMEGP (Transport Services), CGTMSE
    // Strictly NO PM-SVANIDHI, NO KCC, NO SMAM, NO AIF
    candidateCodes = ['PMMY', 'STAND-UP', 'PMEGP', 'CGTMSE'];
  } else if (detectedSector === 'Food Business') {
    // Mudra, PM-SVANIDHI (Food vendors), PMEGP (Food processing)
    // Strictly NO KCC, NO SMAM, NO Education
    candidateCodes = ['PMMY', 'PM-SVANIDHI', 'PMEGP'];
  } else if (detectedSector === 'Street Vendors') {
    // PM SVANidhi, Mudra Shishu
    candidateCodes = ['PM-SVANIDHI', 'PMMY'];
  } else if (detectedSector === 'Agriculture') {
    // KCC, SMAM (Tractor subsidy), AIF (Cold store), PMMSY (Fisheries)
    // Strictly NO PM-SVANIDHI
    candidateCodes = ['KCC', 'SMAM', 'AIF', 'PMMSY'];
  } else if (detectedSector === 'Education / Youth') {
    candidateCodes = ['PM-VIDYALAXMI', 'CSIS'];
  } else if (detectedSector === 'Differently Abled / Divyangjan') {
    candidateCodes = ['NHFDC-DSY', 'PMEGP', 'PMMY', 'STAND-UP'];
  } else if (detectedSector === 'Women Entrepreneur') {
    candidateCodes = ['STAND-UP', 'MCY', 'PMEGP', 'PMMY'];
  } else if (detectedSector === 'Artisans & Weavers') {
    candidateCodes = ['PM-VISHWAKARMA', 'MCY', 'PMEGP', 'PMMY'];
  } else {
    candidateCodes = ['PMMY', 'PMEGP', 'CGTMSE', 'STAND-UP'];
  }

  const filteredSchemes = allSchemes.filter(s => candidateCodes.includes(s.shortCode || s.schemeId));

  // Score candidates based on query specifics & user profile
  const scored = filteredSchemes.map(scheme => {
    let score = 50;
    const code = scheme.shortCode || scheme.schemeId;

    if (detectedSector === 'Commercial Transport') {
      if (code === 'PMMY') score += 35; // Ideal for Auto/Lorry/Commercial Vehicle up to 10 Lakhs
      if (code === 'STAND-UP') score += 30; // Ideal for Women/SC/ST commercial fleet
      if (code === 'PMEGP') score += 20; // 35% subsidy on service transport units
    }

    if (detectedSector === 'Food Business') {
      if (queryLower.includes('street') || queryLower.includes('cart') || queryLower.includes('బండి') || queryLower.includes('ठेला')) {
        if (code === 'PM-SVANIDHI') score += 35;
      } else {
        if (code === 'PMMY') score += 30;
        if (code === 'PMEGP') score += 25;
      }
    }

    if (userProfile?.hasDisability && code === 'NHFDC-DSY') score += 40;
    if (userProfile?.category === 'Women Entrepreneur' && (code === 'STAND-UP' || code === 'MCY')) score += 30;
    if ((userProfile?.category === 'SC' || userProfile?.category === 'ST') && code === 'STAND-UP') score += 30;

    return { scheme, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Deduplicate by scheme_id / shortCode
  const uniqueSchemes = [];
  const seenCodes = new Set();
  for (const item of scored) {
    const code = item.scheme.shortCode || item.scheme.schemeId;
    if (!seenCodes.has(code)) {
      seenCodes.add(code);
      uniqueSchemes.push(item.scheme);
    }
    if (uniqueSchemes.length >= 3) break;
  }

  return uniqueSchemes;
}

/**
 * Formats a scheme into the strict JSON schema specification with 100% pure native language.
 */
function formatSchemeForSchema(scheme, detectedSector, language = 'English') {
  const lang = (language || 'English').toLowerCase();
  const code = scheme.shortCode || scheme.schemeId || 'PMMY';
  const schemeId = code;
  const redirect_url = `/schemes/${schemeId}`;

  // TELUGU LOCALIZATION (100% Pure Telugu, Zero English)
  if (lang.includes('telugu') || lang === 'te') {
    if (code === 'PMMY') {
      const isTransport = detectedSector === 'Commercial Transport';
      return {
        scheme_id: schemeId,
        title: isTransport ? 'ప్రధానమంత్రి ముద్ర యోజన (వాణిజ్య వాహన & ఆటో రుణం)' : 'ప్రధానమంత్రి ముద్ర యోజన (PMMY)',
        sector: isTransport ? 'వాణిజ్య రవాణా / చిన్న వ్యాపారం' : 'చిన్న వ్యాపారం / ఎంఎస్ఎంఈ',
        max_amount: 'రూ. 10,00,000 వరకు',
        benefit_tag: 'పూచీకత్తు లేని రుణం (జీరో కొలేటరల్)',
        description: isTransport 
          ? 'ఆటో రిక్షా, గూడ్స్ వాహనం, లేదా ట్రాన్స్‌పోర్ట్ బిజినెస్ ప్రారంభించడానికి ముద్ర కిశోర్ మరియు తరుణ్ లోన్లు ఎటువంటి ఆస్తి తాకట్టు లేకుండా లభిస్తాయి. సులభమైన నెలవారీ వాయిదాలలో తక్కువ వడ్డీతో ఈ రుణాన్ని తిరిగి చెల్లించవచ్చు.'
          : 'చిన్న వ్యాపారులు, దుకాణదారులు ఎటువంటి ఆస్తి తాకట్టు లేకుండా రూ. 10 లక్షల వరకు సులభంగా రుణం పొందవచ్చు. బ్యాంకుల ద్వారా సులభమైన వాయిదాలలో ఈ రుణం లభిస్తుంది.',
        redirect_url
      };
    }
    if (code === 'STAND-UP') {
      return {
        scheme_id: schemeId,
        title: 'స్టాండప్ ఇండియా పథకం (రవాణా & వాణిజ్య వాహనాలు)',
        sector: 'మహిళలు & ఎస్సీ/ఎస్టీ పారిశ్రామికవేత్తలు',
        max_amount: 'రూ. 10 లక్షల నుండి రూ. 1 కోటి వరకు',
        benefit_tag: 'దీర్ఘకాలిక రుణ సదుపాయం & ప్రభుత్వ హామీ',
        description: 'మహిళా మరియు ఎస్సీ/ఎస్టీ పారిశ్రామికవేత్తలు వాణిజ్య వాహనాలు, లారీలు, రవాణా యూనిట్లను ఏర్పాటు చేయడానికి బ్యాంకుల ద్వారా రూ. 1 కోటి వరకు రుణం పొందవచ్చు. ప్రభుత్వ క్రెడిట్ గ్యారెంటీతో సురక్షితమైన మూలధనం లభిస్తుంది.',
        redirect_url
      };
    }
    if (code === 'PMEGP') {
      return {
        scheme_id: schemeId,
        title: 'పీఎంఈజీపీ పథకం (సేవా & తయారీ రంగం)',
        sector: 'తయారీ & రవాణా సర్వీస్ రంగం',
        max_amount: 'రూ. 20 లక్షల నుండి రూ. 50 లక్షల వరకు',
        benefit_tag: '35% వరకు ప్రభుత్వ నగదు రాయితీ (సబ్సిడీ)',
        description: 'రవాణా సర్వీసులు లేదా సరికొత్త వ్యాపార పరిశ్రమల స్థాపనకు ప్రభుత్వం 35% వరకు తిరిగి చెల్లించనవసరం లేని ఉచిత నగదు సబ్సిడీని అందిస్తుంది. గ్రామీణ నిరుద్యోగ యువత మరియు మహిళలకు ఇది అత్యుత్తమ పథకం.',
        redirect_url
      };
    }
    if (code === 'PM-SVANIDHI') {
      return {
        scheme_id: schemeId,
        title: 'పీఎం స్వనిధి పథకం (వీధి వ్యాపారుల మైక్రో క్రెడిట్)',
        sector: 'వీధి వ్యాపారులు & తోపుడు బండ్లు',
        max_amount: 'రూ. 10,000 నుండి రూ. 50,000 వరకు',
        benefit_tag: '7% వడ్డీ రాయితీ & క్యాష్‌బ్యాక్ ప్రోత్సాహకాలు',
        description: 'తోపుడు బండ్ల వ్యాపారులు, టిఫిన్ బండ్ల విక్రేతలు ఎటువంటి హామీ లేకుండా ప్రారంభ మూలధనంగా సులభంగా రుణం పొందవచ్చు. సకాలంలో రుణం చెల్లిస్తే 7% వడ్డీ రాయితీ మరియు డిజిటల్ క్యాష్‌బ్యాక్ లభిస్తుంది.',
        redirect_url
      };
    }
    if (code === 'KCC') {
      return {
        scheme_id: schemeId,
        title: 'కిసాన్ క్రెడిట్ కార్డ్ (KCC) పథకం',
        sector: 'వ్యవసాయం & పాడి పరిశ్రమ',
        max_amount: 'రూ. 3,00,000 వరకు',
        benefit_tag: 'కేవలం 4% తక్కువ ప్రభావవంతమైన వడ్డీ రేటు',
        description: 'రైతులు, పాడి పెంపకందారులు మరియు మత్స్యకారులకు పంట పెట్టుబడి మరియు పశువుల పోషణ కోసం తక్కువ వడ్డీకే రుణం లభిస్తుంది. సకాలంలో చెల్లిస్తే ప్రభుత్వం 3% వడ్డీ రాయితీని అందిస్తుంది.',
        redirect_url
      };
    }
    if (code === 'SMAM') {
      return {
        scheme_id: schemeId,
        title: 'వ్యవసాయ యాంత్రీకరణ సబ్సిడీ పథకం (ట్రాక్టర్ సబ్సిడీ)',
        sector: 'వ్యవసాయం',
        max_amount: '40% నుండి 50% ప్రభుత్వ సబ్సిడీ',
        benefit_tag: 'ట్రాక్టర్లు & ఆధునిక వ్యవసాయ పనిముట్ల కొనుగోలు',
        description: 'రైతులు కొత్త ట్రాక్టర్లు, వరి కోత యంత్రాలు మరియు ఆధునిక వ్యవసాయ పరికరాలు కొనుగోలు చేయడానికి ప్రభుత్వం 50% వరకు నగదు సబ్సిడీని అందిస్తుంది. దీని ద్వారా వ్యవసాయ ఉత్పాదకత పెరుగుతుంది.',
        redirect_url
      };
    }
    if (code === 'PM-VISHWAKARMA') {
      return {
        scheme_id: schemeId,
        title: 'పీఎం విశ్వకర్మ యోజన (చేతివృత్తుల పథకం)',
        sector: 'చేతివృత్తులు & సంప్రదాయ కళాకారులు',
        max_amount: 'రూ. 15,000 టూల్‌కిట్ గ్రాంట్ + రూ. 3 లక్షల రుణం',
        benefit_tag: 'కేవలం 5% తక్కువ వడ్డీ & ఉచిత శిక్షణ',
        description: 'వడ్రంగులు, కమ్మరులు, కుమ్మరులు, దర్జీలు మరియు చేనేత కార్మికులకు ఉచిత ఆధునిక పనిముట్లు మరియు తక్కువ వడ్డీతో ఆర్థిక రుణం లభిస్తుంది. రోజువారీ స్టైపెండ్‌తో కూడిన నైపుణ్య శిక్షణ కూడా ప్రభుత్వం ఉచితంగా అందిస్తుంది.',
        redirect_url
      };
    }
    if (code === 'NHFDC-DSY') {
      return {
        scheme_id: schemeId,
        title: 'దివ్యాంగుల స్వావలంబన యోజన (NHFDC)',
        sector: 'దివ్యాంగుల సాధికారత (PwD)',
        max_amount: 'రూ. 50,00,000 వరకు',
        benefit_tag: 'కేవలం 5% నుండి 8% రాయితీ వడ్డీ రేటు',
        description: '40% లేదా అంతకంటే ఎక్కువ వైకల్యం ఉన్న దివ్యాంగులకు స్వయం ఉపాధి మరియు వ్యాపార స్థాపన కోసం ప్రత్యేక రాయితీ రుణం లభిస్తుంది. మహిళా దివ్యాంగులకు అదనంగా 1% వడ్డీ రాయితీ మరియు రూ. 50,000 వరకు పూచీకత్తు అవసరం లేదు.',
        redirect_url
      };
    }
  }

  // KANNADA LOCALIZATION (100% Pure Kannada, Zero English)
  if (lang.includes('kannada') || lang === 'kn') {
    if (code === 'PMMY') {
      const isTransport = detectedSector === 'Commercial Transport';
      return {
        scheme_id: schemeId,
        title: isTransport ? 'ಪ್ರಧಾನಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (ವಾಣಿಜ್ಯ ವಾಹನ & ಆಟೋ ಸಾಲ)' : 'ಪ್ರಧಾನಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (PMMY)',
        sector: isTransport ? 'ವಾಣಿಜ್ಯ ಸಾರಿಗೆ / ಸಣ್ಣ ವ್ಯಾಪಾರ' : 'ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮ',
        max_amount: '₹10,00,000 ವರೆಗೆ',
        benefit_tag: 'ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲದ ಸಾಲ (ಕೊಲ್ಯಾಟರಲ್-ಮುಕ್ತ)',
        description: isTransport 
          ? 'ವಾಣಿಜ್ಯ ಆಟೋ ರಿಕ್ಷಾ, ಸಣ್ಣ ಸರಕು ಸಾಗಣೆ ವಾಹನ ಅಥವಾ ಟ್ಯಾಕ್ಸಿ ಖರೀದಿಸಲು ಮುದ್ರಾ ಕಿಶೋರ್ ಮತ್ತು ತರುಣ್ ಸಾಲಗಳು ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನವಿಲ್ಲದೆ ಲಭ್ಯವಿವೆ. ಸುಲಭ ಮಾಸಿಕ ಕಂತುಗಳ ಮೂಲಕ ಬ್ಯಾಂಕ್ ಸಾಲವನ್ನು ಮರುಪಾವತಿಸಬಹುದು.'
          : 'ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಅಂಗಡಿಕಾರರು ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನವಿಲ್ಲದೆ ₹10 ಲಕ್ಷದವರೆಗೆ ಸುಲಭ ಸಾಲ ಪಡೆಯಬಹುದು. ಬ್ಯಾಂಕುಗಳ ಮೂಲಕ ಸುಲಭ ಕಂತುಗಳಲ್ಲಿ ಈ ಸಾಲ ಲಭ್ಯವಿದೆ.',
        redirect_url
      };
    }
    if (code === 'STAND-UP') {
      return {
        scheme_id: schemeId,
        title: 'ಸ್ಟ್ಯಾಂಡಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ವಾಣಿಜ್ಯ ವಾಹನಗಳು & ಸಾರಿಗೆ)',
        sector: 'ಮಹಿಳೆಯರು & ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದ ಉದ್ಯಮಿಗಳು',
        max_amount: '₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ',
        benefit_tag: 'ದೀರ್ಘಾವಧಿ ಸಾಲ ಸೌಲಭ್ಯ & ಸರ್ಕಾರಿ ಗ್ಯಾರಂಟಿ',
        description: 'ಮಹಿಳೆಯರು ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಉದ್ಯಮಿಗಳು ವಾಣಿಜ್ಯ ವಾಹನಗಳು, ಲಾರಿಗಳು ಅಥವಾ ಸಾರಿಗೆ ವ್ಯವಹಾರ ಸ್ಥಾಪಿಸಲು ₹1 ಕೋಟಿವರೆಗೆ ಬ್ಯಾಂಕ್ ಸಾಲ ಪಡೆಯಬಹುದು. ಇದು ಉದ್ಯಮಶೀಲತೆಯನ್ನು ನೇರವಾಗಿ ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.',
        redirect_url
      };
    }
    if (code === 'PMEGP') {
      return {
        scheme_id: schemeId,
        title: 'ಪ್ರಧಾನಮಂತ್ರಿ ಉದ್ಯೋಗ ಸೃಜನ ಕಾರ್ಯಕ್ರಮ (PMEGP)',
        sector: 'ಉತ್ಪಾದನೆ & ಸೇವಾ ರಂಗ',
        max_amount: '₹20 ಲಕ್ಷದಿಂದ ₹50 ಲಕ್ಷವರೆಗೆ',
        benefit_tag: '35% ವರೆಗೆ ಸರ್ಕಾರಿ ನಗದು ಸಬ್ಸಿಡಿ (ಅನುದಾನ)',
        description: 'ಸಾರಿಗೆ ಸೇವೆಗಳು ಅಥವಾ ಹೊಸ ಉತ್ಪಾದನಾ ಕೈಗಾರಿಕೆಗಳ ಸ್ಥಾಪನೆಗೆ ಸರ್ಕಾರವು 35% ವರೆಗೆ ಮರುಪಾವತಿಸಬೇಕಿಲ್ಲದ ನಗದು ಸಬ್ಸಿಡಿಯನ್ನು ನೀಡುತ್ತದೆ. ಗ್ರಾಮೀಣ ನಿರುದ್ಯೋಗಿ ಯುವಕರು ಮತ್ತು ಮಹಿಳೆಯರಿಗೆ ಇದು ಅತ್ಯುತ್ತಮ ಯೋಜನೆ.',
        redirect_url
      };
    }
    if (code === 'PM-SVANIDHI') {
      return {
        scheme_id: schemeId,
        title: 'ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳ ಮೈಕ್ರೋ ಕ್ರೆಡಿಟ್)',
        sector: 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳು & ತಳ್ಳುವ ಗಾಡಿಗಳು',
        max_amount: '₹10,000 ದಿಂದ ₹50,000 ವರೆಗೆ',
        benefit_tag: '7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ & ಡಿಜಿಟಲ್ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್',
        description: 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳು, ತಳ್ಳುವ ಗಾಡಿ ವ್ಯಾಪಾರಿಗಳು ಯಾವುದೇ ಗ್ಯಾರಂಟಿ ಇಲ್ಲದೆ ಆರಂಭಿಕ ಬಂಡವಾಳ ಸಾಲ ಪಡೆಯಬಹುದು. ಸಕಾಲದಲ್ಲಿ ಮರುಪಾವತಿಸಿದರೆ 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಸಿಗುತ್ತದೆ.',
        redirect_url
      };
    }
    if (code === 'KCC') {
      return {
        scheme_id: schemeId,
        title: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC) ಯೋಜನೆ',
        sector: 'ಕೃಷಿ & ಪಶುಸಂಗೋಪನೆ',
        max_amount: '₹3,00,000 ವರೆಗೆ',
        benefit_tag: 'ಕೇವಲ 4% ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರ',
        description: 'ರೈತರು, ಹೈನುಗಾರಿಕೆ ಮತ್ತು ಮೀನುಗಾರರಿಗೆ ಬೆಳೆ ಹೂಡಿಕೆ ಹಾಗೂ ಜಾನುವಾರು ಪೋಷಣೆಗಾಗಿ ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರದಲ್ಲಿ ಸುಲಭ ಸಾಲ ಲಭ್ಯವಿದೆ. ಸಕಾಲದಲ್ಲಿ ಪಾವತಿಸಿದರೆ ಸರ್ಕಾರವು 3% ಬಡ್ಡಿ ರಿಯಾಯಿತಿ ನೀಡುತ್ತದೆ.',
        redirect_url
      };
    }
    if (code === 'SMAM') {
      return {
        scheme_id: schemeId,
        title: 'ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಸಬ್ಸಿಡಿ ಯೋಜನೆ (ಟ್ರಾಕ್ಟರ್ ಸಬ್ಸಿಡಿ)',
        sector: 'ಕೃಷಿ',
        max_amount: '40% ರಿಂದ 50% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ',
        benefit_tag: 'ಟ್ರಾಕ್ಟರ್ & ಆಧುನಿಕ ಕೃಷಿ ಉಪಕರಣಗಳ ಖರೀದಿ',
        description: 'ರೈತರು ಹೊಸ ಟ್ರಾಕ್ಟರ್‌ಗಳು, ಕೊಯ್ಲು ಯಂತ್ರಗಳು ಮತ್ತು ಆಧುನಿಕ ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ಖರೀದಿಸಲು ಸರ್ಕಾರವು 50% ವರೆಗೆ ನಗದು ಸಬ್ಸಿಡಿ ನೀಡುತ್ತದೆ.',
        redirect_url
      };
    }
    if (code === 'PM-VISHWAKARMA') {
      return {
        scheme_id: schemeId,
        title: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳು)',
        sector: 'ಕುಶಲಕರ್ಮಿಗಳು & ಕರಕುಶಲ ಕಲಾವಿದರು',
        max_amount: '₹15,000 ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ + ₹3 ಲಕ್ಷ ಸಾಲ',
        benefit_tag: 'ಕೇವಲ 5% ಕಡಿಮೆ ಬಡ್ಡಿ ದರ & ಉಚಿತ ತರಬೇತಿ',
        description: 'ಬಡಗಿಗಳು, ಕಮ್ಮಾರರು, ಕುಂಬಾರರು, ದರ್ಜಿಗಳು ಮತ್ತು ನೇಕಾರರಿಗೆ ಉಚಿತ ಆಧುನಿಕ ಉಪಕರಣಗಳು ಮತ್ತು ಕಡಿಮೆ ಬಡ್ಡಿದರದಲ್ಲಿ ಆರ್ಥಿಕ ಸಾಲ ಲಭ್ಯವಿದೆ. ದಿನನಿತ್ಯದ ಭತ್ಯೆಯೊಂದಿಗೆ ಕೌಶಲ್ಯ ತರಬೇತಿಯನ್ನು ಸರ್ಕಾರ ನೀಡುತ್ತದೆ.',
        redirect_url
      };
    }
    if (code === 'NHFDC-DSY') {
      return {
        scheme_id: schemeId,
        title: 'ದಿವ್ಯಾಂಗಜನ ಸ್ವಾವಲಂಬನ ಯೋಜನೆ (NHFDC)',
        sector: 'ವಿಕಲಚೇತನರ ಸಬಲೀಕರಣ (PwD)',
        max_amount: '₹50,00,000 ವರೆಗೆ',
        benefit_tag: 'ಕೇವಲ 5% ರಿಂದ 8% ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರ',
        description: '40% ಅಥವಾ ಹೆಚ್ಚಿನ ವಿಕಲಚೇತನ ಹೊಂದಿರುವ ನಾಗರಿಕರಿಗೆ ಸ್ವಯಂ ಉದ್ಯೋಗ ಮತ್ತು ವ್ಯಾಪಾರ ಸ್ಥಾಪನೆಗೆ ವಿಶೇಷ ರಿಯಾಯಿತಿ ಸಾಲ ದೊರೆಯುತ್ತದೆ. ಮಹಿಳಾ ವಿಕಲಚೇತನರಿಗೆ ಹೆಚ್ಚುವರಿ 1% ಬಡ್ಡಿ ರಿಯಾಯಿತಿ ಸಿಗುತ್ತದೆ.',
        redirect_url
      };
    }
  }

  // BENGALI LOCALIZATION (100% Pure Bengali, Zero English)
  if (lang.includes('bengali') || lang === 'bn') {
    if (code === 'PMMY') {
      const isTransport = detectedSector === 'Commercial Transport';
      return {
        scheme_id: schemeId,
        title: isTransport ? 'প্রধানমন্ত্রী মুদ্রা যোজনা (বাণিজ্যিক যানবাহন ও অটো ঋণ)' : 'প্রধানমন্ত্রী মুদ্রা যোজনা (PMMY)',
        sector: isTransport ? 'বাণিজ্যিক পরিবহন / ক্ষুদ্র ব্যবসা' : 'ক্ষুদ্র ও মাঝারি ব্যবসা',
        max_amount: '₹১০,০০,০০০ পর্যন্ত',
        benefit_tag: 'কোনো গ্যারান্টি ছাড়া (কোল্যাটারাল-মুক্ত ঋণ)',
        description: isTransport 
          ? 'বাণিজ্যিক অটো-রিকশা, ছোট পণ্যবাহী গাড়ি বা ট্যাক্সি কেনার জন্য মুদ্রা কিশোর ও তরুণ ঋণ কোনো সম্পত্তি বন্ধক ছাড়াই পাওয়া যায়। ব্যাংকের মাধ্যমে সহজ মাসিক কিস্তিতে এই ঋণ পরিশোধ করা যায়।'
          : 'ছোট ব্যবসায়ী এবং দোকানদাররা কোনো সম্পত্তি বন্ধক ছাড়াই ₹১০ লাখ পর্যন্ত সহজ ঋণ পেতে পারেন। ব্যাংকের মাধ্যমে সহজ কিস্তিতে এই ঋণ দেওয়া হয়।',
        redirect_url
      };
    }
    if (code === 'STAND-UP') {
      return {
        scheme_id: schemeId,
        title: 'স্ট্যান্ড-আপ ইন্ডিয়া প্রকল্প (বাণিজ্যিক পরিবহন ও যানবাহন)',
        sector: 'মহিলা এবং এসসি/এসটি উদ্যোক্তা',
        max_amount: '₹১০ লাখ থেকে ₹১ কোটি পর্যন্ত',
        benefit_tag: 'দীর্ঘমেয়াদী ঋণ সুবিধা ও সরকারি গ্যারান্টি',
        description: 'মহিলা এবং তফশিলি জাতি/উপজাতির উদ্যোক্তারা বাণিজ্যিক গাড়ি, ট্রাক বা পরিবহন ব্যবসা শুরু করার জন্য ₹১ কোটি পর্যন্ত ব্যাংক ঋণ পেতে পারেন। এটি স্বনির্ভরতা বাড়াতে অত্যন্ত সহায়ক।',
        redirect_url
      };
    }
    if (code === 'PMEGP') {
      return {
        scheme_id: schemeId,
        title: 'প্রধানমন্ত্রী কর্মসংস্থান সৃষ্টি কর্মসূচি (PMEGP)',
        sector: 'উৎপাদন ও সেবা খাত',
        max_amount: '₹২০ লাখ থেকে ₹৫০ লাখ পর্যন্ত',
        benefit_tag: '৩৫% পর্যন্ত সরকারি নগদ ভর্তুকি (সাবসিডি)',
        description: 'পরিবহন পরিষেবা বা নতুন শিল্প স্থাপনের জন্য সরকার ৩৫% পর্যন্ত অফেরতযোগ্য নগদ ভর্তুকি প্রদান করে। গ্রামীণ বেকার যুবক এবং মহিলা উদ্যোক্তাদের জন্য এটি একটি সেরা প্রকল্প।',
        redirect_url
      };
    }
    if (code === 'PM-SVANIDHI') {
      return {
        scheme_id: schemeId,
        title: 'পিএম স্বনিধি প্রকল্প (রাস্তার বিক্রেতাদের মাইক্রো ক্রেডিট)',
        sector: 'পথচলতি হকার ও ঠেলাগাড়ি বিক্রেতা',
        max_amount: '₹১০,০০০ থেকে ₹৫০,০০০ পর্যন্ত',
        benefit_tag: '৭% সুদ ভর্তুকি ও ডিজিটাল ক্যাশব্যাক',
        description: 'রাস্তার ধারের ক্ষুদ্র বিক্রেতা ও টিফিন বিক্রেতারা কোনো গ্যারান্টি ছাড়াই ব্যবসার পুঁজির জন্য ঋণ পেতে পারেন। সময়মতো ঋণ শোধ করলে ৭% সুদ ছাড় এবং ক্যাশব্যাক পাওয়া যায়।',
        redirect_url
      };
    }
    if (code === 'KCC') {
      return {
        scheme_id: schemeId,
        title: 'কিসান ক্রেডিট কার্ড (KCC) প্রকল্প',
        sector: 'কৃষি ও পশুপালন',
        max_amount: '₹৩,০০,০০০ পর্যন্ত',
        benefit_tag: 'মাত্র ৪% কার্যকর সুদের হার',
        description: 'কৃষক, ডেয়ারি খামারি এবং মৎস্যজীবীদের ফসলের উৎপাদন ও গবাদি পশু পালনের জন্য সহজ শর্তে কম সুদে ঋণ দেওয়া হয়। সময়মতো পরিশোধে ৩% সরকারি সুদ ছাড় পাওয়া যায়।',
        redirect_url
      };
    }
    if (code === 'SMAM') {
      return {
        scheme_id: schemeId,
        title: 'কৃষি যান্ত্রিকীকরণ প্রকল্প (ট্র্যাক্টর সাবসিডি)',
        sector: 'কৃষি',
        max_amount: '৪০% থেকে ৫০% সরকারি ভর্তুকি',
        benefit_tag: 'ট্র্যাক্টর ও আধুনিক কৃষি যন্ত্রপাতি ক্রয়',
        description: 'কৃষকদের নতুন ট্র্যাক্টর, ফসল কাটার মেশিন ও আধুনিক কৃষি যন্ত্রপাতি কেনার জন্য সরকার ৫০% পর্যন্ত নগদ অনুদান প্রদান করে।',
        redirect_url
      };
    }
    if (code === 'PM-VISHWAKARMA') {
      return {
        scheme_id: schemeId,
        title: 'পিএম বিশ্বকর্মা যোজনা (ঐতিহ্যবাহী কারিগর প্রকল্প)',
        sector: 'হস্তশিল্প ও ঐতিহ্যবাহী কারিগর',
        max_amount: '₹১৫,০০০ টুলকিট অনুদান + ₹৩ লাখ পর্যন্ত ঋণ',
        benefit_tag: 'মাত্র ৫% কম সুদের হার ও বিনামূল্যে প্রশিক্ষণ',
        description: 'ছুতোর, কামার, কুমার, দর্জি এবং তাঁতিদের বিনামূল্যে আধুনিক যন্ত্রপাতি এবং কম সুদে আর্থিক ঋণ দেওয়া হয়। সাথে প্রতিদিনের ভাতাসহ সরকারি প্রশিক্ষণ প্রদান করা হয়।',
        redirect_url
      };
    }
    if (code === 'NHFDC-DSY') {
      return {
        scheme_id: schemeId,
        title: 'দিব্যাঙ্গজন স্বাবলম্বন যোজনা (NHFDC)',
        sector: 'প্রতিবন্ধী ক্ষমতায়ন (PwD)',
        max_amount: '₹৫০,০০,০০০ পর্যন্ত',
        benefit_tag: 'মাত্র ৫% থেকে ৮% বিশেষ ছাড়যুক্ত সুদের হার',
        description: '৪০% বা তার বেশি প্রতিবন্ধকতাযুক্ত ব্যক্তিদের স্বনির্ভরতা ও নতুন ব্যবসা শুরু করার জন্য কম সুদে বিশেষ ঋণ দেওয়া হয়। মহিলা প্রতিবন্ধীদের জন্য অতিরিক্ত ১% সুদের ছাড় রয়েছে।',
        redirect_url
      };
    }
  }

  // HINDI LOCALIZATION (100% Pure Hindi, Zero English)
  if (lang.includes('hindi') || lang === 'hi') {
    if (code === 'PMMY') {
      const isTransport = detectedSector === 'Commercial Transport';
      return {
        scheme_id: schemeId,
        title: isTransport ? 'प्रधानमंत्री मुद्रा योजना (वाणिज्यिक वाहन एवं ऑटो लोन)' : 'प्रधानमंत्री मुद्रा योजना (PMMY)',
        sector: isTransport ? 'वाणिज्यिक परिवहन / सूक्ष्म व्यवसाय' : 'सूक्ष्म एवं लघु व्यवसाय',
        max_amount: '₹10,00,000 तक',
        benefit_tag: 'बिना किसी गारंटी (कोलैटरल-फ्री)',
        description: isTransport
          ? 'कमर्शियल ऑटो-रिक्शा, छोटा मालवाहक वाहन या टैक्सी खरीदने के लिए मुद्रा किशोर एवं तरुण लोन बिना किसी संपत्ति गारंटी के उपलब्ध हैं। बैंकों द्वारा आसान मासिक किस्तों पर यह ऋण दिया जाता है।'
          : 'छोटे दुकानदार और सूक्ष्म व्यापारी बिना किसी संपत्ति गारंटी के ₹10 लाख तक का आसान ऋण प्राप्त कर सकते हैं। समय पर भुगतान से व्यवसाय बढ़ाना अत्यंत सरल है।',
        redirect_url
      };
    }
    if (code === 'STAND-UP') {
      return {
        scheme_id: schemeId,
        title: 'स्टैंड-अप इंडिया योजना (वाणिज्यिक वाहन एवं परिवहन)',
        sector: 'महिला एवं अनुसूचित जाति/जनजाति उद्यमी',
        max_amount: '₹10 लाख से ₹1 करोड़ तक',
        benefit_tag: 'दीर्घकालिक ऋण एवं सरकारी गारंटी',
        description: 'महिलाएं और अनुसूचित जाति/जनजाति के उद्यमी वाणिज्यिक वाहन, बस, ट्रक या ट्रांसपोर्ट व्यवसाय शुरू करने के लिए ₹1 करोड़ तक का बैंक ऋण प्राप्त कर सकते हैं। यह उद्यमशीलता को सीधा बढ़ावा देता है।',
        redirect_url
      };
    }
    if (code === 'PMEGP') {
      return {
        scheme_id: schemeId,
        title: 'प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)',
        sector: 'विनिर्माण एवं सेवा उद्यम',
        max_amount: '₹20 लाख से ₹50 लाख तक',
        benefit_tag: '35% तक सरकारी नकद अनुदान (सब्सिडी)',
        description: 'परिवहन सेवाओं और नए विनिर्माण उद्यमों के लिए सरकार 35% तक की गैर-वापसी योग्य सब्सिडी प्रदान करती है। ग्रामीण युवाओं और महिला उद्यमियों के लिए यह सर्वोत्कृष्ट योजना है।',
        redirect_url
      };
    }
    if (code === 'PM-SVANIDHI') {
      return {
        scheme_id: schemeId,
        title: 'पीएम स्वनिधि योजना (रेहड़ी-पटरी माइक्रो क्रेडिट)',
        sector: 'स्ट्रीट वेंडर एवं फेरीवाले',
        max_amount: '₹10,000 से ₹50,000 तक',
        benefit_tag: '7% ब्याज सब्सिडी एवं डिजिटल कैशबैक',
        description: 'सड़क किनारे दुकान लगाने वाले, फल-सब्जी और नाश्ता विक्रेता बिना किसी गारंटी के कार्यशील पूंजी ऋण पा सकते हैं। समय पर अदायगी करने पर 7% ब्याज छूट मिलती है।',
        redirect_url
      };
    }
    if (code === 'KCC') {
      return {
        scheme_id: schemeId,
        title: 'किसान क्रेडिट कार्ड (KCC) योजना',
        sector: 'कृषि एवं पशुपालन',
        max_amount: '₹3,00,000 तक',
        benefit_tag: 'केवल 4% प्रभावी ब्याज दर',
        description: 'किसानों, डेयरी संचालकों और मत्स्य पालकों को फसल और पशुधन के लिए रियायती ब्याज दर पर आसान लोन मिलता है। समय पर भुगतान पर 3% सरकारी ब्याज छूट मिलती है।',
        redirect_url
      };
    }
    if (code === 'NHFDC-DSY') {
      return {
        scheme_id: schemeId,
        title: 'दिव्यांगजन स्वावलंबन योजना (NHFDC)',
        sector: 'दिव्यांगजन सशक्तिकरण',
        max_amount: '₹50,00,000 तक',
        benefit_tag: 'केवल 5% से 8% रियायती ब्याज दर',
        description: '40% या अधिक दिव्यांगता वाले नागरिकों को स्वरोजगार व नए व्यवसाय के लिए कम ब्याज पर विशेष ऋण मिलता है। महिला दिव्यांगजनों को 1% अतिरिक्त ब्याज छूट दी जाती है।',
        redirect_url
      };
    }
  }

  // DEFAULT / ENGLISH
  const isTransport = detectedSector === 'Commercial Transport';
  const defaultDesc = scheme.description 
    ? scheme.description.split('.').slice(0, 2).join('.') + '.'
    : 'Collateral-free credit support provided by the Government of India.';

  return {
    scheme_id: schemeId,
    title: (code === 'PMMY' && isTransport) ? 'PM Mudra Yojana (Commercial Vehicle / Auto Loan)' : scheme.schemeName,
    sector: isTransport ? 'Commercial Transport / Small Business' : scheme.targetSector,
    max_amount: scheme.loanAmountFormatted || 'Up to ₹10,00,000',
    benefit_tag: scheme.subsidyPercentage ? `${scheme.subsidyPercentage}% Capital Subsidy` : 'No Collateral Required',
    description: (code === 'PMMY' && isTransport)
      ? 'Purchase auto-rickshaws, small commercial vehicles, or goods carriages with zero property mortgage under Mudra Kishore and Tarun loans. Repay comfortably through easy monthly bank installments.'
      : defaultDesc,
    redirect_url
  };
}

/**
 * 3. Dynamic Vernacular Fallback Generator (Strict JSON Schema Compliant)
 */
function buildVernacularResponse(message, schemes, language = 'English', userProfile = null, detectedSector = 'MSME / Small Business') {
  const lang = (language || 'English').toLowerCase();
  const formattedSchemes = schemes.map(s => formatSchemeForSchema(s, detectedSector, language));

  let conversationalMessage = '';

  if (lang.includes('telugu') || lang === 'te' || /[\u0C00-\u0C7F]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'మీరు అడిగిన వాణిజ్య వాహనం (ఆటో రిక్షా / లారీ / గూడ్స్ వాహనం) కొనుగోలు కొరకు ప్రభుత్వం నుండి అత్యంత ప్రయోజనకరమైన మరియు తక్కువ వడ్డీతో కూడిన అధికారిక పథకాలు ఇక్కడ ఉన్నాయి:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'మీ చిన్న ఆహార వ్యాపారం లేదా టిఫిన్ సెంటర్ కొరకు ప్రభుత్వం నుండి లభించే అత్యుత్తమ ఆర్థిక సహాయ పథకాలు ఇక్కడ ఉన్నాయి:';
    } else if (detectedSector === 'Agriculture') {
      conversationalMessage = 'మీ వ్యవసాయం మరియు పంట పెట్టుబడి అవసరాల కోసం అత్యంత తక్కువ వడ్డీ రేటుతో లభించే ప్రభుత్వ పథకాలు ఇక్కడ ఉన్నాయి:';
    } else {
      conversationalMessage = 'మీ ప్రశ్న మరియు వ్యాపార వివరాల ఆధారంగా ప్రభుత్వం నుండి మీకు అత్యంత అనువైన పథకాలు ఇక్కడ ఉన్నాయి:';
    }
  } else if (lang.includes('kannada') || lang === 'kn' || /[\u0C80-\u0CFF]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'ವಾಣಿಜ್ಯ ವಾಹನ (ಆಟೋ ರಿಕ್ಷಾ / ಲಾರಿ / ಟ್ಯಾಕ್ಸಿ) ಖರೀದಿಸಲು ಸರ್ಕಾರದಿಂದ ಲಭ್ಯವಿರುವ ಅತ್ಯಂತ ಸೂಕ್ತ ಯೋಜನೆಗಳು ಇಲ್ಲಿವೆ:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'ಆಹಾರ ವ್ಯಾಪಾರ, ಹೋಟೆಲ್ ಅಥವಾ ತಿಂಡಿ ಕೇಂದ್ರಕ್ಕಾಗಿ ಸರ್ಕಾರದ ಅತ್ಯುತ್ತಮ ಸಾಲ ಮತ್ತು ಸಬ್ಸಿಡಿ ಯೋಜನೆಗಳು ಇಲ್ಲಿವೆ:';
    } else if (detectedSector === 'Agriculture') {
      conversationalMessage = 'ನಿಮ್ಮ ಕೃಷಿ ಮತ್ತು ಬೆಳೆ ಹೂಡಿಕೆಗಾಗಿ ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿದರದಲ್ಲಿ ಲಭ್ಯವಿರುವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಇಲ್ಲಿವೆ:';
    } else {
      conversationalMessage = 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಮತ್ತು ವ್ಯಾಪಾರದ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಇಲ್ಲಿವೆ:';
    }
  } else if (lang.includes('bengali') || lang === 'bn' || /[\u0980-\u09FF]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'বাণিজ্যিক যানবাহন (অটো-রিকশা / লরি / ট্যাক্সি) কেনার জন্য সরকারের সবচেয়ে উপযুক্ত ঋণ ও ভর্তুকি প্রকল্পগুলি নিচে দেওয়া হলো:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'খাদ্য ব্যবসা, হোটেল বা টিফিন সেন্টারের জন্য সরকারি ঋণ এবং অনুদান প্রকল্পগুলি নিচে দেওয়া হলো:';
    } else if (detectedSector === 'Agriculture') {
      conversationalMessage = 'আপনার কৃষি ও ফসলের জন্য সবচেয়ে কম সুদের সরকারি ঋণ প্রকল্পগুলি নিচে দেওয়া হলো:';
    } else {
      conversationalMessage = 'আপনার প্রশ্ন ও ব্যবসায়ের প্রয়োজনীয়তা অনুযায়ী সবচেয়ে উপযুক্ত সরকারি প্রকল্পগুলি নিচে দেওয়া হলো:';
    }
  } else if (lang.includes('hindi') || lang === 'hi' || /[\u0900-\u097F]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'वाणिज्यिक वाहन (ऑटो-रिक्शा / ट्रक / टैक्सी) खरीदने के लिए भारत सरकार की सबसे उपयुक्त योजनाएं निम्नलिखित हैं:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'खाद्य व्यवसाय, टिफिन या होटल के लिए सरकारी ऋण एवं सब्सिडी योजनाएं निम्नलिखित हैं:';
    } else {
      conversationalMessage = 'आपके प्रश्न और आवश्यकता के अनुसार सबसे उपयुक्त सरकारी योजनाएं निम्नलिखित हैं:';
    }
  } else {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'Based on your requirement for commercial vehicle or transport financing, here are the strictly verified government credit schemes:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'For starting or expanding a food business or eatery, here are the most advantageous government financial schemes:';
    } else {
      conversationalMessage = 'Based on your inquiry and business profile, here are the most beneficial government schemes for you:';
    }
  }

  // Construct backward-compatible text reply for speech synthesis & older clients
  const isKn = lang.includes('kannada') || lang === 'kn' || /[\u0C80-\u0CFF]/.test(message);
  const isBn = lang.includes('bengali') || lang === 'bn' || /[\u0980-\u09FF]/.test(message);
  const isTe = lang.includes('telugu') || lang === 'te' || /[\u0C00-\u0C7F]/.test(message);
  const isHi = lang.includes('hindi') || lang === 'hi' || /[\u0900-\u097F]/.test(message);

  const amountLabel = isKn ? 'ಗರಿಷ್ಠ ಮೊತ್ತ:' : (isBn ? 'সর্বোচ্চ পরিমাণ:' : (isTe ? 'ఆర్థిక సహాయం:' : (isHi ? 'अधिकतम राशि:' : 'Max Amount:')));
  const benefitLabel = isKn ? 'ಪ್ರಯೋಜನ:' : (isBn ? 'সুবিধা:' : (isTe ? 'ప్రయోజనం:' : (isHi ? 'लाभ:' : 'Benefit:')));
  const detailsLabel = isKn ? 'ವಿವರಗಳು:' : (isBn ? 'বিবরণ:' : (isTe ? 'వివరాలు:' : (isHi ? 'विवरण:' : 'Details:')));

  const backwardCompatibleReply = `${conversationalMessage}\n\n` + formattedSchemes.map((s, idx) => 
    `${idx + 1}. **${s.title}**\n   - **${amountLabel}** ${s.max_amount}\n   - **${benefitLabel}** ${s.benefit_tag}\n   - **${detailsLabel}** ${s.description}`
  ).join('\n\n');

  return {
    type: 'scheme_recommendation',
    message: conversationalMessage,
    target_sector: detectedSector,
    schemes: formattedSchemes,
    // Backward compatibility
    reply: backwardCompatibleReply,
    recommendedSchemes: formattedSchemes.map(s => ({
      schemeName: s.title,
      loanAmount: s.max_amount,
      subsidy: s.benefit_tag,
      sector: s.sector,
      url: s.redirect_url,
      schemeId: s.scheme_id
    })),
    detectedSector,
    source: 'udyam-setu-vernacular-rag-engine',
    language,
    bhashiniVoiceEnabled: true
  };
}

/**
 * 4. Master Conversational RAG Handler with Gemini 2.5/3.6 Flash & Autonomous Fallback
 */
async function handleRAGConversationalChat({
  message,
  conversationHistory = [],
  language = 'English',
  userProfile = null
}) {
  let effectiveLang = language || 'English';
  const l = (language || '').toLowerCase();
  if (/[\u0C80-\u0CFF]/.test(message) || l.includes('kannada') || l === 'kn') effectiveLang = 'Kannada';
  else if (/[\u0980-\u09FF]/.test(message) || l.includes('bengali') || l === 'bn') effectiveLang = 'Bengali';
  else if (/[\u0C00-\u0C7F]/.test(message) || l.includes('telugu') || l === 'te') effectiveLang = 'Telugu';
  else if (/[\u0B80-\u0BFF]/.test(message) || l.includes('tamil') || l === 'ta') effectiveLang = 'Tamil';
  else if (/[\u0900-\u097F]/.test(message) || l.includes('marathi') || l === 'mr' || l.includes('hindi') || l === 'hi') {
    effectiveLang = (l.includes('marathi') || l === 'mr') ? 'Marathi' : 'Hindi';
  }

  // 1. Check for pure greeting query
  if (isGreetingMessage(message)) {
    return buildGreetingResponse(effectiveLang);
  }

  // 2. Classify sector & retrieve strictly relevant schemes
  // 2. Classify sector & check for discovery
  const detectedSector = classifyUserSector(message, userProfile);
  const isDiscovery = (detectedSector === 'Discovery') || isDiscoveryOrUnspecifiedQuery(message, userProfile);

  const languageRules = effectiveLang === 'Kannada' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE KANNADA (ಕನ್ನಡ) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Kannada script.
- Zero English words or English code-switching.
` : effectiveLang === 'Bengali' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE BENGALI (বাংলা) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Bengali script.
- Zero English words or English code-switching.
` : effectiveLang === 'Telugu' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE TELUGU (తెలుగు) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Telugu script.
- Zero English words or English code-switching.
` : effectiveLang === 'Hindi' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE HINDI (हिन्दी देवनागरी) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Hindi script.
- Zero English words.
` : `
- Output clear, reassuring Indian English.
`;

  // Helper for resilient Gemini API calls across models
  const callGeminiWithModels = async (systemPrompt) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    const candidateModels = ['gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
    for (const model of candidateModels) {
      try {
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 3500,
              responseMimeType: 'application/json'
            }
          })
        });
        if (geminiRes.status === 200) {
          const geminiData = await geminiRes.json();
          const aiText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiText) {
            let cleanText = aiText.trim();
            if (cleanText.startsWith('```')) {
              cleanText = cleanText.replace(/^```json?\s*/i, '').replace(/\s*```$/, '').trim();
            }
            const parsed = JSON.parse(cleanText);
            return { model, parsed };
          }
        } else {
          console.warn(`Gemini model ${model} returned HTTP ${geminiRes.status}`);
        }
      } catch (err) {
        console.warn(`Gemini model ${model} call error:`, err.message);
      }
    }
    return null;
  };

  // 3. CASE A: Conversational Discovery (User clicked "Ask", said "help", or business is not specified)
  if (isDiscovery) {
    const discoverySystemPrompt = `
You are "Udyam Setu AI", an intelligent government scheme advisory engine.

BEHAVIOR RULES:
1. CONVERSATIONAL DISCOVERY:
   - The user has sent a general inquiry or clicked "Ask" without specifying their business or demographic goal.
   - DO NOT recommend schemes directly! Set "type": "business_selection" and "schemes": [].
   - In "message", politely greet the user, explain that to guide them to the right schemes, you need to know who they are and what business they run or plan to start.
   - In "business_options", provide 6 to 8 concise business category choices (keep labels and prompts under 10 words) in pure script of ${effectiveLang}:
     1. Commercial Vehicle / Auto-rickshaw / Transport
     2. Food Business / Tiffin / Hotel / Catering
     3. Retail Shop / Kirana / Street Vendor (Thela)
     4. Agriculture / Dairy Farming / Kisan Credit Card
     5. Traditional Artisan / Weaver / Crafts (Vishwakarma)
     6. Small Industry / MSME Manufacturing
     7. Women Entrepreneur Special Schemes
     8. Differently Abled / Divyangjan Loan (NHFDC)
2. LANGUAGE:
   - Detect and respond in the requested language: ${effectiveLang}.
   ${languageRules}
3. STRICT JSON SCHEMA:
{
  "type": "business_selection",
  "message": "<Polite text asking who they are and what business they run or plan to start in ${effectiveLang}>",
  "target_sector": "Discovery",
  "business_options": [
    { "id": "auto", "label": "<Label in ${effectiveLang}>", "prompt": "<User message when tapped in ${effectiveLang}>" }
  ],
  "schemes": []
}

USER QUERY: "${message}"
`;

    const geminiResult = await callGeminiWithModels(discoverySystemPrompt);
    if (geminiResult && geminiResult.parsed && geminiResult.parsed.message) {
      const parsed = geminiResult.parsed;
      const options = (Array.isArray(parsed.business_options) && parsed.business_options.length >= 4)
        ? parsed.business_options
        : (DISCOVERY_BUSINESS_OPTIONS[effectiveLang] || DISCOVERY_BUSINESS_OPTIONS.English);

      return {
        type: 'business_selection',
        message: parsed.message,
        target_sector: 'Discovery',
        business_options: options,
        schemes: [],
        reply: parsed.message,
        recommendedSchemes: [],
        detectedSector: 'Discovery',
        source: `Google Gemini (${geminiResult.model}) (Autonomous AI)`,
        language: effectiveLang,
        bhashiniVoiceEnabled: true
      };
    }

    // Dynamic Discovery Fallback
    return buildDiscoveryResponse(effectiveLang);
  }

  // 4. CASE B: User specified their business domain / vehicle / activity -> Autonomous Scheme Recommendation
  const relevantSchemes = await retrieveRelevantSchemes(message, userProfile);

  const schemesContext = relevantSchemes.map(s => `
[GROUND TRUTH SCHEME]
- scheme_id: ${s.shortCode || s.schemeId}
- schemeName: ${s.schemeName}
- sector: ${s.targetSector}
- loanAmountFormatted: ${s.loanAmountFormatted}
- subsidyPercentage: ${s.subsidyPercentage}%
- interestRate: ${s.interestRate}
- whoCanApply: ${s.whoCanApply}
- description: ${s.description}
`).join('\n---\n');

  const recommendationSystemPrompt = `
You are "Udyam Setu AI", an intelligent government scheme advisory engine.

BEHAVIOR RULES:
1. DYNAMIC RELEVANCE & AUTONOMOUS THINKING:
   - Think on your own autonomously. Evaluate the user's specific query, business, and profile against the ground truth schemes.
   - Match schemes strictly based on the user's exact goal or domain.
   - Example (Commercial Transport): If user asks for commercial vehicle, auto-rickshaw, or lorry, recommend Stand-Up India, Mudra Kishor/Tarun, or PMEGP. Strictly DO NOT suggest street vendor or agriculture schemes.
   - Example (Food Business): Recommend Mudra Shishu, PM SVANidhi, or PMEGP.
   - Recommend up to 3 most relevant schemes.
   - In "message", explain why you are recommending these schemes for their specific business.
2. LANGUAGE:
   - Detect and respond in the requested language: ${effectiveLang}.
   ${languageRules}
3. STRICT OUTPUT FORMAT:
   - Your response MUST be valid JSON and NOTHING ELSE (no markdown backticks, no text before or after).
   - JSON Schema:
{
  "type": "scheme_recommendation",
  "message": "<Conversational summary text in ${effectiveLang} explaining why these schemes match their business>",
  "target_sector": "${detectedSector}",
  "schemes": [
    {
      "scheme_id": "<exact scheme_id matching ground truth>",
      "title": "<Scheme Title in ${effectiveLang}>",
      "sector": "<Sector category in ${effectiveLang}>",
      "max_amount": "<e.g. Up to ₹10,00,000>",
      "benefit_tag": "<e.g. No Collateral Required / 35% Subsidy in ${effectiveLang}>",
      "description": "<Clear explanation of how this scheme funds their specific business in ${effectiveLang}>",
      "redirect_url": "/schemes/<scheme_id>"
    }
  ]
}

USER PROFILE:
- Age: ${userProfile?.age || 28}
- Gender: ${userProfile?.gender || 'Male'}
- Category: ${userProfile?.category || 'General'}
- Disability: ${userProfile?.hasDisability ? 'Yes' : 'No'}
- Business: ${userProfile?.businessType || 'Not specified'}

VERIFIED GROUND TRUTH SCHEMES:
${schemesContext}

USER'S MESSAGE: "${message}"
`;

  const geminiResult = await callGeminiWithModels(recommendationSystemPrompt);

  if (geminiResult && geminiResult.parsed && geminiResult.parsed.message && Array.isArray(geminiResult.parsed.schemes)) {
    const parsed = geminiResult.parsed;
    parsed.schemes = parsed.schemes.map(s => ({
      ...s,
      scheme_id: s.scheme_id || 'PMMY',
      redirect_url: `/schemes/${s.scheme_id || 'PMMY'}`
    }));

    const isKn = effectiveLang === 'Kannada';
    const isBn = effectiveLang === 'Bengali';
    const isTe = effectiveLang === 'Telugu';
    const isHi = effectiveLang === 'Hindi';

    const amountLabel = isKn ? 'ಗರಿಷ್ಠ ಮೊತ್ತ:' : (isBn ? 'সর্বোচ্চ পরিমাণ:' : (isTe ? 'ఆర్థిక సహాయం:' : (isHi ? 'अधिकतम राशि:' : 'Max Amount:')));
    const benefitLabel = isKn ? 'ಪ್ರಯೋಜನ:' : (isBn ? 'সুবিধা:' : (isTe ? 'ప్రయోజనం:' : (isHi ? 'लाभ:' : 'Benefit:')));
    const detailsLabel = isKn ? 'ವಿವರಗಳು:' : (isBn ? 'বিবরণ:' : (isTe ? 'వివరాలు:' : (isHi ? 'विवरण:' : 'Details:')));

    const backwardCompatibleReply = `${parsed.message}\n\n` + parsed.schemes.map((s, idx) => 
      `${idx + 1}. **${s.title}**\n   - **${amountLabel}** ${s.max_amount}\n   - **${benefitLabel}** ${s.benefit_tag}\n   - **${detailsLabel}** ${s.description}`
    ).join('\n\n');

    return {
      type: 'scheme_recommendation',
      message: parsed.message,
      target_sector: parsed.target_sector || detectedSector,
      schemes: parsed.schemes,
      business_options: [],
      // Backward compatibility
      reply: backwardCompatibleReply,
      recommendedSchemes: parsed.schemes.map(s => ({
        schemeName: s.title,
        loanAmount: s.max_amount,
        subsidy: s.benefit_tag,
        sector: s.sector,
        url: s.redirect_url,
        schemeId: s.scheme_id
      })),
      detectedSector: parsed.target_sector || detectedSector,
      source: `Google Gemini (${geminiResult.model}) (Autonomous AI)`,
      language: effectiveLang,
      bhashiniVoiceEnabled: true
    };
  }

  // Graceful Dynamic Vernacular Fallback
  return buildVernacularResponse(message, relevantSchemes, effectiveLang, userProfile, detectedSector);
}

module.exports = {
  handleRAGConversationalChat,
  retrieveRelevantSchemes,
  classifyUserSector,
  isGreetingMessage,
  isDiscoveryOrUnspecifiedQuery,
  buildDiscoveryResponse,
  DISCOVERY_BUSINESS_OPTIONS
};

