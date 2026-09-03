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

/**
 * 3. Dynamic Vernacular Fallback Generator (When API key is offline)
 */
function buildVernacularFallbackReply(message, schemes, language = 'English', userProfile = null) {
  const lang = (language || 'English').toLowerCase();
  const top = schemes[0] || {};
  const second = schemes[1] || {};

  // TELUGU (తెలుగు)
  if (lang.includes('telugu') || lang === 'te') {
    return `నమస్కారం! మీ ప్రశ్న ఆధారంగా, ప్రభుత్వం నుండి మీకు అత్యంత ప్రయోజనకరమైన పథకాలు ఇక్కడ ఉన్నాయి:

1. **${top.vernacularNames?.te || top.schemeName}**:
   - **ఆర్థిక సహాయం:** ${top.loanAmountFormatted || 'రుణ సదుపాయం'} (${top.subsidyPercentage ? top.subsidyPercentage + '% సబ్సిడీ' : 'పూచీకత్తు లేని రుణం'}).
   - **ప్రయోజనం:** ${top.benefits?.[0] || 'సులభమైన వాయిదాలు'}.
   - **ఎవరు అర్హులు:** ${top.whoCanApply || 'చిన్న వ్యాపారులు మరియు పారిశ్రామికవేత్తలు'}.

${second.schemeName ? `2. **${second.vernacularNames?.te || second.schemeName}**:
   - **సహాయం:** ${second.loanAmountFormatted}
   - **ప్రత్యేకత:** ${second.benefits?.[0] || 'ప్రభుత్వ సహాయం'}.` : ''}

**ముఖ్యమైన పత్రాలు:** ఆధార్ కార్డు, బ్యాంక్ పాస్‌బుక్ మరియు వ్యాపార/భూమి వివరాలు సిద్ధం చేసుకోండి. మీరు దగ్గరలోని గ్రామీణ బ్యాంక్ లేదా CSC కేంద్రం ద్వారా దరఖాస్తు చేసుకోవచ్చు. మీకు మరిన్ని వివరాలు కావాలా?`;
  }

  // MARATHI (मराठी)
  if (lang.includes('marathi') || lang === 'mr') {
    return `नमस्कार! तुमच्या प्रश्नानुसार आणि व्यवसायाच्या गरजेनुसार सर्वात योग्य सरकारी योजना खालीलप्रमाणे आहेत:

1. **${top.vernacularNames?.mr || top.schemeName}**:
   - **आर्थिक मदत:** ${top.loanAmountFormatted || 'कर्ज सुविधा'} (${top.subsidyPercentage ? top.subsidyPercentage + '% सरकारी सबसिडी' : 'विनातारण कर्ज'}).
   - **फायदा:** ${top.benefits?.[0] || 'सुलभ हप्ते'}.
   - **पात्रता:** ${top.whoCanApply || 'लहान व्यावसायिक आणि उद्योजक'}.

${second.schemeName ? `2. **${second.vernacularNames?.mr || second.schemeName}**:
   - **मदत:** ${second.loanAmountFormatted}
   - **वैशिष्ट्य:** ${second.benefits?.[0] || 'सरकारी अनुदान'}.` : ''}

**आवश्यक कागदपत्रे:** आधार कार्ड, बँक पासबुक आणि व्यवसाय/जमीन पुरावा. जवळच्या ग्रामीण बँक किंवा सीएससी (CSC) केंद्रात संपर्क साधा. आपल्याला आणखी काही माहिती हवी आहे का?`;
  }

  // HINDI (हिन्दी)
  if (lang.includes('hindi') || lang === 'hi') {
    return `नमस्ते! आपके प्रश्न और आवश्यकता के अनुसार सबसे उपयुक्त सरकारी योजनाएं निम्नलिखित हैं:

1. **${top.vernacularNames?.hi || top.schemeName}**:
   - **वित्तीय सहायता:** ${top.loanAmountFormatted || 'ऋण सुविधा'} (${top.subsidyPercentage ? top.subsidyPercentage + '% सरकारी सब्सिडी' : 'बिना गारंटी लोन'}).
   - **मुख्य लाभ:** ${top.benefits?.[0] || 'आसान मासिक किस्तें'}.
   - **कौन आवेदन कर सकता है:** ${top.whoCanApply || 'सूक्ष्म एवं छोटे उद्यमी'}.

${second.schemeName ? `2. **${second.vernacularNames?.hi || second.schemeName}**:
   - **सहायता:** ${second.loanAmountFormatted}
   - **विशेषता:** ${second.benefits?.[0] || 'सरकारी अनुदान'}.` : ''}

**ज़रूरी दस्तावेज़:** आधार कार्ड, पैन कार्ड और बैंक पासबुक। नजदीकी बैंक या सीएससी (CSC) केंद्र में आवेदन कर सकते हैं। क्या आप किसी विशेष योजना की पात्रता जानना चाहते हैं?`;
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
- Business / Occupation: ${userProfile?.businessType || 'Not specified'}
- Demographic Category: ${userProfile?.category || 'Not specified'}
- Annual Income: ₹${userProfile?.annualIncome || 'Not specified'}
- Experience: ${userProfile?.experienceYears || 0} Years

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
