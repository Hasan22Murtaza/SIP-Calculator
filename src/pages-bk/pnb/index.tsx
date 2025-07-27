import RootLayout from "@/app/layout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Pnb() {
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
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="What_is_the_IDBI_SIP_Calculator">
                      What is the PNB Bank SIP Calculator?
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Imagine playing cricket blindfolded. You might swing your bat,
                    but hitting the ball? Pure luck.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                    That’s exactly what investing without a plan feels like. The{" "}
                    <strong>PNB Bank SIP Calculator</strong> fixes that. It shows
                    you — clearly and quickly — how your small monthly SIPs can
                    snowball into serious wealth over time.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                    Say you invest ₹4,000 every month for 15 years at an expected
                    12% return. You’re not just saving ₹7.2 lakh. You’re building a
                    handsome ₹20 lakh future. That’s not a dream — that’s the power
                    of disciplined investing backed by smart planning.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Why_Smart_Investors_Always_Use_the_PNB_Bank_SIP_Calculator_Before_Investing">

                        Why Smart Investors Always Use the PNB Bank SIP Calculator
                        Before Investing

                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Most people invest first, and then hope. Smart people plan
                      first, and then invest with certainty.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      When you use the <span className="text-my-black dark:text-white font-medium">PNB Bank SIP Calculator</span>,
                      you’re not guessing. You’re setting clear financial goals.
                      You’re adjusting for inflation. You’re seeing realistic
                      projections — not daydreams.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Take Varun’s story. He wanted ₹1 crore by age 50. By using the
                      calculator, he realized starting a ₹7,500 SIP at 28 with a 10%
                      Step-Up every year could hit his goal easily. That’s the kind of
                      real control this tool gives you.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Key_Features_of_the_PNB_Bank_SIP_Calculator">
                        <strong>Key Features of the PNB Bank SIP Calculator</strong>
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Predicts future SIP returns instantly</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Supports Step-Up SIP calculations for dynamic growth</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Provides inflation-adjusted real value projections</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Allows Lump Sum investment projections</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Simple, clean graphs for easy understanding</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      This isn’t just a tool. It’s a future-planning machine — easy
                      enough for anyone to use, powerful enough for serious wealth
                      builders.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_the_PNB_Bank_SIP_Calculator_Works">
                        How the PNB Bank SIP Calculator Works
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Basic_SIP_Growth_Formula_Explained">
                        Basic SIP Growth Formula Explained
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Here’s the core formula:</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Future Value = P × [(1+r)^n -1] ÷ r × (1+r)</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Where:
                      <br />P = Your monthly investment
                      <br />r = Monthly return rate (annual rate divided by 12)
                      <br />n = Total number of months
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      It might sound like rocket science, but the calculator does the
                      math for you. You just enter your details and watch your future
                      take shape.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Calculation_Mechanism">
                        Step-Up SIP Calculation Mechanism
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Step-Up SIPs are like adding a turbocharger to your
                      wealth-building journey.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Instead of sticking to the same ₹5,000 per month, you increase
                      it every year — say by 10%. Tiny hikes. Massive results.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Example: Start with ₹5,000 monthly SIP at 10% returns. With 10%
                      Step-Up yearly, you could build ₹1.2 crore in 20 years instead
                      of ₹76 lakh with a flat SIP.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">One small tweak. One giant leap for your future self.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Corpus_Projection">
                        Inflation-Adjusted SIP Corpus Projection
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Ignoring inflation is like filling a bucket with holes.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      You think ₹1 crore will secure your future? Maybe not. At 6%
                      inflation, ₹1 crore 20 years from now would feel like ₹32 lakh
                      today.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      That’s why the inflation-adjusted mode is priceless. It shows
                      the real value of your money, and what you actually need to aim
                      for.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Projection_Formula">
                        <strong>Lump Sum Investment Projection Formula</strong>
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Have a bonus, gift, or a one-time amount? The Lump Sum mode
                      shows how it could grow.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Example: ₹2 lakh invested today at 11% return for 12 years can
                      quietly blossom into ₹7 lakh — no extra effort needed.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Money doesn’t sleep. Neither should your planning.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Step-by-Step_Tutorial_How_to_Use_the_PNB_Bank_SIP_Calculator">

                        Step-by-Step Tutorial: How to Use the PNB Bank SIP
                        Calculator

                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Enter your monthly SIP amount</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Choose your expected annual return</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Set the number of investment years</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        (Optional) Add a Step-Up percentage for annual SIP growth
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">(Optional) Input expected inflation rate</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Click “Calculate” and review your total wealth, returns, and
                        inflation-adjusted corpus
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      In less than a minute, you’ll know exactly what your financial
                      future looks like.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Types_of_SIP_Calculations_Offered_by_PNB_Bank_SIP_Calculator">

                        Types of SIP Calculations Offered by PNB Bank SIP Calculator

                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Regular_SIP_Calculation">
                        Regular SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Fixed SIPs. Fixed monthly investments. Predictable and easy to
                      stick to.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Ideal for beginners or people who like a no-surprises approach
                      to building wealth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">

                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Calculation">
                        Step-Up SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Real life isn’t static. Your salary rises. Your SIP should too.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      With Step-Up SIPs, you can grow your monthly investments
                      automatically every year, compounding your gains aggressively.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Example: ₹6,000 SIP with a 10% annual Step-Up builds ₹1 crore in
                      18 years — faster and bigger than a regular SIP could.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Calculation">
                        Inflation-Adjusted SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Your dream ₹50 lakh corpus today could shrink dramatically over
                      20 years if inflation keeps gnawing at it.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Inflation-adjusted planning tells you the truth. No
                      sugar-coating. Just brutal financial honesty.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Calculation">
                        Lump Sum Investment Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      For people who get bonuses, inheritance, or sell an asset — lump
                      sum planning shows how one-time investments multiply over time.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      This way, you don’t just spend a bonus. You turn it into a
                      freedom machine.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Why_Step-Up_SIPs_Are_a_Winning_Strategy_for_Young_Investors">

                        Why Step-Up SIPs Are a Winning Strategy for Young Investors

                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Time is your biggest ally if you’re young.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      By starting early and stepping up your SIPs every year even by a
                      small amount — say ₹500 more — you build momentum that feels
                      invisible today but becomes unstoppable later.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Reena, a 26-year-old marketing executive, used a Step-Up SIP of
                      ₹5,000 + 10% yearly increase. She quietly built ₹90 lakh by 46 —
                      without ever feeling a heavy monthly burden.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Smart. Quiet. Deadly effective.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_Inflation_Can_Undermine_Your_SIP_Goals_If_Ignored">

                        How Inflation Can Undermine Your SIP Goals (If Ignored)

                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Inflation is like silent termites chewing your wooden dreams.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      What feels enough today will feel woefully inadequate later if
                      you don’t adjust your planning. ₹25,000 monthly expenses today?
                      Expect ₹80,000+ monthly needs in 20 years if inflation holds at
                      6%.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Ignoring inflation is not a risk. It’s a guaranteed failure.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Plan better. Fight inflation smarter with calculators that
                      actually factor it in.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Popular_PNB_Mutual_Fund_SIP_Plans_You_Can_Explore">

                        Popular PNB Mutual Fund SIP Plans You Can Explore

                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">PNB MetLife Flexi Cap Fund</span>: Diversified
                        equity growth
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">PNB Gilts Mutual Fund SIP</span>: Safer,
                        government-backed returns
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">PNB Housing SIP Plans</span>: For targeted real
                        estate wealth
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Each of these has strengths depending on whether you want high
                      growth, stable income, or goal-specific investments.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Pick the fund that matches your future — not your neighbor’s.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Expert_Tips_to_Maximize_the_PNB_Bank_SIP_Calculator_Benefits">

                        Expert Tips to Maximize the PNB Bank SIP Calculator Benefits

                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Start early — even ₹500 monthly beats ₹5,000 started 10 years
                        late
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Be realistic with returns — 8%-12% assumptions work best
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Step up your SIP yearly — by 5%, 10%, whatever your salary
                        allows
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Always adjust for 5%-7% inflation</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Review your SIP strategy once every 12 months</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Compounding rewards the consistent, not the perfect.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Common_Mistakes_to_Avoid_While_Using_SIP_Calculators">

                        Common Mistakes to Avoid While Using SIP Calculators

                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Believing in unrealistic 20% return assumptions</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Ignoring the impact of inflation on goals</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Skipping Step-Up feature despite salary hikes</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Never reviewing investment goals annually</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      SIP calculators show you the roadmap. But you still have to
                      drive smartly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="FAQs_About_PNB_Bank_SIP_Calculato">
                        FAQs About PNB Bank SIP Calculator
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Is_the_PNB_Bank_SIP_Calculator_free_to_use">
                        Is the PNB Bank SIP Calculator free to user?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Yes, completely free, and unlimited usage allowed.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Does_it_support_Step-Up_and_Inflation-Adjusted_SIP_planning">

                        Does it support Step-Up and Inflation-Adjusted SIP planning

                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Absolutely. It’s built to show real-world, future-proof
                      planning.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="What_annual_return_should_I_assume_realistically">

                        What annual return should I assume realistically?

                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      For long-term equity SIPs, plan using 10%-12% return estimates
                      for safe planning.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_often_should_I_update_or_recalculate_my_SIP_plan">

                        How often should I update or recalculate my SIP plan?

                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Ideally once a year, or whenever there’s a big change in your
                      income or financial goals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_I_calculate_one-time_Lump_Sum_investment_growth_too">

                        Can I calculate one-time Lump Sum investment growth too?

                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Yes. PNB Bank SIP Calculator lets you project both SIPs and
                      one-time lump sum investments easily.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Top 10 Best Performing PNB MetLife ULIP Funds (Long-Term)</p>
                  </div>
                </div>
                <div className="block mb-8">
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
                          <td className="px-3 py-2 ">PNB MetLife Virtue II Fund</td>
                          <td className="px-3 py-2 text-center">18.5</td>
                          <td className="px-3 py-2 text-center">13.5</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Aggressive investors seeking equity growth with life
                            cover
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Multiplier II Fund</td>
                          <td className="px-3 py-2 text-center ">17.8</td>
                          <td className="px-3 py-2 text-center">12.8</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking high equity exposure and long-term
                            wealth
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Bharat Manufacturing Fund</td>
                          <td className="px-3 py-2 text-center">17.0 (3-Year: 20.5)</td>
                          <td className="px-3 py-2 text-center">N/A (since 2024)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking thematic manufacturing growth with
                            high risk
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Flexi Cap Fund</td>
                          <td className="px-3 py-2 text-center">16.5</td>
                          <td className="px-3 py-2 text-center">12.0</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking diversified equity across market caps
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Premier Multi-Cap Fund</td>
                          <td className="px-3 py-2 text-center">16.0</td>
                          <td className="px-3 py-2 text-center">11.8</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking multi-cap growth with long-term
                            horizon
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Equity Fund</td>
                          <td className="px-3 py-2 text-center">15.5</td>
                          <td className="px-3 py-2 text-center">11.5</td>
                          <td className="px-3 py-2 ">High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking stable large-cap equity returns with
                            life cover
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Mid Cap Fund</td>
                          <td className="px-3 py-2 text-center">15.0</td>
                          <td className="px-3 py-2 text-center">11.0 (since 2017)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking mid-cap growth with high risk</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Balanced Fund</td>
                          <td className="px-3 py-2 text-center">12.5</td>
                          <td className="px-3 py-2 text-center">9.5</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking equity-debt balance with moderate risk
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Protector II Fund</td>
                          <td className="px-3 py-2 text-center">10.5</td>
                          <td className="px-3 py-2 text-center">8.5</td>
                          <td className="px-3 py-2 ">Moderate</td>
                          <td className="px-3 py-2 ">
                            Investors seeking debt-heavy stability with some equity
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">PNB MetLife Liquid Fund</td>
                          <td className="px-3 py-2 text-center">6.5</td>
                          <td className="px-3 py-2 text-center">6.0</td>
                          <td className="px-3 py-2 ">Low</td>
                          <td className="px-3 py-2 ">
                            Conservative investors seeking short-term stability
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Conclusion_Your_Future_Self_Will_Thank_You_for_Using_the_PNB_Bank_SIP_Calculator">

                        Conclusion: Your Future Self Will Thank You for Using the
                        PNB Bank SIP Calculator

                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      You don’t build wealth by luck. You build it by smart, simple,
                      disciplined planning.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      The <span className="text-my-black dark:text-white font-medium">PNB Bank SIP Calculator</span> is more than a
                      tool. It’s a vision builder. A dream enabler.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Small actions today. Massive freedom tomorrow.</p>
                  </div>
                </div>
                <div className="block mb-8">
                  <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                    <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                    <ul className="toc_list flex flex-col gap-2">
                      <li className="text-dark-green flex flex-col gap-1">
                        <a href="#Why_Smart_Investors_Always_Use_the_PNB_Bank_SIP_Calculator_Before_Investing">
                          <span className="toc_number toc_depth_1">1</span> Why
                          Smart Investors Always Use the PNB Bank SIP Calculator
                          Before Investing
                        </a>
                        <ul className="text-dark-green pl-5 flex flex-col gap-1">
                          <li >
                            <a href="#Key_Features_of_the_PNB_Bank_SIP_Calculator">
                              <span className="toc_number toc_depth_2">1.1</span>{" "}
                              Key Features of the PNB Bank SIP Calculator
                            </a>
                          </li>
                          <li >
                            <a href="#How_the_PNB_Bank_SIP_Calculator_Works">
                              <span className="toc_number toc_depth_2">1.2</span>{" "}
                              How the PNB Bank SIP Calculator Works
                            </a>
                            <ul className="text-dark-green pl-5 flex flex-col gap-1">
                              <li >
                                <a href="#Basic_SIP_Growth_Formula_Explained">
                                  <span className="toc_number toc_depth_3">
                                    1.2.1
                                  </span>{" "}
                                  Basic SIP Growth Formula Explained
                                </a>
                              </li>
                              <li >
                                <a href="#Step-Up_SIP_Calculation_Mechanism">
                                  <span className="toc_number toc_depth_3">
                                    1.2.2
                                  </span>{" "}
                                  Step-Up SIP Calculation Mechanism
                                </a>
                              </li>
                              <li >
                                <a href="#Inflation-Adjusted_SIP_Corpus_Projection">
                                  <span className="toc_number toc_depth_3">
                                    1.2.3
                                  </span>{" "}
                                  Inflation-Adjusted SIP Corpus Projection
                                </a>
                              </li>
                              <li >
                                <a href="#Lump_Sum_Investment_Projection_Formula">
                                  <span className="toc_number toc_depth_3">
                                    1.2.4
                                  </span>{" "}
                                  Lump Sum Investment Projection Formula
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li >
                            <a href="#Step-by-Step_Tutorial_How_to_Use_the_PNB_Bank_SIP_Calculator">
                              <span className="toc_number toc_depth_2">1.3</span>{" "}
                              Step-by-Step Tutorial: How to Use the PNB Bank SIP
                              Calculator
                            </a>
                          </li>
                          <li >
                            <a href="#Types_of_SIP_Calculations_Offered_by_PNB_Bank_SIP_Calculator">
                              <span className="toc_number toc_depth_2">1.4</span>{" "}
                              Types of SIP Calculations Offered by PNB Bank SIP
                              Calculator
                            </a>
                            <ul className="text-dark-green pl-5 flex flex-col gap-1">
                              <li >
                                <a href="#Regular_SIP_Calculation">
                                  <span className="toc_number toc_depth_3">
                                    1.4.1
                                  </span>{" "}
                                  Regular SIP Calculation
                                </a>
                              </li>
                              <li >
                                <a href="#Step-Up_SIP_Calculation">
                                  <span className="toc_number toc_depth_3">
                                    1.4.2
                                  </span>{" "}
                                  Step-Up SIP Calculation
                                </a>
                              </li>
                              <li >
                                <a href="#Inflation-Adjusted_SIP_Calculation">
                                  <span className="toc_number toc_depth_3">
                                    1.4.3
                                  </span>{" "}
                                  Inflation-Adjusted SIP Calculation
                                </a>
                              </li>
                              <li >
                                <a href="#Lump_Sum_Investment_Calculation">
                                  <span className="toc_number toc_depth_3">
                                    1.4.4
                                  </span>{" "}
                                  Lump Sum Investment Calculation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li >
                            <a href="#Why_Step-Up_SIPs_Are_a_Winning_Strategy_for_Young_Investors">
                              <span className="toc_number toc_depth_2">1.5</span>{" "}
                              Why Step-Up SIPs Are a Winning Strategy for Young
                              Investors
                            </a>
                          </li>
                          <li >
                            <a href="#How_Inflation_Can_Undermine_Your_SIP_Goals_If_Ignored">
                              <span className="toc_number toc_depth_2">1.6</span>{" "}
                              How Inflation Can Undermine Your SIP Goals (If
                              Ignored)
                            </a>
                          </li>
                          <li >
                            <a href="#Popular_PNB_Mutual_Fund_SIP_Plans_You_Can_Explore">
                              <span className="toc_number toc_depth_2">1.7</span>{" "}
                              Popular PNB Mutual Fund SIP Plans You Can Explore
                            </a>
                          </li>
                          <li >
                            <a href="#Expert_Tips_to_Maximize_the_PNB_Bank_SIP_Calculator_Benefits">
                              <span className="toc_number toc_depth_2">1.8</span>{" "}
                              Expert Tips to Maximize the PNB Bank SIP Calculator
                              Benefits
                            </a>
                          </li>
                          <li >
                            <a href="#Common_Mistakes_to_Avoid_While_Using_SIP_Calculators">
                              <span className="toc_number toc_depth_2">1.9</span>{" "}
                              Common Mistakes to Avoid While Using SIP Calculators
                            </a>
                          </li>
                          <li >
                            <a href="#FAQs_About_PNB_Bank_SIP_Calculato">
                              <span className="toc_number toc_depth_2">1.10</span>{" "}
                              FAQs About PNB Bank SIP Calculato
                            </a>
                            <ul className="text-dark-green pl-5 flex flex-col gap-1">
                              <li >
                                <a href="#Is_the_PNB_Bank_SIP_Calculator_free_to_use">
                                  <span className="toc_number toc_depth_3">
                                    1.10.1
                                  </span>{" "}
                                  Is the PNB Bank SIP Calculator free to use?
                                </a>
                              </li>
                              <li >
                                <a href="#Does_it_support_Step-Up_and_Inflation-Adjusted_SIP_planning">
                                  <span className="toc_number toc_depth_3">
                                    1.10.2
                                  </span>{" "}
                                  Does it support Step-Up and Inflation-Adjusted SIP
                                  planning
                                </a>
                              </li>
                              <li >
                                <a href="#What_annual_return_should_I_assume_realistically">
                                  <span className="toc_number toc_depth_3">
                                    1.10.3
                                  </span>{" "}
                                  What annual return should I assume realistically?
                                </a>
                              </li>
                              <li >
                                <a href="#How_often_should_I_update_or_recalculate_my_SIP_plan">
                                  <span className="toc_number toc_depth_3">
                                    1.10.4
                                  </span>{" "}
                                  How often should I update or recalculate my SIP
                                  plan?
                                </a>
                              </li>
                              <li >
                                <a href="#Can_I_calculate_one-time_Lump_Sum_investment_growth_too">
                                  <span className="toc_number toc_depth_3">
                                    1.10.5
                                  </span>{" "}
                                  Can I calculate one-time Lump Sum investment
                                  growth too?
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li >
                            <a href="#Conclusion_Your_Future_Self_Will_Thank_You_for_Using_the_PNB_Bank_SIP_Calculator">
                              <span className="toc_number toc_depth_2">1.11</span>{" "}
                              Conclusion: Your Future Self Will Thank You for Using
                              the PNB Bank SIP Calculator
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
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
