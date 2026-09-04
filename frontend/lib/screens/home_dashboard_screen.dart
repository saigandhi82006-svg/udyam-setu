import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'user_profiling_screen.dart';
import 'ai_chat_screen.dart';
import 'emi_calculator_screen.dart';
import 'nearby_partners_screen.dart';
import 'document_checklist_screen.dart';
import 'my_applications_screen.dart';
import 'scheme_results_screen.dart';
import 'profile_screen.dart';
import 'saved_schemes_screen.dart';
import '../models/user.dart';
import '../services/mock_data_service.dart';

class HomeDashboardScreen extends StatefulWidget {
  const HomeDashboardScreen({super.key});

  @override
  State<HomeDashboardScreen> createState() => _HomeDashboardScreenState();
}

class _HomeDashboardScreenState extends State<HomeDashboardScreen> {
  int _currentBottomNavIndex = 0;
  final UserProfile _user = MockDataService.defaultUser;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      body: SafeArea(
        child: IndexedStack(
          index: _currentBottomNavIndex,
          children: [
            _buildHomeContent(),
            const AiChatScreen(),
            const SavedSchemesScreen(),
            ProfileScreen(user: _user),
          ],
        ),
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.06),
              blurRadius: 10,
              offset: const Offset(0, -4),
            )
          ],
        ),
        child: BottomNavigationBar(
          currentIndex: _currentBottomNavIndex,
          onTap: (index) => setState(() => _currentBottomNavIndex = index),
          selectedItemColor: AppTheme.primaryGreen,
          unselectedItemColor: Colors.grey.shade400,
          showUnselectedLabels: true,
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.white,
          elevation: 0,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home_filled),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.chat_bubble_outline_rounded),
              activeIcon: Icon(Icons.chat_bubble_rounded),
              label: 'Chat',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.favorite_border_rounded),
              activeIcon: Icon(Icons.favorite_rounded),
              label: 'Saved',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person_outline_rounded),
              activeIcon: Icon(Icons.person_rounded),
              label: 'Profile',
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHomeContent() {
    return SingleChildScrollView(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header Greeting Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        'Hello, ${_user.name} 👋',
                        style: const TextStyle(
                          fontSize: 22,
                          fontWeight: FontWeight.w800,
                          color: AppTheme.darkText,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'How can we help you today?',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey.shade600,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
              GestureDetector(
                onTap: () => setState(() => _currentBottomNavIndex = 3),
                child: CircleAvatar(
                  radius: 22,
                  backgroundColor: AppTheme.lightGreen,
                  child: const Text(
                    'RK',
                    style: TextStyle(
                      color: AppTheme.primaryGreen,
                      fontWeight: FontWeight.bold,
                      fontSize: 14,
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),

          // Hero Banner: "Find Schemes for You"
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFFE8F5E9), Color(0xFFC8E6C9)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.green.shade200, width: 1.2),
              boxShadow: [
                BoxShadow(
                  color: Colors.green.withOpacity(0.08),
                  blurRadius: 12,
                  offset: const Offset(0, 4),
                )
              ],
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Find Schemes for You',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                          color: AppTheme.darkGreen,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        'Answer a few questions and get best matching schemes.',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey.shade800,
                          height: 1.3,
                        ),
                      ),
                      const SizedBox(height: 14),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (_) => const UserProfilingScreen()),
                          );
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primaryGreen,
                          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                          minimumSize: Size.zero,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                        ),
                        child: const Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text('Start Now', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.white)),
                            SizedBox(width: 6),
                            Icon(Icons.arrow_forward_rounded, size: 14, color: Colors.white),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 12),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.9),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(
                    Icons.assignment_turned_in_rounded,
                    size: 42,
                    color: AppTheme.primaryGreen,
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 28),
          const Text(
            'Quick Access',
            style: TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.w800,
              color: AppTheme.darkText,
            ),
          ),
          const SizedBox(height: 14),

          // 2x3 Quick Access Grid matching mockup
          GridView.count(
            crossAxisCount: 3,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            mainAxisSpacing: 14,
            crossAxisSpacing: 14,
            childAspectRatio: 0.95,
            children: [
              _buildQuickCard(
                icon: Icons.shield_rounded,
                iconColor: AppTheme.primaryGreen,
                label: 'Match Schemes',
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const UserProfilingScreen()),
                  );
                },
              ),
              _buildQuickCard(
                icon: Icons.calculate_rounded,
                iconColor: const Color(0xFF0284C7),
                label: 'EMI Calculator',
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const EmiCalculatorScreen()),
                  );
                },
              ),
              _buildQuickCard(
                icon: Icons.assignment_turned_in_rounded,
                iconColor: const Color(0xFFD97706),
                label: 'My Applications',
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const MyApplicationsScreen()),
                  );
                },
              ),
              _buildQuickCard(
                icon: Icons.folder_special_rounded,
                iconColor: const Color(0xFF7C3AED),
                label: 'Documents',
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => DocumentChecklistScreen(scheme: MockDataService.mockSchemes[0]),
                    ),
                  );
                },
              ),
              _buildQuickCard(
                icon: Icons.store_mall_directory_rounded,
                iconColor: const Color(0xFF059669),
                label: 'Channel Partners',
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const NearbyPartnersScreen()),
                  );
                },
              ),
              _buildQuickCard(
                icon: Icons.headset_mic_rounded,
                iconColor: const Color(0xFFDC2626),
                label: 'Help & Support',
                onTap: () => setState(() => _currentBottomNavIndex = 1),
              ),
            ],
          ),

          const SizedBox(height: 28),

          // Recommended Schemes Section Preview
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Top Recommended',
                style: TextStyle(
                  fontSize: 17,
                  fontWeight: FontWeight.w800,
                  color: AppTheme.darkText,
                ),
              ),
              TextButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const SchemeResultsScreen()),
                  );
                },
                child: const Text(
                  'View All ->',
                  style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),

          // Mini Scheme Card preview
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: Colors.grey.shade200),
            ),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppTheme.lightGreen,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Icon(Icons.account_balance_wallet, color: AppTheme.primaryGreen, size: 28),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Expanded(
                            child: Text(
                              'PM Mudra Yojana',
                              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                            decoration: BoxDecoration(
                              color: AppTheme.lightGreen,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: const Text(
                              '90% Match',
                              style: TextStyle(color: AppTheme.primaryGreen, fontSize: 11, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Loan up to ₹10,00,000 • Low Interest',
                        style: TextStyle(color: Colors.grey.shade600, fontSize: 12),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _buildQuickCard({
    required IconData icon,
    required Color iconColor,
    required String label,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.grey.shade200),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.02),
              blurRadius: 6,
              offset: const Offset(0, 2),
            )
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: iconColor.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(icon, color: iconColor, size: 24),
            ),
            const SizedBox(height: 8),
            Text(
              label,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w600,
                color: AppTheme.darkText,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
