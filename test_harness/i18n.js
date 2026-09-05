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
      "input_placeholder": "Type here...",
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
      "submit_app_btn": "Submit Application to Bank",
      "nearby_partner_btn": "📍 Find Nearby Partner"
    },
    "screen11": {
      "header": "My Applications",
      "sub": "Track applied loan & subsidy status",
      "apply_new_btn": "+ Apply for Another Scheme"
    },
    "screen12": {
          "header": "Help & Support",
          "sub": "24x7 Assistance & Helplines",
          "banner_title": "We're here to help you grow",
          "banner_sub": "Connect with official MSME desks, banking facilitators, or our AI assistance team.",
          "section_smart_support": "Instant Smart Support",
          "ai_assistant_title": "AI Assistant",
          "ai_assistant_sub": "Ask in 7 Languages",
          "nearby_desk_title": "Nearby Desk",
          "nearby_desk_sub": "Sachivalayam & Banks",
          "section_helplines": "National Government Helplines",
          "helpline_msme_title": "MSME Champions Helpline",
          "helpline_msme_sub": "Ministry of MSME, Govt of India",
          "helpline_agri_title": "Kisan Call Centre (Agri Desk)",
          "helpline_agri_sub": "Toll-Free (6:00 AM - 10:00 PM)",
          "helpline_mudra_title": "MUDRA & Stand-Up India Desk",
          "helpline_mudra_sub": "National Credit Facilitation",
          "helpline_cpgrams_title": "CPGRAMS Grievance Portal",
          "helpline_cpgrams_sub": "National Citizen Redressal",
          "section_faq": "Frequently Asked Questions",
          "faq1_q": "How do I apply for MUDRA or PMEGP loan without collateral?",
          "faq1_a": "Under the CGTMSE credit guarantee framework, MUDRA loans up to ₹10 Lakhs and PMEGP projects up to ₹50 Lakhs are completely collateral-free. You only need your business plan, Aadhaar, and PAN.",
          "faq2_q": "What documents are needed for Udyam & Vishwakarma?",
          "faq2_a": "You need your Aadhaar Card (linked to active mobile number for e-KYC), PAN Card, and Bank Account passbook details with IFSC code. No registration fee is required.",
          "faq3_q": "How long does bank approval take after applying?",
          "faq3_a": "Under Public Sector Bank digital in-principle approval mechanisms, processing typically takes 7 to 14 working days once verified by your local branch or Sachivalayam.",
          "faq4_q": "Is there any fee to use Udyam Setu?",
          "faq4_a": "No, Udyam Setu is 100% free and open for all Indian entrepreneurs, farmers, students, and artisans.",
          "section_team": "Development & Innovation Team",
          "team_sih": "Smart India Hackathon 2026",
          "team_ps": "Problem Statement ID: 92 — AI-Driven Micro-Enterprise & Scheme Matching Platform.",
          "team_developed_by": "Developed by:",
          "team_email": "Email:",
          "team_support": "Support:",
          "section_inquiry": "Send Inquiry to Support Desk",
          "inquiry_prompt": "Have questions about schemes or eligibility? Send your query directly to our team:",
          "inquiry_placeholder": "Type your question or query here (e.g. Need guidance for PMEGP loan application in West Godavari)...",
          "inquiry_submit_btn": "✉️ Submit Inquiry to Team"
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
    },
    "docs": {
      "aadhaar_card": "Aadhaar Card",
      "pan_card": "PAN Card",
      "business_plan": "Business Project Report (DPR)",
      "bank_statement": "Bank Statement (Last 6 Months)",
      "address_proof": "Address Proof (Electricity Bill / Rent Agreement)",
      "dpr": "Detailed Project Report (DPR)",
      "fssai_license": "FSSAI Food Safety Registration / License",
      "caste_certificate": "Caste / Social Category Certificate",
      "quotation_estimate": "Machinery Quotation & Purchase Estimate",
      "udid_card": "UDID Disability Certificate Card",
      "voter_id": "Voter ID Card",
      "passport_photos": "Passport Size Photographs (2 Copies)",
      "vendor_vending_id": "Street Vendor ID (Certificate of Vending / LOR)",
      "artisan_card": "PM Vishwakarma Artisan ID / Skill Certificate",
      "land_record": "Land Revenue Record (Pattadar Passbook / ROR)",
      "training_certificate": "Skill Training / EDP Certificate"
    },
    "partner_details": {
      "andhra_grameena_bank": "Andhra Grameena Bank (RRB)",
      "kvk_center": "KVK Business & Technology Center",
      "sbi_msme": "State Bank of India (MSME Specialized Branch)",
      "csc_center": "CSC Digital Seva Kendra (Common Service Center)",
      "dic_center": "District Industries Centre (DIC) Hyderabad",
      "call_partner": "Call Partner",
      "call_alert": "Connecting call to {phone}...",
      "app_submitted": "Application successfully submitted to {partner}!\nTracking ID: #UDS-847291",
      "docs_uploaded_text": "{uploaded} of {total} Documents Uploaded",
      "percent_ready_text": "{pct}% Ready"
    },
    "partner_types": {
      "bank": "Bank Branch",
      "kvk": "Krishi Vigyan Kendra (KVK)",
      "csc": "Common Service Center (CSC)",
      "dic": "District Industries Centre (DIC)"
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
      "submit_app_btn": "बैंक में आवेदन जमा करें",
      "nearby_partner_btn": "📍 नजदीकी पार्टनर खोजें"
    },
    "screen11": {
      "header": "मेरे आवेदन",
      "sub": "ऋण एवं सब्सिडी आवेदन की स्थिति देखें",
      "apply_new_btn": "+ अन्य योजना के लिए आवेदन करें"
    },
    "screen12": {
          "header": "सहायता एवं समर्थन",
          "sub": "24x7 सहायता एवं हेल्पलाइन",
          "banner_title": "हम आपके व्यापार वृद्धि में सहायक हैं",
          "banner_sub": "आधिकारिक एमएसएमई डेस्क, बैंकिंग समन्वयकों या हमारी एआई टीम से संपर्क करें।",
          "section_smart_support": "त्वरित स्मार्ट सहायता",
          "ai_assistant_title": "एआई सहायक",
          "ai_assistant_sub": "7 भाषाओं में पूछें",
          "nearby_desk_title": "निकटतम सहायता केंद्र",
          "nearby_desk_sub": "सचिवालय एवं बैंक",
          "section_helplines": "राष्ट्रीय सरकारी हेल्पलाइन",
          "helpline_msme_title": "एमएसएमई चैंपियंस हेल्पलाइन",
          "helpline_msme_sub": "सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय, भारत सरकार",
          "helpline_agri_title": "किसान कॉल सेंटर (कृषि सहायता)",
          "helpline_agri_sub": "टोल-फ्री (सुबह 6:00 - रात 10:00)",
          "helpline_mudra_title": "मुद्रा एवं स्टैंड-अप इंडिया डेस्क",
          "helpline_mudra_sub": "राष्ट्रीय ऋण सुविधा केंद्र",
          "helpline_cpgrams_title": "सीपीजीआरएएमएस जन शिकायत पोर्टल",
          "helpline_cpgrams_sub": "राष्ट्रीय नागरिक समाधान प्रणाली",
          "section_faq": "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
          "faq1_q": "बिना गारंटी के मुद्रा या पीएमईजीपी लोन कैसे प्राप्त करें?",
          "faq1_a": "सीजीटीएमएसई क्रेडिट गारंटी के तहत, ₹10 लाख तक के मुद्रा ऋण और ₹50 लाख तक के पीएमईजीपी प्रोजेक्ट पूर्णतः बिना गारंटी उपलब्ध हैं। आपको केवल व्यवसाय रिपोर्ट, आधार और पैन कार्ड की आवश्यकता होती है।",
          "faq2_q": "उद्यम और विश्वकर्मा पंजीकरण हेतु क्या आवश्यक है?",
          "faq2_a": "आधार कार्ड (ई-केवाईसी हेतु मोबाइल से लिंक), पैन कार्ड और बैंक पासबुक की प्रति। कोई शुल्क नहीं लगता।",
          "faq3_q": "आवेदन के बाद बैंक से स्वीकृति मिलने में कितना समय लगता है?",
          "faq3_a": "डिजिटल इन-प्रिंसिपल प्रक्रिया के तहत स्थानीय शाखा द्वारा सत्यापन के बाद सामान्यतः 7 से 14 कार्य दिवस लगते हैं।",
          "faq4_q": "क्या उद्यम सेतु पोर्टल उपयोग करने का कोई शुल्क है?",
          "faq4_a": "नहीं, उद्यम सेतु देश के सभी उद्यमियों, किसानों और कारीगरों के लिए 100% निःशुल्क है।",
          "section_team": "विकास एवं नवाचार टीम",
          "team_sih": "स्मार्ट इंडिया हैकथॉन 2026",
          "team_ps": "समस्या विवरण आईडी: 92 — एआई-संचालित सूक्ष्म उद्यम एवं योजना मिलान मंच।",
          "team_developed_by": "विकासकर्ता:",
          "team_email": "ईमेल:",
          "team_support": "सहायता:",
          "section_inquiry": "सपोर्ट डेस्क को अपना प्रश्न भेजें",
          "inquiry_prompt": "योजनाओं या पात्रता से संबंधित प्रश्न? सीधे हमारी टीम को भेजें:",
          "inquiry_placeholder": "अपना प्रश्न या संदेश यहाँ लिखें...",
          "inquiry_submit_btn": "✉️ टीम को संदेश भेजें"
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
    },
    "docs": {
      "aadhaar_card": "आधार कार्ड",
      "pan_card": "पैन कार्ड",
      "business_plan": "विस्तृत व्यवसाय परियोजना रिपोर्ट (DPR)",
      "bank_statement": "विगत 6 महीने का बैंक स्टेटमेंट",
      "address_proof": "पते का प्रमाण (बिजली बिल / किराया अनुबंध)",
      "dpr": "विस्तृत परियोजना रिपोर्ट (DPR)",
      "fssai_license": "FSSAI खाद्य सुरक्षा पंजीकरण / लाइसेंस",
      "caste_certificate": "जाति / सामाजिक श्रेणी प्रमाण पत्र",
      "quotation_estimate": "मशीनरी कोटेशन और खरीद लागत अनुमान",
      "udid_card": "यूडीआईडी दिव्यांगता प्रमाण पत्र कार्ड (UDID)",
      "voter_id": "मतदाता पहचान पत्र (वोटर आईडी)",
      "passport_photos": "पासपोर्ट साइज फोटो (2 प्रतियां)",
      "vendor_vending_id": "स्ट्रीट वेंडर पहचान पत्र (LOR / वेंडिंग प्रमाण पत्र)",
      "artisan_card": "पीएम विश्वकर्मा कारीगर पहचान पत्र",
      "land_record": "भूमि राजस्व अभिलेख (खतौनी / पट्टा)",
      "training_certificate": "कौशल प्रशिक्षण प्रमाण पत्र (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "आंध्रा ग्रामीण बैंक (क्षेत्रीय बैंक)",
      "kvk_center": "केवीके कृषि एवं उद्यमिता केंद्र",
      "sbi_msme": "भारतीय स्टेट बैंक (एमएसएमई विशेष शाखा)",
      "csc_center": "सीएससी डिजिटल सेवा केंद्र (कॉमन सर्विस सेंटर)",
      "dic_center": "जिला उद्योग केंद्र (डीआईसी) हैदराबाद",
      "call_partner": "साझेदार को कॉल करें",
      "call_alert": "{phone} पर कॉल मिलाई जा रही है...",
      "app_submitted": "आवेदन सफलतापूर्वक {partner} को जमा कर दिया गया है!\nट्रैकिंग आईडी: #UDS-847291",
      "docs_uploaded_text": "{total} में से {uploaded} दस्तावेज अपलोड हुए",
      "percent_ready_text": "{pct}% तैयार"
    },
    "partner_types": {
      "bank": "बैंक शाखा",
      "kvk": "कृषि विज्ञान केंद्र (KVK)",
      "csc": "डिजिटल सेवा केंद्र (CSC)",
      "dic": "जिला उद्योग केंद्र (DIC)"
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
      "submit_app_btn": "బ్యాంకుకు దరఖాస్తును సమర్పించండి",
      "nearby_partner_btn": "📍 సమీప భాగస్వామి కేంద్రం"
    },
    "screen11": {
      "header": "నా దరఖాస్తులు",
      "sub": "రుణం మరియు సబ్సిడీ స్థితిని పరిశీలించండి",
      "apply_new_btn": "+ మరొక పథకానికి దరఖాస్తు చేయండి"
    },
    "screen12": {
          "header": "సహాయం & మద్దతు",
          "sub": "24x7 సహాయం & హెల్ప్‌లైన్‌లు",
          "banner_title": "మీ వ్యాపార వృద్ధికి మేము తోడుగా ఉన్నాము",
          "banner_sub": "అధికారిక MSME డెస్క్‌లు, బ్యాంకింగ్ అధికారులు లేదా మా AI సహాయక బృందాన్ని సంప్రదించండి.",
          "section_smart_support": "తక్షణ స్మార్ట్ సహాయం",
          "ai_assistant_title": "ఏఐ సహాయకుడు",
          "ai_assistant_sub": "7 భాషల్లో అడగండి",
          "nearby_desk_title": "సమీప సహాయ కేంద్రం",
          "nearby_desk_sub": "సచివాలయం & బ్యాంకులు",
          "section_helplines": "జాతీయ ప్రభుత్వ హెల్ప్‌లైన్‌లు",
          "helpline_msme_title": "MSME ఛాంపియన్స్ హెల్ప్‌లైన్",
          "helpline_msme_sub": "భారత ప్రభుత్వ సూక్ష్మ, చిన్న & మధ్య తరహా పరిశ్రమల మంత్రిత్వ శాఖ",
          "helpline_agri_title": "కిసాన్ కాల్ సెంటర్ (వ్యవసాయ డెస్క్)",
          "helpline_agri_sub": "ఉచిత కాల్ (ఉదయం 6:00 - రాత్రి 10:00)",
          "helpline_mudra_title": "ముద్ర & స్టాండ్-అప్ ఇండియా డెస్క్",
          "helpline_mudra_sub": "జాతీయ రుణ సదుపాయ విభాగం",
          "helpline_cpgrams_title": "సీపీగ్రామ్స్ ప్రజా ఫిర్యాదుల పోర్టల్",
          "helpline_cpgrams_sub": "జాతీయ పౌర సమస్యల పరిష్కార వేదిక",
          "section_faq": "తరచుగా అడిగే ప్రశ్నలు (FAQ)",
          "faq1_q": "పూచీకత్తు లేకుండా ముద్ర లేదా PMEGP రుణం ఎలా పొందాలి?",
          "faq1_a": "CGTMSE క్రెడిట్ గ్యారెంటీ కింద, ₹10 లక్షల వరకు ముద్ర రుణాలు మరియు ₹50 లక్షల వరకు PMEGP ప్రాజెక్ట్‌లకు ఎలాంటి ఆస్తి పూచీకత్తు అవసరం లేదు. మీ వ్యాపార ప్రాజెక్ట్ నివేదిక, ఆధార్ మరియు పాన్ కార్డు సరిపోతాయి.",
          "faq2_q": "ఉద్యమ్ మరియు విశ్వకర్మ పథకాలకు ఏ పత్రాలు అవసరం?",
          "faq2_a": "ఆధార్ కార్డు (ఈ-కేవైసీ కొరకు మొబైల్ లింక్ అయి ఉండాలి), పాన్ కార్డు మరియు బ్యాంక్ పాస్‌బుక్ వివరాలు సరిపోతాయి. ఎలాంటి ఫీజు ఉండదు.",
          "faq3_q": "దరఖాస్తు చేసిన తర్వాత బ్యాంకు అనుమతికి ఎంత సమయం పడుతుంది?",
          "faq3_a": "డిజిటల్ పరిశీలన ప్రక్రియ ద్వారా స్థానిక శాఖ లేదా సచివాలయం ధృవీకరించిన తర్వాత సాధారణంగా 7 నుండి 14 పని దినాలు పడుతుంది.",
          "faq4_q": "ఉద్యమ్ సేతు ప్లాట్‌ఫామ్ ఉపయోగించడానికి ఏదైనా ఫీజు ఉందా?",
          "faq4_a": "లేదు, ఉద్యమ్ సేతు దేశంలోని పౌరులు, రైతులు, మహిళలు మరియు చేతివృత్తుల వారి కోసం 100% ఉచితం.",
          "section_team": "అభివృద్ధి & ఆవిష్కరణ బృందం",
          "team_sih": "స్మార్ట్ ఇండియా హ్యాకథాన్ 2026",
          "team_ps": "సమస్య ప్రకటన ID: 92 — AI-ఆధారిత సూక్ష్మ పరిశ్రమల పథక సమన్వయ వేదిక.",
          "team_developed_by": "రూపకల్పన:",
          "team_email": "ఈమెయిల్:",
          "team_support": "మద్దతు:",
          "section_inquiry": "సపోర్ట్ డెస్క్‌కు మీ సందేహాన్ని పంపండి",
          "inquiry_prompt": "పథకాలు లేదా అర్హతలపై సందేహాలు ఉన్నాయా? నేరుగా మా బృందానికి పంపండి:",
          "inquiry_placeholder": "మీ ప్రశ్న లేదా సందేహాన్ని ఇక్కడ టైప్ చేయండి...",
          "inquiry_submit_btn": "✉️ బృందానికి సందేహాన్ని పంపండి"
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
    },
    "docs": {
      "aadhaar_card": "ఆధార్ కార్డు",
      "pan_card": "పాన్ కార్డు",
      "business_plan": "వ్యాపార ప్రాజెక్ట్ నివేదిక (DPR)",
      "bank_statement": "గత 6 నెలల బ్యాంక్ స్టేట్‌మెంట్",
      "address_proof": "చిరునామా రుజువు (కరెంట్ బిల్లు / అద్దె ఒప్పందం)",
      "dpr": "వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
      "fssai_license": "FSSAI ఆహార భద్రత రిజిస్ట్రేషన్ / లైసెన్స్",
      "caste_certificate": "కుల / వర్గ ధృవీకరణ పత్రం",
      "quotation_estimate": "యంత్రాల కొటేషన్ & కొనుగోలు అంచనా పత్రం",
      "udid_card": "యూడీఐడీ దివ్యాంగుల ధృవీకరణ కార్డు (UDID)",
      "voter_id": "ఓటరు గుర్తింపు కార్డు",
      "passport_photos": "పాస్‌పోర్ట్ సైజు ఫోటోలు (2 కాపీలు)",
      "vendor_vending_id": "వీధి వ్యాపారి గుర్తింపు కార్డు (LOR / వెండింగ్ సర్టిఫికేట్)",
      "artisan_card": "పీఎం విశ్వకర్మ కళాకారుల గుర్తింపు కార్డు",
      "land_record": "భూ రికార్డు పత్రం (పట్టాదారు పాస్‌బుక్)",
      "training_certificate": "వృత్తి నైపుణ్య శిక్షణ ధృవీకరణ పత్రం (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "ఆంధ్రా గ్రామీణ బ్యాంక్ (RRB)",
      "kvk_center": "కేవీకే వ్యాపార & వ్యవసాయ సాంకేతిక కేంద్రం",
      "sbi_msme": "స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా (MSME ప్రత్యేక శాఖ)",
      "csc_center": "సీఎస్‌సీ డిజిటల్ సేవా కేంద్రం (CSC)",
      "dic_center": "జిల్లా పరిశ్రమల కేంద్రం (DIC)",
      "call_partner": "భాగస్వామికి కాల్ చేయండి",
      "call_alert": "{phone} కి కాల్ కనెక్ట్ అవుతోంది...",
      "app_submitted": "దరఖాస్తు విజయవంతంగా {partner} కి సమర్పించబడింది!\nట్రాకింగ్ ఐడీ: #UDS-847291",
      "docs_uploaded_text": "{total} లో {uploaded} పత్రాలు అప్‌లోడ్ అయ్యాయి",
      "percent_ready_text": "{pct}% సిద్ధంగా ఉంది"
    },
    "partner_types": {
      "bank": "బ్యాంకు శాఖ",
      "kvk": "వ్యవసాయ విజ్ఞాన కేంద్రం (KVK)",
      "csc": "డిజిటల్ సేవా కేంద్రం (CSC)",
      "dic": "జిల్లా పరిశ్రమల కేంద్రం (DIC)"
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
      "submit_app_btn": "ಬ್ಯಾಂಕ್‌ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
      "nearby_partner_btn": "📍 ಹತ್ತಿರದ ಪಾಲುದಾರ ಕೇಂದ್ರ"
    },
    "screen11": {
      "header": "ನನ್ನ ಅರ್ಜಿಗಳು",
      "sub": "ಸಾಲ ಮತ್ತು ಸಬ್ಸಿಡಿ ಅರ್ಜಿಯ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ",
      "apply_new_btn": "+ ಮತ್ತೊಂದು ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ"
    },
    "screen12": {
          "header": "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ",
          "sub": "24x7 ಸಹಾಯವಾಣಿಗಳು",
          "banner_title": "ನಿಮ್ಮ ವ್ಯಾಪಾರದ ಬೆಳವಣಿಗೆಗೆ ನಾವು ಸದಾ ಸಿದ್ಧರಿದ್ದೇವೆ",
          "banner_sub": "ಅಧಿಕೃತ MSME ಡೆಸ್ಕ್‌ಗಳು, ಬ್ಯಾಂಕಿಂಗ್ ಅಧಿಕಾರಿಗಳು ಅಥವಾ ನಮ್ಮ ಎಐ ಸಹಾಯಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
          "section_smart_support": "ತ್ವರಿತ ಸ್ಮಾರ್ಟ್ ಬೆಂಬಲ",
          "ai_assistant_title": "ಎಐ ಸಹಾಯಕ",
          "ai_assistant_sub": "7 ಭಾಷೆಗಳಲ್ಲಿ ಕೇಳಿ",
          "nearby_desk_title": "ಹತ್ತಿರದ ಕೇಂದ್ರ",
          "nearby_desk_sub": "ಗ್ರಾಮ ಪಂಚಾಯಿತಿ & ಬ್ಯಾಂಕ್‌ಗಳು",
          "section_helplines": "ರಾಷ್ಟ್ರೀಯ ಸರ್ಕಾರಿ ಸಹಾಯವಾಣಿಗಳು",
          "helpline_msme_title": "MSME ಚಾಂಪಿಯನ್ಸ್ ಸಹಾಯವಾಣಿ",
          "helpline_msme_sub": "ಭಾರತ ಸರ್ಕಾರದ MSME ಸಚಿವಾಲಯ",
          "helpline_agri_title": "ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ (ಕೃಷಿ ಡೆಸ್ಕ್)",
          "helpline_agri_sub": "ಉಚಿತ ಕರೆ (ಬೆಳಗ್ಗೆ 6:00 - ರಾತ್ರಿ 10:00)",
          "helpline_mudra_title": "ಮುದ್ರಾ ಮತ್ತು ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಡೆಸ್ಕ್",
          "helpline_mudra_sub": "ರಾಷ್ಟ್ರೀಯ ಸಾಲ ಸೌಲಭ್ಯ",
          "helpline_cpgrams_title": "CPGRAMS ಕುಂದುಕೊರತೆ ನಿವಾರಣಾ ಪೋರ್ಟಲ್",
          "helpline_cpgrams_sub": "ರಾಷ್ಟ್ರೀಯ ನಾಗರಿಕ ಪರಿಹಾರ ವ್ಯವಸ್ಥೆ",
          "section_faq": "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
          "faq1_q": "ಅಡಮಾನವಿಲ್ಲದೆ ಮುದ್ರಾ ಅಥವಾ PMEGP ಸಾಲ ಪಡೆಯುವುದು ಹೇಗೆ?",
          "faq1_a": "CGTMSE ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಅಡಿಯಲ್ಲಿ ₹10 ಲಕ್ಷದವರೆಗಿನ ಮುದ್ರಾ ಸಾಲ ಮತ್ತು ₹50 ಲಕ್ಷದವರೆಗಿನ PMEGP ಸಾಲಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಅಡಮಾನ ರಹಿತವಾಗಿವೆ.",
          "faq2_q": "ಉದ್ಯಮ್ ಮತ್ತು ವಿಶ್ವಕರ್ಮ ಯೋಜನೆಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?",
          "faq2_a": "ಆಧಾರ್ ಕಾರ್ಡ್, ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ವಿವರಗಳು ಸಾಕು.",
          "faq3_q": "ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ ಬ್ಯಾಂಕ್ ಅನುಮೋದನೆಗೆ ಎಷ್ಟು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ?",
          "faq3_a": "ಸಾಮಾನ್ಯವಾಗಿ 7 ರಿಂದ 14 ಕೆಲಸದ ದಿನಗಳು ಬೇಕಾಗುತ್ತವೆ.",
          "faq4_q": "ಉದ್ಯಮ್ ಸೇತು ಬಳಸಲು ಯಾವುದೇ ಶುಲ್ಕವಿದೆಯೇ?",
          "faq4_a": "ಇಲ್ಲ, ಉದ್ಯಮ್ ಸೇತು 100% ಉಚಿತವಾಗಿದೆ.",
          "section_team": "ಅಭಿವೃದ್ಧಿ ತಂಡ",
          "team_sih": "ಸ್ಮಾರ್ಟ್ ಇಂಡಿಯಾ ಹ್ಯಾಕಥಾನ್ 2026",
          "team_ps": "ಸಮಸ್ಯೆ ಹೇಳಿಕೆ ID: 92 — ಎಐ ಆಧಾರಿತ ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ ವೇದಿಕೆ.",
          "team_developed_by": "ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು:",
          "team_email": "ಇಮೇಲ್:",
          "team_support": "ಬೆಂಬಲ:",
          "section_inquiry": "ಸಹಾಯ ಕೇಂದ್ರಕ್ಕೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
          "inquiry_prompt": "ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮ ತಂಡಕ್ಕೆ ನೇರವಾಗಿ ಸಂದೇಶ ಕಳುಹಿಸಿ:",
          "inquiry_placeholder": "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
          "inquiry_submit_btn": "✉️ ತಂಡಕ್ಕೆ ಸಂದೇಶ ಕಳುಹಿಸಿ"
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
    },
    "docs": {
      "aadhaar_card": "ಆಧಾರ್ ಕಾರ್ಡ್",
      "pan_card": "ಪ್ಯಾನ್ ಕಾರ್ಡ್",
      "business_plan": "ವಿವರವಾದ ವ್ಯವಹಾರ ಯೋಜನಾ ವರದಿ (DPR)",
      "bank_statement": "ಕಳೆದ 6 ತಿಂಗಳ ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್",
      "address_proof": "ವಿಳಾಸ ಪುರಾವೆ (ವಿದ್ಯುತ್ ಬಿಲ್ / ಬಾಡಿಗೆ ಒಪ್ಪಂದ)",
      "dpr": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
      "fssai_license": "FSSAI ಆಹಾರ ಸುರಕ್ಷತಾ ನೋಂದಣಿ / ಪರವಾನಗಿ",
      "caste_certificate": "ಜಾತಿ / ವರ್ಗ ಪ್ರಮಾಣಪತ್ರ",
      "quotation_estimate": "ಯಂತ್ರೋಪಕರಣಗಳ ಕೊಟೇಶನ್ ಮತ್ತು ಅಂದಾಜು ವೆಚ್ಚ",
      "udid_card": "ಯುಡಿಐಡಿ ವಿಕಲಚೇತನರ ಪ್ರಮಾಣಪತ್ರ ಕಾರ್ಡ್",
      "voter_id": "ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ",
      "passport_photos": "ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಫೋಟೋಗಳು (2 ಪ್ರತಿಗಳು)",
      "vendor_vending_id": "ಬೀದಿ ವ್ಯಾಪಾರಿ ಗುರುತಿನ ಚೀಟಿ (LOR / ವೆಂಡಿಂಗ್ ಪ್ರಮಾಣಪತ್ರ)",
      "artisan_card": "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಕುಶಲಕರ್ಮಿ ಗುರುತಿನ ಚೀಟಿ",
      "land_record": "ಭೂ ಕಂದಾಯ ದಾಖಲೆ (ಪಹಣಿ / ಪಟ್ಟಾ)",
      "training_certificate": "ಕೌಶಲ್ಯ ತರಬೇತಿ ಪ್ರಮಾಣಪತ್ರ (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "ಆಂಧ್ರ ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್ (RRB)",
      "kvk_center": "ಕೆವಿಕೆ ವ್ಯವಹಾರ ಮತ್ತು ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ಕೇಂದ್ರ",
      "sbi_msme": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ (MSME ವಿಶೇಷ ಶಾಖೆ)",
      "csc_center": "ಸಿಎಸ್‌ಸಿ ಡಿಜಿಟಲ್ ಸೇವಾ ಕೇಂದ್ರ (CSC)",
      "dic_center": "ಜಿಲ್ಲಾ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರ (DIC)",
      "call_partner": "ಪಾಲುದಾರರಿಗೆ ಕರೆ ಮಾಡಿ",
      "call_alert": "{phone} ಗೆ ಕರೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...",
      "app_submitted": "ಅರ್ಜಿಯನ್ನು {partner} ಗೆ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!\nಟ್ರ್ಯಾಕಿಂಗ್ ಐಡಿ: #UDS-847291",
      "docs_uploaded_text": "{total} ರಲ್ಲಿ {uploaded} ದಾಖಲೆಗಳು ಅಪ್‌ಲೋಡ್ ಆಗಿವೆ",
      "percent_ready_text": "{pct}% ಸಿದ್ಧವಾಗಿದೆ"
    },
    "partner_types": {
      "bank": "ಬ್ಯಾಂಕ್ ಶಾಖೆ",
      "kvk": "ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (KVK)",
      "csc": "ಡಿಜಿಟಲ್ ಸೇವಾ ಕೇಂದ್ರ (CSC)",
      "dic": "ಜಿಲ್ಲಾ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರ (DIC)"
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
      "submit_app_btn": "வங்கிக்கு விண்ணப்பத்தை சமர்ப்பிக்கவும்",
      "nearby_partner_btn": "📍 அருகிலுள்ள கூட்டாளர் மையம்"
    },
    "screen11": {
      "header": "என் விண்ணப்பங்கள்",
      "sub": "விண்ணப்ப நிலையை கண்காணிக்கவும்",
      "apply_new_btn": "+ மற்றொரு திட்டத்திற்கு விண்ணப்பிக்கவும்"
    },
    "screen12": {
          "header": "உதவி & ஆதரவு",
          "sub": "24x7 உதவி & உதவி எண்கள்",
          "banner_title": "உங்கள் வளர்ச்சிக்கு உதவ நாங்கள் தயாராக உள்ளோம்",
          "banner_sub": "அதிகாரப்பூர்வ MSME உதவி மையங்கள், வங்கி அதிகாரிகள் அல்லது AI ஆதரவு குழுவை தொடர்பு கொள்ளவும்.",
          "section_smart_support": "உடனடி ஸ்மார்ட் ஆதரவு",
          "ai_assistant_title": "AI உதவியாளர்",
          "ai_assistant_sub": "7 மொழிகளில் கேளுங்கள்",
          "nearby_desk_title": "அருகிலுள்ள மையம்",
          "nearby_desk_sub": "சேவை மையம் & வங்கிகள்",
          "section_helplines": "தேசிய அரசு உதவி எண்கள்",
          "helpline_msme_title": "MSME சாம்பியன்ஸ் உதவி எண்",
          "helpline_msme_sub": "MSME அமைச்சகம், இந்திய அரசு",
          "helpline_agri_title": "விவசாயிகள் அழைப்பு மையம் (வேளாண் உதவி)",
          "helpline_agri_sub": "கட்டணமில்லா எண் (காலை 6:00 - இரவு 10:00)",
          "helpline_mudra_title": "முத்ரா & ஸ்டாண்ட்-அப் இந்தியா உதவி",
          "helpline_mudra_sub": "தேசிய கடன் வசதி மையம்",
          "helpline_cpgrams_title": "CPGRAMS மக்கள் குறைதீர்ப்பு தளம்",
          "helpline_cpgrams_sub": "தேசிய குடிமக்கள் குறைதீர்ப்பு சேவை",
          "section_faq": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
          "faq1_q": "பிணையம் இல்லாமல் முத்ரா அல்லது PMEGP கடனுக்கு விண்ணப்பிப்பது எப்படி?",
          "faq1_a": "CGTMSE திட்டத்தின் கீழ் ₹10 லட்சம் வரை முத்ரா கடன்களும் ₹50 லட்சம் வரை PMEGP கடன்களும் பிணையம் இன்றி வழங்கப்படுகின்றன.",
          "faq2_q": "உத்யம் மற்றும் விஸ்வகர்மா திட்டங்களுக்கு என்ன ஆவணங்கள் தேவை?",
          "faq2_a": "ஆதார் கார்டு, பான் கார்டு மற்றும் வங்கி பாஸ்புக் விவரங்கள் போதுமானது.",
          "faq3_q": "வங்கி ஒப்புதல் பெற எவ்வளவு நாட்கள் ஆகும்?",
          "faq3_a": "சரிபார்ப்பிற்கு பிறகு பொதுவாக 7 முதல் 14 வேலை நாட்கள் ஆகும்.",
          "faq4_q": "உத்யம் சேது பயன்படுத்த ஏதேனும் கட்டணம் உள்ளதா?",
          "faq4_a": "இல்லை, உத்யம் சேது 100% இலவசமானது.",
          "section_team": "வளர்ச்சிக் குழு",
          "team_sih": "ஸ்மார்ட் இந்தியா ஹேக்கத்தான் 2026",
          "team_ps": "பிரச்சனை அறிக்கை ID: 92 — AI ఆధారిత திட்ட ஒருங்கிணைப்பு தளம்.",
          "team_developed_by": "உருவாக்கியவர்:",
          "team_email": "மின்னஞ்சல்:",
          "team_support": "ஆதரவு:",
          "section_inquiry": "உதவி மையத்திற்கு கேள்வி அனுப்பவும்",
          "inquiry_prompt": "திட்டங்கள் குறித்து கேள்விகள் உள்ளதா? எங்கள் குழுவிற்கு அனுப்பவும்:",
          "inquiry_placeholder": "உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
          "inquiry_submit_btn": "✉️ குழுவிற்கு அனுப்பவும்"
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
    },
    "docs": {
      "aadhaar_card": "ஆதார் அட்டை",
      "pan_card": "பான் அட்டை",
      "business_plan": "விரிவான திட்ட அறிக்கை (DPR)",
      "bank_statement": "கடந்த 6 மாத வங்கி கணக்கு அறிக்கை",
      "address_proof": "முகவரி சான்று (மின் கட்டணம் / வாடகை ஒப்பந்தம்)",
      "dpr": "விரிவான திட்ட அறிக்கை (DPR)",
      "fssai_license": "FSSAI உணவு பாதுகாப்பு பதிவு / உரிமம்",
      "caste_certificate": "சாதி / சமூக பிரிவு சான்றிதழ்",
      "quotation_estimate": "இயந்திரங்களின் விலை மேற்கோள் மற்றும் மதிப்பீடு",
      "udid_card": "யுடிஐடி மாற்றுத்திறனாளி சான்றிதழ் அட்டை (UDID)",
      "voter_id": "வாக்காளர் அடையாள அட்டை",
      "passport_photos": "பாஸ்போர்ட் அளவு புகைப்படங்கள் (2 பிரதிகள்)",
      "vendor_vending_id": "தெருவோர வியாபாரி அடையாள அட்டை (LOR சான்றிதழ்)",
      "artisan_card": "பிஎம் விஸ்வகர்மா கைவினைஞர் அடையாள அட்டை",
      "land_record": "நில வருவாய் ஆவணம் (பட்டா / சிட்டா)",
      "training_certificate": "தொழில்முனைவோர் பயிற்சி சான்றிதழ் (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "ஆந்திரா கிராம வங்கி (RRB)",
      "kvk_center": "கேவிகே வணிக மற்றும் தொழில்நுட்ப மையம்",
      "sbi_msme": "பாரத ஸ்டேட் வங்கி (MSME சிறப்பு கிளை)",
      "csc_center": "சிஎஸ்சி பொது சேவை மையம் (CSC)",
      "dic_center": "மாவட்ட தொழில் மையம் (DIC)",
      "call_partner": "சேவை மையத்தை அழைக்கவும்",
      "call_alert": "{phone} எண்ணிற்கு அழைப்பு இணைக்கப்படுகிறது...",
      "app_submitted": "விண்ணப்பம் வெற்றிகரமாக {partner} மையத்தில் சமர்ப்பிக்கப்பட்டது!\nகண்காணிப்பு எண்: #UDS-847291",
      "docs_uploaded_text": "{total} இல் {uploaded} ஆவணங்கள் பதிவேற்றப்பட்டன",
      "percent_ready_text": "{pct}% தயார்"
    },
    "partner_types": {
      "bank": "வங்கி கிளை",
      "kvk": "வேளாண் அறிவியல் மையம் (KVK)",
      "csc": "டிஜிட்டல் பொது சேவை மையம் (CSC)",
      "dic": "மாவட்ட தொழில் மையம் (DIC)"
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
      "submit_app_btn": "बँकेत अर्ज सादर करा",
      "nearby_partner_btn": "📍 जवळचा भागीदार केंद्र"
    },
    "screen11": {
      "header": "माझे अर्ज",
      "sub": "कर्ज व अनुदान अर्जाची स्थिती तपासा",
      "apply_new_btn": "+ दुसऱ्या योजनेसाठी अर्ज करा"
    },
    "screen12": {
          "header": "मदत आणि सहाय्य",
          "sub": "24x7 मदत व हेल्पलाइन",
          "banner_title": "आम्ही तुमच्या प्रगतीसाठी मदतीला आहोत",
          "banner_sub": "अधिकृत MSME डेस्क, बँक अधिकारी किंवा आमच्या AI सहाय्यक टीमशी संपर्क साधा.",
          "section_smart_support": "त्वरित स्मार्ट मदत",
          "ai_assistant_title": "AI सहाय्यक",
          "ai_assistant_sub": "7 भाषांमध्ये विचारा",
          "nearby_desk_title": "जवळचे सेवा केंद्र",
          "nearby_desk_sub": "सचिवालय आणि बँका",
          "section_helplines": "राष्ट्रीय शासकीय हेल्पलाइन",
          "helpline_msme_title": "MSME चॅम्पियन्स हेल्पलाइन",
          "helpline_msme_sub": "MSME मंत्रालय, भारत सरकार",
          "helpline_agri_title": "किसान कॉल सेंटर (कृषी विभाग)",
          "helpline_agri_sub": "टोल-फ्री (सकाळी 6:00 - रात्री 10:00)",
          "helpline_mudra_title": "मुद्रा आणि स्टँड-अप इंडिया डेस्क",
          "helpline_mudra_sub": "राष्ट्रीय कर्ज सुविधा केंद्र",
          "helpline_cpgrams_title": "CPGRAMS तक्रार निवारण पोर्टल",
          "helpline_cpgrams_sub": "राष्ट्रीय नागरिक निवारण यंत्रणा",
          "section_faq": "नेहमी विचारले जाणारे प्रश्न",
          "faq1_q": "तारणाशिवाय मुद्रा किंवा PMEGP कर्ज कसे मिळवावे?",
          "faq1_a": "CGTMSE हमी अंतर्गत ₹10 लाखांपर्यंत मुद्रा कर्ज आणि ₹50 लाखांपर्यंत PMEGP कर्ज पूर्णपणे विनातारण उपलब्ध आहे.",
          "faq2_q": "उद्यम आणि विश्वकर्मासाठी कोणती कागदपत्रे लागतात?",
          "faq2_a": "आधार कार्ड, पॅन कार्ड आणि बँक पासबुक तपशील आवश्यक आहेत.",
          "faq3_q": "बँक मंजुरी मिळण्यास किती वेळ लागतो?",
          "faq3_a": "तपासणीनंतर साधारणतः 7 ते 14 कामाचे दिवस लागतात.",
          "faq4_q": "उद्यम सेतू वापरण्यासाठी काही शुल्क आहे का?",
          "faq4_a": "नाही, उद्यम सेतू सर्वांसाठी 100% मोफत आहे.",
          "section_team": "विकास टीम",
          "team_sih": "स्मार्ट इंडिया हॅकाथॉन 2026",
          "team_ps": "समस्या आयडी: 92 — AI-आधारित योजना जुळवणी प्लॅटफॉर्म.",
          "team_developed_by": "विकसित केले:",
          "team_email": "ईमेल:",
          "team_support": "मदत:",
          "section_inquiry": "सपोर्ट डेस्कला प्रश्न पाठवा",
          "inquiry_prompt": "योजनांविषयी काही प्रश्न आहेत का? थेट आमच्या टीमला पाठवा:",
          "inquiry_placeholder": "तुमचा प्रश्न येथे टाइप करा...",
          "inquiry_submit_btn": "✉️ टीमला प्रश्न पाठवा"
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
    },
    "docs": {
      "aadhaar_card": "आधार कार्ड",
      "pan_card": "पॅन कार्ड",
      "business_plan": "सविस्तर व्यवसाय प्रकल्प अहवाल (DPR)",
      "bank_statement": "मागील 6 महिन्यांचे बँक स्टेटमेंट",
      "address_proof": "पत्ता पुरावा (वीज बिल / भाडे करार)",
      "dpr": "सविस्तर प्रकल्प अहवाल (DPR)",
      "fssai_license": "FSSAI अन्न सुरक्षा नोंदणी / परवाना",
      "caste_certificate": "जात / सामाजिक प्रवर्ग प्रमाणपत्र",
      "quotation_estimate": "यंत्रसामग्री कोटेशन आणि खरेदी अंदाज",
      "udid_card": "युडीआयडी दिव्यांगता प्रमाणपत्र कार्ड (UDID)",
      "voter_id": "मतदार ओळखपत्र",
      "passport_photos": "पासपोर्ट आकाराची छायाचित्रे (2 प्रती)",
      "vendor_vending_id": "स्ट्रीट वेंडर ओळखपत्र (LOR / वेंडिंग प्रमाणपत्र)",
      "artisan_card": "पीएम विश्वकर्मा कारागीर ओळखपत्र",
      "land_record": "जमीन महसूल नोंद (7/12 उतारा)",
      "training_certificate": "कौशल्य प्रशिक्षण प्रमाणपत्र (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "आंध्रा ग्रामीण बँक (RRB)",
      "kvk_center": "केव्हीके व्यवसाय आणि तंत्रज्ञान केंद्र",
      "sbi_msme": "स्टेट बँक ऑफ इंडिया (MSME विशेष शाखा)",
      "csc_center": "सीएससी डिजिटल सेवा केंद्र (CSC)",
      "dic_center": "जिल्हा उद्योग केंद्र (DIC)",
      "call_partner": "भागीदारास कॉल करा",
      "call_alert": "{phone} वर कॉल जोडला जात आहे...",
      "app_submitted": "अर्ज यशस्वीरीत्या {partner} कडे सादर केला गेला आहे!\nट्रॅकिंग आयडी: #UDS-847291",
      "docs_uploaded_text": "{total} पैकी {uploaded} कागदपत्रे अपलोड झाली",
      "percent_ready_text": "{pct}% तयार"
    },
    "partner_types": {
      "bank": "बँक शाखा",
      "kvk": "कृषी विज्ञान केंद्र (KVK)",
      "csc": "डिजिटल सेवा केंद्र (CSC)",
      "dic": "जिल्हा उद्योग केंद्र (DIC)"
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
      "submit_app_btn": "ব্যাংকে আবেদন জমা দিন",
      "nearby_partner_btn": "📍 নিকটস্থ অংশীদার কেন্দ্র"
    },
    "screen11": {
      "header": "আমার আবেদনসমূহ",
      "sub": "ঋণ ও ভর্তুকি আবেদনের অবস্থা ট্র্যাক করুন",
      "apply_new_btn": "+ অন্য প্রকল্পের জন্য আবেদন করুন"
    },
    "screen12": {
          "header": "সহায়তা ও সমর্থন",
          "sub": "24x7 সহায়তা ও হেল্পলাইন",
          "banner_title": "আপনার ব্যবসার বৃদ্ধিতে আমরা সাথে আছি",
          "banner_sub": "অফিসিয়াল MSME ডেস্ক, ব্যাংকিং কর্মকর্তা বা আমাদের AI সহায়তা দলের সাথে যোগাযোগ করুন।",
          "section_smart_support": "তাত্ক্ষণিক স্মার্ট সহায়তা",
          "ai_assistant_title": "এআই সহকারী",
          "ai_assistant_sub": "7টি ভাষায় জিজ্ঞাসা করুন",
          "nearby_desk_title": "নিকটস্থ সহায়তা কেন্দ্র",
          "nearby_desk_sub": "সেবা কেন্দ্র ও ব্যাংক",
          "section_helplines": "জাতীয় সরকারি হেল্পলাইনসমূহ",
          "helpline_msme_title": "MSME চ্যাম্পিয়নস হেল্পলাইন",
          "helpline_msme_sub": "MSME মন্ত্রণালয়, ভারত সরকার",
          "helpline_agri_title": "কিষাণ কল সেন্টার (কৃষি ডেস্ক)",
          "helpline_agri_sub": "টোল-ফ্রি (সকাল ৬:০০ - রাত ১০:০০)",
          "helpline_mudra_title": "মুদ্রা ও স্ট্যান্ড-আপ ইন্ডিয়া ডেস্ক",
          "helpline_mudra_sub": "জাতীয় ঋণ সুবিধা কেন্দ্র",
          "helpline_cpgrams_title": "CPGRAMS অভিযোগ নিষ্পত্তি পোর্টাল",
          "helpline_cpgrams_sub": "জাতীয় নাগরিক অভিযোগ সমাধান",
          "section_faq": "সাধারণ জিজ্ঞাসাসমূহ",
          "faq1_q": "জামানত ছাড়া মুদ্রা বা PMEGP ঋণ কীভাবে পাবেন?",
          "faq1_a": "CGTMSE গ্যারান্টির অধীনে ₹10 লাখ পর্যন্ত মুদ্রা ঋণ এবং ₹50 লাখ পর্যন্ত PMEGP প্রকল্প সম্পূর্ণ জামানতমুক্ত।",
          "faq2_q": "উদ্যম এবং বিশ্বকর্মা নিবন্ধনের জন্য কী কী নথি প্রয়োজন?",
          "faq2_a": "আধার কার্ড, প্যান কার্ড এবং ব্যাংক পাসবুক বিশদ প্রয়োজন।",
          "faq3_q": "আবেদনের পর ব্যাংক অনুমোদন পেতে কতদিন সময় লাগে?",
          "faq3_a": "যাচাইয়ের পর সাধারণত ৭ থেকে ১৪ কার্যদিবস সময় লাগে।",
          "faq4_q": "উদ্যম সেতু ব্যবহারের জন্য কোনো ফি আছে কি?",
          "faq4_a": "না, उद्यम সেতু সম্পূর্ণ বিনামূল্যে ব্যবহারযোগ্য।",
          "section_team": "উন্নয়ন দল",
          "team_sih": "স্মার্ট ইন্ডিয়া হ্যাকাথন 2026",
          "team_ps": "সমস্যা বিবরণী ID: 92 — এআই চালিত প্রকল্প ম্যাচিং প্ল্যাটফর্ম।",
          "team_developed_by": "তৈরি করেছে:",
          "team_email": "ইমেইল:",
          "team_support": "সহায়তা:",
          "section_inquiry": "সাপোর্ট ডেস্কে প্রশ্ন পাঠান",
          "inquiry_prompt": "প্রকল্প সম্পর্কে কোনো প্রশ্ন আছে? সরাসরি আমাদের দলের কাছে পাঠান:",
          "inquiry_placeholder": "আপনার প্রশ্ন এখানে লিখুন...",
          "inquiry_submit_btn": "✉️ দলে বার্তা পাঠান"
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
    },
    "docs": {
      "aadhaar_card": "আধার কার্ড",
      "pan_card": "প্যান কার্ড",
      "business_plan": "বিস্তারিত ব্যবসায়িক প্রকল্প প্রতিবেদন (DPR)",
      "bank_statement": "বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট",
      "address_proof": "ঠিকানার প্রমাণ (বিদ্যুৎ বিল / ভাড়ার চুক্তি)",
      "dpr": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
      "fssai_license": "FSSAI খাদ্য সুরক্ষা নিবন্ধন / লাইসেন্স",
      "caste_certificate": "জাতিগত / সামাজিক শ্রেণি শংসাপত্র",
      "quotation_estimate": "যন্ত্রপাতির কোটেশন ও ক্রয় ব্যয় অনুমান",
      "udid_card": "ইউডিআইডি প্রতিবন্ধী শংসাপত্র কার্ড (UDID)",
      "voter_id": "ভোটার পরিচয়পত্র",
      "passport_photos": "পাসপোর্ট আকারের ছবি (২ কপি)",
      "vendor_vending_id": "পথ বিক্রেতা পরিচয়পত্র (LOR / ভেন্ডিং সার্টিফিকেট)",
      "artisan_card": "পিএম বিশ্বকর্মা কারিগর পরিচয়পত্র",
      "land_record": "জমির রেকর্ড (খতিয়ান / পরচা)",
      "training_certificate": "উদ্যোক্তা উন্নয়ন প্রশিক্ষণ শংসাপত্র (EDP)"
    },
    "partner_details": {
      "andhra_grameena_bank": "অন্ধ্র গ্রামীণ ব্যাংক (RRB)",
      "kvk_center": "কেভিকে কৃষি ও প্রযুক্তি কেন্দ্র",
      "sbi_msme": "স্টেট ব্যাঙ্ক অফ ইন্ডিয়া (MSME বিশেষ শাখা)",
      "csc_center": "সিএসসি ডিজিটাল সেবা কেন্দ্র (CSC)",
      "dic_center": "জেলা শিল্প কেন্দ্র (DIC)",
      "call_partner": "পার্টনারকে কল করুন",
      "call_alert": "{phone} এ কল সংযুক্ত করা হচ্ছে...",
      "app_submitted": "আবেদন সফলভাবে {partner} এ জমা দেওয়া হয়েছে!\nট্র্যাকিং আইডি: #UDS-847291",
      "docs_uploaded_text": "{total} টির মধ্যে {uploaded} টি নথি আপলোড হয়েছে",
      "percent_ready_text": "{pct}% প্রস্তুত"
    },
    "partner_types": {
      "bank": "ব্যাঙ্ক শাখা",
      "kvk": "কৃষি বিজ্ঞান কেন্দ্র (KVK)",
      "csc": "ডিজিটাল সেবা কেন্দ্র (CSC)",
      "dic": "জেলা শিল্প কেন্দ্র (DIC)"
    }
  }
};

  const VERNACULAR_SCHEME_CATALOG = {
  "PMFME": {
    "en": {
      "name": "PM Formalisation of Micro food processing Enterprises (PMFME)",
      "description": "Centrally sponsored flagship scheme by Ministry of Food Processing Industries (MoFPI) providing 35% capital subsidy up to ₹10 Lakhs for modernizing micro food processing units, bakeries, snacks, spice grinding, pickles, catering kitchens, and tiffin businesses.",
      "loanAmount": "Project Cost up to ₹10,00,000 (35% Subsidy)",
      "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
      "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
      "whoCanApply": "Individual micro food entrepreneurs, FPOs, Self Help Groups (SHGs), and producer cooperatives",
      "purpose": "Purchasing food processing machinery, commercial ovens, kitchen automation, packaging, and FSSAI hygiene setup",
      "benefits": [
        "35% non-repayable capital subsidy credited directly as margin money (up to ₹10 Lakhs)",
        "Beneficiary own contribution is only 10% of the project cost; 90% financed via bank loan",
        "Free technical training, FSSAI licensing assistance, and marketing/branding support under ODOP"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women Entrepreneur"
      ],
      "eligibleBusinessTypes": [
        "Food Business",
        "Bakery",
        "Tiffin Center",
        "Catering"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity and Tax KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Detailed Project Report (DPR)",
          "description": "Equipment cost and revenue forecast",
          "status": "Pending"
        },
        {
          "docName": "Bank Statement (Last 6 Months)",
          "description": "Financial record",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI Registration / Application Proof",
          "description": "Food safety compliance proof",
          "status": "Pending"
        }
      ]
    },
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
          "docName": "FSSAI ఆహార భద్రత రిజిస్ట్రేషన్ / లైసెన్స్",
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
          "docName": "FSSAI खाद्य सुरक्षा पंजीकरण / लाइसेंस",
          "description": "खाद्य सुरक्षा अनुपालन प्रमाण",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಯೋಜನೆ (PMFME - 35% ಸಬ್ಸಿಡಿ)",
      "description": "ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಸಚಿವಾಲಯದ ಪ್ರಮುಖ ಯೋಜನೆ, ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳು, ಬೇಕರಿಗಳು, ತಿಂಡಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್ ಆಧುನೀಕರಣಕ್ಕಾಗಿ ₹10 ಲಕ್ಷದವರೆಗೆ 35% ಬಂಡವಾಳ ಸಬ್ಸಿಡಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      "loanAmount": "ಯೋಜನಾ ವೆಚ್ಚ ₹10,00,000 ವರೆಗೆ (35% ಸಬ್ಸಿಡಿ)",
      "interestRate": "ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕ್ ಬಡ್ಡಿದರ (8.5% - 10.5%)",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ (ಮೊರಟೋರಿಯಂ 6 - 12 ತಿಂಗಳುಗಳು)",
      "whoCanApply": "ವೈಯಕ್ತಿಕ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಉದ್ಯಮಿಗಳು, ಎಫ್‌ಪಿಒಗಳು, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು ಮತ್ತು ಸಹಕಾರ ಸಂಘಗಳು",
      "purpose": "ಆಹಾರ ಸಂಸ್ಕರಣಾ ಯಂತ್ರೋಪಕರಣಗಳು, ವಾಣಿಜ್ಯ ಓವನ್‌ಗಳು, ಅಡುಗೆಮನೆ ಯಾಂತ್ರೀಕರಣ ಮತ್ತು FSSAI ಸೆಟಪ್",
      "benefits": [
        "ಯೋಜನಾ ವೆಚ್ಚದ 35% ಮರುಪಾವತಿಸಲಾಗದ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ (ಗರಿಷ್ಠ ₹10 ಲಕ್ಷದವರೆಗೆ)",
        "ಫಲಾನುಭವಿಯ ಸ್ವಂತ ಕೊಡುಗೆ ಕೇವಲ 10%; ಉಳಿದ 90% ಬ್ಯಾಂಕ್ ಸಾಲ",
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
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಯಂತ್ರೋಪಕರಣಗಳ ವೆಚ್ಚ",
          "status": "Pending"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ವಿವರಣೆ (ಕಳೆದ 6 ತಿಂಗಳು)",
          "description": "ಹಣಕಾಸು ದಾಖಲೆ",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI ಆಹಾರ ಸುರಕ್ಷತಾ ನೋಂದಣಿ / ಪರವಾನಗಿ",
          "description": "ಆಹಾರ ಸುರಕ್ಷತೆ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிரதான் மந்திரி நுண் உணவு பதப்படுத்தும் நிறுவனங்கள் திட்டம் (PMFME - 35% மானியம்)",
      "description": "நுண் உணவு பதப்படுத்தும் அலகுகள், பேக்கரிகள், சிற்றுண்டி தயாரிப்பு மற்றும் கேட்டரிங் சமையலறைகளை நவீனமயமாக்க ரூ. 10 லட்சம் வரை 35% மூலதன மானியத்தை வழங்குகிறது.",
      "loanAmount": "திட்டச் செலவு ரூ. 10,00,000 வரை (35% மானியம்)",
      "interestRate": "வழக்கமான வங்கி வட்டி விகிதம் (8.5% - 10.5%)",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "தனிநபர் நுண் உணவு தொழில்முனைவோர், சுயஉதவி குழுக்கள் (SHGs) மற்றும் கூட்டுறவு சங்கங்கள்",
      "purpose": "உணவு பதப்படுத்தும் இயந்திரங்கள், வணிக அடுப்புகள், சமையலறை ஆட்டோமேஷன் மற்றும் FSSAI சுகாதாரம்",
      "benefits": [
        "திட்டச் செலவில் 35% திரும்ப செலுத்தத் தேவையில்லாத மூலதன மானியம் (ரூ. 10 லட்சம் வரை)",
        "பயனாளியின் சொந்த பங்களிப்பு 10% மட்டுமே; மீதமுள்ள 90% வங்கி கடன்",
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
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான திட்ட அறிக்கை (DPR)",
          "description": "இயந்திர செலவு",
          "status": "Pending"
        },
        {
          "docName": "கடந்த 6 மாத வங்கி கணக்கு அறிக்கை",
          "description": "நிதி பதிவு",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI உணவு பாதுகாப்பு பதிவு / உரிமம்",
          "description": "உணவு பாதுகாப்பு சான்று",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पंतप्रधान सूक्ष्म अन्न प्रक्रिया उद्योग योजना (PMFME - 35% अनुदान)",
      "description": "सूक्ष्म अन्न प्रक्रिया युनिट्स, बेकऱ्या, स्नॅक्स, मसाले आणि टिफिन केंद्रांच्या आधुनिकीकरणासाठी ₹10 लाखांपर्यंत 35% भांडवली अनुदान देणारी केंद्र पुरस्कृत योजना.",
      "loanAmount": "प्रकल्प खर्च ₹10,00,000 पर्यंत (35% अनुदान)",
      "interestRate": "सामान्य बँक व्याजदर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "वैयक्तिक सूक्ष्म अन्न उद्योजक, शेतकरी उत्पादक कंपन्या (FPO), बचत गट",
      "purpose": "अन्न प्रक्रिया यंत्रसामग्री, व्यावसायिक ओव्हन, किचन ऑटोमेशन आणि FSSAI स्वच्छता सेटअप",
      "benefits": [
        "प्रकल्प खर्चाच्या 35% परत न करावे लागणारे भांडवली अनुदान (कमाल ₹10 लाख)",
        "लाभार्थ्यांचा स्वतःचा वाटा केवळ 10%; उर्वरित 90% बँक कर्ज",
        "मोफत तांत्रिक प्रशिक्षण, FSSAI परवाना सहाय्य आणि ODOP अंतर्गत विपणन सहकार्य"
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
        "अन्न प्रक्रिया",
        "बेकरी",
        "मेस / केटरिंग"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "यंत्रसामग्री खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "मागील 6 महिन्यांचे बँक स्टेटमेंट",
          "description": "आर्थिक व्यवहार",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI अन्न सुरक्षा नोंदणी / परवाना",
          "description": "अन्न सुरक्षा प्रमाणपत्र",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ এন্টারপ্রাইজ যোজনা (PMFME - ৩৫% ভর্তুকি)",
      "description": "ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ ইউনিট, বেকারি, স্ন্যাক্স, মশলা ও ক্যাটারিং রান্নাঘরের আধুনিকায়নের জন্য ₹১০ লাখ পর্যন্ত ৩৫% মূলধন ভর্তুকি প্রদানকারী প্রকল্প।",
      "loanAmount": "প্রকল্প ব্যয় ₹১০,০০,০০০ পর্যন্ত (৩৫% ভর্তুকি)",
      "interestRate": "স্বাভাবিক ব্যাংক সুদের হার (৮.৫% - ১০.৫%)",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "ব্যক্তিগত ক্ষুদ্র খাদ্য উদ্যোক্তা, এফপিও, স্বনির্ভর দল (SHGs) ও সমবায় সমিতি",
      "purpose": "খাদ্য প্রক্রিয়াকরণ যন্ত্রপাতি, বাণিজ্যিক ওভেন, রান্নাঘর অটোমেশন ও FSSAI সেটআপ",
      "benefits": [
        "প্রকল্প ব্যয়ের ৩৫% অনুদান (সর্বোচ্চ ₹১০ লাখ পর্যন্ত)",
        "উদ্যোক্তার নিজস্ব বিনিয়োগ মাত্র ১০%; অবশিষ্ট ৯০% ব্যাংক ঋণ",
        "বিনামূল্যে প্রযুক্তিগত প্রশিক্ষণ, FSSAI লাইসেন্স সহায়তা এবং বিপণন সহায়তা"
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
        "টিফিন সেন্টার"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমাবদ্ধতা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "যন্ত্রপাতির ব্যয় অনুমান",
          "status": "Pending"
        },
        {
          "docName": "বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট",
          "description": "আর্থিক রেকর্ড",
          "status": "Uploaded"
        },
        {
          "docName": "FSSAI খাদ্য সুরক্ষা নিবন্ধন / লাইসেন্স",
          "description": "খাদ্য সুরক্ষা শংসাপত্র",
          "status": "Pending"
        }
      ]
    }
  },
  "PMMY": {
    "en": {
      "name": "Pradhan Mantri Mudra Yojana (PMMY)",
      "description": "Flagship scheme providing 100% collateral-free loans up to ₹10 Lakhs across Shishu (up to ₹50,000), Kishore (₹50k - ₹5L), and Tarun (₹5L - ₹10L) tiers to small business owners, kirana stores, repair workshops, and artisans.",
      "loanAmount": "Up to ₹10,00,000 (No Collateral)",
      "interestRate": "8.5% - 11.5% p.a.",
      "repaymentPeriod": "Up to 5 Years",
      "whoCanApply": "Shopkeepers, grocery store owners, fruit/vegetable sellers, tiffin centers, tailors, service technicians",
      "purpose": "Purchasing retail inventory stock, grocery display racks, commercial refrigerator, toolkits, working capital",
      "benefits": [
        "No mortgage or security collateral required up to ₹10 Lakhs",
        "Three flexible tiers: Shishu (up to ₹50,000), Kishore (₹50,000 - ₹5 Lakhs), Tarun (₹5 - ₹10 Lakhs)",
        "Mudra Debit Card issued for seamless daily working capital withdrawals with zero pre-closure penalty"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women Entrepreneur"
      ],
      "eligibleBusinessTypes": [
        "Retail / Kirana Shop",
        "Food Business",
        "Services / Repair Shop",
        "Textile & Garments"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity and Tax KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Address Proof (Electricity Bill / Rent Agreement)",
          "description": "Shop address proof",
          "status": "Uploaded"
        },
        {
          "docName": "Machinery Quotation & Purchase Estimate",
          "description": "Goods or equipment estimate",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర వ్యాపార రుణం - రూ. 10 లక్షలు)",
      "description": "చిన్న వ్యాపారాలు, కిరాణా దుకాణాలు, వర్క్‌షాప్‌లు, సర్వీస్ సెంటర్లు మరియు సూక్ష్మ తయారీ యూనిట్లకు ఎలాంటి ఆస్తి పూచీకత్తు లేకుండా ₹10 లక్షల వరకు సమగ్ర వ్యాపార రుణాలను అందించే ఫ్లాగ్‌షిప్ కేంద్ర పథకం.",
      "loanAmount": "రూ. 10,00,000 వరకు (పూచీకత్తు అవసరం లేదు)",
      "interestRate": "8.5% - 11.5% (చాలా తక్కువ బ్యాంక్ రేటు)",
      "repaymentPeriod": "5 సంవత్సరాల వరకు (ఫ్లెక్సిబుల్ రీపేమెంట్)",
      "whoCanApply": "చిన్న దుకాణదారులు, కిరాణా యజమానులు, పండ్ల విక్రేతలు, టిఫిన్ సెంటర్లు, కళాకారులు",
      "purpose": "వర్కింగ్ క్యాపిటల్, షాప్ ఆధునీకరణ, కొత్త సరుకుల కొనుగోలు మరియు మెషినరీ కొనుగోలు",
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
        "రిటైల్ / కిరాణా",
        "ఆహార వ్యాపారం",
        "చేతివృత్తులు",
        "చిన్న పరిశ్రమలు"
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
          "docName": "చిరునామా రుజువు (కరెంట్ బిల్లు / అద్దె ఒప్పందం)",
          "description": "షాప్ చిరునామా రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "యంత్రాల కొటేషన్ & కొనుగోలు అంచనా పత్రం",
          "description": "సరుకులు లేదా యంత్రాల అంచనా",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री मुद्रा योजना (PMMY - ₹10 लाख तक बिना गारंटी लोन)",
      "description": "छोटे दुकानदारों, किराना व्यापारियों, वर्कशॉप और सूक्ष्म विनिर्माण इकाइयों को बिना किसी संपत्ति गारंटी के ₹10 लाख तक का व्यवसाय ऋण प्रदान करने वाली भारत सरकार की प्रमुख योजना।",
      "loanAmount": "₹10,00,000 तक (कोई गारंटी नहीं)",
      "interestRate": "8.5% - 11.5%",
      "repaymentPeriod": "5 वर्ष तक",
      "whoCanApply": "छोटे दुकानदार, खुदरा विक्रेता, कारीगर, विनिर्माता",
      "purpose": "कार्यशील पूंजी, दुकान का विस्तार, मशीनरी खरीद और दैनिक इन्वेंट्री",
      "benefits": [
        "₹10 लाख तक किसी भी प्रकार की बंधक या गारंटी की आवश्यकता नहीं",
        "तीन सरल श्रेणियां: शिशु (₹50,000 तक), किशोर (₹5 लाख तक), तरुण (₹10 लाख तक)",
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
        "किराना / खुदरा",
        "खाद्य व्यवसाय",
        "सेवाएं",
        "विनिर्माण"
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
          "docName": "पते का प्रमाण (बिजली बिल / किराया अनुबंध)",
          "description": "दुकान का पता प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "मशीनरी कोटेशन और खरीद लागत अनुमान",
          "description": "सामान या उपकरणों की अनुमानित लागत",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ)",
      "description": "ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳು, ಕಿರಾಣಿ ಅಂಗಡಿಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳಿಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಭದ್ರತೆಯಿಲ್ಲದೆ ₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಒದಗಿಸುವ ಪ್ರಮುಖ ಯೋಜನೆ.",
      "loanAmount": "₹10,00,000 ವರೆಗೆ (ಅಡಮಾನ ರಹಿತ)",
      "interestRate": "8.5% - 11.5%",
      "repaymentPeriod": "5 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳು, ಕಿರಾಣಿ ಮಾಲೀಕರು, ಸೇವಾ ಕೇಂದ್ರಗಳು",
      "purpose": "ದುಡಿಯುವ ಬಂಡವಾಳ, ಅಂಗಡಿ ವಿಸ್ತರಣೆ ಮತ್ತು ಸರಕು ಖರೀದಿ",
      "benefits": [
        "₹10 ಲಕ್ಷದವರೆಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನ ಅಥವಾ ಭದ್ರತೆ ಅಗತ್ಯವಿಲ್ಲ",
        "ಮೂರು ಸರಳ ವಿಭಾಗಗಳು: ಶಿಶು (₹50,000 ವರೆಗೆ), ಕಿಶೋರ್ (₹5 ಲಕ್ಷದವರೆಗೆ), ತರುಣ್ (₹10 ಲಕ್ಷದವರೆಗೆ)",
        "ದೈನಂದಿನ ಖರ್ಚುಗಳಿಗಾಗಿ ಮುದ್ರಾ ಡೆಬಿಟ್ ಕಾರ್ಡ್ ಸೌಲಭ್ಯ"
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
        "ಕಿರಾಣಿ",
        "ಆಹಾರ ಉದ್ಯಮ",
        "ಸೇವೆಗಳು"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿಳಾಸ ಪುರಾವೆ (ವಿದ್ಯುತ್ ಬಿಲ್ / ಬಾಡಿಗೆ ಒಪ್ಪಂದ)",
          "description": "ಅಂಗಡಿಯ ವಿಳಾಸ",
          "status": "Uploaded"
        },
        {
          "docName": "ಯಂತ್ರೋಪಕರಣಗಳ ಕೊಟೇಶನ್ ಮತ್ತು ಅಂದಾಜು ವೆಚ್ಚ",
          "description": "ಅಂದಾಜು ಪಟ್ಟಿ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிரதான் மந்திரி முத்ரா திட்டம் (ரூ. 10 லட்சம் வரை பிணையில்லா கடன்)",
      "description": "சிறு வணிகர்கள், மளிகைக் கடைகள் மற்றும் பட்டறைகளுக்கு எவ்வித சொத்துப் பிணையமும் இன்றி ரூ. 10 லட்சம் வரை வணிகக் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 10,00,000 வரை (பிணை தேவையில்லை)",
      "interestRate": "8.5% - 11.5%",
      "repaymentPeriod": "5 ஆண்டுகள் வரை",
      "whoCanApply": "சிறு வணிகர்கள், சில்லறை விற்பனையாளர்கள், கைவினைஞர்கள்",
      "purpose": "நடைமுறை மூலதனம், கடை விரிவாக்கம் மற்றும் சரக்கு கொள்முதல்",
      "benefits": [
        "ரூ. 10 லட்சம் வரை எந்தவித சொத்து அடமானமும் தேவையில்லை",
        "மூன்று பிரிவுகள்: சிசு (ரூ. 50,000 வரை), கிஷோர் (ரூ. 5 லட்சம் வரை), தருண் (ரூ. 10 லட்சம் வரை)",
        "தினசரி பயன்பாட்டிற்கு ரூபே முத்ரா டெபிட் கார்டு வழங்கப்படுகிறது"
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
        "மளிகை",
        "உணவுத் தொழில்",
        "சேவைகள்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "முகவரி சான்று (மின் கட்டணம் / வாடகை ஒப்பந்தம்)",
          "description": "வணிக முகவரி",
          "status": "Uploaded"
        },
        {
          "docName": "இயந்திரங்களின் விலை மேற்கோள் மற்றும் மதிப்பீடு",
          "description": "மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "प्रधानमंत्री मुद्रा योजना (PMMY - ₹10 लाखांपर्यंत विनातारण कर्ज)",
      "description": "लहान दुकानदार, किराणा व्यापारी आणि वर्कशॉप्सना कोणतीही मालमत्ता गहाण न ठेवता ₹10 लाखांपर्यंत व्यवसाय कर्ज देणारी केंद्र सरकारची योजना.",
      "loanAmount": "₹10,00,000 पर्यंत (विनातारण)",
      "interestRate": "8.5% - 11.5%",
      "repaymentPeriod": "5 वर्षांपर्यंत",
      "whoCanApply": "लहान व्यावसायिक, किरकोळ विक्रेते, कारागीर",
      "purpose": "खेळते भांडवल, दुकानाचा विस्तार आणि माल खरेदी",
      "benefits": [
        "₹10 लाखांपर्यंत कोणत्याही तारणाची किंवा हमीची गरज नाही",
        "तीन सोप्या श्रेणी: शिशु (₹50,000 पर्यंत), किशोर (₹5 लाख पर्यंत), तरुण (₹10 लाख पर्यंत)",
        "दैनिक खेळत्या भांडवलासाठी मुद्रा डेबिट कार्ड दिले जाते"
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
        "सेवा केंद्र"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "पत्ता पुरावा (वीज बिल / भाडे करार)",
          "description": "दुकानाचा पत्ता",
          "status": "Uploaded"
        },
        {
          "docName": "यंत्रसामग्री कोटेशन आणि खरेदी अंदाज",
          "description": "खरेदी अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী মুদ্রা যোজনা (PMMY - ১০ লাখ টাকা পর্যন্ত জামানতমুক্ত ঋণ)",
      "description": "ক্ষুদ্র ব্যবসায়ী, মুদি দোকানদার এবং ওয়ার্কশপ মালিকদের কোনো সম্পত্তি বন্ধক ছাড়াই ₹১০ লাখ পর্যন্ত ঋণ প্রদানকারী কেন্দ্রীয় প্রকল্প।",
      "loanAmount": "₹১০,০০,০০০ পর্যন্ত (জামানতমুক্ত)",
      "interestRate": "৮.৫% - ১১.৫%",
      "repaymentPeriod": "৫ বছর পর্যন্ত",
      "whoCanApply": "ক্ষুদ্র ব্যবসায়ী, খুচরা বিক্রেতা, কারিগর",
      "purpose": "চলতি মূলধন, দোকান সম্প্রসারণ এবং মালামাল ক্রয়",
      "benefits": [
        "₹১০ লাখ পর্যন্ত কোনো ধরনের সম্পত্তি বন্ধক বা গ্যারান্টির প্রয়োজন নেই",
        "তিনটি সহজ ধাপ: শিশু (₹৫০,০০০ পর্যন্ত), কিশোর (₹৫ লাখ পর্যন্ত), তরুণ (₹১০ লাখ পর্যন্ত)",
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
        "সেবা খাত"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ঠিকানার প্রমাণ (বিদ্যুৎ বিল / ভাড়ার চুক্তি)",
          "description": "দোকানের ঠিকানা",
          "status": "Uploaded"
        },
        {
          "docName": "যন্ত্রপাতির কোটেশন ও ক্রয়ের ব্যয় অনুমান",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "PMEGP": {
    "en": {
      "name": "Prime Minister's Employment Generation Programme (PMEGP - Manufacturing & Agro)",
      "description": "Major credit-linked subsidy programme by MSME Ministry & KVIC providing up to 35% capital subsidy for setting up new manufacturing or agro-processing enterprises with project costs up to ₹50 Lakhs.",
      "loanAmount": "Up to ₹50,00,000 (15% - 35% Govt Subsidy)",
      "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
      "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
      "whoCanApply": "Any individual above 18 years, 8th standard pass for projects > ₹10 Lakhs in manufacturing",
      "purpose": "Setting up new food processing mills, oil extraction plants, dal mills, packaging units, and manufacturing workshops",
      "benefits": [
        "Government capital subsidy: 25% for general category in rural (15% urban); 35% for special categories (OBC, SC, ST, Women, PwD)",
        "Beneficiary own contribution is only 5% to 10% of total project cost",
        "Bank finances 90% to 95% of project cost; subsidy released as margin money to lock-in term deposit"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women Entrepreneur",
        "Divyangjan"
      ],
      "eligibleBusinessTypes": [
        "Food Business",
        "Manufacturing & Fabrication",
        "Agro Processing"
      ],
      "minAge": "18 Years",
      "incomeCap": "No income ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity and Tax KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Educational Qualification Certificate (8th Pass+)",
          "description": "Education proof",
          "status": "Uploaded"
        },
        {
          "docName": "Comprehensive Detailed Project Report (DPR)",
          "description": "Machinery, capacity, cash flow projection",
          "status": "Pending"
        },
        {
          "docName": "Caste / Category / Special Certificate",
          "description": "For 35% subsidy eligibility",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "ప్రధాన మంత్రి ఉపాధి కల్పన కార్యక్రమం (PMEGP - 35% భారీ సబ్సిడీ)",
      "description": "కేంద్ర ఎంఎస్ఎంఈ మంత్రిత్వ శాఖ మరియు కేవీఐసీ ద్వారా నిర్వహించబడే ప్రతిష్టాత్మక పథకం. గ్రామీణ ప్రాంతాల్లో 35%, పట్టణాల్లో 25% వరకు భారీ మూలధన సబ్సిడీతో రూ. 50 లక్షల వరకు కొత్త తయారీ మరియు ఆహార ప్రాసెసింగ్ యూనిట్ల స్థాపనకు ఆర్థిక సహాయం అందిస్తుంది.",
      "loanAmount": "రూ. 50,00,000 వరకు (15% - 35% ప్రభుత్వ సబ్సిడీ)",
      "interestRate": "సాధారణ బ్యాంక్ లెండింగ్ రేటు (8.5% - 10.5%)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (మొరటోరియం 6 - 12 నెలలు)",
      "whoCanApply": "18 ఏళ్లు నిండిన వ్యక్తులు (తయారీలో ₹10 లక్షల కంటే ఎక్కువ ప్రాజెక్ట్‌లకు 8వ తరగతి ఉత్తీర్ణత)",
      "purpose": "నూనె మిల్లులు, పిండి మిల్లులు, రైస్ మిల్లులు, ప్యాకేజింగ్ యూనిట్లు మరియు కొత్త కర్మాగారాల ఏర్పాటు",
      "benefits": [
        "ప్రత్యేక వర్గాలకు (మహిళలు, ఎస్సీ, ఎస్టీ, ఓబీసీ, దివ్యాంగులు) గ్రామీణ ప్రాంతంలో 35% భారీ సబ్సిడీ",
        "లబ్ధిదారుడి స్వంత పెట్టుబడి కేవలం 5% నుండి 10% మాత్రమే; మిగిలిన 90% నుండి 95% బ్యాంక్ రుణం",
        "3 సంవత్సరాల లాక్-ఇన్ తర్వాత సబ్సిడీ రుణం నుండి పూర్తిగా రద్దు చేయబడుతుంది"
      ],
      "eligibleCategories": [
        "అన్ని వర్గాలు",
        "జనరల్",
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ",
        "మహిళా పారిశ్రామికవేత్త",
        "దివ్యాంగులు"
      ],
      "eligibleBusinessTypes": [
        "తయారీ పరిశ్రమ",
        "ఆహార ప్రాసెసింగ్",
        "వ్యవసాయ అనుబంధ పరిశ్రమలు"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి ఆదాయ పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు మరియు పన్ను KYC",
          "status": "Uploaded"
        },
        {
          "docName": "విద్యార్హత సర్టిఫికెట్ (8వ తరగతి పాస్)",
          "description": "విద్యార్హత రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ రిపోర్ట్ (DPR)",
          "description": "యంత్రాల ఖర్చు మరియు వ్యాపార ప్రణాళిక",
          "status": "Pending"
        },
        {
          "docName": "కుల / వర్గ ధృవీకరణ పత్రం",
          "description": "35% సబ్సిడీ అర్హత కోసం",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP - विनिर्माण व खाद्य 35% सब्सिडी)",
      "description": "एमएसएमई मंत्रालय और केवीआईसी द्वारा संचालित प्रमुख योजना, जो ग्रामीण क्षेत्रों में 35% और शहरी क्षेत्रों में 25% तक की पूंजीगत सब्सिडी के साथ ₹50 लाख तक की नई विनिर्माण इकाइयां स्थापित करने में सहायता करती है।",
      "loanAmount": "₹50,00,000 तक (15% - 35% सरकारी सब्सिडी)",
      "interestRate": "सामान्य बैंक ब्याज दर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्ष तक (मोरेटोरियम 6 - 12 महीने)",
      "whoCanApply": "18 वर्ष से अधिक आयु के नागरिक (विनिर्माण में ₹10 लाख से अधिक की परियोजना हेतु न्यूनतम 8वीं पास)",
      "purpose": "खाद्य प्रसंस्करण मिल, तेल मिल, दाल मिल, पैकेजिंग और नई विनिर्माण फैक्ट्रियों की स्थापना",
      "benefits": [
        "विशेष श्रेणियों (महिला, एससी, एसटी, ओबीसी, दिव्यांग) को ग्रामीण क्षेत्र में 35% और शहरी में 25% सब्सिडी",
        "लाभार्थी का स्वयं का अंशदान केवल 5% से 10%; शेष 90% से 95% बैंक ऋण",
        "केवीआईसी द्वारा निःशुल्क उद्यमिता विकास प्रशिक्षण (EDP) प्रदान किया जाता है"
      ],
      "eligibleCategories": [
        "सभी श्रेणियां",
        "सामान्य",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्यमी",
        "दिव्यांग"
      ],
      "eligibleBusinessTypes": [
        "विनिर्माण व फैब्रिकेशन",
        "खाद्य प्रसंस्करण",
        "कृषि प्रसंस्करण"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई आय सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान व कर केवाईसी",
          "status": "Uploaded"
        },
        {
          "docName": "शैक्षणिक योग्यता प्रमाण पत्र (8वीं पास)",
          "description": "शैक्षणिक प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "मशीनरी लागत व व्यापार योजना",
          "status": "Pending"
        },
        {
          "docName": "जाति / श्रेणी प्रमाण पत्र",
          "description": "35% सब्सिडी हेतु",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉದ್ಯೋಗ ಸೃಷ್ಟಿ ಕಾರ್ಯಕ್ರಮ (PMEGP - 35% ಸಬ್ಸಿಡಿ)",
      "description": "ಗ್ರಾಮೀಣ ಪ್ರದೇಶದಲ್ಲಿ 35% ಮತ್ತು ನಗರದಲ್ಲಿ 25% ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ₹50 ಲಕ್ಷದವರೆಗೆ ಹೊಸ ಉತ್ಪಾದನಾ ಮತ್ತು ಆಹಾರ ಘಟಕಗಳ ಸ್ಥಾಪನೆಗೆ ನೆರವು ನೀಡುವ ಪ್ರಮುಖ ಯೋಜನೆ.",
      "loanAmount": "₹50,00,000 ವರೆಗೆ (15% - 35% ಸಬ್ಸಿಡಿ)",
      "interestRate": "ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕ್ ದರ (8.5% - 10.5%)",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "18 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ವ್ಯಕ್ತಿಗಳು (ಉತ್ಪಾದನೆಯಲ್ಲಿ ₹10 ಲಕ್ಷ ಮೇಲಿನ ಯೋಜನೆಗೆ 8ನೇ ತರಗತಿ ಪಾಸಾಗಿರಬೇಕು)",
      "purpose": "ಆಹಾರ ಮಿಲ್, ಎಣ್ಣೆ ಗಾಣ, ಪ್ಯಾಕೇಜಿಂಗ್ ಘಟಕಗಳು ಮತ್ತು ಸಣ್ಣ ಕಾರ್ಖಾನೆಗಳ ಸ್ಥಾಪನೆ",
      "benefits": [
        "ವಿಶೇಷ ವರ್ಗಗಳಿಗೆ (ಮಹಿಳೆಯರು, ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ, ಒಬಿಸಿ, ಅಂಗವಿಕಲರು) ಗ್ರಾಮೀಣದಲ್ಲಿ 35% ಸಬ್ಸಿಡಿ",
        "ಫಲಾನುಭವಿಯ ಸ್ವಂತ ಕೊಡುಗೆ ಕೇವಲ 5% ರಿಂದ 10%; ಉಳಿದ 90% ರಿಂದ 95% ಬ್ಯಾಂಕ್ ಸಾಲ",
        "ಉಚಿತ ಉದ್ಯಮಶೀಲತಾ ತರಬೇತಿ (EDP) ಮತ್ತು ಸುಲಭ ಬ್ಯಾಂಕ್ ಅನುಮೋದನೆ"
      ],
      "eligibleCategories": [
        "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        "ಸಾಮಾನ್ಯ",
        "ಒಬಿಸಿ",
        "ಎಸ್‌ಸಿ",
        "ಎಸ್‌ಟಿ",
        "ಮಹಿಳಾ ಉದ್ಯಮಿ",
        "ಅಂಗವಿಕಲರು"
      ],
      "eligibleBusinessTypes": [
        "ಉತ್ಪಾದನೆ",
        "ಆಹಾರ ಸಂಸ್ಕರಣೆ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಆದಾಯ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿದ್ಯಾರ್ಹತೆ ಪ್ರಮಾಣಪತ್ರ (8ನೇ ತೇರ್ಗಡೆ)",
          "description": "ಶಿಕ್ಷಣ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಯಂತ್ರೋಪಕರಣಗಳ ವೆಚ್ಚ",
          "status": "Pending"
        },
        {
          "docName": "ಜಾತಿ / ವರ್ಗ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಸಬ್ಸಿಡಿ ಅರ್ಹತೆಗಾಗಿ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "பிரதமரின் வேலைவாய்ப்பு உருவாக்கும் திட்டம் (PMEGP - 35% மூலதன மானியம்)",
      "description": "ஊரகப் பகுதிகளில் 35% மற்றும் நகர்ப்புறங்களில் 25% மூலதன மானியத்துடன் ரூ. 50 லட்சம் வரை புதிய உற்பத்தி மற்றும் உணவு நிறுவனங்களை அமைக்க உதவும் திட்டம்.",
      "loanAmount": "ரூ. 50,00,000 வரை (15% - 35% மானியம்)",
      "interestRate": "வழக்கமான வங்கி வட்டி (8.5% - 10.5%)",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "18 வயது நிரம்பிய நபர்கள் (ரூ. 10 லட்சத்திற்கு மேற்பட்ட உற்பத்தி திட்டங்களுக்கு 8ஆம் வகுப்பு தேர்ச்சி)",
      "purpose": "உணவு பதப்படுத்தும் ஆலைகள், எண்ணெய் மில்கள், பேக்கேஜிங் அலகுகள் மற்றும் பட்டறைகள் நிறுவுதல்",
      "benefits": [
        "சிறப்பு பிரிவினருக்கு (பெண்கள், எஸ்சி, எஸ்டி, ஓபிசி, மாற்றுத்திறனாளிகள்) ஊரகத்தில் 35% மானியம்",
        "பயனாளியின் சொந்த முதலீடு வெறும் 5% முதல் 10% மட்டுமே; மீதமுள்ள 90% முதல் 95% வங்கி கடன்",
        "இலவச தொழில்முனைவோர் பயிற்சி (EDP) உதவி"
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
        "உற்பத்தி",
        "உணவு பதப்படுத்துதல்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வருமான வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "கல்வித் தகுதிச் சான்றிதழ் (8ஆம் வகுப்பு தேர்ச்சி)",
          "description": "கல்வி சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான திட்ட அறிக்கை (DPR)",
          "description": "இயந்திர செலவு மற்றும் மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "சாதி / சமூக பிரிவு சான்றிதழ்",
          "description": "35% மானியத்திற்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "पंतप्रधान रोजगार निर्मिती कार्यक्रम (PMEGP - 35% भांडवली अनुदान)",
      "description": "ग्रामीण भागात 35% आणि शहरी भागात 25% अनुदानासह ₹50 लाखांपर्यंत नवीन उत्पादन व अन्न प्रक्रिया उद्योग सुरू करण्यासाठी केंद्र सरकारची योजना.",
      "loanAmount": "₹50,00,000 पर्यंत (15% - 35% अनुदान)",
      "interestRate": "सामान्य बँक व्याजदर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "18 वर्षे पूर्ण नागरिक (उत्पादनात ₹10 लाखांपेक्षा जास्त प्रकल्पासाठी 8 वी उत्तीर्ण आवश्यक)",
      "purpose": "अन्न प्रक्रिया गिरण्या, तेल गिरण्या, पॅकेजिंग युनिट्स आणि उत्पादन कारखाने उभारणे",
      "benefits": [
        "विशेष प्रवर्गासाठी (महिला, एससी, एसटी, ओबीसी, दिव्यांग) ग्रामीण भागात 35% अनुदान",
        "लाभार्थ्यांचा स्वतःचा वाटा केवळ 5% ते 10%; उर्वरित 90% ते 95% बँक कर्ज",
        "मोफत उद्योजकता विकास प्रशिक्षण (EDP)"
      ],
      "eligibleCategories": [
        "सर्व प्रवर्ग",
        "खुला",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिला उद्योजक",
        "दिव्यांग"
      ],
      "eligibleBusinessTypes": [
        "उत्पादन व फॅब्रिकेशन",
        "अन्न प्रक्रिया"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "शैक्षणिक पात्रता प्रमाणपत्र (8 वी उत्तीर्ण)",
          "description": "शिक्षण पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "यंत्रसामग्री खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "जात / प्रवर्ग प्रमाणपत्र",
          "description": "35% अनुदानासाठी",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি প্রকল্প (PMEGP - ৩৫% পর্যন্ত সরকারি ভর্তুকি)",
      "description": "গ্রামীণ এলাকায় ৩৫% এবং শহরাঞ্চলে ২৫% অনুদানের সাথে ₹৫০ লাখ পর্যন্ত নতুন উৎপাদন ও খাদ্য প্রক্রিয়াকরণ কারখানা স্থাপনের জন্য প্রধান কেন্দ্রীয় প্রকল্প।",
      "loanAmount": "₹৫০,০০,০০০ পর্যন্ত (১৫% - ৩৫% সরকারি অনুদান)",
      "interestRate": "স্বাভাবিক ব্যাংক সুদের হার (৮.৫% - ১০.৫%)",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "১৮ বছর বা তার বেশি বয়সী ব্যক্তি (উৎপাদন খাতে ₹১০ লাখের বেশি প্রকল্পের জন্য ৮ম শ্রেণী পাস)",
      "purpose": "খাদ্য প্রক্রিয়াকরণ কারখানা, তেলের মিল, প্যাকেজিং ইউনিট ও ওয়ার্কশপ স্থাপন",
      "benefits": [
        "বিশেষ শ্রেণির (নারী, এসসি, এসটি, ওবিসি, বিশেষ চাহিদাসম্পন্ন) জন্য গ্রামে ৩৫% অনুদান",
        "উদ্যোক্তার নিজস্ব বিনিয়োগ মাত্র ৫% থেকে ১০%; অবশিষ্ট ৯০% থেকে ৯৫% ব্যাংক ঋণ",
        "বিনামূল্যে উদ্যোক্তা উন্নয়ন প্রশিক্ষণ (EDP) সুবিধা"
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
        "উৎপাদন শিল্প",
        "খাদ্য প্রক্রিয়াকরণ"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো আয়ের সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "শিক্ষাগত যোগ্যতার শংসাপত্র (৮ম শ্রেণি পাস)",
          "description": "শিক্ষার প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "যন্ত্রপাতির ব্যয় ও পরিকল্পনা",
          "status": "Pending"
        },
        {
          "docName": "জাতিগত / বিশেষ শ্রেণির শংসাপত্র",
          "description": "৩৫% ভর্তুকির জন্য",
          "status": "Uploaded"
        }
      ]
    }
  },
  "CGTMSE": {
    "en": {
      "name": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
      "description": "Joint initiative by Ministry of MSME and SIDBI providing 100% third-party collateral guarantee up to ₹5 Crore for micro and small retail shops, trading, food units, and manufacturers.",
      "loanAmount": "Up to ₹5,00,00,000 (Govt Credit Guarantee)",
      "interestRate": "8.5% - 11.0% p.a.",
      "repaymentPeriod": "Up to 7 - 10 Years",
      "whoCanApply": "New and existing Micro & Small enterprises (Retail traders, wholesalers, manufacturers, service providers)",
      "purpose": "Working capital, shop expansion, purchasing inventory stock, setup of multiple branches, commercial vehicles",
      "benefits": [
        "Zero third-party guarantee or property mortgage needed; Govt trust guarantees up to 85% of credit risk",
        "Covers both term loans and working capital credit limits up to ₹5 Crore",
        "Special 85% coverage ratio for women entrepreneurs, micro enterprises, and aspirational districts"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women Entrepreneur"
      ],
      "eligibleBusinessTypes": [
        "Retail / Kirana Shop",
        "Food Business",
        "Manufacturing & Fabrication",
        "Services / Repair Shop"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity and Tax KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Udyam Registration Certificate",
          "description": "MSME proof",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Statement & Audited Financials",
          "description": "Last 1-2 years turnover",
          "status": "Pending"
        },
        {
          "docName": "Business Model & Expansion Proposal",
          "description": "Working capital requirement statement",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "సూక్ష్మ మరియు చిన్న పరిశ్రమల క్రెడిట్ గ్యారెంటీ ట్రస్ట్ (CGTMSE - రూ. 5 కోట్ల వరకు పూచీకత్తు లేని రుణం)",
      "description": "కేంద్ర ఎంఎస్ఎంఈ మంత్రిత్వ శాఖ మరియు సిడ్బీ (SIDBI) సంయుక్త పథకం. చిన్న కిరాణా దుకాణాలు, హోల్‌సేల్ వ్యాపారాలు, తయారీ మరియు సేవా రంగాలకు ఎలాంటి ఆస్తి లేదా మూడవ వ్యక్తి పూచీకత్తు లేకుండా ₹5 కోట్ల వరకు ప్రభుత్వ క్రెడిట్ గ్యారెంటీతో భారీ రుణాలను అందిస్తుంది.",
      "loanAmount": "రూ. 5,00,00,000 వరకు (ప్రభుత్వ గ్యారెంటీ)",
      "interestRate": "8.5% - 11.0% (బ్యాంక్ ప్రామాణిక రేటు)",
      "repaymentPeriod": "7 నుండి 10 సంవత్సరాల వరకు",
      "whoCanApply": "చిన్న మరియు సూక్ష్మ వ్యాపారులు, కిరాణా దుకాణదారులు, ట్రేడర్స్, తయారీ యూనిట్లు",
      "purpose": "షాప్ విస్తరణ, భారీ మొత్తంలో సరుకుల కొనుగోలు, కొత్త బ్రాంచ్‌ల ఏర్పాటు, వర్కింగ్ క్యాపిటల్",
      "benefits": [
        "ఎలాంటి ఆస్తి తనఖా లేదా గ్యారంటర్లు అవసరం లేదు; 85% వరకు రిస్క్‌ను ప్రభుత్వ ట్రస్ట్ భరిస్తుంది",
        "టర్మ్ లోన్ మరియు క్యాష్ క్రెడిట్ (CC) వర్కింగ్ క్యాపిటల్ రెండింటికీ వర్తిస్తుంది",
        "మహిళా పారిశ్రామికవేత్తలు మరియు సూక్ష్మ యూనిట్లకు అత్యధిక 85% గ్యారెంటీ కవరేజ్"
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
        "రిటైల్ / కిరాణా",
        "ఆహార వ్యాపారం",
        "తయారీ రంగం",
        "సేవా రంగాలు"
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
          "docName": "ఉద్యమ్ రిజిస్ట్రేషన్ సర్టిఫికెట్",
          "description": "ఎంఎస్ఎంఈ ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "గత 1-2 సంవత్సరాల బ్యాంక్ స్టేట్‌మెంట్",
          "description": "వ్యాపార లావాదేవీల రికార్డు",
          "status": "Pending"
        },
        {
          "docName": "వ్యాపార విస్తరణ ప్రతిపాదన",
          "description": "వర్కింగ్ క్యాపిటల్ అవసరాల నివేదిక",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "क्रेडिट गारंटी फंड ट्रस्ट फॉर माइक्रो एंड स्मॉल एंटरप्राइजेज (CGTMSE - ₹5 करोड़ तक गारंटी-मुक्त ऋण)",
      "description": "एमएसएमई मंत्रालय और सिडबी (SIDBI) का संयुक्त उपक्रम, जो खुदरा दुकानों, व्यापार, खाद्य इकाइयों और विनिर्माताओं को बिना किसी संपत्ति बंधक के ₹5 करोड़ तक का सरकारी गारंटी युक्त ऋण उपलब्ध कराता है।",
      "loanAmount": "₹5,00,00,000 तक (सरकारी क्रेडिट गारंटी)",
      "interestRate": "8.5% - 11.0%",
      "repaymentPeriod": "7 से 10 वर्ष तक",
      "whoCanApply": "सूक्ष्म और लघु उद्यमी, किराना व्यापारी, थोक विक्रेता, विनिर्माता",
      "purpose": "कार्यशील पूंजी, दुकान का विस्तार, भारी स्टॉक खरीद, नई शाखाएं स्थापित करना",
      "benefits": [
        "किसी भी संपत्ति बंधक या तीसरे पक्ष की गारंटी की आवश्यकता नहीं; सरकार 85% तक की गारंटी देती है",
        "टर्म लोन और कैश क्रेडिट (CC) दोनों प्रकार की ऋण सुविधाओं पर लागू",
        "महिला उद्यमियों और सूक्ष्म इकाइयों के लिए 85% तक की उच्च गारंटी सुरक्षा"
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
        "किराना / खुदरा",
        "खाद्य व्यवसाय",
        "विनिर्माण",
        "सेवाएं"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान व कर प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "उद्यम पंजीकरण प्रमाण पत्र",
          "description": "एमएसएमई प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक विवरण व वित्तीय रिपोर्ट",
          "description": "टर्नओवर रिकॉर्ड",
          "status": "Pending"
        },
        {
          "docName": "व्यवसाय विस्तार योजना",
          "description": "कार्यशील पूंजी की आवश्यकता",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಫಂಡ್ ಟ್ರಸ್ಟ್ (CGTMSE - ₹5 ಕೋಟಿವರೆಗೆ ಗ್ಯಾರಂಟಿ ರಹಿತ ಸಾಲ)",
      "description": "ಸಣ್ಣ ಮತ್ತು ಸೂಕ್ಷ್ಮ ವ್ಯಾಪಾರಸ್ಥರಿಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನವಿಲ್ಲದೆ ₹5 ಕೋಟಿವರೆಗೆ ಸರ್ಕಾರದ ಗ್ಯಾರಂಟಿಯೊಂದಿಗೆ ಸಾಲ ಒದಗಿಸುವ ಮಹತ್ವದ ಯೋಜನೆ.",
      "loanAmount": "₹5,00,00,000 ವರೆಗೆ (ಸರ್ಕಾರಿ ಗ್ಯಾರಂಟಿ)",
      "interestRate": "8.5% - 11.0%",
      "repaymentPeriod": "7 ರಿಂದ 10 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಕಿರಾಣಿ ಅಂಗಡಿಗಳು, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ಸಣ್ಣ ಕೈಗಾರಿಕೆಗಳು",
      "purpose": "ದುಡಿಯುವ ಬಂಡವಾಳ, ಅಂಗಡಿ ವಿಸ್ತರಣೆ ಮತ್ತು ಸರಕು ದಾಸ್ತಾನು",
      "benefits": [
        "ಯಾವುದೇ ಆಸ್ತಿ ಅಥವಾ ಭದ್ರತೆ ಅಗತ್ಯವಿಲ್ಲ; ಸರ್ಕಾರವು 85% ವರೆಗೆ ನಷ್ಟದ ಹೊಣೆ ಹೊರಲಿದೆ",
        "ಟರ್ಮ್ ಲೋನ್ ಮತ್ತು ವರ್ಕಿಂಗ್ ಕ್ಯಾಪಿಟಲ್ ಎರಡಕ್ಕೂ ಅನ್ವಯ",
        "ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ವಿಶೇಷ ರಿಯಾಯಿತಿ"
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
        "ಕಿರಾಣಿ / ಚಿಲ್ಲರೆ",
        "ಆಹಾರ ಉದ್ಯಮ",
        "ಉತ್ಪಾದನೆ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಉದ್ಯಮ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಎಂಎಸ್‌ಎಂಇ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ವಿವರಣೆ (ಹಣಕಾಸು ವಹಿವಾಟು)",
          "description": "ವಹಿವಾಟು ದಾಖಲೆ",
          "status": "Pending"
        },
        {
          "docName": "ವ್ಯಾಪಾರ ವಿಸ್ತರಣಾ ವರದಿ",
          "description": "ಅವಶ್ಯಕತೆಯ ವಿವರ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "சிறு மற்றும் குறு நிறுவனங்களுக்கான கடன் உத்தரவாத அறக்கட்டளை (CGTMSE - ரூ. 5 கோடி வரை பிணையில்லா கடன்)",
      "description": "சில்லறை வணிகர்கள், மளிகைக் கடைகள் மற்றும் குறு நிறுவனங்களுக்கு எவ்வித சொத்து அடமானமும் இன்றி ரூ. 5 கோடி வரை அரசு உத்தரவாதத்துடன் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 5,00,00,000 வரை (அரசு கடன் உத்தரவாதம்)",
      "interestRate": "8.5% - 11.0%",
      "repaymentPeriod": "7 முதல் 10 ஆண்டுகள் வரை",
      "whoCanApply": "சில்லறை வியாபாரிகள், மளிகைக் கடை உரிமையாளர்கள், உற்பத்தியாளர்கள்",
      "purpose": "நடைமுறை மூலதனம், வணிக விரிவாக்கம் மற்றும் சரக்கு கொள்முதல்",
      "benefits": [
        "எந்தவித சொத்து அடமானமும் தேவையில்லை; 85% வரை அரசு உத்தரவாதம் அளிக்கிறது",
        "தவணை கடன் மற்றும் நடைமுறை மூலதன கடன் இரண்டிற்கும் பொருந்தும்",
        "பெண் தொழில்முனைவோருக்கு கூடுதல் முன்னுரிமை"
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
        "மளிகை",
        "உணவுத் தொழில்",
        "உற்பத்தி",
        "சேவைகள்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "உத்யம் பதிவு சான்றிதழ்",
          "description": "MSME சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு அறிக்கை",
          "description": "நிதி பரிவர்த்தனை பதிவு",
          "status": "Pending"
        },
        {
          "docName": "வணிக விரிவாக்க திட்ட அறிக்கை",
          "description": "மூலதன தேவை அறிக்கை",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "क्रेडिट गॅरंटी फंड ट्रस्ट फॉर मायक्रो अँड स्मॉल एंटरप्रायझेस (CGTMSE - ₹5 कोटींपर्यंत विनातारण कर्ज)",
      "description": "लहान दुकानदार, किरकोळ व्यापारी आणि उत्पादन युनिट्सना कोणतीही मालमत्ता गहाण न ठेवता ₹5 कोटींपर्यंत शासकीय हमीवर कर्ज उपलब्ध करून देणारी योजना.",
      "loanAmount": "₹5,00,00,000 पर्यंत (शासकीय हमी)",
      "interestRate": "8.5% - 11.0%",
      "repaymentPeriod": "7 ते 10 वर्षांपर्यंत",
      "whoCanApply": "किराणा व्यावसायिक, किरकोळ व घाऊक व्यापारी, उत्पादक",
      "purpose": "खेळते भांडवल, दुकानाचा विस्तार आणि माल साठा खरेदी",
      "benefits": [
        "कोणतीही मालमत्ता गहाण ठेवण्याची गरज नाही; सरकार 85% पर्यंतची जोखीम हमी घेते",
        "मुदत कर्ज आणि कॅश क्रेडिट (CC) दोन्हीसाठी उपलब्ध",
        "महिला उद्योजक आणि सूक्ष्म युनिट्सना 85% हमी संरक्षण"
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
        "उत्पादन",
        "सेवा"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "उद्यम नोंदणी प्रमाणपत्र",
          "description": "एमएसएमई पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "बँक स्टेटमेंट व आर्थिक ताळेबंद",
          "description": "आर्थिक उलाढाल",
          "status": "Pending"
        },
        {
          "docName": "व्यवसाय विस्तार प्रकल्प अहवाल",
          "description": "भांडवल आवश्यकता",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "ক্রেডিট গ্যারান্টি ফান্ড ট্রাস্ট (CGTMSE - ₹৫ কোটি পর্যন্ত জামানতমুক্ত ঋণ)",
      "description": "মুদি দোকানদার, খুচরা বিক্রেতা এবং ক্ষুদ্র উৎপাদনকারীদের কোনো সম্পত্তি বন্ধক ছাড়াই ₹৫ কোটি পর্যন্ত সরকারি গ্যারান্টিযুক্ত ঋণ সহায়তা প্রকল্প।",
      "loanAmount": "₹৫,০০,০০,০০০ পর্যন্ত (সরকারি গ্যারান্টি)",
      "interestRate": "৮.৫% - ১১.০%",
      "repaymentPeriod": "৭ থেকে ১০ বছর পর্যন্ত",
      "whoCanApply": "খুচরা ব্যবসায়ী, পাইকারি বিক্রেতা, ক্ষুদ্র কারখানা মালিক",
      "purpose": "চলতি মূলধন, দোকান সম্প্রসারণ, পণ্য ক্রয় ও আধুনিকায়ন",
      "benefits": [
        "কোনো সম্পত্তি বন্ধক বা ব্যক্তিগত গ্যারান্টি প্রয়োজন নেই; সরকার ৮৫% ঝুঁকি বহন করে",
        "মেয়াদী ঋণ এবং চলতি মূলধন উভয় সুবিধার জন্য প্রযোজ্য",
        "নারী উদ্যোক্তা এবং ক্ষুদ্র শিল্পের জন্য বিশেষ সুবিধা"
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
        "উৎপাদন",
        "সেবা খাত"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "উদ্যম নিবন্ধন শংসাপত্র",
          "description": "এমএসএমই প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যাংক স্টেটমেন্ট ও আর্থিক হিসাব",
          "description": "বার্ষিক লেনদেন রেকর্ড",
          "status": "Pending"
        },
        {
          "docName": "ব্যবসা সম্প্রসারণ প্রকল্প প্রস্তাব",
          "description": "মূলধন চাহিদাপত্র",
          "status": "Pending"
        }
      ]
    }
  },
  "PM-VISHWAKARMA": {
    "en": {
      "name": "PM Vishwakarma Yojana (Traditional Artisans & Craftsmen)",
      "description": "Comprehensive central scheme empowering traditional artisans and craftspersons across 18 trades with formal recognition, PM Vishwakarma ID, ₹15,000 modern toolkit grant, and collateral-free credit up to ₹3 Lakhs at 5% subsidized interest.",
      "loanAmount": "Up to ₹3,00,000 (at 5% Concessional Interest)",
      "interestRate": "5% Subsidized (Govt pays 8% subvention)",
      "repaymentPeriod": "18 Months (Tranche 1) to 30 Months (Tranche 2)",
      "whoCanApply": "Traditional artisans across 18 trades (Carpenters, Blacksmiths, Potters, Masons, Tailors, Weavers, Cobblers, Barbers)",
      "purpose": "Procurement of modern digital toolkits, workshop setup, raw material stock, and quality finishing equipment",
      "benefits": [
        "Official PM Vishwakarma digital certificate and recognized ID card",
        "₹15,000 direct cash grant for purchasing modern professional toolkits",
        "100% collateral-free credit: Tranche 1 of ₹1,00,000 and Tranche 2 of ₹2,00,000 at just 5% interest"
      ],
      "eligibleCategories": [
        "Artisans & Craftsmen",
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Handicrafts & Handlooms",
        "Textile & Garments",
        "Carpentry & Masonry"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & Mobile linked KYC",
          "description": "Identity verification",
          "status": "Uploaded"
        },
        {
          "docName": "PM Vishwakarma Artisan ID Card",
          "description": "Trade verification proof",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Account Passbook / Statement",
          "description": "DBT subsidy transfer account",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "పీఎం విశ్వకర్మ యోజన (చేతివృత్తుల వారికి రూ. 3 లక్షల రుణం & రూ. 15,000 టూల్‌కిట్)",
      "description": "18 రకాల సంప్రదాయ చేతివృత్తుల కళాకారులకు అధికారిక గుర్తింపు కార్డు, రూ. 15,000 ఉచిత ఆధునిక పరికరాల గ్రాంట్ మరియు ఎలాంటి ఆస్తి పూచీకత్తు లేకుండా కేవలం 5% అతి తక్కువ వడ్డీకే రూ. 3 లక్షల వరకు రుణాలు అందించే ప్రధాన కేంద్ర పథకం.",
      "loanAmount": "రూ. 3,00,000 వరకు (5% రాయితీ వడ్డీ రేటు)",
      "interestRate": "కేవలం 5% రాయితీ వడ్డీ రేటు",
      "repaymentPeriod": "18 నెలలు (మొదటి విడత) నుండి 30 నెలలు (రెండవ విడత)",
      "whoCanApply": "వడ్రంగి, కమ్మరి, కుమ్మరి, తాపీ మేస్త్రీ, దర్జీ (టైలర్), నేత కార్మికులు, క్షురకులు తదితర 18 వృత్తుల కళాకారులు",
      "purpose": "ఆధునిక పనిముట్ల కొనుగోలు, షాప్ లేదా వర్క్‌షాప్ విస్తరణ, ముడి సరుకుల కొనుగోలు",
      "benefits": [
        "ప్రధాన మంత్రి విశ్వకర్మ అధికారిక సర్టిఫికెట్ మరియు గుర్తింపు కార్డు",
        "ఆధునిక యంత్రాలు/పరికరాలు కొనుగోలు చేయడానికి రూ. 15,00,00 ఉచిత టూల్‌కిట్ ప్రోత్సాహకం",
        "పూచీకత్తు లేకుండా కేవలం 5% వడ్డీతో రూ. 3 లక్షల వరకు సమగ్ర రుణం"
      ],
      "eligibleCategories": [
        "చేతివృత్తుల కళాకారులు",
        "అన్ని వర్గాలు",
        "జనరల్",
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ"
      ],
      "eligibleBusinessTypes": [
        "చేతివృత్తులు",
        "చేనేత",
        "టైలరింగ్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & లింక్ చేయబడిన మొబైల్",
          "description": "గుర్తింపు ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "పీఎం విశ్వకర్మ ఆర్టిజన్ గుర్తింపు కార్డు",
          "description": "చేతివృత్తి ధృవీకరణ పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "బ్యాంక్ పాస్‌బుక్ / స్టేట్‌మెంట్",
          "description": "ఖాతా వివరాలు",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "पीएम विश्वकर्मा योजना (कारीगरों हेतु ₹3 लाख ऋण व ₹15,000 टूलकिट अनुदान)",
      "description": "18 पारंपरिक व्यवसायों के कारीगरों और शिल्पकारों को औपचारिक पहचान, पीएम विश्वकर्मा प्रमाण पत्र, ₹15,000 का निःशुल्क टूलकिट अनुदान और केवल 5% रियायती ब्याज पर ₹3 लाख तक का बिना गारंटी ऋण देने वाली प्रमुख योजना।",
      "loanAmount": "₹3,00,000 तक (5% रियायती ब्याज पर)",
      "interestRate": "केवल 5% रियायती ब्याज दर",
      "repaymentPeriod": "18 से 30 महीने तक",
      "whoCanApply": "बढ़ई, लोहार, कुम्हार, राजमिस्त्री, दर्जी, धोबी, नाई, बुनकर सहित 18 पारंपरिक कारीगर",
      "purpose": "आधुनिक औजारों की खरीद, कार्यशाला की स्थापना और कच्चा माल खरीदना",
      "benefits": [
        "आधिकारिक पीएम विश्वकर्मा डिजिटल प्रमाण पत्र और पहचान पत्र",
        "व्यावसायिक उपकरण खरीदने हेतु ₹15,000 का प्रत्यक्ष टूलकिट अनुदान",
        "बिना किसी गारंटी के केवल 5% रियायती ब्याज दर पर ₹3 लाख तक का आसान ऋण"
      ],
      "eligibleCategories": [
        "पारंपरिक कारीगर",
        "सभी श्रेणियां",
        "सामान्य",
        "ओबीसी",
        "एससी",
        "एसटी"
      ],
      "eligibleBusinessTypes": [
        "हस्तशिल्प व हथकरघा",
        "वस्त्र व सिलाई",
        "कारीगरी"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और मोबाइल लिंक केवाईसी",
          "description": "पहचान सत्यापन",
          "status": "Uploaded"
        },
        {
          "docName": "पीएम विश्वकर्मा कारीगर पहचान पत्र",
          "description": "कारीगर प्रमाण पत्र",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक पासबुक / विवरण",
          "description": "अनुदान अंतरण खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹3 ಲಕ್ಷ ಸಾಲ ಮತ್ತು ₹15,000 ಟೂಲ್‌ಕಿಟ್)",
      "description": "18 ಸಾಂಪ್ರದಾಯಿಕ ವೃತ್ತಿಗಳ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹15,000 ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ ಮತ್ತು ಕೇವಲ 5% ಬಡ್ಡಿದರದಲ್ಲಿ ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ನೀಡುವ ಮಹತ್ವದ ಯೋಜನೆ.",
      "loanAmount": "₹3,00,000 ವರೆಗೆ (5% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ)",
      "interestRate": "5% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ",
      "repaymentPeriod": "18 ರಿಂದ 30 ತಿಂಗಳುಗಳು",
      "whoCanApply": "ಬಡಗಿ, ಕಮ್ಮಾರ, ಕುಂಬಾರ, ದರ್ಜಿ, ನೇಕಾರ, ಕ್ಷೌರಿಕ ಮುಂತಾದ 18 ವೃತ್ತಿಗಳ ಕುಶಲಕರ್ಮಿಗಳು",
      "purpose": "ಆಧುನಿಕ ಉಪಕರಣಗಳ ಖರೀದಿ ಮತ್ತು ಕಾರ್ಯಾಗಾರ ವಿಸ್ತರಣೆ",
      "benefits": [
        "ಅಧಿಕೃತ ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರ",
        "ಉಪಕರಣ ಖರೀದಿಗೆ ₹15,000 ಉಚಿತ ಟೂಲ್‌ಕಿಟ್ ಪ್ರೋತ್ಸಾಹಧನ",
        "ಯಾವುದೇ ಭದ್ರತೆಯಿಲ್ಲದೆ ಕೇವಲ 5% ಬಡ್ಡಿಗೆ ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ"
      ],
      "eligibleCategories": [
        "ಕುಶಲಕರ್ಮಿಗಳು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಕರಕುಶಲ",
        "ನೇಕಾರಿಕೆ",
        "ಟೈಲರಿಂಗ್"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಮೊಬೈಲ್ ಕೆವೈಸಿ",
          "description": "ಗುರುತಿನ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಕುಶಲಕರ್ಮಿ ಕಾರ್ಡ್",
          "description": "ವೃತ್ತಿ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "பிரதமர் விஸ்வகர்மா திட்டம் (கைவினைஞர்களுக்கு ரூ. 3 லட்சம் கடன் & ரூ. 15,000 உபகரண மானியம்)",
      "description": "18 பாரம்பரிய தொழில் கைவினைஞர்களுக்கு அதிகாரப்பூர்வ அடையாள அட்டை, ரூ. 15,000 நவீன உபகரண மானியம் மற்றும் 5% குறைந்த வட்டியில் ரூ. 3 லட்சம் வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 3,00,000 வரை (5% மானிய வட்டி)",
      "interestRate": "5% மானிய வட்டி விகிதம்",
      "repaymentPeriod": "18 முதல் 30 மாதங்கள் வரை",
      "whoCanApply": "தச்சர், கொல்லர், குயவர், கொத்தனார், தையல்காரர், நெசவாளர் உள்ளிட்ட 18 தொழில் கைவினைஞர்கள்",
      "purpose": "நவீன உபகரணங்கள் வாங்குதல் மற்றும் பணிமனை விரிவாக்கம்",
      "benefits": [
        "அரசு அங்கீகரித்த பிரதமர் விஸ்வகர்மா சான்றிதழ் மற்றும் அடையாள அட்டை",
        "நவீன உபகரணங்கள் வாங்க ரூ. 15,000 நேரடி பண மானியம்",
        "எந்தவித சொத்து பிணையமும் இன்றி 5% வட்டியில் ரூ. 3 லட்சம் வரை கடன்"
      ],
      "eligibleCategories": [
        "கைவினைஞர்கள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "கைவினை",
        "கைத்தறி",
        "தையல்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பிஎம் விஸ்வகர்மா அடையாள அட்டை",
          "description": "கைவினைஞர் சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "வங்கி பாஸ்புக்",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "पीएम विश्वकर्मा योजना (कारागिरांसाठी ₹3 लाख कर्ज व ₹15,000 टूलकिट अनुदान)",
      "description": "18 पारंपारिक व्यवसायांतील कारागिरांना ₹15,000 टूलकिट अनुदान आणि फक्त 5% सवलतीच्या व्याजदराने ₹3 लाखांपर्यंत विनातारण कर्ज देणारी केंद्र सरकारची योजना.",
      "loanAmount": "₹3,00,000 पर्यंत (5% सवलतीचा दर)",
      "interestRate": "5% सवलतीचा व्याजदर",
      "repaymentPeriod": "18 ते 30 महिन्यांपर्यंत",
      "whoCanApply": "सुतार, लोहार, कुंभार, गवंडी, शिंपी, विणकर इत्यादी 18 पारंपारिक कारागीर",
      "purpose": "आधुनिक अवजारे खरेदी आणि कार्यशाळा उभारणी",
      "benefits": [
        "18 पारंपारिक कारागिरांना अधिकृत ओळखपत्र आणि प्रमाणपत्र",
        "आधुनिक अवजारे खरेदीसाठी ₹15,000 चे मोफत टूलकिट अनुदान",
        "कोणत्याही हमीशिवाय फक्त 5% सवलतीच्या व्याजदराने ₹3 लाखांपर्यंतचे कर्ज"
      ],
      "eligibleCategories": [
        "पारंपारिक कारागीर",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "हस्तकला",
        "हातमाग",
        "शिंपीकाम"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि मोबाईल केवायसी",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "पीएम विश्वकर्मा कारागीर ओळखपत्र",
          "description": "कारागीर प्रमाणपत्र",
          "status": "Uploaded"
        },
        {
          "docName": "बँक पासबुक",
          "description": "बँक खाते पुरावा",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী বিশ্বকর্মা যোজনা (কারিগরদের জন্য ₹৩ লাখ ঋণ ও ₹১৫,০০০ টুলকিট অনুদান)",
      "description": "১৮টি ঐতিহ্যবাহী পেশার কারিগরদের ₹১৫,০০০ টুলকিট অনুদান এবং মাত্র ৫% রেয়াতি সুদে ₹৩ লাখ পর্যন্ত জামানতমুক্ত ঋণ সুবিধা প্রদানকারী প্রকল্প।",
      "loanAmount": "₹৩,০০,০০০ পর্যন্ত (৫% রেয়াতি সুদ)",
      "interestRate": "৫% রেয়াতি সুদের হার",
      "repaymentPeriod": "১৮ থেকে ৩০ মাস পর্যন্ত",
      "whoCanApply": "ছুতোর, কামার, কুমার, রাজমিস্ত্রি, দর্জি, তাঁতি সহ ১৮টি পেশার কারিগর",
      "purpose": "আধুনিক যন্ত্রপাতি ক্রয় ও ওয়ার্কশপ স্থাপন",
      "benefits": [
        "১৮টি পেশার কারিগরদের জন্য অফিসিয়াল পরিচয়পত্র এবং শংসাপত্র",
        "আধুনিক যন্ত্রপাতি কেনার জন্য ₹১৫,০০০ বিনামূল্যের টুলকিট অনুদান",
        "কোনো জামানত ছাড়াই মাত্র ৫% রেয়াতি সুদের হারে ₹৩ লাখ পর্যন্ত সহজ ঋণ"
      ],
      "eligibleCategories": [
        "কারিগর",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "হস্তশিল্প",
        "তাঁতশিল্প",
        "দর্জি"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও মোবাইল কেওয়াইসি",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "পিএম বিশ্বকর্মা কারিগর পরিচয়পত্র",
          "description": "কারিগর শংসাপত্র",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যাংক পাসবুক",
          "description": "ব্যাংক হিসাব প্রমাণ",
          "status": "Uploaded"
        }
      ]
    }
  },
  "WEAVER-MUDRA": {
    "en": {
      "name": "Weaver Mudra Scheme & Margin Money Assistance",
      "description": "Ministry of Textiles scheme providing handloom weavers with collateral-free concessional loans up to ₹2 Lakhs, 7% interest subvention, and direct margin money assistance up to ₹20,000.",
      "loanAmount": "Up to ₹2,00,000 (with Margin Money Grant)",
      "interestRate": "6.0% (after 7% Govt Interest Subvention)",
      "repaymentPeriod": "Up to 3 Years",
      "whoCanApply": "Individual handloom weavers, master weavers, handloom cooperative society members",
      "purpose": "Purchase of yarn, dyes, improved loom jacquards, working capital for weaving orders",
      "benefits": [
        "Direct margin money assistance of up to ₹20,000 credited directly to bank account",
        "7% interest subvention for 3 years, bringing effective borrowing cost down to ~6%",
        "Weaver Credit Card issued for seamless purchase of raw materials"
      ],
      "eligibleCategories": [
        "All Categories",
        "Weavers",
        "OBC",
        "SC",
        "ST",
        "Women"
      ],
      "eligibleBusinessTypes": [
        "Handicrafts & Handlooms",
        "Textile & Garments"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & Weaver Pehchan Card",
          "description": "Handloom weaver identity proof",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Account Passbook",
          "description": "Margin money deposit account",
          "status": "Uploaded"
        },
        {
          "docName": "Yarn / Raw Material Quotation",
          "description": "Cost estimation",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "చేనేత ముద్ర పథకం మరియు మార్జిన్ మనీ సహాయం (రూ. 2 లక్షల చేనేత రుణం)",
      "description": "చేనేత కార్మికులకు నూలు, రంగులు మరియు ఆధునిక మగ్గాల కొనుగోలు కోసం ఎలాంటి పూచీకత్తు లేకుండా ₹2 లక్షల వరకు రుణం, 7% వడ్డీ రాయితీ మరియు ప్రభుత్వం నుండి ₹20,000 వరకు ఉచిత మార్జిన్ మనీ అందించే ప్రత్యేక పథకం.",
      "loanAmount": "రూ. 2,00,000 వరకు (ఉచిత మార్జిన్ మనీతో)",
      "interestRate": "కేవలం 6.0% (7% ప్రభుత్వ వడ్డీ సబ్సిడీతో)",
      "repaymentPeriod": "3 సంవత్సరాల వరకు",
      "whoCanApply": "చేనేత కార్మికులు, మాస్టర్ వీవర్స్, చేనేత సహకార సంఘాల సభ్యులు",
      "purpose": "నూలు, రంగులు, జాకార్డ్ బాక్స్‌లు, కొత్త మగ్గాల కొనుగోలు మరియు ఆర్డర్ల నిర్వహణ",
      "benefits": [
        "ప్రభుత్వం ద్వారా లబ్ధిదారుని ఖాతాలో రూ. 20,000 వరకు నేరుగా మార్జిన్ మనీ జమ",
        "3 సంవత్సరాల పాటు 7% వడ్డీ సబ్సిడీ; నికర వడ్డీ కేవలం 6% మాత్రమే",
        "నూలు కొనుగోలు కోసం ప్రత్యేక చేనేత క్రెడిట్ కార్డు జారీ"
      ],
      "eligibleCategories": [
        "చేనేత కార్మికులు",
        "అన్ని వర్గాలు",
        "మహిళలు"
      ],
      "eligibleBusinessTypes": [
        "చేనేత",
        "చేతివృత్తులు",
        "వస్త్ర వ్యాపారం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & చేనేత పెహచాన్ కార్డు",
          "description": "చేనేత కార్మిక గుర్తింపు కార్డు",
          "status": "Uploaded"
        },
        {
          "docName": "బ్యాంక్ ఖాతా పాస్‌బుక్",
          "description": "మార్జిన్ మనీ జమ ఖాతా",
          "status": "Uploaded"
        },
        {
          "docName": "నూలు / ముడి సరుకుల కొటేషన్",
          "description": "సరుకుల కొనుగోలు అంచనా",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "बुनकर मुद्रा योजना व मार्जिन मनी सहायता (हथकरघा बुनकरों हेतु ₹2 लाख ऋण)",
      "description": "हथकरघा बुनकरों को धागा, रंग और आधुनिक करघे खरीदने हेतु बिना किसी गारंटी के ₹2 लाख तक का रियायती ऋण, 7% ब्याज अनुदान और ₹20,000 तक की प्रत्यक्ष मार्जिन मनी सहायता देने वाली योजना।",
      "loanAmount": "₹2,00,000 तक (मार्जिन मनी अनुदान सहित)",
      "interestRate": "लगभग 6.0% (7% ब्याज अनुदान के बाद)",
      "repaymentPeriod": "3 वर्ष तक",
      "whoCanApply": "व्यक्तिगत हथकरघा बुनकर, मास्टर बुनकर, हथकरघा सहकारी समितियों के सदस्य",
      "purpose": "सूत (धागा), रंग, जैकार्ड बॉक्स, नए करघे और दैनिक कच्चा माल खरीदना",
      "benefits": [
        "बुनकर के खाते में ₹20,000 तक की प्रत्यक्ष मार्जिन मनी सहायता राशि",
        "3 वर्ष हेतु 7% ब्याज उपदान; प्रभावी ब्याज दर मात्र 6% रह जाती है",
        "कच्चा माल खरीदने हेतु बुनकर क्रेडिट कार्ड प्रदान किया जाता है"
      ],
      "eligibleCategories": [
        "बुनकर",
        "सभी श्रेणियां",
        "महिलाएं"
      ],
      "eligibleBusinessTypes": [
        "हथकरघा व हस्तशिल्प",
        "वस्त्र निर्माण"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और बुनकर पहचान कार्ड (Pehchan)",
          "description": "बुनकर पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक खाता पासबुक",
          "description": "मार्जिन मनी अंतरण खाता",
          "status": "Uploaded"
        },
        {
          "docName": "धागा व कच्चा माल खरीद कोटेशन",
          "description": "सामग्री लागत अनुमान",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ನೇಕಾರ ಮುದ್ರಾ ಯೋಜನೆ & ಮಾರ್ಜಿನ್ ಹಣ ಸಹಾಯ (₹2 ಲಕ್ಷ ಸಾಲ)",
      "description": "ಕೈಮಗ್ಗ ನೇಕಾರರಿಗೆ ನೂಲು, ಬಣ್ಣಗಳು ಮತ್ತು ಮಗ್ಗಗಳ ಖರೀದಿಗೆ ₹2 ಲಕ್ಷದವರೆಗೆ ಸಾಲ, 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಮತ್ತು ₹20,000 ಉಚಿತ ಮಾರ್ಜಿನ್ ಹಣ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹2,00,000 ವರೆಗೆ (ಮಾರ್ಜಿನ್ ಹಣದೊಂದಿಗೆ)",
      "interestRate": "6.0% (7% ಸಬ್ಸಿಡಿ ನಂತರ)",
      "repaymentPeriod": "3 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಕೈಮಗ್ಗ ನೇಕಾರರು, ಸಹಕಾರ ಸಂಘಗಳ ಸದಸ್ಯರು",
      "purpose": "ನೂಲು, ಬಣ್ಣಗಳು ಮತ್ತು ನೇಕಾರಿಕೆ ಸಲಕರಣೆಗಳ ಖರೀದಿ",
      "benefits": [
        "ಖಾತೆಗೆ ನೇರವಾಗಿ ₹20,000 ವರೆಗೆ ಮಾರ್ಜಿನ್ ಮನಿ ಜಮೆ",
        "7% ವರೆಗೆ ಸರ್ಕಾರದ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಸೌಲಭ್ಯ",
        "ನೂಲು ಖರೀದಿಗೆ ನೇಕಾರ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್"
      ],
      "eligibleCategories": [
        "ನೇಕಾರರು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ನೇಕಾರಿಕೆ",
        "ವಸ್ತ್ರೋದ್ಯಮ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ & ನೇಕಾರ ಗುರುತಿನ ಚೀಟಿ (ಪೆಹಚಾನ್)",
          "description": "ನೇಕಾರ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕಚ್ಚಾ ಸಾಮಗ್ರಿಗಳ ಅಂದಾಜು ಪಟ್ಟಿ",
          "description": "ವೆಚ್ಚ ಅಂದಾಜು",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "நெசவாளர் முத்ரா திட்டம் & விளிம்பு தொகை உதவி (ரூ. 2 லட்சம் கடன்)",
      "description": "கைத்தறி நெசவாளர்களுக்கு நூல், சாயங்கள் மற்றும் நவீன தறிகள் வாங்க ரூ. 2 லட்சம் வரை கடன், 7% வட்டி மானியம் மற்றும் ரூ. 20,000 வரை அரசு விளிம்புத் தொகை வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 2,00,000 வரை (விளிம்பு தொகை மானியத்துடன்)",
      "interestRate": "6.0% (7% வட்டி மானியத்திற்கு பின்)",
      "repaymentPeriod": "3 ஆண்டுகள் வரை",
      "whoCanApply": "கைத்தறி நெசவாளர்கள், நெசவாளர் கூட்டுறவு சங்க உறுப்பினர்கள்",
      "purpose": "நூல், சாயங்கள், தறிகள் மற்றும் மூலப்பொருட்கள் வாங்குதல்",
      "benefits": [
        "வங்கிக் கணக்கில் ரூ. 20,000 வரை நேரடி விளிம்புத் தொகை மானியம்",
        "3 ஆண்டுகளுக்கு 7% அரசு வட்டி மானியம்; நிகர வட்டி வெறும் 6%",
        "நூல் கொள்முதலுக்கு நெசவாளர் கடன் அட்டை"
      ],
      "eligibleCategories": [
        "நெசவாளர்கள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "கைத்தறி",
        "ஜவுளி"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & நெசவாளர் அடையாள அட்டை",
          "description": "நெசவாளர் சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        },
        {
          "docName": "நூல் மற்றும் மூலப்பொருள் மதிப்பீடு",
          "description": "செலவு மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "विणकर मुद्रा योजना व मार्जिन मनी सहाय्य (हातमाग विणकरांसाठी ₹2 लाख कर्ज)",
      "description": "हातमाग विणकरांना सूत, रंग आणि सुधारित माग खरेदीसाठी ₹2 लाखांपर्यंत कर्ज, 7% व्याज अनुदान आणि ₹20,000 पर्यंत थेट मार्जिन मनी देणारी योजना.",
      "loanAmount": "₹2,00,000 पर्यंत (मार्जिन मनी अनुदानासह)",
      "interestRate": "सुमारे 6.0% (7% सवलतीनंतर)",
      "repaymentPeriod": "3 वर्षांपर्यंत",
      "whoCanApply": "हातमाग विणकर, विणकर सहकारी संस्थांचे सदस्य",
      "purpose": "सूत, रंग, नवीन हातमाग आणि खेळते भांडवल",
      "benefits": [
        "बँक खात्यात ₹20,000 पर्यंत थेट शासकीय मार्जिन मनी",
        "7% शासकीय व्याज अनुदान; अत्यंत माफक 6% व्याजदर",
        "सूत खरेदीसाठी विणकर क्रेडिट कार्ड"
      ],
      "eligibleCategories": [
        "विणकर",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "हातमाग व वस्त्रोद्योग"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि विणकर ओळखपत्र (Pehchan)",
          "description": "विणकर पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "बँक पासबुक",
          "description": "खाते पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "कच्चा माल खरेदी अंदाज कोटेशन",
          "description": "खर्च अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "তাঁতি মুদ্রা যোজনা ও মার্জিন মানি সহায়তা (তাঁতিদের জন্য ₹২ লাখ ঋণ)",
      "description": "হস্তচালিত তাঁতিদের সুতা, রঙ ও উন্নত তাঁত ক্রয়ের জন্য ₹২ লাখ পর্যন্ত জামানতমুক্ত ঋণ, ৭% সুদ ভর্তুকি এবং ₹২০,০০০ মার্জিন মানি অনুদান প্রকল্প।",
      "loanAmount": "₹২,০০,০০০ পর্যন্ত (মার্জিন মানি অনুদানসহ)",
      "interestRate": "প্রায় ৬.০% (৭% সুদ ভর্তুকির পরে)",
      "repaymentPeriod": "৩ বছর পর্যন্ত",
      "whoCanApply": "হস্তচালিত তাঁতি, তাঁতি সমবায় সমিতির সদস্যবৃন্দ",
      "purpose": "সুতা, রঙ, তাঁতের সরঞ্জাম ও কাঁচামাল ক্রয়",
      "benefits": [
        "ব্যাংক অ্যাকাউন্টে সরাসরি ₹২০,০০০ পর্যন্ত মার্জিন মানি অনুদান",
        "৩ বছরের জন্য ৭% সরকারি সুদ ভর্তুকি; কার্যকর সুদ মাত্র ৬%",
        "কাঁচামাল ক্রয়ের জন্য তাঁতি ক্রেডিট কার্ড প্রদান"
      ],
      "eligibleCategories": [
        "তাঁতি",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "তাঁতশিল্প",
        "বস্ত্রশিল্প"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও তাঁতি পরিচয়পত্র (Pehchan)",
          "description": "তাঁতি প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যাংক পাসবুক",
          "description": "অনুদান প্রাপ্তির অ্যাকাউন্ট",
          "status": "Uploaded"
        },
        {
          "docName": "সুতা ও কাঁচামাল ক্রয়ের কোটেশন",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "MCY": {
    "en": {
      "name": "Mahila Coir Yojana (MCY - 75% Women Bio-Fiber Subsidy)",
      "description": "Flagship women empowerment scheme by Coir Board providing 75% direct capital subsidy on motorized coir spinning ratts, yarn processing, and bio-fiber equipment to rural women artisans.",
      "loanAmount": "Subsidy up to 75% of equipment cost (Up to ₹5 Lakhs)",
      "interestRate": "Nil / Zero Interest on Subsidy portion",
      "repaymentPeriod": "Up to 3 Years (for remaining 25% loan if taken)",
      "whoCanApply": "Rural women artisans trained in coir processing, women self-help groups (SHGs)",
      "purpose": "Procurement of motorized traditional ratts, automatic coir spinning units, matting looms",
      "benefits": [
        "75% non-repayable capital subsidy on motorized spinning equipment",
        "Beneficiary contribution is only 25% (eligible for micro-loan under Mudra)",
        "Free 2-month certified training with monthly stipend provided by Coir Board"
      ],
      "eligibleCategories": [
        "Women Artisans",
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Handicrafts & Handlooms",
        "Manufacturing & Fabrication",
        "Bio-Fiber"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card",
          "description": "Identity proof",
          "status": "Uploaded"
        },
        {
          "docName": "Coir Board Training Certificate",
          "description": "Skill training qualification",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Account Passbook",
          "description": "Subsidy transfer account",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "మహిళా కాయిర్ యోజన (MCY - 75% మహిళా కాయిర్ సబ్సిడీ)",
      "description": "కాయిర్ బోర్డు ద్వారా గ్రామీణ మహిళా కళాకారుల కోసం రూపొందించబడిన పథకం. కొబ్బరి పీచు తీసే యంత్రాలు, ఆటోమేటిక్ నూలు వడికే రాట్నాల కొనుగోలుపై 75% భారీ మూలధన సబ్సిడీని అందిస్తుంది.",
      "loanAmount": "యంత్రాల వ్యయంపై 75% భారీ సబ్సిడీ (రూ. 5 లక్షల వరకు)",
      "interestRate": "సబ్సిడీపై వడ్డీ లేదు (మిగిలిన 25% కు సాధారణ బ్యాంకు రేటు)",
      "repaymentPeriod": "3 సంవత్సరాల వరకు",
      "whoCanApply": "కాయిర్ బోర్డు శిక్షణ పొందిన గ్రామీణ మహిళలు, మహిళా స్వయం సహాయక సంఘాలు (SHGs)",
      "purpose": "మోటరైజ్డ్ కాయిర్ రాట్నాలు, కొబ్బరి పీచు ప్రాసెసింగ్ యంత్రాలు, మ్యాట్ల తయారీ యూనిట్లు",
      "benefits": [
        "ఆధునిక మోటరైజ్డ్ పరికరాలపై 75% తిరిగి చెల్లించాల్సిన అవసరం లేని ప్రభుత్వ సబ్సిడీ",
        "మహిళా లబ్ధిదారురాలి వాటా కేవలం 25% మాత్రమే (ముద్ర లోన్ ద్వారా పొందవచ్చు)",
        "స్టైపెండ్‌తో కూడిన ఉచిత 2 నెలల కాయిర్ బోర్డు నైపుణ్య శిక్షణ"
      ],
      "eligibleCategories": [
        "మహిళలు",
        "చేతివృత్తులు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "చేతివృత్తులు",
        "కొబ్బరి పీచు పరిశ్రమ"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు",
          "description": "గుర్తింపు ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "కాయిర్ బోర్డు శిక్షణ సర్టిఫికెట్",
          "description": "శిక్షణ ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "బ్యాంక్ పాస్‌బుక్",
          "description": "సబ్సిడీ జమ ఖాతా",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "महिला कॉयर योजना (MCY - ग्रामीण महिलाओं हेतु 75% सब्सिडी)",
      "description": "कॉयर बोर्ड द्वारा ग्रामीण महिला कारीगरों को सशक्त बनाने हेतु मोटर चालित कॉयर कताई रैट्स और उपकरण खरीद पर 75% की भारी पूंजीगत सब्सिडी प्रदान करने वाली प्रमुख योजना।",
      "loanAmount": "उपकरण लागत पर 75% तक सरकारी सब्सिडी (₹5 लाख तक)",
      "interestRate": "सब्सिडी पर शून्य ब्याज",
      "repaymentPeriod": "3 वर्ष तक",
      "whoCanApply": "कॉयर कताई में प्रशिक्षित ग्रामीण महिलाएं, महिला स्वयं सहायता समूह (SHGs)",
      "purpose": "मोटर चालित कॉयर रैट्स, स्वचालित कताई इकाइयां, चटाई बनाने के करघे खरीदना",
      "benefits": [
        "आधुनिक मोटर चालित कताई उपकरणों पर 75% गैर-वापसी योग्य सरकारी सब्सिडी",
        "महिला लाभार्थी का अंशदान केवल 25% (मुद्रा ऋण द्वारा वित्तपोषित)",
        "मासिक वजीफे के साथ कॉयर बोर्ड द्वारा 2 महीने का निःशुल्क व्यावहारिक प्रशिक्षण"
      ],
      "eligibleCategories": [
        "महिलाएं",
        "कारीगर",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "हस्तशिल्प",
        "कॉयर व फाइबर उद्योग"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "कॉयर बोर्ड प्रशिक्षण प्रमाण पत्र",
          "description": "प्रशिक्षण प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक पासबुक",
          "description": "सब्सिडी अंतरण खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಮಹಿಳಾ ಕಾಯರ್ ಯೋಜನೆ (MCY - 75% ಬೃಹತ್ ಸಬ್ಸಿಡಿ)",
      "description": "ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ತೆಂಗಿನ ನಾರಿನ ಸಂಸ್ಕರಣಾ ಯಂತ್ರೋಪಕರಣಗಳ ಖರೀದಿಗೆ 75% ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ ನೀಡುವ ಕಾಯರ್ ಮಂಡಳಿಯ ಮಹತ್ವದ ಯೋಜನೆ.",
      "loanAmount": "ಉಪಕರಣ ವೆಚ್ಚದ 75% ಸಬ್ಸಿಡಿ (₹5 ಲಕ್ಷದವರೆಗೆ)",
      "interestRate": "ಸಬ್ಸಿಡಿಗೆ ಬಡ್ಡಿಯಿಲ್ಲ",
      "repaymentPeriod": "3 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ತರಬೇತಿ ಪಡೆದ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರು, ಸ್ವಸಹಾಯ ಸಂಘಗಳು",
      "purpose": "ಮೋಟಾರೈಸ್ಡ್ ಕಾಯರ್ ನೂಲುವ ಯಂತ್ರಗಳು, ಚಾಪೆ ನೇಯ್ಗೆ ಮಗ್ಗಗಳು",
      "benefits": [
        "ಯಂತ್ರೋಪಕರಣಗಳ ಮೇಲೆ 75% ಮರುಪಾವತಿಸಬೇಕಿಲ್ಲದ ಸಬ್ಸಿಡಿ",
        "ಮಹಿಳೆಯರ ಪಾಲು ಕೇವಲ 25% ಮಾತ್ರ",
        "ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಶಿಷ್ಯವೇತನ"
      ],
      "eligibleCategories": [
        "ಮಹಿಳೆಯರು",
        "ಕುಶಲಕರ್ಮಿಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಕರಕುಶಲ",
        "ನಾರಿನ ಉದ್ಯಮ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕಾಯರ್ ಬೋರ್ಡ್ ತರಬೇತಿ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ತರಬೇತಿ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "மகிளா கயிறு திட்டம் (MCY - பெண்களுக்கு 75% நேரடி மானியம்)",
      "description": "கிராமப்புற பெண்கள் கயிறு திரிக்கும் இயந்திரங்கள் மற்றும் உபகரணங்கள் வாங்க 75% மூலதன மானியம் வழங்கும் கயிறு வாரியத்தின் திட்டம்.",
      "loanAmount": "உபகரண செலவில் 75% மானியம் (ரூ. 5 லட்சம் வரை)",
      "interestRate": "மானியம் பெற வட்டி இல்லை",
      "repaymentPeriod": "3 ஆண்டுகள் வரை",
      "whoCanApply": "பயிற்சி பெற்ற கிராமப்புற பெண்கள், மகளிர் சுயஉதவி குழுக்கள்",
      "purpose": "மோட்டார் பொருத்தப்பட்ட கயிறு திரிக்கும் ராட்டினங்கள் மற்றும் தறிகள் வாங்குதல்",
      "benefits": [
        "நவீன இயந்திரங்கள் வாங்க 75% அரசு மூலதன மானியம்",
        "பெண்களின் சொந்த பங்களிப்பு வெறும் 25% மட்டுமே",
        "ஊக்கத்தொகையுடன் கூடிய 2 மாத இலவச பயிற்சி"
      ],
      "eligibleCategories": [
        "பெண்கள்",
        "கைவினைஞர்கள்"
      ],
      "eligibleBusinessTypes": [
        "கைவினை",
        "கயிறு தொழில்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "கயிறு வாரிய பயிற்சி சான்றிதழ்",
          "description": "பயிற்சி சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "महिला कॉयर योजना (MCY - ग्रामीण महिलांसाठी 75% अनुदान)",
      "description": "नारळ दोरी व फायबर उद्योगात काम करणाऱ्या ग्रामीण महिलांना यंत्रसामग्री खरेदीवर 75% भांडवली अनुदान देणारी कॉयर बोर्डाची योजना.",
      "loanAmount": "यंत्रांच्या खर्चावर 75% शासकीय अनुदान (₹5 लाखांपर्यंत)",
      "interestRate": "अनुदानावर शून्य व्याज",
      "repaymentPeriod": "3 वर्षांपर्यंत",
      "whoCanApply": "प्रशिक्षित ग्रामीण महिला कारागीर, महिला बचत गट",
      "purpose": "मोटार चालित कताई यंत्रे, दोरी व चटई बनवणारी यंत्रसामग्री",
      "benefits": [
        "आधुनिक यंत्रसामग्रीवर 75% परत न करावे लागणारे शासकीय अनुदान",
        "महिला लाभार्थ्यांचा वाटा फक्त 25% (मुद्रा कर्जातून उपलब्ध)",
        "स्टायपेंडसह 2 महिन्यांचे मोफत व्यावसायिक प्रशिक्षण"
      ],
      "eligibleCategories": [
        "महिला",
        "कारागीर"
      ],
      "eligibleBusinessTypes": [
        "हस्तकला",
        "कॉयर उद्योग"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "कॉयर बोर्ड प्रशिक्षण प्रमाणपत्र",
          "description": "प्रशिक्षण पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "बँक पासबुक",
          "description": "खाते पुरावा",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "মহিলা কয়্যার যোজনা (MCY - গ্রামীণ মহিলাদের জন্য ৭৫% অনুদান)",
      "description": "কয়্যার বোর্ডের অধীনে নারকেলের ছোবড়া ও দড়ি প্রক্রিয়াকরণের আধুনিক যন্ত্রপাতি কেনার জন্য গ্রামীণ মহিলাদের ৭৫% মূলধন ভর্তুকি প্রদানকারী প্রকল্প।",
      "loanAmount": "যন্ত্রপাতির মূল্যের ৭৫% সরকারি অনুদান (₹৫ লাখ পর্যন্ত)",
      "interestRate": "অনুদানে কোনো সুদ নেই",
      "repaymentPeriod": "৩ বছর পর্যন্ত",
      "whoCanApply": "প্রশিক্ষিত গ্রামীণ মহিলা কারিগর, মহিলা স্বনির্ভর দল",
      "purpose": "মোটরচালিত কাতা র্যাট, ছোবড়া প্রক্রিয়াকরণ ও মাদুর বোনার যন্ত্র ক্রয়",
      "benefits": [
        "আধুনিক যন্ত্রপাতির উপর ৭৫% অফেরতযোগ্য সরকারি মূলধন অনুদান",
        "মহিলাদের নিজস্ব বিনিয়োগ মাত্র ২৫% (মুদ্রা ঋণের সুবিধা)",
        "স্টাইপেন্ড সহ কয়্যার বোর্ড দ্বারা ২ মাসের বিনামূল্যে প্রশিক্ষণ"
      ],
      "eligibleCategories": [
        "মহিলা কারিগর",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "হস্তশিল্প",
        "কয়্যার ও ফাইবার শিল্প"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "কয়্যার বোর্ড প্রশিক্ষণ শংসাপত্র",
          "description": "প্রশিক্ষণ প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যাংক পাসবুক",
          "description": "ভর্তুকি প্রাপ্তির অ্যাকাউন্ট",
          "status": "Uploaded"
        }
      ]
    }
  },
  "SAMARTH-TEXTILE": {
    "en": {
      "name": "SAMARTH Scheme (Textile & Garment Capacity Building & Entrepreneurship)",
      "description": "Ministry of Textiles flagship initiative offering up to ₹20 Lakhs credit with machinery subsidy, EDP training, and wage employment support for tailors, garmenting units, and textile entrepreneurs.",
      "loanAmount": "Up to ₹20,00,000 (with Machinery Subsidy & EDP Training)",
      "interestRate": "Concessional (8.0% - 9.5%)",
      "repaymentPeriod": "Up to 5 Years",
      "whoCanApply": "Individuals, women tailors, garment entrepreneurs, Self Help Groups, and cooperative societies",
      "purpose": "Procurement of industrial high-speed sewing machines, computerized embroidery equipment, cutting tables, cloth stock",
      "benefits": [
        "Accredited training under National Skills Qualification Framework (NSQF) with guaranteed placement / entrepreneurship link",
        "Up to 50% subsidy on specialized garmenting machinery when graduating to micro-enterprise",
        "Priority tie-up with bank credit under Mudra and Stand-Up India"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women"
      ],
      "eligibleBusinessTypes": [
        "Textile & Garments",
        "Handicrafts & Handlooms"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Tailoring / Garment Skill Certificate",
          "description": "SAMARTH or ITI certification",
          "status": "Uploaded"
        },
        {
          "docName": "Machinery Quotation (Industrial Sewing / Embroidery)",
          "description": "Machinery estimate",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "సమర్థ్ పథకం (వస్త్ర మరియు టైలరింగ్ పరిశ్రమల నైపుణ్య & వ్యాపార రుణం)",
      "description": "కేంద్ర జౌళి మంత్రిత్వ శాఖ ద్వారా టైలర్లు, బోటిక్ యజమానులు, గార్మెంట్ తయారీదారులకు పారిశ్రామిక కుట్టు మిషన్లు, కంప్యూటరైజ్డ్ ఎంబ్రాయిడరీ మెషీన్ల కొనుగోలుకు రూ. 20 లక్షల వరకు రాయితీ రుణాలు మరియు ఉచిత శిక్షణ అందించే పథకం.",
      "loanAmount": "రూ. 20,00,000 వరకు (మెషినరీ సబ్సిడీ & శిక్షణతో)",
      "interestRate": "8.0% - 9.5% (రాయితీ బ్యాంక్ వడ్డీ రేటు)",
      "repaymentPeriod": "5 సంవత్సరాల వరకు",
      "whoCanApply": "వ్యక్తులు, మహిళా టైలర్లు, గార్మెంట్ వ్యాపారులు, స్వయం సహాయక సంఘాలు",
      "purpose": "ఇండస్ట్రియల్ హై-స్పీడ్ కుట్టు మిషన్లు, కంప్యూటర్ ఎంబ్రాయిడరీ, క్లాత్ కట్టింగ్ టేబుల్స్, బట్టల నిల్వ కొనుగోలు",
      "benefits": [
        "జాతీయ నైపుణ్య అర్హత ఫ్రేమ్‌వర్క్ (NSQF) కింద సర్టిఫైడ్ శిక్షణ మరియు వ్యాపార మార్గదర్శకత్వం",
        "కొత్త గార్మెంట్ యూనిట్ స్థాపనకు ప్రత్యేక యంత్రాలపై 50% వరకు ప్రభుత్వ సబ్సిడీ",
        "ముద్ర మరియు స్టాండ్-అప్ ఇండియా కింద బ్యాంక్ రుణాలకు ప్రత్యక్ష ప్రాధాన్యత"
      ],
      "eligibleCategories": [
        "అన్ని వర్గాలు",
        "మహిళలు",
        "టైలర్లు",
        "చేనేత కార్మికులు"
      ],
      "eligibleBusinessTypes": [
        "వస్త్ర పరిశ్రమ",
        "టైలరింగ్",
        "గార్మెంట్స్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "టైలరింగ్ / వస్త్ర నైపుణ్య సర్టిఫికెట్",
          "description": "నైపుణ్య ధృవీకరణ పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "పారిశ్రామిక యంత్రాల కొటేషన్",
          "description": "కుట్టు మిషన్ల అంచనా పత్రం",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "समर्थ योजना (वस्त्र व परिधान क्षमता निर्माण एवं उद्यमिता ऋण)",
      "description": "वस्त्र मंत्रालय द्वारा दर्जियों, बुटीक संचालकों और परिधान निर्माताओं को औद्योगिक सिलाई मशीनों व कढ़ाई उपकरणों की खरीद हेतु ₹20 लाख तक का रियायती ऋण व प्रशिक्षण देने वाली योजना।",
      "loanAmount": "₹20,00,000 तक (मशीनरी सब्सिडी व प्रशिक्षण सहित)",
      "interestRate": "8.0% - 9.5%",
      "repaymentPeriod": "5 वर्ष तक",
      "whoCanApply": "व्यक्तिगत दर्जी, महिला उद्यमी, वस्त्र निर्माता, स्वयं सहायता समूह",
      "purpose": "औद्योगिक हाई-स्पीड सिलाई मशीनें, कम्प्यूटरीकृत कढ़ाई उपकरण और कपड़ा स्टॉक खरीदना",
      "benefits": [
        "राष्ट्रीय कौशल योग्यता फ्रेमवर्क (NSQF) के तहत प्रमाणित प्रशिक्षण",
        "सूक्ष्म परिधान निर्माण इकाई स्थापित करने हेतु मशीनों पर 50% तक सहायता",
        "मुद्रा योजना के तहत प्राथमिकता से बैंक ऋण सुविधा"
      ],
      "eligibleCategories": [
        "सभी श्रेणियां",
        "महिलाएं",
        "दर्जी व शिल्पकार"
      ],
      "eligibleBusinessTypes": [
        "वस्त्र व परिधान",
        "सिलाई व बुटीक"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "सिलाई / वस्त्र कौशल प्रमाण पत्र",
          "description": "कौशल प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "औद्योगिक सिलाई मशीन कोटेशन",
          "description": "उपकरण लागत अनुमान",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಸಮರ್ಥ್ ಯೋಜನೆ (ಜವಳಿ & ಸಿದ್ಧ ಉಡುಪು ಉದ್ಯಮಶೀಲತೆ ಯೋಜನೆ)",
      "description": "ಟೈಲರ್‌ಗಳು, ಸಿದ್ಧ ಉಡುಪು ತಯಾರಕರಿಗೆ ಕೈಗಾರಿಕಾ ಹೊಲಿಗೆ ಯಂತ್ರಗಳ ಖರೀದಿಗೆ ₹20 ಲಕ್ಷದವರೆಗೆ ರಿಯಾಯಿತಿ ಸಾಲ ಮತ್ತು ತರಬೇತಿ ನೀಡುವ ಜವಳಿ ಸಚಿವಾಲಯದ ಯೋಜನೆ.",
      "loanAmount": "₹20,00,000 ವರೆಗೆ (ಯಂತ್ರೋಪಕರಣ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ)",
      "interestRate": "8.0% - 9.5%",
      "repaymentPeriod": "5 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಟೈಲರ್‌ಗಳು, ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು, ಗಾರ್ಮೆಂಟ್ಸ್ ಮಾಲೀಕರು",
      "purpose": "ಹೈಸ್ಪೀಡ್ ಹೊಲಿಗೆ ಯಂತ್ರಗಳು, ಕಸೂತಿ ಯಂತ್ರಗಳು ಮತ್ತು ಬಟ್ಟೆ ದಾಸ್ತಾನು",
      "benefits": [
        "NSQF ಪ್ರಮಾಣೀಕೃತ ಉಚಿತ ತರಬೇತಿ ಮತ್ತು ಕೌಶಲ್ಯ ನವೀಕರಣ",
        "ಸಿದ್ಧ ಉಡುಪು ಯಂತ್ರೋಪಕರಣಗಳ ಮೇಲೆ 50% ವರೆಗೆ ನೆರವು",
        "ಮುದ್ರಾ ಯೋಜನೆ ಅಡಿಯಲ್ಲಿ ಆದ್ಯತೆಯ ಬ್ಯಾಂಕ್ ಸಾಲ"
      ],
      "eligibleCategories": [
        "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        "ಮಹಿಳೆಯರು"
      ],
      "eligibleBusinessTypes": [
        "ಜವಳಿ",
        "ಟೈಲರಿಂಗ್"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಟೈಲರಿಂಗ್ ಕೌಶಲ್ಯ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಕೌಶಲ್ಯ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಯಂತ್ರೋಪಕರಣಗಳ ಕೊಟೇಶನ್",
          "description": "ವೆಚ್ಚದ ಅಂದಾಜು",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "சமர்த் திட்டம் (ஜவுளி & ஆயத்த ஆடை திறன் மேம்பாட்டுத் திட்டம்)",
      "description": "தையல்காரர்கள், ஆடை உற்பத்தியாளர்களுக்கு தொழில்முறை தையல் இயந்திரங்கள் மற்றும் எம்பிராய்டரி கருவிகள் வாங்க ரூ. 20 லட்சம் வரை சலுகைக் கடன் மற்றும் பயிற்சி வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 20,00,000 வரை (இயந்திர மானியத்துடன்)",
      "interestRate": "8.0% - 9.5%",
      "repaymentPeriod": "5 ஆண்டுகள் வரை",
      "whoCanApply": "தையல்காரர்கள், பெண் தொழில்முனைவோர், ஆடை தயாரிப்பாளர்கள்",
      "purpose": "ஹைஸ்பீடு தையல் இயந்திரங்கள், கணினிமய எம்பிராய்டரி உபகரணங்கள் மற்றும் துணி கொள்முதல்",
      "benefits": [
        "அரசு சான்றளிக்கப்பட்ட இலவச தொழிற்பயிற்சி",
        "ஆடை தயாரிப்பு இயந்திரங்களுக்கு 50% வரை மானிய உதவி",
        "முத்ரா திட்டத்தின் கீழ் முன்னுரிமை கடன் உதவி"
      ],
      "eligibleCategories": [
        "அனைத்து பிரிவுகளும்",
        "பெண்கள்"
      ],
      "eligibleBusinessTypes": [
        "ஜவுளி",
        "தையல்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "தையல் திறன் சான்றிதழ்",
          "description": "திறன் சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "தையல் இயந்திர விலை மேற்கோள்",
          "description": "விலை மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "समर्थ योजना (वस्त्रोद्योग व गारमेंट्स कौशल्य आणि उद्योजकता योजना)",
      "description": "शिंपी, बुटीक व्यावसायिक आणि गारमेंट उत्पादकांना औद्योगिक शिलाई यंत्रे खरेदीसाठी ₹20 लाखांपर्यंत सवलतीचे कर्ज व मोफत प्रशिक्षण देणारी योजना.",
      "loanAmount": "₹20,00,000 पर्यंत (यंत्रसामग्री अनुदानासह)",
      "interestRate": "8.0% - 9.5%",
      "repaymentPeriod": "5 वर्षांपर्यंत",
      "whoCanApply": "शिंपी, महिला उद्योजक, गारमेंट कारखाने, बचत गट",
      "purpose": "औद्योगिक हाय-स्पीड शिलाई मशिन्स, एम्ब्रॉयडरी मशिन्स आणि कापड खरेदी",
      "benefits": [
        "NSQF प्रमाणित मोफत कौशल्य प्रशिक्षण",
        "विशेष गारमेंट यंत्रसामग्रीवर 50% पर्यंत शासकीय सहाय्य",
        "मुद्रा कर्जांतर्गत प्राधान्याने बँक कर्ज मंजुरी"
      ],
      "eligibleCategories": [
        "सर्व प्रवर्ग",
        "महिला"
      ],
      "eligibleBusinessTypes": [
        "वस्त्रोद्योग",
        "शिंपीकाम व गारमेंट्स"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "टेलरिंग कौशल्य प्रमाणपत्र",
          "description": "कौशल्य पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "औद्योगिक शिलाई मशिन कोटेशन",
          "description": "खर्च अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "সমর্থ যোজনা (বস্ত্র ও পোশাক শিল্প দক্ষতা উন্নয়ন ও উদ্যোক্তা ঋণ)",
      "description": "দর্জি, বুটিক মালিক এবং পোশাক প্রস্তুতকারকদের শিল্প-গ্রেড সেলাই মেশিন ও এমব্রয়ডারি সরঞ্জাম ক্রয়ের জন্য ₹২০ লাখ পর্যন্ত রেয়াতি ঋণ ও প্রশিক্ষণ প্রকল্প।",
      "loanAmount": "₹২০,০০,০০০ পর্যন্ত (যন্ত্রপাতি ভর্তুকিসহ)",
      "interestRate": "৮.০% - ৯.৫%",
      "repaymentPeriod": "৫ বছর পর্যন্ত",
      "whoCanApply": "দর্জি, নারী উদ্যোক্তা, পোশাক প্রস্তুতকারক, স্বনির্ভর দল",
      "purpose": "হাই-স্পিড সেলাই মেশিন, কম্পিউটার চালিত এমব্রয়ডারি মেশিন ও কাপড়ের স্টক ক্রয়",
      "benefits": [
        "NSQF প্রত্যয়িত সরকারি দক্ষতা প্রশিক্ষণ ও সার্টিফিকেট",
        "পোশাক প্রস্তুতকারক ইউনিটের জন্য যন্ত্রপাতিতে ৫০% পর্যন্ত সহায়তা",
        "মুদ্রা প্রকল্পের আওতায় সহজ শর্তে ব্যাংক ঋণ সুবিধা"
      ],
      "eligibleCategories": [
        "সকল শ্রেণি",
        "নারী উদ্যোক্তা"
      ],
      "eligibleBusinessTypes": [
        "বস্ত্রশিল্প",
        "দর্জি ও বুটিক"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "দর্জি কাজের দক্ষতা শংসাপত্র",
          "description": "দক্ষতা প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "শিল্প সেলাই মেশিনের কোটেশন",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "MSME-ZED": {
    "en": {
      "name": "MSME Sustainable - ZED (Zero Defect Zero Effect) Certification Scheme",
      "description": "MSME Ministry scheme offering up to 80% financial subsidy (up to ₹5 Lakhs) for workshops, fabrication units, and manufacturers to adopt zero-defect quality and environmental standards.",
      "loanAmount": "Subsidy up to ₹5,00,000 (Up to 80% Govt Contribution)",
      "interestRate": "Direct Cash Subsidy / Nil",
      "repaymentPeriod": "Grant Based (No Repayment)",
      "whoCanApply": "Any manufacturing MSME with valid Udyam Registration (Fabrication workshops, plastics, metal works, electrical assembly)",
      "purpose": "Upgrading workshop machinery, obtaining ISO/ZED quality certifications, installing pollution control & energy efficient tools",
      "benefits": [
        "80% subsidy for Micro enterprises, 60% for Small, 50% for Medium enterprises",
        "Additional 10% subsidy for Women/SC/ST owned units (total up to 90% Govt grant)",
        "Banks offer 0.50% lower interest rate on credit to ZED-certified units"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women"
      ],
      "eligibleBusinessTypes": [
        "Manufacturing & Fabrication",
        "Handicrafts",
        "Automotive Services"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Udyam Registration Certificate",
          "description": "MSME proof",
          "status": "Uploaded"
        },
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Workshop Electricity Bill / Factory License",
          "description": "Manufacturing premises proof",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "ఎంఎస్ఎంఈ జెడ్ సర్టిఫికేషన్ పథకం (MSME ZED - రూ. 5 లక్షల వరకు 80% గ్రాంట్)",
      "description": "తయారీ పరిశ్రమలు, ఫ్యాబ్రికేషన్ వర్క్‌షాప్‌లు, మెటల్ మరియు ప్లాస్టిక్ యూనిట్ల నాణ్యతను పెంచడానికి మరియు ఆధునిక యంత్రాల ఏర్పాటుకు ప్రభుత్వం 80% వరకు ఉచిత గ్రాంట్ (రూ. 5 లక్షల వరకు) అందించే పథకం.",
      "loanAmount": "రూ. 5,00,000 వరకు సబ్సిడీ (80% ప్రభుత్వ వాటా)",
      "interestRate": "ప్రత్యక్ష సబ్సిడీ గ్రాంట్ (తిరిగి చెల్లించాల్సిన అవసరం లేదు)",
      "repaymentPeriod": "గ్రాంట్ ఆధారితం (జీరో రీపేమెంట్)",
      "whoCanApply": "ఉద్యమ్ రిజిస్ట్రేషన్ కలిగిన ఏదైనా తయారీ, ఫ్యాబ్రికేషన్, వెల్డింగ్, లేదా ఇంజనీరింగ్ వర్క్‌షాప్",
      "purpose": "యంత్రాల ఆధునీకరణ, నాణ్యత సర్టిఫికేషన్, విద్యుత్ ఆదా పరికరాలు మరియు పర్యావరణ పరిరక్షణ సెటప్",
      "benefits": [
        "సూక్ష్మ పరిశ్రమలకు 80%, చిన్న పరిశ్రమలకు 60% పూర్తి ఉచిత ప్రభుత్వ గ్రాంట్",
        "మహిళలు, ఎస్సీ, ఎస్టీ యాజమాన్య యూనిట్లకు అదనంగా 10% రాయితీ (మొత్తం 90% వరకు)",
        "జెడ్ సర్టిఫైడ్ యూనిట్లకు బ్యాంకులు రుణాలు ఇచ్చేటప్పుడు వడ్డీ రేటులో 0.50% రాయితీ ఇస్తాయి"
      ],
      "eligibleCategories": [
        "తయారీదారులు",
        "అన్ని వర్గాలు",
        "మహిళలు",
        "ఎస్సీ/ఎస్టీ"
      ],
      "eligibleBusinessTypes": [
        "తయారీ పరిశ్రమ",
        "ఫ్యాబ్రికేషన్",
        "ఇంజనీరింగ్ వర్క్‌షాప్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఉద్యమ్ రిజిస్ట్రేషన్ సర్టిఫికెట్",
          "description": "ఎంఎస్ఎంఈ నమోదు పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వర్క్‌షాప్ కరెంట్ బిల్లు / ఫ్యాక్టరీ లైసెన్స్",
          "description": "పరిశ్రమ స్థల ధృవీకరణ",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "एमएसएमई जेड प्रमाणन योजना (MSME ZED - ₹5 लाख तक 80% सरकारी अनुदान)",
      "description": "विनिर्माण इकाइयों और फैब्रिकेशन वर्कशॉप्स को शून्य दोष गुणवत्ता मानक प्राप्त करने और आधुनिक मशीनरी लगाने हेतु सरकार द्वारा 80% तक का सीधा नकद अनुदान देने वाली योजना।",
      "loanAmount": "₹5,00,000 तक का अनुदान (80% सरकारी योगदान)",
      "interestRate": "प्रत्यक्ष नकद अनुदान (वापसी योग्य नहीं)",
      "repaymentPeriod": "अनुदान आधारित (ऋण नहीं)",
      "whoCanApply": "उद्यम पंजीकृत कोई भी विनिर्माण इकाई, फैब्रिकेशन व इंजीनियरिंग वर्कशॉप",
      "purpose": "मशीनरी अपग्रेड, गुणवत्ता प्रमाणन और पर्यावरण-अनुकूल उपकरण लगाना",
      "benefits": [
        "सूक्ष्म उद्यमों को 80% और लघु उद्यमों को 60% का सीधा सरकारी अनुदान",
        "महिला, एससी, एसटी स्वामित्व वाली इकाइयों को 10% अतिरिक्त लाभ (कुल 90% तक)",
        "प्रमाणित इकाइयों को बैंक ऋण पर 0.50% की ब्याज छूट मिलती है"
      ],
      "eligibleCategories": [
        "विनिर्माता",
        "सभी श्रेणियां",
        "महिलाएं"
      ],
      "eligibleBusinessTypes": [
        "विनिर्माण व फैब्रिकेशन",
        "इंजीनियरिंग वर्कशॉप"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "उद्यम पंजीकरण प्रमाण पत्र",
          "description": "एमएसएमई प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "वर्कशॉप बिजली बिल / कारखाना लाइसेंस",
          "description": "परिसर प्रमाण",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಎಂಎಸ್‌ಎಂಇ ಝಡ್ ಪ್ರಮಾಣೀಕರಣ ಯೋಜನೆ (MSME ZED - 80% ಅನುದಾನ)",
      "description": "ಉತ್ಪಾದನಾ ಘಟಕಗಳು ಮತ್ತು ಫ್ಯಾಬ್ರಿಕೇಶನ್ ವರ್ಕ್‌ಶಾಪ್‌ಗಳಿಗೆ ಗುಣಮಟ್ಟ ಸುಧಾರಣೆ ಮತ್ತು ಯಂತ್ರಗಳ ನವೀಕರಣಕ್ಕಾಗಿ ₹5 ಲಕ್ಷದವರೆಗೆ 80% ನೇರ ಅನುದಾನ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹5,00,000 ವರೆಗೆ ಅನುದಾನ (80% ಸರ್ಕಾರಿ ಪಾಲು)",
      "interestRate": "ನೇರ ಅನುದಾನ (ಮರುಪಾವತಿ ಇಲ್ಲ)",
      "repaymentPeriod": "ಅನುದಾನ ಆಧಾರಿತ",
      "whoCanApply": "ಉದ್ಯಮ್ ನೋಂದಣಿ ಹೊಂದಿರುವ ಯಾವುದೇ ಸಣ್ಣ ಉತ್ಪಾದನಾ ಘಟಕ",
      "purpose": "ಯಂತ್ರಗಳ ನವೀಕರಣ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಗುಣಮಟ್ಟ ಪರಿಕರಗಳ ಅಳವಡಿಕೆ",
      "benefits": [
        "ಸೂಕ್ಷ್ಮ ಕೈಗಾರಿಕೆಗಳಿಗೆ 80% ವರೆಗೆ ಸರ್ಕಾರಿ ಅನುದಾನ",
        "ಮಹಿಳಾ ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಉದ್ಯಮಿಗಳಿಗೆ ಹೆಚ್ಚುವರಿ 10% ರಿಯಾಯಿತಿ",
        "ಬ್ಯಾಂಕ್ ಸಾಲಗಳಲ್ಲಿ ಬಡ್ಡಿದರ ಕಡಿತ ಸೌಲಭ್ಯ"
      ],
      "eligibleCategories": [
        "ಉತ್ಪಾದಕರು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಉತ್ಪಾದನೆ",
        "ಫ್ಯಾಬ್ರಿಕೇಶನ್"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಉದ್ಯಮ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಎಂಎಸ್‌ಎಂಇ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವರ್ಕ್‌ಶಾಪ್ ವಿದ್ಯುತ್ ಬಿಲ್",
          "description": "ಸ್ಥಳದ ಪುರಾವೆ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "எம்எஸ்எம்இ இசட் சான்றிதழ் திட்டம் (MSME ZED - 80% அரசு மானியம்)",
      "description": "உற்பத்தி பட்டறைகள் மற்றும் ஃபேப்ரிகேஷன் அலகுகளின் தரத்தை மேம்படுத்த ரூ. 5 லட்சம் வரை 80% நேரடி அரசு மானியம் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 5,00,00,00 வரை மானியம் (80% அரசு பங்களிப்பு)",
      "interestRate": "நேரடி மானியம் (திரும்ப செலுத்த தேவையில்லை)",
      "repaymentPeriod": "மானிய அடிப்படையிலானது",
      "whoCanApply": "உத்யம் பதிவு செய்த உற்பத்தி அலகுகள் மற்றும் பட்டறைகள்",
      "purpose": "இயந்திரங்களை நவீனமயமாக்குதல் மற்றும் தர சான்றிதழ் பெறுதல்",
      "benefits": [
        "குறு நிறுவனங்களுக்கு 80% முழு அரசு மானியம்",
        "பெண்கள் மற்றும் எஸ்சி/எஸ்டி பிரிவினருக்கு கூடுதல் 10% சலுகை",
        "வங்கி கடன்களில் 0.50% வட்டி தள்ளுபடி"
      ],
      "eligibleCategories": [
        "உற்பத்தியாளர்கள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "உற்பத்தி",
        "ஃபேப்ரிகேஷன்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "உத்யம் பதிவு சான்றிதழ்",
          "description": "MSME சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பட்டறை மின்சார கட்டண ரசீது",
          "description": "முகவரி சான்று",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "एमएसएमई झेड प्रमाणीकरण योजना (MSME ZED - ₹5 लाखांपर्यंत 80% अनुदान)",
      "description": "उत्पादन आणि फॅब्रिकेशन कारखान्यांना गुणवत्ता सुधारण्यासाठी आणि तंत्रज्ञान अपग्रेड करण्यासाठी ₹5 लाखांपर्यंत 80% शासकीय अनुदान देणारी योजना.",
      "loanAmount": "₹5,00,000 पर्यंत अनुदान (80% शासकीय सहभाग)",
      "interestRate": "थेट रोख अनुदान (परतफेड नाही)",
      "repaymentPeriod": "अनुदान आधारित",
      "whoCanApply": "उद्यम नोंदणी असलेले कोणतेही उत्पादन किंवा फॅब्रिकेशन युनिट",
      "purpose": "यंत्रसामग्री अपग्रेड, गुणवत्ता प्रमाणन आणि ऊर्जा कार्यक्षम साधने",
      "benefits": [
        "सूक्ष्म उपक्रमांना 80% आणि लघू उपक्रमांना 60% थेट अनुदान",
        "महिला व एससी/एसटी युनिट्सना 10% अतिरिक्त लाभ (एकूण 90%)",
        "बँक कर्जावर 0.50% व्याज सवलत"
      ],
      "eligibleCategories": [
        "उत्पादक",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "उत्पादन व फॅब्रिकेशन"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "उद्यम नोंदणी प्रमाणपत्र",
          "description": "एमएसएमई पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "वर्कशॉप वीज बिल / परवाना",
          "description": "जागेचा पुरावा",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "এমএসএমই জেড সার্টিফিকেশন প্রকল্প (MSME ZED - ৮০% পর্যন্ত সরকারি অনুদান)",
      "description": "ক্ষুদ্র কারখানা ও ফ্যাব্রিকেশন ওয়ার্কশপের গুণমান উন্নয়ন এবং আধুনিক যন্ত্রপাতি ক্রয়ের জন্য ₹৫ লাখ পর্যন্ত ৮০% সরকারি নগদ অনুদান প্রকল্প।",
      "loanAmount": "₹৫,০০,০০০ পর্যন্ত অনুদান (৮০% সরকারি অবদান)",
      "interestRate": "সরাসরি নগদ অনুদান (ফেরতযোগ্য নয়)",
      "repaymentPeriod": "অনুদান ভিত্তিক",
      "whoCanApply": "উদ্যম নিবন্ধিত যেকোনো উৎপাদন বা ফ্যাব্রিকেশন ওয়ার্কশপ",
      "purpose": "যন্ত্রপাতির মানোন্নয়ন এবং পরিবেশ-বান্ধব সরঞ্জাম স্থাপন",
      "benefits": [
        "ক্ষুদ্র শিল্পের জন্য ৮০% পর্যন্ত সরাসরি সরকারি অনুদান",
        "নারী, এসসি, এসটি মালিকানাধীন ইউনিটের জন্য অতিরিক্ত ১০% সুবিধা",
        "ব্যাংক ঋণের সুদে ০.৫০% ছাড়ের সুবিধা"
      ],
      "eligibleCategories": [
        "উৎপাদক",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "উৎপাদন ও ফ্যাব্রিকেশন"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "উদ্যম নিবন্ধন শংসাপত্র",
          "description": "এমএসএমই প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ওয়ার্কশপ বিদ্যুৎ বিল / কারখানা লাইসেন্স",
          "description": "ঠিকানার প্রমাণ",
          "status": "Uploaded"
        }
      ]
    }
  },
  "KCC": {
    "en": {
      "name": "Kisan Credit Card (KCC) Scheme",
      "description": "Flagship institutional credit scheme by Ministry of Agriculture & RBI providing farmers, dairy keepers, and fishers with credit up to ₹3 Lakhs at an ultra-low effective interest rate of just 4% p.a.",
      "loanAmount": "Up to ₹3,00,000 (at 4% effective interest)",
      "interestRate": "Effective 4% p.a. (with timely repayment)",
      "repaymentPeriod": "12 Months (Revolving Credit Facility)",
      "whoCanApply": "Owner cultivators, tenant farmers, dairy farmers, fish farmers, and SHGs of farmers",
      "purpose": "Purchase of seeds, fertilizers, pesticides, cattle feed, milch animals, and farm operating costs",
      "benefits": [
        "Effective 4% interest rate (7% base rate minus 3% prompt repayment incentive paid by Govt)",
        "100% collateral-free credit limit up to ₹1,60,000 (expanded to ₹2,00,000 via RBI guidelines)",
        "Includes complimentary accidental insurance cover of up to ₹50,000 with RuPay KCC card"
      ],
      "eligibleCategories": [
        "All Categories",
        "Farmers",
        "Dairy Keepers",
        "Fishers"
      ],
      "eligibleBusinessTypes": [
        "Agriculture & Allied",
        "Dairy & Livestock",
        "Fisheries"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Land Record (Pattadar Passbook / 1-B / Pahani / Tenancy)",
          "description": "Agricultural land proof",
          "status": "Uploaded"
        },
        {
          "docName": "Crop Cultivation / Livestock Verification Proof",
          "description": "VRO / Agriculture officer certificate",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "కిసాన్ క్రెడిట్ కార్డ్ (KCC - కేవలం 4% వడ్డీతో రైతు రుణం)",
      "description": "రైతులు, పాడి రైతులు మరియు మత్స్యకారుల కోసం కేంద్ర ప్రభుత్వం అందిస్తున్న అత్యంత తక్కువ వడ్డీ రుణ పథకం. సకాలంలో చెల్లించే రైతులకు కేవలం 4% నామమాత్రపు వడ్డీకే రూ. 3 లక్షల వరకు పంట మరియు పాడి రుణాలను అందిస్తుంది.",
      "loanAmount": "రూ. 3,00,000 వరకు (కేవలం 4% వడ్డీ రేటుతో)",
      "interestRate": "కేవలం 4% (సకాలంలో చెల్లిస్తే 3% ప్రభుత్వ సబ్సిడీ)",
      "repaymentPeriod": "12 నెలలు (పునరుద్ధరించదగిన క్రెడిట్ పరిమితి)",
      "whoCanApply": "రైతులు, కౌలు రైతులు, పాడి రైతులు, చేపల పెంపకందారులు మరియు స్వయం సహాయక సంఘాలు",
      "purpose": "విత్తనాలు, ఎరువులు, పురుగుమందులు, పశువుల దాణా, గేదెల కొనుగోలు మరియు సాగు ఖర్చులు",
      "benefits": [
        "సకాలంలో చెల్లిస్తే కేవలం 4% అతి తక్కువ వడ్డీ రేటు (ప్రభుత్వం 3% వడ్డీ రాయితీ భరిస్తుంది)",
        "రూ. 1,60,000 వరకు ఎలాంటి ఆస్తి లేదా భూమి తాకట్టు అవసరం లేదు",
        "ఎటిఎమ్ ద్వారా నేరుగా నగదు విత్‌డ్రా చేసుకునేందుకు రూపే కిసాన్ క్రెడిట్ కార్డు మరియు ఉచిత ప్రమాద బీమా"
      ],
      "eligibleCategories": [
        "రైతులు",
        "పాడి రైతులు",
        "మత్స్యకారులు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "వ్యవసాయం",
        "పాడి పరిశ్రమ",
        "చేపల పెంపకం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "భూమి రికార్డు (పట్టాదారు పాస్‌బుక్ / అడంగల్ / పహాణీ)",
          "description": "వ్యవసాయ భూమి రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "పంట సాగు / పశువుల ధృవీకరణ పత్రం",
          "description": "వ్యవసాయ అధికారి ధృవీకరణ",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "किसान क्रेडिट कार्ड (KCC - मात्र 4% ब्याज पर कृषि व पशुपालन ऋण)",
      "description": "किसानों, डेयरी संचालकों और पशुपालकों हेतु भारत सरकार की प्रमुख योजना, जो समय पर भुगतान करने पर मात्र 4% की रियायती ब्याज दर पर ₹3 लाख तक का आसान ऋण उपलब्ध कराती है।",
      "loanAmount": "₹3,00,000 तक (मात्र 4% प्रभावी ब्याज पर)",
      "interestRate": "प्रभावी 4% वार्षिक (समय पर भुगतान पर)",
      "repaymentPeriod": "12 महीने (नवीकरणीय क्रेडिट सुविधा)",
      "whoCanApply": "भूस्वामी किसान, बटाईदार / पट्टेदार किसान, डेयरी संचालक, मत्स्यपालक",
      "purpose": "बीज, उर्वरक, कीटनाशक, पशु आहार, दुधारू पशु खरीद और कृषि कार्यशील पूंजी",
      "benefits": [
        "समय पर भुगतान करने पर मात्र 4% ब्याज दर (सरकार 3% ब्याज छूट देती है)",
        "₹1.60 लाख तक किसी भी भूमि बंधक या गारंटी की आवश्यकता नहीं",
        "एटीएम से निकासी हेतु रूपे किसान क्रेडिट कार्ड और ₹50,000 का निःशुल्क दुर्घटना बीमा"
      ],
      "eligibleCategories": [
        "किसान",
        "पशुपालक",
        "मत्स्यपालक",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "कृषि व संबद्ध",
        "डेयरी व पशुपालन",
        "मत्स्य पालन"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "भूमि अभिलेख (खसरा / खतौनी / पट्टा)",
          "description": "कृषि भूमि प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "फसल बुआई / पशुपालन सत्यापन प्रमाण",
          "description": "पटवारी / कृषि अधिकारी प्रमाण",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC - ಕೇವಲ 4% ಬಡ್ಡಿದರದಲ್ಲಿ ರೈತ ಸಾಲ)",
      "description": "ರೈತರು, ಹೈನುಗಾರರು ಮತ್ತು ಮೀನುಗಾರರಿಗೆ ಕೇವಲ 4% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಒದಗಿಸುವ ಸರ್ಕಾರದ ಪ್ರಮುಖ ಯೋಜನೆ.",
      "loanAmount": "₹3,00,000 ವರೆಗೆ (ಕೇವಲ 4% ಬಡ್ಡಿದರ)",
      "interestRate": "4% ವಾರ್ಷಿಕ (ಸಕಾಲಿಕ ಮರುಪಾವತಿಯೊಂದಿಗೆ)",
      "repaymentPeriod": "12 ತಿಂಗಳುಗಳು (ನವೀಕರಿಸಬಹುದಾದ ಸಾಲ)",
      "whoCanApply": "ರೈತರು, ಗೇಣಿದಾರರು, ಹೈನುಗಾರರು, ಮೀನುಗಾರರು",
      "purpose": "ಬೀಜ, ಗೊಬ್ಬರ, ಕೀಟನಾಶಕಗಳು, ಜಾನುವಾರುಗಳ ಮೇವು ಮತ್ತು ಕೃಷಿ ವೆಚ್ಚಗಳು",
      "benefits": [
        "ಸಕಾಲಿಕ ಮರುಪಾವತಿಗೆ ಕೇವಲ 4% ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿದರ",
        "₹1,60,000 ವರೆಗೆ ಯಾವುದೇ ಭೂಮಿ ಅಡಮಾನ ಅಗತ್ಯವಿಲ್ಲ",
        "ರೂಪೇ ಕಿಸಾನ್ ಕಾರ್ಡ್ ಮತ್ತು ಉಚಿತ ಅಪಘಾತ ವಿಮೆ"
      ],
      "eligibleCategories": [
        "ರೈತರು",
        "ಹೈನುಗಾರರು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಕೃಷಿ",
        "ಡೈರಿ ಮತ್ತು ಪಶುಸಂಗೋಪನೆ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಭೂ ದಾಖಲೆ (ಪಹಣಿ / ಪಟ್ಟಾ ಪುಸ್ತಕ)",
          "description": "ಕೃಷಿ ಭೂಮಿ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬೆಳೆ ದೃಢೀಕರಣ ಪತ್ರ",
          "description": "ಕೃಷಿ ಅಧಿಕಾರಿ ಪ್ರಮಾಣಪತ್ರ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "கிசான் கடன் அட்டை திட்டம் (KCC - வெறும் 4% வட்டியில் விவசாயக் கடன்)",
      "description": "விவசாயிகள், பால் பண்ணையாளர்கள் மற்றும் மீனவர்களுக்கு 4% மிகக் குறைந்த வட்டியில் ரூ. 3 லட்சம் வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 3,00,000 வரை (வெறும் 4% வட்டி விகிதம்)",
      "interestRate": "4% வட்டி (சரியான நேரத்தில் திரும்ப செலுத்தினால்)",
      "repaymentPeriod": "12 மாதங்கள் (புதுப்பிக்கத்தக்க கடன்)",
      "whoCanApply": "விவசாயிகள், குத்தகை விவசாயிகள், பால் உற்பத்தியாளர்கள், மீனவர்கள்",
      "purpose": "விதைகள், உரங்கள், பூச்சிக்கொல்லிகள், கால்நடை தீவனம் மற்றும் சாகுபடி செலவுகள்",
      "benefits": [
        "சரியான நேரத்தில் செலுத்தினால் வெறும் 4% குறைந்த வட்டி",
        "ரூ. 1,60,000 வரை எந்தவித நில அடமானமும் தேவையில்லை",
        "ரூபே கிசான் கடன் அட்டை மற்றும் இலவச விபத்து காப்பீடு"
      ],
      "eligibleCategories": [
        "விவசாயிகள்",
        "கால்நடை வளர்ப்போர்",
        "மீனவர்கள்"
      ],
      "eligibleBusinessTypes": [
        "விவசாயம்",
        "பால் பண்ணை",
        "மீன் வளர்ப்பு"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "நில ஆவணம் (பட்டா / சிட்டா / அடங்கல்)",
          "description": "விவசாய நில சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பயிர் சாகுபடி சான்றிதழ்",
          "description": "விவசாய அலுவலர் சான்று",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "किसान क्रेडिट कार्ड (KCC - फक्त 4% व्याजदराने शेतकरी कर्ज)",
      "description": "शेतकरी, दुग्ध उत्पादक आणि पशुपालकांसाठी वेळेवर परतफेड केल्यास केवळ 4% नाममात्र व्याजदराने ₹3 लाखांपर्यंत पीक व खेळते भांडवल कर्ज देणारी योजना.",
      "loanAmount": "₹3,00,000 पर्यंत (केवळ 4% प्रभावी व्याजाने)",
      "interestRate": "केवळ 4% वार्षिक (वेळेवर परतफेडीवर)",
      "repaymentPeriod": "12 महिने (नूतनीकरणक्षम मर्यादा)",
      "whoCanApply": "शेतकरी, भाडेकरू शेतकरी, दुग्ध व्यावसायिक, मत्स्यपालक",
      "purpose": "बियाणे, खते, कीटकनाशके, पशुखाद्य आणि शेती विषयक दैनंदिन खर्च",
      "benefits": [
        "वेळेवर परतफेड केल्यास फक्त 4% व्याजदर (शासनाकडून 3% व्याज अनुदान)",
        "₹1,60,000 पर्यंत कोणत्याही जमिनीच्या तारणाची गरज नाही",
        "रूपे किसान क्रेडिट कार्ड आणि ₹50,000 चे मोफत अपघात विमा संरक्षण"
      ],
      "eligibleCategories": [
        "शेतकरी",
        "पशुपालक",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "शेती व पूरक उद्योग",
        "दुग्ध व्यवसाय"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "जमीन महसूल नोंद (7/12 आणि 8-अ उतारा)",
          "description": "शेती जमीन पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "पीक पाहणी / पशुसंवर्धन दाखला",
          "description": "तलाठी / कृषी अधिकारी दाखला",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "কিসান ক্রেডিট কার্ড (KCC - মাত্র ৪% সুদে কৃষি ও গবাদি পশু ঋণ)",
      "description": "কৃষক, দুগ্ধ খামারি ও মৎস্যজীবীদের জন্য সময়মতো পরিশোধে মাত্র ৪% সুদের হারে ₹৩ লাখ পর্যন্ত প্রাতিষ্ঠানিক ঋণ সুবিধা প্রদানকারী প্রধান প্রকল্প।",
      "loanAmount": "₹৩,০০,০০০ পর্যন্ত (মাত্র ৪% কার্যকরী সুদে)",
      "interestRate": "কার্যকরী ৪% বার্ষিক (নিয়মিত পরিশোধে)",
      "repaymentPeriod": "১২ মাস (নবায়নযোগ্য ঋণ সুবিধা)",
      "whoCanApply": "কৃষিজমির মালিক, ভাগচাষী, দুগ্ধ খামারি, মৎস্যজীবী",
      "purpose": "বীজ, সার, কীটনাশক, পশুর খাদ্য ও খামার পরিচালনার ব্যয় নির্বাহ",
      "benefits": [
        "সময়মতো পরিশোধে মাত্র ৪% সুদের হার (সরকার ৩% সুদ ভর্তুকি প্রদান করে)",
        "₹১,৬০,০০০ পর্যন্ত কোনো জমি বন্ধক বা গ্যারান্টির প্রয়োজন নেই",
        "রুপে কিসান ক্রেডিট কার্ড এবং ₹৫০,০০০ পর্যন্ত বিনামূল্যে দুর্ঘটনা বীমা"
      ],
      "eligibleCategories": [
        "কৃষক",
        "দুগ্ধ খামারি",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "কৃষি ও সহযোগী খাত",
        "দুগ্ধ ও প্রাণিসম্পদ"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "জমির রেকর্ড (পর্চা / খতিয়ান)",
          "description": "কৃষিজমির প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ফসল চাষের শংসাপত্র",
          "description": "কৃষি কর্মকর্তার শংসাপত্র",
          "status": "Pending"
        }
      ]
    }
  },
  "AIF": {
    "en": {
      "name": "Agriculture Infrastructure Fund (AIF)",
      "description": "Medium-long term debt financing facility providing 3% interest subvention and CGTMSE credit guarantee for investment in post-harvest management infrastructure and cold chains up to ₹2 Crore.",
      "loanAmount": "Up to ₹2 Crore (with 3% Interest Subsidy)",
      "interestRate": "Subsidized (3% Interest Subvention p.a.)",
      "repaymentPeriod": "Up to 7 Years (Moratorium up to 2 Years)",
      "whoCanApply": "Farmers, Primary Agricultural Credit Societies (PACS), FPOs, Agri-entrepreneurs, Startups",
      "purpose": "Construction of Cold Storage, Warehouses, Sorting & Grading Units, Silos, Smart Agriculture assets",
      "benefits": [
        "3% annual interest subvention for loans up to ₹2 Crore for a maximum tenure of 7 years",
        "Credit guarantee coverage under CGTMSE paid entirely by Government of India",
        "Moratorium on repayment of principal between 6 months to 2 years during construction"
      ],
      "eligibleCategories": [
        "All Categories",
        "Farmers",
        "Agri-Entrepreneurs",
        "FPOs"
      ],
      "eligibleBusinessTypes": [
        "Agriculture & Allied",
        "Food Business",
        "Warehouse & Storage"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Detailed Project Report (DPR)",
          "description": "Cold storage / warehouse design and revenue model",
          "status": "Pending"
        },
        {
          "docName": "Land Ownership / Long Lease Deed",
          "description": "Site location proof for storage structure",
          "status": "Uploaded"
        },
        {
          "docName": "Civil Engineer Cost Estimate & Building Blueprints",
          "description": "Construction feasibility",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF - రూ. 2 కోట్ల వరకు 3% వడ్డీ సబ్సిడీ)",
      "description": "కోల్డ్ స్టోరేజీలు, గిడ్డంగులు (వేర్‌హౌస్‌లు), ప్యాక్‌హౌస్‌లు మరియు ఆహార నిల్వ కేంద్రాల నిర్మాణానికి కేంద్ర ప్రభుత్వం ₹2 కోట్ల వరకు 3% వడ్డీ రాయితీ మరియు ఉచిత క్రెడిట్ గ్యారెంటీతో దీర్ఘకాలిక రుణాలను అందించే పథకం.",
      "loanAmount": "రూ. 2,00,00,000 వరకు (3% వడ్డీ సబ్సిడీతో)",
      "interestRate": "రాయితీ వడ్డీ రేటు (ఏడాదికి 3% ప్రభుత్వ వడ్డీ తగ్గింపు)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (2 సంవత్సరాల మొరటోరియం)",
      "whoCanApply": "రైతులు, ప్రాథమిక వ్యవసాయ సహకార సంఘాలు (PACS), ఎఫ్‌పీఓలు, అగ్రి-స్టార్టప్‌లు",
      "purpose": "కోల్డ్ స్టోరేజ్, వేర్‌హౌస్, గ్రేడింగ్ యూనిట్లు, సైలోలు మరియు వ్యవసాయ గోదాముల నిర్మాణం",
      "benefits": [
        "రూ. 2 కోట్ల వరకు బ్యాంకు రుణాలపై ఏటా 3% వడ్డీ రాయితీ (7 సంవత్సరాల పాటు)",
        "CGTMSE క్రెడిట్ గ్యారెంటీ రుసుమును ప్రభుత్వమే పూర్తిగా భరిస్తుంది (ఆస్తి తాకట్టు లేకుండా)",
        "నిర్మాణ సమయంలో 6 నెలల నుండి 2 సంవత్సరాల వరకు రుణ అసలు చెల్లింపుపై మొరటోరియం"
      ],
      "eligibleCategories": [
        "రైతులు",
        "అగ్రి-వ్యాపారులు",
        "ఎఫ్‌పీఓలు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "వ్యవసాయం",
        "గిడ్డంగులు & కోల్డ్ స్టోరేజ్",
        "ఆహార వ్యాపారం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
          "description": "గోదాము లేదా కోల్డ్ స్టోరేజ్ నిర్మాణ ప్రణాళిక",
          "status": "Pending"
        },
        {
          "docName": "భూమి యాజమాన్య పత్రాలు / లీజు ఒప్పందం",
          "description": "స్థల ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "సివిల్ ఇంజనీర్ అంచనా పత్రం & బ్లూప్రింట్",
          "description": "నిర్మాణ అంచనా నివేదిక",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "कृषि अवसंरचना कोष (AIF - ₹2 करोड़ तक 3% ब्याज छूट)",
      "description": "कोल्ड स्टोरेज, वेयरहाउस, सॉर्टिंग व ग्रेडिंग यूनिट्स के निर्माण हेतु केंद्र सरकार द्वारा ₹2 करोड़ तक 3% ब्याज छूट और सरकारी गारंटी के साथ दीर्घकालिक ऋण सुविधा।",
      "loanAmount": "₹2,00,00,000 तक (3% ब्याज उपदान सहित)",
      "interestRate": "रियायती (वार्षिक 3% ब्याज छूट)",
      "repaymentPeriod": "7 वर्ष तक (2 वर्ष मोरेटोरियम)",
      "whoCanApply": "किसान, एफपीओ, प्राथमिक कृषि समितियां (PACS), कृषि उद्यमी",
      "purpose": "कोल्ड स्टोरेज, गोदाम, छंटाई व ग्रेडिंग इकाइयां और साइलो का निर्माण",
      "benefits": [
        "₹2 करोड़ तक के ऋण पर 7 वर्षों हेतु 3% की वार्षिक ब्याज छूट",
        "CGTMSE के तहत ऋण गारंटी का पूरा खर्च भारत सरकार द्वारा वहन",
        "निर्माण अवधि के दौरान 2 वर्ष तक का मूलधन मोरेटोरियम"
      ],
      "eligibleCategories": [
        "किसान",
        "कृषि उद्यमी",
        "एफपीओ",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "कृषि व संबद्ध",
        "खाद्य प्रसंस्करण",
        "भंडारण व गोदाम"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "कोल्ड स्टोरेज / गोदाम योजना",
          "status": "Pending"
        },
        {
          "docName": "भूमि स्वामित्व या पट्टा दस्तावेज",
          "description": "स्थल स्वामित्व प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "सिविल इंजीनियर लागत अनुमान व नक्शा",
          "description": "निर्माण लागत अनुमान",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಕೃಷಿ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AIF - ₹2 ಕೋಟಿವರೆಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ)",
      "description": "ಶೈತ್ಯಾಗಾರ (ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್), ಗೋದಾಮುಗಳು ಮತ್ತು ಕೃಷಿ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳ ನಿರ್ಮಾಣಕ್ಕೆ ₹2 ಕೋಟಿವರೆಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ದೀರ್ಘಾವಧಿ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹2,00,00,000 ವರೆಗೆ (3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ)",
      "interestRate": "3% ಬಡ್ಡಿ ರಿಯಾಯಿತಿ",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ (2 ವರ್ಷ ಮೊರಟೋರಿಯಂ)",
      "whoCanApply": "ರೈತರು, ಎಫ್‌ಪಿಒಗಳು, ಪ್ರಾಥಮಿಕ ಕೃಷಿ ಸಂಘಗಳು, ಕೃಷಿ ಉದ್ಯಮಿಗಳು",
      "purpose": "ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್, ಗೋದಾಮು, ಗ್ರೇಡಿಂಗ್ ಘಟಕಗಳ ನಿರ್ಮಾಣ",
      "benefits": [
        "₹2 ಕೋಟಿವರೆಗೆ 7 ವರ್ಷಗಳ ಕಾಲ ವಾರ್ಷಿಕ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
        "ಸರ್ಕಾರದಿಂದ ಸಂಪೂರ್ಣ ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಸೌಲಭ್ಯ",
        "2 ವರ್ಷಗಳವರೆಗೆ ಕಂತು ಪಾವತಿಗೆ ವಿನಾಯಿತಿ (ಮೊರಟೋರಿಯಂ)"
      ],
      "eligibleCategories": [
        "ರೈತರು",
        "ಕೃಷಿ ಉದ್ಯಮಿಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಕೃಷಿ",
        "ಗೋದಾಮು ಮತ್ತು ಶೇಖರಣೆ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಗೋದಾಮು ನಿರ್ಮಾಣ ಯೋಜನೆ",
          "status": "Pending"
        },
        {
          "docName": "ಜಮೀನಿನ ದಾಖಲೆ / ಗುತ್ತಿಗೆ ಪತ್ರ",
          "description": "ಸ್ಥಳದ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಸಿವಿಲ್ ಇಂಜಿನಿಯರ್ ಅಂದಾಜು ಪಟ್ಟಿ",
          "description": "ವೆಚ್ಚದ ಅಂದಾಜು",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "விவசாய உள்கட்டமைப்பு நிதி (AIF - ரூ. 2 கோடி வரை 3% வட்டி மானியம்)",
      "description": "குளிர்பதன கிடங்குகள், தானிய சேமிப்பு கிடங்குகள் மற்றும் தரம் பிரிக்கும் அலகுகளை அமைக்க ரூ. 2 கோடி வரை 3% வட்டி மானியத்துடன் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 2,00,00,000 வரை (3% வட்டி மானியத்துடன்)",
      "interestRate": "3% வட்டி மானியம்",
      "repaymentPeriod": "7 ஆண்டுகள் வரை (2 ஆண்டுகள் சலுகைக்காலம்)",
      "whoCanApply": "விவசாயிகள், FPOக்கள், தொடக்க வேளாண் கூட்டுறவு சங்கங்கள், தொழில்முனைவோர்",
      "purpose": "குளிர்பதன கிடங்கு, தானிய சேமிப்பு கிடங்குகள் மற்றும் சைலோ அமைத்தல்",
      "benefits": [
        "ரூ. 2 கோடி வரை 7 ஆண்டுகளுக்கு ஆண்டுதோறும் 3% வட்டி மானியம்",
        "அரசே ஏற்கும் முழு கடன் உத்தரவாத பாதுகாப்பு",
        "கட்டுமான காலத்தில் 2 ஆண்டுகள் வரை அசல் திருப்பி செலுத்துவதில் விலக்கு"
      ],
      "eligibleCategories": [
        "விவசாயிகள்",
        "வேளாண் தொழில்முனைவோர்"
      ],
      "eligibleBusinessTypes": [
        "விவசாயம்",
        "கிடங்கு மற்றும் சேமிப்பு"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான திட்ட அறிக்கை (DPR)",
          "description": "கிடங்கு திட்ட அறிக்கை",
          "status": "Pending"
        },
        {
          "docName": "நில உரிமை ஆவணம் / குத்தகை ஒப்பந்தம்",
          "description": "இட சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பொறியாளர் மதிப்பீடு மற்றும் வரைபடம்",
          "description": "கட்டுமான மதிப்பீடு",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "कृषी पायाभूत सुविधा निधी (AIF - ₹2 कोटींपर्यंत 3% व्याज सवलत)",
      "description": "शेतमालासाठी शीतगृहे (कोल्ड स्टोरेज), धान्य गोदामे, प्रतवारी युनिट्स उभारण्यासाठी ₹2 कोटींपर्यंत 3% व्याज अनुदान व शासकीय हमी देणारी योजना.",
      "loanAmount": "₹2,00,00,000 पर्यंत (3% व्याज अनुदानासह)",
      "interestRate": "वार्षिक 3% सवलत",
      "repaymentPeriod": "7 वर्षांपर्यंत (2 वर्षे मोरेटोरियम)",
      "whoCanApply": "शेतकरी, एफपीओ, प्राथमिक कृषी पतसंस्था (PACS), कृषी उद्योजक",
      "purpose": "कोल्ड स्टोरेज, गोदामे, पॅकहाऊस, प्रतवारी युनिट्स उभारणी",
      "benefits": [
        "₹2 कोटींपर्यंतच्या कर्जावर 7 वर्षांसाठी वार्षिक 3% व्याज अनुदान",
        "CGTMSE अंतर्गत संपूर्ण क्रेडिट हमीचे शुल्क केंद्र सरकार भरणार",
        "बांधकाम काळात 2 वर्षांपर्यंत मुद्दल परतफेडीला स्थगिती (मोरेटोरियम)"
      ],
      "eligibleCategories": [
        "शेतकरी",
        "कृषी उद्योजक",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "शेती व पूरक उद्योग",
        "गोदाम व साठवणूक"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "गोदाम उभारणी प्रकल्प",
          "status": "Pending"
        },
        {
          "docName": "जागेचा 7/12 उतारा किंवा भाडेकरार",
          "description": "जागेचा मालकी पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सिव्हिल इंजिनिअर खर्च अंदाज व नकाशा",
          "description": "बांधकाम खर्च अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "কৃষি অবকাঠামো তহবিল (AIF - ₹২ কোটি পর্যন্ত ৩% সুদ ভর্তুকি)",
      "description": "হিমাগার (কোল্ড স্টোরেজ), খাদ্য শস্যের গুদাম ও গ্রেডিং ইউনিট নির্মাণের জন্য ₹২ কোটি পর্যন্ত ৩% সরকারি সুদ ভর্তুকি ও গ্যারান্টিযুক্ত দীর্ঘমেয়াদী ঋণ প্রকল্প।",
      "loanAmount": "₹২,০০,০০,০০০ পর্যন্ত (৩% সুদ ভর্তুকিসহ)",
      "interestRate": "৩% সরকারি সুদ ভর্তুকি",
      "repaymentPeriod": "৭ বছর পর্যন্ত (২ বছর স্থগিতাদেশ)",
      "whoCanApply": "কৃষক, এফপিও, সমবায় সমিতি ও কৃষি উদ্যোক্তা",
      "purpose": "কোল্ড স্টোরেজ, গুদাম, সাইলো ও সর্টিং-গ্রেডিং ইউনিট স্থাপন",
      "benefits": [
        "₹২ কোটি পর্যন্ত ঋণে ৭ বছরের জন্য বার্ষিক ৩% সুদ ভর্তুকি",
        "কোনো অতিরিক্ত জামানত ছাড়াই সরকারি ঋণ গ্যারান্টি সুবিধা",
        "নির্মাণকালীন সময়ে ২ বছর পর্যন্ত ঋণ পরিশোধে স্থগিতাদেশ"
      ],
      "eligibleCategories": [
        "কৃষক",
        "কৃষি উদ্যোক্তা",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "কৃষি ও খাদ্য প্রক্রিয়াকরণ",
        "গুদাম ও হিমাগার"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "হিমাগার ও গুদাম পরিকল্পনা",
          "status": "Pending"
        },
        {
          "docName": "জমির দলিল বা দীর্ঘমেয়াদী লিজ চুক্তি",
          "description": "স্থানের প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "সিভিল ইঞ্জিনিয়ারের নকশা ও ব্যয় প্রাক্কলন",
          "description": "নির্মাণ ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "SMAM": {
    "en": {
      "name": "Sub-Mission on Agricultural Mechanization (SMAM - Tractor Subsidy)",
      "description": "Centrally sponsored scheme by Ministry of Agriculture providing 40% to 50% capital subsidy (up to ₹5 Lakhs) for purchasing tractors, power tillers, harvesters, and modern farm equipment.",
      "loanAmount": "Subsidy up to ₹5,00,000 on farm machinery",
      "interestRate": "Normal Bank Loan Rate (8% - 10%)",
      "repaymentPeriod": "Up to 5 Years",
      "whoCanApply": "Individual farmers, Custom Hiring Centers (CHCs), Farmer Groups, Village Entrepreneurs",
      "purpose": "Procurement of tractors, power weeders, combine harvesters, laser land levelers",
      "benefits": [
        "Up to 50% capital subsidy for SC, ST, Small & Marginal farmers and Women; 40% for other farmers",
        "Establishment of Custom Hiring Centers (CHCs) with up to ₹10 Lakhs subsidy (40% of ₹25L project)",
        "Direct Benefit Transfer (DBT) credited straight to bank account upon machine verification"
      ],
      "eligibleCategories": [
        "All Categories",
        "Small & Marginal Farmers",
        "SC",
        "ST",
        "Women"
      ],
      "eligibleBusinessTypes": [
        "Agriculture & Allied",
        "Farm Mechanization Services"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Land Ownership Record (RoR / Pattadar Passbook)",
          "description": "Agricultural land holding proof",
          "status": "Uploaded"
        },
        {
          "docName": "Tractor / Equipment Proforma Invoice",
          "description": "Authorized dealer quotation",
          "status": "Pending"
        },
        {
          "docName": "Bank Passbook with DBT linkage",
          "description": "Subsidy credit account",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "వ్యవసాయ యాంత్రీకరణ మిషన్ (SMAM - ట్రాక్టర్ & యంత్రాలపై 50% సబ్సిడీ)",
      "description": "ట్రాక్టర్లు, పవర్ టిల్లర్లు, వరి కోత యంత్రాలు మరియు ఆధునిక వ్యవసాయ పరికరాల కొనుగోలుపై రైతులకు 40% నుండి 50% వరకు (రూ. 5 లక్షల వరకు) భారీ సబ్సిడీని అందించే కేంద్ర పథకం.",
      "loanAmount": "యంత్రాలపై రూ. 5,00,000 వరకు సబ్సిడీ",
      "interestRate": "సాధారణ బ్యాంక్ లోన్ రేటు (8% - 10%)",
      "repaymentPeriod": "5 సంవత్సరాల వరకు",
      "whoCanApply": "రైతులు, చిన్న & సన్నకారు రైతులు, కస్టమ్ హైరింగ్ సెంటర్లు (CHC), రైతు ఉత్పత్తిదారుల సంఘాలు",
      "purpose": "ట్రాక్టర్లు, పవర్ టిల్లర్లు, హార్వెస్టర్లు, లేజర్ ల్యాండ్ లెవెలర్ల కొనుగోలు",
      "benefits": [
        "ఎస్సీ, ఎస్టీ, చిన్న/సన్నకారు రైతులు మరియు మహిళలకు 50% భారీ సబ్సిడీ; ఇతర రైతులకు 40% సబ్సిడీ",
        "గ్రామాల్లో కస్టమ్ హైరింగ్ సెంటర్ల (CHC) ఏర్పాటుకు రూ. 10 లక్షల వరకు ప్రత్యేక సబ్సిడీ",
        "యంత్రాల పరిశీలన పూర్తయిన వెంటనే లబ్ధిదారుని బ్యాంక్ ఖాతాలో నేరుగా డీబీటీ (DBT) ద్వారా సబ్సిడీ జమ"
      ],
      "eligibleCategories": [
        "చిన్న & సన్నకారు రైతులు",
        "మహిళలు",
        "ఎస్సీ",
        "ఎస్టీ",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "వ్యవసాయం",
        "వ్యవసాయ యంత్రాల అద్దె కేంద్రం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "భూమి యాజమాన్య పత్రం (పట్టాదారు పాస్‌బుక్ / అడంగల్)",
          "description": "రైతు భూమి రికార్డు",
          "status": "Uploaded"
        },
        {
          "docName": "ట్రాక్టర్ / పరికరాల అధికారిక కొటేషన్",
          "description": "డీలర్ కొటేషన్ పత్రం",
          "status": "Pending"
        },
        {
          "docName": "బ్యాంక్ పాస్‌బుక్ (డీబీటీ లింక్)",
          "description": "సబ్సిడీ జమ ఖాతా",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "कृषि यंत्रीकरण उप-मिशन (SMAM - ट्रैक्टर व कृषि यंत्रों पर 50% सब्सिडी)",
      "description": "किसानों को ट्रैक्टर, पावर टिलर, रीपर, कंबाइन हार्वेस्टर और आधुनिक कृषि उपकरण खरीदने हेतु 40% से 50% (₹5 लाख तक) की सीधी सरकारी सब्सिडी देने वाली योजना।",
      "loanAmount": "कृषि यंत्रों पर ₹5,00,000 तक सब्सिडी",
      "interestRate": "सामान्य बैंक ब्याज दर (8% - 10%)",
      "repaymentPeriod": "5 वर्ष तक",
      "whoCanApply": "व्यक्तिगत किसान, कस्टम हायरिंग सेंटर (CHC), किसान समूह, ग्रामीण युवा",
      "purpose": "ट्रैक्टर, रोटावेटर, कल्टीवेटर, हार्वेस्टर और लेजर लैंड लेवलर की खरीद",
      "benefits": [
        "लघु व सीमांत किसानों, महिलाओं, एससी व एसटी को 50% सब्सिडी; अन्य को 40% सब्सिडी",
        "कस्टम हायरिंग सेंटर (CHC) स्थापना हेतु ₹10 लाख तक की भारी सब्सिडी सहायता",
        "मशीन सत्यापन के पश्चात डीबीटी द्वारा सीधे बैंक खाते में सब्सिडी अंतरण"
      ],
      "eligibleCategories": [
        "छोटे व सीमांत किसान",
        "महिलाएं",
        "एससी",
        "एसटी",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "कृषि व संबद्ध",
        "कृषि यंत्र सेवाएं"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "भू-अभिलेख (खतौनी / पट्टा पासबुक)",
          "description": "कृषि भूमि प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "ट्रैक्टर / उपकरण का अधिकृत कोटेशन",
          "description": "डीलर कोटेशन",
          "status": "Pending"
        },
        {
          "docName": "डीबीटी लिंक बैंक खाता पासबुक",
          "description": "सब्सिडी अंतरण खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಉಪ-ಮಿಷನ್ (SMAM - ಟ್ರ್ಯಾಕ್ಟರ್ ಮೇಲೆ 50% ಸಬ್ಸಿಡಿ)",
      "description": "ರೈತರಿಗೆ ಟ್ರ್ಯಾಕ್ಟರ್, ಟಿಲ್ಲರ್ ಮತ್ತು ಸುಧಾರಿತ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಖರೀದಿಗೆ 40% ರಿಂದ 50% ವರೆಗೆ ಸಬ್ಸಿಡಿ ನೀಡುವ ಕೃಷಿ ಸಚಿವಾಲಯದ ಯೋಜನೆ.",
      "loanAmount": "ಕೃಷಿ ಯಂತ್ರಗಳಿಗೆ ₹5,00,000 ವರೆಗೆ ಸಬ್ಸಿಡಿ",
      "interestRate": "ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕ್ ದರ (8% - 10%)",
      "repaymentPeriod": "5 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರು, ಬಾಡಿಗೆ ಸೇವಾ ಕೇಂದ್ರಗಳು (CHC)",
      "purpose": "ಟ್ರ್ಯಾಕ್ಟರ್, ರೋಟಾವೇಟರ್, ಕೊಯ್ಲು ಯಂತ್ರಗಳ ಖರೀದಿ",
      "benefits": [
        "ಮಹಿಳೆಯರು, ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ ಮತ್ತು ಸಣ್ಣ ರೈತರಿಗೆ 50% ಬೃಹತ್ ಸಬ್ಸಿಡಿ",
        "ಗ್ರಾಮೀಣ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ ಬಾಡಿಗೆ ಕೇಂದ್ರಕ್ಕೆ ₹10 ಲಕ್ಷದವರೆಗೆ ನೆರವು",
        "ಖಾತೆಗೆ ನೇರವಾಗಿ ಡಿಬಿಟಿ (DBT) ಮೂಲಕ ಸಬ್ಸಿಡಿ ಜಮೆ"
      ],
      "eligibleCategories": [
        "ರೈತರು",
        "ಸಣ್ಣ ರೈತರು",
        "ಮಹಿಳೆಯರು"
      ],
      "eligibleBusinessTypes": [
        "ಕೃಷಿ",
        "ಯಂತ್ರೋಪಕರಣ ಸೇವೆ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಭೂಮಿ ದಾಖಲೆ (ಪಹಣಿ / ಪಟ್ಟಾ)",
          "description": "ಕೃಷಿ ಭೂಮಿ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಟ್ರ್ಯಾಕ್ಟರ್ / ಉಪಕರಣಗಳ ಕೊಟೇಶನ್",
          "description": "ಅಧಿಕೃತ ಡೀಲರ್ ಪಟ್ಟಿ",
          "status": "Pending"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "வேளாண் இயந்திரமயமாக்கல் திட்டம் (SMAM - டிராக்டருக்கு 50% மானியம்)",
      "description": "டிராக்டர்கள், பவர் டில்லர்கள் மற்றும் நவீன விவசாய உபகரணங்கள் வாங்க விவசாயிகளுக்கு 40% முதல் 50% வரை மானியம் வழங்கும் திட்டம்.",
      "loanAmount": "விவசாய இயந்திரங்களுக்கு ரூ. 5,00,000 வரை மானியம்",
      "interestRate": "வழக்கமான வங்கி வட்டி (8% - 10%)",
      "repaymentPeriod": "5 ஆண்டுகள் வரை",
      "whoCanApply": "சிறு மற்றும் குறு விவசாயிகள், இயந்திர வாடகை மையங்கள் (CHC)",
      "purpose": "டிராக்டர், பவர் டில்லர், அறுவடை இயந்திரங்கள் வாங்குதல்",
      "benefits": [
        "பெண்கள், எஸ்சி, எஸ்டி மற்றும் சிறு விவசாயிகளுக்கு 50% மானியம்",
        "வாடகை மையங்கள் (CHC) அமைக்க ரூ. 10 லட்சம் வரை மானிய உதவி",
        "டிபிடி மூலம் நேரடியாக வங்கிக் கணக்கில் மானியம் வரவு"
      ],
      "eligibleCategories": [
        "சிறு விவசாயிகள்",
        "பெண்கள்",
        "எஸ்சி/எஸ்டி"
      ],
      "eligibleBusinessTypes": [
        "விவசாயம்",
        "இயந்திர வாடகை சேவை"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "நில ஆவணம் (பட்டா / சிட்டா)",
          "description": "நில உரிமை சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "டிராக்டர் / இயந்திர விலை மதிப்பீடு",
          "description": "டீலர் விலைப்பட்டியல்",
          "status": "Pending"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "कृषी यांत्रिकीकरण उप-अभियान (SMAM - ट्रॅक्टरवर 50% अनुदान)",
      "description": "शेतकऱ्यांना ट्रॅक्टर, पॉवर टिलर, हार्वेस्टर आणि आधुनिक कृषी अवजारे खरेदीसाठी 40% ते 50% (₹5 लाखांपर्यंत) थेट शासकीय अनुदान देणारी योजना.",
      "loanAmount": "कृषी अवजारांवर ₹5,00,000 पर्यंत अनुदान",
      "interestRate": "सामान्य बँक व्याजदर (8% - 10%)",
      "repaymentPeriod": "5 वर्षांपर्यंत",
      "whoCanApply": "शेतकरी, अल्प व अल्पभूधारक शेतकरी, कस्टम हायरिंग सेंटर (CHC)",
      "purpose": "ट्रॅक्टर, रोटाव्हेटर, हार्वेस्टर आणि पेरणी यंत्रे खरेदी",
      "benefits": [
        "महिला, एससी, एसटी आणि अल्पभूधारक शेतकऱ्यांना 50% अनुदान; इतरांना 40%",
        "कस्टम हायरिंग सेंटर उभारण्यासाठी ₹10 लाखांपर्यंतचे अनुदान सहाय्य",
        "यंत्र पडताळणीनंतर थेट बँक खात्यात डीबीटी द्वारे अनुदान जमा"
      ],
      "eligibleCategories": [
        "शेतकरी",
        "अल्पभूधारक शेतकरी",
        "महिला"
      ],
      "eligibleBusinessTypes": [
        "शेती व कृषी अवजारे सेवा"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "जमीन महसूल नोंद (7/12 व 8-अ)",
          "description": "शेतजमीन पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "ट्रॅक्टर / अवजारांचे अधिकृत कोटेशन",
          "description": "खरेदी कोटेशन",
          "status": "Pending"
        },
        {
          "docName": "बँक पासबुक (डीबीटी लिंक)",
          "description": "अनुदान खाते पुरावा",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "কৃষি যান্ত্রিকীকরণ উপ-মিশন (SMAM - ট্র্যাক্টরে ৫০% সরকারি অনুদান)",
      "description": "কৃষকদের ট্র্যাক্টর, পাওয়ার টিলার, হার্ভেস্টার এবং আধুনিক কৃষি যন্ত্রপাতি ক্রয়ের জন্য ৪০% থেকে ৫০% (₹৫ লাখ পর্যন্ত) সরকারি ভর্তুকি প্রদান প্রকল্প।",
      "loanAmount": "যন্ত্রপাতিতে ₹৫,০০,০০০ পর্যন্ত সরকারি অনুদান",
      "interestRate": "স্বাভাবিক ব্যাংক সুদের হার (৮% - ১০%)",
      "repaymentPeriod": "৫ বছর পর্যন্ত",
      "whoCanApply": "ক্ষুদ্র ও প্রান্তিক কৃষক, কৃষি যন্ত্রপাতি ভাড়া কেন্দ্র (CHC), কৃষক গোষ্ঠী",
      "purpose": "ট্র্যাক্টর, পাওয়ার টিলার, কম্বাইন হার্ভেস্টার ও লেজার লেভেলার ক্রয়",
      "benefits": [
        "নারী, এসসি, এসটি এবং প্রান্তিক কৃষকদের জন্য ৫০% অনুদান; অন্যদের জন্য ৪০%",
        "কাস্টম হায়ারিং সেন্টার (CHC) স্থাপনে ₹১০ লাখ পর্যন্ত বিশেষ অনুদান",
        "ডিবিটি (DBT) মাধ্যমে সরাসরি ব্যাংক অ্যাকাউন্টে অনুদান স্থানান্তর"
      ],
      "eligibleCategories": [
        "প্রান্তিক কৃষক",
        "নারী",
        "এসসি/এসটি"
      ],
      "eligibleBusinessTypes": [
        "কৃষি ও সহযোগী খাত",
        "কৃষি যন্ত্রপাতি পরিষেবা"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "জমির খতিয়ান / পর্চা",
          "description": "কৃষিজমি প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ট্র্যাক্টরের প্রফর্মা ইনভয়েস",
          "description": "ডিলারের কোটেশন",
          "status": "Pending"
        },
        {
          "docName": "ডিবিটি সংযুক্ত ব্যাংক পাসবুক",
          "description": "অনুদান অ্যাকাউন্ট",
          "status": "Uploaded"
        }
      ]
    }
  },
  "PMMSY": {
    "en": {
      "name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY - Fisheries)",
      "description": "Flagship Department of Fisheries initiative providing 40% to 60% capital subsidy for setting up inland aquaculture ponds, Biofloc fish farming, ornamental fisheries, and cold chain transport with projects up to ₹50 Lakhs.",
      "loanAmount": "Project cost up to ₹50 Lakhs (40% - 60% Subsidy)",
      "interestRate": "7% - 9% (concessional credit)",
      "repaymentPeriod": "Up to 7 Years",
      "whoCanApply": "Fishers, fish farmers, SHGs, JLGs, fisheries cooperatives, and rural youth",
      "purpose": "New pond construction, Biofloc fish tanks, ornamental fish units, insulated transport vehicles",
      "benefits": [
        "Government capital subsidy: 60% for Women and SC/ST beneficiaries; 40% for General and OBC",
        "Comprehensive coverage of input costs (fingerlings, formulated feed, aeration systems)",
        "Includes livelihood and nutritional support during fish breeding ban periods"
      ],
      "eligibleCategories": [
        "All Categories",
        "Fishers",
        "Women",
        "SC",
        "ST",
        "OBC"
      ],
      "eligibleBusinessTypes": [
        "Fisheries & Aquaculture",
        "Agriculture & Allied",
        "Food Business"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & Fisher ID Card",
          "description": "Identity and trade proof",
          "status": "Uploaded"
        },
        {
          "docName": "Land / Water Body Ownership or Lease Deed (Minimum 7 Years)",
          "description": "Pond site proof",
          "status": "Uploaded"
        },
        {
          "docName": "Detailed Project Report (DPR) for Aquaculture",
          "description": "Pond dimensions, feed, harvest forecast",
          "status": "Pending"
        },
        {
          "docName": "Bank Account Passbook",
          "description": "Direct subsidy transfer account",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "ప్రధాన మంత్రి మత్స్య సంపద యోజన (PMMSY - చేపల పెంపకంలో 60% సబ్సిడీ)",
      "description": "చేపల చెరువుల తవ్వకం, బయోఫ్లాక్ ట్యాంకులు, రొయ్యల సాగు, ఆక్వాకల్చర్ మరియు ఐస్ బాక్స్ వాహనాల కొనుగోలుపై ప్రభుత్వం 40% నుండి 60% వరకు (రూ. 50 లక్షల వరకు ప్రాజెక్టులకు) భారీ సబ్సిడీని అందించే పథకం.",
      "loanAmount": "రూ. 50,00,000 వరకు ప్రాజెక్ట్ వ్యయం (40% - 60% సబ్సిడీ)",
      "interestRate": "7% - 9% (రాయితీ వ్యవసాయ వడ్డీ రేటు)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు",
      "whoCanApply": "మత్స్యకారులు, చేపల రైతులు, స్వయం సహాయక సంఘాలు (SHGs), గ్రామీణ యువత",
      "purpose": "కొత్త చేపల చెరువుల నిర్మాణం, బయోఫ్లాక్ ట్యాంకులు, ఆక్సిజన్ ఎరేటర్లు, రవాణా వాహనాలు",
      "benefits": [
        "మహిళలు మరియు ఎస్సీ, ఎస్టీ లబ్ధిదారులకు 60% భారీ సబ్సిడీ; జనరల్ మరియు ఓబీసీలకు 40% సబ్సిడీ",
        "చేప పిల్లలు, నాణ్యమైన దాణా మరియు ఎరేషన్ పరికరాల ఖర్చులకు సమగ్ర సహాయం",
        "చేపల వేట నిషేధిత కాలంలో కుటుంబాలకు జీవనోపాధి మద్దతు"
      ],
      "eligibleCategories": [
        "మత్స్యకారులు",
        "మహిళలు",
        "ఎస్సీ",
        "ఎస్టీ",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "చేపల పెంపకం",
        "రొయ్యల సాగు",
        "వ్యవసాయం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & మత్స్యకారుల గుర్తింపు కార్డు",
          "description": "మత్స్యకార గుర్తింపు పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "చెరువు స్థల యాజమాన్యం లేదా కౌలు ఒప్పందం (కనీసం 7 ఏళ్లు)",
          "description": "చెరువు స్థల రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "ఆక్వాకల్చర్ వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
          "description": "చెరువు కొలతలు మరియు దిగుబడి అంచనా",
          "status": "Pending"
        },
        {
          "docName": "బ్యాంక్ పాస్‌బుక్",
          "description": "సబ్సిడీ జమ ఖాతా",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY - मछली पालन पर 60% सब्सिडी)",
      "description": "मछली पालन तालाब निर्माण, बायोफ्लॉक टैंक, सजावटी मछली उत्पादन और कोल्ड चेन वाहनों की खरीद हेतु 40% से 60% तक की भारी सरकारी सब्सिडी देने वाली योजना।",
      "loanAmount": "परियोजना लागत ₹50,00,000 तक (40% - 60% सब्सिडी)",
      "interestRate": "7% - 9% (रियायती दर)",
      "repaymentPeriod": "7 वर्ष तक",
      "whoCanApply": "मछुआरे, मछली पालक, महिला स्वयं सहायता समूह, मत्स्य सहकारी समितियां",
      "purpose": "नए तालाब निर्माण, बायोफ्लॉक टैंक, वातन (एरेटर) प्रणाली और वाहन खरीद",
      "benefits": [
        "महिलाओं, एससी व एसटी को 60% तक सब्सिडी; अन्य श्रेणियों को 40% पूंजीगत सब्सिडी",
        "फिंगरलिंग्स (मछली के बच्चे), आहार और उन्नत उपकरणों पर व्यापक वित्तीय सहायता",
        "प्रजनन प्रतिबंध अवधि के दौरान पोषण और आजीविका सहायता"
      ],
      "eligibleCategories": [
        "मछुआरे",
        "महिलाएं",
        "एससी",
        "एसटी",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "मत्स्य पालन",
        "एक्वाकल्चर",
        "कृषि व संबद्ध"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और मछुआरा पहचान पत्र",
          "description": "पहचान व व्यवसाय प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "भूमि / तालाब स्वामित्व या 7 वर्षीय पट्टा अनुबंध",
          "description": "तालाब स्थल प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "मत्स्य पालन विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "तालाब लागत व आय अनुमान",
          "status": "Pending"
        },
        {
          "docName": "बैंक पासबुक",
          "description": "सब्सिडी अंतरण खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮತ್ಸ್ಯ ಸಂಪದ ಯೋಜನೆ (PMMSY - ಮೀನುಗಾರಿಕೆಗೆ 60% ಸಬ್ಸಿಡಿ)",
      "description": "ಮೀನು ಸಾಕಣೆ ಕೊಳಗಳ ನಿರ್ಮಾಣ, ಬಯೋಫ್ಲೋಕ್ ಟ್ಯಾಂಕ್‌ಗಳು ಮತ್ತು ಶೈತ್ಯೀಕರಿಸಿದ ವಾಹನಗಳ ಖರೀದಿಗೆ 40% ರಿಂದ 60% ರವರೆಗೆ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹50,00,000 ವರೆಗೆ ಯೋಜನೆ (40% - 60% ಸಬ್ಸಿಡಿ)",
      "interestRate": "7% - 9%",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಮೀನುಗಾರರು, ಮೀನು ಸಾಕಣೆದಾರರು, ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘಗಳು",
      "purpose": "ಮೀನಿನ ಕೊಳ ನಿರ್ಮಾಣ, ಬಯೋಫ್ಲೋಕ್ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಾರಿಗೆ ವಾಹನಗಳು",
      "benefits": [
        "ಮಹಿಳೆಯರು ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಫಲಾನುಭವಿಗಳಿಗೆ 60% ಸಬ್ಸಿಡಿ; ಇತರರಿಗೆ 40%",
        "ಮೀನಿನ ಮರಿಗಳು ಮತ್ತು ಆಹಾರಕ್ಕೆ ಆರ್ಥಿಕ ನೆರವು",
        "ಮೀನುಗಾರಿಕೆ ನಿಷೇಧ ಅವಧಿಯಲ್ಲಿ ಜೀವನೋಪಾಯ ಬೆಂಬಲ"
      ],
      "eligibleCategories": [
        "ಮೀನುಗಾರರು",
        "ಮಹಿಳೆಯರು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಮೀನುಗಾರಿಕೆ",
        "ಕೃಷಿ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಮೀನುಗಾರ ಗುರುತಿನ ಚೀಟಿ",
          "description": "ಗುರುತಿನ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕೊಳದ ಜಮೀನು ದಾಖಲೆ / ಗುತ್ತಿಗೆ ಒಪ್ಪಂದ",
          "description": "ಸ್ಥಳದ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಮೀನು ಸಾಕಣೆ ಯೋಜನೆ",
          "status": "Pending"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "பிரதான் மந்திரி மத்ஸ்ய சம்பதா திட்டம் (PMMSY - மீன் வளர்ப்புக்கு 60% மானியம்)",
      "description": "மீன் பண்ணை அமைத்தல், பயோபிளாக் தொட்டிகள் மற்றும் மீன் போக்குவரத்து வாகனங்கள் வாங்க 40% முதல் 60% வரை மூலதன மானியம் வழங்கும் திட்டம்.",
      "loanAmount": "திட்ட மதிப்பீடு ரூ. 50,00,000 வரை (40% - 60% மானியம்)",
      "interestRate": "7% - 9%",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "மீனவர்கள், மீன் வளர்ப்போர், மகளிர் சுயஉதவி குழுக்கள்",
      "purpose": "புதிய மீன் குளம் அமைத்தல், பயோபிளாக் தொட்டிகள் மற்றும் குளிர்சாதன வாகனங்கள்",
      "benefits": [
        "பெண்கள் மற்றும் எஸ்சி/எஸ்டி பிரிவினருக்கு 60% மானியம்; மற்றவர்களுக்கு 40%",
        "மீன் குஞ்சுகள், தீவனம் மற்றும் காற்றோட்ட கருவிகளுக்கு விரிவான நிதி உதவி",
        "மீன்பிடி தடைக்காலத்தில் வாழ்வாதார ஆதரவு"
      ],
      "eligibleCategories": [
        "மீனவர்கள்",
        "பெண்கள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "மீன் வளர்ப்பு",
        "விவசாயம்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & மீனவர் அடையாள அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "குள நில உரிமை ஆவணம் / 7 வருட குத்தகை ஒப்பந்தம்",
          "description": "இட சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான மீன்வளர்ப்பு திட்ட அறிக்கை (DPR)",
          "description": "திட்ட மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY - मत्स्यपालनावर 60% अनुदान)",
      "description": "मत्स्य तळे खोदणे, बायोफ्लॉक टँक उभारणे आणि शीतगृह वाहतूक वाहने खरेदीसाठी 40% ते 60% (₹50 लाखांपर्यंत) शासकीय भांडवली अनुदान देणारी योजना.",
      "loanAmount": "प्रकल्प खर्च ₹50,00,000 पर्यंत (40% - 60% अनुदान)",
      "interestRate": "7% - 9% (सवलतीचा दर)",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "मच्छीमार, मत्स्यपालक शेतकरी, महिला बचत गट, मत्स्य सहकारी संस्था",
      "purpose": "नवीन मत्स्य तळे, बायोफ्लॉक युनिट्स आणि इन्सुलेटेड वाहने खरेदी",
      "benefits": [
        "महिला व एससी/एसटी लाभार्थ्यांना 60% थेट अनुदान; इतरांना 40% अनुदान",
        "मत्स्य बीज, दर्जेदार खाद्य आणि एरिएटर यंत्रांवर सर्वसमावेशक मदत",
        "प्रजनन बंदी काळात उपजीविका व पोषण सहाय್ಯ"
      ],
      "eligibleCategories": [
        "मच्छीमार",
        "महिला",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "मत्स्यपालन",
        "शेती व पूरक उद्योग"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि मच्छीमार ओळखपत्र",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "तळ्याची जमीन मालकी किंवा 7 वर्षांचा भाडेकरार",
          "description": "जागेचा पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "मत्स्यपालन सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "बँक पासबुक",
          "description": "अनुदान अंतरण खाते",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রী মৎস্য সম্পদ যোজনা (PMMSY - মাছ চাষে ৬০% সরকারি অনুদান)",
      "description": "নতুন মাছের পুকুর খনন, বায়োফ্লক ট্যাংক স্থাপন, রঙিন মাছ চাষ এবং শীতল পরিবহন যান ক্রয়ে ৪০% থেকে ৬০% (₹৫০ লাখ পর্যন্ত) সরকারি মূলধন ভর্তুকি প্রকল্প।",
      "loanAmount": "প্রকল্প ব্যয় ₹৫০,০০,০০০ পর্যন্ত (৪০% - ৬০% অনুদান)",
      "interestRate": "৭% - ৯% (রেয়াতি সুদ)",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "মৎস্যজীবী, মাছ চাষি, মহিলা স্বনির্ভর দল, মৎস্য সমবায় সমিতি",
      "purpose": "নতুন পুকুর খনন, বায়োফ্লক ট্যাংক, এরেটর মেশিন ও পরিবহন যান ক্রয়",
      "benefits": [
        "নারী, এসসি ও এসটি সুবিধাভোগীদের জন্য ৬০% অনুদান; অন্যান্যদের জন্য ৪০%",
        "মাছের পোনা, মানসম্মত খাদ্য এবং আধুনিক যন্ত্রপাতির ব্যয়ে আর্থিক সাহায্য",
        "মাছ ধরার নিষেধাজ্ঞার সময়ে পুষ্টি ও জীবিকা সহায়তা"
      ],
      "eligibleCategories": [
        "মৎস্যজীবী",
        "নারী",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "মৎস্য চাষ",
        "কৃষি ও সহযোগী খাত"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও মৎস্যজীবী পরিচয়পত্র",
          "description": "পরিচয় ও পেশার প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "পুকুরের জমির রেকর্ড বা ৭ বছরের লিজ চুক্তি",
          "description": "স্থানের প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "মাছ চাষের বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "ব্যয় ও উৎপাদন অনুমান",
          "status": "Pending"
        },
        {
          "docName": "ব্যাংক পাসবুক",
          "description": "ভর্তুকি প্রাপ্তির অ্যাকাউন্ট",
          "status": "Uploaded"
        }
      ]
    }
  },
  "AHIDF": {
    "en": {
      "name": "Animal Husbandry Infrastructure Development Fund (AHIDF - Dairy & Poultry)",
      "description": "Department of Animal Husbandry initiative offering up to ₹3 Crore debt financing with 3% annual interest subvention and 8-year repayment tenure for setting up modern dairy and poultry infrastructure.",
      "loanAmount": "Up to ₹3 Crore (3% Interest Subvention)",
      "interestRate": "Subsidized (3% Interest Subvention p.a.)",
      "repaymentPeriod": "Up to 8 Years (Moratorium up to 2 Years)",
      "whoCanApply": "Dairy entrepreneurs, Farmer Producer Organizations (FPOs), Section 8 companies, MSMEs",
      "purpose": "Setting up milk chilling centers, automated milking units, paneer/curd processing, poultry feed mills",
      "benefits": [
        "3% interest subvention for up to 8 years across commercial banks",
        "Credit guarantee up to 25% of the total loan under Credit Guarantee Fund",
        "Beneficiary own margin contribution is only 10% for Micro/Small and 15% for Medium enterprises"
      ],
      "eligibleCategories": [
        "All Categories",
        "Dairy Farmers",
        "Poultry Farmers",
        "FPOs"
      ],
      "eligibleBusinessTypes": [
        "Dairy & Livestock",
        "Poultry Farming",
        "Food Business"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Dairy / Poultry Farm Land Title Deed",
          "description": "Site location proof",
          "status": "Uploaded"
        },
        {
          "docName": "Detailed Project Report (DPR)",
          "description": "Milking equipment, chilling plant, poultry capacity",
          "status": "Pending"
        },
        {
          "docName": "Pollution Control Clearance (CPCB/SPCB)",
          "description": "Environmental compliance",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "పశుసంవర్ధక మౌలిక సదుపాయాల నిధి (AHIDF - పాడి & పౌల్ట్రీ పరిశ్రమలకు 3% వడ్డీ రాయితీ)",
      "description": "ఆధునిక డెయిరీ ఫామ్‌లు, ఆటోమేటిక్ మిల్కింగ్ యంత్రాలు, పాల చిల్లింగ్ కేంద్రాలు, నెయ్యి/పనీర్ ప్రాసెసింగ్ మరియు పౌల్ట్రీ ఫీడ్ మిల్లుల ఏర్పాటుకు ₹3 కోట్ల వరకు 3% వడ్డీ తగ్గింపుతో 8 ఏళ్ల కాలపరిమితి రుణాలు అందించే పథకం.",
      "loanAmount": "రూ. 3,00,00,000 వరకు (3% వడ్డీ సబ్సిడీ)",
      "interestRate": "రాయితీ వడ్డీ రేటు (ఏటా 3% ప్రభుత్వ వడ్డీ తగ్గింపు)",
      "repaymentPeriod": "8 సంవత్సరాల వరకు (2 సంవత్సరాల మొరటోరియం)",
      "whoCanApply": "పాడి రైతులు, పౌల్ట్రీ యజమానులు, ఎఫ్‌పీఓలు, డెయిరీ సూక్ష్మ పారిశ్రామికవేత్తలు",
      "purpose": "పాల చిల్లింగ్ యూనిట్లు, పాలు పితికే యంత్రాలు, పనీర్ తయారీ ప్లాంట్లు, పౌల్ట్రీ ఫీడ్ మిల్లుల స్థాపన",
      "benefits": [
        "8 సంవత్సరాల పాటు బ్యాంక్ రుణాలపై ఏటా 3% వడ్డీ సబ్సిడీ",
        "క్రెడిట్ గ్యారెంటీ ఫండ్ కింద 25% వరకు ప్రభుత్వ రుణ గ్యారెంటీ",
        "సూక్ష్మ మరియు చిన్న పారిశ్రామికవేత్తల సొంత పెట్టుబడి కేవలం 10% మాత్రమే; 90% బ్యాంక్ రుణం"
      ],
      "eligibleCategories": [
        "పాడి రైతులు",
        "పౌల్ట్రీ రైతులు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "పాడి పరిశ్రమ",
        "పౌల్ట్రీ ఫార్మింగ్",
        "వ్యవసాయం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "డెయిరీ / పౌల్ట్రీ భూమి యాజమాన్య పత్రాలు",
          "description": "ఫామ్ స్థల ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ రిపోర్ట్ (DPR)",
          "description": "యంత్రాల ఖర్చు మరియు పాల ఉత్పత్తి అంచనా",
          "status": "Pending"
        },
        {
          "docName": "కాలుష్య నియంత్రణ అనుమతి పత్రం",
          "description": "పర్యావరణ అనుమతి",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "पशुपालन अवसंरचना विकास कोष (AHIDF - डेयरी व पोल्ट्री हेतु 3% ब्याज छूट)",
      "description": "दूध चिलिंग प्लांट, स्वचालित मिल्किंग मशीन, पनीर/दही प्रसंस्करण और पोल्ट्री फीड मिल की स्थापना हेतु ₹3 करोड़ तक 3% ब्याज छूट और 8 वर्ष की अवधि के साथ ऋण योजना।",
      "loanAmount": "₹3,00,00,000 तक (3% ब्याज उपदान)",
      "interestRate": "रियायती (3% ब्याज छूट)",
      "repaymentPeriod": "8 वर्ष तक (2 वर्ष मोरेटोरियम)",
      "whoCanApply": "डेयरी उद्यमी, पोल्ट्री संचालक, एफपीओ, पशुपालक समूह",
      "purpose": "दूध चिलिंग केंद्र, स्वचालित दुग्ध दोहन संयंत्र, पोल्ट्री फीड मिल व पैकेजिंग",
      "benefits": [
        "वाणिज्यिक बैंकों के ऋण पर 8 वर्षों हेतु 3% की वार्षिक ब्याज छूट",
        "क्रेडिट गारंटी फंड के तहत 25% तक की सरकारी ऋण गारंटी सुरक्षा",
        "सूक्ष्म व लघु उद्यमों का स्वयं का अंशदान केवल 10%; शेष 90% बैंक ऋण"
      ],
      "eligibleCategories": [
        "डेयरी किसान",
        "पोल्ट्री किसान",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "डेयरी व पशुपालन",
        "पोल्ट्री फार्मिंग",
        "खाद्य प्रसंस्करण"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "फार्म भूमि स्वामित्व दस्तावेज",
          "description": "स्थल स्वामित्व प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "संयंत्र क्षमता व उपकरण लागत",
          "status": "Pending"
        },
        {
          "docName": "प्रदूषण नियंत्रण बोर्ड प्रमाण पत्र",
          "description": "पर्यावरणीय अनापत्ति प्रमाण",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪಶುಸಂಗೋಪನೆ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AHIDF - ಡೈರಿ ಮತ್ತು ಪೌಲ್ಟ್ರಿ ಯೋಜನೆ)",
      "description": "ಹಾಲು ಶೈತ್ಯೀಕರಣ ಘಟಕಗಳು, ಕೋಳಿ ಆಹಾರ ಗಿರಣಿಗಳು ಮತ್ತು ಹೈನುಗಾರಿಕೆ ಉಪಕರಣಗಳ ಸ್ಥಾಪನೆಗೆ ₹3 ಕೋಟಿವರೆಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹3,00,00,000 ವರೆಗೆ (3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ)",
      "interestRate": "3% ಬಡ್ಡಿ ರಿಯಾಯಿತಿ",
      "repaymentPeriod": "8 ವರ್ಷಗಳವರೆಗೆ (2 ವರ್ಷ ಮೊರಟೋರಿಯಂ)",
      "whoCanApply": "ಹೈನುಗಾರಿಕೆ ಉದ್ಯಮಿಗಳು, ಪೌಲ್ಟ್ರಿ ಫಾರ್ಮ್ ಮಾಲೀಕರು, ಎಫ್‌ಪಿಒಗಳು",
      "purpose": "ಹಾಲು ಶೈತ್ಯೀಕರಣ, ಪನೀರ್ ಘಟಕಗಳು ಮತ್ತು ಕೋಳಿ ಆಹಾರ ಗಿರಣಿಗಳು",
      "benefits": [
        "8 ವರ್ಷಗಳವರೆಗೆ ವಾರ್ಷಿಕ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
        "25% ವರೆಗೆ ಸರ್ಕಾರಿ ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಭದ್ರತೆ",
        "ಫಲಾನುಭವಿಯ ಪಾಲು ಕೇವಲ 10%; ಉಳಿದ 90% ಬ್ಯಾಂಕ್ ಸಾಲ"
      ],
      "eligibleCategories": [
        "ಹೈನುಗಾರರು",
        "ಪೌಲ್ಟ್ರಿ ರೈತರು"
      ],
      "eligibleBusinessTypes": [
        "ಡೈರಿ",
        "ಪೌಲ್ಟ್ರಿ",
        "ಕೃಷಿ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಫಾರ್ಮ್ ಜಮೀನು ದಾಖಲೆ",
          "description": "ಸ್ಥಳದ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯದ ವರದಿ",
          "status": "Pending"
        },
        {
          "docName": "ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಪರಿಸರ ಅನುಮತಿ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "கால்நடை பராமரிப்பு உள்கட்டமைப்பு நிதி (AHIDF - பால் & கோழிப்பண்ணை திட்டம்)",
      "description": "பால் குளிர்பதன மையங்கள், தானியங்கி பால் கறக்கும் இயந்திரங்கள் மற்றும் கோழி தீவன ஆலைகள் அமைக்க ரூ. 3 கோடி வரை 3% வட்டி மானியத்துடன் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 3,00,00,000 வரை (3% வட்டி மானியம்)",
      "interestRate": "3% வட்டி மானியம்",
      "repaymentPeriod": "8 ஆண்டுகள் வரை (2 ஆண்டுகள் சலுகைக்காலம்)",
      "whoCanApply": "பால் பண்ணையாளர்கள், கோழிப்பண்ணை உரிமையாளர்கள், FPOக்கள்",
      "purpose": "பால் குளிர்பதனம், பன்னீர் தயாரிப்பு மற்றும் கோழி தீவன ஆலை அமைத்தல்",
      "benefits": [
        "8 ஆண்டுகளுக்கு 3% ஆண்டு வட்டி மானியம்",
        "25% வரை அரசு கடன் உத்தரவாத பாதுகாப்பு",
        "பயனாளியின் சொந்த பங்களிப்பு வெறும் 10% மட்டுமே; 90% வங்கி கடன்"
      ],
      "eligibleCategories": [
        "கால்நடை வளர்ப்போர்",
        "கோழிப்பண்ணையாளர்கள்"
      ],
      "eligibleBusinessTypes": [
        "பால் பண்ணை",
        "கோழிப்பண்ணை"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பண்ணை நில ஆவணம்",
          "description": "இட சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான திட்ட அறிக்கை (DPR)",
          "description": "உபகரண செலவு மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "மாசு கட்டுப்பாட்டு வாரிய சான்றிதழ்",
          "description": "சுற்றுச்சூழல் சான்று",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पशुसंवर्धन पायाभूत सुविधा विकास निधी (AHIDF - डेअरी व पोल्ट्री कर्ज)",
      "description": "दूध चिलिंग सेंटर, स्वयंचलित मिल्किंग मशिन्स, पनीर/दही प्रक्रिया आणि पोल्ट्री फीड मिल उभारण्यासाठी ₹3 कोटींपर्यंत 3% व्याज अनुदानासह 8 वर्षे मुदतीचे कर्ज.",
      "loanAmount": "₹3,00,00,000 पर्यंत (3% व्याज अनुदानासह)",
      "interestRate": "3% व्याज सवलत",
      "repaymentPeriod": "8 वर्षांपर्यंत (2 वर्षे मोरेटोरियम)",
      "whoCanApply": "दुग्ध व्यावसायिक, पोल्ट्री मालक, एफपीओ, पशुपालक",
      "purpose": "दूध शीतकरण केंद्र, दुग्ध प्रक्रिया युनिट्स आणि कुक्कुट खाद्य निर्मिती",
      "benefits": [
        "8 वर्षांसाठी व्यावसायिक बँकेच्या कर्जावर 3% वार्षिक व्याज अनुदान",
        "क्रेडिट गॅरंटी फंड अंतर्गत 25% शासकीय हमी संरक्षण",
        "सूक्ष्म व लघू उपक्रमांसाठी स्वतःचा वाटा केवळ 10%; 90% बँक कर्ज"
      ],
      "eligibleCategories": [
        "दुग्ध उत्पादक",
        "पोल्ट्री शेतकरी",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "दुग्ध व्यवसाय",
        "कुक्कुटपालन"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "फार्म जागेचा 7/12 उतारा",
          "description": "जागेचा पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "यंत्रसामग्री खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "प्रदूषण नियंत्रण मंडळ प्रमाणपत्र",
          "description": "पर्यावरण दाखला",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "প্রাণিসম্পদ অবকাঠামো উন্নয়ন তহবিল (AHIDF - দুগ্ধ ও পোল্ট্রি প্রকল্প)",
      "description": "দুধ শীতলীকরণ কেন্দ্র, স্বয়ংক্রিয় দুধ দোহন যন্ত্র, পনির তৈরি ও পোল্ট্রি ফিড মিল স্থাপনের জন্য ₹৩ কোটি পর্যন্ত ৩% সুদ ভর্তুকি ও ৮ বছর মেয়াদী ঋণ প্রকল্প।",
      "loanAmount": "₹৩,০০,০০,০০০ পর্যন্ত (৩% সুদ ভর্তুকি)",
      "interestRate": "৩% সরকারি সুদ ভর্তুকি",
      "repaymentPeriod": "৮ বছর পর্যন্ত (২ বছর স্থগিতাদেশ)",
      "whoCanApply": "দুগ্ধ খামারি, পোল্ট্রি উদ্যোক্তা, এফপিও, ক্ষুদ্র ব্যবসায়ী",
      "purpose": "দুধ চিলিং প্ল্যান্ট, স্বয়ংক্রিয় মিল্কিং মেশিন ও পোল্ট্রি ফিড মিল স্থাপন",
      "benefits": [
        "৮ বছরের জন্য বাণিজ্যিক ব্যাংক ঋণে ৩% বার্ষিক সুদ ভর্তুকি",
        "ক্রেডিট গ্যারান্টি তহবিলের আওতায় ২৫% পর্যন্ত সরকারি ঝুঁকি সুরক্ষা",
        "উদ্যোক্তার নিজস্ব বিনিয়োগ মাত্র ১০%; অবশিষ্ট ৯০% ব্যাংক ঋণ"
      ],
      "eligibleCategories": [
        "দুগ্ধ খামারি",
        "পোল্ট্রি খামারি",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "দুগ্ধ ও প্রাণিসম্পদ",
        "পোল্ট্রি খামার"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "খামারের জমির দলিল / পর্চা",
          "description": "স্থানের মালিকানা প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "যন্ত্রপাতি ও উৎপাদন প্রাক্কলন",
          "status": "Pending"
        },
        {
          "docName": "দূষণ নিয়ন্ত্রণ বোর্ডের ছাড়পত্র",
          "description": "পরিবেশগত ছাড়পত্র",
          "status": "Pending"
        }
      ]
    }
  },
  "STAND-UP": {
    "en": {
      "name": "Stand-Up India Scheme for Women & SC/ST Entrepreneurs",
      "description": "Flagship initiative facilitating bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.",
      "loanAmount": "₹10,00,000 to ₹1,00,00,000",
      "interestRate": "Lowest applicable bank rate (Base Rate + 3% max)",
      "repaymentPeriod": "Up to 7 Years (Moratorium up to 18 Months)",
      "whoCanApply": "Women founders (at least 51% stake) or SC/ST entrepreneurs setting up a greenfield enterprise",
      "purpose": "Setting up a brand-new factory, CNC workshop, commercial transport fleet, packaging plant, or hospital service unit",
      "benefits": [
        "High-value financing from ₹10 Lakhs up to ₹1 Crore without third-party guarantee",
        "Covers composite loan requirement including equipment term loan and working capital",
        "Borrower margin money requirement is capped at only 15% (can be converged with state subsidies)"
      ],
      "eligibleCategories": [
        "Women Entrepreneur",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Manufacturing & Fabrication",
        "Services / Repair Shop",
        "Retail / Kirana Shop",
        "Food Business"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Caste Certificate (for SC/ST applicants)",
          "description": "Category verification",
          "status": "Uploaded"
        },
        {
          "docName": "Detailed Project Report (DPR)",
          "description": "Greenfield enterprise feasibility",
          "status": "Pending"
        },
        {
          "docName": "Bank Statement & Address Proof",
          "description": "Financial record",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "స్టాండ్-అప్ ఇండియా పథకం (మహిళలు & ఎస్సీ/ఎస్టీలకు ₹1 కోటి వరకు రుణం)",
      "description": "మహిళలు మరియు ఎస్సీ, ఎస్టీ వర్గాల వ్యాపారవేత్తలు కొత్త తయారీ లేదా సేవా రంగాన్ని స్థాపించడానికి ప్రతి బ్యాంక్ బ్రాంచ్ ద్వారా ₹10 లక్షల నుండి ₹1 కోటి వరకు భారీ రుణాలను అందించే ప్రధాన పథకం.",
      "loanAmount": "రూ. 10,00,000 నుండి రూ. 1,00,00,000 వరకు",
      "interestRate": "బ్యాంక్ అత్యల్ప ప్రామాణిక రేటు (బేస్ రేట్ + 3% మించదు)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (18 నెలల మొరటోరియం)",
      "whoCanApply": "మహిళా పారిశ్రామికవేత్తలు (కనీసం 51% వాటా) లేదా ఎస్సీ/ఎస్టీ వ్యాపారులు",
      "purpose": "కొత్త ఫ్యాక్టరీ, సీఎన్‌సీ వర్క్‌షాప్, కమర్షియల్ ట్రాన్స్‌పోర్ట్, ప్యాకేజింగ్ ప్లాంట్ లేదా డయాగ్నస్టిక్ సెంటర్ ఏర్పాటు",
      "benefits": [
        "ఎలాంటి థర్డ్-పార్టీ గ్యారెంటీ లేకుండా రూ. 10 లక్షల నుండి రూ. 1 కోటి వరకు భారీ రుణం",
        "యంత్రాల కొనుగోలుతో పాటు వర్కింగ్ క్యాపిటల్ రెండింటికీ సమగ్ర రుణం",
        "లబ్ధిదారుడి స్వంత మార్జిన్ మనీ కేవలం 15% మాత్రమే"
      ],
      "eligibleCategories": [
        "మహిళా పారిశ్రామికవేత్త",
        "ఎస్సీ",
        "ఎస్టీ"
      ],
      "eligibleBusinessTypes": [
        "తయారీ రంగం",
        "సేవా రంగాలు",
        "ఆహార వ్యాపారం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "కుల ధృవీకరణ పత్రం (ఎస్సీ/ఎస్టీ వారికి)",
          "description": "వర్గ ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "వివరణాత్మక ప్రాజెక్ట్ రిపోర్ట్ (DPR)",
          "description": "వ్యాపార ప్రణాళిక నివేదిక",
          "status": "Pending"
        },
        {
          "docName": "బ్యాంక్ స్టేట్‌మెంట్ & చిరునామా రుజువు",
          "description": "ఆర్థిక రికార్డు",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "स्टैंड-अप इंडिया योजना (महिला व एससी/एसटी हेतु ₹1 करोड़ तक ऋण)",
      "description": "महिला उद्यमियों और अनुसूचित जाति/जनजाति के नागरिकों को नया उद्यम (ग्रीनफील्ड) स्थापित करने हेतु प्रत्येक बैंक शाखा से ₹10 लाख से ₹1 करोड़ तक का व्यापार ऋण उपलब्ध कराने वाली योजना।",
      "loanAmount": "₹10,00,000 से ₹1,00,00,000 तक",
      "interestRate": "बैंक की न्यूनतम लागू दर (बेस रेट + 3% से अधिक नहीं)",
      "repaymentPeriod": "7 वर्ष तक (18 महीने मोरेटोरियम)",
      "whoCanApply": "महिला उद्यमी (न्यूनतम 51% हिस्सेदारी) या एससी/एसटी वर्ग के नए उद्यमी",
      "purpose": "नई फैक्ट्री, सीएनसी वर्कशॉप, परिवहन वाहन, पैकेजिंग यूनिट या अस्पताल सेवा केंद्र की स्थापना",
      "benefits": [
        "बिना किसी तीसरे पक्ष की गारंटी के ₹10 लाख से ₹1 करोड़ तक का उच्च स्तरीय ऋण",
        "टर्म लोन और कार्यशील पूंजी दोनों के लिए संयुक्त ऋण सुविधा",
        "उद्यमी का स्वयं का मार्जिन अंशदान केवल 15% तक सीमित"
      ],
      "eligibleCategories": [
        "महिला उद्यमी",
        "एससी",
        "एसटी"
      ],
      "eligibleBusinessTypes": [
        "विनिर्माण",
        "सेवाएं व वर्कशॉप",
        "खाद्य उद्योग"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "जाति प्रमाण पत्र (एससी/एसटी हेतु)",
          "description": "श्रेणी प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "परियोजना व्यवहार्यता",
          "status": "Pending"
        },
        {
          "docName": "बैंक विवरण व पते का प्रमाण",
          "description": "वित्तीय रिकॉर्ड",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ಮಹಿಳೆಯರು ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಉದ್ಯಮಿಗಳಿಗೆ ₹1 ಕೋಟಿ ಸಾಲ)",
      "description": "ಮಹಿಳೆಯರು ಮತ್ತು ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದ ಉದ್ಯಮಿಗಳಿಗೆ ಹೊಸ ಉದ್ಯಮ ಸ್ಥಾಪಿಸಲು ₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ ಬ್ಯಾಂಕ್ ಸಾಲ ಒದಗಿಸುವ ಪ್ರಮುಖ ಯೋಜನೆ.",
      "loanAmount": "₹10,00,000 ರಿಂದ ₹1,00,00,000 ವರೆಗೆ",
      "interestRate": "ಕನಿಷ್ಠ ಬ್ಯಾಂಕ್ ದರ (ಬೇಸ್ ರೇಟ್ + 3%)",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ (18 ತಿಂಗಳ ಮೊರಟೋರಿಯಂ)",
      "whoCanApply": "ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು (ಕನಿಷ್ಠ 51% ಪಾಲುದಾರಿಕೆ) ಅಥವಾ ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಉದ್ಯಮಿಗಳು",
      "purpose": "ಹೊಸ ಕಾರ್ಖಾನೆ, ಯಂತ್ರೋಪಕರಣಗಳು, ಸಾರಿಗೆ ಫ್ಲೀಟ್ ಮತ್ತು ಸೇವಾ ಕೇಂದ್ರಗಳು",
      "benefits": [
        "ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಗ್ಯಾರಂಟಿಯಿಲ್ಲದೆ ₹1 ಕೋಟಿವರೆಗೆ ಬೃಹತ್ ಸಾಲ",
        "ಟರ್ಮ್ ಲೋನ್ ಮತ್ತು ದುಡಿಯುವ ಬಂಡವಾಳ ಎರಡಕ್ಕೂ ಅನ್ವಯ",
        "ಕೇವಲ 15% ಸ್ವಂತ ಬಂಡವಾಳ ಸಾಕು"
      ],
      "eligibleCategories": [
        "ಮಹಿಳಾ ಉದ್ಯಮಿ",
        "ಎಸ್‌ಸಿ",
        "ಎಸ್‌ಟಿ"
      ],
      "eligibleBusinessTypes": [
        "ಉತ್ಪಾದನೆ",
        "ಸೇವೆಗಳು",
        "ಆಹಾರ ಉದ್ಯಮ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ (ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿಗೆ)",
          "description": "ವರ್ಗ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿವರವಾದ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ವ್ಯಾಪಾರ ಯೋಜನೆ",
          "status": "Pending"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ವಿವರಣೆ & ವಿಳಾಸ ಪುರಾವೆ",
          "description": "ಹಣಕಾಸು ದಾಖಲೆ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "ஸ்டாண்ட்-அப் இந்தியா திட்டம் (பெண்கள் மற்றும் எஸ்சி/எஸ்டி பிரிவினருக்கு ரூ. 1 கோடி கடன்)",
      "description": "பெண்கள் மற்றும் எஸ்சி/எஸ்டி தொழில்முனைவோர் புதிய உற்பத்தி அல்லது சேவை நிறுவனங்களை தொடங்க ரூ. 10 லட்சம் முதல் ரூ. 1 கோடி வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 10,00,000 முதல் ரூ. 1,00,00,000 வரை",
      "interestRate": "குறைந்த வங்கி வட்டி விகிதம்",
      "repaymentPeriod": "7 ஆண்டுகள் வரை (18 மாதங்கள் சலுகைக்காலம்)",
      "whoCanApply": "பெண் தொழில்முனைவோர் (51% பங்கு) அல்லது எஸ்சி/எஸ்டி தொழில்முனைவோர்",
      "purpose": "புதிய தொழிற்சாலை, வணிக வாகனங்கள், பேக்கேஜிங் மற்றும் சேவை மையங்கள் நிறுவுதல்",
      "benefits": [
        "மூன்றாம் நபர் பிணை இன்றி ரூ. 1 கோடி வரை உயர் நிதி உதவி",
        "இயந்திர கடன் மற்றும் நடைமுறை மூலதனம் இரண்டையும் உள்ளடக்கியது",
        "பயனாளியின் சொந்த பங்கு 15% மட்டுமே"
      ],
      "eligibleCategories": [
        "பெண் தொழில்முனைவோர்",
        "எஸ்சி",
        "எஸ்டி"
      ],
      "eligibleBusinessTypes": [
        "உற்பத்தி",
        "சேவைகள்",
        "உணவுத் தொழில்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "சாதிச் சான்றிதழ் (எஸ்சி/எஸ்டி பிரிவினருக்கு)",
          "description": "சமூக பிரிவு சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "விரிவான திட்ட அறிக்கை (DPR)",
          "description": "திட்ட மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "வங்கி கணக்கு அறிக்கை",
          "description": "நிதி பதிவு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "स्टँड-अप इंडिया योजना (महिला व एससी/एसटीसाठी ₹1 कोटींपर्यंत कर्ज)",
      "description": "महिला आणि अनुसूचित जाती/जमातीच्या उद्योजकांना नवीन उद्योग सुरू करण्यासाठी प्रत्येक बँक शाखेतून ₹10 लाख ते ₹1 कोटींपर्यंत व्यवसाय कर्ज देणारी योजना.",
      "loanAmount": "₹10,00,000 ते ₹1,00,00,000 पर्यंत",
      "interestRate": "बँकेचा सर्वात कमी लागू दर (बेस रेट + 3%)",
      "repaymentPeriod": "7 वर्षांपर्यंत (18 महिने मोरेटोरियम)",
      "whoCanApply": "महिला उद्योजक (किमान 51% भागीदारी) किंवा एससी/एसटी नवीन उद्योजक",
      "purpose": "नवीन कारखाना, सीएनसी वर्कशॉप, वाहतूक फ्लीट, पॅकेजिंग युनिट किंवा सेवा केंद्र",
      "benefits": [
        "कोणत्याही त्रयस्थ व्यक्तीच्या हमीशिवाय ₹1 कोटींपर्यंतचे मोठे कर्ज",
        "यंत्रसामग्री कर्ज आणि खेळते भांडवल दोन्हीसाठी उपलब्ध",
        "उद्योजकाचा स्वतःचा हिस्सा फक्त 15% पर्यंत मर्यादित"
      ],
      "eligibleCategories": [
        "महिला उद्योजक",
        "एससी",
        "एसटी"
      ],
      "eligibleBusinessTypes": [
        "उत्पादन व फॅब्रिकेशन",
        "सेवा केंद्र",
        "अन्न प्रक्रिया"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "जात प्रमाणपत्र (एससी/एसटीसाठी)",
          "description": "प्रवर्ग पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
          "description": "प्रकल्प व्यवहार्यता",
          "status": "Pending"
        },
        {
          "docName": "बँक स्टेटमेंट व पत्ता पुरावा",
          "description": "आर्थिक व्यवहार",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "স্ট্যান্ড-আপ ইন্ডিয়া যোজনা (নারী ও এসসি/এসটিদের জন্য ₹১ কোটি পর্যন্ত ঋণ)",
      "description": "নারী উদ্যোক্তা এবং তপশিলি জাতি/উপজাতির ব্যক্তিদের নতুন ব্যবসা স্থাপনের জন্য প্রতিটি ব্যাংক শাখা থেকে ₹১০ লাখ থেকে ₹১ কোটি পর্যন্ত সহজ শর্তে ঋণ প্রকল্প।",
      "loanAmount": "₹১০,০০,০০০ থেকে ₹১,০০,০০,০০০ পর্যন্ত",
      "interestRate": "ব্যাংকের সর্বনিম্ন প্রযোজ্য হার (বেস রেট + ৩%)",
      "repaymentPeriod": "৭ বছর পর্যন্ত (১৮ মাস স্থগিতাদেশ)",
      "whoCanApply": "নারী উদ্যোক্তা (ন্যূনতম ৫১% অংশীদারিত্ব) বা এসসি/এসটি উদ্যোক্তা",
      "purpose": "নতুন কারখানা, সিএনসি ওয়ার্কশপ, পরিবহন যান ও সেবা কেন্দ্র স্থাপন",
      "benefits": [
        "তৃতীয় পক্ষের গ্যারান্টি ছাড়াই ₹১ কোটি পর্যন্ত উচ্চ পরিমাণের ঋণ",
        "যন্ত্রপাতি ঋণ এবং চলতি মূলধন উভয় সুবিধা অন্তর্ভুক্ত",
        "উদ্যোক্তার নিজস্ব বিনিয়োগের সীমা মাত্র ১৫%"
      ],
      "eligibleCategories": [
        "নারী উদ্যোক্তা",
        "এসসি",
        "এসটি"
      ],
      "eligibleBusinessTypes": [
        "উৎপাদন শিল্প",
        "সেবা খাত",
        "খাদ্য ব্যবসা"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "জাতিগত শংসাপত্র (এসসি/এসটিদের জন্য)",
          "description": "শ্রেণির প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "ব্যবসা পরিকল্পনা",
          "status": "Pending"
        },
        {
          "docName": "ব্যাংক স্টেটমেন্ট ও ঠিকানার প্রমাণ",
          "description": "আর্থিক রেকর্ড",
          "status": "Uploaded"
        }
      ]
    }
  },
  "PMEGP-SERVICE": {
    "en": {
      "name": "Prime Minister's Employment Generation Programme (PMEGP - Services & Workshops)",
      "description": "PMEGP service sector variant providing up to 35% capital subsidy for setting up service enterprises, auto repair centers, diagnostic workshops, IT kiosks, and repair shops with project costs up to ₹20 Lakhs.",
      "loanAmount": "Up to ₹20,00,000 (15% - 35% Govt Capital Subsidy)",
      "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
      "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
      "whoCanApply": "Individuals aged 18+ wanting to open service shops, auto workshops, electrical repair, or IT service hubs",
      "purpose": "Purchasing automotive diagnostic tools, vehicle hydraulic lifts, electronic soldering workstations, shop interior setup",
      "benefits": [
        "Government capital subsidy: 35% in rural areas for special categories (Women, SC, ST, OBC, PwD); 25% for general",
        "Beneficiary own margin contribution is only 5% to 10%",
        "Bank loan finances up to 95% of total project cost"
      ],
      "eligibleCategories": [
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST",
        "Women",
        "Divyangjan"
      ],
      "eligibleBusinessTypes": [
        "Services / Repair Shop",
        "Automotive & Electrical Services"
      ],
      "minAge": "18 Years",
      "incomeCap": "No income ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Educational Qualification Certificate",
          "description": "8th standard pass proof for projects > ₹5L",
          "status": "Uploaded"
        },
        {
          "docName": "Service Workshop Detailed Project Report (DPR)",
          "description": "Tool costs and service revenue forecast",
          "status": "Pending"
        },
        {
          "docName": "Caste / Category Certificate",
          "description": "For 35% subsidy eligibility",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "ప్రధాన మంత్రి ఉపాధి కల్పన పథకం (PMEGP సర్వీసెస్ - రిపేర్ షాపులకు 35% సబ్సిడీ)",
      "description": "ఆటోమొబైల్ గ్యారేజీలు, ఎలక్ట్రికల్ సర్వీస్ సెంటర్లు, రిపేర్ షాపులు మరియు కంప్యూటర్ సేవా కేంద్రాల ఏర్పాటుకు ప్రభుత్వం 35% వరకు మూలధన సబ్సిడీతో రూ. 20 లక్షల వరకు రుణాలు అందించే పథకం.",
      "loanAmount": "రూ. 20,00,000 వరకు (15% - 35% ప్రభుత్వ సబ్సిడీ)",
      "interestRate": "సాధారణ బ్యాంక్ లెండింగ్ రేటు (8.5% - 10.5%)",
      "repaymentPeriod": "7 సంవత్సరాల వరకు (మొరటోరియం 6 - 12 నెలలు)",
      "whoCanApply": "18 ఏళ్లు పైబడిన వ్యక్తులు (రూ. 5 లక్షల కంటే ఎక్కువ ప్రాజెక్ట్‌లకు 8వ తరగతి పాస్)",
      "purpose": "హైడ్రాలిక్ లిఫ్టులు, వెల్డింగ్ సెట్స్, ఎలక్ట్రానిక్ టెస్టింగ్ పరికరాలు, షాప్ ఇంటీరియర్ సెటప్",
      "benefits": [
        "ప్రత్యేక వర్గాలకు (మహిళలు, ఎస్సీ, ఎస్టీ, ఓబీసీ, దివ్యాంగులు) గ్రామీణ ప్రాంతంలో 35% భారీ సబ్సిడీ",
        "లబ్ధిదారుని స్వంత వాటా కేవలం 5% నుండి 10% మాత్రమే; మిగిలిన 90% నుండి 95% బ్యాంక్ రుణం",
        "కేవీఐసీ ద్వారా ఉచిత వ్యాపార శిక్షణ (EDP)"
      ],
      "eligibleCategories": [
        "అన్ని వర్గాలు",
        "జనరల్",
        "ఓబీసీ",
        "ఎస్సీ",
        "ఎస్టీ",
        "మహిళలు",
        "దివ్యాంగులు"
      ],
      "eligibleBusinessTypes": [
        "సేవా రంగాలు",
        "ఆటోమొబైల్ సర్వీస్",
        "రిపేర్ షాపులు"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "విద్యార్హత సర్టిఫికెట్ (8వ తరగతి పాస్)",
          "description": "విద్యార్హత రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "వర్క్‌షాప్ వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
          "description": "పరికరాల ఖర్చు మరియు ఆదాయ అంచనా",
          "status": "Pending"
        },
        {
          "docName": "కుల ధృవీకరణ పత్రం",
          "description": "35% సబ్సిడీ ధృవీకరణ",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP सेवा क्षेत्र - वर्कशॉप हेतु 35% सब्सिडी)",
      "description": "ऑटोमोबाइल गैराज, इलेक्ट्रॉनिक रिपेयर, सर्विस सेंटर और तकनीकी केंद्रों की स्थापना हेतु ₹20 लाख तक की लागत पर 35% तक की सरकारी पूंजीगत सब्सिडी देने वाली योजना।",
      "loanAmount": "₹20,00,000 तक (15% - 35% सरकारी सब्सिडी)",
      "interestRate": "सामान्य बैंक ब्याज दर (8.5% - 10.5%)",
      "repaymentPeriod": "7 वर्ष तक (मोरेटोरियम 6 - 12 महीने)",
      "whoCanApply": "18 वर्ष से अधिक आयु के युवा (₹5 लाख से अधिक लागत हेतु 8वीं पास आवश्यक)",
      "purpose": "वाहन हाइड्रोलिक लिफ्ट, डायग्नोस्टिक टूल, सोल्डरिंग उपकरण और वर्कशॉप सेटअप",
      "benefits": [
        "ग्रामीण क्षेत्र में विशेष श्रेणियों को 35% और शहरी में 25% तक की पूंजीगत सब्सिडी",
        "लाभार्थी का स्वयं का अंशदान केवल 5% से 10%; शेष बैंक ऋण",
        "केवीआईसी द्वारा निःशुल्क व्यावहारिक व्यावसायिक प्रशिक्षण (EDP)"
      ],
      "eligibleCategories": [
        "सभी श्रेणियां",
        "सामान्य",
        "ओबीसी",
        "एससी",
        "एसटी",
        "महिलाएं",
        "दिव्यांग"
      ],
      "eligibleBusinessTypes": [
        "सेवाएं व वर्कशॉप",
        "ऑटो व रिपेयर शॉप"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "शैक्षणिक योग्यता प्रमाण पत्र (8वीं पास)",
          "description": "शैक्षणिक प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "सर्विस वर्कशॉप विस्तृत परियोजना रिपोर्ट (DPR)",
          "description": "उपकरण लागत अनुमान",
          "status": "Pending"
        },
        {
          "docName": "जाति / श्रेणी प्रमाण पत्र",
          "description": "35% सब्सिडी हेतु",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಪಿಎಂಇಜಿಪಿ ಸೇವಾ ವಲಯ ಯೋಜನೆ (PMEGP ಸರ್ವಿಸ್ - ರಿಪೇರಿ ಅಂಗಡಿಗಳಿಗೆ 35% ಸಬ್ಸಿಡಿ)",
      "description": "ವಾಹನ ರಿಪೇರಿ ಗ್ಯಾರೇಜ್, ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸರ್ವಿಸ್ ಸೆಂಟರ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಸೇವಾ ಕೇಂದ್ರಗಳನ್ನು ತೆರೆಯಲು ₹20 ಲಕ್ಷದವರೆಗೆ 35% ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹20,00,000 ವರೆಗೆ (15% - 35% ಸಬ್ಸಿಡಿ)",
      "interestRate": "8.5% - 10.5%",
      "repaymentPeriod": "7 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "18 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ವ್ಯಕ್ತಿಗಳು (₹5 ಲಕ್ಷ ಮೇಲಿನ ಯೋಜನೆಗೆ 8ನೇ ತರಗತಿ ಪಾಸ್)",
      "purpose": "ಹೈಡ್ರಾಲಿಕ್ ಲಿಫ್ಟ್‌ಗಳು, ಟೆಸ್ಟಿಂಗ್ ಪರಿಕರಗಳು ಮತ್ತು ವರ್ಕ್‌ಶಾಪ್ ಉಪಕರಣಗಳು",
      "benefits": [
        "ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ ಮಹಿಳೆಯರು ಮತ್ತು ವಿಶೇಷ ವರ್ಗಗಳಿಗೆ 35% ಸಬ್ಸಿಡಿ",
        "ಕೇವಲ 5% ರಿಂದ 10% ಸ್ವಂತ ಬಂಡವಾಳ ಸಾಕು; 90% ರಿಂದ 95% ಬ್ಯಾಂಕ್ ಸಾಲ",
        "ಉಚಿತ ಉದ್ಯಮಶೀಲತಾ ತರಬೇತಿ (EDP)"
      ],
      "eligibleCategories": [
        "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        "ಮಹಿಳೆಯರು",
        "ಅಂಗವಿಕಲರು"
      ],
      "eligibleBusinessTypes": [
        "ಸೇವೆಗಳು",
        "ರಿಪೇರಿ ಅಂಗಡಿಗಳು"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿದ್ಯಾರ್ಹತೆ ಪ್ರಮಾಣಪತ್ರ (8ನೇ ತೇರ್ಗಡೆ)",
          "description": "ಶಿಕ್ಷಣ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವರ್ಕ್‌ಶಾಪ್ ಯೋಜನಾ ವರದಿ (DPR)",
          "description": "ವೆಚ್ಚದ ಅಂದಾಜು",
          "status": "Pending"
        },
        {
          "docName": "ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಸಬ್ಸಿಡಿ ಅರ್ಹತೆಗಾಗಿ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "பிரதமரின் வேலைவாய்ப்பு திட்டம் (PMEGP சேவைத் துறை - பழுதுபார்க்கும் கடைகளுக்கு 35% மானியம்)",
      "description": "ஆட்டோமொபைல் பட்டறைகள், எலக்ட்ரானிக் சர்வீஸ் மையங்கள் மற்றும் கணினி சேவை மையங்கள் அமைக்க ரூ. 20 லட்சம் வரை 35% மூலதன மானியத்துடன் கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 20,00,000 வரை (15% - 35% மானியம்)",
      "interestRate": "8.5% - 10.5%",
      "repaymentPeriod": "7 ஆண்டுகள் வரை",
      "whoCanApply": "18 வயது நிரம்பிய நபர்கள் (ரூ. 5 லட்சத்திற்கு மேல் 8ஆம் வகுப்பு தேர்ச்சி)",
      "purpose": "ஹைட்ராலிக் லிஃப்ட், சோதனை கருவிகள் மற்றும் பட்டறை உபகரணங்கள் வாங்குதல்",
      "benefits": [
        "கிராமப்புறங்களில் சிறப்பு பிரிவினருக்கு 35% மூலதன மானியம்",
        "பயனாளியின் சொந்த பங்களிப்பு வெறும் 5% முதல் 10% மட்டுமே",
        "இலவச தொழில்முனைவோர் பயிற்சி (EDP)"
      ],
      "eligibleCategories": [
        "அனைத்து பிரிவுகளும்",
        "பெண்கள்",
        "மாற்றுத்திறனாளிகள்"
      ],
      "eligibleBusinessTypes": [
        "சேவை மையம்",
        "பழுதுபார்க்கும் கடை"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "கல்வித் தகுதிச் சான்றிதழ் (8ஆம் வகுப்பு தேர்ச்சி)",
          "description": "கல்வி சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "பட்டறை திட்ட அறிக்கை (DPR)",
          "description": "செலவு மதிப்பீடு",
          "status": "Pending"
        },
        {
          "docName": "சாதிச் சான்றிதழ்",
          "description": "35% மானியத்திற்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "पंतप्रधान रोजगार निर्मिती कार्यक्रम (PMEGP सेवा क्षेत्र - वर्कशॉपसाठी 35% अनुदान)",
      "description": "गॅरेज, ऑटोमोबाईल रिपेअरिंग, इलेक्ट्रॉनिक दुरुस्ती आणि सेवा केंद्रांच्या स्थापनेसाठी ₹20 लाखांपर्यंतच्या खर्चावर 35% पर्यंत शासकीय अनुदान देणारी योजना.",
      "loanAmount": "₹20,00,000 पर्यंत (15% - 35% अनुदान)",
      "interestRate": "8.5% - 10.5%",
      "repaymentPeriod": "7 वर्षांपर्यंत",
      "whoCanApply": "18 वर्षे पूर्ण नागरिक (₹5 लाखांपेक्षा जास्त खर्चासाठी 8 वी उत्तीर्ण आवश्यक)",
      "purpose": "हायड्रॉलिक लिफ्ट, इलेक्ट्रॉनिक चाचणी उपकरणे आणि वर्कशॉप उभारणी",
      "benefits": [
        "ग्रामीण भागात महिला व विशेष प्रवर्गासाठी 35% भांडवली अनुदान",
        "स्वतःचा वाटा केवळ 5% ते 10%; उर्वरित 90% ते 95% बँक कर्ज",
        "मोफत व्यावसायिक उद्योजकता प्रशिक्षण (EDP)"
      ],
      "eligibleCategories": [
        "सर्व प्रवर्ग",
        "महिला",
        "दिव्यांग"
      ],
      "eligibleBusinessTypes": [
        "सेवा केंद्र",
        "दुरुस्ती वर्कशॉप"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "शैक्षणिक प्रमाणपत्र (8 वी उत्तीर्ण)",
          "description": "शिक्षण पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "वर्कशॉप प्रकल्प अहवाल (DPR)",
          "description": "खर्च अंदाज",
          "status": "Pending"
        },
        {
          "docName": "जात / प्रवर्ग प्रमाणपत्र",
          "description": "35% अनुदानासाठी",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি প্রকল্প (PMEGP সেবা খাত - ওয়ার্কশপের জন্য ৩৫% অনুদান)",
      "description": "অটোমোবাইল গ্যারেজ, ইলেকট্রনিক্স রিপেয়ারিং এবং কারিগরি সেবা কেন্দ্র স্থাপনের জন্য ₹২০ লাখ পর্যন্ত প্রকল্পে ৩৫% পর্যন্ত সরকারি মূলধন ভর্তুকি প্রকল্প।",
      "loanAmount": "₹২০,০০,০০০ পর্যন্ত (১৫% - ৩৫% সরকারি অনুদান)",
      "interestRate": "৮.৫% - ১০.৫%",
      "repaymentPeriod": "৭ বছর পর্যন্ত",
      "whoCanApply": "১৮ বছর বা তার বেশি বয়সী ব্যক্তি (₹৫ লাখের বেশি প্রকল্পের জন্য ৮ম শ্রেণি পাস)",
      "purpose": "হাইড্রলিক লিফট, আধুনিক ডায়াগনস্টিক যন্ত্রপাতি ও ওয়ার্কশপ স্থাপন",
      "benefits": [
        "গ্রামীণ এলাকায় বিশেষ শ্রেণির জন্য ৩৫% মূলধন অনুদান",
        "উদ্যোক্তার নিজস্ব বিনিয়োগ মাত্র ৫% থেকে ১০%; অবশিষ্ট ব্যাংক ঋণ",
        "বিনামূল্যে উদ্যোক্তা উন্নয়ন প্রশিক্ষণ (EDP)"
      ],
      "eligibleCategories": [
        "সকল শ্রেণি",
        "নারী",
        "বিশেষ চাহিদাসম্পন্ন"
      ],
      "eligibleBusinessTypes": [
        "সেবা খাত",
        "রিপেয়ারিং ওয়ার্কশপ"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "শিক্ষাগত যোগ্যতার শংসাপত্র (৮ম শ্রেণি পাস)",
          "description": "শিক্ষার প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ওয়ার্কশপ বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        },
        {
          "docName": "জাতিগত শংসাপত্র",
          "description": "৩৫% অনুদানের জন্য",
          "status": "Uploaded"
        }
      ]
    }
  },
  "PM-SVANIDHI": {
    "en": {
      "name": "PM SVANidhi (Microcredit for Street Vendors)",
      "description": "Ministry of Housing and Urban Affairs scheme providing street vendors with collateral-free working capital microcredit across 3 graduated tranches (₹10k, ₹20k, ₹50k) with 7% interest subsidy and UPI cashback.",
      "loanAmount": "₹10,000 / ₹20,000 / ₹50,000 (No Collateral)",
      "interestRate": "Subsidized (7% Interest Subsidy p.a.)",
      "repaymentPeriod": "12 Months (Tranche 1) to 36 Months (Tranche 3)",
      "whoCanApply": "Street vendors, roadside hawkers, mobile pushcart operators vending in urban, semi-urban, or rural local bodies",
      "purpose": "Daily working capital, buying seasonal fruit/vegetable stock, cart repairs, solar lighting",
      "benefits": [
        "100% collateral-free credit with zero paperwork hassle",
        "7% per annum interest subsidy credited directly to bank account on timely monthly repayments",
        "Monthly digital transactions cashback up to ₹100/month (₹1,200/year) via UPI QR code"
      ],
      "eligibleCategories": [
        "Street Vendors",
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Street Vending",
        "Retail / Kirana Shop",
        "Food Business"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Vending Certificate / Letter of Recommendation (LoR)",
          "description": "ULB / Municipal Corporation vendor proof",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Account Passbook with UPI setup",
          "description": "Direct credit of cashback & subsidy",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "పీఎం స్వనిధి (వీధి వ్యాపారులకు రూ. 50,000 వరకు పూచీకత్తు లేని రుణం)",
      "description": "తోపుడు బండ్ల వ్యాపారులు, పండ్లు, కూరగాయల విక్రేతలకు ఎలాంటి ఆస్తి తాకట్టు లేకుండా ₹10,000, ₹20,000 మరియు ₹50,000 వరకు మూడు విడతల్లో తక్కువ వడ్డీతో రుణాలు, 7% వడ్డీ రాయితీ మరియు యూపీఐ క్యాష్‌బ్యాక్ అందించే పథకం.",
      "loanAmount": "రూ. 10,000 / రూ. 20,000 / రూ. 50,000 (పూచీకత్తు అవసరం లేదు)",
      "interestRate": "రాయితీ వడ్డీ (ఏటా 7% ప్రభుత్వ వడ్డీ సబ్సిడీ)",
      "repaymentPeriod": "12 నెలల నుండి 36 నెలల వరకు",
      "whoCanApply": "వీధి వ్యాపారులు, తోపుడు బండ్ల నిర్వాహకులు, రోడ్డు పక్కన చిరు వ్యాపారులు",
      "purpose": "రోజువారీ సరుకులు, పండ్లు, కూరగాయల కొనుగోలు, తోపుడు బండి రిపేర్లు మరియు సోలార్ లైట్ల ఏర్పాటు",
      "benefits": [
        "ఎలాంటి ఆస్తి పూచీకత్తు లేదా హామీదారులు లేకుండా సులభమైన బ్యాంక్ రుణం",
        "సకాలంలో ఈఎంఐ చెల్లిస్తే ప్రభుత్వం నుండి ఖాతాలో నేరుగా 7% వడ్డీ రాయితీ జమ",
        "యూపీఐ క్యూఆర్ కోడ్ ద్వారా డిజిటల్ చెల్లింపులు తీసుకుంటే నెలకు ₹100 (ఏడాదికి ₹1,200) వరకు ఉచిత క్యాష్‌బ్యాక్"
      ],
      "eligibleCategories": [
        "వీధి వ్యాపారులు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "వీధి వ్యాపారం",
        "కిరాణా",
        "టిఫిన్ స్టాల్స్"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వెండింగ్ సర్టిఫికెట్ / సిఫార్సు లేఖ (LoR)",
          "description": "మున్సిపల్ వీధి వ్యాపారి గుర్తింపు పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "బ్యాంక్ పాస్‌బుక్ (యూపీఐ లింక్ చేయబడినది)",
          "description": "సబ్సిడీ మరియు క్యాష్‌బ్యాక్ ఖాతా",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "पीएम स्वनिधि योजना (रेहड़ी-पटरी व ठेला व्यापारियों हेतु ₹50,000 ऋण)",
      "description": "सड़क किनारे ठेला लगाने वाले, फल-सब्जी विक्रेताओं को बिना किसी गारंटी के ₹10,000, ₹20,000 और ₹50,000 के 3 चरणों में 7% ब्याज सब्सिडी और यूपीआई कैशबैक के साथ ऋण देने वाली योजना।",
      "loanAmount": "₹10,000 / ₹20,000 / ₹50,000 (बिना गारंटी)",
      "interestRate": "रियायती (7% वार्षिक ब्याज सब्सिडी)",
      "repaymentPeriod": "12 से 36 महीने तक",
      "whoCanApply": "स्ट्रीट वेंडर, ठेले वाले, फुटपाथ पर दुकान लगाने वाले छोटे विक्रेता",
      "purpose": "दैनिक कार्यशील पूंजी, फल-सब्जी स्टॉक खरीदना, ठेला मरम्मत",
      "benefits": [
        "100% बिना किसी संपत्ति बंधक के तत्काल ऋण स्वीकृति",
        "समय पर मासिक किस्त चुकाने पर 7% वार्षिक ब्याज सब्सिडी सीधे बैंक खाते में जमा",
        "यूपीआई द्वारा डिजिटल लेनदेन करने पर ₹1,200 प्रतिवर्ष तक का नकद कैशबैक"
      ],
      "eligibleCategories": [
        "स्ट्रीट वेंडर",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "रेहड़ी-पटरी व्यवसाय",
        "किराना",
        "खान-पान ठेला"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "वेंडिंग प्रमाण पत्र / अनुशंसा पत्र (LoR)",
          "description": "नगर निगम वेंडर प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक पासबुक (यूपीआई लिंक)",
          "description": "कैशबैक व सब्सिडी खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ₹50,000 ಸಾಲ)",
      "description": "ತಳ್ಳುಗಾಡಿ, ತರಕಾರಿ ಮತ್ತು ಹಣ್ಣು ಮಾರಾಟಗಾರರಿಗೆ ಯಾವುದೇ ಭದ್ರತೆಯಿಲ್ಲದೆ ₹10,000 ದಿಂದ ₹50,000 ವರೆಗೆ ಸಾಲ, 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಮತ್ತು ಯುಪಿಐ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹10,000 / ₹20,000 / ₹50,000 (ಭದ್ರತೆ ರಹಿತ)",
      "interestRate": "7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
      "repaymentPeriod": "12 ರಿಂದ 36 ತಿಂಗಳುಗಳು",
      "whoCanApply": "ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು, ತಳ್ಳುಗಾಡಿ ವ್ಯಾಪಾರಿಗಳು",
      "purpose": "ದೈನಂದಿನ ವ್ಯಾಪಾರ ಬಂಡವಾಳ, ಸರಕು ಖರೀದಿ ಮತ್ತು ಗಾಡಿ ರಿಪೇರಿ",
      "benefits": [
        "ಯಾವುದೇ ಅಡಮಾನವಿಲ್ಲದೆ ಸುಲಭ ಸಾಲ ಮಂಜೂರಾತಿ",
        "ಸಕಾಲಿಕ ಮರುಪಾವತಿಗೆ ವಾರ್ಷಿಕ 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
        "ಯುಪಿಐ ಡಿಜಿಟಲ್ ವಹಿವಾಟಿಗೆ ವರ್ಷಕ್ಕೆ ₹1,200 ವರೆಗೆ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್"
      ],
      "eligibleCategories": [
        "ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಬೀದಿ ವ್ಯಾಪಾರ",
        "ಕಿರು ವ್ಯಾಪಾರ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವೆಂಡಿಂಗ್ ಪ್ರಮಾಣಪತ್ರ / ಶಿಫಾರಸು ಪತ್ರ (LoR)",
          "description": "ಪಾಲಿಕೆ ಗುರುತಿನ ಚೀಟಿ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "பிரதமர் ஸ்வநிதி திட்டம் (சாலையோர வியாபாரிகளுக்கு ரூ. 50,000 கடன்)",
      "description": "தள்ளுவண்டி, பழம் மற்றும் காய்கறி வியாபாரிகளுக்கு எவ்வித பிணையமும் இன்றி ரூ. 10,000 முதல் ரூ. 50,000 வரை கடன், 7% வட்டி மானியம் மற்றும் யுபிஐ கேஷ்பேக் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 10,000 / ரூ. 20,000 / ரூ. 50,000 (பிணை தேவையில்லை)",
      "interestRate": "7% வட்டி மானியம்",
      "repaymentPeriod": "12 முதல் 36 மாதங்கள் வரை",
      "whoCanApply": "சாலையோர வியாபாரிகள், தள்ளுவண்டி வியாபாரிகள்",
      "purpose": "நடைமுறை மூலதனம், சரக்கு கொள்முதல் மற்றும் தள்ளுவண்டி பழுதுபார்த்தல்",
      "benefits": [
        "எந்தவித சொத்து பிணையமும் இன்றி எளிய கடன் உதவி",
        "சரியான நேரத்தில் செலுத்தினால் 7% நேரடி வட்டி மானியம்",
        "யுபிஐ டிஜிட்டல் பரிவர்த்தனைகளுக்கு ஆண்டுக்கு ரூ. 1,200 வரை கேஷ்பேக்"
      ],
      "eligibleCategories": [
        "சாலையோர வியாபாரிகள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "சாலையோர வியாபாரம்",
        "சிறு வணிகம்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வியாபார சான்றிதழ் / நகராட்சி பரிந்துரை கடிதம் (LoR)",
          "description": "வியாபாரி சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "पीएम स्वनिधी योजना (फेरीवाले व हातगाडी चालकांसाठी ₹50,000 कर्ज)",
      "description": "रस्त्यावरील विक्रेते, फळे व भाजीपाला विक्रेत्यांना विनातारण ₹10,000 ते ₹50,000 पर्यंत खेळते भांडवल, 7% व्याज अनुदान आणि युपीआय कॅशबॅक देणारी योजना.",
      "loanAmount": "₹10,000 / ₹20,000 / ₹50,000 (विनातारण)",
      "interestRate": "7% व्याज सवलत",
      "repaymentPeriod": "12 ते 36 महिन्यांपर्यंत",
      "whoCanApply": "फेरीवाले, हातगाडी व्यावसायिक, पथविक्रेते",
      "purpose": "दैनंदिन माल खरेदी, हातगाडी दुरुस्ती व खेळते भांडवल",
      "benefits": [
        "कोणतीही मालमत्ता गहाण न ठेवता त्वरित कर्ज मंजुरी",
        "वेळेवर परतफेड केल्यास 7% वार्षिक व्याज अनुदान थेट खात्यात जमा",
        "युपीआय द्वारे डिजिटल व्यवहारांवर दरमहा ₹100 (वार्षिक ₹1,200) कॅशबॅक"
      ],
      "eligibleCategories": [
        "पथविक्रेते",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "फेरीवाले",
        "किराणा",
        "अन्नपदार्थ गाडे"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "विक्रेता प्रमाणपत्र / शिफारस पत्र (LoR)",
          "description": "महानगरपालिका नोंदणी पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "बँक पासबुक (युपीआय लिंक)",
          "description": "कॅशबॅक व अनुदान खाते",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "পিএম স্বনিধি যোজনা (পথ বিক্রেতাদের জন্য ₹৫০,০০০ পর্যন্ত জামানতমুক্ত ঋণ)",
      "description": "রাস্তার হকার, ফল ও সবজি বিক্রেতাদের জন্য কোনো জামানত ছাড়াই ₹১০,০০০ থেকে ₹৫০,০০০ পর্যন্ত ঋণ, ৭% সুদ ভর্তুকি এবং ইউপিআই ক্যাশব্যাক সুবিধা প্রদানকারী প্রকল্প।",
      "loanAmount": "₹১০,০০০ / ₹২০,০০০ / ₹৫০,০০০ (জামানতমুক্ত)",
      "interestRate": "৭% সরকারি সুদ ভর্তুকি",
      "repaymentPeriod": "১২ থেকে ৩৬ মাস পর্যন্ত",
      "whoCanApply": "পথ বিক্রেতা, ঠেলাগাড়ি ব্যবসায়ী, ফুটপাতের দোকানদার",
      "purpose": "দৈনন্দিন মালামাল ক্রয়, ভ্যানের মেরামত ও ব্যবসার সম্প্রসারণ",
      "benefits": [
        "কোনো প্রকার বন্ধক ছাড়াই সহজ প্রক্রিয়ায় ঋণ প্রাপ্তি",
        "সময়মতো কিস্তি পরিশোধে বার্ষিক ৭% সুদ ভর্তুকি সরাসরি ব্যাংক অ্যাকাউন্টে",
        "ইউপিআই ডিজিটাল লেনদেনে বছরে ₹১,২০০ পর্যন্ত ক্যাশব্যাক সুবিধা"
      ],
      "eligibleCategories": [
        "পথ বিক্রেতা",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "রাস্তার ব্যবসা",
        "মুদি ও খাবার ঠেলা"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ভেন্ডিং সার্টিফিকেট / সুপারিশ পত্র (LoR)",
          "description": "পৌরসভার বিক্রেতা প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ইউপিআই সংযুক্ত ব্যাংক পাসবুক",
          "description": "ক্যাশব্যাক প্রাপ্তির অ্যাকাউন্ট",
          "status": "Uploaded"
        }
      ]
    }
  },
  "DAY-NULM": {
    "en": {
      "name": "DAY-NULM (Support to Urban Street Vendors & Micro-Enterprises)",
      "description": "National Urban Livelihoods Mission providing subsidized bank credit up to ₹2 Lakhs for individual urban poor/vendors and ₹10 Lakhs for self-help groups with an effective interest rate of 7%.",
      "loanAmount": "Up to ₹2,00,000 (Individual) / ₹10,00,000 (Group)",
      "interestRate": "Effective 7% p.a. (Govt pays interest above 7%)",
      "repaymentPeriod": "Up to 5 Years",
      "whoCanApply": "Urban poor, street vendors, mobile food hawkers, SHG members identified under Municipal Corporation",
      "purpose": "Permanent vending cart construction, procuring mobile vending kiosks, bulk inventory purchase",
      "benefits": [
        "All interest over and above 7% is directly reimbursed as interest subvention by Central Govt",
        "Zero collateral required up to ₹10 Lakhs for SHGs and ₹2 Lakhs for individuals",
        "Includes vendor identity cards, designated vending zone allotments, and social security linkage"
      ],
      "eligibleCategories": [
        "All Categories",
        "Urban Poor",
        "Street Vendors",
        "Women SHGs"
      ],
      "eligibleBusinessTypes": [
        "Street Vending",
        "Retail / Kirana Shop",
        "Food Business"
      ],
      "minAge": "18 Years",
      "incomeCap": "Urban BPL / Economically Weaker criteria",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Urban Vending ID / ULB Survey Slip",
          "description": "Town Vending Committee identification",
          "status": "Uploaded"
        },
        {
          "docName": "Bank Account Passbook",
          "description": "Interest subsidy credit account",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "డే-నల్మ్ పథకం (పట్టణ వీధి వ్యాపారులు & సూక్ష్మ వ్యాపారాలకు 7% రాయితీ రుణం)",
      "description": "పట్టణ పేదలు, వీధి వ్యాపారులు మరియు మహిళా సంఘాల జీవనోపాధి కోసం ప్రభుత్వం 7% కంటే ఎక్కువ ఉండే పూర్తి వడ్డీని భరిస్తూ ₹2 లక్షల నుండి ₹10 లక్షల వరకు పూచీకత్తు లేని రుణాలను అందించే పథకం.",
      "loanAmount": "రూ. 2,00,000 (వ్యక్తిగతం) / రూ. 10,00,000 (గ్రూప్)",
      "interestRate": "కేవలం 7% (7% కంటే ఎక్కువ ఉండే వడ్డీని ప్రభుత్వమే చెల్లిస్తుంది)",
      "repaymentPeriod": "5 సంవత్సరాల వరకు",
      "whoCanApply": "పట్టణ వీధి వ్యాపారులు, మున్సిపాలిటీ పరిధిలోని పేదలు, మహిళా స్వయం సహాయక సంఘాలు",
      "purpose": "శాశ్వత తోపుడు బండ్ల నిర్మాణం, కియోస్క్‌ల ఏర్పాటు, హోల్‌సేల్ సరుకుల కొనుగోలు",
      "benefits": [
        "7% కంటే ఎక్కువ ఉండే పూర్తి బ్యాంక్ వడ్డీని ప్రభుత్వమే నేరుగా రాయితీగా చెల్లిస్తుంది",
        "ఎలాంటి ఆస్తి పూచీకత్తు అవసరం లేదు",
        "అధికారిక వెండింగ్ గుర్తింపు కార్డు మరియు మున్సిపల్ వెండింగ్ జోన్లలో స్థల కేటాయింపు"
      ],
      "eligibleCategories": [
        "పట్టణ పేదలు",
        "వీధి వ్యాపారులు",
        "మహిళా సంఘాలు"
      ],
      "eligibleBusinessTypes": [
        "వీధి వ్యాపారం",
        "కిరాణా దుకాణాలు",
        "ఆహార వ్యాపారం"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "పట్టణ దారిద్య్రరేఖ నిబంధనలు",
      "requiredDocuments": [
        {
          "docName": "ఆధార్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "పట్టణ వెండింగ్ ఐడీ / మున్సిపల్ సర్వే పత్రం",
          "description": "వెండింగ్ కమిటీ గుర్తింపు",
          "status": "Uploaded"
        },
        {
          "docName": "బ్యాంక్ ఖాతా పాస్‌బుక్",
          "description": "వడ్డీ సబ్సిడీ ఖాతా",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "डे-नल्म योजना (शहरी स्ट्रीट वेंडर व सूक्ष्म उद्यम हेतु 7% ब्याज पर ऋण)",
      "description": "शहरी गरीबों, स्ट्रीट वेंडरों और स्वयं सहायता समूहों को 7% की प्रभावी ब्याज दर पर ₹2 लाख (व्यक्तिगत) से ₹10 लाख (समूह) तक का आसान ऋण देने वाली योजना।",
      "loanAmount": "₹2,00,000 (व्यक्तिगत) / ₹10,00,000 (समूह)",
      "interestRate": "प्रभावी 7% वार्षिक (7% से ऊपर का पूरा ब्याज सरकार देती है)",
      "repaymentPeriod": "5 वर्ष तक",
      "whoCanApply": "शहरी स्ट्रीट वेंडर, फेरीवाले, नगर निगम क्षेत्र के गरीब व स्वयं सहायता समूह",
      "purpose": "कियोस्क निर्माण, आधुनिक ठेला गाड़ी, थोक माल खरीद और कार्यशील पूंजी",
      "benefits": [
        "7% से अधिक की संपूर्ण ब्याज दर सरकार द्वारा सीधे बैंक को प्रतिपूर्ति",
        "बिना किसी गारंटी या बंधक के आसान ऋण स्वीकृति",
        "आधिकारिक वेंडिंग पहचान पत्र और सामाजिक सुरक्षा योजनाओं से जुड़ाव"
      ],
      "eligibleCategories": [
        "शहरी गरीब",
        "स्ट्रीट वेंडर",
        "महिला स्वयं सहायता समूह"
      ],
      "eligibleBusinessTypes": [
        "स्ट्रीट वेंडिंग",
        "किराना",
        "खान-पान"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "शहरी निर्धनता रेखा पात्रता",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "शहरी वेंडिंग पहचान पत्र / सर्वे पर्ची",
          "description": "टाउन वेंडिंग कमेटी प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "बैंक पासबुक",
          "description": "ब्याज सब्सिडी खाता",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಡೇ-ನಲ್ಮ್ ಯೋಜನೆ (ನಗರ ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ 7% ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ)",
      "description": "ನಗರ ಪ್ರದೇಶದ ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಮಹಿಳಾ ಸಂಘಗಳಿಗೆ ಕೇವಲ 7% ಬಡ್ಡಿದರದಲ್ಲಿ ₹2 ಲಕ್ಷದಿಂದ ₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹2,00,000 (ವೈಯಕ್ತಿಕ) / ₹10,00,000 (ಸಂಘ)",
      "interestRate": "ಕೇವಲ 7% (ಹೆಚ್ಚುವರಿ ಬಡ್ಡಿಯನ್ನು ಸರ್ಕಾರವೇ ಭರಿಸುತ್ತದೆ)",
      "repaymentPeriod": "5 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ನಗರದ ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳು, ಪಾಲಿಕೆ ವ್ಯಾಪ್ತಿಯ ಬಡವರು, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು",
      "purpose": "ಮಾರಾಟ ಕಿಯೋಸ್ಕ್ ನಿರ್ಮಾಣ, ತಳ್ಳುಗಾಡಿ ಖರೀದಿ ಮತ್ತು ಸರಕು ದಾಸ್ತಾನು",
      "benefits": [
        "7% ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಬಡ್ಡಿಯನ್ನು ಸರ್ಕಾರವೇ ನೇರವಾಗಿ ಮರುಪಾವತಿಸುತ್ತದೆ",
        "ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನದ ಅಗತ್ಯವಿಲ್ಲ",
        "ಅಧಿಕೃತ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ವ್ಯಾಪಾರ ವಲಯ ಸೌಲಭ್ಯ"
      ],
      "eligibleCategories": [
        "ನಗರದ ಬಡವರು",
        "ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಬೀದಿ ವ್ಯಾಪಾರ",
        "ಕಿರು ವ್ಯಾಪಾರ"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ನಗರ ಬಡತನ ರೇಖೆಯ ಮಿತಿ",
      "requiredDocuments": [
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ನಗರ ವ್ಯಾಪಾರ ಗುರುತಿನ ಚೀಟಿ",
          "description": "ಪಾಲಿಕೆ ಸಮಿತಿ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
          "description": "ಖಾತೆ ವಿವರ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "டே-நல்ம் திட்டம் (நகர்ப்புற சாலையோர வியாபாரிகளுக்கு 7% வட்டியில் கடன்)",
      "description": "நகர்ப்புற ஏழை வியாபாரிகள் மற்றும் சுயஉதவி குழுக்களுக்கு 7% சலுகை வட்டியில் ரூ. 2 லட்சம் முதல் ரூ. 10 லட்சம் வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 2,00,000 (தனிநபர்) / ரூ. 10,00,000 (குழு)",
      "interestRate": "7% வட்டி (7% க்கு மேற்பட்ட வட்டியை அரசே செலுத்துகிறது)",
      "repaymentPeriod": "5 ஆண்டுகள் வரை",
      "whoCanApply": "நகர்ப்புற சாலையோர வியாபாரிகள், மகளிர் சுயஉதவி குழுக்கள்",
      "purpose": "நிரந்தர தள்ளுவண்டி, கியோஸ்க் அமைத்தல் மற்றும் மொத்த சரக்கு கொள்முதல்",
      "benefits": [
        "7% க்கும் அதிகமான முழு வட்டியையும் அரசே ஏற்கும்",
        "எந்தவித சொத்து பிணையமும் தேவையில்லை",
        "அரசு அங்கீகரித்த வியாபார அடையாள அட்டை"
      ],
      "eligibleCategories": [
        "நகர்ப்புற ஏழைகள்",
        "சாலையோர வியாபாரிகள்"
      ],
      "eligibleBusinessTypes": [
        "சாலையோர வியாபாரம்",
        "உணவுத் தொழில்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வறுமைக்கோடு வரம்பு",
      "requiredDocuments": [
        {
          "docName": "ஆதார் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வியாபார அடையாள அட்டை / நகராட்சி கணக்கெடுப்பு சான்று",
          "description": "வியாபாரி சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வங்கி கணக்கு புத்தகம்",
          "description": "மானியம் பெறும் கணக்கு",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "डे-नल्म योजना (शहरी फेरीवाले व बचत गटांसाठी 7% व्याजाने कर्ज)",
      "description": "शहरी भागातील गरीब फेरीवाले आणि महिला बचत गटांना 7% नाममात्र व्याजाने ₹2 लाख (वैयक्तिक) ते ₹10 लाख (गट) पर्यंत विनातारण कर्ज देणारी योजना.",
      "loanAmount": "₹2,00,000 (वैयक्तिक) / ₹10,00,000 (गट)",
      "interestRate": "केवळ 7% (7% वरील सर्व व्याज सरकार भरते)",
      "repaymentPeriod": "5 वर्षांपर्यंत",
      "whoCanApply": "शहरी पथविक्रेते, फेरीवाले, महिला बचत गट",
      "purpose": "कियोस्क उभारणी, आधुनिक हातगाडी आणि माल खरेदी",
      "benefits": [
        "7% पेक्षा जास्त व्याजाची रक्कम सरकारकडून बँक खात्यात थेट परतावा",
        "कोणत्याही हमीशिवाय कर्ज मंजुरी",
        "अधिकृत फेरीवाला ओळखपत्र आणि वेंडिंग झोनमध्ये जागा"
      ],
      "eligibleCategories": [
        "शहरी गरीब",
        "पथविक्रेते",
        "महिला बचत गट"
      ],
      "eligibleBusinessTypes": [
        "फेरीवाले",
        "किराणा"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "शहरी दारिद्र्यरेषा निकष",
      "requiredDocuments": [
        {
          "docName": "आधार कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "फेरीवाला ओळखपत्र / सर्वेक्षण पावती",
          "description": "नगरपालिका नोंदणी",
          "status": "Uploaded"
        },
        {
          "docName": "बँक पासबुक",
          "description": "व्याज परतावा खाते",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "ডে-নালম যোজনা (শহুরে হকার ও স্বনির্ভর দলের জন্য ৭% সুদে ঋণ)",
      "description": "শহরের ক্ষুদ্র ব্যবসায়ী, হকার এবং মহিলা স্বনির্ভর দলগুলোকে মাত্র ৭% সুদের হারে ₹২ লাখ থেকে ₹১০ লাখ পর্যন্ত জামানতমুক্ত ঋণ সুবিধা প্রদান প্রকল্প।",
      "loanAmount": "₹২,০০,০০০ (ব্যক্তিগত) / ₹১০,০০,০০০ (দলীয়)",
      "interestRate": "কার্যকরী ৭% (৭% এর অতিরিক্ত সুদ সরকার বহন করে)",
      "repaymentPeriod": "৫ বছর পর্যন্ত",
      "whoCanApply": "শহুরে হকার, ফুটপাতের ব্যবসায়ী, মহিলা স্বনির্ভর দল",
      "purpose": "কিয়স্ক নির্মাণ, আধুনিক ভ্যান ক্রয় ও পাইকারি পণ্য ক্রয়",
      "benefits": [
        "৭% এর অতিরিক্ত সকল সুদের টাকা সরকার সরাসরি ভর্তুকি হিসেবে প্রদান করে",
        "কোনো প্রকার বন্ধক ছাড়াই ঋণ প্রাপ্তি",
        "অফিসিয়াল পরিচয়পত্র এবং নির্ধারিত স্থানে ব্যবসা করার অধিকার"
      ],
      "eligibleCategories": [
        "শহুরে দরিদ্র",
        "পথ বিক্রেতা",
        "স্বনির্ভর দল"
      ],
      "eligibleBusinessTypes": [
        "পথের ব্যবসা",
        "খাবারের দোকান"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "শহুরে দারিদ্র্যসীমার মানদণ্ড",
      "requiredDocuments": [
        {
          "docName": "আধার কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ভেন্ডিং পরিচয়পত্র / সার্ভে স্লিপ",
          "description": "পৌরসভা প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যাংক পাসবুক",
          "description": "সুদ ভর্তুকি অ্যাকাউন্ট",
          "status": "Uploaded"
        }
      ]
    }
  },
  "NHFDC-DSY": {
    "en": {
      "name": "Divyangjan Swavalamban Yojana (NHFDC Concessional Loan for PwD)",
      "description": "National Handicapped Finance and Development Corporation (NHFDC) scheme providing concessional loans up to ₹50 Lakhs at 5% to 8% interest with 1% additional rebate for women with disabilities.",
      "loanAmount": "Up to ₹50 Lakhs (Concessional 5% - 8% Interest)",
      "interestRate": "Concessional (5.0% - 8.0% p.a., 1% rebate for women)",
      "repaymentPeriod": "Up to 10 Years (Moratorium up to 1 Year)",
      "whoCanApply": "Indian citizens aged 18-65 with minimum 40% disability certified by medical authority or UDID Card",
      "purpose": "Setting up small business, retail shops, trading, agricultural units, vehicle purchase, or assistive equipment",
      "benefits": [
        "Concessional interest rate between 5% and 8% per annum based on loan size",
        "Special 1% additional interest rebate for disabled women entrepreneurs",
        "Loans up to ₹50,000 provided without any security or guarantor; up to ₹5 Lakhs with simple personal guarantee"
      ],
      "eligibleCategories": [
        "Persons with Disabilities (PwD)",
        "Divyangjan",
        "Women with Disability"
      ],
      "eligibleBusinessTypes": [
        "All Enterprise Types",
        "Retail / Kirana Shop",
        "Services / Repair Shop",
        "Manufacturing & Fabrication"
      ],
      "minAge": "18 Years",
      "incomeCap": "No restrictive ceiling",
      "requiredDocuments": [
        {
          "docName": "Unique Disability ID (UDID Card) / Disability Certificate (40%+)",
          "description": "Disability proof",
          "status": "Uploaded"
        },
        {
          "docName": "Aadhaar Card & PAN Card",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Age & Address Proof",
          "description": "Age 18-65 verification",
          "status": "Uploaded"
        },
        {
          "docName": "Business / Assistive Equipment Quotation",
          "description": "Purchase estimate",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "దివ్యాంగుల స్వావలంబన యోజన (NHFDC - దివ్యాంగులకు రూ. 50 లక్షల వరకు రాయితీ రుణం)",
      "description": "కనీసం 40% వైకల్యం కలిగిన దివ్యాంగులు సొంత వ్యాపారం, కిరాణా దుకాణం, సర్వీస్ సెంటర్ లేదా తయారీ యూనిట్ స్థాపించడానికి కేవలం 5% నుండి 8% అతి తక్కువ వడ్డీతో రూ. 50 లక్షల వరకు దీర్ఘకాలిక రుణాలను అందించే కేంద్ర పథకం.",
      "loanAmount": "రూ. 50,00,000 వరకు (5% - 8% అతి తక్కువ వడ్డీతో)",
      "interestRate": "కేవలం 5.0% - 8.0% (దివ్యాంగ మహిళలకు అదనంగా 1% వడ్డీ తగ్గింపు)",
      "repaymentPeriod": "10 సంవత్సరాల వరకు (1 సంవత్సరం మొరటోరియం)",
      "whoCanApply": "40% కంటే ఎక్కువ వైకల్యం మరియు యుడిఐడి (UDID) కార్డు కలిగిన 18-65 ఏళ్ల భారతీయ పౌరులు",
      "purpose": "చిన్న వ్యాపారాలు, కిరాణా షాపులు, వ్యవసాయం, ఆటో రిపేర్, రవాణా వాహనాలు మరియు సహాయక పరికరాల కొనుగోలు",
      "benefits": [
        "రుణ పరిమాణాన్ని బట్టి కేవలం 5% నుండి 8% నామమాత్రపు వడ్డీ రేటు",
        "దివ్యాంగ మహిళా పారిశ్రామికవేత్తలకు అదనంగా మరో 1% ప్రత్యేక వడ్డీ రాయితీ",
        "రూ. 50,000 వరకు ఎలాంటి పూచీకత్తు లేకుండా, రూ. 5 లక్షల వరకు కేవలం సాధారణ వ్యక్తిగత గ్యారెంటీతో రుణం"
      ],
      "eligibleCategories": [
        "దివ్యాంగులు",
        "దివ్యాంగ మహిళలు",
        "అన్ని వర్గాలు"
      ],
      "eligibleBusinessTypes": [
        "అన్ని వ్యాపార రంగాలు",
        "కిరాణా దుకాణం",
        "సర్వీస్ సెంటర్",
        "చిన్న పరిశ్రమలు"
      ],
      "minAge": "18 సంవత్సరాలు",
      "incomeCap": "ఎలాంటి పరిమితి లేదు",
      "requiredDocuments": [
        {
          "docName": "యుడిఐడి (UDID) కార్డు / దివ్యాంగ ధృవీకరణ పత్రం (40%+)",
          "description": "వైకల్య ధృవీకరణ పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "ఆధార్ కార్డు & పాన్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "వయస్సు మరియు చిరునామా రుజువు",
          "description": "వయస్సు ధృవీకరణ",
          "status": "Uploaded"
        },
        {
          "docName": "వ్యాపార పరికరాలు / మెషినరీ కొటేషన్",
          "description": "పరికరాల అంచనా పత్రం",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "दिव्यांगजन स्वावलंबन योजना (NHFDC - दिव्यांगजनों हेतु ₹50 लाख तक रियायती ऋण)",
      "description": "40% या अधिक दिव्यांगता वाले नागरिकों को स्वयं का व्यवसाय, दुकान या लघु उद्योग स्थापित करने हेतु केवल 5% से 8% की रियायती ब्याज दर पर ₹50 लाख तक का ऋण उपलब्ध कराने वाली योजना।",
      "loanAmount": "₹50,00,000 तक (5% - 8% रियायती ब्याज)",
      "interestRate": "रियायती 5.0% - 8.0% (दिव्यांग महिलाओं को 1% अतिरिक्त छूट)",
      "repaymentPeriod": "10 वर्ष तक (1 वर्ष मोरेटोरियम)",
      "whoCanApply": "18-65 वर्ष के भारतीय नागरिक जिनके पास न्यूनतम 40% दिव्यांगता प्रमाण पत्र या UDID कार्ड हो",
      "purpose": "दुकान, व्यापार, सेवा केंद्र, कृषि इकाई, वाहन खरीद व सहायक उपकरण",
      "benefits": [
        "ऋण राशि के आधार पर मात्र 5% से 8% की नाममात्र ब्याज दर",
        "दिव्यांग महिला उद्यमियों को ब्याज दर में 1% की विशेष अतिरिक्त छूट",
        "₹50,000 तक बिना किसी गारंटी के और ₹5 लाख तक केवल व्यक्तिगत गारंटी पर ऋण"
      ],
      "eligibleCategories": [
        "दिव्यांगजन",
        "दिव्यांग महिलाएं",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "सभी व्यवसाय प्रकार",
        "किराना दुकान",
        "सेवाएं",
        "लघु उद्योग"
      ],
      "minAge": "18 वर्ष",
      "incomeCap": "कोई सीमा नहीं",
      "requiredDocuments": [
        {
          "docName": "यूडीआईडी (UDID) कार्ड / दिव्यांगता प्रमाण पत्र (40%+)",
          "description": "दिव्यांगता प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "आधार कार्ड और पैन कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "आयु व पते का प्रमाण",
          "description": "आयु सत्यापन",
          "status": "Uploaded"
        },
        {
          "docName": "व्यावसायिक उपकरण कोटेशन",
          "description": "लागत अनुमान",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ದಿವ್ಯಾಂಗಜನ ಸ್ವಾವಲಂಬನ ಯೋಜನೆ (NHFDC - ವಿಕಲಚೇತನರಿಗೆ ₹50 ಲಕ್ಷ ಸಾಲ)",
      "description": "ಕನಿಷ್ಠ 40% ವಿಕಲಾಂಗತೆ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಗಳಿಗೆ ಸ್ವಂತ ಉದ್ಯಮ ಸ್ಥಾಪಿಸಲು ಕೇವಲ 5% ರಿಂದ 8% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ₹50 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹50,00,000 ವರೆಗೆ (5% - 8% ಬಡ್ಡಿದರ)",
      "interestRate": "5.0% - 8.0% (ಮಹಿಳೆಯರಿಗೆ 1% ಹೆಚ್ಚುವರಿ ರಿಯಾಯಿತಿ)",
      "repaymentPeriod": "10 ವರ್ಷಗಳವರೆಗೆ (1 ವರ್ಷ ಮೊರಟೋರಿಯಂ)",
      "whoCanApply": "40% ವಿಕಲಾಂಗತೆ ಹೊಂದಿರುವ 18-65 ವರ್ಷ ವಯಸ್ಸಿನ ವ್ಯಕ್ತಿಗಳು",
      "purpose": "ಅಂಗಡಿ, ಕಿರಾಣಿ, ಸೇವಾ ಕೇಂದ್ರ, ವಾಹನ ಮತ್ತು ಸಹಾಯಕ ಉಪಕರಣಗಳ ಖರೀದಿ",
      "benefits": [
        "ಕೇವಲ 5% ರಿಂದ 8% ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿದರ",
        "ವಿಕಲಚೇತನ ಮಹಿಳೆಯರಿಗೆ ಬಡ್ಡಿಯಲ್ಲಿ 1% ಹೆಚ್ಚುವರಿ ರಿಯಾಯಿತಿ",
        "₹50,000 ವರೆಗೆ ಯಾವುದೇ ಜಾಮೀನುದಾರರ ಅಗತ್ಯವಿಲ್ಲ"
      ],
      "eligibleCategories": [
        "ವಿಕಲಚೇತನರು",
        "ಮಹಿಳೆಯರು"
      ],
      "eligibleBusinessTypes": [
        "ಎಲ್ಲಾ ಉದ್ಯಮಗಳು",
        "ಕಿರಾಣಿ",
        "ಸೇವೆಗಳು"
      ],
      "minAge": "18 ವರ್ಷಗಳು",
      "incomeCap": "ಯಾವುದೇ ಮಿತಿಯಿಲ್ಲ",
      "requiredDocuments": [
        {
          "docName": "ಯುಡಿಐಡಿ (UDID) ಕಾರ್ಡ್ / ವಿಕಲಾಂಗತೆ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ವಿಕಲಾಂಗತೆ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಯಸ್ಸಿನ ಪುರಾವೆ",
          "description": "ವಯಸ್ಸು ದೃಢೀಕರಣ",
          "status": "Uploaded"
        },
        {
          "docName": "ಉಪಕರಣಗಳ ಕೊಟೇಶನ್",
          "description": "ವೆಚ್ಚದ ಅಂದಾಜು",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "திவ்யாங்ஜன் சுவாலம்பன் திட்டம் (NHFDC - மாற்றுத்திறனாளிகளுக்கு ரூ. 50 லட்சம் கடன்)",
      "description": "40% அல்லது அதற்கு மேற்பட்ட மாற்றுத்திறன் கொண்ட நபர்கள் தொழில் தொடங்க 5% முதல் 8% குறைந்த வட்டியில் ரூ. 50 லட்சம் வரை கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 50,00,000 வரை (5% - 8% குறைந்த வட்டி)",
      "interestRate": "5.0% - 8.0% (பெண்களுக்கு 1% கூடுதல் வட்டி தள்ளுபடி)",
      "repaymentPeriod": "10 ஆண்டுகள் வரை",
      "whoCanApply": "40% மாற்றுத்திறன் மற்றும் UDID அட்டை கொண்ட 18-65 வயது குடிமக்கள்",
      "purpose": "வணிகம், மளிகைக்கடை, சேவை மையம் மற்றும் வாகனங்கள் வாங்குதல்",
      "benefits": [
        "கடன் அளவுக்கு ஏற்ப 5% முதல் 8% வரை குறைந்த வட்டி விகிதம்",
        "மாற்றுத்திறனாளி பெண்களுக்கு 1% கூடுதல் வட்டி சலுகை",
        "ரூ. 50,000 வரை எவ்வித பிணையும் இன்றி கடன் உதவி"
      ],
      "eligibleCategories": [
        "மாற்றுத்திறனாளிகள்",
        "பெண்கள்"
      ],
      "eligibleBusinessTypes": [
        "அனைத்து தொழில்கள்",
        "மளிகை",
        "சேவைகள்"
      ],
      "minAge": "18 ஆண்டுகள்",
      "incomeCap": "வரம்பு இல்லை",
      "requiredDocuments": [
        {
          "docName": "UDID அட்டை / மாற்றுத்திறனாளி சான்றிதழ் (40%+)",
          "description": "மாற்றுத்திறன் சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "ஆதார் அட்டை & பான் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "வயது மற்றும் முகவரி சான்று",
          "description": "வயது சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "தொழில் உபகரண விலை மதிப்பீடு",
          "description": "விலைப்பட்டியல்",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "दिव्यांगजन स्वावलंबन योजना (NHFDC - दिव्यांगांसाठी ₹50 लाखांपर्यंत सवलतीचे कर्ज)",
      "description": "किमान 40% दिव्यांगत्व असलेल्या व्यक्तींना स्वतःचा व्यवसाय किंवा सेवा केंद्र सुरू करण्यासाठी फक्त 5% ते 8% सवलतीच्या व्याजदराने ₹50 लाखांपर्यंत कर्ज देणारी योजना.",
      "loanAmount": "₹50,00,000 पर्यंत (5% - 8% सवलतीचा दर)",
      "interestRate": "5.0% - 8.0% (दिव्यांग महिलांना 1% अतिरिक्त सवलत)",
      "repaymentPeriod": "10 वर्षांपर्यंत (1 वर्ष मोरेटोरियम)",
      "whoCanApply": "40% दिव्यांगत्व आणि UDID कार्ड असलेले 18-65 वयोगटातील नागरिक",
      "purpose": "दुकान, व्यवसाय, शेती, वाहन खरेदी आणि सहाय्यक उपकरणे",
      "benefits": [
        "कर्जाच्या रकमेनुसार केवळ 5% ते 8% नाममात्र व्याजदर",
        "दिव्यांग महिला उद्योजकांसाठी 1% अतिरिक्त व्याज सवलत",
        "₹50,000 पर्यंत कोणत्याही हमीशिवाय आणि ₹5 लाखांपर्यंत वैयक्तिक हमीवर कर्ज"
      ],
      "eligibleCategories": [
        "दिव्यांगजन",
        "दिव्यांग महिला",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "सर्व व्यवसाय",
        "किराणा",
        "सेवा केंद्र"
      ],
      "minAge": "18 वर्षे",
      "incomeCap": "कोणतीही मर्यादा नाही",
      "requiredDocuments": [
        {
          "docName": "यूडीआयडी (UDID) कार्ड / दिव्यांग प्रमाणपत्र (40%+)",
          "description": "दिव्यांगत्व पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "आधार कार्ड आणि पॅन कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "वय व पत्ता पुरावा",
          "description": "वय पडताळणी",
          "status": "Uploaded"
        },
        {
          "docName": "व्यावसायिक साधनसामग्री कोटेशन",
          "description": "खर्च अंदाज",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "দিব্যাঙ্গজন স্বাবলম্বন যোজনা (NHFDC - বিশেষভাবে সক্ষম ব্যক্তিদের জন্য ₹৫০ লাখ ঋণ)",
      "description": "ন্যূনতম ৪০% প্রতিবন্ধকতাযুক্ত ব্যক্তিদের ব্যবসা বা স্বনির্ভর কর্মসংস্থানের জন্য মাত্র ৫% থেকে ৮% সুদের হারে ₹৫০ লাখ পর্যন্ত দীর্ঘমেয়াদী ঋণ প্রকল্প।",
      "loanAmount": "₹৫০,০০,০০০ পর্যন্ত (৫% - ৮% রেয়াতি সুদ)",
      "interestRate": "৫.০% - ৮.০% (মহিলাদের জন্য ১% অতিরিক্ত ছাড়)",
      "repaymentPeriod": "১০ বছর পর্যন্ত (১ বছর স্থগিতাদেশ)",
      "whoCanApply": "১৮-৬৫ বছর বয়সী ভারতীয় নাগরিক যাদের ন্যূনতম ৪০% প্রতিবন্ধকতা শংসাপত্র বা UDID কার্ড আছে",
      "purpose": "দোকান, ক্ষুদ্র ব্যবসা, সেবা কেন্দ্র, কৃষি এবং সহায়ক সরঞ্জাম ক্রয়",
      "benefits": [
        "ঋণের পরিমাণের ভিত্তিতে মাত্র ৫% থেকে ৮% নামমাত্র সুদের হার",
        "বিশেষ চাহিদা সম্পন্ন নারী উদ্যোক্তাদের জন্য অতিরিক্ত ১% সুদ ছাড়",
        "₹৫০,০০০ পর্যন্ত কোনো জামানত ছাড়াই এবং ₹৫ লাখ পর্যন্ত সাধারণ জামানতে ঋণ"
      ],
      "eligibleCategories": [
        "প্রতিবন্ধী ব্যক্তি",
        "নারী",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "সকল ব্যবসা",
        "মুদি দোকান",
        "সেবা খাত"
      ],
      "minAge": "১৮ বছর",
      "incomeCap": "কোনো সীমা নেই",
      "requiredDocuments": [
        {
          "docName": "ইউডিআইডি (UDID) কার্ড / প্রতিবন্ধকতা শংসাপত্র (৪০%+)",
          "description": "প্রতিবন্ধকতার প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "আধার কার্ড ও প্যান কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "বয়স ও ঠিকানার প্রমাণ",
          "description": "বয়স যাচাই",
          "status": "Uploaded"
        },
        {
          "docName": "ব্যবসার সরঞ্জামের কোটেশন",
          "description": "ব্যয় অনুমান",
          "status": "Pending"
        }
      ]
    }
  },
  "PM-VIDYALAXMI": {
    "en": {
      "name": "PM Vidyalaxmi Scheme (Higher Education Credit Support)",
      "description": "Centrally sponsored scheme providing collateral-free and guarantor-free education loans up to ₹7.5 Lakhs for students admitted to NIRF top 100 higher education institutions with 3% interest subvention for families with income up to ₹8 Lakhs.",
      "loanAmount": "Up to ₹7.5 Lakhs (100% Collateral & Guarantor Free)",
      "interestRate": "Concessional (3% Interest Subvention for family income < ₹8L)",
      "repaymentPeriod": "Up to 15 Years (Course Period + 1 Year Moratorium)",
      "whoCanApply": "Students admitted to NIRF top-ranked universities, IITs, IIMs, AIIMS, NITs, Central Universities",
      "purpose": "Tuition fees, hostel accommodation, laptop/books, and living expenses during degree",
      "benefits": [
        "100% collateral-free and guarantor-free loan sanctioned through unified portal",
        "3% annual interest subvention during moratorium period for families earning up to ₹8 Lakhs",
        "Credit guarantee of 75% provided by National Credit Guarantee Trustee Company (NCGTC)"
      ],
      "eligibleCategories": [
        "All Categories",
        "Meritorious Students",
        "General",
        "OBC",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Higher Education",
        "Skill Development"
      ],
      "minAge": "17 Years",
      "incomeCap": "Family income up to ₹8,00,000 for 3% interest subvention",
      "requiredDocuments": [
        {
          "docName": "Aadhaar Card of Student & Parent",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Admission Letter & Fee Structure from Recognized NIRF College",
          "description": "Admission proof",
          "status": "Uploaded"
        },
        {
          "docName": "Class 10th & 12th / Degree Marksheets",
          "description": "Academic record",
          "status": "Uploaded"
        },
        {
          "docName": "Family Income Certificate (Revenue Authority)",
          "description": "Income subvention eligibility proof",
          "status": "Pending"
        }
      ]
    },
    "te": {
      "name": "పీఎం విద్యాలక్ష్మి పథకం (ఉన్నత విద్య కోసం పూచీకత్తు లేని విద్యా రుణం)",
      "description": "ఐఐటీలు, ఐఐఎంలు, ఎయిమ్స్, ఎన్‌ఐటీలు మరియు ప్రముఖ విశ్వవిద్యాలయాలలో ప్రవేశం పొందిన విద్యార్థులకు ఎలాంటి ఆస్తి లేదా గ్యారంటర్లు లేకుండా ₹7.5 లక్షల వరకు 3% వడ్డీ రాయితీతో 15 ఏళ్ల సులభ కాలపరిమితితో విద్యారుణాలు అందించే కేంద్ర పథకం.",
      "loanAmount": "రూ. 7,50,000 వరకు (పూచీకత్తు లేదా గ్యారంటర్ అవసరం లేదు)",
      "interestRate": "రాయితీ రేటు (కుటుంబ ఆదాయం రూ. 8 లక్షల లోపు ఉంటే 3% వడ్డీ సబ్సిడీ)",
      "repaymentPeriod": "15 సంవత్సరాల వరకు (కోర్సు కాలం + 1 సంవత్సరం మొరటోరియం)",
      "whoCanApply": "ఎన్‌ఐఆర్‌ఎఫ్ (NIRF) గుర్తింపు పొందిన కళాశాలల్లో ఉన్నత విద్య ప్రవేశం పొందిన విద్యార్థులు",
      "purpose": "కాలేజ్ ట్యూషన్ ఫీజు, హాస్టల్ ఖర్చులు, ల్యాప్‌టాప్/పుస్తకాలు మరియు ప్రాజెక్ట్ ఖర్చులు",
      "benefits": [
        "ఎలాంటి ఆస్తి తాకట్టు లేదా థర్డ్-పార్టీ గ్యారంటీ అవసరం లేదు",
        "కుటుంబ వార్షిక ఆదాయం రూ. 8 లక్షల లోపు ఉన్న విద్యార్థులకు 3% వడ్డీ సబ్సిడీ",
        "కోర్సు పూర్తయిన తర్వాత ఉద్యోగం వచ్చే వరకు 1 సంవత్సరం మారటోరియం సదుపాయం"
      ],
      "eligibleCategories": [
        "విద్యార్థులు",
        "అన్ని వర్గాలు",
        "మెరిట్ విద్యార్థులు"
      ],
      "eligibleBusinessTypes": [
        "ఉన్నత విద్య",
        "వృత్తి విద్యా కోర్సులు"
      ],
      "minAge": "17 సంవత్సరాలు",
      "incomeCap": "3% సబ్సిడీ కోసం కుటుంబ వార్షిక ఆదాయం రూ. 8,00,000 లోపు ఉండాలి",
      "requiredDocuments": [
        {
          "docName": "విద్యార్థి మరియు తల్లిదండ్రుల ఆధార్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "కళాశాల అడ్మిషన్ లెటర్ & ఫీజు వివరాల పత్రం",
          "description": "ప్రవేశ ధృవీకరణ పత్రం",
          "status": "Uploaded"
        },
        {
          "docName": "10వ, 12వ తరగతి మార్కుల జాబితా",
          "description": "విద్యా రికార్డు",
          "status": "Uploaded"
        },
        {
          "docName": "కుటుంబ ఆదాయ ధృవీకరణ పత్రం (మీసేవ / తహశీల్దార్)",
          "description": "ఆదాయ పరిమితి ధృవీకరణ",
          "status": "Pending"
        }
      ]
    },
    "hi": {
      "name": "पीएम विद्यालक्ष्मी योजना (उच्च शिक्षा हेतु बिना गारंटी शिक्षा ऋण)",
      "description": "एनआईआरएफ (NIRF) शीर्ष संस्थानों, आईआईटी, आईआईएम, एम्स में प्रवेश लेने वाले विद्यार्थियों को बिना किसी बंधक या गारंटर के ₹7.5 लाख तक 3% ब्याज छूट के साथ 15 वर्ष की अवधि हेतु शिक्षा ऋण।",
      "loanAmount": "₹7,50,000 तक (100% गारंटी व गारंटर मुक्त)",
      "interestRate": "रियायती (पारिवारिक आय ₹8 लाख से कम होने पर 3% ब्याज छूट)",
      "repaymentPeriod": "15 वर्ष तक (पाठ्यक्रम अवधि + 1 वर्ष मोरेटोरियम)",
      "whoCanApply": "मान्यता प्राप्त शीर्ष विश्वविद्यालयों व कॉलेजों में प्रवेश प्राप्त छात्र",
      "purpose": "कॉलेज शिक्षण शुल्क, हॉस्टल खर्च, लैपटॉप, पुस्तकें और अध्ययन सामग्री",
      "benefits": [
        "एकल पोर्टल के माध्यम से 100% बिना गारंटी शिक्षा ऋण",
        "₹8 लाख तक पारिवारिक आय वाले छात्रों को मोरेटोरियम अवधि में 3% वार्षिक ब्याज छूट",
        "एनसीजीटीसी (NCGTC) द्वारा 75% सरकारी ऋण गारंटी सुरक्षा"
      ],
      "eligibleCategories": [
        "छात्र",
        "सभी श्रेणियां",
        "मेधावी छात्र"
      ],
      "eligibleBusinessTypes": [
        "उच्च शिक्षा",
        "तकनीकी शिक्षा"
      ],
      "minAge": "17 वर्ष",
      "incomeCap": "3% ब्याज छूट हेतु पारिवारिक आय ₹8,00,000 तक",
      "requiredDocuments": [
        {
          "docName": "छात्र व अभिभावक का आधार कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "कॉलेज प्रवेश पत्र व शुल्क संरचना विवरण",
          "description": "प्रवेश प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "10वीं व 12वीं की अंकतालिका",
          "description": "शैक्षणिक रिकॉर्ड",
          "status": "Uploaded"
        },
        {
          "docName": "पारिवारिक आय प्रमाण पत्र",
          "description": "आय पात्रता प्रमाण",
          "status": "Pending"
        }
      ]
    },
    "kn": {
      "name": "ಪಿಎಂ ವಿದ್ಯಾಲಕ್ಷ್ಮಿ ಯೋಜನೆ (ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಗ್ಯಾರಂಟಿ ರಹಿತ ಸಾಲ)",
      "description": "ಐಐಟಿ, ಐಐಎಂ, ಎನ್‌ಐಟಿ ಮುಂತಾದ ಉನ್ನತ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಪ್ರವೇಶ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನವಿಲ್ಲದೆ ₹7.5 ಲಕ್ಷದವರೆಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ಶಿಕ್ಷಣ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.",
      "loanAmount": "₹7,50,000 ವರೆಗೆ (ಯಾವುದೇ ಭದ್ರತೆ ಅಗತ್ಯವಿಲ್ಲ)",
      "interestRate": "3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ (ಆದಾಯ ₹8 ಲಕ್ಷದೊಳಗಿದ್ದರೆ)",
      "repaymentPeriod": "15 ವರ್ಷಗಳವರೆಗೆ (ಕೋರ್ಸ್ ಮುಗಿದ ನಂತರ 1 ವರ್ಷ ಸವಲತ್ತು)",
      "whoCanApply": "NIRF ಶ್ರೇಯಾಂಕದ ಕಾಲೇಜುಗಳಲ್ಲಿ ಪ್ರವೇಶ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು",
      "purpose": "ಕಾಲೇಜು ಶುಲ್ಕ, ಹಾಸ್ಟೆಲ್ ಖರ್ಚು, ಲ್ಯಾಪ್‌ಟಾಪ್ ಮತ್ತು ಪುಸ್ತಕಗಳು",
      "benefits": [
        "ಯಾವುದೇ ಆಸ್ತಿ ಅಥವಾ ಗ್ಯಾರಂಟರ್ ಇಲ್ಲದೆ ಶಿಕ್ಷಣ ಸಾಲ",
        "ವಾರ್ಷಿಕ ಆದಾಯ ₹8 ಲಕ್ಷದೊಳಗಿನ ಕುಟುಂಬಗಳಿಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ",
        "ಕೋರ್ಸ್ ಮುಗಿದು 1 ವರ್ಷದ ನಂತರ ಮರುಪಾವತಿ ಆರಂಭ"
      ],
      "eligibleCategories": [
        "ವಿದ್ಯಾರ್ಥಿಗಳು",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ಉನ್ನತ ಶಿಕ್ಷಣ"
      ],
      "minAge": "17 ವರ್ಷಗಳು",
      "incomeCap": "ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಗೆ ವಾರ್ಷಿಕ ಆದಾಯ ₹8,00,000 ಮಿತಿ",
      "requiredDocuments": [
        {
          "docName": "ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಪೋಷಕರ ಆಧಾರ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕಾಲೇಜು ಪ್ರವೇಶ ಪತ್ರ ಮತ್ತು ಶುಲ್ಕ ವಿವರ",
          "description": "ಪ್ರವೇಶ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "10 ಮತ್ತು 12 ನೇ ತರಗತಿ ಅಂಕಪಟ್ಟಿ",
          "description": "ಅಂಕಪಟ್ಟಿ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕುಟುಂಬದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಆದಾಯ ಪುರಾವೆ",
          "status": "Pending"
        }
      ]
    },
    "ta": {
      "name": "பிரதமர் வித்யாலக்ஷ்மி திட்டம் (உயர் கல்விக்கான பிணையில்லா கல்விக்கடன்)",
      "description": "ஐஐடி, ஐஐஎம், எய்ம்ஸ் போன்ற முன்னணி கல்வி நிறுவனங்களில் சேரும் மாணவர்களுக்கு எவ்வித சொத்துப் பிணையமும் இன்றி ரூ. 7.5 லட்சம் வரை 3% வட்டி மானியத்துடன் கல்விக்கடன் வழங்கும் திட்டம்.",
      "loanAmount": "ரூ. 7,50,000 வரை (பிணை மற்றும் உத்தரவாதம் தேவையில்லை)",
      "interestRate": "3% வட்டி மானியம் (குடும்ப வருமானம் ரூ. 8 லட்சத்திற்குள் இருந்தால்)",
      "repaymentPeriod": "15 ஆண்டுகள் வரை (படிப்பு காலம் + 1 ஆண்டு சலுகைக்காலம்)",
      "whoCanApply": "NIRF தரவரிசை கல்லூரிகளில் உயர் கல்வி பயிலும் மாணவர்கள்",
      "purpose": "கல்லூரி கட்டணம், விடுதி கட்டணம், மடிக்கணினி மற்றும் படிப்பு செலவுகள்",
      "benefits": [
        "100% சொத்து அடமானம் மற்றும் உத்தரவாததாரர் இன்றி கடன்",
        "ரூ. 8 லட்சம் வரை குடும்ப வருமானம் உள்ளவர்களுக்கு 3% வட்டி மானியம்",
        "படிப்பு முடிந்து 1 ஆண்டுக்கு பின் திருப்பி செலுத்தும் வசதி"
      ],
      "eligibleCategories": [
        "மாணவர்கள்",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "உயர் கல்வி"
      ],
      "minAge": "17 ஆண்டுகள்",
      "incomeCap": "3% வட்டி மானியத்திற்கு குடும்ப வருமானம் ரூ. 8,00,000 வரை",
      "requiredDocuments": [
        {
          "docName": "மாணவர் மற்றும் பெற்றோர் ஆதார் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "கல்லூரி சேர்க்கை கடிதம் மற்றும் கட்டண விவரம்",
          "description": "சேர்க்கை சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "10 மற்றும் 12 ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்",
          "description": "கல்வி பதிவு",
          "status": "Uploaded"
        },
        {
          "docName": "குடும்ப வருமானச் சான்றிதழ்",
          "description": "வருமான சான்று",
          "status": "Pending"
        }
      ]
    },
    "mr": {
      "name": "पीएम विद्यालक्ष्मी योजना (उच्च शिक्षणासाठी विनातारण शैक्षणिक कर्ज)",
      "description": "आयआयटी, आयआयएम, एम्स आणि आघाडीच्या उच्च शिक्षण संस्थांमध्ये प्रवेश घेणाऱ्या विद्यार्थ्यांसाठी कोणत्याही तारणाशिवाय ₹7.5 लाखांपर्यंत 3% व्याज अनुदानासह 15 वर्षे मुदतीचे कर्ज.",
      "loanAmount": "₹7,50,000 पर्यंत (तारण व जामीनदाराशिवाय)",
      "interestRate": "3% व्याज अनुदान (कुटुंबाचे उत्पन्न ₹8 लाखांपेक्षा कमी असल्यास)",
      "repaymentPeriod": "15 वर्षांपर्यंत (अभ्यासक्रम कालावधी + 1 वर्ष मोरेटोरियम)",
      "whoCanApply": "NIRF रँकिंग असलेल्या उच्च शिक्षण संस्थांमध्ये प्रवेश घेतलेले विद्यार्थी",
      "purpose": "महाविद्यालयीन शिक्षण शुल्क, वसतिगृह खर्च, लॅपटॉप व पुस्तके",
      "benefits": [
        "कोणतीही मालमत्ता गहाण न ठेवता आणि हमीदाराशिवाय 100% कर्ज",
        "₹8 लाखांपर्यंत कौटुंबिक उत्पन्न असलेल्या विद्यार्थ्यांना 3% वार्षिक व्याज अनुदान",
        "अभ्यासक्रम पूर्ण झाल्यानंतर 1 वर्ष परतफेडीस स्थगिती"
      ],
      "eligibleCategories": [
        "विद्यार्थी",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "उच्च शिक्षण"
      ],
      "minAge": "17 वर्षे",
      "incomeCap": "3% व्याज अनुदानासाठी कौटुंबिक उत्पन्न ₹8,00,000 ची मर्यादा",
      "requiredDocuments": [
        {
          "docName": "विद्यार्थी व पालकांचे आधार कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "महाविद्यालय प्रवेश पत्र व फी रचना",
          "description": "प्रवेश पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "10 वी व 12 वी गुणपत्रिका",
          "description": "शैक्षणिक पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "कौटुंबिक उत्पन्न प्रमाणपत्र",
          "description": "उत्पन्न पुरावा",
          "status": "Pending"
        }
      ]
    },
    "bn": {
      "name": "পিএম বিদ্যালক্ষ্মী যোজনা (উচ্চশিক্ষার জন্য জামানতমুক্ত শিক্ষা ঋণ)",
      "description": "আইআইটি, আইআইএম, এইমস এবং শীর্ষস্থানীয় উচ্চশিক্ষা প্রতিষ্ঠানে ভর্তিকৃত শিক্ষার্থীদের জন্য কোনো জামানত বা গ্যারান্টার ছাড়াই ₹৭.৫ লাখ পর্যন্ত ৩% সুদ ভর্তুকি সহ শিক্ষা ঋণ প্রকল্প।",
      "loanAmount": "₹৭,৫০,০০০ পর্যন্ত (১০০% জামানতমুক্ত)",
      "interestRate": "৩% সুদ ভর্তুকি (পারিবারিক আয় ₹৮ লাখের কম হলে)",
      "repaymentPeriod": "১৫ বছর পর্যন্ত (কোর্স সময়কাল + ১ বছর স্থগিতাদেশ)",
      "whoCanApply": "NIRF স্বীকৃত শীর্ষ কলেজে ভর্তিকৃত মেধাবী ছাত্রছাত্রী",
      "purpose": "কলেজের টিউশন ফি, হোস্টেল খরচ, ল্যাপটপ ও বইপত্র ক্রয়",
      "benefits": [
        "কোনো সম্পত্তি বন্ধক বা ব্যক্তিগত গ্যারান্টার ছাড়াই সহজ শিক্ষা ঋণ",
        "₹৮ লাখ পর্যন্ত পারিবারিক আয়ের ক্ষেত্রে স্থগিতাদেশের সময়ে ৩% সুদ ভর্তুকি",
        "কোর্স সমাপ্তির পর ১ বছর পর্যন্ত ঋণ পরিশোধ স্থগিত রাখার সুবিধা"
      ],
      "eligibleCategories": [
        "শিক্ষার্থী",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "উচ্চশিক্ষা"
      ],
      "minAge": "১৭ বছর",
      "incomeCap": "৩% সুদ ভর্তুকির জন্য পারিবারিক আয় ₹৮,০০,০০০ পর্যন্ত",
      "requiredDocuments": [
        {
          "docName": "শিক্ষার্থী ও অভিভাবকের আধার কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "কলেজের ভর্তি পত্র ও ফি বিবরণী",
          "description": "ভর্তির প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "মাধ্যমিক ও উচ্চ মাধ্যমিকের মার্কশিট",
          "description": "শিক্ষাগত রেকর্ড",
          "status": "Uploaded"
        },
        {
          "docName": "পারিবারিক আয়ের শংসাপত্র",
          "description": "আয়ের প্রমাণ",
          "status": "Pending"
        }
      ]
    }
  },
  "CSIS": {
    "en": {
      "name": "Central Sector Interest Subsidy Scheme (CSIS for Education Loans)",
      "description": "Ministry of Education scheme providing 100% full interest subsidy during the course study period plus 1 year moratorium on education loans for students from Economically Weaker Sections (EWS).",
      "loanAmount": "Full 100% Interest Paid by Govt during Studies",
      "interestRate": "0% during studies (Govt pays full interest)",
      "repaymentPeriod": "Up to 15 Years post graduation",
      "whoCanApply": "Students pursuing professional/technical courses in India with annual family income not exceeding ₹4.50 Lakh",
      "purpose": "Payment of college tuition, examination fee, equipment, books, and hostel charges",
      "benefits": [
        "Zero interest payable during entire course period plus 1 year post-course moratorium",
        "Available on education loans taken from any scheduled commercial bank under IBA guidelines",
        "Helps economically disadvantaged students complete higher degrees without accruing debt during college"
      ],
      "eligibleCategories": [
        "Economically Weaker Sections (EWS)",
        "All Categories",
        "General",
        "OBC",
        "SC",
        "ST"
      ],
      "eligibleBusinessTypes": [
        "Professional Degrees",
        "Technical Education"
      ],
      "minAge": "17 Years",
      "incomeCap": "Annual family income not exceeding ₹4,50,000",
      "requiredDocuments": [
        {
          "docName": "Authorized EWS Income Certificate (Tahsildar / Revenue Authority)",
          "description": "Income proof <= ₹4.5 Lakh",
          "status": "Uploaded"
        },
        {
          "docName": "Aadhaar Card of Student & Co-borrower",
          "description": "Identity KYC",
          "status": "Uploaded"
        },
        {
          "docName": "Admission Letter & Fee Demand from Approved College",
          "description": "Technical/professional degree admission",
          "status": "Uploaded"
        }
      ]
    },
    "te": {
      "name": "కేంద్ర రంగ వడ్డీ సబ్సిడీ పథకం (CSIS - చదువు పూర్తయ్యే వరకు 0% వడ్డీతో విద్యా రుణం)",
      "description": "ఆర్థికంగా వెనుకబడిన వర్గాల (EWS) విద్యార్థులకు వృత్తి విద్యా మరియు ఇంజనీరింగ్, మెడికల్ కోర్సుల చదువు పూర్తయ్యే వరకు మరియు ఉద్యోగం వచ్చే వరకు 100% పూర్తి వడ్డీని ప్రభుత్వమే చెల్లించే విద్యా రుణ పథకం.",
      "loanAmount": "చదువుకునే కాలంలో ప్రభుత్వమే 100% వడ్డీని చెల్లిస్తుంది",
      "interestRate": "చదువుకునే కాలంలో 0% వడ్డీ (పూర్తి వడ్డీని ప్రభుత్వమే భరిస్తుంది)",
      "repaymentPeriod": "డిగ్రీ పూర్తయిన తర్వాత 15 సంవత్సరాల వరకు",
      "whoCanApply": "వార్షిక కుటుంబ ఆదాయం ₹4.50 లక్షల లోపు ఉన్న ప్రొఫెషనల్/టెక్నికల్ కోర్సులు చదివే భారతీయ విద్యార్థులు",
      "purpose": "కాలేజ్ ట్యూషన్ ఫీజు, పరీక్ష ఫీజు, ల్యాబ్ పరికరాలు, పుస్తకాలు మరియు హాస్టల్ ఖర్చులు",
      "benefits": [
        "కోర్సు పూర్తయ్యే వరకు మరియు అదనంగా 1 సంవత్సరం మారటోరియం కాలంలో 0% వడ్డీ (విద్యార్థిపై ఎలాంటి వడ్డీ భారం ఉండదు)",
        "షెడ్యూల్డ్ వాణిజ్య బ్యాంకుల నుండి పొందిన అన్ని ఐబీఏ (IBA) విద్యా రుణాలకు వర్తిస్తుంది",
        "ఆర్థిక స్తోమత లేని ప్రతిభావంతులైన విద్యార్థులకు ఉన్నత విద్యా భరోసా"
      ],
      "eligibleCategories": [
        "ఈడబ్ల్యూఎస్ (EWS)",
        "అన్ని వర్గాలు",
        "ఆర్థికంగా వెనుకబడిన విద్యార్థులు"
      ],
      "eligibleBusinessTypes": [
        "వృత్తి విద్యా కోర్సులు",
        "ఇంజనీరింగ్ & మెడికల్"
      ],
      "minAge": "17 సంవత్సరాలు",
      "incomeCap": "వార్షిక కుటుంబ ఆదాయం రూ. 4,50,000 మించరాదు",
      "requiredDocuments": [
        {
          "docName": "అధికారిక ఈడబ్ల్యూఎస్ (EWS) ఆదాయ ధృవీకరణ పత్రం",
          "description": "ఆదాయం రూ. 4.5 లక్షల లోపు రుజువు",
          "status": "Uploaded"
        },
        {
          "docName": "విద్యార్థి మరియు తల్లిదండ్రుల ఆధార్ కార్డు",
          "description": "గుర్తింపు KYC",
          "status": "Uploaded"
        },
        {
          "docName": "కళాశాల అడ్మిషన్ లెటర్ & ఫీజు డిమాండ్ నోటీసు",
          "description": "ప్రవేశ ధృవీకరణ",
          "status": "Uploaded"
        }
      ]
    },
    "hi": {
      "name": "केंद्रीय क्षेत्र ब्याज सब्सिडी योजना (CSIS - पढ़ाई के दौरान 0% ब्याज पर शिक्षा ऋण)",
      "description": "आर्थिक रूप से कमजोर वर्ग (EWS) के छात्रों को व्यावसायिक व तकनीकी पाठ्यक्रमों के दौरान और 1 वर्ष बाद तक 100% पूर्ण ब्याज सब्सिडी प्रदान करने वाली भारत सरकार की योजना।",
      "loanAmount": "पढ़ाई के दौरान सरकार द्वारा 100% ब्याज भुगतान",
      "interestRate": "पढ़ाई के दौरान 0% ब्याज (सरकार पूरा ब्याज वहन करती है)",
      "repaymentPeriod": "स्नातक के पश्चात 15 वर्ष तक",
      "whoCanApply": "व्यावसायिक व तकनीकी शिक्षा प्राप्त कर रहे छात्र जिनकी पारिवारिक वार्षिक आय ₹4.50 लाख से कम हो",
      "purpose": "कॉलेज शिक्षण शुल्क, परीक्षा शुल्क, उपकरण, पुस्तकें और छात्रावास शुल्क",
      "benefits": [
        "संपूर्ण पाठ्यक्रम अवधि और 1 वर्ष के मोरेटोरियम तक शून्य (0%) ब्याज देय",
        "आईबीए (IBA) के दिशा-निर्देशों के तहत किसी भी अनुसूचित बैंक से लिए गए ऋण पर लागू",
        "कमजोर आय वर्ग के छात्रों को बिना किसी ब्याज बोझ के उच्च शिक्षा पूरी करने का अवसर"
      ],
      "eligibleCategories": [
        "ईडब्ल्यूएस (EWS)",
        "सभी श्रेणियां"
      ],
      "eligibleBusinessTypes": [
        "व्यावसायिक डिग्री",
        "तकनीकी शिक्षा"
      ],
      "minAge": "17 वर्ष",
      "incomeCap": "पारिवारिक वार्षिक आय ₹4,50,000 से अधिक न हो",
      "requiredDocuments": [
        {
          "docName": "सक्षम प्राधिकारी द्वारा जारी ईडब्ल्यूएस आय प्रमाण पत्र",
          "description": "आय ₹4.5 लाख से कम का प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "छात्र व सह-उधारकर्ता का आधार कार्ड",
          "description": "पहचान प्रमाण",
          "status": "Uploaded"
        },
        {
          "docName": "मान्यता प्राप्त कॉलेज का प्रवेश पत्र व फीस विवरण",
          "description": "प्रवेश प्रमाण",
          "status": "Uploaded"
        }
      ]
    },
    "kn": {
      "name": "ಕೇಂದ್ರ ವಲಯದ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಯೋಜನೆ (CSIS - ವ್ಯಾಸಂಗ ಅವಧಿಯಲ್ಲಿ 0% ಬಡ್ಡಿ)",
      "description": "ಆರ್ಥಿಕವಾಗಿ ಹಿಂದುಳಿದ ವರ್ಗದ (EWS) ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವೃತ್ತಿಪರ ಕೋರ್ಸ್‌ಗಳ ವ್ಯಾಸಂಗ ಮುಗಿಯುವವರೆಗೆ 100% ಪೂರ್ಣ ಬಡ್ಡಿಯನ್ನು ಸರ್ಕಾರವೇ ಪಾವತಿಸುವ ಶಿಕ್ಷಣ ಸಾಲ ಯೋಜನೆ.",
      "loanAmount": "ಅಧ್ಯಯನದ ಸಮಯದಲ್ಲಿ ಸರ್ಕಾರವೇ 100% ಬಡ್ಡಿ ಪಾವತಿ",
      "interestRate": "ವ್ಯಾಸಂಗದ ಸಮಯದಲ್ಲಿ 0% ಬಡ್ಡಿ",
      "repaymentPeriod": "ಪದವಿ ಮುಗಿದ ನಂತರ 15 ವರ್ಷಗಳವರೆಗೆ",
      "whoCanApply": "ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹4.50 ಲಕ್ಷ ಮೀರದ ವೃತ್ತಿಪರ ಕೋರ್ಸ್ ವಿದ್ಯಾರ್ಥಿಗಳು",
      "purpose": "ಕಾಲೇಜು ಬೋಧನಾ ಶುಲ್ಕ, ಪರೀಕ್ಷಾ ಶುಲ್ಕ, ಪುಸ್ತಕಗಳು ಮತ್ತು ಹಾಸ್ಟೆಲ್ ಶುಲ್ಕ",
      "benefits": [
        "ವ್ಯಾಸಂಗದ ಸಂಪೂರ್ಣ ಅವಧಿ ಮತ್ತು 1 ವರ್ಷ ಹೆಚ್ಚುವರಿ ಅವಧಿಯವರೆಗೆ ಶೂನ್ಯ ಬಡ್ಡಿ",
        "ಎಲ್ಲಾ ನಿಗದಿತ ವಾಣಿಜ್ಯ ಬ್ಯಾಂಕುಗಳ ಐಬಿಎ (IBA) ಶಿಕ್ಷಣ ಸಾಲಗಳಿಗೆ ಅನ್ವಯ",
        "ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಾಲದ ಹೊರೆಯಿಲ್ಲದೆ ಶಿಕ್ಷಣ ಪೂರೈಸಲು ನೆರವು"
      ],
      "eligibleCategories": [
        "ಇಡಬ್ಲ್ಯೂಎಸ್ (EWS)",
        "ಎಲ್ಲಾ ವರ್ಗಗಳು"
      ],
      "eligibleBusinessTypes": [
        "ವೃತ್ತಿಪರ ಶಿಕ್ಷಣ",
        "ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ"
      ],
      "minAge": "17 ವರ್ಷಗಳು",
      "incomeCap": "ವಾರ್ಷಿಕ ಆದಾಯ ₹4,50,000 ಮೀರಬಾರದು",
      "requiredDocuments": [
        {
          "docName": "ತಹಶೀಲ್ದಾರ್ ನೀಡಿದ ಇಡಬ್ಲ್ಯೂಎಸ್ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ",
          "description": "ಆದಾಯ ಪುರಾವೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಪೋಷಕರ ಆಧಾರ್ ಕಾರ್ಡ್",
          "description": "ಗುರುತಿನ ಪರಿಶೀಲನೆ",
          "status": "Uploaded"
        },
        {
          "docName": "ಕಾಲೇಜು ಪ್ರವೇಶ ಪತ್ರ ಮತ್ತು ಶುಲ್ಕದ ಬೇಡಿಕೆ ಪಟ್ಟಿ",
          "description": "ಪ್ರವೇಶ ಪುರಾವೆ",
          "status": "Uploaded"
        }
      ]
    },
    "ta": {
      "name": "மத்திய துறை வட்டி மானியத் திட்டம் (CSIS - படிக்கும் காலத்தில் 0% வட்டி கல்விக்கடன்)",
      "description": "பொருளாதாரத்தில் பின்தங்கிய (EWS) மாணவர்களுக்கு தொழில்முறை மற்றும் தொழிற்கல்வி பயிலும் காலம் முழுவதும் 100% முழு வட்டியையும் அரசே ஏற்கும் கல்விக்கடன் திட்டம்.",
      "loanAmount": "படிப்பு காலத்தில் 100% வட்டியை அரசே செலுத்துகிறது",
      "interestRate": "படிக்கும் காலத்தில் 0% வட்டி",
      "repaymentPeriod": "படிப்பு முடிந்த பின் 15 ஆண்டுகள் வரை",
      "whoCanApply": "குடும்ப ஆண்டு வருமானம் ரூ. 4.50 லட்சத்திற்குள் உள்ள தொழிற்கல்வி மாணவர்கள்",
      "purpose": "கல்லூரி கட்டணம், தேர்வுக் கட்டணம், புத்தகங்கள் மற்றும் விடுதி கட்டணம்",
      "benefits": [
        "முழு படிப்பு காலம் மற்றும் 1 ஆண்டு சலுகைக்காலம் வரை வட்டியில்லா கடன்",
        "அனைத்து வணிக வங்கிகளின் IBA கல்விக்கடன்களுக்கும் பொருந்தும்",
        "ஏழை மாணவர்கள் வட்டிக் சுமையின்றி உயர் கல்வி பயில வழிவகுக்கிறது"
      ],
      "eligibleCategories": [
        "பொருளாதாரத்தில் பின்தங்கியோர் (EWS)",
        "அனைத்து பிரிவுகளும்"
      ],
      "eligibleBusinessTypes": [
        "தொழிற்கல்வி",
        "தொழில்நுட்ப கல்வி"
      ],
      "minAge": "17 ஆண்டுகள்",
      "incomeCap": "குடும்ப ஆண்டு வருமானம் ரூ. 4,50,000 க்குள் இருக்க வேண்டும்",
      "requiredDocuments": [
        {
          "docName": "வருவாய்த்துறை வழங்கிய EWS வருமானச் சான்றிதழ்",
          "description": "வருமான சான்று <= ரூ. 4.5 லட்சம்",
          "status": "Uploaded"
        },
        {
          "docName": "மாணவர் மற்றும் பெற்றோர் ஆதார் அட்டை",
          "description": "அடையாள சான்று",
          "status": "Uploaded"
        },
        {
          "docName": "கல்லூரி சேர்க்கை கடிதம் மற்றும் கட்டண பட்டியல்",
          "description": "சேர்க்கை சான்று",
          "status": "Uploaded"
        }
      ]
    },
    "mr": {
      "name": "केंद्रीय क्षेत्र व्याज अनुदान योजना (CSIS - शिक्षणादरम्यान 0% व्याजाने कर्ज)",
      "description": "आर्थिकदृष्ट्या दुर्बल घटकातील (EWS) विद्यार्थ्यांना व्यावसायिक अभ्यासक्रमांच्या संपूर्ण कालावधीत व त्यानंतर 1 वर्ष 100% संपूर्ण व्याज शासन भरणारी शैक्षणिक कर्ज योजना.",
      "loanAmount": "शिक्षणादरम्यान शासनाकडून 100% व्याज भरणा",
      "interestRate": "शिक्षणादरम्यान 0% व्याज (संपूर्ण व्याज सरकार भरणार)",
      "repaymentPeriod": "पदवीनंतर 15 वर्षांपर्यंत",
      "whoCanApply": "व्यावसायिक अभ्यासक्रमाचे विद्यार्थी ज्यांचे कौटुंबिक वार्षिक उत्पन्न ₹4.50 लाखांपेक्षा जास्त नाही",
      "purpose": "महाविद्यालयीन फी, परीक्षा फी, उपकरणे, पुस्तके आणि वसतिगृह खर्च",
      "benefits": [
        "संपूर्ण अभ्यासक्रम कालावधी आणि 1 वर्ष मोरेटोरियम दरम्यान शून्य व्याज",
        "आयबीए (IBA) मार्गदर्शक तत्त्वांतर्गत सर्व बँकांच्या शैक्षणिक कर्जांवर लागू",
        "गरीब विद्यार्थ्यांना व्याजाचा भार न पडता उच्च शिक्षण पूर्ण करण्याची संधी"
      ],
      "eligibleCategories": [
        "ईडब्ल्यूएस (EWS)",
        "सर्व प्रवर्ग"
      ],
      "eligibleBusinessTypes": [
        "व्यावसायिक पदवी",
        "तांत्रिक शिक्षण"
      ],
      "minAge": "17 वर्षे",
      "incomeCap": "कौटुंबिक वार्षिक उत्पन्न ₹4,50,000 पेक्षा जास्त नसावे",
      "requiredDocuments": [
        {
          "docName": "सक्षम अधिकाऱ्याने दिलेले ईडब्ल्यूएस उत्पन्न प्रमाणपत्र",
          "description": "उत्पन्न पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "विद्यार्थी व पालकांचे आधार कार्ड",
          "description": "ओळख पुरावा",
          "status": "Uploaded"
        },
        {
          "docName": "मान्यताप्राप्त महाविद्यालयाचे प्रवेश पत्र व फी पत्र",
          "description": "प्रवेश पुरावा",
          "status": "Uploaded"
        }
      ]
    },
    "bn": {
      "name": "কেন্দ্রীয় ক্ষেত্র সুদ ভর্তুকি প্রকল্প (CSIS - পড়াশোনার সময়ে ০% সুদে শিক্ষা ঋণ)",
      "description": "অর্থনৈতিকভাবে দুর্বল শ্রেণির (EWS) ছাত্রছাত্রীদের পেশাদার ও কারিগরি শিক্ষা চলাকালীন এবং কোর্স শেষের ১ বছর পর্যন্ত ১০০% সম্পূর্ণ সুদ সরকার কর্তৃক পরিশোধের প্রকল্প।",
      "loanAmount": "পড়াশোনার সময়ে সরকার কর্তৃক ১০০% সুদ প্রদান",
      "interestRate": "পড়াশোনার সময়ে ০% সুদ (সম্পূর্ণ সুদ সরকার বহন করে)",
      "repaymentPeriod": "গ্র্যাজুয়েশনের পর ১৫ বছর পর্যন্ত",
      "whoCanApply": "পেশাদার ও কারিগরি কোর্সের শিক্ষার্থী যাদের বার্ষিক পারিবারিক আয় ₹৪.৫০ লাখের বেশি নয়",
      "purpose": "কলেজের টিউশন ফি, পরীক্ষার ফি, বইপত্র ও হোস্টেল খরচ নির্বাহ",
      "benefits": [
        "সম্পূর্ণ কোর্স চলাকালীন এবং কোর্স পরবর্তী ১ বছর পর্যন্ত শূন্য শতাংশ (০%) সুদ",
        "আইবিএ (IBA) নির্দেশিকা অনুযায়ী যেকোনো তফসিলি ব্যাংকের শিক্ষা ঋণের ক্ষেত্রে প্রযোজ্য",
        "সুদের বোঝা ছাড়াই সুবিধাবঞ্চিত শিক্ষার্থীদের উচ্চশিক্ষা সম্পন্ন করার সুযোগ"
      ],
      "eligibleCategories": [
        "ইডব্লিউএস (EWS)",
        "সকল শ্রেণি"
      ],
      "eligibleBusinessTypes": [
        "পেশাদার ডিগ্রি",
        "কারিগরি শিক্ষা"
      ],
      "minAge": "১৭ বছর",
      "incomeCap": "বার্ষিক পারিবারিক আয় ₹৪,৫০,০০০ এর বেশি নয়",
      "requiredDocuments": [
        {
          "docName": "উপযুক্ত কর্তৃপক্ষের দেওয়া ইডব্লিউএস আয়ের শংসাপত্র",
          "description": "আয়ের প্রমাণ <= ₹৪.৫ লাখ",
          "status": "Uploaded"
        },
        {
          "docName": "শিক্ষার্থী ও সহ-আবেদনকারীর আধার কার্ড",
          "description": "পরিচয় প্রমাণ",
          "status": "Uploaded"
        },
        {
          "docName": "অনুমোদিত কলেজের ভর্তি পত্র ও ফি ডিমান্ড স্লিপ",
          "description": "ভর্তির প্রমাণ",
          "status": "Uploaded"
        }
      ]
    }
  }
};

  const SCHEME_ALIASES = {
  "PM-SVANIDHI": "PM-SVANIDHI",
  "PMSVANIDHI": "PM-SVANIDHI",
  "PM-VISHWAKARMA": "PM-VISHWAKARMA",
  "PMVY": "PM-VISHWAKARMA",
  "STAND-UP": "STAND-UP",
  "STANDUP": "STAND-UP",
  "STAND-UP-INDIA": "STAND-UP",
  "SUIS": "STAND-UP",
  "PMEGP-SERVICE": "PMEGP-SERVICE",
  "NHFDC-DSY": "NHFDC-DSY",
  "NHFDC": "NHFDC-DSY",
  "WEAVER-MUDRA": "WEAVER-MUDRA",
  "SAMARTH-TEXTILE": "SAMARTH-TEXTILE",
  "MSME-ZED": "MSME-ZED",
  "PM-VIDYALAXMI": "PM-VIDYALAXMI",
  "DAY-NULM": "DAY-NULM",
  "CSIS": "CSIS",
  "PMFME": "PMFME",
  "PMMY": "PMMY",
  "PMEGP": "PMEGP",
  "CGTMSE": "CGTMSE",
  "KCC": "KCC",
  "AIF": "AIF",
  "SMAM": "SMAM",
  "PMMSY": "PMMSY",
  "AHIDF": "AHIDF",
  "MCY": "MCY"
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

  // Universal Document Name Localizer
  function localizeDocumentName(docName, lang = activeLang) {
    if (!docName) return '';
    if (lang === 'en') return docName;

    const lower = docName.toLowerCase().trim();

    if (lower.includes('aadhaar')) return t('docs.aadhaar_card', docName);
    if (lower.includes('pan card') || lower.includes('pan')) return t('docs.pan_card', docName);
    if (lower.includes('dpr') || lower.includes('project report') || lower.includes('business plan')) return t('docs.business_plan', docName);
    if (lower.includes('bank statement') || lower.includes('passbook')) return t('docs.bank_statement', docName);
    if (lower.includes('address proof') || lower.includes('electricity') || lower.includes('rent')) return t('docs.address_proof', docName);
    if (lower.includes('fssai')) return t('docs.fssai_license', docName);
    if (lower.includes('caste') || lower.includes('community')) return t('docs.caste_certificate', docName);
    if (lower.includes('quotation') || lower.includes('estimate') || lower.includes('machinery')) return t('docs.quotation_estimate', docName);
    if (lower.includes('udid') || lower.includes('disability certificate')) return t('docs.udid_card', docName);
    if (lower.includes('voter')) return t('docs.voter_id', docName);
    if (lower.includes('photo') || lower.includes('passport')) return t('docs.passport_photos', docName);
    if (lower.includes('vendor') || lower.includes('lor') || lower.includes('vending')) return t('docs.vendor_vending_id', docName);
    if (lower.includes('artisan') || lower.includes('vishwakarma')) return t('docs.artisan_card', docName);
    if (lower.includes('land') || lower.includes('pattadar') || lower.includes('ror')) return t('docs.land_record', docName);
    if (lower.includes('training') || lower.includes('edp')) return t('docs.training_certificate', docName);

    // Check direct match in docs dictionary
    const docsDict = (TRANSLATIONS[lang] && TRANSLATIONS[lang].docs) || {};
    for (const [k, v] of Object.entries(docsDict)) {
      if (k.replace(/_/g, ' ') === lower) return v;
    }

    return docName;
  }

  // Universal Benefit Bullet Point Localizer
  function localizeBenefit(bText, lang = activeLang) {
    if (!bText) return '';
    if (lang === 'en') return bText;

    const lower = bText.toLowerCase().trim();

    // Telugu Benefit Translations
    if (lang === 'te') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "రూ. 10 లక్షల వరకు ఎలాంటి తనఖా లేదా ఆస్తి పూచీకత్తు అవసరం లేదు";
      }
      if (lower.includes('subsidy') && (lower.includes('35%') || lower.includes('capital'))) {
        return "ప్రాజెక్ట్ వ్యయంలో 35% వరకు తిరిగి చెల్లించాల్సిన అవసరం లేని ప్రభుత్వ సబ్సిడీ";
      }
      if (lower.includes('interest subvention') || lower.includes('low interest') || lower.includes('5%')) {
        return "రాయితీ వడ్డీ రేటు మరియు ప్రభుత్వ వడ్డీ సబ్సిడీ ప్రయోజనాలు";
      }
      if (lower.includes('repayment') || lower.includes('tenure') || lower.includes('5 years') || lower.includes('7 years')) {
        return "5 నుండి 7 సంవత్సరాల వరకు అనుకూలమైన సులభ వాయిదాల తిరిగి చెల్లింపు గడువు";
      }
      if (lower.includes('handholding') || lower.includes('institutional') || lower.includes('support')) {
        return "ప్రభుత్వ సంస్థల ద్వారా పూర్తి మార్గదర్శకత్వం, శిక్షణ మరియు వ్యాపార మద్దతు";
      }
      if (lower.includes('debit card') || lower.includes('mudra card')) {
        return "రోజువారీ వర్కింగ్ క్యాపిటల్ ఖర్చుల కోసం రూపే ముద్ర డెబిట్ కార్డు జారీ";
      }
      if (lower.includes('priority') || lower.includes('sanction') || lower.includes('simplified')) {
        return "సరళీకృత దరఖాస్తు ప్రక్రియ మరియు బ్యాంకు ద్వారా ప్రాధాన్యతా ఆమోదం";
      }
      if (lower.includes('toolkit') || lower.includes('15,000')) {
        return "ఆధునిక పరికరాల కొనుగోలుకు రూ. 15,000 ఉచిత టూల్‌కిట్ గ్రాంట్";
      }
      if (lower.includes('vendor') || lower.includes('cashback')) {
        return "డిజిటల్ లావాదేవీలపై ఏటా రూ. 1,200 క్యాష్‌బ్యాక్ మరియు 7% వడ్డీ సబ్సిడీ";
      }
    }

    // Hindi Benefit Translations
    if (lang === 'hi') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "₹10 लाख तक किसी भी प्रकार की बंधक या गारंटी की आवश्यकता नहीं";
      }
      if (lower.includes('subsidy') && (lower.includes('35%') || lower.includes('capital'))) {
        return "परियोजना लागत पर 35% तक गैर-वापसी योग्य सरकारी पूंजीगत सब्सिडी";
      }
      if (lower.includes('interest subvention') || lower.includes('low interest') || lower.includes('5%')) {
        return "रियायती ब्याज दर और सरकारी ब्याज सबवेंशन का लाभ";
      }
      if (lower.includes('repayment') || lower.includes('tenure') || lower.includes('5 years') || lower.includes('7 years')) {
        return "5 से 7 वर्ष तक की आसान और लचीली ऋण पुनर्भुगतान अवधि";
      }
      if (lower.includes('handholding') || lower.includes('institutional') || lower.includes('support')) {
        return "सरकारी संस्थाओं द्वारा पूर्ण मार्गदर्शन, तकनीकी प्रशिक्षण और व्यावसायिक सहायता";
      }
      if (lower.includes('debit card') || lower.includes('mudra card')) {
        return "दैनिक कार्यशील पूंजी निकासी के लिए रुपे मुद्रा डेबिट कार्ड सुविधा";
      }
      if (lower.includes('priority') || lower.includes('sanction') || lower.includes('simplified')) {
        return "सरल आवेदन प्रक्रिया और बैंकों द्वारा प्राथमिकता स्वीकृति";
      }
      if (lower.includes('toolkit') || lower.includes('15,000')) {
        return "आधुनिक औजारों की खरीद के लिए ₹15,000 का निःशुल्क टूलकिट अनुदान";
      }
    }

    // Kannada Benefit Translations
    if (lang === 'kn') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "₹10 ಲಕ್ಷದವರೆಗೆ ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನ ಅಥವಾ ಭದ್ರತೆ ಅಗತ್ಯವಿಲ್ಲ";
      }
      if (lower.includes('subsidy')) {
        return "ಯೋಜನಾ ವೆಚ್ಚದ ಮೇಲೆ 35% ವರೆಗೆ ಸರ್ಕಾರಿ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ";
      }
      if (lower.includes('interest') || lower.includes('subvention')) {
        return "ಕಡಿಮೆ ಬಡ್ಡಿದರ ಮತ್ತು ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಸೌಲಭ್ಯ";
      }
      if (lower.includes('repayment') || lower.includes('tenure')) {
        return "5 ರಿಂದ 7 ವರ್ಷಗಳ ಸುಲಭ ಮರುಪಾವತಿ ಅವಧಿ";
      }
      if (lower.includes('handholding') || lower.includes('support')) {
        return "ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳಿಂದ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ತರಬೇತಿ ಬೆಂಬಲ";
      }
    }

    // Tamil Benefit Translations
    if (lang === 'ta') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "ரூ. 10 லட்சம் வரை எந்தவித சொத்து அடமானமும் தேவையில்லை";
      }
      if (lower.includes('subsidy')) {
        return "திட்டச் செலவில் 35% வரை அரசு மூலதன மானியம்";
      }
      if (lower.includes('interest') || lower.includes('subvention')) {
        return "குறைந்த வட்டி விகிதம் மற்றும் அரசு வட்டி மானிய நன்மைகள்";
      }
      if (lower.includes('repayment') || lower.includes('tenure')) {
        return "5 முதல் 7 ஆண்டுகள் வரை எளிய திருப்பிச் செலுத்தும் காலம்";
      }
      if (lower.includes('handholding') || lower.includes('support')) {
        return "அரசு நிறுவனங்கள் மூலம் முழுமையான வழிகாட்டுதல் மற்றும் பயிற்சி";
      }
    }

    // Marathi Benefit Translations
    if (lang === 'mr') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "₹10 लाखांपर्यंत कोणत्याही तारणाची किंवा हमीची गरज नाही";
      }
      if (lower.includes('subsidy')) {
        return "प्रकल्प खर्चावर 35% पर्यंत शासकीय भांडवली अनुदान";
      }
      if (lower.includes('interest') || lower.includes('subvention')) {
        return "सवलतीचा व्याजदर आणि शासकीय व्याज अनुदान";
      }
      if (lower.includes('repayment') || lower.includes('tenure')) {
        return "5 ते 7 वर्षांपर्यंत सुलभ परतफेडीची मुदत";
      }
      if (lower.includes('handholding') || lower.includes('support')) {
        return "शासकीय संस्थांकडून संपूर्ण मार्गदर्शन आणि प्रशिक्षण सहाय्य";
      }
    }

    // Bengali Benefit Translations
    if (lang === 'bn') {
      if (lower.includes('collateral-free') || lower.includes('zero collateral')) {
        return "₹১০ লাখ পর্যন্ত কোনো ধরনের সম্পত্তি বন্ধক বা গ্যারান্টির প্রয়োজন নেই";
      }
      if (lower.includes('subsidy')) {
        return "প্রকল্প ব্যয়ের উপর ৩৫% পর্যন্ত সরকারি মূলধন ভর্তুকি";
      }
      if (lower.includes('interest') || lower.includes('subvention')) {
        return "স্বল্প সুদের হার এবং সরকারি সুদ ভর্তুকির সুবিধা";
      }
      if (lower.includes('repayment') || lower.includes('tenure')) {
        return "৫ থেকে ৭ বছর পর্যন্ত সহজ পরিশোধের মেয়াদ";
      }
      if (lower.includes('handholding') || lower.includes('support')) {
        return "সরকারি প্রতিষ্ঠান দ্বারা সম্পূর্ণ প্রশিক্ষণ এবং ব্যবসায়িক সহায়তা";
      }
    }

    return bText;
  }

  function localizeBenefits(bArr, lang = activeLang) {
    if (!bArr || !Array.isArray(bArr)) return [];
    if (lang === 'en') return bArr;
    return bArr.map(b => localizeBenefit(b, lang));
  }

  // Universal Partner Name Localizer
  function localizePartnerName(pName, lang = activeLang) {
    if (!pName) return '';
    if (lang === 'en') return pName;

    const lower = pName.toLowerCase().trim();

    if (lower.includes('andhra') || lower.includes('grameena')) {
      return t('partner_details.andhra_grameena_bank', pName);
    }
    if (lower.includes('kvk') || lower.includes('krishi vigyan')) {
      return t('partner_details.kvk_center', pName);
    }
    if (lower.includes('state bank') || lower.includes('sbi')) {
      return t('partner_details.sbi_msme', pName);
    }
    if (lower.includes('csc') || lower.includes('digital seva') || lower.includes('common service')) {
      return t('partner_details.csc_center', pName);
    }
    if (lower.includes('dic') || lower.includes('district industries')) {
      return t('partner_details.dic_center', pName);
    }

    return pName;
  }

  // Universal Partner Type Localizer
  function localizePartnerType(type, lang = activeLang) {
    if (!type) return '';
    if (lang === 'en') return type;

    const clean = type.toString().toLowerCase().trim();
    if (clean === 'bank') return t('partner_types.bank', 'Bank');
    if (clean === 'kvk') return t('partner_types.kvk', 'KVK');
    if (clean === 'csc') return t('partner_types.csc', 'CSC');
    if (clean === 'dic') return t('partner_types.dic', 'DIC');

    return type;
  }

  // Find rich localized scheme record
  function getLocalizedSchemeDetails(scheme, lang = activeLang) {
    if (!scheme) return null;
    if (lang === 'en') return scheme;

    const rawCode = (scheme.shortCode || scheme.schemeId || scheme.schemeName || '').toUpperCase().trim();
    const resolvedKey = SCHEME_ALIASES[rawCode] || rawCode;

    let catalogEntry = null;
    if (scheme.vernacularDetails && scheme.vernacularDetails[lang]) {
      catalogEntry = scheme.vernacularDetails[lang];
    } else if (VERNACULAR_SCHEME_CATALOG[resolvedKey]) {
      catalogEntry = VERNACULAR_SCHEME_CATALOG[resolvedKey][lang];
    } else {
      for (const [k, obj] of Object.entries(VERNACULAR_SCHEME_CATALOG)) {
        if (rawCode.includes(k) || k.includes(rawCode)) {
          catalogEntry = obj[lang];
          break;
        }
      }
    }

    // Localize benefits list
    let localizedBenefits = [];
    if (catalogEntry && catalogEntry.benefits && catalogEntry.benefits.length) {
      localizedBenefits = catalogEntry.benefits;
    } else if (scheme.benefits && scheme.benefits.length) {
      localizedBenefits = localizeBenefits(scheme.benefits, lang);
    } else {
      localizedBenefits = localizeBenefits([
        scheme.tagline || '100% Collateral-free credit support',
        'Direct subsidy & interest subvention benefits',
        'Simplified application and priority banking sanction'
      ], lang);
    }

    // Localize required documents
    let localizedDocs = [];
    if (catalogEntry && catalogEntry.requiredDocuments && catalogEntry.requiredDocuments.length) {
      localizedDocs = catalogEntry.requiredDocuments;
    } else if (scheme.requiredDocuments && scheme.requiredDocuments.length) {
      localizedDocs = scheme.requiredDocuments.map(d => ({
        docName: localizeDocumentName(d.docName || d, lang),
        description: d.description || '',
        status: d.status || 'Pending'
      }));
    } else {
      localizedDocs = [
        { docName: localizeDocumentName('Aadhaar Card', lang), description: '', status: 'Uploaded' },
        { docName: localizeDocumentName('PAN Card', lang), description: '', status: 'Uploaded' },
        { docName: localizeDocumentName('Business Plan', lang), description: '', status: 'Pending' },
        { docName: localizeDocumentName('Bank Statement', lang), description: '', status: 'Uploaded' }
      ];
    }

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
      benefits: localizedBenefits,
      eligibleCategories: (catalogEntry && catalogEntry.eligibleCategories) || scheme.eligibleCategories,
      eligibleBusinessTypes: (catalogEntry && catalogEntry.eligibleBusinessTypes) || scheme.eligibleBusinessTypes,
      minAge: (catalogEntry && catalogEntry.minAge) || (scheme.minAge ? `${scheme.minAge} ${t('common.years', 'Years')}` : `18 ${t('common.years', 'Years')}`),
      incomeCap: (catalogEntry && catalogEntry.incomeCap) || (scheme.maxIncome ? localizeLoanAmount(`Up to ₹${Number(scheme.maxIncome).toLocaleString('en-IN')}`, lang) : t('common.no_restrictive_ceiling', 'No restrictive ceiling')),
      requiredDocuments: localizedDocs
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
    localizeDocumentName,
    localizeBenefit,
    localizeBenefits,
    localizePartnerName,
    localizePartnerType,
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
