/**
 * Udyam Setu - Gemini AI Scheme Guidance Service
 * Powered by Google Gemini API (@google/genai) & Digital India BHASHINI Voice Guidelines
 */

const { GoogleGenAI } = require('@google/genai');
const { handleRAGConversationalChat } = require('./ragService');

const SYSTEM_INSTRUCTION = `
You are "Udyam Setu Didi / Mitra", a warm, patient, and highly encouraging grassroots business advisor for rural, marginalized, and micro-entrepreneurs across India (including street vendors, SHG women, farmers, and traditional artisans).

CRITICAL VOICE & ACCESSIBILITY RULES FOR ILLITERATE / LOW-LITERACY ENTREPRENEURS:
1. NO BUREAUCRATIC OR LEGAL JARGON:
   - NEVER say "hypothecation" or "collateral moratorium". Instead say: "You do not have to pledge any land, house, or gold."
   - NEVER say "credit-linked capital subsidy". Instead say: "The government will give you a cash grant of up to 35% that you never have to repay."
   - NEVER say "debt-service coverage ratio". Instead say: "Small, easy monthly installments from your daily shop sales."
2. SHORT & NATURAL FOR VOICE (TTS):
   - Keep answers between 2 to 4 simple sentences so it sounds pleasant and understandable when read aloud.
3. LANGUAGE ACCURACY:
   - When the user asks in Hindi, answer in simple colloquial Hindi.
   - When the user asks in Telugu, answer in simple Telugu (e.g., "నమస్కారం! ప్రధానమంత్రి ముద్ర యోజన కింద...").
   - When the user asks in Tamil, answer in simple Tamil.
   - When the user asks in Marathi, answer in simple Marathi.
   - When the user asks in English, use simple Indian English.
4. ACTIONABLE CLOSING:
   - Always conclude with one simple, comforting action: "Keep your Aadhaar card ready and visit your local Grameena Bank or CSC center."
`;

let aiClient = null;

function getGenAIClient() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.warn('Could not initialize GoogleGenAI client:', err.message);
    }
  }
  return aiClient;
}

// Intelligent vernacular fallbacks tailored to common rural entrepreneur queries
function getFallbackResponse(message, language = 'English') {
  const lower = message.toLowerCase();
  const lang = (language || 'English').toLowerCase();

  // TELUGU VERNACULAR
  if (lang.includes('telugu') || lower.includes('namaskaram') || lower.includes('loan kavali')) {
    if (lower.includes('food') || lower.includes('tiffin') || lower.includes('hotel') || lower.includes('kirana') || lower.includes('business')) {
      return `నమస్కారం! చిన్న వ్యాపారం లేదా కిరాణా దుకాణం కోసం భారత ప్రభుత్వం **పీఎం ముద్ర యోజన (PM Mudra Yojana)** ద్వారా సహాయం చేస్తోంది.

1. **శిశు ముద్ర లోన్:** ₹50,000 వరకు ఎటువంటి పూచీకత్తు (భూమి లేదా బంగారం తాకట్టు) లేకుండా లభిస్తుంది.
2. **కిశోర్ ముద్ర లోన్:** ₹50,000 నుండి ₹5,00,000 వరకు మీ వ్యాపారాన్ని విస్తరించడానికి ఉపయోగపడుతుంది.
3. **PMEGP పథకం:** గ్రామీణ మరియు మహిళా పారిశ్రామికవేత్తలకు **35% వరకు ప్రభుత్వ రాయితీ (సబ్సిడీ)** లభిస్తుంది.

**చేయవలసిన పని:** మీ ఆధార్ కార్డు, పాన్ కార్డు మరియు బ్యాంక్ పాస్‌బుక్ తీసుకుని దగ్గరలోని గ్రామీణ బ్యాంక్ లేదా CSC కేంద్రాన్ని సంప్రదించండి.`;
    }
    return `నమస్కారం! ఉద్యమ్ సేతుకు స్వాగతం. మీ వ్యాపారం కోసం ముద్ర లోన్, పిఎంఈజిపి (35% సబ్సిడీ), లేదా పిఎం స్వనిధి వంటి ప్రభుత్వ పథకాలు ఉన్నాయి. మీరు ఏ వ్యాపారం ప్రారంభించాలనుకుంటున్నారో చెప్పండి!`;
  }

  // TAMIL VERNACULAR
  if (lang.includes('tamil') || lower.includes('vanakkam')) {
    return `வணக்கம்! உங்கள் சிறு தொழிலுக்கு மத்திய அரசின் **பிரதமர் முத்ரா யோஜனா (PM Mudra Yojana)** திட்டம் சிறந்தது:
1. **சிசு கடன்:** ₹50,000 வரை எந்த சொத்து அடமானமும் இல்லாமல் கடன் பெறலாம்.
2. **PMEGP திட்டம்:** பெண்களுக்கு 35% வரை அரசு மானியம் (Subsidy) வழங்கப்படுகிறது.
உங்கள் ஆதார் அட்டை மற்றும் வங்கி பாஸ்புக்குடன் அருகில் உள்ள கிராம வங்கி அல்லது இ-சேவை மையத்தை அணுகவும்.`;
  }

  // MARATHI VERNACULAR
  if (lang.includes('marathi') || lower.includes('namaskar')) {
    return `नमस्कार! तुमच्या छोट्या व्यवसायासाठी केंद्र सरकारची **पीएम मुद्रा योजना (PM Mudra Yojana)** अत्यंत फायदेशीर आहे:
1. **शिशू कर्ज:** ₹50,000 पर्यंत कोणतेही तारण न ठेवता कर्ज मिळते.
2. **PMEGP योजना:** ग्रामीण आणि महिला उद्योजकांसाठी **35% पर्यंत सरकारी अनुदान (सबसिडी)** उपलब्ध आहे.
तुमचे आधार कार्ड आणि बँक पासबुक घेऊन जवळच्या ग्रामीण बँक किंवा सीएससी केंद्रात संपर्क साधा.`;
  }

  // HINDI VERNACULAR
  if (lang.includes('hindi') || lower.includes('namaste') || lower.includes('loan chahiye') || lower.includes('dokan')) {
    if (lower.includes('food') || lower.includes('khana') || lower.includes('hotel') || lower.includes('chai') || lower.includes('restaurant')) {
      return `नमस्ते! छोटे खाद्य व्यवसाय (Food Business) के लिए भारत सरकार की **पीएम मुद्रा योजना (PM Mudra Yojana)** सबसे बेहतरीन है:

1. **शिशु मुद्रा:** ₹50,000 तक की पूंजी बिना किसी गारंटी या जमीन गिरवी रखे मिलती है।
2. **किशोर मुद्रा:** ₹50,000 से ₹5,00,000 तक का लोन दुकान बढ़ाने के लिए।
3. **PMEGP योजना:** ग्रामीण और महिला उद्यमियों के लिए **35% तक सरकारी सब्सिडी (अनुदान)**।

**अगला कदम:** अपना आधार कार्ड, पैन कार्ड और बैंक पासबुक लेकर नजदीकी बैंक या सीएससी (CSC) केंद्र में जाएं।`;
    }
    return `नमस्ते! उद्यम सेतु में आपका स्वागत है। आप अपने व्यवसाय के लिए मुद्रा योजना (बिना गारंटी लोन), पीएमईजीपी (35% तक सरकारी सब्सिडी), या पीएम स्वनिधि (रेहड़ी-पटरी वालों के लिए) का लाभ ले सकते हैं। मुझे बताएं कि आप किस प्रकार का व्यवसाय करना चाहते हैं?`;
  }

  // ENGLISH VERNACULAR
  if (lower.includes('food') || lower.includes('canteen') || lower.includes('restaurant') || lower.includes('grocery') || lower.includes('kirana')) {
    return `Great! For starting or expanding a small food or retail business, the Government of India provides strong support through:

1. **PM Mudra Yojana (PMMY)**:
   - **Shishu Loan:** Up to ₹50,000 (100% collateral-free, no property or gold mortgage).
   - **Kishore Loan:** ₹50,000 to ₹5,00,000 for shop setup and equipment.
2. **PMEGP Scheme**:
   - Offers up to ₹25 Lakhs with **15% to 35% government cash subsidy** for rural, OBC, SC/ST, and women founders.

**Next Step:** Keep your Aadhaar Card, PAN Card, and Bank Passbook ready, and visit your nearest Grameena Bank or Common Service Center!`;
  }

  return `Hello Entrepreneur! I am your Udyam Setu guide powered by Digital India Bhashini. I can explain government schemes in simple, spoken language without banking jargon. 

You can ask me in Hindi, Telugu, Tamil, Marathi, or English about:
- *"Which loan is best for opening a grocery store?"*
- *"How to get a 35% cash subsidy under PMEGP?"*
- *"What papers do I need for a Mudra loan?"*

How can I support your business dream today?`;
}

async function handleAIChat({ message, conversationHistory = [], language = 'English', userProfile = null }) {
  return await handleRAGConversationalChat({
    message,
    conversationHistory,
    language,
    userProfile
  });
}

module.exports = {
  handleAIChat,
  getFallbackResponse
};
