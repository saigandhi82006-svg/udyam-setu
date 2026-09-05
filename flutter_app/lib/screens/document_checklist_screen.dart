import 'package:flutter/material.dart';
import 'package:file_picker/file_picker.dart';
import '../config/theme.dart';
import '../models/scheme_model.dart';

class DocumentChecklistScreen extends StatefulWidget {
  final SchemeModel scheme;
  const DocumentChecklistScreen({super.key, required this.scheme});

  @override
  State<DocumentChecklistScreen> createState() => _DocumentChecklistScreenState();
}

class _DocumentChecklistScreenState extends State<DocumentChecklistScreen> {
  final Map<String, bool> _uploadedStatus = {};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Document Readiness Checklist'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: AppTheme.emeraldBg,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: AppTheme.emeraldLight),
              ),
              child: Row(
                children: [
                  const Icon(Icons.info_outline_rounded, color: AppTheme.primaryDark),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      'Prepare these verified documents for ${widget.scheme.name} to expedite loan sanctioning.',
                      style: const TextStyle(fontSize: 13, color: AppTheme.primaryDark),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),

            ...widget.scheme.documentsRequired.map((doc) {
              final isUploaded = _uploadedStatus[doc] == true;

              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: Padding(
                  padding: const EdgeInsets.all(14.0),
                  child: Row(
                    children: [
                      Icon(
                        isUploaded ? Icons.check_circle_rounded : Icons.radio_button_unchecked_rounded,
                        color: isUploaded ? AppTheme.primaryGreen : AppTheme.textMuted,
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(doc, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
                            Text(isUploaded ? 'Document Attached' : 'Pending upload / Verification', style: TextStyle(fontSize: 11, color: isUploaded ? AppTheme.primaryGreen : AppTheme.textMuted)),
                          ],
                        ),
                      ),
                      IconButton(
                        icon: const Icon(Icons.upload_file_rounded, color: AppTheme.primaryGreen),
                        onPressed: () async {
                          final result = await FilePicker.platform.pickFiles();
                          if (result != null) {
                            setState(() {
                              _uploadedStatus[doc] = true;
                            });
                            if (context.mounted) {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(content: Text('$doc uploaded successfully!')),
                              );
                            }
                          }
                        },
                      ),
                    ],
                  ),
                ),
              );
            }),
            const SizedBox(height: 24),

            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                icon: const Icon(Icons.print_rounded),
                label: const Text('Export Official Checklist PDF'),
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Generating official PDF checklist...')),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}