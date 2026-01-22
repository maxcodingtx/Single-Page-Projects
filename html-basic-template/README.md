# Modern HTML Template

An HTML starter template kit with "bread & butter" practices and dark mode support.

## Features

- **Complete SEO Setup** - Meta tags for search engines and social media sharing
- **Modern CSS Design System** - CSS variables for colors, spacing, typography, and shadows
- **Automatic Dark Mode** - Respects user's system preference
- **PWA-Ready** - Web manifest and icons included
- **Accessible** - Semantic HTML5 and ARIA attributes
- **Tab System** - Built-in navigation with smooth animations

---

## Quick Start

1. **Copy this template folder** to start your new project
2. **Open `index.html`** and customize the content
3. **Modify colors** in `themes.css` to match your brand
4. **Add your content** to the tab panels
5. **Replace placeholder images** (favicons and og-image.png)
6. **Deploy** to your hosting platform

---

## 📁 File Structure

```
html-basic-template/
│
├── index.html           # Main HTML file with complete meta tags
├── styles.css           # Layout and component styles
├── themes.css           # CSS variables and color themes
├── scripts.js           # Tab navigation functionality
│
├── manifest.json        # PWA configuration
├── favicon.ico          # Browser favicon (32x32)
├── favicon-192.png      # Android icon (192x192)
├── favicon-512.png      # Android icon (512x512)
├── apple-touch-icon.png # iOS home screen icon (180x180)
└── og-image.png         # Social media preview image (1200x630)
```

---

## Customizing CSS variables

All colors, spacing, and typography are controlled by CSS variables in `themes.css`. This makes it easy to customize the entire design from one place.

### Changing Colors

Open `themes.css` and modify the `:root` section:

```css
:root {
  /* Change primary colors */
  --color-primary: #2c3e50; /* Main brand color */
  --color-accent: #3498db; /* Accent/link color */
  --color-secondary: #16a085; /* Secondary actions */

  /* Background colors */
  --color-background: #f8f9fa; /* Page background */
  --color-surface: #ffffff; /* Card/panel background */
}
```

### Understanding Spacing Scale

The template uses a consistent spacing scale for margins and padding:

- `--spacing-xs`: 4px (tiny gaps)
- `--spacing-sm`: 8px (small spacing)
- `--spacing-md`: 16px (default spacing)
- `--spacing-lg`: 24px (section spacing)
- `--spacing-xl`: 32px (large spacing)
- `--spacing-2xl`: 48px (extra large)
- `--spacing-3xl`: 64px (major sections)

### Typography Scale

Font sizes are also defined as variables:

- `--text-xs` through `--text-5xl` (12px to 48px)
- Use these instead of hardcoded pixel values for consistency

### Dark Mode

Dark mode automatically activates based on the user's system settings. To customize dark mode colors, modify the `@media (prefers-color-scheme: dark)` section in `themes.css`.

---

## Pre-Deployment Customization Checklist

Before deploying your website, make sure to customize these items:

### In `index.html`:

- **Page Title** - Line 8: Replace "Your Page Title - Replace This"
- **Meta Description** - Line 10: Add your site description (150-160 characters)
- **Meta Keywords** - Line 13: Add relevant keywords
- **Author Name** - Line 14: Add your name
- **Canonical URL** - Line 17: Add your actual website URL
- **Open Graph Tags** - Lines 20-28: Update for social media sharing
- **Twitter Card Tags** - Lines 31-42: Update for Twitter previews
- **Theme Color** - Line 50: Change hex color to match your brand
- **Site Heading** - Line 73: Replace "website" with your site name
- **Tab Labels** - Lines 77-98: Customize navigation button text
- **Content Sections** - Lines 104-147: Add your actual content
- **Footer Text** - Line 151: Update copyright and footer content

### Images to Replace:

- **favicon.ico** - Your 32x32 favicon
- **favicon-192.png** - Your 192x192 icon
- **favicon-512.png** - Your 512x512 icon
- **apple-touch-icon.png** - Your 180x180 iOS icon
- **og-image.png** - Your 1200x630 social preview image

### In `manifest.json`:

- **name** - Your full app/site name
- **short_name** - Short version (12 characters or less)
- **description** - Brief description of your site
- **theme_color** & **background_color** - Match your brand colors

### In `themes.css`:

- **Color Variables** - Customize all color variables to match your brand
- **Font Family** - Line 16 in `styles.css` if you want different fonts

---

**Benefits:**

- Clear relationship between HTML and CSS
- No naming conflicts
- Easy to understand at a glance

---

## Adding New Content Sections

To add a new tab and content panel:

1. **Add a navigation button** in the `<nav>`:

```html
<button
  class="header__nav-tab"
  onclick="openTab(event, 'NewTab')"
  aria-controls="NewTab"
>
  New Tab
</button>
```

2. **Add the content section** in `<main>`:

```html
<section id="NewTab" class="tab-panel" role="tabpanel">
  <h1 class="tab-panel__title">New Section</h1>
  <hr class="tab-panel__divider" />
  <p class="tab-panel__content">Your content here</p>
</section>
```

The JavaScript in `scripts.js` will automatically handle the tab switching!

---

## Responsive Breakpoints

The template includes responsive design with these breakpoints:

- **Desktop**: Default styles (above 768px)
- **Tablet**: `@media (max-width: 768px)`
- **Mobile**: `@media (max-width: 480px)`

Layouts automatically adjust for smaller screens.

## Included Font

This template uses **Google Fonts (SUSE)**. To change the font:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your desired font
3. Replace the `<link>` tags in `<head>` (lines 58-63)
4. Update `font-family` in `styles.css` (line 16)

---

## 💡 Tips for Beginners

- **Start small**: Customize one section at a time
- **Use browser DevTools**: Right-click → Inspect to see CSS in action
- **Keep backups**: Save a copy before making major changes
- **Test responsive**: Use browser DevTools device toolbar to test mobile views
- **Validate**: Use [W3C Validator](https://validator.w3.org/) to check your HTML

---

## What's Included vs What's Optional

### Included & Ready to Use:

- Complete HTML structure
- Modern CSS with variables
- Tab navigation system
- Dark mode support
- Responsive design
- Accessibility features
- PWA manifest

### Not Included (You can add if needed):

- JavaScript frameworks
- CSS preprocessors
- Build tools
- Backend functionality
- Form handling
- Database integration

---

## Deployment

This template works with any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repo and enable Pages
- **Surge**: Run `surge` command in the folder

No build process required - just upload the files!

---

## License

Feel free to use this template for personal or commercial projects. No attribution required.

---
