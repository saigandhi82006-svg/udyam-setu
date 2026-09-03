import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/user.dart';
import 'user_profiling_screen.dart';

class ProfileScreen extends StatelessWidget {
  final UserProfile user;

  const ProfileScreen({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('Entrepreneur Profile', style: TextStyle(fontWeight: FontWeight.bold)),
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            // User Avatar Card
            Center(
              child: Column(
                children: [
                  CircleAvatar(
                    radius: 42,
                    backgroundColor: AppTheme.lightGreen,
                    child: Text(
                      user.name.split(' ').map((n) => n[0]).take(2).join(),
                      style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: AppTheme.primaryGreen),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    user.name,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.darkText),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '+91 ${user.phone}',
                    style: TextStyle(fontSize: 13, color: Colors.grey.shade600),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Profile Attributes Card
            Card(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    _buildProfileTile('Social Category', user.category, Icons.people_outline),
                    const Divider(height: 1),
                    _buildProfileTile('Age', '${user.age} Years', Icons.cake_outlined),
                    const Divider(height: 1),
                    _buildProfileTile('Annual Income', '₹ ${user.annualIncome}', Icons.currency_rupee),
                    const Divider(height: 1),
                    _buildProfileTile('Business Activity', user.businessType, Icons.storefront_outlined),
                    const Divider(height: 1),
                    _buildProfileTile('Experience', '${user.experienceYears} Years', Icons.timeline_outlined),
                    const Divider(height: 1),
                    _buildProfileTile('Location', '${user.location.city}, ${user.location.state}', Icons.location_on_outlined),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Edit Profile Button
            ElevatedButton.icon(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const UserProfilingScreen()),
                );
              },
              icon: const Icon(Icons.edit_note, size: 20),
              label: const Text('Update Profile Criteria'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileTile(String label, String value, IconData icon) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Row(
        children: [
          Icon(icon, color: AppTheme.primaryGreen, size: 20),
          const SizedBox(width: 14),
          Text(label, style: TextStyle(fontSize: 13, color: Colors.grey.shade600)),
          const Spacer(),
          Text(value, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.darkText)),
        ],
      ),
    );
  }
}
