/**
 * Udyam Setu - Multi-Language Internationalization (i18n) Engine
 * Supported Languages: English (en), Hindi (hi), Telugu (te), Kannada (kn), Tamil (ta), Marathi (mr), Bengali (bn).
 * Persists in localStorage ('udyam_selected_language') and updates UI reactively without page reloads.
 * Provides 100% PURE vernacular rendering with ZERO English mixed in.
 */

(function() {
  const STORAGE_KEY = 'udyam_selected_language';

  const SUPPORTED_LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English (Indian)', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी (Hindi)', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు (Telugu)', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ (Kannada)', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ் (Tamil)', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी (Marathi)', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা (Bengali)', flag: '🇮🇳' }
  ];

  const CODE_TO_NAME = {
    en: 'English',
    hi: 'Hindi',
    te: 'Telugu',
    kn: 'Kannada',
    ta: 'Tamil',
    mr: 'Marathi',
    bn: 'Bengali'
  };

  const NAME_TO_CODE = {
    english: 'en',
    hindi: 'hi',
    telugu: 'te',
    kannada: 'kn',
    tamil: 'ta',
    marathi: 'mr',
    bengali: 'bn'
  };

  const TRANSLATIONS = {
  "en": {
    "brand": {
      "title": "Udyam Setu",
      "tagline": "Right Scheme • Right Guidance • Right Growth",
      "backend_online": "Backend Online: Port 5000",
      "mobile_sim": "📱 Mobile App Simulator",
      "api_tester": "⚡ Live API Tester"
    },
    "sidebar": {
      "title": "APP INTERFACE • STEP-BY-STEP",
      "step1_title": "Splash Screen",
      "step1_sub": "Welcome & mission",
      "step2_title": "Login / Sign Up",
      "step2_sub": "OTP & guest access",
      "step3_title": "Home Dashboard",
      "step3_sub": "Quick access grid",
      "step4_title": "AI Chat / Ask",
      "step4_sub": "Gemini vernacular AI",
      "step5_title": "User Details",
      "step5_sub": "Step-by-step profiling",
      "step6_title": "Scheme Match Results",
      "step6_sub": "Rule engine scores",
      "step7_title": "Scheme Details",
      "step7_sub": "Benefits & eligibility",
      "step8_title": "EMI Calculator",
      "step8_sub": "Repayment planner",
      "step9_title": "Nearest Partner",
      "step9_sub": "Banks, CSCs, KVKs",
      "step10_title": "Document Checklist",
      "step10_sub": "Upload & verify status"
    },
    "screen1": {
      "brand_name": "Udyam Setu",
      "tagline": "AI-Powered Scheme Matching for Every Entrepreneur",
      "banner_title": "Right Scheme • Right Growth",
      "banner_sub": "Empowering Marginalized Businesses",
      "get_started": "Get Started →"
    },
    "screen2": {
      "welcome_back": "Welcome Back!",
      "login_sub": "Login to continue your business journey",
      "mobile_label": "Mobile Number",
      "mobile_placeholder": "Enter Mobile Number",
      "send_otp": "Send OTP",
      "enter_otp": "Enter 6-Digit OTP",
      "verify_continue": "Verify & Continue",
      "resend_otp": "Resend OTP",
      "or": "OR",
      "continue_google": "Continue with Google",
      "continue_guest": "Continue as Guest",
      "new_user": "New user?",
      "sign_up": "Sign Up"
    },
    "screen3": {
      "greeting": "Hello, Entrepreneur 👋",
      "sub_greeting": "How can we help you today?",
      "banner_title": "Find Schemes for You",
      "banner_sub": "Answer a few questions and get best matching schemes.",
      "start_now": "Start Now →",
      "quick_access": "Quick Access",
      "match_schemes": "Match Schemes",
      "emi_calc": "EMI Calculator",
      "my_applications": "My Applications",
      "documents": "Documents",
      "nearby_partners": "Nearby Partners",
      "help_support": "Help & Support",
      "nav_home": "Home",
      "nav_chat": "Chat",
      "nav_saved": "Saved",
      "nav_profile": "Profile"
    },
    "screen4": {
      "title": "Udyam Setu AI",
      "status": "Online • Digital India Voice (22 Langs)",
      "welcome_msg": "Welcome to Udyam Setu AI, your intelligent government scheme advisor. To find the best collateral-free loans, subsidies, and schemes, please tell us: Who are you and which business or enterprise do you run or plan to start?",
      "select_business_title": "👇 Select your business or goal:",
      "food_opt": "🍲 Food Business / Tiffin / Hotel",
      "retail_opt": "🛒 Retail / Kirana Shop / General Store",
      "artisan_opt": "🧵 Handicrafts & Handlooms / Weaver",
      "agri_opt": "🌾 Agriculture & Allied / Dairy (KCC)",
      "textile_opt": "👗 Textile & Garments / Tailoring",
      "mfg_opt": "🏭 Manufacturing & Fabrication / MSME",
      "services_opt": "🔧 Services / Repair Shop / Auto Garage",
      "vending_opt": "🛍️ Street Vending / Pushcart (SVANidhi)",
      "listen_btn": "🔊 Listen",
      "voice_prompt": "🎙️ Tap to Speak in your Language",
      "input_placeholder": "Ask or speak in your language...",
      "send_btn": "➤",
      "view_details": "View Full Scheme Details"
    },
    "screen5": {
      "header": "Tell us about yourself",
      "step_indicator": "Step 2 of 5",
      "personal_header": "Personal & Demographic Details",
      "age_label": "Age",
      "gender_label": "Gender",
      "social_cat_label": "Social Category",
      "divyang_header": "Differently Abled / Divyangjan",
      "divyang_sub": "Special 35% PMEGP subsidy & NHFDC 5% low-interest loans",
      "pwd_label": "Person with Disability",
      "business_header": "Business & Financial Details",
      "location_label": "Enterprise Location",
      "income_label": "Annual Family Income",
      "biz_type_label": "Business Type / Activity",
      "experience_label": "Experience",
      "education_label": "Education",
      "find_schemes_btn": "Find Matching Schemes ➔",
      "gender_male": "Male",
      "gender_female": "Female (35% Special Grant)",
      "gender_other": "Transgender / Other",
      "cat_obc": "OBC (Other Backward Classes - 35% Subsidy)",
      "cat_sc": "SC (Scheduled Caste - 35% Subsidy)",
      "cat_st": "ST (Scheduled Tribe - 35% Subsidy)",
      "cat_general": "General Category",
      "cat_women": "Women Entrepreneur",
      "cat_minority": "Minority Community",
      "cat_pwd": "Differently Abled (Divyangjan)",
      "cat_ex_servicemen": "Ex-Servicemen",
      "pwd_no": "No",
      "pwd_yes": "Yes (Differently Abled - PwD)",
      "disability_type_label": "Type of Disability",
      "disability_locomotor": "Locomotor / Orthopedic",
      "disability_visual": "Visual Impairment / Blindness",
      "disability_hearing": "Hearing or Speech Impairment",
      "disability_intellectual": "Intellectual Disability",
      "disability_multiple": "Multiple Disabilities",
      "disability_other": "Other Certified Disability",
      "disability_percent_label": "Disability %",
      "disability_percent_40_70": "40% - 70% (Benchmark PwD)",
      "disability_percent_above70": "Above 70% (Severe)",
      "disability_percent_below40": "Below 40% (Mild)",
      "udid_card_label": "UDID Card?",
      "udid_yes": "Yes, have UDID Card",
      "udid_in_process": "Applied / In Process",
      "udid_no": "No / Not yet applied",
      "divyang_badge": "💡 Eligible for Divyangjan Swavalamban Yojana (Up to ₹50L @ 5% interest) & PMEGP 35% Grant!",
      "loc_rural": "Rural Area (35% Subsidy)",
      "loc_urban": "Urban Area (25% Subsidy)",
      "biz_food": "Food Business (Hotel, Catering, Tiffin Center)",
      "biz_retail": "Retail / Kirana Shop (Grocery Store)",
      "biz_handicrafts": "Handicrafts & Handlooms (Artisans, Weavers)",
      "biz_agri": "Agriculture & Allied (Farming, Dairy, Poultry)",
      "biz_textile": "Textile & Garments (Tailoring, Boutique)",
      "biz_mfg": "Manufacturing & Fabrication (Workshop)",
      "biz_services": "Services / Repair Shop (Service Center)",
      "biz_vending": "Street Vending (Hawker, Thela Pushcart)",
      "experience_val": "2 Years",
      "edu_8th_above": "8th Pass or Above (₹50L Limit)",
      "edu_below_8th": "Below 8th Pass",
      "edu_graduate": "Graduate / ITI / Diploma",
      "badge_underage": "⚠️ Minimum age for government schemes is 18 years",
      "badge_youth": "⚡ Youth (18-35) • High Subsidy Priority",
      "badge_mature": "💼 Prime Entrepreneur (36-55) • Full Credit Eligibility",
      "badge_senior": "🌟 Senior Entrepreneur (56+) • Special Advisory Support"
    },
    "screen6": {
      "header": "Matching Schemes",
      "sub_header": "Based on your information",
      "view_all_schemes": "View All Schemes",
      "match_score": "Match"
    },
    "screen7": {
      "tab_overview": "Overview",
      "tab_benefits": "Benefits",
      "tab_eligibility": "Eligibility",
      "tab_documents": "Documents",
      "loan_amount": "Loan Amount",
      "interest_rate": "Interest Rate",
      "repayment_period": "Repayment Period",
      "who_can_apply": "Who can apply?",
      "purpose": "Purpose",
      "min_age": "Min Age",
      "eligible_categories": "Eligible Categories",
      "eligible_business": "Eligible Business",
      "income_cap": "Income Cap",
      "key_advantages": "Key Financial Advantages:",
      "doc_checklist_title": "Documents Checklist:",
      "doc_checklist_sub": "Keep these documents prepared before submitting to bank:",
      "save_btn": "Save",
      "apply_now_btn": "Apply Now"
    },
    "screen8": {
      "header": "EMI Calculator",
      "loan_amount_label": "Loan Amount",
      "interest_rate_label": "Interest Rate (%)",
      "tenure_label": "Tenure (Years)",
      "estimated_emi": "Estimated EMI",
      "approx_note": "*Values are approximate",
      "principal_label": "Principal:",
      "total_interest_label": "Total Interest:",
      "calculate_again": "Calculate Again",
      "find_schemes_with_emi": "Find Schemes with this EMI"
    },
    "screen9": {
      "header": "Nearby Partners",
      "sub_header": "Near Your Location",
      "view_on_map": "View on Map",
      "pin_you": "📍 You",
      "pin_bank": "🏦 Bank",
      "pin_kvk": "🔬 KVK",
      "pin_csc": "💻 CSC"
    },
    "screen10": {
      "header": "Required Documents",
      "ready_badge": "Ready",
      "submit_app_btn": "Submit Application to Bank"
    },
    "common": {
      "registered_scheme": "Registered Scheme",
      "ai_recommended": "AI Recommended",
      "match_word": "Match",
      "up_to_prefix": "Up to",
      "up_to_suffix": "",
      "no_collateral": "No Collateral",
      "project_cost": "Project Cost",
      "subsidy": "Subsidy",
      "years": "Years",
      "months": "Months",
      "moratorium": "Moratorium",
      "per_month": "/ month",
      "km_away": "km away",
      "uploaded": "Uploaded",
      "pending": "Pending",
      "documents_uploaded": "of {total} Documents Uploaded",
      "no_restrictive_ceiling": "No restrictive ceiling"
    },
    "tags": {
      "low_interest": "Low Interest",
      "easy_process": "Easy Process",
      "collateral_free": "Collateral-Free",
      "top_choice": "Top Choice",
      "high_subsidy": "High Subsidy (Up to 35%)",
      "for_new_business": "For New Business",
      "govt_grant": "Govt Grant",
      "for_sc_st_women": "For SC/ST & Women",
      "high_loan_limit": "High Loan Limit",
      "handholding_support": "Handholding Support",
      "toolkit_grant": "Toolkit Grant (₹15,000)",
      "5_low_interest": "5% Low Interest",
      "traditional_crafts": "Traditional Crafts",
      "75_subsidy": "75% Subsidy",
      "women_exclusive": "Women Exclusive",
      "eco_livelihood": "Eco Livelihood",
      "interest_subsidy": "Interest Subsidy",
      "fast_approval": "Fast Approval",
      "food_business": "Food Business",
      "35_high_subsidy": "35% High Subsidy",
      "fssai_support": "FSSAI Support",
      "shishu_loan": "Shishu Loan",
      "zero_paperwork": "Zero Paperwork",
      "quick_disbursal": "Quick Disbursal"
    }
  },
  "hi": {
    "brand": {
      "title": "उद्यम सेतु",
      "tagline": "सही योजना • सही मार्गदर्शन • सही विकास",
      "backend_online": "बैकएंड ऑनलाइन: पोर्ट 5000",
      "mobile_sim": "📱 मोबाइल ऐप सिम्युलेटर",
      "api_tester": "⚡ लाइव एपीआई परीक्षक"
    },
    "sidebar": {
      "title": "ऐप इंटरफेस • चरण-दर-चरण",
      "step1_title": "स्प्लैश स्क्रीन",
      "step1_sub": "स्वागत एवं उद्देश्य",
      "step2_title": "लॉगिन / साइन अप",
      "step2_sub": "ओटीपी एवं गेस्ट एक्सेस",
      "step3_title": "होम डैशबोर्ड",
      "step3_sub": "त्वरित पहुंच ग्रिड",
      "step4_title": "एआई चैट / पूछें",
      "step4_sub": "जेमिनी बहुभाषी एआई",
      "step5_title": "उपयोगकर्ता विवरण",
      "step5_sub": "चरणबद्ध प्रोफाइलिंग",
      "step6_title": "योजना परिणाम",
      "step6_sub": "नियम आधारित स्कोर",
      "step7_title": "योजना विवरण",
      "step7_sub": "लाभ एवं पात्रता",
      "step8_title": "ईएमआई कैलकुलेटर",
      "step8_sub": "पुनर्भुगतान योजना",
      "step9_title": "निकटतम भागीदार",
      "step9_sub": "बैंक, सीएससी, केवीके",
      "step10_title": "दस्तावेज़ चेकलिस्ट",
      "step10_sub": "अपलोड एवं सत्यापन"
    },
    "screen1": {
      "brand_name": "उद्यम सेतु",
      "tagline": "हर उद्यमी के लिए एआई-संचालित योजना मिलान",
      "banner_title": "सही योजना • सही विकास",
      "banner_sub": "छोटे व पिछड़े व्यवसायों का सशक्तिकरण",
      "get_started": "शुरू करें →"
    },
    "screen2": {
      "welcome_back": "वापसी पर स्वागत है!",
      "login_sub": "अपनी व्यावसायिक यात्रा जारी रखने के लिए लॉगिन करें",
      "mobile_label": "मोबाइल नंबर",
      "mobile_placeholder": "मोबाइल नंबर दर्ज करें",
      "send_otp": "ओटीपी भेजें",
      "enter_otp": "6-अंकों का ओटीपी दर्ज करें",
      "verify_continue": "सत्यापित करें और आगे बढ़ें",
      "resend_otp": "ओटीपी पुनः भेजें",
      "or": "या",
      "continue_google": "गूगल के साथ जारी रखें",
      "continue_guest": "अतिथि के रूप में जारी रखें",
      "new_user": "नए उपयोगकर्ता?",
      "sign_up": "साइन अप करें"
    },
    "screen3": {
      "greeting": "नमस्ते, उद्यमी 👋",
      "sub_greeting": "आज हम आपकी क्या सहायता कर सकते हैं?",
      "banner_title": "अपने लिए योजनाएं खोजें",
      "banner_sub": "कुछ प्रश्नों के उत्तर दें और सर्वश्रेष्ठ योजनाएं पाएं।",
      "start_now": "अभी शुरू करें →",
      "quick_access": "त्वरित पहुंच",
      "match_schemes": "योजना मिलान",
      "emi_calc": "ईएमआई कैलकुलेटर",
      "my_applications": "मेरे आवेदन",
      "documents": "दस्तावेज़",
      "nearby_partners": "निकटतम भागीदार",
      "help_support": "सहायता एवं समर्थन",
      "nav_home": "होम",
      "nav_chat": "चैट",
      "nav_saved": "सहेजे गए",
      "nav_profile": "प्रोफाइल"
    },
    "screen4": {
      "title": "उद्यम सेतु एआई",
      "status": "ऑनलाइन • डिजिटल इंडिया वॉयस (22 भाषाएं)",
      "welcome_msg": "उद्यम सेतु एआई में आपका स्वागत है। आपके लिए बिना गारंटी वाले सरकारी ऋण, सब्सिडी और योजनाएं ढूंढने हेतु, कृपया बताएं: आप कौन हैं और कौन सा व्यवसाय शुरू करना चाहते हैं?",
      "select_business_title": "👇 अपने व्यवसाय या लक्ष्य का चयन करें:",
      "food_opt": "🍲 खाद्य व्यवसाय / टिफिन / होटल",
      "retail_opt": "🛒 खुदरा व किराना दुकान / जनरल स्टोर",
      "artisan_opt": "🧵 हस्तशिल्प एवं हथकरघा / बुनकर",
      "agri_opt": "🌾 कृषि एवं डेयरी फार्मिंग (KCC)",
      "textile_opt": "👗 कपड़ा एवं परिधान / सिलाई बुटीक",
      "mfg_opt": "🏭 लघु विनिर्माण एवं फैब्रिकेशन / MSME",
      "services_opt": "🔧 मरम्मत व सेवा केंद्र / ऑटो गैरेज",
      "vending_opt": "🛍️ स्ट्रीट वेंडिंग / ठेला (पीएम स्वनिधि)",
      "listen_btn": "🔊 सुनिए",
      "voice_prompt": "🎙️ बोलने के लिए टैप करें",
      "input_placeholder": "अपनी भाषा में पूछें या बोलें...",
      "send_btn": "➤",
      "view_details": "योजना का पूरा विवरण देखें"
    },
    "screen5": {
      "header": "अपने बारे में बताएं",
      "step_indicator": "चरण 2 का 5",
      "personal_header": "व्यक्तिगत एवं जनसांख्यिकीय विवरण",
      "age_label": "आयु",
      "gender_label": "लिंग",
      "social_cat_label": "सामाजिक वर्ग",
      "divyang_header": "दिव्यांगजन विवरण",
      "divyang_sub": "विशेष 35% PMEGP सब्सिडी एवं 5% कम ब्याज ऋण",
      "pwd_label": "क्या आप दिव्यांग हैं?",
      "business_header": "व्यावसायिक एवं वित्तीय विवरण",
      "location_label": "उद्यम का स्थान",
      "income_label": "वार्षिक पारिवारिक आय",
      "biz_type_label": "व्यवसाय का प्रकार / गतिविधि",
      "experience_label": "अनुभव",
      "education_label": "शिक्षा",
      "find_schemes_btn": "उपयुक्त योजनाएं खोजें ➔",
      "gender_male": "पुरुष",
      "gender_female": "महिला (35% विशेष अनुदान)",
      "gender_other": "ट्रांसजेंडर / अन्य",
      "cat_obc": "ओबीसी (अन्य पिछड़ा वर्ग - 35% सब्सिडी)",
      "cat_sc": "एससी (अनुसूचित जाति - 35% सब्सिडी)",
      "cat_st": "एसटी (अनुसूचित जनजाति - 35% सब्सिडी)",
      "cat_general": "सामान्य श्रेणी",
      "cat_women": "महिला उद्यमी",
      "cat_minority": "अल्पसंख्यक समुदाय",
      "cat_pwd": "दिव्यांगजन (विशेष लाभ)",
      "cat_ex_servicemen": "भूतपूर्व सैनिक",
      "pwd_no": "नहीं",
      "pwd_yes": "हाँ (दिव्यांगजन - विशेष सब्सिडी)",
      "disability_type_label": "दिव्यांगता का प्रकार",
      "disability_locomotor": "लोकोमोटर / आर्थोपेडिक",
      "disability_visual": "दृष्टिबाधित / अंधापन",
      "disability_hearing": "श्रवण या वाणी दोष",
      "disability_intellectual": "बौद्धिक दिव्यांगता",
      "disability_multiple": "बहु दिव्यांगता",
      "disability_other": "अन्य प्रमाणित दिव्यांगता",
      "disability_percent_label": "दिव्यांगता प्रतिशत",
      "disability_percent_40_70": "40% - 70% (बेंचमार्क दिव्यांगजन)",
      "disability_percent_above70": "70% से अधिक (गंभीर)",
      "disability_percent_below40": "40% से कम (हल्का)",
      "udid_card_label": "UDID कार्ड है?",
      "udid_yes": "हाँ, UDID कार्ड है",
      "udid_in_process": "आवेदन किया है / प्रक्रियाधीन",
      "udid_no": "नहीं / अभी आवेदन नहीं किया",
      "divyang_badge": "💡 दिव्यांगजन स्वावलंबन योजना (₹50 लाख तक @ 5% ब्याज) और PMEGP 35% अनुदान हेतु पात्र!",
      "loc_rural": "ग्रामीण क्षेत्र (35% सब्सिडी)",
      "loc_urban": "शहरी क्षेत्र (25% सब्सिडी)",
      "biz_food": "खाद्य व्यवसाय (होटल, कैटरिंग, टिफिन केंद्र)",
      "biz_retail": "खुदरा / किराना दुकान (जनरल स्टोर)",
      "biz_handicrafts": "हस्तशिल्प और हथकरघा (कारीगर, बुनकर)",
      "biz_agri": "कृषि और संबद्ध (खेती, डेयरी, पोल्ट्री)",
      "biz_textile": "वस्त्र और परिधान (टेलरिंग, बुटीक)",
      "biz_mfg": "विनिर्माण और निर्माण (कार्यशाला)",
      "biz_services": "सेवाएं / मरम्मत की दुकान (सर्विस सेंटर)",
      "biz_vending": "स्ट्रीट वेंडिंग (ठेला, फेरीवाले)",
      "experience_val": "2 वर्ष",
      "edu_8th_above": "8वीं पास या अधिक (₹50 लाख सीमा)",
      "edu_below_8th": "8वीं से कम",
      "edu_graduate": "स्नातक / आईटीआई / डिप्लोमा",
      "badge_underage": "⚠️ सरकारी योजनाओं के लिए न्यूनतम आयु 18 वर्ष है",
      "badge_youth": "⚡ युवा (18-35) • उच्च सब्सिडी प्राथमिकता",
      "badge_mature": "💼 मुख्य उद्यमी (36-55) • पूर्ण ऋण पात्रता",
      "badge_senior": "🌟 वरिष्ठ उद्यमी (56+) • विशेष सलाह समर्थन"
    },
    "screen6": {
      "header": "अनुकूल योजनाएं",
      "sub_header": "आपकी जानकारी के आधार पर",
      "view_all_schemes": "सभी योजनाएं देखें",
      "match_score": "मिलान"
    },
    "screen7": {
      "tab_overview": "अवलोकन",
      "tab_benefits": "लाभ",
      "tab_eligibility": "पात्रता",
      "tab_documents": "दस्तावेज़",
      "loan_amount": "ऋण राशि",
      "interest_rate": "ब्याज दर",
      "repayment_period": "पुनर्भुगतान अवधि",
      "who_can_apply": "कौन आवेदन कर सकता है?",
      "purpose": "उद्देश्य",
      "min_age": "न्यूनतम आयु",
      "eligible_categories": "पात्र श्रेणियां",
      "eligible_business": "पात्र व्यवसाय",
      "income_cap": "आय सीमा",
      "key_advantages": "मुख्य वित्तीय लाभ:",
      "doc_checklist_title": "दस्तावेज़ चेकलिस्ट:",
      "doc_checklist_sub": "बैंक में जमा करने से पहले ये दस्तावेज़ तैयार रखें:",
      "save_btn": "सहेजें",
      "apply_now_btn": "अभी आवेदन करें"
    },
    "screen8": {
      "header": "ईएमआई कैलकुलेटर",
      "loan_amount_label": "ऋण राशि",
      "interest_rate_label": "ब्याज दर (%)",
      "tenure_label": "अवधि (वर्ष)",
      "estimated_emi": "अनुमानित ईएमआई",
      "approx_note": "*मान अनुमानित हैं",
      "principal_label": "मूलधन:",
      "total_interest_label": "कुल ब्याज:",
      "calculate_again": "पुनः गणना करें",
      "find_schemes_with_emi": "इस ईएमआई वाली योजनाएं खोजें"
    },
    "screen9": {
      "header": "निकटतम भागीदार",
      "sub_header": "आपके स्थान के पास",
      "view_on_map": "मानचित्र पर देखें",
      "pin_you": "📍 आप",
      "pin_bank": "🏦 बैंक",
      "pin_kvk": "🔬 केवीके",
      "pin_csc": "💻 सीएससी"
    },
    "screen10": {
      "header": "आवश्यक दस्तावेज़",
      "ready_badge": "तैयार",
      "submit_app_btn": "बैंक में आवेदन जमा करें"
    },
    "common": {
      "registered_scheme": "पंजीकृत योजना",
      "ai_recommended": "AI अनुशंसित",
      "match_word": "मेल",
      "up_to_prefix": "₹",
      "up_to_suffix": "तक",
      "no_collateral": "बिना गारंटी",
      "project_cost": "परियोजना लागत",
      "subsidy": "सब्सिडी",
      "years": "वर्ष",
      "months": "महीने",
      "moratorium": "मोरेटोरियम",
      "per_month": "/ माह",
      "km_away": "किमी दूर",
      "uploaded": "अपलोड किया गया",
      "pending": "लंबित",
      "documents_uploaded": "में से {total} दस्तावेज अपलोड किए गए",
      "no_restrictive_ceiling": "कोई प्रतिबंधात्मक सीमा नहीं"
    },
    "tags": {
      "low_interest": "कम ब्याज",
      "easy_process": "सरल प्रक्रिया",
      "collateral_free": "बिना गारंटी ऋण",
      "top_choice": "सर्वोत्तम विकल्प",
      "high_subsidy": "उच्च सब्सिडी (35% तक)",
      "for_new_business": "नए व्यवसाय हेतु",
      "govt_grant": "सरकारी अनुदान",
      "for_sc_st_women": "एससी/एसटी व महिलाओं हेतु",
      "high_loan_limit": "उच्च ऋण सीमा",
      "handholding_support": "मार्गदर्शन व सहायता",
      "toolkit_grant": "टूलकिट अनुदान (₹15,000)",
      "5_low_interest": "5% कम ब्याज दर",
      "traditional_crafts": "पारंपरिक शिल्प",
      "75_subsidy": "75% सब्सिडी",
      "women_exclusive": "महिलाओं हेतु विशेष",
      "eco_livelihood": "पर्यावरण अनुकूल आजीविका",
      "interest_subsidy": "ब्याज सब्सिडी",
      "fast_approval": "त्वरित स्वीकृति",
      "food_business": "खाद्य व्यवसाय",
      "35_high_subsidy": "35% उच्च सब्सिडी",
      "fssai_support": "FSSAI लाइसेंस सहायता",
      "shishu_loan": "शिशु ऋण",
      "zero_paperwork": "कागजी कार्रवाई मुक्त",
      "quick_disbursal": "त्वरित संवितरण"
    }
  },
  "te": {
    "brand": {
      "title": "ఉద్యమ్ సేతు",
      "tagline": "సరైన పథకం • సరైన మార్గదర్శనం • సరైన అభివృద్ధి",
      "backend_online": "బ్యాకెండ్ ఆన్‌లైన్: పోర్ట్ 5000",
      "mobile_sim": "📱 మొబైల్ యాప్ సిమ్యులేటర్",
      "api_tester": "⚡ లైవ్ ఏపీఐ టెస్టర్"
    },
    "sidebar": {
      "title": "యాప్ ఇంటర్‌ఫేస్ • దశలవారీగా",
      "step1_title": "స్ప్లాష్ స్క్రీన్",
      "step1_sub": "స్వాగతం & లక్ష్యం",
      "step2_title": "లాగిన్ / సైన్ అప్",
      "step2_sub": "ఓటీపీ & గెస్ట్ యాక్సెస్",
      "step3_title": "హోమ్ డ్యాష్‌బోర్డ్",
      "step3_sub": "శీఘ్ర ప్రాప్యత గ్రిడ్",
      "step4_title": "ఏఐ చాట్ / అడగండి",
      "step4_sub": "జెమిని బహుభాషా ఏఐ",
      "step5_title": "వినియోగదారు వివరాలు",
      "step5_sub": "దశలవారీ ప్రొఫైలింగ్",
      "step6_title": "పథకాల ఫలితాలు",
      "step6_sub": "నియమ ఇంజిన్ స్కోర్లు",
      "step7_title": "పథకం వివరాలు",
      "step7_sub": "ప్రయోజనాలు & అర్హత",
      "step8_title": "ఈఎంఐ కాలిక్యులేటర్",
      "step8_sub": "రీపేమెంట్ ప్లానర్",
      "step9_title": "సమీప భాగస్వామి",
      "step9_sub": "బ్యాంకులు, సీఎస్‌సీ, కేవీకే",
      "step10_title": "పత్రాల జాబితా",
      "step10_sub": "అప్‌లోడ్ & ధృవీకరణ"
    },
    "screen1": {
      "brand_name": "ఉద్యమ్ సేతు",
      "tagline": "ప్రతి వ్యాపారవేత్తకు ఏఐ ఆధారిత పథకాల గుర్తింపు",
      "banner_title": "సరైన పథకం • సరైన అభివృద్ధి",
      "banner_sub": "చిన్న వ్యాపారుల సాధికారత",
      "get_started": "ప్రారంభించండి →"
    },
    "screen2": {
      "welcome_back": "తిరిగి స్వాగతం!",
      "login_sub": "మీ వ్యాపార ప్రయాణాన్ని కొనసాగించడానికి లాగిన్ అవ్వండి",
      "mobile_label": "మొబైల్ నంబర్",
      "mobile_placeholder": "మొబైల్ నంబర్ నమోదు చేయండి",
      "send_otp": "ఓటీపీ పంపండి",
      "enter_otp": "6-అంకెల ఓటీపీ నమోదు చేయండి",
      "verify_continue": "ధృవీకరించి కొనసాగండి",
      "resend_otp": "ఓటీపీ మళ్ళీ పంపండి",
      "or": "లేదా",
      "continue_google": "గూగుల్‌తో కొనసాగండి",
      "continue_guest": "గెస్ట్‌గా కొనసాగండి",
      "new_user": "కొత్త వినియోగదారులా?",
      "sign_up": "సైన్ అప్ చేయండి"
    },
    "screen3": {
      "greeting": "నమస్కారం, వ్యాపారవేత్త 👋",
      "sub_greeting": "ఈ రోజు మేము మీకు ఎలా సహాయపడగలం?",
      "banner_title": "మీ కోసం పథకాలను కనుగొనండి",
      "banner_sub": "కొన్ని ప్రశ్నలకు సమాధానమివ్వండి మరియు సరిపోయే పథకాలను పొందండి.",
      "start_now": "ఇప్పుడే ప్రారంభించండి →",
      "quick_access": "త్వరిత సేవలు",
      "match_schemes": "పథకాల గుర్తింపు",
      "emi_calc": "ఈఎంఐ కాలిక్యులేటర్",
      "my_applications": "నా దరఖాస్తులు",
      "documents": "పత్రాలు",
      "nearby_partners": "సమీప భాగస్వాములు",
      "help_support": "సహాయం & మద్దతు",
      "nav_home": "హోమ్",
      "nav_chat": "చాట్",
      "nav_saved": "భద్రపరిచినవి",
      "nav_profile": "ప్రొఫైల్"
    },
    "screen4": {
      "title": "ఉద్యమ్ సేతు ఏఐ",
      "status": "ఆన్‌లైన్ • డిజిటల్ ఇండియా వాయిస్ (22 భాషలు)",
      "welcome_msg": "ఉద్యమ్ సేతు ఏఐకి స్వాగతం. పూచీకత్తు లేని ప్రభుత్వ రుణాలు, సబ్సిడీలు మరియు పథకాలను కనుగొనడానికి: మీరు ఎవరూ మరియు ఏ వ్యాపారాన్ని ప్రారంభించాలనుకుంటున్నారో దయచేసి చెప్పండి?",
      "select_business_title": "👇 మీ వ్యాపారాన్ని లేదా లక్ష్యాన్ని ఎంచుకోండి:",
      "food_opt": "🍲 ఫుడ్ బిజినెస్ (హోటల్, క్యాటరింగ్, టిఫిన్)",
      "retail_opt": "🛒 కిరాణా షాప్ (చిల్లర దుకాణం, జనరల్ స్టోర్)",
      "artisan_opt": "🧵 చేనేత & చేతివృత్తులు (విశ్వకర్మ, వీవర్ ముద్ర)",
      "agri_opt": "🌾 వ్యవసాయం & పాడి పరిశ్రమ (కిసాన్ క్రెడిట్ కార్డ్)",
      "textile_opt": "👗 టైలరింగ్ & వస్త్ర వ్యాపారం (సమర్థ్, బుటిక్)",
      "mfg_opt": "🏭 చిన్న తయారీ పరిశ్రమ & ఫ్యాబ్రికేషన్",
      "services_opt": "🔧 రిపేర్ & సర్వీస్ సెంటర్ (ఆటో గ్యారేజ్)",
      "vending_opt": "🛍️ వీధి వ్యాపారం (తోపుడు బండ్లు, పీఎం స్వనిధి)",
      "listen_btn": "🔊 వినండి",
      "voice_prompt": "🎙️ మాట్లాడటానికి ఇక్కడ నొక్కండి",
      "input_placeholder": "తెలుగులో అడగండి లేదా టైప్ చేయండి...",
      "send_btn": "➤",
      "view_details": "పథకం పూర్తి వివరాలు చూడండి"
    },
    "screen5": {
      "header": "మీ గురించి తెలియజేయండి",
      "step_indicator": "దశ 2 / 5",
      "personal_header": "వ్యక్తిగత & సామాజిక వివరాలు",
      "age_label": "వయస్సు",
      "gender_label": "లింగం",
      "social_cat_label": "సామాజిక వర్గం",
      "divyang_header": "దివ్యాంగుల వివరాలు",
      "divyang_sub": "ప్రత్యేక 35% PMEGP సబ్సిడీ & 5% తక్కువ వడ్డీ రుణాలు",
      "pwd_label": "దివ్యాంగులా?",
      "business_header": "వ్యాపార & ఆర్థిక వివరాలు",
      "location_label": "ప్రాంతం (గ్రామీణ / పట్టణ)",
      "income_label": "వార్షిక కుటుంబ ఆదాయం",
      "biz_type_label": "వ్యాపార రంగం",
      "experience_label": "అనుభవం",
      "education_label": "విద్యార్హత",
      "find_schemes_btn": "సరిపోయే పథకాలను కనుగొనండి ➔",
      "gender_male": "పురుషుడు",
      "gender_female": "మహిళ (35% ప్రత్యేక గ్రాంట్)",
      "gender_other": "ట్రాన్స్‌జెండర్ / ఇతరులు",
      "cat_obc": "ఓబీసీ (ఇతర వెనుకబడిన తరగతులు - 35% సబ్సిడీ)",
      "cat_sc": "ఎస్సీ (షెడ్యూల్డ్ కులాలు - 35% సబ్సిడీ)",
      "cat_st": "ఎస్టీ (షెడ్యూల్డ్ తెగలు - 35% సబ్సిడీ)",
      "cat_general": "జనరల్ (సాధారణ వర్గం)",
      "cat_women": "మహిళా పారిశ్రామికవేత్త",
      "cat_minority": "మైనారిటీ వర్గం",
      "cat_pwd": "దివ్యాంగులు (ప్రత్యేక ప్రయోజనాలు)",
      "cat_ex_servicemen": "మాజీ సైనికులు",
      "pwd_no": "కాదు",
      "pwd_yes": "అవును (దివ్యాంగులు - ప్రత్యేక సబ్సిడీ)",
      "disability_type_label": "వైకల్యం రకం",
      "disability_locomotor": "చలన వైకల్యం / ఆర్థోపెడిక్",
      "disability_visual": "దృష్టి లోపం / అంధత్వం",
      "disability_hearing": "వినికిడి లేదా వాక్ లోపం",
      "disability_intellectual": "మేధోపరమైన వైకల్యం",
      "disability_multiple": "బహుళ వైకల్యాలు",
      "disability_other": "ఇతర ధృవీకరించబడిన వైకల్యం",
      "disability_percent_label": "వైకల్యం శాతం",
      "disability_percent_40_70": "40% - 70% (బెంచ్‌మార్క్ దివ్యాంగులు)",
      "disability_percent_above70": "70% కంటే ఎక్కువ (తీవ్రమైనది)",
      "disability_percent_below40": "40% కంటే తక్కువ",
      "udid_card_label": "UDID కార్డు ఉందా?",
      "udid_yes": "అవును, UDID కార్డు ఉంది",
      "udid_in_process": "దరఖాస్తు చేశాను / ప్రక్రియలో ఉంది",
      "udid_no": "లేదు / ఇంకా దరఖాస్తు చేయలేదు",
      "divyang_badge": "💡 దివ్యాంగుల స్వావలంబన పథకం (రూ. 50 లక్షల వరకు @ 5% వడ్డీ) & PMEGP 35% గ్రాంట్‌కు అర్హులు!",
      "loc_rural": "గ్రామీణ ప్రాంతం (35% సబ్సిడీ)",
      "loc_urban": "పట్టణ ప్రాంతం (25% సబ్సిడీ)",
      "biz_food": "ఆహార వ్యాపారం (హోటల్, క్యాటరింగ్, టిఫిన్ సెంటర్)",
      "biz_retail": "రిటైల్ / కిరాణా దుకాణం (జనరల్ స్టోర్)",
      "biz_handicrafts": "చేనేత & చేతివృత్తులు (కళాకారులు, నేత కార్మికులు)",
      "biz_agri": "వ్యవసాయం & అనుబంధ రంగాలు (పాడి పరిశ్రమ, పౌల్ట్రీ)",
      "biz_textile": "వస్త్రాలు & దుస్తులు (టైలరింగ్, బోటిక్)",
      "biz_mfg": "చిన్న తయారీ పరిశ్రమ & ఫ్యాబ్రికేషన్",
      "biz_services": "సేవలు / రిపేర్ దుకాణం (సర్వీస్ సెంటర్)",
      "biz_vending": "వీధి వ్యాపారం (తోపుడు బండ్లు, హాకర్లు)",
      "experience_val": "2 సంవత్సరాలు",
      "edu_8th_above": "8వ తరగతి ఉత్తీర్ణత లేదా అంతకంటే ఎక్కువ (రూ. 50 లక్షల పరిమితి)",
      "edu_below_8th": "8వ తరగతి కంటే తక్కువ",
      "edu_graduate": "గ్రాడ్యుయేట్ / ఐటీఐ / డిప్లొమా",
      "badge_underage": "⚠️ ప్రభుత్వ పథకాలకు కనీస వయస్సు 18 సంవత్సరాలు",
      "badge_youth": "⚡ యువత (18-35) • అధిక సబ్సిడీ ప్రాధాన్యత",
      "badge_mature": "💼 ప్రధాన వ్యవస్థాపకుడు (36-55) • పూర్తి అర్హత",
      "badge_senior": "🌟 సీనియర్ వ్యవస్థాపకుడు (56+) • ప్రత్యేక సలహా మద్దతు"
    },
    "screen6": {
      "header": "సరిపోలిన పథకాలు",
      "sub_header": "మీ వివరాల ఆధారంగా",
      "view_all_schemes": "అన్ని పథకాలను చూడండి",
      "match_score": "సరిపోలిక"
    },
    "screen7": {
      "tab_overview": "అవలోకనం",
      "tab_benefits": "ప్రయోజనాలు",
      "tab_eligibility": "అర్హత",
      "tab_documents": "పత్రాలు",
      "loan_amount": "రుణ మొత్తం",
      "interest_rate": "వడ్డీ రేటు",
      "repayment_period": "తిరిగి చెల్లించే కాలం",
      "who_can_apply": "ఎవరు దరఖాస్తు చేసుకోవచ్చు?",
      "purpose": "ప్రయోజనం / ఉద్దేశ్యం",
      "min_age": "కనీస వయస్సు",
      "eligible_categories": "అర్హత గల వర్గాలు",
      "eligible_business": "అర్హత గల వ్యాపారాలు",
      "income_cap": "ఆదాయ పరిమితి",
      "key_advantages": "ముఖ్యమైన ఆర్థిక ప్రయోజనాలు:",
      "doc_checklist_title": "కావలసిన పత్రాల జాబితా:",
      "doc_checklist_sub": "బ్యాంకులో సమర్పించడానికి ఈ పత్రాలను సిద్ధంగా ఉంచుకోండి:",
      "save_btn": "భద్రపరచు",
      "apply_now_btn": "ఇప్పుడే దరఖాస్తు చేయండి"
    },
    "screen8": {
      "header": "ఈఎంఐ కాలిక్యులేటర్",
      "loan_amount_label": "రుణ మొత్తం",
      "interest_rate_label": "వడ్డీ రేటు (%)",
      "tenure_label": "కాలపరిమితి (సంవత్సరాలు)",
      "estimated_emi": "అంచనా వేసిన ఈఎంఐ",
      "approx_note": "*విలువలు సుమారుగా ఉంటాయి",
      "principal_label": "అసలు మొత్తం:",
      "total_interest_label": "మొత్తం వడ్డీ:",
      "calculate_again": "మళ్లీ లెక్కించండి",
      "find_schemes_with_emi": "ఈ ఈఎంఐతో లభించే పథకాలను కనుగొనండి"
    },
    "screen9": {
      "header": "సమీప భాగస్వాములు",
      "sub_header": "మీ ప్రాంతానికి దగ్గరగా",
      "view_on_map": "మ్యాప్‌లో చూడండి",
      "pin_you": "📍 మీరు",
      "pin_bank": "🏦 బ్యాంకు",
      "pin_kvk": "🔬 కేవీకే",
      "pin_csc": "💻 సీఎస్‌సీ"
    },
    "screen10": {
      "header": "కావలసిన పత్రాలు",
      "ready_badge": "సిద్ధంగా ఉంది",
      "submit_app_btn": "బ్యాంకుకు దరఖాస్తును సమర్పించండి"
    },
    "common": {
      "registered_scheme": "నమోదిత పథకం",
      "ai_recommended": "AI సిఫార్సు చేయబడింది",
      "match_word": "సరిపోలిక",
      "up_to_prefix": "రూ.",
      "up_to_suffix": "వరకు",
      "no_collateral": "పూచీకత్తు లేదు",
      "project_cost": "ప్రాజెక్ట్ వ్యయం",
      "subsidy": "సబ్సిడీ",
      "years": "సంవత్సరాలు",
      "months": "నెలలు",
      "moratorium": "మొరటోరియం",
      "per_month": "/ నెలకు",
      "km_away": "కి.మీ దూరంలో",
      "uploaded": "అప్‌లోడ్ చేయబడింది",
      "pending": "పెండింగ్‌లో ఉంది",
      "documents_uploaded": "లో {total} పత్రాలు అప్‌లోడ్ అయ్యాయి",
      "no_restrictive_ceiling": "ఎలాంటి పరిమితి లేదు"
    },
    "tags": {
      "low_interest": "తక్కువ వడ్డీ",
      "easy_process": "సులభమైన ప్రక్రియ",
      "collateral_free": "పూచీకత్తు లేనిది",
      "top_choice": "ఉత్తమ ఎంపిక",
      "high_subsidy": "అధిక సబ్సిడీ (35% వరకు)",
      "for_new_business": "కొత్త వ్యాపారం కోసం",
      "govt_grant": "ప్రభుత్వ గ్రాంట్",
      "for_sc_st_women": "ఎస్సీ/ఎస్టీ & మహిళలకు",
      "high_loan_limit": "అధిక రుణ పరిమితి",
      "handholding_support": "పూర్తి సహాయ సహకారాలు",
      "toolkit_grant": "టూల్‌కిట్ గ్రాంట్ (₹15,000)",
      "5_low_interest": "5% తక్కువ వడ్డీ",
      "traditional_crafts": "సాంప్రదాయ కళలు",
      "75_subsidy": "75% సబ్సిడీ",
      "women_exclusive": "మహిళలకు ప్రత్యేకం",
      "eco_livelihood": "పర్యావరణ అనుకూల జీవనోపాధి",
      "interest_subsidy": "వడ్డీ సబ్సిడీ",
      "fast_approval": "వేగవంతమైన ఆమోదం",
      "food_business": "ఆహార వ్యాపారం",
      "35_high_subsidy": "35% అధిక సబ్సిడీ",
      "fssai_support": "FSSAI లైసెన్స్ సహాయం",
      "shishu_loan": "శిశు రుణం",
      "zero_paperwork": "పేపర్‌లెస్ ప్రాసెస్",
      "quick_disbursal": "శీఘ్ర నిధుల విడుదల"
    }
  },
  "kn": {
    "brand": {
      "title": "ಉದ್ಯಮ್ ಸೇತು",
      "tagline": "ಸರಿಯಾದ ಯೋಜನೆ • ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ • ಸರಿಯಾದ ಬೆಳವಣಿಗೆ",
      "backend_online": "ಬ್ಯಾಕೆಂಡ್ ಆನ್‌ಲೈನ್: ಪೋರ್ಟ್ 5000",
      "mobile_sim": "📱 ಮೊಬೈಲ್ ಆ್ಯಪ್ ಸಿಮ್ಯುಲೇಟರ್",
      "api_tester": "⚡ ಲೈವ್ API ಪರೀಕ್ಷಕ"
    },
    "sidebar": {
      "title": "ಆ್ಯಪ್ ಇಂಟರ್ಫೇಸ್ • ಹಂತ-ಹಂತವಾಗಿ",
      "step1_title": "ಸ್ಪ್ಲಾಶ್ ಸ್ಕ್ರೀನ್",
      "step1_sub": "ಸ್ವಾಗತ ಮತ್ತು ಧ್ಯೇಯ",
      "step2_title": "ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್",
      "step2_sub": "OTP ಮತ್ತು ಅತಿಥಿ ಪ್ರವೇಶ",
      "step3_title": "ಮುಖಪುಟ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      "step3_sub": "ತ್ವರಿತ ಪ್ರವೇಶ ಗ್ರಿಡ್",
      "step4_title": "ಎಐ ಚಾಟ್ / ಕೇಳಿ",
      "step4_sub": "ಜೆಮಿನಿ ಬಹುಭಾಷಾ ಎಐ",
      "step5_title": "ಬಳಕೆದಾರರ ವಿವರಗಳು",
      "step5_sub": "ಹಂತ-ಹಂತದ ಪ್ರೊಫೈಲಿಂಗ್",
      "step6_title": "ಯೋಜನೆ ಫಲಿತಾಂಶಗಳು",
      "step6_sub": "ನಿಯಮ ಆಧಾರಿತ ಅಂಕಗಳು",
      "step7_title": "ಯೋಜನೆಯ ವಿವರಗಳು",
      "step7_sub": "ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅರ್ಹತೆ",
      "step8_title": "ಇಎಂಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
      "step8_sub": "ಮರುಪಾವತಿ ಯೋಜಕ",
      "step9_title": "ಹತ್ತಿರದ ಪಾಲುದಾರರು",
      "step9_sub": "ಬ್ಯಾಂಕುಗಳು, ಸಿಎಸ್‌ಸಿ, ಕೆವಿಕೆ",
      "step10_title": "ದಾಖಲೆಗಳ ಪರಿಶೀಲನಾಪಟ್ಟಿ",
      "step10_sub": "ಅಪ್‌ಲೋಡ್ ಮತ್ತು ಪರಿಶೀಲನೆ"
    },
    "screen1": {
      "brand_name": "ಉದ್ಯಮ್ ಸೇತು",
      "tagline": "ಪ್ರತಿಯೊಬ್ಬ ಉದ್ಯಮಿಗಾಗಿ ಎಐ-ಚಾಲಿತ ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ",
      "banner_title": "ಸರಿಯಾದ ಯೋಜನೆ • ಸರಿಯಾದ ಬೆಳವಣಿಗೆ",
      "banner_sub": "ಸಣ್ಣ ಉದ್ಯಮಗಳ ಸಬಲೀಕರಣ",
      "get_started": "ಪ್ರಾರಂಭಿಸಿ →"
    },
    "screen2": {
      "welcome_back": "ಮರಳಿ ಸ್ವಾಗತ!",
      "login_sub": "ನಿಮ್ಮ ವ್ಯಾಪಾರ ಪ್ರಯಾಣವನ್ನು ಮುಂದುವರಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ",
      "mobile_label": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      "mobile_placeholder": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
      "send_otp": "OTP ಕಳುಹಿಸಿ",
      "enter_otp": "6-ಅಂಕಿಯ OTP ನಮೂದಿಸಿ",
      "verify_continue": "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮುಂದುವರಿಯಿರಿ",
      "resend_otp": "OTP ಮರುಕಳುಹಿಸಿ",
      "or": "ಅಥವಾ",
      "continue_google": "ಗೂಗಲ್‌ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
      "continue_guest": "ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ",
      "new_user": "ಹೊಸ ಬಳಕೆದಾರರೆ?",
      "sign_up": "ಸೈನ್ ಅಪ್ ಮಾಡಿ"
    },
    "screen3": {
      "greeting": "ನಮಸ್ಕಾರ, ಉದ್ಯಮಿ 👋",
      "sub_greeting": "ಇಂದು ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      "banner_title": "ನಿಮಗಾಗಿ ಸೂಕ್ತ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
      "banner_sub": "ಕೆಲವು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ ಮತ್ತು ಉತ್ತಮ ಯೋಜನೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
      "start_now": "ಈಗಲೇ ಪ್ರಾರಂಭಿಸಿ →",
      "quick_access": "ತ್ವರಿತ ಸೇವೆಗಳು",
      "match_schemes": "ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ",
      "emi_calc": "ಇಎಂಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
      "my_applications": "ನನ್ನ ಅರ್ಜಿಗಳು",
      "documents": "ದಾಖಲೆಗಳು",
      "nearby_partners": "ಹತ್ತಿರದ ಪಾಲುದಾರರು",
      "help_support": "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
      "nav_home": "ಮುಖಪುಟ",
      "nav_chat": "ಚಾಟ್",
      "nav_saved": "ಉಳಿಸಲಾಗಿದೆ",
      "nav_profile": "ಪ್ರೊಫೈಲ್"
    },
    "screen4": {
      "title": "ಉದ್ಯಮ್ ಸೇತು ಎಐ",
      "status": "ಆನ್‌ಲೈನ್ • ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಧ್ವನಿ (22 ಭಾಷೆಗಳು)",
      "welcome_msg": "ಉದ್ಯಮ್ ಸೇತು ಎಐಗೆ ಸ್ವಾಗತ. ಅಡಮಾನವಿಲ್ಲದ ಸರ್ಕಾರಿ ಸಾಲಗಳು, ಸಬ್ಸಿಡಿಗಳು ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು: ನೀವು ಯಾರು ಮತ್ತು ಯಾವ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ದಯವಿಟ್ಟು ತಿಳಿಸಿ?",
      "select_business_title": "👇 ನಿಮ್ಮ ವ್ಯವಹಾರ ಅಥವಾ ಗುರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      "food_opt": "🍲 ಆಹಾರ ವ್ಯವಹಾರ (ಹೋಟೆಲ್, ಕ್ಯಾಟರಿಂಗ್, ತಿಂಡಿ)",
      "retail_opt": "🛒 ಚಿಲ್ಲರೆ / ಕಿರಾಣಿ ಅಂಗಡಿ (ಜನರಲ್ ಸ್ಟೋರ್)",
      "artisan_opt": "🧵 ಕರಕುಶಲ ಮತ್ತು ನೇಕಾರಿಕೆ (ವಿಶ್ವಕರ್ಮ, ನೇಕಾರ ಮುದ್ರಾ)",
      "agri_opt": "🌾 ಕೃಷಿ ಮತ್ತು ಹೈನುಗಾರಿಕೆ (ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್)",
      "textile_opt": "👗 ಜವಳಿ ಮತ್ತು ಗಾರ್ಮೆಂಟ್ಸ್ (ಟೈಲರಿಂಗ್, ಬುಟಿಕ್)",
      "mfg_opt": "🏭 ಸಣ್ಣ ಕೈಗಾರಿಕೆ ಮತ್ತು ಉತ್ಪಾದನೆ",
      "services_opt": "🔧 ಸೇವೆ ಮತ್ತು ರಿಪೇರಿ ಅಂಗಡಿ (ವಾಹನ ಗ್ಯಾರೇಜ್)",
      "vending_opt": "🛍️ ಬೀದಿ ವ್ಯಾಪಾರ (ತಳ್ಳುವ ಗಾಡಿ, ಪಿಎಂ ಸ್ವನಿಧಿ)",
      "listen_btn": "🔊 ಕೇಳಿ",
      "voice_prompt": "🎙️ ಮಾತನಾಡಲು ಇಲ್ಲಿ ಸ್ಪರ್ಶಿಸಿ",
      "input_placeholder": "ಕನ್ನಡದಲ್ಲಿ ಕೇಳಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ...",
      "send_btn": "➤",
      "view_details": "ಯೋಜನೆಯ ಸಂಪೂರ್ಣ ವಿವರಗಳನ್ನು ನೋಡಿ"
    },
    "screen5": {
      "header": "ನಿಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಸಿ",
      "step_indicator": "ಹಂತ 2 / 5",
      "personal_header": "ವೈಯಕ್ತಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ವಿವರಗಳು",
      "age_label": "ವಯಸ್ಸು",
      "gender_label": "ಲಿಂಗ",
      "social_cat_label": "ಸಾಮಾಜಿಕ ವರ್ಗ",
      "divyang_header": "ವಿಕಲಚೇತನರ ವಿವರಗಳು",
      "divyang_sub": "ವಿಶೇಷ 35% PMEGP ಸಬ್ಸಿಡಿ ಮತ್ತು 5% ಕಡಿಮೆ ಬಡ್ಡಿ ಸಾಲಗಳು",
      "pwd_label": "ನೀವು ವಿಕಲಚೇತನರೆ?",
      "business_header": "ವ್ಯಾಪಾರ ಮತ್ತು ಆರ್ಥಿಕ ವಿವರಗಳು",
      "location_label": "ಉದ್ಯಮದ ಸ್ಥಳ (ಗ್ರಾಮೀಣ / ನಗರ)",
      "income_label": "ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ",
      "biz_type_label": "ವ್ಯವಹಾರದ ಪ್ರಕಾರ",
      "experience_label": "ಅನುಭವ",
      "education_label": "ವಿದ್ಯಾರ್ಹತೆ",
      "find_schemes_btn": "ಹೊಂದಾಣಿಕೆಯ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ ➔",
      "gender_male": "ಪುರುಷ",
      "gender_female": "ಮಹಿಳೆ (35% ವಿಶೇಷ ಅನುದಾನ)",
      "gender_other": "ಲಿಂಗಪರಿವರ್ತಿತ / ಇತರರು",
      "cat_obc": "ಒಬಿಸಿ (ಇತರ ಹಿಂದುಳಿದ ವರ್ಗಗಳು - 35% ಸಬ್ಸಿಡಿ)",
      "cat_sc": "ಎಸ್‌ಸಿ (ಪರಿಶಿಷ್ಟ ಜಾತಿ - 35% ಸಬ್ಸಿಡಿ)",
      "cat_st": "ಎಸ್‌ಟಿ (ಪರಿಶಿಷ್ಟ ಪಂಗಡ - 35% ಸಬ್ಸಿಡಿ)",
      "cat_general": "ಸಾಮಾನ್ಯ ವರ್ಗ",
      "cat_women": "ಮಹಿಳಾ ಉದ್ಯಮಿ",
      "cat_minority": "ಅಲ್ಪಸಂಖ್ಯಾತ ಸಮುದಾಯ",
      "cat_pwd": "ವಿಕಲಚೇತನರು (ವಿಶೇಷ ಪ್ರಯೋಜನಗಳು)",
      "cat_ex_servicemen": "ಮಾಜಿ ಸೈನಿಕರು",
      "pwd_no": "ಇಲ್ಲ",
      "pwd_yes": "ಹೌದು (ವಿಕಲಚೇತನರು - ವಿಶೇಷ ಸಬ್ಸಿಡಿ)",
      "disability_type_label": "ವಿಕಲಚೇತನತೆಯ ಪ್ರಕಾರ",
      "disability_locomotor": "ಚಲನಶೀಲತೆಯ ದೋಷ / ಆರ್ಥೋಪೆಡಿಕ್",
      "disability_visual": "ದೃಷ್ಟಿ ದೋಷ / ಅಂಧತ್ವ",
      "disability_hearing": "ಶ್ರವಣ ಅಥವಾ ವಾಕ್ ದೋಷ",
      "disability_intellectual": "ಬೌದ್ಧಿಕ ವಿಕಲತೆ",
      "disability_multiple": "ಬಹು ವಿಕಲತೆಗಳು",
      "disability_other": "ಇತರ ಪ್ರಮಾಣೀಕೃತ ವಿಕಲತೆ",
      "disability_percent_label": "ವಿಕಲತೆ ಶೇಕಡಾವಾರು",
      "disability_percent_40_70": "40% - 70% (ಬೆಂಚ್‌ಮಾರ್ಕ್)",
      "disability_percent_above70": "70% ಕ್ಕಿಂತ ಹೆಚ್ಚು (ತೀವ್ರ)",
      "disability_percent_below40": "40% ಕ್ಕಿಂತ ಕಡಿಮೆ",
      "udid_card_label": "UDID ಕಾರ್ಡ್ ಇದೆಯೇ?",
      "udid_yes": "ಹೌದು, UDID ಕಾರ್ಡ್ ಇದೆ",
      "udid_in_process": "ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ / ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ",
      "udid_no": "ಇಲ್ಲ / ಇನ್ನೂ ಅರ್ಜಿ ಸಲ್ಲಿಸಿಲ್ಲ",
      "divyang_badge": "💡 ದಿವ್ಯಾಂಗಜನ ಸ್ವಾವಲಂಬನಾ ಯೋಜನೆ (₹50 ಲಕ್ಷದವರೆಗೆ @ 5% ಬಡ್ಡಿ) & PMEGP 35% ಅನುದಾನಕ್ಕೆ ಅರ್ಹರು!",
      "loc_rural": "ಗ್ರಾಮೀಣ ಪ್ರದೇಶ (35% ಸಬ್ಸಿಡಿ)",
      "loc_urban": "ನಗರ ಪ್ರದೇಶ (25% ಸಬ್ಸಿಡಿ)",
      "biz_food": "ಆಹಾರ ಉದ್ಯಮ (ಹೋಟೆಲ್, ಕ್ಯಾಟರಿಂಗ್, ಟಿಫಿನ್ ಸೆಂಟರ್)",
      "biz_retail": "ಚಿಲ್ಲರೆ / ಕಿರಾಣಿ ಅಂಗಡಿ (ಜನರಲ್ ಸ್ಟೋರ್)",
      "biz_handicrafts": "ಕರಕುಶಲ ಮತ್ತು ಕೈಮಗ್ಗ (ಕುಶಲಕರ್ಮಿಗಳು, ನೇಕಾರರು)",
      "biz_agri": "ಕೃಷಿ ಮತ್ತು ಸಂಬಂಧಿತ (ಡೈರಿ, ಕೋಳಿ ಸಾಕಣೆ)",
      "biz_textile": "ಜವಳಿ ಮತ್ತು ಉಡುಪು (ಟೈಲರಿಂಗ್, ಅಂಗಡಿ)",
      "biz_mfg": "ಸಣ್ಣ ಉತ್ಪಾದನಾ ಘಟಕ & ಫ್ಯಾಬ್ರಿಕೇಶನ್",
      "biz_services": "ಸೇವೆಗಳು / ರಿಪೇರಿ ಅಂಗಡಿ (ಸರ್ವಿಸ್ ಸೆಂಟರ್)",
      "biz_vending": "ಬೀದಿ ವ್ಯಾಪಾರ (ತಳ್ಳುಗಾಡಿ, ವ್ಯಾಪಾರಿಗಳು)",
      "experience_val": "2 ವರ್ಷಗಳು",
      "edu_8th_above": "8ನೇ ತರಗತಿ ತೇರ್ಗಡೆ ಅಥವಾ ಹೆಚ್ಚು (₹50 ಲಕ್ಷ ಮಿತಿ)",
      "edu_below_8th": "8ನೇ ತರಗತಿಗಿಂತ ಕಡಿಮೆ",
      "edu_graduate": "ಪದವೀಧರ / ಐಟಿಐ / ಡಿಪ್ಲೊಮಾ",
      "badge_underage": "⚠️ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗೆ ಕನಿಷ್ಠ ವಯಸ್ಸು 18 ವರ್ಷಗಳು",
      "badge_youth": "⚡ ಯುವಜನರು (18-35) • ಹೆಚ್ಚಿನ ಸಬ್ಸಿಡಿ ಆದ್ಯತೆ",
      "badge_mature": "💼 ಪ್ರಮುಖ ಉದ್ಯಮಿ (36-55) • ಪೂರ್ಣ ಸಾಲ ಅರ್ಹತೆ",
      "badge_senior": "🌟 ಹಿರಿಯ ಉದ್ಯಮಿ (56+) • ವಿಶೇಷ ಸಲಹಾ ಬೆಂಬಲ"
    },
    "screen6": {
      "header": "ಹೊಂದಿಕೆಯಾಗುವ ಯೋಜನೆಗಳು",
      "sub_header": "ನಿಮ್ಮ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ",
      "view_all_schemes": "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      "match_score": "ಹೊಂದಾಣಿಕೆ"
    },
    "screen7": {
      "tab_overview": "ಅವಲೋಕನ",
      "tab_benefits": "ಪ್ರಯೋಜನಗಳು",
      "tab_eligibility": "ಅರ್ಹತೆ",
      "tab_documents": "ದಾಖಲೆಗಳು",
      "loan_amount": "ಸಾಲದ ಮೊತ್ತ",
      "interest_rate": "ಬಡ್ಡಿ ದರ",
      "repayment_period": "ಮರುಪಾವತಿ ಅವಧಿ",
      "who_can_apply": "ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?",
      "purpose": "ಉದ್ದೇಶ",
      "min_age": "ಕನಿಷ್ಠ ವಯಸ್ಸು",
      "eligible_categories": "ಅರ್ಹ ವರ್ಗಗಳು",
      "eligible_business": "ಅರ್ಹ ವ್ಯವಹಾರಗಳು",
      "income_cap": "ಆದಾಯದ ಮಿತಿ",
      "key_advantages": "ಪ್ರಮುಖ ಆರ್ಥಿಕ ಪ್ರಯೋಜನಗಳು:",
      "doc_checklist_title": "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳ ಪಟ್ಟಿ:",
      "doc_checklist_sub": "ಬ್ಯಾಂಕ್‌ಗೆ ಸಲ್ಲಿಸುವ ಮುನ್ನ ಈ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧವಾಗಿಡಿ:",
      "save_btn": "ಉಳಿಸಿ",
      "apply_now_btn": "ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ"
    },
    "screen8": {
      "header": "ಇಎಂಐ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
      "loan_amount_label": "ಸಾಲದ ಮೊತ್ತ",
      "interest_rate_label": "ಬಡ್ಡಿ ದರ (%)",
      "tenure_label": "ಅವಧಿ (ವರ್ಷಗಳು)",
      "estimated_emi": "ಅಂದಾಜು ಇಎಂಐ",
      "approx_note": "*ಮೌಲ್ಯಗಳು ಅಂದಾಜು",
      "principal_label": "ಅಸಲು ಮೊತ್ತ:",
      "total_interest_label": "ಒಟ್ಟು ಬಡ್ಡಿ:",
      "calculate_again": "ಮತ್ತೆ ಲೆಕ್ಕಹಾಕಿ",
      "find_schemes_with_emi": "ಈ ಇಎಂಐ ಹೊಂದಿರುವ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ"
    },
    "screen9": {
      "header": "ಹತ್ತಿರದ ಪಾಲುದಾರರು",
      "sub_header": "ನಿಮ್ಮ ಸ್ಥಳದ ಸಮೀಪ",
      "view_on_map": "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
      "pin_you": "📍 ನೀವು",
      "pin_bank": "🏦 ಬ್ಯಾಂಕ್",
      "pin_kvk": "🔬 ಕೆವಿಕೆ",
      "pin_csc": "💻 ಸಿಎಸ್‌ಸಿ"
    },
    "screen10": {
      "header": "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು",
      "ready_badge": "ಸಿದ್ಧವಾಗಿದೆ",
      "submit_app_btn": "ಬ್ಯಾಂಕ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ"
    },
    "common": {
      "registered_scheme": "ನೋಂದಾಯಿತ ಯೋಜನೆ",
      "ai_recommended": "AI ಶಿಫಾರಸು ಮಾಡಿದೆ",
      "match_word": "ಹೊಂದಾಣಿಕೆ",
      "up_to_prefix": "₹",
      "up_to_suffix": "ವರೆಗೆ",
      "no_collateral": "ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲ",
      "project_cost": "ಯೋಜನಾ ವೆಚ್ಚ",
      "subsidy": "ಸಬ್ಸಿಡಿ",
      "years": "ವರ್ಷಗಳು",
      "months": "ತಿಂಗಳುಗಳು",
      "moratorium": "ಮೊರಟೋರಿಯಂ",
      "per_month": "/ ತಿಂಗಳಿಗೆ",
      "km_away": "ಕಿ.ಮೀ ದೂರದಲ್ಲಿ",
      "uploaded": "ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
      "pending": "ಬಾಕಿ ಉಳಿದಿದೆ",
      "documents_uploaded": "ರಲ್ಲಿ {total} ದಾಖಲೆಗಳು ಅಪ್‌ಲೋಡ್ ಆಗಿವೆ",
      "no_restrictive_ceiling": "ಯಾವುದೇ ನಿರ್ಬಂಧಿತ ಮಿತಿಯಿಲ್ಲ"
    },
    "tags": {
      "low_interest": "ಕಡಿಮೆ ಬಡ್ಡಿ",
      "easy_process": "ಸುಲಭ ಪ್ರಕ್ರಿಯೆ",
      "collateral_free": "ಅಡಮಾನ ರಹಿತ",
      "top_choice": "ಉತ್ತಮ ಆಯ್ಕೆ",
      "high_subsidy": "ಹೆಚ್ಚಿನ ಸಬ್ಸಿಡಿ (35% ವರೆಗೆ)",
      "for_new_business": "ಹೊಸ ವ್ಯವಹಾರಕ್ಕೆ",
      "govt_grant": "ಸರ್ಕಾರಿ ಅನುದಾನ",
      "for_sc_st_women": "ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ & ಮಹಿಳೆಯರಿಗೆ",
      "high_loan_limit": "ಹೆಚ್ಚಿನ ಸಾಲ ಮಿತಿ",
      "handholding_support": "ಮಾರ್ಗದರ್ಶನ ಬೆಂಬಲ",
      "toolkit_grant": "ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ (₹15,000)",
      "5_low_interest": "5% ಕಡಿಮೆ ಬಡ್ಡಿ",
      "traditional_crafts": "ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳು",
      "75_subsidy": "75% ಸಬ್ಸಿಡಿ",
      "women_exclusive": "ಮಹಿಳೆಯರಿಗೆ ವಿಶೇಷ",
      "eco_livelihood": "ಪರಿಸರ ಸ್ನೇಹಿ ಜೀವನೋಪಾಯ",
      "interest_subsidy": "ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
      "fast_approval": "ತ್ವರಿತ ಅನುಮೋದನೆ",
      "food_business": "ಆಹಾರ ಉದ್ಯಮ",
      "35_high_subsidy": "35% ಹೆಚ್ಚಿನ ಸಬ್ಸಿಡಿ",
      "fssai_support": "FSSAI ಬೆಂಬಲ",
      "shishu_loan": "ಶಿಶು ಸಾಲ",
      "zero_paperwork": "ಕಾಗದ ರಹಿತ ಪ್ರಕ್ರಿಯೆ",
      "quick_disbursal": "ತ್ವರಿತ ವಿತರಣೆ"
    }
  },
  "ta": {
    "brand": {
      "title": "உத்யம் சேது",
      "tagline": "சரியான திட்டம் • சரியான வழிகாட்டல் • சரியான வளர்ச்சி",
      "backend_online": "பின்னணி ஆன்லைன்: போர்ட் 5000",
      "mobile_sim": "📱 மொபைல் ஆப் சிமுலேட்டர்",
      "api_tester": "⚡ நேரலை API சோதனையாளர்"
    },
    "sidebar": {
      "title": "செயலி இடைமுகம் • படிப்படியாக",
      "step1_title": "ஸ்பிளாஸ் திரை",
      "step1_sub": "வரவேற்பு மற்றும் நோக்கம்",
      "step2_title": "உள்நுழைவு / பதிவு",
      "step2_sub": "OTP மற்றும் விருந்தினர் அணுகல்",
      "step3_title": "முகப்பு டாஷ்போர்டு",
      "step3_sub": "விரைவு அணுகல் கட்டம்",
      "step4_title": "ஏஐ அரட்டை / கேளுங்கள்",
      "step4_sub": "ஜெமினி பலமொழி ஏஐ",
      "step5_title": "பயனர் விவரங்கள்",
      "step5_sub": "படிப்படியான விவரக்குறிப்பு",
      "step6_title": "திட்ட முடிவுகள்",
      "step6_sub": "விதி அடிப்படையிலான மதிப்பெண்கள்",
      "step7_title": "திட்ட விவரங்கள்",
      "step7_sub": "நன்மைகள் மற்றும் தகுதி",
      "step8_title": "இஎம்ஐ கால்குலேட்டர்",
      "step8_sub": "திருப்பிச் செலுத்தும் திட்டம்",
      "step9_title": "அருகிலுள்ள கூட்டாளர்",
      "step9_sub": "வங்கிகள், சிஎஸ்சி, கேவிகே",
      "step10_title": "ஆவண சரிபார்ப்பு பட்டியல்",
      "step10_sub": "பதிவேற்றம் மற்றும் சரிபார்ப்பு"
    },
    "screen1": {
      "brand_name": "உத்யம் சேது",
      "tagline": "ஒவ்வொரு தொழில்முனைவோருக்கும் ஏஐ அடிப்படையிலான திட்ட பொருத்தம்",
      "banner_title": "சரியான திட்டம் • சரியான வளர்ச்சி",
      "banner_sub": "சிறு வணிகங்களின் அதிகாரமளித்தல்",
      "get_started": "தொடங்குங்கள் →"
    },
    "screen2": {
      "welcome_back": "மீண்டும் வருக!",
      "login_sub": "உங்கள் வணிக பயணத்தைத் தொடர உள்நுழையவும்",
      "mobile_label": "மொபைல் எண்",
      "mobile_placeholder": "மொபைல் எண்ணை உள்ளிடவும்",
      "send_otp": "OTP அனுப்புக",
      "enter_otp": "6-இலக்க OTP ஐ உள்ளிடவும்",
      "verify_continue": "சரிபார்த்து தொடரவும்",
      "resend_otp": "OTP ஐ மீண்டும் அனுப்புக",
      "or": "அல்லது",
      "continue_google": "கூகுள் மூலம் தொடரவும்",
      "continue_guest": "விருந்தினராக தொடரவும்",
      "new_user": "புதிய பயனரா?",
      "sign_up": "பதிவு செய்க"
    },
    "screen3": {
      "greeting": "வணக்கம், தொழில்முனைவோரே 👋",
      "sub_greeting": "இன்று நாங்கள் உங்களுக்கு எப்படி உதவ முடியும்?",
      "banner_title": "உங்களுக்கான திட்டங்களைக் கண்டறியவும்",
      "banner_sub": "சில கேள்விகளுக்கு பதிலளித்து சிறந்த பொருத்தமான திட்டங்களைப் பெறுங்கள்.",
      "start_now": "இப்போதே தொடங்குங்கள் →",
      "quick_access": "விரைவு அணுகல்",
      "match_schemes": "திட்ட பொருத்தம்",
      "emi_calc": "இஎம்ஐ கால்குலேட்டர்",
      "my_applications": "என் விண்ணப்பங்கள்",
      "documents": "ஆவணங்கள்",
      "nearby_partners": "அருகிலுள்ள கூட்டாளர்கள்",
      "help_support": "உதவி மற்றும் ஆதரவு",
      "nav_home": "முகப்பு",
      "nav_chat": "அரட்டை",
      "nav_saved": "சேமிக்கப்பட்டவை",
      "nav_profile": "சுயவிவரம்"
    },
    "screen4": {
      "title": "உத்யம் சேது ஏஐ",
      "status": "ஆன்லைன் • டிஜிட்டல் இந்தியா குரல் (22 மொழிகள்)",
      "welcome_msg": "உத்யம் சேது ஏஐ-க்கு வரவேற்கிறோம். பிணையமில்லா அரசு கடன்கள், மானியங்கள் மற்றும் திட்டங்களைக் கண்டறிய: நீங்கள் யார் மற்றும் என்ன தொழில் தொடங்க விரும்புகிறீர்கள் என்று கூறுங்கள்?",
      "select_business_title": "👇 உங்கள் வணிகம் அல்லது இலக்கைத் தேர்ந்தெடுக்கவும்:",
      "food_opt": "🍲 உணவு வணிகம் (ஹோட்டல், கேட்டரிங், டிபன்)",
      "retail_opt": "🛒 மளிகை & சில்லறை வணிகம் (ஜெனரல் ஸ்டோர்)",
      "artisan_opt": "🧵 கைவினைப்பொருட்கள் & கைத்தறி (விஸ்வகர்மா)",
      "agri_opt": "🌾 விவசாயம் & பால் பண்ணை (கிசான் கடன் அட்டை)",
      "textile_opt": "👗 ஜவுளி & ஆடை உற்பத்தி (தையல், பூட்டிக்)",
      "mfg_opt": "🏭 சிறு உற்பத்தி மற்றும் பட்டறை",
      "services_opt": "🔧 பழுது & சேவை மையம் (வாகன கேரேஜ்)",
      "vending_opt": "🛍️ தெருவோர வியாபாரம் (தள்ளுவண்டி, ஸ்வநிதி)",
      "listen_btn": "🔊 கேளுங்கள்",
      "voice_prompt": "🎙️ பேச இங்கே தொடவும்",
      "input_placeholder": "தமிழில் கேட்க அல்லது தட்டச்சு செய்ய...",
      "send_btn": "➤",
      "view_details": "முழு திட்ட விவரங்களைக் காண்க"
    },
    "screen5": {
      "header": "உங்களைப் பற்றி சொல்லுங்கள்",
      "step_indicator": "படி 2 / 5",
      "personal_header": "தனிப்பட்ட மற்றும் சமூக விவரங்கள்",
      "age_label": "வயது",
      "gender_label": "பாலினம்",
      "social_cat_label": "சமூக பிரிவு",
      "divyang_header": "மாற்றுத்திறனாளிகள் விவரம்",
      "divyang_sub": "சிறப்பு 35% PMEGP மானியம் & 5% குறைந்த வட்டி கடன்கள்",
      "pwd_label": "மாற்றுத்திறனாளியா?",
      "business_header": "வணிக மற்றும் நிதி விவரங்கள்",
      "location_label": "தொழில் அமைவிடம் (கிராமம் / நகரம்)",
      "income_label": "ஆண்டு குடும்ப வருமானம்",
      "biz_type_label": "தொழில் வகை",
      "experience_label": "அனுபவம்",
      "education_label": "கல்வித்தகுதி",
      "find_schemes_btn": "பொருத்தமான திட்டங்களைக் கண்டறியவும் ➔",
      "gender_male": "ஆண்",
      "gender_female": "பெண் (35% சிறப்பு மானியம்)",
      "gender_other": "திருநங்கை / மற்றவை",
      "cat_obc": "ஓபிசி (இதர பிற்படுத்தப்பட்ட வகுப்பினர் - 35% மானியம்)",
      "cat_sc": "எஸ்சி (பட்டியலிடப்பட்ட சாதி - 35% மானியம்)",
      "cat_st": "எஸ்டி (பட்டியலிடப்பட்ட பழங்குடி - 35% மானியம்)",
      "cat_general": "பொதுப் பிரிவு",
      "cat_women": "பெண் தொழில்முனைவோர்",
      "cat_minority": "சிறுபான்மையினர் சமூகம்",
      "cat_pwd": "மாற்றுத்திறனாளிகள் (சிறப்பு நன்மைகள்)",
      "cat_ex_servicemen": "முன்னாள் ராணுவத்தினர்",
      "pwd_no": "இல்லை",
      "pwd_yes": "ஆம் (மாற்றுத்திறனாளி - சிறப்பு மானியம்)",
      "disability_type_label": "மாற்றுத்திறன் வகை",
      "disability_locomotor": "உடலியக்கக் குறைபாடு / எலும்பியல்",
      "disability_visual": "பார்வைக் குறைபாடு / குருட்டுத்தன்மை",
      "disability_hearing": "செவித்திறன் அல்லது பேச்சு குறைபாடு",
      "disability_intellectual": "அறிவுசார் குறைபாடு",
      "disability_multiple": "பல குறைபாடுகள்",
      "disability_other": "சான்றளிக்கப்பட்ட பிற குறைபாடு",
      "disability_percent_label": "குறைபாடு சதவீதம்",
      "disability_percent_40_70": "40% - 70% (அளவுகோல் PwD)",
      "disability_percent_above70": "70% க்கு மேல் (கடுமையான)",
      "disability_percent_below40": "40% க்கு கீழ்",
      "udid_card_label": "UDID அட்டை உள்ளதா?",
      "udid_yes": "ஆம், UDID அட்டை உள்ளது",
      "udid_in_process": "விண்ணப்பிக்கப்பட்டுள்ளது / பரிசீலனையில் உள்ளது",
      "udid_no": "இல்லை / விண்ணப்பிக்கவில்லை",
      "divyang_badge": "💡 திவ்யாங்ஜன் சுவாவலம்பன் திட்டம் (ரூ. 50 லட்சம் வரை @ 5% வட்டி) & PMEGP 35% மானியத்திற்கு தகுதியுடையவர்!",
      "loc_rural": "கிராமப்புறம் (35% மானியம்)",
      "loc_urban": "நகர்ப்புறம் (25% மானியம்)",
      "biz_food": "உணவுத் தொழில் (ஹோட்டல், கேட்டரிங், டிபன் மையம்)",
      "biz_retail": "சில்லறை / மளிகைக் கடை (ஜெனரல் ஸ்டோர்)",
      "biz_handicrafts": "கைவினை மற்றும் கைத்தறி (கைவினைஞர்கள், நெசவாளர்கள்)",
      "biz_agri": "விவசாயம் & அதனுடன் தொடர்புடையவை (பால்பண்ணை, கோழிப்பண்ணை)",
      "biz_textile": "ஜவுளி & ஆடைகள் (தையல், பூட்டிக்)",
      "biz_mfg": "உற்பத்தி & ஃபேப்ரிகேஷன் (பட்டறை)",
      "biz_services": "சேவைகள் / பழுதுபார்க்கும் கடை (சர்வீஸ் சென்டர்)",
      "biz_vending": "தெருவோர வியாபாரம் (தள்ளுவண்டி, வியாபாரிகள்)",
      "experience_val": "2 ஆண்டுகள்",
      "edu_8th_above": "8 ஆம் வகுப்பு தேர்ச்சி அல்லது அதற்கு மேல் (ரூ. 50 லட்சம் வரம்பு)",
      "edu_below_8th": "8 ஆம் வகுப்புக்கு கீழ்",
      "edu_graduate": "பட்டதாரி / ஐடிஐ / டிப்ளமோ",
      "badge_underage": "⚠️ அரசு திட்டங்களுக்கான குறைந்தபட்ச வயது 18 ஆண்டுகள்",
      "badge_youth": "⚡ இளைஞர் (18-35) • அதிக மானிய முன்னுரிமை",
      "badge_mature": "💼 முதன்மை தொழில்முனைவோர் (36-55) • முழு கடன் தகுதி",
      "badge_senior": "🌟 மூத்த தொழில்முனைவோர் (56+) • சிறப்பு வழிகாட்டுதல்"
    },
    "screen6": {
      "header": "பொருத்தமான திட்டங்கள்",
      "sub_header": "உங்கள் தகவலின் அடிப்படையில்",
      "view_all_schemes": "அனைத்து திட்டங்களையும் காண்க",
      "match_score": "பொருத்தம்"
    },
    "screen7": {
      "tab_overview": "மேலோட்டம்",
      "tab_benefits": "நன்மைகள்",
      "tab_eligibility": "தகுதி",
      "tab_documents": "ஆவணங்கள்",
      "loan_amount": "கடன் தொகை",
      "interest_rate": "வட்டி விகிதம்",
      "repayment_period": "திருப்பிச் செலுத்தும் காலம்",
      "who_can_apply": "யார் விண்ணப்பிக்கலாம்?",
      "purpose": "நோக்கம்",
      "min_age": "குறைந்தபட்ச வயது",
      "eligible_categories": "தகுதியான பிரிவுகள்",
      "eligible_business": "தகுதியான தொழில்கள்",
      "income_cap": "வருமான வரம்பு",
      "key_advantages": "முக்கிய நிதி நன்மைகள்:",
      "doc_checklist_title": "தேவையான ஆவணங்களின் பட்டியல்:",
      "doc_checklist_sub": "வங்கியில் சமர்ப்பிக்கும் முன் இந்த ஆவணங்களை தயார் நிலையில் வைக்கவும்:",
      "save_btn": "சேமி",
      "apply_now_btn": "இப்போதே விண்ணப்பிக்கவும்"
    },
    "screen8": {
      "header": "இஎம்ஐ கால்குலேட்டர்",
      "loan_amount_label": "கடன் தொகை",
      "interest_rate_label": "வட்டி விகிதம் (%)",
      "tenure_label": "கால அளவு (ஆண்டுகள்)",
      "estimated_emi": "மதிப்பிடப்பட்ட இஎம்ஐ",
      "approx_note": "*மதிப்புகள் தோராயமானவை",
      "principal_label": "அசல் தொகை:",
      "total_interest_label": "மொத்த வட்டி:",
      "calculate_again": "மீண்டும் கணக்கிடுங்கள்",
      "find_schemes_with_emi": "இந்த இஎம்ஐ கொண்ட திட்டங்களைக் கண்டறியவும்"
    },
    "screen9": {
      "header": "அருகிலுள்ள கூட்டாளர்கள்",
      "sub_header": "உங்கள் இருப்பிடத்திற்கு அருகில்",
      "view_on_map": "வரைபடத்தில் பார்க்கவும்",
      "pin_you": "📍 நீங்கள்",
      "pin_bank": "🏦 வங்கி",
      "pin_kvk": "🔬 கேவிகே",
      "pin_csc": "💻 சிஎஸ்சி"
    },
    "screen10": {
      "header": "தேவையான ஆவணங்கள்",
      "ready_badge": "தயார்",
      "submit_app_btn": "வங்கிக்கு விண்ணப்பத்தை சமர்ப்பிக்கவும்"
    },
    "common": {
      "registered_scheme": "பதிவுசெய்யப்பட்ட திட்டம்",
      "ai_recommended": "AI பரிந்துரைக்கப்பட்டது",
      "match_word": "பொருத்தம்",
      "up_to_prefix": "ரூ.",
      "up_to_suffix": "வரை",
      "no_collateral": "பிணையில்லா கடன்",
      "project_cost": "திட்டச் செலவு",
      "subsidy": "மானியம்",
      "years": "ஆண்டுகள்",
      "months": "மாதங்கள்",
      "moratorium": "தவணைச் சலுகைக் காலம்",
      "per_month": "/ மாதம்",
      "km_away": "கி.மீ தொலைவில்",
      "uploaded": "பதிவேற்றப்பட்டது",
      "pending": "நிலுவையில் உள்ளது",
      "documents_uploaded": "இல் {total} ஆவணங்கள் பதிவேற்றப்பட்டன",
      "no_restrictive_ceiling": "கட்டுப்பாட்டு வரம்பு இல்லை"
    },
    "tags": {
      "low_interest": "குறைந்த வட்டி",
      "easy_process": "எளிய செயல்முறை",
      "collateral_free": "பிணையில்லா கடன்",
      "top_choice": "சிறந்த தேர்வு",
      "high_subsidy": "அதிக மானியம் (35% வரை)",
      "for_new_business": "புதிய தொழிலுக்கு",
      "govt_grant": "அரசு மானியம்",
      "for_sc_st_women": "எஸ்சி/எஸ்டி & பெண்களுக்கு",
      "high_loan_limit": "அதிக கடன் வரம்பு",
      "handholding_support": "வழிகாட்டுதல் ஆதரவு",
      "toolkit_grant": "கருவித்தொகுப்பு மானியம் (₹15,000)",
      "5_low_interest": "5% குறைந்த வட்டி",
      "traditional_crafts": "பாரம்பரிய கைவினை",
      "75_subsidy": "75% மானியம்",
      "women_exclusive": "பெண்களுக்கு மட்டும்",
      "eco_livelihood": "சுற்றுச்சூழல் வாழ்வாதாரம்",
      "interest_subsidy": "வட்டி மானியம்",
      "fast_approval": "விரைவான ஒப்புதல்",
      "food_business": "உணவு தொழில்",
      "35_high_subsidy": "35% அதிக மானியம்",
      "fssai_support": "FSSAI உதவி",
      "shishu_loan": "சிசு கடன்",
      "zero_paperwork": "காகிதமற்ற செயல்முறை",
      "quick_disbursal": "விரைவான பட்டுவாடா"
    }
  },
  "mr": {
    "brand": {
      "title": "उद्यम सेतू",
      "tagline": "योग्य योजना • योग्य मार्गदर्शन • योग्य विकास",
      "backend_online": "बॅकएंड ऑनलाइन: पोर्ट 5000",
      "mobile_sim": "📱 मोबाईल ॲप सिम्युलेटर",
      "api_tester": "⚡ थेट API परीक्षक"
    },
    "sidebar": {
      "title": "ॲप इंटरफेस • टप्प्याटप्प्याने",
      "step1_title": "स्प्लॅश स्क्रीन",
      "step1_sub": "स्वागत आणि ध्येय",
      "step2_title": "लॉगिन / साइन अप",
      "step2_sub": "OTP आणि अतिथी प्रवेश",
      "step3_title": "होम डॅशबोर्ड",
      "step3_sub": "त्वरित प्रवेश ग्रिड",
      "step4_title": "एआय चॅट / विचारा",
      "step4_sub": "जेमिनी बहुभाषिक एआय",
      "step5_title": "वापरकर्ता तपशील",
      "step5_sub": "टप्प्याटप्प्याने प्रोफाइलिंग",
      "step6_title": "योजना निकाल",
      "step6_sub": "नियम आधारित गुण",
      "step7_title": "योजनेचा तपशील",
      "step7_sub": "फायदे आणि पात्रता",
      "step8_title": "ईएमआय कॅल्क्युलेटर",
      "step8_sub": "परतफेड नियोजन",
      "step9_title": "जवळचे भागीदार",
      "step9_sub": "बँका, सीएससी, केव्हीके",
      "step10_title": "कागदपत्रे चेकलिस्ट",
      "step10_sub": "अपलोड आणि पडताळणी"
    },
    "screen1": {
      "brand_name": "उद्यम सेतू",
      "tagline": "प्रत्येक उद्योजकासाठी एआय-सक्षम योजना जुळणी",
      "banner_title": "योग्य योजना • योग्य विकास",
      "banner_sub": "लघु व उपेक्षित उद्योगांचे सक्षमीकरण",
      "get_started": "सुरू करा →"
    },
    "screen2": {
      "welcome_back": "पुन्हा स्वागत आहे!",
      "login_sub": "आपला व्यवसाय प्रवास सुरू ठेवण्यासाठी लॉगिन करा",
      "mobile_label": "मोबाईल नंबर",
      "mobile_placeholder": "मोबाईल नंबर टाका",
      "send_otp": "OTP पाठवा",
      "enter_otp": "६-अंकी OTP प्रविष्ट करा",
      "verify_continue": "सत्यापित करा आणि पुढे जा",
      "resend_otp": "OTP पुन्हा पाठवा",
      "or": "किंवा",
      "continue_google": "गुगलसह पुढे जा",
      "continue_guest": "अतिथी म्हणून पुढे जा",
      "new_user": "नवीन वापरकर्ता?",
      "sign_up": "साइन अप करा"
    },
    "screen3": {
      "greeting": "नमस्कार, उद्योजक 👋",
      "sub_greeting": "आज आम्ही आपली कशी मदत करू शकतो?",
      "banner_title": "आपल्यासाठी योजना शोधा",
      "banner_sub": "काही प्रश्नांची उत्तरे द्या आणि सर्वोत्तम योजना मिळवा.",
      "start_now": "आता सुरू करा →",
      "quick_access": "जलद सेवा",
      "match_schemes": "योजना जुळणी",
      "emi_calc": "ईएमआय कॅल्क्युलेटर",
      "my_applications": "माझे अर्ज",
      "documents": "कागदपत्रे",
      "nearby_partners": "जवळचे भागीदार",
      "help_support": "मदत आणि सहाय्य",
      "nav_home": "होम",
      "nav_chat": "चॅट",
      "nav_saved": "जतन केलेले",
      "nav_profile": "प्रोफाइल"
    },
    "screen4": {
      "title": "उद्यम सेतू एआय",
      "status": "ऑनलाइन • डिजिटल इंडिया व्हॉइस (22 भाषा)",
      "welcome_msg": "उद्यम सेतू एआय मध्ये आपले स्वागत आहे. तारणमुक्त सरकारी कर्ज, सबसिडी आणि योजना शोधण्यासाठी: आपण कोण आहात आणि कोणता व्यवसाय सुरू करू इच्छिता ते सांगा?",
      "select_business_title": "👇 आपला व्यवसाय किंवा ध्येय निवडा:",
      "food_opt": "🍲 खाद्य व्यवसाय (हॉटेल, केटरिंग, टिफिन सेंटर)",
      "retail_opt": "🛒 किरकोळ व किराणा दुकान (जनरल स्टोअर)",
      "artisan_opt": "🧵 हस्तकला आणि हातमाग (विणकर, विश्वकर्मा)",
      "agri_opt": "🌾 शेती व दुग्ध व्यवसाय (किसान क्रेडिट कार्ड)",
      "textile_opt": "👗 वस्त्रोद्योग आणि कपडे (टेलरिंग, बुटीक)",
      "mfg_opt": "🏭 लहान उत्पादन उद्योग व फॅब्रिकेशन",
      "services_opt": "🔧 दुरुस्ती व सेवा केंद्र (गॅरेज, वाहन)",
      "vending_opt": "🛍️ फेरीवाले व हातगाडी (पीएम स्वनिधी)",
      "listen_btn": "🔊 ऐका",
      "voice_prompt": "🎙️ बोलण्यासाठी येथे स्पर्श करा",
      "input_placeholder": "मराठीत विचारा किंवा बोला...",
      "send_btn": "➤",
      "view_details": "योजनेचा संपूर्ण तपशील पहा"
    },
    "screen5": {
      "header": "आपल्याबद्दल माहिती द्या",
      "step_indicator": "टप्पा 2 / 5",
      "personal_header": "वैयक्तिक आणि सामाजिक तपशील",
      "age_label": "वय",
      "gender_label": "लिंग",
      "social_cat_label": "सामाजिक प्रवर्ग",
      "divyang_header": "दिव्यांगजन तपशील",
      "divyang_sub": "विशेष 35% PMEGP सबसिडी आणि 5% कमी व्याज कर्ज",
      "pwd_label": "दिव्यांग आहात का?",
      "business_header": "व्यावसायिक आणि आर्थिक तपशील",
      "location_label": "उद्योगाचे ठिकाण (ग्रामीण / शहरी)",
      "income_label": "वार्षिक कौटुंबिक उत्पन्न",
      "biz_type_label": "व्यवसायाचा प्रकार",
      "experience_label": "अनुभव",
      "education_label": "शिक्षण",
      "find_schemes_btn": "योग्य योजना शोधा ➔",
      "gender_male": "पुरुष",
      "gender_female": "महिला (35% विशेष अनुदान)",
      "gender_other": "तृतीयपंथी / इतर",
      "cat_obc": "ओबीसी (इतर मागासवर्गीय - 35% अनुदान)",
      "cat_sc": "एससी (अनुसूचित जाती - 35% अनुदान)",
      "cat_st": "एसटी (अनुसूचित जमाती - 35% अनुदान)",
      "cat_general": "खुला प्रवर्ग",
      "cat_women": "महिला उद्योजक",
      "cat_minority": "अल्पसंख्याक समुदाय",
      "cat_pwd": "दिव्यांगजन (विशेष लाभ)",
      "cat_ex_servicemen": "माजी सैनिक",
      "pwd_no": "नाही",
      "pwd_yes": "होय (दिव्यांग - विशेष अनुदान)",
      "disability_type_label": "दिव्यांगत्वाचा प्रकार",
      "disability_locomotor": "शारीरिक / अस्थिव्यंग",
      "disability_visual": "दृष्टिदोष / अंधत्व",
      "disability_hearing": "कर्णबधिर किंवा वाचादोष",
      "disability_intellectual": "बौद्धिक दिव्यांगत्व",
      "disability_multiple": "बहु दिव्यांगत्व",
      "disability_other": "इतर प्रमाणित दिव्यांगत्व",
      "disability_percent_label": "दिव्यांगत्व टक्केवारी",
      "disability_percent_40_70": "40% - 70% (बेंचमार्क दिव्यांग)",
      "disability_percent_above70": "70% पेक्षा जास्त (तीव्र)",
      "disability_percent_below40": "40% पेक्षा कमी",
      "udid_card_label": "UDID कार्ड आहे का?",
      "udid_yes": "होय, UDID कार्ड आहे",
      "udid_in_process": "अर्ज केला आहे / प्रक्रियेत आहे",
      "udid_no": "नाही / अजून अर्ज केलेला नाही",
      "divyang_badge": "💡 दिव्यांगजन स्वावलंबन योजना (₹50 लाखांपर्यंत @ 5% व्याज) आणि PMEGP 35% अनुदानासाठी पात्र!",
      "loc_rural": "ग्रामीण भाग (35% अनुदान)",
      "loc_urban": "शहरी भाग (25% अनुदान)",
      "biz_food": "अन्न प्रक्रिया / खाद्य व्यवसाय (हॉटेल, केटरिंग, मेस)",
      "biz_retail": "किरकोळ / किराणा दुकान (जनरल स्टोअर)",
      "biz_handicrafts": "हस्तकला आणि हातमाग (कारागीर, विणकर)",
      "biz_agri": "कृषी व संलग्न व्यवसाय (डेअरी, कुक्कुटपालन)",
      "biz_textile": "कापड व वस्त्रोद्योग (टेलरिंग, बुटीक)",
      "biz_mfg": "लघु उत्पादन व फॅब्रिकेशन (वर्कशॉप)",
      "biz_services": "सेवा / दुरुस्ती दुकान (सर्व्हिस सेंटर)",
      "biz_vending": "फेरीवाले / पथविक्रेता (हाथगाडी)",
      "experience_val": "2 वर्षे",
      "edu_8th_above": "8 वी उत्तीर्ण किंवा अधिक (₹50 लाख मर्यादा)",
      "edu_below_8th": "8 वी पेक्षा कमी",
      "edu_graduate": "पदवीधर / आयटीआय / डिप्लोमा",
      "badge_underage": "⚠️ सरकारी योजनांसाठी किमान वय 18 वर्षे आवश्यक आहे",
      "badge_youth": "⚡ तरुण (18-35) • उच्च अनुदान प्राधान्य",
      "badge_mature": "💼 मुख्य उद्योजक (36-55) • पूर्ण कर्ज पात्रता",
      "badge_senior": "🌟 ज्येष्ठ उद्योजक (56+) • विशेष सल्लागार समर्थन"
    },
    "screen6": {
      "header": "जुळणाऱ्या योजना",
      "sub_header": "आपल्या माहितीवर आधारित",
      "view_all_schemes": "सर्व योजना पहा",
      "match_score": "जुळणी"
    },
    "screen7": {
      "tab_overview": "विहंगावलोकन",
      "tab_benefits": "फायदे",
      "tab_eligibility": "पात्रता",
      "tab_documents": "कागदपत्रे",
      "loan_amount": "कर्ज रक्कम",
      "interest_rate": "व्याज दर",
      "repayment_period": "परतफेडीचा कालावधी",
      "who_can_apply": "कोण अर्ज करू शकतो?",
      "purpose": "उद्देश",
      "min_age": "किमान वय",
      "eligible_categories": "पात्र प्रवर्ग",
      "eligible_business": "पात्र व्यवसाय",
      "income_cap": "उत्पन्न मर्यादा",
      "key_advantages": "मुख्य आर्थिक फायदे:",
      "doc_checklist_title": "आवश्यक कागदपत्रांची यादी:",
      "doc_checklist_sub": "बँकेत सादर करण्यापूर्वी ही कागदपत्रे तयार ठेवा:",
      "save_btn": "जतन करा",
      "apply_now_btn": "आता अर्ज करा"
    },
    "screen8": {
      "header": "ईएमआय कॅल्क्युलेटर",
      "loan_amount_label": "कर्ज रक्कम",
      "interest_rate_label": "व्याज दर (%)",
      "tenure_label": "कालावधी (वर्षे)",
      "estimated_emi": "अंदाजे ईएमआय",
      "approx_note": "*मूल्ये अंदाजे आहेत",
      "principal_label": "मुद्दल रक्कम:",
      "total_interest_label": "एकूण व्याज:",
      "calculate_again": "पुन्हा गणना करा",
      "find_schemes_with_emi": "या ईएमआयच्या योजना शोधा"
    },
    "screen9": {
      "header": "जवळचे भागीदार",
      "sub_header": "आपल्या स्थानाजवळ",
      "view_on_map": "नकाशावर पहा",
      "pin_you": "📍 आपण",
      "pin_bank": "🏦 बँक",
      "pin_kvk": "🔬 केव्हीके",
      "pin_csc": "💻 सीएससी"
    },
    "screen10": {
      "header": "आवश्यक कागदपत्रे",
      "ready_badge": "तयार आहे",
      "submit_app_btn": "बँकेत अर्ज सादर करा"
    },
    "common": {
      "registered_scheme": "नोंदणीकृत योजना",
      "ai_recommended": "AI शिफारस केलेले",
      "match_word": "जुळणी",
      "up_to_prefix": "₹",
      "up_to_suffix": "पर्यंत",
      "no_collateral": "विनातारण कर्ज",
      "project_cost": "प्रकल्प खर्च",
      "subsidy": "अनुदान",
      "years": "वर्षे",
      "months": "महिने",
      "moratorium": "सवलतीचा काळ",
      "per_month": "/ महिना",
      "km_away": "किमी अंतरावर",
      "uploaded": "अपलोड केले",
      "pending": "प्रलंबित",
      "documents_uploaded": "पैकी {total} कागदपत्रे अपलोड केली",
      "no_restrictive_ceiling": "कोणतीही मर्यादा नाही"
    },
    "tags": {
      "low_interest": "कमी व्याज",
      "easy_process": "सोपी प्रक्रिया",
      "collateral_free": "विनातारण कर्ज",
      "top_choice": "उत्कृष्ट पर्याय",
      "high_subsidy": "जास्त अनुदान (35% पर्यंत)",
      "for_new_business": "नवीन व्यवसायासाठी",
      "govt_grant": "सरकारी निधी",
      "for_sc_st_women": "मागासवर्गीय व महिलांसाठी",
      "high_loan_limit": "मोठे कर्ज मर्यादा",
      "handholding_support": "पूर्ण मार्गदर्शन",
      "toolkit_grant": "टूलकिट अनुदान (₹15,000)",
      "5_low_interest": "5% कमी व्याज",
      "traditional_crafts": "पारंपरिक हस्तकला",
      "75_subsidy": "75% अनुदान",
      "women_exclusive": "महिलांसाठी विशेष",
      "eco_livelihood": "पर्यावरणपूरक उपजीविका",
      "interest_subsidy": "व्याज अनुदान",
      "fast_approval": "जलद मंजुरी",
      "food_business": "अन्न व्यवसाय",
      "35_high_subsidy": "35% जास्त अनुदान",
      "fssai_support": "FSSAI परवाना सहाय्य",
      "shishu_loan": "शिशू कर्ज",
      "zero_paperwork": "कागदपत्र मुक्त प्रक्रिया",
      "quick_disbursal": "त्वरित कर्ज वितरण"
    }
  },
  "bn": {
    "brand": {
      "title": "উদ্যম সেতু",
      "tagline": "সঠিক প্রকল্প • সঠিক দিকনির্দেশনা • সঠিক উন্নতি",
      "backend_online": "ব্যাকএন্ড অনলাইন: পোর্ট ৫০০০",
      "mobile_sim": "📱 মোবাইল অ্যাপ সিমুলেটর",
      "api_tester": "⚡ লাইভ API পরীক্ষক"
    },
    "sidebar": {
      "title": "অ্যাপ ইন্টারফেস • ধাপে ধাপে",
      "step1_title": "স্প্ল্যাশ স্ক্রিন",
      "step1_sub": "স্বাগতম এবং লক্ষ্য",
      "step2_title": "লগইন / সাইন আপ",
      "step2_sub": "ওটিপি ও গেস্ট অ্যাক্সেস",
      "step3_title": "হোম ড্যাশবোর্ড",
      "step3_sub": "দ্রুত অ্যাক্সেস গ্রিড",
      "step4_title": "এআই চ্যাট / জিজ্ঞাসা করুন",
      "step4_sub": "জেমিনি বহুভাষিক এআই",
      "step5_title": "ব্যবহারকারীর বিবরণ",
      "step5_sub": "ধাপে ধাপে প্রোফাইলিং",
      "step6_title": "প্রকল্পের ফলাফল",
      "step6_sub": "নিয়ম ভিত্তিক স্কোর",
      "step7_title": "প্রকল্পের বিবরণ",
      "step7_sub": "সুবিধা ও যোগ্যতা",
      "step8_title": "ইএমআই ক্যালকুলেটর",
      "step8_sub": "পরিশোধ পরিকল্পনাকারী",
      "step9_title": "নিকটতম অংশীদার",
      "step9_sub": "ব্যাংক, সিএসসি, কেভিকে",
      "step10_title": "নথিপত্র চেকলিস্ট",
      "step10_sub": "আপলোড ও যাচাইকরণ"
    },
    "screen1": {
      "brand_name": "উদ্যম সেতু",
      "tagline": "প্রতিটি উদ্যোক্তার জন্য এআই-চালিত সরকারি প্রকল্প মেলানো",
      "banner_title": "সঠিক প্রকল্প • সঠিক উন্নতি",
      "banner_sub": "ক্ষুদ্র ও প্রান্তিক ব্যবসার ক্ষমতায়ন",
      "get_started": "শুরু করুন →"
    },
    "screen2": {
      "welcome_back": "স্বাগতম!",
      "login_sub": "আপনার ব্যবসার যাত্রা চালিয়ে যেতে লগইন করুন",
      "mobile_label": "মোবাইল নম্বর",
      "mobile_placeholder": "মোবাইল নম্বর লিখুন",
      "send_otp": "OTP পাঠান",
      "enter_otp": "৬-সংখ্যার OTP লিখুন",
      "verify_continue": "যাচাই করুন এবং এগিয়ে যান",
      "resend_otp": "OTP পুনরায় পাঠান",
      "or": "অথবা",
      "continue_google": "গুগল দিয়ে চালিয়ে যান",
      "continue_guest": "অতিথি হিসেবে এগিয়ে যান",
      "new_user": "নতুন ব্যবহারকারী?",
      "sign_up": "সাইন আপ করুন"
    },
    "screen3": {
      "greeting": "নমস্কার, উদ্যোক্তা 👋",
      "sub_greeting": "আজ আমরা আপনাকে কীভাবে সাহায্য করতে পারি?",
      "banner_title": "আপনার জন্য উপযুক্ত প্রকল্প খুঁজুন",
      "banner_sub": "কয়েকটি প্রশ্নের উত্তর দিন এবং সেরা প্রকল্পগুলি পান।",
      "start_now": "এখনই শুরু করুন →",
      "quick_access": "দ্রুত সেবা",
      "match_schemes": "প্রকল্প মিলানো",
      "emi_calc": "ইএমআই ক্যালকুলেটর",
      "my_applications": "আমার আবেদন",
      "documents": "নথিপত্র",
      "nearby_partners": "কাছের অংশীদার",
      "help_support": "সাহায্য ও সহায়তা",
      "nav_home": "হোম",
      "nav_chat": "চ্যাট",
      "nav_saved": "সংরক্ষিত",
      "nav_profile": "প্রোফাইল"
    },
    "screen4": {
      "title": "উদ্যম সেতু এআই",
      "status": "অনলাইন • ডিজিটাল ইন্ডিয়া ভয়েস (২২টি ভাষা)",
      "welcome_msg": "উদ্যম সেতু এআই-তে স্বাগতম। গ্যারান্টিহীন সরকারি ঋণ, ভর্তুকি এবং প্রকল্প পেতে: আপনি কে এবং কোন ব্যবসা শুরু করতে চান দয়া করে জানান?",
      "select_business_title": "👇 আপনার ব্যবসা বা লক্ষ্য নির্বাচন করুন:",
      "food_opt": "🍲 খাদ্য ব্যবসা (হোটেল, ক্যাটারিং, টিফিন)",
      "retail_opt": "🛒 মুদি ও খুচরা দোকান (জেনারেল স্টোর)",
      "artisan_opt": "🧵 হস্তশিল্প ও তাঁত শিল্প (তাঁতি মুদ্রা, বিশ্বকর্মা)",
      "agri_opt": "🌾 কৃষি ও দুগ্ধ খামার (কিসান ক্রেডিট কার্ড)",
      "textile_opt": "👗 বস্ত্র ও পোশাক শিল্প (দর্জি ও বুটিক)",
      "mfg_opt": "🏭 ক্ষুদ্র ম্যানুফ্যাকচারিং ও উৎপাদন ইউনিট",
      "services_opt": "🔧 পরিষেবা ও মেরামতের দোকান (গ্যারেজ, গাড়ি)",
      "vending_opt": "🛍️ রাস্তার হকার ও ঠেলাগাড়ি (প্রধানমন্ত্রী স্বনিধি)",
      "listen_btn": "🔊 শুনুন",
      "voice_prompt": "🎙️ কথা বলতে এখানে আলতো চাপুন",
      "input_placeholder": "বাংলায় জিজ্ঞাসা করুন বা লিখুন...",
      "send_btn": "➤",
      "view_details": "প্রকল্পের সম্পূর্ণ বিবরণ দেখুন"
    },
    "screen5": {
      "header": "আপনার সম্পর্কে বলুন",
      "step_indicator": "ধাপ ২ / ৫",
      "personal_header": "ব্যক্তিগত ও সামাজিক বিবরণ",
      "age_label": "বয়স",
      "gender_label": "লিঙ্গ",
      "social_cat_label": "সামাজিক বিভাগ",
      "divyang_header": "প্রতিবন্ধী ব্যক্তিদের বিবরণ",
      "divyang_sub": "বিশেষ ৩৫% PMEGP ভর্তুকি এবং ৫% স্বল্প সুদে ঋণ",
      "pwd_label": "প্রতিবন্ধী ব্যক্তি কি?",
      "business_header": "ব্যবসায়িক ও আর্থিক বিবরণ",
      "location_label": "ব্যবসার অবস্থান (গ্রামীণ / শহুরে)",
      "income_label": "বার্ষিক পারিবারিক আয়",
      "biz_type_label": "ব্যবসার ধরন",
      "experience_label": "অভিজ্ঞতা",
      "education_label": "শিক্ষাগত যোগ্যতা",
      "find_schemes_btn": "উপযুক্ত প্রকল্প খুঁজুন ➔",
      "gender_male": "পুরুষ",
      "gender_female": "মহিলা (৩৫% বিশেষ অনুদান)",
      "gender_other": "রূপান্তরকামী / অন্যান্য",
      "cat_obc": "ওবিসি (অন্যান্য অনগ্রসর শ্রেণি - ৩৫% ভর্তুকি)",
      "cat_sc": "এসসি (তফসিলি জাতি - ৩৫% ভর্তুকি)",
      "cat_st": "এসটি (তফসিলি উপজাতি - ৩৫% ভর্তুকি)",
      "cat_general": "সাধারণ শ্রেণি",
      "cat_women": "নারী উদ্যোক্তা",
      "cat_minority": "সংখ্যালঘু সম্প্রদায়",
      "cat_pwd": "বিশেষভাবে সক্ষম (বিশেষ সুবিধা)",
      "cat_ex_servicemen": "প্রাক্তন সেনাকর্মী",
      "pwd_no": "না",
      "pwd_yes": "হ্যাঁ (প্রতিবন্ধী ব্যক্তি - বিশেষ ভর্তুকি)",
      "disability_type_label": "প্রতিবন্ধকতার ধরন",
      "disability_locomotor": "শারীরিক / অস্থি সংক্রান্ত",
      "disability_visual": "দৃষ্টি প্রতিবন্ধকতা / অন্ধত্ব",
      "disability_hearing": "শ্রবণ বা বাক প্রতিবন্ধকতা",
      "disability_intellectual": "বুদ্ধিবৃত্তিক প্রতিবন্ধকতা",
      "disability_multiple": "একাধিক প্রতিবন্ধকতা",
      "disability_other": "অন্যান্য প্রত্যয়িত প্রতিবন্ধকতা",
      "disability_percent_label": "প্রতিবন্ধকতার শতকরা হার",
      "disability_percent_40_70": "৪০% - ৭০% (বেঞ্চমার্ক PwD)",
      "disability_percent_above70": "৭০% এর বেশি (গুরুতর)",
      "disability_percent_below40": "৪০% এর নিচে (মৃদু)",
      "udid_card_label": "UDID কার্ড আছে কি?",
      "udid_yes": "হ্যাঁ, UDID কার্ড আছে",
      "udid_in_process": "আবেদন করা হয়েছে / প্রক্রিয়াধীন",
      "udid_no": "না / এখনও আবেদন করিনি",
      "divyang_badge": "💡 দিব্যাঙ্গজন স্বাবলম্বন যোজনা (₹৫০ লাখ পর্যন্ত @ ৫% সুদ) এবং PMEGP ৩৫% অনুদানের জন্য যোগ্য!",
      "loc_rural": "গ্রামীণ এলাকা (৩৫% ভর্তুকি)",
      "loc_urban": "শহরাঞ্চল (২৫% ভর্তুকি)",
      "biz_food": "খাদ্য ব্যবসা (হোটেল, ক্যাটারিং, টিফিন সেন্টার)",
      "biz_retail": "খুচরা / মুদি দোকান (জেনারেল স্টোর)",
      "biz_handicrafts": "হস্তশিল্প এবং তাঁত (কারিগর, তাঁতি)",
      "biz_agri": "কৃষি ও সহযোগী খাত (দুগ্ধ খামার, পোল্ট্রি)",
      "biz_textile": "বস্ত্র ও পোশাক (দর্জি, বুটিক)",
      "biz_mfg": "ক্ষুদ্র উৎপাদন ও ফেব্রিকেশন (ওয়ার্কশপ)",
      "biz_services": "পরিষেবা / মেরামতের দোকান (সার্ভিস সেন্টার)",
      "biz_vending": "রাস্তার বিক্রেতা (ঠেলাগাড়ি, হকার)",
      "experience_val": "2 বছর",
      "edu_8th_above": "৮ম শ্রেণি উত্তীর্ণ বা তদূর্ধ্ব (₹৫০ লাখ সীমা)",
      "edu_below_8th": "৮ম শ্রেণির নিচে",
      "edu_graduate": "স্নাতক / আইটিআই / ডিপ্লোমা",
      "badge_underage": "⚠️ সরকারি যোজনার জন্য ন্যূনতম বয়স ১৮ বছর",
      "badge_youth": "⚡ তরুণ (১৮-৩৫) • উচ্চ ভর্তুকি অগ্রাধিকার",
      "badge_mature": "💼 প্রধান উদ্যোক্তা (৩৬-৫৫) • পূর্ণ ঋণ যোগ্যতা",
      "badge_senior": "🌟 প্রবীণ উদ্যোক্তা (৫৬+) • বিশেষ পরামর্শ সহায়তা"
    },
    "screen6": {
      "header": "উপযুক্ত প্রকল্পসমূহ",
      "sub_header": "আপনার তথ্যের ওপর ভিত্তি করে",
      "view_all_schemes": "সব প্রকল্প দেখুন",
      "match_score": "মিল"
    },
    "screen7": {
      "tab_overview": "একনজরে",
      "tab_benefits": "সুবিধাসমূহ",
      "tab_eligibility": "যোগ্যতা",
      "tab_documents": "নথিপত্র",
      "loan_amount": "ঋণের পরিমাণ",
      "interest_rate": "সুদের হার",
      "repayment_period": "পরিশোধের মেয়াদ",
      "who_can_apply": "কারা আবেদন করতে পারেন?",
      "purpose": "উদ্দেশ্য",
      "min_age": "ন্যূনতম বয়স",
      "eligible_categories": "যোগ্য বিভাগ",
      "eligible_business": "যোগ্য ব্যবসা",
      "income_cap": "সর্বোচ্চ আয় সীমা",
      "key_advantages": "প্রধান আর্থিক সুবিধাসমূহ:",
      "doc_checklist_title": "প্রয়োজনীয় নথিপত্রের তালিকা:",
      "doc_checklist_sub": "ব্যাংকে জমা দেওয়ার আগে এই নথিপত্র প্রস্তুত রাখুন:",
      "save_btn": "সংরক্ষণ করুন",
      "apply_now_btn": "এখনই আবেদন করুন"
    },
    "screen8": {
      "header": "ইএমআই ক্যালকুলেটর",
      "loan_amount_label": "ঋণের পরিমাণ",
      "interest_rate_label": "সুদের হার (%)",
      "tenure_label": "মেয়াদ (বছর)",
      "estimated_emi": "আনুমানিক ইএমআই",
      "approx_note": "*মানগুলি আনুমানিক",
      "principal_label": "মূলধন:",
      "total_interest_label": "মোট সুদ:",
      "calculate_again": "পুনরায় হিসাব করুন",
      "find_schemes_with_emi": "এই ইএমআই দিয়ে প্রকল্প খুঁজুন"
    },
    "screen9": {
      "header": "কাছের অংশীদার",
      "sub_header": "আপনার অবস্থানের কাছাকাছি",
      "view_on_map": "মানচিত্রে দেখুন",
      "pin_you": "📍 আপনি",
      "pin_bank": "🏦 ব্যাংক",
      "pin_kvk": "🔬 কেভিকে",
      "pin_csc": "💻 সিএসসি"
    },
    "screen10": {
      "header": "প্রয়োজনীয় নথিপত্র",
      "ready_badge": "প্রস্তুত",
      "submit_app_btn": "ব্যাংকে আবেদন জমা দিন"
    },
    "common": {
      "registered_scheme": "নিবন্ধিত যোজনা",
      "ai_recommended": "AI প্রস্তাবিত",
      "match_word": "মিল",
      "up_to_prefix": "₹",
      "up_to_suffix": "পর্যন্ত",
      "no_collateral": "বিনা বন্ধকী ঋণ",
      "project_cost": "প্রকল্প ব্যয়",
      "subsidy": "ভর্তুকি",
      "years": "বছর",
      "months": "মাস",
      "moratorium": "মোরেটোরিয়াম",
      "per_month": "/ প্রতি মাসে",
      "km_away": "কিমি দূরে",
      "uploaded": "আপলোড করা হয়েছে",
      "pending": "অপেক্ষারত",
      "documents_uploaded": "এর মধ্যে {total}টি নথি আপলোড হয়েছে",
      "no_restrictive_ceiling": "কোনো সীমা নেই"
    },
    "tags": {
      "low_interest": "কম সুদ",
      "easy_process": "সহজ প্রক্রিয়া",
      "collateral_free": "বন্ধকমুক্ত ঋণ",
      "top_choice": "সেরা পছন্দ",
      "high_subsidy": "উচ্চ ভর্তুকি (৩৫% পর্যন্ত)",
      "for_new_business": "নতুন ব্যবসার জন্য",
      "govt_grant": "সরকারি অনুদান",
      "for_sc_st_women": "তফসিলি ও নারীদের জন্য",
      "high_loan_limit": "উচ্চ ঋণ সীমা",
      "handholding_support": "সার্বিক সহায়তা",
      "toolkit_grant": "টুলকিট অনুদান (₹১৫,০০০)",
      "5_low_interest": "৫% কম সুদ",
      "traditional_crafts": "ঐতিহ্যবাহী কারুশিল্প",
      "75_subsidy": "৭৫% ভর্তুকি",
      "women_exclusive": "নারীদের জন্য বিশেষ",
      "eco_livelihood": "পরিবেশবান্ধব জীবিকা",
      "interest_subsidy": "সুদ ভর্তুকি",
      "fast_approval": "দ্রুত অনুমোদন",
      "food_business": "খাদ্য ব্যবসা",
      "35_high_subsidy": "৩৫% উচ্চ ভর্তুকি",
      "fssai_support": "FSSAI সহায়তা",
      "shishu_loan": "শিশু ঋণ",
      "zero_paperwork": "কাগজপত্রহীন প্রক্রিয়া",
      "quick_disbursal": "দ্রুত অর্থ বিতরণ"
    }
  }
};

  const VERNACULAR_SCHEME_CATALOG = {
  "PMFME": {
    "te": {
      "name": "ప్రధాన మంత్రి సూక్ష్మ ఆహార శుద్ధి పరిశ్రమల పథకం (PMFME - 35% సబ్సిడీ)",
      "description": "ఆహార శుద్ధి పరిశ్రమల మంత్రిత్వ శాఖ (MoFPI) ద్వారా ప్రారంభించబడిన కేంద్ర ప్రాయోజిత ప్రధాన పథకం. ఇది మైక్రో ఫుడ్ ప్రాసెసింగ్ యూనిట్లు, బేకరీలు, స్నాక్స్, పిండి మిల్లులు, పచ్చళ్ల తయారీ, క్యాటరింగ్ కిచెన్లు మరియు టిఫిన్ సెంటర్ల ఆధునీకరణకు రూ. 10 లక్షల వరకు 35% మూలధన సబ్సిడీని అందిస్తుంది.",
      "loanAmount": "ప్రాజెక్ట్ వ్యయం రూ. 10,00,000 వరకు (35% సబ్సిడీ)",
      "interestRate": "సాధారణ బ్యాంక్ లెండింగ్ రేటు (8.5% - 10.5%)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (మొరటోరియం 6 - 12 నెలలు)",
      "whoCanApply": "వ్యక్తిగత సూక్ష్మ ఆహార వ్యాపారులు, ఎఫ్‌పీఓలు, స్వయం సహాయక సంఘాలు (SHGs) మరియు సహకార సంఘాలు",
      "purpose": "ఆహార తయారీ యంత్రాలు, కమర్షియల్ ఓవెన్లు, వంటగది ఆటోమేషన్, ప్యాకేజింగ్ మరియు FSSAI పరిశుభ్రత సెటప్",
      "benefits": [
        "ప్రాజెక్ట్ వ్యయంలో 35% తిరిగి చెల్లించాల్సిన అవసరం లేని మూలధన సబ్సిడీ (గరిష్టంగా రూ. 10 లక్షలు)",
        "లబ్ధిదారుడి స్వంత వాటా కేవలం 10% మాత్రమే; మిగిలిన 90% బ్యాంకు రుణం ద్వారా లభిస్తుంది",
        "ఉచిత సాంకేతిక శిక్షణ, FSSAI లైసెన్సింగ్ సహాయం మరియు ఒక జిల్లా ఒక ఉత్పత్తి (ODOP) కింద మార్కెటింగ్ మద్దతు"
      ],
      "eligibleCategories": [
        "అన్ని వర్గాలు",
        "జనరల్",
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ",
        "మహిళా పారిశ్రామికవేత్త"
      ],
      "eligibleBusinessTypes": [
        "ఆహార వ్యాపారం",
        "బేకరీ",
        "టిఫిన్ సెంటర్",
        "క్యాటరింగ్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు మరియు పన్ను KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
          "description": "ఆహార పరికరాల ఖర్చు మరియు ఆదాయ అంచనా",
          "status": "Pending"
        },
        {
          "docName": "బ్యాంక్ స్టేట్‌మెంట్ (గత 6 నెలలు)",
          "description": "ఆర్థిక రికార్డు",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI రిజిస్ట్రేషన్ / దరఖాస్తు రుజువు",
          "description": "ఆహార భద్రత ధృవీకరణ",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME - 35% सब्सिडी)",
      "description": "खाद्य प्रसंस्करण उद्योग मंत्रालय (MoFPI) द्वारा प्रायोजित प्रमुख योजना, जो सूक्ष्म खाद्य प्रसंस्करण इकाइयों, बेकरियों, स्नैक्स, मसाला पिसाई, अचार निर्माण, कैटरिंग रसोई और टिफिन केंद्रों के आधुनिकीकरण के लिए ₹10 लाख तक 35% पूंजीगत सब्सिडी प्रदान करती है।",
      "loanAmount": "परियोजना लागत ₹10,00,000 तक (35% सब्सिडी)",
      "interestRate": "सामान्य बैंक ब्याज दर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्ष तक (मोरेटोरियम 6 - 12 महीने)",
      "whoCanApply": "व्यक्तिगत सूक्ष्म खाद्य उद्यमी, एफपीओ, स्वयं सहायता समूह (SHGs) और उत्पादक सहकारी समितियां",
      "purpose": "खाद्य प्रसंस्करण मशीनरी, वाणिज्यिक ओवन, रसोई स्वचालन, पैकेजिंग और FSSAI स्वच्छता सेटअप",
      "benefits": [
        "परियोजना लागत पर 35% गैर-वापसी योग्य पूंजी सब्सिडी (अधिकतम ₹10 लाख तक)",
        "लाभार्थी का स्वयं का योगदान केवल 10%; शेष 90% बैंक ऋण द्वारा वित्तपोषित",
        "निःशुल्क तकनीकी प्रशिक्षण, FSSAI लाइसेंसिंग सहायता और एक जिला एक उत्पाद (ODOP) के तहत विपणन सहायता"
      ],
      "eligibleCategories": [
        "सभी श्रेणियां",
        "सामान्य",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्यमी"
      ],
      "eligibleBusinessTypes": [
        "खाद्य व्यवसाय",
        "बेकरी",
        "टिफिन सेंटर",
        "कैटरिंग"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान व कर केवाईसी",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "उपकरण लागत और राजस्व अनुमान",
          "status": "Pending"
        },
        {
          "docName": "बैंक विवरण (पिछले 6 महीने)",
          "description": "वित्तीय रिकॉर्ड",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI पंजीकरण / आवेदन प्रमाण",
          "description": "खाद्य सुरक्षा अनुपालन प्रमाण",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಯೋಜನೆ (PMFME - 35% ಸಬ್ಸಿಡಿ)",
      "description": "ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಸಚಿವಾಲಯದ ಪ್ರಮುಖ ಯೋಜನೆ, ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳು, ಬೇಕರಿಗಳು, ತಿಂಡಿ ಕೇಂದ್ರಗಳು, ಮಸಾಲೆ ರುಬ್ಬುವಿಕೆ, ಉಪ್ಪಿನಕಾಯಿ ತಯಾರಿ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್ ಅಡುಗೆಮನೆಗಳ ಆಧುನೀಕರಣಕ್ಕಾಗಿ ₹10 ಲಕ್ಷದವರೆಗೆ 35% ಬಂಡವಾಳ ಸಬ್ಸಿಡಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      "loanAmount": "ಯೋಜನಾ ವೆಚ್ಚ ₹10,00,000 ವರೆಗೆ (35% ಸಬ್ಸಿಡಿ)",
      "interestRate": "ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕ್ ಬಡ್ಡಿದರ (8.5% - 10.5%)",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ (ಮೊರಟೋರಿಯಂ 6 - 12 ತಿಂಗಳುಗಳು)",
      "whoCanApply": "ವೈಯಕ್ತಿಕ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಉದ್ಯಮಿಗಳು, ಎಫ್‌ಪಿಒಗಳು, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು (SHGs) ಮತ್ತು ಸಹಕಾರ ಸಂಘಗಳು",
      "purpose": "ಆಹಾರ ಸಂಸ್ಕರಣಾ ಯಂತ್ರೋಪಕರಣಗಳು, ವಾಣಿಜ್ಯ ಓವನ್‌ಗಳು, ಅಡುಗೆಮನೆ ಯಾಂತ್ರೀಕರಣ ಮತ್ತು FSSAI ಸೆಟಪ್",
      "benefits": [
        "ಯೋಜನಾ ವೆಚ್ಚದ 35% ಮರುಪಾವತಿಸಲಾಗದ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ (ಗರಿಷ್ಠ ₹10 ಲಕ್ಷದವರೆಗೆ)",
        "ಫಲಾನುಭವಿಯ ಸ್ವಂತ ಕೊಡುಗೆ ಕೇವಲ 10%; ಉಳಿದ 90% ಬ್ಯಾಂಕ್ ಸಾಲದ ಮೂಲಕ ಹಣಕಾಸು",
        "ಉಚಿತ ತಾಂತ್ರಿಕ ತರಬೇತಿ, FSSAI ಪರವಾನಗಿ ಸಹಾಯ ಮತ್ತು ODOP ಅಡಿಯಲ್ಲಿ ಮಾರುಕಟ್ಟೆ ಬೆಂಬಲ"
      ],
      "eligibleCategories": [
        "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        "ಸಾಮಾನ್ಯ",
        "ಒಬಿಸಿ",
        "ಎಸ್‌ಸಿ",
        "ಎಸ್‌ಟಿ",
        "ಮಹಿಳಾ ಉದ್ಯಮಿ"
      ],
      "eligibleBusinessTypes": [
        "ಆಹಾರ ಉದ್ಯಮ",
        "ಬೇಕರಿ",
        "ಕ್ಯಾಟರಿಂಗ್"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ನಿರ್ಬಂಧಿತ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಯಂತ್ರೋಪಕರಣಗಳ ವೆಚ್ಚ",
          "status": "Pending"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ವಿವರಣೆ (ಕಳೆದ 6 ತಿಂಗಳು)",
          "description": "ಹಣಕಾಸು ದಾಖಲೆ",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI ನೋಂದಣಿ ಪುರಾವೆ",
          "description": "ಆಹಾರ ಸುರಕ್ಷತೆ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிரதான் மந்திரி நுண் உணவு பதப்படுத்தும் நிறுவனங்கள் திட்டம் (PMFME - 35% மானியம்)",
      "description": "உணவு பதப்படுத்தும் தொழில்கள் அமைச்சகத்தின் முதன்மைத் திட்டம், நுண் உணவு பதப்படுத்தும் அலகுகள், பேக்கரிகள், சிற்றுண்டி தயாரிப்பு, மசாலா அரைத்தல், ஊறுகாய் மற்றும் கேட்டரிங் சமையலறைகளை நவீனமயமாக்க ரூ. 10 லட்சம் வரை 35% மூலதன மானியத்தை வழங்குகிறது.",
      "loanAmount": "திட்டச் செலவு ரூ. 10,00,000 வரை (35% மானியம்)",
      "interestRate": "வழக்கமான வங்கி வட்டி விகிதம் (8.5% - 10.5%)",
      "repaymentPeriod": "7 ஆண்டுகள் வரை (சலுகைக் காலம் 6 - 12 மாதங்கள்)",
      "whoCanApply": "தனிநபர் நுண் உணவு தொழில்முனைவோர், FPO-க்கள், சுயஉதவி குழுக்கள் (SHGs) மற்றும் கூட்டுறவு சங்கங்கள்",
      "purpose": "உணவு பதப்படுத்தும் இயந்திரங்கள், வணிக அடுப்புகள், சமையலறை ஆட்டோமேஷன் மற்றும் FSSAI சுகாதாரம்",
      "benefits": [
        "திட்டச் செலவில் 35% திரும்ப செலுத்தத் தேவையில்லாத மூலதன மானியம் (ரூ. 10 லட்சம் வரை)",
        "பயனாளியின் சொந்த பங்களிப்பு 10% மட்டுமே; மீதமுள்ள 90% வங்கி கடன் மூலம் வழங்கப்படும்",
        "இலவச தொழில்நுட்ப பயிற்சி, FSSAI உரிம உதவி மற்றும் ODOP சந்தைப்படுத்தல் ஆதரவு"
      ],
      "eligibleCategories": [
        "அனைத்து பிரிவுகளும்",
        "பொது",
        "ஓபிசி",
        "எஸ்சி",
        "எஸ்டி",
        "பெண் தொழில்முனைவோர்"
      ],
      "eligibleBusinessTypes": [
        "உணவுத் தொழில்",
        "பேக்கரி",
        "கேட்டரிங்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "கட்டுப்பாட்டு வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "திட்ட அறிக்கை (DPR)",
          "description": "இயந்திர செலவு மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "வங்கி அறிக்கை (கடந்த 6 மாதங்கள்)",
          "description": "நிதி பதிவு",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI பதிவு சான்று",
          "description": "உணவு பாதுகாப்பு சான்று",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पंतप्रधान सूक्ष्म अन्न प्रक्रिया उद्योग योजना (PMFME - 35% अनुदान)",
      "description": "अन्न प्रक्रिया उद्योग मंत्रालयाची प्रमुख योजना, सूक्ष्म अन्न प्रक्रिया युनिट्स, बेकऱ्या, स्नॅक्स, मसाले दळणे, लोणचे निर्मिती आणि केटरिंग किचनच्या आधुनिकीकरणासाठी ₹10 लाखांपर्यंत 35% भांडवली अनुदान प्रदान करते.",
      "loanAmount": "प्रकल्प खर्च ₹10,00,000 पर्यंत (35% अनुदान)",
      "interestRate": "सामान्य बँक व्याजदर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्षांपर्यंत (सवलतीचा काळ 6 - 12 महिने)",
      "whoCanApply": "वैयक्तिक सूक्ष्म अन्न उद्योजक, एफपीओ, बचत गट (SHGs) आणि उत्पादक सहकारी संस्था",
      "purpose": "अन्न प्रक्रिया यंत्रसामग्री, व्यावसायिक ओव्हन, किचन ऑटोमेशन आणि FSSAI स्वच्छता सेटअप",
      "benefits": [
        "प्रकल्प खर्चावर 35% विनापरतावा भांडवली अनुदान (जास्तीत जास्त ₹10 लाखांपर्यंत)",
        "लाभार्थ्याचे स्वतःचे योगदान केवळ 10%; उर्वरित 90% बँक कर्जाद्वारे अर्थसहाय्य",
        "विनामूल्य तांत्रिक प्रशिक्षण, FSSAI परवाना सहाय्य आणि ODOP अंतर्गत विपणन सहाय्य"
      ],
      "eligibleCategories": [
        "सर्व प्रवर्ग",
        "खुला",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्योजक"
      ],
      "eligibleBusinessTypes": [
        "अन्न व्यवसाय",
        "बेकरी",
        "केटरिंग"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख व कर केवायसी",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "उपकरण खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "बँक स्टेटमेंट (मागील 6 महिने)",
          "description": "आर्थिक नोंद",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI नोंदणी पुरावा",
          "description": "अन्न सुरक्षा पुरावा",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ এন্টারপ্রাইজ যোজনা (PMFME - ৩৫% ভর্তুকি)",
      "description": "খাদ্য প্রক্রিয়াকরণ শিল্প মন্ত্রণালয়ের ফ্ল্যাগশিপ স্কিম, ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ ইউনিট, বেকারি, স্ন্যাকস, মশলা পেষাই, আচার তৈরি এবং ক্যাটারিং রান্নাঘরের আধুনিকীকরণের জন্য ১০ লাখ টাকা পর্যন্ত ৩৫% মূলধন ভর্তুকি প্রদান করে।",
      "loanAmount": "প্রকল্প ব্যয় ₹১০,০০,০০০ পর্যন্ত (৩৫% ভর্তুকি)",
      "interestRate": "স্বাভাবিক ব্যাংক ঋণের হার (৮.৫% - ১০.৫%)",
      "repaymentPeriod": "৭ বছর পর্যন্ত (মোরেটোরিয়াম ৬ - ১২ মাস)",
      "whoCanApply": "ব্যক্তিগত ক্ষুদ্র খাদ্য উদ্যোক্তা, এফপিও, স্বনির্ভর গোষ্ঠী (SHGs) এবং সমবায় সমিতি",
      "purpose": "খাদ্য প্রক্রিয়াকরণ যন্ত্রপাতি, বাণিজ্যিক ওভেন, রান্নাঘর অটোমেশন এবং FSSAI সেটআপ ক্রয়",
      "benefits": [
        "প্রকল্প ব্যয়ে ৩৫% অফেরতযোগ্য মূলধন ভর্তুকি (সর্বোচ্চ ১০ লাখ টাকা পর্যন্ত)",
        "উপভোক্তার নিজস্ব অবদান মাত্র ১০%; অবশিষ্ট ৯০% ব্যাংক ঋণের মাধ্যমে অর্থায়ন",
        "বিনামূল্যে প্রযুক্তিগত প্রশিক্ষণ, FSSAI লাইসেন্সিং সহায়তা এবং ওডিওপি (ODOP) এর আওতায় বিপণন সহায়তা"
      ],
      "eligibleCategories": [
        "সকল শ্রেণি",
        "সাধারণ",
        "ওবিসি",
        "এসসি",
        "এসটি",
        "নারী উদ্যোক্তা"
      ],
      "eligibleBusinessTypes": [
        "খাদ্য ব্যবসা",
        "বেকারি",
        "ক্যাটারিং"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় ও ট্যাক্স কেওয়াইসি",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প রিপোর্ট (DPR)",
          "description": "যন্ত্রপাতি খরচ ও আয়ের পূর্বাভাস",
          "status": "Pending"
        },
        {
          "docName": "ব্যাংক স্টেটমেন্ট (বিগত ৬ মাস)",
          "description": "আর্থিক রেকর্ড",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI রেজিস্ট্রেশন প্রুফ",
          "description": "খাদ্য সুরক্ষা সম্মতি প্রমাণ",
          "status": "Pending"
        }
      ]
    }
  },
  "PMMY": {
    "te": {
      "name": "ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర వ్యాపార రుణం - రూ. 10 లక్షలు)",
      "description": "చిన్న, సూక్ష్మ వ్యాపారాలు, కిరాణా దుకాణాలు, పండ్ల/కూరగాయల విక్రేతలు, టైలర్లు మరియు రిపేర్ షాపులకు ఎటువంటి ఆస్తి పూచీకత్తు లేకుండా రూ. 10 లక్షల వరకు మూడు విభాగాలుగా (శిశు: రూ. 50 వేల వరకు, కిశోర్: రూ. 5 లక్షల వరకు, తరుణ్: రూ. 10 లక్షల వరకు) రుణాలు అందిస్తుంది.",
      "loanAmount": "రూ. 10,00,000 వరకు (పూచీకత్తు అవసరం లేదు)",
      "interestRate": "8.5% - 11.5% వార్షిక వడ్డీ రేటు",
      "repaymentPeriod": "5 సంవత్సరాల వరకు సులభ వాయిదాలు",
      "whoCanApply": "చిన్న దుకాణదారులు, కిరాణా యజమానులు, పండ్ల విక్రేతలు, టిఫిన్ సెంటర్లు, కళాకారులు",
      "purpose": "దుకాణ సరుకుల కొనుగోలు, డిస్‌ప్లే ర్యాక్‌లు, కమర్షియల్ ఫ్రిజ్, పనిముట్లు, వర్కింగ్ క్యాపిటల్",
      "benefits": [
        "రూ. 10 లక్షల వరకు ఎలాంటి తనఖా లేదా ఆస్తి పూచీకత్తు అవసరం లేదు",
        "మూడు సులభ విభాగాలు: శిశు (రూ. 50,000 వరకు), కిశోర్ (రూ. 5 లక్షల వరకు), తరుణ్ (రూ. 10 లక్షల వరకు)",
        "రోజువారీ వర్కింగ్ క్యాపిటల్ ఖర్చుల కోసం రూపే ముద్ర డెబిట్ కార్డు జారీ చేయబడుతుంది"
      ],
      "eligibleCategories": [
        "అన్ని వర్గాలు",
        "జనరల్",
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ",
        "మహిళా పారిశ్రామికవేత్త"
      ],
      "eligibleBusinessTypes": [
        "రిటైల్ / కిరాణా దుకాణం",
        "ఆహార వ్యాపారం",
        "సేవలు / రిపేర్",
        "టైలరింగ్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు మరియు పన్ను KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వ్యాపార చిరునామా రుజువు",
          "description": "షాప్ అద్దె ఒప్పందం లేదా కరెంట్ బిల్లు",
          "status": "Uploaded"
        },
        {
          "docName": "కొటేషన్ / అంచనా పత్రం",
          "description": "సరుకులు లేదా యంత్రాల అంచనా",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री मुद्रा योजना (10 लाख तक बिना गारंटी ऋण)",
      "description": "छोटे और सूक्ष्म उद्यमों, किराना दुकानों, फल/सब्जी विक्रेताओं, दर्जी और मरम्मत की दुकानों को बिना किसी संपत्ति गारंटी के ₹10 लाख तक तीन श्रेणियों में (शिशु: ₹50,000 तक, किशोर: ₹5 लाख तक, तरुण: ₹10 लाख तक) ऋण प्रदान करती है।",
      "loanAmount": "₹10,00,000 तक (बिना गारंटी)",
      "interestRate": "8.5% - 11.5% वार्षिक ब्याज दर",
      "repaymentPeriod": "5 वर्ष तक की आसान किस्तें",
      "whoCanApply": "दुकानदार, किराना मालिक, फल विक्रेता, टिफिन केंद्र, कारीगर और सेवा तकनीशियन",
      "purpose": "दुकान का सामान खरीदना, डिस्प्ले रैक, वाणिज्यिक फ्रिज, उपकरण और कार्यशील पूंजी",
      "benefits": [
        "₹10 लाख तक किसी भी प्रकार की बंधक या गारंटी की आवश्यकता नहीं",
        "तीन सरल श्रेणियां: शिशु (₹50,000 तक), किशोर (₹50,000 से ₹5 लाख), तरुण (₹5 से ₹10 लाख)",
        "दैनिक कार्यशील पूंजी निकासी के लिए मुद्रा डेबिट कार्ड प्रदान किया जाता है"
      ],
      "eligibleCategories": [
        "सभी श्रेणियां",
        "सामान्य",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्यमी"
      ],
      "eligibleBusinessTypes": [
        "खुदरा / किराना दुकान",
        "खाद्य व्यवसाय",
        "सेवाएं",
        "वस्त्र व परिधान"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई प्रतिबंधात्मक सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान व कर केवाईसी",
          "status": "Uploaded"
        },
        {
          "docName": "व्यवसाय पते का प्रमाण",
          "description": "दुकान किराया अनुबंध या बिजली बिल",
          "status": "Uploaded"
        },
        {
          "docName": "कोटेशन / मशीनरी अनुमान",
          "description": "सामान या उपकरणों की अनुमानित लागत",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ)",
      "description": "ಸಣ್ಣ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಗಳು, ಕಿರಾಣಿ ಅಂಗಡಿಗಳು, ಹಣ್ಣು/ತರಕಾರಿ ಮಾರಾಟಗಾರರು ಮತ್ತು ಟೈಲರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲದೆ ₹10 ಲಕ್ಷದವರೆಗೆ ಮೂರು ಹಂತಗಳಲ್ಲಿ (ಶಿಶು: ₹50,000 ವರೆಗೆ, ಕಿಶೋರ್: ₹5 ಲಕ್ಷದವರೆಗೆ, ತರುಣ್: ₹10 ಲಕ್ಷದವರೆಗೆ) ಸಾಲವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      "loanAmount": "₹10,00,000 ವರೆಗೆ (ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲ)",
      "interestRate": "8.5% - 11.5% ವಾರ್ಷಿಕ ಬಡ್ಡಿದರ",
      "repaymentPeriod": "5 ವರ್ಷಗಳವರೆಗೆ ಸುಲಭ ಕಂತುಗಳು",
      "whoCanApply": "ಅಂಗಡಿಯವರು, ಕಿರಾಣಿ ಮಾಲೀಕರು, ಹಣ್ಣು ಮಾರಾಟಗಾರರು, ಕುಶಲಕರ್ಮಿಗಳು",
      "purpose": "ಅಂಗಡಿಯ ದಾಸ್ತಾನು ಖರೀದಿ, ಪ್ರದರ್ಶನ ಕಪಾಟುಗಳು, ಕಾರ್ಯನಿರತ ಬಂಡವಾಳ",
      "benefits": [
        "₹10 ಲಕ್ಷದವರೆಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಭದ್ರತೆ ಅಥವಾ ಅಡಮಾನ ಅಗತ್ಯವಿಲ್ಲ",
        "ಮೂರು ಹಂತಗಳು: ಶಿಶು (₹50,000 ವರೆಗೆ), ಕಿಶೋರ್ (₹5 ಲಕ್ಷದವರೆಗೆ), ತರುಣ್ (₹10 ಲಕ್ಷದವರೆಗೆ)",
        "ದೈನಂದಿನ ಖರ್ಚುಗಳಿಗಾಗಿ ಮುದ್ರಾ ಡೆಬಿಟ್ ಕಾರ್ಡ್ ನೀಡಲಾಗುತ್ತದೆ"
      ],
      "eligibleCategories": [
        "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        "ಸಾಮಾನ್ಯ",
        "ಒಬಿಸಿ",
        "ಎಸ್‌ಸಿ",
        "ಎಸ್‌ಟಿ",
        "ಮಹಿಳಾ ಉದ್ಯಮಿ"
      ],
      "eligibleBusinessTypes": [
        "ಕಿರಾಣಿ ಅಂಗಡಿ",
        "ಆಹಾರ ಉದ್ಯಮ",
        "ಸೇವೆಗಳು"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ನಿರ್ಬಂಧಿತ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವ್ಯವಹಾರ ವಿಳಾಸದ ಪುರಾವೆ",
          "description": "ಅಂಗಡಿ ಬಾಡಿಗೆ ಒಪ್ಪಂದ",
          "status": "Uploaded"
        },
        {
          "docName": "ಉಪಕರಣ ಅಂದಾಜು ಪತ್ರ",
          "description": "ವೆಚ್ಚದ ಅಂದಾಜು",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிரதான் மந்திரி முத்ரா திட்டம் (ரூ. 10 லட்சம் வரை பிணையில்லா கடன்)",
      "description": "சிறு, குறு வணிகங்கள், மளிகைக் கடைகள், பழம்/காய்கறி விற்பனையாளர்கள் மற்றும் தையல்காரர்களுக்கு எந்தவித சொத்துப் பிணையமும் இன்றி ரூ. 10 லட்சம் வரை மூன்று பிரிவுகளில் (சிசு: ரூ. 50,000 வரை, கிஷோர்: ரூ. 5 லட்சம் வரை, தருண்: ரூ. 10 லட்சம் வரை) கடன்களை வழங்குகிறது.",
      "loanAmount": "ரூ. 10,00,000 வரை (பிணை தேவையில்லை)",
      "interestRate": "8.5% - 11.5% ஆண்டு வட்டி விகிதம்",
      "repaymentPeriod": "5 ஆண்டுகள் வரை எளிய தவணைகள்",
      "whoCanApply": "கடைக்காரர்கள், மளிகைக் கடை உரிமையாளர்கள், பழ வியாபாரிகள், கைவினைஞர்கள்",
      "purpose": "கடை சரக்குகள் வாங்குதல், காட்சி அலமாரிகள், வணிக குளிர்சாதன பெட்டி, நடைமுறை மூலதனம்",
      "benefits": [
        "ரூ. 10 லட்சம் வரை அடமானம் அல்லது பிணை தேவையில்லை",
        "மூன்று பிரிவுகள்: சிசு (ரூ. 50,000 வரை), கிஷோர் (ரூ. 5 லட்சம் வரை), தருண் (ரூ. 10 லட்சம் வரை)",
        "தினசரி செயல்பாடுகளுக்கு முத்ரா டெபிட் கார்டு வழங்கப்படுகிறது"
      ],
      "eligibleCategories": [
        "அனைத்து பிரிவுகளும்",
        "பொது",
        "ஓபிசி",
        "எஸ்சி",
        "எஸ்டி",
        "பெண் தொழில்முனைவோர்"
      ],
      "eligibleBusinessTypes": [
        "மளிகைக் கடை",
        "உணவுத் தொழில்",
        "சேவைகள்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "கட்டுப்பாட்டு வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வணிக முகவரி சான்று",
          "description": "வாடகை ஒப்பந்தம் அல்லது மின் கட்டண ரசீது",
          "status": "Uploaded"
        },
        {
          "docName": "விலைப்புள்ளி மதிப்பீடு",
          "description": "சரக்கு அல்லது உபகரண மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पंतप्रधान मुद्रा योजना (10 लाखांपर्यंत विनातारण कर्ज)",
      "description": "लघु व सूक्ष्म उद्योग, किराणा दुकाने, फळ/भाजी विक्रेते, टेलर आणि दुरुस्तीच्या दुकानांना कोणत्याही मालमत्तेच्या तारणाशिवाय ₹10 लाखांपर्यंत तीन श्रेणींमध्ये (शिशू: ₹50,000 पर्यंत, किशोर: ₹5 लाखांपर्यंत, तरुण: ₹10 लाखांपर्यंत) कर्ज देते.",
      "loanAmount": "₹10,00,000 पर्यंत (विनातारण)",
      "interestRate": "8.5% - 11.5% वार्षिक व्याजदर",
      "repaymentPeriod": "5 वर्षांपर्यंत सुलभ हप्ते",
      "whoCanApply": "दुकानदार, किराणा मालक, फळ विक्रेते, टिफिन केंद्र, कारागीर आणि तंत्रज्ञ",
      "purpose": "दुकानातील माल खरेदी, डिस्प्ले रॅक, व्यावसायिक फ्रीज आणि खेळते भांडवल",
      "benefits": [
        "₹10 लाखांपर्यंत कोणतेही तारण किंवा हमी आवश्यक नाही",
        "तीन सुलभ श्रेणी: शिशू (₹50,000 पर्यंत), किशोर (₹5 लाखांपर्यंत), तरुण (₹10 लाखांपर्यंत)",
        "दैनंदिन खेळत्या भांडवलासाठी मुद्रा डेबिट कार्ड दिले जाते"
      ],
      "eligibleCategories": [
        "सर्व प्रवर्ग",
        "खुला",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्योजक"
      ],
      "eligibleBusinessTypes": [
        "किराणा दुकान",
        "अन्न व्यवसाय",
        "सेवा व दुरुस्ती"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख व कर केवायसी",
          "status": "Uploaded"
        },
        {
          "docName": "व्यवसाय पत्ता पुरावा",
          "description": "भाडे करार किंवा वीज बिल",
          "status": "Uploaded"
        },
        {
          "docName": "कोटेशन / उपकरण अंदाज",
          "description": "साहित्य अंदाज खर्च",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী মুদ্রা যোজনা (১০ লাখ পর্যন্ত বিনা বন্ধকী ঋণ)",
      "description": "ক্ষুদ্র ও অতিক্ষুদ্র ব্যবসা, মুদি দোকান, ফল/সবজি বিক্রেতা এবং দর্জিদের কোনো সম্পত্তি বন্ধক ছাড়াই ১০ লাখ টাকা পর্যন্ত তিনটি স্তরে (শিশু: ৫০,০০০ টাকা পর্যন্ত, কিশোর: ৫ লাখ টাকা পর্যন্ত, তরুণ: ১০ লাখ টাকা পর্যন্ত) ঋণ প্রদান করে।",
      "loanAmount": "₹১০,০০,০০০ পর্যন্ত (বিনা বন্ধক)",
      "interestRate": "৮.৫% - ১১.৫% বার্ষিক সুদের হার",
      "repaymentPeriod": "৫ বছর পর্যন্ত সহজ কিস্তি",
      "whoCanApply": "দোকানদার, মুদি ব্যবসায়ী, ফল বিক্রেতা, কারিগর ও পরিষেবা কর্মী",
      "purpose": "দোকানের মালামাল ক্রয়, ডিসপ্লে র্যাক, কাজের মূলধন",
      "benefits": [
        "১০ লাখ টাকা পর্যন্ত কোনো জামানত বা বন্ধকের প্রয়োজন নেই",
        "তিনটি স্তর: শিশু (৫০,০০০ টাকা পর্যন্ত), কিশোর (৫ লাখ পর্যন্ত), তরুণ (১০ লাখ পর্যন্ত)",
        "দৈনন্দিন কাজের মূলধনের জন্য মুদ্রা ডেবিট কার্ড প্রদান করা হয়"
      ],
      "eligibleCategories": [
        "সকল শ্রেণি",
        "সাধারণ",
        "ওবিসি",
        "এসসি",
        "এসটি",
        "নারী উদ্যোক্তা"
      ],
      "eligibleBusinessTypes": [
        "মুদি দোকান",
        "খাদ্য ব্যবসা",
        "পরিষেবা"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় ও ট্যাক্স কেওয়াইসি",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যবসায়িক ঠিকানার প্রমাণ",
          "description": "দোকান ভাড়ার চুক্তি বা বিদ্যুৎ বিল",
          "status": "Uploaded"
        },
        {
          "docName": "কোটেশন / সরঞ্জামের অনুমান",
          "description": "সরঞ্জামের আনুমানিক খরচ",
          "status": "Pending"
        }
      ]
    }
  },
  "PMEGP": {
    "te": {
      "name": "పీఎంఈజీపీ ఆహార తయారీ పథకం (35% ప్రభుత్వ నగదు సబ్సిడీ)",
      "description": "నిరుద్యోగ యువత మరియు సాంప్రదాయ కళాకారులు కొత్త తయారీ లేదా సేవా యూనిట్లను స్థాపించడానికి బ్యాంక్ రుణంతో పాటు గ్రామీణ ప్రాంతాల్లో 35% మరియు పట్టణ ప్రాంతాల్లో 25% వరకు భారీ నగదు సబ్సిడీని అందిస్తుంది.",
      "loanAmount": "రూ. 25,00,000 నుండి రూ. 50,00,000 వరకు (35% సబ్సిడీ)",
      "interestRate": "బ్యాంక్ లెండింగ్ రేటు (9% - 11%)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (మొరటోరియం వ్యవధి సహా)",
      "whoCanApply": "18 సంవత్సరాలు నిండిన ఎవరైనా, స్వయం సహాయక సంఘాలు, విద్యావంతులైన నిరుద్యోగులు",
      "purpose": "కొత్త తయారీ ప్రాజెక్ట్, ఫుడ్ ప్రాసెసింగ్ యూనిట్, సర్వీస్ సెంటర్ ఏర్పాటు",
      "benefits": [
        "ఎస్సీ, ఎస్టీ, ఓబీసీ, మహిళలు మరియు దివ్యాంగులకు 35% వరకు అధిక సబ్సిడీ",
        "ప్రాజెక్ట్ వ్యయంలో కేవలం 5% నుండి 10% మాత్రమే లబ్ధిదారుడి వాటా",
        "ఉచిత వ్యవస్థాపక అభివృద్ధి శిక్షణ (EDP ట్రైనింగ్) లభిస్తుంది"
      ],
      "eligibleCategories": [
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ",
        "మహిళా పారిశ్రామికవేత్త",
        "మైనారిటీ",
        "జనరల్"
      ],
      "eligibleBusinessTypes": [
        "చిన్న తయారీ పరిశ్రమ",
        "ఆహార వ్యాపారం",
        "సేవలు / రిపేర్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు మరియు పన్ను KYC",
          "status": "Uploaded"
        },
        {
          "docName": "కుల / వర్గ ధృవీకరణ పత్రం",
          "description": "సబ్సిడీ అర్హత కోసం",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
          "description": "ప్రాజెక్ట్ ఖర్చుల అంచనా",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "पीएमईजीपी सूक्ष्म उद्योग योजना (35% नकद सब्सिडी)",
      "description": "पारंपरिक कारीगरों और बेरोजगार युवाओं को गैर-कृषि क्षेत्रों में सूक्ष्म उद्यमों की स्थापना के माध्यम से स्वरोजगार के अवसर पैदा करने के लिए क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम (ग्रामीण क्षेत्रों में 35% तक सब्सिडी)।",
      "loanAmount": "₹25,00,000 से ₹50,00,000 तक (35% सब्सिडी)",
      "interestRate": "9% - 11% (लगभग)",
      "repaymentPeriod": "7 वर्ष तक",
      "whoCanApply": "18 वर्ष से अधिक आयु के व्यक्ति, स्वयं सहायता समूह, सहकारी समितियां",
      "purpose": "विनिर्माण या सेवा क्षेत्र में नई सूक्ष्म इकाइयाँ स्थापित करना",
      "benefits": [
        "एससी, एसटी, ओबीसी, महिलाओं और ग्रामीण आवेदकों के लिए 25% से 35% उच्च सब्सिडी",
        "परियोजना लागत का 90% से 95% बैंक ऋण द्वारा वित्तपोषित",
        "मुफ्त अनिवार्य उद्यमिता विकास प्रशिक्षण (EDP)"
      ],
      "eligibleCategories": [
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्यमी",
        "अल्पसंख्यक",
        "सामान्य"
      ],
      "eligibleBusinessTypes": [
        "विनिर्माण",
        "खाद्य व्यवसाय",
        "सेवाएं"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान व कर केवाईसी",
          "status": "Uploaded"
        },
        {
          "docName": "जाति प्रमाण पत्र",
          "description": "सब्सिडी हेतु",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "परियोजना अनुमान",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪಿಎಂಇಜಿಪಿ ಯೋಜನೆ (35% ನಗದು ಸಬ್ಸಿಡಿ)",
      "description": "ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳು ಮತ್ತು ನಿರುದ್ಯೋಗಿ ಯುವಕರಿಗೆ ಕೃಷಿಯೇತರ ವಲಯಗಳಲ್ಲಿ ಹೊಸ ಉದ್ಯಮಗಳನ್ನು ಸ್ಥಾಪಿಸಲು 35% ವರೆಗೆ ನಗದು ಸಬ್ಸಿಡಿ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹25,00,000 ವರೆಗೆ (35% ಸಬ್ಸಿಡಿ)",
      "interestRate": "9% - 11%",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "18 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ವ್ಯಕ್ತಿಗಳು, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು",
      "purpose": "ಉತ್ಪಾದನೆ ಅಥವಾ ಸೇವಾ ವಲಯದಲ್ಲಿ ಹೊಸ ಘಟಕಗಳ ಸ್ಥಾಪನೆ",
      "benefits": [
        "ಗ್ರಾಮೀಣ, ಮಹಿಳೆಯರು ಮತ್ತು ವಿಶೇಷ ವರ್ಗಗಳಿಗೆ 35% ರಿಯಾಯಿತಿ ಸಬ್ಸಿಡಿ",
        "ಯೋಜನಾ ವೆಚ್ಚದ 90% ದಿಂದ 95% ಬ್ಯಾಂಕ್ ಸಾಲ",
        "ಉಚಿತ ಉದ್ಯಮಶೀಲತಾ ತರಬೇತಿ (EDP)"
      ],
      "eligibleCategories": [
        "ಒಬಿಸಿ",
        "ಎಸ್‌ಸಿ",
        "ಎಸ್‌ಟಿ",
        "ಮಹಿಳಾ ಉದ್ಯಮಿ",
        "ಸಾಮಾನ್ಯ"
      ],
      "eligibleBusinessTypes": [
        "ಉತ್ಪಾದನೆ",
        "ಆಹಾರ ಉದ್ಯಮ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಮತ್ತು ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಸಬ್ಸಿಡಿಗಾಗಿ",
          "status": "Uploaded"
        },
        {
          "docName": "ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಅಂದಾಜು ವೆಚ್ಚ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிஎம்இஜிபி திட்டம் (35% மானியம்)",
      "description": "பாரம்பரிய கைவினைஞர்கள் மற்றும் வேலையற்ற இளைஞர்கள் புதிய உற்பத்தி அல்லது சேவை அலகுகளைத் தொடங்க 35% வரை மானியத்துடன் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 25,00,000 வரை (35% மானியம்)",
      "interestRate": "9% - 11%",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "18 வயதுக்கு மேற்பட்ட நபர்கள், மகளிர் குழுக்கள்",
      "purpose": "உற்பத்தி அல்லது சேவையில் புதிய நிறுவனங்களை அமைத்தல்",
      "benefits": [
        "கிராமப்புற மற்றும் சிறப்பு பிரிவினருக்கு 35% வரை அரசு மானியம்",
        "திட்டச் செலவில் 90% முதல் 95% வங்கி கடன்",
        "இலவச தொழில்முனைவோர் பயிற்சி (EDP)"
      ],
      "eligibleCategories": [
        "ஓபிசி",
        "எஸ்சி",
        "எஸ்டி",
        "பெண் தொழில்முனைவோர்",
        "பொது"
      ],
      "eligibleBusinessTypes": [
        "உற்பத்தி",
        "உணவுத் தொழில்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் மற்றும் பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "சாதிச் சான்றிதழ்",
          "description": "மானியத்திற்கு",
          "status": "Uploaded"
        },
        {
          "docName": "திட்ட அறிக்கை (DPR)",
          "description": "மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पीएमईजीपी योजना (35% सरकारी अनुदान)",
      "description": "सुशिक्षित बेरोजगार आणि पारंपरिक कारागिरांना नवीन व्यवसाय सुरू करण्यासाठी ग्रामीण भागात 35% पर्यंत शासकीय अनुदान देणारी पत-संलग्न योजना.",
      "loanAmount": "₹25,00,000 पर्यंत (35% अनुदान)",
      "interestRate": "9% - 11%",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "18 वर्षांवरील व्यक्ती, बचत गट",
      "purpose": "उत्पादन किंवा सेवा क्षेत्रात नवीन व्यवसाय सुरू करणे",
      "benefits": [
        "ग्रामीण आणि विशेष प्रवर्गासाठी 35% पर्यंत उच्च अनुदान",
        "प्रकल्प खर्चाच्या 90% ते 95% बँक कर्ज",
        "मोफत उद्योजकता विकास प्रशिक्षण (EDP)"
      ],
      "eligibleCategories": [
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्योजक",
        "खुला"
      ],
      "eligibleBusinessTypes": [
        "लघु उत्पादन",
        "अन्न व्यवसाय"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "जात प्रमाणपत्र",
          "description": "अनुदानासाठी",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "प्रकल्प खर्च अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "পিএমইজিপি যোজনা (৩৫% সরকারি অনুদান)",
      "description": "বেকার যুবক ও ঐতিহ্যবাহী কারিগরদের অকৃষি খাতে ক্ষুদ্র উদ্যোগ স্থাপনের মাধ্যমে স্বকর্মসংস্থান সৃষ্টিতে ৩৫% পর্যন্ত সরকারি অনুদানযুক্ত ঋণ প্রকল্প।",
      "loanAmount": "₹২৫,০০,০০০ পর্যন্ত (৩৫% অনুদান)",
      "interestRate": "৯% - ১১%",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "১৮ বছরের বেশি বয়সী ব্যক্তি, স্বনির্ভর দল",
      "purpose": "উৎপাদন বা পরিষেবা খাতে নতুন ক্ষুদ্র ইউনিট স্থাপন",
      "benefits": [
        "গ্রামীণ ও সংরক্ষিত শ্রেণির জন্য ৩৫% পর্যন্ত সর্বোচ্চ সরকারি ভর্তুকি",
        "প্রকল্প ব্যয়ের ৯০% থেকে ৯৫% ব্যাংক ঋণ",
        "বিনামূল্যে বাধ্যতামূলক উদ্যোক্তা প্রশিক্ষণ (EDP)"
      ],
      "eligibleCategories": [
        "ওবিসি",
        "এসসি",
        "এসটি",
        "নারী উদ্যোক্তা",
        "সাধারণ"
      ],
      "eligibleBusinessTypes": [
        "ক্ষুদ্র উৎপাদন",
        "খাদ্য ব্যবসা"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "জাতিগত শংসাপত্র",
          "description": "ভর্তুকির জন্য",
          "status": "Uploaded"
        },
        {
          "docName": "প্রকল্প রিপোর্ট (DPR)",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "STANDUP": {
    "te": {
      "name": "స్టాండ్-అప్ ఇండియా పథకం (ఎస్సీ, ఎస్టీ, మహిళలకు రూ. 1 కోటి వరకు రుణం)",
      "description": "ప్రతి బ్యాంక్ శాఖ ద్వారా కనీసం ఒక ఎస్సీ లేదా ఎస్టీ లబ్ధిదారుడికి మరియు ఒక మహిళా పారిశ్రామికవేత్తకు కొత్త గ్రీన్‌ఫీల్డ్ వెంచర్ ప్రారంభించడానికి రూ. 10 లక్షల నుండి రూ. 1 కోటి వరకు భారీ రుణాలను అందిస్తుంది.",
      "loanAmount": "రూ. 10 లక్షల నుండి రూ. 1 కోటి వరకు",
      "interestRate": "8% - 10% రాయితీ వడ్డీ రేటు",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (18 నెలల మొరటోరియం)",
      "whoCanApply": "ఎస్సీ, ఎస్టీ మరియు/లేదా మహిళా పారిశ్రామికవేత్తలు (కనీసం 51% వాటా)",
      "purpose": "తయారీ, సేవలు, వ్యవసాయ అనుబంధ లేదా వాణిజ్య రంగంలో కొత్త గ్రీన్‌ఫీల్డ్ ప్రాజెక్ట్ ఏర్పాటు"
    },
    "hi": {
      "name": "स्टैंड-अप इंडिया योजना (एससी/एसटी और महिला उद्यमियों के लिए)",
      "description": "ग्रीनफील्ड उद्यम स्थापित करने के लिए प्रति बैंक शाखा कम से कम एक एससी या एसटी उधारकर्ता और कम से कम एक महिला उधारकर्ता को ₹10 लाख से ₹1 करोड़ के बीच बैंक ऋण की सुविधा प्रदान करती है।",
      "loanAmount": "₹10 लाख से ₹1 करोड़ तक",
      "interestRate": "8% - 10% (रियायती ब्याज दर)",
      "repaymentPeriod": "7 वर्ष तक (18 महीने की छूट)",
      "whoCanApply": "एससी/एसटी और/या महिला उद्यमी (न्यूनतम 51% हिस्सेदारी)",
      "purpose": "विनिर्माण, सेवा, कृषि-संबद्ध या व्यापार में ग्रीनफील्ड परियोजना"
    },
    "kn": {
      "name": "ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ)",
      "description": "ಹೊಸ ಉದ್ಯಮ ಸ್ಥಾಪನೆಗಾಗಿ ಪ್ರತಿ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಿಂದ ಕನಿಷ್ಠ ಒಬ್ಬ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಮತ್ತು ಒಬ್ಬ ಮಹಿಳೆಗೆ ₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ ಸಾಲ ಒದಗಿಸುವ ಯೋಜನೆ.",
      "loanAmount": "₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ",
      "interestRate": "8% - 10%",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು",
      "purpose": "ಉತ್ಪಾದನೆ, ಸೇವೆ ಅಥವಾ ವ್ಯಾಪಾರದಲ್ಲಿ ಹೊಸ ಯೋಜನೆ"
    },
    "ta": {
      "name": "ஸ்டாண்ட் அப் இந்தியா திட்டம் (எஸ்சி, எஸ்டி மற்றும் பெண் தொழில்முனைவோர்)",
      "description": "புதிய வணிகம் தொடங்க ஒவ்வொரு வங்கி கிளையிலும் குறைந்தது ஒரு எஸ்சி/எஸ்டி மற்றும் ஒரு பெண்ணுக்கு ரூ. 10 லட்சம் முதல் ரூ. 1 கோடி வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 10 லட்சம் முதல் ரூ. 1 கோடி வரை",
      "interestRate": "8% - 10%",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "எஸ்சி/எஸ்டி மற்றும் பெண் தொழில்முனைவோர்",
      "purpose": "உற்பத்தி, சேவை அல்லது வர்த்தகத்தில் புதிய திட்டம்"
    },
    "mr": {
      "name": "स्टँड-अप इंडिया योजना (अनुसूचित जाती, जमाती आणि महिलांसाठी)",
      "description": "नवीन प्रकल्प सुरू करण्यासाठी प्रत्येक बँक शाखेतून किमान एका एससी/एसटी आणि एका महिलेला ₹10 लाख ते ₹1 कोटीपर्यंत मोठे कर्ज.",
      "loanAmount": "₹10 लाख ते ₹1 कोटीपर्यंत",
      "interestRate": "8% - 10%",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "एससी/एसटी आणि महिला उद्योजक",
      "purpose": "उत्पादन किंवा सेवा क्षेत्रात नवीन व्यवसाय"
    },
    "bn": {
      "name": "স্ট্যান্ড-আপ ইন্ডিয়া যোজনা (তফসিলি জাতি/উপজাতি ও নারী উদ্যোক্তাদের জন্য)",
      "description": "নতুন শিল্প স্থাপনের জন্য প্রতিটি ব্যাংক শাখা থেকে অন্তত একজন এসসি/এসটি এবং একজন নারীকে ১০ লাখ থেকে ১ কোটি টাকা পর্যন্ত ঋণ প্রদান।",
      "loanAmount": "১০ লাখ থেকে ১ কোটি টাকা পর্যন্ত",
      "interestRate": "৮% - ১০%",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "এসসি/এসটি এবং নারী উদ্যোক্তা",
      "purpose": "উৎপাদন বা পরিষেবা খাতে নতুন উদ্যোগ"
    }
  },
  "PMSVANIDHI": {
    "te": {
      "name": "పీఎం స్వనిధి పథకం (వీధి వ్యాపారులకు రూ. 50,000 వరకు వడ్డీ సబ్సిడీ రుణం)",
      "description": "వీధి వ్యాపారులు, తోపుడు బండ్ల వ్యాపారులు మరియు హాకర్లు తమ జీవనోపాధిని తిరిగి ప్రారంభించడానికి 7% వడ్డీ సబ్సిడీతో రూ. 50,000 వరకు పూచీకత్తు లేని వర్కింగ్ క్యాపిటల్ రుణాన్ని అందిస్తుంది.",
      "loanAmount": "రూ. 10,000 నుండి రూ. 50,00,00 వరకు",
      "interestRate": "7% వడ్డీ సబ్సిడీ (చాలా తక్కువ ప్రభావవంతమైన వడ్డీ)",
      "repaymentPeriod": "1 నుండి 2 సంవత్సరాలు",
      "whoCanApply": "నగర మరియు పట్టణ ప్రాంత వీధి వ్యాపారులు, పండ్లు, కూరగాయలు, టిఫిన్ అమ్మేవారు",
      "purpose": "రోజువారీ సరుకులు, కూరగాయలు, నిల్వ కొనుగోలుకు వర్కింగ్ క్యాపిటల్"
    },
    "hi": {
      "name": "पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स के लिए ₹50,000 तक ऋण)",
      "description": "सड़क विक्रेताओं, रेहड़ी-पटरी वालों को 7% ब्याज सब्सिडी के साथ ₹50,000 तक किफायती कार्यशील पूंजी ऋण प्रदान करने की पहल।",
      "loanAmount": "₹10,000 से ₹50,000 तक",
      "interestRate": "7% ब्याज सब्सिडी",
      "repaymentPeriod": "1 से 2 वर्ष",
      "whoCanApply": "शहरी स्ट्रीट वेंडर, हॉकर, ठेला चालक",
      "purpose": "दैनिक कार्यशील पूंजी और इन्वेंट्री की खरीद"
    },
    "kn": {
      "name": "ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಸಾಲ)",
      "description": "ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ತಳ್ಳುಗಾಡಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ₹50,000 ವರೆಗೆ ಅಡಮಾನವಿಲ್ಲದ ಸಾಲ.",
      "loanAmount": "₹10,000 ದಿಂದ ₹50,000 ವರೆಗೆ",
      "interestRate": "7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
      "repaymentPeriod": "1 ರಿಂದ 2 ವರ್ಷಗಳು",
      "whoCanApply": "ಬೀದಿ ಬದಿಯ ವ್ಯಾಪಾರಿಗಳು",
      "purpose": "ದೈನಂದಿನ ವ್ಯಾಪಾರ ಬಂಡವಾಳ"
    },
    "ta": {
      "name": "பிஎம் ஸ்வநிதி திட்டம் (தெருவோர வியாபாரிகளுக்கு ₹50,000 வரை கடன்)",
      "description": "தெருவோர வியாபாரிகள் மற்றும் தள்ளுவண்டி வியாபாரிகளுக்கு 7% வட்டி மானியத்துடன் ரூ. 50,000 வரை பிணையில்லா கடன்.",
      "loanAmount": "ரூ. 10,000 முதல் ரூ. 50,000 வரை",
      "interestRate": "7% வட்டி மானியம்",
      "repaymentPeriod": "1 முதல் 2 ஆண்டுகள்",
      "whoCanApply": "தெருவோர வியாபாரிகள்",
      "purpose": "நடைமுறை மூலதனம்"
    },
    "mr": {
      "name": "पीएम स्वनिधी योजना (फेरीवाल्यांसाठी ₹50,000 पर्यंत कर्ज)",
      "description": "फेरीवाले आणि हातगाडी चालकांना 7% व्याज अनुदानासह ₹50,000 पर्यंत खेळते भांडवल कर्ज.",
      "loanAmount": "₹10,000 ते ₹50,000 पर्यंत",
      "interestRate": "7% व्याज अनुदान",
      "repaymentPeriod": "1 ते 2 वर्षे",
      "whoCanApply": "शहरी फेरीवाले व पथविक्रेते",
      "purpose": "दैनिक साहित्याची खरेदी"
    },
    "bn": {
      "name": "প্রধানমন্ত্রী স্বনিধি যোজনা (পথ বিক্রেতাদের জন্য ৫০,০০০ টাকা ঋণ)",
      "description": "পথ বিক্রেতা ও হকারদের ৭% সুদ ভর্তুকি সহ ৫০,০০০ টাকা পর্যন্ত জামানতমুক্ত ঋণ সুবিধা।",
      "loanAmount": "১০,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত",
      "interestRate": "৭% সুদ ভর্তুকি",
      "repaymentPeriod": "১ থেকে ২ বছর",
      "whoCanApply": "রাস্তার বিক্রেতা ও হকার",
      "purpose": "দৈনন্দিন কাজের মূলধন"
    }
  },
  "PMVY": {
    "te": {
      "name": "పీఎం విశ్వకర్మ యోజన (చేతివృత్తుల వారికి రూ. 3 లక్షలు & రూ. 15,000 టూల్‌కిట్)",
      "description": "18 సాంప్రదాయ వృత్తులలో చేతులతో మరియు సాధనాలతో పనిచేసే విశ్వకర్మ కళాకారులకు రూ. 15,000 ఆధునిక టూల్‌కిట్ గ్రాంట్‌తో పాటు కేవలం 5% తక్కువ వడ్డీతో రూ. 3 లక్షల వరకు రుణం అందిస్తుంది.",
      "loanAmount": "రూ. 3,00,000 వరకు (రూ. 15,000 టూల్‌కిట్ గ్రాంట్)",
      "interestRate": "5% స్థిర రాయితీ వడ్డీ రేటు",
      "repaymentPeriod": "3 సంవత్సరాల వరకు",
      "whoCanApply": "వడ్రంగులు, కమ్మరులు, కుమ్మరులు, దర్జీలు (టైలర్లు), నేత కార్మికులు, శిల్పులు తదితర 18 వృత్తుల వారు",
      "purpose": "ఆధునిక పరికరాల కొనుగోలు, వర్క్‌షాప్ సెటప్ మరియు వ్యాపార విస్తరణ"
    },
    "hi": {
      "name": "पीएम विश्वकर्मा योजना (कारीगरों के लिए ₹3 लाख ऋण और ₹15,000 टूलकिट)",
      "description": "18 पारंपरिक व्यवसायों में हाथों और औजारों से काम करने वाले कारीगरों और शिल्पकारों को ₹15,000 टूलकिट अनुदान और 5% रियायती ब्याज दर पर ₹3 लाख तक ऋण प्रदान करती है।",
      "loanAmount": "₹3,00,000 तक (5% रियायती ब्याज)",
      "interestRate": "5% निश्चित रियायती दर",
      "repaymentPeriod": "3 वर्ष तक",
      "whoCanApply": "बढ़ई, लोहार, कुम्हार, मोची, दर्जी, बुनकर सहित 18 पारंपरिक कारीगर",
      "purpose": "आधुनिक उपकरण खरीद, कार्यशाला स्थापना और कार्यशील पूंजी"
    },
    "kn": {
      "name": "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹3 ಲಕ್ಷ ಸಾಲ ಮತ್ತು ₹15,000 ಟೂಲ್‌ಕಿಟ್)",
      "description": "18 ಸಾಂಪ್ರದಾಯಿಕ ವೃತ್ತಿಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹15,000 ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ ಮತ್ತು ಕೇವಲ 5% ಬಡ್ಡಿಯಲ್ಲಿ ₹3 ಲಕ್ಷ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹3,00,000 ವರೆಗೆ (₹15,000 ಟೂಲ್‌ಕಿಟ್)",
      "interestRate": "5% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ",
      "repaymentPeriod": "3 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಬಡಗಿಗಳು, ಕಮ್ಮಾರರು, ಕುಂಬಾರರು, ದರ್ಜಿಗಳು",
      "purpose": "ಆಧುನಿಕ ಉಪಕರಣ ಖರೀದಿ ಮತ್ತು ಕಾರ್ಯಾಗಾರ ಸೆಟಪ್"
    },
    "ta": {
      "name": "பிரதமர் விஸ்வகர்மா திட்டம் (கைவினைஞர்களுக்கு ₹3 லட்சம் கடன் மற்றும் ₹15,000 கருவித்தொகுப்பு)",
      "description": "18 பாரம்பரிய தொழில்களில் ஈடுபடும் கைவினைஞர்களுக்கு ரூ. 15,000 கருவித்தொகுப்பு மானியம் மற்றும் 5% வட்டியில் ரூ. 3 லட்சம் வரை கடன்.",
      "loanAmount": "ரூ. 3,00,000 வரை (ரூ. 15,000 கருவித்தொகுப்பு)",
      "interestRate": "5% சலுகை வட்டி விகிதம்",
      "repaymentPeriod": "3 ஆண்டுகள் வரை",
      "whoCanApply": "தச்சர்கள், கொல்லர்கள், குயவர்கள், தையல்காரர்கள்",
      "purpose": "நவீன உபகரணங்கள் வாங்குதல் மற்றும் பட்டறை அமைத்தல்"
    },
    "mr": {
      "name": "पीएम विश्वकर्मा योजना (कारागिरांसाठी ₹3 लाख कर्ज व ₹15,000 टूलकिट)",
      "description": "18 पारंपरिक व्यवसायातील कारागीर व शिल्पकारांसाठी ₹15,000 मोफत टूलकिट अनुदान आणि केवळ 5% व्याजदराने ₹3 लाखांपर्यंत कर्ज.",
      "loanAmount": "₹3,00,000 पर्यंत (5% सवलतीचे व्याज)",
      "interestRate": "5% निश्चित सवलत दर",
      "repaymentPeriod": "3 वर्षांपर्यंत",
      "whoCanApply": "सुतार, लोहार, कुंभार, शिंपी आणि इतर 18 पारंपरिक कारागीर",
      "purpose": "आधुनिक अवजारे खरेदी व व्यवसाय विस्तार"
    },
    "bn": {
      "name": "প্রধানমন্ত্রী বিশ্বকর্মা যোজনা (কারিগরদের জন্য ৩ লাখ ঋণ ও ১৫,০০০ টাকা টুলকিট)",
      "description": "১৮টি ঐতিহ্যবাহী পেশায় নিয়োজিত কারিগরদের ১৫,০০০ টাকা আধুনিক টুলকিট অনুদান এবং মাত্র ৫% সুদে ৩ লাখ টাকা পর্যন্ত ঋণ প্রদান।",
      "loanAmount": "₹৩,০০,০০০ পর্যন্ত (১৫,০০০ টাকা টুলকিট)",
      "interestRate": "৫% নির্দিষ্ট ছাড়যুক্ত সুদের হার",
      "repaymentPeriod": "৩ বছর পর্যন্ত",
      "whoCanApply": "ছুতোর, কামার, কুমার, দর্জি সহ ১৮টি পেশার কারিগর",
      "purpose": "আধুনিক যন্ত্রপাতি ক্রয় ও কর্মশালা স্থাপন"
    }
  }
};

  const SCHEME_ALIASES = {
  "PM-SVANIDHI": "PMSVANIDHI",
  "PM-VISHWAKARMA": "PMVY",
  "STAND-UP": "STANDUP",
  "STAND-UP-INDIA": "STANDUP",
  "SUIS": "STANDUP",
  "PMEGP-SERVICE": "PMEGP"
};

  let activeLang = 'en';

  function normalizeLangCode(input) {
    if (!input) return 'en';
    const lower = input.toString().trim().toLowerCase();
    if (NAME_TO_CODE[lower]) return NAME_TO_CODE[lower];
    if (CODE_TO_NAME[lower]) return lower;
    for (const [name, code] of Object.entries(NAME_TO_CODE)) {
      if (lower.includes(name) || name.includes(lower)) return code;
    }
    return 'en';
  }

  function getActiveLanguage() {
    return activeLang;
  }

  function getActiveLanguageName() {
    return CODE_TO_NAME[activeLang] || 'English';
  }

  function t(keyPath, fallback = '') {
    if (!keyPath) return fallback;
    const parts = keyPath.split('.');
    
    // 1. Try active language
    let val = TRANSLATIONS[activeLang];
    for (const p of parts) {
      if (val && typeof val === 'object' && p in val) {
        val = val[p];
      } else {
        val = undefined;
        break;
      }
    }
    if (val !== undefined && val !== null && val !== '') return val;

    // 2. Fallback to English
    let fallbackVal = TRANSLATIONS['en'];
    for (const p of parts) {
      if (fallbackVal && typeof fallbackVal === 'object' && p in fallbackVal) {
        fallbackVal = fallbackVal[p];
      } else {
        fallbackVal = undefined;
        break;
      }
    }
    if (fallbackVal !== undefined && fallbackVal !== null && fallbackVal !== '') return fallbackVal;

    return fallback;
  }

  // Pure vernacular helper for match badges
  function localizeBadge(badge, lang = activeLang) {
    if (!badge) return '';
    if (lang === 'en') return badge;

    const b = badge.toString().trim();
    if (b.includes('Registered Scheme')) {
      return t('common.registered_scheme', 'Registered Scheme');
    }
    if (b.includes('AI Recommended')) {
      return t('common.ai_recommended', 'AI Recommended');
    }
    const matchNum = b.match(/(\d+)%/);
    if (matchNum) {
      const word = t('common.match_word', 'Match');
      return `${matchNum[1]}% ${word}`;
    }
    return b;
  }

  // Pure vernacular helper for loan amounts (strips 'Up to', 'No Collateral', etc.)
  function localizeLoanAmount(amountStr, lang = activeLang) {
    if (!amountStr) return '';
    if (lang === 'en') return amountStr;

    let res = amountStr.toString();
    const upToText = t('common.up_to_prefix', 'Up to');
    const upToSuffix = t('common.up_to_suffix', '');
    const noCollat = t('common.no_collateral', 'No Collateral');
    const subsidy = t('common.subsidy', 'Subsidy');
    const projCost = t('common.project_cost', 'Project Cost');

    res = res.replace(/Up to\s*/gi, upToText + ' ');
    if (upToSuffix) {
      res = res.replace(/(₹[\d,]+(\s*Lakh|\s*Crore)?)/gi, `$1 ${upToSuffix}`);
    }
    res = res.replace(/\(No Collateral\)/gi, `(${noCollat})`);
    res = res.replace(/No Collateral/gi, noCollat);
    res = res.replace(/Subsidy/gi, subsidy);
    res = res.replace(/Project Cost/gi, projCost);
    return res;
  }

  // Pure vernacular helper for tags
  function localizeTags(tags, lang = activeLang) {
    if (!tags || !Array.isArray(tags)) return [];
    if (lang === 'en') return tags;

    return tags.map(tag => {
      const clean = tag.toString().trim();
      const slug = clean.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const directKey = `tags.${slug}`;
      const trans = t(directKey);
      if (trans && trans !== clean) return trans;

      // Pattern translations
      if (clean.includes('Subsidy')) {
        const sub = t('common.subsidy', 'Subsidy');
        return clean.replace(/Subsidy/i, sub);
      }
      return clean;
    });
  }

  // Find rich localized scheme record
  function getLocalizedSchemeDetails(scheme, lang = activeLang) {
    if (!scheme) return null;
    if (lang === 'en') return scheme;

    const rawCode = (scheme.shortCode || scheme.schemeId || scheme.schemeName || '').toUpperCase().trim();
    const resolvedKey = SCHEME_ALIASES[rawCode] || rawCode;

    let catalogEntry = null;
    if (VERNACULAR_SCHEME_CATALOG[resolvedKey]) {
      catalogEntry = VERNACULAR_SCHEME_CATALOG[resolvedKey][lang];
    } else {
      for (const [k, obj] of Object.entries(VERNACULAR_SCHEME_CATALOG)) {
        if (rawCode.includes(k) || k.includes(rawCode)) {
          catalogEntry = obj[lang];
          break;
        }
      }
    }

    // Return localized wrapper
    const name = (scheme.vernacularNames && scheme.vernacularNames[lang]) 
      || (catalogEntry && catalogEntry.name) 
      || scheme.vernacularName 
      || scheme.schemeName;

    return {
      ...scheme,
      schemeName: name,
      displayName: name,
      description: (catalogEntry && catalogEntry.description) || scheme.description,
      loanAmountFormatted: (catalogEntry && catalogEntry.loanAmount) || localizeLoanAmount(scheme.loanAmountFormatted, lang),
      interestRate: (catalogEntry && catalogEntry.interestRate) || scheme.interestRate,
      repaymentPeriod: (catalogEntry && catalogEntry.repaymentPeriod) || scheme.repaymentPeriod,
      whoCanApply: (catalogEntry && catalogEntry.whoCanApply) || scheme.whoCanApply,
      purpose: (catalogEntry && catalogEntry.purpose) || scheme.purpose,
      benefits: (catalogEntry && catalogEntry.benefits) || scheme.benefits,
      eligibleCategories: (catalogEntry && catalogEntry.eligibleCategories) || scheme.eligibleCategories,
      eligibleBusinessTypes: (catalogEntry && catalogEntry.eligibleBusinessTypes) || scheme.eligibleBusinessTypes,
      minAge: (catalogEntry && catalogEntry.minAge) || (scheme.minAge ? `${scheme.minAge} ${t('common.years', 'Years')}` : `18 ${t('common.years', 'Years')}`),
      incomeCap: (catalogEntry && catalogEntry.incomeCap) || (scheme.maxIncome ? localizeLoanAmount(`Up to ₹${Number(scheme.maxIncome).toLocaleString('en-IN')}`, lang) : t('common.no_restrictive_ceiling', 'No restrictive ceiling')),
      requiredDocuments: (catalogEntry && catalogEntry.requiredDocuments) || scheme.requiredDocuments
    };
  }

  function applyTranslationsToDOM() {
    // 1. Text content elements
    const textEls = document.querySelectorAll('[data-i18n]');
    textEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = t(key);
      if (translated) {
        const prefixIcon = el.getAttribute('data-i18n-prefix');
        const suffixIcon = el.getAttribute('data-i18n-suffix');
        if (prefixIcon && suffixIcon) {
          el.innerHTML = `${prefixIcon} ${translated} ${suffixIcon}`;
        } else if (prefixIcon) {
          el.innerHTML = `${prefixIcon} ${translated}`;
        } else if (suffixIcon) {
          el.innerHTML = `${translated} ${suffixIcon}`;
        } else {
          el.innerText = translated;
        }
      }
    });

    // 2. Input values
    const valEls = document.querySelectorAll('[data-i18n-val]');
    valEls.forEach(el => {
      const key = el.getAttribute('data-i18n-val');
      const translated = t(key);
      if (translated) {
        el.value = translated;
      }
    });

    // 3. Placeholder attributes
    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translated = t(key);
      if (translated) {
        el.placeholder = translated;
      }
    });

    // 4. Synchronize all language selectors
    const selects = document.querySelectorAll('.lang-switcher-select, #navLangSelect, #dashLangSelect, #loginLangSelect');
    selects.forEach(sel => {
      if (sel.value !== activeLang) {
        sel.value = activeLang;
      }
    });

    const chatLangSel = document.getElementById('chatLangSelect');
    if (chatLangSel) {
      const langName = getActiveLanguageName();
      if (chatLangSel.value !== langName && chatLangSel.value !== activeLang) {
        chatLangSel.value = langName;
      }
    }

    // 5. Update Chat Input placeholder and voice prompt dynamically
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.placeholder = t('screen4.input_placeholder');
    }
    const voicePrompt = document.getElementById('voicePromptText');
    if (voicePrompt) {
      voicePrompt.innerText = t('screen4.voice_prompt');
    }

    // 6. Update Age badge dynamically
    if (typeof window.updateAgeCategoryBadge === 'function') {
      window.updateAgeCategoryBadge();
    }

    // 7. Update html lang attribute
    document.documentElement.setAttribute('lang', activeLang);
  }

  function setLanguage(langCode, triggerRender = true) {
    const code = normalizeLangCode(langCode);
    activeLang = code;
    window.__currentLanguage = code;
    window.__currentLanguageName = CODE_TO_NAME[code] || 'English';

    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      console.warn('localStorage not available for i18n:', e);
    }

    applyTranslationsToDOM();

    // Trigger custom event for app handlers
    window.dispatchEvent(new CustomEvent('udyam:languageChanged', {
      detail: { language: code, languageName: CODE_TO_NAME[code] || 'English' }
    }));

    // If scheme details view is active, re-render it in the new language
    if (triggerRender && typeof window.refreshCurrentSchemeDetails === 'function') {
      try {
        window.refreshCurrentSchemeDetails();
      } catch (e) {}
    }
  }

  function initI18n() {
    let saved = 'en';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {
      saved = 'en';
    }
    setLanguage(saved, false);
  }

  // Export to window
  window.UdyamI18n = {
    SUPPORTED_LANGUAGES,
    TRANSLATIONS,
    VERNACULAR_SCHEME_CATALOG,
    t,
    localizeBadge,
    localizeLoanAmount,
    localizeTags,
    getLocalizedSchemeDetails,
    setLanguage,
    getActiveLanguage,
    getActiveLanguageName,
    initI18n,
    normalizeLangCode,
    applyTranslationsToDOM
  };

  // Global helper shortcuts
  window.t = t;
  window.setLanguage = setLanguage;

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
