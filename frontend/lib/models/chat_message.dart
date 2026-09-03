class ChatMessage {
  final String id;
  final String sender; // 'user' or 'ai'
  final String text;
  final DateTime timestamp;
  final String language;
  final String source;

  ChatMessage({
    required this.id,
    required this.sender,
    required this.text,
    required this.timestamp,
    this.language = 'English',
    this.source = 'gemini',
  });

  bool get isUser => sender == 'user';
}
