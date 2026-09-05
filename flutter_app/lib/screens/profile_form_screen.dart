import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../models/user_profile_model.dart';
import '../providers/user_provider.dart';
import '../providers/scheme_provider.dart';
import 'schemes_feed_screen.dart';

class ProfileFormScreen extends StatefulWidget {
  const ProfileFormScreen({super.key});

  @override
  State<ProfileFormScreen> createState() => _ProfileFormScreenState();
}

class _ProfileFormScreenState extends State<ProfileFormScreen> {
  final _formKey = GlobalKey<FormState>();
  int _currentStep = 0;

  // Controllers
  final _nameController = TextEditingController(text: 'Ramesh Sharma');
  final _ageController = TextEditingController(text: '34');
  final _stateController = TextEditingController(text: 'Telangana');
  final _districtController = TextEditingController(text: 'Hyderabad');
  final _pincodeController = TextEditingController(text: '500001');
  final _turnoverController = TextEditingController(text: '1500000');
  final _investmentController = TextEditingController(text: '600000');
  final _loanAmountController = TextEditingController(text: '1000000');

  String _gender = 'Male';
  String _socialCategory = 'General';
  String _businessType = 'Micro Enterprise';
  String _industrySector = 'Manufacturing';
  bool _gstRegistered = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MSME Eligibility Profile'),
      ),
      body: Form(
        key: _formKey,
        child: Stepper(
          currentStep: _currentStep,
          onStepContinue: () {
            if (_currentStep < 2) {
              setState(() => _currentStep += 1);
            } else {
              _saveAndMatch();
            }
          },
          onStepCancel: () {
            if (_currentStep > 0) {
              setState(() => _currentStep -= 1);
            }
          },
          steps: [
            Step(
              title: const Text('Personal & Social Details'),
              isActive: _currentStep >= 0,
              content: Column(
                children: [
                  TextFormField(
                    controller: _nameController,
                    decoration: const InputDecoration(labelText: 'Full Name / Entrepreneur Name'),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Expanded(
                        child: DropdownButtonFormField<String>(
                          value: _gender,
                          decoration: const InputDecoration(labelText: 'Gender'),
                          items: ['Male', 'Female', 'Other'].map((g) => DropdownMenuItem(value: g, child: Text(g))).toList(),
                          onChanged: (val) => setState(() => _gender = val!),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: DropdownButtonFormField<String>(
                          value: _socialCategory,
                          decoration: const InputDecoration(labelText: 'Social Category'),
                          items: ['General', 'OBC', 'SC', 'ST', 'Minority'].map((c) => DropdownMenuItem(value: c, child: Text(c))).toList(),
                          onChanged: (val) => setState(() => _socialCategory = val!),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Expanded(
                        child: TextFormField(
                          controller: _districtController,
                          decoration: const InputDecoration(labelText: 'District'),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: TextFormField(
                          controller: _pincodeController,
                          decoration: const InputDecoration(labelText: 'Pincode'),
                          keyboardType: TextInputType.number,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Step(
              title: const Text('Enterprise Details'),
              isActive: _currentStep >= 1,
              content: Column(
                children: [
                  DropdownButtonFormField<String>(
                    value: _businessType,
                    decoration: const InputDecoration(labelText: 'Enterprise Classification'),
                    items: ['Micro Enterprise', 'Small Enterprise', 'Medium Enterprise', 'New Startup'].map((b) => DropdownMenuItem(value: b, child: Text(b))).toList(),
                    onChanged: (val) => setState(() => _businessType = val!),
                  ),
                  const SizedBox(height: 12),
                  DropdownButtonFormField<String>(
                    value: _industrySector,
                    decoration: const InputDecoration(labelText: 'Industry Sector'),
                    items: ['Manufacturing', 'Services', 'Trading', 'Food Processing', 'Agri-Tech'].map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                    onChanged: (val) => setState(() => _industrySector = val!),
                  ),
                  const SizedBox(height: 12),
                  TextFormField(
                    controller: _turnoverController,
                    decoration: const InputDecoration(labelText: 'Annual Turnover (₹)', prefixText: '₹ '),
                    keyboardType: TextInputType.number,
                  ),
                ],
              ),
            ),
            Step(
              title: const Text('Credit & Subsidy Requirement'),
              isActive: _currentStep >= 2,
              content: Column(
                children: [
                  TextFormField(
                    controller: _loanAmountController,
                    decoration: const InputDecoration(labelText: 'Required Loan / Capital (₹)', prefixText: '₹ '),
                    keyboardType: TextInputType.number,
                  ),
                  const SizedBox(height: 12),
                  SwitchListTile(
                    title: const Text('GST Registered Entity'),
                    subtitle: const Text('Eligible for fast-track credit guarantee'),
                    value: _gstRegistered,
                    activeColor: AppTheme.primaryGreen,
                    onChanged: (val) => setState(() => _gstRegistered = val),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _saveAndMatch() async {
    final userProvider = Provider.of<UserProvider>(context, listen: false);
    final schemeProvider = Provider.of<SchemeProvider>(context, listen: false);

    final profile = UserProfileModel(
      fullName: _nameController.text,
      gender: _gender,
      socialCategory: _socialCategory,
      age: int.tryParse(_ageController.text) ?? 30,
      state: _stateController.text,
      district: _districtController.text,
      pincode: _pincodeController.text,
      businessType: _businessType,
      industrySector: _industrySector,
      annualTurnover: double.tryParse(_turnoverController.text) ?? 1000000.0,
      investment: double.tryParse(_investmentController.text) ?? 500000.0,
      gstRegistered: _gstRegistered,
      requiredLoanAmount: double.tryParse(_loanAmountController.text) ?? 1000000.0,
    );

    userProvider.updateProfile(profile);
    await schemeProvider.loadSchemes(profile);

    if (mounted) {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const SchemesFeedScreen()),
      );
    }
  }
}