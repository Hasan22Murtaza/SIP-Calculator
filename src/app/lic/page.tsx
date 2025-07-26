"use client"
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Lic() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
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
                      What is the LIC Bank SIP Calculator?
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Imagine trying to plan a road trip without a map. That’s what
                    investing without a SIP calculator feels like.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    The LIC Bank SIP Calculator acts like a GPS for your money. You
                    tell it how much you want to invest every month, for how long,
                    and at what return — and it shows you where you’ll end up
                    financially.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    For example, if you invest ₹3,000 every month for 20 years
                    expecting 12% returns, you’re not just saving ₹7.2 lakh — you’re
                    building a ₹30 lakh corpus. Magic? Nope. Just math done right.
                  </p>
                </div>
                <div className="block mb-8">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="LIC_SIP_Calculator">
                      LIC SIP Calculator
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">Hope isn’t a strategy. Planning is.</p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    When you use the LIC SIP Calculator, you’re not throwing darts
                    blindfolded. You’re setting real, actionable goals based on real
                    numbers.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Priya, a 27-year-old working in Bangalore, dreamt of funding her
                    MBA abroad. Instead of guessing, she used the LIC calculator. It
                    showed her that investing ₹10,000 monthly for 7 years could fund
                    her ₹12 lakh goal without taking loans. Clear numbers = clear
                    dreams.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Key_Features_of_the_LIC_Bank_SIP_Calculator">
                        <strong>Key Features of the LIC Bank SIP Calculator</strong>
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Regular SIP calculation for predictable investing</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Step-Up SIP option for growing contributions</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Inflation-adjusted SIP projections for reality checks</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Lump Sum investment planning for bonus investors</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Instant results with detailed graphs and future projections
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      It’s not just a calculator. It’s like having a personal finance
                      coach in your pocket.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_Does_the_LIC_Bank_SIP_Calculator_Actually_Work">
                        How Does the LIC Bank SIP Calculator Actually Work?
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Basic_SIP_Calculation_Formula">
                        Basic SIP Calculation Formula
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Here’s the simple but powerful formula behind it:</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Future Value = P × [(1+r)^n -1] ÷ r × (1+r)</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Where:
                      <br />P = monthly investment
                      <br />r = monthly rate of return (annual return ÷ 12)
                      <br />n = number of months
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      The calculator handles all this behind the scenes. You just feed
                      it numbers and watch the magic unfold.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_Step-Up_SIP_Calculation_is_Different">
                        How Step-Up SIP Calculation is Different
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Step-Up SIP is the real cheat code.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      You start with a base monthly amount, but increase it every year
                      — say by 5% or 10%. Over time, these small step-ups snowball
                      your final corpus.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Example: A ₹5,000 SIP with a 10% annual step-up could grow into
                      ₹1.3 crore over 20 years, compared to just ₹76 lakh from a flat
                      SIP. That’s the power of tiny, consistent upgrades.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Calculation">
                        <strong>Inflation-Adjusted SIP Calculation</strong>
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Think saving ₹1 crore is enough? Think again.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      With inflation at 6%, ₹1 crore twenty years from now will feel
                      like ₹30 lakh today. That’s why inflation-adjusted SIP
                      calculations matter.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      They show you the <em>real</em> purchasing power of your money —
                      and how much more you need to invest to truly meet your goals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Growth_Formula">
                        <strong>Lump Sum Investment Growth Formula</strong>
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Sometimes you get lucky — a bonus, inheritance, or gift. Instead
                      of splurging, investing it smartly can change your future.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      If you invest ₹4 lakh today at 11% for 15 years, it quietly
                      becomes ₹18 lakh. No drama. No hustle. Just compounding working
                      while you sleep.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_to_Use_the_LIC_Bank_SIP_Calculator">
                        How to Use the LIC Bank SIP Calculator
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Enter your monthly SIP amount</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Choose your expected annual return</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Select how many years you want to stay invested</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Add a Step-Up percentage if you want your SIP to grow every
                        year
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Enter an expected inflation rate if you want realistic future
                        values
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Hit “Calculate” and let the numbers speak</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Takes less than 60 seconds. And can change the next 60 years of
                      your life.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Different_Types_of_Calculations_You_Can_Do_with_LIC_Bank_SIP_Calculato">

                        Different Types of Calculations You Can Do with LIC Bank SIP
                        Calculato

                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Regular_SIP_Calculation">
                        Regular SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Simple. Predictable. Fixed.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      You invest the same amount every month for a set period. Best
                      for beginners or those who prefer discipline without complexity.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Calculation">
                        Step-Up SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Life doesn’t stay still. Neither should your investments.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Step-Up SIPs let your monthly contribution grow along with your
                      salary hikes. Even a 5%-10% annual increase makes a mind-blowing
                      difference over 15-20 years.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Real Example: ₹5,000 SIP over 20 years at 10% returns with a 10%
                      annual Step-Up can build nearly double the wealth compared to a
                      fixed ₹5,000 SIP.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Calculation-2">
                        Inflation-Adjusted SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Don’t let inflation blindside you.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      The inflation-adjusted mode shows what your savings will{" "}
                      <em>really</em> be worth. Dreaming of ₹1 crore? You might need
                      to target ₹2 crore if you want the same lifestyle.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Better safe than sorry.</p>

                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Calculation">
                        Lump Sum Investment Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Got a sudden jackpot? Plan smart.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      The lump sum mode tells you how much your one-time investment
                      could grow into — whether it’s a ₹2 lakh bonus, ₹5 lakh
                      inheritance, or ₹1 lakh gift from your family.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Why_Step-Up_SIPs_Are_a_Hidden_Weapon_for_Young_Investors">

                        Why Step-Up SIPs Are a Hidden Weapon for Young Investors

                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      When you’re young, the one thing you have that billionaires
                      can’t buy? Time.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Starting small and stepping up consistently makes sure your
                      wealth grows exponentially without you feeling the pinch today.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Amit, 25, started with ₹4,000 per month. By stepping it up by
                      10% annually, he hit ₹1 crore by 45 — without ever feeling
                      financially stressed.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      That’s how you quietly build a fortune while living your best
                      life.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_Inflation_Can_Crush_Your_Future_Dreams_If_Ignored">
                        <strong>
                          How Inflation Can Crush Your Future Dreams If Ignored
                        </strong>
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      If you’re not factoring inflation into your goals, you’re
                      basically building castles on quicksand.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      The ₹50 lakh you save today could only buy ₹17 lakh worth of
                      goods 20 years later if inflation averages 6%. That’s not a
                      guess — that’s math.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Use the inflation adjustment slider in the LIC SIP Calculator.
                      Don’t let future you look back and wish you’d planned better.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Top_LIC_Mutual_Fund_SIP_Plans_to_Explore">
                        Top LIC Mutual Fund SIP Plans to Explore
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">LIC MF Large Cap Fund</span>: Invests in India’s
                        biggest, safest companies
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">LIC MF Tax Plan (ELSS)</span>: Save taxes while
                        building wealth
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">LIC MF Children’s Gift Fund</span>: Perfect if
                        you’re planning long-term for your kids’ education
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Choose your fund based on your dream, not your fear.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Pro_Tips_to_Get_the_Best_Results_Using_the_LIC_Bank_SIP_Calculator">

                        Pro Tips to Get the Best Results Using the LIC Bank SIP
                        Calculator

                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start early, even if it’s just ₹500 per month</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Assume 8%-12% returns, not crazy 20% dreams</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Adjust for inflation always</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Step-Up SIPs yearly for compounding on steroids</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Review your plan once a year</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Your future deserves the few minutes it takes to check the math
                      today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Mistakes_to_Avoid_When_Using_SIP_Calculators">
                        Mistakes to Avoid When Using SIP Calculators
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Setting unrealistic returns</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Ignoring inflation</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Skipping Step-Up planning</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Never reviewing SIPs even when your salary or goals change
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Mistakes compound just like money. Make the right ones.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="FAQs_About_LIC_Bank_SIP_Calculator">
                        FAQs About LIC Bank SIP Calculator
                      </span>
                    </h2>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Is_the_LIC_Bank_SIP_Calculator_free_to_use">
                        Is the LIC Bank SIP Calculator free to use?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">Yes. 100% free, with unlimited calculations.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_I_use_it_for_both_Regular_SIPs_and_Step-Up_SIPs">
                        Can I use it for both Regular SIPs and Step-Up SIPs?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Absolutely. Regular, Step-Up, and even inflation-adjusted
                      calculations are supported.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Should_I_adjust_returns_for_inflation_while_planning">
                        Should I adjust returns for inflation while planning?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">If you want your goals to stay real and achievable, yes.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_often_should_I_update_my_SIP_calculation">
                        How often should I update my SIP calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      At least once a year, or whenever there’s a major life or income
                      change.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Does_it_also_calculate_lump_sum_investment_growth">
                        Does it also calculate lump sum investment growth?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      Yes. You can project both monthly SIPs and single large
                      investments.
                    </p>
                  </div>
                </div>
                <div className="block mb-8">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="Best_Performing_LIC_Mutual_Funds_Long-Term">
                      Best Performing LIC Mutual Funds (Long-Term)
                    </span>
                  </h2>
                  <figure className="wp-block-table is-style-stripes w-full overflow-x-auto">
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
                            LIC MF Large &amp; Mid Cap Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 ">23.53</td>
                          <td className="px-3 py-2 ">14.8</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking large and mid-cap growth</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF ELSS Tax Saver Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">22.43</td>
                          <td className="px-3 py-2 ">13.5</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking tax benefits under Section 80C</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Flexi Cap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">19.4</td>
                          <td className="px-3 py-2 ">12.7</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking diversified equity across market caps
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Large Cap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">17.57</td>
                          <td className="px-3 py-2 ">12.3</td>
                          <td className="px-3 py-2 ">High</td>
                          <td className="px-3 py-2 ">Investors seeking stable large-cap returns</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Infrastructure Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">15.0</td>
                          <td className="px-3 py-2 ">11.5</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking thematic infrastructure exposure
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Midcap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">14.5</td>
                          <td className="px-3 py-2 ">11.0 (since 2017)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking mid-cap growth with high risk</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            LIC MF Balanced Advantage Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 ">13.8</td>
                          <td className="px-3 py-2 ">N/A (since 2021)</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking dynamic equity-debt allocation</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Equity Hybrid Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">13.5</td>
                          <td className="px-3 py-2 ">10.8</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking hybrid equity-debt stability</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Gold ETF FoF – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">13.0</td>
                          <td className="px-3 py-2 ">8.5</td>
                          <td className="px-3 py-2 ">Moderate</td>
                          <td className="px-3 py-2 ">
                            Investors seeking gold-based exposure with moderate risk
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">LIC MF Multi Cap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">12.5 (3-Year)</td>
                          <td className="px-3 py-2 ">N/A (since 2022)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking diversified multi-cap growth</td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <div className="block mb-8">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="Conclusion_Build_Your_Future_One_SIP_at_a_Time">

                      Conclusion: Build Your Future, One SIP at a Time

                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">Small steps today. Giant leaps tomorrow.</p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    The LIC Bank SIP Calculator doesn’t just show numbers. It shows
                    possibilities. It gives your dreams a concrete plan.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">Time waits for no one. Your investments shouldn’t either.</p>
                </div>

                <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                  <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                  <ul className="toc_list flex flex-col gap-2">
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#LIC_SIP_Calculator">
                        <span className="toc_number toc_depth_1">1</span> LIC SIP
                        Calculator
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Key_Features_of_the_LIC_Bank_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.1</span>{" "}
                            Key Features of the LIC Bank SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#How_Does_the_LIC_Bank_SIP_Calculator_Actually_Work">
                            <span className="toc_number toc_depth_2">1.2</span>{" "}
                            How Does the LIC Bank SIP Calculator Actually Work?
                          </a>
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li >
                              <a href="#Basic_SIP_Calculation_Formula">
                                <span className="toc_number toc_depth_3">
                                  1.2.1
                                </span>{" "}
                                Basic SIP Calculation Formula
                              </a>
                            </li>
                            <li >
                              <a href="#How_Step-Up_SIP_Calculation_is_Different">
                                <span className="toc_number toc_depth_3">
                                  1.2.2
                                </span>{" "}
                                How Step-Up SIP Calculation is Different
                              </a>
                            </li>
                            <li >
                              <a href="#Inflation-Adjusted_SIP_Calculation">
                                <span className="toc_number toc_depth_3">
                                  1.2.3
                                </span>{" "}
                                Inflation-Adjusted SIP Calculation
                              </a>
                            </li>
                            <li >
                              <a href="#Lump_Sum_Investment_Growth_Formula">
                                <span className="toc_number toc_depth_3">
                                  1.2.4
                                </span>{" "}
                                Lump Sum Investment Growth Formula
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li >
                          <a href="#How_to_Use_the_LIC_Bank_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.3</span>{" "}
                            How to Use the LIC Bank SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Different_Types_of_Calculations_You_Can_Do_with_LIC_Bank_SIP_Calculato">
                            <span className="toc_number toc_depth_2">1.4</span>{" "}
                            Different Types of Calculations You Can Do with LIC
                            Bank SIP Calculato
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
                              <a href="#Inflation-Adjusted_SIP_Calculation-2">
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
                          <a href="#Why_Step-Up_SIPs_Are_a_Hidden_Weapon_for_Young_Investors">
                            <span className="toc_number toc_depth_2">1.5</span>{" "}
                            Why Step-Up SIPs Are a Hidden Weapon for Young
                            Investors
                          </a>
                        </li>
                        <li >
                          <a href="#How_Inflation_Can_Crush_Your_Future_Dreams_If_Ignored">
                            <span className="toc_number toc_depth_2">1.6</span>{" "}
                            How Inflation Can Crush Your Future Dreams If Ignored
                          </a>
                        </li>
                        <li >
                          <a href="#Top_LIC_Mutual_Fund_SIP_Plans_to_Explore">
                            <span className="toc_number toc_depth_2">1.7</span>{" "}
                            Top LIC Mutual Fund SIP Plans to Explore
                          </a>
                        </li>
                        <li >
                          <a href="#Pro_Tips_to_Get_the_Best_Results_Using_the_LIC_Bank_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.8</span>{" "}
                            Pro Tips to Get the Best Results Using the LIC Bank
                            SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Mistakes_to_Avoid_When_Using_SIP_Calculators">
                            <span className="toc_number toc_depth_2">1.9</span>{" "}
                            Mistakes to Avoid When Using SIP Calculators
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#FAQs_About_LIC_Bank_SIP_Calculator">
                        <span className="toc_number toc_depth_1">2</span> FAQs
                        About LIC Bank SIP Calculator
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <ul>
                            <li >
                              <a href="#Is_the_LIC_Bank_SIP_Calculator_free_to_use">
                                <span className="toc_number toc_depth_3">
                                  2.0.1
                                </span>{" "}
                                Is the LIC Bank SIP Calculator free to use?
                              </a>
                            </li>
                            <li >
                              <a href="#Can_I_use_it_for_both_Regular_SIPs_and_Step-Up_SIPs">
                                <span className="toc_number toc_depth_3">
                                  2.0.2
                                </span>{" "}
                                Can I use it for both Regular SIPs and Step-Up
                                SIPs?
                              </a>
                            </li>
                            <li >
                              <a href="#Should_I_adjust_returns_for_inflation_while_planning">
                                <span className="toc_number toc_depth_3">
                                  2.0.3
                                </span>{" "}
                                Should I adjust returns for inflation while
                                planning?
                              </a>
                            </li>
                            <li >
                              <a href="#How_often_should_I_update_my_SIP_calculation">
                                <span className="toc_number toc_depth_3">
                                  2.0.4
                                </span>{" "}
                                How often should I update my SIP calculation
                              </a>
                            </li>
                            <li >
                              <a href="#Does_it_also_calculate_lump_sum_investment_growth">
                                <span className="toc_number toc_depth_3">
                                  2.0.5
                                </span>{" "}
                                Does it also calculate lump sum investment growth?
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Best_Performing_LIC_Mutual_Funds_Long-Term">
                        <span className="toc_number toc_depth_1">3</span> Best
                        Performing LIC Mutual Funds (Long-Term)
                      </a>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Conclusion_Build_Your_Future_One_SIP_at_a_Time">
                        <span className="toc_number toc_depth_1">4</span>{" "}
                        Conclusion: Build Your Future, One SIP at a Time
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="relative lg:py-[50px] lg:pb-0 py-8 lg:w-4/12 w-half">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <div className="bg-white dark:bg-[#020B1E] border border-[#DCD7D7] dark:border-[#263c6b] rounded-2xl lg:max-w-[365px] w-full grow h-full">
                      <div className="px-8 pt-7 flex flex-col gap-6 justify-center">
                        <h2 className="lg:text-3xl text-xl text-my-black font-semibold dark:text-white">
                          Here are other Most important SIP calculators:
                        </h2>{" "}
                        <ul className="flex flex-col gap-2 list-disc pl-5 p-3">
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
                          <li className="text-dark-green pb-7">
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
          </div>
        </div>
      </main>
  );
}
