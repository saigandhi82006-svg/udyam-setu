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

  // Get matching sector emoji/icon for scheme
  Widget _buildSchemeSectorIcon(Scheme scheme) {
    final String name = scheme.schemeName.toLowerCase();
    final String category = scheme.category.toLowerCase();
    final String tagline = scheme.tagline.toLowerCase();

    String emoji = '💼';
    Color bg = const Color(0xFFF1F5F9);

    if (name.contains('food') || name.contains('pmfme') || category.contains('food') || tagline.contains('food')) {
      emoji = '🍲';
      bg = const Color(0xFFFEF3C7);
    } else if (name.contains('agri') || name.contains('kcc') || name.contains('farm') || category.contains('agri')) {
      emoji = '🌾';
      bg = const Color(0xFFDCFCE7);
    } else if (name.contains('vishwakarma') || name.contains('artisan') || name.contains('craft') || category.contains('artisan')) {
      emoji = '🧵';
      bg = const Color(0xFFF3E8FF);
    } else if (name.contains('mudra') || name.contains('retail') || name.contains('kirana') || category.contains('retail')) {
      emoji = '🛒';
      bg = const Color(0xFFE0F2FE);
    } else if (name.contains('textile') || name.contains('garment') || category.contains('textile')) {
      emoji = '👗';
      bg = const Color(0xFFFCE7F3);
    } else if (name.contains('pmegp') || name.contains('manufacturing') || name.contains('fabrication')) {
      emoji = '🏭';
      bg = const Color(0xFFF1F5F9);
    } else if (name.contains('stand-up') || name.contains('women') || category.contains('women')) {
      emoji = '👩';
      bg = const Color(0xFFFCE7F3);
    } else if (name.contains('divyang') || name.contains('nhfdc') || category.contains('differently')) {
      emoji = '♿';
      bg = const Color(0xFFE0F2FE);
    }

    return Container(
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(
        child: Text(
          emoji,
          style: const TextStyle(fontSize: 14),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 14, color: AppTheme.darkText),
          onPressed: () => Navigator.pop(context),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'Matching Schemes',
              style: TextStyle(fontSize: 13.5, fontWeight: FontWeight.bold, color: AppTheme.darkText),
            ),
            const SizedBox(height: 1),
            Text(
              _showAll ? 'All Central & State Schemes' : 'Based on your information',
              style: const TextStyle(fontSize: 9.5, color: Color(0xFF64748B), fontWeight: FontWeight.normal),
            ),
          ],
        ),
        centerTitle: true,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator(color: AppTheme.primaryGreen))
          : Column(
              children: [
                // Compact Success Message Banner
                Container(
                  width: double.infinity,
                  margin: const EdgeInsets.fromLTRB(14, 10, 14, 4),
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF0FDF4),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFFBBF7D0)),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.stars_rounded, color: Color(0xFFD97706), size: 13.5),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text(
                          _showAll
                              ? 'Showing all ${_schemes.length} official government schemes.'
                              : 'Great! We found ${_schemes.length} schemes that match your profile.',
                          style: const TextStyle(
                            fontSize: 10,
                            color: Color(0xFF15803D),
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
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
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
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      boxShadow: [
                        BoxShadow(
                          color: Color(0x0F000000),
                          blurRadius: 8,
                          offset: Offset(0, -2),
                        ),
                      ],
                    ),
                    child: SafeArea(
                      child: ElevatedButton(
                        onPressed: _loadAllSchemes,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppTheme.primaryGreen,
                          foregroundColor: Colors.white,
                          minimumSize: const Size.fromHeight(42),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(21)),
                          elevation: 1.5,
                        ),
                        child: const Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              'View All Schemes',
                              style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.bold),
                            ),
                            SizedBox(width: 6),
                            Icon(Icons.arrow_forward_rounded, size: 13.5),
                          ],
                        ),
                      ),
                    ),
                  ),
              ],
            ),
    );
  }

  Widget _buildSchemeCard(Scheme scheme) {
    final matchScore = scheme.matchPercentage ?? 80;
    
    // Dynamic Match Pill Styling
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
    // Limit tags to max 3 items
    final List<String> displayTags = scheme.tags.isNotEmpty
        ? scheme.tags.take(3).toList()
        : ['Low Interest', 'Easy Process', 'Collateral-Free'];

    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFF1F5F9)),
        boxShadow: const [
          BoxShadow(
            color: Color(0x06000000),
            blurRadius: 8,
            offset: Offset(0, 3),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) => SchemeDetailScreen(scheme: scheme),
              ),
            );
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Top Row: Sector Icon + Scheme Name + Match Badge
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildSchemeSectorIcon(scheme),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.only(right: 4),
                        child: Text(
                          scheme.schemeName,
                          softWrap: true,
                          style: const TextStyle(
                            fontSize: 12.5,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.darkText,
                            height: 1.25,
                          ),
                        ),
                      ),
                    ),
                    // Match Score Badge Pill with Circle Indicator
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                      decoration: BoxDecoration(
                        color: badgeBg,
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            width: 5,
                            height: 5,
                            decoration: BoxDecoration(
                              color: badgeText,
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 4),
                          Text(
                            scheme.matchBadge ?? '$matchScore% Match',
                            style: TextStyle(
                              color: badgeText,
                              fontSize: 9,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),

                // Tags & View Details Line
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: Text(
                        displayTags.map((t) => '• $t').join(' '),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontSize: 9.5,
                          color: Color(0xFF64748B),
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                    const SizedBox(width: 6),
                    const Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          'View Details',
                          style: TextStyle(
                            fontSize: 10,
                            color: AppTheme.primaryGreen,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(width: 2),
                        Icon(Icons.arrow_forward_rounded, size: 10, color: AppTheme.primaryGreen),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
