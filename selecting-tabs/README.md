# 🏰 Rajasthan Cities - Tabs Component

A responsive and interactive tabs component showcasing the beautiful cities of Rajasthan, India. Built with vanilla HTML, CSS, and JavaScript.

<img width="1268" height="804" alt="tabs-project" src="https://github.com/user-attachments/assets/65b6c48f-f67b-4482-977e-ec92c351b34d" />

## 🎯 Project Overview

An interactive tabs interface that displays information about four major cities in Rajasthan: Jaipur, Bikaner, Jodhpur, and Udaipur. This project demonstrates DOM manipulation, event handling, and responsive design principles.

## ✨ Features

- **Interactive Tabs** - Click to switch between different cities
- **Active State Indication** - Visual feedback showing which tab is active
- **Smooth Animations** - Fade-in effect when switching content
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Clean UI** - Modern card-based design with shadows and gradients
- **Dynamic Content** - JavaScript-powered content switching
- **Semantic HTML** - Proper use of semantic elements


## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
  - Flexbox for navigation layout
  - CSS animations (fadeIn)
  - Media queries for responsiveness
  - CSS transitions for smooth effects
- **Vanilla JavaScript** - Tab switching logic
  - DOM manipulation
  - Event listeners
  - classList API

## 📁 Project Structure

```
rajasthan-tabs/
│
├── index.html          # Main HTML structure
├── styles.css          # Component styling (embedded)
├── script.js           # Tab switching logic (embedded)
├── images/             # City images folder
│   ├── hawa_mahal.jpeg
│   ├── junagarh_fort.jpeg
│   ├── meherangarh_fort.webp
│   └── city_palace.jpg
├── README.md          # Project documentation
└── preview.png        # Screenshot (optional)
```

## 🎨 Key Features Explained

### 1. **Tab Switching Logic**
```javascript
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        hideAll();
        contents[index].classList.add('active');
        btn.classList.add('active');
    });
});
```

### 2. **Active State Styling**
```css
button.active {
    color: #000;
    border-bottom-color: #000;
    font-weight: 600;
}
```

### 3. **Fade-in Animation**
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 💡 What I Learned

- ✅ DOM manipulation with `querySelector` and `querySelectorAll`
- ✅ Event handling with `addEventListener`
- ✅ Using `classList` API for adding/removing classes
- ✅ Creating smooth CSS animations
- ✅ Building responsive navigation with Flexbox
- ✅ Implementing active state management
- ✅ Mobile-first responsive design
- ✅ CSS card design patterns

## 🎯 Challenges Solved

1. **JavaScript Syntax Error** - Fixed `computedStyleMap.display` to use `classList` API instead
2. **Active State Management** - Implemented proper toggling of active classes for both buttons and content
3. **Content Visibility** - Used class-based approach instead of inline styles for better maintainability
4. **Responsive Layout** - Made tabs stack vertically on mobile devices

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (horizontal tabs)
- **Tablet**: ≤ 768px (adjusted spacing)
- **Mobile**: ≤ 480px (vertical stacked tabs)

## 🌟 Features Showcase

- **Visual Feedback** - Hover effects on tabs
- **Smooth Transitions** - 0.3s ease transitions
- **Card Design** - Professional shadow and border-radius
- **Typography** - Optimized for readability
- **Accessibility** - Semantic HTML and proper alt text

## 👤 Author

**Nishant Singh Shekhawat**
- GitHub: [@vasu101](https://github.com/vasu101)
- LinkedIn: [nshekhawat](https://www.linkedin.com/in/nshekhawat/)
- Email: nishantshekhawat1@gmail.com
