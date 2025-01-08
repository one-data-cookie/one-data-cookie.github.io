// Get theme synchronously before page render
const savedTheme = sessionStorage.getItem("theme");
if (savedTheme) {
  // Apply the user's saved preference for this session
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  // No saved preference: default to dark
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("theme", "dark");
}
