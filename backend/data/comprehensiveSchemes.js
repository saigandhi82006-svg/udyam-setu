/**
 * Comprehensive Indian Government Schemes Catalog for Udyam Setu
 * Ground Truth Data indexed from myScheme.gov.in, data.gov.in (OGD), and Ministry Portals.
 * Covers: Agriculture, MSME, Students & Youth, Women Entrepreneurs, Artisans & Street Vendors.
 */

const COMPREHENSIVE_GOVT_SCHEMES = [
  // ==========================================
  // 🌾 1. AGRICULTURE & ALLIED ACTIVITIES
  // ==========================================
  {
    schemeName: "Agriculture Infrastructure Fund (AIF)",
    shortCode: "AIF",
    category: "Central Government",
    targetSector: "Agriculture",
    tagline: "Post-harvest farm infrastructure credit with 3% interest subvention",
    vernacularNames: {
      te: "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF)",
      hi: "कृषि अवसंरचना कोष (AIF)",
      mr: "कृषी पायाभूत सुविधा निधी (AIF)"
    },
    description: "Provides medium to long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.",
    maxGrantLoanAmount: 200000000, // Up to 2 Crore per project
    loanAmountFormatted: "Up to ₹2 Crore (with 3% Interest Subsidy)",
    interestRate: "Subsidized (3% Interest Subvention p.a.)",
    interestRateNumeric: 6.0,
    repaymentPeriod: "Up to 7 Years (Moratorium up to 2 Years)",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Agriculture & Allied", "Food Processing", "Cold Storage", "Warehousing", "Dairy"],
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
    schemeName: "Kisan Credit Card (KCC) Scheme",
    shortCode: "KCC",
    category: "Central Government",
    targetSector: "Agriculture",
    tagline: "Short-term credit for crops, animal husbandry, and fisheries at 4% net interest",
    vernacularNames: {
      te: "కిసాన్ క్రెడిట్ కార్డ్ (KCC)",
      hi: "किसान क्रेडिट कार्ड (KCC)",
      mr: "किसान क्रेडिट कार्ड (KCC)"
    },
    description: "Simplifies credit delivery mechanism for farmers to meet short-term crop production credit requirements, post-harvest expenses, and dairy/fishery maintenance.",
    maxGrantLoanAmount: 300000,
    loanAmountFormatted: "Up to ₹3,00,000 (at 4% effective interest)",
    interestRate: "Effective 4% p.a. (with timely repayment)",
    interestRateNumeric: 4.0,
    repaymentPeriod: "12 Months (Revolving Credit Facility)",
    repaymentPeriodYears: 1,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Agriculture & Allied", "Dairy & Livestock", "Poultry", "Fisheries"],
    minExperienceYears: 0,
    subsidyPercentage: 3, // 3% prompt repayment incentive + 2% interest subvention = 4% net
    whoCanApply: "Owner cultivators, tenant farmers, oral lessees, sharecroppers, and SHGs of farmers",
    purpose: "Purchase of seeds, fertilizers, pesticides, diesel, cattle feed, and working capital",
    benefits: [
      "No collateral required for loans up to ₹1,60,000",
      "Simple interest rate of 7% p.a., reduced to 4% p.a. upon prompt repayment",
      "ATM-enabled RuPay debit card provided for easy cash withdrawals"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity proof", isMandatory: true },
      { docName: "Land Record / Tenancy Agreement", description: "Cultivation proof", isMandatory: true },
      { docName: "Crop Pattern Certificate", description: "Crops cultivated in current season", isMandatory: true }
    ],
    applicationUrl: "https://pmkisan.gov.in",
    tags: ["Lowest Interest", "Collateral-Free", "Immediate Working Capital"]
  },
  {
    schemeName: "Sub-Mission on Agricultural Mechanization (SMAM - Tractor & Equipment Subsidy)",
    shortCode: "SMAM",
    category: "Central Government",
    targetSector: "Agriculture",
    tagline: "40% to 50% capital subsidy on tractors, harvesters, and modern farm tools",
    vernacularNames: {
      te: "వ్యవసాయ యాంత్రీకరణ సబ్సిడీ పథకం (ట్రాక్టర్ సబ్సిడీ)",
      hi: "कृषि यंत्रीकरण उप-मिशन (ट्रैक्टर एवं कृषि यंत्र सब्सिडी)",
      mr: "कृषी यांत्रिकीकरण उप-अभियान (ट्रॅक्टर सबसिडी)"
    },
    description: "Promotes farm mechanization among small and marginal farmers with up to 50% direct cash subsidy on purchasing tractors, power tillers, rotavators, and harvesters.",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Subsidy up to ₹5,00,000 on farm machinery",
    interestRate: "Bank loan rate (8% - 10%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "Women Entrepreneur", "Small & Marginal Farmers"],
    eligibleBusinessTypes: ["Agriculture & Allied", "Custom Hiring Centers", "Farm Services"],
    minExperienceYears: 0,
    subsidyPercentage: 50, // Up to 50% subsidy for SC/ST/Women/Small farmers, 40% for others
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
    tags: ["High Subsidy", "Equipment Purchase", "DBT Benefit"]
  },
  {
    schemeName: "Pradhan Mantri Matsya Sampada Yojana (PMMSY - Fisheries & Aquaculture)",
    shortCode: "PMMSY",
    category: "Central Government",
    targetSector: "Agriculture",
    tagline: "Up to 60% government subsidy for fish farming, biofloc, and cold chain vehicles",
    vernacularNames: {
      te: "ప్రధానమంత్రి మత్స్య సంపద యోజన (చేపల పెంపకం సబ్సిడీ)",
      hi: "प्रधानमंत्री मत्स्य संपदा योजना (मत्स्य पालन सब्सिडी)",
      mr: "प्रधानमंत्री मत्स्य संपदा योजना (मत्स्यव्यवसाय)"
    },
    description: "Transformational flagship scheme to modernize the fisheries sector with substantial government subsidies for pond construction, biofloc units, hatcheries, and refrigerated fish vans.",
    maxGrantLoanAmount: 5000000,
    loanAmountFormatted: "Project cost up to ₹50 Lakhs (40% - 60% Subsidy)",
    interestRate: "7% - 9% (concessional credit)",
    interestRateNumeric: 8.0,
    repaymentPeriod: "Up to 7 Years",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "Women Entrepreneur", "SC", "ST", "OBC", "General"],
    eligibleBusinessTypes: ["Fisheries & Aquaculture", "Agriculture & Allied", "Biofloc & RAS Units"],
    minExperienceYears: 0,
    subsidyPercentage: 60, // 60% for SC/ST/Women, 40% for General/OBC
    whoCanApply: "Fishers, fish farmers, SHGs, JLGs, fisheries cooperatives, and rural youth",
    purpose: "New pond construction, Biofloc fish tanks, ornamental fish units, insulated vehicles",
    benefits: [
      "60% project subsidy for Women, SC, and ST applicants",
      "40% project subsidy for all other categories",
      "Institutional finance with interest subvention from Fisheries and Aquaculture Infrastructure Development Fund"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Land/Waterbody Rights Certificate", description: "Ownership or 10-year lease agreement", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Technical plan and pond design", isMandatory: true },
      { docName: "Bank Passbook", description: "For Direct Benefit Transfer", isMandatory: true }
    ],
    applicationUrl: "https://pmmsy.dof.gov.in",
    tags: ["High Subsidy", "Women Priority", "Aquaculture"]
  },

  // ==========================================
  // 🏢 2. MSME & SMALL BUSINESS OWNERS
  // ==========================================
  {
    schemeName: "Pradhan Mantri Mudra Yojana (PMMY)",
    shortCode: "PMMY",
    category: "Central Government",
    targetSector: "MSME / Small Business",
    tagline: "Collateral-free business loans up to ₹10 Lakhs across Shishu, Kishore & Tarun tiers",
    vernacularNames: {
      te: "ప్రధాన మంత్రి ముద్ర యోజన (ముద్ర రుణం)",
      hi: "प्रधानमंत्री मुद्रा योजना",
      mr: "पंतप्रधान मुद्रा योजना"
    },
    description: "Provides non-farm, non-corporate micro and small enterprises with 100% collateral-free loans for working capital, equipment purchase, and retail store setup.",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Up to ₹10,00,000 (No Collateral)",
    interestRate: "8.5% - 11.5% p.a.",
    interestRateNumeric: 9.5,
    repaymentPeriod: "Up to 5 Years",
    repaymentPeriodYears: 5,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Food Business", "Retail / Kirana Shop", "Manufacturing & Fabrication", "Services / Repair Shop", "Textile & Garments"],
    minExperienceYears: 0,
    subsidyPercentage: 0,
    whoCanApply: "Small shopkeepers, fruits/vegetable vendors, small manufacturing units, artisans, food businesses",
    purpose: "Business expansion, inventory stock purchase, machinery setup, shop modernization",
    benefits: [
      "No mortgage or security collateral required up to ₹10 Lakhs",
      "Available under 3 categories: Shishu (up to ₹50,000), Kishore (₹50k - ₹5L), Tarun (₹5L - ₹10L)",
      "Low processing fees and Mudra Debit Card for working capital flexibility"
    ],
    requiredDocuments: [
      { docName: "Aadhaar & PAN Card", description: "Applicant KYC", isMandatory: true },
      { docName: "Proof of Business Address", description: "Electricity bill, shop rent agreement", isMandatory: true },
      { docName: "Quotation / Machinery Estimate", description: "Cost estimation for shop items or equipment", isMandatory: false }
    ],
    applicationUrl: "https://www.mudra.org.in",
    tags: ["Collateral-Free", "Low Interest", "Shishu Loan"]
  },
  {
    schemeName: "Prime Minister's Employment Generation Programme (PMEGP)",
    shortCode: "PMEGP",
    category: "Central Government",
    targetSector: "MSME / Small Business",
    tagline: "Credit-linked capital subsidy up to 35% for rural, SC/ST, OBC, and women entrepreneurs",
    vernacularNames: {
      te: "ప్రధాన మంత్రి ఉపాధి కల్పన కార్యక్రమం (పీఎంఈజీపీ - 35% రాయితీ)",
      hi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (35% सरकारी सब्सिडी)",
      mr: "पंतप्रधान रोजगार निर्मिती कार्यक्रम (35% सरकारी अनुदान)"
    },
    description: "Flagship credit-linked subsidy initiative by Ministry of MSME. Provides up to 35% non-repayable government cash grant for manufacturing and service ventures.",
    maxGrantLoanAmount: 5000000,
    loanAmountFormatted: "Up to ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Services)",
    interestRate: "Normal Bank Lending Rate (8.5% - 10.5%)",
    interestRateNumeric: 9.0,
    repaymentPeriod: "Up to 7 Years (Moratorium 6 - 12 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    eligibleCategories: ["OBC", "SC", "ST", "Women Entrepreneur", "Minority", "Ex-Servicemen", "Differently Abled (Divyangjan)", "General"],
    eligibleBusinessTypes: ["Manufacturing & Fabrication", "Services / Repair Shop", "Food Business", "Textile & Garments", "Handicrafts & Handlooms"],
    minExperienceYears: 0,
    subsidyPercentage: 35, // 35% in rural areas for special categories (OBC, SC, ST, Women, Divyangjan), 25% urban
    whoCanApply: "Individuals above 18 years (minimum 8th class pass for projects > ₹10L manufacturing or > ₹5L service)",
    purpose: "Setting up new manufacturing units, engineering workshops, bakeries, or commercial service centers",
    benefits: [
      "Direct 15% to 35% government capital subsidy (Margin Money Grant) that does not need repayment",
      "Beneficiary own contribution is only 5% to 10% of total project cost",
      "Free entrepreneurship skill development training (EDP) provided prior to loan disbursal"
    ],
    requiredDocuments: [
      { docName: "Aadhaar & PAN Card", description: "Identity KYC", isMandatory: true },
      { docName: "Detailed Project Report (DPR)", description: "Business project cost and profit estimation", isMandatory: true },
      { docName: "Special Category Certificate", description: "OBC, SC, ST, or Minority Certificate for 35% subsidy", isMandatory: false },
      { docName: "Educational Qualification (8th pass or above)", description: "Mark sheet / School leaving certificate", isMandatory: true }
    ],
    applicationUrl: "https://www.kviconline.gov.in/pmegpep",
    tags: ["Highest Subsidy (35%)", "Large Scale Loan", "Govt Cash Grant"]
  },
  {
    schemeName: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    shortCode: "CGTMSE",
    category: "Central Government",
    targetSector: "MSME / Small Business",
    tagline: "Collateral-free bank loans up to ₹5 Crore with up to 85% government guarantee",
    vernacularNames: {
      te: "CGTMSE పూచీకత్తు లేని లోన్ గ్యారెంటీ పథకం",
      hi: "सूक्ष्म एवं लघु उद्यम क्रेडिट गारंटी ट्रस्ट (CGTMSE)",
      mr: "सीजीटीएमएसई हमी योजना (CGTMSE)"
    },
    description: "Joint initiative by Ministry of MSME and SIDBI providing collateral-free credit to micro and small enterprises by guaranteeing up to 85% of default risk for banks.",
    maxGrantLoanAmount: 50000000,
    loanAmountFormatted: "Up to ₹5 Crore (No Third-Party Guarantee)",
    interestRate: "Base Rate + 1.5% - 2.5%",
    interestRateNumeric: 9.5,
    repaymentPeriod: "Up to 7 Years",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Manufacturing & Fabrication", "Services / Repair Shop", "Retail / Kirana Shop", "Textile & Garments"],
    minExperienceYears: 1,
    subsidyPercentage: 0,
    whoCanApply: "New and existing Micro and Small Enterprises in manufacturing or service sectors",
    purpose: "Procurement of factory machinery, industrial working capital, business scaling",
    benefits: [
      "100% collateral-free credit facility up to ₹5 Crore",
      "85% guarantee cover for women-owned enterprises and micro-enterprises up to ₹5 Lakhs",
      "Enables first-generation entrepreneurs without ancestral property to obtain large commercial bank credit"
    ],
    requiredDocuments: [
      { docName: "Udyam Registration Certificate", description: "MSME registration", isMandatory: true },
      { docName: "Audited Financials / ITR (Last 2 Years)", description: "Balance sheet & Profit-Loss", isMandatory: true },
      { docName: "Detailed Project Feasibility Report", description: "Revenue projections and machinery quotes", isMandatory: true }
    ],
    applicationUrl: "https://www.cgtmse.in",
    tags: ["Large Credit", "No Third-Party Guarantee", "Industrial Scale"]
  },

  // ==========================================
  // 🎓 3. STUDENTS, YOUTH & SKILLING
  // ==========================================
  {
    schemeName: "PM Vidyalaxmi Scheme (Higher Education Credit Support)",
    shortCode: "PM-VIDYALAXMI",
    category: "Central Government",
    targetSector: "Education / Youth",
    tagline: "Collateral-free, guarantor-free education loan up to ₹7.5 Lakh with 3% interest subsidy",
    vernacularNames: {
      te: "పీఎం విద్యాలక్ష్మి విద్యా రుణ పథకం",
      hi: "पीएम विद्यालक्ष्मी शिक्षा ऋण योजना",
      mr: "पीएम विद्यालक्ष्मी शैक्षणिक कर्ज योजना"
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
    eligibleBusinessTypes: ["Education / Students", "Skill Training", "Higher Education"],
    minExperienceYears: 0,
    subsidyPercentage: 3, // 3% interest subsidy on loan up to ₹10 Lakhs
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
    category: "Central Government",
    targetSector: "Education / Youth",
    tagline: "100% Full interest subsidy during moratorium period for economically weaker students",
    vernacularNames: {
      te: "CSIS పూర్తి వడ్డీ రాయితీ విద్యా పథకం",
      hi: "केंद्रीय क्षेत्र ब्याज सब्सिडी योजना (CSIS)",
      mr: "केंद्रीय क्षेत्र व्याज सबसिडी योजना (CSIS)"
    },
    description: "Provides full interest subsidy during the moratorium period (Course Period plus one year) on modern educational loans taken by students from Economically Weaker Sections (family income <= ₹4.5 Lakhs).",
    maxGrantLoanAmount: 1000000,
    loanAmountFormatted: "Full 100% Interest Paid by Govt during Studies",
    interestRate: "0% during studies (Govt pays full interest)",
    interestRateNumeric: 0.0,
    repaymentPeriod: "Up to 15 Years post graduation",
    repaymentPeriodYears: 15,
    minAge: 17,
    maxIncome: 450000, // EWS ceiling
    eligibleCategories: ["All", "OBC", "SC", "ST", "General (EWS)", "Minority"],
    eligibleBusinessTypes: ["Education / Students", "Technical & Professional Courses"],
    minExperienceYears: 0,
    subsidyPercentage: 100, // 100% interest waiver during study period
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
  },

  // ==========================================
  // 👩‍💼 4. WOMEN ENTREPRENEURS & SHGs
  // ==========================================
  {
    schemeName: "Stand-Up India Scheme for Women & SC/ST Entrepreneurs",
    shortCode: "STAND-UP",
    category: "Central Government",
    targetSector: "Women Entrepreneur",
    tagline: "Greenfield enterprise credit from ₹10 Lakh to ₹1 Crore for Women and SC/ST founders",
    vernacularNames: {
      te: "స్టాండ్-అప్ ఇండియా మహిళా పారిశ్రామిక పథకం",
      hi: "स्टैंड-अप इंडिया योजना (महिला एवं अनुसूचित जाति/जनजाति)",
      mr: "स्टँड-अप इंडिया योजना (महिला उद्योजक)"
    },
    description: "Mandates every scheduled bank branch to provide composite loans between ₹10 Lakh and ₹1 Crore to at least one Woman entrepreneur and one SC/ST founder for setting up greenfield enterprises.",
    maxGrantLoanAmount: 10000000,
    loanAmountFormatted: "₹10 Lakh to ₹1 Crore",
    interestRate: "Lowest applicable bank rate (Base Rate + 3% max)",
    interestRateNumeric: 8.5,
    repaymentPeriod: "Up to 7 Years (Moratorium up to 18 Months)",
    repaymentPeriodYears: 7,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["Women Entrepreneur", "SC", "ST"],
    eligibleBusinessTypes: ["Manufacturing & Fabrication", "Services / Repair Shop", "Agriculture & Allied", "Retail / Kirana Shop", "Trading"],
    minExperienceYears: 0,
    subsidyPercentage: 15,
    whoCanApply: "Women founders (at least 51% shareholding in non-individual enterprises) or SC/ST entrepreneurs",
    purpose: "Setting up a brand-new (greenfield) enterprise in manufacturing, service, agriculture-allied, or trading sectors",
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
    tags: ["Women Exclusive", "High Value Loan", "SIDBI Handholding"]
  },
  {
    schemeName: "Mahila Coir Yojana (Women Bio-Fiber & Coir Enterprise)",
    shortCode: "MCY",
    category: "Central Government",
    targetSector: "Women Entrepreneur",
    tagline: "75% capital subsidy on coir processing machinery for rural women artisans",
    vernacularNames: {
      te: "మహిళా కాయిర్ యోజన (75% మహిళా సబ్సిడీ)",
      hi: "महिला कॉयर योजना (75% महिला सब्सिडी)",
      mr: "महिला कॉयर योजना (75% महिला सबसिडी)"
    },
    description: "Women-centric scheme providing 75% direct capital subsidy on cost of motorized coir spinning ratts, yarn processing units, and handicraft equipment to generate sustainable rural self-employment.",
    maxGrantLoanAmount: 200000,
    loanAmountFormatted: "75% Subsidy on Machinery & Equipment",
    interestRate: "Subsidized / Nil on grant portion",
    interestRateNumeric: 7.0,
    repaymentPeriod: "Up to 3 Years on 25% balance",
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["Women Entrepreneur", "OBC", "SC", "ST", "General"],
    eligibleBusinessTypes: ["Handicrafts & Handlooms", "Textile & Garments", "Coir & Bio-fiber Products"],
    minExperienceYears: 0,
    subsidyPercentage: 75, // 75% grant from Coir Board
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
    tags: ["75% High Subsidy", "Rural Women", "Zero Debt Risk"]
  },

  // ==========================================
  // 🔨 5. ARTISANS, CRAFTSMEN & STREET VENDORS
  // ==========================================
  {
    schemeName: "PM Vishwakarma Yojana (Traditional Artisans & Craftsmen)",
    shortCode: "PM-VISHWAKARMA",
    category: "Central Government",
    targetSector: "Artisans & Weavers",
    tagline: "₹15,000 modern toolkit grant + ₹3 Lakh collateral-free credit at 5% concessional interest",
    vernacularNames: {
      te: "పీఎం విశ్వకర్మ యోజన (కుటీర మరియు చేతివృత్తుల పథకం)",
      hi: "पीएम विश्वकर्मा योजना (पारंपरिक कारीगर एवं शिल्पकार)",
      mr: "पीएम विश्वकर्मा योजना (पारंपरिक कारागीर)"
    },
    description: "End-to-end holistic support for traditional artisans across 18 family trades (Carpenters, Blacksmiths, Goldsmiths, Potters, Cobblers, Tailors, Weavers) with skill training, toolkit grants, and concessional loans.",
    maxGrantLoanAmount: 300000,
    loanAmountFormatted: "₹15,000 Toolkit Grant + ₹3,00,000 Loan at 5%",
    interestRate: "Concessional 5% p.a. (Govt pays 8% interest subvention)",
    interestRateNumeric: 5.0,
    repaymentPeriod: "Tier 1: 18 Months (₹1L) | Tier 2: 30 Months (₹2L)",
    repaymentPeriodYears: 3,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "OBC", "SC", "ST", "General", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Handicrafts & Handlooms", "Traditional Trades", "Carpentry", "Blacksmith", "Pottery", "Tailoring"],
    minExperienceYears: 0,
    subsidyPercentage: 8, // 8% subvention by Central Govt
    whoCanApply: "Artisans working with hands and tools in 18 notified traditional trades, verified via Gram Panchayat",
    purpose: "Modern toolkit purchase, workshop expansion, raw material procurement",
    benefits: [
      "₹15,000 digital voucher for purchasing modern, productivity-enhancing toolkit",
      "Free 5-7 days basic skill training with ₹500/day daily stipend",
      "₹1 Lakh (First Tranche) + ₹2 Lakh (Second Tranche) collateral-free loan at just 5% interest",
      "Official PM Vishwakarma ID card and certificate recognizing artisan trade"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card (linked with mobile)", description: "Identity KYC", isMandatory: true },
      { docName: "Ration Card", description: "Family verification", isMandatory: true },
      { docName: "Bank Passbook", description: "Account details for toolkit credit", isMandatory: true }
    ],
    applicationUrl: "https://pmvishwakarma.gov.in",
    tags: ["Toolkit Grant ₹15,000", "5% Low Interest", "Daily Stipend"]
  },
  {
    schemeName: "PM SVANidhi (Microcredit for Street Vendors)",
    shortCode: "PM-SVANIDHI",
    category: "Central Government",
    targetSector: "Street Vendors",
    tagline: "Working capital loan from ₹10,000 up to ₹50,000 with 7% interest subsidy & cashback",
    vernacularNames: {
      te: "పీఎం స్వనిధి పథకం (వీధి వ్యాపారుల రుణం)",
      hi: "पीएम स्वनिधि योजना (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)",
      mr: "पीएम स्वनिधी योजना (फेरीवाले कर्ज)"
    },
    description: "Empowers urban, peri-urban, and rural street vendors and hawkers with collateral-free working capital microcredit in ascending tranches: ₹10,000 (1st), ₹20,000 (2nd), and ₹50,000 (3rd).",
    maxGrantLoanAmount: 50000,
    loanAmountFormatted: "₹10,000 / ₹20,000 / ₹50,000 (No Collateral)",
    interestRate: "Subsidized (7% Interest Subsidy p.a.)",
    interestRateNumeric: 7.0,
    repaymentPeriod: "12 Months (Tranche 1) to 36 Months (Tranche 3)",
    repaymentPeriodYears: 1,
    minAge: 18,
    maxIncome: 0,
    eligibleCategories: ["All", "General", "OBC", "SC", "ST", "Women Entrepreneur"],
    eligibleBusinessTypes: ["Street Vendors", "Retail / Kirana Shop", "Food Cart / Snacks", "Vegetable / Fruit Hawking"],
    minExperienceYears: 0,
    subsidyPercentage: 7, // 7% annual interest subsidy credited via DBT
    whoCanApply: "Street vendors vending in urban, semi-urban, or rural local bodies with Vending Certificate or LoR",
    purpose: "Daily working capital, inventory replenishment, mobile vending cart repairs",
    benefits: [
      "100% collateral-free credit with no processing fees",
      "7% annual interest subsidy credited directly to bank account every quarter",
      "Up to ₹1,200 annual cashback incentive on accepting digital payments (UPI QR codes)",
      "Instant loan enhancement upon timely repayment of earlier tranche"
    ],
    requiredDocuments: [
      { docName: "Aadhaar Card", description: "Identity KYC", isMandatory: true },
      { docName: "Certificate of Vending / Letter of Recommendation (LoR)", description: "Issued by Town Vending Committee (TVC) or Municipality", isMandatory: true },
      { docName: "Bank Account Passbook", description: "Account linked to Aadhaar", isMandatory: true }
    ],
    applicationUrl: "https://pmsvanidhi.mohua.gov.in",
    tags: ["Street Vendors", "7% Interest Subsidy", "UPI Cashback"]
  },
  {
    schemeName: "Divyangjan Swavalamban Yojana (NHFDC Concessional Loan for PwD)",
    shortCode: "NHFDC-DSY",
    category: "Central Government",
    targetSector: "Differently Abled / Divyangjan",
    tagline: "Concessional loans up to ₹50 Lakhs at 5% to 8% interest with special rebate for women with disabilities",
    vernacularNames: {
      te: "దివ్యాంగుల స్వయం ఉపాధి రుణ పథకం (దివ్యాంజన్ స్వావలంబన)",
      hi: "दिव्यांगजन स्वावलंबन योजना (कम ब्याज पर स्वरोजगार ऋण)",
      mr: "दिव्यांगजन स्वावलंबन योजना (कमी व्याजाचे व्यवसाय कर्ज)"
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
    eligibleCategories: ["All", "Differently Abled (Divyangjan)", "Women Entrepreneur", "OBC", "SC", "ST", "General"],
    eligibleBusinessTypes: ["All", "Food Business", "Retail / Kirana Shop", "Handicrafts & Handlooms", "Agriculture & Allied", "Textile & Garments", "Manufacturing & Fabrication", "Services / Repair Shop", "IT & Digital Services"],
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
    tags: ["Divyangjan Priority", "5% Low Interest", "High Loan Limit", "Special Category"]
  }
];

// Ensure every scheme has a standardized schemeId matching its shortCode
COMPREHENSIVE_GOVT_SCHEMES.forEach(s => {
  if (!s.schemeId) s.schemeId = s.shortCode;
});

module.exports = {
  COMPREHENSIVE_GOVT_SCHEMES
};
