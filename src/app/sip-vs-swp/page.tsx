"use client"

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
    <main>
    <div className="relative pt-[100px] md:pt-[140px] pb-[50px] bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b]">
      <div className="max-w-6xl mx-auto px-3 h-full flex items-center justify-center">
        <h1 className="font-raleway text-center leading-[48px] text-2xl md:text-[40px] text-my-black dark:text-white font-bold lg:max-w-[700px]" >
          {" "}
          SIP vs SWP 
            <br />

          <span className="text-dark-green">
            {" "}
           which one is better{" "}
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
                <span id="What_are_the_differences_between_SIP_and_SWP">
                  SIP vs SWP which is one is better – 7 Things to know
                </span>
              </h2>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                There is no doubt that investing is one of the best ways to become financially free but this dream can only be possible when you choose the right investment plan.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                However, choosing the right investment plan is not easy especially when you have too many options available in the market which creates confusion in the minds of new investors.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                Out of various questions, one of the most common questions that most new investors have is whether they should SIP or SWP and which one is better than others.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                If you are also one of them then this post is a game changer for you –  this post will cover everything from explaining the meaning of both terms to their benefits, pros and cons, and other thing you need to know to be informed decision.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                So what are you waiting for? Let’s get on the ride together and understand things in detail.
              </p>
            </div>
            <div className="flex flex-col gap-6 mb-8" itemProp="text">

              <div className="flex flex-col gap-3 ">
                <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                  <span id="what_are_the_differences_between_SIP_and_SWP">
                    What are the differences between SIP and SWP?
                  </span>
                </h2>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                  There are various differences between the SIP and SWP that you need to understand as a new investor especially those who are struggling to decide between both of the plans.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                  But to give you a simple context SIP is for people who want to build wealth over time on the other hand SWP is for people who want to generate a regular income from their existing investments.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                  Knowing the above differences is not enough here is the list of the major differences that you can consider and get a clear idea about both plans
                </p>
                <figure className="wp-block-table is-style-stripes mb-8 w-full overflow-x-auto">
                  <table className="has-fixed-layout w-full text-sm text-left  rounded-lg border-separate">
                    <thead className="text-SM text-my-black   dark:text-white border-b-2 border-[#DCD7D7]  dark:border-[#263c6b]">
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <th className="px-3 py-2">Criteria </th>
                        <th className="px-3 py-2">SIP (systematic Investment plan)</th>
                        <th className="px-3 py-2">SWP (systematic withdrawal plan </th>

                      </tr>
                    </thead>
                    <tbody className=" border-b dark:border-gray-700 border-gray-200 text-[#434B5B] dark:text-[#7B8498]">
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">Purpose </td>
                        <td className="px-3 py-2 ">To invest regularly to build wealth over time. </td>
                        <td className="px-3 py-2 ">To withdraw money regularly to generate regular income.</td>

                      </tr>
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">
                          Benefits
                        </td>
                        <td className="px-3 py-2 ">
                          Encourage regular investment, rupee cost averaging, and long-term growth.
                        </td>
                        <td className="px-3 py-2 ">
                          Provides you the consistent cash flows for your living expenses and other needs.
                        </td>

                      </tr>
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">Starting Point </td>
                        <td className="px-3 py-2 ">	You can start SIP with a low investment of Rs 500</td>
                        <td className="px-3 py-2 ">You can only through from your existing investment to withdraw.</td>

                      </tr>
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">Time Frame </td>
                        <td className="px-3 py-2 ">	It is best for long-term investment like 5 to 10 years if you want to get good returns.</td>
                        <td className="px-3 py-2 ">It is mostly suited for those who have short-income needs.</td>

                      </tr>
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">Flexibility </td>
                        <td className="px-3 py-2 ">
                          Offers flexibility in terms of the investment amount, frequency of payments, and Fund selection.
                        </td>
                        <td className="px-3 py-2 ">
                          Allows the investor to choose the withdrawal amount and frequency.
                        </td>

                      </tr>
                      <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                        <td className="px-3 py-2 text-my-black   dark:text-white font-semibold">
                          Goals
                        </td>
                        <td className="px-3 py-2 ">
                          Accumulating wealth over time.
                        </td>
                        <td className="px-3 py-2 ">
                          Proving regular income along with preserving capital.
                        </td>

                      </tr>


                    </tbody>
                  </table>
                </figure>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  From the above table you got the clarity about the differences between both of the plans now let’s move ahead and understand each of the plans separately and get into the nitty-gritty of it.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                  <span id="what_is_SIP_and_its_benefits">
                    What is SIP and its benefits?
                  </span>
                </h2>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  In simple words, SIP stands for a systematic investment plan that allows an investor to invest money regularly in a mutual fund and get a return on their investment over time.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Moreover, this systematic investment plan has also recently gained popularity due to its low entry barrier and flexibility meaning – you can start the SIP with the minimum investment and choose the frequency as per your compatibility (Weekly, Monthly, or quarterly).
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Here is some of a list of the benefits of the SIP (systematic investment plan) are
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">Low entry barrier –</span> As said before, starting a SIP does not require a huge investment you can start with a low investment build an investment habit, and become financially independent over time.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">No need to time the market: </span> With the SIP plan you don’t need to spend hours to time the market and wait for the perfect situation to invest as you do with the Lumpsump.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Because in SIP you invest your money regularly and your investment spread over time ultimately reduces your risk in bad market conditions.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">Rupee Cost Averaging:</span> When you invest the same amount of money regularly you buy the more you need when the prices are low and less unit when the prices are high and overall these lower your average cost unit of buying.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                  <span id="what_is_SWP_and_its_benefits">
                    What is SWP and its benefits?
                  </span>
                </h2>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  As the name suggests systematic withdrawal plan refers to a plan that allows an investor to withdraw a certain sum of money regularly from their existing investment.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Additionally, this plan gives you the flexibility to choose how often you want to withdraw your money (Monthly, Quarterly, yearly)  along with the amount you want to withdraw.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Overall this systematic withdrawal plan is for the people who have the existing investment and want to generate some regular income to meet their living expenses.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Here are some of the benefits of the Systematic Withdrawal Plan that you can consider are
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium"> Source of Income:  </span>    This plan will help you to generate a regular source of income without depleting your investment entirely which is a good way to supplement your primary income and meet your expenses.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">Flexibility:   </span>    Unlike SIP this plan also gives you the flexibility that allows you to choose the amount you want to withdraw and the frequency of withdrawing it (Monthly, Half Yearly, Yearly).
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">Control Over Investment: </span>  Just like any other fixed deposit plan  Or pension plan your money stays invested in the mutual fund which means that it can still grow while you are withdrawing.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  <span className="text-my-black dark:text-white font-medium">Alternative to Pension: </span>    It can also be considered a good alternative to the pension as it allows you to withdraw a regular income, and it can be reliable if you plan properly.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Till now you have a clear idea of the meaning and structure of SIP and SWP now let’s move further and discuss the pros and cons of each plan to get more deeper understanding.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                  <span id="pros_and_cons_of_sip_systematic_investment_plan">
                    Pros and Cons of SIP (Systematic Investment Plan)
                  </span>
                </h2>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Before you decide to invest your hard-earned money in the SIP you need to understand the pros and cons of the SIP  to get the most out of it
                </p>
              </div>

              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="pros_of_sip">
                    Pros of SIP (Systematic Investment Plan)
                  </span>
                </h3>
                <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Help you build the investing habit as you will invest regularly
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Affordable and easy to start as low as 500.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Flexible to adjust, stop, pause, or increase your amount of investment.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Convenient with automatic monthly investment.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="cons_of_sip">
                    Cons of SIP (Systematic Investment Plan)
                  </span>
                </h3>
                <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    SIP requires a long-term commitment to see a good return on your investment.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    It is not for the people who are looking for shorter gains or instant returns.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Need careful fund selection to avoid poor performance.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    It is less liquidated compared to a savings account as it takes time to withdraw.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Market risk and affect your return on investment (you can avoid this with the right selection of plan).
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6 mb-8" itemProp="text">
              <div className="flex flex-col gap-3 ">
                <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                  <span id="pros_and_cons_of_swp_systematic_withdrawal_plan">
                    Pros and Cons of SWP (Systematic Withdrawal Plan)
                  </span>
                </h2>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  There is no doubt that a systematic withdrawal plan is a good way to generate a regular income but before you make up your mind to invest your money it’s important to get into the pros and cons of SWP.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="pros_of_swp">
                    Pros of SWP (Systematic Withdrawal Plan)

                  </span>
                </h3>

                <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Helps you to generate a regular source of income which is useful for retirees.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Offers you the flexibility to decide the amount you want to withdraw from your fund.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    SWP can help you to manage market risk by regularly withdrawing your funds.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Allows you to withdraw income without depleting your entire investment.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="cons_of_swp">

                    Cons of SWP (Systematic Withdrawal Plan)

                  </span>
                </h3>
                <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    Drawing too much money can risk the depletion of your investment.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    SWP is designed for income not for growth as compared to SIP.
                  </li>
                  <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                    If the withdrawal rate is higher than the return it can lead to a reduction in the overall investment value.
                  </li>

                </ul>
              </div>


            </div>
            <div className="block mb-8">
              <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                <span id="what_factors_to_consider_to_choose_between_sip_and_swp">
                  What factors to consider to choose between SIP and SWP?
                </span>
              </h2>

              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                Until now, you got the clear idea that SIP and SWP are two different sides of the same coin but still the biggest question: which is better for you?
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                To avoid this confusion, here we have listed down some of the key factors that you can consider to choosing between SIP and SWP – ensure to consider before making any investment decision.
              </p>
            </div>
            <div className="flex flex-col gap-6 mb-8" itemProp="text">
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="financial_goals">
                    Financial Goals
                  </span>
                </h3>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Before deciding which plan to choose, you should first be clear about your financial goals, for example – if your goals are to grow your investment and get a good return SIP can be a good choice for you.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Whereas, if you are looking to generate some regular income, especially at the age of retirement it’s better to go with SWP as it will help you maintain your lifestyle.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="time_horizon">
                    Time Horizon
                  </span>
                </h3>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Time is one of the crucial things that one needs to consider at the time of making any investment decision, for the long-term investment horizon SIP would be perfect that gives you maximum return.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  On the other hand, SWP is best for people who are always in need of money and looking for ways to generate short-term income.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="risk_tolerance">
                    Risk Tolerance
                  </span>
                </h3>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Your risk appetite is also a key factor in making an informed investment decision if you have a higher risk appetite you can go with the sip as there is some market volatility in exchange for the long-term potential gains.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  Conversely, SWP is suitable for individuals who have lower risk tolerance as it provides you the control of regular withdrawal without depleting your overall investment.
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                  <span id="stage_of_life">
                    Stage of Life
                  </span>
                </h3>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  I know it may be sound a bit weird but – yes stage of life has a huge influence on your investment decision for example – if you are a younger investor who has recently started his investing journey then it better for you to choose SIP and focus on long-term investment.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  In contrast, if you are between the age of 35 + it’s better to plan for your retirement and choose the SWP as it gives you the safety net of regular income along with preserving your capital.
                </p>
                <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                  These are the list of the above factors an individual needs to consider to make an informed decision of choosing between SIP and SWP.
                </p>
              </div>
            </div>
            <div className="block mb-8">
              <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                <span id="conclusion">
                  Conclusion: SIP vs SWP which is one is better
                </span>
              </h2>

              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                Choosing between SIP vs SWP is not about knowing all the differences but it’s about knowing which option is better as per your current situation and financial goals.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                SIP is for the people who can invest regularly over time to get the potential return on their investment and you can start this without a major investment.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                SWP  Is for the individual who wants to generate a regular income from their existing investment while preserving the capital mostly for the people who need constant cash flow.
              </p>
              <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                Lastly, your decision must align with your current situation of whether you want to build a wealth over a time or get a steady income on a regular.
              </p>
            </div>
          </div>
          <div className="block mb-8">
            <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
              <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
              <ul className="toc_list flex flex-col gap-2">
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#What_are_the_differences_between_SIP_and_SWP">
                    <span className="toc_number toc_depth_1">1</span> What are the differences between SIP and SWP?
                  </a>

                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#what_is_SIP_and_its_benefits">
                    <span className="toc_number toc_depth_1">2</span>{" "}
                    What is SIP and its benefits?
                  </a>

                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#what_is_SWP_and_its_benefits">
                    <span className="toc_number toc_depth_1">3</span>  What is SWP and its benefits?
                  </a>

                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#pros_and_cons_of_sip_systematic_investment_plan">
                    <span className="toc_number toc_depth_1">4</span> Pros and Cons of SIP (Systematic Investment Plan)
                  </a>
                  <ul className="text-dark-green pl-5 flex flex-col gap-1">
                    <li>
                      <ul>
                        <li>
                          <a href="#pros_of_sip">
                            <span className="toc_number toc_depth_3">
                              4.1
                            </span>{" "}
                            Pros of SIP (Systematic Investment Plan)
                          </a>
                        </li>
                        <li>
                          <a href="#cons_of_sip">
                            <span className="toc_number toc_depth_3">
                              4.2
                            </span>{" "}
                            Cons of SIP (Systematic Investment Plan)
                          </a>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#pros_and_cons_of_swp_systematic_withdrawal_plan">
                    <span className="toc_number toc_depth_1">5</span>    Pros and Cons of SWP (Systematic Withdrawal Plan)
                  </a>
                  <ul className="text-dark-green pl-5 flex flex-col gap-1">
                    <li>
                      <ul>
                        <li>
                          <a href="#pros_of_swp">
                            <span className="toc_number toc_depth_3">
                              5.1
                            </span>{" "}
                            Pros of SWP (Systematic Withdrawal Plan)
                          </a>
                        </li>
                        <li>
                          <a href="#cons_of_swp">
                            <span className="toc_number toc_depth_3">
                              5.2
                            </span>{" "}
                            Cons of SWP (Systematic Withdrawal Plan)
                          </a>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#what_factors_to_consider_to_choose_between_sip_and_swp">
                    <span className="toc_number toc_depth_1">6</span>   What factors to consider to choose between SIP and SWP?
                  </a>
                  <ul className="text-dark-green pl-5 flex flex-col gap-1">
                    <li>
                      <ul>
                        <li>
                          <a href="#financial_goals">
                            <span className="toc_number toc_depth_3">
                              6.1
                            </span>{" "}
                            Financial Goals
                          </a>
                        </li>
                        <li>
                          <a href="#time_horizon">
                            <span className="toc_number toc_depth_3">
                              6.2
                            </span>{" "}
                            Time Horizon
                          </a>
                        </li>
                        <li>
                          <a href="#risk_tolerance">
                            <span className="toc_number toc_depth_3">
                              6.3
                            </span>{" "}
                            Risk Tolerance
                          </a>
                        </li>
                        <li>
                          <a href="#stage_of_life">
                            <span className="toc_number toc_depth_3">
                              6.4
                            </span>{" "}
                            Stage of Life
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="text-dark-green flex flex-col gap-1">
                  <a href="#conclusion">
                    <span className="toc_number toc_depth_1">7</span>  Conclusion: SIP vs SWP which is one is better
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
