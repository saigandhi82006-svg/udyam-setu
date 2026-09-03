import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/user.dart';
import '../services/api_service.dart';
import 'scheme_results_screen.dart';

class UserProfilingScreen extends StatefulWidget {
  const UserProfilingScreen({super.key});

  @override
  State<UserProfilingScreen> createState() => _UserProfilingScreenState();
}

class _UserProfilingScreenState extends State<UserProfilingScreen> {
  final _formKey = GlobalKey<FormState>();
  final ApiService _apiService = ApiService();

  final TextEditingController _ageController = TextEditingController(text: '28');
  final TextEditingController _incomeController = TextEditingController(text: '2,40,000');
  final TextEditingController _expController = TextEditingController(text: '2');

  String _selectedCategory = 'OBC';
  String _selectedBusinessType = 'Food Business';
  bool _isLoading = false;

  final List<String> _categories = [
    'OBC',
    'SC',
    'ST',
    'General',
    'Women Entrepreneur',
    'Minority',
    'Ex-Servicemen / Differently Abled'
  ];

  final List<String> _businessTypes = [
    'Food Business',
    'Retail / Kirana Shop',
    'Handicrafts & Handlooms',
    'Agriculture & Allied',
    'Textile & Garments',
    'Manufacturing & Fabrication',
    'Services / Repair Shop',
    'Street Vending',
    'Beauty & Wellness',
    'IT & Digital Services'
  ];

  void _submitProfileAndMatch() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoading = true);

    final cleanIncome = int.tryParse(_incomeController.text.replaceAll(RegExp(r'[^0-9]'), '')) ?? 240000;
    final cleanAge = int.tryParse(_ageController.text.trim()) ?? 28;
    final cleanExp = int.tryParse(_expController.text.replaceAll(RegExp(r'[^0-9]'), '')) ?? 2;

    final userProfile = UserProfile(
      id: 'usr_demo',
      name: 'Ravi Kumar',
      age: cleanAge,
      category: _selectedCategory,
      annualIncome: cleanIncome,
      businessType: _selectedBusinessType,
      experienceYears: cleanExp,
    );

    // Update profile in backend
    await _apiService.updateUserProfile(userProfile);

    // Call rule-based matching engine
    final matchedSchemes = await _apiService.matchSchemes(userProfile);

    setState(() => _isLoading = false);

    if (mounted) {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => SchemeResultsScreen(
            userProfile: userProfile,
            preloadedMatches: matchedSchemes,
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text('Entrepreneur Profiling'),
        elevation: 0,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Tell us about yourself',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.w800,
                    color: AppTheme.darkText,
                  ),
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    Text(
                      'Step 2 of 5',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w600,
                        color: AppTheme.primaryGreen,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: const LinearProgressIndicator(
                          value: 0.4,
                          backgroundColor: Color(0xFFE2E8F0),
                          valueColor: AlwaysStoppedAnimation<Color>(AppTheme.primaryGreen),
                          minHeight: 6,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 28),

                // 1. Age Field
                const Text(
                  'Age',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _ageController,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    hintText: 'e.g. 28',
                    suffixIcon: Icon(Icons.cake_outlined, size: 20),
                  ),
                  validator: (val) {
                    if (val == null || val.isEmpty) return 'Please enter your age';
                    final age = int.tryParse(val);
                    if (age == null || age < 18) return 'Applicant must be at least 18 years';
                    return null;
                  },
                ),
                const SizedBox(height: 20),

                // 2. Category Dropdown
                const Text(
                  'Category',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                DropdownButtonFormField<String>(
                  value: _selectedCategory,
                  decoration: const InputDecoration(
                    suffixIcon: Icon(Icons.people_outline, size: 20),
                  ),
                  items: _categories.map((cat) {
                    return DropdownMenuItem(value: cat, child: Text(cat));
                  }).toList(),
                  onChanged: (val) {
                    if (val != null) setState(() => _selectedCategory = val);
                  },
                ),
                const SizedBox(height: 20),

                // 3. Annual Income Field
                const Text(
                  'Annual Income',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _incomeController,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(
                    prefixText: '₹ ',
                    prefixStyle: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkText),
                    hintText: '2,40,000',
                    suffixIcon: Icon(Icons.currency_rupee, size: 20),
                  ),
                  validator: (val) {
                    if (val == null || val.isEmpty) return 'Please enter annual income';
                    return null;
                  },
                ),
                const SizedBox(height: 20),

                // 4. Business Type / Activity Dropdown
                const Text(
                  'Business Type / Activity',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                DropdownButtonFormField<String>(
                  value: _selectedBusinessType,
                  decoration: const InputDecoration(
                    suffixIcon: Icon(Icons.storefront_outlined, size: 20),
                  ),
                  items: _businessTypes.map((type) {
                    return DropdownMenuItem(value: type, child: Text(type));
                  }).toList(),
                  onChanged: (val) {
                    if (val != null) setState(() => _selectedBusinessType = val);
                  },
                ),
                const SizedBox(height: 20),

                // 5. Experience Field
                const Text(
                  'Experience',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _expController,
                  decoration: const InputDecoration(
                    hintText: '2 Years',
                    suffixIcon: Icon(Icons.timeline_outlined, size: 20),
                  ),
                  validator: (val) {
                    if (val == null || val.isEmpty) return 'Please enter your experience';
                    return null;
                  },
                ),
                const SizedBox(height: 36),

                // Next Button
                ElevatedButton(
                  onPressed: _isLoading ? null : _submitProfileAndMatch,
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                  child: _isLoading
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                        )
                      : const Text(
                          'Next',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                        ),
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
