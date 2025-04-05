document.addEventListener("DOMContentLoaded", () => {
	const toggleMobile = document.getElementById("dark-mode-toggle-mobile");
	const toggleDesktop = document.getElementById("dark-mode-toggle-desktop");
	const htmlElement = document.documentElement;
	let userToggled = false; // Track if user manually changed the theme
  
	// Function to apply theme
	function setTheme(isDark) {
	  if (isDark) {
		htmlElement.classList.add("dark");
		toggleMobile.checked = true;
		toggleDesktop.checked = true;
	  } else {
		htmlElement.classList.remove("dark");
		toggleMobile.checked = false;
		toggleDesktop.checked = false;
	  }
	}
  
	// Initialize theme based on system preference
	function applySystemPreference() {
	  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	  setTheme(prefersDark);
	}
  
	// Toggle function (manual override)
	function toggleTheme() {
	  userToggled = true; // Mark user override
	  const isCurrentlyDark = htmlElement.classList.contains("dark"); // Check current state
	  setTheme(!isCurrentlyDark); // Toggle to opposite theme
	}
  
	// Detect system preference change & update toggle switch
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
	  const isDarkMode = e.matches;
	  setTheme(isDarkMode);
	});
  
	// Apply system preference on load
	applySystemPreference();
  
	// Add event listeners to both toggles
	toggleMobile.addEventListener("change", toggleTheme);
	toggleDesktop.addEventListener("change", toggleTheme);
  });
  
  