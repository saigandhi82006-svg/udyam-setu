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

  int _currentStep = 1; // Step 1 to 4
  bool _isLoading = false;

  // Controllers & Form Values
  final TextEditingController _nameController = TextEditingController(text: 'Ravi Kumar');
  final TextEditingController _ageController = TextEditingController(text: '28');
  final TextEditingController _incomeController = TextEditingController(text: '2,40,000');
  final TextEditingController _investmentController = TextEditingController(text: '5,00,000');

  String _gender = 'Male';
  String _selectedCategory = 'OBC';
  
  // Disability Conditional State
  String _isDisability = 'No'; // 'Yes' or 'No'
  String _disabilityType = 'Locomotor / Physical';
  String _disabilityPercent = '40% - 70%';

  String _locationType = 'Rural';
  String _selectedBusinessType = 'Food Business';
  String _experienceOption = '1-2 Years';
  String _educationLevel = '8th Pass or Above';

  final Map<String, String> _categoriesWithIcons = {
    'OBC': '🏷️ OBC',
    'SC': '🔰 SC',
    'ST': '🌿 ST',
    'General': '✨ General',
    'Women Entrepreneur': '👩 Women Entrepreneur',
    'Minority': '☪️ Minority',
    'Ex-Servicemen': '🎖️ Ex-Servicemen'
  };

  final Map<String, String> _businessTypesWithIcons = {
    'Food Business': '🍲 Food Business',
    'Retail / Kirana Shop': '🛒 Retail / Kirana Shop',
    'Handicrafts & Handlooms': '🧵 Handicrafts & Handlooms',
    'Agriculture & Allied': '🌾 Agriculture & Allied',
    'Textile & Garments': '👗 Textile & Garments',
    'Manufacturing & Fabrication': '🏭 Manufacturing & Fabrication',
    'Services / Repair Shop': '🔧 Services / Repair Shop',
    'Street Vending': '🛍️ Street Vending',
    'Beauty & Wellness': '💅 Beauty & Wellness',
    'IT & Digital Services': '💻 IT & Digital Services'
  };

  final Map<String, String> _locationWithIcons = {
    'Rural': '🏡 Rural Area',
    'Urban': '🏙️ Urban Area'
  };

  final Map<String, String> _experienceWithIcons = {
    '0 Years (New Business)': '🌱 0 Years (New Venture)',
    '1-2 Years': '📈 1-2 Years',
    '3-5 Years': '⭐ 3-5 Years',
    '5+ Years': '🏆 5+ Years'
  };

  final Map<String, String> _educationWithIcons = {
    'Below 8th Pass': '📚 Below 8th Pass',
    '8th Pass or Above': '🎓 8th Pass or Above',
    '10th / 12th Pass': '📜 10th / 12th Pass',
    'Graduate / ITI / Diploma': '🏛️ Graduate / ITI / Diploma'
  };

  void _nextStep() {
    if (_validateCurrentStep()) {
      if (_currentStep < 4) {
        setState(() => _currentStep++);
      } else {
        _submitProfileAndMatch();
      }
    }
  }

  void _previousStep() {
    if (_currentStep > 1) {
      setState(() => _currentStep--);
    } else {
      Navigator.pop(context);
    }
  }

  bool _validateCurrentStep() {
    if (_currentStep == 1) {
      if (_nameController.text.trim().isEmpty) {
        _showSnackBar('Please enter your full name');
        return false;
      }
      if (_ageController.text.trim().isEmpty) {
        _showSnackBar('Please enter your age');
        return false;
      }
      final age = int.tryParse(_ageController.text.trim());
      if (age == null || age < 18 || age > 95) {
        _showSnackBar('Please enter a valid age (18 to 95)');
        return false;
      }
    } else if (_currentStep == 4) {
      if (_investmentController.text.trim().isEmpty) {
        _showSnackBar('Please enter your needed investment amount');
        return false;
      }
      if (_incomeController.text.trim().isEmpty) {
        _showSnackBar('Please enter your annual family income');
        return false;
      }
    }
    return true;
  }

  void _showSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.red.shade700,
        behavior: SnackBarBehavior.floating,
        duration: const Duration(seconds: 2),
      ),
    );
  }

  void _submitProfileAndMatch() async {
    setState(() => _isLoading = true);

    final cleanIncome = int.tryParse(_incomeController.text.replaceAll(RegExp(r'[^0-9]'), '')) ?? 240000;
    final cleanInvestment = int.tryParse(_investmentController.text.replaceAll(RegExp(r'[^0-9]'), '')) ?? 500000;
    final cleanAge = int.tryParse(_ageController.text.trim()) ?? 28;
    final enteredName = _nameController.text.trim().isEmpty ? 'Ravi Kumar' : _nameController.text.trim();
    
    int cleanExp = 2;
    if (_experienceOption.contains('0')) cleanExp = 0;
    else if (_experienceOption.contains('1')) cleanExp = 1;
    else if (_experienceOption.contains('3')) cleanExp = 4;
    else if (_experienceOption.contains('5')) cleanExp = 6;

    // Merge disability into category if applicable
    String effectiveCategory = _selectedCategory;
    if (_isDisability == 'Yes') {
      effectiveCategory = 'Differently Abled (Divyangjan)';
    }

    final userProfile = UserProfile(
      id: 'usr_demo',
      name: enteredName,
      age: cleanAge,
      category: effectiveCategory,
      annualIncome: cleanIncome,
      neededInvestment: cleanInvestment,
      businessType: _selectedBusinessType,
      experienceYears: cleanExp,
    );

    await _apiService.updateUserProfile(userProfile);
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

  void _saveProfileDetails() async {
    final cleanExp = int.tryParse(_experienceController.text.replaceAll(RegExp(r'[^0-9]'), '')) ?? 2;
    final cleanIncome = double.tryParse(_incomeController.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 240000;
    final cleanInvestment = double.tryParse(_investmentController.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 500000;

    final userProfile = UserProfile(
      name: _nameController.text.trim().isEmpty ? 'Ravi Kumar' : _nameController.text.trim(),
      age: int.tryParse(_ageController.text) ?? 28,
      gender: _selectedGender,
      category: _selectedCategory,
      state: _selectedState,
      district: _selectedDistrict,
      pincode: _pincodeController.text.trim(),
      hasDisability: _hasDisability,
      disabilityType: _disabilityType,
      disabilityPercentage: _disabilityPercentage,
      hasUdidCard: _hasUdidCard,
      annualIncome: cleanIncome,
      locationType: _selectedLocationType,
      neededInvestment: cleanInvestment,
      businessType: _selectedBusinessType,
      experienceYears: cleanExp,
    );

    await _apiService.updateUserProfile(userProfile);

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Row(
            children: [
              const Icon(Icons.check_circle, color: Colors.white),
              const SizedBox(width: 8),
              Expanded(
                child: Text('Profile details saved successfully! (${userProfile.name})'),
              ),
            ],
          ),
          backgroundColor: AppTheme.primaryGreen,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: AppTheme.darkText),
          onPressed: _previousStep,
        ),
        title: const Text(
          'User Details',
          style: TextStyle(
            color: AppTheme.darkText,
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Column(
          children: [
            // Top Progressive Header Card
            Container(
              color: Colors.white,
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 16),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        _getStepTitle(_currentStep),
                        style: const TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.bold,
                          color: AppTheme.primaryGreen,
                        ),
                      ),
                      Text(
                        'Step $_currentStep of 4',
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFF64748B),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  // Progress Bar Line
                  ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: LinearProgressIndicator(
                      value: _currentStep / 4.0,
                      backgroundColor: const Color(0xFFE2E8F0),
                      valueColor: const AlwaysStoppedAnimation<Color>(AppTheme.primaryGreen),
                      minHeight: 6,
                    ),
                  ),
                  const SizedBox(height: 12),
                  // Step Navigation Pills
                  Row(
                    children: [
                      _buildStepPill(1, '👤 About'),
                      const SizedBox(width: 5),
                      _buildStepPill(2, '🤝 Social'),
                      const SizedBox(width: 5),
                      _buildStepPill(3, '🏢 Business'),
                      const SizedBox(width: 5),
                      _buildStepPill(4, '💰 Capital'),
                    ],
                  ),
                ],
              ),
            ),

            const SizedBox(height: 8),

            // Form Body Container
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
                child: Form(
                  key: _formKey,
                  child: AnimatedSwitcher(
                    duration: const Duration(milliseconds: 250),
                    child: _buildCurrentStepContent(),
                  ),
                ),
              ),
            ),

            // Bottom Fixed Action Bar
            Container(
              padding: const EdgeInsets.all(16),
              decoration: const BoxDecoration(
                color: Colors.white,
                boxShadow: [
                  BoxShadow(
                    color: Color(0x0F000000),
                    blurRadius: 10,
                    offset: Offset(0, -3),
                  ),
                ],
              ),
              child: SafeArea(
                top: false,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Row(
                      children: [
                        if (_currentStep > 1) ...[
                          Expanded(
                            flex: 1,
                            child: OutlinedButton(
                              onPressed: _previousStep,
                              style: OutlinedButton.styleFrom(
                                minimumSize: const Size.fromHeight(50),
                                side: const BorderSide(color: Color(0xFFCBD5E1)),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
                              ),
                              child: const Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Icon(Icons.arrow_back_rounded, size: 18, color: AppTheme.darkText),
                                  SizedBox(width: 6),
                                  Text('Back', style: TextStyle(color: AppTheme.darkText, fontWeight: FontWeight.w600)),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                        ],
                        Expanded(
                          flex: 2,
                          child: ElevatedButton(
                            onPressed: _isLoading ? null : _nextStep,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppTheme.primaryGreen,
                              foregroundColor: Colors.white,
                              minimumSize: const Size.fromHeight(50),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
                              elevation: 2,
                            ),
                            child: _isLoading
                                ? const SizedBox(
                                    height: 20,
                                    width: 20,
                                    child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                                  )
                                : Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Text(
                                        _currentStep == 4 ? 'Find Matching Schemes' : 'Continue',
                                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                                      ),
                                      const SizedBox(width: 8),
                                      const Icon(Icons.arrow_forward_rounded, size: 18),
                                    ],
                                  ),
                          ),
                        ),
                      ],
                    ),
                    if (_currentStep == 4) ...[
                      const SizedBox(height: 10),
                      OutlinedButton.icon(
                        icon: const Icon(Icons.save_outlined, size: 18, color: AppTheme.primaryGreen),
                        label: const Text('Save Profile Details', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
                        style: OutlinedButton.styleFrom(
                          minimumSize: const Size.fromHeight(46),
                          side: const BorderSide(color: AppTheme.primaryGreen, width: 1.5),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
                          backgroundColor: const Color(0xFFECFDF5),
                        ),
                        onPressed: _saveProfileDetails,
                      ),
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStepPill(int step, String label) {
    final bool isDone = step < _currentStep;
    final bool isCurrent = step == _currentStep;

    return Expanded(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 7),
        decoration: BoxDecoration(
          color: isCurrent
              ? AppTheme.primaryGreen
              : (isDone ? const Color(0xFFE8F5E9) : const Color(0xFFF1F5F9)),
          borderRadius: BorderRadius.circular(12),
          border: isCurrent
              ? null
              : Border.all(color: isDone ? AppTheme.primaryGreen.withValues(alpha: 0.3) : Colors.transparent),
        ),
        child: Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isCurrent
                ? Colors.white
                : (isDone ? AppTheme.primaryGreen : const Color(0xFF64748B)),
          ),
        ),
      ),
    );
  }

  String _getStepTitle(int step) {
    switch (step) {
      case 1:
        return '👤 1. About You';
      case 2:
        return '🤝 2. Social Details';
      case 3:
        return '🏢 3. Business Details';
      case 4:
        return '💰 4. Capital & Financials';
      default:
        return '';
    }
  }

  Widget _buildCurrentStepContent() {
    switch (_currentStep) {
      case 1:
        return _buildStep1AboutYou();
      case 2:
        return _buildStep2SocialDetails();
      case 3:
        return _buildStep3BusinessDetails();
      case 4:
        return _buildStep4Financials();
      default:
        return const SizedBox.shrink();
    }
  }

  // STEP 1: ABOUT YOU
  Widget _buildStep1AboutYou() {
    return Container(
      key: const ValueKey(1),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [BoxShadow(color: Color(0x08000000), blurRadius: 10, offset: Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Full Name Input
          _buildFieldLabel('Full Name', icon: Icons.person_rounded, isRequired: true),
          const SizedBox(height: 8),
          TextFormField(
            controller: _nameController,
            textCapitalization: TextCapitalization.words,
            decoration: const InputDecoration(
              hintText: 'Ravi Kumar',
              prefixIcon: Icon(Icons.person_outline_rounded, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
          ),

          const SizedBox(height: 22),

          // Age Input
          _buildFieldLabel('Age', icon: Icons.cake_rounded, isRequired: true),
          const SizedBox(height: 8),
          TextFormField(
            controller: _ageController,
            keyboardType: TextInputType.number,
            onChanged: (v) => setState(() {}),
            decoration: const InputDecoration(
              hintText: '28',
              prefixIcon: Icon(Icons.cake_outlined, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
          ),

          const SizedBox(height: 22),

          // Gender Chips
          _buildFieldLabel('Gender', icon: Icons.face_rounded, isRequired: true),
          const SizedBox(height: 10),
          Row(
            children: [
              _buildGenderChip('Male', Icons.male_rounded),
              const SizedBox(width: 10),
              _buildGenderChip('Female', Icons.female_rounded),
              const SizedBox(width: 10),
              _buildGenderChip('Other', Icons.transgender_rounded),
            ],
          ),
        ],
      ),
    );
  }

  // STEP 2: SOCIAL DETAILS & CONDITIONAL DISABILITY
  Widget _buildStep2SocialDetails() {
    return Container(
      key: const ValueKey(2),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [BoxShadow(color: Color(0x08000000), blurRadius: 10, offset: Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Social Category Dropdown
          _buildFieldLabel('Social Category', icon: Icons.groups_rounded, isRequired: true),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedCategory,
            decoration: const InputDecoration(
              prefixIcon: Icon(Icons.people_alt_outlined, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
            items: _categoriesWithIcons.entries.map((entry) {
              return DropdownMenuItem(value: entry.key, child: Text(entry.value));
            }).toList(),
            onChanged: (val) {
              if (val != null) setState(() => _selectedCategory = val);
            },
          ),

          const SizedBox(height: 22),

          // Person with Disability (Conditional UI)
          _buildFieldLabel('Person with Disability (Divyangjan)', icon: Icons.accessible_forward_rounded, isRequired: true),
          const SizedBox(height: 10),
          Row(
            children: [
              _buildRadioOption('No', 'No', Icons.check_circle_outline_rounded),
              const SizedBox(width: 16),
              _buildRadioOption('Yes', 'Yes (Differently Abled)', Icons.accessible_rounded),
            ],
          ),

          // CONDITIONAL DISABILITY FIELDS (Revealed only if Yes)
          if (_isDisability == 'Yes') ...[
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: const Color(0xFFF0F9FF),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFFBAE6FD)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildFieldLabel('Type of Disability', icon: Icons.health_and_safety_rounded, isRequired: true),
                  const SizedBox(height: 8),
                  DropdownButtonFormField<String>(
                    value: _disabilityType,
                    decoration: const InputDecoration(
                      fillColor: Colors.white,
                      contentPadding: EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    ),
                    items: const [
                      DropdownMenuItem(value: 'Locomotor / Physical', child: Text('🧑‍🦽 Locomotor / Orthopedic')),
                      DropdownMenuItem(value: 'Visual Impairment', child: Text('👁️ Visual Impairment / Blindness')),
                      DropdownMenuItem(value: 'Hearing / Speech Impairment', child: Text('👂 Hearing or Speech')),
                      DropdownMenuItem(value: 'Intellectual / Mental', child: Text('🧠 Intellectual Disability')),
                      DropdownMenuItem(value: 'Multiple Disabilities', child: Text('🏥 Multiple Disabilities')),
                    ],
                    onChanged: (val) => setState(() => _disabilityType = val!),
                  ),

                  const SizedBox(height: 12),

                  _buildFieldLabel('Disability Percentage', icon: Icons.bar_chart_rounded, isRequired: true),
                  const SizedBox(height: 8),
                  DropdownButtonFormField<String>(
                    value: _disabilityPercent,
                    decoration: const InputDecoration(
                      fillColor: Colors.white,
                      contentPadding: EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    ),
                    items: const [
                      DropdownMenuItem(value: '40% - 70%', child: Text('📊 40% - 70% (Benchmark PwD)')),
                      DropdownMenuItem(value: 'Above 70%', child: Text('📈 Above 70% (Severe)')),
                      DropdownMenuItem(value: 'Below 40%', child: Text('📉 Below 40% (Mild)')),
                    ],
                    onChanged: (val) => setState(() => _disabilityPercent = val!),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }

  // STEP 3: BUSINESS DETAILS
  Widget _buildStep3BusinessDetails() {
    return Container(
      key: const ValueKey(3),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [BoxShadow(color: Color(0x08000000), blurRadius: 10, offset: Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Enterprise Location Dropdown
          _buildFieldLabel('Enterprise Location', icon: Icons.location_on_rounded, isRequired: true),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _locationType,
            decoration: const InputDecoration(
              prefixIcon: Icon(Icons.location_on_outlined, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
            items: _locationWithIcons.entries.map((entry) {
              return DropdownMenuItem(value: entry.key, child: Text(entry.value));
            }).toList(),
            onChanged: (val) {
              if (val != null) setState(() => _locationType = val);
            },
          ),
          const SizedBox(height: 22),

          // Business Type Dropdown
          _buildFieldLabel('Business Type / Activity', icon: Icons.storefront_rounded, isRequired: true),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _selectedBusinessType,
            decoration: const InputDecoration(
              prefixIcon: Icon(Icons.storefront_outlined, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
            isExpanded: true,
            items: _businessTypesWithIcons.entries.map((entry) {
              return DropdownMenuItem(
                value: entry.key,
                child: Text(
                  entry.value,
                  overflow: TextOverflow.ellipsis,
                ),
              );
            }).toList(),
            onChanged: (val) {
              if (val != null) setState(() => _selectedBusinessType = val);
            },
          ),
        ],
      ),
    );
  }

  // STEP 4: CAPITAL & FINANCIALS
  Widget _buildStep4Financials() {
    return Container(
      key: const ValueKey(4),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [BoxShadow(color: Color(0x08000000), blurRadius: 10, offset: Offset(0, 4))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Needed Investment / Required Loan Input
          _buildFieldLabel('Needed Investment / Capital', icon: Icons.payments_rounded, isRequired: true),
          const SizedBox(height: 8),
          TextFormField(
            controller: _investmentController,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(
              prefixText: '₹ ',
              prefixStyle: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkText),
              hintText: '5,00,000',
              prefixIcon: Icon(Icons.currency_rupee_rounded, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
          ),

          const SizedBox(height: 22),

          // Annual Family Income Input
          _buildFieldLabel('Annual Family Income', icon: Icons.account_balance_wallet_rounded, isRequired: true),
          const SizedBox(height: 8),
          TextFormField(
            controller: _incomeController,
            keyboardType: TextInputType.number,
            decoration: const InputDecoration(
              prefixText: '₹ ',
              prefixStyle: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkText),
              hintText: '2,40,000',
              prefixIcon: Icon(Icons.savings_rounded, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
          ),

          const SizedBox(height: 22),

          // Experience Dropdown
          _buildFieldLabel('Experience', icon: Icons.workspace_premium_rounded, isRequired: true),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _experienceOption,
            decoration: const InputDecoration(
              prefixIcon: Icon(Icons.timeline_rounded, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
            items: _experienceWithIcons.entries.map((entry) {
              return DropdownMenuItem(value: entry.key, child: Text(entry.value));
            }).toList(),
            onChanged: (val) {
              if (val != null) setState(() => _experienceOption = val);
            },
          ),

          const SizedBox(height: 22),

          // Education Level Dropdown
          _buildFieldLabel('Education Level', icon: Icons.school_rounded, isRequired: true),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: _educationLevel,
            decoration: const InputDecoration(
              prefixIcon: Icon(Icons.menu_book_rounded, size: 20, color: AppTheme.primaryGreen),
              contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            ),
            items: _educationWithIcons.entries.map((entry) {
              return DropdownMenuItem(value: entry.key, child: Text(entry.value));
            }).toList(),
            onChanged: (val) {
              if (val != null) setState(() => _educationLevel = val);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildFieldLabel(String label, {IconData? icon, bool isRequired = false}) {
    return Row(
      children: [
        if (icon != null) ...[
          Container(
            padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(
              color: const Color(0xFFE8F5E9),
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, size: 15, color: AppTheme.primaryGreen),
          ),
          const SizedBox(width: 8),
        ],
        Text(
          label,
          style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
        ),
        if (isRequired)
          const Text(
            ' *',
            style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold, fontSize: 13),
          ),
      ],
    );
  }

  Widget _buildGenderChip(String label, IconData icon) {
    final bool isSelected = _gender == label;
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => _gender = label),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(
            color: isSelected ? AppTheme.primaryGreen : Colors.white,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: isSelected ? AppTheme.primaryGreen : const Color(0xFFCBD5E1),
              width: isSelected ? 2 : 1,
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                icon,
                size: 18,
                color: isSelected ? Colors.white : const Color(0xFF64748B),
              ),
              const SizedBox(width: 6),
              Text(
                label,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                  color: isSelected ? Colors.white : AppTheme.darkText,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildRadioOption(String value, String displayLabel, IconData icon) {
    final bool isSelected = _isDisability == value;
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => _isDisability = value),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 12),
          decoration: BoxDecoration(
            color: isSelected ? const Color(0xFFF0FDF4) : Colors.white,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: isSelected ? AppTheme.primaryGreen : const Color(0xFFCBD5E1),
              width: isSelected ? 2 : 1,
            ),
          ),
          child: Row(
            children: [
              Icon(
                icon,
                size: 18,
                color: isSelected ? AppTheme.primaryGreen : const Color(0xFF94A3B8),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  displayLabel,
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: isSelected ? AppTheme.darkGreen : AppTheme.darkText,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
