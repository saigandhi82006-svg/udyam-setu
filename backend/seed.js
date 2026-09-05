const mongoose = require('mongoose');
require('dotenv').config();
const { connectDB, isConnected, isInMemoryFallback } = require('./config/db');
const Scheme = require('./models/Scheme');
const ChannelPartner = require('./models/ChannelPartner');
const User = require('./models/User');
const Application = require('./models/Application');
const dataStore = require('./services/dataStore');
const { COMPREHENSIVE_GOVT_SCHEMES } = require('./data/comprehensiveSchemes');

const SEED_SCHEMES = [
  {
    _id: '65e000000000000000000001',
    schemeName: 'PM Mudra Yojana',
    shortCode: 'PMMY',
    category: 'Central Government',
    tagline: 'Funding the Unfunded - Collateral Free Micro Loans',
    vernacularNames: {
      te: 'ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర వ్యాపార రుణం - రూ. 10 లక్షలు)',
      hi: 'प्रधानमंत्री मुद्रा योजना (10 लाख तक बिना गारंटी ऋण)',
      kn: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ)',
      bn: 'প্রধানমন্ত্রী মুদ্রা যোজনা (১০ লাখ পর্যন্ত বিনা বন্ধকী ঋণ)',
      mr: 'पंतप्रधान मुद्रा योजना (10 लाखांपर्यंत विनातारण कर्ज)',
      ta: 'பிரதான் மந்திரி முத்ரா திட்டம் (ரூ. 10 லட்சம் வரை பிணையில்லா கடன்)'
    },
    description: 'Pradhan Mantri Mudra Yojana (PMMY) provides loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises. Divided into Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5,00,000), and Tarun (₹5,00,000 to ₹10,00,000).',
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: 'Up to ₹10,00,000',
    interestRate: '8% - 12% (approx.)',
    interestRateNumeric: 9.5,
    repaymentPeriod: 'Up to 5 Years',
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0, // No cap
    eligibleCategories: ['All', 'General', 'OBC', 'SC', 'ST', 'Women Entrepreneur'],
    eligibleBusinessTypes: [
      'Food Business',
      'Retail / Kirana Shop',
      'Handicrafts & Handlooms',
      'Textile & Garments',
      'Manufacturing & Fabrication',
      'Services / Repair Shop',
      'Street Vending',
      'Beauty & Wellness'
    ],
    minExperienceYears: 0,
    subsidyPercentage: 0,
    whoCanApply: 'Micro & Small Enterprises, Shopkeepers, Artisans',
    purpose: 'Business Expansion, Working Capital, New Business Setup',
    benefits: [
      '100% Collateral-free loan with zero processing fee for Shishu',
      'Flexible repayment tenure up to 5 years',
      'Mudra Debit Card issued for daily working capital withdrawal',
      'Available across all commercial, regional rural banks, and NBFCs'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'UIDAI Identity verification', isMandatory: true },
      { docName: 'PAN Card', description: 'Tax identity', isMandatory: true },
      { docName: 'Business Plan', description: 'Brief proposal of activity and estimated revenue', isMandatory: false },
      { docName: 'Bank Statement', description: 'Last 6 months account statement', isMandatory: false },
      { docName: 'Address Proof', description: 'Ration card, Electricity bill, or Voter ID', isMandatory: true }
    ],
    tags: ['Low Interest', 'Easy Process', 'Collateral-Free', 'Top Choice'],
    applicationUrl: 'https://www.mudra.org.in'
  },
  {
    _id: '65e000000000000000000002',
    schemeName: 'PMEGP Scheme',
    shortCode: 'PMEGP',
    category: 'Central Government',
    tagline: 'Prime Minister Employment Generation Programme with up to 35% Subsidy',
    vernacularNames: {
      te: 'పీఎంఈజీపీ ఆహార తయారీ పథకం (35% ప్రభుత్వ నగదు సబ్సిడీ)',
      hi: 'पीएमईजीपी सूक्ष्म उद्योग योजना (35% नकद सब्सिडी)',
      kn: 'ಪಿಎಂಇಜಿಪಿ ಯೋಜನೆ (35% ನಗದು ಸಬ್ಸಿಡಿ)',
      bn: 'পিএমইজিপি যোজনা (৩৫% সরকারি অনুদান)',
      mr: 'पीएमईजीपी योजना (35% सरकारी अनुदान)',
      ta: 'பிஎம்இஜிபி திட்டம் (35% மானியம்)'
    },
    description: 'A credit-linked subsidy programme to generate self-employment opportunities through establishment of micro-enterprises in non-farm sectors by helping traditional artisans and unemployed youth.',
    maxGrantLoanAmount: 2500000,
    loanAmountFormatted: 'Up to ₹25,00,000',
    interestRate: '9% - 11% (approx.)',
    interestRateNumeric: 10.0,
    repaymentPeriod: 'Up to 7 Years',
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ['OBC', 'SC', 'ST', 'Women Entrepreneur', 'Minority', 'General'],
    eligibleBusinessTypes: [
      'Manufacturing & Fabrication',
      'Food Business',
      'Agriculture & Allied',
      'Textile & Garments',
      'Handicrafts & Handlooms',
      'Services / Repair Shop'
    ],
    minExperienceYears: 0,
    subsidyPercentage: 35,
    whoCanApply: 'Individuals above 18 years, SHGs, Co-operative societies',
    purpose: 'Setting up new micro units in manufacturing or services sector',
    benefits: [
      'Government subsidy of 15% to 25% for General category in Urban/Rural',
      'Higher subsidy of 25% to 35% for SC, ST, OBC, Women, and Rural applicants',
      'Bank credit for 90% to 95% of project cost',
      'Mandatory EDP (Entrepreneurship Development Training) provided free'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'Identity verification', isMandatory: true },
      { docName: 'PAN Card', description: 'Tax identity', isMandatory: true },
      { docName: 'Caste / Community Certificate', description: 'Required for OBC/SC/ST subsidy', isMandatory: true },
      { docName: 'Detailed Project Report (DPR)', description: 'Technical and financial estimates', isMandatory: true },
      { docName: 'Education Qualification (8th pass)', description: 'Required if project > ₹10 Lakh', isMandatory: false }
    ],
    tags: ['High Subsidy (Up to 35%)', 'For New Business', 'Govt Grant'],
    applicationUrl: 'https://www.kviconline.gov.in/pmegpeportal'
  },
  {
    _id: '65e000000000000000000003',
    schemeName: 'Stand Up India Scheme',
    shortCode: 'SUIS',
    category: 'Central Government',
    tagline: 'Empowering SC, ST, and Women Entrepreneurs with Greenfield Credit',
    vernacularNames: {
      te: 'స్టాండ్-అప్ ఇండియా పథకం (ఎస్సీ, ఎస్టీ, మహిళలకు రూ. 1 కోటి వరకు రుణం)',
      hi: 'स्टैंड-अप इंडिया योजना (एससी/एसटी और महिला उद्यमियों के लिए)',
      kn: 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (ಎಸ್‌ಸಿ, ಎಸ್‌ಟಿ ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ)',
      bn: 'স্ট্যান্ড-আপ ইন্ডিয়া যোজনা (তফসিলি জাতি/উপজাতি ও নারী উদ্যোক্তাদের জন্য)',
      mr: 'स्टँड-अप इंडिया योजना (अनुसूचित जाती, जमाती आणि महिलांसाठी)',
      ta: 'ஸ்டாண்ட் அப் இந்தியா திட்டம் (எஸ்சி, எஸ்டி மற்றும் பெண் தொழில்முனைவோர்)'
    },
    description: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.',
    maxGrantLoanAmount: 10000000,
    loanAmountFormatted: '₹10 Lakh to ₹1 Crore',
    interestRate: '8% - 10% (concessional)',
    interestRateNumeric: 8.75,
    repaymentPeriod: 'Up to 7 Years',
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ['SC', 'ST', 'Women Entrepreneur'],
    eligibleBusinessTypes: [
      'Food Business',
      'Manufacturing & Fabrication',
      'Retail / Kirana Shop',
      'Textile & Garments',
      'Services / Repair Shop',
      'IT & Digital Services',
      'Agriculture & Allied'
    ],
    minExperienceYears: 1,
    subsidyPercentage: 15,
    whoCanApply: 'SC/ST and/or Woman entrepreneurs above 18 years',
    purpose: 'Greenfield project in manufacturing, services, agri-allied, or trading',
    benefits: [
      'High ticket loan size from ₹10 Lakh up to ₹100 Lakh (₹1 Crore)',
      'Lowest applicable interest rate: Base Rate + 3% + tenor premium',
      'Moratorium period up to 18 months before principal repayment starts',
      'Handholding support through SIDBI Standup Mitra portal'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'Identity Verification', isMandatory: true },
      { docName: 'PAN Card', description: 'Permanent Account Number', isMandatory: true },
      { docName: 'Caste Certificate / Proof of Woman Ownership', description: 'Min 51% stake required', isMandatory: true },
      { docName: 'Project Report & Quotations', description: 'Plant, machinery and civil estimates', isMandatory: true },
      { docName: 'Bank Statement', description: 'Past 1 year financial records', isMandatory: true }
    ],
    tags: ['For SC/ST & Women', 'High Loan Limit', 'Handholding Support'],
    applicationUrl: 'https://www.standupmitra.in'
  },
  {
    _id: '65e000000000000000000004',
    schemeName: 'PM SVANidhi',
    shortCode: 'PMSVANIDHI',
    category: 'Central Government',
    tagline: 'Special Micro-Credit Facility for Street Vendors',
    vernacularNames: {
      te: 'పీఎం స్వనిధి పథకం (వీధి వ్యాపారులకు రూ. 50,000 వరకు వడ్డీ సబ్సిడీ రుణం)',
      hi: 'पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स के लिए ₹50,000 तक ऋण)',
      kn: 'ಪಿಎಂ ಸ್ವನಿಧಿ ಯೋಜನೆ (ಬೀದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಸಾಲ)',
      bn: 'প্রধানমন্ত্রী স্বনিধি যোজনা (পথ বিক্রেতাদের জন্য ৫০,০০০ টাকা ঋণ)',
      mr: 'पीएम स्वनिधी योजना (फेरीवाल्यांसाठी ₹50,000 पर्यंत कर्ज)',
      ta: 'பிஎம் ஸ்வநிதி திட்டம் (தெருவோர வியாபாரிகளுக்கு ₹50,000 வரை கடன்)'
    },
    description: 'Ministry of Housing and Urban Affairs initiative providing affordable working capital credit to street vendors to resume their livelihoods with up to 7% interest subsidy.',
    maxGrantLoanAmount: 50000,
    loanAmountFormatted: 'Up to ₹50,000',
    interestRate: 'Subsidized (7% Interest Subsidy)',
    interestRateNumeric: 7.0,
    repaymentPeriod: '1 to 2 Years',
    repaymentPeriodYears: 1.5,
    minAge: 18,
    maxIncome: 200000,
    eligibleCategories: ['All', 'General', 'OBC', 'SC', 'ST'],
    eligibleBusinessTypes: ['Street Vending', 'Food Business', 'Retail / Kirana Shop'],
    minExperienceYears: 0,
    subsidyPercentage: 7,
    whoCanApply: 'Urban and peri-urban street vendors, hawkers, thela carts',
    purpose: 'Working capital to buy goods, vegetables, snacks, daily inventory',
    benefits: [
      '1st loan: ₹10,000; 2nd loan: ₹20,000; 3rd loan: ₹50,000 on timely repayment',
      '7% interest subsidy directly credited into bank account quarterly',
      'Cashback up to ₹1,200/year on digital transactions (UPI/QR code)',
      'No collateral or security needed'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'Mobile linked Aadhaar', isMandatory: true },
      { docName: 'Vending Certificate / Letter of Recommendation', description: 'From Urban Local Body or Town Vending Committee', isMandatory: true },
      { docName: 'Bank Passbook Copy', description: 'Active bank account', isMandatory: true }
    ],
    tags: ['Collateral-Free', 'Interest Subsidy', 'Fast Approval'],
    applicationUrl: 'https://pmsvanidhi.mohua.gov.in'
  },
  {
    _id: '65e000000000000000000005',
    schemeName: 'PM Vishwakarma Yojana',
    shortCode: 'PMVY',
    category: 'Central Government',
    tagline: 'Holistic Support to Traditional Artisans and Craftspersons',
    vernacularNames: {
      te: 'పీఎం విశ్వకర్మ యోజన (చేతివృత్తుల వారికి రూ. 3 లక్షలు & రూ. 15,000 టూల్‌కిట్)',
      hi: 'पीएम विश्वकर्मा योजना (कारीगरों के लिए ₹3 लाख ऋण और ₹15,000 टूलकिट)',
      kn: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ₹3 ಲಕ್ಷ ಸಾಲ ಮತ್ತು ₹15,000 ಟೂಲ್‌ಕಿಟ್)',
      bn: 'প্রধানমন্ত্রী বিশ্বকর্মা যোজনা (কারিগরদের জন্য ৩ লাখ ঋণ ও ১৫,০০০ টাকা টুলকিট)',
      mr: 'पीएम विश्वकर्मा योजना (कारागिरांसाठी ₹3 लाख कर्ज व ₹15,000 टूलकिट)',
      ta: 'பிரதமர் விஸ்வகர்மா திட்டம் (கைவினைஞர்களுக்கு ₹3 லட்சம் கடன் மற்றும் ₹15,000 கருவித்தொகுப்பு)'
    },
    description: 'Central sector scheme for end-to-end support to artisans and craftspeople working with hands and tools across 18 traditional trades.',
    maxGrantLoanAmount: 300000,
    loanAmountFormatted: 'Up to ₹3,00,000 (5% Concessional Interest)',
    interestRate: '5% fixed concessional rate',
    interestRateNumeric: 5.0,
    repaymentPeriod: 'Up to 3 Years',
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ['All', 'OBC', 'SC', 'ST'],
    eligibleBusinessTypes: ['Handicrafts & Handlooms', 'Manufacturing & Fabrication', 'Services / Repair Shop'],
    minExperienceYears: 1,
    subsidyPercentage: 8,
    whoCanApply: 'Carpenters, Blacksmiths, Potters, Cobblers, Tailors, Weavers, Basket makers',
    purpose: 'Modern tools procurement, workshop setup, and working capital',
    benefits: [
      '₹15,000 grant for modern toolkits upon verification',
      'Loan tranche 1: ₹1,00,000 (18 months); Tranche 2: ₹2,00,000 (30 months)',
      'Fixed interest rate of only 5% with government interest subvention cap of 8%',
      'PM Vishwakarma Certificate & ID Card providing national recognition'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'Identity verification', isMandatory: true },
      { docName: 'PAN Card', description: 'Tax identity', isMandatory: false },
      { docName: 'Bank Account Details', description: 'DBT enabled bank account', isMandatory: true },
      { docName: 'Ration Card', description: 'Family verification', isMandatory: true }
    ],
    tags: ['Toolkit Grant (₹15,000)', '5% Low Interest', 'Traditional Crafts'],
    applicationUrl: 'https://pmvishwakarma.gov.in'
  },
  {
    _id: '65e000000000000000000006',
    schemeName: 'Mahila Coir Yojana',
    shortCode: 'MCY',
    category: 'Rural Development',
    tagline: 'Women Empowerment through Rural Coir & Fiber Processing',
    vernacularNames: {
      te: 'మహిళా కాయిర్ యోజన (గ్రామీణ మహిళలకు 75% సబ్సిడీ)',
      hi: 'महिला कॉयर योजना (ग्रामीण महिलाओं के लिए 75% सब्सिडी)',
      kn: 'ಮಹಿಳಾ ಕಾಯರ್ ಯೋಜನೆ (ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ 75% ಸಬ್ಸಿಡಿ)',
      bn: 'মহিলা কয়্যার যোজনা (গ্রামীণ নারীদের জন্য ৭৫% ভর্তুকি)',
      mr: 'महिला कॉयर योजना (ग्रामीण महिलांसाठी 75% अनुदान)',
      ta: 'மகிளா கயிறு திட்டம் (கிராமப்புற பெண்களுக்கு 75% மானியம்)'
    },
    description: 'Women-centric self-employment scheme by the Coir Board aimed at rural women entrepreneurs providing spinning ratts with up to 75% financial subsidy.',
    maxGrantLoanAmount: 350000,
    loanAmountFormatted: 'Up to ₹3,50,000',
    interestRate: 'Subsidized (0% - 6%)',
    interestRateNumeric: 6.0,
    repaymentPeriod: 'Up to 3 Years',
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 250000,
    eligibleCategories: ['Women Entrepreneur'],
    eligibleBusinessTypes: ['Handicrafts & Handlooms', 'Agriculture & Allied'],
    minExperienceYears: 0,
    subsidyPercentage: 75,
    whoCanApply: 'Rural women trained in coir manufacturing or allied rural handicrafts',
    purpose: 'Purchase of motorized ratts, spinning equipment, and coir yarn processing',
    benefits: [
      '75% cost subsidy on motorized traditional ratts and coir machinery',
      'Two months training stipend provided to rural women',
      'Promotes sustainable eco-friendly bio-fiber ventures'
    ],
    requiredDocuments: [
      { docName: 'Aadhaar Card', description: 'Proof of identity', isMandatory: true },
      { docName: 'Coir Board Training Certificate', description: 'Or self-declaration of handicraft skill', isMandatory: true },
      { docName: 'Bank Statement', description: 'Bank passbook', isMandatory: true }
    ],
    tags: ['75% Subsidy', 'Women Exclusive', 'Eco Livelihood'],
    applicationUrl: 'http://coirboard.gov.in'
  }
];

const SEED_PARTNERS = [
  {
    _id: '65e100000000000000000001',
    partnerName: 'Andhra Grameena Bank (RRB)',
    type: 'Bank',
    address: 'Koti Main Road, Beside Head Post Office, Hyderabad, Telangana',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500095',
    location: {
      type: 'Point',
      coordinates: [78.4890, 17.3880] // [lng, lat]
    },
    contactPhone: '+91 40 2475 8890',
    contactPerson: 'Srinivasa Rao (Branch Manager)',
    servicesOffered: ['Mudra Loans', 'PMEGP Subsidy Disbursement', 'KCC Credit', 'SHG Finance'],
    rating: 4.8,
    workingHours: '10:00 AM - 4:30 PM (Mon-Sat)'
  },
  {
    _id: '65e100000000000000000002',
    partnerName: 'KVK Business & Technology Center',
    type: 'KVK',
    address: 'PJTSAU Agricultural University Campus, Rajendranagar, Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500030',
    location: {
      type: 'Point',
      coordinates: [78.4750, 17.3780]
    },
    contactPhone: '+91 40 2401 5380',
    contactPerson: 'Dr. K. Anuradha (Senior Scientist & Head)',
    servicesOffered: ['Agri-Business Incubation', 'Food Processing Training', 'DPR Preparation', 'Govt Grant Handholding'],
    rating: 4.9,
    workingHours: '9:30 AM - 5:30 PM (Mon-Fri)'
  },
  {
    _id: '65e100000000000000000003',
    partnerName: 'State Bank of India (MSME Specialized Branch)',
    type: 'Bank',
    address: 'Gunfoundry, Near Mahipatram Ashram, Abids, Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    location: {
      type: 'Point',
      coordinates: [78.4780, 17.3940]
    },
    contactPhone: '+91 40 2320 1200',
    contactPerson: 'Rajesh Sharma (Chief Manager SME)',
    servicesOffered: ['Stand Up India Facilitation', 'Mudra Tarun Loans', 'CGTMSE Guarantees'],
    rating: 4.6,
    workingHours: '10:00 AM - 4:00 PM (Mon-Sat)'
  },
  {
    _id: '65e100000000000000000004',
    partnerName: 'CSC Digital Seva Kendra (Common Service Center)',
    type: 'CSC',
    address: 'Shop 12, Opp. Municipal Complex, Chaderghat, Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500024',
    location: {
      type: 'Point',
      coordinates: [78.4950, 17.3820]
    },
    contactPhone: '+91 94401 23456',
    contactPerson: 'Mohammed Farooq (VLE Operator)',
    servicesOffered: ['Udyam Registration', 'PMEGP Online Form Filling', 'PM SVANidhi Verification', 'Aadhaar e-KYC'],
    rating: 4.7,
    workingHours: '9:00 AM - 8:00 PM (All 7 Days)'
  },
  {
    _id: '65e100000000000000000005',
    partnerName: 'District Industries Centre (DIC) MSME Facilitation Cell',
    type: 'DIC',
    address: 'Industrial Estate, Near Sanathnagar Railway Station, Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500018',
    location: {
      type: 'Point',
      coordinates: [78.4350, 17.4420]
    },
    contactPhone: '+91 40 2370 4567',
    contactPerson: 'V. Lakshmi (General Manager DIC)',
    servicesOffered: ['State MSME Subsidies', 'T-PRIDE SC/ST Incentives', 'Industrial Land Allocation'],
    rating: 4.5,
    workingHours: '10:30 AM - 5:00 PM (Mon-Sat)'
  }
];

const SEED_USER = {
  _id: '65e200000000000000000001',
  name: 'Ravi Kumar',
  phone: '9876543210',
  email: 'ravi.kumar@example.com',
  age: 28,
  category: 'OBC',
  annualIncome: 240000,
  businessType: 'Food Business',
  experienceYears: 2,
  location: {
    latitude: 17.3850,
    longitude: 78.4867,
    city: 'Hyderabad',
    state: 'Telangana'
  },
  savedSchemes: ['65e000000000000000000001']
};

const SEED_APPLICATION = {
  _id: '65e300000000000000000001',
  trackingId: 'UDS-847291',
  userId: '65e200000000000000000001',
  schemeId: '65e000000000000000000001',
  schemeName: 'PM Mudra Yojana',
  requestedAmount: 500000,
  proposedBusiness: 'South Indian Organic Canteen & Tiffin Center',
  status: 'Under Review',
  assignedPartnerId: '65e100000000000000000001',
  uploadedDocuments: [
    { docName: 'Aadhaar Card', status: 'Uploaded', fileSize: '1.2 MB', uploadedAt: new Date() },
    { docName: 'PAN Card', status: 'Uploaded', fileSize: '0.8 MB', uploadedAt: new Date() },
    { docName: 'Business Plan', status: 'Pending', fileSize: '', uploadedAt: null },
    { docName: 'Bank Statement', status: 'Pending', fileSize: '', uploadedAt: null },
    { docName: 'Address Proof', status: 'Uploaded', fileSize: '2.1 MB', uploadedAt: new Date() }
  ],
  remarks: 'Application pre-screened by Udyam Setu Rule Engine (90% Match). Sent to Andhra Grameena Bank for physical inspection.'
};

async function seedData() {
  console.log('🌱 Seeding Udyam Setu Database with realistic Indian government schemes...');
  await connectDB();

  // Use the canonical 21-schemes catalog with full 7-language support
  const allSchemesCombined = COMPREHENSIVE_GOVT_SCHEMES.map((s, idx) => ({
    _id: `65e0000000000000000000${(20 + idx).toString()}`,
    ...s
  }));

  // Populate In-Memory Store always
  dataStore.memoryDB.schemes = [...allSchemesCombined];
  dataStore.memoryDB.partners = [...SEED_PARTNERS];
  dataStore.memoryDB.users = [SEED_USER];
  dataStore.memoryDB.applications = [SEED_APPLICATION];

  console.log(`✅ Loaded ${allSchemesCombined.length} dynamic schemes across Agriculture, MSME, Students, Women, and Artisans.`);
  console.log(`✅ Loaded ${SEED_PARTNERS.length} channel partners into In-Memory Store.`);
  console.log(`✅ Loaded default entrepreneur profile & application into In-Memory Store.`);

  // If connected to real MongoDB, synchronize collections
  if (!isInMemoryFallback() && mongoose.connection.readyState === 1) {
    try {
      await Scheme.deleteMany({});
      await Scheme.insertMany(allSchemesCombined);

      await ChannelPartner.deleteMany({});
      await ChannelPartner.insertMany(SEED_PARTNERS);

      await User.deleteMany({});
      await User.create(SEED_USER);

      await Application.deleteMany({});
      await Application.create(SEED_APPLICATION);

      console.log('✅ Synchronized all collections to active MongoDB instance!');
    } catch (err) {
      console.warn('MongoDB sync warning:', err.message);
    }
  }

  console.log('🚀 Seeding complete! Platform is ready for SIH evaluation.');
}

if (require.main === module) {
  seedData()
    .then(() => process.exit(0))
    .catch(err => {
      console.error('Seed error:', err);
      process.exit(1);
    });
}

module.exports = {
  seedData,
  SEED_SCHEMES,
  SEED_PARTNERS,
  SEED_USER,
  SEED_APPLICATION
};
