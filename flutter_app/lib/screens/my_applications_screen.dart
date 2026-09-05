import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../models/application_model.dart';
import '../providers/application_provider.dart';

class MyApplicationsScreen extends StatefulWidget {
  const MyApplicationsScreen({super.key});

  @override
  State<MyApplicationsScreen> createState() => _MyApplicationsScreenState();
}

class _MyApplicationsScreenState extends State<MyApplicationsScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<ApplicationProvider>(context, listen: false).loadApplications();
    });
  }

  @override
  Widget build(BuildContext context) {
    final appProvider = Provider.of<ApplicationProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Loan & Subsidy Applications'),
      ),
      body: appProvider.isLoading
          ? const Center(child: CircularProgressIndicator())
          : appProvider.applications.isEmpty
              ? const Center(child: Text('No submitted applications yet.'))
              : ListView.builder(
                  padding: const EdgeInsets.all(16),
                  itemCount: appProvider.applications.length,
                  itemBuilder: (context, index) {
                    final app = appProvider.applications[index];
                    return _buildApplicationCard(app);
                  },
                ),
    );
  }

  Widget _buildApplicationCard(ApplicationModel app) {
    Color statusColor = Colors.orange;
    if (app.status == 'Sanctioned') statusColor = Colors.green;
    if (app.status == 'Disbursed') statusColor = AppTheme.primaryGreen;

    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  app.applicationId,
                  style: const TextStyle(fontWeight: FontWeight.bold, color: AppTheme.primaryDark, fontSize: 14),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: statusColor.withOpacity(0.12),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    app.status,
                    style: TextStyle(color: statusColor, fontWeight: FontWeight.bold, fontSize: 12),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              app.schemeName,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: AppTheme.textDark),
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Requested: ₹${(app.amountRequested / 100000).toStringAsFixed(1)} Lakhs', style: const TextStyle(fontSize: 13, color: AppTheme.textMuted)),
                Text(app.partnerAssigned, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppTheme.primaryGreen)),
              ],
            ),
            const SizedBox(height: 14),
            const Divider(color: AppTheme.borderColor),
            const SizedBox(height: 8),

            // Stepper progress indicator
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildStepDot('Submitted', true),
                _buildStepDot('Appraisal', true),
                _buildStepDot('Sanction', app.status == 'Sanctioned' || app.status == 'Disbursed'),
                _buildStepDot('Disbursal', app.status == 'Disbursed'),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStepDot(String label, bool isDone) {
    return Column(
      children: [
        Icon(
          isDone ? Icons.check_circle_rounded : Icons.radio_button_unchecked_rounded,
          color: isDone ? AppTheme.primaryGreen : AppTheme.borderColor,
          size: 18,
        ),
        const SizedBox(height: 4),
        Text(label, style: TextStyle(fontSize: 11, color: isDone ? AppTheme.textDark : AppTheme.textMuted)),
      ],
    );
  }
}