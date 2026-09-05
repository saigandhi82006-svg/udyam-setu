class UserProfileModel {
  String fullName;
  String gender;
  String socialCategory;
  int age;
  String state;
  String district;
  String pincode;
  String businessType;
  String industrySector;
  double annualTurnover;
  double investment;
  bool gstRegistered;
  String udyamNumber;
  double requiredLoanAmount;
  String purpose;
  String preferredLanguage;

  UserProfileModel({
    this.fullName = '',
    this.gender = 'Male',
    this.socialCategory = 'General',
    this.age = 30,
    this.state = 'Telangana',
    this.district = 'Hyderabad',
    this.pincode = '500001',
    this.businessType = 'Micro Enterprise',
    this.industrySector = 'Manufacturing & Services',
    this.annualTurnover = 1200000.0,
    this.investment = 500000.0,
    this.gstRegistered = true,
    this.udyamNumber = '',
    this.requiredLoanAmount = 1000000.0,
    this.purpose = 'Business Expansion / Working Capital',
    this.preferredLanguage = 'en',
  });

  Map<String, dynamic> toJson() {
    return {
      'fullName': fullName,
      'gender': gender,
      'socialCategory': socialCategory,
      'age': age,
      'state': state,
      'district': district,
      'pincode': pincode,
      'businessType': businessType,
      'industrySector': industrySector,
      'annualTurnover': annualTurnover,
      'investment': investment,
      'gstRegistered': gstRegistered,
      'udyamNumber': udyamNumber,
      'requiredLoanAmount': requiredLoanAmount,
      'purpose': purpose,
      'preferredLanguage': preferredLanguage,
    };
  }

  factory UserProfileModel.fromJson(Map<String, dynamic> json) {
    return UserProfileModel(
      fullName: json['fullName'] ?? '',
      gender: json['gender'] ?? 'Male',
      socialCategory: json['socialCategory'] ?? 'General',
      age: json['age'] ?? 30,
      state: json['state'] ?? 'Telangana',
      district: json['district'] ?? 'Hyderabad',
      pincode: json['pincode'] ?? '500001',
      businessType: json['businessType'] ?? 'Micro Enterprise',
      industrySector: json['industrySector'] ?? 'Manufacturing & Services',
      annualTurnover: (json['annualTurnover'] is num) ? (json['annualTurnover'] as num).toDouble() : 1200000.0,
      investment: (json['investment'] is num) ? (json['investment'] as num).toDouble() : 500000.0,
      gstRegistered: json['gstRegistered'] ?? true,
      udyamNumber: json['udyamNumber'] ?? '',
      requiredLoanAmount: (json['requiredLoanAmount'] is num) ? (json['requiredLoanAmount'] as num).toDouble() : 1000000.0,
      purpose: json['purpose'] ?? 'Business Expansion / Working Capital',
      preferredLanguage: json['preferredLanguage'] ?? 'en',
    );
  }
}