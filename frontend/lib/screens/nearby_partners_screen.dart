import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../theme/app_theme.dart';
import '../models/channel_partner.dart';
import '../services/api_service.dart';
import '../services/mock_data_service.dart';

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

  @override
  void initState() {
    super.initState();
    _loadPartners();
  }

  void _loadPartners([String? filter]) async {
    setState(() => _isLoading = true);
    final filterType = filter ?? _selectedFilter;
    final results = await _apiService.getNearbyPartners(
      lat: 17.3850,
      lng: 78.4867,
      type: filterType,
    );
    setState(() {
      _partners = results;
      _isLoading = false;
    });
  }

  void _callPartner(String phone) async {
    final cleanPhone = phone.replaceAll(RegExp(r'[^0-9+]'), '');
    final uri = Uri.parse('tel:$cleanPhone');
    try {
      if (await canLaunchUrl(uri)) {
        await launchUrl(uri);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Dialing $phone...')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Contact: $phone')),
      );
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
        title: const Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text('Nearby Partners', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
            Text('Near Your Location', style: TextStyle(fontSize: 12, color: Colors.grey, fontWeight: FontWeight.normal)),
          ],
        ),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {},
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
                    label: Text(type == 'All' ? 'All Partners' : type),
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

          // Map Area Representation (Matches Screen 9 visual layout)
          Container(
            height: 190,
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFE2E8F0),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: Colors.grey.shade300),
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
                        Text('You are here', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.blueAccent)),
                      ],
                    ),
                  ),

                  // Partner Pin 1 (Bank)
                  Positioned(
                    top: 40,
                    right: 60,
                    child: _buildMapPin(Icons.account_balance, 'Bank', Colors.teal),
                  ),

                  // Partner Pin 2 (KVK)
                  Positioned(
                    bottom: 45,
                    left: 50,
                    child: _buildMapPin(Icons.science, 'KVK Center', Colors.green),
                  ),

                  // Partner Pin 3 (CSC)
                  Positioned(
                    top: 45,
                    left: 90,
                    child: _buildMapPin(Icons.laptop_chromebook, 'CSC Seva', Colors.deepPurple),
                  ),

                  // Floating Map Zoom controls
                  Positioned(
                    right: 12,
                    bottom: 12,
                    child: Column(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(6),
                          decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                          child: const Icon(Icons.add, size: 16),
                        ),
                        const SizedBox(height: 6),
                        Container(
                          padding: const EdgeInsets.all(6),
                          decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                          child: const Icon(Icons.remove, size: 16),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),

          const SizedBox(height: 10),

          // Partners List View
          Expanded(
            child: _isLoading
                ? const Center(child: CircularProgressIndicator(color: AppTheme.primaryGreen))
                : ListView.builder(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                    itemCount: _partners.length,
                    itemBuilder: (context, index) {
                      final partner = _partners[index];
                      return _buildPartnerCard(partner);
                    },
                  ),
          ),

          // Bottom Button: View on Map
          Container(
            padding: const EdgeInsets.all(16),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
            ),
            child: SafeArea(
              child: ElevatedButton(
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Opening Google Maps navigation to nearest partner...'),
                      backgroundColor: AppTheme.primaryGreen,
                    ),
                  );
                },
                child: const Text('View on Map'),
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
          child: Icon(icon, color: Colors.white, size: 14),
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
    }

    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Row(
          children: [
            // Type Icon
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: iconColor.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(iconData, color: iconColor, size: 22),
            ),
            const SizedBox(width: 14),
            // Partner Info
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    partner.partnerName,
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: AppTheme.darkText),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    '${partner.distanceKm} km away',
                    style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.w600),
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
            // Call Button (phone in green circle)
            GestureDetector(
              onTap: () => _callPartner(partner.contactPhone),
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: AppTheme.lightGreen,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.green.shade200),
                ),
                child: const Icon(Icons.call, color: AppTheme.primaryGreen, size: 18),
              ),
            ),
          ],
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
