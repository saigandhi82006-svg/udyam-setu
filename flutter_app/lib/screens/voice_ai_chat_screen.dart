import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/theme.dart';
import '../services/voice_service.dart';
import '../providers/user_provider.dart';
import 'schemes_feed_screen.dart';

class VoiceAiChatScreen extends StatefulWidget {
  const VoiceAiChatScreen({super.key});

  @override
  State<VoiceAiChatScreen> createState() => _VoiceAiChatScreenState();
}

class _VoiceAiChatScreenState extends State<VoiceAiChatScreen> with SingleTickerProviderStateMixin {
  final VoiceService _voiceService = VoiceService();
  final TextEditingController _textController = TextEditingController();
  final List<Map<String, dynamic>> _messages = [
    {
      'isUser': false,
      'text': 'Namaste! I am your Udyam Setu Voice AI Assistant. Speak or type in your language. For example: "I need ₹10 Lakhs loan for manufacturing machine without collateral."',
      'time': 'Just now'
    }
  ];
  bool _isListening = false;
  late AnimationController _micPulseController;

  @override
  void initState() {
    super.initState();
    _micPulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _micPulseController.dispose();
    _voiceService.stopListening();
    _voiceService.stopSpeaking();
    super.dispose();
  }

  void _handleSendMessage(String query) {
    if (query.trim().isEmpty) return;
    setState(() {
      _messages.add({'isUser': true, 'text': query, 'time': 'Just now'});
      _textController.clear();
    });

    // Simulated AI Vernacular Reasoning
    Future.delayed(const Duration(milliseconds: 800), () {
      String response = '';
      if (query.toLowerCase().contains('pmegp') || query.toLowerCase().contains('subsidy')) {
        response = 'Based on your profile, you are eligible for the Prime Minister Employment Generation Programme (PMEGP) offering up to 35% capital subsidy and collateral-free credit up to ₹50 Lakhs.';
      } else if (query.toLowerCase().contains('mudra') || query.toLowerCase().contains('working capital')) {
        response = 'You qualify for MUDRA Tarun Scheme providing up to ₹20 Lakhs with zero collateral requirement and immediate working capital overdraft.';
      } else {
        response = 'I have matched 4 pre-approved government schemes for you with up to ₹50 Lakhs credit limit and 35% subsidy benefit. Would you like to view eligible schemes or calculate your monthly EMI?';
      }

      setState(() {
        _messages.add({'isUser': false, 'text': response, 'time': 'Just now'});
      });

      _voiceService.speak(response);
    });
  }

  void _toggleListening() async {
    if (_isListening) {
      await _voiceService.stopListening();
      setState(() => _isListening = false);
    } else {
      setState(() => _isListening = true);
      await _voiceService.listen(
        onResult: (text) {
          setState(() {
            _textController.text = text;
          });
          if (text.length > 5) {
            _toggleListening();
            _handleSendMessage(text);
          }
        },
        localeId: 'en_IN',
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Voice AI MSME Assistant'),
        actions: [
          IconButton(
            icon: const Icon(Icons.volume_up_rounded),
            onPressed: () {
              _voiceService.speak('Welcome to Udyam Setu voice enablement platform.');
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // Suggested questions horizontal strip
          Container(
            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
            color: Colors.white,
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  _buildPromptChip('PMEGP 35% Subsidy details'),
                  _buildPromptChip('₹10 Lakhs Collateral Free loan'),
                  _buildPromptChip('Nearest CSC registration center'),
                  _buildPromptChip('MUDRA Tarun application steps'),
                ],
              ),
            ),
          ),
          const Divider(height: 1, color: AppTheme.borderColor),

          // Messages list
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                final msg = _messages[index];
                final isUser = msg['isUser'] as bool;

                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 12),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
                    decoration: BoxDecoration(
                      color: isUser ? AppTheme.primaryGreen : Colors.white,
                      borderRadius: BorderRadius.only(
                        topLeft: const Radius.circular(16),
                        topRight: const Radius.circular(16),
                        bottomLeft: isUser ? const Radius.circular(16) : const Radius.circular(4),
                        bottomRight: isUser ? const Radius.circular(4) : const Radius.circular(16),
                      ),
                      border: isUser ? null : Border.all(color: AppTheme.borderColor),
                      boxShadow: [
                        BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 4, offset: const Offset(0, 2)),
                      ],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          msg['text'],
                          style: TextStyle(
                            color: isUser ? Colors.white : AppTheme.textDark,
                            fontSize: 14,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          msg['time'],
                          style: TextStyle(
                            color: isUser ? Colors.white70 : AppTheme.textMuted,
                            fontSize: 10,
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),

          // Voice Control & Input Area
          Container(
            padding: const EdgeInsets.all(14),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: AppTheme.borderColor)),
            ),
            child: SafeArea(
              child: Row(
                children: [
                  GestureDetector(
                    onTap: _toggleListening,
                    child: AnimatedBuilder(
                      animation: _micPulseController,
                      builder: (context, child) {
                        return Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: _isListening ? Colors.red : AppTheme.primaryGreen,
                            boxShadow: _isListening
                                ? [
                                    BoxShadow(
                                      color: Colors.red.withOpacity(0.5),
                                      blurRadius: 10 * _micPulseController.value,
                                      spreadRadius: 4 * _micPulseController.value,
                                    )
                                  ]
                                : null,
                          ),
                          child: Icon(
                            _isListening ? Icons.mic_off_rounded : Icons.mic_rounded,
                            color: Colors.white,
                            size: 24,
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: TextField(
                      controller: _textController,
                      decoration: InputDecoration(
                        hintText: _isListening ? 'Listening in your language...' : 'Type or speak your loan query...',
                        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                      ),
                      onSubmitted: _handleSendMessage,
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton(
                    icon: const Icon(Icons.send_rounded, color: AppTheme.primaryGreen),
                    onPressed: () => _handleSendMessage(_textController.text),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildPromptChip(String text) {
    return Padding(
      padding: const EdgeInsets.only(right: 8.0),
      child: ActionChip(
        label: Text(text, style: const TextStyle(fontSize: 12, color: AppTheme.primaryDark)),
        backgroundColor: AppTheme.emeraldBg,
        side: const BorderSide(color: AppTheme.emeraldLight),
        onPressed: () => _handleSendMessage(text),
      ),
    );
  }
}