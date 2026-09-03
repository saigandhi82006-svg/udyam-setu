class UserLocation {
  final double latitude;
  final double longitude;
  final String city;
  final String state;

  UserLocation({
    this.latitude = 17.3850,
    this.longitude = 78.4867,
    this.city = 'Hyderabad',
    this.state = 'Telangana',
  });

  factory UserLocation.fromJson(Map<String, dynamic> json) {
    return UserLocation(
      latitude: (json['latitude'] ?? 17.3850).toDouble(),
      longitude: (json['longitude'] ?? 78.4867).toDouble(),
      city: json['city'] ?? 'Hyderabad',
      state: json['state'] ?? 'Telangana',
    );
  }

  Map<String, dynamic> toJson() => {
    'latitude': latitude,
    'longitude': longitude,
    'city': city,
    'state': state,
  };
}

class UserProfile {
  String id;
  String name;
  String phone;
  String email;
  int age;
  String category; // 'General', 'OBC', 'SC', 'ST', 'Women Entrepreneur', etc.
  num annualIncome;
  String businessType;
  int experienceYears;
  UserLocation location;
  List<String> savedSchemes;

  UserProfile({
    this.id = 'usr_demo',
    this.name = 'Ravi Kumar',
    this.phone = '9876543210',
    this.email = 'ravi.kumar@example.com',
    this.age = 28,
    this.category = 'OBC',
    this.annualIncome = 240000,
    this.businessType = 'Food Business',
    this.experienceYears = 2,
    UserLocation? location,
    List<String>? savedSchemes,
  })  : location = location ?? UserLocation(),
        savedSchemes = savedSchemes ?? [];

  factory UserProfile.fromJson(Map<String, dynamic> json) {
    return UserProfile(
      id: (json['_id'] ?? json['id'] ?? 'usr_demo').toString(),
      name: json['name'] ?? 'Entrepreneur',
      phone: json['phone'] ?? '',
      email: json['email'] ?? '',
      age: json['age'] ?? 28,
      category: json['category'] ?? 'OBC',
      annualIncome: json['annualIncome'] ?? 240000,
      businessType: json['businessType'] ?? 'Food Business',
      experienceYears: json['experienceYears'] ?? 2,
      location: json['location'] != null ? UserLocation.fromJson(json['location']) : UserLocation(),
      savedSchemes: List<String>.from(json['savedSchemes'] ?? []),
    );
  }

  Map<String, dynamic> toJson() => {
    '_id': id,
    'name': name,
    'phone': phone,
    'email': email,
    'age': age,
    'category': category,
    'annualIncome': annualIncome,
    'businessType': businessType,
    'experienceYears': experienceYears,
    'location': location.toJson(),
    'savedSchemes': savedSchemes,
  };
}
