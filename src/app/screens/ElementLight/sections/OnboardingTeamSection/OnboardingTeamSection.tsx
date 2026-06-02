"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Modal } from "../../../../components/ui/Modal";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const leftColumnContent = {
  title: "What Is a Hong Kong Payment Service Provider?",
  paragraphs: [
    "A Hong Kong Payment Service Provider (PSP) is a regulated financial platform that enables businesses to process payments without many of the restrictions found in traditional processors such as Stripe, PayPal, or 2Checkout. While typical payment platforms often freeze funds, limit usage, or unexpectedly shut down accounts, Hong Kong PSPs operate under a strong regulatory system built to support high-volume international transactions.",
    "These PSPs are designed for companies that need unlimited processing capabilities, multi-currency functionality, and protection from the account of disruptions commonly experienced with mainstream processors. Hong Kong's regulatory environment offers the stability, reliability, and freedom businesses need to scale without interruptions.",
  ],
  featuresTitle: "Key PSP Features:",
  features: ["No limits on daily or monthly processing volumes", "No unexpected account freezes or random reviews", "Supports multiple currencies (USD, EUR, GBP, HKD, and more)", "Handles international and cross-border payments", "Strong regulatory oversight and protection", "24/7 technical support and system monitoring"],
};

const rightColumnContent = {
  title: "Why Choose a Hong Kong PSP Over Traditional Processors?",
  paragraphs: [
    'Mainstream processors like Stripe, PayPal, and 2Checkout have become increasingly restrictive, often placing sudden holds, freezing accounts, or banning high-volume businesses without clear justification. These companies focus on serving major corporations such as Amazon and Uber, while smaller or growing businesses are labeled "high risk" and subjected to constant scrutiny and limitations.',
    "Hong Kong PSPs solve these issues by offering enterprise-level payment infrastructure without arbitrary limitations. Hong Kong's regulatory system prioritizes business growth, making these PSPs a dependable and scalable option for entrepreneurs who need stable, high-capacity payment processing.",
  ],
  problemsTitle: "Problems With Traditional Processors:",
  problems: ["Unexpected account freezes", 'Funds withheld for 120–180+ days during "reviews"', "Volume limits that lead to automatic suspensions", "Dispute processes that typically favor buyers", "Sudden policy changes that disrupt business operations"],
  advantagesTitle: "Advantages of Hong Kong PSPs:",
  advantages: ["Stable, regulation-driven operations", "No caps on processing volumes", "Faster settlement times (1–3 business days)", "Fair and professional dispute handling", "Clear pricing with no hidden fees"],
};

const cards = [
  { title: "Setup Process", description: "A complete Hong Kong PSP setup covers regulatory approval, technical integration, compliance documentation, and continuous support. The full implementation typically requires 2–4 weeks.", listTitle: "Included Services:", items: ["Compliance and regulatory assessment", "Technical system configuration", "Integration of the payment gateway", "Testing and quality assurance", "Go-live deployment with active monitoring", "Ongoing technical assistance"] },
  { title: "Investment Analysis", description: "At a one-time cost of $4,000, a Hong Kong PSP setup delivers strong long-term value, especially when compared to the financial losses caused by the restrictions of traditional payment processors", listTitle: "Cost Comparison:", items: ["Frozen Stripe funds: Losses ranging from $10K to $100K+", "PayPal holds: Up to six months of disrupted revenue", "Rebuilding accounts after bans: $5K–$15K in expenses", "Hong Kong PSP setup: One-time $4,200 fee", "Unlimited processing capabilities", "No unexpected limits or account terminations"] },
  { title: "Ideal Businesses", description: "A Hong Kong PSP is an excellent fit for fast-growing companies that require stable, unrestricted payment processing without the risk of sudden shutdowns or arbitrary reviews.", listTitle: "Perfect For:", items: ["E-commerce brands generating $50K+ monthly", "SaaS and subscription-based companies", "Digital marketing firms", "International trade businesses", "Fintech and crypto-related operations", "High-volume service providers"] },
];

const technicalSpecs = {
  left: { title: "Processing Capabilities", items: ["Processing Volume: No daily or monthly transaction limits", "Transaction Speed: Instant, real-time authorization", "Settlement Time: Funds settled within 1–3 business days", "System Uptime: 99.9% service availability guaranteed", "Fraud Prevention: Enhanced machine-learning fraud monitoring", "API Support: RESTful API integration with available SDKs"] },
  right: { title: "Regulatory Compliance", items: ["Licensed by the Hong Kong Monetary Authority", "Fully PCI DSS Level 1 compliant", "Meets GDPR and CCPA data protection standards", "Includes anti-money laundering (AML) safeguards", "Incorporates Know Your Customer (KYC) verification procedures", "Compliant with international regulatory standards."] },
};

export const OnboardingTeamSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <section className="flex flex-col w-full px-4 md:px-4 xl:px-0 items-center py-6 md:py-8 lg:py-[70px]">
      <div className="flex flex-col items-start w-full max-w-[1440px] px-0 md:px-6 lg:px-0 xl:px-8">
        <div className="flex flex-col items-start gap-8 md:gap-12 lg:gap-[69px] pb-0 px-0 md:px-0 lg:px-8 xl:px-[149.26px] w-full">
          <header className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[5px] w-full">
            <h2 className="max-w-[990px] text-center">
              <span className="leading-[120%] bg-gradient-to-r from-[rgba(21,68,234,1)] to-[rgba(29,28,32,1)] bg-clip-text text-transparent text-[36px] lg:text-[70px] [font-family:'Cambo',Helvetica]">Complete Hong Kong Payment</span>{" "}
              <span className="leading-[120%] bg-gradient-to-r from-[rgba(21,68,234,1)] to-[rgba(29,28,32,1)] bg-clip-text text-transparent text-[36px] lg:text-[70px] [font-family:'Cambo',Helvetica]">Service Provider Guide 2025</span>
            </h2>
            <p className="w-full">
              <span className="block w-full max-w-[835px] mx-auto [font-family:'Inter',Helvetica] font-[300] text-[#58585f] text-sm md:text-base lg:text-[16.9px] text-center tracking-[0] leading-relaxed md:leading-[26.3px] px-4">
                Professional insight into Hong Kong PSPs, payment regulations, regulatory compliance, and unlimited payment processing solutions
              </span>
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[30.04px] w-full">
            <article className="flex flex-col gap-3 md:gap-4">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-base md:text-lg lg:text-[18.8px] tracking-[0] leading-relaxed lg:leading-[26.3px]">{leftColumnContent.title}</h2>
              <div className="flex flex-col gap-2 md:gap-3">
                {leftColumnContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs md:text-sm lg:text-[15.1px] tracking-[0] leading-relaxed lg:leading-[18.8px]">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-3 mt-2 md:mt-4">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-sm md:text-[15px] leading-relaxed md:leading-[22.5px] tracking-[0]">{leftColumnContent.featuresTitle}</h3>
                <ul className="flex flex-col gap-1 md:gap-[5.63px]">
                  {leftColumnContent.features.map((feature, index) => (
                    <li key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs md:text-sm lg:text-[15.1px] tracking-[0] leading-relaxed lg:leading-[18.8px]">• {feature}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="flex flex-col gap-3 md:gap-4">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-base md:text-lg lg:text-[18.8px] tracking-[0] leading-relaxed lg:leading-[26.3px]">{rightColumnContent.title}</h2>
              <div className="flex flex-col gap-4 md:gap-[22.26px]">
                {rightColumnContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs md:text-sm lg:text-[15.1px] tracking-[0] leading-relaxed lg:leading-[18.8px]">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:gap-3 mt-2">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-sm md:text-[15px] tracking-[0] leading-relaxed md:leading-[22.5px]">{rightColumnContent.problemsTitle}</h3>
                <ul className="flex flex-col gap-1 md:gap-[5.63px]">
                  {rightColumnContent.problems.map((p, index) => <li key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs md:text-sm lg:text-[15.1px] tracking-[0] leading-relaxed lg:leading-[18.8px]">• {p}</li>)}
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 mt-2 md:mt-4">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-sm md:text-[15px] tracking-[0] leading-relaxed md:leading-[22.5px]">{rightColumnContent.advantagesTitle}</h3>
                <ul className="flex flex-col gap-1 md:gap-[5.63px]">
                  {rightColumnContent.advantages.map((a, index) => <li key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs md:text-sm lg:text-[15.1px] tracking-[0] leading-relaxed lg:leading-[18.8px]">• {a}</li>)}
                </ul>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[23px] w-full">
            {cards.map((card, index) => (
              <Card key={index} className="bg-[#f4f4fe] rounded-2xl overflow-hidden border-0">
                <CardContent className="p-[23px] relative">
                  <div className="top-[-69px] w-[238px] rounded-[119px] absolute left-[-17px] h-[238px] blur-[82px] bg-[#F4F4FE]" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-[18.8px] tracking-[0] leading-[30.3px]">{card.title}</h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-[13px] tracking-[0] leading-[20.8px]">{card.description}</p>
                    <div className="flex flex-col gap-3 mt-4">
                      <h4 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-[13.1px] tracking-[0] leading-[18.8px]">{card.listTitle}</h4>
                      <ul className="flex flex-col gap-[5.63px]">
                        {card.items.map((item, itemIndex) => <li key={itemIndex} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-[13px] tracking-[0] leading-[18.8px]">• {item}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#f4f4fe] rounded-2xl overflow-hidden border-0 w-full">
            <CardContent className="p-[30.98px] relative">
              <div className="top-[-120px] w-[1100px] rounded-[550px/119px] absolute left-[-17px] h-[238px] blur-[82px] bg-[#F4F4FE]" />
              <div className="relative z-10 flex flex-col gap-[30.04px]">
                <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-[28.2px] text-center tracking-[0] leading-[33.8px]">Hong Kong PSP Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[45.06px]">
                  {[technicalSpecs.left, technicalSpecs.right].map((col, i) => (
                    <div key={i} className="flex flex-col gap-[15.02px]">
                      <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-[16.9px] tracking-[0] leading-[26.3px]">{col.title}</h3>
                      <ul className="flex flex-col gap-[7.51px]">
                        {col.items.map((item, index) => <li key={index} className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-[15.1px] tracking-[0] leading-[18.8px]">• {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="relative w-full max-w-[1250px] mx-auto overflow-hidden bg-[#1644EB] mt-6 mb-4 lg:mt-12 lg:mb-[70px] rounded-[17px]">
        <div className="relative flex flex-col items-center mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[143px]">
          <h2 className="font-normal w-full max-w-[1000px] text-[28px] sm:text-[38px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[1.2] text-center pb-4 lg:pb-[16px] tracking-[0] [font-family:'Cambo',Helvetica] bg-[linear-gradient(180deg,rgba(255,255,255,1)_22%,rgba(255,255,255,0.7)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]">
            Don&apos;t Let Payment Processors<br className="sm:block hidden" /> Destroy Your Business
          </h2>
          <p className="max-w-[620px] w-full text-center text-[15px] sm:text-[18px] md:text-[20px] lg:text-[26px] [font-family:'Inter',Helvetica] px-2 sm:px-0">
            <span className="text-white font-[300]">One setup with us prevents all the nightmares.{" "}</span><br />
            <span className="font-normal text-[#ffffff] leading-relaxed">Join 1000+ successful eCommerce entrepreneurs who chose protection.</span>
          </p>
          <div className="flex flex-col items-center gap-3 mt-6 lg:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <a
              onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")}
              className="cursor-pointer relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-[#1644EB] font-bold overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(21,68,234,0.45)] active:scale-[0.98]"
            >
              <div className="absolute w-[326px] h-[80px] right-[-28.5px] bottom-[-68px] rounded-[326px] bg-[#D9D9D9] blur-[27px]"></div>
              <span className="uppercase relative text-[13px] sm:text-[15px] lg:text-base font-normal tracking-[-0.32px] leading-6">CLAIM YOUR HK COMPANY NOW</span>
            </a>
            <p className="font-normal text-xs sm:text-sm leading-5 tracking-[0] text-white text-center [font-family:'Inter',Helvetica]">⚡ 100% Money-Back Guarantee</p>
          </div>
        </div>
        <Modal isOpen={showCalendly} onClose={() => setShowCalendly(false)}>
          <iframe src="https://calendly.com/d/cvs4-phh-xky/swiftnine-payments-booking" width="100%" height="100%" frameBorder="0" allowFullScreen className="rounded-b-xl min-h-[700px] sm:min-h-[850px]"></iframe>
        </Modal>
      </section>
    </section>
  );
};
