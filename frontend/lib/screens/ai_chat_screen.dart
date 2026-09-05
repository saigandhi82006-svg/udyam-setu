import 'package:flutter/material.dart';
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
      final text = _messageController.text.trim();
      setState(() => _isListening = false);
      if (text.isNotEmpty) {
        _sendMessage(text);
      }
    } else {
      setState(() => _isListening = true);
      await _speechService.startListening(
        onResult: (text, isFinal) {
          if (text.trim().isNotEmpty) {
            setState(() {
              _messageController.text = text;
            });
            if (isFinal) {
              setState(() => _isListening = false);
              _sendMessage(text);
            }
          }
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
      backgroundColor: const Color(0xFF0F141C),
      appBar: AppBar(
        backgroundColor: const Color(0xFF161B26),
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        leading: Navigator.canPop(context)
            ? IconButton(
                icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: Colors.white),
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
                    color: Color(0xFF059669),
                    shape: BoxShape.circle,
                  ),
                  child: const CircleAvatar(
                    radius: 18,
                    backgroundColor: Color(0xFF064E3B),
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
                      border: Border.all(color: const Color(0xFF161B26), width: 2),
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
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: Colors.white),
                    ),
                    const SizedBox(width: 6),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [Color(0xFF065F46), Color(0xFF047857)]),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: const Color(0xFF10B981)),
                      ),
                      child: const Text(
                        '🇮🇳 BHASHINI',
                        style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Colors.white),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 2),
                const Text(
                  'Online • Digital India Voice (22 Langs)',
                  style: TextStyle(fontSize: 11, color: Color(0xFF94A3B8), fontWeight: FontWeight.w500),
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.auto_awesome_rounded, color: Color(0xFF10B981)),
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
                color: const Color(0xFF450A0A),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEF4444)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 10,
                    height: 10,
                    decoration: const BoxDecoration(color: Colors.redAccent, shape: BoxShape.circle),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      'Listening in $_selectedLanguage... Speak your business details',
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.white),
                    ),
                  ),
                  GestureDetector(
                    onTap: _toggleSpeech,
                    child: const Icon(Icons.close_rounded, size: 18, color: Colors.white),
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

          // Gemini Dark Expanding Card Dock (Vertically Expanding Text Field + Bottom Control Bar)
          Container(
            margin: const EdgeInsets.only(left: 10, right: 10, bottom: 14, top: 4),
            child: SafeArea(
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 150),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  color: const Color(0xFF1E1F26), // Dark charcoal card from mockup
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: const Color(0xFF333742), width: 1.2),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.35),
                      blurRadius: 16,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    // 1. Vertically Expanding Text Field
                    ConstrainedBox(
                      constraints: const BoxConstraints(
                        minHeight: 32,
                        maxHeight: 140, // Expands vertically as text grows
                      ),
                      child: TextField(
                        controller: _messageController,
                        maxLines: null, // Dynamic vertical expansion
                        keyboardType: TextInputType.multiline,
                        style: const TextStyle(fontSize: 14, color: Colors.white, fontWeight: FontWeight.w400, height: 1.4),
                        cursorColor: Colors.white,
                        decoration: const InputDecoration(
                          hintText: 'Ask Gemini...',
                          hintStyle: TextStyle(fontSize: 14, color: Color(0xFF8E918F), fontWeight: FontWeight.w400),
                          border: InputBorder.none,
                          isDense: true,
                          contentPadding: EdgeInsets.symmetric(horizontal: 2, vertical: 4),
                        ),
                        onChanged: (val) {
                          setState(() {}); // Re-render to trigger smooth expansion
                        },
                      ),
                    ),
                    const SizedBox(height: 8),

                    // 2. Bottom Control Bar (Language Selector -> Attractive Mic -> Circular Send)
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const SizedBox(width: 2),

                        Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            // Language Selector Dropdown (replaces "Pro ▾")
                            Theme(
                              data: Theme.of(context).copyWith(
                                canvasColor: const Color(0xFF282A36),
                              ),
                              child: DropdownButtonHideUnderline(
                                child: DropdownButton<String>(
                                  value: _selectedLanguage,
                                  isDense: true,
                                  icon: const Icon(Icons.keyboard_arrow_down_rounded, size: 16, color: Color(0xFFC4C7C5)),
                                  style: const TextStyle(fontSize: 12, color: Color(0xFFC4C7C5), fontWeight: FontWeight.w600),
                                  onChanged: (val) {
                                    if (val != null) setState(() => _selectedLanguage = val);
                                  },
                                  items: _languages.map((lang) {
                                    return DropdownMenuItem<String>(
                                      value: lang['name']!.split(' ')[0],
                                      child: Text(
                                        lang['name']!,
                                        style: const TextStyle(color: Colors.white, fontSize: 12),
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ),
                            ),
                            const SizedBox(width: 10),

                            // Attractive Glowing Gradient Mic Icon Button
                            GestureDetector(
                              onTap: _toggleSpeech,
                              child: AnimatedContainer(
                                duration: const Duration(milliseconds: 200),
                                width: 34,
                                height: 34,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: LinearGradient(
                                    colors: _isListening
                                        ? [const Color(0xFFEF4444), const Color(0xFFDC2626)]
                                        : [const Color(0xFF6366F1), const Color(0xFFA855F7), const Color(0xFFEC4899)],
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                  ),
                                  border: Border.all(
                                    color: Colors.white.withOpacity(0.35),
                                    width: 1.2,
                                  ),
                                  boxShadow: [
                                    BoxShadow(
                                      color: _isListening
                                          ? const Color(0xAAEF4444)
                                          : const Color(0x77A855F7),
                                      blurRadius: _isListening ? 14 : 8,
                                      spreadRadius: _isListening ? 2 : 0,
                                    )
                                  ],
                                ),
                                child: Center(
                                  child: Icon(
                                    _isListening ? Icons.graphic_eq_rounded : Icons.mic_rounded,
                                    color: Colors.white,
                                    size: 18,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(width: 10),

                            // Circular Send Button
                            GestureDetector(
                              onTap: () => _sendMessage(),
                              child: Container(
                                width: 32,
                                height: 32,
                                decoration: const BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: LinearGradient(
                                    colors: [Color(0xFF10B981), Color(0xFF059669)],
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                  ),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Color(0x5510B981),
                                      blurRadius: 8,
                                      offset: Offset(0, 2),
                                    ),
                                  ],
                                ),
                                child: const Center(
                                  child: Icon(
                                    Icons.arrow_upward_rounded,
                                    color: Colors.white,
                                    size: 18,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(width: 2),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
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
            color: isAction ? const Color(0xFF10B981) : const Color(0xFF2E384D),
            width: 1,
          ),
        ),
        label: Text(
          text,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.w700,
            color: isAction ? Colors.white : const Color(0xFFCBD5E1),
          ),
        ),
        backgroundColor: isAction ? const Color(0xFF10B981) : const Color(0xFF1E2430),
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
                  colors: [Color(0xFF10B981), Color(0xFF047857)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                )
              : null,
          color: isUser ? null : const Color(0xFF1E2430),
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(20),
            topRight: const Radius.circular(20),
            bottomLeft: Radius.circular(isUser ? 20 : 4),
            bottomRight: Radius.circular(isUser ? 4 : 20),
          ),
          border: isUser ? null : Border.all(color: const Color(0xFF2E384D), width: 1),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2),
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
                color: Colors.white,
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
                      const Text(
                        'Google Gemini AI • Bhashini',
                        style: TextStyle(fontSize: 10, color: Color(0xFF94A3B8), fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                  InkWell(
                    onTap: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text('Playing Bhashini voice audio in $_selectedLanguage...'),
                          duration: const Duration(seconds: 2),
                          backgroundColor: const Color(0xFF047857),
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: const Color(0xFF065F46),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFF10B981)),
                      ),
                      child: const Row(
                        children: [
                          Icon(Icons.volume_up_rounded, size: 12, color: Colors.white),
                          SizedBox(width: 4),
                          Text('Listen', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.white)),
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
          color: const Color(0xFF1E2430),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFF2E384D)),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(
              width: 14,
              height: 14,
              child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFF10B981)),
            ),
            SizedBox(width: 10),
            Text('Analyzing matching schemes...', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF94A3B8))),
          ],
        ),
      ),
    );
  }
}

