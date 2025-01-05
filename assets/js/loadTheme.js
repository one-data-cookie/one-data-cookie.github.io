// Get theme synchronously before page render
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefersDarkScheme ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem('theme', theme);
}
