import RootLayout from "@/app/layout";

import { useEffect, useState } from "react";

export default function Terms() {
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
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      Terms of Services
                    </h2>{" "}
                    <div className="mt-5" itemProp="text">
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] ">
                        Welcome to{" "}
                        <strong>
                          <a
                            className="text-dark-green"
                            target="_blank"
                            href={origin}
                          >
                            {origin}
                          </a>
                        </strong>{" "}
                        (the “Website”).
                      </p>

                      <div className="entry-content" itemProp="text">
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          These Terms of Service (“Terms”) govern your access to
                          and use of the Website and its services.
                          <br />
                          By accessing or using the Website, you agree to be
                          bound by these Terms. If you do not agree with any
                          part of the Terms, please do not use the Website.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We reserve the right to modify or update these Terms
                          at any time without prior notice. Your continued use
                          of the Website after any changes indicates your
                          acceptance of the updated Terms.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="1_Use_of_the_Website">
                            1. Use of the Website
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          You agree to use the Website only for lawful purposes.
                          <br />
                          You must not use the Website:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            In any way that violates applicable laws or
                            regulations.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To engage in any fraudulent, abusive, or harmful
                            behavior.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To transmit any malware, viruses, or harmful code.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To collect or store personal data about other users.
                          </li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We reserve the right to terminate or restrict your
                          access to the Website without notice if we believe you
                          are violating these Terms.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="2_Intellectual_Property_Rights">
                            2. Intellectual Property Rights
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          All content available on the Website, including text,
                          graphics, logos, icons, images, calculators, and
                          software, is the property of{" "}
                          <strong>AllSIPCalculator</strong> unless otherwise
                          stated.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          You may access and use the Website for personal,
                          non-commercial purposes only.
                          <br />
                          You may not reproduce, distribute, modify, create
                          derivative works of, publicly display, or otherwise
                          exploit any content without express written permission
                          from us.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="3_Disclaimer">
                            3. Disclaimer
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          The information provided on the Website is for general
                          informational purposes only.
                          <br />
                          While we strive to provide accurate and up-to-date
                          content, we make no representations or warranties
                          regarding:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            The completeness, accuracy, or reliability of any
                            content.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            The suitability of the Website for your particular
                            needs.
                          </li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498]  pb-2">
                          <strong>
                            Investment decisions should not be made solely based
                            on the information available on this Website.
                          </strong>
                          <br />
                          We recommend consulting with a licensed financial
                          advisor before making any investment decisions.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          <strong>Use the Website at your own risk.</strong>
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="4_Limitation_of_Liability">
                            4. Limitation of Liability
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          To the fullest extent permitted by applicable law:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            We shall not be liable for any indirect, incidental,
                            special, consequential, or punitive damages.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            We shall not be responsible for any loss of profits,
                            revenue, data, or use incurred by you or any third
                            party.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            We are not responsible for damages arising from your
                            use or inability to use the Website or reliance on
                            any information provided on the Website.
                          </li>
                        </ul>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="5_Third-Party_Links">
                            5. Third-Party Links
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          The Website may contain links to third-party websites
                          or services that are not owned or controlled by{" "}
                          <strong>AllSIPCalculator</strong>.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We are not responsible for the content, privacy
                          policies, or practices of any third-party websites.
                          <br />
                          You access third-party websites entirely at your own
                          risk.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="6_Google_AdSense_and_Advertising">
                            6. Google AdSense and Advertising
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          Our Website uses <strong>Google AdSense</strong> to
                          display advertisements.
                          <br />
                          Ads may be tailored based on your browsing activities
                          across the Internet through the use of cookies.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          By using the Website, you consent to the use of
                          cookies for advertising purposes.
                          <br />
                          You can manage your ad personalization settings
                          through{" "}
                          <a
                            className=""
                            href="https://adssettings.google.com/"
                            target="_blank"
                            rel="noopener"
                          >
                            Google Ads Settings
                          </a>
                          .
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          For more information, please review our{" "}
                          <a>Privacy Policy</a>.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="7_No_Financial_Advice">
                            7. No Financial Advice
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          The tools and content provided on the Website
                          (including the SIP Calculator) are for educational and
                          informational purposes only.
                          <br />
                          They do not constitute financial, investment, legal,
                          or tax advice.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          You are solely responsible for evaluating the
                          accuracy, completeness, and usefulness of any
                          opinions, advice, services, or other information
                          provided through the Website.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="8_Indemnification">
                            8. Indemnification
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          You agree to indemnify, defend, and hold harmless{" "}
                          <strong>AllSIPCalculator</strong>, its affiliates, and
                          their respective officers, directors, employees, and
                          agents from and against any claims, liabilities,
                          damages, losses, and expenses arising out of:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Your use of the Website</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Your violation of these Terms</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Your violation of any rights of another</li>
                        </ul>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="9_Governing_Law">
                            9. Governing Law
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          These Terms shall be governed by and construed in
                          accordance with the laws of India, without regard to
                          its conflict of law principles.
                          <br />
                          Any legal action or proceeding relating to your access
                          to or use of the Website shall be instituted in the
                          courts of Rajkot, Gujarat, India.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="10_Contact_Us">
                            10. Contact Us
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          If you have any questions regarding these Terms,
                          please contact us through the contact form available
                          on the Website.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          <strong>Website:</strong>{" "}
                          <a className="" href="https://allsipcalculator.in/">
                            https://allsipcalculator.in/
                          </a>
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
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
                                . Use of the Website
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#2_Intellectual_Property_Rights">
                                <span className="toc_number toc_depth_1">
                                  2
                                </span>
                                . Intellectual Property Rights
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#3_Disclaimer">
                                <span className="toc_number toc_depth_1">
                                  3
                                </span>
                                . Disclaimer
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#4_Limitation_of_Liability">
                                <span className="toc_number toc_depth_1">
                                  4
                                </span>
                                . Limitation of Liability
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#5_Third-Party_Links">
                                <span className="toc_number toc_depth_1">
                                  5
                                </span>
                                . Third-Party Links
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#6_Google_AdSense_and_Advertising">
                                <span className="toc_number toc_depth_1">
                                  6
                                </span>
                                . Google AdSense and Advertising
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#7_No_Financial_Advice">
                                <span className="toc_number toc_depth_1">
                                  7
                                </span>
                                . No Financial Advice
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#8_Indemnification">
                                <span className="toc_number toc_depth_1">
                                  8
                                </span>
                                . Indemnification
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#9_Governing_Law">
                                <span className="toc_number toc_depth_1">
                                  9
                                </span>
                                . Governing Law
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#10_Contact_Us">
                                <span className="toc_number toc_depth_1">
                                  10
                                </span>
                                . Contact Us
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
            <div className="relative lg:py-[50px] lg:pb-0 py-8 lg:w-4/12 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-3xl text-xl text-my-black font-semibold dark:text-white">
                      Here are other Most important SIP calculators:
                    </h2>{" "}
                    <ul className="flex flex-col gap-2 list-disc pl-5 p-5">
                      <li className="text-dark-green">
                        <a href="#">Axis Bank SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">HDFC SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">ICICI SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">IDBI SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">Kotak Bank SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">LIC SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">Nippon India SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">PNB SIP Calculator</a>
                      </li>
                      <li className="text-dark-green">
                        <a href="#">SBI SIP Calculator</a>
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
