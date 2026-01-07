import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface VoiceControlProps {
  onNavigate: (section: string) => void;
}

export function VoiceControl({ onNavigate }: VoiceControlProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);

  // Keep isListening in sync with ref to avoid stale closures
  useEffect(() => {
    isListeningRef.current = isListening;
  }, [isListening]);

  const processCommand = useCallback((command: string) => {
    console.log('Processing command:', command);

    // Navigation commands
    const navigationMap: { [key: string]: string } = {
      'home': 'home',
      'services': 'services',
      'portfolio': 'portfolio',
      'about': 'about',
      'blog': 'blog',
      'news': 'blog',
      'faq': 'faq',
      'frequently asked questions': 'faq',
      'testimonials': 'testimonials',
      'reviews': 'testimonials',
      'contact': 'contact',
    };

    // Check for navigation commands
    for (const [keyword, section] of Object.entries(navigationMap)) {
      if (command.includes(`go to ${keyword}`) || 
          command.includes(`navigate to ${keyword}`) ||
          command.includes(`open ${keyword}`) ||
          command.includes(`show ${keyword}`) ||
          command.includes(`show me ${keyword}`) ||
          command === keyword) {
        onNavigate(section);
        toast.success(`Navigating to ${keyword}`, {
          description: 'Voice command recognized',
        });
        return;
      }
    }

    // Button/action commands
    if (command.includes('get started') || command.includes('start now')) {
      onNavigate('contact');
      toast.success('Let\'s get started!', {
        description: 'Opening contact form',
      });
      return;
    }

    if (command.includes('view portfolio') || command.includes('view work') || command.includes('see work') || command.includes('show work')) {
      onNavigate('portfolio');
      toast.success('Viewing portfolio');
      return;
    }

    if (command.includes('contact') || command.includes('get in touch') || command.includes('reach out')) {
      onNavigate('contact');
      toast.success('Opening contact form');
      return;
    }

    if (command.includes('scroll up') || command.includes('go up') || command.includes('scroll to top') || command === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success('Scrolling to top');
      return;
    }

    if (command.includes('scroll down') || command.includes('go down') || command === 'down') {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      toast.success('Scrolling down');
      return;
    }

    // Help command
    if (command.includes('help') || command.includes('commands') || command.includes('what can you do')) {
      toast.info('Voice Commands Available', {
        description: 'Try: "go to services", "contact", "view portfolio", "scroll up/down"',
        duration: 5000,
      });
      return;
    }

    // Menu commands
    if (command.includes('open menu') || command.includes('show menu')) {
      const menuButton = document.querySelector('button[aria-label*="menu"]') as HTMLButtonElement;
      if (menuButton) {
        menuButton.click();
        toast.success('Opening menu');
        return;
      }
    }

    if (command.includes('close menu') || command.includes('hide menu')) {
      const closeButton = document.querySelector('button[aria-label*="close"]') as HTMLButtonElement;
      if (closeButton) {
        closeButton.click();
        toast.success('Closing menu');
        return;
      }
    }

    // If command not recognized
    if (command.length > 3) {
      toast.error(`Command not recognized: "${command}"`, {
        description: 'Say "help" to see available commands',
        duration: 4000,
      });
    }
  }, [onNavigate]);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript.toLowerCase().trim();
        setTranscript(transcriptText);

        // Only process final results
        if (event.results[current].isFinal) {
          processCommand(transcriptText);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'no-speech') {
          // Don't show toast for no-speech, it's normal
          return;
        } else if (event.error === 'not-allowed') {
          toast.error('Microphone access denied. Please allow microphone access.');
          setIsListening(false);
        } else if (event.error !== 'aborted') {
          // Don't show error for aborted (happens when stopping)
          toast.error(`Error: ${event.error}`);
        }
      };

      recognitionRef.current.onend = () => {
        // Use ref to avoid stale closure
        if (isListeningRef.current) {
          // Restart if still supposed to be listening
          try {
            recognitionRef.current.start();
          } catch (error) {
            console.error('Error restarting recognition:', error);
          }
        }
      };
    } else {
      setIsSupported(false);
      // Don't show error on mount, only when user tries to use it
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [processCommand]);

  const toggleListening = () => {
    if (!isSupported) {
      toast.error('Voice control is not supported in your browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current?.stop();
        setIsListening(false);
        setTranscript('');
        toast.info('Voice control stopped');
      } catch (error) {
        console.error('Error stopping recognition:', error);
        setIsListening(false);
        setTranscript('');
      }
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
        toast.success('Voice control activated', {
          description: 'Say a command like "go to services"',
        });
      } catch (error) {
        console.error('Error starting recognition:', error);
        toast.error('Failed to start voice control. Please check microphone permissions.');
      }
    }
  };

  return (
    <>
      {/* Voice Control Button - Always visible */}
      <button
        onClick={toggleListening}
        className={`fixed bottom-6 right-6 z-50 neo-tactile-button p-4 rounded-full transition-all duration-300 ${
          isListening 
            ? 'neon-glow animate-pulse bg-[#00ff7f]/20' 
            : 'hover:scale-110'
        }`}
        aria-label={isListening ? 'Stop voice control' : 'Start voice control'}
        title={isSupported ? (isListening ? 'Stop voice control' : 'Start voice control') : 'Voice control not supported'}
      >
        {isListening ? (
          <Volume2 className="w-6 h-6 text-[#00ff7f]" />
        ) : (
          <Mic className="w-6 h-6 text-gray-400" />
        )}
      </button>

      {/* Transcript Display */}
      {isListening && transcript && (
        <div className="fixed bottom-24 right-6 z-50 glass-card p-4 rounded-lg max-w-xs animate-in slide-in-from-bottom-2">
          <p className="text-xs text-gray-400 mb-1">Listening...</p>
          <p className="text-sm text-[#00ff7f]">{transcript}</p>
        </div>
      )}

      {/* Voice Commands Help */}
      {isListening && !transcript && (
        <div className="fixed bottom-24 right-6 z-50 glass-card p-4 rounded-lg max-w-sm animate-in slide-in-from-bottom-2">
          <p className="text-xs text-[#00ff7f] mb-2">🎤 Voice Commands</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• "Go to [section]" - Navigate</li>
            <li>• "Contact" - Open contact form</li>
            <li>• "View portfolio" - See our work</li>
            <li>• "Scroll up/down" - Navigate page</li>
            <li>• "Help" - Show all commands</li>
          </ul>
        </div>
      )}
    </>
  );
}
