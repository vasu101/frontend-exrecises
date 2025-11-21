# Character Counter Textarea

A real-time character counter for textarea input with visual feedback and limit enforcement.


https://github.com/user-attachments/assets/97602d55-768b-44ec-a613-097f91538c8e


## Project Overview

A textarea component that tracks character count and provides visual feedback as users approach and reach the maximum character limit of 250 characters.

## Features

- Real-time character count display
- Maximum character limit of 250
- Three visual states:
  - Normal (0-199 characters)
  - Warning (200-249 characters) - orange border
  - Error (250 characters) - red border
- Dynamic help text showing remaining characters
- Prevents input beyond maximum limit
- Fully responsive design
- Accessible with ARIA attributes

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## How It Works

### Character Count Updates
The counter updates on every keystroke using the `input` event listener. Current count is calculated from `textarea.value.length`.

### Visual States
- Below 200 chars: Gray border, no warning
- 200-249 chars: Orange border with "X characters remaining" message
- 250 chars: Red border with "Maximum limit reached" message

### Limit Enforcement
Two layers of protection:
1. HTML `maxlength="250"` attribute
2. JavaScript `keydown` event prevention for extra safety

## Key JavaScript Functions

**updateCharacterCount()** - Updates counter display and applies visual states based on character count

**preventExcessInput()** - Blocks typing at limit while allowing backspace, delete, and keyboard shortcuts

## What I Learned

### DOM Manipulation
- Selecting and updating multiple elements dynamically
- Adding and removing CSS classes based on state
- Reading textarea value and attributes

### Event Handling
- Using `input` event for real-time updates
- Using `keydown` event to prevent specific inputs
- Detecting special keys and keyboard combinations

### State Management
- Managing three different visual states
- Calculating thresholds and remaining characters
- Resetting states when appropriate

### User Experience
- Providing early warnings before hitting limits
- Using color coding for visual feedback
- Preventing frustrating input blocking

### Accessibility
- Implementing ARIA live regions for screen readers
- Using descriptive labels and help text
- Ensuring keyboard navigation works properly

## File Structure

```
character-counter/
├── index.html
└── README.md
```

## Configuration

Easily adjustable constants in JavaScript:
```javascript
const MAX_LENGTH = 250;
const WARNING_THRESHOLD = 200;
```

## Browser Compatibility

Works in all modern browsers supporting ES6+ JavaScript.

## Author

Nishant Singh Shekhawat
