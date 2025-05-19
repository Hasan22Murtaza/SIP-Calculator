import RootLayout from "@/app/layout";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Privacy() {
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
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      Privacy Policy
                    </h2>{" "}
                    <div className="mt-5" itemProp="text">
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
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
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          Privacy Policy explains how we collect, use, maintain,
                          and disclose information from our users. By accessing
                          or using the Website, you agree to the terms outlined
                          in this Privacy Policy. If you do not agree, please
                          refrain from using the Website.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We reserve the right to modify or update this Privacy
                          Policy at any time. Continued use of the Website after
                          changes constitutes your acceptance of the revised
                          Privacy Policy.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity " />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pb-5 pt-5">
                          <span id="Table_of_Contents">
                            Table of Contents
                          </span>
                        </h2>
                        <ul className="wp-block-list  flex flex-col gap-2 list-disc pl-5 mb-5">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Collection of Personal Data</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Use of Collected Information</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Google AdSense and Third-Party Advertising</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Cookies and Web Beacons</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Data Security</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Third-Party Links</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Children’s Privacy</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Your Rights</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Changes to This Privacy Policy</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Contact Us</li>
                        </ul>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="wp-block-heading lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Collection_of_Personal_Data">
                            Collection of Personal Data
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          We collect information from users in the following
                          ways:
                        </p>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Voluntarily_Provided_Information">
                            Voluntarily Provided Information
                          </span>
                        </h3>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          When users fill out forms or contact us, we may
                          collect details like name, email address, or other
                          personal information voluntarily submitted.
                        </p>
                        <h3 className="wp-block-heading text-2xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Automatically_Collected_Information">
                            Automatically Collected Information
                          </span>
                        </h3>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          When you visit the Website, we automatically collect
                          non-personally identifiable information, including:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">IP address</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Browser type</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Internet Service Provider (ISP)</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Referring/exit pages</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Platform type</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Date/time stamp</li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">Number of clicks</li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          This information is used to analyze trends, administer
                          the site, and improve user experience.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Use_of_Collected_Information">
                            Use of Collected Information
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          The information we collect may be used for the
                          following purposes:
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To personalize your experience and deliver relevant
                            content
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To improve the functionality and performance of the
                            Website
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            To respond to inquiries or customer service requests
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">To comply with legal obligations</li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We do not sell, trade, or rent your personal
                          identification information to others.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Google_AdSense_and_Third-Party_Advertising">

                            Google AdSense and Third-Party Advertising

                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-2">
                          This Website is monetized through{" "}
                          <strong>Google AdSense</strong> and may display ads
                          served by Google and its partners.
                        </p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Google, as a third-party vendor, uses cookies to
                            serve ads based on users’ prior visits to this
                            Website and other sites.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Google’s use of advertising cookies enables it and
                            its partners to serve ads based on your visit to
                            this site and/or other sites on the Internet.
                          </li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          <strong>Users may opt out</strong> of personalized
                          advertising by visiting{" "}
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
                          Additionally, the Website may use third-party
                          advertising networks that also place cookies or use
                          tracking technologies to collect non-personal
                          information.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Cookies_and_Web_Beacons">
                            Cookies and Web Beacons
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          Cookies are small text files placed on your device to
                          help the Website provide a better user experience.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-3">We use cookies to:</p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Understand and save users’ preferences for future
                            visits
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Compile aggregate data about site traffic and
                            interactions to improve user experience
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            Serve advertisements via Google AdSense or other
                            third-party vendors
                          </li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          You can choose to disable cookies through your
                          individual browser options. However, disabling cookies
                          may affect the functionality of the Website.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          To learn more about how Google uses cookies in
                          advertising, visit{" "}
                          <a>Google’s Privacy &amp; Terms page</a>.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Data_Security">
                            Data Security
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          We implement appropriate security measures to protect
                          your personal information against unauthorized access,
                          alteration, disclosure, or destruction.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          However, no data transmission over the Internet is
                          100% secure, and we cannot guarantee absolute
                          security.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Third-Party_Links">
                            Third-Party Links
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          The Website may contain links to third-party websites.
                          We are not responsible for the content, terms, or
                          privacy practices of these external sites.
                          <br />
                          We encourage you to review the privacy policies of any
                          third-party websites you visit.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Childrens_Privacy">
                            Children’s Privacy
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          This Website is not intended for children under the
                          age of 13.
                          <br />
                          We do not knowingly collect personal information from
                          individuals under 13 years old.
                          <br />
                          If we learn that we have collected personal data from
                          a child, we will delete that information promptly.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Your_Rights">
                            Your Rights
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-3">As a user, you have the following rights:</p>
                        <ul className="wp-block-list flex flex-col gap-2 list-disc pl-5 ">
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <strong>Access:</strong> Request access to your
                            personal data.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <strong>Correction:</strong> Request corrections to
                            inaccurate data.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <strong>Deletion:</strong> Request deletion of your
                            data, subject to legal obligations.
                          </li>
                          <li className="text-base text-[#434B5B] dark:text-[#7B8498]">
                            <strong>Opt-Out:</strong> Opt-out of receiving any
                            marketing communications (if any are sent).
                          </li>
                        </ul>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          To exercise any of these rights, please contact us
                          using the details provided below.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Changes_to_This_Privacy_Policy">
                            Changes to This Privacy Policy
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 pb-5">
                          We may update this Privacy Policy from time to time.
                          <br />
                          Any changes will be posted on this page with an
                          updated revision date.
                          <br />
                          Your continued use of the Website after changes are
                          made will signify your acceptance of those changes.
                        </p>
                        <hr className="wp-block-separator has-alpha-channel-opacity" />
                        <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white pt-5">
                          <span id="Contact_Us">
                            Contact Us
                          </span>
                        </h2>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          If you have any questions regarding this Privacy
                          Policy, please contact us through the contact form
                          available on the Website.
                        </p>
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                          <strong>Website:</strong>{" "}
                          <a className="" href="https://allsipcalculator.in/">
                            https://allsipcalculator.in/
                          </a>
                        </p>
                        <div
                          id="toc_container"
                          className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 my-6"
                        >
                          <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] mb-3 text-my-black font-semibold dark:text-white">Contents</p>
                          <ul className="toc_list">
                            <li className="mt-1 text-dark-green">
                              <a href="#Table_of_Contents">
                                <span className="toc_number toc_depth_1">
                                  1
                                </span>{" "}
                                Table of Contents
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Collection_of_Personal_Data">
                                <span className="toc_number toc_depth_1">
                                  2
                                </span>{" "}
                                Collection of Personal Data
                              </a>
                              <ul>
                                <li className="mt-1 text-dark-green">
                                  <a href="#Voluntarily_Provided_Information">
                                    <span className="toc_number toc_depth_2">
                                      2.1
                                    </span>{" "}
                                    Voluntarily Provided Information
                                  </a>
                                </li>
                                <li className="mt-1 text-dark-green">
                                  <a href="#Automatically_Collected_Information">
                                    <span className="toc_number toc_depth_2">
                                      2.2
                                    </span>{" "}
                                    Automatically Collected Information
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Use_of_Collected_Information">
                                <span className="toc_number toc_depth_1">
                                  3
                                </span>{" "}
                                Use of Collected Information
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Google_AdSense_and_Third-Party_Advertising">
                                <span className="toc_number toc_depth_1">
                                  4
                                </span>{" "}
                                Google AdSense and Third-Party Advertising
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Cookies_and_Web_Beacons">
                                <span className="toc_number toc_depth_1">
                                  5
                                </span>{" "}
                                Cookies and Web Beacons
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Data_Security">
                                <span className="toc_number toc_depth_1">
                                  6
                                </span>{" "}
                                Data Security
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Third-Party_Links">
                                <span className="toc_number toc_depth_1">
                                  7
                                </span>{" "}
                                Third-Party Links
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Childrens_Privacy">
                                <span className="toc_number toc_depth_1">
                                  8
                                </span>{" "}
                                Children’s Privacy
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Your_Rights">
                                <span className="toc_number toc_depth_1">
                                  9
                                </span>{" "}
                                Your Rights
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Changes_to_This_Privacy_Policy">
                                {/* <span className="toc_number toc_depth_1">
                                  10
                                </span>{" "}
                                Changes to This Privacy Policy */}
                              </a>
                            </li>
                            <li className="mt-1 text-dark-green">
                              <a href="#Contact_Us">
                                <span className="toc_number toc_depth_1">
                                  11
                                </span>{" "}
                                Contact Us
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
