import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/scheme.dart';
import '../services/mock_data_service.dart';
import 'scheme_detail_screen.dart';

class SavedSchemesScreen extends StatelessWidget {
  const SavedSchemesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final saved = [MockDataService.mockSchemes[0]];

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('Saved Schemes', style: TextStyle(fontWeight: FontWeight.bold)),
        elevation: 0,
      ),
      body: saved.isEmpty
          ? const Center(
              child: Text('No saved schemes yet. Bookmark schemes to view them offline.'),
            )
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: saved.length,
              itemBuilder: (context, index) {
                final scheme = saved[index];
                return Card(
                  margin: const EdgeInsets.only(bottom: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  child: ListTile(
                    contentPadding: const EdgeInsets.all(16),
                    leading: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(color: AppTheme.lightGreen, borderRadius: BorderRadius.circular(12)),
                      child: const Icon(Icons.bookmark, color: AppTheme.primaryGreen),
                    ),
                    title: Text(scheme.schemeName, style: const TextStyle(fontWeight: FontWeight.bold)),
                    subtitle: Text(scheme.loanAmountFormatted),
                    trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => SchemeDetailScreen(scheme: scheme)),
                      );
                    },
                  ),
                );
              },
            ),
    );
  }
}
