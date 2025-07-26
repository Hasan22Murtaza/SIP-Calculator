"use client"
import { useEffect, useState } from "react";

export default function Terms() {
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
            <div className="relative lg:py-[50px] lg:pb-5 py-8 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      All SIP Calculator $1000 Scholarship Program
                    </h2>{" "}
                    <div className="mt-5" itemProp="text">


                      <div className="entry-content" itemProp="text">
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pb-2">
                          Ever feel like college is expensive, financial advice is confusing, and nobody teaches you how to actually grow your money? We get it. That’s why the <span className="text-my-black dark:text-white font-medium">All SIP Calculator Scholarship</span> exists — to support students like you who think differently about money, investing, and the future.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-5">
                          Introducing the <span className="text-my-black dark:text-white font-medium">All SIP Calculator $1000 Scholarship Program</span> — a global opportunity for smart, motivated students to showcase their thoughts and win a one-time cash award.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-5">
                          Whether you’re in the <span className="text-my-black dark:text-white font-medium">USA, UK,</span> Canada or any corner of the world, this scholarship is open to you.
                        </p>

                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="1_Use_of_the_Website">
                            What’s the Scholarship All About?
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          Here’s a quick overview:
                        </p>

                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Scholarship Name:</span> All SIP Calculator $1000 Scholarship Program
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Award Amount:</span> $1000 USD
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Application Deadline:</span> June 20, 2026
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Winner Announcement: </span>August 1, 2026
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Number of Recipients:</span> One selected student
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <span className="text-my-black dark:text-white font-medium">Open To: Global appli</span>cants
                          </li>
                        </ul>

                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="2_Intellectual_Property_Rights">
                            Who Can Apply?
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          We’ve kept it simple. You’re eligible if:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">You’re currently enrolled in high school, college, or university (any academic year)</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">You’re at least 16 years old</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">You can write a thoughtful, original essay in English</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">You care about financial growth, personal development, or investing</li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          It doesn’t matter what you’re studying. If you’ve got an idea that could inspire others — we want to hear it.
                        </p>
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5 pb-5">
                          <span id="3_Disclaimer">
                            How to Apply
                          </span>
                        </h2>
                        <div className="block">
                          <figure ><img width="940" height="588" src="https://allsipcalculator.in/wp-content/uploads/2025/05/All-SIP-Calculator-Scholarship-Program.png" alt="image" /></figure>
                        </div>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          Here’s what you need to do:
                        </p>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Step 1: Write an Essay (600–1000 words)
                          </span>
                        </h3>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          Choose one of these three topics:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">1. How Can SIPs Help Young People Create Long-Term Wealth?</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">2. How Financial Education Could Be the Answer to Global Inequality</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">3. Why Investing Early Is the Best Gift You Can Give Yourself in Your 20s</li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          Make it your own. Be clear, creative, and honest.
                        </p>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Step 2: Include These Details
                          </span>
                        </h3>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          In the same document (or email), please include:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Full Name</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Age</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Country of Residence</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">School/College Name</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Contact Email</li>
                        </ul>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Step 3: Send Your Application
                          </span>
                        </h3>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          In the same document (or email), please include:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Email your entry to: <a className="text-dark-green" target="_blank" href="http://localhost:3000">scholarship@allsipcalculator.in</a></li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Use this subject line: All SIP Calculator Scholarship Application – [Your Full Name]</li>

                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          That’s it — no fees, no sign-ups, no hoops to jump through.
                        </p>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Important Dates
                          </span>
                        </h3>
                        <div className="block">
                          <figure className="wp-block-table is-style-stripes"><table className="has-fixed-layout w-full text-sm text-left  rounded-lg border-separate">   <thead className="text-SM text-my-black   dark:text-white border-b-2 border-[#DCD7D7]  dark:border-[#263c6b]"><tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]"><th className="px-3 py-2">Event</th><th className="px-3 py-2">Date</th></tr></thead><tbody className=" border-b dark:border-gray-700 border-gray-200 text-[#434B5B] dark:text-[#7B8498]"><tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]"><td className="px-3 py-2 ">Applications Open</td><td className="px-3 py-2 ">Already open</td></tr><tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]"><td className="px-3 py-2 ">Final Deadline</td><td className="px-3 py-2 ">June 20, 2026</td></tr><tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]"><td className="px-3 py-2 ">Winner Announced</td><td className="px-3 py-2 ">August 1, 2026</td></tr><tr className="border-b border-[#DCD7D7]  dark:border-[#263c6b]"><td className="px-3 py-2 ">Prize Released</td><td className="px-3 py-2 ">By August 10, 2026</td></tr></tbody></table></figure>
                        </div>
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5 pb-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            What You’ll Win
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          The selected winner will receive a $1000 cash prize.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          This can be used for anything that helps you grow — from tuition fees and study materials to certifications, online courses, or even that one must-have software you’ve been eyeing.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          You’ll also get the satisfaction of seeing your work featured and recognized on our platform.
                        </p>
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5 pb-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            How Will We Choose the Winner?
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          We’re not looking for perfect grammar or academic citations. What we care about is real, fresh thinking.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          Essays will be judged based on:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Originality</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Relevance to the chosen topic</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Clarity of thought and structure</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Personal insight and creativity</li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          Say something real. Show us how you think. That’s what will stand out.
                        </p>
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5 pb-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Why We’re Doing This
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          At <strong>All SIP Calculator</strong>, we help people make smarter investment decisions through our tools and resources. But we believe that financial success starts way earlier — with knowledge, mindset, and good habits.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          We created this scholarship to give back, support the next generation of thinkers, and hopefully spark a few “aha” moments along the way.</p>
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5 pb-5">
                          <span id="How_the_SBI_SIP_Calculator_Helps_Investors">
                            Frequently Asked Questions
                          </span>
                        </h2>
                        <div className="flex flex-col gap-3 pb-5">
                          <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                            <span id="Provides_Accurate_Estimates_of_SIP_Returns">
                              Do I need to pay to apply?
                            </span>
                          </h4>
                          <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                            No. There is zero cost to apply.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 pb-5">
                          <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                            <span id="Provides_Accurate_Estimates_of_SIP_Returns">
                              Can students from any country apply?
                            </span>
                          </h4>
                          <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                            Yes. This is a global scholarship.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 pb-5">
                          <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                            <span id="Provides_Accurate_Estimates_of_SIP_Returns">
                              What if English is not my first language?
                            </span>
                          </h4>
                          <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                            That’s okay. Just make sure your essay is clear and understandable.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 pb-5">
                          <h4 className="wp-block-heading text-xl text-my-black font-semibold dark:text-white">
                            <span id="Provides_Accurate_Estimates_of_SIP_Returns">
                              Can I submit more than one entry?
                            </span>
                          </h4>
                          <p className="text-base text-[rgba(2,11,30,0.6)] leading-8 dark:text-[#7B8498] ">
                            No. Only one entry per person is allowed.
                          </p>
                        </div>

                        <div
                          id="toc_container"
                          className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 my-6"
                        >
                          <p className="toc_title text-base text-[#434B5B] leading-8 dark:text-[#7B8498] mb-3 text-my-black font-semibold dark:text-white">Contents</p>
                          <ul className="toc_list">
                            <li className="mt-1 text-dark-green">
                              <a href="#1_Use_of_the_Website">
                                <span className="toc_number toc_depth_1">
                                  1
                                </span>
                                . What’s the Scholarship All About?
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#2_Intellectual_Property_Rights">
                                <span className="toc_number toc_depth_1">
                                  2
                                </span>
                                . Who Can Apply?
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#3_Disclaimer">
                                <span className="toc_number toc_depth_1">
                                  3
                                </span>
                                . How to Apply
                              </a>
                              <ul className="text-dark-green pl-5 flex flex-col gap-1">
                                <li>3.1 Step 1: Write an Essay (600–1000 words)</li>
                                <li>3.2 Step 2: Include These Details</li>
                                <li>3.3 Step 3: Send Your Application</li>
                                <li>3.4 Important Dates</li>
                              </ul>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#4_Limitation_of_Liability">
                                <span className="toc_number toc_depth_1">
                                  4
                                </span>
                                .  What You’ll Win
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#5_Third-Party_Links">
                                <span className="toc_number toc_depth_1">
                                  5
                                </span>
                                .  How Will We Choose the Winner?
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#6_Google_AdSense_and_Advertising">
                                <span className="toc_number toc_depth_1">
                                  6
                                </span>
                                . Why We’re Doing This
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#7_No_Financial_Advice">
                                <span className="toc_number toc_depth_1">
                                  7
                                </span>
                                . Frequently Asked Questions
                              </a>
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
        </div>
      </main>
  );
}
