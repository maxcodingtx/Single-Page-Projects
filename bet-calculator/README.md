# Bet Calculator

## Overview

This is a lightweight static website that calculates betting winnings and payouts based on stake amounts and odds. The project demonstrates practical implementation of JavaScript validation, regex patterns, and high-precision decimal calculations for financial computations.

**Live Demo**: [https://maxcodingtx-bet-calculator.netlify.app/](https://maxcodingtx-bet-calculator.netlify.app/)

## What This Website Does

The bet calculator provides an interactive interface that allows users to:

- **Input stake amounts** using either text input or an interactive slider
- **Enter odds** in two different formats:
  - American odds (e.g., +150, -200)
  - Decimal odds (e.g., 2.5, 1.75)
- **Calculate winnings** with precise decimal arithmetic
- **View total payout** including the original stake
- **Real-time validation** with helpful error messages
- **Synchronized inputs** between the stake slider and number input

The calculator supports both positive and negative American odds, automatically detecting which format is being used and performing the appropriate calculation.

## Technologies Used

### Core Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Styling and layout with separate error styling
- **JavaScript (ES6+)** - Core functionality with modern features

### JavaScript Libraries

- **JustValidate** (v4.3.0) - Form validation library, imported via CDN
  - [JustValidate on GitHub](https://github.com/horprogs/Just-validate)
  - Provides real-time input validation with custom rules
  - Regex pattern validation for American odds format
- **Decimal.js** (v10.4.3) - Arbitrary-precision decimal arithmetic library, imported via CDN
  - [Decimal.js on GitHub](https://github.com/MikeMcl/decimal.js/)
  - Ensures accurate financial calculations without floating-point errors

### Development Approach

- **ES6 Modules** - Modern JavaScript module system
- **CDN Imports** - External libraries loaded via jsDelivr CDN
- **Vanilla JavaScript** - No heavy frameworks, pure JavaScript implementation
- **Regex Validation** - Custom regular expressions for odds format validation
- **Modular Code Structure** - Organized file separation by functionality

## Project Structure

```
bet-calculator/
├── index.html                          # Main HTML file
├── README.md                           # This file
├── css/
│   ├── main-styles.css                 # Primary styling
│   └── error-styles.css                # Error message styling
└── scripts/
    ├── stakeRange.js                   # Slider and input synchronization
    ├── earnings/
    │   ├── calculateEarnings.js        # Winnings calculation logic
    │   └── validateEarnings.js         # Earnings validation
    └── validation/
        └── stakeForm.js                # Form validation with JustValidate
```

## Features

- **Dual Odds Format Support**: Works with both American and Decimal odds
- **Interactive Slider**: Visual stake amount selection (range: $1-$500)
- **Real-time Validation**: Instant feedback on invalid inputs
- **Precise Calculations**: Uses Decimal.js to avoid floating-point errors
- **Regex Validation**: Custom patterns for American odds format (e.g., +100, -150)
- **Error Handling**: Dedicated error containers with clear messaging
- **Responsive Design**: Works across different screen sizes
- **Synchronized Controls**: Slider and input field stay in sync

## How It Works

### American Odds Calculation

- **Positive odds** (e.g., +150): Winnings = (Stake / 100) × Odds
- **Negative odds** (e.g., -200): Winnings = (100 / Odds) \* Stake

### Decimal Odds Calculation

- Winnings = (Stake × Decimal Odds) - Stake

### Total Payout

- Total Payout = Winnings + Original Stake

## Validation Rules

### Stake Input

- Required field
- Minimum value: $1
- Accepts decimal values (e.g., $25.50)

### American Odds

- Must start with + or - sign
- Format: `^[+\-][1-9]\d+$`
- Minimum 4 characters (e.g., +100)
- Either American or Decimal odds must be provided

### Decimal Odds

- Accepts decimal numbers
- Either American or Decimal odds must be provided

## Learning Objectives

This project demonstrates:

- Working with regular expressions (regex) for input validation
- High-precision decimal arithmetic for financial calculations
- Form validation with external libraries
- Modular JavaScript architecture
- Event handling and DOM manipulation
- Synchronization between different input types
- Real-time user feedback and error handling

## How to Use Locally

1. Clone or download this project
2. Open `index.html` in a modern web browser
3. No build process or server required - runs directly in the browser
4. Enter a stake amount (or use the slider)
5. Input either American or Decimal odds
6. Click "Calculate" to see your potential winnings and total payout

## Browser Compatibility

This project uses modern JavaScript features and requires a current browser with support for:

- ES6 Modules
- Modern CSS features
- Decimal.js and JustValidate libraries

Recommended browsers: Chrome, Firefox, Safari, or Edge (latest versions)

---

_Project created for learning and demonstration purposes._
