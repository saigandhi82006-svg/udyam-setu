import 'scheme.dart';

class ApplicationItem {
  final String id;
  final String trackingId;
  final String userId;
  final String schemeId;
  final String schemeName;
  final num requestedAmount;
  final String proposedBusiness;
  String status; // 'Submitted', 'Under Review', 'Approved', 'Rejected'
  final List<SchemeDocument> uploadedDocuments;
  final DateTime createdAt;
  final String remarks;

  ApplicationItem({
    required this.id,
    required this.trackingId,
    required this.userId,
    required this.schemeId,
    required this.schemeName,
    required this.requestedAmount,
    required this.proposedBusiness,
    required this.status,
    required this.uploadedDocuments,
    required this.createdAt,
    this.remarks = '',
  });

  factory ApplicationItem.fromJson(Map<String, dynamic> json) {
    var docList = <SchemeDocument>[];
    if (json['uploadedDocuments'] != null) {
      docList = (json['uploadedDocuments'] as List)
          .map((d) => SchemeDocument.fromJson(d is Map<String, dynamic> ? d : {'docName': d.toString()}))
          .toList();
    }

    return ApplicationItem(
      id: (json['_id'] ?? json['id'] ?? '').toString(),
      trackingId: json['trackingId'] ?? 'UDS-000000',
      userId: (json['userId'] ?? '').toString(),
      schemeId: (json['schemeId'] ?? '').toString(),
      schemeName: json['schemeName'] ?? 'Government Scheme',
      requestedAmount: json['requestedAmount'] ?? 500000,
      proposedBusiness: json['proposedBusiness'] ?? 'Micro Enterprise',
      status: json['status'] ?? 'Submitted',
      uploadedDocuments: docList,
      createdAt: json['createdAt'] != null ? DateTime.parse(json['createdAt']) : DateTime.now(),
      remarks: json['remarks'] ?? '',
    );
  }
}
