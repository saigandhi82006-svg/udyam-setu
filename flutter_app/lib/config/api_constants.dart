import 'dart:io' show Platform;
import 'package:flutter/foundation.dart';

class ApiConstants {
  static String get baseUrl {
    if (kIsWeb) {
      return 'http://localhost:5000/api';
    } else if (Platform.isAndroid) {
      return 'http://10.0.2.2:5000/api';
    } else {
      return 'http://localhost:5000/api';
    }
  }

  static String get schemes => '$baseUrl/schemes';
  static String get matchSchemes => '$baseUrl/schemes/match';
  static String get nearbyPartners => '$baseUrl/partners/nearby';
  static String get applications => '$baseUrl/applications';
  static String get voiceProcess => '$baseUrl/voice/process';
}