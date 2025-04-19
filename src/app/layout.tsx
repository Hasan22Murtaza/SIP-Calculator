"use client";

import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Range } from "react-range";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [bgCss, setBgCss] = useState("");

  const MIN = 5000;
  const MAX = 50000;
  const STEP = 100;

  const MIN_INS = 10000;
  const MAX_INS = 1000000;
  const STEP_INS = 10000;

  const MIN_RATE = 0;
  const MAX_RATE = 30;
  const STEP_RATE = 0.5;

  const MIN_YEAR = 1;
  const MAX_YEAR = 30;
  const STEP_YEAR = 1;

  // State for SIP calculator
  const [investment, setInvestment] = useState(11500);
  const [rate, setRate] = useState(20);
  const [years, setYears] = useState(10);
  const [isStepUpChecked, setIsStepUpChecked] = useState(false);
  const [stepUpValue, setStepUpValue] = useState(0);
  const [inflationChecked, setInflationChecked] = useState(false);
  const [inflationValue, setInflationValue] = useState(0);

  // State for Lump Sum calculator
  const [lumpSumInvestment, setLumpSumInvestment] = useState(500000);
  const [lumpSumRate, setLumpSumRate] = useState(12);
  const [lumpSumYears, setLumpSumYears] = useState(10);

  // Results
  const [sipInvestedAmount, setSipInvestedAmount] = useState(0);
  const [sipEstimatedReturns, setSipEstimatedReturns] = useState(0);
  const [sipMaturityAmount, setSipMaturityAmount] = useState(0);

  const [lumpSumEstimatedReturns, setLumpSumEstimatedReturns] = useState(0);
  const [lumpSumMaturityAmount, setLumpSumMaturityAmount] = useState(0);

  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance: any = useRef(null);
  const sliderRefs = useRef([]);
  const [activeTab, setActiveTab] = useState("sip");

  const updateSliderValue = (slider: any, value: any) => {
    slider.style.setProperty("--slider-value", value);
  };

  useEffect(() => {
    // Initialize each slider value at page load
    sliderRefs.current.forEach((slider: any) => {
      if (slider) {
        updateSliderValue(slider, slider.value);
      }
    });
  }, []);

  const handleInputChange = (event: any) => {
    const slider = event.target;
    const value = slider.value;
    updateSliderValue(slider, value);
  };

  // Function to switch tabs
  const switchTab = (tab: any) => {
    setActiveTab(tab);
  };

  // Handlers for SIP inputs
  const handleStepUpChange = (event: any) => {
    setIsStepUpChecked(event.target.checked);
  };

  const handleStepUpValueChange = (event: any) => {
    setStepUpValue(Number.parseInt(event.target.value) || 0);
  };

  const handleInflationChange = (event: any) => {
    setInflationChecked(event.target.checked);
  };

  const handleInflationValueChange = (event: any) => {
    setInflationValue(Number.parseInt(event.target.value) || 0);
  };

  // Function to calculate SIP maturity amount
  const calculateSIP = () => {
    let totalInvestment = 0;
    let maturityAmount = 0;
    let monthlyInvestment = investment;
    const monthlyRate = rate / 12 / 100;

    for (let i = 1; i <= years * 12; i++) {
      totalInvestment += monthlyInvestment;

      // Calculate amount for this month's investment at maturity
      const monthsRemaining = years * 12 - i + 1;
      const futureValue =
        monthlyInvestment * Math.pow(1 + monthlyRate, monthsRemaining);
      maturityAmount += futureValue;

      // Apply step-up annually (every 12 months)
      if (isStepUpChecked && i % 12 === 0) {
        monthlyInvestment += (monthlyInvestment * stepUpValue) / 100;
      }

      // Apply inflation adjustment annually
      if (inflationChecked && i % 12 === 0) {
        monthlyInvestment = monthlyInvestment * (1 - inflationValue / 100);
      }
    }

    setSipInvestedAmount(totalInvestment);
    setSipMaturityAmount(maturityAmount);
    setSipEstimatedReturns(maturityAmount - totalInvestment);
  };

  // Function to calculate Lump Sum maturity amount
  const calculateLumpSum = () => {
    const maturityAmount =
      lumpSumInvestment * Math.pow(1 + lumpSumRate / 100, lumpSumYears);
    setLumpSumMaturityAmount(maturityAmount);
    setLumpSumEstimatedReturns(maturityAmount - lumpSumInvestment);
  };

  // Calculate on input change
  useEffect(() => {
    calculateSIP();
  }, [
    investment,
    rate,
    years,
    isStepUpChecked,
    stepUpValue,
    inflationChecked,
    inflationValue,
  ]);

  useEffect(() => {
    calculateLumpSum();
  }, [lumpSumInvestment, lumpSumRate, lumpSumYears]);

  // Initialize ApexCharts
  useEffect(() => {
    if (typeof window === "undefined" || !chartRef.current) return;

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    // Determine which values to use based on active tab
    const investedAmount =
      activeTab === "sip" ? sipInvestedAmount : lumpSumInvestment;
    const estimatedReturns =
      activeTab === "sip" ? sipEstimatedReturns : lumpSumEstimatedReturns;

    const options = {
      series: [investedAmount, estimatedReturns],
      labels: ["Investment Amount", "Est. Returns Amount"],
      chart: {
        width: 370,
        type: "donut",
      },
      colors: ["#0045D3", "#159D2C"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
          },
        },
      },
      stroke: {
        width: 0,
      },
    };

    // Create new chart
    // import("apexcharts").then((ApexChartsModule) => {
    //   const ApexCharts = ApexChartsModule.default;
    //   chartInstance.current = new ApexCharts(chartRef.current, options);
    //   chartInstance.current.render();
    // });

    import("apexcharts").then((ApexChartsModule) => {
      const ApexCharts = ApexChartsModule.default;
      chartInstance.current = new ApexCharts(chartRef.current, options);
      chartInstance.current.render().then(() => {
        // 👇 Cleanup duplicate chart canvases after render
        const allCharts: any = document.querySelectorAll(".apexcharts-canvas");
        if (allCharts.length > 1) {
          allCharts[0].style.display = "none";
          // for (let i = 1; i < allCharts.length; i++) {
          //   allCharts[i].style.display = "none";
          // }
        }
      });
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [
    activeTab,
    sipInvestedAmount,
    sipEstimatedReturns,
    lumpSumInvestment,
    lumpSumEstimatedReturns,
  ]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // Select all elements that have the 'apexcharts-canvas' class
  //     const elements: any = document.querySelectorAll(".apexcharts-canvas");
  //     console.log(elements);

  //     if (elements.length > 1) {
  //       for (let i = 1; i < elements.length; i++) {
  //         elements[i].style.display = "none";
  //       }
  //     }
  //   }, 100); // Adjust if needed

  //   return () => clearTimeout(timeout);
  // }, []);

  // Format currency
  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const updateRangeCss = () => {
    alert();
  };

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Function to toggle between light and dark mode
      const toggleThemeLayout = (dark: any) => {
        if (dark) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          localStorage.setItem("theme", "dark");
          setCurrentTheme("Dark");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          setCurrentTheme("Light");
        }
      };

      // Initialize theme based on localStorage or system preference
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme) {
        toggleThemeLayout(savedTheme === "dark");
      } else {
        toggleThemeLayout(prefersDark);
      }

      // Set up event listeners for theme toggle buttons
      const setupThemeToggleListeners = () => {
        const mobileToggle: any = document.getElementById(
          "dark-mode-toggle-mobile"
        );
        const desktopToggle: any = document.getElementById(
          "dark-mode-toggle-desktop"
        );

        if (mobileToggle) {
          mobileToggle.checked =
            document.documentElement.classList.contains("dark");
          mobileToggle.addEventListener("change", (e: any) => {
            toggleThemeLayout(e.target.checked);
            if (desktopToggle) desktopToggle.checked = e.target.checked;
          });
        }

        if (desktopToggle) {
          desktopToggle.checked =
            document.documentElement.classList.contains("dark");
          desktopToggle.addEventListener("change", (e: any) => {
            toggleThemeLayout(e.target.checked);
            if (mobileToggle) mobileToggle.checked = e.target.checked;
          });
        }
      };

      // Set up the listeners after a short delay to ensure DOM is ready
      setTimeout(setupThemeToggleListeners, 100);
    }
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setBgCss(currentTheme == "Dark" ? "#020b1e !important" : "#fff !important");
    console.log(bgCss, " - BG CSS");
  }, [currentTheme]);

  const percentage = ((investment - MIN) / (MAX - MIN)) * 100;
  const lumpInsPercentage =
    ((lumpSumInvestment - MIN_INS) / (MAX_INS - MIN_INS)) * 100;
  const ratePercentage = ((rate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;
  const lumpRatePercentage =
    ((lumpSumRate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;
  const yearPercentage = ((years - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
  const lumpYearPercentage =
    ((lumpSumYears - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;

  return (
    <>
      <html lang="en" className="dark">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>SIP Calculator</title>
          {/* css links */}

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          /> */}
           <link
              rel="preload"
              as="style"
              href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
              onLoad={(e) => {
                const link = e.target as HTMLLinkElement
                link.rel = 'stylesheet'
              }}
            />
            <noscript>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
              />
            </noscript>

          {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/rangeslider.js/dist/rangeslider.css"
          /> */}
          {/* <link rel="stylesheet" href="assets/css/apexcharts.min.css" /> */}
          <link rel="stylesheet" href="assets/css/style.css" />
        </head>
        <body>
          <div className="bg-[#F4F4F4] dark:bg-[#08193c]">
            {/* navbar start  */}
            <nav className="fixed z-[1020] w-full bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b] flex justify-between py-5  items-center transition-all duration-200">
              <div className=" w-full mx-auto  px-3 max-w-6xl">
                <div className="flex justify-start items-center">
                  {/* <button
                    id="toggle-button"
                    className=" relative z-10  mr-2 w-8 h-8 block lg:hidden"
                    onClick={toggleMenu}
                  >
                    <div className="flex flex-col gap-[5px]">
                      <span className="w-[20px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                      <span className="w-[10px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                      <span className="w-[20px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                    </div>
                  </button> */}

                  <button
                    id="toggle-button"
                    onClick={toggleMenu}
                    className="relative z-10 mr-2 w-8 h-8 block lg:hidden"
                  >
                    {menuOpen ? (
                      // Close (X) Icon
                      <div className="flex items-center justify-center w-8 h-8">
                        <span className="block w-5 h-0.5 bg-[#020B1E] dark:bg-white rotate-45 absolute"></span>
                        <span className="block w-5 h-0.5 bg-[#020B1E] dark:bg-white -rotate-45 absolute"></span>
                      </div>
                    ) : (
                      // Hamburger Icon
                      <div className="flex flex-col gap-[5px]">
                        <span className="w-[20px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                        <span className="w-[10px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                        <span className="w-[20px] h-[2px] bg-[#020B1E] dark:bg-white nav-line" />
                      </div>
                    )}
                  </button>
                  <a
                    href="#"
                    className="dark:text-white text-black relative z-10  inline-block  lg:mr-8 leading-normal whitespace-nowrap "
                  >
                    <svg
                      className="lg:max-w-max max-w-[140px]  "
                      width={217}
                      height={50}
                      viewBox="0 0 217 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.3928 20.424C66.2808 20.312 66.0728 20.16 65.7688 19.968C65.4808 19.776 65.1208 19.592 64.6888 19.416C64.2728 19.24 63.8168 19.088 63.3208 18.96C62.8248 18.816 62.3208 18.744 61.8088 18.744C60.9128 18.744 60.2328 18.912 59.7688 19.248C59.3208 19.584 59.0968 20.056 59.0968 20.664C59.0968 21.128 59.2408 21.496 59.5288 21.768C59.8168 22.04 60.2488 22.272 60.8248 22.464C61.4008 22.656 62.1208 22.864 62.9848 23.088C64.1048 23.36 65.0728 23.696 65.8888 24.096C66.7208 24.48 67.3528 24.992 67.7848 25.632C68.2328 26.256 68.4568 27.088 68.4568 28.128C68.4568 29.04 68.2888 29.824 67.9528 30.48C67.6168 31.12 67.1528 31.64 66.5608 32.04C65.9688 32.44 65.2968 32.736 64.5448 32.928C63.7928 33.104 62.9928 33.192 62.1448 33.192C61.2968 33.192 60.4488 33.104 59.6008 32.928C58.7528 32.752 57.9368 32.504 57.1528 32.184C56.3688 31.848 55.6488 31.448 54.9928 30.984L56.4568 28.128C56.6008 28.272 56.8568 28.464 57.2248 28.704C57.5928 28.928 58.0408 29.16 58.5688 29.4C59.0968 29.624 59.6728 29.816 60.2968 29.976C60.9208 30.136 61.5528 30.216 62.1928 30.216C63.0888 30.216 63.7688 30.064 64.2328 29.76C64.6968 29.456 64.9288 29.024 64.9288 28.464C64.9288 27.952 64.7448 27.552 64.3768 27.264C64.0088 26.976 63.4968 26.728 62.8408 26.52C62.1848 26.296 61.4088 26.056 60.5128 25.8C59.4408 25.496 58.5448 25.16 57.8248 24.792C57.1048 24.408 56.5688 23.928 56.2168 23.352C55.8648 22.776 55.6888 22.056 55.6888 21.192C55.6888 20.024 55.9608 19.048 56.5048 18.264C57.0648 17.464 57.8168 16.864 58.7608 16.464C59.7048 16.048 60.7528 15.84 61.9048 15.84C62.7048 15.84 63.4568 15.928 64.1608 16.104C64.8808 16.28 65.5528 16.512 66.1768 16.8C66.8008 17.088 67.3608 17.4 67.8568 17.736L66.3928 20.424ZM70.9596 33V15.96H74.2716V33H70.9596ZM77.8268 33V15.96H85.0508C85.8348 15.96 86.5548 16.12 87.2108 16.44C87.8668 16.76 88.4348 17.192 88.9148 17.736C89.4108 18.28 89.7948 18.888 90.0668 19.56C90.3388 20.232 90.4748 20.92 90.4748 21.624C90.4748 22.584 90.2508 23.496 89.8028 24.36C89.3548 25.224 88.7388 25.928 87.9548 26.472C87.1708 27.016 86.2428 27.288 85.1708 27.288H81.1388V33H77.8268ZM81.1388 24.384H84.9788C85.3788 24.384 85.7388 24.272 86.0588 24.048C86.3788 23.824 86.6348 23.504 86.8268 23.088C87.0188 22.656 87.1148 22.168 87.1148 21.624C87.1148 21.032 87.0028 20.528 86.7788 20.112C86.5708 19.696 86.2908 19.384 85.9388 19.176C85.6028 18.968 85.2348 18.864 84.8348 18.864H81.1388V24.384ZM96.8573 24.36C96.8573 23.32 97.0413 22.304 97.4093 21.312C97.7933 20.304 98.3453 19.392 99.0653 18.576C99.7853 17.744 100.665 17.088 101.705 16.608C102.745 16.112 103.929 15.864 105.257 15.864C106.825 15.864 108.177 16.208 109.313 16.896C110.465 17.584 111.321 18.48 111.881 19.584L109.337 21.336C109.049 20.696 108.673 20.192 108.209 19.824C107.745 19.44 107.249 19.176 106.721 19.032C106.193 18.872 105.673 18.792 105.161 18.792C104.329 18.792 103.601 18.96 102.977 19.296C102.369 19.632 101.857 20.072 101.441 20.616C101.025 21.16 100.713 21.768 100.505 22.44C100.313 23.112 100.217 23.784 100.217 24.456C100.217 25.208 100.337 25.936 100.577 26.64C100.817 27.328 101.153 27.944 101.585 28.488C102.033 29.016 102.561 29.44 103.169 29.76C103.793 30.064 104.473 30.216 105.209 30.216C105.737 30.216 106.273 30.128 106.817 29.952C107.361 29.776 107.865 29.496 108.329 29.112C108.793 28.728 109.153 28.232 109.409 27.624L112.121 29.184C111.785 30.032 111.233 30.752 110.465 31.344C109.713 31.936 108.865 32.384 107.921 32.688C106.977 32.992 106.041 33.144 105.113 33.144C103.897 33.144 102.785 32.896 101.777 32.4C100.769 31.888 99.8973 31.216 99.1613 30.384C98.4413 29.536 97.8733 28.592 97.4573 27.552C97.0573 26.496 96.8573 25.432 96.8573 24.36ZM113.166 29.28C113.166 28.464 113.39 27.752 113.838 27.144C114.302 26.52 114.942 26.04 115.758 25.704C116.574 25.368 117.51 25.2 118.566 25.2C119.094 25.2 119.63 25.24 120.174 25.32C120.718 25.4 121.19 25.528 121.59 25.704V25.032C121.59 24.232 121.35 23.616 120.87 23.184C120.406 22.752 119.71 22.536 118.782 22.536C118.094 22.536 117.438 22.656 116.814 22.896C116.19 23.136 115.534 23.488 114.846 23.952L113.814 21.84C114.646 21.296 115.494 20.888 116.358 20.616C117.238 20.344 118.158 20.208 119.118 20.208C120.91 20.208 122.302 20.656 123.294 21.552C124.302 22.448 124.806 23.728 124.806 25.392V29.4C124.806 29.736 124.862 29.976 124.974 30.12C125.102 30.264 125.302 30.352 125.574 30.384V33C125.286 33.048 125.022 33.088 124.782 33.12C124.558 33.152 124.366 33.168 124.206 33.168C123.566 33.168 123.078 33.024 122.742 32.736C122.422 32.448 122.222 32.096 122.142 31.68L122.07 31.032C121.526 31.736 120.846 32.28 120.03 32.664C119.214 33.048 118.382 33.24 117.534 33.24C116.702 33.24 115.95 33.072 115.278 32.736C114.622 32.384 114.102 31.912 113.718 31.32C113.35 30.712 113.166 30.032 113.166 29.28ZM120.99 29.928C121.166 29.736 121.31 29.544 121.422 29.352C121.534 29.16 121.59 28.984 121.59 28.824V27.552C121.206 27.392 120.79 27.272 120.342 27.192C119.894 27.096 119.47 27.048 119.07 27.048C118.238 27.048 117.55 27.232 117.006 27.6C116.478 27.952 116.214 28.424 116.214 29.016C116.214 29.336 116.302 29.64 116.478 29.928C116.654 30.216 116.91 30.448 117.246 30.624C117.582 30.8 117.982 30.888 118.446 30.888C118.926 30.888 119.398 30.8 119.862 30.624C120.326 30.432 120.702 30.2 120.99 29.928ZM127.788 15.48H131.004V28.968C131.004 29.544 131.1 29.936 131.292 30.144C131.484 30.336 131.748 30.432 132.084 30.432C132.34 30.432 132.604 30.4 132.876 30.336C133.148 30.272 133.388 30.192 133.596 30.096L134.028 32.544C133.596 32.752 133.092 32.912 132.516 33.024C131.94 33.136 131.42 33.192 130.956 33.192C129.948 33.192 129.164 32.928 128.604 32.4C128.06 31.856 127.788 31.088 127.788 30.096V15.48ZM141.285 33.24C140.261 33.24 139.341 33.072 138.525 32.736C137.709 32.384 137.013 31.904 136.437 31.296C135.861 30.672 135.413 29.968 135.093 29.184C134.789 28.4 134.637 27.576 134.637 26.712C134.637 25.528 134.901 24.448 135.429 23.472C135.973 22.48 136.741 21.688 137.733 21.096C138.725 20.504 139.901 20.208 141.261 20.208C142.621 20.208 143.789 20.504 144.765 21.096C145.741 21.688 146.469 22.464 146.949 23.424L143.805 24.384C143.533 23.92 143.173 23.568 142.725 23.328C142.277 23.072 141.781 22.944 141.237 22.944C140.629 22.944 140.069 23.104 139.557 23.424C139.061 23.728 138.669 24.168 138.381 24.744C138.093 25.304 137.949 25.96 137.949 26.712C137.949 27.448 138.093 28.104 138.381 28.68C138.685 29.24 139.085 29.688 139.581 30.024C140.077 30.344 140.629 30.504 141.237 30.504C141.621 30.504 141.981 30.44 142.317 30.312C142.669 30.184 142.981 30.008 143.253 29.784C143.525 29.56 143.725 29.304 143.853 29.016L146.997 29.976C146.709 30.6 146.285 31.16 145.725 31.656C145.181 32.152 144.533 32.544 143.781 32.832C143.045 33.104 142.213 33.24 141.285 33.24ZM148.856 28.296V20.424H152.072V27.6C152.072 28.56 152.248 29.288 152.6 29.784C152.952 30.264 153.472 30.504 154.16 30.504C154.576 30.504 154.984 30.424 155.384 30.264C155.8 30.088 156.176 29.832 156.512 29.496C156.864 29.16 157.16 28.736 157.4 28.224V20.424H160.616V29.4C160.616 29.736 160.672 29.976 160.784 30.12C160.912 30.264 161.112 30.352 161.384 30.384V33C161.064 33.048 160.792 33.08 160.568 33.096C160.36 33.128 160.168 33.144 159.992 33.144C159.416 33.144 158.944 33.016 158.576 32.76C158.224 32.488 158.016 32.12 157.952 31.656L157.88 30.648C157.32 31.496 156.6 32.144 155.72 32.592C154.84 33.024 153.872 33.24 152.816 33.24C151.52 33.24 150.536 32.824 149.864 31.992C149.192 31.144 148.856 29.912 148.856 28.296ZM163.788 15.48H167.004V28.968C167.004 29.544 167.1 29.936 167.292 30.144C167.484 30.336 167.748 30.432 168.084 30.432C168.34 30.432 168.604 30.4 168.876 30.336C169.148 30.272 169.388 30.192 169.596 30.096L170.028 32.544C169.596 32.752 169.092 32.912 168.516 33.024C167.94 33.136 167.42 33.192 166.956 33.192C165.948 33.192 165.164 32.928 164.604 32.4C164.06 31.856 163.788 31.088 163.788 30.096V15.48ZM170.565 29.28C170.565 28.464 170.789 27.752 171.237 27.144C171.701 26.52 172.341 26.04 173.157 25.704C173.973 25.368 174.909 25.2 175.965 25.2C176.493 25.2 177.029 25.24 177.573 25.32C178.117 25.4 178.589 25.528 178.989 25.704V25.032C178.989 24.232 178.749 23.616 178.269 23.184C177.805 22.752 177.109 22.536 176.181 22.536C175.493 22.536 174.837 22.656 174.213 22.896C173.589 23.136 172.933 23.488 172.245 23.952L171.213 21.84C172.045 21.296 172.893 20.888 173.757 20.616C174.637 20.344 175.557 20.208 176.517 20.208C178.309 20.208 179.701 20.656 180.693 21.552C181.701 22.448 182.205 23.728 182.205 25.392V29.4C182.205 29.736 182.261 29.976 182.373 30.12C182.501 30.264 182.701 30.352 182.973 30.384V33C182.685 33.048 182.421 33.088 182.181 33.12C181.957 33.152 181.765 33.168 181.605 33.168C180.965 33.168 180.477 33.024 180.141 32.736C179.821 32.448 179.621 32.096 179.541 31.68L179.469 31.032C178.925 31.736 178.245 32.28 177.429 32.664C176.613 33.048 175.781 33.24 174.933 33.24C174.101 33.24 173.349 33.072 172.677 32.736C172.021 32.384 171.501 31.912 171.117 31.32C170.749 30.712 170.565 30.032 170.565 29.28ZM178.389 29.928C178.565 29.736 178.709 29.544 178.821 29.352C178.933 29.16 178.989 28.984 178.989 28.824V27.552C178.605 27.392 178.189 27.272 177.741 27.192C177.293 27.096 176.869 27.048 176.469 27.048C175.637 27.048 174.949 27.232 174.405 27.6C173.877 27.952 173.613 28.424 173.613 29.016C173.613 29.336 173.701 29.64 173.877 29.928C174.053 30.216 174.309 30.448 174.645 30.624C174.981 30.8 175.381 30.888 175.845 30.888C176.325 30.888 176.797 30.8 177.261 30.624C177.725 30.432 178.101 30.2 178.389 29.928ZM192.629 32.352C192.357 32.464 192.029 32.592 191.645 32.736C191.261 32.88 190.845 32.992 190.397 33.072C189.965 33.168 189.525 33.216 189.077 33.216C188.485 33.216 187.941 33.112 187.445 32.904C186.949 32.696 186.549 32.368 186.245 31.92C185.957 31.456 185.813 30.856 185.813 30.12V22.896H184.157V20.424H185.813V16.344H189.029V20.424H191.669V22.896H189.029V29.04C189.045 29.472 189.165 29.784 189.389 29.976C189.613 30.168 189.893 30.264 190.229 30.264C190.565 30.264 190.893 30.208 191.213 30.096C191.533 29.984 191.789 29.888 191.981 29.808L192.629 32.352ZM199.971 33.24C198.947 33.24 198.027 33.072 197.211 32.736C196.395 32.384 195.699 31.904 195.123 31.296C194.563 30.688 194.131 29.992 193.827 29.208C193.523 28.424 193.371 27.6 193.371 26.736C193.371 25.856 193.523 25.024 193.827 24.24C194.131 23.456 194.563 22.76 195.123 22.152C195.699 21.544 196.395 21.072 197.211 20.736C198.027 20.384 198.947 20.208 199.971 20.208C200.995 20.208 201.907 20.384 202.707 20.736C203.523 21.072 204.219 21.544 204.795 22.152C205.371 22.76 205.803 23.456 206.091 24.24C206.395 25.024 206.547 25.856 206.547 26.736C206.547 27.6 206.395 28.424 206.091 29.208C205.803 29.992 205.371 30.688 204.795 31.296C204.235 31.904 203.547 32.384 202.731 32.736C201.915 33.072 200.995 33.24 199.971 33.24ZM196.683 26.736C196.683 27.472 196.827 28.128 197.115 28.704C197.403 29.264 197.795 29.704 198.291 30.024C198.787 30.344 199.347 30.504 199.971 30.504C200.579 30.504 201.131 30.344 201.627 30.024C202.123 29.688 202.515 29.24 202.803 28.68C203.107 28.104 203.259 27.448 203.259 26.712C203.259 25.992 203.107 25.344 202.803 24.768C202.515 24.192 202.123 23.744 201.627 23.424C201.131 23.104 200.579 22.944 199.971 22.944C199.347 22.944 198.787 23.112 198.291 23.448C197.795 23.768 197.403 24.216 197.115 24.792C196.827 25.352 196.683 26 196.683 26.736ZM216.206 23.208C215.23 23.208 214.358 23.4 213.59 23.784C212.822 24.152 212.27 24.688 211.934 25.392V33H208.718V20.424H211.67V23.112C212.118 22.248 212.686 21.568 213.374 21.072C214.062 20.576 214.79 20.304 215.558 20.256C215.734 20.256 215.87 20.256 215.966 20.256C216.062 20.256 216.142 20.264 216.206 20.28V23.208Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.9229 34.6121L25.0629 34.4971V42.492C23.6018 42.3928 22.1846 42.1116 20.8398 41.6801V37.555L23.9229 34.6121Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M18.724 39.5742V40.8467C18.4277 40.7092 18.1382 40.5622 17.8516 40.4088L18.724 39.5742Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M27.5078 34.2539L31.731 33.832V41.7119C30.3829 42.137 28.969 42.4085 27.5078 42.5012V34.2539Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M38.1763 21.7119V25.8946L33.9531 30.0967V24.9072L38.1763 21.7119Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M38.1763 29.0264V38.3826L38.0252 38.2291C36.7939 39.2741 35.4271 40.159 33.9531 40.8493V33.2316L38.1763 29.0264Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M46.0018 19.6865L41.7302 20.9049L42.6882 21.8535L32.6854 31.8101L23.0989 32.7679L16.8699 38.7146H11.2539V40.3123H17.4942L23.7874 34.3045L33.3921 33.3447L43.8152 22.9695L44.9057 24.0497L46.0018 19.6865Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M38.3416 39.1877C26.2467 49.4515 7.94756 40.2837 8.41729 24.4165C8.86736 9.21209 26.5047 0.90221 38.2218 10.675L41.3491 7.50198C26.6045 -5.2809 4.05445 5.73145 4.0001 24.917C3.94451 44.5333 26.7434 55.2824 41.4718 42.3639L38.3416 39.1877Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M31.2491 22.3393H29.8038V21.4734C29.8038 21.0687 30.1272 20.7405 30.5264 20.7405C30.9253 20.7405 31.2491 21.0687 31.2491 21.4734V22.3393ZM31.2491 24.18H29.8038V22.7139H31.2491V24.18ZM29.4346 24.18H27.9897V22.7139H29.4346V24.18ZM27.9693 21.4943C27.9693 21.0896 28.2927 20.7611 28.6918 20.7611C29.0908 20.7611 29.4142 21.0896 29.4142 21.4943V22.3602H27.9693V21.4943ZM27.5078 18.4428V32.0073L31.731 31.5824V15.2476L27.5078 18.4428Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M24.4708 26.6627H23.1062V24.9768H24.4708V26.6627ZM24.4708 28.7056H23.1062V27.0196H24.4708V28.7056ZM22.758 26.6627H21.3935V24.9768H22.758V26.6627ZM22.758 28.7056H21.3935V27.0196H22.758V28.7056ZM20.8398 21.7119V34.4839L22.9593 32.4612L25.0629 32.2505V23.3095L20.8398 21.7119Z"
                        fill="#159D2C"
                      />
                      <path
                        d="M18.2411 33.4979H16.8826V32.6001C16.8826 32.266 17.1496 31.995 17.4788 31.995H17.6446C17.9741 31.995 18.2411 32.266 18.2411 32.6001V33.4979ZM18.2411 35.2282H16.8826V33.8498H18.2411V35.2282ZM16.5358 35.2282H15.1776V33.8498H16.5358V35.2282ZM15.1583 32.6197C15.1583 32.2857 15.4253 32.0147 15.7545 32.0147H15.9202C16.2497 32.0147 16.5167 32.2857 16.5167 32.6197V33.5176H15.1583V32.6197ZM14.5039 28.4227L14.508 38.4109C14.5097 38.4162 16.743 38.3953 16.743 38.3953L18.7271 36.5004V25.2271L14.5039 28.4227Z"
                        fill="#159D2C"
                      />
                    </svg>
                  </a>
                  {/* <ul
                    id="toggle-menu"
                    className="main-link fixed left-0 right-0 z-0 top-[90px] lg:top-0 transform transition duration-500 lg:relative max-lg:gap-6 flex flex-col lg:flex-row gap-10 lg:gap-8 lg:p-10 p-0 pb-6 lg:min-h-0 lg:px-0 lg:py-0 lg:translate-y-0 -translate-y-[200%] lg:bg-transparent bg-[#F4F4F4] dark:lg:bg-transparent dark:bg-[#08193c]  lg:rounded-none rounded-2xl"
                  > */}
                  <ul
                    id="toggle-menu"
                    className={`main-link fixed left-0 right-0 z-0 top-[90px] lg:top-0 transform transition duration-500 lg:relative max-lg:gap-6 flex flex-col lg:flex-row gap-10 lg:gap-8 lg:p-10 p-0 pb-6 lg:min-h-0 lg:px-0 lg:py-0 lg:translate-y-0 ${
                      menuOpen ? "translate-y-0" : "-translate-y-[200%]"
                    } lg:bg-transparent bg-[#F4F4F4] dark:lg:bg-transparent dark:bg-[#08193c] lg:rounded-none rounded-2xl`}
                  >
                    <div className="flex lg:hidden items-center justify-between p-5 border-b border-[#DCD7D7] dark:border-[#263c6b]">
                      <span className="text-sm font-medium text-[#020B1E] dark:text-white">
                        {currentTheme} Mode
                      </span>
                      {/* Dark Mode Toggle */}
                      <label
                        htmlFor="dark-mode-toggle-mobile"
                        className=" cursor-pointer flex items-center light-mode rounded-lg p-[3px] "
                      >
                        {/* Light Mode Icon (on left) */}
                        <div
                          className="w-11 h-11 flex justify-center items-center light-btn"
                          onClick={() => updateRangeCss()}
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 3V5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 19V21"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18.3673 5.63623L16.9531 7.05044"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.05093 16.9497L5.63672 18.3639"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18.3673 18.3644L16.9531 16.9502"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.05093 7.04996L5.63672 5.63574"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M21 12H19"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 12H3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        {/* Dark Mode Toggle Switch */}
                        <input
                          id="dark-mode-toggle-mobile"
                          type="checkbox"
                          className="hidden dark-mode-toggle"
                        />
                        {/* Dark Mode Icon (on right) */}
                        <div className="w-11 h-11 flex justify-center items-center dark-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 11.6014C3 16.7922 7.09519 21.0001 12.1469 21.0001C15.273 21.0001 18.0328 19.3887 19.6826 16.9301C20.3756 15.8974 20.7221 15.381 20.41 14.8411C20.0979 14.3012 19.3273 14.3541 17.7861 14.4599C10.8576 14.9353 8.58646 10.8359 8.23195 6.90293C8.066 5.0618 7.98302 4.14123 7.355 3.93743C6.72697 3.73363 6.26281 4.26556 5.3345 5.32941C3.8829 6.99296 3 9.19125 3 11.6014Z"
                              stroke="#020B1E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                    <li className="lg:px-0 px-5">
                      <a href="#" className="nav_link ">
                        SIP Calculator
                      </a>
                    </li>
                    <li className="lg:px-0 px-5">
                      <a href="#" className="nav_link ">
                        SIP Vs Lump Sum
                      </a>
                    </li>
                    <li className="lg:px-0 px-5">
                      <a href="#" className="nav_link ">
                        SIP vs SWP
                      </a>
                    </li>
                    <li className="lg:px-0 px-5">
                      <a href="#" className="nav_link ">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <div className="ml-auto flex items-center lg:gap-5">
                    <button className="py-3 px-3 lg:px-7 rounded-xl bg-dark-green text-xs lg:text-base text-white font-medium transition-all duration-500 hover:bg-[#178f2b]">
                      Start Your SIP
                    </button>
                    <div className="relative">
                      {/* Dark Mode Toggle */}
                      <label
                        htmlFor="dark-mode-toggle-desktop"
                        className="bg-[#EAE7E7] dark:bg-[#263c6b] cursor-pointer lg:flex hidden items-center  light-mode rounded-lg p-[3px] "
                      >
                        {/* Light Mode Icon (on left) */}
                        <div className="w-11 h-11 flex justify-center items-center light-btn">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 3V5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 19V21"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18.3673 5.63623L16.9531 7.05044"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.05093 16.9497L5.63672 18.3639"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18.3673 18.3644L16.9531 16.9502"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.05093 7.04996L5.63672 5.63574"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M21 12H19"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 12H3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        {/* Dark Mode Toggle Switch */}
                        <input
                          id="dark-mode-toggle-desktop"
                          type="checkbox"
                          className="hidden dark-mode-toggle"
                        />
                        {/* Dark Mode Icon (on right) */}
                        <div className="w-11 h-11 flex justify-center items-center dark-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 11.6014C3 16.7922 7.09519 21.0001 12.1469 21.0001C15.273 21.0001 18.0328 19.3887 19.6826 16.9301C20.3756 15.8974 20.7221 15.381 20.41 14.8411C20.0979 14.3012 19.3273 14.3541 17.7861 14.4599C10.8576 14.9353 8.58646 10.8359 8.23195 6.90293C8.066 5.0618 7.98302 4.14123 7.355 3.93743C6.72697 3.73363 6.26281 4.26556 5.3345 5.32941C3.8829 6.99296 3 9.19125 3 11.6014Z"
                              stroke="#020B1E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {/* navbar end  */}

            {/* {children} */}
            {/* <ThemeProvider>{children}</ThemeProvider> */}
            <main>
              {/* header section start */}
              <div className="relative pt-[140px] pb-[50px] bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b]">
                <div className="max-w-6xl mx-auto px-3 h-full flex items-center justify-center">
                  <h1 className="font-raleway text-center leading-[48px] text-2xl md:text-[40px] text-my-black dark:text-white font-bold lg:max-w-[700px]">
                    {" "}
                    The Most Accurate SIP Calculator To
                    <span className="text-dark-green">
                      {" "}
                      Get Rich SIP by SIP{" "}
                    </span>{" "}
                  </h1>
                </div>
              </div>
              {/* header section end  */}

              {/*calculator section start*/}
              <div className="relative lg:py-[50px] lg:pb-0 py-8">
                <div className="max-w-6xl mx-auto px-3">
                  <div className="flex lg:flex-row flex-col gap-8 justify-between">
                    <div className="flex flex-col gap-8 w-full lg:max-w-[758px]">
                      <div className="bg-white border border-[#DCD7D7] rounded-2xl flex flex-col gap-5 dark:border-[#263c6b] dark:bg-my-black">
                        <div className="tabs-container">
                          {/* Tabs */}
                          <ul
                            id="tabs"
                            className="tabs flex items-center justify-center w-full border-b-2 border-[#DCD7D7] dark:border-[#263c6b]"
                          >
                            <li
                              className={`font-medium py-3 px-4 sm:px-6 lg:p-5 w-1/2 rounded-t text-center dark:text-white text-my-black -mb-px border-b-2 ${
                                activeTab === "sip"
                                  ? "border-[#159D2C] text-[#159D2C] active"
                                  : "border-transparent"
                              }`}
                              onClick={() => switchTab("sip")}
                            >
                              <a
                                href="#first"
                                className="text-sm tab-toggler"
                                onClick={(e) => e.preventDefault()}
                              >
                                SIP Calculator
                              </a>
                            </li>
                            <li
                              className={`font-medium py-3 px-4 sm:px-6 lg:p-5 w-1/2 rounded-t text-my-black dark:text-white text-center border-b-2 ${
                                activeTab === "lumpsum"
                                  ? "border-[#159D2C] text-[#159D2C] active"
                                  : "border-transparent"
                              }`}
                              onClick={() => switchTab("lumpsum")}
                            >
                              <a
                                href="#second"
                                className="text-sm whitespace-nowrap tab-toggler"
                                onClick={(e) => e.preventDefault()}
                              >
                                Lump Sum
                              </a>
                            </li>
                          </ul>

                          {/* Tab Contents */}
                          <div id="tab-contents" className="tab-contents p-6">
                            {/* SIP Calculator Tab */}
                            <div
                              id="first"
                              className={
                                activeTab === "sip" ? "block" : "hidden"
                              }
                            >
                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Monthly Investment (INR)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                    value={`₹${investment.toLocaleString()}`}
                                    onChange={(e) => {
                                      const value = Number.parseInt(
                                        e.target.value.replace(/[^0-9]/g, "")
                                      );
                                      if (!isNaN(value)) setInvestment(value);
                                    }}
                                    id="sliderInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  {/* <input
                              id="investslider"
                              className="rangeslider"
                              type="range"
                              min={5000}
                              max={50000}
                              step={100}
                              value={investment}
                              onChange={(e) =>
                                setInvestment(Number.parseInt(e.target.value))
                              }
                            /> */}
                                  <Range
                                    step={STEP}
                                    min={MIN}
                                    max={MAX}
                                    values={[investment]}
                                    onChange={(e) =>
                                      setInvestment(
                                        Number.parseInt(e.toString())
                                      )
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C ${percentage}%, rgba(21, 157, 44, 0.2) ${percentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Expected Return (%)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-dark-green text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none md:max-w-max max-w-[115px]"
                                    value={`${rate}%`}
                                    onChange={(e) => {
                                      const value = Number.parseFloat(
                                        e.target.value.replace(/[^0-9.]/g, "")
                                      );
                                      if (!isNaN(value)) setRate(value);
                                    }}
                                    id="returnInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  <Range
                                    step={STEP_RATE}
                                    min={MIN_RATE}
                                    max={MAX_RATE}
                                    values={[rate]}
                                    onChange={(e) =>
                                      setRate(Number.parseFloat(e.toString()))
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C  ${ratePercentage}%, rgba(21, 157, 44, 0.2) ${ratePercentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Time period (years)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                    value={years}
                                    onChange={(e) => {
                                      const value = Number.parseInt(
                                        e.target.value
                                      );
                                      if (!isNaN(value)) setYears(value);
                                    }}
                                    id="yearInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  <Range
                                    step={STEP_YEAR}
                                    min={MIN_YEAR}
                                    max={MAX_YEAR}
                                    values={[years]}
                                    onChange={(e) =>
                                      setYears(Number.parseInt(e.toString()))
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C  ${yearPercentage}%, rgba(21, 157, 44, 0.2) ${yearPercentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="mt-6">
                                <div className="flex items-center justify-between gap-5 mb-3">
                                  <div className="flex items-center">
                                    <div className="flex items-center gap-1">
                                      <input
                                        id="checkbox-stepup"
                                        type="checkbox"
                                        checked={isStepUpChecked}
                                        onChange={handleStepUpChange}
                                        className="w-[26px] h-[26px] appearance-none border cursor-pointer border-[#159D2C] rounded-lg mr-2 hover:border-[#159D2C] checked:bg-no-repeat checked:bg-center checked:bg-[#159D2C]"
                                      />
                                      <label
                                        htmlFor="checkbox-stepup"
                                        className="lg:text-lg text-base cursor-pointer text-my-black dark:text-white"
                                      >
                                        Step - Up
                                      </label>
                                    </div>
                                  </div>

                                  {isStepUpChecked && (
                                    <input
                                      type="text"
                                      className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                      value={stepUpValue}
                                      onChange={handleStepUpValueChange}
                                    />
                                  )}
                                </div>

                                <div className="flex items-center justify-between gap-5">
                                  <div className="flex items-center">
                                    <div className="flex items-center gap-1">
                                      <input
                                        id="checkbox-inflation"
                                        type="checkbox"
                                        checked={inflationChecked}
                                        onChange={handleInflationChange}
                                        className="w-[26px] h-[26px] appearance-none border cursor-pointer border-[#159D2C] rounded-lg mr-2 hover:border-[#159D2C] checked:bg-no-repeat checked:bg-center checked:bg-[#159D2C]"
                                      />
                                      <label
                                        htmlFor="checkbox-inflation"
                                        className="lg:text-lg text-base cursor-pointer text-my-black dark:text-white"
                                      >
                                        Adjust for Inflation
                                      </label>
                                    </div>
                                  </div>

                                  {inflationChecked && (
                                    <input
                                      type="text"
                                      className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                      value={inflationValue}
                                      onChange={handleInflationValueChange}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Lump Sum Tab */}
                            <div
                              id="second"
                              className={
                                activeTab === "lumpsum" ? "block" : "hidden"
                              }
                            >
                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Total Investment (INR)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                    value={`₹${lumpSumInvestment.toLocaleString()}`}
                                    onChange={(e) => {
                                      const value = Number.parseInt(
                                        e.target.value.replace(/[^0-9]/g, "")
                                      );
                                      if (!isNaN(value))
                                        setLumpSumInvestment(value);
                                    }}
                                    id="lumpSumInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  {/* <input
                                    id="lumpSumSlider"
                                    className="rangeslider"
                                    type="range"
                                    min={10000}
                                    max={1000000}
                                    step={10000}
                                    value={lumpSumInvestment}
                                    onChange={(e) =>
                                      setLumpSumInvestment(
                                        Number.parseInt(e.target.value)
                                      )
                                    }
                                  /> */}
                                  <Range
                                    step={STEP_INS}
                                    min={MIN_INS}
                                    max={MAX_INS}
                                    values={[lumpSumInvestment]}
                                    onChange={(e) =>
                                      setLumpSumInvestment(
                                        Number.parseInt(e.toString())
                                      )
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C  ${lumpInsPercentage}%, rgba(21, 157, 44, 0.2) ${lumpInsPercentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Expected Return (%)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-dark-green text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none md:max-w-max max-w-[115px]"
                                    value={`${lumpSumRate}%`}
                                    onChange={(e) => {
                                      const value = Number.parseFloat(
                                        e.target.value.replace(/[^0-9.]/g, "")
                                      );
                                      if (!isNaN(value)) setLumpSumRate(value);
                                    }}
                                    id="lumpSumRateInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  {/* <input
                                    id="lumpSumRateSlider"
                                    className="rangeslider"
                                    type="range"
                                    min={0}
                                    max={30}
                                    step={0.5}
                                    value={lumpSumRate}
                                    onChange={(e) =>
                                      setLumpSumRate(
                                        Number.parseFloat(e.target.value)
                                      )
                                    }
                                  /> */}
                                  <Range
                                    step={STEP_RATE}
                                    min={MIN_RATE}
                                    max={MAX_RATE}
                                    values={[lumpSumRate]}
                                    onChange={(e) =>
                                      setLumpSumRate(
                                        Number.parseFloat(e.toString())
                                      )
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C  ${lumpRatePercentage}%, rgba(21, 157, 44, 0.2) ${lumpRatePercentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-3 mb-4">
                                <div className="flex flex-row items-center justify-between gap-5">
                                  <label className="text-base md:text-lg font-medium text-my-black dark:text-white">
                                    Time period (years)*
                                  </label>
                                  <input
                                    type="text"
                                    className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                    value={lumpSumYears}
                                    onChange={(e) => {
                                      const value = Number.parseInt(
                                        e.target.value
                                      );
                                      if (!isNaN(value)) setLumpSumYears(value);
                                    }}
                                    id="lumpSumYearsInput"
                                  />
                                </div>
                                <div className="pb-2 w-full amount-rangelider">
                                  {/* <input
                                    id="lumpSumYearsSlider"
                                    className="rangeslider"
                                    type="range"
                                    min={1}
                                    max={30}
                                    step={1}
                                    value={lumpSumYears}
                                    onChange={(e) =>
                                      setLumpSumYears(
                                        Number.parseInt(e.target.value)
                                      )
                                    }
                                  /> */}
                                  <Range
                                    step={STEP_YEAR}
                                    min={MIN_YEAR}
                                    max={MAX_YEAR}
                                    values={[lumpSumYears]}
                                    onChange={(e) =>
                                      setLumpSumYears(
                                        Number.parseInt(e.toString())
                                      )
                                    }
                                    renderTrack={({ props, children }) => (
                                      <div
                                        {...props}
                                        className="h-2 w-full rounded-full"
                                        style={{
                                          background: `linear-gradient(to right, #159D2C  ${lumpYearPercentage}%, rgba(21, 157, 44, 0.2) ${lumpYearPercentage}%)`,
                                          height: "4px",
                                        }}
                                      >
                                        {children}
                                      </div>
                                    )}
                                    renderThumb={({ props }) => (
                                      <div
                                        {...props}
                                        className="h-5 w-5 rounded-full border-5 border-green-500"
                                        style={{
                                          touchAction: "pan-y",
                                          top: "-9px",
                                          border: "4px solid #159D2C",
                                          cursor: "pointer",
                                          background:
                                            currentTheme === "Dark"
                                              ? "#020b1e"
                                              : "#fff",
                                        }}
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6">
                        <div className="mb-5 border-b border-[rgba(2,11,30,0.3)] dark:border-[rgba(255,255,255,0.3)] border-dashed pb-4 flex flex-col gap-5">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium text-my-black dark:text-white">
                              Invested Amount
                            </span>
                            <h5 className="text-base text-my-black font-bold dark:text-white">
                              {activeTab === "sip"
                                ? formatCurrency(sipInvestedAmount)
                                : formatCurrency(lumpSumInvestment)}
                            </h5>
                          </div>

                          {activeTab === "sip" && isStepUpChecked && (
                            <div className="flex items-center justify-between">
                              <span className="text-base font-medium text-my-black dark:text-white">
                                Step-up Amount
                              </span>
                              <h5 className="text-base text-my-black font-bold dark:text-white">
                                {formatCurrency(
                                  (investment * stepUpValue) / 100
                                )}
                              </h5>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium text-my-black dark:text-white">
                              Estimated Return
                            </span>
                            <h5 className="text-base text-my-black font-bold dark:text-white">
                              {activeTab === "sip"
                                ? formatCurrency(sipEstimatedReturns)
                                : formatCurrency(lumpSumEstimatedReturns)}
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-base font-medium text-dark-green">
                            Total Value (In INR)
                          </span>
                          <h5 className="text-base text-dark-green font-bold">
                            {activeTab === "sip"
                              ? formatCurrency(sipMaturityAmount)
                              : formatCurrency(lumpSumMaturityAmount)}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-[#020B1E] border border-[#DCD7D7] dark:border-[#263c6b] rounded-2xl lg:max-w-[365px] w-full grow h-full">
                      <div className="py-8 flex flex-col gap-6 justify-center">
                        <div
                          ref={chartRef}
                          className="pie-chart flex justify-center"
                        />
                        <div className="flex flex-col items-center gap-5">
                          <div className="flex items-center gap-4">
                            <span className="w-6 h-6 rounded-lg bg-[#0045D3]" />
                            <h6 className="text-base font-medium text-my-black dark:text-white">
                              Investment Amount
                            </h6>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="w-6 h-6 rounded-lg bg-dark-green" />
                            <h6 className="text-base font-medium text-my-black dark:text-white">
                              Est. Returns Amount
                            </h6>
                          </div>
                        </div>
                      </div>
                      {/* <div ref={chartRef} id="chart" /> */}
                      <div className="border-t border-[#DCD7D7] dark:border-[#263c6b] p-6">
                        <button className="w-full py-4 px-8 rounded-xl bg-blue text-base text-white font-medium transition-all duration-500 hover:bg-[#236bff]">
                          Start Your{" "}
                          {activeTab === "sip" ? "SIP" : "Investment"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*calculator section end*/}

              {/*detail section start*/}
              <div className="relative lg:py-[50px] lg:pb-0 py-8">
                <div className="max-w-6xl mx-auto px-3">
                  <div className="relative">
                    <div className="flex flex-col gap-3 mb-8">
                      <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                        SIP Calculator - Systematic Investment Plan Calculator
                      </h2>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Prospective investors can think that SIPs and mutual
                        funds are the same. However, SIPs are merely a method of
                        investing in mutual funds, the other method being a lump
                        sum. A SIP calculator is a tool that helps you determine
                        the returns you can avail when parking your funds in
                        such investment tools. Systematic Investment Plan or SIP
                        is a process of investing a fixed sum of money in mutual
                        funds at regular intervals. SIPs usually allow you to
                        invest weekly, quarterly, or monthly.
                      </p>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl text-my-black font-semibold dark:text-white">
                          What is SIP?
                        </h3>
                        <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                          A Systematic Investment Plan (SIP) is a method of
                          investing a fixed sum in mutual funds at regular
                          intervals—monthly or quarterly. It helps you take
                          advantage of compounding and rupee cost averaging,
                          thus minimizing the risks of market volatility.
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl text-my-black font-semibold dark:text-white">
                          Why Use an SIP Calculator?
                        </h3>
                        <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                          With our easy-to-use SIP calculator, you can estimate
                          your potential returns before making your investment
                          decisions. Whether you are aiming for long-term wealth
                          creation or looking to save for specific goals, an SIP
                          calculator provides you with a roadmap for your
                          investment journey.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 ">
                        <h3 className="text-2xl text-my-black font-semibold dark:text-white">
                          How Does the SIP Calculator Work?
                        </h3>
                        <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                          The SIP calculator considers three key variables:
                        </p>
                        <ul className="flex flex-col gap-4 list-disc pl-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">
                              Investment Amount:
                            </span>{" "}
                            The fixed sum you plan to invest regularly.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black font-medium dark:text-white">
                              Time Period:{" "}
                            </span>
                            The duration for which you plan to invest.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black font-medium dark:text-white">
                              Expected Return (CAGR):{" "}
                            </span>{" "}
                            The average annual return you expect on your mutual
                            fund investment.
                          </li>
                        </ul>
                      </div>
                      <div className="relative lg:pt-[30px] pb-[50px]">
                        <div className="max-w-6xl mx-auto">
                          <div className="relative">
                            <div className="flex flex-col gap-3">
                              <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                                How to Use the SIP Calculator?
                              </h2>
                              <ul className="flex flex-col gap-4 list-disc pl-5 mb-0">
                                <li className="md:text-base text-sm text-[#434B5B] dark:text-[#7B8498]">
                                  <span className="text-my-black font-medium dark:text-white me-1">
                                    Enter the SIP Amount:
                                  </span>
                                  This is the amount you want to invest
                                  regularly.
                                </li>
                                <li className="md:text-base text-sm text-[#434B5B] dark:text-[#7B8498]">
                                  <span className="text-my-black font-medium dark:text-white me-1">
                                    Set the Investment Duration:
                                  </span>
                                  Choose the period you want to stay invested.
                                  It could range from a few months to several
                                  years.
                                </li>
                                <li className="md:text-base text-sm text-[#434B5B] dark:text-[#7B8498]">
                                  <span className="text-my-black font-medium dark:text-white leading-8 me-1">
                                    Select Expected Returns:
                                  </span>
                                  The expected return rate (CAGR) is typically
                                  based on the historical performance of the
                                  mutual funds you are considering. You can
                                  enter your own estimate or use the
                                  calculator's default.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*detail section end*/}
            </main>

            {/* footer section start  */}
            <footer className="w-full bg-white dark:bg-my-black border-t border-[#DCD7D7] dark:border-[#263c6b]">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/*Grid*/}
                <div className="grid grid-cols-2  lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                  <div className="col-span-full  lg:col-span-3 ">
                    <a
                      href="#"
                      className="dark:text-white text-black flex justify-center lg:justify-start"
                    >
                      <svg
                        width={217}
                        height={50}
                        viewBox="0 0 217 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M66.3928 20.424C66.2808 20.312 66.0728 20.16 65.7688 19.968C65.4808 19.776 65.1208 19.592 64.6888 19.416C64.2728 19.24 63.8168 19.088 63.3208 18.96C62.8248 18.816 62.3208 18.744 61.8088 18.744C60.9128 18.744 60.2328 18.912 59.7688 19.248C59.3208 19.584 59.0968 20.056 59.0968 20.664C59.0968 21.128 59.2408 21.496 59.5288 21.768C59.8168 22.04 60.2488 22.272 60.8248 22.464C61.4008 22.656 62.1208 22.864 62.9848 23.088C64.1048 23.36 65.0728 23.696 65.8888 24.096C66.7208 24.48 67.3528 24.992 67.7848 25.632C68.2328 26.256 68.4568 27.088 68.4568 28.128C68.4568 29.04 68.2888 29.824 67.9528 30.48C67.6168 31.12 67.1528 31.64 66.5608 32.04C65.9688 32.44 65.2968 32.736 64.5448 32.928C63.7928 33.104 62.9928 33.192 62.1448 33.192C61.2968 33.192 60.4488 33.104 59.6008 32.928C58.7528 32.752 57.9368 32.504 57.1528 32.184C56.3688 31.848 55.6488 31.448 54.9928 30.984L56.4568 28.128C56.6008 28.272 56.8568 28.464 57.2248 28.704C57.5928 28.928 58.0408 29.16 58.5688 29.4C59.0968 29.624 59.6728 29.816 60.2968 29.976C60.9208 30.136 61.5528 30.216 62.1928 30.216C63.0888 30.216 63.7688 30.064 64.2328 29.76C64.6968 29.456 64.9288 29.024 64.9288 28.464C64.9288 27.952 64.7448 27.552 64.3768 27.264C64.0088 26.976 63.4968 26.728 62.8408 26.52C62.1848 26.296 61.4088 26.056 60.5128 25.8C59.4408 25.496 58.5448 25.16 57.8248 24.792C57.1048 24.408 56.5688 23.928 56.2168 23.352C55.8648 22.776 55.6888 22.056 55.6888 21.192C55.6888 20.024 55.9608 19.048 56.5048 18.264C57.0648 17.464 57.8168 16.864 58.7608 16.464C59.7048 16.048 60.7528 15.84 61.9048 15.84C62.7048 15.84 63.4568 15.928 64.1608 16.104C64.8808 16.28 65.5528 16.512 66.1768 16.8C66.8008 17.088 67.3608 17.4 67.8568 17.736L66.3928 20.424ZM70.9596 33V15.96H74.2716V33H70.9596ZM77.8268 33V15.96H85.0508C85.8348 15.96 86.5548 16.12 87.2108 16.44C87.8668 16.76 88.4348 17.192 88.9148 17.736C89.4108 18.28 89.7948 18.888 90.0668 19.56C90.3388 20.232 90.4748 20.92 90.4748 21.624C90.4748 22.584 90.2508 23.496 89.8028 24.36C89.3548 25.224 88.7388 25.928 87.9548 26.472C87.1708 27.016 86.2428 27.288 85.1708 27.288H81.1388V33H77.8268ZM81.1388 24.384H84.9788C85.3788 24.384 85.7388 24.272 86.0588 24.048C86.3788 23.824 86.6348 23.504 86.8268 23.088C87.0188 22.656 87.1148 22.168 87.1148 21.624C87.1148 21.032 87.0028 20.528 86.7788 20.112C86.5708 19.696 86.2908 19.384 85.9388 19.176C85.6028 18.968 85.2348 18.864 84.8348 18.864H81.1388V24.384ZM96.8573 24.36C96.8573 23.32 97.0413 22.304 97.4093 21.312C97.7933 20.304 98.3453 19.392 99.0653 18.576C99.7853 17.744 100.665 17.088 101.705 16.608C102.745 16.112 103.929 15.864 105.257 15.864C106.825 15.864 108.177 16.208 109.313 16.896C110.465 17.584 111.321 18.48 111.881 19.584L109.337 21.336C109.049 20.696 108.673 20.192 108.209 19.824C107.745 19.44 107.249 19.176 106.721 19.032C106.193 18.872 105.673 18.792 105.161 18.792C104.329 18.792 103.601 18.96 102.977 19.296C102.369 19.632 101.857 20.072 101.441 20.616C101.025 21.16 100.713 21.768 100.505 22.44C100.313 23.112 100.217 23.784 100.217 24.456C100.217 25.208 100.337 25.936 100.577 26.64C100.817 27.328 101.153 27.944 101.585 28.488C102.033 29.016 102.561 29.44 103.169 29.76C103.793 30.064 104.473 30.216 105.209 30.216C105.737 30.216 106.273 30.128 106.817 29.952C107.361 29.776 107.865 29.496 108.329 29.112C108.793 28.728 109.153 28.232 109.409 27.624L112.121 29.184C111.785 30.032 111.233 30.752 110.465 31.344C109.713 31.936 108.865 32.384 107.921 32.688C106.977 32.992 106.041 33.144 105.113 33.144C103.897 33.144 102.785 32.896 101.777 32.4C100.769 31.888 99.8973 31.216 99.1613 30.384C98.4413 29.536 97.8733 28.592 97.4573 27.552C97.0573 26.496 96.8573 25.432 96.8573 24.36ZM113.166 29.28C113.166 28.464 113.39 27.752 113.838 27.144C114.302 26.52 114.942 26.04 115.758 25.704C116.574 25.368 117.51 25.2 118.566 25.2C119.094 25.2 119.63 25.24 120.174 25.32C120.718 25.4 121.19 25.528 121.59 25.704V25.032C121.59 24.232 121.35 23.616 120.87 23.184C120.406 22.752 119.71 22.536 118.782 22.536C118.094 22.536 117.438 22.656 116.814 22.896C116.19 23.136 115.534 23.488 114.846 23.952L113.814 21.84C114.646 21.296 115.494 20.888 116.358 20.616C117.238 20.344 118.158 20.208 119.118 20.208C120.91 20.208 122.302 20.656 123.294 21.552C124.302 22.448 124.806 23.728 124.806 25.392V29.4C124.806 29.736 124.862 29.976 124.974 30.12C125.102 30.264 125.302 30.352 125.574 30.384V33C125.286 33.048 125.022 33.088 124.782 33.12C124.558 33.152 124.366 33.168 124.206 33.168C123.566 33.168 123.078 33.024 122.742 32.736C122.422 32.448 122.222 32.096 122.142 31.68L122.07 31.032C121.526 31.736 120.846 32.28 120.03 32.664C119.214 33.048 118.382 33.24 117.534 33.24C116.702 33.24 115.95 33.072 115.278 32.736C114.622 32.384 114.102 31.912 113.718 31.32C113.35 30.712 113.166 30.032 113.166 29.28ZM120.99 29.928C121.166 29.736 121.31 29.544 121.422 29.352C121.534 29.16 121.59 28.984 121.59 28.824V27.552C121.206 27.392 120.79 27.272 120.342 27.192C119.894 27.096 119.47 27.048 119.07 27.048C118.238 27.048 117.55 27.232 117.006 27.6C116.478 27.952 116.214 28.424 116.214 29.016C116.214 29.336 116.302 29.64 116.478 29.928C116.654 30.216 116.91 30.448 117.246 30.624C117.582 30.8 117.982 30.888 118.446 30.888C118.926 30.888 119.398 30.8 119.862 30.624C120.326 30.432 120.702 30.2 120.99 29.928ZM127.788 15.48H131.004V28.968C131.004 29.544 131.1 29.936 131.292 30.144C131.484 30.336 131.748 30.432 132.084 30.432C132.34 30.432 132.604 30.4 132.876 30.336C133.148 30.272 133.388 30.192 133.596 30.096L134.028 32.544C133.596 32.752 133.092 32.912 132.516 33.024C131.94 33.136 131.42 33.192 130.956 33.192C129.948 33.192 129.164 32.928 128.604 32.4C128.06 31.856 127.788 31.088 127.788 30.096V15.48ZM141.285 33.24C140.261 33.24 139.341 33.072 138.525 32.736C137.709 32.384 137.013 31.904 136.437 31.296C135.861 30.672 135.413 29.968 135.093 29.184C134.789 28.4 134.637 27.576 134.637 26.712C134.637 25.528 134.901 24.448 135.429 23.472C135.973 22.48 136.741 21.688 137.733 21.096C138.725 20.504 139.901 20.208 141.261 20.208C142.621 20.208 143.789 20.504 144.765 21.096C145.741 21.688 146.469 22.464 146.949 23.424L143.805 24.384C143.533 23.92 143.173 23.568 142.725 23.328C142.277 23.072 141.781 22.944 141.237 22.944C140.629 22.944 140.069 23.104 139.557 23.424C139.061 23.728 138.669 24.168 138.381 24.744C138.093 25.304 137.949 25.96 137.949 26.712C137.949 27.448 138.093 28.104 138.381 28.68C138.685 29.24 139.085 29.688 139.581 30.024C140.077 30.344 140.629 30.504 141.237 30.504C141.621 30.504 141.981 30.44 142.317 30.312C142.669 30.184 142.981 30.008 143.253 29.784C143.525 29.56 143.725 29.304 143.853 29.016L146.997 29.976C146.709 30.6 146.285 31.16 145.725 31.656C145.181 32.152 144.533 32.544 143.781 32.832C143.045 33.104 142.213 33.24 141.285 33.24ZM148.856 28.296V20.424H152.072V27.6C152.072 28.56 152.248 29.288 152.6 29.784C152.952 30.264 153.472 30.504 154.16 30.504C154.576 30.504 154.984 30.424 155.384 30.264C155.8 30.088 156.176 29.832 156.512 29.496C156.864 29.16 157.16 28.736 157.4 28.224V20.424H160.616V29.4C160.616 29.736 160.672 29.976 160.784 30.12C160.912 30.264 161.112 30.352 161.384 30.384V33C161.064 33.048 160.792 33.08 160.568 33.096C160.36 33.128 160.168 33.144 159.992 33.144C159.416 33.144 158.944 33.016 158.576 32.76C158.224 32.488 158.016 32.12 157.952 31.656L157.88 30.648C157.32 31.496 156.6 32.144 155.72 32.592C154.84 33.024 153.872 33.24 152.816 33.24C151.52 33.24 150.536 32.824 149.864 31.992C149.192 31.144 148.856 29.912 148.856 28.296ZM163.788 15.48H167.004V28.968C167.004 29.544 167.1 29.936 167.292 30.144C167.484 30.336 167.748 30.432 168.084 30.432C168.34 30.432 168.604 30.4 168.876 30.336C169.148 30.272 169.388 30.192 169.596 30.096L170.028 32.544C169.596 32.752 169.092 32.912 168.516 33.024C167.94 33.136 167.42 33.192 166.956 33.192C165.948 33.192 165.164 32.928 164.604 32.4C164.06 31.856 163.788 31.088 163.788 30.096V15.48ZM170.565 29.28C170.565 28.464 170.789 27.752 171.237 27.144C171.701 26.52 172.341 26.04 173.157 25.704C173.973 25.368 174.909 25.2 175.965 25.2C176.493 25.2 177.029 25.24 177.573 25.32C178.117 25.4 178.589 25.528 178.989 25.704V25.032C178.989 24.232 178.749 23.616 178.269 23.184C177.805 22.752 177.109 22.536 176.181 22.536C175.493 22.536 174.837 22.656 174.213 22.896C173.589 23.136 172.933 23.488 172.245 23.952L171.213 21.84C172.045 21.296 172.893 20.888 173.757 20.616C174.637 20.344 175.557 20.208 176.517 20.208C178.309 20.208 179.701 20.656 180.693 21.552C181.701 22.448 182.205 23.728 182.205 25.392V29.4C182.205 29.736 182.261 29.976 182.373 30.12C182.501 30.264 182.701 30.352 182.973 30.384V33C182.685 33.048 182.421 33.088 182.181 33.12C181.957 33.152 181.765 33.168 181.605 33.168C180.965 33.168 180.477 33.024 180.141 32.736C179.821 32.448 179.621 32.096 179.541 31.68L179.469 31.032C178.925 31.736 178.245 32.28 177.429 32.664C176.613 33.048 175.781 33.24 174.933 33.24C174.101 33.24 173.349 33.072 172.677 32.736C172.021 32.384 171.501 31.912 171.117 31.32C170.749 30.712 170.565 30.032 170.565 29.28ZM178.389 29.928C178.565 29.736 178.709 29.544 178.821 29.352C178.933 29.16 178.989 28.984 178.989 28.824V27.552C178.605 27.392 178.189 27.272 177.741 27.192C177.293 27.096 176.869 27.048 176.469 27.048C175.637 27.048 174.949 27.232 174.405 27.6C173.877 27.952 173.613 28.424 173.613 29.016C173.613 29.336 173.701 29.64 173.877 29.928C174.053 30.216 174.309 30.448 174.645 30.624C174.981 30.8 175.381 30.888 175.845 30.888C176.325 30.888 176.797 30.8 177.261 30.624C177.725 30.432 178.101 30.2 178.389 29.928ZM192.629 32.352C192.357 32.464 192.029 32.592 191.645 32.736C191.261 32.88 190.845 32.992 190.397 33.072C189.965 33.168 189.525 33.216 189.077 33.216C188.485 33.216 187.941 33.112 187.445 32.904C186.949 32.696 186.549 32.368 186.245 31.92C185.957 31.456 185.813 30.856 185.813 30.12V22.896H184.157V20.424H185.813V16.344H189.029V20.424H191.669V22.896H189.029V29.04C189.045 29.472 189.165 29.784 189.389 29.976C189.613 30.168 189.893 30.264 190.229 30.264C190.565 30.264 190.893 30.208 191.213 30.096C191.533 29.984 191.789 29.888 191.981 29.808L192.629 32.352ZM199.971 33.24C198.947 33.24 198.027 33.072 197.211 32.736C196.395 32.384 195.699 31.904 195.123 31.296C194.563 30.688 194.131 29.992 193.827 29.208C193.523 28.424 193.371 27.6 193.371 26.736C193.371 25.856 193.523 25.024 193.827 24.24C194.131 23.456 194.563 22.76 195.123 22.152C195.699 21.544 196.395 21.072 197.211 20.736C198.027 20.384 198.947 20.208 199.971 20.208C200.995 20.208 201.907 20.384 202.707 20.736C203.523 21.072 204.219 21.544 204.795 22.152C205.371 22.76 205.803 23.456 206.091 24.24C206.395 25.024 206.547 25.856 206.547 26.736C206.547 27.6 206.395 28.424 206.091 29.208C205.803 29.992 205.371 30.688 204.795 31.296C204.235 31.904 203.547 32.384 202.731 32.736C201.915 33.072 200.995 33.24 199.971 33.24ZM196.683 26.736C196.683 27.472 196.827 28.128 197.115 28.704C197.403 29.264 197.795 29.704 198.291 30.024C198.787 30.344 199.347 30.504 199.971 30.504C200.579 30.504 201.131 30.344 201.627 30.024C202.123 29.688 202.515 29.24 202.803 28.68C203.107 28.104 203.259 27.448 203.259 26.712C203.259 25.992 203.107 25.344 202.803 24.768C202.515 24.192 202.123 23.744 201.627 23.424C201.131 23.104 200.579 22.944 199.971 22.944C199.347 22.944 198.787 23.112 198.291 23.448C197.795 23.768 197.403 24.216 197.115 24.792C196.827 25.352 196.683 26 196.683 26.736ZM216.206 23.208C215.23 23.208 214.358 23.4 213.59 23.784C212.822 24.152 212.27 24.688 211.934 25.392V33H208.718V20.424H211.67V23.112C212.118 22.248 212.686 21.568 213.374 21.072C214.062 20.576 214.79 20.304 215.558 20.256C215.734 20.256 215.87 20.256 215.966 20.256C216.062 20.256 216.142 20.264 216.206 20.28V23.208Z"
                          fill="currentColor"
                        />
                        <path
                          d="M23.9229 34.6121L25.0629 34.4971V42.492C23.6018 42.3928 22.1846 42.1116 20.8398 41.6801V37.555L23.9229 34.6121Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M18.724 39.5742V40.8467C18.4277 40.7092 18.1382 40.5622 17.8516 40.4088L18.724 39.5742Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M27.5078 34.2539L31.731 33.832V41.7119C30.3829 42.137 28.969 42.4085 27.5078 42.5012V34.2539Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M38.1763 21.7119V25.8946L33.9531 30.0967V24.9072L38.1763 21.7119Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M38.1763 29.0264V38.3826L38.0252 38.2291C36.7939 39.2741 35.4271 40.159 33.9531 40.8493V33.2316L38.1763 29.0264Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M46.0018 19.6865L41.7302 20.9049L42.6882 21.8535L32.6854 31.8101L23.0989 32.7679L16.8699 38.7146H11.2539V40.3123H17.4942L23.7874 34.3045L33.3921 33.3447L43.8152 22.9695L44.9057 24.0497L46.0018 19.6865Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M38.3416 39.1877C26.2467 49.4515 7.94756 40.2837 8.41729 24.4165C8.86736 9.21209 26.5047 0.90221 38.2218 10.675L41.3491 7.50198C26.6045 -5.2809 4.05445 5.73145 4.0001 24.917C3.94451 44.5333 26.7434 55.2824 41.4718 42.3639L38.3416 39.1877Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M31.2491 22.3393H29.8038V21.4734C29.8038 21.0687 30.1272 20.7405 30.5264 20.7405C30.9253 20.7405 31.2491 21.0687 31.2491 21.4734V22.3393ZM31.2491 24.18H29.8038V22.7139H31.2491V24.18ZM29.4346 24.18H27.9897V22.7139H29.4346V24.18ZM27.9693 21.4943C27.9693 21.0896 28.2927 20.7611 28.6918 20.7611C29.0908 20.7611 29.4142 21.0896 29.4142 21.4943V22.3602H27.9693V21.4943ZM27.5078 18.4428V32.0073L31.731 31.5824V15.2476L27.5078 18.4428Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M24.4708 26.6627H23.1062V24.9768H24.4708V26.6627ZM24.4708 28.7056H23.1062V27.0196H24.4708V28.7056ZM22.758 26.6627H21.3935V24.9768H22.758V26.6627ZM22.758 28.7056H21.3935V27.0196H22.758V28.7056ZM20.8398 21.7119V34.4839L22.9593 32.4612L25.0629 32.2505V23.3095L20.8398 21.7119Z"
                          fill="#159D2C"
                        />
                        <path
                          d="M18.2411 33.4979H16.8826V32.6001C16.8826 32.266 17.1496 31.995 17.4788 31.995H17.6446C17.9741 31.995 18.2411 32.266 18.2411 32.6001V33.4979ZM18.2411 35.2282H16.8826V33.8498H18.2411V35.2282ZM16.5358 35.2282H15.1776V33.8498H16.5358V35.2282ZM15.1583 32.6197C15.1583 32.2857 15.4253 32.0147 15.7545 32.0147H15.9202C16.2497 32.0147 16.5167 32.2857 16.5167 32.6197V33.5176H15.1583V32.6197ZM14.5039 28.4227L14.508 38.4109C14.5097 38.4162 16.743 38.3953 16.743 38.3953L18.7271 36.5004V25.2271L14.5039 28.4227Z"
                          fill="#159D2C"
                        />
                      </svg>
                    </a>
                    <p className="pt-3 text-base  text-[#434B5B] lg:max-w-md text-center lg:text-left dark:text-[#7B8498] leading-8">
                      Lorem Ipsum&nbsp;is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s?
                    </p>
                  </div>
                  <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-black font-medium mb-7 dark:text-white">
                      Products
                    </h4>
                    <ul className="text-sm  transition-all duration-500">
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Downloads
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Addresses
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Account Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*End Col*/}
                  <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-black font-medium mb-7 dark:text-white">
                      SIP Calculator
                    </h4>
                    <ul className="text-sm  transition-all duration-500">
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Downloads
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Addresses
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Account Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*End Col*/}
                  <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-black font-medium mb-7 dark:text-white">
                      Quick Links
                    </h4>
                    <ul className="text-sm  transition-all duration-500">
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Orders
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Downloads
                        </a>
                      </li>
                      <li className="mb-5">
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Addresses
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className=" text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                        >
                          Account Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Grid*/}
                <div className="py-5 border-t border-[#DCD7D7] dark:border-[#263c6b]">
                  <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-[#434B5B] dark:text-[#7B8498]">
                      © 2024-2025 sip calculator. All rights reserved.
                    </span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                      <a
                        href="javascript:;"
                        className="group w-8 h-8 rounded-full bg-[#F4F4F4] dark:bg-[#08193c] flex justify-center items-center hover:bg-dark-green dark:hover:bg-dark-green hover:text-white transition-all duration-500"
                      >
                        <svg
                          className="group-hover:text-white w-[1.25rem] h-[1.125rem] text-[#111827] hover:text-white dark:text-white"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4604 8.58651L10.7544 6.74619H8.94346V5.54998C8.94346 5.04677 9.19629 4.55505 10.0048 4.55505H10.8397V2.9879C10.3535 2.91151 9.86216 2.87019 9.36975 2.86426C7.87922 2.86426 6.90612 3.74704 6.90612 5.34294V6.74619H5.25391V8.58651H6.90612V13.0378H8.94346V8.58651H10.4604Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:;"
                        className="group w-8 h-8 rounded-full bg-[#F4F4F4] dark:bg-[#08193c] flex justify-center items-center hover:bg-dark-green dark:hover:bg-dark-green hover:text-white transition-all duration-500"
                      >
                        <svg
                          className="group-hover:text-white w-[1.25rem] h-[1.125rem] text-[#111827] hover:text-white dark:text-white"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:;"
                        className="group w-8 h-8 rounded-full bg-[#F4F4F4] dark:bg-[#08193c] flex justify-center items-center hover:bg-dark-green dark:hover:bg-dark-green hover:text-white transition-all duration-500"
                      >
                        <svg
                          className="group-hover:text-white w-[1rem] h-[1rem] text-[#111827] hover:text-white dark:text-white"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.05793 7.14913L13.1943 2.44434H12.2141L8.62251 6.52945L5.75391 2.44434H2.44531L6.7832 8.62174L2.44531 13.5554H3.42555L7.21838 9.24143L10.2478 13.5554H13.5564L9.05769 7.14913H9.05793ZM7.71536 8.67617L7.27584 8.06104L3.77875 3.16638H5.28434L8.10653 7.11653L8.54605 7.73166L12.2146 12.8662H10.709L7.71536 8.6764V8.67617Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="javascript:;"
                        className="group w-8 h-8 rounded-full bg-[#F4F4F4] dark:bg-[#08193c] flex justify-center items-center hover:bg-dark-green dark:hover:bg-dark-green hover:text-white transition-all duration-500"
                      >
                        <svg
                          className="group-hover:text-white w-[1.25rem] h-[0.875rem] text-[#111827] hover:text-white dark:text-white"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* footer section end  */}
          </div>
          {/* js links  */}
          {/* <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"
          ></script> */}
          <script src="https://cdn.jsdelivr.net/npm/rangeslider.js/dist/rangeslider.min.js"></script>
        </body>
      </html>
    </>
  );
}
