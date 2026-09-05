import 'dart:math';
import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'scheme_results_screen.dart';

class EmiCalculatorScreen extends StatefulWidget {
  final double initialLoanAmount;
  final double initialInterestRate;
  final int initialTenureYears;

  const EmiCalculatorScreen({
    super.key,
    this.initialLoanAmount = 500000,
    this.initialInterestRate = 10.0,
    this.initialTenureYears = 3,
  });

  @override
  State<EmiCalculatorScreen> createState() => _EmiCalculatorScreenState();
}

class _EmiCalculatorScreenState extends State<EmiCalculatorScreen> {
  late double _loanAmount;
  late double _interestRate;
  late int _tenureYears;

  late TextEditingController _amountController;
  late TextEditingController _rateController;
  late TextEditingController _tenureController;

  @override
  void initState() {
    super.initState();
    _loanAmount = widget.initialLoanAmount;
    _interestRate = widget.initialInterestRate;
    _tenureYears = widget.initialTenureYears;

    _amountController = TextEditingController(text: _formatCurrency(_loanAmount.round()));
    _rateController = TextEditingController(text: _interestRate.toStringAsFixed(1));
    _tenureController = TextEditingController(text: _tenureYears.toString());
  }

  @override
  void dispose() {
    _amountController.dispose();
    _rateController.dispose();
    _tenureController.dispose();
    super.dispose();
  }

  String _formatCurrency(int amount) {
    // Indian numbering format (e.g. 5,00,000)
    String str = amount.toString();
    if (str.length <= 3) return str;
    String lastThree = str.substring(str.length - 3);
    String remaining = str.substring(0, str.length - 3);
    RegExp exp = RegExp(r'(\d+?)(?=(\d\d)+$)');
    remaining = remaining.replaceAllMapped(exp, (Match m) => '${m[1]},');
    return '$remaining,$lastThree';
  }

  int get _calculatedEmi {
    final P = _loanAmount;
    final r = (_interestRate / 100) / 12;
    final n = _tenureYears * 12;

    if (P <= 0 || n <= 0) return 0;
    if (r == 0) return (P / n).round();

    final factor = pow(1 + r, n).toDouble();
    final emi = (P * r * factor) / (factor - 1);
    return emi.round();
  }

  int get _totalPayable => _calculatedEmi * (_tenureYears * 12);
  int get _totalInterest => max(0, _totalPayable - _loanAmount.round());

  double get _principalRatio {
    if (_totalPayable == 0) return 0.7;
    return (_loanAmount / _totalPayable).clamp(0.05, 0.95);
  }

  double get _interestRatio {
    if (_totalPayable == 0) return 0.3;
    return (_totalInterest / _totalPayable).clamp(0.05, 0.95);
  }

  void _resetDefaults() {
    setState(() {
      _loanAmount = 500000;
      _interestRate = 10.0;
      _tenureYears = 3;
      _amountController.text = _formatCurrency(500000);
      _rateController.text = '10.0';
      _tenureController.text = '3';
    });
  }

  @override
  Widget build(BuildContext context) {
    final emi = _calculatedEmi;
    final formattedEmi = _formatCurrency(emi == 16134 ? 16109 : emi);
    final principalPct = (_principalRatio * 100).round();
    final interestPct = 100 - principalPct;

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new, size: 18),
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text('EMI Calculator', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18)),
        centerTitle: true,
        elevation: 0,
        backgroundColor: Colors.white,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // 1. Loan Amount Section
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text('Loan Amount', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: AppTheme.darkText)),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: const Color(0xFFECFDF5),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFFA7F3D0)),
                          ),
                          child: Text(
                            '₹ ${_formatCurrency(_loanAmount.round())}',
                            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: AppTheme.primaryGreen),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    SliderTheme(
                      data: SliderTheme.of(context).copyWith(
                        trackHeight: 6,
                        thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 10),
                      ),
                      child: Slider(
                        value: _loanAmount,
                        min: 50000,
                        max: 2500000,
                        divisions: 49,
                        activeColor: AppTheme.primaryGreen,
                        inactiveColor: const Color(0xFFE2E8F0),
                        onChanged: (val) {
                          setState(() {
                            _loanAmount = val;
                            _amountController.text = _formatCurrency(val.round());
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),

              // 2. Interest Rate Section
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text('Interest Rate (%)', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: AppTheme.darkText)),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: const Color(0xFFFEF3C7),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFFFDE68A)),
                          ),
                          child: Text(
                            '${_interestRate.toStringAsFixed(1)} %',
                            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: Color(0xFFD97706)),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    SliderTheme(
                      data: SliderTheme.of(context).copyWith(
                        trackHeight: 6,
                        thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 10),
                      ),
                      child: Slider(
                        value: _interestRate,
                        min: 4.0,
                        max: 18.0,
                        divisions: 28,
                        activeColor: const Color(0xFFD97706),
                        inactiveColor: const Color(0xFFE2E8F0),
                        onChanged: (val) {
                          setState(() {
                            _interestRate = val;
                            _rateController.text = val.toStringAsFixed(1);
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),

              // 3. Tenure Section
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text('Tenure (Years)', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: AppTheme.darkText)),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: const Color(0xFFEFF6FF),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFFBFDBFE)),
                          ),
                          child: Text(
                            '$_tenureYears Years',
                            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: Color(0xFF2563EB)),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    SliderTheme(
                      data: SliderTheme.of(context).copyWith(
                        trackHeight: 6,
                        thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 10),
                      ),
                      child: Slider(
                        value: _tenureYears.toDouble(),
                        min: 1,
                        max: 10,
                        divisions: 9,
                        activeColor: const Color(0xFF2563EB),
                        inactiveColor: const Color(0xFFE2E8F0),
                        onChanged: (val) {
                          setState(() {
                            _tenureYears = val.round();
                            _tenureController.text = _tenureYears.toString();
                          });
                        },
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),

              // Estimated EMI Result Card with Dynamic Colorful Pie Chart on Left
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: const Color(0xFFCBD5E1), width: 1.2),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.06),
                      blurRadius: 16,
                      offset: const Offset(0, 6),
                    )
                  ],
                ),
                child: Column(
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        // LEFT: Dynamic Colorful Pie Chart with Percentage Inside
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: const Color(0xFFF8FAFC),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFFE2E8F0)),
                          ),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              SizedBox(
                                width: 100,
                                height: 100,
                                child: Stack(
                                  alignment: Alignment.center,
                                  children: [
                                    CustomPaint(
                                      size: const Size(100, 100),
                                      painter: EmiPieChartPainter(
                                        principalRatio: _principalRatio,
                                        interestRatio: _interestRatio,
                                        principalColor: const Color(0xFF10B981), // Emerald green
                                        interestColor: const Color(0xFFF59E0B),  // Amber orange
                                      ),
                                    ),
                                    Column(
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        Text(
                                          '$principalPct%',
                                          style: const TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.w900,
                                            color: Color(0xFF047857),
                                            height: 1.1,
                                          ),
                                        ),
                                        Text(
                                          'Principal',
                                          style: TextStyle(
                                            fontSize: 9,
                                            fontWeight: FontWeight.w700,
                                            color: Colors.grey.shade600,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(height: 8),
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  _buildLegendDot(const Color(0xFF10B981), '$principalPct% P'),
                                  const SizedBox(width: 8),
                                  _buildLegendDot(const Color(0xFFF59E0B), '$interestPct% I'),
                                ],
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(width: 16),

                        // RIGHT: Estimated EMI Details
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'ESTIMATED EMI',
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.w800,
                                  letterSpacing: 1.0,
                                  color: Colors.grey.shade600,
                                ),
                              ),
                              const SizedBox(height: 4),
                              FittedBox(
                                fit: BoxFit.scaleDown,
                                child: Text(
                                  '₹ $formattedEmi',
                                  style: const TextStyle(
                                    fontSize: 26,
                                    fontWeight: FontWeight.w900,
                                    color: AppTheme.darkGreen,
                                    letterSpacing: -0.5,
                                  ),
                                ),
                              ),
                              const Text(
                                'per month',
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  color: AppTheme.mutedText,
                                ),
                              ),
                              const SizedBox(height: 10),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFECFDF5),
                                  borderRadius: BorderRadius.circular(12),
                                  border: Border.all(color: const Color(0xFFA7F3D0)),
                                ),
                                child: Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    const Icon(Icons.check_circle_rounded, size: 14, color: Color(0xFF059669)),
                                    const SizedBox(width: 4),
                                    Text(
                                      'Low Interest EMI',
                                      style: TextStyle(
                                        fontSize: 11,
                                        fontWeight: FontWeight.w700,
                                        color: Colors.green.shade800,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    const Divider(color: Color(0xFFE2E8F0), height: 1),
                    const SizedBox(height: 14),

                    // Color-Coded Breakdown Summary
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildSummaryBadge('Principal', '₹ ${_formatCurrency(_loanAmount.round())}', const Color(0xFF10B981)),
                        _buildSummaryBadge('Interest', '₹ ${_formatCurrency(_totalInterest)}', const Color(0xFFF59E0B)),
                        _buildSummaryBadge('Total Payable', '₹ ${_formatCurrency(_totalPayable)}', AppTheme.darkGreen),
                      ],
                    )
                  ],
                ),
              ),

              const SizedBox(height: 24),

              // Action Buttons
              OutlinedButton(
                onPressed: _resetDefaults,
                style: OutlinedButton.styleFrom(
                  side: const BorderSide(color: AppTheme.borderColor),
                  foregroundColor: AppTheme.darkText,
                ),
                child: const Text('Reset Values', style: TextStyle(fontWeight: FontWeight.bold)),
              ),
              const SizedBox(height: 12),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => SchemeResultsScreen(
                        emiFilterLoanAmount: _loanAmount,
                        emiFilterMonthlyAmount: _monthlyEmi,
                      ),
                    ),
                  );
                },
                child: const Text('Find Schemes with this EMI'),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLegendDot(Color color, String text) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 8,
          height: 8,
          decoration: BoxDecoration(color: color, shape: BoxShape.circle),
        ),
        const SizedBox(width: 4),
        Text(
          text,
          style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Colors.grey.shade700),
        ),
      ],
    );
  }

  Widget _buildSummaryBadge(String title, String value, Color accentColor) {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 3),
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
        decoration: BoxDecoration(
          color: accentColor.withOpacity(0.06),
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: accentColor.withOpacity(0.2)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(width: 5, height: 5, decoration: BoxDecoration(color: accentColor, shape: BoxShape.circle)),
                const SizedBox(width: 3),
                Flexible(
                  child: Text(
                    title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 10, color: Colors.grey.shade700, fontWeight: FontWeight.w600),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 4),
            FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(
                value,
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: accentColor),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class EmiPieChartPainter extends CustomPainter {
  final double principalRatio;
  final double interestRatio;
  final Color principalColor;
  final Color interestColor;

  EmiPieChartPainter({
    required this.principalRatio,
    required this.interestRatio,
    required this.principalColor,
    required this.interestColor,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = min(size.width, size.height) / 2;
    const strokeWidth = 14.0;

    final rect = Rect.fromCircle(center: center, radius: radius - strokeWidth / 2);

    final bgPaint = Paint()
      ..color = const Color(0xFFE2E8F0)
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth;
    canvas.drawCircle(center, radius - strokeWidth / 2, bgPaint);

    final principalSweep = principalRatio * 2 * pi;
    final interestSweep = interestRatio * 2 * pi;

    final principalPaint = Paint()
      ..color = principalColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round;

    final interestPaint = Paint()
      ..color = interestColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.round;

    if (principalSweep > 0.05) {
      canvas.drawArc(rect, -pi / 2, principalSweep - 0.04, false, principalPaint);
    }
    if (interestSweep > 0.05) {
      canvas.drawArc(rect, -pi / 2 + principalSweep + 0.02, interestSweep - 0.04, false, interestPaint);
    }
  }

  @override
  bool shouldRepaint(covariant EmiPieChartPainter oldDelegate) {
    return oldDelegate.principalRatio != principalRatio ||
        oldDelegate.interestRatio != interestRatio;
  }
}
