import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../models/scheme_model.dart';
import '../providers/application_provider.dart';
import '../providers/user_provider.dart';
import 'emi_calculator_screen.dart';
import 'document_checklist_screen.dart';
import 'my_applications_screen.dart';

class SchemeDetailsScreen extends StatelessWidget {
  final SchemeModel scheme;
  const SchemeDetailsScreen({super.key, required this.scheme});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(scheme.schemeCode),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Top Badge Header
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    color: AppTheme.emeraldBg,
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Text(
                    '${scheme.matchScore}% Match Score',
                    style: const TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(width: 8),
                if (!scheme.collateralRequired)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    decoration: BoxDecoration(
                      color: Colors.blue.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: const Text(
                      'Zero Collateral Required',
                      style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold, fontSize: 12),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 12),

            Text(
              scheme.name,
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.textDark),
            ),
            const SizedBox(height: 12),

            Text(
              scheme.description,
              style: const TextStyle(fontSize: 14, color: AppTheme.textMuted, height: 1.4),
            ),
            const SizedBox(height: 20),

            // Key Financial Highlights
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _buildDetailHighlight('Max Limit', scheme.maxAmount >= 10000000 ? '₹${(scheme.maxAmount / 10000000).toStringAsFixed(1)} Cr' : '₹${(scheme.maxAmount / 100000).toStringAsFixed(0)} Lakhs'),
                  _buildDetailHighlight('Subsidy Rate', '${scheme.interestSubsidy.toInt()}%'),
                  _buildDetailHighlight('Collateral', scheme.collateralRequired ? 'Required' : 'Free'),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Benefits Section
            const Text('Key Scheme Benefits', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color: AppTheme.textDark)),
            const SizedBox(height: 10),
            ...scheme.benefits.map((b) => _buildBulletItem(b, Icons.check_circle_rounded, AppTheme.primaryGreen)),
            const SizedBox(height: 24),

            // Mandatory Documents Section
            const Text('Documents Required', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color: AppTheme.textDark)),
            const SizedBox(height: 10),
            ...scheme.documentsRequired.map((d) => _buildBulletItem(d, Icons.description_rounded, Colors.amber)),
            const SizedBox(height: 24),

            // Steps to Apply
            const Text('Step-by-Step Procedure', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color: AppTheme.textDark)),
            const SizedBox(height: 10),
            ...scheme.stepsToApply.map((s) => _buildBulletItem(s, Icons.arrow_forward_rounded, Colors.indigo)),
            const SizedBox(height: 30),

            // Action Buttons
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    icon: const Icon(Icons.calculate_rounded),
                    label: const Text('Calculate EMI'),
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (_) => const EmiCalculatorScreen()),
                      );
                    },
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: ElevatedButton.icon(
                    icon: const Icon(Icons.checklist_rounded),
                    label: const Text('Checklist PDF'),
                    onPressed: () {
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (_) => DocumentChecklistScreen(scheme: scheme)),
                      );
                    },
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () async {
                  final user = Provider.of<UserProvider>(context, listen: false).profile;
                  final appProvider = Provider.of<ApplicationProvider>(context, listen: false);

                  final appId = await appProvider.submitNewApplication(
                    schemeId: scheme.id,
                    schemeName: scheme.name,
                    applicantName: user.fullName.isNotEmpty ? user.fullName : 'Verified MSME Entrepreneur',
                    phone: '+91 98765 43210',
                    amount: user.requiredLoanAmount,
                  );

                  if (context.mounted) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Application $appId submitted successfully!')),
                    );
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (_) => const MyApplicationsScreen()),
                    );
                  }
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primaryGreen,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
                child: const Text('Instant Online Apply ➔', style: TextStyle(fontSize: 16)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailHighlight(String label, String value) {
    return Column(
      children: [
        Text(label, style: const TextStyle(fontSize: 12, color: AppTheme.textMuted)),
        const SizedBox(height: 4),
        Text(value, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.primaryDark)),
      ],
    );
  }

  Widget _buildBulletItem(String text, IconData icon, Color color) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 18),
          const SizedBox(width: 10),
          Expanded(
            child: Text(text, style: const TextStyle(fontSize: 13, color: AppTheme.textDark, height: 1.3)),
          ),
        ],
      ),
    );
  }
}