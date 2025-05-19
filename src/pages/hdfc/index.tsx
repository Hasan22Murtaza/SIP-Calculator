import RootLayout from "@/app/layout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Axis() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <RootLayout>
      <main>
        <div className="relative pt-[100px] md:pt-[140px] pb-[50px] bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b]">
          <div className="max-w-6xl mx-auto px-3 h-full flex items-center justify-center">
            <h1 className="font-raleway text-center leading-[48px] text-2xl md:text-[40px] text-my-black dark:text-white font-bold lg:max-w-[700px]" style={{ marginTop: "40px" }}>
              {" "}
              The Most Accurate SIP Calculator To
              <span className="text-dark-green">
                {" "}
                Get Rich SIP by SIP{" "}
              </span>{" "}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex lg:flex-row flex-col  gap-2  w-full md:max-w-5xl lg:max-w-6xl mx-auto">
            <div className="relative lg:py-[50px] lg:pb-5 py-8 lg:w-8/12 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="block">
                  <div className="block mb-8">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="What_is_the_HDFC_SIP_Calculator">
                        What is the HDFC SIP Calculator?
                      </span>
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      If you’re investing in 2025 without a{" "}
                      <strong>SIP calculator</strong>, you’re not planning — you’re
                      gambling. And that’s not a strategy.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      The <strong>HDFC SIP Calculator</strong> is your digital ally
                      in building wealth through a{" "}
                      <strong>Systematic Investment Plan</strong>. It crunches your
                      investment numbers, evaluates the time horizon, and gives you
                      the <strong>future value</strong> of your wealth based on
                      consistent monthly investments.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      Whether you’re just starting out with ₹500 or you’re an
                      experienced investor allocating ₹15,000 every month, this tool
                      simplifies your journey to financial goals.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      Want to buy a house in 15 years? Fund your child’s education?
                      Or retire early? The calculator tells you exactly what steps
                      to take — backed by real math.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Why_Use_a_SIP_Calculator">
                          Why Use a SIP Calculator?
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Let’s not sugarcoat it. <span className="text-my-black dark:text-white font-medium">Financial planning</span>{" "}
                        can be intimidating — until you realize that it’s your
                        passport to <span className="text-my-black dark:text-white font-medium">financial independence</span>.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        A <span className="text-my-black dark:text-white font-medium">SIP calculator</span> does more than project
                        numbers — it gives you a plan. It shows how small, regular
                        investments grow over time, thanks to{" "}
                        <span className="text-my-black dark:text-white font-medium">compound interest</span>. It’s like having a coach
                        that’s fluent in finance, without charging a fee.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Key_Benefits_of_Using_HDFC_SIP_Calculator">
                          <span className="text-my-black dark:text-white font-medium">Key Benefits of Using HDFC SIP Calculator</span>:
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Portfolio Building</span>: Match SIPs with your{" "}
                        <span className="text-my-black dark:text-white font-medium">asset allocation</span> and growth needs.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Visual Forecasting</span>: See your future wealth on
                        a chart.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Goal Alignment</span>: Want to hit ₹1 crore in 20
                        years? This tells you how.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Risk Simulation</span>: Adjust CAGR to simulate
                        market outcomes.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Time Efficiency</span>: Stop guessing and start
                        planning in minutes.
                      </p>
                    </div>
                  </div>
                  <div className="block mb-8 ">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_Does_the_HDFC_SIP_Calculator_Work">
                        How Does the HDFC SIP Calculator Work?
                      </span>
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      The calculator uses a smart version of the{" "}
                      <span className="text-my-black dark:text-white font-medium">compound interest formula</span>. It works behind
                      the scenes to simulate monthly growth based on your SIP
                      amount, duration, and return expectations.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading  text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Core_Calculation_Formula">
                          Core Calculation Formula
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">The core formula is:</p>
                      <p>
                        <span className="text-my-black dark:text-white font-medium">
                          FV = P × ({"{"}[(1 + r)^n – 1] × (1 + r){"}"}/r)
                        </span>
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Where:</p>
                      <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">P</span> = SIP amount
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">r</span> = monthly rate of return
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">n</span> = number of months
                        </li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        It’s technical, but here’s the takeaway: this formula lets
                        your money snowball.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Example_Calculation">
                          Example Calculation
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Suppose you invest  <span className="text-my-black dark:text-white font-medium">₹5,000/month</span> for{" "}
                        <span className="text-my-black dark:text-white font-medium">10 years</span> at a{" "}
                        <span className="text-my-black dark:text-white font-medium">12% annual return</span> (1% per month).
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Result? You end up with  <span className="text-my-black dark:text-white font-medium">₹11.6 Lakhs</span>, out of
                        which ₹6 Lakhs is your investment and ₹5.6 Lakhs is pure
                        returns.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Now imagine what happens when you{" "}
                        <span className="text-my-black dark:text-white font-medium">step up your SIP</span> yearly. Magic.
                      </p>
                    </div>
                  </div>
                  <div className="block mb-8">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Key_Features_of_the_HDFC_SIP_Calculator">
                        Key Features of the HDFC SIP Calculator
                      </span>
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      Unlike outdated calculators, this one includes advanced tools
                      like <strong>step-up SIP</strong>,{" "}
                      <strong>lumpsum SIP</strong>, and even{" "}
                      <strong>inflation-adjusted projections</strong>. It’s designed
                      for modern investors.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Regular_SIP_Calculation">
                          Regular SIP Calculation
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">This is the standard feature.</p>
                      <ul className="wp-block-list   flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Input your SIP amount.</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Choose the tenure.</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Estimate your CAGR.</li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">And get the projected corpus instantly.</p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Step-Up_SIP_Calculator_HDFC_SIP_Step_Up_Calculator">

                          Step-Up SIP Calculator (HDFC SIP Step Up Calculator)

                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Getting a raise every year? Then why invest the same amount?
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">With this tool:</p>
                      <ul className="wp-block-list   flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start with ₹3,000/month</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Increase by ₹500/year</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          In 10 years, your investment is way ahead of regular SIPs
                        </li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        This approach is ideal for{" "}
                        <span className="text-my-black dark:text-white font-medium">young professionals</span> in growth-phase careers.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading  text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Inflation-Adjusted_SIP_Calculation">
                          Inflation-Adjusted SIP Calculation
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        This is for those who think long term — and realistically.
                      </p>
                      <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Inflation lowers your money’s future value.</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          Use this tool to input a{" "}
                          <span className="text-my-black dark:text-white font-medium">5–7% inflation rate</span>.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          See the  <span className="text-my-black dark:text-white font-medium">real (not nominal)</span> value of your
                          future wealth.
                        </li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        You’d be shocked how much you need today to maintain your
                        lifestyle in 2045.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Lumpsum_SIP_Calculator_HDFC_Lumpsum_Calculator">

                          Lumpsum SIP Calculator (HDFC Lumpsum Calculator)

                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Let’s say you received a bonus, or sold crypto. Want to invest
                        ₹1,00,000?
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        The  <span className="text-my-black dark:text-white font-medium">lumpsum calculator</span> estimates how much
                        that will grow.
                      </p>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Enter principal</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Set duration</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Enter expected CAGR</li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Example: ₹1,00,000 for 7 years @ 10% CAGR = ₹1,94,000+. Easy
                        money? Only if planned well.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="How_to_Use_Our_HDFC_SIP_Calculator_Tool">
                          How to Use Our HDFC SIP Calculator Tool?
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Here is how you can easily use this SIP calc.</p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Step-by-Step_Guide">
                          Step-by-Step Guide
                        </span>
                      </h3>
                      <ol className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">1. </span> Open the calculator</li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">2. </span>
                          Select <strong>SIP</strong> or <strong>Lumpsum</strong>
                        </li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">3. </span> Enter amount</li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">4. </span> Set years</li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">5. </span>
                          Enter CAGR (10–14% for equity, 6–8% for{" "}
                          <strong>debt mutual funds</strong>)
                        </li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">6. </span> Enable Step-Up or Inflation if needed</li>
                        <li className="text-base text-my-black dark:text-white ">  <span className="text-my-black dark:text-white font-medium pr-1">7. </span> Hit Calculate</li>
                      </ol>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">You’re done in less than a minute.</p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white" >
                        <span id="User_Interface_Walkthrough">
                          User Interface Walkthrough
                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <strong>Mobile-optimized interface</strong>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Charts: Pie + bar graph</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Data: Table view of monthly contributions vs. growth</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Shareable results: Email or WhatsApp</li>
                      </ul>
                    </div>
                  </div>
                  <div className="block mb-8">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="HDFC_SIP_Plan_Options_Integration_with_Calculator">

                        HDFC SIP Plan Options &amp; Integration with Calculator

                      </span>
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      The calculator supports all{" "}
                      <span className="text-my-black dark:text-white font-medium">HDFC mutual fund schemes</span>, including:
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Top_HDFC_Mutual_Funds_You_Can_Use_with_This_Calculator">

                          Top HDFC Mutual Funds You Can Use with This Calculator

                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">HDFC Flexi Cap Fund</span>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">HDFC Mid Cap Opportunities Fund</span>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">HDFC Hybrid Equity Fund</span>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">HDFC Retirement Savings Fund</span>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          <span className="text-my-black dark:text-white font-medium">HDFC Equity Fund</span> – A high-growth option
                          backed by a strong performance track record
                        </li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        All are compatible with SIPs and can be modeled using our
                        tool.
                      </p>
                    </div>
                  </div>
                  <div className="block mb-8 ">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Matching_SIP_Amount_to_Investment_Goals">
                        Matching SIP Amount to Investment Goals
                      </span>
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                      Have a ₹50 lakh dream? Use our{" "}
                      <strong>reverse-calculation feature</strong>.
                    </p>
                    <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Input your goal amount</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Set investment horizon</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Get required SIP amount</li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">This is where goal-based investing gets real.</p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white mb-8">
                        <span id="Real-Life_Case_Studies">
                          Real-Life Case Studies
                        </span>
                      </h3>
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Case_Study_1_First-Time_Investor_Age_22">
                          Case Study 1 – First-Time Investor (Age 22)
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Riya invests ₹2,000/month. She increases it by ₹500 yearly
                        using the <span className="text-my-black dark:text-white font-medium">Step-Up SIP calculator</span>.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Her total contribution = ₹7.2 Lakhs
                        <br />
                        Final value = Over ₹22 Lakhs
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Riya didn’t guess. She planned.</p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Case_Study_2_Mid-Career_Professional_Age_35">

                          Case Study 2 – Mid-Career Professional (Age 35)

                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Amit aims for ₹1 Cr by 55.</p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        He invests ₹10,000/month for 20 years at 12% CAGR.
                        <br />
                        But he also factors in <span className="text-my-black dark:text-white font-medium">6% inflation</span>, using
                        the <span className="text-my-black dark:text-white font-medium">inflation-adjusted SIP calculator</span>.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Projected real value: ₹97 Lakhs.
                        <br />
                        He boosts SIP to ₹12,000/month to stay on track.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Comparison_with_Other_HDFC_SIP_Calculators">
                          Comparison with Other HDFC SIP Calculators
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Here’s a straight-up comparison:</p>
                      <figure className="wp-block-table w-full overflow-x-auto">
                        <table className="has-fixed-layout w-full text-sm text-left  rounded-lg border-separate">
                          <thead className="text-SM text-my-black   dark:text-white border-b-2 border-[#DCD7D7]  dark:border-[#263c6b]">
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <th className="px-3 py-2">Feature</th>
                              <th className="px-3 py-2">Groww</th>
                              <th className="px-3 py-2">ClearTax</th>
                              <th className="px-3 py-2">HDFC Fund</th>
                              <th className="px-3 py-2">Ours</th>
                            </tr>
                          </thead>
                          <tbody className=" border-b dark:border-gray-700 border-gray-200 text-[#434B5B] dark:text-[#7B8498]">
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">SIP Calculation</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">Step-Up SIP</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">Inflation Adjustment</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">Lumpsum Calculator</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">Mobile-Friendly</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">Free to Use</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                            <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                              <td className="px-3 py-2 ">
                                <strong>Goal Reverse-Calculation</strong>
                              </td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">❌</td>
                              <td className="px-3 py-2 ">✅</td>
                            </tr>
                          </tbody>
                        </table>
                      </figure>
                    </div>
                  </div>
                  <div className="block mb-8 ">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Understanding_SIP_Better_for_New_Investors">
                        Understanding SIP Better for New Investors
                      </span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="What_is_SIP_Systematic_Investment_Plan">
                          What is SIP (Systematic Investment Plan)?
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        SIP = Regular, disciplined investing. You invest monthly in a
                        mutual fund. Market goes up or down? Doesn’t matter. SIP keeps
                        going. That’s your edge.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading  text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Benefits_of_SIP_Investing_for_Young_Indians">
                          Benefits of SIP Investing for Young Indians
                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start with as little as ₹500</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                          Use it for <span className="text-my-black dark:text-white font-medium">tax-saving investments</span> like{" "}
                          <span className="text-my-black dark:text-white font-medium">ELSS (Equity-Linked Savings Scheme)</span>
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Build habits that lead to wealth</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Beat market volatility over time</li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        You’re basically planting a <span className="text-my-black dark:text-white font-medium">financial tree</span> —
                        and watching it grow year after year.
                      </p>
                    </div>
                  </div>
                  <div className="block mb-8 ">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Common_Mistakes_to_Avoid_in_SIP_Investing">
                        Common Mistakes to Avoid in SIP Investing
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Here are some common mistakes to avoid while investing into
                      HDFC Mutual funds!
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Ignoring_Inflation">
                          Ignoring Inflation
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        ₹1 crore today ≠ ₹1 crore in 2045.
                        <br />
                        Plan with <span className="text-my-black dark:text-white font-medium">real value</span>, not illusion. Always
                        enable the <span className="text-my-black dark:text-white font-medium">inflation feature</span>.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Not_Using_Step-Up_Feature">
                          Not Using Step-Up Feature
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Getting a raise but not increasing SIP? That’s a miss. Even
                        ₹500/year makes a massive difference.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading  text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Stopping_SIP_During_Market_Downturn">
                          Stopping SIP During Market Downturn
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Markets crash. That’s normal. Don’t stop SIPs —{" "}
                        <span className="text-my-black dark:text-white font-medium">buy more units cheaply</span> instead. It’s called{" "}
                        <span className="text-my-black dark:text-white font-medium">rupee cost averaging</span> and it’s a proven
                        winner.
                      </p>
                    </div>
                  </div>
                  <div className="block mb-8 ">
                    <h2 className="wp-block-heading has-text-align-center lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Best_Performing_HDFC_Mutual_Funds">
                        Best Performing HDFC Mutual Funds
                      </span>
                    </h2>
                    <figure className="wp-block-table is-style-stripes">
                      <table className="has-fixed-layout w-full text-sm text-left  rounded-lg border-separate">
                        <thead className="text-SM text-my-black   dark:text-white border-b-2 border-[#DCD7D7]  dark:border-[#263c6b]">
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <th className="px-3 py-2">Fund Name</th>
                            <th className="px-3 py-2">5-Year CAGR (%)</th>
                            <th className="px-3 py-2">10-Year CAGR (%)</th>
                            <th className="px-3 py-2">Risk Level</th>
                            <th className="px-3 py-2">Suitability</th>
                          </tr>
                        </thead>
                        <tbody className=" border-b dark:border-gray-700 border-gray-200 text-[#434B5B] dark:text-[#7B8498]">
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              HDFC Mid-Cap Opportunities Fund – Direct Plan (Growth)
                            </td>
                            <td className="px-3 py-2 ">34.34</td>
                            <td className="px-3 py-2 ">17.4</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">
                              Investors seeking mid-cap growth with moderate risk
                            </td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">HDFC Focused 30 Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">33.82</td>
                            <td className="px-3 py-2 ">16.2</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">Investors seeking focused equity exposure</td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">HDFC Flexi Cap Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">31.87</td>
                            <td className="px-3 py-2 ">18.2</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">
                              Investors seeking flexibility and balanced risk-return
                            </td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">HDFC Small Cap Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">28.0</td>
                            <td className="px-3 py-2 ">18.68</td>
                            <td className="px-3 py-2 ">Very High</td>
                            <td className="px-3 py-2 ">Aggressive investors with 7-10 year horizon</td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">HDFC Tax Saver Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">27.5</td>
                            <td className="px-3 py-2 ">14.8</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">
                              Investors seeking tax benefits under Section 80C
                            </td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">HDFC Infrastructure Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">26.19</td>
                            <td className="px-3 py-2 ">12.17</td>
                            <td className="px-3 py-2 ">High</td>
                            <td className="px-3 py-2 ">
                              Investors seeking sectoral exposure to infrastructure
                            </td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              HDFC Long Term Advantage Fund – Direct Plan (Growth)
                            </td>
                            <td className="px-3 py-2 ">25.0</td>
                            <td className="px-3 py-2 ">21.4</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">
                              Investors seeking tax-saving ELSS with long-term
                              growth
                            </td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              HDFC Growth Opportunities Fund – Direct Plan (Growth)
                            </td>
                            <td className="px-3 py-2 ">24.5</td>
                            <td className="px-3 py-2 ">12.8</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">Investors seeking large &amp; mid-cap exposure</td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              HDFC Balanced Advantage Fund – Direct Plan (Growth)
                            </td>
                            <td className="px-3 py-2 ">23.5</td>
                            <td className="px-3 py-2 ">18.11</td>
                            <td className="px-3 py-2 ">Moderately High</td>
                            <td className="px-3 py-2 ">Investors seeking hybrid equity-debt stability</td>
                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              HDFC Retirement Savings Fund – Equity – Direct Plan
                              (Growth)
                            </td>
                            <td className="px-3 py-2 ">22.0</td>
                            <td className="px-3 py-2 ">19.46 (since 2016)</td>
                            <td className="px-3 py-2 ">High</td>
                            <td className="px-3 py-2 ">
                              Investors planning for retirement with aggressive
                              growth
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </figure>
                  </div>
                  <div className="flex flex-col gap-6 mb-8" itemProp="text">
                    <div className="flex flex-col gap-3 ">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Final_Thoughts_Why_Our_HDFC_SIP_Calculator_is_the_Best_Tool_for_2025">

                          Final Thoughts – Why Our HDFC SIP Calculator is the Best
                          Tool for 2025

                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        If you’re an Indian aged 15–45 and want to{" "}
                        <span className="text-my-black dark:text-white font-medium">build wealth</span>, there’s no tool better than
                        this.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        It combines everything:
                        <br />
                        <span className="text-my-black dark:text-white font-medium">
                          Regular SIPs, Step-Up SIPs, Inflation Adjustment, Lumpsum
                          investments, ELSS integration, asset allocation guidance
                        </span>
                        , and more.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        It’s not just a calculator — it’s a{" "}
                        <span className="text-my-black dark:text-white font-medium">financial decision engine</span> for serious
                        investors.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">
                          Q1: Can I use this SIP calculator for all HDFC funds?
                        </span>
                        <br />
                        Yes, including <span className="text-my-black dark:text-white font-medium">Flexi Cap</span>,{" "}
                        <span className="text-my-black dark:text-white font-medium">Mid Cap</span>, <span className="text-my-black dark:text-white font-medium">Hybrid</span>, and{" "}
                        <span className="text-my-black dark:text-white font-medium">Equity Funds</span>.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">
                          Q2: Does this support tax-saving funds like ELSS?
                        </span>
                        <br />
                        Absolutely. It works with ELSS to help you plan under{" "}
                        <span className="text-my-black dark:text-white font-medium">₹1.5 lakh Section 80C limit</span>.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Q3: How does it help with portfolio planning?</span>
                        <br />
                        You can simulate different fund strategies for{" "}
                        <span className="text-my-black dark:text-white font-medium">asset allocation</span> and diversification.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Q4: What if I miss a SIP month?</span>
                        <br />
                        That can reduce your corpus. Some calculators also show{" "}
                        <span className="text-my-black dark:text-white font-medium">SIP miss penalty</span> if supported.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">
                          Q5: Where can I compare SIP vs. Lumpsum returns?
                        </span>
                        <br />
                        Right in our tool. We offer{" "}
                        <span className="text-my-black dark:text-white font-medium">SIP vs lumpsum comparison</span> for all HDFC funds.
                      </p>
                    </div>
                    <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                      <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                      <ul className="toc-list  flex flex-col gap-2 ">
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#What_is_the_HDFC_SIP_Calculator">
                            <span className="toc_number toc_depth_1">1</span> What
                            is the HDFC SIP Calculator?
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Why_Use_a_SIP_Calculator">
                                <span className="toc_number toc_depth_2">1.1</span>{" "}
                                Why Use a SIP Calculator?
                              </a>
                            </li>
                            <li>
                              <a href="#Key_Benefits_of_Using_HDFC_SIP_Calculator">
                                <span className="toc_number toc_depth_2">1.2</span>{" "}
                                Key Benefits of Using HDFC SIP Calculator:
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#How_Does_the_HDFC_SIP_Calculator_Work">
                            <span className="toc_number toc_depth_1">2</span> How
                            Does the HDFC SIP Calculator Work?
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Core_Calculation_Formula">
                                <span className="toc_number toc_depth_2">2.1</span>{" "}
                                Core Calculation Formula
                              </a>
                            </li>
                            <li>
                              <a href="#Example_Calculation">
                                <span className="toc_number toc_depth_2">2.2</span>{" "}
                                Example Calculation
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#Key_Features_of_the_HDFC_SIP_Calculator">
                            <span className="toc_number toc_depth_1">3</span> Key
                            Features of the HDFC SIP Calculator
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Regular_SIP_Calculation">
                                <span className="toc_number toc_depth_2">3.1</span>{" "}
                                Regular SIP Calculation
                              </a>
                            </li>
                            <li>
                              <a href="#Step-Up_SIP_Calculator_HDFC_SIP_Step_Up_Calculator">
                                <span className="toc_number toc_depth_2">3.2</span>{" "}
                                Step-Up SIP Calculator (HDFC SIP Step Up Calculator)
                              </a>
                            </li>
                            <li>
                              <a href="#Inflation-Adjusted_SIP_Calculation">
                                <span className="toc_number toc_depth_2">3.3</span>{" "}
                                Inflation-Adjusted SIP Calculation
                              </a>
                            </li>
                            <li>
                              <a href="#Lumpsum_SIP_Calculator_HDFC_Lumpsum_Calculator">
                                <span className="toc_number toc_depth_2">3.4</span>{" "}
                                Lumpsum SIP Calculator (HDFC Lumpsum Calculator)
                              </a>
                            </li>
                            <li>
                              <a href="#How_to_Use_Our_HDFC_SIP_Calculator_Tool">
                                <span className="toc_number toc_depth_2">3.5</span>{" "}
                                How to Use Our HDFC SIP Calculator Tool?
                              </a>
                            </li>
                            <li>
                              <a href="#Step-by-Step_Guide">
                                <span className="toc_number toc_depth_2">3.6</span>{" "}
                                Step-by-Step Guide
                              </a>
                            </li>
                            <li>
                              <a href="#User_Interface_Walkthrough">
                                <span className="toc_number toc_depth_2">3.7</span>{" "}
                                User Interface Walkthrough
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#HDFC_SIP_Plan_Options_Integration_with_Calculator">
                            <span className="toc_number toc_depth_1">4</span> HDFC
                            SIP Plan Options &amp; Integration with Calculator
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Top_HDFC_Mutual_Funds_You_Can_Use_with_This_Calculator">
                                <span className="toc_number toc_depth_2">4.1</span>{" "}
                                Top HDFC Mutual Funds You Can Use with This
                                Calculator
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#Matching_SIP_Amount_to_Investment_Goals">
                            <span className="toc_number toc_depth_1">5</span>{" "}
                            Matching SIP Amount to Investment Goals
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Real-Life_Case_Studies">
                                <span className="toc_number toc_depth_2">5.1</span>{" "}
                                Real-Life Case Studies
                              </a>
                            </li>
                            <li>
                              <a href="#Case_Study_1_First-Time_Investor_Age_22">
                                <span className="toc_number toc_depth_2">5.2</span>{" "}
                                Case Study 1 – First-Time Investor (Age 22)
                              </a>
                            </li>
                            <li>
                              <a href="#Case_Study_2_Mid-Career_Professional_Age_35">
                                <span className="toc_number toc_depth_2">5.3</span>{" "}
                                Case Study 2 – Mid-Career Professional (Age 35)
                              </a>
                            </li>
                            <li>
                              <a href="#Comparison_with_Other_HDFC_SIP_Calculators">
                                <span className="toc_number toc_depth_2">5.4</span>{" "}
                                Comparison with Other HDFC SIP Calculators
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#Understanding_SIP_Better_for_New_Investors">
                            <span className="toc_number toc_depth_1">6</span>{" "}
                            Understanding SIP Better for New Investors
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#What_is_SIP_Systematic_Investment_Plan">
                                <span className="toc_number toc_depth_2">6.1</span>{" "}
                                What is SIP (Systematic Investment Plan)?
                              </a>
                            </li>
                            <li>
                              <a href="#Benefits_of_SIP_Investing_for_Young_Indians">
                                <span className="toc_number toc_depth_2">6.2</span>{" "}
                                Benefits of SIP Investing for Young Indians
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#Common_Mistakes_to_Avoid_in_SIP_Investing">
                            <span className="toc_number toc_depth_1">7</span> Common
                            Mistakes to Avoid in SIP Investing
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Ignoring_Inflation">
                                <span className="toc_number toc_depth_2">7.1</span>{" "}
                                Ignoring Inflation
                              </a>
                            </li>
                            <li>
                              <a href="#Not_Using_Step-Up_Feature">
                                <span className="toc_number toc_depth_2">7.2</span>{" "}
                                Not Using Step-Up Feature
                              </a>
                            </li>
                            <li>
                              <a href="#Stopping_SIP_During_Market_Downturn">
                                <span className="toc_number toc_depth_2">7.3</span>{" "}
                                Stopping SIP During Market Downturn
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="text-dark-green flex flex-col gap-1">
                          <a href="#Best_Performing_HDFC_Mutual_Funds">
                            <span className="toc_number toc_depth_1">8</span> Best
                            Performing HDFC Mutual Funds
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li>
                              <a href="#Final_Thoughts_Why_Our_HDFC_SIP_Calculator_is_the_Best_Tool_for_2025">
                                <span className="toc_number toc_depth_2">8.1</span>{" "}
                                Final Thoughts – Why Our HDFC SIP Calculator is the
                                Best Tool for 2025
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:py-[50px] lg:pb-0 py-8 lg:w-4/12 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-3xl text-xl text-my-black font-semibold dark:text-white">
                      Here are other Most important SIP calculators:
                    </h2>{" "}
                    <ul className="flex flex-col gap-2 list-disc pl-5 p-5">
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
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
