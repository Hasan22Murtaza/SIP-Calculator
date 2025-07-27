
import { useEffect, useRef, useState } from "react";
import { Range } from "react-range";

export default function SIPCalculator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");

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

  return (
    <>
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
                                className={`font-medium py-3 px-4 sm:px-6 lg:p-5 w-1/2 rounded-t text-center dark:text-white text-my-black -mb-px border-b-2 ${activeTab === "sip"
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
                                className={`font-medium py-3 px-4 sm:px-6 lg:p-5 w-1/2 rounded-t text-my-black dark:text-white text-center border-b-2 ${activeTab === "lumpsum"
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
                                      className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
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
                                      className="rounded-xl bg-[rgba(21,157,44,0.05)] border border-[rgba(21,157,44,0.20)] py-2.5 px-4 text-base font-medium text-my-black text-right transition-all duration-500 hover:border-[#159D2C] focus:border-[#159D2C] focus:text-[#159D2C] outline-none dark:text-white md:max-w-max max-w-[115px]"
                                      value={`${lumpSumRate}%`}
                                      onChange={(e) => {
                                        const value = Number.parseFloat(
                                          e.target.value.replace(/[^0-9.]/g, "")
                                        );
                                        if (!isNaN(value))
                                          setLumpSumRate(value);
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
                                        if (!isNaN(value))
                                          setLumpSumYears(value);
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
    </>
  );
}
