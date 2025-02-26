# WebProject_01
HTML/CSS/Javascript Project - 웹사이트 갤러리 만들기
# Personal Portfolio Website

A responsive personal portfolio website showcasing my background, interests, and projects. Built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Optimized for various screen sizes
- **Interactive Navigation**: Smooth scrolling with active section indicators
- **Project Showcase**: Gallery of my development projects with descriptions
- **Image Gallery**: Interactive image viewing with popup descriptions
- **Dynamic UI Elements**: Intersection Observer API for scroll-based animations and navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for content structure
- **CSS3**: Custom styling with flexbox layouts
- **JavaScript**: 
  - Intersection Observer API for scroll detection
  - DOM manipulation for interactive elements
  - Event handling for user interactions

## 📁 Project Structure

```
/
├── index.html (self-introduction.html)
├── project.html
├── script.js
├── imgs/
│   ├── me1.jpg
│   ├── challenger.JPEG
│   ├── univ1.jpg
│   ├── sports1.jpg
│   ├── singing1.jpg
│   ├── github.png
│   ├── tistory.png
│   └── favicon.png
└── README.md
```

## 📱 Pages

### Home Page
- Personal introduction with interactive highlight elements
- Sections showcasing various aspects of my life:
  - Gaming interests
  - Academic background
  - Sports activities
  - Singing experiences
- Side navigation with emoji indicators for current section
- Image popups with descriptive captions

### Projects Page
- Showcase of development projects
- Interactive project cards with GIF previews
- Links to project demos

## ✨ Implementation Highlights

### Intersection Observer API
Implemented to detect which section is currently visible in the viewport, automatically updating the navigation indicators.

```javascript
const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));
```

### Interactive Image Gallery
Created a custom popup gallery with detailed descriptions for each image.

```javascript
document.querySelectorAll('.about img').forEach(img => {
  img.addEventListener('click', function() {
    // Popup implementation logic
  });
});
```

### Dynamic Navigation Visibility
Navigation elements appear or disappear based on scroll position.

## 🚀 Future Enhancements

- Minimize plainness caused by blank space
- Implement more interactive project demonstrations
- Upgrade to more attractive design
- Improve accessibility features
- Add more animation effects

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- GitHub: [rnsjrlgus](https://github.com/rnsjrlgus)
- Email: rlgus1114@gmail.com
