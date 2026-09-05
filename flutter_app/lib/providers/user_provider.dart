import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user_profile_model.dart';

class UserProvider extends ChangeNotifier {
  UserProfileModel _profile = UserProfileModel();
  String _currentLanguage = 'en';

  UserProfileModel get profile => _profile;
  String get currentLanguage => _currentLanguage;

  UserProvider() {
    _loadPreferences();
  }

  Future<void> _loadPreferences() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      _currentLanguage = prefs.getString('language') ?? 'en';
      _profile.preferredLanguage = _currentLanguage;
      _profile.fullName = prefs.getString('userName') ?? '';
      notifyListeners();
    } catch (e) {
      print('Preferences load error: $e');
    }
  }

  Future<void> setLanguage(String langCode) async {
    _currentLanguage = langCode;
    _profile.preferredLanguage = langCode;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('language', langCode);
    } catch (e) {
      print('Preferences save error: $e');
    }
    notifyListeners();
  }

  void updateProfile(UserProfileModel newProfile) {
    _profile = newProfile;
    notifyListeners();
  }
}