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
  bool _isSubmitting = false;

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

  void _submitApplication() async {
    setState(() => _isSubmitting = true);
    await Future.delayed(const Duration(milliseconds: 700));
    setState(() => _isSubmitting = false);

    if (mounted) {
      showDialog(
        context: context,
        builder: (_) => AlertDialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(16),
                decoration: const BoxDecoration(
                  color: AppTheme.lightGreen,
                  shape: BoxShape.circle,
                ),
                child: const Icon(Icons.check_circle, color: AppTheme.primaryGreen, size: 48),
              ),
              const SizedBox(height: 16),
              const Text(
                'Application Submitted!',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                'Your application for ${widget.scheme.schemeName} has been generated with Tracking ID #UDS-847291.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13, color: Colors.grey.shade600),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (_) => const MyApplicationsScreen()),
                  );
                },
                child: const Text('Track Application'),
              ),
            ],
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final uploadedCount = _documents.where((d) => d.status == 'Uploaded').length;
    final totalCount = _documents.length;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'Required Documents',
              style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
            ),
            Text(
              widget.scheme.schemeName,
              style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.normal),
            ),
          ],
        ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          // Completion Status Bar
          Container(
            padding: const EdgeInsets.all(16),
            margin: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: const Color(0xFFF8FAFC),
              borderRadius: BorderRadius.circular(16),
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
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: AppTheme.darkText),
                      ),
                      const SizedBox(height: 6),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: uploadedCount / totalCount,
                          backgroundColor: Colors.grey.shade200,
                          valueColor: const AlwaysStoppedAnimation<Color>(AppTheme.primaryGreen),
                          minHeight: 6,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 16),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  decoration: BoxDecoration(
                    color: AppTheme.lightGreen,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Text(
                    '${((uploadedCount / totalCount) * 100).round()}% Ready',
                    style: const TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold, fontSize: 12),
                  ),
                ),
              ],
            ),
          ),

          // Document Checklist Items (Screen 10)
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: _documents.length,
              itemBuilder: (context, index) {
                final doc = _documents[index];
                final isUploaded = doc.status == 'Uploaded';

                return Container(
                  margin: const EdgeInsets.only(bottom: 12),
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: Colors.grey.shade200),
                  ),
                  child: Row(
                    children: [
                      // Document Icon
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const Icon(Icons.description_outlined, color: AppTheme.darkText, size: 22),
                      ),
                      const SizedBox(width: 14),
                      // Document Name & Status
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              doc.docName,
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: AppTheme.darkText),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              isUploaded ? 'Uploaded (1.2 MB)' : 'Pending upload',
                              style: TextStyle(
                                fontSize: 11,
                                color: isUploaded ? AppTheme.primaryGreen : AppTheme.pendingOrange,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ],
                        ),
                      ),
                      // Status Circle Indicator / Upload Action
                      GestureDetector(
                        onTap: () => _pickAndUploadDocument(doc),
                        child: Container(
                          padding: const EdgeInsets.all(6),
                          decoration: BoxDecoration(
                            color: isUploaded ? const Color(0xFFDCFCE7) : const Color(0xFFFEF3C7),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            isUploaded ? Icons.check : Icons.hourglass_top_rounded,
                            color: isUploaded ? const Color(0xFF15803D) : const Color(0xFFD97706),
                            size: 18,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),

          // Bottom Button: Upload Document / Submit Application & Find Nearby Partner
          Container(
            padding: const EdgeInsets.all(16),
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
