import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/scheme.dart';
import 'document_checklist_screen.dart';
import 'emi_calculator_screen.dart';
import 'nearby_partners_screen.dart';

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
    _tabController = TabController(length: 3, vsync: this);
    _tabController.addListener(() {
      if (!_tabController.indexIsChanging) {
        setState(() {});
      }
    });
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
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(42),
          child: TabBar(
            controller: _tabController,
            labelColor: AppTheme.primaryGreen,
            unselectedLabelColor: const Color(0xFF64748B),
            indicatorColor: AppTheme.primaryGreen,
            indicatorWeight: 3,
            labelStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
            tabs: const [
              Tab(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.info_outline_rounded, size: 15, color: AppTheme.primaryGreen),
                    SizedBox(width: 5),
                    Text('Overview'),
                  ],
                ),
              ),
              Tab(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.stars_rounded, size: 15, color: Color(0xFFD97706)),
                    SizedBox(width: 5),
                    Text('Benefits'),
                  ],
                ),
              ),
              Tab(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.verified_user_outlined, size: 15, color: Color(0xFF2563EB)),
                    SizedBox(width: 5),
                    Text('Eligibility'),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          _buildOverviewTab(scheme),
          _buildBenefitsTab(scheme),
          _buildEligibilityTab(scheme),
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
                          fontSize: 12.5,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 12),
              // Dynamic Primary Action Button (Continue / Documents with List Icon)
              Expanded(
                flex: 2,
                child: ElevatedButton(
                  onPressed: () {
                    if (_tabController.index == 0) {
                      _tabController.animateTo(1);
                    } else if (_tabController.index == 1) {
                      _tabController.animateTo(2);
                    } else {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => DocumentChecklistScreen(scheme: scheme),
                        ),
                      );
                    }
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primaryGreen,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                  ),
                  child: _tabController.index == 2
                      ? const Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(Icons.format_list_bulleted_rounded, size: 16, color: Colors.white),
                            SizedBox(width: 6),
                            Text(
                              'Documents',
                              style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold, color: Colors.white),
                            ),
                          ],
                        )
                      : const Text(
                          'Continue',
                          style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold, color: Colors.white),
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
        _buildSpecRow('Loan Amount', scheme.loanAmountFormatted.isNotEmpty ? scheme.loanAmountFormatted : 'Up to ₹${scheme.maxGrantLoanAmount}', Icons.account_balance_wallet_outlined),
        _buildSpecRow('Interest Rate', scheme.interestRate, Icons.percent_rounded),
        _buildSpecRow('Repayment Period', scheme.repaymentPeriod, Icons.calendar_today_outlined),
        _buildSpecRow('Who can apply?', scheme.whoCanApply, Icons.people_outline),
        _buildSpecRow('Purpose', scheme.purpose, Icons.center_focus_strong_outlined),

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

  Widget _buildSpecRow(String label, String value, IconData icon) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 12),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: Color(0xFFF1F5F9))),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(
              color: const Color(0xFFF1F5F9),
              borderRadius: BorderRadius.circular(6),
            ),
            child: Icon(icon, size: 13, color: AppTheme.primaryGreen),
          ),
          const SizedBox(width: 10),
          SizedBox(
            width: 115,
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
        _buildEligibilityItem(
          icon: Icons.format_list_bulleted_rounded,
          title: 'Required Documents',
          desc: scheme.requiredDocuments.isNotEmpty
              ? scheme.requiredDocuments.map((d) => d.docName).join(', ')
              : 'Aadhaar Card, PAN Card, Bank Statement, Udyam Certificate',
        ),
        const SizedBox(height: 4),
        GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const NearbyPartnersScreen()),
            );
          },
          child: Container(
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
                  child: const Icon(Icons.location_on_rounded, color: AppTheme.primaryGreen, size: 20),
                ),
                const SizedBox(width: 12),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Nearby Partners', style: TextStyle(fontSize: 12, color: Color(0xFF64748B))),
                      SizedBox(height: 2),
                      Text('Locate CSC centers & bank branches near you', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.darkText)),
                    ],
                  ),
                ),
                const Icon(Icons.arrow_forward_ios_rounded, size: 14, color: Color(0xFF94A3B8)),
              ],
            ),
          ),
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

}
