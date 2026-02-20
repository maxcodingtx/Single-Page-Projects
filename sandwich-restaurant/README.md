# Sandwich Restaurant

A modern, responsive website for a fictional sandwich restaurant hosting a dynamically rendered menu and optimized image loading.

## About The Project

This project is a single-page website that expanded my modern web development practices while keep a vanilla JavaScript approach. The site features a dynamic menu system and progressive image loading.

**Live Demo:** [View Project](your-deployment-url-here)

## features

- **Dynamic Menu System** - Menu items loaded from JSON with expandable/collapsible categories
- **Progressive Image Loading** - LQIP (Low-Quality Image Placeholder) technique for optimized performance
- **Responsive Design** - Fully responsive layout that works on all device sizes
- **Category Organization** - Menu items organized by categories (Classics, Specialty, vegetarian)
- **Popular Item Indicators** - Visual badges highlighting customer favorites
- **Fast Performance** - Lazy loading images with Intersection Observer API (inside lqip.js)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript
- **JSON** - Data-driven menu structure
- **Intersection Observer API** - Efficient lazy loading

## Project Structure

```
sandwich-restaurant/
├── index.html              # Main HTML file
├── style.css               # Core styles and layout
├── theme.css               # Color schemes and theme variables
├── README.md               # Project documentation
├── IMPLEMENTATION-WORKFLOW.md  # Detailed implementation guide
├── data/
│   └── menu.json          # Menu data (items, prices, categories)
├── scripts/
│   ├── renderMenu.js      # Dynamic menu rendering logic
│   └── lqip.js            # Image lazy loading handler
└── img/
    ├── logo.png           # Restaurant logo
    ├── sandwich.png       # Hero image
    ├── location-map.jpg   # Location section image
    └── menu/              # Menu item images and thumbnails
        ├── sandwich1.jpg
        ├── sandwich1-thumb.jpg
        └── ...
```

## Getting Started

### Installation & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sandwich-restaurant.git
   cd sandwich-restaurant
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser

3. **View the site**
   - Directly open the `index.html` file

## Key Implementation Details

### Dynamic Menu Rendering

The menu is generated dynamically from `data/menu.json`, allowing easy updates without touching HTML:

```javascript
// Menu automatically renders on page load
// Categories are expandable/collapsible
// Items include prices, descriptions, and images
```

### Image Optimization

LQIP technique provides better perceived performance:

- Low-quality thumbnails load immediately
- Full-resolution images load as user scrolls
- Smooth blur-to-sharp transition effect
- Uses Intersection Observer for efficient detection

### Customization

**Update Menu Items:**
Edit `data/menu.json` to add/remove items or change prices

**Change Theme Colors:**
Modify CSS custom properties in `theme.css`

**Add New Categories:**
Add category objects to the `categories` array in `menu.json`

## Future Enhancements

Potential features for future development:

- [ ] A cleaner, overhauled design via CSS
- [ ] Online ordering functionality with cart system
- [ ] Filter menu by dietary preferences
- [ ] Customer reviews section
- [ ] Multi-language support

## License

This is a portfolio/learning project. Feel free to use and modify as needed.
