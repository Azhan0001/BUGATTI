Bugatti Website

An immersive, hyper-realistic Bugatti website featuring WebGL-powered 3D effects, speedometer-inspired UI elements, and premium automotive design aesthetics.

![Bugatti](https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80)

## Features

### Real-Time Rendering & WebGL
- **GPU-accelerated background** with dynamic gradients responding to mouse movement
- **Particle system** creating ambient floating gold particles
- **3D card transforms** with perspective rotation on hover

### Automotive UI Elements
- **Speedometer loading screen** - Animated needle counting 0-440 km/h
- **Scroll speed indicator** - Navigation displays scroll velocity in real-time
- **Interactive performance dashboard**:
  - Main speedometer (0-440 km/h) with animated needle
  - RPM gauge (0-8,000)
  - Boost pressure gauge (0-3 BAR)
  - Temperature gauge
  - Gear indicator (N, 1-7)
- **Animated stat gauges** showing horsepower, acceleration, and top speed

### Animations
- Smooth scroll-triggered reveal animations
- Parallax effects on hero car image
- Glitch text effect on hover
- 3D card tilt following mouse movement
- Timeline pulse animations
- Button shine and glow effects
- Simulated acceleration sequence in dashboard

### Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen Chiron Super Sport showcase with animated stats |
| **Models** | 4 interactive car cards (Chiron, Chiron SS, Bolide, Mistral) |
| **Heritage** | Animated timeline from 1909 to present |
| **Technology** | W16 engine specs with interactive hotspots |
| **Configure** | Car configurator with colors, interiors, and wheels |
| **Footer** | Premium branded footer with Ettore Bugatti quote |

## File Structure

```
bugatti-website/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling (~1,200 lines)
├── script.js       # Interactive JavaScript (~500 lines)
└── README.md       # This file
```

## Quick Start

1. **Clone or download** the files
2. **Open `index.html`** in a modern browser
3. No build process or dependencies required!

```bash
# If using a local server (recommended for WebGL)
python -m http.server 8000
# Then open http://localhost:8000/bugatti-website/
```

## Browser Support

| Browser | Support |
|---------|--------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE11 | ❌ Not supported |

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, grid, flexbox
- **JavaScript ES6+** - Modules, async/await, Intersection Observer
- **WebGL** - GPU-accelerated shaders for background effects
- **SVG** - Scalable vector graphics for gauges and icons
- **Google Fonts** - Orbitron (display) & Rajdhani (body)

## Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --gold: #c9a227;        /* Primary accent */
    --gold-light: #e8c547;  /* Hover states */
    --black: #0a0a0a;       /* Background */
    --white: #ffffff;       /* Text */
}
```

### Car Images
Replace Unsplash URLs in `index.html` with your own images:

```html
<img src="YOUR_IMAGE_URL" alt="Bugatti Chiron">
```

### Configurator Options
Modify color/interior maps in `script.js`:

```javascript
const colorMap = {
    'your-color': { 
        name: 'Your Color Name', 
        color: 'rgba(r, g, b, 0.5)', 
        price: 50000 
    }
};
```

## Performance

- **Lazy loading** for images below the fold
- **Throttled scroll events** for smooth performance
- **GPU-accelerated animations** using `transform` and `opacity`
- **Intersection Observer** for efficient scroll animations
- **WebGL fallback** to CSS if not supported

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `1200px` | Large desktops |
| `992px` | Tablets landscape |
| `768px` | Tablets portrait |
| `480px` | Mobile devices |

## Credits

- **Images**: [Unsplash](https://unsplash.com) (Free high-resolution photos)
- **Fonts**: [Google Fonts](https://fonts.google.com) (Orbitron, Rajdhani)
- **Inspiration**: Official Bugatti website design language

## License

This project is for educational and demonstration purposes. Bugatti is a registered trademark of Bugatti Automobiles S.A.S.

---

**"If comparable, it is no longer Bugatti."** - Ettore Bugatti
