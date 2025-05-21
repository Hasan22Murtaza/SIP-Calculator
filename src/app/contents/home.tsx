import Link from "next/link";
import GoogleAd from '@/components/GoogleAd'

export default function HomePage() {
    return (
        <>
            <div className="relative">
                <div className="flex flex-col gap-3 mb-8">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                        What Is a SIP Calculator?
                    </h2>

                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Imagine trying to build a skyscraper without a blueprint. Sounds impossible,
                        right?
                        <br />
                        That’s exactly what investing feels like without using a SIP Calculator.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        A <span className="text-base font-medium text-my-black dark:text-white">SIP Calculator</span> — short for{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">Systematic Investment Plan Calculator</span> — acts as your
                        investment GPS. It shows you the clearest route from “where you are”
                        financially to “where you want to be.” It helps you{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">plan your mutual fund investments</span> step-by-step, predicting
                        how much wealth you can create based on:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">How much you invest</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">How long you stay invested</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">The type of returns you aim for</li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        It pulls important levers like the fund’s{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">NAV (Net Asset Value)</span> and your selected plan — whether it’s{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">equity mutual funds</span> for aggressive growth or{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">debt mutual funds</span> for safety.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">The best part?</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">You don’t need to be a finance wizard.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        In just seconds, you get a <span className="text-base font-medium text-my-black dark:text-white">crystal-clear snapshot</span> of your
                        future wealth — without drowning in spreadsheets or battling messy formulas.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">It’s smart, simple, and surprisingly addictive once you try it.</p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-7">
                        How a SIP Calculator Works
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Understanding how a SIP Calculator works is like learning how to drive a car
                        — once you know the basics, the road ahead becomes way smoother.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Inputs You Need
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Before you smash that “Calculate” button, you need to fill in a few simple
                        but powerful details:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Monthly Investment Amount:</span> How much you’re willing to
                            invest every month into <span className="text-base font-medium text-my-black dark:text-white">mutual funds</span>.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Investment Duration:</span> How many years you’ll stay committed
                            to the journey.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Expected Annual Return Rate:</span> A safe, realistic guess —
                            usually between 10% to 12% for <span className="text-base font-medium text-my-black dark:text-white">equity funds</span>, factoring in
                            the <span className="text-base font-medium text-my-black dark:text-white">CAGR (Compound Annual Growth Rate)</span>.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Step-Up Percentage (Optional):</span> Planning to increase your
                            SIP amount every year? Great — plug that in.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Inflation Rate (Optional):</span> Future money isn’t the same as
                            today’s money. Adjust for inflation to stay realistic.
                        </li>
                    </ul>
                    <h3 className="pt-6 text-2xl text-my-black font-semibold dark:text-white">
                        Outputs You Get
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">Once you feed in these numbers, the calculator spits out pure gold:</p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Total Investment</span> made over the years
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Total Wealth Gained</span> from market growth
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Final Corpus Value</span> at maturity
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Growth Graph</span> showing how compounding turbocharges your
                            wealth
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Inflation-Adjusted Corpus</span> for real-world expenses
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Estimated CAGR</span> tailored to your investment type
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        It’s like watching your future bank balance light up — clear, exciting, and
                        100% in your control.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                        Why Should You Use a SIP Calculator Before Investing?
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Money dreams without math are like ships without a compass — drifting
                        endlessly, never reaching shore.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-3">
                        Using a <span className="text-base font-medium text-my-black dark:text-white">SIP Calculator</span> pulls you out of the fog and puts
                        you squarely in control. It turns vague hopes into{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">clear, actionable plans</span>. It forces you to ask — and answer
                        — the tough, life-changing questions:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Will ₹5,000 a month actually be enough to afford my dream house in 15
                            years?
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            How much should I bump up my SIP if I want to retire by 50 — not 65?
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Should I shift toward a <span className="text-base font-medium text-my-black dark:text-white">low expense ratio mutual fund</span> to
                            maximize my long-term returns?
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        Without this clarity, you’re guessing your way through the most important
                        financial decisions of your life.
                        <br />
                        With it, you plan with precision. You think in real numbers, not random
                        wishes.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        Because here’s the brutal truth: Dreams without numbers are just fantasies.
                        <br />A <span className="text-base font-medium text-my-black dark:text-white">SIP Calculator</span> helps you build dreams you can
                        actually fund — and your future self will owe you big time.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-6">
                        Key Features to Look For in a SIP Calculator
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Not all SIP calculators are created equal. Some just crunch numbers on
                        autopilot. Others — like <span className="text-base font-medium text-my-black dark:text-white">our SIP Calculator</span> — actually
                        think ahead for you.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        If you’re serious about building wealth, you need a tool that does more than
                        basic math. You need one that matches your <span className="text-base font-medium text-my-black dark:text-white">risk appetite</span>,
                        your <span className="text-base font-medium text-my-black dark:text-white">asset allocation goals</span>, and your life’s unpredictable
                        ups and downs.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Basic SIP Calculation
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2 pb-4">
                        Start simple.
                        <br />
                        You input:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">A fixed monthly amount</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">An expected return (based on CAGR)</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">A time period</li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-1">Boom — the calculator flashes your projected future corpus.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        It’s quick, solid, and ideal when you’re starting out. But if you want to
                        really optimize your money? You need advanced options too.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Step-Up SIP Calculation
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">This is where the magic happens.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        A <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIP</span> allows you to increase your monthly
                        investment every year — say by 10%.
                        <br />
                        It mirrors real life, where salaries grow, bonuses happen, and side hustles
                        bloom.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Example:</span>
                        <br />
                        Start ₹5,000/month today. Step it up by 10% every year. In 20 years? You’re
                        sitting on almost double the corpus versus a flat SIP.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">Tiny changes → Giant differences.</p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-4">
                        Inflation-Adjusted SIP Calculation
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Inflation is the silent villain no one talks about.
                        <br />
                        What feels like ₹1 crore today could barely buy you a decent house in 20
                        years.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        That’s why a serious SIP Calculator must adjust your future corpus for
                        inflation — helping you set <span className="text-base font-medium text-my-black dark:text-white">realistic</span>, not fantasy goals.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Example:</span>
                        <br />
                        Want ₹1 crore in today’s value after 20 years? You probably need ₹3 crore
                        adjusted for inflation.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-4">
                        Lumpsum Calculator Option
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">Got a bonus? Sold a property? Unexpected inheritance?</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-3">
                        A great SIP calculator should let you calculate{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">lumpsum investments</span> too:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">How much will my ₹10 lakh grow in 15 years?</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">How much should I invest today to reach ₹2 crore?</li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        It’s perfect for windfalls and one-time financial boosts — ensuring you
                        never waste an opportunity to grow wealth.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                        How Our SIP Calculator Stands Out
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        There are hundreds of SIP calculators out there — but honestly, most of them
                        just feel like cold number-crunching machines.
                        <br />
                        Ours? It’s built for real investors like you — people who want{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">simplicity</span>, <span className="text-base font-medium text-my-black dark:text-white">power</span>, and{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">real control</span> over their financial future.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-4 pb-2">
                        User-Friendly Interface
                    </h3>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Mobile-optimized:</span> Whether you’re on a phone, tablet, or
                            laptop — our tool works flawlessly across all devices.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">No signups, no friction:</span> No boring forms. No endless
                            popups.
                            <br />
                            You simply land on the page, enter your details, and see your results
                            instantly.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Lightning-fast:</span> Results load in seconds, not minutes.
                            Because your time is money too.
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        We designed it to feel less like a “calculator” and more like a conversation
                        with your future.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-5">
                        Advanced Options
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pb-3">
                        Our SIP calculator doesn’t just show basic projections. It allows you to:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Model your investments with a <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIP</span> strategy
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Adjust your future corpus for <span className="text-base font-medium text-my-black dark:text-white">inflation</span> impacts
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Factor in <span className="text-base font-medium text-my-black dark:text-white">expense ratios</span> soon (yes, we’re upgrading
                            further!)
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Compare scenarios between <span className="text-base font-medium text-my-black dark:text-white">SIP vs Lumpsum</span> investments
                            easily
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">It’s like having a financial coach sitting right inside your pocket.</p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-5">
                        Visual Projections
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Crunching numbers is good.
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">Seeing your money visually grow on a graph</span> — that’s
                        motivational magic.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        Our tool paints a simple, colorful roadmap of how your small SIPs today can
                        turn into serious wealth tomorrow.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                        Step-by-Step Guide: How to Use a SIP Calculator
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Using a SIP Calculator isn’t rocket science — but knowing exactly what to
                        input can turn a good plan into a great one. Here’s how to master it, step
                        by step:
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 1: Enter Your Monthly SIP Amount</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Start with what’s comfortable today — ₹1,000, ₹5,000, ₹10,000 — whatever
                        fits your budget.
                        <br />
                        Remember, even <span className="text-base font-medium text-my-black dark:text-white">₹1,000/month</span> can turn into over{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">₹10 lakh</span> in 20 years if you stay consistent and ride the
                        right <span className="text-base font-medium text-my-black dark:text-white">CAGR (Compound Annual Growth Rate)</span>.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">Small steps now = Big leaps later.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 2: Choose Your Investment Period</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">Longer is always better.</p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            A <span className="text-base font-medium text-my-black dark:text-white">20- or 30-year SIP</span> builds serious wealth through
                            compounding.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            A short-term SIP may grow, but you’ll miss the compounding magic that
                            makes millionaires.
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">Time is your best friend here.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 3: Set Expected Annual Returns</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pb-3">Typically:</p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">10%-12%</span> for <span className="text-base font-medium text-my-black dark:text-white">equity mutual funds</span> (higher
                            risk, higher reward)
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">6%-8%</span> for <span className="text-base font-medium text-my-black dark:text-white">debt mutual funds</span> (lower risk,
                            steady growth)
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Pick returns wisely based on your <span className="text-base font-medium text-my-black dark:text-white">risk appetite</span>.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 4: Add Step-Up % (Optional)</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Planning to increase your SIP amount every year?
                        <br />
                        Add a <span className="text-base font-medium text-my-black dark:text-white">5%-10% step-up</span> — and watch your future corpus
                        literally <span className="text-base font-medium text-my-black dark:text-white">explode in size</span> compared to a flat SIP.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">Even a small annual increase can make a massive difference.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 5: Adjust for Inflation (Optional)</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        ₹1 crore today won’t feel like ₹1 crore tomorrow.
                        <br />
                        To stay realistic, input an <span className="text-base font-medium text-my-black dark:text-white">inflation rate</span> (usually around{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">5%-6%</span> for India) and calculate what you’ll{" "}
                        <em>actually</em> need in the future.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        <span className="text-base font-medium text-my-black dark:text-white">Step 6: View and Analyze Results</span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-3">
                        And finally, the magic happens.
                        <br />
                        You’ll instantly see:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Your <span className="text-base font-medium text-my-black dark:text-white">Total Investment</span> made
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Your <span className="text-base font-medium text-my-black dark:text-white">Estimated Wealth Gained</span> through returns
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Your <span className="text-base font-medium text-my-black dark:text-white">Inflation-Adjusted Corpus</span> (real-world value)
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Potential Tax Savings</span> if you invest through{" "}
                            <span className="text-base font-medium text-my-black dark:text-white">ELSS mutual funds</span> under <span className="text-base font-medium text-my-black dark:text-white">Section 80C</span>
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-3">
                        At this point, you’re not guessing anymore.
                        <br />
                        You’re planning like a true wealth builder.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-4">
                        Real-World Example: SIP Planning for Different Goals
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-3">
                        The beauty of SIP isn’t just in theory.
                        <br />
                        It’s in how it helps real people achieve real dreams — step by step, month
                        after month.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pb-2">Let’s walk through three relatable life goals:</p>
                    <hr className="wp-block-separator has-alpha-channel-opacity" />
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Goal 1: Retirement Planning
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-2">
                        Imagine you’re 25 years old and just getting started with your career.
                        <br />
                        You commit ₹10,000/month to a smart <span className="text-base font-medium text-my-black dark:text-white">equity mutual fund SIP</span>,
                        expecting an average <span className="text-base font-medium text-my-black dark:text-white">CAGR of 12%</span>.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-2">
                        Fast forward 30 years:
                        <br />
                        You’re sitting on a massive corpus of <span className="text-base font-medium text-my-black dark:text-white">₹3.5+ crore</span>.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pb-3">
                        Passive returns? Easily over <span className="text-base font-medium text-my-black dark:text-white">₹30,000/month</span> without touching
                        the principal.
                        <br />
                        That’s what real financial freedom looks like — retiring early, debt-free,
                        and stress-free.
                    </p>
                    <hr className="wp-block-separator has-alpha-channel-opacity" />
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Goal 2: Child’s Education Fund
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-1">
                        You’re 30 years old. You start a ₹5,000/month SIP to fund your child’s
                        higher education dreams.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] py-1">
                        After 15 years, assuming a modest 12% CAGR, you accumulate about{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">₹25 lakh</span> — right on time for college admissions.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-1 pb-3">
                        Considering <span className="text-base font-medium text-my-black dark:text-white">education inflation</span> (which is even higher than
                        normal inflation), this step could save you (and your child) from crippling
                        education loans later.
                    </p>
                    <hr className="wp-block-separator has-alpha-channel-opacity" />
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Goal 3: Buying a House
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">You’re 28, and you start a focused ₹15,000/month SIP.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Ten years later, you build a <span className="text-base font-medium text-my-black dark:text-white">₹30 lakh corpus</span> — enough to
                        cover a good chunk of a home loan or even buy a decent property outright in
                        many cities.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Imagine skipping the burden of heavy EMIs at 38… and living in your
                        fully-owned home instead.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                        Mistakes to Avoid When Using a SIP Calculator
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        A SIP Calculator is a powerful tool — but even the best calculator can’t
                        save you from bad assumptions.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Here are some of the biggest mistakes people make (and how you can dodge
                        them like a pro):
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Expecting Unrealistic CAGR (20%+)
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Sure, bull runs feel exciting. But betting your future on{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">20%+ CAGR</span> year after year? That’s not planning — that’s
                        gambling.
                        <br />
                        Stick to realistic expectations: <span className="text-base font-medium text-my-black dark:text-white">10%-12%</span> for{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">equity mutual funds</span>, <span className="text-base font-medium text-my-black dark:text-white">6%-8%</span> for{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">debt funds</span>.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Ignoring Inflation Adjustment
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        If you’re not adjusting for inflation, you’re lying to yourself.
                        <br />
                        ₹1 crore today might feel rich. Twenty years later, it might barely cover a
                        luxury sedan.
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">Always calculate inflation-adjusted future goals.</span>
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Not Factoring Expense Ratio
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Expense ratios silently nibble away at your returns.
                        <br />
                        Choosing high-cost funds without noticing their{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">expense ratio</span> can lower your wealth by lakhs over decades.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Skipping Step-Up SIPs
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        If your salary grows, but your SIP doesn’t? You’re leaving money on the
                        table.
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIPs</span> can massively supercharge your corpus without
                        feeling the pinch.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Choosing Funds with Poor Past NAV Growth
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Fund selection matters.
                        <br />
                        Investing in schemes with terrible <span className="text-base font-medium text-my-black dark:text-white">NAV growth history</span> just
                        because they look “safe” can wreck your compounding dreams.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        <span className="text-base font-medium text-my-black dark:text-white">Stay calm. Stay consistent. Stay smart.</span>
                        <br />
                        That’s how real wealth gets built.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-6">
                        How Step-Up SIP Can Transform Your Wealth Creation
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Most investors know about regular SIPs. But the real secret weapon for
                        explosive wealth?
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIPs</span>.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">Here’s the difference one small move can make:</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        <span className="text-base font-medium text-my-black dark:text-white">Example:</span>
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">Flat SIP:</span>
                            <br />
                            Invest ₹5,000/month steadily for 20 years at 12% CAGR → You build around{" "}
                            <span className="text-base font-medium text-my-black dark:text-white">₹49 lakh</span>.
                        </li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-base font-medium text-my-black dark:text-white">10% Step-Up SIP:</span>
                            <br />
                            Start with ₹5,000/month — but increase it by just 10% every year.
                            <br />
                            After 20 years? Your corpus balloons to <span className="text-base font-medium text-my-black dark:text-white">₹77 lakh+</span>.
                        </li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">That’s a whopping ₹28 lakh extra — without any drastic effort.</p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        Think about it:
                        <br />
                        You aren’t investing ₹50,000 more every month.
                        <br />
                        You’re simply boosting your SIP slightly as your salary grows… and the
                        results are life-changing.
                    </p>
                    <GoogleAd adSlot="5646679930" />
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        <span className="text-base font-medium text-my-black dark:text-white">Small moves. Big wins.</span>
                        <br />
                        That’s the silent magic of a Step-Up SIP — quietly working in the background
                        while you live your life.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        If you’re serious about creating wealth without feeling financially
                        suffocated, a Step-Up SIP isn’t optional — it’s mandatory.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-6">
                        When Should You Use Step-Up SIP?
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        If your income is growing, your investments should be growing too.
                        <br />
                        That’s where a <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIP</span> shines — helping you level up
                        your wealth creation without feeling the pinch.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">Here’s when you should absolutely use it:</p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Salary Hikes
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Every time your salary gets a bump, increasing your SIP by even 5-10%
                        ensures your savings pace keeps up with your lifestyle.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Instead of spending it all on gadgets or fancy dinners, channel a small
                        portion into your future.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Annual Bonuses
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Bonuses feel amazing — but they’re also perfect for boosting your SIP for
                        the next year.
                        <br />
                        Use that bonus momentum to step up, not just show up.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Business Profits
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Running a side business or freelancing?
                        <br />
                        Whenever your profits grow, raise your SIP along with it.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Turn your business wins into long-term wealth, not just short-term
                        celebrations.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Side Hustle Income Streams
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Launching a side hustle? Great.
                        <br />
                        Don’t just blow that extra cash. Use a portion to step up your SIP and
                        future-proof your financial independence.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        <span className="text-base font-medium text-my-black dark:text-white">If your earnings grow, your SIP should too. No excuses.</span>
                        <br />
                        Your future self will seriously thank you for it.
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                        SIP Calculator vs Manual SIP Calculation
                    </h2>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        Trying to plan your investments manually in 2025 is like using a paper map
                        while everyone else is breezing by with Google Maps.
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">Manual math? Outdated.</span> Painfully slow. Prone to mistakes.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        Modern <span className="text-base font-medium text-my-black dark:text-white">SIP calculators</span> aren’t just faster — they’re
                        smarter.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">Here’s what they do effortlessly:</p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Factor Step-Ups
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Want to increase your SIP every year?
                        <br />A manual calculator would need a hundred tedious entries.
                        <br />A SIP Calculator handles <span className="text-base font-medium text-my-black dark:text-white">Step-Up SIPs</span> in seconds —
                        showing how tiny yearly increases explode into big wealth.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Adjust for Inflation
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Guessing future value without considering inflation is financial suicide.
                        <br />
                        Modern calculators automatically{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">adjust your corpus for real-world inflation</span> so you plan
                        realistically, not hopefully.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Simulate Volatility Across Debt and Equity Mutual Funds
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Markets are messy.
                        <br />
                        Good calculators simulate different return scenarios across{" "}
                        <span className="text-base font-medium text-my-black dark:text-white">equity mutual funds</span>, <span className="text-base font-medium text-my-black dark:text-white">debt funds</span>, and
                        hybrids — showing best and worst cases.
                    </p>
                    <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white">
                        Help Choose Better Asset Allocation
                    </h3>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Should you put 80% into equity? Or 60-40 with debt?
                        <br />
                        Smart calculators suggest <span className="text-base font-medium text-my-black dark:text-white">asset allocation</span> models based on
                        your risk appetite.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        <span className="text-base font-medium text-my-black dark:text-white">You dream big.</span>
                        <br />
                        <span className="text-base font-medium text-my-black dark:text-white">
                            Let the tool do the heavy lifting — so you can focus on living the dream.
                        </span>
                    </p>
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-10 pb-3 text-center">
                        Best mutual funds to start SIP
                    </h2>
                    {/* <table className="table-auto p-4">
                        <thead>
                            <tr>
                                <th>Fund Name</th>
                                <th>5-Year CAGR (%)</th>
                                <th>10-Year CAGR (%)</th>
                                <th>Risk Level</th>
                                <th>Suitability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Quant Small Cap Fund – Direct Plan (Growth)</td>
                                <td>43.5</td>
                                <td>22.8</td>
                                <td>Very High</td>
                                <td>Aggressive investors with 7-10 year horizon</td>
                            </tr>
                            <tr>
                                <td>Parag Parikh Flexi Cap Fund – Direct Plan (Growth)</td>
                                <td>29.0</td>
                                <td>19.5</td>
                                <td>Moderately High</td>
                                <td>Investors seeking diversified exposure</td>
                            </tr>
                            <tr>
                                <td>ICICI Prudential Value Discovery Fund – Direct Plan (Growth)</td>
                                <td>30.2</td>
                                <td>18.0</td>
                                <td>Moderately High</td>
                                <td>Investors seeking value stocks</td>
                            </tr>
                            <tr>
                                <td>Nippon India Small Cap Fund – Direct Plan (Growth)</td>
                                <td>34.7</td>
                                <td>24.5</td>
                                <td>Very High</td>
                                <td>High-risk investors with 10+ year horizon</td>
                            </tr>
                            <tr>
                                <td>HDFC Flexi Cap Fund – Direct Plan (Growth)</td>
                                <td>31.87</td>
                                <td>18.2</td>
                                <td>Moderately High</td>
                                <td>Investors seeking flexibility and balanced risk-return</td>
                            </tr>
                            <tr>
                                <td>Axis Small Cap Fund – Direct Plan (Growth)</td>
                                <td>31.2</td>
                                <td>22.0</td>
                                <td>Very High</td>
                                <td>Investors seeking small-cap exposure with lower volatility</td>
                            </tr>
                            <tr>
                                <td>ICICI Prudential Bluechip Fund – Direct Plan (Growth)</td>
                                <td>24.9</td>
                                <td>15.8</td>
                                <td>Moderate</td>
                                <td>Risk-averse investors seeking stability</td>
                            </tr>
                            <tr>
                                <td>Canara Robeco Small Cap Fund – Direct Plan (Growth)</td>
                                <td>33.8</td>
                                <td>24.0 (7-Year)</td>
                                <td>Very High</td>
                                <td>Aggressive investors with long-term horizon</td>
                            </tr>
                            <tr>
                                <td>Mirae Asset Large &amp; Midcap Fund – Direct Plan (Growth)</td>
                                <td>27.5</td>
                                <td>20.2</td>
                                <td>Moderately High</td>
                                <td>Investors seeking stability and growth</td>
                            </tr>
                            <tr>
                                <td>SBI Small Cap Fund – Direct Plan (Growth)</td>
                                <td>30.5</td>
                                <td>23.5</td>
                                <td>Very High</td>
                                <td>High-risk investors aiming for capital appreciation</td>
                            </tr>
                        </tbody>
                    </table> */}

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="bg-gray-500 dark:bg-gray-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        Fund Name
                                    </th>
                                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        5-Year CAGR (%)
                                    </th>
                                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        10-Year CAGR (%)
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        Risk Level
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        Suitability
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 dark:divide-gray-800">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Quant Small Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        43.5
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        22.8
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                            Very High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Aggressive investors with 7-10 year horizon
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Parag Parikh Flexi Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        29.0
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        19.5
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                            Moderately High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Investors seeking diversified exposure
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        ICICI Prudential Value Discovery Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        30.2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        18.0
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                            Moderately High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Investors seeking value stocks
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Nippon India Small Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        34.7
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        24.5
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                            Very High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        High-risk investors with 10+ year horizon
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        HDFC Flexi Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        31.87
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        18.2
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                            Moderately High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Investors seeking flexibility and balanced risk-return
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Axis Small Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        31.2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        22.0
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                            Very High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Investors seeking small-cap exposure with lower volatility
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        ICICI Prudential Bluechip Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        24.9
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        15.8
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                            Moderate
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Risk-averse investors seeking stability
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Canara Robeco Small Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        33.8
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        24.0 (7-Year)
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                            Very High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Aggressive investors with long-term horizon
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        Mirae Asset Large & Midcap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        27.5
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        20.2
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                            Moderately High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        Investors seeking stability and growth
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        SBI Small Cap Fund – Direct Plan (Growth)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        30.5
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right font-medium text-emerald-600 dark:text-emerald-400">
                                        23.5
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                                            Very High
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                        High-risk investors aiming for capital appreciation
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <figure className="wp-block-table is-style-stripes has-medium-font-size">
                    </figure> */}
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-6">SIP Calculator FAQs</h2>
                    <div id="rank-math-faq" className="rank-math-block">
                        <div className="rank-math-list ">
                            <div id="faq-question-1737969705156" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-5">
                                    How accurate is the SIP calculator?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        This calculator gives an estimated return based on assumed rates of
                                        return. Actual return may vary depending on market conditions and
                                        the performance of the mutual fund.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969714559" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    Can I use the SIP calculator for all types of mutual funds?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Yes, the calculator can help you estimate returns for equity, debt,
                                        and hybrid mutual fund schemes.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969724958" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    What is the difference between monthly SIP and lump sum investment?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Monthly SIP contributions are made periodically, whereas lump sum
                                        investments are made at once. Both have their own advantages
                                        depending on financial goals.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969737172" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    Is the SIP calculator free to use?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Yes, the SIP calculator is a free online tool available for
                                        everyone.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969745644" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    Can I change my SIP amount over time?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Yes, most mutual funds allow you to increase your SIP amount as per
                                        your financial capability.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969767542" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    How do I choose the right mutual fund for my SIP?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Consider factors like fund performance, expense ratio, risk
                                        appetite, and investment objectives.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969778929" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    Why should I increase my SIP amount every year?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Increasing your SIP regularly helps you invest more as your income
                                        grows, ensuring your savings stay ahead of inflation and help you
                                        reach bigger goals faster.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969787877" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    How does inflation affect my investments?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        Inflation reduces the value of money over time. What costs ₹1,000
                                        today might cost ₹1,500 in a few years. An inflation-adjusted SIP
                                        makes sure you invest enough to meet future needs.
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969798760" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    Is it better to invest a lump sum or stick to SIPs?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        A lump sum investment can give higher returns if invested at the
                                        right time, but SIPs help manage market ups and downs, giving you a
                                        more balanced approach. The best option? A mix of both!
                                    </p>
                                </div>
                            </div>
                            <div id="faq-question-1737969805043" className="rank-math-list-item">
                                <h3 className="pt-5 text-2xl text-my-black font-semibold dark:text-white pt-8">
                                    When should I step up my SIP?
                                </h3>
                                <div className="rank-math-answer ">
                                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                                        A good time to step up your SIP is when you get a salary hike or an
                                        annual bonus. Even a small increase can have a big impact in the
                                        long run.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        Building wealth isn’t about catching lucky breaks.
                        <br />
                        It’s not about timing the market, chasing the next hot stock, or gambling
                        your savings on risky bets.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]">
                        It’s about <span className="text-base font-medium text-my-black dark:text-white">steady, boring, beautiful consistency</span> — showing
                        up month after month, investing mindfully, and letting the magic of
                        compounding do its thing.
                    </p>
                    <GoogleAd adSlot="5646679930" />
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        And a <span className="text-base font-medium text-my-black dark:text-white">SIP Calculator</span>?<br />
                        It’s not just some fancy tool.
                        <br />
                        It’s your personal <span className="text-base font-medium text-my-black dark:text-white">financial GPS</span> — quietly guiding you
                        through the unknown roads, showing you the shortcuts, warning you about the
                        bumps ahead, and keeping you laser-focused on the destination.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        If you’re serious about making money work for you — not someday, not “when
                        things settle down,” but <span className="text-base font-medium text-my-black dark:text-white">today</span> — this is where you start:
                    </p>
                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start calculating smart.</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start investing smarter.</li>
                        <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Start dreaming bigger.</li>
                    </ul>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-4">
                        Because the ultimate wealth hack isn’t hidden in complicated strategies.
                        <br />
                        It’s hidden in <span className="text-base font-medium text-my-black dark:text-white">small consistent actions</span> over a long time.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-3">
                        <span className="text-base font-medium text-my-black dark:text-white">
                            Start early.
                            <br />
                            Stay consistent.
                            <br />
                            Grow rich quietly.
                        </span>
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2">
                        The future you dream of is already possible. All you have to do now… is
                        move.
                    </p>
                    <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-2 pb-3">
                        Here are other Most important SIP calculators:
                    </p>

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
        </>
    )
}