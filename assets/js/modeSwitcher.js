/* 
Adapted from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/modeSwitcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

// Utility to update theme toggle icons
function changeIconImgSrc(src) {
  const img = document.getElementById("theme-toggle-img");
  const mobileImg = document.getElementById("theme-toggle-img--mobile");
  // Added null checks to prevent errors
  if (img) img.src = src;
  if (mobileImg) mobileImg.src = src;
}

// Retrieve theme from sessionStorage
let theme = sessionStorage.getItem('theme');

// Apply theme based on stored value or default to dark
if (theme === "light") {
  document.documentElement.setAttribute('data-theme', 'light');
  changeIconImgSrc("../assets/img/moon.svg");
} else {
  // Default to dark if no preference or saved theme is dark
  document.documentElement.setAttribute('data-theme', 'dark');
  changeIconImgSrc("../assets/img/sun.svg");
  sessionStorage.setItem('theme', 'dark');
}

// Function to toggle theme manually
function modeSwitcher() {
  // Get current theme from sessionStorage
  let currentTheme = sessionStorage.getItem('theme');
  let newTheme, iconSrc;

  if (currentTheme === 'dark') {
    newTheme = 'light';
    iconSrc = "../assets/img/moon.svg";
  } else {
    newTheme = 'dark';
    iconSrc = "../assets/img/sun.svg";
  }

  // Apply the new theme and update icon
  document.documentElement.setAttribute('data-theme', newTheme);
  changeIconImgSrc(iconSrc);

  // Store the new theme for the current session
  sessionStorage.setItem('theme', newTheme);
}
