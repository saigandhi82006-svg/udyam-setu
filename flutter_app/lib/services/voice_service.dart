import 'package:speech_to_text/speech_to_text.dart' as stt;
import 'package:flutter_tts/flutter_tts.dart';

class VoiceService {
  final stt.SpeechToText _speech = stt.SpeechToText();
  final FlutterTts _tts = FlutterTts();
  bool _isInitialized = false;

  Future<bool> initSpeech() async {
    if (!_isInitialized) {
      _isInitialized = await _speech.initialize(
        onError: (val) => print('Speech Error: $val'),
        onStatus: (val) => print('Speech Status: $val'),
      );
    }
    return _isInitialized;
  }

  Future<void> listen({
    required Function(String text) onResult,
    required String localeId,
  }) async {
    await initSpeech();
    if (_speech.isAvailable) {
      await _speech.listen(
        onResult: (val) {
          if (val.recognizedWords.isNotEmpty) {
            onResult(val.recognizedWords);
          }
        },
        localeId: localeId,
      );
    }
  }

  Future<void> stopListening() async {
    if (_speech.isListening) {
      await _speech.stop();
    }
  }

  bool get isListening => _speech.isListening;

  Future<void> speak(String text, {String lang = 'en-IN'}) async {
    await _tts.setLanguage(lang);
    await _tts.setPitch(1.0);
    await _tts.setSpeechRate(0.5);
    await _tts.speak(text);
  }

  Future<void> stopSpeaking() async {
    await _tts.stop();
  }
}