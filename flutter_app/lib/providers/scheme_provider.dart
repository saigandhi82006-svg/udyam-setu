import 'package:flutter/material.dart';
import '../models/scheme_model.dart';
import '../models/user_profile_model.dart';
import '../services/api_service.dart';

class SchemeProvider extends ChangeNotifier {
  List<SchemeModel> _schemes = [];
  bool _isLoading = false;
  String _selectedCategory = 'All';
  SchemeModel? _activeScheme;

  List<SchemeModel> get schemes => _schemes;
  bool get isLoading => _isLoading;
  String get selectedCategory => _selectedCategory;
  SchemeModel? get activeScheme => _activeScheme;

  List<SchemeModel> get filteredSchemes {
    if (_selectedCategory == 'All') return _schemes;
    return _schemes.where((s) => s.category.toLowerCase().contains(_selectedCategory.toLowerCase()) || s.tags.any((t) => t.toLowerCase().contains(_selectedCategory.toLowerCase()))).toList();
  }

  Future<void> loadSchemes(UserProfileModel profile) async {
    _isLoading = true;
    notifyListeners();

    try {
      final matched = await ApiService.matchSchemes(profile);
      _schemes = matched;
      if (_schemes.isNotEmpty) {
        _activeScheme = _schemes.first;
      }
    } catch (e) {
      print('Error matching schemes: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void setCategory(String cat) {
    _selectedCategory = cat;
    notifyListeners();
  }

  void setActiveScheme(SchemeModel scheme) {
    _activeScheme = scheme;
    notifyListeners();
  }
}