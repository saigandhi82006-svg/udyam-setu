class SchemeDocument {
  final String docName;
  final String description;
  final bool isMandatory;
  String status; // 'Uploaded', 'Pending'

  SchemeDocument({
    required this.docName,
    this.description = '',
    this.isMandatory = true,
    this.status = 'Pending',
  });

  factory SchemeDocument.fromJson(Map<String, dynamic> json) {
    return SchemeDocument(
      docName: json['docName'] ?? '',
      description: json['description'] ?? '',
      isMandatory: json['isMandatory'] ?? true,
      status: json['status'] ?? 'Pending',
    );
  }

  Map<String, dynamic> toJson() => {
    'docName': docName,
    'description': description,
    'isMandatory': isMandatory,
    'status': status,
  };
}

class Scheme {
  final String id;
  final String schemeName;
  final String shortCode;
  final String category;
  final String tagline;
  final String description;
  final num maxGrantLoanAmount;
  final String loanAmountFormatted;
  final String interestRate;
  final double interestRateNumeric;
  final String repaymentPeriod;
  final int repaymentPeriodYears;
  final int minAge;
  final num maxIncome;
  final List<String> eligibleCategories;
  final List<String> eligibleBusinessTypes;
  final int minExperienceYears;
  final int subsidyPercentage;
  final String whoCanApply;
  final String purpose;
  final List<String> benefits;
  final List<SchemeDocument> requiredDocuments;
  final List<String> tags;
  final String applicationUrl;

  // Matching engine fields
  final int? matchPercentage;
  final String? matchBadge;
  final String? highlightTag;
  final List<String> eligibilityReasons;

  Scheme({
    required this.id,
    required this.schemeName,
    this.shortCode = '',
    this.category = 'Central Government',
    this.tagline = '',
    required this.description,
    required this.maxGrantLoanAmount,
    this.loanAmountFormatted = '',
    this.interestRate = '8% - 12%',
    this.interestRateNumeric = 9.5,
    this.repaymentPeriod = 'Up to 5 Years',
    this.repaymentPeriodYears = 5,
    this.minAge = 18,
    this.maxIncome = 0,
    this.eligibleCategories = const ['All'],
    this.eligibleBusinessTypes = const ['All'],
    this.minExperienceYears = 0,
    this.subsidyPercentage = 0,
    this.whoCanApply = 'Micro & Small Enterprises',
    this.purpose = 'Business Expansion, Working Capital, New Business',
    this.benefits = const [],
    this.requiredDocuments = const [],
    this.tags = const [],
    this.applicationUrl = '',
    this.matchPercentage,
    this.matchBadge,
    this.highlightTag,
    this.eligibilityReasons = const [],
  });

  factory Scheme.fromJson(Map<String, dynamic> json) {
    var rawScheme = json.containsKey('scheme') ? json['scheme'] : json;
    
    var docList = <SchemeDocument>[];
    if (rawScheme['requiredDocuments'] != null) {
      docList = (rawScheme['requiredDocuments'] as List)
          .map((d) => SchemeDocument.fromJson(d is Map<String, dynamic> ? d : {'docName': d.toString()}))
          .toList();
    }

    return Scheme(
      id: (rawScheme['_id'] ?? rawScheme['id'] ?? '').toString(),
      schemeName: rawScheme['schemeName'] ?? '',
      shortCode: rawScheme['shortCode'] ?? '',
      category: rawScheme['category'] ?? 'Central Government',
      tagline: rawScheme['tagline'] ?? '',
      description: rawScheme['description'] ?? '',
      maxGrantLoanAmount: rawScheme['maxGrantLoanAmount'] ?? 0,
      loanAmountFormatted: rawScheme['loanAmountFormatted'] ?? 'Up to ₹${rawScheme['maxGrantLoanAmount'] ?? 0}',
      interestRate: rawScheme['interestRate'] ?? '8% - 12%',
      interestRateNumeric: (rawScheme['interestRateNumeric'] ?? 9.5).toDouble(),
      repaymentPeriod: rawScheme['repaymentPeriod'] ?? 'Up to 5 Years',
      repaymentPeriodYears: rawScheme['repaymentPeriodYears'] ?? 5,
      minAge: rawScheme['minAge'] ?? 18,
      maxIncome: rawScheme['maxIncome'] ?? 0,
      eligibleCategories: List<String>.from(rawScheme['eligibleCategories'] ?? ['All']),
      eligibleBusinessTypes: List<String>.from(rawScheme['eligibleBusinessTypes'] ?? ['All']),
      minExperienceYears: rawScheme['minExperienceYears'] ?? 0,
      subsidyPercentage: rawScheme['subsidyPercentage'] ?? 0,
      whoCanApply: rawScheme['whoCanApply'] ?? 'Micro & Small Enterprises',
      purpose: rawScheme['purpose'] ?? 'Business Expansion, Working Capital',
      benefits: List<String>.from(rawScheme['benefits'] ?? []),
      requiredDocuments: docList,
      tags: List<String>.from(rawScheme['tags'] ?? []),
      applicationUrl: rawScheme['applicationUrl'] ?? '',
      matchPercentage: json['matchPercentage'],
      matchBadge: json['matchBadge'] ?? (json['matchPercentage'] != null ? '${json['matchPercentage']}% Match' : null),
      highlightTag: json['highlightTag'],
      eligibilityReasons: List<String>.from(json['eligibilityReasons'] ?? []),
    );
  }
}
