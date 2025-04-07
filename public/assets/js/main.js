/* ====== mobile menu ========*/
burger = document.querySelector(".burg");
$(document).ready(function () {
  $("#toggle-button").click(function () {
    $("nav").toggleClass("nav-open");
    $("#toggle-menu").toggleClass("-translate-y-[200%] ");
  });
});

/* ====== toggle dark ======== */
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
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark);
  }

  // Toggle function (manual override)
  function toggleTheme() {
    userToggled = true; // Mark user override
    const isCurrentlyDark = htmlElement.classList.contains("dark"); // Check current state
    setTheme(!isCurrentlyDark); // Toggle to opposite theme
  }

  // Detect system preference change & update toggle switch
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const isDarkMode = e.matches;
      setTheme(isDarkMode);
    });

  // Apply system preference on load
  applySystemPreference();

  // Add event listeners to both toggles
  toggleMobile.addEventListener("change", toggleTheme);
  toggleDesktop.addEventListener("change", toggleTheme);
});

// =============== Tabs ========================
document.querySelectorAll(".tabs-container").forEach(function (tabsContainer) {
  // Get all tab togglers inside the current tab container
  let tabTogglers = tabsContainer.querySelectorAll(".tab-toggler");
  let tabContents = tabsContainer.querySelector(".tab-contents");
  tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
      // Get the tab name (the href attribute in the link)
      let tabName = this.getAttribute("href");
      // Loop through all the tab content elements
      for (let i = 0; i < tabContents.children.length; i++) {
        // Remove the active classes from both the tab togglers and the content
        tabTogglers[i].parentElement.classList.remove("active");
        tabContents.children[i].classList.add("hidden");
        // If this tab is the one to be shown, show it and add active classes to the toggler
        if ("#" + tabContents.children[i].id === tabName) {
          tabContents.children[i].classList.remove("hidden");
          tabTogglers[i].parentElement.classList.add("active");
        }
      }
    });
  });
});

/*=======range slider=========*/
$(document).ready(function () {
  // Initialize the range slider
  $("#investslider").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the "rs" prefix
      $("#sliderInput").val("₹" + value.toLocaleString());
    },
  });
  // Initialize the range slider
  $("#investslider1").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the "rs" prefix
      $("#sliderInput1").val("₹" + value.toLocaleString());
    },
  });
});

$(document).ready(function () {
  // Initialize the range slider
  $("#returnslider").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the value followed by ₹ symbol
      $("#returnInput").val(value.toLocaleString() + " %");
    },
  });
  $("#returnslider1").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the value followed by ₹ symbol
      $("#returnInput1").val(value.toLocaleString() + " %");
    },
  });
});
$(document).ready(function () {
  // Initialize the range slider
  $("#yearslider").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the value followed by ₹ symbol
      $("#yearInput").val(value.toLocaleString());
    },
  });
  $("#yearslider1").rangeslider({
    polyfill: false,
    onSlide: function (position, value) {
      // Update the input field with the value followed by ₹ symbol
      $("#yearInput1").val(value.toLocaleString());
    },
  });
});

// var options = {
//   series: [35, 65],
//   chart: {
//     width: 370,
//     type: "donut",
//     events: {
//       render: function () {
//         // Forcefully remove stroke after the chart is rendered
//         setTimeout(function () {
//           // Use querySelectorAll to get each slice's path element
//           document
//             .querySelectorAll(".apexcharts-slices .apexcharts-series path")
//             .forEach(function (path) {
//               path.style.stroke = "none"; // Remove stroke
//               path.style.strokeWidth = "0"; // Set stroke width to 0
//             });
//         }, 100); // Small delay to make sure the chart rendering is complete
//       },
//     },
//   },

//   plotOptions: {
//     pie: {
//       startAngle: -90,
//       endAngle: 270,
//       donut: {
//         size: "80%", // Adjust the donut thickness
//       },
//       stroke: {
//         show: false, // Disable stroke for pie slices
//       },
//     },
//   },

//   dataLabels: {
//     enabled: false, // Disable data labels
//   },

//   // Color configuration for each slice
//   colors: [
//     "#159D2C", // First slice color
//     "#0045D3", // Second slice color
//   ],

//   fill: {
//     type: "gradient",
//     gradient: {
//       type: "linear", // Gradient direction
//       shadeIntensity: 1,
//       gradientToColors: ["#0045D3"], // Gradient ends with #0045D3
//       stops: [0, 100], // Gradient stops
//       opacityFrom: 1, // Full opacity for the start color
//       opacityTo: 1, // Full opacity for the end color
//     },
//   },

//   legend: {
//     show: false, // Hide the legend
//   },

//   title: {
//     text: "",
//   },

//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 350,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

/*============checked box checked input show js==================*/
function myFunction() {
  // Get all checkboxes with the class "checkbox-1"
  var checkBoxes = document.getElementsByClassName("checkbox-1");
  // Get all elements with the class "checkbox-1-input"
  var textFields = document.getElementsByClassName("checkbox-1-input");

  // Loop through all checkboxes to check if they are checked
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked == true) {
      // Toggle the "hidden" class on the corresponding input field
      textFields[i].classList.remove("hidden");
    } else {
      // Toggle the "hidden" class on the corresponding input field
      textFields[i].classList.add("hidden");
    }
  }
}
