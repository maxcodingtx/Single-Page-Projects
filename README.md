# Simple HTML Template

This repository contains a very simple HTML template that can be used for your web projects and/or website.

## Features
- Basic HTML structure
- Simple CSS styling (Split into two files)
- Basic JavaScript setup
- Easy to customize


## File Structure
simple-html-template/
│
├── index.html        # The main HTML file 
├── styles.css        # The main CSS file
├── themes.css        # CSS file dealing with theme colors
└── scripts.js        # The main JavaScript file

index.html: This file contains the basic HTML structure, including one header, main, and footer sections.
styles.css: This file contains simple CSS styles that define the layout and appearance of the HTML elements.
Themes.css: This file contains the theme colors for the HTML sections.
script.js: This file is intended for adding basic JavaScript functionality.


## Customization
Comments are in HTML file to help guide you to elements that you may want to change.

HTML - You may modify the following:

-h1 element under 'header'
-Button (tab) names
  *in order to do so, you will also have to change:
    **2nd arg in openTab function js function
    **id's of divs under <main> tag
      *** ^both have to be the same
-What content is shown by default
  *move the 'homeLink' id to the button which will display your desired default content
-You may get rid of the footer, as long as you show my email (to give credit) another way.


CSS - You may modify the following:
	-The theme color of any selector within the themes.css file
	-Not recommended to change styles within styles.css file, but you may
	
