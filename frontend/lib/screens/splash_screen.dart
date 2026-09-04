import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import 'auth_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeOut),
    );

    _scaleAnimation = Tween<double>(begin: 0.92, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeOutBack),
    );

    _animationController.forward();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          children: [
            const SizedBox(height: 20),
            


            const Spacer(),

            // Centered Clean Logo & Tagline (Animated)
            FadeTransition(
              opacity: _fadeAnimation,
              child: ScaleTransition(
                scale: _scaleAnimation,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // Cropped Official Logo (Displays Emblem + Udyamsetú Brand Name cleanly & completely)
                    SizedBox(
                      width: 220,
                      height: 168,
                      child: ClipRect(
                        clipper: LogoTopClipper(),
                        child: Image.asset(
                          'assets/images/udyamsetu_logo.png',
                          width: 220,
                          fit: BoxFit.cover,
                          alignment: Alignment.topCenter,
                          errorBuilder: (context, error, stackTrace) {
                            return Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Icon(Icons.eco_rounded, size: 70, color: AppTheme.primaryGreen),
                                SizedBox(height: 8),
                                Text(
                                  'Udyamsetú',
                                  style: TextStyle(
                                    fontSize: 28,
                                    fontWeight: FontWeight.bold,
                                    color: AppTheme.darkGreen,
                                  ),
                                ),
                              ],
                            );
                          },
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),

                    // Tagline with Spacing: RIGHT SCHEME.     RIGHT GUIDANCE.     RIGHT GROWTH.
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      child: LayoutBuilder(
                        builder: (context, constraints) {
                          final double gap = constraints.maxWidth < 360 ? 8 : 14;
                          return Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              _buildTaglineText('RIGHT SCHEME.'),
                              SizedBox(width: gap),
                              _buildTaglineText('RIGHT GUIDANCE.'),
                              SizedBox(width: gap),
                              _buildTaglineText('RIGHT GROWTH.'),
                            ],
                          );
                        },
                      ),
                    ),

                    const SizedBox(height: 10),

                    // Supporting Subtitle Line
                    const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 32),
                      child: Text(
                        'AI-powered scheme matching for marginalized entrepreneurs',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                          color: Color(0xFF64748B),
                          height: 1.35,
                          letterSpacing: 0.1,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            const Spacer(),

            // Subtle Progress Bar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 120),
              child: SizedBox(
                height: 3,
                child: LinearProgressIndicator(
                  backgroundColor: const Color(0xFFE2E8F0),
                  color: AppTheme.primaryGreen.withValues(alpha: 0.7),
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ),

            const SizedBox(height: 32),

            // Full Width Get Started Button
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: SizedBox(
                width: double.infinity,
                height: 52,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (_) => const AuthScreen()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primaryGreen,
                    foregroundColor: Colors.white,
                    elevation: 0,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(26)),
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Get Started',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                      ),
                      SizedBox(width: 8),
                      Icon(Icons.arrow_forward_rounded, size: 20),
                    ],
                  ),
                ),
              ),
            ),

            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  Widget _buildTaglineText(String text) {
    return Text(
      text,
      style: const TextStyle(
        fontSize: 9.5,
        fontWeight: FontWeight.w800,
        color: Color(0xFF1B4D2E),
        letterSpacing: 0.5,
      ),
    );
  }
}

/// Custom Clipper to crop only the top portion (Emblem + Udyamsetú Brand Name) from logo asset
class LogoTopClipper extends CustomClipper<Rect> {
  @override
  Rect getClip(Size size) {
    // Clips top 76% of the 1024x1024 poster image (ensures Udyamsetú text is 100% complete)
    return Rect.fromLTWH(0, 0, size.width, size.height * 0.76);
  }

  @override
  bool shouldReclip(CustomClipper<Rect> oldClipper) => false;
}
