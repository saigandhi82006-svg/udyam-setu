import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/scheme.dart';
import '../models/channel_partner.dart';
import '../models/user.dart';
import '../models/application.dart';
import 'mock_data_service.dart';

class ApiService {
  static const String defaultBaseUrl = 'http://10.0.2.2:5000/api'; // Android emulator localhost
  static const String webBaseUrl = 'http://localhost:5000/api';

  String baseUrl;
  bool useMockFallback;

  ApiService({this.baseUrl = webBaseUrl, this.useMockFallback = true});

  Map<String, String> get _headers => {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // 1. Fetch All Schemes
  Future<List<Scheme>> getSchemes({String? category, String? businessType}) async {
    try {
      final uri = Uri.parse('$baseUrl/schemes').replace(queryParameters: {
        if (category != null) 'category': category,
        if (businessType != null) 'businessType': businessType,
      });

      final response = await http.get(uri, headers: _headers).timeout(const Duration(seconds: 4));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['schemes'] != null) {
          return (data['schemes'] as List).map((s) => Scheme.fromJson(s)).toList();
        }
      }
    } catch (e) {
      // Fallback
    }

    if (useMockFallback) {
      return MockDataService.mockSchemes;
    }
    return [];
  }

  // 2. Rule-Based Matching Engine
  Future<List<Scheme>> matchSchemes(UserProfile profile) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/schemes/match'),
        headers: _headers,
        body: json.encode({
          'age': profile.age,
          'category': profile.category,
          'annualIncome': profile.annualIncome,
          'businessType': profile.businessType,
          'experienceYears': profile.experienceYears,
        }),
      ).timeout(const Duration(seconds: 4));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['matches'] != null) {
          return (data['matches'] as List).map((m) {
            final schemeData = m['scheme'] as Map<String, dynamic>;
            schemeData['matchPercentage'] = m['matchPercentage'];
            schemeData['matchBadge'] = m['matchBadge'];
            schemeData['highlightTag'] = m['highlightTag'];
            schemeData['eligibilityReasons'] = m['eligibilityReasons'];
            return Scheme.fromJson(schemeData);
          }).toList();
        }
      }
    } catch (e) {
      // Fallback
    }

    if (useMockFallback) {
      return MockDataService.mockSchemes;
    }
    return [];
  }

  // 3. Gemini AI Chat Assistant
  Future<Map<String, dynamic>> sendAIChat({
    required String message,
    String language = 'English',
    UserProfile? profile,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/ai/chat'),
        headers: _headers,
        body: json.encode({
          'message': message,
          'language': language,
          'userProfile': profile?.toJson(),
        }),
      ).timeout(const Duration(seconds: 8));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return {
            'reply': data['reply'],
            'source': data['source'] ?? 'gemini',
          };
        }
      }
    } catch (e) {
      // Fallback
    }

    // Smart fallback
    String mockReply = "Hello! For starting your enterprise, the Government provides PM Mudra Yojana (collateral-free up to ₹10 Lakhs) and PMEGP (up to 35% subsidy for special categories). Keep your Aadhaar, PAN, and Bank Statement ready to apply!";
    if (message.toLowerCase().contains('food') || message.toLowerCase().contains('hotel')) {
      mockReply = "Great! For a small food business, PM Mudra Shishu/Kishore loan is ideal. You can get up to ₹5 Lakhs at low interest with zero property collateral. Would you like to view matching schemes now?";
    }
    return {'reply': mockReply, 'source': 'udyam-setu-knowledge-engine'};
  }

  // 4. EMI Calculator API
  Future<Map<String, dynamic>> calculateEMI({
    required num loanAmount,
    required num interestRate,
    required int tenureYears,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/calculator/emi'),
        headers: _headers,
        body: json.encode({
          'loanAmount': loanAmount,
          'interestRate': interestRate,
          'tenureYears': tenureYears,
        }),
      ).timeout(const Duration(seconds: 4));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return data['data'];
        }
      }
    } catch (e) {
      // Fallback
    }

    // Local standard math calculation
    final P = loanAmount.toDouble();
    final r = (interestRate / (12 * 100)).toDouble();
    final n = tenureYears * 12;
    final factor = (1 + r);
    num powFactor = 1;
    for (int i = 0; i < n; i++) {
      powFactor *= factor;
    }
    final emi = ((P * r * powFactor) / (powFactor - 1)).round();
    final totalPayment = emi * n;
    final totalInterest = totalPayment - P;

    return {
      'principal': P,
      'annualRate': interestRate,
      'tenureYears': tenureYears,
      'totalMonths': n,
      'emi': emi,
      'totalInterest': totalInterest,
      'totalPayment': totalPayment,
      'formattedEMI': '₹ $emi / month',
    };
  }

  // 5. Nearby Channel Partners Locator
  Future<List<ChannelPartner>> getNearbyPartners({
    double lat = 17.3850,
    double lng = 78.4867,
    String? type,
  }) async {
    try {
      final uri = Uri.parse('$baseUrl/partners/nearby').replace(queryParameters: {
        'lat': lat.toString(),
        'lng': lng.toString(),
        if (type != null && type != 'All') 'type': type,
      });

      final response = await http.get(uri, headers: _headers).timeout(const Duration(seconds: 4));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['partners'] != null) {
          return (data['partners'] as List).map((p) => ChannelPartner.fromJson(p)).toList();
        }
      }
    } catch (e) {
      // Fallback
    }

    if (useMockFallback) {
      if (type == null || type == 'All') return MockDataService.mockPartners;
      return MockDataService.mockPartners.where((p) => p.type == type).toList();
    }
    return [];
  }

  // 6. User Profile
  Future<UserProfile> getUserProfile(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/users/profile?userId=$userId'),
        headers: _headers,
      ).timeout(const Duration(seconds: 4));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['user'] != null) {
          return UserProfile.fromJson(data['user']);
        }
      }
    } catch (e) {}

    return MockDataService.defaultUser;
  }

  // 7. Update User Profile
  Future<UserProfile> updateUserProfile(UserProfile profile) async {
    try {
      final response = await http.put(
        Uri.parse('$baseUrl/users/profile'),
        headers: _headers,
        body: json.encode(profile.toJson()),
      ).timeout(const Duration(seconds: 4));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['user'] != null) {
          return UserProfile.fromJson(data['user']);
        }
      }
    } catch (e) {}

    return profile;
  }

  // 8. Applications & Document Checklist
  Future<List<ApplicationItem>> getApplications(String userId) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/applications?userId=$userId'),
        headers: _headers,
      ).timeout(const Duration(seconds: 4));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true && data['applications'] != null) {
          return (data['applications'] as List).map((a) => ApplicationItem.fromJson(a)).toList();
        }
      }
    } catch (e) {}

    return MockDataService.mockApplications;
  }
}
