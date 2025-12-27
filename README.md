# Rishabh Jain - Portfolio Website

A modern, interactive portfolio website built with plain HTML, CSS, JavaScript, and Three.js.

## Features

- ✨ Interactive 3D background with Three.js
- 🎨 Custom cursor effects
- 📱 Fully responsive design
- 🌙 Dark theme with gradient accents
- ⚡ Fast and lightweight
- 🎯 Smooth animations and transitions
- 🖼️ Custom profile picture with animated border
- 📝 No dependencies except Three.js

## Getting Started

### Setup Instructions

1. **Extract the files** to a folder
2. **Add your profile picture:**
   - Place your profile photo in the same folder as `index.html`
   - Name it `profile.jpg` (or update the name in `index.html`)
   - Recommended size: 500x500px or larger (square aspect ratio)
   - Supported formats: JPG, PNG, WebP

3. **Open the portfolio:**
   - Simply double-click `index.html` to open in browser
   - OR use a local server (recommended for best performance)

### Using a Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx serve
```

Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` (or the port shown).

## File Structure

```
portfolio/
├── index.html       # Main HTML file
├── styles.css       # All CSS styles
├── script.js        # JavaScript & Three.js animations
├── profile.jpg      # Your profile picture (add this)
└── README.md        # This file
```

## Customization

### 1. Update Profile Picture

Replace `profile.jpg` with your own photo. If you use a different filename:

Open `index.html` and update line with:
```html
<img src="your-photo-name.jpg" alt="Your Name" class="hero-profile-image" id="profile-image">
```

**Note:** If the image fails to load, it will automatically show a fallback avatar with your initials "RJ".

### 2. Change Initials (Fallback Avatar)

In `index.html`, find:
```html
<div class="hero-avatar-fallback" id="avatar-fallback">RJ</div>
```
Change "RJ" to your initials.

### 3. Update Personal Information

Open `index.html` and modify:
- Name, title, and description in the hero section
- Contact information (phone, email, LinkedIn)
- Experience cards
- Project cards
- Skills tags
- Education details

### 4. Change Colors

Open `styles.css` and modify the color variables:
- Primary color: `#06b6d4` (cyan)
- Secondary color: `#3b82f6` (blue)
- Background: `#020617`, `#0f172a` (dark blues)
- Text: `#f1f5f9`, `#cbd5e1`, `#94a3b8` (grays)

### 5. Modify Animations

Open `script.js` to adjust:
- Three.js symbols and their behavior
- Particle count and speed
- Camera movement sensitivity
- Profile ring animation speed

## Profile Picture Guidelines

For best results, your profile picture should:
- ✅ Be square (1:1 aspect ratio)
- ✅ Be at least 500x500 pixels
- ✅ Have good lighting
- ✅ Be centered on your face
- ✅ Have a clean background (or use a photo editor to remove it)
- ✅ Be in JPG, PNG, or WebP format

## Technologies Used

- HTML5
- CSS3 (with custom animations and gradients)
- JavaScript (ES6+)
- Three.js (for 3D background)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

The portfolio is optimized for performance:
- Lightweight (~12KB HTML + ~18KB CSS + ~5KB JS)
- Uses Three.js CDN (cached by browsers)
- Hardware-accelerated animations
- Minimal DOM manipulation
- Optimized image loading with fallback

## Troubleshooting

### Profile picture not showing?
- Make sure the image is in the same folder as `index.html`
- Check that the filename matches exactly (case-sensitive)
- Try using a different image format
- The fallback avatar will show if the image fails to load

### Three.js animations not working?
- Use a local server instead of opening the file directly
- Check browser console for errors
- Make sure you have internet connection (Three.js loads from CDN)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Rishabh Jain
- Email: rishabhijain.veca@gmail.com
- LinkedIn: [linkedin.com/in/rishabh-jain-a8176107](https://www.linkedin.com/in/rishabh-jain-a8176107)
