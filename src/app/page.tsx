"use client";

import { useEffect, useState, useRef } from "react";
// import "rangeslider.js";
// import "rangeslider.js/dist/rangeslider.css";
// import dynamic from "next/dynamic";

// Dynamically import ApexCharts with no SSR
//const ApexCharts = dynamic(() => import("apexcharts"), { ssr: false });

export default function Home() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("sip");

  // State for SIP calculator
  const [investment, setInvestment] = useState(11500);
  const [rate, setRate] = useState(20);
  const [years, setYears] = useState(10);
  const [isStepUpChecked, setIsStepUpChecked] = useState(true);
  const [stepUpValue, setStepUpValue] = useState(0);
  const [inflationChecked, setInflationChecked] = useState(true);
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

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Function to switch tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  // Handlers for SIP inputs
  const handleStepUpChange = (event) => {
    setIsStepUpChecked(event.target.checked);
  };

  const handleStepUpValueChange = (event) => {
    setStepUpValue(Number.parseInt(event.target.value) || 0);
  };

  const handleInflationChange = (event) => {
    setInflationChecked(event.target.checked);
  };

  const handleInflationValueChange = (event) => {
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
    import("apexcharts").then((ApexChartsModule) => {
      const ApexCharts = ApexChartsModule.default;
      chartInstance.current = new ApexCharts(chartRef.current, options);
      chartInstance.current.render();
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

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
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
                        className={activeTab === "sip" ? "block" : "hidden"}
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
                            <input
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
                            <input
                              id="returnslider"
                              className="rangeslider"
                              type="range"
                              min={0}
                              max={30}
                              step={0.5}
                              value={rate}
                              onChange={(e) =>
                                setRate(Number.parseFloat(e.target.value))
                              }
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
                                const value = Number.parseInt(e.target.value);
                                if (!isNaN(value)) setYears(value);
                              }}
                              id="yearInput"
                            />
                          </div>
                          <div className="pb-2 w-full amount-rangelider">
                            <input
                              id="yearslider"
                              className="rangeslider"
                              type="range"
                              min={1}
                              max={30}
                              step={1}
                              value={years}
                              onChange={(e) =>
                                setYears(Number.parseInt(e.target.value))
                              }
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
                        className={activeTab === "lumpsum" ? "block" : "hidden"}
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
                                if (!isNaN(value)) setLumpSumInvestment(value);
                              }}
                              id="lumpSumInput"
                            />
                          </div>
                          <div className="pb-2 w-full amount-rangelider">
                            <input
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
                            <input
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
                                const value = Number.parseInt(e.target.value);
                                if (!isNaN(value)) setLumpSumYears(value);
                              }}
                              id="lumpSumYearsInput"
                            />
                          </div>
                          <div className="pb-2 w-full amount-rangelider">
                            <input
                              id="lumpSumYearsSlider"
                              className="rangeslider"
                              type="range"
                              min={1}
                              max={30}
                              step={1}
                              value={lumpSumYears}
                              onChange={(e) =>
                                setLumpSumYears(Number.parseInt(e.target.value))
                              }
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
                          {formatCurrency((investment * stepUpValue) / 100)}
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
                <div className="border-t border-[#DCD7D7] dark:border-[#263c6b] p-6">
                  <button className="w-full py-4 px-8 rounded-xl bg-blue text-base text-white font-medium transition-all duration-500 hover:bg-[#236bff]">
                    Start Your {activeTab === "sip" ? "SIP" : "Investment"}
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
                  Prospective investors can think that SIPs and mutual funds are
                  the same. However, SIPs are merely a method of investing in
                  mutual funds, the other method being a lump sum. A SIP
                  calculator is a tool that helps you determine the returns you
                  can avail when parking your funds in such investment tools.
                  Systematic Investment Plan or SIP is a process of investing a
                  fixed sum of money in mutual funds at regular intervals. SIPs
                  usually allow you to invest weekly, quarterly, or monthly.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl text-my-black font-semibold dark:text-white">
                    What is SIP?
                  </h3>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                    A Systematic Investment Plan (SIP) is a method of investing
                    a fixed sum in mutual funds at regular intervals—monthly or
                    quarterly. It helps you take advantage of compounding and
                    rupee cost averaging, thus minimizing the risks of market
                    volatility.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl text-my-black font-semibold dark:text-white">
                    Why Use an SIP Calculator?
                  </h3>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                    With our easy-to-use SIP calculator, you can estimate your
                    potential returns before making your investment decisions.
                    Whether you are aiming for long-term wealth creation or
                    looking to save for specific goals, an SIP calculator
                    provides you with a roadmap for your investment journey.
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
                      The average annual return you expect on your mutual fund
                      investment.
                    </li>
                  </ul>
                </div>
                {/* <div className="relative lg:pt-[30px] pb-[50px]">
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
                            This is the amount you want to invest regularly.
                          </li>
                          <li className="md:text-base text-sm text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black font-medium dark:text-white me-1">
                              Set the Investment Duration:
                            </span>
                            Choose the period you want to stay invested. It
                            could range from a few months to several years.
                          </li>
                          <li className="md:text-base text-sm text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black font-medium dark:text-white leading-8 me-1">
                              Select Expected Returns:
                            </span>
                            The expected return rate (CAGR) is typically based
                            on the historical performance of the mutual funds
                            you are considering. You can enter your own estimate
                            or use the calculator's default.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*detail section end*/}
      </main>
    </>
  );
}
