import RootLayout from "@/app/layout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Icici() {
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
            <h1 className="font-raleway text-center leading-[48px] text-2xl md:text-[40px] text-my-black dark:text-white font-bold lg:max-w-[700px]" >
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
                <div className="block mb-8">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="What_is_the_HDFC_SIP_Calculator">
                      What is the ICICI SIP Calculator?
                    </span>
                  </h2>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    Imagine trying to plan a cross-country road trip without a
                    GPS. That’s exactly what investing feels like when you’re
                    guessing how much your money will grow. The ICICI SIP
                    Calculator is that GPS for your investments.
                  </p>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    It’s a simple tool that shows you exactly what your monthly
                    SIP (Systematic Investment Plan) can turn into after a few
                    years. You punch in your investment amount, your expected
                    returns, your time horizon — and boom, you get your future
                    wealth right there.
                  </p>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    Picture this: You invest ₹5,000 a month for 15 years at a 12%
                    return. The calculator flashes ₹18 lakh. Not bad, right?
                  </p>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading  lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="Why_Should_You_Use_the_ICICI_SIP_Calculator">

                      Why Should You Use the ICICI SIP Calculator?

                    </span>
                  </h2>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    Here’s the raw truth — investing blindly is like trying to win
                    a cricket match with your eyes closed. It doesn’t end well.
                    The ICICI SIP Calculator gives you clarity upfront.
                  </p>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    It saves you from unrealistic dreams and shocking
                    disappointments. It sets real, achievable targets based on
                    what you can invest.
                  </p>
                  <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                    Take Aditya, a young techie from Pune. He started a ₹2,000 SIP
                    after using this calculator. Fast forward ten years, he’s
                    sitting on ₹6.8 lakh — all because he had a clear roadmap.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Key_Features_of_the_ICICI_SIP_Calculator">
                        Key Features of the ICICI SIP Calculator
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Simple and clean user interface, even your parents could use
                        it
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Options to calculate Regular SIP, Step-Up SIP,
                        Inflation-Adjusted SIP, and Lump Sum investments
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Dynamic graphs showing how your money grows over time</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Ability to simulate returns for different scenarios like 8%,
                        10%, and 12%
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      It doesn’t just tell you numbers. It tells you a story about
                      your future.
                    </p>
                  </div>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="How_Does_the_ICICI_SIP_Calculator_Work">
                      How Does the ICICI SIP Calculator Work?
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Here is how this ICICI SIP calc works!</p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Basic_SIP_Calculation_Formula">
                        Basic SIP Calculation Formula
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Let’s cut the noise and get to the formula:
                      <br />
                      Future Value = P × [(1+r)^n -1] ÷ r × (1+r)
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Where:
                      <br />P = Your monthly SIP amount
                      <br />r = Monthly return rate (Annual return divided by 12)
                      <br />n = Total number of months
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      You don’t have to crunch these numbers manually though. That’s
                      what the calculator is for.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Calculation">
                        Step-Up SIP Calculation
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Want to invest a little more every year? Smart move. Step-Up
                      SIP lets you increase your investment by a percentage every
                      year.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Suppose you start with ₹5,000 and step it up by 10% annually.
                      At 12% returns over 20 years, you don’t just get rich — you
                      practically double your final corpus compared to a fixed SIP.
                      It’s the kind of growth you brag about at reunions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Calculation">
                        Inflation-Adjusted SIP Calculation
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Inflation is that silent pickpocket that steals from your
                      future. That’s why we need to adjust expectations for
                      inflation.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      If you plan for ₹1 crore without considering inflation, don’t
                      be surprised if it feels like ₹40 lakh by the time you retire.
                      Always add an inflation figure while calculating SIP returns.
                      Always.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Calculation">
                        Lump Sum Investment Calculation
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Got a bonus or a fat paycheck? Instead of blowing it on the
                      newest iPhone, use the Lump Sum calculator.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      For example: A ₹5 lakh one-time investment at 12% for 10 years
                      becomes ₹15.5 lakh. That’s some serious compounding magic
                      right there.
                    </p>
                  </div>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white mb-8">
                    <span id="Step-by-Step_Guide_How_to_Use_ICICI_SIP_Calculator">

                      Step-by-Step Guide: How to Use ICICI SIP Calculator

                    </span>
                  </h2>
                  <ol className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                    <li className="text-base text-my-black dark:text-white ">1. Enter your monthly investment amount</li>
                    <li className="text-base text-my-black dark:text-white ">2. Choose your expected annual return rate</li>
                    <li className="text-base text-my-black dark:text-white ">3. Select the number of years you want to invest</li>
                    <li className="text-base text-my-black dark:text-white ">4. Add Step-Up percentage if you want to increase yearly</li>
                    <li className="text-base text-my-black dark:text-white ">5. Factor in inflation if you want real-world numbers</li>
                    <li className="text-base text-my-black dark:text-white ">6. Click ‘Calculate’ and sit back</li>
                    <li className="text-base text-my-black dark:text-white ">
                      7. Review your total investment, returns, and wealth gain
                    </li>
                  </ol>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">It’s faster than ordering a coffee.</p>
                  <div className="flex flex-col gap-5 pt-5">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Different_Types_of_SIP_Calculations_Offered">
                        Different Types of SIP Calculations Offered
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Here is different types of SIP calculations!</p>
                  </div>
                  <div className="flex flex-col gap-5 pt-5">
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Regular_SIP_Calculator">
                          Regular SIP Calculator
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        The bread-and-butter option. You invest a fixed amount every
                        month, no changes, no surprises.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Step-Up_SIP_Calculator">
                          Step-Up SIP Calculator
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        As your salary grows, your SIP grows. 5%, 10%, even 20% yearly
                        step-ups can dramatically boost your final returns without
                        pinching your monthly budget too much.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Here’s a fact: A ₹5,000 monthly SIP with 10% annual step-up
                        can outperform a flat ₹7,000 monthly SIP over 20 years. It’s
                        crazy.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Inflation-Adjusted_SIP_Calculator">
                          Inflation-Adjusted SIP Calculator
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        This mode shows you the real purchasing power of your money
                        after inflation eats into it. Perfect for those who want
                        brutal financial honesty.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Lump_Sum_Calculator">Lump Sum Calculator</span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        One-time investments need a separate approach. Lump Sum mode
                        shows you how your bonus or windfall can grow over time.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Why_Step-Up_SIP_is_a_Smart_Strategy_for_Young_Investors">
                          Why Step-Up SIP is a Smart Strategy for Young Investors
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        If you’re in your 20s or early 30s, the Step-Up SIP is like
                        having a secret superpower.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        You start small when your salary is low. As you earn more, you
                        invest more — without feeling any major burden. It’s a silent
                        wealth escalator.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Small boosts each year compound into massive gains later. This
                        strategy literally turns middle-class investors into
                        crorepatis over 20–30 years.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Importance_of_Considering_Inflation_in_SIP_Returns">
                          Importance of Considering Inflation in SIP Returns
                        </span>
                      </h3>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Planning without accounting for inflation is like building a
                        sandcastle during a rising tide. It looks great — until
                        reality hits.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Every rupee you invest today loses value tomorrow. So if you
                        dream of ₹1 crore, you actually need ₹1.5 crore to match
                        today’s lifestyle 20 years from now.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Always add an inflation rate (usually 5%-7%) to your SIP
                        calculations. Trust me, your future self will want to thank
                        you, not curse you.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="ICICI_SIP_Plan_Options_You_Can_Explore">
                          ICICI SIP Plan Options You Can Explore
                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-my-black dark:text-white ">
                          ICICI Prudential Bluechip Fund: Perfect if you believe in
                          India’s biggest companies
                        </li>
                        <li className="text-base text-my-black dark:text-white ">
                          ICICI Prudential Technology Fund: Great for those who see
                          tech booming over the next decade
                        </li>
                        <li className="text-base text-my-black dark:text-white ">
                          ICICI Prudential Balanced Advantage Fund: Ideal if you want
                          growth with a safety net
                        </li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Each plan suits different dreams. Choose what matches yours.
                      </p>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Quick verdict: ICICI SIPs offer some serious firepower —
                        especially if you want flexibility and smarter planning tools.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Tips_to_Maximize_Your_SIP_Returns_Using_the_ICICI_SIP_Calculator">
                          Tips to Maximize Your SIP Returns Using the ICICI SIP
                          Calculator
                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-my-black dark:text-white ">Start as early as possible</li>
                        <li className="text-base text-my-black dark:text-white ">Stay consistent; don’t miss SIPs</li>
                        <li className="text-base text-my-black dark:text-white ">Use Step-Up feature religiously</li>
                        <li className="text-base text-my-black dark:text-white ">Factor in inflation honestly</li>
                        <li className="text-base text-my-black dark:text-white ">Revisit your plan every year</li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        SIP is like fitness. Consistency wins. Overthinking doesn’t.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                        <span id="Common_Mistakes_to_Avoid_While_Using_SIP_Calculators">
                          Common Mistakes to Avoid While Using SIP Calculators
                        </span>
                      </h3>
                      <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-my-black dark:text-white ">
                          Setting return expectations too high (Stick to 10%-12%, not
                          20%)
                        </li>
                        <li className="text-base text-my-black dark:text-white ">Ignoring inflation completely</li>
                        <li className="text-base text-my-black dark:text-white ">Forgetting to plan step-ups</li>
                        <li className="text-base text-my-black dark:text-white ">Skipping annual review of your investment plan</li>
                      </ul>
                      <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                        Avoid these rookie mistakes if you want your portfolio to
                        smile back at you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="FAQs_About_ICICI_SIP_Calculator">
                      FAQs About ICICI SIP Calculator
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Is_the_ICICI_SIP_Calculator_free_to_use">
                        Is the ICICI SIP Calculator free to use?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Yes, it’s absolutely free. You can use it as many times as you
                      want, whenever you want.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_I_plan_Step-Up_SIPs_using_the_calculator">
                        Can I plan Step-Up SIPs using the calculator?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Definitely. Step-up SIP calculations are baked right into the
                      tool. Just add your percentage increase.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="What_rate_of_return_should_I_assume">
                        What rate of return should I assume?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Stick between 8%-12% depending on your risk appetite. Higher
                      rates can happen but shouldn’t be your default assumption.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_often_should_I_update_my_SIP_calculations">
                        How often should I update my SIP calculations?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Once a year minimum, or whenever your income or financial
                      goals change dramatically.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_I_use_it_for_Lump_Sum_investments_too">
                        Can I use it for Lump Sum investments too?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Yes. Our new ICICI SIP Calculator supports Lump Sum
                      calculations alongside SIPs.
                    </p>
                  </div>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="Best_Performing_ICICI_Prudential_Mutual_Funds_Long-Term">

                      Best Performing ICICI Prudential Mutual Funds (Long-Term)

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
                            ICICI Prudential Infrastructure Fund – Direct Plan
                            (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">39.75</td>
                          <td className="px-3 py-2 text-center">16.54</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking sectoral exposure to infrastructure
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential BHARAT 22 FOF – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">34.17</td>
                          <td className="px-3 py-2 text-center">25.51 (since 2018)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking diversified equity with no lock-in
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential India Opportunities Fund – Direct
                            Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">32.98</td>
                          <td className="px-3 py-2 text-center">21.99 (since 2018)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking thematic equity exposure</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Value Discovery Fund – Direct Plan
                            (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">31.75</td>
                          <td className="px-3 py-2 text-center">20.2</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking value stocks for long-term growth
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Large &amp; Mid Cap Fund – Direct
                            Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">31.61</td>
                          <td className="px-3 py-2 text-center">18.5</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking balanced large and mid-cap exposure
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Equity &amp; Debt Fund – Direct Plan
                            (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">29.33</td>
                          <td className="px-3 py-2 text-center">17.5</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking hybrid equity-debt stability</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential MidCap Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">28.0</td>
                          <td className="px-3 py-2 text-center">15.8</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking mid-cap growth with high risk</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Bluechip Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">27.23</td>
                          <td className="px-3 py-2 text-center">15.9</td>
                          <td className="px-3 py-2 ">High</td>
                          <td className="px-3 py-2 ">Investors seeking stable large-cap returns</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Nifty Next 50 Index Fund – Direct
                            Plan (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">25.29</td>
                          <td className="px-3 py-2 text-center">14.7</td>
                          <td className="px-3 py-2 ">High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking passive exposure to Nifty Next 50
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            ICICI Prudential Balanced Advantage Fund – Direct Plan
                            (Growth)
                          </td>
                          <td className="px-3 py-2 text-center">18.59</td>
                          <td className="px-3 py-2 text-center">13.8</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking dynamic equity-debt allocation
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <div className="block mb-8 ">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="Conclusion_Start_Today_Thank_Yourself_Tomorrow">
                      Conclusion: Start Today, Thank Yourself Tomorrow
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Every dream needs a plan. Every plan needs a tool.</p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                    The ICICI SIP Calculator is not just a numbers game. It’s your
                    future laid out in black and white.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Stop guessing. Start planning.</p>
                </div>
                <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                  <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                  <ul className="toc-list  flex flex-col gap-2 ">
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Why_Should_You_Use_the_ICICI_SIP_Calculator">
                        <span className="toc_number toc_depth_1">1</span> Why
                        Should You Use the ICICI SIP Calculator?
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Key_Features_of_the_ICICI_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.1</span>{" "}
                            Key Features of the ICICI SIP Calculator
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#How_Does_the_ICICI_SIP_Calculator_Work">
                        <span className="toc_number toc_depth_1">2</span> How
                        Does the ICICI SIP Calculator Work?
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Basic_SIP_Calculation_Formula">
                            <span className="toc_number toc_depth_2">2.1</span>{" "}
                            Basic SIP Calculation Formula
                          </a>
                        </li>
                        <li >
                          <a href="#Step-Up_SIP_Calculation">
                            <span className="toc_number toc_depth_2">2.2</span>{" "}
                            Step-Up SIP Calculation
                          </a>
                        </li>
                        <li >
                          <a href="#Inflation-Adjusted_SIP_Calculation">
                            <span className="toc_number toc_depth_2">2.3</span>{" "}
                            Inflation-Adjusted SIP Calculation
                          </a>
                        </li>
                        <li >
                          <a href="#Lump_Sum_Investment_Calculation">
                            <span className="toc_number toc_depth_2">2.4</span>{" "}
                            Lump Sum Investment Calculation
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Step-by-Step_Guide_How_to_Use_ICICI_SIP_Calculator">
                        <span className="toc_number toc_depth_1">3</span>{" "}
                        Step-by-Step Guide: How to Use ICICI SIP Calculator
                      </a>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Different_Types_of_SIP_Calculations_Offered">
                        <span className="toc_number toc_depth_1">4</span>{" "}
                        Different Types of SIP Calculations Offered
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Regular_SIP_Calculator">
                            <span className="toc_number toc_depth_2">4.1</span>{" "}
                            Regular SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Step-Up_SIP_Calculator">
                            <span className="toc_number toc_depth_2">4.2</span>{" "}
                            Step-Up SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Inflation-Adjusted_SIP_Calculator">
                            <span className="toc_number toc_depth_2">4.3</span>{" "}
                            Inflation-Adjusted SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Lump_Sum_Calculator">
                            <span className="toc_number toc_depth_2">4.4</span>{" "}
                            Lump Sum Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Why_Step-Up_SIP_is_a_Smart_Strategy_for_Young_Investors">
                            <span className="toc_number toc_depth_2">4.5</span>{" "}
                            Why Step-Up SIP is a Smart Strategy for Young
                            Investors
                          </a>
                        </li>
                        <li >
                          <a href="#Importance_of_Considering_Inflation_in_SIP_Returns">
                            <span className="toc_number toc_depth_2">4.6</span>{" "}
                            Importance of Considering Inflation in SIP Returns
                          </a>
                        </li>
                        <li >
                          <a href="#ICICI_SIP_Plan_Options_You_Can_Explore">
                            <span className="toc_number toc_depth_2">4.7</span>{" "}
                            ICICI SIP Plan Options You Can Explore
                          </a>
                        </li>
                        <li >
                          <a href="#Tips_to_Maximize_Your_SIP_Returns_Using_the_ICICI_SIP_Calculator">
                            <span className="toc_number toc_depth_2">4.8</span>{" "}
                            Tips to Maximize Your SIP Returns Using the ICICI
                            SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Common_Mistakes_to_Avoid_While_Using_SIP_Calculators">
                            <span className="toc_number toc_depth_2">4.9</span>{" "}
                            Common Mistakes to Avoid While Using SIP Calculators
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#FAQs_About_ICICI_SIP_Calculator">
                        <span className="toc_number toc_depth_1">5</span> FAQs
                        About ICICI SIP Calculator
                      </a>
                      <ul className="toc-list  flex flex-col gap-2 ">
                        <li className="text-base text-my-black dark:text-white ">
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li >
                              <a href="#Is_the_ICICI_SIP_Calculator_free_to_use">
                                <span className="toc_number toc_depth_3">
                                  5.0.1
                                </span>{" "}
                                Is the ICICI SIP Calculator free to use?
                              </a>
                            </li>
                            <li >
                              <a href="#Can_I_plan_Step-Up_SIPs_using_the_calculator">
                                <span className="toc_number toc_depth_3">
                                  5.0.2
                                </span>{" "}
                                Can I plan Step-Up SIPs using the calculator?
                              </a>
                            </li>
                            <li >
                              <a href="#What_rate_of_return_should_I_assume">
                                <span className="toc_number toc_depth_3">
                                  5.0.3
                                </span>{" "}
                                What rate of return should I assume?
                              </a>
                            </li>
                            <li >
                              <a href="#How_often_should_I_update_my_SIP_calculations">
                                <span className="toc_number toc_depth_3">
                                  5.0.4
                                </span>{" "}
                                How often should I update my SIP calculations?
                              </a>
                            </li>
                            <li >
                              <a href="#Can_I_use_it_for_Lump_Sum_investments_too">
                                <span className="toc_number toc_depth_3">
                                  5.0.5
                                </span>{" "}
                                Can I use it for Lump Sum investments too?
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Best_Performing_ICICI_Prudential_Mutual_Funds_Long-Term">
                        <span className="toc_number toc_depth_1">6</span> Best
                        Performing ICICI Prudential Mutual Funds (Long-Term)
                      </a>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Conclusion_Start_Today_Thank_Yourself_Tomorrow">
                        <span className="toc_number toc_depth_1">7</span>{" "}
                        Conclusion: Start Today, Thank Yourself Tomorrow
                      </a>
                    </li>
                  </ul>
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
