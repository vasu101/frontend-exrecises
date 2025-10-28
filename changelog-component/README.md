# 📋 Changelog Component

A clean, responsive changelog component built with HTML and CSS. This project demonstrates CSS positioning, layout techniques, and timeline design patterns.

<img width="951" height="813" alt="changelog" src="https://github.com/user-attachments/assets/0eabb453-3ba1-4858-92a7-40d6477adee9" />

## 🎯 Project Overview

A changelog component that displays recent updates and changes in a visually appealing timeline format. This project focuses on creating well-structured layouts using CSS Grid, pseudo-elements, and responsive design principles.

## ✨ Features

- **Timeline Design** - Vertical timeline with connected dots
- **Clean Layout** - Three-column grid structure (date | timeline | content)
- **Responsive** - Adapts seamlessly to different screen sizes
- **Semantic HTML** - Proper use of `<time>` elements and semantic markup
- **CSS Positioning** - Advanced use of pseudo-elements for visual effects
- **Hover Effects** - Interactive button with smooth transitions

## 🛠️ Technologies Used

- HTML5
- CSS3
  - CSS Grid
  - Pseudo-elements (::before)
  - Flexbox
  - Media Queries
  - CSS Variables (could be extended)

## 📁 Project Structure

```
changelog-component/
│
├── index.html          # Main HTML structure
├── styles.css          # Component styling
├── README.md          # Project documentation
└── preview.png        # Screenshot (optional)
```

## 🎨 Key CSS Techniques

### 1. **Timeline Line with Pseudo-element**
```css
.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: black;
}
```

### 2. **Three-Column Grid Layout**
```css
.timeline-item {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 40px;
    align-items: center;
}
```

### 3. **Selective Element Hiding**
```css
.timeline-item:first-child .dot,
.timeline-item:last-child .dot {
    display: none;
}
```

## 💡 What I Learned

- ✅ Creating timeline components with CSS
- ✅ Using CSS Grid for complex layouts
- ✅ Positioning elements with pseudo-elements
- ✅ Implementing responsive design patterns
- ✅ Semantic HTML structure with `<time>` elements
- ✅ CSS selectors (`:first-child`, `:last-child`)
- ✅ Z-index layering for overlapping elements

## 🎯 Challenges Faced

1. **Vertical Line Alignment** - Initially struggled with creating a continuous vertical line that connects all dots. Solved using `::before` pseudo-element on the container.

2. **Dot Positioning** - Getting dots to sit exactly on the vertical line required understanding of relative and absolute positioning with z-index.

3. **Content Alignment** - Balancing the three-column layout to make it look professional took several iterations with grid properties.

## 📱 Responsive Design

The component adapts to mobile devices with:
- Reduced padding on smaller screens
- Adjusted gap spacing between columns
- Flexible font sizes
- Mobile-friendly button sizing

```css
@media (max-width: 768px) {
    main {
        padding-left: 20px;
    }
    .timeline-item {
        gap: 20px;
    }
}
```
## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Nishant Singh Shekhawat**
- GitHub: [@vasu101](https://github.com/vasu101)
- LinkedIn: [nshekhawat](https://www.linkedin.com/in/nshekhawat/)
- Email: nishantshekhawat1@gmail.com

## 🙏 Acknowledgments

- Project inspiration from frontend roadmap challenges
- Thanks to the web development community for design patterns and best practices

---

⭐ If you found this project helpful, consider giving it a star!

**Built with 💻 while learning CSS layouts and positioning**
