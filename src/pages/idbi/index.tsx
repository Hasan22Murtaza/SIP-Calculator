import RootLayout from "@/app/layout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Idbi() {
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
                      What is the IDBI SIP Calculator?
                    </span>
                  </h2>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    Investing without a clear plan is like driving with your eyes
                    shut. You might move forward, but you won’t reach anywhere
                    meaningful. That’s where the IDBI SIP Calculator steps in.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    It’s a smart tool that helps you predict the future value of
                    your SIP investments based on the amount, duration, and expected
                    returns. No more assumptions. No more what-ifs.
                  </p>
                  <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] pt-5">
                    For example, if you invest ₹3,000 every month for 20 years
                    expecting 12% returns, the calculator shows you’ll build around
                    ₹30 lakh. It’s not magic. It’s simple math, done right.
                  </p>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Why_You_Should_Use_an_IDBI_SIP_Calculator_Before_Investing">
                        Why You Should Use an IDBI SIP Calculator Before Investing
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Trusting guesswork with your future is like letting a toddler
                      handle your savings. A SIP calculator removes all that risk.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      It tells you exactly how much you’ll accumulate. It shows you
                      the difference even small tweaks can make. Most importantly, it
                      makes you an informed investor — not a hopeful gambler.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Take Rohan’s story. At 26, he wanted ₹50 lakh by 45 for early
                      retirement. Using the IDBI SIP Calculator, he figured out he
                      needed to invest ₹7,500 monthly for 19 years at a modest 11%
                      return. Today, he’s already ahead of schedule.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Key_Features_of_the_IDBI_SIP_Calculator">
                        Key Features of the IDBI SIP Calculator
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Multiple calculation modes:</span> Regular SIP,
                        Step-Up SIP, Inflation-Adjusted SIP, Lump Sum.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Real-time projections:</span> Get your future value
                        instantly.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Graphical breakdowns:</span> See your investment vs
                        wealth gain over time.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">User-friendly interface:</span> Even first-timers
                        find it easy to use.
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      This calculator isn’t just a tool. It’s your financial compass.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="How_the_IDBI_SIP_Calculator_Works">
                        How the IDBI SIP Calculator Works
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Basic_SIP_Formula_Used">Basic SIP Formula Used</span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      The underlying math looks like this:
                      <br />
                      Future Value = P × [(1+r)^n – 1] ÷ r × (1+r)
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Where:
                      <br />P = Monthly investment amount
                      <br />r = Monthly rate of return (Annual rate ÷ 12)
                      <br />n = Total number of months
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      No need to sweat it though. The calculator handles it while you
                      sip your chai.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Formula_Explained">
                        Step-Up SIP Formula Explained
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      With Step-Up SIPs, you increase your investment by a fixed
                      percentage every year. It’s like giving your future a turbo
                      boost.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Imagine starting with ₹5,000 monthly SIP and stepping up by 10%
                      annually. Over 20 years, your corpus could double compared to a
                      flat ₹5,000 SIP. It’s not wishful thinking — it’s pure
                      compounding magic.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Formula">
                        Inflation-Adjusted SIP Formula
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Ignoring inflation is like filling water in a leaking bucket.
                      Inflation-Adjusted SIP calculators show you the real value of
                      your future money after accounting for rising costs.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      For instance, ₹10,000 invested monthly for 20 years at 12%
                      returns gives around ₹99 lakh. But after adjusting for 6%
                      inflation, it feels more like ₹34 lakh. Better to be real than
                      regretful.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Formula">
                        Lump Sum Investment Formula
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Sometimes, you receive a windfall — a bonus, a gift, or a sale.
                      Lump Sum calculations help you see what that one-time investment
                      can grow into.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Say you invest ₹2 lakh today. In 10 years, assuming 11% returns,
                      it can swell into ₹5.7 lakh. No drama. Just discipline.
                    </p>
                  </div>

                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Step-by-Step_Tutorial_How_to_Use_the_IDBI_SIP_Calculator">
                        Step-by-Step Tutorial: How to Use the IDBI SIP Calculator
                      </span>
                    </h3>
                    <ol className="wp-block-list flex flex-col gap-2 list-disc pl-5 pt-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">1. Enter your monthly SIP amount (e.g., ₹5,000)</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">2. Choose the expected return rate (e.g., 10%)</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">3. Select your investment duration (e.g., 20 years)</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">4. (Optional) Add Step-Up percentage (e.g., 10%)</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">5. (Optional) Add expected inflation (e.g., 6%)</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">6. Click “Calculate” and view your results</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">7.
                        Analyze investment amount, returns, and total wealth gain
                      </li>
                    </ol>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      You’ll have your answers in less time than it takes to heat up
                      Maggi.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white mb-8">
                      <span id="Types_of_SIP_Calculations_Offered">
                        Types of SIP Calculations Offered
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Regular_SIP_Calculation">
                        Regular SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      This is your traditional SIP mode where you invest a fixed
                      amount every month without any increase. Ideal for people who
                      prefer stability and consistency.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white mb-8">
                      <span id="Types_of_SIP_Calculations_Offered">
                        Types of SIP Calculations Offered
                      </span>
                    </h3>
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Regular_SIP_Calculation">
                        Regular SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      This is your traditional SIP mode where you invest a fixed
                      amount every month without any increase. Ideal for people who
                      prefer stability and consistency.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Step-Up_SIP_Calculation">
                        Step-Up SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Step-Up SIPs are perfect if you expect your salary to grow every
                      year. By increasing your SIP by 5%, 10%, or 15% annually, you
                      reach bigger goals faster without feeling the pinch.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      For example, with a flat ₹5,000 SIP, you may reach ₹55 lakh in
                      20 years. Add a 10% annual step-up, and you’re suddenly looking
                      at ₹90 lakh!
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Inflation-Adjusted_SIP_Calculation">
                        Inflation-Adjusted SIP Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Inflation is the invisible enemy of your investments. This mode
                      helps you plan your SIPs in a way that your future money holds
                      real purchasing power.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Want ₹1 crore in today’s terms? With inflation, you might
                      actually need ₹2.3 crore. Better to know now than be shocked
                      later.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Lump_Sum_Investment_Calculation">
                        Lump Sum Investment Calculation
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Have a large amount ready to invest? Lump Sum mode shows how
                      your one-time investments will grow over time. Great for sudden
                      bonuses, property sales, or inheritance.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Why_Step-Up_SIP_is_a_Game_Changer_for_Young_Investors">
                        Why Step-Up SIP is a Game Changer for Young Investors
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      If you’re in your 20s or 30s and not using Step-Up SIPs, you’re
                      leaving serious money on the table.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Starting with ₹5,000 monthly and stepping it up 10% annually can
                      turn into ₹1 crore in two decades. Without the step-up, you’d
                      barely touch ₹60 lakh.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      When your income grows, your SIP should grow too. That’s how
                      compounding treats you better than inflation beats you.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Understanding_Inflations_Role_in_SIP_Planning">
                        Understanding Inflation’s Role in SIP Planning
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      You know what’s scarier than market crashes? Inflation eating
                      your dreams alive slowly, year after year.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      A ₹50 lakh corpus sounds great today. But 20 years later, thanks
                      to inflation, it might feel like ₹18 lakh. That’s why planning
                      with inflation adjustments is non-negotiable.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Use the inflation-adjusted mode on the IDBI SIP Calculator. It’s
                      the brutal honesty your future deserves.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Popular_IDBI_SIP_Plans_You_Can_Explore">
                        Popular IDBI SIP Plans You Can Explore
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">IDBI Equity Advantage Fund:</span> For those who
                        believe India’s stock markets are just getting started.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">IDBI India Top 100 Equity Fund:</span> Perfect if
                        you want to bet on India’s top-performing companies.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">IDBI Short-Term Bond Fund:</span> Lower risk, decent
                        returns. Good if you hate rollercoasters.
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Each plan has its own vibe. Choose the one that matches your
                      goals, not your friend’s.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      If you want no-fuss investing with flexible options, IDBI stands
                      strong among the giants.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Pro_Tips_to_Maximize_Returns_Using_the_IDBI_SIP_Calculator">
                        Pro Tips to Maximize Returns Using the IDBI SIP Calculator
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Start early:</span> Every year you wait costs you
                        lakhs later.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Stay consistent:</span> Skipping SIPs is like
                        deflating your own tires mid-race.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Use Step-Up:</span> Even a 5% boost each year makes
                        a massive difference.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Adjust for inflation:</span> Always. No shortcuts.
                      </li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                        <span className="text-my-black dark:text-white font-medium">Review yearly:</span> Your life changes. So should
                        your investment plan.
                      </li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Think of your SIP as a muscle. The more you train it, the
                      stronger it grows.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Common_Mistakes_Investors_Make_When_Using_SIP_Calculators">
                        Common Mistakes Investors Make When Using SIP Calculators
                      </span>
                    </h3>
                    <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5">
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Dreaming of 20% returns without basis</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Forgetting to factor inflation</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Not using the Step-Up feature</li>
                      <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Treating SIPs like set-it-and-forget-it investments</li>
                    </ul>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Your SIP deserves active love, not passive ignorance.</p>
                  </div>
                </div>
                <div className="block mb-8">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="FAQs_About_IDBI_SIP_Calculator">
                      FAQs About IDBI SIP Calculator
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Is_the_IDBI_SIP_Calculator_free_to_use">
                        Is the IDBI SIP Calculator free to use?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Yes, it’s 100% free. No sign-ups. No hidden charges.</p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_I_plan_Step-Up_SIPs_and_Inflation-Adjusted_SIPs">
                        Can I plan Step-Up SIPs and Inflation-Adjusted SIPs?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Absolutely. Our calculator supports Step-Up and Inflation
                      Adjustments easily.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="What_return_rate_should_I_assume_realistically">
                        What return rate should I assume realistically?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Stick to 10%-12% if you’re planning long-term with equity-heavy
                      portfolios. Always plan conservatively.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="How_often_should_I_re-calculate_my_SIP">
                        How often should I re-calculate my SIP?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      At least once every 12 months or whenever your salary or
                      financial goals change.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                      <span id="Can_the_calculator_also_handle_Lump_Sum_planning">
                        Can the calculator also handle Lump Sum planning?
                      </span>
                    </h4>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Yes. It’s flexible enough to plan SIPs, Step-Up SIPs, and
                      one-time Lump Sum investments.
                    </p>
                  </div>
                </div>
                <div className="block mb-8">
                  <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                    <span id="10_Best_Performing_IDBI_Mutual_Fund_Schemes_Long-Term">

                      10 Best Performing IDBI Mutual Fund Schemes (Long-Term)

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
                          <td className="px-3 py-2 ">IDBI Midcap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">26.36</td>
                          <td className="px-3 py-2 ">12.49 (since 2017)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking mid-cap growth with high risk</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Flexi Cap Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">13.58</td>
                          <td className="px-3 py-2 ">12.5</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking diversified equity across market caps
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            IDBI India Top 100 Equity Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 ">12.59</td>
                          <td className="px-3 py-2 ">14.17</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking stable large-cap returns</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Equity Advantage Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">11.37</td>
                          <td className="px-3 py-2 ">14.0</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking tax-saving ELSS with long-term growth
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            IDBI Focused 30 Equity Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 ">11.43</td>
                          <td className="px-3 py-2 ">11.06 (since 2017)</td>
                          <td className="px-3 py-2 ">Very High</td>
                          <td className="px-3 py-2 ">Investors seeking focused equity exposure</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">
                            IDBI Nifty Next 50 Index Fund – Direct Plan (Growth)
                          </td>
                          <td className="px-3 py-2 ">9.56</td>
                          <td className="px-3 py-2 ">11.5</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">
                            Investors seeking passive exposure to Nifty Next 50
                          </td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Nifty Index Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">10.3</td>
                          <td className="px-3 py-2 ">10.3</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking passive exposure to Nifty 50</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Equity Savings Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">7.79</td>
                          <td className="px-3 py-2 ">8.5</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking hybrid equity-debt stability</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Hybrid Equity Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">7.5</td>
                          <td className="px-3 py-2 ">8.0 (since 2016)</td>
                          <td className="px-3 py-2 ">Moderately High</td>
                          <td className="px-3 py-2 ">Investors seeking balanced equity-debt returns</td>
                        </tr>
                        <tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]">
                          <td className="px-3 py-2 ">IDBI Gold Fund – Direct Plan (Growth)</td>
                          <td className="px-3 py-2 ">13.58</td>
                          <td className="px-3 py-2 ">5.5</td>
                          <td className="px-3 py-2 ">Moderate</td>
                          <td className="px-3 py-2 ">
                            Investors seeking gold-based exposure with moderate risk
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </figure>
                </div>
                <div className="flex flex-col gap-6 mb-8" itemProp="text">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                      <span id="Conclusion_Start_Today_Own_Tomorrow">
                        Conclusion: Start Today, Own Tomorrow
                      </span>
                    </h3>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">
                      Dreams need action. Wealth needs planning. The IDBI SIP
                      Calculator is your first step towards building the life you
                      dream of — not just imagining it.
                    </p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Don’t guess your future. Design it.</p>
                    <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498]">Small today. Giant tomorrow. That’s the SIP way.</p>
                  </div>
                </div>

                <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 ">
                  <p className="toc_title text-black text-lg font-medium mb-3">Contents</p>
                  <ul className="toc_list flex flex-col gap-2 ">
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#What_is_the_IDBI_SIP_Calculator">
                        <span className="toc_number toc_depth_1">1</span> What is
                        the IDBI SIP Calculator?
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Why_You_Should_Use_an_IDBI_SIP_Calculator_Before_Investing">
                            <span className="toc_number toc_depth_2">1.1</span>{" "}
                            Why You Should Use an IDBI SIP Calculator Before
                            Investing
                          </a>
                        </li>
                        <li >
                          <a href="#Key_Features_of_the_IDBI_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.2</span>{" "}
                            Key Features of the IDBI SIP Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#How_the_IDBI_SIP_Calculator_Works">
                            <span className="toc_number toc_depth_2">1.3</span>{" "}
                            How the IDBI SIP Calculator Works
                          </a>
                          <ul>
                            <li >
                              <a href="#Basic_SIP_Formula_Used">
                                <span className="toc_number toc_depth_3">
                                  1.3.1
                                </span>{" "}
                                Basic SIP Formula Used
                              </a>
                            </li>
                            <li >
                              <a href="#Step-Up_SIP_Formula_Explained">
                                <span className="toc_number toc_depth_3">
                                  1.3.2
                                </span>{" "}
                                Step-Up SIP Formula Explained
                              </a>
                            </li>
                            <li >
                              <a href="#Inflation-Adjusted_SIP_Formula">
                                <span className="toc_number toc_depth_3">
                                  1.3.3
                                </span>{" "}
                                Inflation-Adjusted SIP Formula
                              </a>
                            </li>
                            <li >
                              <a href="#Lump_Sum_Investment_Formula">
                                <span className="toc_number toc_depth_3">
                                  1.3.4
                                </span>{" "}
                                Lump Sum Investment Formula
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li >
                          <a href="#Step-by-Step_Tutorial_How_to_Use_the_IDBI_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.4</span>{" "}
                            Step-by-Step Tutorial: How to Use the IDBI SIP
                            Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Types_of_SIP_Calculations_Offered">
                            <span className="toc_number toc_depth_2">1.5</span>{" "}
                            Types of SIP Calculations Offered
                          </a>
                          <ul>
                            <li >
                              <a href="#Regular_SIP_Calculation">
                                <span className="toc_number toc_depth_3">
                                  1.5.1
                                </span>{" "}
                                Regular SIP Calculation
                              </a>
                            </li>
                            <li >
                              <a href="#Step-Up_SIP_Calculation">
                                <span className="toc_number toc_depth_3">
                                  1.5.2
                                </span>{" "}
                                Step-Up SIP Calculation
                              </a>
                            </li>
                            <li >
                              <a href="#Inflation-Adjusted_SIP_Calculation">
                                <span className="toc_number toc_depth_3">
                                  1.5.3
                                </span>{" "}
                                Inflation-Adjusted SIP Calculation
                              </a>
                            </li>
                            <li >
                              <a href="#Lump_Sum_Investment_Calculation">
                                <span className="toc_number toc_depth_3">
                                  1.5.4
                                </span>{" "}
                                Lump Sum Investment Calculation
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li >
                          <a href="#Why_Step-Up_SIP_is_a_Game_Changer_for_Young_Investors">
                            <span className="toc_number toc_depth_2">1.6</span>{" "}
                            Why Step-Up SIP is a Game Changer for Young Investors
                          </a>
                        </li>
                        <li >
                          <a href="#Understanding_Inflations_Role_in_SIP_Planning">
                            <span className="toc_number toc_depth_2">1.7</span>{" "}
                            Understanding Inflation’s Role in SIP Planning
                          </a>
                        </li>
                        <li >
                          <a href="#Popular_IDBI_SIP_Plans_You_Can_Explore">
                            <span className="toc_number toc_depth_2">1.8</span>{" "}
                            Popular IDBI SIP Plans You Can Explore
                          </a>
                        </li>
                        <li >
                          <a href="#Pro_Tips_to_Maximize_Returns_Using_the_IDBI_SIP_Calculator">
                            <span className="toc_number toc_depth_2">1.9</span>{" "}
                            Pro Tips to Maximize Returns Using the IDBI SIP
                            Calculator
                          </a>
                        </li>
                        <li >
                          <a href="#Common_Mistakes_Investors_Make_When_Using_SIP_Calculators">
                            <span className="toc_number toc_depth_2">1.10</span>{" "}
                            Common Mistakes Investors Make When Using SIP
                            Calculators
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#FAQs_About_IDBI_SIP_Calculator">
                        <span className="toc_number toc_depth_1">2</span> FAQs
                        About IDBI SIP Calculator
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <ul className="text-dark-green pl-5 flex flex-col gap-1">
                            <li >
                              <a href="#Is_the_IDBI_SIP_Calculator_free_to_use">
                                <span className="toc_number toc_depth_3">
                                  2.0.1
                                </span>{" "}
                                Is the IDBI SIP Calculator free to use?
                              </a>
                            </li>
                            <li >
                              <a href="#Can_I_plan_Step-Up_SIPs_and_Inflation-Adjusted_SIPs">
                                <span className="toc_number toc_depth_3">
                                  2.0.2
                                </span>{" "}
                                Can I plan Step-Up SIPs and Inflation-Adjusted
                                SIPs?
                              </a>
                            </li>
                            <li >
                              <a href="#What_return_rate_should_I_assume_realistically">
                                <span className="toc_number toc_depth_3">
                                  2.0.3
                                </span>{" "}
                                What return rate should I assume realistically?
                              </a>
                            </li>
                            <li >
                              <a href="#How_often_should_I_re-calculate_my_SIP">
                                <span className="toc_number toc_depth_3">
                                  2.0.4
                                </span>{" "}
                                How often should I re-calculate my SIP?
                              </a>
                            </li>
                            <li >
                              <a href="#Can_the_calculator_also_handle_Lump_Sum_planning">
                                <span className="toc_number toc_depth_3">
                                  2.0.5
                                </span>{" "}
                                Can the calculator also handle Lump Sum planning?
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="text-dark-green flex flex-col gap-1">
                      <a href="#10_Best_Performing_IDBI_Mutual_Fund_Schemes_Long-Term">
                        <span className="toc_number toc_depth_1">3</span> 10 Best
                        Performing IDBI Mutual Fund Schemes (Long-Term)
                      </a>
                      <ul className="text-dark-green pl-5 flex flex-col gap-1">
                        <li >
                          <a href="#Conclusion_Start_Today_Own_Tomorrow">
                            <span className="toc_number toc_depth_2">3.1</span>{" "}
                            Conclusion: Start Today, Own Tomorrow
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="relative lg:py-[50px] lg:pb-0 py-8 lg:w-4/12 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
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
