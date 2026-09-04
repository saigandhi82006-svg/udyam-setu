/**
 * Udyam Setu - Dynamic RAG (Retrieval-Augmented Generation) & Scheme Intelligence Service
 * Combines Deterministic Sector/Demographic Retrieval with Gemini 2.5 Flash Multilingual Reasoning.
 * Supports: Telugu (తెలుగు), Marathi (मराठी), Hindi (हिन्दी), and English.
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
 * 1. Intelligent Sector & Intent Classifier
 * Analyzes the user's message and profile to identify their target economic sector.
 */
function classifyUserSector(message = '', userProfile = null) {
  const text = (message + ' ' + (userProfile?.businessType || '')).toLowerCase();

  if (
    text.includes('farm') || text.includes('agri') || text.includes('kisan') || text.includes('crop') ||
    text.includes('tractor') || text.includes('dairy') || text.includes('cattle') || text.includes('fish') ||
    text.includes('రైతు') || text.includes('వ్యవసాయం') || text.includes('పంట') || text.includes('శెతి') || text.includes('शेतकरी')
  ) {
    return 'Agriculture';
  }

  if (
    text.includes('student') || text.includes('college') || text.includes('education') || text.includes('study') ||
    text.includes('degree') || text.includes('fee') || text.includes('university') ||
    text.includes('చదువు') || text.includes('విద్య') || text.includes('शिक्षण') || text.includes('विद्यार्थी')
  ) {
    return 'Education / Youth';
  }

  if (
    text.includes('women') || text.includes('mahila') || text.includes('shg') || text.includes('female') ||
    text.includes('మహిళ') || text.includes('ఆడ') || text.includes('महिला') || userProfile?.category === 'Women Entrepreneur'
  ) {
    return 'Women Entrepreneur';
  }

  if (
    text.includes('artisan') || text.includes('weaver') || text.includes('carpenter') || text.includes('potter') ||
    text.includes('blacksmith') || text.includes('tailor') || text.includes('handloom') || text.includes('craft') ||
    text.includes('చేతివృత్తి') || text.includes('చేనేత') || text.includes('कारागीर') || text.includes('हातमाग')
  ) {
    return 'Artisans & Weavers';
  }

  if (
    text.includes('street') || text.includes('vendor') || text.includes('thela') || text.includes('cart') ||
    text.includes('hawker') || text.includes('బండి') || text.includes('ఫెరీవాలా') || text.includes('फेरीवाला')
  ) {
    return 'Street Vendors';
  }

  return 'MSME / Small Business';
}

/**
 * 2. Hybrid Dynamic Scheme Retriever
 * Fetches schemes matching user's sector, demographics, and query intent.
 */
async function retrieveRelevantSchemes(query, userProfile = null) {
  const allSchemes = await dataStore.getSchemes();
  const detectedSector = classifyUserSector(query, userProfile);
  const queryLower = query.toLowerCase();

  const scoredSchemes = allSchemes.map(scheme => {
    let score = 0;

    // Sector match
    if (scheme.targetSector === detectedSector) {
      score += 40;
    }

    // Business type match
    if (scheme.eligibleBusinessTypes && scheme.eligibleBusinessTypes.some(b => queryLower.includes(b.toLowerCase()))) {
      score += 25;
    }

    // Demographic category bonus
    if (userProfile?.category) {
      if (scheme.eligibleCategories && (scheme.eligibleCategories.includes(userProfile.category) || scheme.eligibleCategories.includes('All'))) {
        score += 20;
      }
    }

    // Keyword relevance in name or description
    const keywords = queryLower.split(/\s+/).filter(w => w.length > 3);
    keywords.forEach(kw => {
      if (scheme.schemeName.toLowerCase().includes(kw)) score += 15;
      if (scheme.description.toLowerCase().includes(kw)) score += 8;
      if (scheme.tagline && scheme.tagline.toLowerCase().includes(kw)) score += 10;
    });

    // Special interest: High subsidy
    if (queryLower.includes('subsidy') || queryLower.includes('సబ్సిడీ') || queryLower.includes('सबसिडी')) {
      if (scheme.subsidyPercentage > 0) score += 20;
    }

    // Special interest: Collateral free
    if (queryLower.includes('guarantee') || queryLower.includes('collateral') || queryLower.includes('హామీ') || queryLower.includes('तारण')) {
      if (scheme.tags && scheme.tags.includes('Collateral-Free')) score += 15;
    }

    return { scheme, score };
  });

  // Sort descending by relevance score
  scoredSchemes.sort((a, b) => b.score - a.score);

  // Return top 3-5 schemes
  return scoredSchemes.slice(0, 4).map(item => item.scheme);
}

// Helper to provide 100% pure native language scheme details with ZERO English words
function getVernacularSchemeDetails(scheme, lang) {
  const l = (lang || 'English').toLowerCase();
  const id = (scheme?.schemeId || '').toLowerCase();
  const name = (scheme?.schemeName || '').toLowerCase();

  if (l.includes('telugu') || l === 'te') {
    let loan = 'రూ. 10 లక్షల వరకు పూచీకత్తు లేని రుణం';
    let benefit = 'భూమి లేదా బంగారం తాకట్టు పెట్టవలసిన అవసరం లేదు. సులభమైన నెలవారీ వాయిదాలు.';
    let eligibility = 'చిన్న వ్యాపారులు, కిరాణా కొట్టు యజమానులు, చేతివృత్తుల వారు మరియు మహిళా పారిశ్రామికవేత్తలు.';

    if (id.includes('pmegp') || name.includes('pmegp') || name.includes('ఉపాధి')) {
      loan = 'రూ. 50 లక్షల వరకు (తయారీ రంగం) / రూ. 20 లక్షల వరకు (సేవా రంగం)';
      benefit = 'గ్రామీణ ప్రాంతాలలో మరియు మహిళలకు 35% వరకు ప్రభుత్వ నగదు రాయితీ (సబ్సిడీ). ఈ డబ్బును తిరిగి చెల్లించాల్సిన అవసరం లేదు.';
      eligibility = '18 సంవత్సరాలు నిండిన కొత్త వ్యాపారం లేదా పరిశ్రమ ప్రారంభించాలనుకునే ప్రతి ఒక్కరూ అర్హులు.';
    } else if (id.includes('mudra') || name.includes('mudra') || name.includes('ముద్ర')) {
      loan = 'రూ. 50,000 (శిశు) నుండి రూ. 10 లక్షల (తరుణ్) వరకు';
      benefit = 'ఎటువంటి ఆస్తి లేదా పూచీకత్తు లేకుండా బ్యాంకుల ద్వారా తక్కువ వడ్డీకే సులభంగా లభించే రుణం.';
      eligibility = 'చిన్న వ్యాపారులు, కిరాణా దుకాణాలు, పండ్ల వ్యాపారులు, చిన్న సర్వీస్ షాపులు.';
    } else if (id.includes('svanidhi') || name.includes('svanidhi') || name.includes('స్వనిధి')) {
      loan = 'రూ. 10,000 నుండి రూ. 50,000 వరకు ప్రారంభ మూలధనం';
      benefit = 'డిజిటల్ లావాదేవీలపై క్యాష్‌బ్యాక్ మరియు సకాలంలో చెల్లిస్తే 7% ప్రభుత్వ వడ్డీ రాయితీ.';
      eligibility = 'వీధి వ్యాపారులు, తోపుడు బండ్ల వ్యాపారులు మరియు ఫుట్‌పాత్ విక్రేతలు.';
    } else if (id.includes('kcc') || name.includes('kisan') || name.includes('కిసాన్')) {
      loan = 'రూ. 3 లక్షల వరకు సులభ వ్యవసాయ రుణం';
      benefit = 'సకాలంలో చెల్లిస్తే కేవలం 4% వడ్డీ మాత్రమే. 3% ప్రభుత్వ వడ్డీ రాయితీ.';
      eligibility = 'రైతులు, పాడి రైతులు, పశుపోషకులు మరియు మత్స్యకారులు.';
    } else if (id.includes('standup') || name.includes('stand') || name.includes('స్టాండప్')) {
      loan = 'రూ. 10 లక్షల నుండి రూ. 1 కోటి వరకు మూలధనం';
      benefit = 'మహిళలు మరియు ఎస్సీ/ఎస్టీ వర్గాల కోసం ప్రత్యేక మూలధన రాయితీ మరియు రుణ సదుపాయం.';
      eligibility = 'మహిళా పారిశ్రామికవేత్తలు లేదా ఎస్సీ/ఎస్టీ వర్గాల నూతన వ్యాపారవేత్తలు.';
    } else if (id.includes('vishwakarma') || name.includes('విశ్వకర్మ')) {
      loan = 'రూ. 15,000 ఉచిత ఆధునిక పనిముట్ల గ్రాంట్ + రూ. 3 లక్షల వరకు రుణం';
      benefit = 'కేవలం 5% తక్కువ వడ్డీతో పాటు ఉచిత ఆధునిక పనిముట్లు మరియు ఉచిత శిక్షణ.';
      eligibility = 'చేతివృత్తుల వారు, చేనేత కార్మికులు, వడ్రంగులు, కమ్మరులు, కుమ్మరులు, దర్జీలు.';
    } else if (id.includes('nhfdc') || name.includes('divyang') || name.includes('దివ్యాంగుల')) {
      loan = 'రూ. 50 లక్షల వరకు రాయితీ రుణం (కేవలం 5% నుండి 8% తక్కువ వడ్డీ రేటు)';
      benefit = 'దివ్యాంగుల కోసం ప్రత్యేక రాయితీ. మహిళా దివ్యాంగులకు అదనంగా 1% వడ్డీ రాయితీ. రూ. 50,000 వరకు తాకట్టు లేదా పూచీకత్తు అవసరం లేదు.';
      eligibility = '40% లేదా అంతకంటే ఎక్కువ వైకల్యం ఉన్న 18 నుండి 65 సంవత్సరాల భారతీయ పౌరులు అర్హులు.';
    }

    return { loan, benefit, eligibility };
  }

  if (l.includes('hindi') || l === 'hi') {
    let loan = '₹10 लाख तक बिना गारंटी ऋण';
    let benefit = 'जमीन या सोना गिरवी रखने की कोई आवश्यकता नहीं। आसान मासिक किस्तें।';
    let eligibility = 'छोटे दुकानदार, खुदरा व्यापारी, महिला उद्यमी और कारीगर।';

    if (id.includes('pmegp') || name.includes('pmegp')) {
      loan = '₹50 लाख तक (विनिर्माण) / ₹20 लाख तक (सेवा व्यवसाय)';
      benefit = 'ग्रामीण और महिला उद्यमियों के लिए 35% तक सरकारी नकद अनुदान (सब्सिडी)।';
      eligibility = '18 वर्ष से अधिक आयु का कोई भी नागरिक जो नया व्यवसाय शुरू करना चाहता है।';
    } else if (id.includes('mudra') || name.includes('mudra')) {
      loan = '₹50,000 (शिशु) से ₹10 लाख (तरुण) तक';
      benefit = 'बिना किसी संपत्ति गारंटी के बैंकों द्वारा आसान ऋण सुविधा।';
      eligibility = 'दुकानदार, फल-सब्जी विक्रेता, छोटे सेवा प्रदाता और निर्माता।';
    } else if (id.includes('svanidhi') || name.includes('svanidhi')) {
      loan = '₹10,000 से ₹50,000 तक';
      benefit = 'समय पर भुगतान पर 7% ब्याज सब्सिडी और डिजिटल कैशबैक।';
      eligibility = 'स्ट्रीट वेंडर, ठेले वाले और रेहड़ी-पटरी व्यापारी।';
    } else if (id.includes('kcc') || name.includes('kisan')) {
      loan = '₹3 लाख तक आसान कृषि ऋण';
      benefit = 'समय पर अदायगी पर केवल 4% प्रभावी ब्याज दर।';
      eligibility = 'किसान, पशुपालक और डेयरी किसान।';
    } else if (id.includes('nhfdc') || name.includes('divyang')) {
      loan = '₹50 लाख तक रियायती स्वरोजगार ऋण (केवल 5% से 8% ब्याज दर)';
      benefit = 'दिव्यांगजनों के लिए विशेष सब्सिडी एवं महिला दिव्यांगजनों को 1% अतिरिक्त ब्याज छूट। 50,000 तक बिना गारंटी ऋण।';
      eligibility = '40% या अधिक दिव्यांगता वाले 18 से 65 वर्ष के भारतीय नागरिक।';
    }

    return { loan, benefit, eligibility };
  }

  return {
    loan: scheme.loanAmountFormatted,
    benefit: scheme.benefits?.[0] || 'Collateral-free government credit',
    eligibility: scheme.whoCanApply || 'Micro and small business owners'
  };
}

/**
 * 3. Dynamic Vernacular Fallback Generator (100% Pure Language, Zero English)
 */
function buildVernacularFallbackReply(message, schemes, language = 'English', userProfile = null) {
  const lang = (language || 'English').toLowerCase();
  const top = schemes[0] || {};
  const second = schemes[1] || {};

  // TELUGU (100% Pure Telugu, Zero English Words)
  if (lang.includes('telugu') || lang === 'te' || /[\u0C00-\u0C7F]/.test(message)) {
    const topV = getVernacularSchemeDetails(top, 'telugu');
    const secondV = getVernacularSchemeDetails(second, 'telugu');

    return `నమస్కారం! మీ ప్రశ్న ఆధారంగా, ప్రభుత్వం నుండి మీకు అత్యంత ప్రయోజనకరమైన పథకాలు ఇక్కడ ఉన్నాయి:

1. **${top.vernacularNames?.te || top.schemeName}**:
   - **ఆర్థిక సహాయం:** ${topV.loan}
   - **ప్రయోజనం:** ${topV.benefit}
   - **ఎవరు అర్హులు:** ${topV.eligibility}

${second.schemeName ? `2. **${second.vernacularNames?.te || second.schemeName}**:
   - **ఆర్థిక సహాయం:** ${secondV.loan}
   - **ప్రయోజనం:** ${secondV.benefit}
   - **ఎవరు అర్హులు:** ${secondV.eligibility}` : ''}

**ముఖ్యమైన పత్రాలు:** ఆధార్ కార్డు, పాన్ కార్డు, బ్యాంక్ ఖాతా పుస్తకం మరియు మీ వ్యాపార వివరాలు సిద్ధం చేసుకోండి. మీరు మీ దగ్గరలోని గ్రామీణ బ్యాంకు లేదా మీ-సేవ కేంద్రం ద్వారా సులభంగా దరఖాస్తు చేసుకోవచ్చు. మీకు ఈ పథకాలపై మరిన్ని వివరాలు కావాలా?`;
  }

  // HINDI (100% Pure Hindi, Zero English Words)
  if (lang.includes('hindi') || lang === 'hi' || /[\u0900-\u097F]/.test(message)) {
    const topV = getVernacularSchemeDetails(top, 'hindi');
    const secondV = getVernacularSchemeDetails(second, 'hindi');

    return `नमस्ते! आपके प्रश्न और आवश्यकता के अनुसार सबसे उपयुक्त सरकारी योजनाएं निम्नलिखित हैं:

1. **${top.vernacularNames?.hi || top.schemeName}**:
   - **वित्तीय सहायता:** ${topV.loan}
   - **मुख्य लाभ:** ${topV.benefit}
   - **कौन आवेदन कर सकता है:** ${topV.eligibility}

${second.schemeName ? `2. **${second.vernacularNames?.hi || second.schemeName}**:
   - **वित्तीय सहायता:** ${secondV.loan}
   - **मुख्य लाभ:** ${secondV.benefit}
   - **कौन आवेदन कर सकता है:** ${secondV.eligibility}` : ''}

**ज़रूरी दस्तावेज़:** आधार कार्ड, पैन कार्ड और बैंक पासबुक। नजदीकी बैंक या जन सेवा केंद्र में आवेदन कर सकते हैं। क्या आप किसी विशेष योजना की पात्रता जानना चाहते हैं?`;
  }

  // ENGLISH
  return `Hello Entrepreneur! Based on your query and business profile, here are the most relevant government schemes:

1. **${top.schemeName}**:
   - **Financial Benefit:** ${top.loanAmountFormatted} (${top.subsidyPercentage ? top.subsidyPercentage + '% Capital Subsidy' : 'Collateral-Free Credit'}).
   - **Key Advantage:** ${top.benefits?.[0] || 'Flexible repayment terms'}.
   - **Who can apply:** ${top.whoCanApply}.

${second.schemeName ? `2. **${second.schemeName}**:
   - **Benefit:** ${second.loanAmountFormatted}
   - **Advantage:** ${second.benefits?.[0] || 'Government handholding'}.` : ''}

**Next Step:** Keep your Aadhaar Card, PAN, and Bank Passbook ready. Would you like to know the exact documents or interest rate for any of these schemes?`;
}

/**
 * 4. Master Conversational RAG Handler with Gemini 2.5 Flash
 */
async function handleRAGConversationalChat({
  message,
  conversationHistory = [],
  language = 'English',
  userProfile = null
}) {
  // Step 1: Retrieve grounded factual schemes
  const relevantSchemes = await retrieveRelevantSchemes(message, userProfile);

  // Format candidate schemes into factual context
  const schemesFactualContext = relevantSchemes.map((s, idx) => `
[SCHEME ${idx + 1}]
- Scheme Name: ${s.schemeName} (Vernacular: Telugu="${s.vernacularNames?.te || ''}", Marathi="${s.vernacularNames?.mr || ''}", Hindi="${s.vernacularNames?.hi || ''}")
- Sector: ${s.targetSector}
- Financial Support: ${s.loanAmountFormatted}
- Interest Rate: ${s.interestRate}
- Government Subsidy: ${s.subsidyPercentage}%
- Repayment Period: ${s.repaymentPeriod}
- Who Can Apply: ${s.whoCanApply}
- Purpose: ${s.purpose}
- Key Benefits: ${s.benefits?.join('; ')}
- Required Documents: ${s.requiredDocuments?.map(d => d.docName).join(', ')}
- Application Portal: ${s.applicationUrl}
`).join('\n---\n');

  let effectiveLang = language || 'English';
  if (/[\u0C00-\u0C7F]/.test(message)) effectiveLang = 'Telugu';
  else if (/[\u0B80-\u0BFF]/.test(message)) effectiveLang = 'Tamil';
  else if (/[\u0900-\u097F]/.test(message)) {
    effectiveLang = (language || '').toLowerCase().includes('marathi') ? 'Marathi' : 'Hindi';
  }

  const languageGuidance = effectiveLang === 'Telugu' ? `
🚨 ABSOLUTE MANDATORY RULE: 100% PURE TELUGU (తెలుగు) ONLY! ZERO ENGLISH!
- The user speaks ONLY Telugu and does not know English.
- Every single sentence, word, heading, and bullet point MUST be written in 100% pure Telugu script (తెలుగు లిపి).
- ABSOLUTELY DO NOT use English headings or phrases like "Financial Benefit:", "Key Advantage:", "Who can apply:", "Next step:", "No Collateral".
- Instead use purely native Telugu headings:
  * "పథకం పేరు:"
  * "ఆర్థిక సహాయం:"
  * "ప్రయోజనాలు:"
  * "ఎవరు అర్హులు:"
  * "తదుపరి చేయవలసిన పని:"
- Translate all terms into natural Telugu (e.g. "పూచీకత్తు లేదా తాకట్టు లేకుండా", "ప్రభుత్వ నగదు రాయితీ (సబ్సిడీ)").
- Write scheme names in Telugu script (e.g. "ప్రధానమంత్రి ముద్ర యోజన", "పీఎంఈజీపీ పథకం").
- Do NOT mix English phrases into sentences. Zero English words!
` : effectiveLang === 'Hindi' ? `
🚨 ABSOLUTE MANDATORY RULE: 100% PURE HINDI (हिन्दी) ONLY! ZERO ENGLISH!
- The user speaks ONLY Hindi.
- Every single sentence, heading, and bullet point MUST be written in 100% pure Hindi Devanagari script (हिन्दी देवनागरी).
- ABSOLUTELY DO NOT use English headings like "Financial Benefit:", "Key Advantage:", "Who can apply:", "Next step:", "No Collateral".
- Instead use purely native Hindi headings:
  * "योजना का नाम:"
  * "वित्तीय सहायता:"
  * "मुख्य लाभ:"
  * "कौन आवेदन कर सकता है:"
  * "अगला कदम:"
- Translate all terms into natural Hindi (e.g. "बिना किसी गारंटी या संपत्ति गिरवी रखे", "सरकारी अनुदान (सब्सिडी)").
- Write scheme names in Hindi script (e.g. "प्रधानमंत्री मुद्रा योजना", "पीएमईजीपी योजना").
- Do NOT mix English words. Zero English words!
` : effectiveLang === 'Marathi' ? `
🚨 ABSOLUTE MANDATORY RULE: 100% PURE MARATHI (मराठी) ONLY! ZERO ENGLISH!
- Every single word, heading, and explanation MUST be written 100% in pure Marathi script (मराठी).
- DO NOT use English labels or mixed phrases.
- Use native Marathi headings: "योजनेचे नाव:", "आर्थिक मदत:", "फायदे:", "पात्रता:", "पुढील पाऊल:".
- Zero English words!
` : effectiveLang === 'Tamil' ? `
🚨 ABSOLUTE MANDATORY RULE: 100% PURE TAMIL (தமிழ்) ONLY! ZERO ENGLISH!
- Every single word, heading, and explanation MUST be written 100% in pure Tamil script (தமிழ்).
- Zero English words!
` : `
- Respond in clear, simple Indian English.
- Avoid bureaucratic or banking jargon.
`;

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const prompt = `
You are "Udyam Setu AI", an expert government scheme counselor for Indian citizens, rural workers, farmers, students, and micro-entrepreneurs.
You are having a continuous natural conversation with a user.

${languageGuidance}

USER PROFILE:
- Age: ${userProfile?.age ? userProfile.age + ' Years' : '28 Years'}
- Gender: ${userProfile?.gender || 'Male'}
- Differently Abled / Divyangjan (PwD): ${userProfile?.hasDisability || (userProfile?.disabilityType && userProfile?.disabilityType !== 'None') ? `Yes (${userProfile?.disabilityType || 'PwD'}, ${userProfile?.disabilityPercentage || '40%+'} Disability, UDID: ${userProfile?.hasUdidCard ? 'Certified' : 'In Process'})` : 'No (General Ability)'}
- Business / Occupation: ${userProfile?.businessType || 'Not specified'}
- Demographic Category: ${userProfile?.category || 'Not specified'}
- Enterprise Location: ${userProfile?.locationType || 'Rural'}
- Annual Income: ₹${userProfile?.annualIncome || 'Not specified'}
- Experience: ${userProfile?.experienceYears || 0} Years
- Education: ${userProfile?.education || '8th Pass or Above'}

GROUND TRUTH GOVERNMENT SCHEME FACTS:
${schemesFactualContext}

CONVERSATION HISTORY:
${conversationHistory.slice(-4).map(h => `${h.role}: ${h.text}`).join('\n')}

USER'S LATEST MESSAGE: "${message}"

INSTRUCTIONS:
1. Directly address the user's specific need based on the ground truth facts.
2. Formulate your entire response strictly adhering to the Language Purity rule above (100% ${effectiveLang} with zero code-switching or mixed English words).
3. Do NOT speak in legal jargon.
4. Conclude with a comforting next step asking if they'd like help with documents or finding their nearest local bank or CSC center.
`;

      const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1000
          }
        })
      });

      const geminiData = await geminiRes.json();
      const aiText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (aiText) {
        return {
          reply: aiText,
          recommendedSchemes: relevantSchemes.map(s => ({
            schemeName: s.schemeName,
            loanAmount: s.loanAmountFormatted,
            subsidy: s.subsidyPercentage,
            sector: s.targetSector,
            url: s.applicationUrl
          })),
          detectedSector: classifyUserSector(message, userProfile),
          source: 'Google Gemini 3.6 Flash (Real Autonomous AI)',
          language: effectiveLang,
          bhashiniVoiceEnabled: true
        };
      }
    } catch (err) {
      console.warn('Gemini RAG call failed, using dynamic vernacular engine fallback:', err.message);
    }
  }

  // Graceful Dynamic Vernacular Fallback
  const fallbackReply = buildVernacularFallbackReply(message, relevantSchemes, language, userProfile);
  return {
    reply: fallbackReply,
    recommendedSchemes: relevantSchemes.map(s => ({
      schemeName: s.schemeName,
      loanAmount: s.loanAmountFormatted,
      subsidy: s.subsidyPercentage,
      sector: s.targetSector,
      url: s.applicationUrl
    })),
    detectedSector: classifyUserSector(message, userProfile),
    source: 'udyam-setu-vernacular-rag-engine',
    language,
    bhashiniVoiceEnabled: true
  };
}

module.exports = {
  handleRAGConversationalChat,
  retrieveRelevantSchemes,
  classifyUserSector
};
