import 'package:flutter/material.dart';
import 'theme/app_theme.dart';
import 'screens/splash_screen.dart';
import 'screens/auth_screen.dart';
import 'screens/home_dashboard_screen.dart';
import 'screens/user_profiling_screen.dart';
import 'screens/scheme_results_screen.dart';
import 'screens/emi_calculator_screen.dart';
import 'screens/nearby_partners_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const UdyamSetuApp());
}

class UdyamSetuApp extends StatelessWidget {
  const UdyamSetuApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Udyam Setu - SIH PS 92',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      initialRoute: '/',
      routes: {
        '/': (context) => const SplashScreen(),
        '/auth': (context) => const AuthScreen(),
        '/home': (context) => const HomeDashboardScreen(),
        '/profile-setup': (context) => const UserProfilingScreen(),
        '/matches': (context) => const SchemeResultsScreen(),
        '/calculator': (context) => const EmiCalculatorScreen(),
        '/partners': (context) => const NearbyPartnersScreen(),
      },
    );
  }
}
