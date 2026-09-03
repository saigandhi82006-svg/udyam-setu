import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/scheme.dart';
import '../models/user.dart';
import '../services/api_service.dart';
import '../services/mock_data_service.dart';
import 'scheme_detail_screen.dart';

class SchemeResultsScreen extends StatefulWidget {
  final UserProfile? userProfile;
  final List<Scheme>? preloadedMatches;

  const SchemeResultsScreen({
    super.key,
    this.userProfile,
    this.preloadedMatches,
  });

  @override
  State<SchemeResultsScreen> createState() => _SchemeResultsScreenState();
}

class _SchemeResultsScreenState extends State<SchemeResultsScreen> {
  final ApiService _apiService = ApiService();
  List<Scheme> _schemes = [];
  bool _isLoading = false;
  bool _showAll = false;

  @override
  void initState() {
    super.initState();
    if (widget.preloadedMatches != null && widget.preloadedMatches!.isNotEmpty) {
      _schemes = widget.preloadedMatches!;
    } else {
      _loadSchemes();
    }
  }

  void _loadSchemes() async {
    setState(() => _isLoading = true);
    final user = widget.userProfile ?? MockDataService.defaultUser;
    final matches = await _apiService.matchSchemes(user);
    setState(() {
      _schemes = matches;
      _isLoading = false;
    });
  }

  void _loadAllSchemes() async {
    setState(() {
      _isLoading = true;
      _showAll = true;
    });
    final all = await _apiService.getSchemes();
    setState(() {
      _schemes = all;
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'Matching Schemes',
              style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
            ),
            Text(
              _showAll ? 'All Central & State Schemes' : 'Based on your information',
              style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.normal),
            ),
          ],
        ),
        centerTitle: true,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator(color: AppTheme.primaryGreen))
          : Column(
              children: [
                // Informational banner
                Container(
                  margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppTheme.lightGreen,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.green.shade200),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.verified_user_rounded, color: AppTheme.primaryGreen, size: 22),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          _showAll
                              ? 'Viewing complete official registry of MSME & Entrepreneur schemes.'
                              : 'AI Rule Engine ranked ${_schemes.length} schemes matching your profile.',
                          style: const TextStyle(
                            fontSize: 12,
                            color: AppTheme.darkGreen,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),

                // List of Scheme Cards
                Expanded(
                  child: ListView.builder(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                    itemCount: _schemes.length,
                    itemBuilder: (context, index) {
                      final scheme = _schemes[index];
                      return _buildSchemeCard(scheme);
                    },
                  ),
                ),

                // Bottom Action: View All Schemes
                if (!_showAll)
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
                    ),
                    child: SafeArea(
                      child: ElevatedButton(
                        onPressed: _loadAllSchemes,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primaryGreen,
                        ),
                        child: const Text('View All Schemes'),
                      ),
                    ),
                  ),
              ],
            ),
    );
  }

  Widget _buildSchemeCard(Scheme scheme) {
    // Dynamic Match Badge Color
    final matchScore = scheme.matchPercentage ?? 80;
    Color badgeBg = const Color(0xFFDCFCE7);
    Color badgeText = const Color(0xFF15803D);

    if (matchScore >= 90) {
      badgeBg = const Color(0xFFDCFCE7);
      badgeText = const Color(0xFF15803D);
    } else if (matchScore >= 80) {
      badgeBg = const Color(0xFFFEF3C7);
      badgeText = const Color(0xFFB45309);
    } else {
      badgeBg = const Color(0xFFE0E7FF);
      badgeText = const Color(0xFF4338CA);
    }

    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => SchemeDetailScreen(scheme: scheme),
            ),
          );
        },
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Scheme Icon Badge
                  Container(
                    width: 46,
                    height: 46,
                    decoration: BoxDecoration(
                      color: AppTheme.lightGreen,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.account_balance, color: AppTheme.primaryGreen, size: 24),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          scheme.schemeName,
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w800,
                            color: AppTheme.darkText,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          scheme.loanAmountFormatted.isNotEmpty
                              ? scheme.loanAmountFormatted
                              : 'Loan up to ₹${scheme.maxGrantLoanAmount}',
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w700,
                            color: Colors.grey.shade800,
                          ),
                        ),
                      ],
                    ),
                  ),
                  // Match % Pill
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: badgeBg,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(
                      scheme.matchBadge ?? '$matchScore% Match',
                      style: TextStyle(
                        color: badgeText,
                        fontSize: 12,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              Divider(height: 1, color: Colors.grey.shade200),
              const SizedBox(height: 10),
              // Tags Row
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    scheme.tags.isNotEmpty ? scheme.tags.join(' • ') : 'Low Interest • Easy Process',
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.grey.shade600,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  const Row(
                    children: [
                      Text(
                        'Details',
                        style: TextStyle(
                          fontSize: 12,
                          color: AppTheme.primaryGreen,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Icon(Icons.chevron_right, size: 18, color: AppTheme.primaryGreen),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
