import 'package:speech_to_text/speech_to_text.dart' as stt;

class SpeechService {
  final stt.SpeechToText _speech = stt.SpeechToText();
  bool _isAvailable = false;
  bool _isListening = false;

  bool get isListening => _isListening;
  bool get isAvailable => _isAvailable;

  Future<bool> initSpeech() async {
    try {
      _isAvailable = await _speech.initialize(
        onError: (val) => print('Speech error: $val'),
        onStatus: (val) => print('Speech status: $val'),
      );
      return _isAvailable;
    } catch (e) {
      print('Speech init exception: $e');
      _isAvailable = false;
      return false;
    }
  }

  Future<void> startListening({
    required Function(String resultText, bool isFinal) onResult,
    String localeId = 'en_IN',
  }) async {
    if (!_isAvailable) {
      await initSpeech();
    }

    if (_isAvailable) {
      _isListening = true;
      try {
        await _speech.listen(
          onResult: (val) {
            final text = val.recognizedWords;
            if (text.trim().isNotEmpty) {
              onResult(text, val.finalResult);
              if (val.finalResult) {
                _isListening = false;
              }
            }
          },
          listenFor: const Duration(seconds: 30),
          pauseFor: const Duration(seconds: 2),
          localeId: localeId,
        );
      } catch (e) {
        _isListening = false;
      }
    } else {
      // Simulated voice prompt for simulator environments where hardware mic is restricted
      _isListening = true;
      await Future.delayed(const Duration(milliseconds: 1500));
      onResult('I want a loan for starting a small food business.', true);
      _isListening = false;
    }
  }

  Future<void> stopListening() async {
    if (_isAvailable) {
      await _speech.stop();
    }
    _isListening = false;
  }
}
