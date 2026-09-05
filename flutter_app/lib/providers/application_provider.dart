import 'package:flutter/material.dart';
import '../models/application_model.dart';
import '../services/api_service.dart';

class ApplicationProvider extends ChangeNotifier {
  List<ApplicationModel> _applications = [];
  bool _isLoading = false;

  List<ApplicationModel> get applications => _applications;
  bool get isLoading => _isLoading;

  Future<void> loadApplications() async {
    _isLoading = true;
    notifyListeners();

    try {
      _applications = await ApiService.fetchApplications();
    } catch (e) {
      print('Error loading applications: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<String> submitNewApplication({
    required String schemeId,
    required String schemeName,
    required String applicantName,
    required String phone,
    required double amount,
  }) async {
    final payload = {
      'schemeId': schemeId,
      'schemeName': schemeName,
      'applicantName': applicantName,
      'phone': phone,
      'amountRequested': amount,
      'status': 'Submitted',
      'createdAt': DateTime.now().toIso8601String(),
    };

    final res = await ApiService.submitApplication(payload);
    final String appId = res['applicationId'] ?? 'UDYAM-${DateTime.now().millisecondsSinceEpoch.toString().substring(7)}';

    _applications.insert(
      0,
      ApplicationModel(
        id: appId,
        applicationId: appId,
        schemeId: schemeId,
        schemeName: schemeName,
        applicantName: applicantName,
        phone: phone,
        amountRequested: amount,
        status: 'Under Review',
        createdAt: DateTime.now(),
        partnerAssigned: 'State Bank of India - MSME Hub',
        uploadedDocs: ['Aadhaar', 'PAN', 'Udyam Certificate'],
      ),
    );

    notifyListeners();
    return appId;
  }
}