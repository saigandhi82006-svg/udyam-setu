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
      backgroundColor: const Color(0xFFF1F5F9),
      appBar: AppBar(
        leading: Navigator.canPop(context)
            ? IconButton(
                icon: const Icon(Icons.arrow_back_ios_new, size: 18),
                onPressed: () => Navigator.pop(context),
              )
            : null,
        title: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Stack(
              children: [
                CircleAvatar(
                  radius: 18,
                  backgroundColor: AppTheme.lightGreen,
                  child: const Icon(Icons.smart_toy_outlined, color: AppTheme.primaryGreen, size: 20),
                ),
                Positioned(
                  bottom: 0,
                  right: 0,
                  child: Container(
                    width: 10,
                    height: 10,
                    decoration: BoxDecoration(
                      color: Colors.greenAccent.shade700,
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(width: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Udyam Sethu AI',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                Row(
                  children: [
                    Container(
                      width: 6,
                      height: 6,
                      decoration: const BoxDecoration(color: Colors.green, shape: BoxShape.circle),
                    ),
                    const SizedBox(width: 4),
                    const Text('Online • Multilingual', style: TextStyle(fontSize: 11, color: Colors.grey)),
                  ],
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.document_scanner_outlined),
            tooltip: 'Document Guidance',
            onPressed: () {
              _sendMessage('What documents do I need to prepare for my loan?');
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // Chat messages view
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
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

          // Tap to Speak Voice Section (Screen 4 feature)
          Container(
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: Column(
              children: [
                Text(
                  _isListening ? 'Listening in $_selectedLanguage...' : 'Tap to Speak',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: _isListening ? Colors.red : Colors.grey.shade600,
                  ),
                ),
                const SizedBox(height: 6),
                GestureDetector(
                  onTap: _toggleSpeech,
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    width: _isListening ? 60 : 52,
                    height: _isListening ? 60 : 52,
                    decoration: BoxDecoration(
                      color: _isListening ? Colors.red : AppTheme.primaryGreen,
                      shape: BoxShape.circle,
                      boxShadow: [
                        BoxShadow(
                          color: (_isListening ? Colors.red : AppTheme.primaryGreen).withOpacity(0.35),
                          blurRadius: 12,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Icon(
                      _isListening ? Icons.mic : Icons.mic_none,
                      color: Colors.white,
                      size: 28,
                    ),
                  ),
                ),
              ],
            ),
          ),

          // Quick Business Category Selection Chips
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: Row(
              children: [
                _buildPromptChip('🛺 Commercial Auto Loan'),
                _buildPromptChip('🍲 Food Business / Tiffin'),
                _buildPromptChip('🛒 Kirana / Retail Shop'),
                _buildPromptChip('🌾 Agriculture / Dairy (KCC)'),
                _buildPromptChip('🧵 PM Vishwakarma (Artisan)'),
                _buildPromptChip('🏭 Small Industry / MSME'),
                _buildPromptChip('👩‍💼 Women Entrepreneur'),
                _buildPromptChip('♿ Divyangjan Loan (NHFDC)'),
                _buildPromptChip('✨ Check Matching Schemes', isAction: true),
              ],
            ),
          ),

          // Input Bar with Vernacular Language Dropdown
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
            ),
            child: SafeArea(
              child: Row(
                children: [
                  // Language Selector Dropdown
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    decoration: BoxDecoration(
                      color: Colors.grey.shade100,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: DropdownButtonHideUnderline(
                      child: DropdownButton<String>(
                        value: _selectedLanguage,
                        icon: const Icon(Icons.arrow_drop_down, size: 18),
                        style: const TextStyle(fontSize: 12, color: AppTheme.darkText, fontWeight: FontWeight.bold),
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
                  ),
                  const SizedBox(width: 8),

                  // Text Field
                  Expanded(
                    child: TextField(
                      controller: _messageController,
                      decoration: const InputDecoration(
                        hintText: 'Ask in your own language...',
                        border: InputBorder.none,
                        enabledBorder: InputBorder.none,
                        focusedBorder: InputBorder.none,
                        contentPadding: EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                      ),
                      onSubmitted: (text) => _sendMessage(text),
                    ),
                  ),

                  // Send Button
                  IconButton(
                    onPressed: () => _sendMessage(),
                    icon: const Icon(Icons.send_rounded, color: AppTheme.primaryGreen),
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
        label: Text(
          text,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isAction ? Colors.white : AppTheme.darkGreen,
          ),
        ),
        backgroundColor: isAction ? AppTheme.primaryGreen : AppTheme.lightGreen,
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
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
        decoration: BoxDecoration(
          color: isUser ? AppTheme.primaryGreen : Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(16),
            topRight: const Radius.circular(16),
            bottomLeft: Radius.circular(isUser ? 16 : 4),
            bottomRight: Radius.circular(isUser ? 4 : 16),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 4,
              offset: const Offset(0, 2),
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
                height: 1.4,
              ),
            ),
            if (!isUser && msg.source.contains('gemini')) ...[
              const SizedBox(height: 6),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.auto_awesome, size: 11, color: Colors.grey.shade500),
                  const SizedBox(width: 4),
                  Text('Powered by Gemini AI', style: TextStyle(fontSize: 10, color: Colors.grey.shade500)),
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
          borderRadius: BorderRadius.circular(16),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('...', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.grey)),
            SizedBox(width: 8),
            Text('Analyzing schemes...', style: TextStyle(fontSize: 12, color: Colors.grey)),
          ],
        ),
      ),
    );
  }
}
