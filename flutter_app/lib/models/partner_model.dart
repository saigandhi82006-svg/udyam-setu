class PartnerModel {
  final String id;
  final String name;
  final String type; // 'bank', 'csc', 'dic', 'nbfc'
  final String address;
  final String phone;
  final String email;
  final double lat;
  final double lng;
  final double distanceKm;
  final List<String> servicesOffered;
  final String pincode;
  final String openingHours;

  PartnerModel({
    required this.id,
    required this.name,
    required this.type,
    required this.address,
    required this.phone,
    required this.email,
    required this.lat,
    required this.lng,
    required this.distanceKm,
    required this.servicesOffered,
    required this.pincode,
    this.openingHours = '10:00 AM - 5:00 PM',
  });

  factory PartnerModel.fromJson(Map<String, dynamic> json) {
    return PartnerModel(
      id: json['_id']?.toString() ?? json['id']?.toString() ?? '',
      name: json['name'] ?? 'Authorized Facilitation Partner',
      type: json['type'] ?? 'bank',
      address: json['address'] ?? 'Nearby Government MSME Center',
      phone: json['phone'] ?? '1800-180-6763',
      email: json['email'] ?? 'support@udyamsetu.gov.in',
      lat: (json['lat'] is num) ? (json['lat'] as num).toDouble() : (json['location']?['coordinates']?[1]?.toDouble() ?? 28.6139),
      lng: (json['lng'] is num) ? (json['lng'] as num).toDouble() : (json['location']?['coordinates']?[0]?.toDouble() ?? 77.2090),
      distanceKm: (json['distanceKm'] is num)
          ? (json['distanceKm'] as num).toDouble()
          : (json['distance'] is num ? (json['distance'] as num).toDouble() : 1.2),
      servicesOffered: (json['servicesOffered'] is List)
          ? List<String>.from(json['servicesOffered'].map((x) => x.toString()))
          : ['Udyam Registration', 'PMEGP Application', 'MUDRA Loan Sanction', 'Document Attestation'],
      pincode: json['pincode'] ?? '500001',
      openingHours: json['openingHours'] ?? '10:00 AM - 5:00 PM (Mon-Sat)',
    );
  }
}