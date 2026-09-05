import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../models/partner_model.dart';
import '../providers/partner_provider.dart';

class NearbyPartnersScreen extends StatefulWidget {
  const NearbyPartnersScreen({super.key});

  @override
  State<NearbyPartnersScreen> createState() => _NearbyPartnersScreenState();
}

class _NearbyPartnersScreenState extends State<NearbyPartnersScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<PartnerProvider>(context, listen: false).loadPartners();
    });
  }

  @override
  Widget build(BuildContext context) {
    final partnerProvider = Provider.of<PartnerProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Nearby Banks & Facilitation Centers'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh_rounded),
            onPressed: () => partnerProvider.loadPartners(),
          ),
        ],
      ),
      body: Column(
        children: [
          // Filter Chips
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            color: Colors.white,
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  _buildTypeChip('all', 'All Partners', partnerProvider),
                  _buildTypeChip('bank', 'Nodal Banks', partnerProvider),
                  _buildTypeChip('csc', 'CSC / e-Seva', partnerProvider),
                  _buildTypeChip('dic', 'DIC Offices', partnerProvider),
                ],
              ),
            ),
          ),
          const Divider(height: 1, color: AppTheme.borderColor),

          // Partner List
          Expanded(
            child: partnerProvider.isLoading
                ? const Center(child: CircularProgressIndicator())
                : partnerProvider.filteredPartners.isEmpty
                    ? const Center(child: Text('No facilitation partners found in this radius.'))
                    : ListView.builder(
                        padding: const EdgeInsets.all(16),
                        itemCount: partnerProvider.filteredPartners.length,
                        itemBuilder: (context, index) {
                          final partner = partnerProvider.filteredPartners[index];
                          return _buildPartnerCard(context, partner, partnerProvider);
                        },
                      ),
          ),
        ],
      ),
    );
  }

  Widget _buildTypeChip(String type, String label, PartnerProvider provider) {
    final isSelected = provider.selectedFilter == type;
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: ChoiceChip(
        label: Text(label),
        selected: isSelected,
        selectedColor: AppTheme.emeraldBg,
        labelStyle: TextStyle(
          color: isSelected ? AppTheme.primaryDark : AppTheme.textDark,
          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
        ),
        onSelected: (_) => provider.setFilter(type),
      ),
    );
  }

  Widget _buildPartnerCard(BuildContext context, PartnerModel partner, PartnerProvider provider) {
    IconData iconData = Icons.account_balance_rounded;
    Color iconColor = AppTheme.primaryGreen;

    if (partner.type == 'csc') {
      iconData = Icons.laptop_chromebook_rounded;
      iconColor = Colors.orange;
    } else if (partner.type == 'dic') {
      iconData = Icons.business_center_rounded;
      iconColor = Colors.indigo;
    }

    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                CircleAvatar(
                  backgroundColor: iconColor.withOpacity(0.12),
                  child: Icon(iconData, color: iconColor, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        partner.name,
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15, color: AppTheme.textDark),
                      ),
                      const SizedBox(height: 2),
                      Row(
                        children: [
                          const Icon(Icons.near_me_rounded, size: 13, color: AppTheme.primaryGreen),
                          const SizedBox(width: 4),
                          Text('${partner.distanceKm} km away', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppTheme.primaryGreen)),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(partner.address, style: const TextStyle(fontSize: 13, color: AppTheme.textMuted)),
            const SizedBox(height: 10),
            Wrap(
              spacing: 6,
              runSpacing: 4,
              children: partner.servicesOffered
                  .take(3)
                  .map((s) => Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: AppTheme.bgLight,
                          borderRadius: BorderRadius.circular(6),
                          border: Border.all(color: AppTheme.borderColor),
                        ),
                        child: Text(s, style: const TextStyle(fontSize: 11, color: AppTheme.textDark)),
                      ))
                  .toList(),
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    icon: const Icon(Icons.phone_rounded, size: 16),
                    label: const Text('Call Desk'),
                    onPressed: () {},
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: ElevatedButton.icon(
                    icon: const Icon(Icons.navigation_rounded, size: 16),
                    label: const Text('Get Route'),
                    onPressed: () => provider.openMapRoute(partner),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}