import RootLayout from "@/app/layout";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Disclaimer() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <RootLayout>
      <main>
        {/* header section start */}
        <div className="relative pt-[100px] md:pt-[140px] pb-[50px] bg-white dark:bg-my-black border-b border-[#DCD7D7] dark:border-[#263c6b]">
          <div className="max-w-6xl mx-auto px-3 h-full flex items-center justify-center">
            <h1 className="font-raleway text-center leading-[48px] text-2xl md:text-[40px] text-my-black dark:text-white font-bold lg:max-w-[700px]">
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
            <div className="relative lg:py-[50px] lg:pb-0 py-8 lg:w-8/12 w-full">
              <div className="max-w-6xl mx-auto px-3">
                <div className="flex lg:flex-row flex-col gap-8 justify-between">
                  <div className="inside-article">
                    <h2 className="lg:text-4xl text-xl text-my-black font-semibold dark:text-white">
                      Disclaimer
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
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-5">
                        By using this Website, you agree to the terms outlined
                        in this Disclaimer.
                        <br />
                        If you do not agree with any part of this Disclaimer,
                        please do not use the Website.
                      </p>
                      <hr className="mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="General_Information">
                          General Information
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        The content and tools available on{" "}
                        <strong>SIP Calculator</strong> are provided for general
                        informational and educational purposes only.
                        <br />
                        While we strive to keep the information accurate and up
                        to date, we make no guarantees of any kind — express or
                        implied — about the completeness, accuracy, reliability,
                        suitability, or availability of the Website or the
                        information, products, services, or related graphics
                        contained on the Website for any purpose.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        <strong>
                          Any reliance you place on such information is strictly
                          at your own risk.
                        </strong>
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="No_Financial_Advice">
                          No Financial Advice
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        The Website provides financial calculators, estimates,
                        and informational content related to Systematic
                        Investment Plans (SIP) and other investment tools.
                        <br />
                        However, the content is not intended as financial,
                        investment, legal, or tax advice.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        Before making any financial decisions, you should seek
                        advice from a licensed financial advisor who understands
                        your specific situation.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Accuracy_of_Information">
                          Accuracy of Information
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        We do our best to ensure that all calculators and
                        content are updated and accurate.
                        <br />
                        However, we do not warrant that any results,
                        calculations, or projections provided by the Website are
                        precise or guaranteed.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        The calculators are based on certain assumptions and
                        user-provided inputs and are intended solely as general
                        guides, not exact predictions.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Third-Party_Links">
                          Third-Party Links
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        The Website may contain links to external websites that
                        are not provided or maintained by or in any way
                        affiliated with <strong>AllSIPCalculator</strong>.<br />
                        We do not guarantee the accuracy, relevance, timeliness,
                        or completeness of any information on these external
                        websites.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        We are not responsible for the content, policies, or
                        practices of any third-party sites.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Google_AdSense_and_Advertising">
                          Google AdSense and Advertising
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        This Website is monetized using{" "}
                        <strong>Google AdSense</strong>.<br />
                        Ads appearing on the Website may be delivered by Google
                        or other third-party ad networks that may use cookies
                        and tracking technologies to serve relevant
                        advertisements.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        Please refer to our <a>Privacy Policy</a> for more
                        information about how advertising partners may collect
                        and use your data.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Limitation_of_Liability">
                          Limitation of Liability
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        In no event shall <strong>AllSIPCalculator</strong>, its
                        owners, contributors, or affiliates be liable for any
                        loss or damage — including without limitation, indirect
                        or consequential loss or damage — arising out of, or in
                        connection with, the use of the Website.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        You acknowledge and agree that your use of the Website
                        is entirely at your own risk.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Consent">
                          Consent
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5 mb-3">
                        By using the Website, you hereby consent to this
                        Disclaimer and agree to its terms.
                      </p>
                      <hr className="wp-block-separator has-alpha-channel-opacity mb-5" />
                      <h3 className="lg:text-2xl text-xl text-my-black font-semibold dark:text-white">
                        <span id="Contact_Us">
                          Contact Us
                        </span>
                      </h3>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        If you have any questions or concerns regarding this
                        Disclaimer, please contact us through the contact form
                        available on the Website.
                      </p>
                      <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] pt-5">
                        <strong>Website:</strong>{" "}
                        <strong>
                          <a
                            className="text-dark-green"
                            target="_blank"
                            href={origin}
                          >
                            {origin}
                          </a>
                        </strong>{" "}
                      </p>
                      <div id="toc_container" className="toc_transparent no_bullets bg-[linear-gradient(270deg,rgba(9,186,39,0.20)_0%,rgba(182,248,77,0.20)_100%)] rounded-2xl border border-[#DCD7D7] dark:border-[#263c6b] p-6 my-6">
                        <p className="text-base text-[#434B5B] leading-8 dark:text-[#7B8498] mb-3 text-my-black font-semibold dark:text-white">
                          Contents
                        </p>
                        <ul className="toc_list">
                          <li className="mt-1 text-dark-green">
                            <a href="#General_Information">
                              <span className="me-2">1</span> General
                              Information
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#No_Financial_Advice">
                              <span className="me-2">2</span> No Financial
                              Advice
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Accuracy_of_Information">
                              <span className="me-2">3</span> Accuracy of
                              Information
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Third-Party_Links">
                              <span className="me-2">4</span> Third-Party Links
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Google_AdSense_and_Advertising">
                              <span className="me-2">5</span> Google AdSense and
                              Advertising
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Limitation_of_Liability">
                              <span className="me-2">6</span> Limitation of
                              Liability
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Consent">
                              <span className="me-2">7</span> Consent
                            </a>
                          </li>
                          <li className="mt-1 text-dark-green">
                            <a href="#Contact_Us">
                              <span className="me-2">8</span> Contact Us
                            </a>
                          </li>
                        </ul>
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
