class ChannelPartner {
  final String id;
  final String partnerName;
  final String type; // 'Bank', 'KVK', 'CSC', 'DIC'
  final String address;
  final String city;
  final String state;
  final double latitude;
  final double longitude;
  final String contactPhone;
  final String contactPerson;
  final double distanceKm;
  final double rating;
  final String workingHours;

  ChannelPartner({
    required this.id,
    required this.partnerName,
    required this.type,
    required this.address,
    this.city = 'Hyderabad',
    this.state = 'Telangana',
    required this.latitude,
    required this.longitude,
    required this.contactPhone,
    this.contactPerson = 'Officer',
    this.distanceKm = 1.0,
    this.rating = 4.5,
    this.workingHours = '10:00 AM - 5:00 PM',
  });

  factory ChannelPartner.fromJson(Map<String, dynamic> json) {
    double lat = 17.3850;
    double lng = 78.4867;

    if (json['location'] != null && json['location']['coordinates'] != null) {
      final coords = json['location']['coordinates'] as List;
      if (coords.length >= 2) {
        lng = (coords[0] as num).toDouble();
        lat = (coords[1] as num).toDouble();
      }
    }

    return ChannelPartner(
      id: (json['_id'] ?? json['id'] ?? '').toString(),
      partnerName: json['partnerName'] ?? '',
      type: json['type'] ?? 'Bank',
      address: json['address'] ?? '',
      city: json['city'] ?? 'Hyderabad',
      state: json['state'] ?? 'Telangana',
      latitude: lat,
      longitude: lng,
      contactPhone: json['contactPhone'] ?? '',
      contactPerson: json['contactPerson'] ?? '',
      distanceKm: (json['distanceKm'] ?? 1.2).toDouble(),
      rating: (json['rating'] ?? 4.5).toDouble(),
      workingHours: json['workingHours'] ?? '10:00 AM - 5:00 PM',
    );
  }
}
