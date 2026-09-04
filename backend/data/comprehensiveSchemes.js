/**
 * Comprehensive Indian Government Schemes Catalog for Udyam Setu
 * Ground Truth Data indexed from myScheme.gov.in, data.gov.in (OGD), and Ministry Portals.
 * Fully structured across the 8 Core Enterprise Types:
 * 1. Food Business (హోటల్, క్యాటరింగ్, ఆహార వ్యాపారం)
 * 2. Retail / Kirana Shop (కిరాణా, జనరల్ స్టోర్)
 * 3. Handicrafts & Handlooms (చేనేత, చేతివృత్తులు)
 * 4. Agriculture & Allied (వ్యవసాయం, పాడి పరిశ్రమ)
 * 5. Textile & Garments (టైలరింగ్, వస్త్ర వ్యాపారం)
 * 6. Manufacturing & Fabrication (చిన్న తయారీ పరిశ్రమ)
 * 7. Services / Repair Shop (రిపేర్, సర్వీస్ సెంటర్)
 * 8. Street Vending (వీధి వ్యాపారం, తోపుడు బండ్లు)
 * Plus Universal Empowerment Schemes (Divyangjan PwD, Women, Higher Education).
 */

const COMPREHENSIVE_GOVT_SCHEMES = [
  // =========================================================================
  // 🍲 1. FOOD BUSINESS (హోటల్, క్యాటరింగ్, ఆహార వ్యాపారం)
  // =========================================================================
  {
    schemeName: "PM Formalisation of Micro food processing Enterprises (PMFME)",
    shortCode: "PMFME",
    schemeId: "PMFME",
    category: "Central Government",
    targetSector: "Food Processing / Culinary",
    primaryBusinessType: "Food Business",
    tagline: "35% credit-linked capital subsidy up to ₹10 Lakhs for micro food units, bakeries & tiffin centers",
    vernacularNames: {
      te: "ప్రధాన మంత్రి సూక్ష్మ ఆహార శుద్ధి పరిశ్రమల పథకం (PMFME - 35% సబ్సిడీ)",
      hi: "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME - 35% सब्सिडी)",
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಯೋಜನೆ (PMFME - 35% ಸಬ್ಸಿಡಿ)",
      bn: "প্রধানমন্ত্রী ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ এন্টারপ্রাইজ যোজনা (PMFME - ৩৫% ভর্তুকি)",
      mr: "पंतप्रधान सूक्ष्म अन्न प्रक्रिया उद्योग योजना (PMFME - 35% अनुदान)",
      ta: "பிரதான் மந்திரி நுண் உணவு பதப்படுத்தும் நிறுவனங்கள் திட்டம் (PMFME - 35% மானியம்)"
    },
    description: "Centrally sponsored flagship scheme by Ministry of Food Processing Industries (MoFPI) providing 35% capital subsidy up to ₹10 Lakhs for modernizing micro food processing units, bakeries, snacks, spice grinding, pickles, catering kitchens, and tiffin businesses.",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Project Cost up to ₹10,00,000 (35% Subsidy)",
    interestRate: "Normal Bank Lending Rate (8.5% - 10.5%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 7 Years (Moratorium 6 - 12 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Food Business"],
    minExperienceYears: 0,
    subsidyPercentage: 35,
    whoCanApply: "Individual micro food entrepreneurs, FPOs, Self Help Groups (SHGs), and producer cooperatives",
    purpose: "Purchasing food processing machinery, commercial ovens, kitchen automation, packaging, and FSSAI hygiene setup",
    benefits: [
      "35% non-repayable capital subsidy credited directly as margin money (up to ₹10 Lakhs)",
      "Beneficiary own contribution is only 10% of the project cost; 90% financed via bank loan",
      "Free technical training, FSSAI licensing assistance, and marketing/branding support under ODOP (One District One Product)"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity & Tax KYC", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Food business equipment cost and revenue forecast", isMandatory: true },
      { docName: "Bank Statement (Last 6 Months)", description: "Financial track record", isMandatory: true },
      { docName: "FSSAI Registration / Application Proof", description: "Food safety compliance proof", isMandatory: false }
    ],
    applicationUrl: "https://pmfme.mofpi.gov.in",
    tags: ["Food Business", "35% High Subsidy", "FSSAI Support", "Top Choice"]
  },
  {
    schemeName: "Pradhan Mantri Mudra Yojana (PMMY)",
    shortCode: "PMMY",
    schemeId: "PMMY",
    category: "Central Government",
    targetSector: "MSME / Retail & Micro Business",
    primaryBusinessType: "Retail / Kirana Shop",
    tagline: "100% collateral-free loans up to ₹10 Lakhs across Shishu, Kishore & Tarun tiers",
    vernacularNames: {
      te: "ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర వ్యాపార రుణం - రూ. 10 లక్షలు)",
      hi: "प्रधानमंत्री मुद्रा योजना (10 लाख तक बिना गारंटी ऋण)",
      kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ)",
      bn: "প্রধানমন্ত্রী মুদ্রা যোজনা (১০ লাখ পর্যন্ত বিনা বন্ধকী ঋণ)",
      mr: "पंतप्रधान मुद्रा योजना (10 लाखांपर्यंत विनातारण कर्ज)",
      ta: "பிரதான் மந்திரி முத்ரா திட்டம் (ரூ. 10 லட்சம் வரை பிணையில்லா கடன்)"
    },
    description: "Provides non-farm, non-corporate micro enterprises, kirana stores, grocery shops, food stalls, repair workshops, and tailors with 100% collateral-free loans across Shishu (up to ₹50,000), Kishore (₹50k - ₹5L), and Tarun (₹5L - ₹10L).",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Up to ₹10,00,000 (No Collateral)",
    interestRate: "8.5% - 11.5% p.a.",
    interestRateNumeric: 9.5,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Retail / Kirana Shop", "Food Business", "Services / Repair Shop", "Textile & Garments", "Street Vending"],
    minExperienceYears: 0,
    subsidyPercentage: 0,
    whoCanApply: "Shopkeepers, grocery store owners, fruit/vegetable sellers, tiffin centers, tailors, service technicians",
    purpose: "Purchasing retail inventory stock, grocery display racks, commercial refrigerator, toolkits, working capital",
    benefits: [
      "No mortgage or security collateral required up to ₹10 Lakhs",
      "Three flexible tiers: Shishu (up to ₹50,000), Kishore (₹50,000 - ₹5 Lakhs), Tarun (₹5 - ₹10 Lakhs)",
      "Mudra Debit Card issued for seamless daily working capital withdrawals with zero pre-closure penalty"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Proof of Business Location", description: "Shop rental agreement or electricity bill", isMandatory: true },
      { docName: "Quotation / Machinery Estimate", description: "Cost estimation for shop items or inventory", isMandatory: false }
    ],
    applicationUrl: "https://www.mudra.org.in",
    tags: ["Collateral-Free", "Zero Paperwork", "Quick Disbursal", "Shishu Loan"]
  },
  {
    schemeName: "Prime Minister's Employment Generation Programme (PMEGP - Agro & Food Processing)",
    shortCode: "PMEGP",
    schemeId: "PMEGP",
    category: "Central Government",
    targetSector: "MSME / Agro-Food & Manufacturing",
    primaryBusinessType: "Food Business",
    tagline: "Up to 35% non-repayable government cash grant for food processing & manufacturing units",
    vernacularNames: {
      te: "పీఎంఈజీపీ ఆహార తయారీ పథకం (35% ప్రభుత్వ నగదు సబ్సిడీ)",
      hi: "पीएमईजीपी खाद्य प्रसंस्करण योजना (35% नकद सब्सिडी)",
      kn: "ಪಿಎಂಇಜಿಪಿ ಆಹಾರ ಉತ್ಪಾದನಾ ಯೋಜನೆ (35% ನಗದು ಸಬ್ಸಿಡಿ)",
      bn: "পিএমইজিপি খাদ্য প্রক্রিয়াকরণ যোজনা (৩৫% সরকারি অনুদান)",
      mr: "पीएमईजीपी अन्न प्रक्रिया योजना (35% थेट अनुदान)",
      ta: "பிஎம்இஜிபி உணவு உற்பத்தி திட்டம் (35% நேரடி மானியம்)"
    },
    description: "Credit-linked capital subsidy initiative by KVIC and Ministry of MSME providing up to 35% non-repayable government cash grant for setting up commercial bakeries, spice processing mills, dairy processing plants, edible oil units, and food manufacturing up to ₹50 Lakhs.",
    maxGrantLoanAmount: 5000000,
    loanAmountFormatted: "Up to ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Services)",
    interestRate: "Normal Bank Lending Rate (8.5% - 10.5%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 7 Years (Moratorium 6 - 12 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    eligibleCategories: ["OBC", "SC", "ST", "Women Entrepreneur", "Minority", "Ex-Servicemen", "Differently Abled (Divyangjan)", "General"],
    eligibleBusinessTypes: ["Food Business", "Manufacturing & Fabrication", "Textile & Garments", "Handicrafts & Handlooms"],
    minExperienceYears: 0,
    subsidyPercentage: 35,
    whoCanApply: "Individuals above 18 years (minimum 8th standard pass for project cost > ₹10L manufacturing or > ₹5L services)",
    purpose: "Setting up commercial food manufacturing plants, flour mills, oil mills, bakeries, or packaging facilities",
    benefits: [
      "Direct 15% to 35% government capital subsidy (Margin Money Grant) that does not need repayment",
      "Beneficiary own contribution is only 5% to 10% of total project cost; 90-95% bank loan",
      "Free entrepreneurship skill development training (EDP) provided prior to loan disbursal"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Business project cost and profit estimation", isMandatory: true },
      { docName: "Special Category Certificate", description: "OBC, SC, ST, or Minority Certificate for 35% subsidy", isMandatory: false },
      { docName: "Educational Qualification (8th pass or above)", description: "Mark sheet / School leaving certificate", isMandatory: true }
    ],
    applicationUrl: "https://www.kviconline.gov.in/pmegpep",
    tags: ["Highest Subsidy (35%)", "Large Scale Loan", "Govt Cash Grant", "Food Processing"]
  },

  // =========================================================================
  // 🛒 2. RETAIL / KIRANA SHOP (కిరాణా, జనరల్ స్టోర్)
  // =========================================================================
  {
    schemeName: "Credit Guarantee Fund Trust for Micro and Small Retail Enterprises (CGTMSE)",
    shortCode: "CGTMSE",
    schemeId: "CGTMSE",
    category: "Central Government",
    targetSector: "Retail Trade / MSME",
    primaryBusinessType: "Retail / Kirana Shop",
    tagline: "Collateral-free retail trade bank loans up to ₹5 Crore with up to 85% government guarantee",
    vernacularNames: {
      te: "CGTMSE కిరాణా & రిటైల్ పూచీకత్తు లేని గ్యారెంటీ పథకం",
      hi: "सीजीटीएमएसई खुदरा एवं किराना क्रेडिट गारंटी योजना",
      kn: "ಸಿಜಿಟಿಎಂಎಸ್‌ಇ ಚಿಲ್ಲರೆ ಮತ್ತು ಕಿರಾಣಿ ವ್ಯಾಪಾರ ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಯೋಜನೆ",
      bn: "সিজিটিএমএসই মুদি ও খুচরা ব্যবসা ক্রেডিট গ্যারান্টি যোজনা",
      mr: "सीजीटीएमएसई किराणा आणि किरकोळ व्यापार हमी योजना",
      ta: "சிஜிடிஎம்எஸ்இ மளிகை மற்றும் சில்லறை வணிக கடன் உத்தரவாத திட்டம்"
    },
    description: "Joint initiative by Ministry of MSME and SIDBI providing collateral-free credit to retail traders, kirana shops, wholesale distributors, and departmental stores by guaranteeing up to 85% of default risk for commercial banks.",
    maxGrantLoanAmount: 50000000,
    loanAmountFormatted: "Up to ₹5 Crore (No Third-Party Collateral)",
    interestRate: "Base Rate + 1.5% - 2.5%",
    interestRateNumeric: 9.5,
    repaymentPeriod: "Up to 7 Years",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Retail / Kirana Shop", "Manufacturing & Fabrication", "Services / Repair Shop"],
    minExperienceYears: 0,
    subsidyPercentage: 0,
    whoCanApply: "Micro and small retail shopkeepers, wholesale distributors, grocery supermarket owners, hardware traders",
    purpose: "Inventory stock purchase, point-of-sale modernization, shop expansion, warehouse storage setup",
    benefits: [
      "100% collateral-free credit facility up to ₹5 Crore with zero land mortgage requirement",
      "85% guarantee cover for women-owned enterprises and micro-enterprises up to ₹5 Lakhs",
      "Enables first-generation shopkeepers without ancestral property to obtain large commercial bank credit"
    ],
    requiredDocuments: [
      { docName: "Udyam Registration Certificate", description: "MSME retail trade registration", isMandatory: true },
      { docName: "Audited Financials / ITR (Last 1-2 Years)", description: "Balance sheet & Profit-Loss or GST return", isMandatory: true },
      { docName: "Detailed Project Feasibility Report", description: "Stock turnover projections and shop plan", isMandatory: true }
    ],
    applicationUrl: "https://www.cgtmse.in",
    tags: ["Retail Trade", "Collateral-Free", "High Loan Limit", "SIDBI Guarantee"]
  },

  // =========================================================================
  // 🧵 3. HANDICRAFTS & HANDLOOMS (చేనేత, చేతివృత్తులు)
  // =========================================================================
  {
    schemeName: "PM Vishwakarma Yojana (Traditional Artisans & Craftsmen)",
    shortCode: "PM-VISHWAKARMA",
    schemeId: "PM-VISHWAKARMA",
    category: "Central Government",
    targetSector: "Artisans & Handlooms",
    primaryBusinessType: "Handicrafts & Handlooms",
    tagline: "₹15,000 modern toolkit grant + ₹3 Lakh collateral-free loan at 5% concessional interest",
    vernacularNames: {
      te: "పీఎం విశ్వకర్మ చేతివృత్తుల పథకం (రూ. 15,000 టూల్‌కిట్ & 5% రుణం)",
      hi: "पीएम विश्वकर्मा योजना (पारंपरिक कारीगर एवं शिल्पकार)",
      kn: "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳು ಮತ್ತು ನೇಕಾರರು)",
      bn: "প্রধানমন্ত্রী বিশ্বকর্মা যোজনা (ঐতিহ্যবাহী কারিগর ও হস্তশিল্প)",
      mr: "पीएम विश्वकर्मा योजना (पारंपरिक कारागीर व हस्तकला)",
      ta: "பிரதமர் விஸ்வகர்மா திட்டம் (பாரம்பரிய கைவினைஞர்கள் & நெசவாளர்கள்)"
    },
    description: "End-to-end holistic central scheme for traditional artisans across 18 family trades (Weavers, Potters, Carpenters, Blacksmiths, Sculptors, Cobblers, Tailors) with certified skill training, daily stipend, ₹15,000 toolkit voucher, and 5% concessional credit.",
    maxGrantLoanAmount: 300000,
    loanAmountFormatted: "₹15,000 Toolkit Grant + ₹3,00,000 Loan at 5%",
    interestRate: "Concessional 5% p.a. (Govt pays 8% interest subvention)",
    interestRateNumeric: 5.0,
    repaymentPeriod: "Tier 1: 18 Months (₹1L) | Tier 2: 30 Months (₹2L)",
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "General", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Handicrafts & Handlooms", "Textile & Garments"],
    minExperienceYears: 0,
    subsidyPercentage: 8,
    whoCanApply: "Artisans and craftspeople working with hands and tools in 18 notified traditional trades, verified via Gram Panchayat",
    purpose: "Modern toolkit purchase, workshop expansion, raw material procurement, and exhibition participation",
    benefits: [
      "₹15,000 digital voucher for purchasing modern, productivity-enhancing toolkit",
      "Free 5-7 days basic skill training with ₹500/day daily stipend credited to bank account",
      "₹1 Lakh (First Tranche) + ₹2 Lakh (Second Tranche) collateral-free loan at just 5% interest",
      "Official PM Vishwakarma ID card and certificate recognizing national artisan status"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card (linked with mobile)", description: "Identity KYC", isMandatory: true },
      { docName: "Ration Card", description: "Family verification", isMandatory: true },
      { docName: "Bank Passbook", description: "Account details for toolkit credit", isMandatory: true }
    ],
    applicationUrl: "https://pmvishwakarma.gov.in",
    tags: ["Handicrafts", "Toolkit Grant ₹15,000", "5% Low Interest", "Daily Stipend", "Top Choice"]
  },
  {
    schemeName: "Weaver Mudra Scheme & Margin Money Assistance",
    shortCode: "WEAVER-MUDRA",
    schemeId: "WEAVER-MUDRA",
    category: "Central Government",
    targetSector: "Handloom Weavers",
    primaryBusinessType: "Handicrafts & Handlooms",
    tagline: "Concessional loan up to ₹2 Lakhs at 6% interest + Margin money grant up to ₹25,000",
    vernacularNames: {
      te: "చేనేత కార్మికుల ముద్ర రుణ పథకం (వీవర్ ముద్ర & మార్జిన్ మనీ)",
      hi: "बुनकर मुद्रा योजना (हथकरघा बुनकर रियायती ऋण एवं मार्जिन मनी)",
      kn: "ನೇಕಾರ ಮುದ್ರಾ ಯೋಜನೆ (ರಿಯಾಯಿತಿ ಸಾಲ ಮತ್ತು ಮಾರ್ಜಿನ್ ಮನಿ)",
      bn: "তাঁতি মুদ্রা যোজনা (হস্তচালিত তাঁত ভর্তুকিযুক্ত ঋণ ও অনুদান)",
      mr: "विणकर मुद्रा योजना (सवलतीचे कर्ज आणि मार्जिन मनी)",
      ta: "நெசவாளர் முத்ரா திட்டம் (கைத்தறி நெசவாளர் கடன் உதவி & மானியம்)"
    },
    description: "Ministry of Textiles flagship initiative providing individual handloom weavers with concessional credit up to ₹2 Lakhs, an upfront non-repayable margin money grant of up to ₹25,000, and 7% interest subvention (effective net interest rate of only ~6% p.a. for 3 years).",
    maxGrantLoanAmount: 200000,
    loanAmountFormatted: "Up to ₹2,00,000 (at 6% Interest + ₹25,000 Grant)",
    interestRate: "Effective 6% p.a. (Govt provides 7% interest subvention)",
    interestRateNumeric: 6.0,
    repaymentPeriod: "Up to 3 Years (Revolving Credit Limit)",
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "Women Entrepreneur", "General"],
    eligibleBusinessTypes: ["Handicrafts & Handlooms"],
    minExperienceYears: 0,
    subsidyPercentage: 20,
    whoCanApply: "Individual handloom weavers, master weavers, handloom SHG members with Weaver Pehchan Card",
    purpose: "Yarn purchase, natural dye procurement, handloom pit loom upgrade, jacquard installation",
    benefits: [
      "Upfront non-repayable margin money assistance up to ₹25,000 credited directly to weaver account",
      "Interest subvention of up to 7% per annum for 3 years, keeping effective net interest at only 6%",
      "Credit guarantee coverage under CGTMSE with zero collateral required from weaver"
    ],
    requiredDocuments: [
      { docName: "Weaver Pehchan Card / Handloom Identity Proof", description: "Proof of registered weaver status", isMandatory: true },
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Bank Account Passbook", description: "Direct Benefit Transfer account", isMandatory: true }
    ],
    applicationUrl: "https://handlooms.nic.in",
    tags: ["Weavers", "Margin Money Grant", "Low 6% Interest", "Handloom Priority"]
  },
  {
    schemeName: "Mahila Coir Yojana (Women Bio-Fiber & Coir Enterprise)",
    shortCode: "MCY",
    schemeId: "MCY",
    category: "Central Government",
    targetSector: "Women Artisans / Handicrafts",
    primaryBusinessType: "Handicrafts & Handlooms",
    tagline: "75% capital subsidy on coir processing machinery for rural women artisans",
    vernacularNames: {
      te: "మహిళా కాయిర్ యోజన (చేతివృత్తుల మహిళలకు 75% సబ్సిడీ)",
      hi: "महिला कॉयर योजना (ग्रामीण महिला कारीगर 75% सब्सिडी)",
      kn: "ಮಹಿಳಾ ಕಾಯರ್ ಯೋಜನೆ (ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ 75% ಸಬ್ಸಿಡಿ)",
      bn: "মহিলা কয়্যার যোজনা (মহিলা কারিগরদের জন্য ৭৫% অনুদান)",
      mr: "महिला कॉयर योजना (महिला कारागिरांसाठी 75% सबसिडी)",
      ta: "மகிளா கயிறு திட்டம் (பெண் கைவினைஞர்களுக்கு 75% மானியம்)"
    },
    description: "Women-centric scheme by the Coir Board providing 75% direct capital subsidy on cost of motorized coir spinning ratts, yarn processing units, and handicraft equipment to generate sustainable rural self-employment.",
    maxGrantLoanAmount: 200000,
    loanAmountFormatted: "75% Subsidy on Machinery & Equipment",
    interestRate: "Subsidized / Nil on grant portion",
    interestRateNumeric: 7.0,
    repaymentPeriod: "Up to 3 Years on 25% balance",
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["Women Entrepreneur"],
    eligibleBusinessTypes: ["Handicrafts & Handlooms"],
    minExperienceYears: 0,
    subsidyPercentage: 75,
    whoCanApply: "Rural women artisans trained in coir spinning, Self Help Group (SHG) women members",
    purpose: "Procurement of motorized coir ratts, fiber carding machines, coir mat loom machines",
    benefits: [
      "Government of India provides 75% of equipment cost as a non-repayable grant",
      "Free 2-month certified training with monthly stipend provided to rural women",
      "Guaranteed buy-back facilitation for coir yarn through state federations"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Coir Board Training Certificate", description: "Proof of 2-month training", isMandatory: true },
      { docName: "Bank Passbook", description: "For Direct Benefit Transfer", isMandatory: true }
    ],
    applicationUrl: "https://coirboard.gov.in",
    tags: ["75% High Subsidy", "Women Exclusive", "Rural Artisans", "Zero Debt Risk"]
  },

  // =========================================================================
  // 🌾 4. AGRICULTURE & ALLIED (వ్యవసాయం, పాడి పరిశ్రమ)
  // =========================================================================
  {
    schemeName: "Kisan Credit Card (KCC) Scheme",
    shortCode: "KCC",
    schemeId: "KCC",
    category: "Central Government",
    targetSector: "Agriculture & Dairy",
    primaryBusinessType: "Agriculture & Allied",
    tagline: "Short-term credit for crops, dairy, animal husbandry & fisheries at 4% net interest",
    vernacularNames: {
      te: "కిసాన్ క్రెడిట్ కార్డ్ (KCC - 4% వడ్డీతో పంట & పాడి రుణం)",
      hi: "किसान क्रेडिट कार्ड (KCC - 4% प्रभावी ब्याज दर)",
      kn: "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC - 4% ಬಡ್ಡಿದರದ ಸಾಲ)",
      bn: "কিসান ক্রেডিট কার্ড (KCC - ৪% সুদে কৃষি ও দুগ্ধ ঋণ)",
      mr: "किसान क्रेडिट कार्ड (KCC - 4% सवलतीचे पीक कर्ज)",
      ta: "கிசான் கடன் அட்டை (KCC - 4% வட்டி பயிர் மற்றும் பால்பண்ணை கடன்)"
    },
    description: "Simplifies institutional credit delivery for farmers, dairy rearers, and fishers to meet short-term crop cultivation requirements, fertilizer/feed purchases, and livestock maintenance at just 4% net interest.",
    maxGrantLoanAmount: 300000,
    loanAmountFormatted: "Up to ₹3,00,000 (at 4% effective interest)",
    interestRate: "Effective 4% p.a. (with timely repayment)",
    interestRateNumeric: 4.0,
    repaymentPeriod: "12 Months (Revolving Credit Facility)",
    repaymentPeriodYears: 1,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Agriculture & Allied"],
    minExperienceYears: 0,
    subsidyPercentage: 3,
    whoCanApply: "Owner cultivators, tenant farmers, dairy farmers, fish farmers, and SHGs of farmers",
    purpose: "Purchase of seeds, fertilizers, pesticides, cattle feed, milch animals, and farm operating costs",
    benefits: [
      "No collateral required for loans up to ₹1,60,000",
      "Simple interest rate of 7% p.a., reduced to 4% p.a. upon prompt repayment",
      "ATM-enabled RuPay debit card provided for easy cash withdrawals at any bank ATM"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity proof", isMandatory: true },
      { docName: "Land Record / Tenancy Agreement", description: "Cultivation proof (Passbook / Pahani)", isMandatory: true },
      { docName: "Crop Pattern Certificate", description: "Crops cultivated in current season", isMandatory: true }
    ],
    applicationUrl: "https://pmkisan.gov.in",
    tags: ["Agriculture", "Lowest Interest (4%)", "Collateral-Free", "Immediate Working Capital", "Top Choice"]
  },
  {
    schemeName: "Agriculture Infrastructure Fund (AIF)",
    shortCode: "AIF",
    schemeId: "AIF",
    category: "Central Government",
    targetSector: "Agri-Infrastructure",
    primaryBusinessType: "Agriculture & Allied",
    tagline: "Post-harvest farm infrastructure credit up to ₹2 Crore with 3% interest subvention",
    vernacularNames: {
      te: "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF - కోల్డ్ స్టోరేజ్ & గోదాము రుణం)",
      hi: "कृषि अवसंरचना कोष (AIF - कोल्ड स्टोरेज एवं वेयरहाउस)",
      kn: "ಕೃಷಿ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AIF - ಶೀತಲೀಕರಣ ಘಟಕ ಮತ್ತು ಉಗ್ರಾಣ)",
      bn: "কৃষি পরিকাঠামো তহবিল (AIF - কোল্ড স্টোরেজ ও গুদাম ঋণ)",
      mr: "कृषी पायाभूत सुविधा निधी (AIF - शीतगृह व गोदाम)",
      ta: "வேளாண் உள்கட்டமைப்பு நிதி (AIF - குளிர்பதன கிடங்கு மற்றும் சேமிப்புக் கிடங்கு)"
    },
    description: "Medium to long-term debt financing facility for investment in viable projects for post-harvest management infrastructure: cold storages, warehouses, sorting & grading units, silos, and primary processing centers.",
    maxGrantLoanAmount: 200000000,
    loanAmountFormatted: "Up to ₹2 Crore (with 3% Interest Subsidy)",
    interestRate: "Subsidized (3% Interest Subvention p.a.)",
    interestRateNumeric: 6.0,
    repaymentPeriod: "Up to 7 Years (Moratorium up to 2 Years)",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Agriculture & Allied"],
    minExperienceYears: 0,
    subsidyPercentage: 33,
    whoCanApply: "Farmers, Primary Agricultural Credit Societies (PACS), FPOs, Agri-entrepreneurs, Startups",
    purpose: "Construction of Cold Storage, Warehouses, Sorting & Grading Units, Silos, Smart Agriculture assets",
    benefits: [
      "Interest subvention of 3% per annum up to a limit of ₹2 Crore for up to 7 years",
      "Credit guarantee coverage under CGTMSE for loans up to ₹2 Crore",
      "Moratorium period for repayment from 6 months up to 2 years"
    ],
    requiredDocuments: [
      { docName: "Aadhaar & PAN Card", description: "Identity & Tax KYC", isMandatory: true },
      { docName: "Land Record (Pattadar Passbook / 7/12 Extract)", description: "Proof of agricultural land holding", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Cost estimation and financial feasibility plan", isMandatory: true },
      { docName: "Bank Statement (Last 6 Months)", description: "Financial track record", isMandatory: true }
    ],
    applicationUrl: "https://agriinfra.dac.gov.in",
    tags: ["High Subsidy", "Agri-Infrastructure", "Low Interest", "Long Tenure"]
  },
  {
    schemeName: "Sub-Mission on Agricultural Mechanization (SMAM - Tractor Subsidy)",
    shortCode: "SMAM",
    schemeId: "SMAM",
    category: "Central Government",
    targetSector: "Agriculture Machinery",
    primaryBusinessType: "Agriculture & Allied",
    tagline: "40% to 50% direct capital subsidy on tractors, harvesters & modern farm tools",
    vernacularNames: {
      te: "వ్యవసాయ యాంత్రీకరణ సబ్సిడీ పథకం (ట్రాక్టర్ & వ్యవసాయ యంత్రాలు)",
      hi: "कृषि यंत्रीकरण उप-मिशन (ट्रैक्टर एवं कृषि यंत्र 50% सब्सिडी)",
      kn: "ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಉಪ-ಅಭಿಯಾನ (ಟ್ರಾಕ್ಟರ್ ಮತ್ತು ಕೃಷಿ ಯಂತ್ರ ಸಬ್ಸಿಡಿ)",
      bn: "কৃষি যান্ত্রিকীকরণ উপ-মিশন (ট্র্যাক্টর ও কৃষি যন্ত্রপাতি ৫০% ভর্তুকি)",
      mr: "कृषी यांत्रिकीकरण उप-अभियान (ट्रॅक्टर आणि अवजारे सबसिडी)",
      ta: "வேளாண் இயந்திரமயமாக்கல் துணை இயக்கம் (டிராக்டர் 50% மானியம்)"
    },
    description: "Promotes farm mechanization among small and marginal farmers with up to 50% direct cash subsidy on purchasing tractors, power tillers, rotavators, drone sprayers, and combine harvesters.",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Subsidy up to ₹5,00,000 on farm machinery",
    interestRate: "Normal Bank Loan Rate (8% - 10%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "Women Entrepreneur", "Small & Marginal Farmers"],
    eligibleBusinessTypes: ["Agriculture & Allied"],
    minExperienceYears: 0,
    subsidyPercentage: 50,
    whoCanApply: "Individual farmers, Custom Hiring Centers (CHCs), Farmer Groups, Village Entrepreneurs",
    purpose: "Procurement of tractors, power weeders, combine harvesters, laser land levelers",
    benefits: [
      "40% to 50% direct subsidy credited directly to beneficiary bank account via DBT",
      "Up to 80% subsidy for setting up village Custom Hiring Centers (CHCs)",
      "Reduces manual labor costs and enhances crop yield efficiency"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Land Record (Pahani / 7/12)", description: "Proof of agricultural land", isMandatory: true },
      { docName: "Quotation from Authorized Dealer", description: "Price quote for tractor/machinery", isMandatory: true },
      { docName: "Caste Certificate (if SC/ST/OBC)", description: "For higher 50% subsidy benefit", isMandatory: false }
    ],
    applicationUrl: "https://agrimachinery.nic.in",
    tags: ["Tractor Subsidy", "50% High Subsidy", "Farm Machinery"]
  },
  {
    schemeName: "Pradhan Mantri Matsya Sampada Yojana (PMMSY - Fisheries)",
    shortCode: "PMMSY",
    schemeId: "PMMSY",
    category: "Central Government",
    targetSector: "Fisheries & Aquaculture",
    primaryBusinessType: "Agriculture & Allied",
    tagline: "Up to 60% government subsidy for fish farming, biofloc tanks, and cold chain vans",
    vernacularNames: {
      te: "ప్రధానమంత్రి మత్స్య సంపద యోజన (చేపల & రొయ్యల పెంపకం 60% సబ్సిడీ)",
      hi: "प्रधानमंत्री मत्स्य संपदा योजना (मत्स्य पालन 60% सब्सिडी)",
      kn: "ಪ್ರಧಾನಮಂತ್ರಿ ಮತ್ಸ್ಯ ಸಂಪದ ಯೋಜನೆ (ಮೀನು ಸಾಕಾಣಿಕೆ 60% ಸಬ್ಸಿಡಿ)",
      bn: "প্রধানমন্ত্রী মৎস্য সম্পদ যোজনা (মাছ চাষ ৬০% সরকারি ভর্তুকি)",
      mr: "प्रधानमंत्री मत्स्य संपदा योजना (मत्स्यव्यवसाय 60% अनुदान)",
      ta: "பிரதமர் மத்ஸ்ய சம்பதா திட்டம் (மீன் வளர்ப்பு 60% மானியம்)"
    },
    description: "Transformational flagship scheme to modernize the fisheries sector with 40% to 60% government capital subsidies for pond construction, biofloc units, hatcheries, fish feed mills, and refrigerated transport vans.",
    maxGrantLoanAmount: 5000000,
    loanAmountFormatted: "Project cost up to ₹50 Lakhs (40% - 60% Subsidy)",
    interestRate: "7% - 9% (concessional credit)",
    interestRateNumeric: 8.0,
    repaymentPeriod: "Up to 7 Years",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "Women Entrepreneur", "SC", "ST", "OBC", "General"],
    eligibleBusinessTypes: ["Agriculture & Allied"],
    minExperienceYears: 0,
    subsidyPercentage: 60,
    whoCanApply: "Fishers, fish farmers, SHGs, JLGs, fisheries cooperatives, and rural youth",
    purpose: "New pond construction, Biofloc fish tanks, ornamental fish units, insulated transport vehicles",
    benefits: [
      "60% project subsidy for Women, SC, and ST applicants",
      "40% project subsidy for all other categories",
      "Institutional finance with interest subvention from Fisheries Infrastructure Development Fund"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Land/Waterbody Rights Certificate", description: "Ownership or 10-year lease agreement", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Technical plan and pond design", isMandatory: true },
      { docName: "Bank Passbook", description: "For Direct Benefit Transfer", isMandatory: true }
    ],
    applicationUrl: "https://pmmsy.dof.gov.in",
    tags: ["Fisheries", "60% High Subsidy", "Women Priority"]
  },
  {
    schemeName: "Animal Husbandry Infrastructure Development Fund (AHIDF - Dairy & Poultry)",
    shortCode: "AHIDF",
    schemeId: "AHIDF",
    category: "Central Government",
    targetSector: "Dairy & Livestock Infrastructure",
    primaryBusinessType: "Agriculture & Allied",
    tagline: "3% interest subvention & 25% credit guarantee for dairy processing and poultry plants",
    vernacularNames: {
      te: "పశుసంవర్ధక మౌలిక సదుపాయాల అభివృద్ధి నిధి (AHIDF - పాడి & పౌల్ట్రీ రుణం)",
      hi: "पशुपालन अवसंरचना विकास कोष (AHIDF - 3% ब्याज छूट)",
      kn: "ಪಶುಸಂಗೋಪನೆ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಧಿ (AHIDF - ಡೇರಿ & ಕುಕ್ಕುಟ ಸಾಲ)",
      bn: "পশুপালন পরিকাঠামো উন্নয়ন তহবিল (AHIDF - ৩% সুদের ছাড়)",
      mr: "पशुसंवर्धन पायाभूत सुविधा विकास निधी (AHIDF - दुग्ध व कुक्कुटपालन)",
      ta: "கால்நடை பராமரிப்பு உள்கட்டமைப்பு மேம்பாட்டு நிதி (AHIDF)"
    },
    description: "Central government scheme under Ministry of Fisheries, Animal Husbandry & Dairying providing 3% interest subvention and up to 25% credit guarantee for dairy processing, value-added milk products, meat processing, and animal feed manufacturing plants.",
    maxGrantLoanAmount: 30000000,
    loanAmountFormatted: "Up to ₹3 Crore (3% Interest Subvention)",
    interestRate: "Subsidized (3% Interest Subvention p.a.)",
    interestRateNumeric: 6.5,
    repaymentPeriod: "Up to 8 Years (Moratorium up to 2 Years)",
    repaymentPeriodYears: 8,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Agriculture & Allied"],
    minExperienceYears: 0,
    subsidyPercentage: 25,
    whoCanApply: "Dairy entrepreneurs, Farmer Producer Organizations (FPOs), Section 8 companies, MSMEs",
    purpose: "Setting up milk chilling centers, automated milking units, paneer/curd processing, poultry feed mills",
    benefits: [
      "3% interest subvention on bank loan for up to 8 years",
      "Up to 25% credit guarantee coverage under Credit Guarantee Fund",
      "Moratorium period of up to 2 years on principal repayment"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Dairy plant layout and financial projections", isMandatory: true },
      { docName: "Land Record / Lease Deed", description: "Proof of project site", isMandatory: true },
      { docName: "Bank Statement (Last 6 Months)", description: "Financial statement", isMandatory: true }
    ],
    applicationUrl: "https://ahidf.udyamimitra.in",
    tags: ["Dairy Farming", "Poultry Setup", "3% Subvention", "Agri-Allied"]
  },

  // =========================================================================
  // 👗 5. TEXTILE & GARMENTS (టైలరింగ్, వస్త్ర వ్యాపారం)
  // =========================================================================
  {
    schemeName: "SAMARTH Scheme (Textile & Garment Capacity Building & Entrepreneurship)",
    shortCode: "SAMARTH-TEXTILE",
    schemeId: "SAMARTH-TEXTILE",
    category: "Central Government",
    targetSector: "Textile & Garments",
    primaryBusinessType: "Textile & Garments",
    tagline: "Skill development, certified machinery support & institutional loans for garment & tailoring units",
    vernacularNames: {
      te: "సమర్థ్ వస్త్ర మరియు టైలరింగ్ పరిశ్రమల ప్రోత్సాహక పథకం (SAMARTH)",
      hi: "समर्थ वस्त्र एवं गारमेंट्स उद्योग संवर्धन योजना (SAMARTH)",
      kn: "ಸಮರ್ಥ್ ಜವಳಿ ಮತ್ತು ಗಾರ್ಮೆಂಟ್ಸ್ ತರಬೇತಿ ಹಾಗೂ ಸಾಲ ಯೋಜನೆ (SAMARTH)",
      bn: "সমর্থ বস্ত্র ও পোশাক শিল্প সহায়তা যোজনা (SAMARTH)",
      mr: "समर्थ वस्त्रोद्योग आणि शिवणकाम योजना (SAMARTH)",
      ta: "சமர்த் ஜவுளி மற்றும் ஆடை உற்பத்தி திட்டம் (SAMARTH)"
    },
    description: "Flagship scheme of Ministry of Textiles providing demand-driven, placement-oriented and entrepreneurship skilling, modern garment machinery linkage, wage compensation during training, and concessional institutional loans for establishing apparel boutiques, industrial tailoring units, and readymade garment businesses.",
    maxGrantLoanAmount: 2000000,
    loanAmountFormatted: "Up to ₹20,00,000 (with Machinery Subsidy & EDP Training)",
    interestRate: "Concessional (8.0% - 9.5%)",
    interestRateNumeric: 8.5,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "Women Entrepreneur", "OBC", "SC", "ST", "General"],
    eligibleBusinessTypes: ["Textile & Garments"],
    minExperienceYears: 0,
    subsidyPercentage: 25,
    whoCanApply: "Individuals, women tailors, garment entrepreneurs, Self Help Groups, and cooperative societies",
    purpose: "Procurement of industrial high-speed sewing machines, computerized embroidery equipment, cutting tables, cloth stock",
    benefits: [
      "Government certified training in advanced garmenting with daily stipend",
      "Direct linkage with MUDRA and PMEGP for equipment purchase loans with capital subsidies",
      "Special priority and 80% seat reservation for women tailors and SC/ST artisans"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Basic Tailoring Skill Certificate / Self Declaration", description: "Proof of tailoring or apparel experience", isMandatory: true },
      { docName: "Shop Location / Rent Agreement", description: "Address proof of boutique or workshop", isMandatory: true },
      { docName: "Machinery Estimate / Quotation", description: "Price quote from sewing machine dealer", isMandatory: false }
    ],
    applicationUrl: "https://samarth-textiles.gov.in",
    tags: ["Tailoring", "Textile & Garments", "Women Priority", "Modern Machinery", "Top Choice"]
  },

  // =========================================================================
  // 🏭 6. MANUFACTURING & FABRICATION (చిన్న తయారీ పరిశ్రమ)
  // =========================================================================
  {
    schemeName: "MSME Sustainable - ZED (Zero Defect Zero Effect) Certification Scheme",
    shortCode: "MSME-ZED",
    schemeId: "MSME-ZED",
    category: "Central Government",
    targetSector: "Manufacturing & Fabrication",
    primaryBusinessType: "Manufacturing & Fabrication",
    tagline: "Up to 80% government subsidy (up to ₹5 Lakhs) for technology upgrade, clean manufacturing & quality certification",
    vernacularNames: {
      te: "ఎంఎస్ఎంఈ జెడ్ (ZED) నాణ్యత మరియు సాంకేతిక అభివృద్ధి సబ్సిడీ పథకం",
      hi: "एमएसएमई जेड (ZED) प्रमाणन एवं विनिर्माण सब्सिडी योजना",
      kn: "ಎಂಎಸ್‌ಎಂಇ ಝಡ್ (ZED) ಗುಣಮಟ್ಟ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ನವೀಕರಣ ಸಬ್ಸಿಡಿ",
      bn: "এমএসএমই জেড (ZED) উৎপাদন গুণমান ও প্রযুক্তি ভর্তুকি যোজনা",
      mr: "एमएसएमई झेड (ZED) गुणवत्ता आणि तंत्रज्ञान उन्नयन अनुदान",
      ta: "எம்எஸ்எம்இ இசட் (ZED) தரம் மற்றும் தொழில்நுட்ப மேம்பாட்டு மானியம்"
    },
    description: "Ministry of MSME flagship scheme motivating micro, small, and medium manufacturing units to adopt Zero Defect manufacturing practices with up to 80% direct financial subsidy on testing, technology upgradation, handholding consultancy, and zero-defect green machinery.",
    maxGrantLoanAmount: 500000,
    loanAmountFormatted: "Subsidy up to ₹5,00,000 (Up to 80% Govt Contribution)",
    interestRate: "Direct Cash Subsidy / Nil",
    interestRateNumeric: 0.0,
    repaymentPeriod: "Grant Based (No Repayment)",
    repaymentPeriodYears: 0,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Manufacturing & Fabrication"],
    minExperienceYears: 0,
    subsidyPercentage: 80,
    whoCanApply: "Any manufacturing MSME with valid Udyam Registration (Fabrication workshops, plastics, metal works, electrical assembly)",
    purpose: "Upgrading workshop machinery, obtaining ISO/ZED quality certifications, installing pollution control & energy efficient tools",
    benefits: [
      "Up to 80% subsidy on certification costs (Bronze, Silver, Gold certifications)",
      "Financial assistance up to ₹5 Lakhs per enterprise for handholding and technology adoption",
      "0.5% concession on processing fees and interest rates across partner commercial banks"
    ],
    requiredDocuments: [
      { docName: "Udyam Registration Certificate", description: "MSME registration", isMandatory: true },
      { docName: "Aadhaar Card & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Factory / Workshop Electricity Bill", description: "Operational address proof", isMandatory: true }
    ],
    applicationUrl: "https://zed.msme.gov.in",
    tags: ["80% Subsidy", "Zero Defect", "Manufacturing", "Tech Upgrade"]
  },
  {
    schemeName: "Stand-Up India Scheme for Women & SC/ST Entrepreneurs",
    shortCode: "STAND-UP",
    schemeId: "STAND-UP",
    category: "Central Government",
    targetSector: "Women & SC/ST Enterprise",
    primaryBusinessType: "Manufacturing & Fabrication",
    tagline: "Greenfield enterprise credit from ₹10 Lakh to ₹1 Crore for Women and SC/ST founders",
    vernacularNames: {
      te: "స్టాండ్-అప్ ఇండియా మహిళా & ఎస్సీ/ఎస్టీ పారిశ్రామిక పథకం",
      hi: "स्टैंड-अप इंडिया योजना (महिला एवं अनुसूचित जाति/जनजाति)",
      kn: "ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ಮಹಿಳೆಯರು ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ)",
      bn: "স্ট্যান্ড-আপ ইন্ডিয়া যোজনা (মহিলা ও তফশিলি জাতি/উপজাতি)",
      mr: "स्टँड-अप इंडिया योजना (महिला व मागासवर्गीय उद्योजक)",
      ta: "ஸ்டாண்ட்-அப் இந்தியா திட்டம் (பெண்கள் & எஸ்சி/எஸ்டி தொழில்முனைவோர்)"
    },
    description: "Mandates scheduled bank branches to provide composite loans between ₹10 Lakh and ₹1 Crore to at least one Woman entrepreneur and one SC/ST founder for setting up greenfield manufacturing plants, commercial transport fleets, service centers, or trading businesses.",
    maxGrantLoanAmount: 10000000,
    loanAmountFormatted: "₹10 Lakh to ₹1 Crore",
    interestRate: "Lowest applicable bank rate (Base Rate + 3% max)",
    interestRateNumeric: 8.5,
    repaymentPeriod: "Up to 7 Years (Moratorium up to 18 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["Women Entrepreneur", "SC", "ST"],
    eligibleBusinessTypes: ["Manufacturing & Fabrication", "Services / Repair Shop"],
    minExperienceYears: 0,
    subsidyPercentage: 15,
    whoCanApply: "Women founders (at least 51% stake) or SC/ST entrepreneurs setting up a greenfield enterprise",
    purpose: "Setting up a brand-new factory, CNC workshop, commercial transport fleet, packaging plant, or hospital service unit",
    benefits: [
      "Large credit facility between ₹10 Lakh and ₹1 Crore",
      "Handholding support through SIDBI Stand-Up Connect Centres, NABARD, and DIC officers",
      "Convergence with Central/State subsidy schemes to meet 15% margin money contribution"
    ],
    requiredDocuments: [
      { docName: "Aadhaar & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Caste / Women Ownership Proof", description: "51% stake proof in enterprise", isMandatory: true },
      { docName: "Project Report with Financial Feasibility", description: "Greenfield enterprise plan", isMandatory: true },
      { docName: "Pollution Control & Municipal Clearance (if manufacturing)", description: "Regulatory permits", isMandatory: false }
    ],
    applicationUrl: "https://www.standupmitra.in",
    tags: ["High Value Loan", "Women Exclusive", "SC/ST Priority", "Greenfield Enterprise"]
  },

  // =========================================================================
  // 🔧 7. SERVICES / REPAIR SHOP (రిపేర్, సర్వీస్ సెంటర్)
  // =========================================================================
  {
    schemeName: "Prime Minister's Employment Generation Programme (PMEGP - Services & Workshops)",
    shortCode: "PMEGP-SERVICE",
    schemeId: "PMEGP-SERVICE",
    category: "Central Government",
    targetSector: "Services & Workshops",
    primaryBusinessType: "Services / Repair Shop",
    tagline: "Capital subsidy up to 35% for automobile workshops, electronics repair, diagnostics & service centers",
    vernacularNames: {
      te: "పీఎంఈజీపీ సర్వీస్ & రిపేర్ వర్క్‌షాప్ పథకం (35% సబ్సిడీ)",
      hi: "पीएमईजीपी सेवा एवं मरम्मत कार्यशाला योजना (35% सब्सिडी)",
      kn: "ಪಿಎಂಇಜಿಪಿ ಸೇವಾ ಮತ್ತು ರಿಪೇರಿ ವರ್ಕ್‌ಶಾಪ್ ಯೋಜನೆ (35% ಸಬ್ಸಿಡಿ)",
      bn: "পিএমইজিপি সার্ভিস ও মেরামত ওয়ার্কশপ যোজনা (৩৫% অনুদান)",
      mr: "पीएमईजीपी सेवा आणि दुरुस्ती कार्यशाळा योजना (35% अनुदान)",
      ta: "பிஎம்இஜிபி சேவை மற்றும் பழுதுபார்க்கும் பட்டறை திட்டம் (35% மானியம்)"
    },
    description: "Credit-linked capital subsidy for service enterprises up to ₹20 Lakhs. Ideal for automotive garages, bike repair centers, smartphone/laptop servicing, agricultural pump repair, refrigeration mechanics, and diagnostic testing centers.",
    maxGrantLoanAmount: 2000000,
    loanAmountFormatted: "Up to ₹20,00,000 (15% - 35% Govt Capital Subsidy)",
    interestRate: "Normal Bank Lending Rate (8.5% - 10.5%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 7 Years (Moratorium 6 - 12 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    eligibleCategories: ["OBC", "SC", "ST", "Women Entrepreneur", "Minority", "Differently Abled (Divyangjan)", "General"],
    eligibleBusinessTypes: ["Services / Repair Shop"],
    minExperienceYears: 0,
    subsidyPercentage: 35,
    whoCanApply: "Individuals aged 18+ wanting to open service shops, auto workshops, electrical repair, or IT service hubs",
    purpose: "Purchasing automotive diagnostic tools, vehicle hydraulic lifts, electronic soldering workstations, shop interior setup",
    benefits: [
      "Direct 15% to 35% non-repayable government cash grant (Margin Money)",
      "Only 5% to 10% own contribution; bank finances 90% to 95%",
      "Free EDP vocational management training provided prior to disbursal"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Cost estimation for service equipment", isMandatory: true },
      { docName: "Educational Qualification (8th pass or above)", description: "Required for projects above ₹5 Lakhs", isMandatory: true }
    ],
    applicationUrl: "https://www.kviconline.gov.in/pmegpep",
    tags: ["Services", "Repair Shop", "35% Subsidy", "Top Choice"]
  },

  // =========================================================================
  // 🛍️ 8. STREET VENDING (వీధి వ్యాపారం, తోపుడు బండ్లు)
  // =========================================================================
  {
    schemeName: "PM SVANidhi (Microcredit for Street Vendors)",
    shortCode: "PM-SVANIDHI",
    schemeId: "PM-SVANIDHI",
    category: "Central Government",
    targetSector: "Street Vendors",
    primaryBusinessType: "Street Vending",
    tagline: "Collateral-free working capital from ₹10,000 to ₹50,000 with 7% interest subsidy & UPI cashback",
    vernacularNames: {
      te: "పీఎం స్వనిధి పథకం (వీధి వ్యాపారుల ఆత్మనిర్భర్ నిధి - రూ. 50,000)",
      hi: "पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)",
      kn: "ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿ ವ್ಯಾಪಾರಿಗಳ ಸ್ವಾವಲಂಬನೆ ಸಾಲ)",
      bn: "প্রধানমন্ত্রী স্বনিধি যোজনা (রাস্তার হকার ও ক্ষুদ্র ব্যবসায়ী ঋণ)",
      mr: "पीएम स्वनिधी योजना (फेरीवाले आणि हातगाडी कर्ज)",
      ta: "பிரதமர் ஸ்வநிதி திட்டம் (தெருவோர வியாபாரிகள் கடன் உதவி)"
    },
    description: "Flagship scheme under Ministry of Housing and Urban Affairs providing street vendors, pushcart hawkers, thela fruit/vegetable sellers, and roadside kiosks with collateral-free working capital in ascending tranches: ₹10,000 (1st), ₹20,000 (2nd), and ₹50,000 (3rd) with 7% annual interest subsidy.",
    maxGrantLoanAmount: 50000,
    loanAmountFormatted: "₹10,000 / ₹20,000 / ₹50,000 (No Collateral)",
    interestRate: "Subsidized (7% Interest Subsidy p.a.)",
    interestRateNumeric: 7.0,
    repaymentPeriod: "12 Months (Tranche 1) to 36 Months (Tranche 3)",
    repaymentPeriodYears: 1,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Street Vending"],
    minExperienceYears: 0,
    subsidyPercentage: 7,
    whoCanApply: "Street vendors, roadside hawkers, mobile pushcart operators vending in urban, semi-urban, or rural local bodies",
    purpose: "Daily working capital, buying seasonal fruit/vegetable stock, cart repairs, solar lighting",
    benefits: [
      "100% collateral-free credit with zero processing fees and instant loan enhancement upon timely repayment",
      "7% annual interest subsidy credited directly to bank account every quarter",
      "Up to ₹1,200 annual cashback incentive on accepting digital payments (UPI QR codes)"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Certificate of Vending / Letter of Recommendation (LoR)", description: "Issued by Town Vending Committee (TVC) or Municipality", isMandatory: true },
      { docName: "Bank Account Passbook", description: "Account linked to Aadhaar", isMandatory: true }
    ],
    applicationUrl: "https://pmsvanidhi.mohua.gov.in",
    tags: ["Street Vendors", "Pushcart Hawkers", "7% Interest Subsidy", "UPI Cashback", "Top Choice"]
  },
  {
    schemeName: "DAY-NULM (Support to Urban Street Vendors & Micro-Enterprises)",
    shortCode: "DAY-NULM",
    schemeId: "DAY-NULM",
    category: "Central Government",
    targetSector: "Urban Livelihoods & Street Vendors",
    primaryBusinessType: "Street Vending",
    tagline: "Micro-credit up to ₹2 Lakhs with interest subsidy down to 7% for urban vendors & SHG groups",
    vernacularNames: {
      te: "దీన్‌దయాళ్ అంత్యోదయ పట్టణ జీవనోపాధి మిషన్ (వీధి వ్యాపారుల రుణం)",
      hi: "दीनदयाल अंत्योदय राष्ट्रीय शहरी आजीविका मिशन (स्ट्रीट वेंडर्स सहायता)",
      kn: "ದೀನದಯಾಳ್ ಅಂತ್ಯೋದಯ ನಗರ ಜೀವನೋಪಾಯ ಮಿಷನ್ (ಬೀದಿ ವ್ಯಾಪಾರಿಗಳ ನೆರವು)",
      bn: "দীনদয়াল অন্ত্যোদয় নগর জীবিকা মিশন (হকার ও ক্ষুদ্র ঋণ)",
      mr: "दीनदयाळ अंत्योदय राष्ट्रीय नागरी उपजीविका अभियान (फेरीवाले कर्ज)",
      ta: "தீன்தயாள் அந்த்யோதயா நகர்ப்புற வாழ்வாதார இயக்கம் (தெருவோர வியாபாரிகள் கடன்)"
    },
    description: "Centrally sponsored scheme by Ministry of Housing and Urban Affairs providing subsidized bank credit up to ₹2 Lakhs for individual micro-enterprises and up to ₹10 Lakhs for street vendor groups/SHGs, with interest subvention over and above 7% interest rate.",
    maxGrantLoanAmount: 200000,
    loanAmountFormatted: "Up to ₹2,00,000 (Individual) / ₹10,00,000 (Group)",
    interestRate: "Effective 7% p.a. (Govt pays interest above 7%)",
    interestRateNumeric: 7.0,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "Women Entrepreneur", "Minority"],
    eligibleBusinessTypes: ["Street Vending"],
    minExperienceYears: 0,
    subsidyPercentage: 5,
    whoCanApply: "Urban poor, street vendors, mobile food hawkers, SHG members identified under Municipal Corporation",
    purpose: "Permanent vending cart construction, procuring mobile vending kiosks, bulk inventory purchase",
    benefits: [
      "Interest subsidy over and above 7% per annum reimbursed directly by government",
      "Issuance of official Street Vending Identity Card and designated vending zone allotment",
      "Access to social security convergence (PMJJBY, PMSBY, PM-SYM pension)"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Town Vending Committee (TVC) ID Card", description: "Municipal vendor registration", isMandatory: true },
      { docName: "Bank Passbook", description: "For Interest Subsidy credit", isMandatory: true }
    ],
    applicationUrl: "https://nulm.gov.in",
    tags: ["Urban Vendors", "7% Concessional Interest", "Vending ID Card"]
  },

  // =========================================================================
  // ♿ 9. UNIVERSAL EMPOWERMENT: DIFFERENTLY ABLED (DIVYANGJAN)
  // =========================================================================
  {
    schemeName: "Divyangjan Swavalamban Yojana (NHFDC Concessional Loan for PwD)",
    shortCode: "NHFDC-DSY",
    schemeId: "NHFDC-DSY",
    category: "Central Government",
    targetSector: "Differently Abled / Divyangjan",
    primaryBusinessType: "All",
    tagline: "Concessional loans up to ₹50 Lakhs at 5% to 8% interest with special rebate for women with disabilities",
    vernacularNames: {
      te: "దివ్యాంగుల స్వయం ఉపాధి రుణ పథకం (దివ్యాంజన్ స్వావలంబన)",
      hi: "दिव्यांगजन स्वावलंबन योजना (कम ब्याज पर स्वरोजगार ऋण)",
      kn: "ವಿಕಲಚೇತನರ ಸ್ವಾವಲಂಬನೆ ಯೋಜನೆ (ಎನ್‌ಎಚ್‌ಎಫ್‌ಡಿಸಿ ರಿಯಾಯಿತಿ ಸಾಲ)",
      bn: "দিব্যাঙ্গজন স্বাবলম্বন যোজনা (প্রতিবন্ধী স্বনির্ভর ঋণ)",
      mr: "दिव्यांगजन स्वावलंबन योजना (कमी व्याजाचे व्यवसाय कर्ज)",
      ta: "மாற்றுத்திறனாளிகள் சுயதொழில் திட்டம் (குறைந்த வட்டி அரசு கடன்)"
    },
    description: "Flagship central government scheme implemented by DEPwD & NHFDC providing concessional credit to Indian citizens with 40% or more disability for establishing micro-enterprises, shops, service units, agricultural ventures, or professional setups.",
    maxGrantLoanAmount: 5000000,
    loanAmountFormatted: "Up to ₹50 Lakhs (Concessional 5% - 8% Interest)",
    interestRate: "Concessional (5.0% - 8.0% p.a., 1% rebate for women)",
    interestRateNumeric: 5.0,
    repaymentPeriod: "Up to 10 Years (Moratorium up to 1 Year)",
    repaymentPeriodYears: 10,
    minAge: 18,
    maxAge: 65,
    maxIncome: 0,
    eligibleCategories: ["Differently Abled (Divyangjan)"],
    eligibleBusinessTypes: [
      "Food Business",
      "Retail / Kirana Shop",
      "Handicrafts & Handlooms",
      "Agriculture & Allied",
      "Textile & Garments",
      "Manufacturing & Fabrication",
      "Services / Repair Shop",
      "Street Vending"
    ],
    minExperienceYears: 0,
    subsidyPercentage: 35,
    whoCanApply: "Indian citizens aged 18-65 with minimum 40% disability certified by medical authority or UDID Card",
    purpose: "Setting up small business, retail shops, trading, agricultural units, vehicle purchase, or assistive equipment",
    benefits: [
      "Ultra-low interest rate starting at 5% p.a. for loans up to ₹50,000, and 6%-8% for higher amounts",
      "Special 1% additional interest rebate for women entrepreneurs with disabilities",
      "Collateral-free micro-credit loans up to ₹50,000 for rural and cottage enterprises",
      "Long repayment tenure up to 10 years with flexible moratorium up to 12 months",
      "Skill training grant up to ₹2,000/month during government vocational orientation"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card & PAN Card", description: "Identity & Tax KYC", isMandatory: true },
      { docName: "Disability Certificate / UDID Card", description: "Proof of 40% or more disability issued by medical board", isMandatory: true },
      { docName: "Project Quotation / Business Plan", description: "Estimate of machinery, raw materials, or shop setup", isMandatory: true },
      { docName: "Bank Passbook", description: "Direct Benefit Transfer account linked to Aadhaar", isMandatory: true }
    ],
    applicationUrl: "https://nhfdc.nic.in",
    tags: ["Divyangjan Priority", "5% Low Interest", "High Loan Limit", "Special Category", "Top Choice"]
  },

  // =========================================================================
  // 🎓 10. HIGHER EDUCATION & STUDENTS
  // =========================================================================
  {
    schemeName: "PM Vidyalaxmi Scheme (Higher Education Credit Support)",
    shortCode: "PM-VIDYALAXMI",
    schemeId: "PM-VIDYALAXMI",
    category: "Central Government",
    targetSector: "Education / Youth",
    primaryBusinessType: "Education / Students",
    tagline: "Collateral-free, guarantor-free education loan up to ₹7.5 Lakh with 3% interest subsidy",
    vernacularNames: {
      te: "పీఎం విద్యాలక్ష్మి విద్యా రుణ పథకం (పూచీకత్తు లేని ఉన్నత విద్యా రుణం)",
      hi: "पीएम विद्यालक्ष्मी शिक्षा ऋण योजना",
      kn: "ಪಿಎಂ ವಿದ್ಯಾಲಕ್ಷ್ಮಿ ಶಿಕ್ಷಣ ಸಾಲ ಯೋಜನೆ",
      bn: "প্রধানমন্ত্রী বিদ্যালক্ষ্মী শিক্ষা ঋণ যোজনা",
      mr: "पीएम विद्यालक्ष्मी शैक्षणिक कर्ज योजना",
      ta: "பிரதமர் வித்யாலக்ஷ்மி கல்வி கடன் திட்டம்"
    },
    description: "National initiative providing collateral-free, guarantor-free education loans to meritorious students admitted in top 860 higher education institutions across India.",
    maxGrantLoanAmount: 750000,
    loanAmountFormatted: "Up to ₹7.5 Lakhs (100% Collateral & Guarantor Free)",
    interestRate: "Concessional (3% Interest Subvention for family income < ₹8L)",
    interestRateNumeric: 7.5,
    repaymentPeriod: "Up to 15 Years (Course Period + 1 Year Moratorium)",
    repaymentPeriodYears: 15,
    minAge: 16,
    maxIncome: 800000,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur", "Minority"],
    eligibleBusinessTypes: ["Education / Students"],
    minExperienceYears: 0,
    subsidyPercentage: 3,
    whoCanApply: "Students admitted to NIRF top-ranked universities, IITs, IIMs, AIIMS, NITs, Central Universities",
    purpose: "Tuition fees, hostel accommodation, laptop/books, and living expenses during degree",
    benefits: [
      "Zero collateral and zero third-party guarantor required for loans up to ₹7.5 Lakhs",
      "75% credit guarantee provided directly by Central Government to lending banks",
      "3% interest subvention during moratorium period for students with annual family income up to ₹8 Lakhs",
      "Repayment starts only 1 year after graduation or 6 months after getting a job"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card of Student & Parent", description: "Identity KYC", isMandatory: true },
      { docName: "Admission Letter & Fee Structure", description: "From approved NIRF institution", isMandatory: true },
      { docName: "10th, 12th & Graduation Marksheets", description: "Academic performance record", isMandatory: true },
      { docName: "Income Certificate (Tahsildar / MRO)", description: "For 3% interest subvention eligibility", isMandatory: true }
    ],
    applicationUrl: "https://www.vidyalakshmi.co.in",
    tags: ["Education Support", "No Guarantor Needed", "15 Years Repayment"]
  },
  {
    schemeName: "Central Sector Interest Subsidy Scheme (CSIS for Education Loans)",
    shortCode: "CSIS",
    schemeId: "CSIS",
    category: "Central Government",
    targetSector: "Education / Youth",
    primaryBusinessType: "Education / Students",
    tagline: "100% Full interest subsidy during moratorium period for economically weaker students",
    vernacularNames: {
      te: "CSIS పూర్తి వడ్డీ రాయితీ విద్యా పథకం",
      hi: "केंद्रीय क्षेत्र ब्याज सब्सिडी योजना (CSIS)",
      kn: "ಕೇಂದ್ರ ವಲಯ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಯೋಜನೆ (CSIS)",
      bn: "কেন্দ্রীয় ক্ষেত্র সুদ ভর্তুকি যোজনা (CSIS)",
      mr: "केंद्रीय क्षेत्र व्याज सबसिडी योजना (CSIS)",
      ta: "மத்திய துறை வட்டி மானியத் திட்டம் (CSIS)"
    },
    description: "Provides full interest subsidy during the moratorium period (Course Period plus one year) on modern educational loans taken by students from Economically Weaker Sections (family income <= ₹4.5 Lakhs).",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Full 100% Interest Paid by Govt during Studies",
    interestRate: "0% during studies (Govt pays full interest)",
    interestRateNumeric: 0.0,
    repaymentPeriod: "Up to 15 Years post graduation",
    repaymentPeriodYears: 15,
    minAge: 17,
    maxIncome: 450000,
    eligibleCategories: ["All", "OBC", "SC", "ST", "General", "Minority"],
    eligibleBusinessTypes: ["Education / Students"],
    minExperienceYears: 0,
    subsidyPercentage: 100,
    whoCanApply: "Students pursuing professional/technical courses in India with annual family income not exceeding ₹4.50 Lakh",
    purpose: "Payment of college tuition, examination fee, equipment, books, and hostel charges",
    benefits: [
      "Government of India pays 100% of the loan interest during the entire course plus 1 year moratorium",
      "Students begin paying EMIs only after course completion with zero interest accumulated during study years",
      "Available across all Scheduled Commercial Banks"
    ],
    requiredDocuments: [
      { docName: "Income Certificate issued by Authorized Revenue Officer", description: "Certifying family income <= ₹4.5 Lakhs", isMandatory: true },
      { docName: "Admission Proof in Approved Professional Course", description: "AICTE / UGC recognized institution", isMandatory: true },
      { docName: "Aadhaar Card", description: "Student identity", isMandatory: true }
    ],
    applicationUrl: "https://education.gov.in",
    tags: ["0% Interest in College", "EWS Priority", "Full Interest Subsidy"]
  }
];

// Ensure every scheme has standardized attributes
COMPREHENSIVE_GOVT_SCHEMES.forEach(s => {
  if (!s.schemeId) s.schemeId = s.shortCode;
});

module.exports = {
  COMPREHENSIVE_GOVT_SCHEMES
};
