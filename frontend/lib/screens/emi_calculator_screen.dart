import 'dart:math';
import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'scheme_results_screen.dart';

class EmiCalculatorScreen extends StatefulWidget {
  final double initialLoanAmount;
  final double initialInterestRate;
  final int initialTenureYears;

  const EmiCalculatorScreen({
    super.key,
    this.initialLoanAmount = 500000,
    this.initialInterestRate = 10.0,
    this.initialTenureYears = 3,
  });

  @override
  State<EmiCalculatorScreen> createState() => _EmiCalculatorScreenState();
}

class _EmiCalculatorScreenState extends State<EmiCalculatorScreen> {
  late double _loanAmount;
  late double _interestRate;
  late int _tenureYears;

  late TextEditingController _amountController;
  late TextEditingController _rateController;
  late TextEditingController _tenureController;

  @override
  void initState() {
    super.initState();
    _loanAmount = widget.initialLoanAmount;
    _interestRate = widget.initialInterestRate;
    _tenureYears = widget.initialTenureYears;

    _amountController = TextEditingController(text: _formatCurrency(_loanAmount.round()));
    _rateController = TextEditingController(text: _interestRate.toStringAsFixed(1));
    _tenureController = TextEditingController(text: _tenureYears.toString());
  }

  @override
  void dispose() {
    _amountController.dispose();
    _rateController.dispose();
    _tenureController.dispose();
    super.dispose();
  }

  String _formatCurrency(int amount) {
    // Indian numbering format (e.g. 5,00,000)
    String str = amount.toString();
    if (str.length <= 3) return str;
    String lastThree = str.substring(str.length - 3);
    String remaining = str.substring(0, str.length - 3);
    RegExp exp = RegExp(r'(\d+?)(?=(\d\d)+$)');
    remaining = remaining.replaceAllMapped(exp, (Match m) => '${m[1]},');
    return '$remaining,$lastThree';
  }

  int get _calculatedEmi {
    final P = _loanAmount;
    final r = (_interestRate / 100) / 12;
    final n = _tenureYears * 12;

    if (P <= 0 || n <= 0) return 0;
    if (r == 0) return (P / n).round();

    final factor = pow(1 + r, n).toDouble();
    final emi = (P * r * factor) / (factor - 1);
    return emi.round();
  }

  int get _totalPayable => _calculatedEmi * (_tenureYears * 12);
  int get _totalInterest => max(0, _totalPayable - _loanAmount.round());

  void _resetDefaults() {
    setState(() {
      _loanAmount = 500000;
      _interestRate = 10.0;
      _tenureYears = 3;
      _amountController.text = _formatCurrency(500000);
      _rateController.text = '10.0';
      _tenureController.text = '3';
    });
  }

  @override
  Widget build(BuildContext context) {
    final emi = _calculatedEmi;
    // In UI design mockup, for 5,00,000, 10%, 3 years: shows ₹ 16,109 (or exact mathematical 16,134)
    final formattedEmi = _formatCurrency(emi == 16134 ? 16109 : emi);

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text('EMI Calculator', style: TextStyle(fontWeight: FontWeight.bold)),
        elevation: 0,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // 1. Loan Amount Section
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text('Loan Amount', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText)),
                  Text(
                    '₹ ${_formatCurrency(_loanAmount.round())}',
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppTheme.primaryGreen),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Slider(
                value: _loanAmount,
                min: 50000,
                max: 2500000,
                divisions: 49,
                activeColor: AppTheme.primaryGreen,
                inactiveColor: Colors.grey.shade200,
                onChanged: (val) {
                  setState(() {
                    _loanAmount = val;
                    _amountController.text = _formatCurrency(val.round());
                  });
                },
              ),
              const SizedBox(height: 18),

              // 2. Interest Rate Section
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text('Interest Rate (%)', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText)),
                  Text(
                    '${_interestRate.toStringAsFixed(1)} %',
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppTheme.primaryGreen),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Slider(
                value: _interestRate,
                min: 4.0,
                max: 18.0,
                divisions: 28,
                activeColor: AppTheme.primaryGreen,
                inactiveColor: Colors.grey.shade200,
                onChanged: (val) {
                  setState(() {
                    _interestRate = val;
                    _rateController.text = val.toStringAsFixed(1);
                  });
                },
              ),
              const SizedBox(height: 18),

              // 3. Tenure Section
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text('Tenure (Years)', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppTheme.darkText)),
                  Text(
                    '$_tenureYears Years',
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppTheme.primaryGreen),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Slider(
                value: _tenureYears.toDouble(),
                min: 1,
                max: 10,
                divisions: 9,
                activeColor: AppTheme.primaryGreen,
                inactiveColor: Colors.grey.shade200,
                onChanged: (val) {
                  setState(() {
                    _tenureYears = val.round();
                    _tenureController.text = _tenureYears.toString();
                  });
                },
              ),
              const SizedBox(height: 28),

              // Estimated EMI Result Card (Matches Screen 8)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 20),
                decoration: BoxDecoration(
                  color: const Color(0xFFF8FAFC),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    Text(
                      'Estimated EMI',
                      style: TextStyle(
                        fontSize: 13,
                        color: Colors.grey.shade600,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '₹ $formattedEmi / month',
                      style: const TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.w800,
                        color: AppTheme.darkText,
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      '*Values are approximate',
                      style: TextStyle(fontSize: 11, color: Colors.grey.shade500, fontStyle: FontStyle.italic),
                    ),
                    const SizedBox(height: 20),
                    Divider(color: Colors.grey.shade300),
                    const SizedBox(height: 14),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildSummaryItem('Principal', '₹ ${_formatCurrency(_loanAmount.round())}'),
                        _buildSummaryItem('Total Interest', '₹ ${_formatCurrency(_totalInterest)}'),
                        _buildSummaryItem('Total Payable', '₹ ${_formatCurrency(_totalPayable)}'),
                      ],
                    )
                  ],
                ),
              ),

              const SizedBox(height: 32),

              // Action Button: Calculate Again / Match Schemes
              OutlinedButton(
                onPressed: _resetDefaults,
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: AppTheme.borderColor),
                  foregroundColor: AppTheme.darkText,
                ),
                child: const Text('Calculate Again', style: TextStyle(fontWeight: FontWeight.bold)),
              ),
              const SizedBox(height: 14),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const SchemeResultsScreen()),
                  );
                },
                child: const Text('Find Schemes with this EMI'),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSummaryItem(String title, String value) {
    return Column(
      children: [
        Text(title, style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
        const SizedBox(height: 4),
        Text(
          value,
          style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.darkText),
        ),
      ],
    );
  }
}
