import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const guideColumns = [
  {
    title: "What Is a Hong Kong Payment Service Provider?",
    paragraphs: [
      "A Hong Kong Payment Service Provider (PSP) is a regulated financial platform that enables businesses to process payments without many of the restrictions found in traditional processors such as Stripe, PayPal, or 2Checkout. While typical payment platforms often freeze funds, limit usage, or unexpectedly shut down accounts, Hong Kong PSPs operate under a strong regulatory system built to support high-volume international transactions.",
      "These PSPs are designed for companies that need unlimited processing capabilities, multi-currency functionality, and protection from the account of disruptions commonly experienced with mainstream processors. Hong Kong's regulatory environment offers the stability, reliability, and freedom businesses need to scale without interruptions.",
    ],
    listTitle: "Key PSP Features:",
    items: [
      "No limits on daily or monthly processing volumes",
      "No unexpected account freezes or random reviews",
      "Supports multiple currencies (USD, EUR, GBP, HKD, and more)",
      "Handles international and cross-border payments",
      "Strong regulatory oversight and protection",
      "24/7 technical support and system monitoring",
    ],
  },
  {
    title: "Why Choose a Hong Kong PSP Over Traditional Processors?",
    paragraphs: [
      'Mainstream processors like Stripe, PayPal, and 2Checkout have become increasingly restrictive, often placing sudden holds, freezing accounts, or banning high-volume businesses without clear justification. These companies focus on serving major corporations such as Amazon and Uber, while smaller or growing businesses are labeled "high risk" and subjected to constant scrutiny and limitations.',
      "Hong Kong PSPs solve these issues by offering enterprise-level payment infrastructure without arbitrary limitations. Hong Kong's regulatory system prioritizes business growth, making these PSPs a dependable and scalable option for entrepreneurs who need stable, high-capacity payment processing.",
    ],
    sections: [
      {
        title: "Problems With Traditional Processors:",
        items: [
          "Unexpected account freezes",
          'Funds withheld for 120–180+ days during "reviews"',
          "Volume limits that lead to automatic suspensions",
          "Dispute processes that typically favor buyers",
          "Sudden policy changes that disrupt business operations",
        ],
      },
      {
        title: "Advantages of Hong Kong PSPs:",
        items: [
          "Stable, regulation-driven operations",
          "No caps on processing volumes",
          "Faster settlement times (1–3 business days)",
          "Fair and professional dispute handling",
          "Clear pricing with no hidden fees",
        ],
      },
    ],
  },
];

const cards = [
  {
    title: "Setup Process",
    description:
      "A complete Hong Kong PSP setup covers regulatory approval, technical integration, compliance documentation, and continuous support. The full implementation typically requires 2–4 weeks.",
    listTitle: "Included Services:",
    items: [
      "Compliance and regulatory assessment",
      "Technical system configuration",
      "Integration of the payment gateway",
      "Testing and quality assurance",
      "Go-live deployment with active monitoring",
      "Ongoing technical assistance",
    ],
  },
  {
    title: "Investment Analysis",
    description:
      "At a one-time cost of $4,000, a Hong Kong PSP setup delivers strong long-term value, especially when compared to the financial losses caused by the restrictions of traditional payment processors",
    listTitle: "Cost Comparison:",
    items: [
      "Frozen Stripe funds: Losses ranging from $10K to $100K+",
      "PayPal holds: Up to six months of disrupted revenue",
      "Rebuilding accounts after bans: $5K–$15K in expenses",
      "Hong Kong PSP setup: One-time $4,200 fee",
      "Unlimited processing capabilities",
      "No unexpected limits or account terminations",
    ],
  },
  {
    title: "Ideal Businesses",
    description:
      "A Hong Kong PSP is an excellent fit for fast-growing companies that require stable, unrestricted payment processing without the risk of sudden shutdowns or arbitrary reviews.",
    listTitle: "Perfect For:",
    items: [
      "E-commerce brands generating $50K+ monthly",
      "SaaS and subscription-based companies",
      "Digital marketing firms",
      "International trade businesses",
      "Fintech and crypto-related operations",
      "High-volume service providers",
    ],
  },
];

const technicalColumns = [
  {
    title: "Processing Capabilities",
    items: [
      "Processing Volume: No daily or monthly transaction limits",
      "Transaction Speed: Instant, real-time authorization",
      "Settlement Time: Funds settled within 1–3 business days",
      "System Uptime: 99.9% service availability guaranteed",
      "Fraud Prevention: Enhanced machine-learning fraud monitoring",
      "API Support: RESTful API integration with available SDKs",
    ],
  },
  {
    title: "Regulatory Compliance",
    items: [
      "Licensed by the Hong Kong Monetary Authority",
      "Fully PCI DSS Level 1 compliant",
      "Meets GDPR and CCPA data protection standards",
      "Includes anti-money laundering (AML) safeguards",
      "Incorporates Know Your Customer (KYC) verification procedures",
      "Compliant with international regulatory standards.",
    ],
  },
];

export const OnboardingTeamSection = (): React.JSX.Element => {
  return (
    <section className="relative flex w-full flex-col items-center px-0 py-[70px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start px-4 sm:px-8">
        <div className="relative flex w-full flex-col items-start gap-14 px-0 lg:gap-[69px] xl:px-[149.26px]">
          <header className="flex w-full flex-col items-center gap-[5px]">
            <div className="flex w-full max-w-[990px] justify-center">
              <h2 className="bg-[linear-gradient(90deg,rgba(22,68,235,1)_0%,rgba(29,28,32,1)_100%)] bg-clip-text text-center font-normal text-transparent [font-family:'Cambo',Helvetica] text-[34px] leading-[1.15] sm:text-[48px] lg:text-[70px] lg:leading-[84px] [-webkit-text-fill-color:transparent]">
                Complete Hong Kong Payment
                <br />
                Service Provider Guide 2025
              </h2>
            </div>
            <div className="flex w-full justify-center px-0 lg:px-[121.25px]">
              <div className="flex w-full max-w-[835px] flex-col items-center px-4">
                <p className="text-center font-light text-[#58585f] [font-family:'Inter',Helvetica] text-[16.9px] leading-[26.3px]">
                  Professional insight into Hong Kong PSPs, payment regulations,
                  regulatory compliance, and unlimited
                  <br className="hidden md:block" />
                  payment processing solutions
                </p>
              </div>
            </div>
          </header>
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[30.04px]">
            {guideColumns.map((column) => (
              <article key={column.title} className="flex flex-col gap-8">
                <div className="flex flex-col gap-[11.1px]">
                  <h3 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[18.8px] leading-[26.3px]">
                    {column.title}
                  </h3>
                  <div className="flex flex-col gap-[14px]">
                    {column.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[#58585f] [font-family:'Inter',Helvetica] text-[15.1px] leading-[18.8px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                {"listTitle" in column && column.listTitle && (
                  <div className="flex flex-col gap-[11px] pt-[15px]">
                    <h4 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[15px] leading-[22.5px]">
                      {column.listTitle}
                    </h4>
                    <ul className="flex flex-col gap-[4.6px]">
                      {column.items?.map((item) => (
                        <li
                          key={item}
                          className="text-[#58585f] [font-family:'Inter',Helvetica] text-[15.1px] leading-[18.8px]"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {"sections" in column && column.sections && (
                  <div className="flex flex-col gap-8">
                    {column.sections.map((section, index) => (
                      <div
                        key={section.title}
                        className={`flex flex-col gap-[11px] ${index === 0 ? "pt-[7px]" : "pt-[15px]"}`}
                      >
                        <h4 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[15px] leading-[22.5px]">
                          {section.title}
                        </h4>
                        <ul className="flex flex-col gap-[4.6px]">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="text-[#58585f] [font-family:'Inter',Helvetica] text-[15.1px] leading-[18.8px]"
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-[23px] lg:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={card.title}
                className="rounded-2xl border-0 bg-[#f4f4fe] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]"
              >
                <CardContent className="p-[23px] pt-[22px] pb-[23px]">
                  <article className="flex h-full flex-col gap-4">
                    <header className="flex flex-col gap-4">
                      <h3 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[18.8px] leading-[30.3px]">
                        {card.title}
                      </h3>
                      <p className="text-[#58585f] [font-family:'Inter',Helvetica] text-[13px] leading-[20.8px]">
                        {card.description}
                      </p>
                    </header>
                    <div className="flex flex-col gap-[11.99px] pt-4">
                      <h4 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[13.1px] leading-[18.8px]">
                        {card.listTitle}
                      </h4>
                      <ul className="flex flex-col gap-[5.6px]">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="text-[#58585f] [font-family:'Inter',Helvetica] text-[13px] leading-[18.8px]"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="w-full rounded-2xl border-0 bg-[#f4f4fe] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
            <CardContent className="px-[30.98px] py-[30px]">
              <section className="flex flex-col gap-[30.03px]">
                <header className="flex justify-center">
                  <h3 className="text-center font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[28.2px] leading-[33.8px]">
                    Hong Kong PSP Technical Specifications
                  </h3>
                </header>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[45.06px]">
                  {technicalColumns.map((column) => (
                    <article
                      key={column.title}
                      className="flex flex-col gap-[14.01px]"
                    >
                      <h4 className="font-normal text-[#1d1c20] [font-family:'Inter',Helvetica] text-[16.9px] leading-[26.3px]">
                        {column.title}
                      </h4>
                      <ul className="flex flex-col gap-[6.5px]">
                        {column.items.map((item) => (
                          <li
                            key={item}
                            className="text-[#58585f] [font-family:'Inter',Helvetica] text-[15.1px] leading-[18.8px]"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex w-full max-w-[1264px] flex-col items-start px-4 pb-[70px] pt-12 sm:px-8">
        <section className="relative flex w-full flex-col overflow-hidden rounded-[17px]">
          <div
            className="absolute inset-0 rounded-lg bg-cover bg-[50%_50%]"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mpv8f0th9epBAX/img/image.png)",
            }}
          />
          <div className="absolute inset-0 bg-[rgba(21,68,234,0.15)]" />
          <div className="relative flex flex-col items-center px-4 py-20 sm:py-28 lg:py-[143px]">
            <header className="flex w-full max-w-[1236px] flex-col items-center pb-4">
              <h2 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_22%,rgba(255,255,255,0.7)_100%)] bg-clip-text text-center font-normal text-transparent [font-family:'Cambo',Helvetica] text-[34px] leading-[1.1] sm:text-[48px] lg:text-[70px] lg:leading-[70.1px] [-webkit-text-fill-color:transparent]">
                Don&apos;t Let Payment Processors
                <br />
                Destroy Your Business
              </h2>
            </header>
            <div className="flex w-full max-w-[620px] flex-col items-center">
              <p className="text-center font-light text-white [font-family:'Inter',Helvetica] text-[20px] leading-[32px] sm:text-[26px] sm:leading-[39px]">
                One setup with us prevents all the nightmares.
              </p>
              <p className="text-center font-normal text-white [font-family:'Inter',Helvetica] text-[20px] leading-[32px] sm:text-[26px] sm:leading-10">
                Join 1000+ successful eCommerce entrepreneurs
                <br />
                who chose protection.
              </p>
            </div>
            <div className="flex flex-col items-start pt-8">
              <div className="flex flex-col items-center gap-3">
                <div className="flex w-full items-center justify-center">
                  <Button
                    type="button"
                    className="relative h-auto overflow-hidden rounded-xl bg-white px-4 py-3 text-[#1544ea] shadow-none hover:bg-white"
                  >
                    <span className="absolute bottom-[-68px] right-[-29px] h-20 w-[326px] rounded-[326px] bg-[#d9d9d9] blur-[13.5px]" />
                    <span className="relative [font-family:'Inter',Helvetica] text-base font-normal leading-7 tracking-[-0.32px]">
                      CLAIM YOUR HK COMPANY NOW
                    </span>
                  </Button>
                </div>
                <p className="text-center font-normal text-white [font-family:'Inter',Helvetica] text-sm leading-5">
                  ⚡ 100% Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
