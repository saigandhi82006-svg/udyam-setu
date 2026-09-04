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

  // If user profile has an explicit business type, then it's NOT an unspecified discovery query!
  if (userProfile?.businessType && userProfile.businessType !== 'General Advisory' && userProfile.businessType !== 'Discovery') {
    return false;
  }

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
  const hasSpecificDomain = /(auto|vehicle|lorry|truck|cab|transport|car|tempo|rickshaw|repair|service|mechanic|garage|food|tiffin|hotel|canteen|restaurant|tea stall|chai|bakery|catering|kirana|shop|retail|grocery|supermarket|thela|vendor|vending|pushcart|cart|hawker|farm|crop|kisan|cattle|dairy|tractor|fish|student|college|study|school|handicap|disability|divyang|pwd|women|mahila|female|shg|artisan|weaver|carpenter|potter|blacksmith|tailor|tailoring|textile|garment|boutique|dress|cloth|sewing|craft|vishwakarma|industry|factory|manufacturing|fabrication|workshop|msme|zed|ఆటో|వాహనం|లారీ|రిపేర్|సర్వీస్|మెకానిక్|గ్యారేజ్|ఫుడ్|టిఫిన్|హోటల్|ఆహారం|భోజనం|క్యాటరింగ్|కిరాణా|షాప్|దుకాణం|తోపుడు బండి|తోపుడు|వీధి వ్యాపారం|రైతు|వ్యవసాయం|పంట|పాడి|చేపల|గొర్రెలు|ట్రాక్టర్|టైలరింగ్|వస్త్ర|బట్టలు|దర్జీ|చేనేత|చేతివృత్తులు|వడ్రంగి|కమ్మరి|కుమ్మరి|పరిశ్రమ|తయారీ పరిశ్రమ|ఫ్యాబ్రికేషన్|చదువు|విద్య|దివ్యాంగ|వైకల్యం|మహిళ|ಆಟೋ|ವಾಹನ|ಲಾರಿ|ರಿಪೇರಿ|ಸೇವೆ|ಗ್ಯಾರೇಜ್|ಮೆಕ್ಯಾನಿಕ್|ಆಹಾರ|ತಿಂಡಿ|ಊಟ|ಹೋಟೆಲ್|ಬೇಕರಿ|ಕ್ಯಾಟರಿಂಗ್|ಕಿರಾಣಿ|ಅಂಗಡಿ|ಚಿಲ್ಲರೆ|ತಳ್ಳುವ ಗಾಡಿ|ಬೀದಿ ವ್ಯಾಪಾರ|ಕೃಷಿ|ರೈತ|ಬೆಳೆ|ಹಾಲು|ಹೈನುಗಾರಿಕೆ|ಮೀನು|ಟ್ರಾಕ್ಟರ್|ಟೈಲರಿಂಗ್|ಜವಳಿ|ಬಟ್ಟೆ|ದರ್ಜಿ|ಕರಕುಶಲ|ನೇಕಾರ|ಕುಂಬಾರ|ಕಮ್ಮಾರ|ಬಡಗಿ|ಉತ್ಪಾದನೆ|ಕೈಗಾರಿಕೆ|ಫ್ಯಾಬ್ರಿಕೇಶನ್|ಶಿಕ್ಷಣ|ವಿಕಲಚೇತನ|ದಿವ್ಯಾಂಗ|ಮಹಿಳೆ|অটো|গাড়ি|লরি|রিকশা|মেরামত|গ্যারেজ|সার্ভিস|মেকানিক|খাবার|টিফিন|হোটেল|বেকারি|ক্যাটারিং|মুদি|দোকান|খুচরা|হকার|ঠেলাগাড়ি|ফুটপাত|কৃষি|কৃষক|ফসল|দুগ্ধ|মাছ|ট্র্যাক্টর|দর্জি|পোশাক|বস্ত্র|সেলাই|হস্তশিল্প|তাঁতি|কারিগর|ছুতোর|কামার|কুমার|ম্যানুফ্যাকচারিং|কারখানা|উৎপাদন|ফ্যাব্রিকেশন|শিক্ষা|প্রতিবন্ধী|দিব্যাঙ্গ|মহিলা|गाड़ी|ऑटो|रिक्शा|ट्रक|मरम्मत|गैरेज|सर्विस|मैकेनिक|टिफिन|होटल|खाना|भोजन|ढाबा|किराना|दुकान|खुदरा|जनरल स्टोर|ठेला|रेहड़ी|पटरी|फेरीवाला|खेती|किसान|डेयरी|पशुपालन|मत्स्य|ट्रैक्टर|टेलर|सिलाई|कपड़ा|दर्जी|परिधान|हथकरघा|बुनकर|दस्तकार|कारीगर|बढ़ई|लोहार|कुम्हार|उद्योग|कारखाना|विनिर्माण|फैब्रिकेशन|पढ़ाई|छात्र|दिव्यांग|विकलांग|महिला|गॅरेज|दुरुस्ती|हॉटेल|किराणा|हातगाडी|फेरीवाला|शेती|टेलरिंग|शिवणकाम|विणकर|कारागीर|உணவு|ஹோட்டல்|டிபன்|மளிகை|சில்லறை|தள்ளுவண்டி|தெருவோர|தையல்|ஜவுளி|ஆடை|கைத்தறி|கைவினை|நெசவாளர்|விவசாயம்|பால் பண்ணை|பழுது|கேரேஜ்|வாகனம்|உற்பத்தி|பட்டறை)/i.test(message);

  if (!hasSpecificDomain && clean.length <= 40) {
    return true;
  }

  return false;
}

const DISCOVERY_BUSINESS_OPTIONS = {
  English: [
    { id: 'food', label: '🍲 Food Business / Tiffin / Hotel', prompt: 'I want a loan for starting a food business, hotel, or tiffin center' },
    { id: 'retail', label: '🛒 Retail / Kirana Shop / General Store', prompt: 'I want a loan for a kirana shop or retail grocery store' },
    { id: 'artisan', label: '🧵 Handicrafts & Handlooms / Weaver', prompt: 'I am an artisan or handloom weaver looking for Vishwakarma and Weaver Mudra schemes' },
    { id: 'agri', label: '🌾 Agriculture & Allied / Dairy / KCC', prompt: 'I want an agriculture, farming, or dairy loan (KCC / AIF)' },
    { id: 'textile', label: '👗 Textile & Garments / Tailoring Boutique', prompt: 'I want a loan for a tailoring boutique or textile garment manufacturing' },
    { id: 'manufacturing', label: '🏭 Manufacturing & Fabrication / MSME', prompt: 'I want a loan to set up a small manufacturing or fabrication unit' },
    { id: 'services', label: '🔧 Services / Repair Shop / Auto Garage', prompt: 'I want a loan for a repair shop, service center, or commercial vehicle' },
    { id: 'vending', label: '🛍️ Street Vending / Pushcart / Thela', prompt: 'I am a street vendor looking for PM SVANidhi working capital loan' }
  ],
  Telugu: [
    { id: 'food', label: '🍲 ఫుడ్ బిజినెస్ (హోటల్, క్యాటరింగ్, ఆహార వ్యాపారం)', prompt: 'నాకు టిఫిన్ సెంటర్ లేదా ఫుడ్ బిజినెస్ ప్రారంభించడానికి రుణం కావాలి' },
    { id: 'retail', label: '🛒 రిటైల్ / కిరాణా షాప్ (కిరాణా, జనరల్ స్టోర్)', prompt: 'నాకు కిరాణా దుకాణం లేదా చిల్లర వ్యాపారం కోసం లోన్ కావాలి' },
    { id: 'artisan', label: '🧵 చేనేత & చేతివృత్తులు (వీవర్ ముద్ర, విశ్వకర్మ)', prompt: 'నేను చేనేత లేదా చేతివృత్తి కళాకారుడిని, నాకు ప్రభుత్వ చేనేత సహాయ పథకాలు కావాలి' },
    { id: 'agri', label: '🌾 వ్యవసాయం & పాడి పరిశ్రమ (కిసాన్ క్రెడిట్ కార్డ్)', prompt: 'నాకు వ్యవసాయం లేదా పాడి పెంపకం కోసం కిసాన్ క్రెడిట్ కార్డ్ లోన్ కావాలి' },
    { id: 'textile', label: '👗 టైలరింగ్ & వస్త్ర వ్యాపారం (సమర్థ్, బుటిక్)', prompt: 'నాకు టైలరింగ్ లేదా వస్త్ర వ్యాపారం కోసం ప్రభుత్వ రుణ సహాయం కావాలి' },
    { id: 'manufacturing', label: '🏭 చిన్న తయారీ పరిశ్రమ & ఫ్యాబ్రికేషన్', prompt: 'నాకు చిన్న తయారీ పరిశ్రమ లేదా తయారీ యూనిట్ ప్రారంభించడానికి రుణ సహాయం కావాలి' },
    { id: 'services', label: '🔧 రిపేర్ & సర్వీస్ సెంటర్ (ఆటో గ్యారేజ్, వాహనం)', prompt: 'నాకు రిపేర్ షాప్, సర్వీస్ సెంటర్ లేదా వాణిజ్య వాహనం కోసం లోన్ కావాలి' },
    { id: 'vending', label: '🛍️ వీధి వ్యాపారం (తోపుడు బండ్లు, పీఎం స్వనిధి)', prompt: 'నేను వీధి వ్యాపారిని, నాకు పీఎం స్వనిధి పథకం రుణం కావాలి' }
  ],
  Kannada: [
    { id: 'food', label: '🍲 ಆಹಾರ ವ್ಯವಹಾರ (ಹೋಟೆಲ್, ಕ್ಯಾಟರಿಂಗ್, ತಿಂಡಿ)', prompt: 'ನನಗೆ ಹೋಟೆಲ್ ಅಥವಾ ತಿಂಡಿ ಕೇಂದ್ರ ಪ್ರಾರಂಭಿಸಲು ಸಾಲ ಬೇಕು' },
    { id: 'retail', label: '🛒 ಚಿಲ್ಲರೆ / ಕಿರಾಣಿ ಅಂಗಡಿ (ಜನರಲ್ ಸ್ಟೋರ್)', prompt: 'ನನಗೆ ಕಿರಾಣಿ ಅಂಗಡಿ ಅಥವಾ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಸಾಲ ಬೇಕು' },
    { id: 'artisan', label: '🧵 ಕರಕುಶಲ ಮತ್ತು ನೇಕಾರಿಕೆ (ವಿಶ್ವಕರ್ಮ, ನೇಕಾರ ಮುದ್ರಾ)', prompt: 'ನಾನು ನೇಕಾರ ಅಥವಾ ಕುಶಲಕರ್ಮಿ, ನನಗೆ ಸರ್ಕಾರದ ಸಾಲ ಬೇಕು' },
    { id: 'agri', label: '🌾 ಕೃಷಿ ಮತ್ತು ಹೈನುಗಾರಿಕೆ (ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್)', prompt: 'ನನಗೆ ಕೃಷಿ ಅಥವಾ ಹೈನುಗಾರಿಕೆಗಾಗಿ ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಾಲ ಬೇಕು' },
    { id: 'textile', label: '👗 ಜವಳಿ ಮತ್ತು ಗಾರ್ಮೆಂಟ್ಸ್ (ಟೈಲರಿಂಗ್, ಬುಟಿಕ್)', prompt: 'ನನಗೆ ಟೈಲರಿಂಗ್ ಅಥವಾ ಜವಳಿ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಸಾಲ ಬೇಕು' },
    { id: 'manufacturing', label: '🏭 ಸಣ್ಣ ಕೈಗಾರಿಕೆ ಮತ್ತು ಉತ್ಪಾದನೆ', prompt: 'ನನಗೆ ಸಣ್ಣ ಉತ್ಪಾದನಾ ಘಟಕ ಸ್ಥಾಪಿಸಲು ಸಾಲ ಬೇಕು' },
    { id: 'services', label: '🔧 ಸೇವೆ ಮತ್ತು ರಿಪೇರಿ ಅಂಗಡಿ (ವಾಹನ ಗ್ಯಾರೇಜ್)', prompt: 'ನನಗೆ ರಿಪೇರಿ ಅಂಗಡಿ ಅಥವಾ ವಾಣಿಜ್ಯ ವಾಹನಕ್ಕಾಗಿ ಸಾಲ ಬೇಕು' },
    { id: 'vending', label: '🛍️ ಬೀದಿ ವ್ಯಾಪಾರ (ತಳ್ಳುವ ಗಾಡಿ, ಪಿಎಂ ಸ್ವನಿಧಿ)', prompt: 'ನಾನು ಬೀದಿ ವ್ಯಾಪಾರಿ, ನನಗೆ ಪಿಎಂ ಸ್ವನಿಧಿ ಸಾಲ ಬೇಕು' }
  ],
  Bengali: [
    { id: 'food', label: '🍲 খাদ্য ব্যবসা (হোটেল, ক্যাটারিং, টিফিন)', prompt: 'আমার খাদ্য ব্যবসা বা টিফিন সেন্টার খোলার জন্য ঋণ প্রয়োজন' },
    { id: 'retail', label: '🛒 মুদি ও খুচরা দোকান (জেনারেল স্টোর)', prompt: 'আমার মুদি দোকান বা খুচরা ব্যবসার জন্য ঋণ প্রয়োজন' },
    { id: 'artisan', label: '🧵 হস্তশিল্প ও তাঁত শিল্প (তাঁতি মুদ্রা, বিশ্বকর্মা)', prompt: 'আমি তাঁতি বা কারিগর, আমার সরকারি ঋণ ও অনুদান প্রয়োজন' },
    { id: 'agri', label: '🌾 কৃষি ও দুগ্ধ খামার (কিসান ক্রেডিট কার্ড)', prompt: 'আমার কৃষি বা দুগ্ধ খামারের জন্য কিসান ক্রেডিট কার্ড ঋণ প্রয়োজন' },
    { id: 'textile', label: '👗 বস্ত্র ও পোশাক শিল্প (দর্জি ও বুটিক)', prompt: 'আমার দর্জি দোকান বা বস্ত্র ব্যবসার জন্য ঋণ প্রয়োজন' },
    { id: 'manufacturing', label: '🏭 ক্ষুদ্র ম্যানুফ্যাকচারিং ও উৎপাদন ইউনিট', prompt: 'আমার ক্ষুদ্র কারখানা বা উৎপাদন ইউনিট স্থাপনের জন্য ঋণ প্রয়োজন' },
    { id: 'services', label: '🔧 পরিষেবা ও মেরামতের দোকান (গ্যারেজ, গাড়ি)', prompt: 'আমার মেরামতের দোকান বা বাণিজ্যিক যানবাহনের জন্য ঋণ প্রয়োজন' },
    { id: 'vending', label: '🛍️ রাস্তার হকার ও ঠেলাগাড়ি (প্রধানমন্ত্রী স্বনিধি)', prompt: 'আমি ফুটপাতের হকার, আমার প্রধানমন্ত্রী স্বনিধি ঋণ প্রয়োজন' }
  ],
  Hindi: [
    { id: 'food', label: '🍲 खाद्य व्यवसाय (होटल, कैटरिंग, टिफिन सेंटर)', prompt: 'मुझे टिफिन सेंटर या खाद्य व्यवसाय शुरू करने के लिए लोन चाहिए' },
    { id: 'retail', label: '🛒 खुदरा व किराना दुकान (जनरल स्टोर)', prompt: 'मुझे किराना दुकान या खुदरा व्यापार के लिए लोन चाहिए' },
    { id: 'artisan', label: '🧵 हस्तशिल्प एवं हथकरघा (बुनकर, विश्वकर्मा)', prompt: 'मैं एक बुनकर या कारीगर हूँ, मुझे सरकारी योजना का लोन चाहिए' },
    { id: 'agri', label: '🌾 कृषि एवं डेयरी फार्मिंग (किसान क्रेडिट कार्ड)', prompt: 'मुझे कृषि या डेयरी फार्मिंग के लिए किसान क्रेडिट कार्ड लोन चाहिए' },
    { id: 'textile', label: '👗 कपड़ा एवं परिधान (टेलरिंग, बुटीक)', prompt: 'मुझे सिलाई या कपड़ा व्यवसाय के लिए ऋण चाहिए' },
    { id: 'manufacturing', label: '🏭 लघु विनिर्माण एवं फैब्रिकेशन उद्योग', prompt: 'मुझे विनिर्माण इकाई शुरू करने के लिए लोन चाहिए' },
    { id: 'services', label: '🔧 मरम्मत व सेवा केंद्र (ऑटो गैरेज, वाहन)', prompt: 'मुझे रिपेयर शॉप या कमर्शियल वाहन के लिए लोन चाहिए' },
    { id: 'vending', label: '🛍️ स्ट्रीट वेंडिंग (ठेला, रेहड़ी, पीएम स्वनिधि)', prompt: 'मैं रेहड़ी-पटरी विक्रेता हूँ, मुझे पीएम स्वनिधि लोन चाहिए' }
  ],
  Marathi: [
    { id: 'food', label: '🍲 खाद्य व्यवसाय (हॉटेल, केटरिंग, टिफिन सेंटर)', prompt: 'मला हॉटेल किंवा खाद्य व्यवसाय सुरू करण्यासाठी कर्ज हवे आहे' },
    { id: 'retail', label: '🛒 किरकोळ व किराणा दुकान (जनरल स्टोअर)', prompt: 'मला किराणा दुकान किंवा किरकोळ व्यवसायासाठी कर्ज हवे आहे' },
    { id: 'artisan', label: '🧵 हस्तकला आणि हातमाग (विणकर, विश्वकर्मा)', prompt: 'मी विणकर किंवा कारागीर आहे, मला सरकारी कर्ज हवे आहे' },
    { id: 'agri', label: '🌾 शेती व दुग्ध व्यवसाय (किसान क्रेडिट कार्ड)', prompt: 'मला शेती किंवा दुग्ध व्यवसायासाठी किसान क्रेडिट कार्ड कर्ज हवे आहे' },
    { id: 'textile', label: '👗 वस्त्रोद्योग आणि कपडे (टेलरिंग, बुटीक)', prompt: 'मला शिवणकाम किंवा कापड व्यवसायासाठी कर्ज हवे आहे' },
    { id: 'manufacturing', label: '🏭 लहान उत्पादन उद्योग व फॅब्रिकेशन', prompt: 'मला उत्पादन उद्योग सुरू करण्यासाठी सरकारी कर्ज हवे आहे' },
    { id: 'services', label: '🔧 दुरुस्ती व सेवा केंद्र (गॅरेज, वाहन)', prompt: 'मला रिपेअरिंग किंवा व्यावसायिक वाहनासाठी कर्ज हवे आहे' },
    { id: 'vending', label: '🛍️ फेरीवाले व हातगाडी (पीएम स्वनिधी)', prompt: 'मी फेरीवाला आहे, मला पीएम स्वनिधी कर्ज हवे आहे' }
  ],
  Tamil: [
    { id: 'food', label: '🍲 உணவு வணிகம் (ஹோட்டல், கேட்டரிங், டிபன்)', prompt: 'உணவு வணிகம் அல்லது ஹோட்டல் தொடங்க கடன் வேண்டும்' },
    { id: 'retail', label: '🛒 மளிகை & சில்லறை வணிகம் (ஜெனரல் ஸ்டோர்)', prompt: 'மளிகைக் கடை அல்லது சில்லறை வணிகத்திற்கு கடன் வேண்டும்' },
    { id: 'artisan', label: '🧵 கைவினைப்பொருட்கள் & கைத்தறி (விஸ்வகர்மா)', prompt: 'கைவினைஞர் அல்லது நெசவாளர் கடன் உதவி வேண்டும்' },
    { id: 'agri', label: '🌾 விவசாயம் & பால் பண்ணை (கிசான் கடன் அட்டை)', prompt: 'விவசாயம் அல்லது பால் பண்ணைக்கு கிசான் கடன் அட்டை வேண்டும்' },
    { id: 'textile', label: '👗 ஜவுளி & ஆடை உற்பத்தி (தையல், பூட்டிக்)', prompt: 'தையல் கடை அல்லது ஜவுளி வணிகத்திற்கு கடன் வேண்டும்' },
    { id: 'manufacturing', label: '🏭 சிறு உற்பத்தி மற்றும் பட்டறை', prompt: 'சிறு தொழில் அல்லது உற்பத்தி பிரிவு தொடங்க கடன் உதவி வேண்டும்' },
    { id: 'services', label: '🔧 பழுது & சேவை மையம் (வாகன கேரேஜ்)', prompt: 'பழுதுபார்க்கும் பட்டறை அல்லது வணிக வாகனத்திற்கு கடன் வேண்டும்' },
    { id: 'vending', label: '🛍️ தெருவோர வியாபாரம் (தள்ளுவண்டி, ஸ்வநிதி)', prompt: 'தெருவோர வியாபாரிகள் பிரதம மந்திரி ஸ்வநிதி கடன் வேண்டும்' }
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
 * /**
 * Helper to detect sector/domain directly from text keywords.
 */
function detectSectorFromText(text = '') {
  if (!text) return null;
  const t = text.toLowerCase();

  // 1. Commercial Transport & Vehicles (లారీ, ట్రక్, కమర్షియల్ ఆటో, రవాణా)
  if (
    t.includes('lorry') || t.includes('truck') || t.includes('commercial vehicle') ||
    t.includes('auto rickshaw') || t.includes('autorickshaw') || t.includes('auto loan') ||
    t.includes('rickshaw') || t.includes('taxi') || t.includes('tempo') || t.includes('transport') ||
    t.includes('లారీ') || t.includes('ఆటో') || t.includes('రవాణా') || t.includes('వాహన') ||
    t.includes('लॉरी') || t.includes('ट्रक') || t.includes('ऑटो') || t.includes('रिक्शा') || t.includes('परिवहन') || t.includes('गाड़ी') ||
    t.includes('ಲಾರಿ') || t.includes('ಆಟೋ') || t.includes('ವಾಹನ') || t.includes('ಸಾರಿಗೆ') ||
    t.includes('লরি') || t.includes('অটো') || t.includes('রিকশা') || t.includes('গাড়ি') || t.includes('পরিবহন') ||
    t.includes('லாரி') || t.includes('ஆட்டோ') || t.includes('வாகனம்') || t.includes('போக்குவரத்து')
  ) {
    return 'Services / Commercial Transport';
  }

  // 2. Agriculture & Allied (వ్యవసాయం, పాడి పరిశ్రమ, చేపల పెంపకం)
  if (
    t.includes('farm') || t.includes('agri') || t.includes('kisan') || t.includes('crop') ||
    t.includes('tractor') || t.includes('dairy') || t.includes('cattle') || t.includes('cow') ||
    t.includes('buffalo') || t.includes('milk') || t.includes('poultry') || t.includes('fish') ||
    t.includes('aquaculture') || t.includes('రైతు') || t.includes('వ్యవసాయం') || t.includes('పంట') ||
    t.includes('పాడి') || t.includes('చేపల') || t.includes('గొర్రెలు') || t.includes('ట్రాక్టర్') ||
    t.includes('खेती') || t.includes('किसान') || t.includes('डेयरी') || t.includes('मत्स्य') || t.includes('पशुपालन') ||
    t.includes('ಕೃಷಿ') || t.includes('ರೈತ') || t.includes('ಬೆಳೆ') || t.includes('ಹೈನುಗಾರಿಕೆ') || t.includes('ಹಾಲು') || t.includes('ಮೀನು') ||
    t.includes('কৃষি') || t.includes('কৃষক') || t.includes('ফসল') || t.includes('দুগ্ধ') || t.includes('মাছ') ||
    t.includes('விவசாயம்') || t.includes('பால் பண்ணை') || t.includes('பயிர்') || t.includes('மீன்')
  ) {
    return 'Agriculture & Allied';
  }

  // 3. Services / Repair Shop & Garage (మెకానిక్, గ్యారేజ్, సర్వీస్ సెంటర్)
  if (
    t.includes('repair') || t.includes('service center') || t.includes('garage') || t.includes('mechanic') ||
    t.includes('smartphone repair') || t.includes('electrical repair') ||
    t.includes('రిపేర్') || t.includes('సర్వీస్') || t.includes('గ్యారేజ్') || t.includes('మెకానిక్') ||
    t.includes('मरम्मत') || t.includes('गैरेज') || t.includes('सर्विस') ||
    t.includes('ರಿಪೇರಿ') || t.includes('ಸೇವೆ') || t.includes('ಗ್ಯಾರೇಜ್') ||
    t.includes('মেরামত') || t.includes('গ্যারেজ') ||
    t.includes('பழுது') || t.includes('கேரேஜ்')
  ) {
    return 'Services / Repair Shop';
  }

  // 4. Food Business (హోటల్, క్యాటరింగ్, ఆహార వ్యాపారం, టిఫిన్)
  if (
    t.includes('food') || t.includes('tiffin') || t.includes('hotel') || t.includes('canteen') ||
    t.includes('restaurant') || t.includes('snack') || t.includes('tea stall') || t.includes('chai') ||
    t.includes('bakery') || t.includes('catering') || t.includes('sweet shop') || t.includes('dhaba') ||
    t.includes('టిఫిన్') || t.includes('హోటల్') || t.includes('భోజనం') || t.includes('ఆహారం') || t.includes('క్యాటరింగ్') ||
    t.includes('होटल') || t.includes('टिफिन') || t.includes('चाय') || t.includes('खाना') || t.includes('भोजन') || t.includes('ढाबा') ||
    t.includes('ಹೋಟೆಲ್') || t.includes('ತಿಂಡಿ') || t.includes('ಊಟ') || t.includes('ಚಹಾ') || t.includes('ಬೇಕರಿ') || t.includes('ಆಹಾರ') ||
    t.includes('হোটেল') || t.includes('টিফিন') || t.includes('খাবার') || t.includes('চা') || t.includes('বেকারি') ||
    t.includes('உணவு') || t.includes('ஹோட்டல்') || t.includes('டிபன்') || t.includes('கேட்டரிங்')
  ) {
    return 'Food Business';
  }

  // 5. Retail / Kirana Shop (కిరాణా, జనరల్ స్టోర్)
  if (
    t.includes('kirana') || t.includes('grocery') || t.includes('general store') || t.includes('supermarket') ||
    (t.includes('retail') && !t.includes('garment')) || (t.includes('shop') && !t.includes('repair') && !t.includes('tea')) ||
    t.includes('కిరాణా') || t.includes('జనరల్ స్టోర్') || t.includes('దుకాణం') ||
    t.includes('किराना') || t.includes('जनरल स्टोर') || t.includes('दुकान') || t.includes('खुदरा') ||
    t.includes('ಕಿರಾಣಿ') || t.includes('ಅಂಗಡಿ') || t.includes('ಜನರಲ್ ಸ್ಟೋರ್') ||
    t.includes('মুদি') || t.includes('দোকান') || t.includes('খুচরা') ||
    t.includes('மளிகை') || t.includes('சில்லறை')
  ) {
    return 'Retail / Kirana Shop';
  }

  // 6. Street Vending (వీధి వ్యాపారం, తోపుడు బండ్లు)
  if (
    t.includes('street vendor') || t.includes('street vending') || t.includes('thela') || t.includes('cart') ||
    t.includes('hawker') || t.includes('footpath') || t.includes('roadside') || t.includes('pushcart') ||
    t.includes('తోపుడు బండి') || t.includes('తోపుడు') || t.includes('వీధి వ్యాపారం') || t.includes('ఫెరీవాలా') ||
    t.includes('ठेला') || t.includes('रेहड़ी') || t.includes('पटरी') || t.includes('फेरीवाला') ||
    t.includes('ತಳ್ಳುವ ಗಾಡಿ') || t.includes('ಬೀದಿ ವ್ಯಾಪಾರ') || t.includes('ಬೀದಿ ಬದಿ') ||
    t.includes('হকার') || t.includes('ঠেলাগাড়ি') || t.includes('ফুটপাত') ||
    t.includes('தள்ளுவண்டி') || t.includes('தெருவோர')
  ) {
    return 'Street Vending';
  }

  // 7. Textile & Garments (టైలరింగ్, వస్త్ర వ్యాపారం)
  if (
    t.includes('textile') || t.includes('garment') || t.includes('tailor') || t.includes('tailoring') ||
    t.includes('boutique') || t.includes('dress') || t.includes('cloth') || t.includes('sewing') ||
    t.includes('టైలరింగ్') || t.includes('వస్త్ర') || t.includes('దర్జీ') || t.includes('బట్టలు') ||
    t.includes('टेलर') || t.includes('सिलाई') || t.includes('कपड़ा') || t.includes('दर्जी') || t.includes('परिधान') ||
    t.includes('ಟೈಲರಿಂಗ್') || t.includes('ಜವಳಿ') || t.includes('ಬಟ್ಟೆ') || t.includes('ದರ್ಜಿ') ||
    t.includes('দর্জি') || t.includes('পোশাক') || t.includes('বস্ত্র') || t.includes('সেলাই') ||
    t.includes('தையல்') || t.includes('ஜவுளி') || t.includes('ஆடை')
  ) {
    return 'Textile & Garments';
  }

  // 8. Handicrafts & Handlooms (చేనేత, చేతివృత్తులు)
  if (
    t.includes('handicraft') || t.includes('handloom') || t.includes('artisan') || t.includes('weaver') ||
    t.includes('potter') || t.includes('carpenter') || t.includes('blacksmith') || t.includes('coir') ||
    t.includes('sculptor') || t.includes('vishwakarma') || t.includes('చేనేత') || t.includes('చేతివృత్తులు') ||
    t.includes('వడ్రంగి') || t.includes('కమ్మరి') || t.includes('కుమ్మరి') ||
    t.includes('हथकरघा') || t.includes('बुनकर') || t.includes('दस्तकार') || t.includes('कारीगर') || t.includes('बढ़ई') || t.includes('लोहार') || t.includes('कुम्हार') ||
    t.includes('ನೇಕಾರ') || t.includes('ಕರಕುಶಲ') || t.includes('ಕುಂಬಾರ') || t.includes('ಕಮ್ಮಾರ') || t.includes('ಬಡಗಿ') ||
    t.includes('তাঁতি') || t.includes('হস্তশিল্প') || t.includes('কারিগর') || t.includes('ছুতোর') || t.includes('কামার') || t.includes('কুমার') ||
    t.includes('கைத்தறி') || t.includes('கைவினை') || t.includes('நெசவாளர்')
  ) {
    return 'Handicrafts & Handlooms';
  }

  // 9. Manufacturing & Fabrication (చిన్న తయారీ పరిశ్రమ)
  if (
    t.includes('manufacturing') || t.includes('fabrication') || t.includes('factory') || t.includes('workshop') ||
    t.includes('industry') || t.includes('production') || t.includes('zed') || t.includes('unit') ||
    t.includes('తయారీ పరిశ్రమ') || t.includes('ఫ్యాబ్రికేషన్') || t.includes('పరిశ్రమ') ||
    t.includes('विनिर्माण') || t.includes('उद्योग') || t.includes('कारखाना') || t.includes('फैब्रिकेशन') ||
    t.includes('ಉತ್ಪಾದನೆ') || t.includes('ಕೈಗಾರಿಕೆ') ||
    t.includes('ম্যানুফ্যাকচারিং') || t.includes('কারখানা') || t.includes('উৎপাদন') ||
    t.includes('உற்பத்தி') || t.includes('தொழிற்சாலை')
  ) {
    return 'Manufacturing & Fabrication';
  }

  // 10. Differently Abled / Divyangjan
  if (
    t.includes('disability') || t.includes('pwd') || t.includes('divyang') || t.includes('handicap') ||
    t.includes('దివ్యాంగుల') || t.includes('వైకల్యం') || t.includes('వికలాంగ') ||
    t.includes('दिव्यांग') || t.includes('विकलांग') ||
    t.includes('ವಿಕಲಚೇತನ') || t.includes('ಅಂಗವಿಕಲ') || t.includes('ದಿವ್ಯಾಂಗ') ||
    t.includes('প্রতিবন্ধী') || t.includes('দিব্যাঙ্গ') ||
    t.includes('மாற்றுத்திறனாளி')
  ) {
    return 'Differently Abled / Divyangjan';
  }

  // 11. Education / Students
  if (
    t.includes('student') || t.includes('college') || t.includes('education') || t.includes('study') ||
    t.includes('degree') || t.includes('fee') || t.includes('university') ||
    t.includes('చదువు') || t.includes('విద్య') || t.includes('శిక్షణ') || t.includes('విద్యాభ్యాసం') ||
    t.includes('शिक्षण') || t.includes('विद्यार्थी') || t.includes('पढ़ाई') || t.includes('छात्र') ||
    t.includes('ಶಿಕ್ಷಣ') || t.includes('ವಿದ್ಯಾರ್ಥಿ') ||
    t.includes('শিক্ষা') || t.includes('ছাত্র') ||
    t.includes('கல்வி') || t.includes('மாணவர்')
  ) {
    return 'Education / Youth';
  }

  // 12. Women Entrepreneur
  if (
    t.includes('women') || t.includes('mahila') || t.includes('shg') || t.includes('female') ||
    t.includes('మహిళ') || t.includes('ఆడ') || t.includes('महिला') ||
    t.includes('ಮಹಿಳೆ') || t.includes('ಸ್ತ್ರೀ') ||
    t.includes('মহিলা') || t.includes('নারী') ||
    t.includes('பெண்')
  ) {
    return 'Women Entrepreneur';
  }

  return null;
}

/**
 * Intelligent Follow-up Inquiry Detector
 * Detects financial inquiries: EMI, tenure, moratorium, interest rate, eligibility, or documentation.
 */
function isFollowUpInquiry(message = '', conversationHistory = []) {
  if (!message) return false;
  const msgLower = message.toLowerCase();

  const financialTerms = [
    'emi', 'interest', 'interest rate', 'tenure', 'moratorium', 'installment', 'repay',
    'repayment', 'terms', 'eligibility', 'documents', 'documentation', 'how to apply',
    'subsidy percentage', 'loan amount', 'bank', 'collateral', 'margin money',
    'tell me more', 'more details', 'what about this', 'for this loan', 'for this scheme',
    // Telugu
    'వడ్డీ', 'ఈఎంఐ', 'వాయిదా', 'కాలపరిమితి', 'మొరటోరియం', 'పత్రాలు', 'దరఖాస్తు', 'సబ్సిడీ', 'రుణం మొత్తం', 'వివరాలు',
    // Hindi
    'ब्याज', 'ईएमआई', 'किस्त', 'अवधि', 'दस्तावेज', 'कागजात', 'आवेदन', 'सब्सिडी', 'ऋण राशि', 'विवरण',
    // Kannada
    'ಬಡ್ಡಿ', 'ಇಎಂಐ', 'ಕಂತು', 'ಅವಧಿ', 'ದಾಖಲೆಗಳು', 'ಅರ್ಜಿ', 'ಸಬ್ಸಿಡಿ', 'ಸಾಲದ ಮೊತ್ತ', 'ವಿವರಗಳು',
    // Bengali
    'সুদ', 'ইএমআই', 'কিস্তি', 'মেয়াদ', 'নথি', 'আবেদন', 'ভর্তুকি', 'ঋণের পরিমাণ', 'বিস্তারিত',
    // Tamil
    'வட்டி', 'இஎம்ஐ', 'தவணை', 'கால அளவு', 'ஆவணங்கள்', 'விண்ணப்பம்', 'மானியம்'
  ];

  const hasFinancialTerm = financialTerms.some(term => msgLower.includes(term));
  const hasHistory = Array.isArray(conversationHistory) && conversationHistory.length > 0;

  return hasFinancialTerm || (hasHistory && (
    msgLower.includes('this') || msgLower.includes('that') || msgLower.includes('it') ||
    msgLower.includes('దీని') || msgLower.includes('ఇది') ||
    msgLower.includes('इसके') || msgLower.includes('यह') ||
    msgLower.includes('ಇದರ') || msgLower.includes('ಇದು') ||
    msgLower.includes('এর') || msgLower.includes('এটি')
  ));
}

/**
 * 1. Intelligent Sector & Intent Classifier
 * Accurately classifies user goal into explicit domain sectors.
 * Dynamic Intent Adaptability: Always prioritizes the user's latest query topic over initial profile.
 */
function classifyUserSector(message = '', userProfile = null) {
  if (isDiscoveryOrUnspecifiedQuery(message, userProfile)) {
    return 'Discovery';
  }

  // 1. Dynamic Intent Priority: User message intent STRICTLY overrides static userProfile
  const sectorFromMsg = detectSectorFromText(message);
  if (sectorFromMsg) {
    return sectorFromMsg;
  }

  // 2. Only if the message does NOT contain explicit domain keywords, fall back to userProfile
  if (userProfile?.businessType) {
    const sectorFromProfile = detectSectorFromText(userProfile.businessType);
    if (sectorFromProfile) return sectorFromProfile;
  }

  if (userProfile?.hasDisability) {
    return 'Differently Abled / Divyangjan';
  }
  if (userProfile?.category === 'Women Entrepreneur') {
    return 'Women Entrepreneur';
  }

  return 'Retail / Kirana Shop';
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

  // Strict domain candidate filtering for each of the 8 business types
  let candidateCodes = [];

  if (detectedSector === 'Food Business') {
    candidateCodes = ['PMFME', 'PMMY', 'PMEGP'];
  } else if (detectedSector === 'Retail / Kirana Shop') {
    candidateCodes = ['PMMY', 'CGTMSE'];
  } else if (detectedSector === 'Handicrafts & Handlooms') {
    candidateCodes = ['PM-VISHWAKARMA', 'WEAVER-MUDRA', 'PMEGP', 'MCY'];
  } else if (detectedSector === 'Agriculture & Allied') {
    candidateCodes = ['KCC', 'AIF', 'SMAM', 'PMMSY', 'AHIDF'];
  } else if (detectedSector === 'Textile & Garments') {
    candidateCodes = ['SAMARTH-TEXTILE', 'PM-VISHWAKARMA', 'PMEGP', 'PMMY'];
  } else if (detectedSector === 'Manufacturing & Fabrication') {
    candidateCodes = ['MSME-ZED', 'PMEGP', 'CGTMSE', 'STAND-UP'];
  } else if (detectedSector === 'Services / Commercial Transport' || detectedSector === 'Services / Repair Shop') {
    candidateCodes = ['PMEGP-SERVICE', 'PMMY', 'STAND-UP', 'CGTMSE'];
  } else if (detectedSector === 'Street Vending') {
    candidateCodes = ['PM-SVANIDHI', 'DAY-NULM', 'PMMY'];
  } else if (detectedSector === 'Education / Youth') {
    candidateCodes = ['PM-VIDYALAXMI', 'CSIS'];
  } else if (detectedSector === 'Differently Abled / Divyangjan') {
    candidateCodes = ['NHFDC-DSY', 'PMEGP', 'PMMY'];
  } else if (detectedSector === 'Women Entrepreneur') {
    candidateCodes = ['STAND-UP', 'MCY', 'SAMARTH-TEXTILE', 'PMFME', 'PMEGP'];
  } else {
    candidateCodes = ['PMMY', 'CGTMSE', 'PMEGP'];
  }

  // If user has disability, always add NHFDC-DSY to top
  if (userProfile?.hasDisability && !candidateCodes.includes('NHFDC-DSY')) {
    candidateCodes.unshift('NHFDC-DSY');
  }

  const filteredSchemes = allSchemes.filter(s => candidateCodes.includes(s.shortCode || s.schemeId));

  // Score candidates based on query specifics & user profile
  const scored = filteredSchemes.map(scheme => {
    let score = 50;
    const code = scheme.shortCode || scheme.schemeId;

    if (detectedSector === 'Food Business') {
      if (code === 'PMFME') score += 40;
      if (code === 'PMMY') score += 30;
      if (code === 'PMEGP') score += 25;
    } else if (detectedSector === 'Retail / Kirana Shop') {
      if (code === 'PMMY') score += 40;
      if (code === 'CGTMSE') score += 35;
    } else if (detectedSector === 'Handicrafts & Handlooms') {
      if (code === 'PM-VISHWAKARMA') score += 40;
      if (code === 'WEAVER-MUDRA') score += 38;
      if (code === 'MCY') score += 30;
    } else if (detectedSector === 'Agriculture & Allied') {
      if (queryLower.includes('tractor') && code === 'SMAM') score += 40;
      else if (queryLower.includes('fish') && code === 'PMMSY') score += 40;
      else if (queryLower.includes('dairy') && code === 'AHIDF') score += 40;
      else if (code === 'KCC') score += 38;
      else if (code === 'AIF') score += 35;
    } else if (detectedSector === 'Textile & Garments') {
      if (code === 'SAMARTH-TEXTILE') score += 40;
      if (code === 'PM-VISHWAKARMA') score += 38;
      if (code === 'PMEGP') score += 30;
    } else if (detectedSector === 'Manufacturing & Fabrication') {
      if (code === 'MSME-ZED') score += 40;
      if (code === 'PMEGP') score += 38;
      if (code === 'CGTMSE') score += 35;
    } else if (detectedSector === 'Services / Commercial Transport' || detectedSector === 'Services / Repair Shop') {
      if (queryLower.includes('lorry') || queryLower.includes('truck') || queryLower.includes('commercial vehicle') || queryLower.includes('transport')) {
        if (code === 'PMEGP-SERVICE') score += 45;
        if (code === 'PMMY') score += 40;
        if (code === 'STAND-UP') score += 38;
      } else if (queryLower.includes('auto') || queryLower.includes('rickshaw')) {
        if (code === 'PMMY') score += 45;
        if (code === 'PMEGP-SERVICE') score += 40;
        if (code === 'STAND-UP') score += 35;
      } else {
        if (code === 'PMEGP-SERVICE') score += 40;
        if (code === 'PMMY') score += 35;
        if (code === 'CGTMSE') score += 30;
      }
    } else if (detectedSector === 'Street Vending') {
      if (code === 'PM-SVANIDHI') score += 40;
      if (code === 'DAY-NULM') score += 35;
      if (code === 'PMMY') score += 30;
    }

    if (userProfile?.hasDisability && code === 'NHFDC-DSY') score += 50;
    if (userProfile?.category === 'Women Entrepreneur' && (code === 'STAND-UP' || code === 'MCY' || code === 'SAMARTH-TEXTILE')) score += 30;
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
 * Intelligent Vernacular Financial Advisory Fallback
 * Provides warm, expert advice on EMI, tenure, moratorium, interest rate, and application terms.
 */
function buildFinancialAdvisoryFallback(message, language = 'English', sector = 'General Advisory') {
  const isTe = language === 'Telugu' || /[\u0C00-\u0C7F]/.test(message);
  const isMr = language === 'Marathi';
  const isHi = (language === 'Hindi' || /[\u0900-\u097F]/.test(message)) && !isMr;
  const isTa = language === 'Tamil' || /[\u0B80-\u0BFF]/.test(message);
  const isKn = language === 'Kannada' || /[\u0C80-\u0CFF]/.test(message);
  const isBn = language === 'Bengali' || /[\u0980-\u09FF]/.test(message);

  let msg = '';
  if (isTe) {
    msg = 'ఈ ప్రభుత్వ రుణ పథకానికి వడ్డీ రేటు సాధారణంగా సంవత్సరానికి 8.5% నుండి 11.5% వరకు ఉంటుంది. రుణాన్ని తిరిగి చెల్లించే కాలపరిమితి 36 నుండి 60 నెలల (3 నుండి 5 సంవత్సరాలు) వరకు సౌకర్యవంతంగా ఉంటుంది. వ్యాపారం స్థిరపడటానికి బ్యాంకులు 6 నుండి 12 నెలల మొరటోరియం (Moratorium - వాయిదాల విరామం) సదుపాయం కల్పిస్తాయి, దీని వలన ప్రారంభంలో ఆర్థిక ఇబ్బందులు లేకుండా వ్యాపారాన్ని అభివృద్ధి చేసుకోవచ్చు. మీరు ఎటువంటి ఆస్తి తాకట్టు పెట్టాల్సిన అవసరం లేదు.';
  } else if (isMr) {
    msg = 'या सरकारी योजना/कर्जासाठी व्याजदर साधारणपणे वार्षिक ८.५% ते ११.५% असतो. परतफेडीचा कालावधी ३६ ते ६० महिने (३ ते ५ वर्षे) असतो. व्यवसाय सुरू करण्यासाठी बँका ६ ते १२ महिन्यांचा मोरेटोरियम (हप्ता सवलत) कालावधी देतात. या कर्जासाठी कोणतीही मालमत्ता गहाण ठेवण्याची आवश्यकता नाही.';
  } else if (isTa) {
    msg = 'இந்த அரசு கடன் திட்டத்திற்கான வட்டி விகிதம் பொதுவாக ஆண்டுக்கு 8.5% முதல் 11.5% வரை இருக்கும். கடன் திருப்பிச் செலுத்தும் காலம் 36 முதல் 60 மாதங்கள் (3 முதல் 5 ஆண்டுகள்). தொழிலை நிலைநிறுத்த வங்கிகள் 6 முதல் 12 மாதங்கள் வரை தவணை அவகாசம் (Moratorium) வழங்குகின்றன. எந்தவித சொத்து பிணையமும் தேவையில்லை.';
  } else if (isHi) {
    msg = 'इस सरकारी योजना/ऋण के लिए ब्याज दर सामान्यतः 8.5% से 11.5% प्रति वर्ष होती है। ऋण चुकाने की अवधि (Tenure) 36 से 60 महीने (3 से 5 वर्ष) तक होती है। अधिकांश बैंक 6 से 12 महीने की मोरेटोरियम (छूट) अवधि प्रदान करते हैं ताकि ईएमआई शुरू होने से पहले व्यवसाय सुचारू रूप से स्थापित हो सके। इस ऋण के लिए कोई अचल संपत्ति गिरवी रखने की आवश्यकता नहीं होती है।';
  } else if (isKn) {
    msg = 'ಈ ಸರ್ಕಾರಿ ಸಾಲ ಯೋಜನೆಗೆ ಬಡ್ಡಿ ದರವು ಸಾಮಾನ್ಯವಾಗಿ ವಾರ್ಷಿಕ 8.5% ರಿಂದ 11.5% ಇರುತ್ತದೆ. ಸಾಲ ಮರುಪಾವತಿ ಅವಧಿಯು 36 ರಿಂದ 60 ತಿಂಗಳುಗಳು (3 ರಿಂದ 5 ವರ್ಷಗಳು). ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಸ್ಥಿರಗೊಳಿಸಲು ಬ್ಯಾಂಕುಗಳು 6 ರಿಂದ 12 ತಿಂಗಳ ಮೊರಟೋರಿಯಂ (ಕಂತು ವಿರಾಮ) ನೀಡುತ್ತವೆ. ಈ ಸಾಲಕ್ಕೆ ಯಾವುದೇ ಆಸ್ತಿಯನ್ನು ಅಡಮಾನವಿಡುವ ಅಗತ್ಯವಿಲ್ಲ.';
  } else if (isBn) {
    msg = 'এই সরকারি ঋণ প্রকল্পের সুদের হার সাধারণত বার্ষিক ৮.৫% থেকে ১১.৫% পর্যন্ত হয়। ঋণ পরিশোধের মেয়াদ ৩৬ থেকে ৬০ মাস (৩ থেকে ৫ বছর)। ব্যবসা শুরু এবং স্থিতিশীল করার জন্য ব্যাংকগুলি ৬ থেকে ১২ মাসের মোরেটোরিয়াম (কিস্তির বিরতি) সুবিধা দেয়। এই ঋণের জন্য কোনো সম্পত্তি বন্ধক রাখার প্রয়োজন নেই।';
  } else {
    msg = 'For this government enterprise credit scheme, interest rates typically range between 8.5% and 11.5% per annum. The repayment tenure extends comfortably from 36 to 60 months (3 to 5 years). Banks provide a moratorium period of 6 to 12 months so your enterprise can generate steady cash flow before regular EMI installments begin, with 100% collateral-free terms under government guarantee.';
  }

  return {
    type: 'financial_advisory',
    message: msg,
    target_sector: sector,
    schemes: [],
    business_options: [],
    reply: msg,
    recommendedSchemes: [],
    detectedSector: sector,
    source: 'Udyam Setu Financial Advisor Engine',
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
  const detectedSector = classifyUserSector(message, userProfile);

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
` : effectiveLang === 'Marathi' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE MARATHI (मराठी देवनागरी) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Marathi script.
- Zero English words.
` : effectiveLang === 'Tamil' ? `
🚨 ABSOLUTE MANDATORY: 100% PURE TAMIL (தமிழ்) SCRIPT ONLY!
- Every single word, message, option label, title, and description MUST be in pure Tamil script.
- Zero English words.
` : `
- Output clear, reassuring Indian English.
`;

  // Helper for resilient Gemini API calls across models with multi-turn memory
  const callGeminiWithModels = async (prompt, conversationHistory = [], systemInstructionText = '') => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.5-flash', 'gemini-3.6-flash'];

    const contents = [];
    if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
      for (const item of conversationHistory.slice(-6)) {
        if (item.role === 'user' && item.text) {
          contents.push({ role: 'user', parts: [{ text: item.text }] });
        } else if ((item.role === 'model' || item.role === 'assistant') && (item.text || item.message || item.reply)) {
          contents.push({ role: 'model', parts: [{ text: item.text || item.message || item.reply }] });
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: prompt }] });

    for (const model of candidateModels) {
      try {
        const requestBody = {
          contents,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 3500,
            responseMimeType: 'application/json'
          }
        };

        if (systemInstructionText) {
          requestBody.systemInstruction = {
            parts: [{ text: systemInstructionText }]
          };
        }

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
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

  const DYNAMIC_PERSONA_SYSTEM_INSTRUCTION = `
You are Udyam Setu AI, an expert, conversational government scheme advisor.
Your behavior rules:
1. Dynamic Intent Adaptability:
   - Always prioritize the user's latest query topic over their initial profile.
   - If a user with a food profile asks about agriculture, farming, transport (e.g., buying a lorry), or education, immediately pivot: "Nice! If you are exploring the agriculture/transport sector..." and recommend schemes matching that specific inquiry.
2. In-Depth Follow-Up Conversations:
   - When the user asks follow-up questions (e.g., "What is the loan amount?", "What are the EMI terms?", "What is the interest rate?"), act as a genuine AI financial advisor.
   - Explain loan limits, interest subsidies, moratorium periods, and repayment/EMI tenures (e.g., 36-60 months) in detail.
   - Do NOT just spit out generic, static scheme cards when asked deep follow-up questions. Answer conversationally.
3. Natural Multilingual Capability:
   - Always generate your response, scheme explanations, loan details, and EMI breakdowns entirely in the target user language: ${effectiveLang}.
   - Use natural, grammatically correct vernacular phrasing in pure native script (Telugu, Hindi, Kannada, Bengali, Marathi, Tamil, or English).
4. Interactive Scheme Cards:
   - Accompany your recommendations with structured scheme card metadata:
     - scheme_id (e.g., "PMMY", "PMEGP", "AIF", "KCC")
     - title
     - sector
     - max_amount
     - redirect_url (format: "/schemes/<scheme_id>")
`;

  // 3. CASE FOLLOW-UP: Deep Conversational Financial Advisory (EMI, interest, moratorium, repayment terms)
  const isFollowUp = isFollowUpInquiry(message, conversationHistory);
  if (isFollowUp && Array.isArray(conversationHistory) && conversationHistory.length > 0) {
    const followUpSystemPrompt = `
USER'S FOLLOW-UP INQUIRY: "${message}"

ACT AS AN EXPERT FINANCIAL ADVISOR.
The user is asking an in-depth follow-up financial question (e.g., loan amounts, EMI terms, interest rate, moratorium period, repayment tenure, required documents, or application procedure) regarding government schemes previously discussed.

BEHAVIOR RULES:
1. IN-DEPTH ADVISORY:
   - Explain loan limits, interest subsidies, moratorium periods (e.g., 3 to 12 months grace period to establish enterprise before regular EMI installments begin), and repayment/EMI tenures (e.g., 36-60 months / 3-5 years) in detail.
   - Answer conversationally in ${effectiveLang}.
   - Do NOT just spit out generic, static scheme cards. Set "type": "financial_advisory" and "schemes": [].
2. LANGUAGE:
   - Respond in ${effectiveLang}.
   ${languageRules}
3. STRICT JSON SCHEMA:
{
  "type": "financial_advisory",
  "message": "<Conversational financial explanation covering EMI, interest rate, moratorium, and repayment terms in ${effectiveLang}>",
  "target_sector": "${detectedSector}",
  "schemes": []
}
`;

    const geminiResult = await callGeminiWithModels(followUpSystemPrompt, conversationHistory, DYNAMIC_PERSONA_SYSTEM_INSTRUCTION);
    if (geminiResult && geminiResult.parsed && geminiResult.parsed.message) {
      const parsed = geminiResult.parsed;
      return {
        type: 'financial_advisory',
        message: parsed.message,
        target_sector: parsed.target_sector || detectedSector,
        schemes: [],
        business_options: [],
        reply: parsed.message,
        recommendedSchemes: [],
        detectedSector: parsed.target_sector || detectedSector,
        source: `Google Gemini (${geminiResult.model}) (Conversational Advisor)`,
        language: effectiveLang,
        bhashiniVoiceEnabled: true
      };
    }

    return buildFinancialAdvisoryFallback(message, effectiveLang, detectedSector);
  }

  // 4. CASE A: Conversational Discovery (User clicked "Ask", said "help", or business is not specified)
  const isDiscovery = (detectedSector === 'Discovery') || isDiscoveryOrUnspecifiedQuery(message, userProfile);
  if (isDiscovery) {
    const discoverySystemPrompt = `
You are "Udyam Setu AI", an intelligent government scheme advisory engine.

BEHAVIOR RULES:
1. CONVERSATIONAL DISCOVERY:
   - The user has sent a general inquiry or clicked "Ask" without specifying their business or demographic goal.
   - DO NOT recommend schemes directly! Set "type": "business_selection" and "schemes": [].
   - In "message", politely greet the user, explain that to guide them to the right schemes, you need to know who they are and what business they run or plan to start.
   - In "business_options", provide 6 to 8 concise business category choices (keep labels and prompts under 10 words) in pure script of ${effectiveLang}:
     1. Food Business / Tiffin / Hotel / Catering
     2. Retail / Kirana Shop / General Store
     3. Handicrafts & Handlooms / Weaver / Artisan
     4. Agriculture & Allied / Farming / Dairy / KCC
     5. Textile & Garments / Tailoring Boutique
     6. Manufacturing & Fabrication / Small Industry
     7. Services / Commercial Transport / Auto Garage
     8. Street Vending / Thela / Pushcart Vendor
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

    const geminiResult = await callGeminiWithModels(discoverySystemPrompt, conversationHistory, DYNAMIC_PERSONA_SYSTEM_INSTRUCTION);
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

  // 5. CASE B: User specified their business domain / vehicle / activity -> Autonomous Scheme Recommendation
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
   - Always prioritize the user's latest query topic over their initial profile.
   - If a user with a food profile asks about agriculture, farming, transport (e.g., buying a lorry), or education, immediately pivot: "Nice! If you are exploring the agriculture/transport sector..." and recommend schemes matching that specific inquiry.
   - Example (Commercial Transport / Vehicle): If user asks for commercial vehicle, auto-rickshaw, or lorry, recommend Stand-Up India, Mudra Kishor/Tarun, or PMEGP. Strictly DO NOT suggest street vendor or agriculture schemes.
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

  const geminiResult = await callGeminiWithModels(recommendationSystemPrompt, conversationHistory, DYNAMIC_PERSONA_SYSTEM_INSTRUCTION);

  if (geminiResult && geminiResult.parsed && geminiResult.parsed.message && Array.isArray(geminiResult.parsed.schemes)) {
    const parsed = geminiResult.parsed;
    parsed.schemes = parsed.schemes.map(s => {
      const groundTruth = relevantSchemes.find(gt => 
        (gt.shortCode && gt.shortCode.toLowerCase() === (s.scheme_id || '').toLowerCase()) ||
        (gt.schemeId && gt.schemeId.toLowerCase() === (s.scheme_id || '').toLowerCase()) ||
        (gt.schemeName && gt.schemeName.toLowerCase().includes((s.title || '').toLowerCase())) ||
        (s.title && s.title.toLowerCase().includes((gt.shortCode || '').toLowerCase()))
      );

      const exactId = groundTruth ? (groundTruth.shortCode || groundTruth.schemeId) : (s.scheme_id || 'PMMY');
      return {
        ...s,
        scheme_id: exactId,
        redirect_url: `/schemes/${exactId}`
      };
    });

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
  isFollowUpInquiry,
  isDiscoveryOrUnspecifiedQuery,
  buildDiscoveryResponse,
  buildFinancialAdvisoryFallback,
  DISCOVERY_BUSINESS_OPTIONS
};

