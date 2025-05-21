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
                      SIP vs Lumpsum Investment: Which one is Best?
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Are you also a new investor looking to start your investing journey but confused about choosing between SIP and Lumpsum?
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    If so, then you are alone various new investors are facing the same issues especially when it comes to deciding the right investing plan.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    But here is the good news: You don’t need to worry anymore.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    In this article, I have shared the complete guide explaining both SIP vs Lumpsum routes of investment along with the factors to consider, pros and cons, and which plan is best to begin your investing journey.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    So let’s dive right in and understand SIP vs Lumpsum and discover the best investing plan for the future.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">

                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="difference_between_sip_and_lumpsum">
                        What are the differences between SIP and lumpsum investments?
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                      There are various differences between the SIP and Lumpsum investment, here are some of the major differences that you can consider.
                    </p>
                    <figure className="wp-block-table is-style-stripes mb-8 w-full overflow-x-auto">
                      <table className="has-fixed-layout w-full text-sm text-left  rounded-lg border-separate">
                        <thead className="text-SM text-my-black   dark:text-white border-b-2 border-[#DCD7D7]  dark:border-[#263c6b]">
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <th className="px-3 py-2">SIP (Systematic Investment Plan</th>
                            <th className="px-3 py-2">	Lumpsum Investment Plan</th>

                          </tr>
                        </thead>
                        <tbody className=" border-b dark:border-gray-700 border-gray-200 text-[#434B5B] dark:text-[#7B8498]">
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">SIP is a systematic investment plan that requires you to pay the amount at regular intervals.</td>
                            <td className="px-3 py-2 ">Lumpsump is another investment plan that requires you to pay the entire amount at once. </td>

                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              <span>Investing in SIP is now an entry barrier making it convenient for people to invest their money.</span>
                              <span>You can start your SIP with as low as Rs 500 per month.</span>
                            </td>
                            <td className="px-3 py-2 ">
                              <span>Lumpsump investment has big bigger entry barrier and is mostly for experienced investors who have high-risk appetites.</span>
                              <span>You need to pay at least Rs 1000 for the Lumpsump Investment.</span>
                            </td>

                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">In general, SIPs are more flexible as you can invest as per your capacity.</td>
                            <td className="px-3 py-2 ">Lumsump Investment is less flexible as it requires investing a minimum of money</td>

                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">SBI Contra Fund – Direct Plan (Growth)</td>
                            <td className="px-3 py-2 ">29.8</td>

                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">SIP is considered a low-risk investment as your investment is spread over time reducing the market volatility</td>
                            <td className="px-3 py-2 ">
                              Lumpsum is considered as highly risk (if you invested at the wrong time) as the entire amount is invested in the market at once.
                            </td>

                          </tr>
                          <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                            <td className="px-3 py-2 ">
                              SIPs are more suitable for people who have regular income and limited savings but want to their investing journey.
                            </td>
                            <td className="px-3 py-2 ">
                              Lumpsum investments are ideal for those who have the available money to invest in the market at once.
                            </td>

                          </tr>


                        </tbody>
                      </table>
                    </figure>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      As of now, you have seen the major differences between the SIP and the Lumpsum now let’s dive deeper –  understanding each of the investment routes in detail.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="Provides_Accurate_Estimates_of_SIP_Returns">
                        What is SIP?
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      In simple words, SIP stands for a systematic investment plan. It is the investment plan that has recently gained popularity among investors, allowing them to invest a fixed amount of money in a mutual fund at regular intervals.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Not only that but this investment plan has also been considered as the best plan, especially for the new investor who wants to start their journey with a minimum investment and wants to build wealth over the period.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Here are some of the popular features of SIP that you should know before investing.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium">Regular Investment –</span> It is one of the biggest advantages for you as an investor by doing SIP you will get into the habit of investing regularly which will help you build your wealth over time, you can choose to invest weekly, monthly, or quarterly.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium">Flexibility –</span> Choosing the SIP Investment plan also gives you flexibility to decide the amount you want to invest to start your investing journey.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium">Low Risk –</span> Another reason for choosing SIP Investment as a newbie is that it has low risk as compared to the Lumpsum as your investments are spread over time.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="what_is_the_lumpsum_investment">
                        What is the Lumpsum Investment?
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      A lump sum investment is another investing plan where you need to pay the entire amount at once rather than investing a smaller amount over time.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      It has also become popular in the past few years,  But this investment plan is mostly for the experienced investor who has invested their money before in any plan and understand the market.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Additionally, this investment plan also has an entry barrier which means that you need to pay at least 1000 per month to start your journey with this plan which makes it inconvenient for the new investors.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Here are some of the popular features of the Lumpsum Investment Plan that you can consider before investing a single penny.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium"> Higher Initial Investment –</span>   As said before the initial investment of a lump sum is higher than the sip or any other option which is only suitable for people who have available money.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium">Market Timing –</span>  The amount of return you will earn from this investment plan depends on the market condition it can be better for the short-term return as compared to sip but it is not a better option for long-term plans.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      <span className="text-my-black dark:text-white font-medium">Highly Risk –</span>  As you invest your entire amount at once in this investment plan make this investment route highly risky and especially meant for people who have sizeable investments and high-risk tolerance.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      <span id="pros_and_cons_of_sip">
                        Pros and Cons of SIP (Systematic Investment Plan)
                      </span>
                    </h2>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      As new time investor you need to understand the Pros and cons of the SIP to get the most out of it, let’s see some of the pros and cons that you need to consider.
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
                <div className="flex flex-col gap-3 ">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="pros_and_cons_of_lumpsum">
                      Pros and Cons of Lumpsum Investment Plan
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    There is no doubt that Lumpsum’s investment plan is highly risky but along with the risk you will get the high rewards, so let’s see the pros and cons of the Lumpsum Investment plan.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8 pt-5" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="pros_of_lumpsum">
                        Pros of Lumpsum Investment Plan
                      </span>
                    </h3>
                    <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Large Investments can lead to higher returns If the market performs well.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        No need to track regularly as you pay the entire amount at once.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        It’s a simple approach – Just invest your all money at once and wait for growth.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Ideal for people who have large sums of money to invest in the market.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="cons_of_lumpsum">

                        Cons of Lumpsum Investment Plan

                      </span>
                    </h3>
                    <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Investing your all money at once can lead to significant losses if the market drops.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        It’s always hard to predict the right time to invest in a new investor.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Seeing the maker fluctuate can also lead to anxiety and mental health issues.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        Unlike SIP, you don’t get the benefits of Average cost over time.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        It requires huge patience to see a higher return on your investment.
                      </li>
                    </ul>
                  </div>


                </div>
                <div className="block mb-8">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="before_invest">
                      What are the factors you should consider before investing?
                    </span>
                  </h2>

                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Choosing between an SIP and a lump sum is a very daunting task especially if you are a new investor here I have listed down the list of factors that you can consider to choose between them and make an informed decision.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="amount_of_money_you_want_to_invest">
                        Amount of money you want to invest
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      It is the very first factor that ones need to consider for deciding between these two plans, if you have a good sum of money that you can invest and have a risk tolerance then you go with the Lumsump Investment Plan.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      However, SIP Investment is ideal for people who have less money on their hands but want to start their investing journey.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="risk_tolerance">
                        Risk Tolerance
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Another key factor that you need to consider while choosing an investment plan is your risk tolerance lump sum investment carries higher risk since you invest all your money at once whereas sip investments are less risky as you invest your money over time which makes it safer.
                    </p>

                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="period_of_investment">
                        Period of Investment
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      The period of investment also helps you to decide between sip and lump sum for example if you want to invest your money for the long term then sip will be the perfect choice for you.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      On the other hand, if you are looking to invest your money and get a short-term return then a lump sum investment can be best for you if the market performs well.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="market_timing">
                        Market Timing
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      When the market is low investing money on the lump sum plan can give you higher returns but you should able to understand the market as it changes frequently.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                      Where is in the SIP you buy more units when the market is low and by less units when the market is higher and overall it reduces your risk on the overall investment.
                    </p>
                  </div>
                </div>
                <div className="block mb-8">
                  <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="conclusion">
                      Conclusion: SIP vs Lumpsum Investment
                    </span>
                  </h2>

                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    From the above post, you got a clear idea of both routes of investment in detail including their features rows and cones, and most importantly factors that you need to consider.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Now you can choose between both investment routes considering the factors described above to give the simple answer.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    SIP is for people who have less money and want to build wealth over a period of time and don’t have a high-risk tolerance and Lumpsump investment is for people who have large sums of money and high-risk tolerance and experience in the market.
                  </p>
                </div>
              </div>
              <div className="block mb-8">
                <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                  <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                  <ul className="toc_list flex flex-col gap-2">
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#difference_between_sip_and_lumpsum">
                        <span className="toc_number toc_depth_1">1</span>  What are the differences between SIP and lumpsum investments?
                      </a>

                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#Provides_Accurate_Estimates_of_SIP_Returns">
                        <span className="toc_number toc_depth_1">2</span>{" "}
                        What is SIP?
                      </a>

                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#what_is_the_lumpsum_investment">
                        <span className="toc_number toc_depth_1">3</span>  What is the Lumpsum Investment?
                      </a>

                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#pros_and_cons_of_sip">
                        <span className="toc_number toc_depth_1">4</span>  Pros and Cons of SIP (Systematic Investment Plan)
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
                      <a href="#pros_and_cons_of_lumpsum">
                        <span className="toc_number toc_depth_1">5</span>   Pros and Cons of the Lumpsum Investment Plan
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li>
                          <ul>
                            <li>
                              <a href="#pros_of_lumpsum">
                                <span className="toc_number toc_depth_3">
                                  5.1
                                </span>{" "}
                                Pros of Lumpsum Investment Plan
                              </a>
                            </li>
                            <li>
                              <a href="#cons_of_lumpsum">
                                <span className="toc_number toc_depth_3">
                                  5.2
                                </span>{" "}
                                Cons of Lumpsum Investment Plan
                              </a>
                            </li>

                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#before_invest">
                        <span className="toc_number toc_depth_1">6</span>   What are the factors you should consider before investing?
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li>
                          <ul>
                            <li>
                              <a href="#amount_of_money_you_want_to_invest">
                                <span className="toc_number toc_depth_3">
                                  6.1
                                </span>{" "}
                                Amount of money you want to invest
                              </a>
                            </li>
                            <li>
                              <a href="#risk_tolerance">
                                <span className="toc_number toc_depth_3">
                                  6.2
                                </span>{" "}
                                Risk Tolerance
                              </a>
                            </li>
                            <li>
                              <a href="#period_of_investment">
                                <span className="toc_number toc_depth_3">
                                  6.3
                                </span>{" "}
                                Period of Investment
                              </a>
                            </li>
                            <li>
                              <a href="#market_timing">
                                <span className="toc_number toc_depth_3">
                                  6.4
                                </span>{" "}
                                Market Timing
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#conclusion">
                        <span className="toc_number toc_depth_1">7</span> Conclusion: SIP vs Lumpsum Investment
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
    </RootLayout>
  );
}
