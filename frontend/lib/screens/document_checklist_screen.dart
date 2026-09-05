import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/scheme.dart';
import 'my_applications_screen.dart';
import 'nearby_partners_screen.dart';

class DocumentChecklistScreen extends StatefulWidget {
  final Scheme scheme;

  const DocumentChecklistScreen({super.key, required this.scheme});

  @override
  State<DocumentChecklistScreen> createState() => _DocumentChecklistScreenState();
}

class _DocumentChecklistScreenState extends State<DocumentChecklistScreen> {
  late List<SchemeDocument> _documents;

  @override
  void initState() {
    super.initState();
    // Default 5 documents matching Screen 10 mockup
    _documents = [
      SchemeDocument(docName: 'Aadhaar Card', description: 'National Identity Proof', status: 'Uploaded'),
      SchemeDocument(docName: 'PAN Card', description: 'Tax Identification Proof', status: 'Uploaded'),
      SchemeDocument(docName: 'Business Plan', description: 'Revenue & Machine Quotations', status: 'Pending'),
      SchemeDocument(docName: 'Bank Statement', description: 'Past 6 months passbook records', status: 'Pending'),
      SchemeDocument(docName: 'Address Proof', description: 'Electricity bill / Ration card', status: 'Uploaded'),
    ];

    // If scheme has specific documents, merge them
    if (widget.scheme.requiredDocuments.isNotEmpty) {
      for (final doc in widget.scheme.requiredDocuments) {
        if (!_documents.any((d) => d.docName.toLowerCase() == doc.docName.toLowerCase())) {
          _documents.add(doc);
        }
      }
    }
  }

  void _pickAndUploadDocument(SchemeDocument doc) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) {
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Upload ${doc.docName}',
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 6),
                Text(
                  'Select document format (PDF, JPG, PNG up to 5MB)',
                  style: TextStyle(fontSize: 12, color: Colors.grey.shade600),
                ),
                const SizedBox(height: 24),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    _buildUploadOption(Icons.camera_alt_rounded, 'Take Photo', () {
                      Navigator.pop(context);
                      _simulateUploadSuccess(doc);
                    }),
                    _buildUploadOption(Icons.photo_library_rounded, 'Gallery', () {
                      Navigator.pop(context);
                      _simulateUploadSuccess(doc);
                    }),
                    _buildUploadOption(Icons.picture_as_pdf_rounded, 'Browse PDF', () {
                      Navigator.pop(context);
                      _simulateUploadSuccess(doc);
                    }),
                  ],
                ),
                const SizedBox(height: 12),
              ],
            ),
          ),
        );
      },
    );
  }

  void _simulateUploadSuccess(SchemeDocument doc) {
    setState(() {
      doc.status = 'Uploaded';
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('${doc.docName} uploaded and verified successfully!'),
        backgroundColor: AppTheme.primaryGreen,
      ),
    );
  }

  Widget _buildUploadOption(IconData icon, String title, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(14),
      child: Container(
        width: 90,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: const Color(0xFFF1F5F9),
          borderRadius: BorderRadius.circular(14),
        ),
        child: Column(
          children: [
            Icon(icon, color: AppTheme.primaryGreen, size: 30),
            const SizedBox(height: 8),
            Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final uploadedCount = _documents.where((d) => d.status == 'Uploaded').length;
    final totalCount = _documents.length;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 16),
          onPressed: () => Navigator.pop(context),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'Required Documents',
              style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.bold),
            ),
            Text(
              widget.scheme.schemeName,
              style: TextStyle(fontSize: 10.5, color: Colors.grey.shade600, fontWeight: FontWeight.normal),
            ),
          ],
        ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          // Completion Status Bar
          Container(
            padding: const EdgeInsets.all(14),
            margin: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFF8FAFC),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFE2E8F0)),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        '$uploadedCount of $totalCount Documents Uploaded',
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 11.5, color: AppTheme.darkText),
                      ),
                      const SizedBox(height: 6),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: uploadedCount / totalCount,
                          backgroundColor: Colors.grey.shade200,
                          valueColor: const AlwaysStoppedAnimation<Color>(AppTheme.primaryGreen),
                          minHeight: 5,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 14),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 5),
                  decoration: BoxDecoration(
                    color: AppTheme.lightGreen,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text(
                    '${((uploadedCount / totalCount) * 100).round()}% Ready',
                    style: const TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold, fontSize: 10.5),
                  ),
                ),
              ],
            ),
          ),

          // Document Checklist Items + Nearby Partners Option (Screen 10)
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              itemCount: _documents.length + 1,
              itemBuilder: (context, index) {
                if (index < _documents.length) {
                  final doc = _documents[index];
                  final isUploaded = doc.status == 'Uploaded';

                  return Container(
                    margin: const EdgeInsets.only(bottom: 10),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.grey.shade200),
                    ),
                    child: Row(
                      children: [
                        // Document Icon
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: Colors.grey.shade100,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: const Icon(Icons.description_outlined, color: AppTheme.darkText, size: 18),
                        ),
                        const SizedBox(width: 12),
                        // Document Name & Status
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                doc.docName,
                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12.5, color: AppTheme.darkText),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                isUploaded ? 'Uploaded (1.2 MB)' : 'Pending upload',
                                style: TextStyle(
                                  fontSize: 10,
                                  color: isUploaded ? AppTheme.primaryGreen : AppTheme.pendingOrange,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ],
                          ),
                        ),
                        // Dedicated Upload / Re-upload Button for each document
                        if (isUploaded) ...[
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                            decoration: BoxDecoration(
                              color: const Color(0xFFDCFCE7),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: const Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.check, size: 12, color: Color(0xFF15803D)),
                                SizedBox(width: 2),
                                Text(
                                  'Ready',
                                  style: TextStyle(color: Color(0xFF15803D), fontSize: 9.5, fontWeight: FontWeight.bold),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(width: 6),
                          OutlinedButton.icon(
                            style: OutlinedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              minimumSize: Size.zero,
                              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                              side: BorderSide(color: Colors.grey.shade300),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                            ),
                            onPressed: () => _pickAndUploadDocument(doc),
                            icon: const Icon(Icons.sync_rounded, size: 13, color: Color(0xFF475569)),
                            label: const Text(
                              'Re-upload',
                              style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w600, color: Color(0xFF475569)),
                            ),
                          ),
                        ] else ...[
                          ElevatedButton.icon(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppTheme.primaryGreen,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                              minimumSize: Size.zero,
                              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                              elevation: 0,
                            ),
                            onPressed: () => _pickAndUploadDocument(doc),
                            icon: const Icon(Icons.upload_file_rounded, size: 14),
                            label: const Text(
                              'Upload',
                              style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ],
                    ),
                  );
                }

                // In-list option card: Nearby Partners
                return GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (_) => const NearbyPartnersScreen()),
                    );
                  },
                  child: Container(
                    margin: const EdgeInsets.only(top: 4, bottom: 14),
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
                          decoration: BoxDecoration(
                            color: AppTheme.lightGreen,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: const Icon(Icons.location_on_rounded, color: AppTheme.primaryGreen, size: 18),
                        ),
                        const SizedBox(width: 12),
                        const Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Nearby Partners',
                                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12.5, color: AppTheme.darkText),
                              ),
                              SizedBox(height: 2),
                              Text(
                                'Find CSC centers & bank branches near you',
                                style: TextStyle(fontSize: 10, color: Color(0xFF64748B)),
                              ),
                            ],
                          ),
                        ),
                        const Icon(Icons.arrow_forward_ios_rounded, size: 13, color: Color(0xFF94A3B8)),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),

          // Bottom Button: Upload Document / Submit Application & Find Nearby Partner
          Container(
            padding: const EdgeInsets.all(14),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
            ),
            child: SafeArea(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  ElevatedButton(
                    onPressed: _isSubmitting ? null : _submitApplication,
                    child: _isSubmitting
                        ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                        : const Text('Submit Application to Bank'),
                  ),
                  const SizedBox(height: 8),
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton.icon(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (_) => const NearbyPartnersScreen()),
                        );
                      },
                      icon: const Icon(Icons.location_on_outlined, size: 18),
                      label: const Text('Find Nearby Partner'),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
