/**
 * Udyam Setu - Client-Side Autonomous RAG Intelligence Engine
 * 100% Identical Parity with Backend RAG Service for Mobile Standalone and Offline Operation.
 */
(function(window) {
/**
 * Comprehensive Indian Government Schemes Catalog for Udyam Setu
 * Ground Truth Data indexed from myScheme.gov.in, data.gov.in (OGD), and Ministry Portals.
 * Fully structured across the 8 Core Enterprise Types.
 * Complete 100% vernacular data for all 7 languages (en, hi, te, kn, ta, mr, bn).
 */

const COMPREHENSIVE_GOVT_SCHEMES = [
  {
    "schemeName": "PM Formalisation of Micro food processing Enterprises (PMFME)",
    "shortCode": "PMFME",
    "schemeId": "PMFME",
    "category": "Central Government",
    "targetSector": "Food Processing / Culinary",
    "primaryBusinessType": "Food Business",
    "tagline": "35% credit-linked capital subsidy up to ₹10 Lakhs for micro food units, bakeries & tiffin centers",
    "vernacularNames": {
      "en": "PM Formalisation of Micro food processing Enterprises (PMFME)",
      "hi": "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME - 35% सब्सिडी)",
      "te": "ప్రధాన మంత్రి సూక్ష్మ ఆహార శుద్ధి పరిశ్రమల పథకం (PMFME - 35% సబ్సిడీ)",
      "kn": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣಾ ಉದ್ಯಮಗಳ ಯೋಜನೆ (PMFME - 35% ಸಬ್ಸಿಡಿ)",
      "ta": "பிரதான் மந்திரி நுண் உணவு பதப்படுத்தும் நிறுவனங்கள் திட்டம் (PMFME - 35% மானியம்)",
      "mr": "पंतप्रधान सूक्ष्म अन्न प्रक्रिया उद्योग योजना (PMFME - 35% अनुदान)",
      "bn": "প্রধানমন্ত্রী ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ এন্টারপ্রাইজ যোজনা (PMFME - ৩৫% ভর্তুকি)"
    },
    "description": "Centrally sponsored flagship scheme by Ministry of Food Processing Industries (MoFPI) providing 35% capital subsidy up to ₹10 Lakhs for modernizing micro food processing units, bakeries, snacks, spice grinding, pickles, catering kitchens, and tiffin businesses.",
    "maxGrantLoanAmount": 1000000,
    "loanAmountFormatted": "Project Cost up to ₹10,00,000 (35% Subsidy)",
    "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
    "interestRateNumeric": 9,
    "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Food Business"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 35,
    "whoCanApply": "Individual micro food entrepreneurs, FPOs, Self Help Groups (SHGs), and producer cooperatives",
    "purpose": "Purchasing food processing machinery, commercial ovens, kitchen automation, packaging, and FSSAI hygiene setup",
    "benefits": [
      "35% non-repayable capital subsidy credited directly as margin money (up to ₹10 Lakhs)",
      "Beneficiary own contribution is only 10% of the project cost; 90% financed via bank loan",
      "Free technical training, FSSAI licensing assistance, and marketing/branding support under ODOP (One District One Product)"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity & Tax KYC",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Food business equipment cost and revenue forecast",
        "isMandatory": true
      },
      {
        "docName": "Bank Statement (Last 6 Months)",
        "description": "Financial track record",
        "isMandatory": true
      },
      {
        "docName": "FSSAI Registration / Application Proof",
        "description": "Food safety compliance proof",
        "isMandatory": false
      }
    ],
    "applicationUrl": "https://pmfme.mofpi.gov.in",
    "tags": [
      "Food Business",
      "35% High Subsidy",
      "FSSAI Support",
      "Top Choice"
    ],
    "translations": {
      "te": {
        "tagline": "సూక్ష్మ ఆహార యూనిట్లు, బేకరీలు & టిఫిన్ సెంటర్లకు ₹10 లక్షల వరకు 35% క్రెడిట్-లింక్డ్ క్యాపిటల్ సబ్సిడీ",
        "description": "ఆహార శుద్ధి పరిశ్రమల మంత్రిత్వ శాఖ (MoFPI) ద్వారా సూక్ష్మ ఆహార శుద్ధి యూనిట్లు, బేకరీలు, స్నాక్స్, మసాలా గ్రైండింగ్, ఊరగాయలు, క్యాటరింగ్ కిచెన్లు మరియు టిఫిన్ వ్యాపారాలను ఆధునీకరించడానికి ₹10 లక్షల వరకు 35% క్యాపిటల్ సబ్సిడీ అందించే కేంద్ర ప్రాయోజిత ప్రధాన పథకం.",
        "benefits": [
          "35% తిరిగి చెల్లించాల్సిన అవసరం లేని క్యాపిటల్ సబ్సిడీ మార్జిన్ మనీగా నేరుగా జమ (₹10 లక్షల వరకు)",
          "లబ్ధిదారు స్వంత సహకారం కేవలం 10% మాత్రమే; 90% బ్యాంకు రుణంతో ఫైనాన్స్",
          "ODOP కింద ఉచిత సాంకేతిక శిక్షణ, FSSAI లైసెన్సింగ్ సహాయం మరియు మార్కెటింగ్/బ్రాండింగ్ మద్దతు"
        ],
        "whoCanApply": "వ్యక్తిగత సూక్ష్మ ఆహార పారిశ్రామికవేత్తలు, FPOలు, స్వయం సహాయక సంఘాలు (SHGలు) మరియు ఉత్పత్తిదారుల సహకార సంఘాలు",
        "purpose": "ఆహార శుద్ధి యంత్రాలు, కమర్షియల్ ఓవెన్లు, కిచెన్ ఆటోమేషన్, ప్యాకేజింగ్ మరియు FSSAI పరిశుభ్రత సెటప్ కొనుగోలు",
        "loanAmountFormatted": "ప్రాజెక్ట్ వ్యయం ₹10,00,000 వరకు (35% సబ్సిడీ)",
        "interestRate": "సాధారణ బ్యాంకు రుణ రేటు (8.5% - 10.5%)",
        "repaymentPeriod": "7 సంవత్సరాల వరకు (మారటోరియం 6 - 12 నెలలు)",
        "requiredDocuments": [
          {
            "docName": "ఆధార్ కార్డ్ & పాన్ కార్డ్",
            "description": "గుర్తింపు & పన్ను KYC"
          },
          {
            "docName": "వివరణాత్మక ప్రాజెక్ట్ నివేదిక (DPR)",
            "description": "ఆహార వ్యాపార పరికరాల వ్యయం మరియు ఆదాయ అంచనా"
          },
          {
            "docName": "బ్యాంకు స్టేట్‌మెంట్ (గత 6 నెలలు)",
            "description": "ఆర్థిక రికార్డు"
          },
          {
            "docName": "FSSAI నమోదు / దరఖాస్తు రుజువు",
            "description": "ఆహార భద్రత నిబద్ధత రుజువు"
          }
        ]
      },
      "hi": {
        "tagline": "सूक्ष्म खाद्य इकाइयों, बेकरी और टिफिन केंद्रों के लिए ₹10 लाख तक 35% क्रेडिट-लिंक्ड पूंजी सब्सिडी",
        "description": "खाद्य प्रसंस्करण उद्योग मंत्रालय (MoFPI) द्वारा सूक्ष्म खाद्य प्रसंस्करण इकाइयों, बेकरी, स्नैक्स, मसाला पिसाई, अचार, खानपान रसोई और टिफिन व्यवसायों के आधुनिकीकरण के लिए ₹10 लाख तक 35% पूंजी सब्सिडी देने वाली केंद्र प्रायोजित प्रमुख योजना।",
        "benefits": [
          "35% गैर-वापसी योग्य पूंजी सब्सिडी सीधे मार्जिन मनी के रूप में जमा (₹10 लाख तक)",
          "लाभार्थी का स्वयं का योगदान केवल 10%; 90% बैंक ऋण से वित्त पोषित",
          "ODOP के तहत निःशुल्क तकनीकी प्रशिक्षण, FSSAI लाइसेंसिंग सहायता और विपणन/ब्रांडिंग समर्थन"
        ],
        "whoCanApply": "व्यक्तिगत सूक्ष्म खाद्य उद्यमी, FPO, स्वयं सहायता समूह (SHG) और उत्पादक सहकारी समितियाँ",
        "purpose": "खाद्य प्रसंस्करण मशीनरी, वाणिज्यिक ओवन, रसोई स्वचालन, पैकेजिंग और FSSAI स्वच्छता सेटअप की खरीद",
        "loanAmountFormatted": "परियोजना लागत ₹10,00,000 तक (35% सब्सिडी)",
        "interestRate": "सामान्य बैंक ऋण दर (8.5% - 10.5%)",
        "repaymentPeriod": "7 वर्ष तक (मोरेटोरियम 6 - 12 माह)",
        "requiredDocuments": [
          {
            "docName": "आधार कार्ड और पैन कार्ड",
            "description": "पहचान और कर KYC"
          },
          {
            "docName": "विस्तृत परियोजना रिपोर्ट (DPR)",
            "description": "खाद्य व्यवसाय उपकरण लागत और राजस्व अनुमान"
          },
          {
            "docName": "बैंक स्टेटमेंट (पिछले 6 माह)",
            "description": "वित्तीय रिकॉर्ड"
          },
          {
            "docName": "FSSAI पंजीकरण / आवेदन प्रमाण",
            "description": "खाद्य सुरक्षा अनुपालन प्रमाण"
          }
        ]
      },
      "kn": {
        "tagline": "ಸೂಕ್ಷ್ಮ ಆಹಾರ ಘಟಕಗಳು, ಬೇಕರಿ ಮತ್ತು ಟಿಫಿನ್ ಕೇಂದ್ರಗಳಿಗೆ ₹10 ಲಕ್ಷದವರೆಗೆ 35% ಸಬ್ಸಿಡಿ",
        "description": "ಆಹಾರ ಸಂಸ್ಕರಣ ಉದ್ಯಮ ಸಚಿವಾಲಯ (MoFPI) ಮೂಲಕ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಸಂಸ್ಕರಣ ಘಟಕಗಳು, ಬೇಕರಿ, ತಿಂಡಿ ಅಂಗಡಿಗಳು, ಮಸಾಲೆ ಅರೆಯುವ ಘಟಕಗಳು ಮತ್ತು ಟಿಫಿನ್ ವ್ಯವಹಾರಗಳನ್ನು ಆಧುನೀಕರಿಸಲು ₹10 ಲಕ್ಷದವರೆಗೆ 35% ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ ನೀಡುವ ಕೇಂದ್ರ ಪ್ರಾಯೋಜಿತ ಪ್ರಮುಖ ಯೋಜನೆ.",
        "benefits": [
          "35% ಮರುಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲದ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ ನೇರವಾಗಿ ಮಾರ್ಜಿನ್ ಮನಿಯಾಗಿ (₹10 ಲಕ್ಷದವರೆಗೆ)",
          "ಫಲಾನುಭವಿ ಸ್ವಂತ ಕೊಡುಗೆ ಕೇವಲ 10%; 90% ಬ್ಯಾಂಕ್ ಸಾಲದ ಮೂಲಕ ಹಣಕಾಸು",
          "ODOP ಅಡಿಯಲ್ಲಿ ಉಚಿತ ತಾಂತ್ರಿಕ ತರಬೇತಿ, FSSAI ಪರವಾನಗಿ ಸಹಾಯ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್/ಬ್ರಾಂಡಿಂಗ್ ಬೆಂಬಲ"
        ],
        "whoCanApply": "ವೈಯಕ್ತಿಕ ಸೂಕ್ಷ್ಮ ಆಹಾರ ಉದ್ಯಮಿಗಳು, FPO ಗಳು, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು (SHG) ಮತ್ತು ಉತ್ಪಾದಕ ಸಹಕಾರಿ ಸಂಘಗಳು",
        "purpose": "ಆಹಾರ ಸಂಸ್ಕರಣ ಯಂತ್ರಗಳು, ವಾಣಿಜ್ಯ ಓವನ್‌ಗಳು, ರಸೋಯಿ ಯಾಂತ್ರೀಕರಣ, ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು FSSAI ನೈರ್ಮಲ್ಯ ಸೆಟಪ್ ಖರೀದಿ",
        "loanAmountFormatted": "ಯೋಜನೆ ವೆಚ್ಚ ₹10,00,000 ವರೆಗೆ (35% ಸಬ್ಸಿಡಿ)",
        "interestRate": "ಸಾಮಾನ್ಯ ಬ್ಯಾಂಕ್ ಸಾಲದ ದರ (8.5% - 10.5%)",
        "repaymentPeriod": "7 ವರ್ಷಗಳ ವರೆಗೆ (ಮೊರಾಟೋರಿಯಂ 6 - 12 ತಿಂಗಳು)",
        "requiredDocuments": [
          {
            "docName": "ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್",
            "description": "ಗುರುತು & ತೆರಿಗೆ KYC"
          },
          {
            "docName": "ವಿವರವಾದ ಯೋಜನೆ ವರದಿ (DPR)",
            "description": "ಆಹಾರ ವ್ಯವಹಾರ ಉಪಕರಣ ವೆಚ್ಚ ಮತ್ತು ಆದಾಯ ಅಂದಾಜು"
          },
          {
            "docName": "ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (ಕಳೆದ 6 ತಿಂಗಳು)",
            "description": "ಆರ್ಥಿಕ ದಾಖಲೆ"
          },
          {
            "docName": "FSSAI ನೋಂದಣಿ / ಅರ್ಜಿ ಪುರಾವೆ",
            "description": "ಆಹಾರ ಸುರಕ್ಷತೆ ಅನುಸರಣೆ ಪುರಾವೆ"
          }
        ]
      },
      "ta": {
        "tagline": "நுண்ணிய உணவு பதப்படுத்தல் அலகுகள், பேக்கரி & டிபன் மையங்களுக்கு ₹10 லட்சம் வரை 35% மானியம்",
        "description": "உணவு பதப்படுத்தல் தொழில்கள் அமைச்சகம் (MoFPI) மூலம் நுண்ணிய உணவு பதப்படுத்தல் அலகுகள், பேக்கரிகள், சிறுதீனி கடைகள், மசாலா அரைக்கும் மில்கள் மற்றும் டிபன் வணிகங்களை நவீனமயமாக்க ₹10 லட்சம் வரை 35% மூலதன மானியம் வழங்கும் மத்திய அரசு திட்டம்.",
        "benefits": [
          "35% திரும்பச் செலுத்த தேவையில்லாத மூலதன மானியம் நேரடியாக மார்ஜின் மணியாக (₹10 லட்சம் வரை)",
          "பயனாளி சொந்த பங்களிப்பு வெறும் 10%; 90% வங்கிக் கடன் மூலம் நிதியுதவி",
          "ODOP கீழ் இலவச தொழில்நுட்ப பயிற்சி, FSSAI உரிமம் உதவி மற்றும் சந்தைப்படுத்தல்/பிராண்டிங் ஆதரவு"
        ],
        "whoCanApply": "தனிப்பட்ட நுண்ணிய உணவு தொழில்முனைவோர், FPO கள், சுயஉதவிக் குழுக்கள் (SHG) மற்றும் உற்பத்தியாளர் கூட்டுறவு சங்கங்கள்",
        "purpose": "உணவு பதப்படுத்தல் இயந்திரங்கள், வணிக அடுப்புகள், சமையலறை தானியங்கி, பேக்கேஜிங் மற்றும் FSSAI சுகாதார அமைப்பு கொள்முதல்",
        "loanAmountFormatted": "திட்ட செலவு ₹10,00,000 வரை (35% மானியம்)",
        "interestRate": "வழக்கமான வங்கி கடன் வட்டி விகிதம் (8.5% - 10.5%)",
        "repaymentPeriod": "7 ஆண்டுகள் வரை (தளர்வு காலம் 6 - 12 மாதங்கள்)",
        "requiredDocuments": [
          {
            "docName": "ஆதார் அட்டை & பான் அட்டை",
            "description": "அடையாளம் & வரி KYC"
          },
          {
            "docName": "விரிவான திட்ட அறிக்கை (DPR)",
            "description": "உணவு வணிக உபகரண செலவு மற்றும் வருவாய் மதிப்பீடு"
          },
          {
            "docName": "வங்கி அறிக்கை (கடந்த 6 மாதங்கள்)",
            "description": "நிதி பதிவு"
          },
          {
            "docName": "FSSAI பதிவு / விண்ணப்ப சான்று",
            "description": "உணவு பாதுகாப்பு இணக்கம் சான்று"
          }
        ]
      },
      "mr": {
        "tagline": "सूक्ष्म अन्न उत्पादन युनिट्स, बेकरी आणि टिफिन केंद्रांसाठी ₹10 लाखांपर्यंत 35% अनुदान",
        "description": "अन्न प्रक्रिया उद्योग मंत्रालय (MoFPI) द्वारे सूक्ष्म अन्न प्रक्रिया युनिट्स, बेकरी, स्नॅक्स, मसाला दळणाचे युनिट, लोणचे, केटरिंग किचन आणि टिफिन व्यवसायांच्या आधुनिकीकरणासाठी ₹10 लाखांपर्यंत 35% भांडवली अनुदान देणारी केंद्र पुरस्कृत प्रमुख योजना.",
        "benefits": [
          "35% परतफेड न करावी लागणारी भांडवली सबसिडी थेट मार्जिन मनी म्हणून जमा (₹10 लाखांपर्यंत)",
          "लाभार्थीचे स्वतःचे योगदान फक्त 10%; 90% बँक कर्जातून वित्तपुरवठा",
          "ODOP अंतर्गत मोफत तांत्रिक प्रशिक्षण, FSSAI परवाना सहाय्य आणि विपणन/ब्रँडिंग समर्थन"
        ],
        "whoCanApply": "वैयक्तिक सूक्ष्म अन्न उद्योजक, FPO, बचत गट (SHG) आणि उत्पादक सहकारी संस्था",
        "purpose": "अन्न प्रक्रिया यंत्रसामग्री, व्यावसायिक ओव्हन, स्वयंपाकघर ऑटोमेशन, पॅकेजिंग आणि FSSAI स्वच्छता सेटअप खरेदी",
        "loanAmountFormatted": "प्रकल्प खर्च ₹10,00,000 पर्यंत (35% अनुदान)",
        "interestRate": "सामान्य बँक कर्ज दर (8.5% - 10.5%)",
        "repaymentPeriod": "7 वर्षांपर्यंत (स्थगन 6 - 12 महिने)",
        "requiredDocuments": [
          {
            "docName": "आधार कार्ड आणि पॅन कार्ड",
            "description": "ओळख आणि कर KYC"
          },
          {
            "docName": "सविस्तर प्रकल्प अहवाल (DPR)",
            "description": "अन्न व्यवसाय उपकरण खर्च आणि उत्पन्न अंदाज"
          },
          {
            "docName": "बँक स्टेटमेंट (मागील 6 महिने)",
            "description": "आर्थिक नोंदी"
          },
          {
            "docName": "FSSAI नोंदणी / अर्जाचा पुरावा",
            "description": "अन्न सुरक्षा अनुपालन पुरावा"
          }
        ]
      },
      "bn": {
        "tagline": "ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ ইউনিট, বেকারি ও টিফিন সেন্টারের জন্য ₹10 লাখ পর্যন্ত 35% ভর্তুকি",
        "description": "খাদ্য প্রক্রিয়াকরণ শিল্প মন্ত্রণালয় (MoFPI) এর মাধ্যমে ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ ইউনিট, বেকারি, স্ন্যাকস, মশলা মিল, আচার, ক্যাটারিং কিচেন ও টিফিন ব্যবসা আধুনিক করতে ₹10 লাখ পর্যন্ত 35% মূলধন ভর্তুকি প্রদানকারী কেন্দ্রীয় সরকারের প্রধান প্রকল্প।",
        "benefits": [
          "35% অ-ফেরতযোগ্য মূলধন ভর্তুকি সরাসরি মার্জিন মানি হিসেবে জমা (₹10 লাখ পর্যন্ত)",
          "সুবিধাভোগীর নিজস্ব অবদান মাত্র 10%; 90% ব্যাংক ঋণ দ্বারা অর্থায়ন",
          "ODOP এর অধীনে বিনামূল্যে প্রযুক্তিগত প্রশিক্ষণ, FSSAI লাইসেন্সিং সহায়তা এবং বিপণন/ব্র্যান্ডিং সহায়তা"
        ],
        "whoCanApply": "ব্যক্তিগত ক্ষুদ্র খাদ্য উদ্যোক্তা, FPO, স্বনির্ভর গোষ্ঠী (SHG) এবং উৎপাদনকারী সমবায় সংস্থা",
        "purpose": "খাদ্য প্রক্রিয়াকরণ যন্ত্রপাতি, বাণিজ্যিক ওভেন, রান্নাঘর স্বয়ংক্রিয়করণ, প্যাকেজিং এবং FSSAI স্বাস্থ্যবিধি সেটআপ ক্রয়",
        "loanAmountFormatted": "প্রকল্প ব্যয় ₹10,00,000 পর্যন্ত (35% ভর্তুকি)",
        "interestRate": "সাধারণ ব্যাংক ঋণ হার (8.5% - 10.5%)",
        "repaymentPeriod": "7 বছর পর্যন্ত (মোরেটোরিয়াম 6 - 12 মাস)",
        "requiredDocuments": [
          {
            "docName": "আধার কার্ড ও প্যান কার্ড",
            "description": "পরিচয় ও কর KYC"
          },
          {
            "docName": "বিস্তারিত প্রকল্প প্রতিবেদন (DPR)",
            "description": "খাদ্য ব্যবসার সরঞ্জাম খরচ ও রাজস্ব পূর্বাভাস"
          },
          {
            "docName": "ব্যাংক স্টেটমেন্ট (গত 6 মাস)",
            "description": "আর্থিক রেকর্ড"
          },
          {
            "docName": "FSSAI নিবন্ধন / আবেদনের প্রমাণ",
            "description": "খাদ্য নিরাপত্তা সম্মতির প্রমাণ"
          }
        ]
      }
    },
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Pradhan Mantri Mudra Yojana (PMMY)",
    "shortCode": "PMMY",
    "schemeId": "PMMY",
    "category": "Central Government",
    "targetSector": "MSME / Retail & Micro Business",
    "primaryBusinessType": "Retail / Kirana Shop",
    "tagline": "100% collateral-free loans up to ₹10 Lakhs across Shishu, Kishore & Tarun tiers",
    "vernacularNames": {
      "en": "Pradhan Mantri Mudra Yojana (PMMY)",
      "hi": "प्रधानमंत्री मुद्रा योजना (PMMY - ₹10 लाख तक बिना गारंटी लोन)",
      "te": "ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర వ్యాపార రుణం - రూ. 10 లక్షలు)",
      "kn": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ)",
      "ta": "பிரதான் மந்திரி முத்ரா திட்டம் (ரூ. 10 லட்சம் வரை பிணையில்லா கடன்)",
      "mr": "प्रधानमंत्री मुद्रा योजना (PMMY - ₹10 लाखांपर्यंत विनातारण कर्ज)",
      "bn": "প্রধানমন্ত্রী মুদ্রা যোজনা (PMMY - ১০ লাখ টাকা পর্যন্ত জামানতমুক্ত ঋণ)"
    },
    "description": "Provides non-farm, non-corporate micro enterprises, kirana stores, grocery shops, food stalls, repair workshops, and tailors with 100% collateral-free loans across Shishu (up to ₹50,000), Kishore (₹50k - ₹5L), and Tarun (₹5L - ₹10L).",
    "maxGrantLoanAmount": 1000000,
    "loanAmountFormatted": "Up to ₹10,00,000 (No Collateral)",
    "interestRate": "8.5% - 11.5% p.a.",
    "interestRateNumeric": 9.5,
    "repaymentPeriod": "Up to 5 Years",
    "repaymentPeriodYears": 5,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
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
      "Textile & Garments",
      "Street Vending"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 0,
    "whoCanApply": "Shopkeepers, grocery store owners, fruit/vegetable sellers, tiffin centers, tailors, service technicians",
    "purpose": "Purchasing retail inventory stock, grocery display racks, commercial refrigerator, toolkits, working capital",
    "benefits": [
      "No mortgage or security collateral required up to ₹10 Lakhs",
      "Three flexible tiers: Shishu (up to ₹50,000), Kishore (₹50,000 - ₹5 Lakhs), Tarun (₹5 - ₹10 Lakhs)",
      "Mudra Debit Card issued for seamless daily working capital withdrawals with zero pre-closure penalty"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Proof of Business Location",
        "description": "Shop rental agreement or electricity bill",
        "isMandatory": true
      },
      {
        "docName": "Quotation / Machinery Estimate",
        "description": "Cost estimation for shop items or inventory",
        "isMandatory": false
      }
    ],
    "applicationUrl": "https://www.mudra.org.in",
    "tags": [
      "Collateral-Free",
      "Zero Paperwork",
      "Quick Disbursal",
      "Shishu Loan"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Prime Minister's Employment Generation Programme (PMEGP - Agro & Food Processing)",
    "shortCode": "PMEGP",
    "schemeId": "PMEGP",
    "category": "Central Government",
    "targetSector": "MSME / Agro-Food & Manufacturing",
    "primaryBusinessType": "Food Business",
    "tagline": "Up to 35% non-repayable government cash grant for food processing & manufacturing units",
    "vernacularNames": {
      "en": "Prime Minister's Employment Generation Programme (PMEGP - Manufacturing & Agro)",
      "hi": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP - विनिर्माण व खाद्य 35% सब्सिडी)",
      "te": "ప్రధాన మంత్రి ఉపాధి కల్పన కార్యక్రమం (PMEGP - 35% భారీ సబ్సిడీ)",
      "kn": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉದ್ಯೋಗ ಸೃಷ್ಟಿ ಕಾರ್ಯಕ್ರಮ (PMEGP - 35% ಸಬ್ಸಿಡಿ)",
      "ta": "பிரதமரின் வேலைவாய்ப்பு உருவாக்கும் திட்டம் (PMEGP - 35% மூலதன மானியம்)",
      "mr": "पंतप्रधान रोजगार निर्मिती कार्यक्रम (PMEGP - 35% भांडवली अनुदान)",
      "bn": "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি প্রকল্প (PMEGP - ৩৫% পর্যন্ত সরকারি ভর্তুকি)"
    },
    "description": "Credit-linked capital subsidy initiative by KVIC and Ministry of MSME providing up to 35% non-repayable government cash grant for setting up commercial bakeries, spice processing mills, dairy processing plants, edible oil units, and food manufacturing up to ₹50 Lakhs.",
    "maxGrantLoanAmount": 5000000,
    "loanAmountFormatted": "Up to ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Services)",
    "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
    "interestRateNumeric": 9,
    "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "eligibleCategories": [
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "Minority",
      "Ex-Servicemen",
      "Differently Abled (Divyangjan)",
      "General"
    ],
    "eligibleBusinessTypes": [
      "Food Business",
      "Manufacturing & Fabrication",
      "Textile & Garments",
      "Handicrafts & Handlooms"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 35,
    "whoCanApply": "Individuals above 18 years (minimum 8th standard pass for project cost > ₹10L manufacturing or > ₹5L services)",
    "purpose": "Setting up commercial food manufacturing plants, flour mills, oil mills, bakeries, or packaging facilities",
    "benefits": [
      "Direct 15% to 35% government capital subsidy (Margin Money Grant) that does not need repayment",
      "Beneficiary own contribution is only 5% to 10% of total project cost; 90-95% bank loan",
      "Free entrepreneurship skill development training (EDP) provided prior to loan disbursal"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Business project cost and profit estimation",
        "isMandatory": true
      },
      {
        "docName": "Special Category Certificate",
        "description": "OBC, SC, ST, or Minority Certificate for 35% subsidy",
        "isMandatory": false
      },
      {
        "docName": "Educational Qualification (8th pass or above)",
        "description": "Mark sheet / School leaving certificate",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://www.kviconline.gov.in/pmegpep",
    "tags": [
      "Highest Subsidy (35%)",
      "Large Scale Loan",
      "Govt Cash Grant",
      "Food Processing"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Credit Guarantee Fund Trust for Micro and Small Retail Enterprises (CGTMSE)",
    "shortCode": "CGTMSE",
    "schemeId": "CGTMSE",
    "category": "Central Government",
    "targetSector": "Retail Trade / MSME",
    "primaryBusinessType": "Retail / Kirana Shop",
    "tagline": "Collateral-free retail trade bank loans up to ₹5 Crore with up to 85% government guarantee",
    "vernacularNames": {
      "en": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
      "hi": "क्रेडिट गारंटी फंड ट्रस्ट फॉर माइक्रो एंड स्मॉल एंटरप्राइजेज (CGTMSE - ₹5 करोड़ तक गारंटी-मुक्त ऋण)",
      "te": "సూక్ష్మ మరియు చిన్న పరిశ్రమల క్రెడిట్ గ్యారెంటీ ట్రస్ట్ (CGTMSE - రూ. 5 కోట్ల వరకు పూచీకత్తు లేని రుణం)",
      "kn": "ಕ್ರೆಡಿಟ್ ಗ್ಯಾರಂಟಿ ಫಂಡ್ ಟ್ರಸ್ಟ್ (CGTMSE - ₹5 ಕೋಟಿವರೆಗೆ ಗ್ಯಾರಂಟಿ ರಹಿತ ಸಾಲ)",
      "ta": "சிறு மற்றும் குறு நிறுவனங்களுக்கான கடன் உத்தரவாத அறக்கட்டளை (CGTMSE - ரூ. 5 கோடி வரை பிணையில்லா கடன்)",
      "mr": "क्रेडिट गॅरंटी फंड ट्रस्ट फॉर मायक्रो अँड स्मॉल एंटरप्रायझेस (CGTMSE - ₹5 कोटींपर्यंत विनातारण कर्ज)",
      "bn": "ক্রেডিট গ্যারান্টি ফান্ড ট্রাস্ট (CGTMSE - ₹৫ কোটি পর্যন্ত জামানতমুক্ত ঋণ)"
    },
    "description": "Joint initiative by Ministry of MSME and SIDBI providing collateral-free credit to retail traders, kirana shops, wholesale distributors, and departmental stores by guaranteeing up to 85% of default risk for commercial banks.",
    "maxGrantLoanAmount": 50000000,
    "loanAmountFormatted": "Up to ₹5 Crore (No Third-Party Collateral)",
    "interestRate": "Base Rate + 1.5% - 2.5%",
    "interestRateNumeric": 9.5,
    "repaymentPeriod": "Up to 7 Years",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Retail / Kirana Shop",
      "Manufacturing & Fabrication",
      "Services / Repair Shop"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 0,
    "whoCanApply": "Micro and small retail shopkeepers, wholesale distributors, grocery supermarket owners, hardware traders",
    "purpose": "Inventory stock purchase, point-of-sale modernization, shop expansion, warehouse storage setup",
    "benefits": [
      "100% collateral-free credit facility up to ₹5 Crore with zero land mortgage requirement",
      "85% guarantee cover for women-owned enterprises and micro-enterprises up to ₹5 Lakhs",
      "Enables first-generation shopkeepers without ancestral property to obtain large commercial bank credit"
    ],
    "requiredDocuments": [
      {
        "docName": "Udyam Registration Certificate",
        "description": "MSME retail trade registration",
        "isMandatory": true
      },
      {
        "docName": "Audited Financials / ITR (Last 1-2 Years)",
        "description": "Balance sheet & Profit-Loss or GST return",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Feasibility Report",
        "description": "Stock turnover projections and shop plan",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://www.cgtmse.in",
    "tags": [
      "Retail Trade",
      "Collateral-Free",
      "High Loan Limit",
      "SIDBI Guarantee"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "PM Vishwakarma Yojana (Traditional Artisans & Craftsmen)",
    "shortCode": "PM-VISHWAKARMA",
    "schemeId": "PM-VISHWAKARMA",
    "category": "Central Government",
    "targetSector": "Artisans & Handlooms",
    "primaryBusinessType": "Handicrafts & Handlooms",
    "tagline": "₹15,000 modern toolkit grant + ₹3 Lakh collateral-free loan at 5% concessional interest",
    "vernacularNames": {
      "en": "PM Vishwakarma Yojana (Traditional Artisans & Craftsmen)",
      "hi": "पीएम विश्वकर्मा योजना (कारीगरों हेतु ₹3 लाख ऋण व ₹15,000 टूलकिट अनुदान)",
      "te": "పీఎం విశ్వకర్మ యోజన (చేతివృత్తుల వారికి రూ. 3 లక్షల రుణం & రూ. 15,000 టూల్‌కిట్)",
      "kn": "ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹3 ಲಕ್ಷ ಸಾಲ ಮತ್ತು ₹15,000 ಟೂಲ್‌ಕಿಟ್)",
      "ta": "பிரதமர் விஸ்வகர்மா திட்டம் (கைவினைஞர்களுக்கு ரூ. 3 லட்சம் கடன் & ரூ. 15,000 உபகரண மானியம்)",
      "mr": "पीएम विश्वकर्मा योजना (कारागिरांसाठी ₹3 लाख कर्ज व ₹15,000 टूलकिट अनुदान)",
      "bn": "প্রধানমন্ত্রী বিশ্বকর্মা যোজনা (কারিগরদের জন্য ₹৩ লাখ ঋণ ও ₹১৫,০০০ টুলকিট অনুদান)"
    },
    "description": "End-to-end holistic central scheme for traditional artisans across 18 family trades (Weavers, Potters, Carpenters, Blacksmiths, Sculptors, Cobblers, Tailors) with certified skill training, daily stipend, ₹15,000 toolkit voucher, and 5% concessional credit.",
    "maxGrantLoanAmount": 300000,
    "loanAmountFormatted": "₹15,000 Toolkit Grant + ₹3,00,000 Loan at 5%",
    "interestRate": "Concessional 5% p.a. (Govt pays 8% interest subvention)",
    "interestRateNumeric": 5,
    "repaymentPeriod": "Tier 1: 18 Months (₹1L) | Tier 2: 30 Months (₹2L)",
    "repaymentPeriodYears": 3,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "OBC",
      "SC",
      "ST",
      "General",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Handicrafts & Handlooms",
      "Textile & Garments"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 8,
    "whoCanApply": "Artisans and craftspeople working with hands and tools in 18 notified traditional trades, verified via Gram Panchayat",
    "purpose": "Modern toolkit purchase, workshop expansion, raw material procurement, and exhibition participation",
    "benefits": [
      "₹15,000 digital voucher for purchasing modern, productivity-enhancing toolkit",
      "Free 5-7 days basic skill training with ₹500/day daily stipend credited to bank account",
      "₹1 Lakh (First Tranche) + ₹2 Lakh (Second Tranche) collateral-free loan at just 5% interest",
      "Official PM Vishwakarma ID card and certificate recognizing national artisan status"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card (linked with mobile)",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Ration Card",
        "description": "Family verification",
        "isMandatory": true
      },
      {
        "docName": "Bank Passbook",
        "description": "Account details for toolkit credit",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://pmvishwakarma.gov.in",
    "tags": [
      "Handicrafts",
      "Toolkit Grant ₹15,000",
      "5% Low Interest",
      "Daily Stipend",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Weaver Mudra Scheme & Margin Money Assistance",
    "shortCode": "WEAVER-MUDRA",
    "schemeId": "WEAVER-MUDRA",
    "category": "Central Government",
    "targetSector": "Handloom Weavers",
    "primaryBusinessType": "Handicrafts & Handlooms",
    "tagline": "Concessional loan up to ₹2 Lakhs at 6% interest + Margin money grant up to ₹25,000",
    "vernacularNames": {
      "en": "Weaver Mudra Scheme & Margin Money Assistance",
      "hi": "बुनकर मुद्रा योजना व मार्जिन मनी सहायता (हथकरघा बुनकरों हेतु ₹2 लाख ऋण)",
      "te": "చేనేత ముద్ర పథకం మరియు మార్జిన్ మనీ సహాయం (రూ. 2 లక్షల చేనేత రుణం)",
      "kn": "ನೇಕಾರ ಮುದ್ರಾ ಯೋಜನೆ & ಮಾರ್ಜಿನ್ ಹಣ ಸಹಾಯ (₹2 ಲಕ್ಷ ಸಾಲ)",
      "ta": "நெசவாளர் முத்ரா திட்டம் & விளிம்பு தொகை உதவி (ரூ. 2 லட்சம் கடன்)",
      "mr": "विणकर मुद्रा योजना व मार्जिन मनी सहाय्य (हातमाग विणकरांसाठी ₹2 लाख कर्ज)",
      "bn": "তাঁতি মুদ্রা যোজনা ও মার্জিন মানি সহায়তা (তাঁতিদের জন্য ₹২ লাখ ঋণ)"
    },
    "description": "Ministry of Textiles flagship initiative providing individual handloom weavers with concessional credit up to ₹2 Lakhs, an upfront non-repayable margin money grant of up to ₹25,000, and 7% interest subvention (effective net interest rate of only ~6% p.a. for 3 years).",
    "maxGrantLoanAmount": 200000,
    "loanAmountFormatted": "Up to ₹2,00,000 (at 6% Interest + ₹25,000 Grant)",
    "interestRate": "Effective 6% p.a. (Govt provides 7% interest subvention)",
    "interestRateNumeric": 6,
    "repaymentPeriod": "Up to 3 Years (Revolving Credit Limit)",
    "repaymentPeriodYears": 3,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "General"
    ],
    "eligibleBusinessTypes": [
      "Handicrafts & Handlooms"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 20,
    "whoCanApply": "Individual handloom weavers, master weavers, handloom SHG members with Weaver Pehchan Card",
    "purpose": "Yarn purchase, natural dye procurement, handloom pit loom upgrade, jacquard installation",
    "benefits": [
      "Upfront non-repayable margin money assistance up to ₹25,000 credited directly to weaver account",
      "Interest subvention of up to 7% per annum for 3 years, keeping effective net interest at only 6%",
      "Credit guarantee coverage under CGTMSE with zero collateral required from weaver"
    ],
    "requiredDocuments": [
      {
        "docName": "Weaver Pehchan Card / Handloom Identity Proof",
        "description": "Proof of registered weaver status",
        "isMandatory": true
      },
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Bank Account Passbook",
        "description": "Direct Benefit Transfer account",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://handlooms.nic.in",
    "tags": [
      "Weavers",
      "Margin Money Grant",
      "Low 6% Interest",
      "Handloom Priority"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Mahila Coir Yojana (Women Bio-Fiber & Coir Enterprise)",
    "shortCode": "MCY",
    "schemeId": "MCY",
    "category": "Central Government",
    "targetSector": "Women Artisans / Handicrafts",
    "primaryBusinessType": "Handicrafts & Handlooms",
    "tagline": "75% capital subsidy on coir processing machinery for rural women artisans",
    "vernacularNames": {
      "en": "Mahila Coir Yojana (MCY - 75% Women Bio-Fiber Subsidy)",
      "hi": "महिला कॉयर योजना (MCY - ग्रामीण महिलाओं हेतु 75% सब्सिडी)",
      "te": "మహిళా కాయిర్ యోజన (MCY - 75% మహిళా కాయిర్ సబ్సిడీ)",
      "kn": "ಮಹಿಳಾ ಕಾಯರ್ ಯೋಜನೆ (MCY - 75% ಬೃಹತ್ ಸಬ್ಸಿಡಿ)",
      "ta": "மகிளா கயிறு திட்டம் (MCY - பெண்களுக்கு 75% நேரடி மானியம்)",
      "mr": "महिला कॉयर योजना (MCY - ग्रामीण महिलांसाठी 75% अनुदान)",
      "bn": "মহিলা কয়্যার যোজনা (MCY - গ্রামীণ মহিলাদের জন্য ৭৫% অনুদান)"
    },
    "description": "Women-centric scheme by the Coir Board providing 75% direct capital subsidy on cost of motorized coir spinning ratts, yarn processing units, and handicraft equipment to generate sustainable rural self-employment.",
    "maxGrantLoanAmount": 200000,
    "loanAmountFormatted": "75% Subsidy on Machinery & Equipment",
    "interestRate": "Subsidized / Nil on grant portion",
    "interestRateNumeric": 7,
    "repaymentPeriod": "Up to 3 Years on 25% balance",
    "repaymentPeriodYears": 3,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Handicrafts & Handlooms"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 75,
    "whoCanApply": "Rural women artisans trained in coir spinning, Self Help Group (SHG) women members",
    "purpose": "Procurement of motorized coir ratts, fiber carding machines, coir mat loom machines",
    "benefits": [
      "Government of India provides 75% of equipment cost as a non-repayable grant",
      "Free 2-month certified training with monthly stipend provided to rural women",
      "Guaranteed buy-back facilitation for coir yarn through state federations"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Coir Board Training Certificate",
        "description": "Proof of 2-month training",
        "isMandatory": true
      },
      {
        "docName": "Bank Passbook",
        "description": "For Direct Benefit Transfer",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://coirboard.gov.in",
    "tags": [
      "75% High Subsidy",
      "Women Exclusive",
      "Rural Artisans",
      "Zero Debt Risk"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Kisan Credit Card (KCC) Scheme",
    "shortCode": "KCC",
    "schemeId": "KCC",
    "category": "Central Government",
    "targetSector": "Agriculture & Dairy",
    "primaryBusinessType": "Agriculture & Allied",
    "tagline": "Short-term credit for crops, dairy, animal husbandry & fisheries at 4% net interest",
    "vernacularNames": {
      "en": "Kisan Credit Card (KCC) Scheme",
      "hi": "किसान क्रेडिट कार्ड (KCC - मात्र 4% ब्याज पर कृषि व पशुपालन ऋण)",
      "te": "కిసాన్ క్రెడిట్ కార్డ్ (KCC - కేవలం 4% వడ్డీతో రైతు రుణం)",
      "kn": "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC - ಕೇವಲ 4% ಬಡ್ಡಿದರದಲ್ಲಿ ರೈತ ಸಾಲ)",
      "ta": "கிசான் கடன் அட்டை திட்டம் (KCC - வெறும் 4% வட்டியில் விவசாயக் கடன்)",
      "mr": "किसान क्रेडिट कार्ड (KCC - फक्त 4% व्याजदराने शेतकरी कर्ज)",
      "bn": "কিসান ক্রেডিট কার্ড (KCC - মাত্র ৪% সুদে কৃষি ও গবাদি পশু ঋণ)"
    },
    "description": "Simplifies institutional credit delivery for farmers, dairy rearers, and fishers to meet short-term crop cultivation requirements, fertilizer/feed purchases, and livestock maintenance at just 4% net interest.",
    "maxGrantLoanAmount": 300000,
    "loanAmountFormatted": "Up to ₹3,00,000 (at 4% effective interest)",
    "interestRate": "Effective 4% p.a. (with timely repayment)",
    "interestRateNumeric": 4,
    "repaymentPeriod": "12 Months (Revolving Credit Facility)",
    "repaymentPeriodYears": 1,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Agriculture & Allied"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 3,
    "whoCanApply": "Owner cultivators, tenant farmers, dairy farmers, fish farmers, and SHGs of farmers",
    "purpose": "Purchase of seeds, fertilizers, pesticides, cattle feed, milch animals, and farm operating costs",
    "benefits": [
      "No collateral required for loans up to ₹1,60,000",
      "Simple interest rate of 7% p.a., reduced to 4% p.a. upon prompt repayment",
      "ATM-enabled RuPay debit card provided for easy cash withdrawals at any bank ATM"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity proof",
        "isMandatory": true
      },
      {
        "docName": "Land Record / Tenancy Agreement",
        "description": "Cultivation proof (Passbook / Pahani)",
        "isMandatory": true
      },
      {
        "docName": "Crop Pattern Certificate",
        "description": "Crops cultivated in current season",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://pmkisan.gov.in",
    "tags": [
      "Agriculture",
      "Lowest Interest (4%)",
      "Collateral-Free",
      "Immediate Working Capital",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Agriculture Infrastructure Fund (AIF)",
    "shortCode": "AIF",
    "schemeId": "AIF",
    "category": "Central Government",
    "targetSector": "Agri-Infrastructure",
    "primaryBusinessType": "Agriculture & Allied",
    "tagline": "Post-harvest farm infrastructure credit up to ₹2 Crore with 3% interest subvention",
    "vernacularNames": {
      "en": "Agriculture Infrastructure Fund (AIF)",
      "hi": "कृषि अवसंरचना कोष (AIF - ₹2 करोड़ तक 3% ब्याज छूट)",
      "te": "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF - రూ. 2 కోట్ల వరకు 3% వడ్డీ సబ్సిడీ)",
      "kn": "ಕೃಷಿ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AIF - ₹2 ಕೋಟಿವರೆಗೆ 3% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ)",
      "ta": "விவசாய உள்கட்டமைப்பு நிதி (AIF - ரூ. 2 கோடி வரை 3% வட்டி மானியம்)",
      "mr": "कृषी पायाभूत सुविधा निधी (AIF - ₹2 कोटींपर्यंत 3% व्याज सवलत)",
      "bn": "কৃষি অবকাঠামো তহবিল (AIF - ₹২ কোটি পর্যন্ত ৩% সুদ ভর্তুকি)"
    },
    "description": "Medium to long-term debt financing facility for investment in viable projects for post-harvest management infrastructure: cold storages, warehouses, sorting & grading units, silos, and primary processing centers.",
    "maxGrantLoanAmount": 200000000,
    "loanAmountFormatted": "Up to ₹2 Crore (with 3% Interest Subsidy)",
    "interestRate": "Subsidized (3% Interest Subvention p.a.)",
    "interestRateNumeric": 6,
    "repaymentPeriod": "Up to 7 Years (Moratorium up to 2 Years)",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Agriculture & Allied"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 33,
    "whoCanApply": "Farmers, Primary Agricultural Credit Societies (PACS), FPOs, Agri-entrepreneurs, Startups",
    "purpose": "Construction of Cold Storage, Warehouses, Sorting & Grading Units, Silos, Smart Agriculture assets",
    "benefits": [
      "Interest subvention of 3% per annum up to a limit of ₹2 Crore for up to 7 years",
      "Credit guarantee coverage under CGTMSE for loans up to ₹2 Crore",
      "Moratorium period for repayment from 6 months up to 2 years"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar & PAN Card",
        "description": "Identity & Tax KYC",
        "isMandatory": true
      },
      {
        "docName": "Land Record (Pattadar Passbook / 7/12 Extract)",
        "description": "Proof of agricultural land holding",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Cost estimation and financial feasibility plan",
        "isMandatory": true
      },
      {
        "docName": "Bank Statement (Last 6 Months)",
        "description": "Financial track record",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://agriinfra.dac.gov.in",
    "tags": [
      "High Subsidy",
      "Agri-Infrastructure",
      "Low Interest",
      "Long Tenure"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Sub-Mission on Agricultural Mechanization (SMAM - Tractor Subsidy)",
    "shortCode": "SMAM",
    "schemeId": "SMAM",
    "category": "Central Government",
    "targetSector": "Agriculture Machinery",
    "primaryBusinessType": "Agriculture & Allied",
    "tagline": "40% to 50% direct capital subsidy on tractors, harvesters & modern farm tools",
    "vernacularNames": {
      "en": "Sub-Mission on Agricultural Mechanization (SMAM - Tractor Subsidy)",
      "hi": "कृषि यंत्रीकरण उप-मिशन (SMAM - ट्रैक्टर व कृषि यंत्रों पर 50% सब्सिडी)",
      "te": "వ్యవసాయ యాంత్రీకరణ మిషన్ (SMAM - ట్రాక్టర్ & యంత్రాలపై 50% సబ్సిడీ)",
      "kn": "ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಉಪ-ಮಿಷನ್ (SMAM - ಟ್ರ್ಯಾಕ್ಟರ್ ಮೇಲೆ 50% ಸಬ್ಸಿಡಿ)",
      "ta": "வேளாண் இயந்திரமயமாக்கல் திட்டம் (SMAM - டிராக்டருக்கு 50% மானியம்)",
      "mr": "कृषी यांत्रिकीकरण उप-अभियान (SMAM - ट्रॅक्टरवर 50% अनुदान)",
      "bn": "কৃষি যান্ত্রিকীকরণ উপ-মিশন (SMAM - ট্র্যাক্টরে ৫০% সরকারি অনুদান)"
    },
    "description": "Promotes farm mechanization among small and marginal farmers with up to 50% direct cash subsidy on purchasing tractors, power tillers, rotavators, drone sprayers, and combine harvesters.",
    "maxGrantLoanAmount": 1000000,
    "loanAmountFormatted": "Subsidy up to ₹5,00,000 on farm machinery",
    "interestRate": "Normal Bank Loan Rate (8% - 10%)",
    "interestRateNumeric": 9,
    "repaymentPeriod": "Up to 5 Years",
    "repaymentPeriodYears": 5,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "Small & Marginal Farmers"
    ],
    "eligibleBusinessTypes": [
      "Agriculture & Allied"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 50,
    "whoCanApply": "Individual farmers, Custom Hiring Centers (CHCs), Farmer Groups, Village Entrepreneurs",
    "purpose": "Procurement of tractors, power weeders, combine harvesters, laser land levelers",
    "benefits": [
      "40% to 50% direct subsidy credited directly to beneficiary bank account via DBT",
      "Up to 80% subsidy for setting up village Custom Hiring Centers (CHCs)",
      "Reduces manual labor costs and enhances crop yield efficiency"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Land Record (Pahani / 7/12)",
        "description": "Proof of agricultural land",
        "isMandatory": true
      },
      {
        "docName": "Quotation from Authorized Dealer",
        "description": "Price quote for tractor/machinery",
        "isMandatory": true
      },
      {
        "docName": "Caste Certificate (if SC/ST/OBC)",
        "description": "For higher 50% subsidy benefit",
        "isMandatory": false
      }
    ],
    "applicationUrl": "https://agrimachinery.nic.in",
    "tags": [
      "Tractor Subsidy",
      "50% High Subsidy",
      "Farm Machinery"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Pradhan Mantri Matsya Sampada Yojana (PMMSY - Fisheries)",
    "shortCode": "PMMSY",
    "schemeId": "PMMSY",
    "category": "Central Government",
    "targetSector": "Fisheries & Aquaculture",
    "primaryBusinessType": "Agriculture & Allied",
    "tagline": "Up to 60% government subsidy for fish farming, biofloc tanks, and cold chain vans",
    "vernacularNames": {
      "en": "Pradhan Mantri Matsya Sampada Yojana (PMMSY - Fisheries)",
      "hi": "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY - मछली पालन पर 60% सब्सिडी)",
      "te": "ప్రధాన మంత్రి మత్స్య సంపద యోజన (PMMSY - చేపల పెంపకంలో 60% సబ్సిడీ)",
      "kn": "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮತ್ಸ್ಯ ಸಂಪದ ಯೋಜನೆ (PMMSY - ಮೀನುಗಾರಿಕೆಗೆ 60% ಸಬ್ಸಿಡಿ)",
      "ta": "பிரதான் மந்திரி மத்ஸ்ய சம்பதா திட்டம் (PMMSY - மீன் வளர்ப்புக்கு 60% மானியம்)",
      "mr": "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY - मत्स्यपालनावर 60% अनुदान)",
      "bn": "প্রধানমন্ত্রী মৎস্য সম্পদ যোজনা (PMMSY - মাছ চাষে ৬০% সরকারি অনুদান)"
    },
    "description": "Transformational flagship scheme to modernize the fisheries sector with 40% to 60% government capital subsidies for pond construction, biofloc units, hatcheries, fish feed mills, and refrigerated transport vans.",
    "maxGrantLoanAmount": 5000000,
    "loanAmountFormatted": "Project cost up to ₹50 Lakhs (40% - 60% Subsidy)",
    "interestRate": "7% - 9% (concessional credit)",
    "interestRateNumeric": 8,
    "repaymentPeriod": "Up to 7 Years",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "Women Entrepreneur",
      "SC",
      "ST",
      "OBC",
      "General"
    ],
    "eligibleBusinessTypes": [
      "Agriculture & Allied"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 60,
    "whoCanApply": "Fishers, fish farmers, SHGs, JLGs, fisheries cooperatives, and rural youth",
    "purpose": "New pond construction, Biofloc fish tanks, ornamental fish units, insulated transport vehicles",
    "benefits": [
      "60% project subsidy for Women, SC, and ST applicants",
      "40% project subsidy for all other categories",
      "Institutional finance with interest subvention from Fisheries Infrastructure Development Fund"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Land/Waterbody Rights Certificate",
        "description": "Ownership or 10-year lease agreement",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Technical plan and pond design",
        "isMandatory": true
      },
      {
        "docName": "Bank Passbook",
        "description": "For Direct Benefit Transfer",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://pmmsy.dof.gov.in",
    "tags": [
      "Fisheries",
      "60% High Subsidy",
      "Women Priority"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Animal Husbandry Infrastructure Development Fund (AHIDF - Dairy & Poultry)",
    "shortCode": "AHIDF",
    "schemeId": "AHIDF",
    "category": "Central Government",
    "targetSector": "Dairy & Livestock Infrastructure",
    "primaryBusinessType": "Agriculture & Allied",
    "tagline": "3% interest subvention & 25% credit guarantee for dairy processing and poultry plants",
    "vernacularNames": {
      "en": "Animal Husbandry Infrastructure Development Fund (AHIDF - Dairy & Poultry)",
      "hi": "पशुपालन अवसंरचना विकास कोष (AHIDF - डेयरी व पोल्ट्री हेतु 3% ब्याज छूट)",
      "te": "పశుసంవర్ధక మౌలిక సదుపాయాల నిధి (AHIDF - పాడి & పౌల్ట్రీ పరిశ్రమలకు 3% వడ్డీ రాయితీ)",
      "kn": "ಪಶುಸಂಗೋಪನೆ ಮೂಲಸೌಕರ್ಯ ನಿಧಿ (AHIDF - ಡೈರಿ ಮತ್ತು ಪೌಲ್ಟ್ರಿ ಯೋಜನೆ)",
      "ta": "கால்நடை பராமரிப்பு உள்கட்டமைப்பு நிதி (AHIDF - பால் & கோழிப்பண்ணை திட்டம்)",
      "mr": "पशुसंवर्धन पायाभूत सुविधा विकास निधी (AHIDF - डेअरी व पोल्ट्री कर्ज)",
      "bn": "প্রাণিসম্পদ অবকাঠামো উন্নয়ন তহবিল (AHIDF - দুগ্ধ ও পোল্ট্রি প্রকল্প)"
    },
    "description": "Central government scheme under Ministry of Fisheries, Animal Husbandry & Dairying providing 3% interest subvention and up to 25% credit guarantee for dairy processing, value-added milk products, meat processing, and animal feed manufacturing plants.",
    "maxGrantLoanAmount": 30000000,
    "loanAmountFormatted": "Up to ₹3 Crore (3% Interest Subvention)",
    "interestRate": "Subsidized (3% Interest Subvention p.a.)",
    "interestRateNumeric": 6.5,
    "repaymentPeriod": "Up to 8 Years (Moratorium up to 2 Years)",
    "repaymentPeriodYears": 8,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Agriculture & Allied"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 25,
    "whoCanApply": "Dairy entrepreneurs, Farmer Producer Organizations (FPOs), Section 8 companies, MSMEs",
    "purpose": "Setting up milk chilling centers, automated milking units, paneer/curd processing, poultry feed mills",
    "benefits": [
      "3% interest subvention on bank loan for up to 8 years",
      "Up to 25% credit guarantee coverage under Credit Guarantee Fund",
      "Moratorium period of up to 2 years on principal repayment"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Dairy plant layout and financial projections",
        "isMandatory": true
      },
      {
        "docName": "Land Record / Lease Deed",
        "description": "Proof of project site",
        "isMandatory": true
      },
      {
        "docName": "Bank Statement (Last 6 Months)",
        "description": "Financial statement",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://ahidf.udyamimitra.in",
    "tags": [
      "Dairy Farming",
      "Poultry Setup",
      "3% Subvention",
      "Agri-Allied"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "SAMARTH Scheme (Textile & Garment Capacity Building & Entrepreneurship)",
    "shortCode": "SAMARTH-TEXTILE",
    "schemeId": "SAMARTH-TEXTILE",
    "category": "Central Government",
    "targetSector": "Textile & Garments",
    "primaryBusinessType": "Textile & Garments",
    "tagline": "Skill development, certified machinery support & institutional loans for garment & tailoring units",
    "vernacularNames": {
      "en": "SAMARTH Scheme (Textile & Garment Capacity Building & Entrepreneurship)",
      "hi": "समर्थ योजना (वस्त्र व परिधान क्षमता निर्माण एवं उद्यमिता ऋण)",
      "te": "సమర్థ్ పథకం (వస్త్ర మరియు టైలరింగ్ పరిశ్రమల నైపుణ్య & వ్యాపార రుణం)",
      "kn": "ಸಮರ್ಥ್ ಯೋಜನೆ (ಜವಳಿ & ಸಿದ್ಧ ಉಡುಪು ಉದ್ಯಮಶೀಲತೆ ಯೋಜನೆ)",
      "ta": "சமர்த் திட்டம் (ஜவுளி & ஆயத்த ஆடை திறன் மேம்பாட்டுத் திட்டம்)",
      "mr": "समर्थ योजना (वस्त्रोद्योग व गारमेंट्स कौशल्य आणि उद्योजकता योजना)",
      "bn": "সমর্থ যোজনা (বস্ত্র ও পোশাক শিল্প দক্ষতা উন্নয়ন ও উদ্যোক্তা ঋণ)"
    },
    "description": "Flagship scheme of Ministry of Textiles providing demand-driven, placement-oriented and entrepreneurship skilling, modern garment machinery linkage, wage compensation during training, and concessional institutional loans for establishing apparel boutiques, industrial tailoring units, and readymade garment businesses.",
    "maxGrantLoanAmount": 2000000,
    "loanAmountFormatted": "Up to ₹20,00,000 (with Machinery Subsidy & EDP Training)",
    "interestRate": "Concessional (8.0% - 9.5%)",
    "interestRateNumeric": 8.5,
    "repaymentPeriod": "Up to 5 Years",
    "repaymentPeriodYears": 5,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "Women Entrepreneur",
      "OBC",
      "SC",
      "ST",
      "General"
    ],
    "eligibleBusinessTypes": [
      "Textile & Garments"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 25,
    "whoCanApply": "Individuals, women tailors, garment entrepreneurs, Self Help Groups, and cooperative societies",
    "purpose": "Procurement of industrial high-speed sewing machines, computerized embroidery equipment, cutting tables, cloth stock",
    "benefits": [
      "Government certified training in advanced garmenting with daily stipend",
      "Direct linkage with MUDRA and PMEGP for equipment purchase loans with capital subsidies",
      "Special priority and 80% seat reservation for women tailors and SC/ST artisans"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Basic Tailoring Skill Certificate / Self Declaration",
        "description": "Proof of tailoring or apparel experience",
        "isMandatory": true
      },
      {
        "docName": "Shop Location / Rent Agreement",
        "description": "Address proof of boutique or workshop",
        "isMandatory": true
      },
      {
        "docName": "Machinery Estimate / Quotation",
        "description": "Price quote from sewing machine dealer",
        "isMandatory": false
      }
    ],
    "applicationUrl": "https://samarth-textiles.gov.in",
    "tags": [
      "Tailoring",
      "Textile & Garments",
      "Women Priority",
      "Modern Machinery",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "MSME Sustainable - ZED (Zero Defect Zero Effect) Certification Scheme",
    "shortCode": "MSME-ZED",
    "schemeId": "MSME-ZED",
    "category": "Central Government",
    "targetSector": "Manufacturing & Fabrication",
    "primaryBusinessType": "Manufacturing & Fabrication",
    "tagline": "Up to 80% government subsidy (up to ₹5 Lakhs) for technology upgrade, clean manufacturing & quality certification",
    "vernacularNames": {
      "en": "MSME Sustainable - ZED (Zero Defect Zero Effect) Certification Scheme",
      "hi": "एमएसएमई जेड प्रमाणन योजना (MSME ZED - ₹5 लाख तक 80% सरकारी अनुदान)",
      "te": "ఎంఎస్ఎంఈ జెడ్ సర్టిఫికేషన్ పథకం (MSME ZED - రూ. 5 లక్షల వరకు 80% గ్రాంట్)",
      "kn": "ಎಂಎಸ್‌ಎಂಇ ಝಡ್ ಪ್ರಮಾಣೀಕರಣ ಯೋಜನೆ (MSME ZED - 80% ಅನುದಾನ)",
      "ta": "எம்எஸ்எம்இ இசட் சான்றிதழ் திட்டம் (MSME ZED - 80% அரசு மானியம்)",
      "mr": "एमएसएमई झेड प्रमाणीकरण योजना (MSME ZED - ₹5 लाखांपर्यंत 80% अनुदान)",
      "bn": "এমএসএমই জেড সার্টিফিকেশন প্রকল্প (MSME ZED - ৮০% পর্যন্ত সরকারি অনুদান)"
    },
    "description": "Ministry of MSME flagship scheme motivating micro, small, and medium manufacturing units to adopt Zero Defect manufacturing practices with up to 80% direct financial subsidy on testing, technology upgradation, handholding consultancy, and zero-defect green machinery.",
    "maxGrantLoanAmount": 500000,
    "loanAmountFormatted": "Subsidy up to ₹5,00,000 (Up to 80% Govt Contribution)",
    "interestRate": "Direct Cash Subsidy / Nil",
    "interestRateNumeric": 0,
    "repaymentPeriod": "Grant Based (No Repayment)",
    "repaymentPeriodYears": 0,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Manufacturing & Fabrication"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 80,
    "whoCanApply": "Any manufacturing MSME with valid Udyam Registration (Fabrication workshops, plastics, metal works, electrical assembly)",
    "purpose": "Upgrading workshop machinery, obtaining ISO/ZED quality certifications, installing pollution control & energy efficient tools",
    "benefits": [
      "Up to 80% subsidy on certification costs (Bronze, Silver, Gold certifications)",
      "Financial assistance up to ₹5 Lakhs per enterprise for handholding and technology adoption",
      "0.5% concession on processing fees and interest rates across partner commercial banks"
    ],
    "requiredDocuments": [
      {
        "docName": "Udyam Registration Certificate",
        "description": "MSME registration",
        "isMandatory": true
      },
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Factory / Workshop Electricity Bill",
        "description": "Operational address proof",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://zed.msme.gov.in",
    "tags": [
      "80% Subsidy",
      "Zero Defect",
      "Manufacturing",
      "Tech Upgrade"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Stand-Up India Scheme for Women & SC/ST Entrepreneurs",
    "shortCode": "STAND-UP",
    "schemeId": "STAND-UP",
    "category": "Central Government",
    "targetSector": "Women & SC/ST Enterprise",
    "primaryBusinessType": "Manufacturing & Fabrication",
    "tagline": "Greenfield enterprise credit from ₹10 Lakh to ₹1 Crore for Women and SC/ST founders",
    "vernacularNames": {
      "en": "Stand-Up India Scheme for Women & SC/ST Entrepreneurs",
      "hi": "स्टैंड-अप इंडिया योजना (महिला व एससी/एसटी हेतु ₹1 करोड़ तक ऋण)",
      "te": "స్టాండ్-అప్ ఇండియా పథకం (మహిళలు & ఎస్సీ/ఎస్టీలకు ₹1 కోటి వరకు రుణం)",
      "kn": "ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ಮಹಿಳೆಯರು ಮತ್ತು ಎಸ್‌ಸಿ/ಎಸ್‌ಟಿ ಉದ್ಯಮಿಗಳಿಗೆ ₹1 ಕೋಟಿ ಸಾಲ)",
      "ta": "ஸ்டாண்ட்-அப் இந்தியா திட்டம் (பெண்கள் மற்றும் எஸ்சி/எஸ்டி பிரிவினருக்கு ரூ. 1 கோடி கடன்)",
      "mr": "स्टँड-अप इंडिया योजना (महिला व एससी/एसटीसाठी ₹1 कोटींपर्यंत कर्ज)",
      "bn": "স্ট্যান্ড-আপ ইন্ডিয়া যোজনা (নারী ও এসসি/এসটিদের জন্য ₹১ কোটি পর্যন্ত ঋণ)"
    },
    "description": "Mandates scheduled bank branches to provide composite loans between ₹10 Lakh and ₹1 Crore to at least one Woman entrepreneur and one SC/ST founder for setting up greenfield manufacturing plants, commercial transport fleets, service centers, or trading businesses.",
    "maxGrantLoanAmount": 10000000,
    "loanAmountFormatted": "₹10 Lakh to ₹1 Crore",
    "interestRate": "Lowest applicable bank rate (Base Rate + 3% max)",
    "interestRateNumeric": 8.5,
    "repaymentPeriod": "Up to 7 Years (Moratorium up to 18 Months)",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "Women Entrepreneur",
      "SC",
      "ST"
    ],
    "eligibleBusinessTypes": [
      "Manufacturing & Fabrication",
      "Services / Repair Shop"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 15,
    "whoCanApply": "Women founders (at least 51% stake) or SC/ST entrepreneurs setting up a greenfield enterprise",
    "purpose": "Setting up a brand-new factory, CNC workshop, commercial transport fleet, packaging plant, or hospital service unit",
    "benefits": [
      "Large credit facility between ₹10 Lakh and ₹1 Crore",
      "Handholding support through SIDBI Stand-Up Connect Centres, NABARD, and DIC officers",
      "Convergence with Central/State subsidy schemes to meet 15% margin money contribution"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Caste / Women Ownership Proof",
        "description": "51% stake proof in enterprise",
        "isMandatory": true
      },
      {
        "docName": "Project Report with Financial Feasibility",
        "description": "Greenfield enterprise plan",
        "isMandatory": true
      },
      {
        "docName": "Pollution Control & Municipal Clearance (if manufacturing)",
        "description": "Regulatory permits",
        "isMandatory": false
      }
    ],
    "applicationUrl": "https://www.standupmitra.in",
    "tags": [
      "High Value Loan",
      "Women Exclusive",
      "SC/ST Priority",
      "Greenfield Enterprise"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Prime Minister's Employment Generation Programme (PMEGP - Services & Workshops)",
    "shortCode": "PMEGP-SERVICE",
    "schemeId": "PMEGP-SERVICE",
    "category": "Central Government",
    "targetSector": "Services & Workshops",
    "primaryBusinessType": "Services / Repair Shop",
    "tagline": "Capital subsidy up to 35% for automobile workshops, electronics repair, diagnostics & service centers",
    "vernacularNames": {
      "en": "Prime Minister's Employment Generation Programme (PMEGP - Services & Workshops)",
      "hi": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP सेवा क्षेत्र - वर्कशॉप हेतु 35% सब्सिडी)",
      "te": "ప్రధాన మంత్రి ఉపాధి కల్పన పథకం (PMEGP సర్వీసెస్ - రిపేర్ షాపులకు 35% సబ్సిడీ)",
      "kn": "ಪಿಎಂಇಜಿಪಿ ಸೇವಾ ವಲಯ ಯೋಜನೆ (PMEGP ಸರ್ವಿಸ್ - ರಿಪೇರಿ ಅಂಗಡಿಗಳಿಗೆ 35% ಸಬ್ಸಿಡಿ)",
      "ta": "பிரதமரின் வேலைவாய்ப்பு திட்டம் (PMEGP சேவைத் துறை - பழுதுபார்க்கும் கடைகளுக்கு 35% மானியம்)",
      "mr": "पंतप्रधान रोजगार निर्मिती कार्यक्रम (PMEGP सेवा क्षेत्र - वर्कशॉपसाठी 35% अनुदान)",
      "bn": "প্রধানমন্ত্রীর কর্মসংস্থান সৃষ্টি প্রকল্প (PMEGP সেবা খাত - ওয়ার্কশপের জন্য ৩৫% অনুদান)"
    },
    "description": "Credit-linked capital subsidy for service enterprises up to ₹20 Lakhs. Ideal for automotive garages, bike repair centers, smartphone/laptop servicing, agricultural pump repair, refrigeration mechanics, and diagnostic testing centers.",
    "maxGrantLoanAmount": 2000000,
    "loanAmountFormatted": "Up to ₹20,00,000 (15% - 35% Govt Capital Subsidy)",
    "interestRate": "Normal Bank Lending Rate (8.5% - 10.5%)",
    "interestRateNumeric": 9,
    "repaymentPeriod": "Up to 7 Years (Moratorium 6 - 12 Months)",
    "repaymentPeriodYears": 7,
    "minAge": 18,
    "eligibleCategories": [
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "Minority",
      "Differently Abled (Divyangjan)",
      "General"
    ],
    "eligibleBusinessTypes": [
      "Services / Repair Shop"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 35,
    "whoCanApply": "Individuals aged 18+ wanting to open service shops, auto workshops, electrical repair, or IT service hubs",
    "purpose": "Purchasing automotive diagnostic tools, vehicle hydraulic lifts, electronic soldering workstations, shop interior setup",
    "benefits": [
      "Direct 15% to 35% non-repayable government cash grant (Margin Money)",
      "Only 5% to 10% own contribution; bank finances 90% to 95%",
      "Free EDP vocational management training provided prior to disbursal"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Detailed Project Report (DPR)",
        "description": "Cost estimation for service equipment",
        "isMandatory": true
      },
      {
        "docName": "Educational Qualification (8th pass or above)",
        "description": "Required for projects above ₹5 Lakhs",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://www.kviconline.gov.in/pmegpep",
    "tags": [
      "Services",
      "Repair Shop",
      "35% Subsidy",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "PM SVANidhi (Microcredit for Street Vendors)",
    "shortCode": "PM-SVANIDHI",
    "schemeId": "PM-SVANIDHI",
    "category": "Central Government",
    "targetSector": "Street Vendors",
    "primaryBusinessType": "Street Vending",
    "tagline": "Collateral-free working capital from ₹10,000 to ₹50,000 with 7% interest subsidy & UPI cashback",
    "vernacularNames": {
      "en": "PM SVANidhi (Microcredit for Street Vendors)",
      "hi": "पीएम स्वनिधि योजना (रेहड़ी-पटरी व ठेला व्यापारियों हेतु ₹50,000 ऋण)",
      "te": "పీఎం స్వనిధి (వీధి వ్యాపారులకు రూ. 50,000 వరకు పూచీకత్తు లేని రుణం)",
      "kn": "ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ₹50,000 ಸಾಲ)",
      "ta": "பிரதமர் ஸ்வநிதி திட்டம் (சாலையோர வியாபாரிகளுக்கு ரூ. 50,000 கடன்)",
      "mr": "पीएम स्वनिधी योजना (फेरीवाले व हातगाडी चालकांसाठी ₹50,000 कर्ज)",
      "bn": "পিএম স্বনিধি যোজনা (পথ বিক্রেতাদের জন্য ₹৫০,০০০ পর্যন্ত জামানতমুক্ত ঋণ)"
    },
    "description": "Flagship scheme under Ministry of Housing and Urban Affairs providing street vendors, pushcart hawkers, thela fruit/vegetable sellers, and roadside kiosks with collateral-free working capital in ascending tranches: ₹10,000 (1st), ₹20,000 (2nd), and ₹50,000 (3rd) with 7% annual interest subsidy.",
    "maxGrantLoanAmount": 50000,
    "loanAmountFormatted": "₹10,000 / ₹20,000 / ₹50,000 (No Collateral)",
    "interestRate": "Subsidized (7% Interest Subsidy p.a.)",
    "interestRateNumeric": 7,
    "repaymentPeriod": "12 Months (Tranche 1) to 36 Months (Tranche 3)",
    "repaymentPeriodYears": 1,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur"
    ],
    "eligibleBusinessTypes": [
      "Street Vending"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 7,
    "whoCanApply": "Street vendors, roadside hawkers, mobile pushcart operators vending in urban, semi-urban, or rural local bodies",
    "purpose": "Daily working capital, buying seasonal fruit/vegetable stock, cart repairs, solar lighting",
    "benefits": [
      "100% collateral-free credit with zero processing fees and instant loan enhancement upon timely repayment",
      "7% annual interest subsidy credited directly to bank account every quarter",
      "Up to ₹1,200 annual cashback incentive on accepting digital payments (UPI QR codes)"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Certificate of Vending / Letter of Recommendation (LoR)",
        "description": "Issued by Town Vending Committee (TVC) or Municipality",
        "isMandatory": true
      },
      {
        "docName": "Bank Account Passbook",
        "description": "Account linked to Aadhaar",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://pmsvanidhi.mohua.gov.in",
    "tags": [
      "Street Vendors",
      "Pushcart Hawkers",
      "7% Interest Subsidy",
      "UPI Cashback",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "DAY-NULM (Support to Urban Street Vendors & Micro-Enterprises)",
    "shortCode": "DAY-NULM",
    "schemeId": "DAY-NULM",
    "category": "Central Government",
    "targetSector": "Urban Livelihoods & Street Vendors",
    "primaryBusinessType": "Street Vending",
    "tagline": "Micro-credit up to ₹2 Lakhs with interest subsidy down to 7% for urban vendors & SHG groups",
    "vernacularNames": {
      "en": "DAY-NULM (Support to Urban Street Vendors & Micro-Enterprises)",
      "hi": "डे-नल्म योजना (शहरी स्ट्रीट वेंडर व सूक्ष्म उद्यम हेतु 7% ब्याज पर ऋण)",
      "te": "డే-నల్మ్ పథకం (పట్టణ వీధి వ్యాపారులు & సూక్ష్మ వ్యాపారాలకు 7% రాయితీ రుణం)",
      "kn": "ಡೇ-ನಲ್ಮ್ ಯೋಜನೆ (ನಗರ ಬೀದಿಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ 7% ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ)",
      "ta": "டே-நல்ம் திட்டம் (நகர்ப்புற சாலையோர வியாபாரிகளுக்கு 7% வட்டியில் கடன்)",
      "mr": "डे-नल्म योजना (शहरी फेरीवाले व बचत गटांसाठी 7% व्याजाने कर्ज)",
      "bn": "ডে-নালম যোজনা (শহুরে হকার ও স্বনির্ভর দলের জন্য ৭% সুদে ঋণ)"
    },
    "description": "Centrally sponsored scheme by Ministry of Housing and Urban Affairs providing subsidized bank credit up to ₹2 Lakhs for individual micro-enterprises and up to ₹10 Lakhs for street vendor groups/SHGs, with interest subvention over and above 7% interest rate.",
    "maxGrantLoanAmount": 200000,
    "loanAmountFormatted": "Up to ₹2,00,000 (Individual) / ₹10,00,000 (Group)",
    "interestRate": "Effective 7% p.a. (Govt pays interest above 7%)",
    "interestRateNumeric": 7,
    "repaymentPeriod": "Up to 5 Years",
    "repaymentPeriodYears": 5,
    "minAge": 18,
    "maxIncome": 0,
    "eligibleCategories": [
      "All",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "Minority"
    ],
    "eligibleBusinessTypes": [
      "Street Vending"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 5,
    "whoCanApply": "Urban poor, street vendors, mobile food hawkers, SHG members identified under Municipal Corporation",
    "purpose": "Permanent vending cart construction, procuring mobile vending kiosks, bulk inventory purchase",
    "benefits": [
      "Interest subsidy over and above 7% per annum reimbursed directly by government",
      "Issuance of official Street Vending Identity Card and designated vending zone allotment",
      "Access to social security convergence (PMJJBY, PMSBY, PM-SYM pension)"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Town Vending Committee (TVC) ID Card",
        "description": "Municipal vendor registration",
        "isMandatory": true
      },
      {
        "docName": "Bank Passbook",
        "description": "For Interest Subsidy credit",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://nulm.gov.in",
    "tags": [
      "Urban Vendors",
      "7% Concessional Interest",
      "Vending ID Card"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Divyangjan Swavalamban Yojana (NHFDC Concessional Loan for PwD)",
    "shortCode": "NHFDC-DSY",
    "schemeId": "NHFDC-DSY",
    "category": "Central Government",
    "targetSector": "Differently Abled / Divyangjan",
    "primaryBusinessType": "All",
    "tagline": "Concessional loans up to ₹50 Lakhs at 5% to 8% interest with special rebate for women with disabilities",
    "vernacularNames": {
      "en": "Divyangjan Swavalamban Yojana (NHFDC Concessional Loan for PwD)",
      "hi": "दिव्यांगजन स्वावलंबन योजना (NHFDC - दिव्यांगजनों हेतु ₹50 लाख तक रियायती ऋण)",
      "te": "దివ్యాంగుల స్వావలంబన యోజన (NHFDC - దివ్యాంగులకు రూ. 50 లక్షల వరకు రాయితీ రుణం)",
      "kn": "ದಿವ್ಯಾಂಗಜನ ಸ್ವಾವಲಂಬನ ಯೋಜನೆ (NHFDC - ವಿಕಲಚೇತನರಿಗೆ ₹50 ಲಕ್ಷ ಸಾಲ)",
      "ta": "திவ்யாங்ஜன் சுவாலம்பன் திட்டம் (NHFDC - மாற்றுத்திறனாளிகளுக்கு ரூ. 50 லட்சம் கடன்)",
      "mr": "दिव्यांगजन स्वावलंबन योजना (NHFDC - दिव्यांगांसाठी ₹50 लाखांपर्यंत सवलतीचे कर्ज)",
      "bn": "দিব্যাঙ্গজন স্বাবলম্বন যোজনা (NHFDC - বিশেষভাবে সক্ষম ব্যক্তিদের জন্য ₹৫০ লাখ ঋণ)"
    },
    "description": "Flagship central government scheme implemented by DEPwD & NHFDC providing concessional credit to Indian citizens with 40% or more disability for establishing micro-enterprises, shops, service units, agricultural ventures, or professional setups.",
    "maxGrantLoanAmount": 5000000,
    "loanAmountFormatted": "Up to ₹50 Lakhs (Concessional 5% - 8% Interest)",
    "interestRate": "Concessional (5.0% - 8.0% p.a., 1% rebate for women)",
    "interestRateNumeric": 5,
    "repaymentPeriod": "Up to 10 Years (Moratorium up to 1 Year)",
    "repaymentPeriodYears": 10,
    "minAge": 18,
    "maxAge": 65,
    "maxIncome": 0,
    "eligibleCategories": [
      "Differently Abled (Divyangjan)"
    ],
    "eligibleBusinessTypes": [
      "Food Business",
      "Retail / Kirana Shop",
      "Handicrafts & Handlooms",
      "Agriculture & Allied",
      "Textile & Garments",
      "Manufacturing & Fabrication",
      "Services / Repair Shop",
      "Street Vending"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 35,
    "whoCanApply": "Indian citizens aged 18-65 with minimum 40% disability certified by medical authority or UDID Card",
    "purpose": "Setting up small business, retail shops, trading, agricultural units, vehicle purchase, or assistive equipment",
    "benefits": [
      "Ultra-low interest rate starting at 5% p.a. for loans up to ₹50,000, and 6%-8% for higher amounts",
      "Special 1% additional interest rebate for women entrepreneurs with disabilities",
      "Collateral-free micro-credit loans up to ₹50,000 for rural and cottage enterprises",
      "Long repayment tenure up to 10 years with flexible moratorium up to 12 months",
      "Skill training grant up to ₹2,000/month during government vocational orientation"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card & PAN Card",
        "description": "Identity & Tax KYC",
        "isMandatory": true
      },
      {
        "docName": "Disability Certificate / UDID Card",
        "description": "Proof of 40% or more disability issued by medical board",
        "isMandatory": true
      },
      {
        "docName": "Project Quotation / Business Plan",
        "description": "Estimate of machinery, raw materials, or shop setup",
        "isMandatory": true
      },
      {
        "docName": "Bank Passbook",
        "description": "Direct Benefit Transfer account linked to Aadhaar",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://nhfdc.nic.in",
    "tags": [
      "Divyangjan Priority",
      "5% Low Interest",
      "High Loan Limit",
      "Special Category",
      "Top Choice"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "PM Vidyalaxmi Scheme (Higher Education Credit Support)",
    "shortCode": "PM-VIDYALAXMI",
    "schemeId": "PM-VIDYALAXMI",
    "category": "Central Government",
    "targetSector": "Education / Youth",
    "primaryBusinessType": "Education / Students",
    "tagline": "Collateral-free, guarantor-free education loan up to ₹7.5 Lakh with 3% interest subsidy",
    "vernacularNames": {
      "en": "PM Vidyalaxmi Scheme (Higher Education Credit Support)",
      "hi": "पीएम विद्यालक्ष्मी योजना (उच्च शिक्षा हेतु बिना गारंटी शिक्षा ऋण)",
      "te": "పీఎం విద్యాలక్ష్మి పథకం (ఉన్నత విద్య కోసం పూచీకత్తు లేని విద్యా రుణం)",
      "kn": "ಪಿಎಂ ವಿದ್ಯಾಲಕ್ಷ್ಮಿ ಯೋಜನೆ (ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಗ್ಯಾರಂಟಿ ರಹಿತ ಸಾಲ)",
      "ta": "பிரதமர் வித்யாலக்ஷ்மி திட்டம் (உயர் கல்விக்கான பிணையில்லா கல்விக்கடன்)",
      "mr": "पीएम विद्यालक्ष्मी योजना (उच्च शिक्षणासाठी विनातारण शैक्षणिक कर्ज)",
      "bn": "পিএম বিদ্যালক্ষ্মী যোজনা (উচ্চশিক্ষার জন্য জামানতমুক্ত শিক্ষা ঋণ)"
    },
    "description": "National initiative providing collateral-free, guarantor-free education loans to meritorious students admitted in top 860 higher education institutions across India.",
    "maxGrantLoanAmount": 750000,
    "loanAmountFormatted": "Up to ₹7.5 Lakhs (100% Collateral & Guarantor Free)",
    "interestRate": "Concessional (3% Interest Subvention for family income < ₹8L)",
    "interestRateNumeric": 7.5,
    "repaymentPeriod": "Up to 15 Years (Course Period + 1 Year Moratorium)",
    "repaymentPeriodYears": 15,
    "minAge": 16,
    "maxIncome": 800000,
    "eligibleCategories": [
      "All",
      "General",
      "OBC",
      "SC",
      "ST",
      "Women Entrepreneur",
      "Minority"
    ],
    "eligibleBusinessTypes": [
      "Education / Students"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 3,
    "whoCanApply": "Students admitted to NIRF top-ranked universities, IITs, IIMs, AIIMS, NITs, Central Universities",
    "purpose": "Tuition fees, hostel accommodation, laptop/books, and living expenses during degree",
    "benefits": [
      "Zero collateral and zero third-party guarantor required for loans up to ₹7.5 Lakhs",
      "75% credit guarantee provided directly by Central Government to lending banks",
      "3% interest subvention during moratorium period for students with annual family income up to ₹8 Lakhs",
      "Repayment starts only 1 year after graduation or 6 months after getting a job"
    ],
    "requiredDocuments": [
      {
        "docName": "Aadhaar Card of Student & Parent",
        "description": "Identity KYC",
        "isMandatory": true
      },
      {
        "docName": "Admission Letter & Fee Structure",
        "description": "From approved NIRF institution",
        "isMandatory": true
      },
      {
        "docName": "10th, 12th & Graduation Marksheets",
        "description": "Academic performance record",
        "isMandatory": true
      },
      {
        "docName": "Income Certificate (Tahsildar / MRO)",
        "description": "For 3% interest subvention eligibility",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://www.vidyalakshmi.co.in",
    "tags": [
      "Education Support",
      "No Guarantor Needed",
      "15 Years Repayment"
    ],
    "vernacularDetails": {
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
    }
  },
  {
    "schemeName": "Central Sector Interest Subsidy Scheme (CSIS for Education Loans)",
    "shortCode": "CSIS",
    "schemeId": "CSIS",
    "category": "Central Government",
    "targetSector": "Education / Youth",
    "primaryBusinessType": "Education / Students",
    "tagline": "100% Full interest subsidy during moratorium period for economically weaker students",
    "vernacularNames": {
      "en": "Central Sector Interest Subsidy Scheme (CSIS for Education Loans)",
      "hi": "केंद्रीय क्षेत्र ब्याज सब्सिडी योजना (CSIS - पढ़ाई के दौरान 0% ब्याज पर शिक्षा ऋण)",
      "te": "కేంద్ర రంగ వడ్డీ సబ్సిడీ పథకం (CSIS - చదువు పూర్తయ్యే వరకు 0% వడ్డీతో విద్యా రుణం)",
      "kn": "ಕೇಂದ್ರ ವಲಯದ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಯೋಜನೆ (CSIS - ವ್ಯಾಸಂಗ ಅವಧಿಯಲ್ಲಿ 0% ಬಡ್ಡಿ)",
      "ta": "மத்திய துறை வட்டி மானியத் திட்டம் (CSIS - படிக்கும் காலத்தில் 0% வட்டி கல்விக்கடன்)",
      "mr": "केंद्रीय क्षेत्र व्याज अनुदान योजना (CSIS - शिक्षणादरम्यान 0% व्याजाने कर्ज)",
      "bn": "কেন্দ্রীয় ক্ষেত্র সুদ ভর্তুকি প্রকল্প (CSIS - পড়াশোনার সময়ে ০% সুদে শিক্ষা ঋণ)"
    },
    "description": "Provides full interest subsidy during the moratorium period (Course Period plus one year) on modern educational loans taken by students from Economically Weaker Sections (family income <= ₹4.5 Lakhs).",
    "maxGrantLoanAmount": 1000000,
    "loanAmountFormatted": "Full 100% Interest Paid by Govt during Studies",
    "interestRate": "0% during studies (Govt pays full interest)",
    "interestRateNumeric": 0,
    "repaymentPeriod": "Up to 15 Years post graduation",
    "repaymentPeriodYears": 15,
    "minAge": 17,
    "maxIncome": 450000,
    "eligibleCategories": [
      "All",
      "OBC",
      "SC",
      "ST",
      "General",
      "Minority"
    ],
    "eligibleBusinessTypes": [
      "Education / Students"
    ],
    "minExperienceYears": 0,
    "subsidyPercentage": 100,
    "whoCanApply": "Students pursuing professional/technical courses in India with annual family income not exceeding ₹4.50 Lakh",
    "purpose": "Payment of college tuition, examination fee, equipment, books, and hostel charges",
    "benefits": [
      "Government of India pays 100% of the loan interest during the entire course plus 1 year moratorium",
      "Students begin paying EMIs only after course completion with zero interest accumulated during study years",
      "Available across all Scheduled Commercial Banks"
    ],
    "requiredDocuments": [
      {
        "docName": "Income Certificate issued by Authorized Revenue Officer",
        "description": "Certifying family income <= ₹4.5 Lakhs",
        "isMandatory": true
      },
      {
        "docName": "Admission Proof in Approved Professional Course",
        "description": "AICTE / UGC recognized institution",
        "isMandatory": true
      },
      {
        "docName": "Aadhaar Card",
        "description": "Student identity",
        "isMandatory": true
      }
    ],
    "applicationUrl": "https://education.gov.in",
    "tags": [
      "0% Interest in College",
      "EWS Priority",
      "Full Interest Subsidy"
    ],
    "vernacularDetails": {
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
  }
];





const clientDataStore = {
  getSchemes: async function() {
    return COMPREHENSIVE_GOVT_SCHEMES;
  }
};


/**
 * Udyam Setu - Dynamic RAG (Retrieval-Augmented Generation) & Scheme Intelligence Service
 * Combines Deterministic Sector/Demographic Retrieval with Gemini 2.5 Flash Multilingual Reasoning.
 * Supports: Telugu (తెలుగు), Marathi (मराठी), Hindi (हिन्दी), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Bengali (বাংলা), and English.
 */

// GoogleGenAI
// dataStore

let aiClient = null;


function getGenAIClient() {
  return null;
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

  // 1. If explicit domain or business is mentioned in the query, it is NOT an unspecified discovery query!
  const detectedSector = detectSectorFromText(message);
  if (detectedSector) {
    return false;
  }

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

  return clean.length <= 15;
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
  // 1. Dynamic Intent Priority: User message intent STRICTLY overrides static userProfile
  const sectorFromMsg = detectSectorFromText(message);
  if (sectorFromMsg) {
    return sectorFromMsg;
  }

  if (isDiscoveryOrUnspecifiedQuery(message, userProfile)) {
    return 'Discovery';
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
  const allSchemes = await clientDataStore.getSchemes();
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

// ─── Universal Sector Translation Map ─────────────────────────────────────────
const SECTOR_TRANSLATIONS = {
  te: {
    'Food Business': 'ఆహార వ్యాపారం', 'Retail / Kirana Shop': 'కిరాణా / రిటైల్ దుకాణం',
    'Handicrafts & Handlooms': 'చేనేత & చేతివృత్తులు', 'Agriculture & Allied': 'వ్యవసాయం & అనుబంధ రంగాలు',
    'Textile & Garments': 'వస్త్ర & దుస్తుల రంగం', 'Manufacturing & Fabrication': 'తయారీ & ఫ్యాబ్రికేషన్',
    'Services / Commercial Transport': 'సర్వీసులు / వాణిజ్య రవాణా', 'Commercial Transport': 'వాణిజ్య రవాణా',
    'Services / Repair Shop': 'రిపేర్ & సర్వీస్ రంగం', 'Services & Workshops': 'సేవలు & వర్క్‌షాప్‌లు',
    'Street Vending': 'వీధి వ్యాపారం', 'Street Vendors': 'వీధి వ్యాపారులు',
    'Education / Youth': 'విద్య / యువత', 'Differently Abled / Divyangjan': 'దివ్యాంగుల సాధికారత',
    'Women Entrepreneur': 'మహిళా వ్యాపారవేత్తలు', 'Women & SC/ST Enterprise': 'మహిళలు & SC/ST వ్యాపారాలు',
    'Urban Livelihoods & Street Vendors': 'పట్టణ వీధి వ్యాపారులు & జీవనోపాధి',
    'Retail Trade / MSME': 'రిటైల్ వ్యాపారం / సూక్ష్మ & చిన్న పరిశ్రమలు',
    'MSME / Retail & Micro Business': 'రిటైల్ & సూక్ష్మ వ్యాపారం (ఎంఎస్ఎంఈ)',
    'MSME / Agro-Food & Manufacturing': 'వ్యవసాయ ఆహార & తయారీ రంగం (ఎంఎస్ఎంఈ)',
    'Govt Scheme': 'ప్రభుత్వ పథకం', 'MSME / Small Business': 'ఎంఎస్ఎంఈ / చిన్న వ్యాపారం',
    'Food Processing / Culinary': 'ఆహార శుద్ధి & ప్రాసెసింగ్',
    'Artisans & Craftsmen': 'కళాకారులు & చేతివృత్తి', 'Artisans & Handlooms': 'చేతివృత్తులు & చేనేత కళాకారులు',
    'Handloom Weavers': 'చేనేత కార్మికులు', 'Women Artisans / Handicrafts': 'మహిళా కళాకారులు / హస్తకళలు',
    'Handloom & Textiles': 'చేనేత & వస్త్ర రంగం', 'Fisheries': 'మత్స్య పరిశ్రమ',
    'Fisheries & Aquaculture': 'చేపల పెంపకం & ఆక్వాకల్చర్',
    'Dairy & Poultry': 'పాడి & పోల్ట్రీ', 'Dairy & Livestock Infrastructure': 'పాడి & పశుసంవర్ధక మౌలిక సదుపాయాలు',
    'Agriculture': 'వ్యవసాయం', 'Agriculture & Dairy': 'వ్యవసాయం & పాడి పరిశ్రమ',
    'Agri-Infrastructure': 'వ్యవసాయ మౌలిక వసతులు', 'Agriculture Machinery': 'వ్యవసాయ యంత్రాలు & ఉపకరణాలు',
    'Animal Husbandry': 'పశుపాలన', 'Micro Enterprises': 'సూక్ష్మ వ్యాపారాలు',
    'PwD / Divyangjan': 'దివ్యాంగులు', 'Higher Education': 'ఉన్నత విద్య',
    'MSME Certification': 'ఎంఎస్ఎంఈ ధృవీకరణ', 'Discovery': 'వ్యాపార ఆవిష్కరణ',
    'General Advisory': 'సాధారణ సలహా',
  },
  hi: {
    'Food Business': 'खाद्य व्यवसाय', 'Retail / Kirana Shop': 'किराना / खुदरा दुकान',
    'Handicrafts & Handlooms': 'हस्तशिल्प एवं हथकरघा', 'Agriculture & Allied': 'कृषि एवं संबद्ध क्षेत्र',
    'Textile & Garments': 'वस्त्र एवं परिधान', 'Manufacturing & Fabrication': 'विनिर्माण एवं फैब्रिकेशन',
    'Services / Commercial Transport': 'सेवाएं / वाणिज्यिक परिवहन', 'Commercial Transport': 'वाणिज्यिक परिवहन',
    'Services / Repair Shop': 'मरम्मत एवं सेवा केंद्र', 'Services & Workshops': 'सेवाएं एवं कार्यशालाएं',
    'Street Vending': 'स्ट्रीट वेंडिंग', 'Street Vendors': 'स्ट्रीट वेंडर्स (फेरीवाले)',
    'Education / Youth': 'शिक्षा / युवा', 'Differently Abled / Divyangjan': 'दिव्यांगजन सशक्तिकरण',
    'Women Entrepreneur': 'महिला उद्यमी', 'Women & SC/ST Enterprise': 'महिला एवं अजा/अजजा उद्यम',
    'Urban Livelihoods & Street Vendors': 'शहरी आजीविका एवं फेरीवाले',
    'Retail Trade / MSME': 'खुदरा व्यापार / एमएसएमई',
    'MSME / Retail & Micro Business': 'खुदरा एवं सूक्ष्म व्यवसाय (एमएसएमई)',
    'MSME / Agro-Food & Manufacturing': 'कृषि-खाद्य एवं विनिर्माण (एमएसएमई)',
    'Govt Scheme': 'सरकारी योजना', 'MSME / Small Business': 'एमएसएमई / लघु व्यवसाय',
    'Food Processing / Culinary': 'खाद्य प्रसंस्करण एवं पाकशाला',
    'Artisans & Craftsmen': 'कारीगर एवं दस्तकार', 'Artisans & Handlooms': 'कारीगर एवं हथकरघा',
    'Handloom Weavers': 'हथकरघा बुनकर', 'Women Artisans / Handicrafts': 'महिला कारीगर / हस्तशिल्प',
    'Handloom & Textiles': 'हथकरघा एवं वस्त्र', 'Fisheries': 'मत्स्य पालन',
    'Fisheries & Aquaculture': 'मत्स्य पालन एवं जलकृषि',
    'Dairy & Poultry': 'डेयरी एवं पोल्ट्री', 'Dairy & Livestock Infrastructure': 'डेयरी एवं पशुधन अवसंरचना',
    'Agriculture': 'कृषि', 'Agriculture & Dairy': 'कृषि एवं डेयरी',
    'Agri-Infrastructure': 'कृषि अवसंरचना', 'Agriculture Machinery': 'कृषि मशीनरी एवं उपकरण',
    'Animal Husbandry': 'पशुपालन', 'Micro Enterprises': 'सूक्ष्म उद्यम',
    'PwD / Divyangjan': 'दिव्यांगजन', 'Higher Education': 'उच्च शिक्षा',
    'MSME Certification': 'एमएसएमई प्रमाणीकरण', 'Discovery': 'व्यवसाय खोज',
    'General Advisory': 'सामान्य सलाह',
  },
  kn: {
    'Food Business': 'ಆಹಾರ ವ್ಯವಹಾರ', 'Retail / Kirana Shop': 'ಕಿರಾಣಿ / ಚಿಲ್ಲರೆ ಅಂಗಡಿ',
    'Handicrafts & Handlooms': 'ಕರಕುಶಲ ಮತ್ತು ಕೈಮಗ್ಗ', 'Agriculture & Allied': 'ಕೃಷಿ ಮತ್ತು ಸಂಬಂಧಿತ',
    'Textile & Garments': 'ಜವಳಿ ಮತ್ತು ಉಡುಗೆ', 'Manufacturing & Fabrication': 'ಉತ್ಪಾದನೆ ಮತ್ತು ಫ್ಯಾಬ್ರಿಕೇಶನ್',
    'Services / Commercial Transport': 'ಸೇವೆಗಳು / ವಾಣಿಜ್ಯ ಸಾರಿಗೆ', 'Commercial Transport': 'ವಾಣಿಜ್ಯ ಸಾರಿಗೆ',
    'Services / Repair Shop': 'ರಿಪೇರಿ ಮತ್ತು ಸೇವಾ ಕೇಂದ್ರ', 'Services & Workshops': 'ಸೇವೆಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು',
    'Street Vending': 'ಬೀದಿ ವ್ಯಾಪಾರ', 'Street Vendors': 'ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು',
    'Education / Youth': 'ಶಿಕ್ಷಣ / ಯುವಜನ', 'Differently Abled / Divyangjan': 'ವಿಕಲಚೇತನ ಸಬಲೀಕರಣ',
    'Women Entrepreneur': 'ಮಹಿಳಾ ಉದ್ಯಮಿ', 'Women & SC/ST Enterprise': 'ಮಹಿಳಾ ಮತ್ತು ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡ ಉದ್ಯಮ',
    'Urban Livelihoods & Street Vendors': 'ನಗರ ಜೀವನೋಪಾಯ ಮತ್ತು ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು',
    'Retail Trade / MSME': 'ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರ / ಸಣ್ಣ ಉದ್ಯಮ',
    'MSME / Retail & Micro Business': 'ಚಿಲ್ಲರೆ ಮತ್ತು ಸೂಕ್ಷ್ಮ ವ್ಯಾಪಾರ (ಎಂಎಸ್ಎಂಇ)',
    'MSME / Agro-Food & Manufacturing': 'ಕೃಷಿ-ಆಹಾರ ಮತ್ತು ಉತ್ಪಾದನೆ (ಎಂಎಸ್ಎಂಇ)',
    'Govt Scheme': 'ಸರ್ಕಾರಿ ಯೋಜನೆ', 'MSME / Small Business': 'ಎಂಎಸ್ಎಂಇ / ಸಣ್ಣ ವ್ಯಾಪಾರ',
    'Food Processing / Culinary': 'ಆಹಾರ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಪಾಕಶಾಸ್ತ್ರ',
    'Artisans & Craftsmen': 'ಕುಶಲಕರ್ಮಿಗಳು', 'Artisans & Handlooms': 'ಕುಶಲಕರ್ಮಿಗಳು ಮತ್ತು ಕೈಮಗ್ಗ',
    'Handloom Weavers': 'ಕೈಮಗ್ಗ ನೇಕಾರರು', 'Women Artisans / Handicrafts': 'ಮಹಿಳಾ ಕುಶಲಕರ್ಮಿಗಳು / ಕರಕುಶಲ',
    'Handloom & Textiles': 'ಕೈಮಗ್ಗ ಮತ್ತು ಜವಳಿ', 'Fisheries': 'ಮೀನುಗಾರಿಕೆ',
    'Fisheries & Aquaculture': 'ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಜಲಕೃಷಿ',
    'Dairy & Poultry': 'ಹೈನುಗಾರಿಕೆ ಮತ್ತು ಕೋಳಿ ಸಾಕಣೆ', 'Dairy & Livestock Infrastructure': 'ಹೈನುಗಾರಿಕೆ ಮತ್ತು ಜಾನುವಾರು ಮೂಲಸೌಕರ್ಯ',
    'Agriculture': 'ಕೃಷಿ', 'Agriculture & Dairy': 'ಕೃಷಿ ಮತ್ತು ಹೈನುಗಾರಿಕೆ',
    'Agri-Infrastructure': 'ಕೃಷಿ ಮೂಲಸೌಕರ್ಯ', 'Agriculture Machinery': 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು',
    'Animal Husbandry': 'ಪಶು ಸಂಗೋಪನೆ', 'Micro Enterprises': 'ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಗಳು',
    'PwD / Divyangjan': 'ವಿಕಲಚೇತನ', 'Higher Education': 'ಉನ್ನತ ಶಿಕ್ಷಣ',
    'MSME Certification': 'ಎಂಎಸ್ಎಂಇ ಪ್ರಮಾಣೀಕರಣ', 'Discovery': 'ವ್ಯವಹಾರ ಆವಿಷ್ಕಾರ',
    'General Advisory': 'ಸಾಮಾನ್ಯ ಸಲಹೆ',
  },
  ta: {
    'Food Business': 'உணவு வணிகம்', 'Retail / Kirana Shop': 'மளிகை / சில்லறை கடை',
    'Handicrafts & Handlooms': 'கைவினை & கைத்தறி', 'Agriculture & Allied': 'விவசாயம் & தொடர்பு துறைகள்',
    'Textile & Garments': 'ஜவுளி & ஆடை', 'Manufacturing & Fabrication': 'உற்பத்தி & பட்டறை',
    'Services / Commercial Transport': 'சேவைகள் / வணிக போக்குவரத்து', 'Commercial Transport': 'வணிக போக்குவரத்து',
    'Services / Repair Shop': 'பழுதுபார்ப்பு & சேவை மையம்', 'Services & Workshops': 'சேவைகள் & பணிமனைகள்',
    'Street Vending': 'தெருவோர வியாபாரம்', 'Street Vendors': 'தெருவோர வியாபாரிகள்',
    'Education / Youth': 'கல்வி / இளைஞர்', 'Differently Abled / Divyangjan': 'மாற்றுத்திறனாளி மேம்பாடு',
    'Women Entrepreneur': 'பெண் தொழில்முனைவோர்', 'Women & SC/ST Enterprise': 'பெண்கள் & SC/ST தொழில்முனைவு',
    'Urban Livelihoods & Street Vendors': 'நகர்ப்புற வாழ்வாதாரம் & தெருவோர வியாபாரிகள்',
    'Retail Trade / MSME': 'சில்லறை வணிகம் / சிறு தொழில்',
    'MSME / Retail & Micro Business': 'சில்லறை & குறுந்தொழில் (MSME)',
    'MSME / Agro-Food & Manufacturing': 'வேளாண் உணவு & உற்பத்தி (MSME)',
    'Govt Scheme': 'அரசு திட்டம்', 'MSME / Small Business': 'சிறு & நடுத்தர தொழில்',
    'Food Processing / Culinary': 'உணவு பதப்படுத்துதல் & சமையற்கலை',
    'Artisans & Craftsmen': 'கைவினைஞர்கள்', 'Artisans & Handlooms': 'கைவினைஞர்கள் & கைத்தறி',
    'Handloom Weavers': 'கைத்தறி நெசவாளர்கள்', 'Women Artisans / Handicrafts': 'பெண் கைவினைஞர்கள் / கைவினைப்பொருள்',
    'Handloom & Textiles': 'கைத்தறி & ஜவுளி', 'Fisheries': 'மீன்வளம்',
    'Fisheries & Aquaculture': 'மீன்வளம் & நீர்வாழ் உயிரின வளர்ப்பு',
    'Dairy & Poultry': 'பால் பண்ணை & கோழி வளர்ப்பு', 'Dairy & Livestock Infrastructure': 'பால் & கால்நடை கட்டமைப்பு',
    'Agriculture': 'விவசாயம்', 'Agriculture & Dairy': 'விவசாயம் & பால்பண்ணை',
    'Agri-Infrastructure': 'வேளாண் கட்டமைப்பு', 'Agriculture Machinery': 'விவசாய இயந்திரங்கள்',
    'Animal Husbandry': 'கால்நடை வளர்ப்பு', 'Micro Enterprises': 'சிறு தொழில் நிறுவனங்கள்',
    'PwD / Divyangjan': 'மாற்றுத்திறனாளி', 'Higher Education': 'உயர்கல்வி',
    'MSME Certification': 'சிறு தொழில் சான்றிதழ்', 'Discovery': 'வணிக ஆய்வு',
    'General Advisory': 'பொது ஆலோசனை',
  },
  mr: {
    'Food Business': 'खाद्य व्यवसाय', 'Retail / Kirana Shop': 'किराणा / किरकोळ दुकान',
    'Handicrafts & Handlooms': 'हस्तकला व हातमाग', 'Agriculture & Allied': 'शेती व संलग्न क्षेत्र',
    'Textile & Garments': 'वस्त्रोद्योग व कपडे', 'Manufacturing & Fabrication': 'उत्पादन व फॅब्रिकेशन',
    'Services / Commercial Transport': 'सेवा / व्यावसायिक वाहतूक', 'Commercial Transport': 'व्यावसायिक वाहतूक',
    'Services / Repair Shop': 'दुरुस्ती व सेवा केंद्र', 'Services & Workshops': 'सेवा व कार्यशाळा',
    'Street Vending': 'फेरीवाले व हातगाडी', 'Street Vendors': 'फेरीवाले व पथविक्रेते',
    'Education / Youth': 'शिक्षण / तरुण पिढी', 'Differently Abled / Divyangjan': 'दिव्यांग सशक्तीकरण',
    'Women Entrepreneur': 'महिला उद्योजक', 'Women & SC/ST Enterprise': 'महिला व अजा/अजजा उद्योग',
    'Urban Livelihoods & Street Vendors': 'शहरी उपजीविका व फेरीवाले',
    'Retail Trade / MSME': 'किरकोळ व्यापार / सूक्ष्म उद्योग',
    'MSME / Retail & Micro Business': 'किरकोळ व सूक्ष्म व्यवसाय (एमएसएमई)',
    'MSME / Agro-Food & Manufacturing': 'कृषी-अन्न व उत्पादन (एमएसएमई)',
    'Govt Scheme': 'शासकीय योजना', 'MSME / Small Business': 'सूक्ष्म-लघु उद्योग',
    'Food Processing / Culinary': 'अन्न प्रक्रिया व पाककला',
    'Artisans & Craftsmen': 'कारागीर व हस्तकलाकार', 'Artisans & Handlooms': 'कारागीर व हातमाग',
    'Handloom Weavers': 'हातमाग विणकर', 'Women Artisans / Handicrafts': 'महिला कारागीर / हस्तकला',
    'Handloom & Textiles': 'हातमाग व वस्त्रोद्योग', 'Fisheries': 'मत्स्यपालन',
    'Fisheries & Aquaculture': 'मत्स्यपालन व जलसंवर्धन',
    'Dairy & Poultry': 'दुग्धव्यवसाय व कुक्कुटपालन', 'Dairy & Livestock Infrastructure': 'दुग्ध व पशुधन पायाभूत सुविधा',
    'Agriculture': 'शेती', 'Agriculture & Dairy': 'शेती व दुग्धव्यवसाय',
    'Agri-Infrastructure': 'कृषी पायाभूत सुविधा', 'Agriculture Machinery': 'कृषी यंत्रसामग्री',
    'Animal Husbandry': 'पशुपालन', 'Micro Enterprises': 'सूक्ष्म उद्योग',
    'PwD / Divyangjan': 'दिव्यांग', 'Higher Education': 'उच्च शिक्षण',
    'MSME Certification': 'एमएसएमई प्रमाणपत्र', 'Discovery': 'व्यवसाय शोध',
    'General Advisory': 'सामान्य सल्ला',
  },
  bn: {
    'Food Business': 'খাদ্য ব্যবসা', 'Retail / Kirana Shop': 'মুদি / খুচরা দোকান',
    'Handicrafts & Handlooms': 'হস্তশিল্প ও তাঁত শিল্প', 'Agriculture & Allied': 'কৃষি ও সংশ্লিষ্ট ক্ষেত্র',
    'Textile & Garments': 'বস্ত্র ও পোশাক শিল্প', 'Manufacturing & Fabrication': 'উৎপাদন ও ফ্যাব্রিকেশন',
    'Services / Commercial Transport': 'সেবা / বাণিজ্যিক পরিবহন', 'Commercial Transport': 'বাণিজ্যিক পরিবহন',
    'Services / Repair Shop': 'মেরামত ও সার্ভিস সেন্টার', 'Services & Workshops': 'সেবা ও ওয়ার্কশপ',
    'Street Vending': 'রাস্তার হকার ও ঠেলাগাড়ি', 'Street Vendors': 'রাস্তার হকার ও ফুটপাতের বিক্রেতা',
    'Education / Youth': 'শিক্ষা / যুব সমাজ', 'Differently Abled / Divyangjan': 'প্রতিবন্ধী সক্ষমতা',
    'Women Entrepreneur': 'মহিলা উদ্যোক্তা', 'Women & SC/ST Enterprise': 'মহিলা এবং তপশিলি জাতি/উপজাতি উদ্যোগ',
    'Urban Livelihoods & Street Vendors': 'নগর জীবিকা ও ফুটপাতের হকার',
    'Retail Trade / MSME': 'খুচরা বাণিজ্য / ক্ষুদ্র উদ্যোগ',
    'MSME / Retail & Micro Business': 'খুচরা ও ক্ষুদ্র ব্যবসা (এমএসএমই)',
    'MSME / Agro-Food & Manufacturing': 'কৃষি-খাদ্য ও উৎপাদন (এমএসএমই)',
    'Govt Scheme': 'সরকারি প্রকল্প', 'MSME / Small Business': 'ক্ষুদ্র ও মাঝারি ব্যবসা',
    'Food Processing / Culinary': 'খাদ্য প্রক্রিয়াকরণ ও রন্ধনশিল্প',
    'Artisans & Craftsmen': 'কারিগর ও হস্তশিল্পী', 'Artisans & Handlooms': 'কারিগর ও তাঁতশিল্প',
    'Handloom Weavers': 'তাঁত তাঁতি', 'Women Artisans / Handicrafts': 'মহিলা কারিগর / হস্তশিল্প',
    'Handloom & Textiles': 'তাঁত ও বস্ত্র শিল্প', 'Fisheries': 'মৎস্য পালন',
    'Fisheries & Aquaculture': 'মৎস্য পালন ও জলজ চাষ',
    'Dairy & Poultry': 'দুগ্ধ ও মুরগি পালন', 'Dairy & Livestock Infrastructure': 'দুগ্ধ ও পশুপালন পরিকাঠামো',
    'Agriculture': 'কৃষি', 'Agriculture & Dairy': 'কৃষি ও দুগ্ধ শিল্প',
    'Agri-Infrastructure': 'কৃষি পরিকাঠামো', 'Agriculture Machinery': 'কৃষি যন্ত্রপাতি',
    'Animal Husbandry': 'পশুপালন', 'Micro Enterprises': 'ক্ষুদ্র উদ্যোগ',
    'PwD / Divyangjan': 'প্রতিবন্ধী', 'Higher Education': 'উচ্চ শিক্ষা',
    'MSME Certification': 'এমএসএমই সার্টিফিকেশন', 'Discovery': 'ব্যবসা অন্বেষণ',
    'General Advisory': 'সাধারণ পরামর্শ',
  }
};

/**
 * Translates a sector name to the target language.
 */
function translateSector(sector, langCode) {
  if (!sector || !langCode || langCode === 'en') return sector;
  const map = SECTOR_TRANSLATIONS[langCode];
  if (!map) return sector;
  return map[sector] || sector;
}

/**
 * Formats a scheme into the strict JSON schema specification with 100% pure native language.
 * Uses vernacularDetails[langCode] for all 21 schemes — zero English fallback for all 7 languages.
 */
function formatSchemeForSchema(scheme, detectedSector, language = 'English') {
  const lang = (language || 'English').toLowerCase();
  const code = scheme.shortCode || scheme.schemeId || 'PMMY';
  const schemeId = code;
  const redirect_url = `/schemes/${schemeId}`;

  // Map language name → ISO code
  const langCode =
    (lang.includes('telugu') || lang === 'te') ? 'te' :
    (lang.includes('kannada') || lang === 'kn') ? 'kn' :
    (lang.includes('bengali') || lang === 'bn') ? 'bn' :
    (lang.includes('tamil') || lang === 'ta') ? 'ta' :
    (lang.includes('marathi') || lang === 'mr') ? 'mr' :
    (lang.includes('hindi') || lang === 'hi') ? 'hi' : 'en';

  // ─── Primary: vernacularDetails for the requested language ───────────────────
  let vd = scheme.vernacularDetails && scheme.vernacularDetails[langCode];

  // Fallback: if vernacularDetails missing (e.g. from MongoDB without updated field),
  // look up in the comprehensive in-memory schemes data
  if (!vd && langCode !== 'en') {
    // schemes
    const inMemScheme = COMPREHENSIVE_GOVT_SCHEMES.find(m =>
      (m.shortCode && m.shortCode === code) ||
      (m.schemeId && m.schemeId === code) ||
      (m.schemeName && m.schemeName === scheme.schemeName)
    );
    vd = inMemScheme && inMemScheme.vernacularDetails && inMemScheme.vernacularDetails[langCode];
  }

  if (vd && langCode !== 'en') {
    const sectorNative = translateSector(scheme.targetSector || detectedSector, langCode);
    // Use first benefit as the benefit_tag card badge
    const benefitTag = vd.benefits && vd.benefits.length > 0
      ? vd.benefits[0]
      : (vd.loanAmount || vd.interestRate || '');

    return {
      scheme_id: schemeId,
      title: vd.name || scheme.schemeName,
      sector: sectorNative,
      max_amount: vd.loanAmount || scheme.loanAmountFormatted || '',
      benefit_tag: benefitTag,
      description: vd.description || '',
      redirect_url
    };
  }

  // ─── English fallback ─────────────────────────────────────────────────────────
  const isTransport = detectedSector === 'Services / Commercial Transport' || detectedSector === 'Commercial Transport';
  const enVd = scheme.vernacularDetails && scheme.vernacularDetails['en'];
  const defaultDesc = enVd
    ? enVd.description
    : (scheme.description
        ? scheme.description.split('.').slice(0, 2).join('.') + '.'
        : 'Collateral-free credit support provided by the Government of India.');

  return {
    scheme_id: schemeId,
    title: (code === 'PMMY' && isTransport)
      ? 'PM Mudra Yojana (Commercial Vehicle / Auto Loan)'
      : (enVd ? enVd.name : scheme.schemeName),
    sector: scheme.targetSector || detectedSector || 'Govt Scheme',
    max_amount: (enVd ? enVd.loanAmount : scheme.loanAmountFormatted) || 'Up to ₹10,00,000',
    benefit_tag: scheme.subsidyPercentage
      ? `${scheme.subsidyPercentage}% Capital Subsidy`
      : (enVd && enVd.benefits && enVd.benefits[0] ? enVd.benefits[0] : 'No Collateral Required'),
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
  } else if (lang.includes('tamil') || lang === 'ta' || /[\u0B80-\u0BFF]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'வணிக வாகனம் (ஆட்டோ ரிக்ஷா / லாரி / டாக்சி) வாங்குவதற்கு அரசிடமிருந்து கிடைக்கும் சிறந்த திட்டங்கள் இங்கே:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'உணவு வணிகம், சிறு உணவகம் அல்லது டிபன் சென்டருக்கான அரசு கடன் மற்றும் மானிய திட்டங்கள் இங்கே:';
    } else {
      conversationalMessage = 'உங்கள் கேள்வி மற்றும் தொழில் தேவையின் அடிப்படையில் மிகவும் பொருத்தமான அரசு திட்டங்கள் இங்கே:';
    }
  } else if (lang.includes('marathi') || lang === 'mr' || /[\u0900-\u097F]/.test(message)) {
    if (detectedSector === 'Commercial Transport') {
      conversationalMessage = 'व्यावसायिक वाहन (ऑटो रिक्षा / ट्रक / टॅक्सी) खरेदीसाठी सरकारच्या सर्वोत्तम कर्ज व अनुदान योजना येथे आहेत:';
    } else if (detectedSector === 'Food Business') {
      conversationalMessage = 'खाद्य व्यवसाय, हॉटेल किंवा टिफिन सेंटरसाठी सरकारी कर्ज आणि अनुदान योजना येथे आहेत:';
    } else {
      conversationalMessage = 'तुमच्या प्रश्न आणि व्यवसायाच्या गरजेनुसार सर्वात योग्य सरकारी योजना येथे आहेत:';
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
  const isTa = lang.includes('tamil') || lang === 'ta' || /[\u0B80-\u0BFF]/.test(message);
  const isMr = lang.includes('marathi') || lang === 'mr';

  const amountLabel = isKn ? 'ಗರಿಷ್ಠ ಮೊತ್ತ:' : (isBn ? 'সর্বোচ্চ পরিমাণ:' : (isTe ? 'ఆర్థిక సహాయం:' : (isHi ? 'अधिकतम राशि:' : (isTa ? 'அதிகபட்ச தொகை:' : (isMr ? 'कमाल रक्कम:' : 'Max Amount:')))));
  const benefitLabel = isKn ? 'ಪ್ರಯೋಜನ:' : (isBn ? 'সুবিধা:' : (isTe ? 'ప్రయోజనం:' : (isHi ? 'लाभ:' : (isTa ? 'பயன்:' : (isMr ? 'लाभ:' : 'Benefit:')))));
  const detailsLabel = isKn ? 'ವಿವರಗಳು:' : (isBn ? 'বিবরণ:' : (isTe ? 'వివరాలు:' : (isHi ? 'विवरण:' : (isTa ? 'விவரங்கள்:' : (isMr ? 'तपशील:' : 'Details:')))));

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
  const isDiscovery = (detectedSector === 'Discovery');
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
    if (parsed.schemes.length === 0 && relevantSchemes.length > 0) {
      parsed.schemes = relevantSchemes.slice(0, 3).map(s => formatSchemeForSchema(s, detectedSector, effectiveLang));
    }
    // Pre-resolve all schemes so we can do vernacular overlay for any scheme Gemini returns
    const allSchemesPool = await clientDataStore.getSchemes().catch(() => relevantSchemes);
    const schemeSearchPool = [...new Map([...relevantSchemes, ...(Array.isArray(allSchemesPool) ? allSchemesPool : relevantSchemes)].map(x=>[(x.shortCode||x.schemeId||x.schemeName||Math.random()),x])).values()];

    let returnedSchemes = (Array.isArray(parsed.schemes) && parsed.schemes.length > 0)
      ? parsed.schemes
      : relevantSchemes.slice(0, 3).map(s => formatSchemeForSchema(s, detectedSector, effectiveLang));

    returnedSchemes = returnedSchemes.map(s => {
      const titleLower = (s.title || '').toLowerCase();
      const schemeIdLower = (s.scheme_id || '').toLowerCase();
      const groundTruth = schemeSearchPool.find(gt => 
        (gt.shortCode && gt.shortCode.toLowerCase() === schemeIdLower) ||
        (gt.schemeId && gt.schemeId.toLowerCase() === schemeIdLower) ||
        (gt.schemeName && titleLower.length > 4 && gt.schemeName.toLowerCase().includes(titleLower)) ||
        (titleLower && (gt.shortCode||'').length > 2 && titleLower.includes((gt.shortCode || '').toLowerCase())) ||
        (gt.schemeName && titleLower && titleLower.split(' ').filter(w=>w.length>3).some(w=>gt.schemeName.toLowerCase().includes(w)))
      );

      const exactId = groundTruth ? (groundTruth.shortCode || groundTruth.schemeId) : (s.scheme_id || 'PMMY');

      // ─── Vernacular overlay: replace any English card content with native language data ───
      if (groundTruth && effectiveLang !== 'English') {
        const vernacularCard = formatSchemeForSchema(groundTruth, detectedSector, effectiveLang);
        return {
          ...s,
          scheme_id: exactId,
          redirect_url: `/schemes/${exactId}`,
          title: vernacularCard.title || s.title,
          description: vernacularCard.description || s.description,
          sector: vernacularCard.sector || s.sector,
          max_amount: vernacularCard.max_amount || s.max_amount,
          benefit_tag: vernacularCard.benefit_tag || s.benefit_tag
        };
      }

      return {
        ...s,
        scheme_id: exactId,
        redirect_url: `/schemes/${exactId}`
      };
    });

    const isTe = effectiveLang === 'Telugu';
    const isKn = effectiveLang === 'Kannada';
    const isBn = effectiveLang === 'Bengali';
    const isHi = effectiveLang === 'Hindi';
    const isTa = effectiveLang === 'Tamil';
    const isMr = effectiveLang === 'Marathi';

    const amountLabel = isTe ? 'ఆర్థిక సహాయం:' : (isKn ? 'ಗರಿಷ್ಠ ಮೊತ್ತ:' : (isBn ? 'সর্বোচ্চ পরিমাণ:' : (isHi ? 'अधिकतम राशि:' : (isTa ? 'அதிகபட்ச தொகை:' : (isMr ? 'कमाल रक्कम:' : 'Max Amount:')))));
    const benefitLabel = isTe ? 'ప్రయోజనం:' : (isKn ? 'ಪ್ರಯೋಜನ:' : (isBn ? 'সুবিধা:' : (isHi ? 'लाभ:' : (isTa ? 'பயன்:' : (isMr ? 'लाभ:' : 'Benefit:')))));
    const detailsLabel = isTe ? 'వివరాలు:' : (isKn ? 'ವಿವರಗಳು:' : (isBn ? 'বিবরণ:' : (isHi ? 'विवरण:' : (isTa ? 'விவரங்கள்:' : (isMr ? 'तपशील:' : 'Details:')))));

    const conversationalMessage = (parsed.message && parsed.type === 'scheme_recommendation')
      ? parsed.message
      : (buildVernacularResponse(message, relevantSchemes, effectiveLang, userProfile, detectedSector).message);

    const backwardCompatibleReply = `${conversationalMessage}\n\n` + returnedSchemes.map((s, idx) => 
      `${idx + 1}. **${s.title}**\n   - **${amountLabel}** ${s.max_amount}\n   - **${benefitLabel}** ${s.benefit_tag}\n   - **${detailsLabel}** ${s.description}`
    ).join('\n\n');

    return {
      type: 'scheme_recommendation',
      message: conversationalMessage,
      target_sector: detectedSector,
      schemes: returnedSchemes,
      business_options: [],
      // Backward compatibility
      reply: backwardCompatibleReply,
      recommendedSchemes: returnedSchemes.map(s => ({
        schemeName: s.title,
        loanAmount: s.max_amount,
        subsidy: s.benefit_tag,
        sector: s.sector,
        url: s.redirect_url,
        schemeId: s.scheme_id
      })),
      detectedSector: detectedSector,
      source: `Google Gemini (${geminiResult.model}) (Autonomous AI)`,
      language: effectiveLang,
      bhashiniVoiceEnabled: true
    };
  }

  // Graceful Dynamic Vernacular Fallback
  return buildVernacularResponse(message, relevantSchemes, effectiveLang, userProfile, detectedSector);
}





window.UdyamRAGEngine = {
  handleRAGConversationalChat: async function(message, language = 'Telugu', userProfile = null, conversationHistory = []) {
    return await handleRAGConversationalChat(message, language, userProfile, conversationHistory);
  },
  classifyUserSector: classifyUserSector,
  retrieveRelevantSchemes: retrieveRelevantSchemes,
  isGreetingMessage: isGreetingMessage,
  isDiscoveryOrUnspecifiedQuery: isDiscoveryOrUnspecifiedQuery,
  buildGreetingResponse: buildGreetingResponse,
  buildDiscoveryResponse: buildDiscoveryResponse,
  DISCOVERY_BUSINESS_OPTIONS: DISCOVERY_BUSINESS_OPTIONS
};
console.log('[Udyam Setu] Autonomous Client RAG Engine Loaded successfully with ' + COMPREHENSIVE_GOVT_SCHEMES.length + ' schemes.');
})(window);
