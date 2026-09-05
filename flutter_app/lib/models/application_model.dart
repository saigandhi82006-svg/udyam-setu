class ApplicationModel {
  final String id;
  final String applicationId;
  final String schemeId;
  final String schemeName;
  final String applicantName;
  final String phone;
  final double amountRequested;
  final String status; // 'Draft', 'Submitted', 'Under Review', 'Sanctioned', 'Disbursed'
  final DateTime createdAt;
  final String partnerAssigned;
  final List<String> uploadedDocs;

  ApplicationModel({
    required this.id,
    required this.applicationId,
    required this.schemeId,
    required this.schemeName,
    required this.applicantName,
    required this.phone,
    required this.amountRequested,
    required this.status,
    required this.createdAt,
    this.partnerAssigned = 'State Bank of India - MSME Branch',
    this.uploadedDocs = const [],
  });

  factory ApplicationModel.fromJson(Map<String, dynamic> json) {
    return ApplicationModel(
      id: json['_id']?.toString() ?? json['id']?.toString() ?? '',
      applicationId: json['applicationId'] ?? 'UDYAM-${DateTime.now().millisecondsSinceEpoch.toString().substring(7)}',
      schemeId: json['schemeId'] ?? '',
      schemeName: json['schemeName'] ?? 'PMEGP Subsidy Scheme',
      applicantName: json['applicantName'] ?? 'Applicant',
      phone: json['phone'] ?? '+91 98765 43210',
      amountRequested: (json['amountRequested'] is num) ? (json['amountRequested'] as num).toDouble() : 500000.0,
      status: json['status'] ?? 'Under Review',
      createdAt: json['createdAt'] != null ? DateTime.tryParse(json['createdAt']) ?? DateTime.now() : DateTime.now(),
      partnerAssigned: json['partnerAssigned'] ?? 'State Bank of India - MSME Branch',
      uploadedDocs: (json['uploadedDocs'] is List) ? List<String>.from(json['uploadedDocs'].map((x) => x.toString())) : [],
    );
  }
}