# Date Picker Calendar

A simple, accessible date picker calendar component built with HTML and CSS only.
<img width="993" height="643" alt="calendar" src="https://github.com/user-attachments/assets/5181e499-592b-40f8-ab45-14b63962b0e8" />

## Project Overview

This project is a static calendar UI component that displays a monthly calendar view with navigation controls and a date input field. It focuses on proper semantic HTML structure and CSS styling without JavaScript functionality.

## Features

- Date input field with calendar icon
- Monthly calendar view with proper table structure
- Previous and next month navigation buttons
- Interactive day cells with hover states
- Fully responsive design
- Accessible markup with ARIA labels
- Clean, modern UI with proper spacing

## Technologies Used

- HTML5
- CSS3

## Key Concepts Implemented

### HTML Best Practices
- Buttons for interactive day cells instead of plain text
- Semantic table structure with proper thead and tbody
- ARIA labels for accessibility
- Proper heading hierarchy

### CSS Best Practices
- CSS variables for easy theming and maintenance
- Rem units for scalability and accessibility
- Flexbox for header navigation layout
- CSS border-spacing instead of deprecated HTML attributes
- BEM naming convention for class names
- Focus states for keyboard navigation
- Responsive design with media queries

### Accessibility Features
- ARIA labels on all interactive elements
- Proper button semantics for clickable days
- Screen reader friendly structure
- Keyboard navigation support with focus states
- Disabled state for empty cells

## What I Learned

- When to use forms vs standalone UI components
- Using buttons inside table cells for interactive elements
- Absolute positioning for icons inside input fields
- Modern alternatives to deprecated HTML attributes
- Implementing accessible calendar interfaces
- Proper semantic structure for date pickers
- Creating hover and focus states for better UX

## File Structure

```
date-picker-calendar/
├── index.html
├── styles.css
└── README.md
```

## Design Decisions

### Why no form element?
Forms are meant for data submission. Since this is a UI-only calendar component with no backend submission, a form wrapper is unnecessary and adds no semantic value.

### Why buttons for days?
Each day needs to be clickable and interactive. Buttons are the semantic choice for clickable elements, providing better accessibility and keyboard navigation support.

### Why SVG icons?
SVG icons are scalable, load faster than images, and can be styled with CSS. Inline SVG eliminates additional HTTP requests.

## Future Enhancements

- Add JavaScript for date selection functionality
- Implement month/year navigation
- Add date range selection
- Include disabled dates and min/max date constraints
- Add animation for month transitions

## Author

Nishant Singh Shekhawat
