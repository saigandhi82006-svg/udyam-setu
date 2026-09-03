import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/scheme.dart';
import 'document_checklist_screen.dart';
import 'emi_calculator_screen.dart';

class SchemeDetailScreen extends StatefulWidget {
  final Scheme scheme;

  const SchemeDetailScreen({super.key, required this.scheme});

  @override
  State<SchemeDetailScreen> createState() => _SchemeDetailScreenState();
}

class _SchemeDetailScreenState extends State<SchemeDetailScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  bool _isSaved = false;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  void _toggleSave() {
    setState(() => _isSaved = !_isSaved);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(_isSaved ? 'Scheme saved to your bookmarks!' : 'Scheme removed from bookmarks'),
        backgroundColor: AppTheme.primaryGreen,
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final scheme = widget.scheme;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          scheme.schemeName,
          style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
        ),
        actions: [
          if (scheme.matchBadge != null)
            Padding(
              padding: const EdgeInsets.only(right: 16),
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0xFFDCFCE7),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Text(
                    scheme.matchBadge!,
                    style: const TextStyle(
                      color: Color(0xFF15803D),
                      fontSize: 12,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              ),
            ),
        ],
        bottom: TabBar(
          controller: _tabController,
          labelColor: AppTheme.primaryGreen,
          unselectedLabelColor: Colors.grey.shade600,
          indicatorColor: AppTheme.primaryGreen,
          indicatorWeight: 3,
          labelStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
          tabs: const [
            Tab(text: 'Overview'),
            Tab(text: 'Benefits'),
            Tab(text: 'Eligibility'),
            Tab(text: 'Documents'),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          _buildOverviewTab(scheme),
          _buildBenefitsTab(scheme),
          _buildEligibilityTab(scheme),
          _buildDocumentsTab(scheme),
        ],
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.all(16),
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
        child: SafeArea(
          child: Row(
            children: [
              // Save Button (Outline)
              Expanded(
                flex: 1,
                child: OutlinedButton(
                  onPressed: _toggleSave,
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    side: const BorderSide(color: AppTheme.borderColor),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        _isSaved ? Icons.bookmark : Icons.bookmark_border_rounded,
                        color: _isSaved ? AppTheme.primaryGreen : AppTheme.darkText,
                        size: 20,
                      ),
                      const SizedBox(width: 6),
                      Text(
                        _isSaved ? 'Saved' : 'Save',
                        style: TextStyle(
                          color: _isSaved ? AppTheme.primaryGreen : AppTheme.darkText,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 12),
              // Apply Now Button (Filled)
              Expanded(
                flex: 2,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => DocumentChecklistScreen(scheme: scheme),
                      ),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primaryGreen,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                  ),
                  child: const Text(
                    'Apply Now',
                    style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildOverviewTab(Scheme scheme) {
    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        // Description
        Text(
          scheme.description,
          style: TextStyle(fontSize: 14, color: Colors.grey.shade800, height: 1.5),
        ),
        const SizedBox(height: 24),

        // Financial Specs List matching mockup Screen 7
        _buildSpecRow('Loan Amount', scheme.loanAmountFormatted.isNotEmpty ? scheme.loanAmountFormatted : 'Up to ₹${scheme.maxGrantLoanAmount}'),
        _buildSpecRow('Interest Rate', scheme.interestRate),
        _buildSpecRow('Repayment Period', scheme.repaymentPeriod),
        _buildSpecRow('Who can apply?', scheme.whoCanApply),
        _buildSpecRow('Purpose', scheme.purpose),

        const SizedBox(height: 20),

        // Quick Loan Calculator Callout
        InkWell(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const EmiCalculatorScreen()),
            );
          },
          borderRadius: BorderRadius.circular(12),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: AppTheme.lightGreen,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: Colors.green.shade200),
            ),
            child: const Row(
              children: [
                Icon(Icons.calculate_outlined, color: AppTheme.primaryGreen, size: 24),
                SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Plan Your Monthly Repayment', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: AppTheme.darkGreen)),
                      Text('Open EMI Calculator with this scheme rate', style: TextStyle(fontSize: 11, color: AppTheme.darkText)),
                    ],
                  ),
                ),
                Icon(Icons.arrow_forward_ios, size: 14, color: AppTheme.primaryGreen),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildSpecRow(String label, String value) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 14),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: Color(0xFFF1F5F9))),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 130,
            child: Text(
              label,
              style: TextStyle(fontSize: 13, color: Colors.grey.shade600, fontWeight: FontWeight.w500),
            ),
          ),
          Expanded(
            child: Text(
              value,
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.darkText),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBenefitsTab(Scheme scheme) {
    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        const Text(
          'Key Benefits & Subsidies',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.darkText),
        ),
        const SizedBox(height: 14),
        if (scheme.benefits.isEmpty)
          const Text('No collateral required. Quick bank disbursement upon document verification.')
        else
          ...scheme.benefits.map((benefit) => Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.check_circle, color: AppTheme.primaryGreen, size: 20),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(benefit, style: const TextStyle(fontSize: 13, height: 1.4)),
                    ),
                  ],
                ),
              )),
      ],
    );
  }

  Widget _buildEligibilityTab(Scheme scheme) {
    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        const Text(
          'Eligibility Criteria',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.darkText),
        ),
        const SizedBox(height: 14),
        _buildEligibilityItem(
          icon: Icons.cake_outlined,
          title: 'Minimum Age',
          desc: '${scheme.minAge} years or above',
        ),
        _buildEligibilityItem(
          icon: Icons.people_outline,
          title: 'Eligible Social Categories',
          desc: scheme.eligibleCategories.join(', '),
        ),
        _buildEligibilityItem(
          icon: Icons.business_center_outlined,
          title: 'Eligible Enterprises',
          desc: scheme.eligibleBusinessTypes.join(', '),
        ),
        _buildEligibilityItem(
          icon: Icons.monetization_on_outlined,
          title: 'Income Limit',
          desc: scheme.maxIncome > 0 ? 'Up to ₹${scheme.maxIncome} annual income' : 'No upper income ceiling',
        ),
      ],
    );
  }

  Widget _buildEligibilityItem({required IconData icon, required String title, required String desc}) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFE2E8F0)),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: const BoxDecoration(color: AppTheme.lightGreen, shape: BoxShape.circle),
            child: Icon(icon, color: AppTheme.primaryGreen, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
                const SizedBox(height: 2),
                Text(desc, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.darkText)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDocumentsTab(Scheme scheme) {
    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Required Checklist',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.darkText),
            ),
            TextButton.icon(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => DocumentChecklistScreen(scheme: scheme)),
                );
              },
              icon: const Icon(Icons.upload_file, size: 16, color: AppTheme.primaryGreen),
              label: const Text('Open Manager', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
            ),
          ],
        ),
        const SizedBox(height: 10),
        ...scheme.requiredDocuments.map((doc) => Container(
              margin: const EdgeInsets.only(bottom: 10),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: Colors.grey.shade200),
              ),
              child: Row(
                children: [
                  const Icon(Icons.insert_drive_file_outlined, color: Colors.grey, size: 22),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(doc.docName, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                        if (doc.description.isNotEmpty)
                          Text(doc.description, style: TextStyle(fontSize: 11, color: Colors.grey.shade600)),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                    decoration: BoxDecoration(
                      color: doc.status == 'Uploaded' ? const Color(0xFFDCFCE7) : const Color(0xFFFEF3C7),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text(
                      doc.status,
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: doc.status == 'Uploaded' ? const Color(0xFF15803D) : const Color(0xFFB45309),
                      ),
                    ),
                  ),
                ],
              ),
            )),
      ],
    );
  }
}
