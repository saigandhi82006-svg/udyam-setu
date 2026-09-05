import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../models/scheme_model.dart';
import '../providers/scheme_provider.dart';
import 'scheme_details_screen.dart';
import 'emi_calculator_screen.dart';

class SchemesFeedScreen extends StatelessWidget {
  const SchemesFeedScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final schemeProvider = Provider.of<SchemeProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Matched Government Schemes'),
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
                  _buildFilterChip(context, 'All', schemeProvider.selectedCategory == 'All'),
                  _buildFilterChip(context, 'Subsidy', schemeProvider.selectedCategory == 'Subsidy'),
                  _buildFilterChip(context, 'Collateral Free', schemeProvider.selectedCategory == 'Collateral Free'),
                  _buildFilterChip(context, 'MUDRA', schemeProvider.selectedCategory == 'MUDRA'),
                  _buildFilterChip(context, 'Manufacturing', schemeProvider.selectedCategory == 'Manufacturing'),
                ],
              ),
            ),
          ),
          const Divider(height: 1, color: AppTheme.borderColor),

          // Schemes List
          Expanded(
            child: schemeProvider.isLoading
                ? const Center(child: CircularProgressIndicator())
                : ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: schemeProvider.filteredSchemes.length,
                    itemBuilder: (context, index) {
                      final scheme = schemeProvider.filteredSchemes[index];
                      return _buildSchemeListItem(context, scheme);
                    },
                  ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterChip(BuildContext context, String label, bool isSelected) {
    final schemeProvider = Provider.of<SchemeProvider>(context, listen: false);
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: FilterChip(
        label: Text(label),
        selected: isSelected,
        selectedColor: AppTheme.emeraldBg,
        checkmarkColor: AppTheme.primaryGreen,
        labelStyle: TextStyle(
          color: isSelected ? AppTheme.primaryDark : AppTheme.textDark,
          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
        ),
        onSelected: (_) => schemeProvider.setCategory(label),
      ),
    );
  }

  Widget _buildSchemeListItem(BuildContext context, SchemeModel scheme) {
    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      child: InkWell(
        onTap: () {
          Provider.of<SchemeProvider>(context, listen: false).setActiveScheme(scheme);
          Navigator.of(context).push(
            MaterialPageRoute(builder: (_) => SchemeDetailsScreen(scheme: scheme)),
          );
        },
        borderRadius: BorderRadius.circular(16),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: AppTheme.emeraldBg,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(
                      '${scheme.matchScore}% Match',
                      style: const TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold, fontSize: 12),
                    ),
                  ),
                  if (scheme.isPreApproved)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.amber.withOpacity(0.18),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Row(
                        children: [
                          Icon(Icons.bolt, color: Colors.amber, size: 14),
                          SizedBox(width: 2),
                          Text('Pre-Approved', style: TextStyle(color: Colors.amber, fontWeight: FontWeight.bold, fontSize: 11)),
                        ],
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                scheme.name,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppTheme.textDark),
              ),
              const SizedBox(height: 6),
              Text(
                scheme.description,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, color: AppTheme.textMuted),
              ),
              const SizedBox(height: 14),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Max Limit', style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                      Text(
                        scheme.maxAmount >= 10000000
                            ? '₹${(scheme.maxAmount / 10000000).toStringAsFixed(1)} Cr'
                            : '₹${(scheme.maxAmount / 100000).toStringAsFixed(0)} Lakhs',
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: AppTheme.primaryDark),
                      ),
                    ],
                  ),
                  if (scheme.interestSubsidy > 0)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Govt Subsidy', style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                        Text('Up to ${scheme.interestSubsidy.toInt()}%', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.green)),
                      ],
                    ),
                  ElevatedButton(
                    onPressed: () {
                      Provider.of<SchemeProvider>(context, listen: false).setActiveScheme(scheme);
                      Navigator.of(context).push(
                        MaterialPageRoute(builder: (_) => SchemeDetailsScreen(scheme: scheme)),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    ),
                    child: const Text('Details ➔', style: TextStyle(fontSize: 13)),
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