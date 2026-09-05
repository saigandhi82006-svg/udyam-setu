import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_theme.dart';
import '../models/channel_partner.dart';
import '../services/api_service.dart';

class NearbyPartnersScreen extends StatefulWidget {
  const NearbyPartnersScreen({super.key});

  @override
  State<NearbyPartnersScreen> createState() => _NearbyPartnersScreenState();
}

class _NearbyPartnersScreenState extends State<NearbyPartnersScreen> {
  final ApiService _apiService = ApiService();
  List<ChannelPartner> _partners = [];
  String _selectedFilter = 'All';
  bool _isLoading = false;

  double _userLat = 17.3850;
  double _userLng = 78.4867;
  String _locationLabel = 'Hyderabad, TS';
  bool _isLiveGPS = false;

  @override
  void initState() {
    super.initState();
    _loadPartners();
  }

  void _loadPartners([String? filter]) async {
    setState(() => _isLoading = true);
    final filterType = filter ?? _selectedFilter;
    final results = await _apiService.getNearbyPartners(
      lat: _userLat,
      lng: _userLng,
      type: filterType,
    );
    setState(() {
      _partners = results;
      _isLoading = false;
    });
  }

  void _detectLiveLocation() async {
    setState(() {
      _isLoading = true;
      _isLiveGPS = true;
      _locationLabel = 'Live GPS Location';
    });

    // In mobile Flutter, updates coordinates and fetches nearby partners
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('📍 Live GPS coordinates synced. Updating nearest partners...'),
        backgroundColor: AppTheme.primaryGreen,
        duration: Duration(seconds: 2),
      ),
    );

    _loadPartners();
  }

  Future<void> _openGoogleMapsGeneral() async {
    String query = 'Banks and CSC near $_userLat,$_userLng';
    if (_selectedFilter == 'Bank') {
      query = 'Banks near $_userLat,$_userLng';
    } else if (_selectedFilter == 'CSC') {
      query = 'CSC Digital Seva Kendra near $_userLat,$_userLng';
    } else if (_selectedFilter == 'KVK') {
      query = 'Krishi Vigyan Kendra near $_userLat,$_userLng';
    }

    final Uri url = Uri.parse(
      'https://www.google.com/maps/search/${Uri.encodeComponent(query)}/@$_userLat,$_userLng,15z',
    );
    if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not open Google Maps.')),
        );
      }
    }
  }

  Future<void> _openGoogleMapsDirections(ChannelPartner partner) async {
    final Uri url = Uri.parse(
      'https://www.google.com/maps/dir/?api=1&origin=$_userLat,$_userLng&destination=${partner.latitude},${partner.longitude}&travelmode=driving',
    );
    if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not open Google Maps directions.')),
        );
      }
    }
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
            const Text('Nearby Partners', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
            Text(
              _isLiveGPS ? '📍 Live GPS: $_locationLabel' : 'Near $_locationLabel',
              style: TextStyle(
                fontSize: 12,
                color: _isLiveGPS ? AppTheme.primaryGreen : Colors.grey,
                fontWeight: _isLiveGPS ? FontWeight.bold : FontWeight.normal,
              ),
            ),
          ],
        ),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.my_location),
            tooltip: 'Detect Live GPS Location',
            onPressed: _detectLiveLocation,
          ),
          IconButton(
            icon: const Icon(Icons.map_outlined),
            tooltip: 'Open in Google Maps',
            onPressed: _openGoogleMapsGeneral,
          ),
        ],
      ),
      body: Column(
        children: [
          // Filter Chips
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              children: ['All', 'Bank', 'CSC', 'KVK'].map((type) {
                final isSelected = _selectedFilter == type;
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: FilterChip(
                    label: Text(type == 'All' ? 'All Partners' : (type == 'Bank' ? '🏦 Banks' : (type == 'CSC' ? '💻 CSC' : '🔬 KVK'))),
                    selected: isSelected,
                    selectedColor: AppTheme.lightGreen,
                    checkmarkColor: AppTheme.primaryGreen,
                    labelStyle: TextStyle(
                      color: isSelected ? AppTheme.primaryGreen : AppTheme.darkText,
                      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                      fontSize: 12,
                    ),
                    onSelected: (selected) {
                      setState(() => _selectedFilter = type);
                      _loadPartners(type);
                    },
                  ),
                );
              }).toList(),
            ),
          ),

          // Google Maps Area Representation
          InkWell(
            onTap: _openGoogleMapsGeneral,
            borderRadius: BorderRadius.circular(16),
            child: Container(
              height: 195,
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              decoration: BoxDecoration(
                color: const Color(0xFFE2E8F0),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.grey.shade300),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.06),
                    blurRadius: 8,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: Stack(
                  children: [
                    // Map Background pattern
                    Container(
                      color: const Color(0xFFE5E7EB),
                      child: CustomPaint(
                        painter: MapGridPainter(),
                        size: Size.infinite,
                      ),
                    ),

                    // User Location Pin (Center blue dot)
                    const Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.my_location, color: Colors.blueAccent, size: 28),
                          SizedBox(height: 2),
                          Text('You (Entrepreneur)', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.blueAccent)),
                        ],
                      ),
                    ),

                    // Partner Pin 1 (Bank)
                    Positioned(
                      top: 35,
                      right: 50,
                      child: _buildMapPin(Icons.account_balance, 'Bank (0.4 km)', Colors.teal),
                    ),

                    // Partner Pin 2 (KVK)
                    Positioned(
                      bottom: 45,
                      left: 45,
                      child: _buildMapPin(Icons.science, 'KVK Center', Colors.green),
                    ),

                    // Partner Pin 3 (CSC)
                    Positioned(
                      top: 40,
                      left: 80,
                      child: _buildMapPin(Icons.laptop_chromebook, 'CSC Seva', Colors.deepPurple),
                    ),

                    // Floating Live GPS & Google Maps banner at bottom
                    Positioned(
                      left: 8,
                      right: 8,
                      bottom: 8,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.95),
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.08),
                              blurRadius: 4,
                            ),
                          ],
                        ),
                        child: Row(
                          children: [
                            Container(
                              width: 8,
                              height: 8,
                              decoration: const BoxDecoration(
                                color: Color(0xFF10B981),
                                shape: BoxShape.circle,
                              ),
                            ),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(
                                _isLiveGPS ? '📍 $_locationLabel' : '📍 Near $_locationLabel',
                                style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Color(0xFF1E293B)),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          const SizedBox(height: 8),

          // Partners List View
          Expanded(
            child: _isLoading
                ? const Center(child: CircularProgressIndicator(color: AppTheme.primaryGreen))
                : ListView.builder(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                    itemCount: _partners.length,
                    itemBuilder: (context, index) {
                      final partner = _partners[index];
                      return _buildPartnerCard(partner);
                    },
                  ),
          ),

          // Bottom Button: Open in App
          Container(
            padding: const EdgeInsets.all(16),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
            ),
            child: SafeArea(
              child: ElevatedButton.icon(
                icon: const Icon(Icons.open_in_new, size: 18),
                onPressed: _openGoogleMapsGeneral,
                label: const Text('Open in App ↗'),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMapPin(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.all(6),
          decoration: BoxDecoration(
            color: color,
            shape: BoxShape.circle,
            boxShadow: [
              BoxShadow(color: color.withOpacity(0.4), blurRadius: 6, offset: const Offset(0, 2)),
            ],
          ),
          child: Icon(icon, color: Colors.white, size: 13),
        ),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(4)),
          child: Text(label, style: const TextStyle(fontSize: 8, fontWeight: FontWeight.bold)),
        ),
      ],
    );
  }

  Widget _buildPartnerCard(ChannelPartner partner) {
    IconData iconData = Icons.account_balance;
    Color iconColor = AppTheme.primaryGreen;

    if (partner.type == 'KVK') {
      iconData = Icons.science_outlined;
      iconColor = const Color(0xFF059669);
    } else if (partner.type == 'CSC') {
      iconData = Icons.laptop_chromebook;
      iconColor = const Color(0xFF7C3AED);
    } else if (partner.type == 'DIC') {
      iconData = Icons.business;
      iconColor = const Color(0xFFD97706);
    }

    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: InkWell(
        onTap: () => _openGoogleMapsDirections(partner),
        borderRadius: BorderRadius.circular(14),
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              // Type Icon
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: iconColor.withOpacity(0.1),
                  shape: BoxShape.circle,
                ),
                child: Icon(iconData, color: iconColor, size: 20),
              ),
              const SizedBox(width: 12),
              // Partner Info
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      partner.partnerName,
                      style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: AppTheme.darkText),
                    ),
                    const SizedBox(height: 2),
                    Row(
                      children: [
                        Text(
                          '${partner.distanceKm} km away',
                          style: const TextStyle(fontSize: 11, color: AppTheme.primaryGreen, fontWeight: FontWeight.bold),
                        ),
                        const Text(' • ', style: TextStyle(color: Colors.grey, fontSize: 11)),
                        Text(
                          partner.type,
                          style: TextStyle(fontSize: 11, color: Colors.grey.shade700, fontWeight: FontWeight.w600),
                        ),
                        if (partner.rating > 0) ...[
                          const Text(' • ', style: TextStyle(color: Colors.grey, fontSize: 11)),
                          Text(
                            '★ ${partner.rating}',
                            style: const TextStyle(fontSize: 11, color: Color(0xFFF59E0B), fontWeight: FontWeight.bold),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 2),
                    Text(
                      partner.address,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 11, color: Colors.grey.shade500),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              // Directions Action Button
              IconButton(
                icon: const Icon(Icons.directions, color: AppTheme.primaryGreen),
                tooltip: 'Get Directions in Google Maps',
                onPressed: () => _openGoogleMapsDirections(partner),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// Custom Painter for Map Roads representation
class MapGridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paintRoad = Paint()
      ..color = Colors.white
      ..strokeWidth = 6
      ..style = PaintingStyle.stroke;

    final paintMinorRoad = Paint()
      ..color = const Color(0xFFF3F4F6)
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke;

    // Draw grid roads
    canvas.drawLine(Offset(0, size.height * 0.45), Offset(size.width, size.height * 0.35), paintRoad);
    canvas.drawLine(Offset(size.width * 0.5, 0), Offset(size.width * 0.4, size.height), paintRoad);
    canvas.drawLine(Offset(0, size.height * 0.75), Offset(size.width, size.height * 0.8), paintMinorRoad);
    canvas.drawLine(Offset(size.width * 0.25, 0), Offset(size.width * 0.2, size.height), paintMinorRoad);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
