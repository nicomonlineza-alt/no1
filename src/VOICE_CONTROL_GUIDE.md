# Voice Control Guide for Nicom Online Website

## Overview
The Nicom Online website features advanced voice control functionality, allowing users to navigate and interact with the website using voice commands. This feature uses the Web Speech API for speech recognition.

## Browser Compatibility
Voice control is supported in:
- ✅ Google Chrome (Desktop & Mobile)
- ✅ Microsoft Edge
- ✅ Safari (macOS & iOS)
- ❌ Firefox (limited support)
- ❌ Opera (limited support)

## How to Use

### Activating Voice Control
1. Look for the **microphone icon** button in the bottom-right corner of the page
2. Click the microphone icon to activate voice control
3. When active, the icon will glow green and pulse, indicating it's listening
4. A help tooltip will appear showing available commands

### Deactivating Voice Control
- Click the microphone icon again to stop voice control
- The icon will return to gray when inactive

## Available Voice Commands

### Navigation Commands
Navigate to different sections of the website:
- **"Go to home"** - Navigate to homepage
- **"Go to services"** - View services section
- **"Go to portfolio"** - View portfolio
- **"Go to about"** - View about us section
- **"Go to blog"** or **"Go to news"** - View blog/news
- **"Go to FAQ"** or **"Go to frequently asked questions"** - View FAQ section
- **"Go to testimonials"** or **"Go to reviews"** - View testimonials
- **"Go to contact"** - View contact form

Alternative phrases:
- "Navigate to [section]"
- "Open [section]"
- "Show [section]"
- "Show me [section]"
- Simply say the section name (e.g., "services", "portfolio")

### Action Commands
- **"Get started"** or **"Start now"** - Navigate to contact form
- **"View portfolio"** or **"Show work"** - View our work
- **"Contact"** or **"Get in touch"** - Open contact form

### Scrolling Commands
- **"Scroll up"** or **"Go up"** or **"Top"** - Scroll to top of page
- **"Scroll down"** or **"Go down"** or **"Down"** - Scroll down one screen

### Menu Commands (Mobile)
- **"Open menu"** or **"Show menu"** - Open navigation menu
- **"Close menu"** or **"Hide menu"** - Close navigation menu

### Help Command
- **"Help"** or **"Commands"** or **"What can you do"** - Display available commands

## Visual Feedback

### Listening Indicator
When voice control is active:
- The microphone icon glows green with a pulsing animation
- Real-time transcript appears above the button showing what you're saying
- Command help tooltip displays available commands

### Notifications
The system provides visual feedback through toast notifications:
- ✅ **Success** - Command recognized and executed
- ℹ️ **Info** - Status updates (e.g., "Voice control activated")
- ❌ **Error** - Command not recognized or microphone access denied

## Permissions

### Microphone Access
The first time you activate voice control:
1. Your browser will request microphone permission
2. Click **"Allow"** to enable voice control
3. If denied, voice control won't work until permission is granted

### Granting Permission
If you previously denied permission:
1. Click the **lock icon** or **info icon** in your browser's address bar
2. Find **Microphone** permissions
3. Change to **"Allow"**
4. Refresh the page

## Troubleshooting

### Voice Control Not Working
1. **Check browser compatibility** - Use Chrome, Edge, or Safari
2. **Grant microphone permission** - Check browser settings
3. **Check microphone** - Ensure your microphone is working
4. **Speak clearly** - Speak directly at your microphone
5. **Check volume** - Ensure microphone volume is adequate

### Commands Not Recognized
- Speak clearly and at a moderate pace
- Use exact command phrases listed above
- Say "help" to see available commands
- Check that background noise isn't interfering

### No Response
- Check that voice control is activated (green glowing icon)
- Try clicking the microphone icon to restart
- Refresh the page and try again
- Check browser console for errors

## Tips for Best Results

1. **Speak Clearly** - Enunciate words clearly
2. **Moderate Pace** - Don't speak too fast or too slow
3. **Quiet Environment** - Reduce background noise
4. **Direct Commands** - Use the exact phrases listed
5. **Wait for Feedback** - Allow time for the system to process
6. **Use Help** - Say "help" if you forget commands

## Technical Details

### Implementation
- Uses Web Speech API (SpeechRecognition)
- Continuous listening mode
- Real-time interim results
- Language: English (US)
- Automatic restart on speech end

### Privacy
- Speech recognition happens in your browser
- No audio is sent to external servers (except browser's speech service)
- No voice data is stored by the website

## Future Enhancements

Potential future features:
- Multi-language support
- Custom voice commands
- Voice-based form filling
- Voice search functionality
- Accessibility improvements

---

**Need Help?**
If you experience issues with voice control, please contact us:
- 📧 Email: info@nicomonline.co.za
- 📞 Phone: +27 62 661 6896
