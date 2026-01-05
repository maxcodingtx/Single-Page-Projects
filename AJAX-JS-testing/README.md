# AJAX JS Testing

## Overview

This project is a demonstration website that showcases different methods of fetching and parsing data in JavaScript. It provides a hands-on comparison of various HTTP request techniques, including traditional XMLHttpRequest (AJAX), modern Fetch API wrappers, and XML parsing libraries.

## What This Website Does

The website features an interactive interface that allows users to:

- **Fetch text files** using different JavaScript HTTP request methods
- **Parse and display XML data** using multiple parsing approaches
- **Compare implementations** side-by-side to understand the differences between:
  - Classic XMLHttpRequest (AJAX)
  - Modern Ky library (Fetch API wrapper)
  - Fast-XML-Parser library
- **View student data** from XML files with an interactive dropdown selector

The interface includes buttons for each fetching method, allowing users to see how the same data can be retrieved using different technologies and observe the results in real-time.

## Technologies Used

### Core Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Core functionality with modern features

### HTTP Request Libraries

- **XMLHttpRequest (AJAX)** - Traditional approach for asynchronous HTTP requests
- **Ky** (v1.14.1) - Lightweight HTTP client based on the Fetch API, imported via CDN
  - [Ky on GitHub](https://github.com/sindresorhus/ky)
  - Provides a simpler, more modern API than native fetch

### XML Parsing Libraries

- **DOMParser API** - Native browser XML parsing
- **Fast-XML-Parser** (v5.3.2) - High-performance XML to JSON converter, imported via CDN
  - [Fast-XML-Parser on GitHub](https://github.com/NaturalIntelligence/fast-xml-parser)
  - Converts XML to JavaScript objects for easier manipulation

### Development Approach

- **ES6 Modules** - Modern JavaScript module system
- **CDN Imports** - External libraries loaded via jsDelivr CDN
- **Vanilla JavaScript** - No heavy frameworks, pure JavaScript implementation

## Project Structure

```
AJAX-JS-testing/
├── index.html                          # Main HTML file
├── style.css                           # Styling
├── README.md                           # This file
├── data/
│   ├── ajax_info.txt                   # Sample text file for fetching
│   └── student_info.xml                # Sample XML data
└── fetching-scripts/
    ├── ajax/
    │   └── ajax.js                     # XMLHttpRequest implementation
    ├── ky/
    │   ├── fetchViaKy.js               # Ky library fetch functions
    │   └── kyEventListeners.js         # Event handlers for Ky buttons
    └── fast-xml-parser/
        ├── fetchViaFXP.js              # Fast-XML-Parser implementation
        └── fxpEventListeners.js        # Event handlers for FXP buttons
```

## Features

- **Multiple HTTP Request Methods**: Compare traditional AJAX with modern alternatives
- **XML Data Parsing**: Demonstrates different approaches to XML data handling
- **Interactive UI**: Buttons trigger different fetching mechanisms
- **Student Data Display**: Dynamic dropdown selection to view different student records
- **Modular Code**: Organized file structure separating concerns

## Future Goals

### Hosting on Netlify

This project is planned to be hosted on Netlify for public access and demonstration purposes. Netlify deployment will provide:

- **Live Demo**: Allow others to interact with the different fetching methods
- **Easy Sharing**: Simple URL for portfolio and educational purposes
- **Continuous Deployment**: Automatic updates when changes are pushed to the repository
- **Fast Performance**: CDN-backed hosting for optimal load times
- **HTTPS**: Secure connection out of the box

## How to Use Locally

1. Clone or download this project
2. Open `index.html` in a modern web browser
3. Note: Due to CORS policies, you may need to run a local server
4. Navigate to `http://localhost:5500` (or the port shown)
5. Click the various buttons to see different fetching methods in action

---

_Project created for learning and demonstration purposes._
