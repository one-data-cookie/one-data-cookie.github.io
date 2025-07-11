/* 
Adapted from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/modeSwitcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

// Utility to update theme toggle symbols
function changeIconSymbol(symbol) {
  const toggle = document.getElementById("theme-toggle-img");
  const mobileToggle = document.getElementById("theme-toggle-img--mobile");
  // Added null checks to prevent errors
  if (toggle) toggle.textContent = symbol;
  if (mobileToggle) mobileToggle.textContent = symbol;
}

// Retrieve theme from sessionStorage
let theme = sessionStorage.getItem('theme');

// Apply theme based on stored value or default to dark
if (theme === "light") {
  document.documentElement.setAttribute('data-theme', 'light');
  changeIconSymbol("●");
} else {
  // Default to dark if no preference or saved theme is dark
  document.documentElement.setAttribute('data-theme', 'dark');
  changeIconSymbol("●");
  sessionStorage.setItem('theme', 'dark');
}

// Function to toggle theme manually
function modeSwitcher() {
  // Get current theme from sessionStorage
  let currentTheme = sessionStorage.getItem('theme');
  let newTheme, iconSymbol;

  if (currentTheme === 'dark') {
    newTheme = 'light';
    iconSymbol = "●";
  } else {
    newTheme = 'dark';
    iconSymbol = "●";
  }

  // Apply the new theme and update symbol
  document.documentElement.setAttribute('data-theme', newTheme);
  changeIconSymbol(iconSymbol);

  // Store the new theme for the current session
  sessionStorage.setItem('theme', newTheme);
}
