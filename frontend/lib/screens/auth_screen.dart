import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'home_dashboard_screen.dart';
import '../services/api_service.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final TextEditingController _phoneController = TextEditingController(text: '9876543210');
  final TextEditingController _otpController = TextEditingController(text: '123456');
  final ApiService _apiService = ApiService();

  bool _isOtpSent = false;
  bool _isLoading = false;

  void _sendOtp() async {
    final phone = _phoneController.text.trim();
    if (phone.length < 10) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter a valid 10-digit mobile number')),
      );
      return;
    }

    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 600));
    setState(() {
      _isLoading = false;
      _isOtpSent = true;
    });

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('OTP sent successfully to +91 $phone!'),
          backgroundColor: AppTheme.primaryGreen,
        ),
      );
    }
  }

  void _verifyOtpAndProceed() async {
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(milliseconds: 500));
    setState(() => _isLoading = false);

    if (mounted) {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const HomeDashboardScreen()),
      );
    }
  }

  void _continueAsGuest() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(builder: (_) => const HomeDashboardScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              // App mini branding
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: AppTheme.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: const Icon(Icons.eco, color: AppTheme.primaryGreen, size: 24),
                  ),
                  const SizedBox(width: 10),
                  const Text(
                    'Udyam Setu',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: AppTheme.darkGreen,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 48),
              const Text(
                'Welcome Back!',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w800,
                  color: AppTheme.darkText,
                ),
              ),
              const SizedBox(height: 6),
              Text(
                'Login to continue your entrepreneurial journey',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey.shade600,
                ),
              ),
              const SizedBox(height: 36),

              // Mobile Number Input Field
              const Text(
                'Mobile Number',
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
              ),
              const SizedBox(height: 8),
              Container(
                decoration: BoxDecoration(
                  color: Colors.grey.shade50,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.grey.shade300),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 15),
                      decoration: BoxDecoration(
                        border: Border(right: BorderSide(color: Colors.grey.shade300)),
                      ),
                      child: const Row(
                        children: [
                          Text('🇮🇳', style: TextStyle(fontSize: 16)),
                          SizedBox(width: 6),
                          Text(
                            '+91',
                            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                          ),
                        ],
                      ),
                    ),
                    Expanded(
                      child: TextField(
                        controller: _phoneController,
                        keyboardType: TextInputType.phone,
                        maxLength: 10,
                        decoration: const InputDecoration(
                          hintText: 'Enter Mobile Number',
                          border: InputBorder.none,
                          counterText: '',
                          contentPadding: EdgeInsets.symmetric(horizontal: 14),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),

              // OTP field if sent
              if (_isOtpSent) ...[
                const Text(
                  'Enter 6-Digit Verification Code',
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText),
                ),
                const SizedBox(height: 8),
                TextField(
                  controller: _otpController,
                  keyboardType: TextInputType.number,
                  maxLength: 6,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, letterSpacing: 8),
                  decoration: InputDecoration(
                    hintText: '123456',
                    hintStyle: TextStyle(color: Colors.grey.shade400, letterSpacing: 4),
                    counterText: '',
                  ),
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _isLoading ? null : _verifyOtpAndProceed,
                  child: _isLoading
                      ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                      : const Text('Verify & Continue'),
                ),
              ] else ...[
                // Send OTP Button
                ElevatedButton(
                  onPressed: _isLoading ? null : _sendOtp,
                  child: _isLoading
                      ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                      : const Text('Send OTP'),
                ),
              ],

              const SizedBox(height: 28),
              // OR Divider
              Row(
                children: [
                  Expanded(child: Divider(color: Colors.grey.shade300)),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    child: Text(
                      'OR',
                      style: TextStyle(color: Colors.grey.shade500, fontWeight: FontWeight.w600, fontSize: 12),
                    ),
                  ),
                  Expanded(child: Divider(color: Colors.grey.shade300)),
                ],
              ),
              const SizedBox(height: 24),

              // Continue with Google
              OutlinedButton(
                onPressed: _continueAsGuest,
                style: OutlinedButton.styleFrom(
                  side: BorderSide(color: Colors.grey.shade300),
                  foregroundColor: AppTheme.darkText,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.network(
                      'https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png',
                      height: 20,
                      width: 20,
                      errorBuilder: (_, __, ___) => const Icon(Icons.g_mobiledata, color: Colors.blue, size: 26),
                    ),
                    const SizedBox(width: 12),
                    const Text('Continue with Google', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
                  ],
                ),
              ),
              const SizedBox(height: 14),

              // Continue as Guest
              OutlinedButton(
                onPressed: _continueAsGuest,
                style: OutlinedButton.styleFrom(
                  side: BorderSide(color: Colors.grey.shade300),
                  foregroundColor: AppTheme.darkText,
                ),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.person_outline_rounded, color: AppTheme.primaryGreen, size: 20),
                    SizedBox(width: 12),
                    Text('Continue as Guest', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
                  ],
                ),
              ),

              const SizedBox(height: 36),
              // Footer: New user? Sign Up
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("New user? ", style: TextStyle(color: Colors.grey.shade600)),
                    GestureDetector(
                      onTap: _continueAsGuest,
                      child: const Text(
                        'Sign Up',
                        style: TextStyle(
                          color: AppTheme.primaryGreen,
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.underline,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
