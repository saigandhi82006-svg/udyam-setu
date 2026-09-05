import 'package:flutter/material.dart';
import 'dart:math';
import '../config/theme.dart';

class EmiCalculatorScreen extends StatefulWidget {
  const EmiCalculatorScreen({super.key});

  @override
  State<EmiCalculatorScreen> createState() => _EmiCalculatorScreenState();
}

class _EmiCalculatorScreenState extends State<EmiCalculatorScreen> {
  double _loanAmount = 1000000.0;
  double _tenureYears = 5.0;
  double _interestRate = 8.5;
  double _subsidyPercent = 25.0;

  @override
  Widget build(BuildContext context) {
    // EMI Calculation formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    final double monthlyRate = (_interestRate / 12) / 100;
    final int months = (_tenureYears * 12).toInt();
    final double emi = (_loanAmount * monthlyRate * pow(1 + monthlyRate, months)) / (pow(1 + monthlyRate, months) - 1);
    final double totalPayment = emi * months;
    final double totalInterest = totalPayment - _loanAmount;
    final double subsidySavings = _loanAmount * (_subsidyPercent / 100);
    final double effectiveLoanCost = totalPayment - subsidySavings;

    return Scaffold(
      appBar: AppBar(
        title: const Text('EMI & Subsidy Calculator'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Results Summary Card
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [AppTheme.primaryDark, AppTheme.primaryGreen],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(18),
                boxShadow: [
                  BoxShadow(color: AppTheme.primaryGreen.withOpacity(0.3), blurRadius: 10, offset: const Offset(0, 4)),
                ],
              ),
              child: Column(
                children: [
                  const Text('Estimated Monthly EMI', style: TextStyle(color: Colors.white70, fontSize: 13)),
                  const SizedBox(height: 6),
                  Text('₹ ${emi.toStringAsFixed(0)} / month', style: const TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 16),
                  const Divider(color: Colors.white24),
                  const SizedBox(height: 12),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('Total Interest', style: TextStyle(color: Colors.white70, fontSize: 11)),
                          Text('₹ ${totalInterest.toStringAsFixed(0)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          const Text('Govt Subsidy Savings', style: TextStyle(color: Colors.amber, fontSize: 11, fontWeight: FontWeight.bold)),
                          Text('₹ ${subsidySavings.toStringAsFixed(0)}', style: const TextStyle(color: Colors.amber, fontWeight: FontWeight.bold, fontSize: 15)),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Loan Amount Slider
            _buildSliderCard(
              title: 'Loan Required (₹)',
              valueString: '₹ ${(_loanAmount / 100000).toStringAsFixed(1)} Lakhs',
              min: 50000,
              max: 50000000,
              divisions: 100,
              value: _loanAmount,
              onChanged: (val) => setState(() => _loanAmount = val),
            ),
            const SizedBox(height: 14),

            // Tenure Slider
            _buildSliderCard(
              title: 'Tenure (Years)',
              valueString: '${_tenureYears.toInt()} Years',
              min: 1,
              max: 10,
              divisions: 9,
              value: _tenureYears,
              onChanged: (val) => setState(() => _tenureYears = val),
            ),
            const SizedBox(height: 14),

            // Interest Rate Slider
            _buildSliderCard(
              title: 'Interest Rate (%)',
              valueString: '${_interestRate.toStringAsFixed(1)} % p.a.',
              min: 3,
              max: 18,
              divisions: 30,
              value: _interestRate,
              onChanged: (val) => setState(() => _interestRate = val),
            ),
            const SizedBox(height: 14),

            // Subsidy Rate Slider
            _buildSliderCard(
              title: 'Capital Subsidy (%)',
              valueString: '${_subsidyPercent.toInt()} % Govt Aid',
              min: 0,
              max: 35,
              divisions: 7,
              value: _subsidyPercent,
              onChanged: (val) => setState(() => _subsidyPercent = val),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSliderCard({
    required String title,
    required String valueString,
    required double min,
    required double max,
    required int divisions,
    required double value,
    required ValueChanged<double> onChanged,
  }) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: AppTheme.borderColor),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(title, style: const TextStyle(fontWeight: FontWeight.w600, color: AppTheme.textDark)),
              Text(valueString, style: const TextStyle(fontWeight: FontWeight.bold, color: AppTheme.primaryGreen)),
            ],
          ),
          Slider(
            value: value,
            min: min,
            max: max,
            divisions: divisions,
            activeColor: AppTheme.primaryGreen,
            inactiveColor: AppTheme.emeraldBg,
            onChanged: onChanged,
          ),
        ],
      ),
    );
  }
}