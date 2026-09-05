import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:url_launcher/url_launcher.dart';
import '../models/partner_model.dart';
import '../services/api_service.dart';
import '../services/location_service.dart';

class PartnerProvider extends ChangeNotifier {
  List<PartnerModel> _partners = [];
  bool _isLoading = false;
  Position? _currentPosition;
  String _selectedFilter = 'all';

  List<PartnerModel> get partners => _partners;
  bool get isLoading => _isLoading;
  Position? get currentPosition => _currentPosition;
  String get selectedFilter => _selectedFilter;

  List<PartnerModel> get filteredPartners {
    if (_selectedFilter == 'all') return _partners;
    return _partners.where((p) => p.type.toLowerCase() == _selectedFilter.toLowerCase()).toList();
  }

  Future<void> loadPartners() async {
    _isLoading = true;
    notifyListeners();

    try {
      _currentPosition = await LocationService.getCurrentLocation();
      double lat = _currentPosition?.latitude ?? 17.3850;
      double lng = _currentPosition?.longitude ?? 78.4867;

      _partners = await ApiService.fetchNearbyPartners(lat: lat, lng: lng, type: _selectedFilter);
    } catch (e) {
      print('Error loading partners: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void setFilter(String filter) {
    _selectedFilter = filter;
    loadPartners();
  }

  Future<void> openMapRoute(PartnerModel partner) async {
    final double lat = partner.lat;
    final double lng = partner.lng;
    final String query = Uri.encodeComponent('${partner.name}, ${partner.address}');
    
    final Uri googleMapsUri = Uri.parse('google.navigation:q=$lat,$lng&mode=d');
    final Uri webMapsUri = Uri.parse('https://www.google.com/maps/dir/?api=1&destination=$lat,$lng&destination_place_id=$query');

    try {
      if (await canLaunchUrl(googleMapsUri)) {
        await launchUrl(googleMapsUri);
      } else {
        await launchUrl(webMapsUri, mode: LaunchMode.externalApplication);
      }
    } catch (e) {
      print('Could not launch navigation: $e');
    }
  }
}