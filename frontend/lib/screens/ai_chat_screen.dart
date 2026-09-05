import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../models/chat_message.dart';
import '../services/api_service.dart';
import '../services/speech_service.dart';
import 'scheme_results_screen.dart';

class AiChatScreen extends StatefulWidget {
  const AiChatScreen({super.key});

  @override
  State<AiChatScreen> createState() => _AiChatScreenState();
}

class _AiChatScreenState extends State<AiChatScreen> {
  final TextEditingController _messageController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final ApiService _apiService = ApiService();
  final SpeechService _speechService = SpeechService();

  String _selectedLanguage = 'English';
  bool _isTyping = false;
  bool _isListening = false;

  final List<ChatMessage> _messages = [
    ChatMessage(
      id: 'msg_init',
      sender: 'ai',
      text: 'Welcome to Udyam Setu AI! To help me find the best government schemes, loans, and subsidies, please tell me: Who are you and which business or enterprise do you run or plan to start?',
      timestamp: DateTime.now(),
      source: 'gemini',
    ),
  ];

  final List<Map<String, String>> _languages = [
    {'code': 'en', 'name': 'English'},
    {'code': 'hi', 'name': 'हिन्दी (Hindi)'},
    {'code': 'te', 'name': 'తెలుగు (Telugu)'},
    {'code': 'kn', 'name': 'ಕನ್ನಡ (Kannada)'},
    {'code': 'bn', 'name': 'বাংলা (Bengali)'},
    {'code': 'ta', 'name': 'தமிழ் (Tamil)'},
    {'code': 'mr', 'name': 'मराठी (Marathi)'},
  ];

  void _sendMessage([String? customText]) async {
    final text = customText ?? _messageController.text.trim();
    if (text.isEmpty) return;

    final userMsg = ChatMessage(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      sender: 'user',
      text: text,
      timestamp: DateTime.now(),
      language: _selectedLanguage,
    );

    setState(() {
      _messages.add(userMsg);
      _messageController.clear();
      _isTyping = true;
    });

    _scrollToBottom();

    // Build conversation history for multi-turn context
    final history = _messages
        .where((m) => m.id != 'msg_init' && m.id != userMsg.id)
        .map((m) => {
              'role': m.sender == 'user' ? 'user' : 'model',
              'text': m.text,
            })
        .toList();

    // Call AI Backend endpoint
    final response = await _apiService.sendAIChat(
      message: text,
      language: _selectedLanguage,
      conversationHistory: history,
    );

    if (mounted) {
      setState(() {
        _isTyping = false;
        _messages.add(
          ChatMessage(
            id: (DateTime.now().millisecondsSinceEpoch + 1).toString(),
            sender: 'ai',
            text: response['reply'] ?? 'I could not process that request. Please try again.',
            timestamp: DateTime.now(),
            source: response['source'] ?? 'gemini',
          ),
        );
      });
      _scrollToBottom();
    }
  }

  void _toggleSpeech() async {
    if (_isListening) {
      await _speechService.stopListening();
      setState(() => _isListening = false);
    } else {
      setState(() => _isListening = true);
      await _speechService.startListening(
        onResult: (text) {
          setState(() {
            _isListening = false;
            _messageController.text = text;
          });
          _sendMessage(text);
        },
      );
    }
  }

  void _scrollToBottom() {
    Future.delayed(const Duration(milliseconds: 100), () {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        surfaceTintColor: Colors.transparent,
        leading: Navigator.canPop(context)
            ? IconButton(
                icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 18),
                onPressed: () => Navigator.pop(context),
              )
            : null,
        title: Row(
          children: [
            Stack(
              children: [
                Container(
                  padding: const EdgeInsets.all(2),
                  decoration: const BoxDecoration(
                    color: AppTheme.lightGreen,
                    shape: BoxShape.circle,
                  ),
                  child: const CircleAvatar(
                    radius: 18,
                    backgroundColor: AppTheme.darkGreen,
                    child: Icon(Icons.smart_toy_rounded, color: Colors.white, size: 20),
                  ),
                ),
                Positioned(
                  bottom: 0,
                  right: 0,
                  child: Container(
                    width: 10,
                    height: 10,
                    decoration: BoxDecoration(
                      color: const Color(0xFF10B981),
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(width: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Text(
                      'Udyam Setu AI',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppTheme.darkText),
                    ),
                    const SizedBox(width: 6),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [Color(0xFFECFDF5), Color(0xFFD1FAE5)]),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: const Color(0xFFA7F3D0)),
                      ),
                      child: const Text(
                        '🇮🇳 BHASHINI',
                        style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Color(0xFF047857)),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 2),
                const Text(
                  'Online • Digital India Voice (22 Langs)',
                  style: TextStyle(fontSize: 11, color: Color(0xFF64748B), fontWeight: FontWeight.w500),
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.auto_awesome_rounded, color: AppTheme.primaryGreen),
            tooltip: 'Document Guidance',
            onPressed: () {
              _sendMessage('What documents do I need to prepare for my scheme application?');
            },
          ),
          const SizedBox(width: 4),
        ],
      ),
      body: Column(
        children: [
          // Chat Messages View
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              itemCount: _messages.length + (_isTyping ? 1 : 0),
              itemBuilder: (context, index) {
                if (index == _messages.length && _isTyping) {
                  return _buildTypingIndicator();
                }
                final msg = _messages[index];
                return _buildChatBubble(msg);
              },
            ),
          ),

          // Listening Pulsing Voice Status Banner
          if (_isListening)
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: const Color(0xFFFEF2F2),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFFCA5A5)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 10,
                    height: 10,
                    decoration: const BoxDecoration(color: Colors.red, shape: BoxShape.circle),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      'Listening in $_selectedLanguage... Speak your business details',
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.red),
                    ),
                  ),
                  GestureDetector(
                    onTap: _toggleSpeech,
                    child: const Icon(Icons.close_rounded, size: 18, color: Colors.red),
                  ),
                ],
              ),
            ),

          // Quick Business Category Selection Chips Bar
          Container(
            height: 42,
            margin: const EdgeInsets.symmetric(vertical: 4),
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              children: [
                _buildPromptChip('🍲 Food Business / Tiffin'),
                _buildPromptChip('🛒 Kirana / Retail Shop'),
                _buildPromptChip('🌾 Agriculture / Dairy (KCC)'),
                _buildPromptChip('🧵 PM Vishwakarma (Artisan)'),
                _buildPromptChip('🏭 Small Industry / MSME'),
                _buildPromptChip('👩‍💼 Women Entrepreneur'),
                _buildPromptChip('🛺 Commercial Auto Loan'),
                _buildPromptChip('🎯 Match Schemes Now', isAction: true),
              ],
            ),
          ),

          // Modern Floating Text Input Dock (Language -> Typing Area -> Mic inside Pill -> Send Button Outside)
          Container(
            margin: const EdgeInsets.only(left: 14, right: 14, bottom: 14, top: 4),
            child: SafeArea(
              child: Row(
                children: [
                  // Main Capsule Pill containing Language Selector, Text Field, and Mic Button
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(28),
                        border: Border.all(color: const Color(0xFFCBD5E1), width: 1.2),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.06),
                            blurRadius: 12,
                            offset: const Offset(0, 3),
                          ),
                        ],
                      ),
                      child: Row(
                        children: [
                          // 1. Language Selector Badge Pill [LN ENG ^]
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: const Color(0xFFF1F5F9),
                              borderRadius: BorderRadius.circular(18),
                              border: Border.all(color: const Color(0xFFE2E8F0)),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                const Icon(Icons.translate_rounded, size: 14, color: AppTheme.primaryGreen),
                                const SizedBox(width: 4),
                                DropdownButtonHideUnderline(
                                  child: DropdownButton<String>(
                                    value: _selectedLanguage,
                                    isDense: true,
                                    icon: const Icon(Icons.keyboard_arrow_down_rounded, size: 16, color: AppTheme.darkText),
                                    style: const TextStyle(fontSize: 12, color: AppTheme.darkText, fontWeight: FontWeight.w800),
                                    onChanged: (val) {
                                      if (val != null) setState(() => _selectedLanguage = val);
                                    },
                                    items: _languages.map((lang) {
                                      return DropdownMenuItem<String>(
                                        value: lang['name']!.split(' ')[0],
                                        child: Text(lang['name']!),
                                      );
                                    }).toList(),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(width: 6),

                          // 2. Typing Area ("Type here...")
                          Expanded(
                            child: TextField(
                              controller: _messageController,
                              maxLines: 3,
                              minLines: 1,
                              style: const TextStyle(fontSize: 14, color: AppTheme.darkText, fontWeight: FontWeight.w500),
                              decoration: InputDecoration(
                                hintText: 'Type here...',
                                hintStyle: TextStyle(fontSize: 13, color: Colors.grey.shade400, fontWeight: FontWeight.w400),
                                border: InputBorder.none,
                                enabledBorder: InputBorder.none,
                                focusedBorder: InputBorder.none,
                                contentPadding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
                              ),
                              onSubmitted: (text) => _sendMessage(text),
                            ),
                          ),

                          // 3. Mic button inside capsule to speak with AI
                          GestureDetector(
                            onTap: _toggleSpeech,
                            child: Container(
                              width: 36,
                              height: 36,
                              decoration: BoxDecoration(
                                color: _isListening ? const Color(0xFFFEF2F2) : const Color(0xFFF1F5F9),
                                shape: BoxShape.circle,
                                border: Border.all(
                                  color: _isListening ? const Color(0xFFFCA5A5) : const Color(0xFFE2E8F0),
                                  width: 1,
                                ),
                              ),
                              child: Icon(
                                _isListening ? Icons.mic_rounded : Icons.mic_none_rounded,
                                color: _isListening ? Colors.red : const Color(0xFF475569),
                                size: 20,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(width: 8),

                  // 4. Circular Send button outside the capsule pill
                  GestureDetector(
                    onTap: () => _sendMessage(),
                    child: Container(
                      width: 44,
                      height: 44,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(
                          colors: [Color(0xFF10B981), Color(0xFF059669)],
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF10B981).withOpacity(0.4),
                            blurRadius: 10,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: const Center(
                        child: Icon(
                          Icons.send_rounded,
                          color: Colors.white,
                          size: 20,
                        ),
                      ),
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

  Widget _buildPromptChip(String text, {bool isAction = false}) {
    return Padding(
      padding: const EdgeInsets.only(right: 8),
      child: ActionChip(
        elevation: 0,
        pressElevation: 2,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
          side: BorderSide(
            color: isAction ? AppTheme.primaryGreen : const Color(0xFFE2E8F0),
            width: 1,
          ),
        ),
        label: Text(
          text,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.w700,
            color: isAction ? Colors.white : AppTheme.darkText,
          ),
        ),
        backgroundColor: isAction ? AppTheme.primaryGreen : Colors.white,
        onPressed: () {
          if (isAction) {
            Navigator.push(context, MaterialPageRoute(builder: (_) => const SchemeResultsScreen()));
          } else {
            _sendMessage(text);
          }
        },
      ),
    );
  }

  Widget _buildChatBubble(ChatMessage msg) {
    final isUser = msg.isUser;
    return Align(
      alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 6),
        padding: const EdgeInsets.all(14),
        constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.82),
        decoration: BoxDecoration(
          gradient: isUser
              ? const LinearGradient(
                  colors: [Color(0xFF1E6F38), Color(0xFF124E27)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                )
              : null,
          color: isUser ? null : Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(20),
            topRight: const Radius.circular(20),
            bottomLeft: Radius.circular(isUser ? 20 : 4),
            bottomRight: Radius.circular(isUser ? 4 : 20),
          ),
          border: isUser ? null : Border.all(color: const Color(0xFFE2E8F0), width: 1),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 8,
              offset: const Offset(0, 3),
            )
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              msg.text,
              style: TextStyle(
                color: isUser ? Colors.white : AppTheme.darkText,
                fontSize: 14,
                height: 1.45,
                fontWeight: isUser ? FontWeight.w500 : FontWeight.w400,
              ),
            ),
            if (!isUser) ...[
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.auto_awesome_rounded, size: 12, color: Color(0xFF10B981)),
                      const SizedBox(width: 4),
                      Text(
                        'Google Gemini AI • Bhashini',
                        style: TextStyle(fontSize: 10, color: Colors.grey.shade600, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                  InkWell(
                    onTap: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text('Playing Bhashini voice audio in $_selectedLanguage...'),
                          duration: const Duration(seconds: 2),
                          backgroundColor: AppTheme.darkGreen,
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: const Color(0xFFECFDF5),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFFA7F3D0)),
                      ),
                      child: const Row(
                        children: [
                          Icon(Icons.volume_up_rounded, size: 12, color: Color(0xFF059669)),
                          SizedBox(width: 4),
                          Text('Listen', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF059669))),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ]
          ],
        ),
      ),
    );
  }

  Widget _buildTypingIndicator() {
    return Align(
      alignment: Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 6),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFFE2E8F0)),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: 14,
              height: 14,
              child: CircularProgressIndicator(strokeWidth: 2, color: AppTheme.primaryGreen),
            ),
            SizedBox(width: 10),
            Text('Analyzing matching schemes...', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF64748B))),
          ],
        ),
      ),
    );
  }
}
