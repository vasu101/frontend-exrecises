# Cookie Consent Popup

A simple cookie consent popup that appears when users first visit the website. The popup remembers the user's choice using browser localStorage and won't appear again on subsequent visits.


https://github.com/user-attachments/assets/00146ff4-1229-4130-9d9a-ed57b1e64c15


## Project Overview

This project demonstrates how to create a GDPR-compliant cookie consent interface with persistent storage. Users can accept, decline, or dismiss the popup, and their choice is saved locally in the browser.

## Features

- Cookie consent popup with clean UI
- Accept and Decline buttons
- Close button to dismiss without choosing
- localStorage to remember user's choice
- Popup doesn't appear on subsequent visits after user makes a choice
- Smooth slide-in animation
- Fully responsive design
- Accessible markup with ARIA labels

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- localStorage API

## How It Works

### First Visit
1. User opens the website
2. Cookie consent popup appears in bottom-right corner
3. User has three options:
   - Click "I like Cookies" (accepts)
   - Click "Decline" (declines)
   - Click "X" (dismisses without saving preference)

### After Accepting/Declining
1. User's choice is saved to localStorage
2. Popup disappears with smooth animation
3. On page refresh or revisit, JavaScript checks localStorage
4. If choice exists, popup remains hidden
5. User won't see popup again unless they clear browser data

### localStorage Implementation

The project uses browser localStorage to persist user consent:

```javascript
// Save user's choice
localStorage.setItem('cookieConsent', 'accepted');

// Check if user already made a choice
const consent = localStorage.getItem('cookieConsent');

// Remove saved choice (for testing)
localStorage.removeItem('cookieConsent');
```

localStorage stores data permanently (until manually cleared) and survives:
- Page refreshes
- Browser restarts
- Tab closures

## What I Learned

### JavaScript Concepts
- DOM manipulation and element selection
- Event listeners for user interactions
- localStorage API for data persistence
- Checking and setting values in localStorage
- Function organization and naming best practices
- Avoiding reserved function names like `close()`

### Why localStorage?
- Data persists across browser sessions
- No server required for simple storage
- Easy to implement and use
- Perfect for user preferences like cookie consent
- Can store strings (we store 'accepted' or 'declined')

### Best Practices Implemented
- Event listeners instead of inline onclick
- Semantic HTML with proper elements
- BEM naming convention for CSS classes
- ARIA labels for accessibility
- Flexible layouts without fixed heights
- Clean function names that don't conflict with browser APIs

## File Structure

```
cookie-consent/
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Future Enhancements

- Add "Learn More" link to cookie policy page
- Implement cookie categories (necessary, analytics, marketing)
- Add option to change preferences later
- Show different messages based on user location (GDPR compliance)
- Add expiration time for localStorage (auto-clear after X days)

## Author

Nishant Singh Shekhawat
