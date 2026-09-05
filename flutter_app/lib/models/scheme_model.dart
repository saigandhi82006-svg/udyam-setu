class SchemeModel {
  final String id;
  final String schemeCode;
  final String name;
  final String category;
  final String fundingType;
  final double maxAmount;
  final double interestSubsidy;
  final bool collateralRequired;
  final String description;
  final List<String> benefits;
  final List<String> documentsRequired;
  final List<String> stepsToApply;
  final int matchScore;
  final bool isPreApproved;
  final List<String> tags;

  SchemeModel({
    required this.id,
    required this.schemeCode,
    required this.name,
    required this.category,
    required this.fundingType,
    required this.maxAmount,
    required this.interestSubsidy,
    required this.collateralRequired,
    required this.description,
    required this.benefits,
    required this.documentsRequired,
    required this.stepsToApply,
    this.matchScore = 85,
    this.isPreApproved = false,
    this.tags = const [],
  });

  factory SchemeModel.fromJson(Map<String, dynamic> json) {
    return SchemeModel(
      id: json['_id']?.toString() ?? json['id']?.toString() ?? '',
      schemeCode: json['schemeCode'] ?? json['code'] ?? '',
      name: json['name'] ?? json['schemeName'] ?? 'MSME Support Scheme',
      category: json['category'] ?? 'Manufacturing / Services',
      fundingType: json['fundingType'] ?? 'Credit Linked Subsidy',
      maxAmount: (json['maxAmount'] is num) ? (json['maxAmount'] as num).toDouble() : 1000000.0,
      interestSubsidy: (json['interestSubsidy'] is num) ? (json['interestSubsidy'] as num).toDouble() : 15.0,
      collateralRequired: json['collateralRequired'] == true,
      description: json['description'] ?? 'Comprehensive financial enablement scheme for Indian MSMEs.',
      benefits: (json['benefits'] is List)
          ? List<String>.from(json['benefits'].map((x) => x.toString()))
          : ['Collateral free credit up to specified limits', 'Subsidized interest rates'],
      documentsRequired: (json['documentsRequired'] is List)
          ? List<String>.from(json['documentsRequired'].map((x) => x.toString()))
          : ['Aadhaar Card', 'PAN Card', 'Bank Statement (6 Months)', 'Udyam Registration Certificate'],
      stepsToApply: (json['stepsToApply'] is List)
          ? List<String>.from(json['stepsToApply'].map((x) => x.toString()))
          : ['1. Verify Eligibility', '2. Prepare Required Documents', '3. Submit Application Online or at Nearest Center'],
      matchScore: json['matchScore'] ?? 92,
      isPreApproved: json['isPreApproved'] ?? true,
      tags: (json['tags'] is List) ? List<String>.from(json['tags'].map((x) => x.toString())) : ['Govt of India', 'Direct Disbursal'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'schemeCode': schemeCode,
      'name': name,
      'category': category,
      'fundingType': fundingType,
      'maxAmount': maxAmount,
      'interestSubsidy': interestSubsidy,
      'collateralRequired': collateralRequired,
      'description': description,
      'benefits': benefits,
      'documentsRequired': documentsRequired,
      'stepsToApply': stepsToApply,
      'matchScore': matchScore,
      'isPreApproved': isPreApproved,
      'tags': tags,
    };
  }
}