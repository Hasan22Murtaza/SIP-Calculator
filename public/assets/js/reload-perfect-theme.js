document.addEventListener("DOMContentLoaded", () => {
	const toggleMobile = document.getElementById("dark-mode-toggle-mobile");
	const toggleDesktop = document.getElementById("dark-mode-toggle-desktop");
	const htmlElement = document.documentElement;
  
	// Clear localStorage on every page load
	localStorage.removeItem("theme");
  
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
  
	// Apply system preference on every reload
	function applySystemPreference() {
	  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	  setTheme(prefersDark);
	}
  
	// Toggle manually (user choice, but not saved)
	function toggleTheme() {
	  setTheme(toggleMobile.checked);
	}
  
	// Detect system preference change in real-time
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
	  setTheme(e.matches);
	});
  
	// Always apply system preference on load
	applySystemPreference();
  
	// Add event listeners to both toggles
	toggleMobile.addEventListener("change", toggleTheme);
	toggleDesktop.addEventListener("change", toggleTheme);
  });
  