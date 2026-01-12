# CPS Website

## Overview

CPS stands for Clicks Per Second. This is a lightweight static website/game that measures your clicking speed.

**Live Demo**: [https://clicks-per-second-game.netlify.app/](https://clicks-per-second-game.netlify.app/)

## Technologies Used

### Development Approach

- **Modular JavaScript** - Organized file separation by functionality
- **Template Elements** - HTML `<template>` for dynamic list generation
- **Event-Driven Architecture** - Click and selection event handling
- **DOM Manipulation** - Dynamic content updates and class management
- **CSS Variables** - Consistent design system with custom properties
- **Theme Support** - Separate dark theme stylesheet
- **Vanilla JavaScript** - No frameworks, pure JavaScript implementation

## Project Structure

```
cps-website/
├── Index.html                          # Main HTML file
├── README.md                           # This file
├── scripts.js                          # Main game logic (CPS calculation and timer)
├── style.css                           # Primary styling with design system
├── dark-theme.css                      # Dark theme styles
└── scripts/
    ├── activeClassHandling.js          # Selection state management
    ├── createRipple.js                 # Button click visual effects
    ├── handleTimeSelection.js          # Timer countdown logic
    └── timeOptionTemplate.js           # Dynamic time option generation
```

## Features

- **Multiple Time Options**: Choose from various preset time durations
- **Real-time Click Tracking**: See your click count update live
- **Countdown Timer**: Visual feedback showing remaining time
- **CPS Calculation**: Precise clicks-per-second rate (to 2 decimal places)
- **Visual Feedback**: Ripple effects on button clicks
- **Active State Management**: Clear visual indication of selected time
- **Responsive Design**: Works across different screen sizes and devices
- **Theme Support**: Includes dark theme option

## How It Works

### Game Flow

1. **Select Time Duration**: User clicks on one of the preset time options
2. **First Click**: Timer starts automatically on the first button click (if a time is selected)
3. **Click Tracking**: Each subsequent click increments the counter
4. **Countdown**: Timer displays remaining time in real-time
5. **Results**: When the selected time expires, CPS rate is calculated and displayed

### CPS Calculation

```
CPS = Total Clicks ÷ Time Duration (in seconds)
```

For example: 45 clicks in 5 seconds = 9.00 CPS

## How to Use Locally

1. Clone or download this project
2. Open `Index.html` in a modern web browser
3. No build process or server required - runs directly in the browser
4. Select a time duration by clicking one of the time options
5. Click the "Click Here To Begin" button repeatedly
6. View your CPS rate when the timer expires

## Future Improvements

Planned optimizations and enhancements:

- **Code Refactoring**: Optimize CSS and JavaScript for better performance
- **Enhanced Error Handling**: Replace alerts with better UI feedback
- **Score History**: Track and display previous attempts

---

_Project created for learning and demonstration purposes. Initial version was built in June 2024 to focus on JavaScript web-interactivity._
