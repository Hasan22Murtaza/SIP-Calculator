"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Range } from "react-range";
import HomePage from "./contents/home";
import Script from 'next/script'
import GoogleAd from '@/components/GoogleAd'
import SIPCalculator from "@/components/SIPCalculator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");
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
    // alert();
  };

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // setCurrentTheme(localStorage.getItem("theme"));
      // Function to toggle between light and dark mode
      const toggleThemeLayout = (dark: any) => {
        if (dark) {
          setCurrentTheme("Dark");
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          localStorage.setItem("theme", "dark");
        } else {
          setCurrentTheme("Light");
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
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

  // Prevent automatic padding-left on body
  useEffect(() => {
    if (typeof window !== "undefined") {
      const removeBodyPadding = () => {
        const body = document.body;
        if (body.style.paddingLeft) {
          body.style.paddingLeft = "0px";
        }
        if (body.style.padding) {
          body.style.padding = "0px";
        }
      };

      removeBodyPadding();

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            removeBodyPadding();
          }
        });
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['style']
      });

      const interval = setInterval(removeBodyPadding, 1000);

      return () => {
        observer.disconnect();
        clearInterval(interval);
      };
    }
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // useEffect(() => {
  //   setBgCss(currentTheme == "Dark" ? "#020b1e !important" : "#fff !important");
  //   console.log(bgCss, " - BG CSS");
  // }, [currentTheme]);

  const percentage = ((investment - MIN) / (MAX - MIN)) * 100;
  const lumpInsPercentage =
    ((lumpSumInvestment - MIN_INS) / (MAX_INS - MIN_INS)) * 100;
  const ratePercentage = ((rate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;
  const lumpRatePercentage =
    ((lumpSumRate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;
  const yearPercentage = ((years - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
  const lumpYearPercentage =
    ((lumpSumYears - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;

    const handlGoToSIP = () => {
      window.location.href = "https://whatsapp.com/channel/0029Vb6byC6AojYz30rltN0N";
    };

    const getPageMeta = (path: string) => {
  const meta = {
    title: "SIP Calculator",
    description:
      "The most accurate SIP calculator to plan your investments and achieve your financial goals SIP by SIP.",
  };

  switch (path) {
    case "/":
      meta.title = "SIP Calculator - Plan Your Wealth Creation";
      meta.description =
        "Plan your wealth creation with our advanced SIP calculator. Estimate your returns and grow your investments effectively.";
      break;
    case "/sip-vs-lumpsum":
      meta.title = "SIP vs Lumpsum Investment: Which one is Best?";
      meta.description =
        "Discover the best investment strategy with our SIP vs Lumpsum comparison tool. Make smarter financial decisions today.";
      break;
    case "/sip-vs-swp":
      meta.title = "SIP vs SWP which is one is better";
      meta.description =
        "Compare SIP and SWP to find the right investment option for your financial goals using our insightful calculator.";
      break;
    case "/axis":
      meta.title =
        "Axis Bank SIP Calculator – Calculate Your SIP Investment Accurately";
      meta.description =
        "Use our Axis Bank SIP calculator to precisely estimate your investment returns and plan better.";
      break;
    case "/hdfc":
      meta.title = "HDFC Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Calculate your HDFC SIP returns accurately using our reliable and user-friendly SIP calculator.";
      break;
    case "/icici":
      meta.title = "ICICI Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Plan and calculate your SIP returns with ICICI using our easy and accurate SIP calculator.";
      break;
    case "/idbi":
      meta.title = "IDBI Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Get precise return estimates for your IDBI SIP investments with our tailored calculator.";
      break;
    case "/kotak":
      meta.title = "Kotak Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Use our Kotak SIP calculator to get accurate projections and plan your financial future with ease.";
      break;
    case "/lic":
      meta.title = "LIC Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Accurately calculate your LIC SIP investments and returns using our trusted calculator.";
      break;
    case "/nippon":
      meta.title = "Nippon Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Easily estimate your returns from Nippon SIP investments with our accurate online calculator.";
      break;
    case "/pnb":
      meta.title = "PNB Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Get reliable SIP return estimates for PNB investments using our efficient calculator.";
      break;
    case "/sbi":
      meta.title = "SBI Bank SIP Calculator – Calculate Your SIP Investment";
      meta.description =
        "Plan your SIP investments with SBI and calculate returns using our highly accurate SIP calculator.";
      break;
    case "/disclaimer":
      meta.title = "Disclaimer - SIP Calculator";
      meta.description =
        "View our disclaimer to understand the terms, limitations, and assumptions behind our SIP calculator.";
      break;
    case "/privacy":
      meta.title = "Privacy Policy - SIP Calculator";
      meta.description =
        "Review how your personal data is collected, used, and protected with our SIP calculator's privacy policy.";
      break;
    case "/terms":
      meta.title = "Terms of Service - SIP Calculator";
      meta.description =
        "Read the terms of service for using the SIP calculator and understand your rights and responsibilities.";
      break;
    case "/scholarship":
      meta.title = "Scholarship - SIP Calculator";
      meta.description =
        "Explore scholarship opportunities that promote financial literacy and investment education through SIP planning.";
      break;
    default:
      break;
  }

  return meta;
};


    const { title, description } = getPageMeta(pathname);
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" type="image/svg+xml" href="favicon.svg" />

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
              const link = e.target as HTMLLinkElement;
              link.rel = "stylesheet";
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

          {/* ✅ Early theme detection */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
(function() {
  try {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.classList.add(theme);
  } catch (_) {}
})();
`.trim(),
            }}
          />

          {/* Google AdSense */}
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9611563092539287"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />

          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6VYD98WT89"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6VYD98WT89');
            `,
            }}
          />
          <link rel="stylesheet" href="assets/css/style.css" />

          {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9611563092539287"
            crossorigin="anonymous"></script> */}
        </head>
        <body >
          <div className="bg-[#F4F4F4] dark:bg-[#08193c]">
            {/* navbar start  */}
            <nav className="fixed z-[1020] w-full bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b] flex justify-between py-5  items-center">
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
                 

                  <Link href="/" className="me-10">
                    {currentTheme == "Dark" ? <img src="/assets/images/sip-dark.svg" style={{ height: "50px" }} alt="logo" /> : <img src="/assets/images/sip-light.svg" style={{ height: "50px" }} alt="logo" />}
                  </Link>

                  
                  <ul
                    id="toggle-menu"
                    className={`main-link fixed left-0 right-0 z-0 top-[90px] lg:top-0 transform transition duration-500 lg:relative max-lg:gap-6 flex flex-col lg:flex-row gap-10 lg:gap-8 lg:p-10 p-0 pb-6 lg:min-h-0 lg:px-0 lg:py-0 lg:translate-y-0 ${menuOpen ? "translate-y-0" : "-translate-y-[200%]"
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
                      <Link href="/" className="nav_link" style={{ color: pathname == "/" ? "rgb(21 157 44 / var(--tw-text-opacity))" : "" }}>
                        SIP Calculator
                      </Link>
                    </li>
                    <li className="lg:px-0 px-5">
                      {/* <a href="#" className="nav_link ">
                        SIP Vs Lump Sum
                      </a> */}
                      <Link href="/sip-vs-lumpsum" className="nav_link" style={{ color: pathname == "/sip-vs-lumpsum" ? "rgb(21 157 44 / var(--tw-text-opacity))" : "" }}>
                        SIP Vs Lump Sum
                      </Link>
                    </li>
                    <li className="lg:px-0 px-5">
                      <Link href="/sip-vs-swp" className="nav_link" style={{ color: pathname == "/sip-vs-swp" ? "rgb(21 157 44 / var(--tw-text-opacity))" : "" }}>
                        SIP vs SWP
                      </Link>
                    </li>
     
                  </ul>
                  <div className="ml-auto flex items-center lg:gap-5">
                    <a
                      href="https://whatsapp.com/channel/0029Vb6byC6AojYz30rltN0N"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                    <button className="py-3 px-3 lg:px-7 rounded-xl bg-dark-green text-xs lg:text-base text-white font-medium transition-all duration-500 hover:bg-[#178f2b]">
                      Start Your SIP
                    </button>
                    </a>
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

            {pathname !== "/" ? (
              children
            ) : (
              <main>
                {/* header section start */}
                <div className="relative pt-[100px] md:pt-[140px] pb-[50px] bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b]">
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
                
                {/*calculator section end*/}
                <SIPCalculator />
               

                <div className="relative lg:py-[50px] lg:pb-0 py-8">
                  <div className="max-w-6xl mx-auto px-3">
                    <GoogleAd adSlot="5646679930" />
                    <HomePage />
                  </div>
                </div>
                {/*detail section end*/}
              </main>
            )}

          

            {/* footer section start  */}
            <footer className="w-full bg-white dark:bg-my-black border-t border-[#DCD7D7] dark:border-[#263c6b]">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/*Grid*/}
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8 ">
                  <div className="col-span-full lg:col-span-3">
                    <Link
                      href="/"
                      className=""
                    >
                     
                      {/* <img src="assets/images/sip-text.svg" alt="logo" /> */}
                      {currentTheme == "Dark" ? <img src="/assets/images/sip-dark.svg" style={{ height: "50px" }} alt="logo" /> : <img src="/assets/images/sip-light.svg" style={{ height: "50px" }} alt="logo" />}
                    </Link>
                    <p className="pt-3 text-base  text-[#434B5B] lg:max-w-md text-center lg:text-left dark:text-[#7B8498] leading-8">
                      The most accurate SIP calculator in the world!
                    </p>
                  </div>
                  
                  {/*End Col*/}
                  <div className="col-span-full lg:col-span-3">
                    <div className="grid grid-cols-2">

                      <ul className="flex flex-col gap-4 transition-all duration-500">
                        <li className="text-dark-green">
                          <Link href="/axis" className="text-dark-green">
                            Axis Bank SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/hdfc" className="text-dark-green">
                            HDFC SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/icici" className="text-dark-green">
                            ICICI SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/idbi" className="text-dark-green">
                            IDBI SIP Calculator
                          </Link>
                        </li>
                      </ul>

                      <ul className="flex flex-col gap-4 transition-all duration-500" style={{ marginLeft: "40px" }}>
                        <li className="text-dark-green">
                          <Link href="/kotak" className="text-dark-green">
                            Kotak Bank SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/lic" className="text-dark-green">
                            LIC SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/nippon" className="text-dark-green">
                            Nippon India SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/pnb" className="text-dark-green">
                            PNB SIP Calculator
                          </Link>
                        </li>
                        <li className="text-dark-green">
                          <Link href="/sbi" className="text-dark-green">
                            SBI SIP Calculator
                          </Link>
                        </li>
                      </ul>
                    </div>
                    

                  </div>
                  
                </div>
                {/*Grid*/}
                <div className="py-5 border-t border-[#DCD7D7] dark:border-[#263c6b]">
                  <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-[#434B5B] dark:text-[#7B8498]">
                      © {new Date().getFullYear()} SIP Calculator. All rights reserved.
                    </span>
                    {/* <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 "> */}
                    <div className="flex flex-wrap justify-center sm:justify-center lg:justify-start mt-4 lg:mt-0 gap-x-4 gap-y-2">
                      

                      <Link
                        href="/disclaimer"
                        className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green me-0"
                      >
                        Disclaimer
                      </Link>
                      <span className="text-[#434B5B] dark:text-[#7B8498]">
                        -
                      </span>
                      <Link
                        href="/privacy"
                        className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                      >
                        Privacy Policy
                      </Link>
                      <span className="text-[#434B5B] dark:text-[#7B8498]">
                        -
                      </span>
                      <Link
                        href="/terms"
                        className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                      >
                        Terms of Services
                      </Link>
                      <span className="text-[#434B5B] dark:text-[#7B8498]">
                        -
                      </span>
                      <Link
                        href="/scholarship"
                        className="text-[#434B5B] dark:text-[#7B8498] transition-all duration-500 hover:text-dark-green dark:hover:text-dark-green"
                      >
                        Scholarship
                      </Link>
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
