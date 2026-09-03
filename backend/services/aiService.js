/**
 * Udyam Setu - Gemini AI Scheme Guidance Service
 * Powered by Google Gemini API (@google/genai)
 */

const { GoogleGenAI } = require('@google/genai');

const SYSTEM_INSTRUCTION = `
You are "Udyam Setu AI", an empathetic, highly knowledgeable, and friendly government scheme advisor dedicated to empowering marginalized, rural, and small-scale entrepreneurs across India (including street vendors, SHG women, artisans, farmers, and micro-business owners).

Your guiding principles:
1. Simplicity: Use plain, conversational, reassuring language. Avoid bureaucratic jargon.
2. Multilingual: If the user asks or speaks in an Indian language (e.g., Hindi, Telugu, Tamil, Marathi, Bengali, Kannada, Gujarati), respond fluently in that language or Romanized vernacular. Default to simple, polite English if query is in English.
3. Accurate Indian Scheme Knowledge: Refer to official initiatives such as:
   - PM Mudra Yojana (Shishu up to ₹50k, Kishore up to ₹5L, Tarun up to ₹10L - collateral free)
   - PMEGP (Prime Minister's Employment Generation Programme with 15% - 35% government subsidy)
   - Stand Up India (₹10 Lakh to ₹1 Crore for SC/ST and Women entrepreneurs)
   - PM SVANidhi (Microcredit for street vendors, starting ₹10,000 with 7% interest subsidy)
   - PM Vishwakarma Yojana (₹15,000 toolkit grant + collateral-free credit at 5% for traditional craftsmen)
   - Dairy Entrepreneurship Development & Weaver Mudra
4. Actionable Steps: Always break down the next steps clearly:
   - Eligibility check
   - Required basic documents (Aadhaar, PAN, Bank Passbook, Business Photo/Plan)
   - How to apply via nearby Bank, CSC (Common Service Center), or KVK.
5. Empathy: Respect the entrepreneur's effort and encourage their business dream!
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

// Intelligent fallback responses tailored to common rural entrepreneur queries
function getFallbackResponse(message, language = 'English') {
  const lower = message.toLowerCase();

  if (language.toLowerCase().includes('hindi') || lower.includes('namaste') || lower.includes('loan chahiye') || lower.includes('dokan')) {
    if (lower.includes('food') || lower.includes('khana') || lower.includes('hotel') || lower.includes('chai') || lower.includes('restaurant')) {
      return `नमस्ते! छोटे खाद्य व्यवसाय (Food Business) के लिए भारत सरकार की **पीएम मुद्रा योजना (PM Mudra Yojana)** सबसे बेहतरीन है:

1. **शिशु मुद्रा (Shishu):** ₹50,000 तक की पूंजी बिना किसी गारंटी (collateral-free) के मिलती है।
2. **किशोर मुद्रा (Kishore):** ₹50,000 से ₹5,00,000 तक का लोन दुकान बढ़ाने या उपकरण खरीदने के लिए।
3. **ज़रूरी दस्तावेज़:** आधार कार्ड, पैन कार्ड, बैंक पासबुक और दुकान का फोटो।

आप नजदीकी सरकारी बैंक या CSC केंद्र में जाकर तुरंत आवेदन कर सकते हैं। क्या आप अपना वार्षिक आय और अनुभव बताना चाहेंगे ताकि हम सटीक ब्याज दर बता सकें?`;
    }
    return `नमस्ते! उद्यम सेतु में आपका स्वागत है। आप अपने व्यवसाय के लिए मुद्रा योजना (Mudra Loan), पीएमईजीपी (PMEGP 35% तक सब्सिडी), या पीएम स्वनिधि (स्ट्रीट वेंडर्स के लिए) जैसी योजनाओं का लाभ ले सकते हैं। मुझे बताएं कि आपका व्यवसाय किस प्रकार का है?`;
  }

  // English fallback responses
  if (lower.includes('food') || lower.includes('canteen') || lower.includes('restaurant') || lower.includes('grocery') || lower.includes('kirana')) {
    return `Great! For starting or expanding a small food or retail business, the Government of India provides excellent support through:

1. **PM Mudra Yojana (PMMY)**:
   - **Shishu Loan:** Up to ₹50,000 (Ideal for initial stock, utensils, or small cart).
   - **Kishore Loan:** ₹50,000 to ₹5,00,000 (For shop setup, refrigeration, and scaling).
   - **Key Benefit:** 100% collateral-free (no property mortgage needed).
2. **PMEGP Scheme**:
   - Offers up to ₹25 Lakhs for manufacturing / ₹10 Lakhs for services.
   - Provides **15% to 35% government subsidy** for rural, OBC, SC/ST, and women entrepreneurs.

**Next Step:** Keep your Aadhaar Card, PAN Card, Bank Passbook, and basic Business Plan ready. Would you like to check your exact eligibility percentage now?`;
  }

  if (lower.includes('document') || lower.includes('paper') || lower.includes('proof')) {
    return `Here are the basic documents required for most government enterprise loans:
1. **Identity Proof:** Aadhaar Card or Voter ID
2. **PAN Card:** For PAN-linked bank verification
3. **Address Proof:** Ration Card, Electricity Bill, or Gram Panchayat Certificate
4. **Bank Account Details:** Last 6 months bank statement or passbook photocopy
5. **Business Proof:** Udyam Registration (free online certificate) or Shop License
6. **Passport Size Photos**

You can upload these directly in the Udyam Setu Document Checklist tab to get pre-verified!`;
  }

  if (lower.includes('sc') || lower.includes('st') || lower.includes('women') || lower.includes('mahila')) {
    return `The **Stand-Up India Scheme** is specially tailored for SC, ST, and Women entrepreneurs:
- **Loan Amount:** ₹10 Lakh to ₹1 Crore.
- **Purpose:** Greenfield enterprise in manufacturing, services, or trading sector.
- **Subsidy/Support:** Handholding support by SIDBI, NABARD, and District Industries Centres (DIC).
- **Repayment:** Up to 7 years with a moratorium period of up to 18 months.

You can also explore **Mahila Coir Yojana** or **PMEGP Special Category Subsidies (up to 35%)**.`;
  }

  return `Hello Entrepreneur! I am your Udyam Setu AI guide. I can help you find government financial schemes, explain subsidy details, check required documents, and guide you to your nearest bank or CSC partner. 

You can ask me questions like:
- *"Which loan is best for opening a grocery store?"*
- *"How to get a 35% subsidy under PMEGP?"*
- *"What documents do I need for Mudra loan?"*

How can I support your business today?`;
}

async function handleAIChat({ message, conversationHistory = [], language = 'English', userProfile = null }) {
  const client = getGenAIClient();

  if (client) {
    try {
      const contents = [];

      // Context injection
      let contextMsg = `The user is interacting with Udyam Setu. Language requested: ${language}.`;
      if (userProfile) {
        contextMsg += ` User Profile: Age ${userProfile.age || 'Unknown'}, Category: ${userProfile.category || 'Unknown'}, Income: ₹${userProfile.annualIncome || 'Unknown'}, Business: ${userProfile.businessType || 'Unknown'}.`;
      }
      contents.push({ role: 'user', parts: [{ text: `${contextMsg}\nUser says: ${message}` }] });

      const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      if (response && response.text) {
        return {
          reply: response.text,
          source: 'gemini-2.5-flash',
          language
        };
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local guidance:', err.message);
    }
  }

  // Graceful fallback
  const fallback = getFallbackResponse(message, language);
  return {
    reply: fallback,
    source: 'udyam-setu-knowledge-engine',
    language
  };
}

module.exports = {
  handleAIChat
};
