import '../models/scheme.dart';
import '../models/channel_partner.dart';
import '../models/user.dart';
import '../models/application.dart';

class MockDataService {
  static UserProfile get defaultUser => UserProfile(
    id: 'usr_demo',
    name: 'Ravi Kumar',
    phone: '9876543210',
    email: 'ravi.kumar@example.com',
    age: 28,
    category: 'OBC',
    annualIncome: 240000,
    businessType: 'Food Business',
    experienceYears: 2,
    location: UserLocation(
      latitude: 17.3850,
      longitude: 78.4867,
      city: 'Hyderabad',
      state: 'Telangana',
    ),
    savedSchemes: ['sch_1'],
  );

  static List<Scheme> get mockSchemes => [
    Scheme(
      id: 'sch_1',
      schemeName: 'PM Mudra Yojana',
      shortCode: 'PMMY',
      category: 'Central Government',
      tagline: 'Funding the Unfunded - Collateral Free Micro Loans',
      description: 'Pradhan Mantri Mudra Yojana (PMMY) provides loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises. Divided into Shishu (up to ₹50k), Kishore (₹50k to ₹5L), and Tarun (₹5L to ₹10L).',
      maxGrantLoanAmount: 1000000,
      loanAmountFormatted: 'Up to ₹10,00,000',
      interestRate: '8% - 12% (approx.)',
      interestRateNumeric: 9.5,
      repaymentPeriod: 'Up to 5 Years',
      repaymentPeriodYears: 5,
      minAge: 18,
      maxIncome: 0,
      eligibleCategories: ['All', 'General', 'OBC', 'SC', 'ST', 'Women Entrepreneur'],
      eligibleBusinessTypes: ['Food Business', 'Retail / Kirana Shop', 'Handicrafts & Handlooms', 'Manufacturing & Fabrication'],
      minExperienceYears: 0,
      subsidyPercentage: 0,
      whoCanApply: 'Micro & Small Enterprises',
      purpose: 'Business Expansion, Working Capital, New Business',
      benefits: [
        '100% Collateral-free loan with zero processing fee for Shishu',
        'Flexible repayment tenure up to 5 years',
        'Mudra Debit Card issued for daily working capital withdrawal'
      ],
      requiredDocuments: [
        SchemeDocument(docName: 'Aadhaar Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'PAN Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'Business Plan', status: 'Pending', isMandatory: false),
        SchemeDocument(docName: 'Bank Statement', status: 'Pending', isMandatory: false),
        SchemeDocument(docName: 'Address Proof', status: 'Uploaded', isMandatory: true),
      ],
      tags: ['Low Interest', 'Easy Process', 'Collateral-Free'],
      matchPercentage: 90,
      matchBadge: '90% Match',
      highlightTag: 'Top Choice',
      eligibilityReasons: [
        'Meets age requirement (18-70 years)',
        'Eligible for OBC category',
        'Eligible for Food Business activity'
      ],
    ),
    Scheme(
      id: 'sch_2',
      schemeName: 'PMEGP Scheme',
      shortCode: 'PMEGP',
      category: 'Central Government',
      tagline: 'Prime Minister Employment Generation Programme with up to 35% Subsidy',
      description: 'Credit-linked subsidy programme to generate self-employment micro-enterprises in non-farm sector with government subsidy of 15% to 35%.',
      maxGrantLoanAmount: 2500000,
      loanAmountFormatted: 'Up to ₹25,00,000',
      interestRate: '9% - 11% (approx.)',
      interestRateNumeric: 10.0,
      repaymentPeriod: 'Up to 7 Years',
      repaymentPeriodYears: 7,
      minAge: 18,
      maxIncome: 0,
      eligibleCategories: ['OBC', 'SC', 'ST', 'Women Entrepreneur', 'General'],
      eligibleBusinessTypes: ['Manufacturing & Fabrication', 'Food Business', 'Agriculture & Allied'],
      minExperienceYears: 0,
      subsidyPercentage: 35,
      whoCanApply: 'Individuals above 18 years, SHGs, Co-operatives',
      purpose: 'Setting up new business micro-enterprises',
      benefits: [
        'Government subsidy of 25% to 35% for rural & special category (OBC/SC/ST)',
        'Bank credit for 90% to 95% of project cost',
        'Free Entrepreneurship Development Training (EDP)'
      ],
      requiredDocuments: [
        SchemeDocument(docName: 'Aadhaar Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'PAN Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'Caste Certificate', status: 'Pending', isMandatory: true),
        SchemeDocument(docName: 'Project Report (DPR)', status: 'Pending', isMandatory: true),
      ],
      tags: ['For New Business', 'High Subsidy (35%)', 'Govt Grant'],
      matchPercentage: 85,
      matchBadge: '85% Match',
      highlightTag: 'High Subsidy',
      eligibilityReasons: [
        'Meets age requirement (18-70 years)',
        'OBC category receives 35% subsidy benefit',
        'Food Processing sector recognized'
      ],
    ),
    Scheme(
      id: 'sch_3',
      schemeName: 'Stand Up India Scheme',
      shortCode: 'SUIS',
      category: 'Central Government',
      tagline: 'Empowering SC, ST, and Women Entrepreneurs with Greenfield Credit',
      description: 'Facilitates bank credit between ₹10 Lakh and ₹1 Crore to SC/ST and Women entrepreneurs for setting up greenfield manufacturing, service or trading ventures.',
      maxGrantLoanAmount: 10000000,
      loanAmountFormatted: 'Loan from ₹10L to ₹1Cr',
      interestRate: '8% - 10% (concessional)',
      interestRateNumeric: 8.75,
      repaymentPeriod: 'Up to 7 Years',
      repaymentPeriodYears: 7,
      minAge: 18,
      maxIncome: 0,
      eligibleCategories: ['SC', 'ST', 'Women Entrepreneur', 'OBC'],
      eligibleBusinessTypes: ['Food Business', 'Manufacturing & Fabrication', 'Retail / Kirana Shop'],
      minExperienceYears: 1,
      subsidyPercentage: 15,
      whoCanApply: 'SC/ST and/or Women Entrepreneurs',
      purpose: 'Greenfield commercial business setup',
      benefits: [
        'High ticket size up to ₹1 Crore',
        'Moratorium period up to 18 months',
        'SIDBI institutional handholding'
      ],
      requiredDocuments: [
        SchemeDocument(docName: 'Aadhaar Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'PAN Card', status: 'Uploaded', isMandatory: true),
        SchemeDocument(docName: 'Project Proposal', status: 'Pending', isMandatory: true),
      ],
      tags: ['For SC/ST & Women', 'Loan ₹10L to ₹1Cr'],
      matchPercentage: 75,
      matchBadge: '75% Match',
      highlightTag: 'High Credit Limit',
      eligibilityReasons: [
        'Meets age requirement (18-70 years)',
        'Recognized sector for greenfield financing'
      ],
    ),
  ];

  static List<ChannelPartner> get mockPartners => [
    ChannelPartner(
      id: 'ptn_1',
      partnerName: 'Andhra Grameena Bank',
      type: 'Bank',
      address: 'Koti Main Road, Beside Post Office, Hyderabad',
      latitude: 17.3880,
      longitude: 78.4890,
      contactPhone: '+91 40 2475 8890',
      contactPerson: 'Srinivasa Rao (Branch Manager)',
      distanceKm: 0.8,
      rating: 4.8,
    ),
    ChannelPartner(
      id: 'ptn_2',
      partnerName: 'KVK Business Center',
      type: 'KVK',
      address: 'PJTSAU Campus, Rajendranagar, Hyderabad',
      latitude: 17.3780,
      longitude: 78.4750,
      contactPhone: '+91 40 2401 5380',
      contactPerson: 'Dr. K. Anuradha (Senior Scientist)',
      distanceKm: 1.5,
      rating: 4.9,
    ),
    ChannelPartner(
      id: 'ptn_3',
      partnerName: 'State Bank of India',
      type: 'Bank',
      address: 'Gunfoundry, Abids, Hyderabad',
      latitude: 17.3940,
      longitude: 78.4780,
      contactPhone: '+91 40 2320 1200',
      contactPerson: 'Rajesh Sharma (Chief Manager)',
      distanceKm: 2.3,
      rating: 4.6,
    ),
  ];

  static List<ApplicationItem> get mockApplications => [
    ApplicationItem(
      id: 'app_1',
      trackingId: 'UDS-847291',
      userId: 'usr_demo',
      schemeId: 'sch_1',
      schemeName: 'PM Mudra Yojana',
      requestedAmount: 500000,
      proposedBusiness: 'South Indian Organic Canteen',
      status: 'Under Review',
      createdAt: DateTime.now().subtract(const Duration(days: 2)),
      remarks: 'Pre-screened by Udyam Setu Rule Engine (90% Match). Sent to Andhra Grameena Bank.',
      uploadedDocuments: [
        SchemeDocument(docName: 'Aadhaar Card', status: 'Uploaded'),
        SchemeDocument(docName: 'PAN Card', status: 'Uploaded'),
        SchemeDocument(docName: 'Business Plan', status: 'Pending'),
        SchemeDocument(docName: 'Bank Statement', status: 'Pending'),
        SchemeDocument(docName: 'Address Proof', status: 'Uploaded'),
      ],
    )
  ];
}
