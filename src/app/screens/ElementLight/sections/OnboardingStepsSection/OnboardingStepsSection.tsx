import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureItems = [
  {
    title: "Hong Kong Company Formation",
    description:
      "Full Hong Kong Limited Company formation — registered address, company secretary, government registration, certificate of incorporation",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/hong-kong-company-formation.svg",
    alt: "Hong kong company",
  },
  {
    title: "Insider-Backed PSP Setup",
    description:
      "Insider-backed PSP account setup — connected to processors who specialize in high-volume eCommerce (no algorithmic ban risk)",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/insider-backed-psp-setup.svg",
    alt: "Insider backed PSP",
  },
  {
    title: "Stable Hong Kong PayPal",
    description:
      "Verified Hong Kong Business PayPal — the most stable PayPal tier on the planet, period",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/stable-hong-kong-paypal.svg",
    alt: "Stable hong kong",
  },
  {
    title: "HK Multi-Currency Banking",
    description:
      "Multi-currency HK business bank account — receive funds globally with institutional-grade banking",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/hk-multi-currency-banking.svg",
    alt: "Hk multi currency",
  },
  {
    title: "Hassle-Free Compliance",
    description:
      "Full compliance documentation and annual filing management — everything stays clean, always",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/hassle-free-compliance.svg",
    alt: "Hassle free",
  },
  {
    title: "Real Human Support",
    description:
      "Dedicated account manager — not a chatbot, not a ticket system, a real human who picks up the phone",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/real-human-support.svg",
    alt: "Real human support",
  },
  {
    title: "Fully Operational in 7 Days",
    description:
      "7-day delivery — from zero to fully operational in one week flat",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/fully-operational-in-7-days.svg",
    alt: "Fully operational in",
  },
];

const stats = [
  { value: "5000+", label: "PSPs Approved" },
  { value: "2500+", label: "HK Companies created" },
];

const packageFeatures = [
  "Full support until PSP is active",
  "HK Company + Bank formation",
  "Fully active payment processing",
  "Personal guidance & insider strategies",
];

export const OnboardingStepsSection = (): React.JSX.Element => {
  return (
    <section className="w-full px-4 py-[70px] sm:px-6 lg:px-[101px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-10 lg:flex-row lg:gap-[100px]">
        <div className="flex w-full max-w-[664px] flex-col items-start gap-[57px]">
          <header className="flex w-full flex-col items-start gap-[17.2px]">
            <div className="flex w-full flex-col items-start">
              <img
                className="h-auto w-full max-w-[449px]"
                alt="Hong kong PSP"
                src="https://c.animaapp.com/mpv8f0th9epBAX/img/hong-kong-psp-specialist.svg"
              />
            </div>
            <p className="max-w-[622px] [font-family:'Inter',Helvetica] text-xl font-light leading-[29.2px] tracking-[0] text-[#58585f]">
              MuteTaxes has assisted in forming more than 3000 Hong Kong
              companies and has extensive experience guiding clients through
              complex payment compliance requirements.
            </p>
          </header>
          <div className="flex w-full flex-col items-start gap-[33px]">
            {featureItems.map((item) => (
              <article
                key={item.title}
                className="flex w-full items-start gap-4"
              >
                <img
                  className="h-12 w-12 shrink-0"
                  alt={item.alt}
                  src={item.icon}
                />
                <div className="flex min-w-0 flex-1 flex-col items-start gap-[7.4px]">
                  <h3 className="[font-family:'Inter',Helvetica] text-lg font-normal leading-6 tracking-[0] text-[#1d1c20]">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[22.8px] tracking-[0] text-[#58585f]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Card className="w-full max-w-[448px] rounded-3xl border-0 bg-[#f4f4fe] p-[33px] shadow-[0px_25px_50px_-12px_#00000040]">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-6">
              <div className="flex w-full flex-col items-center pt-px">
                <img
                  className="h-[98px] w-[98px]"
                  alt="Swiftnine"
                  src="https://c.animaapp.com/mpv8f0th9epBAX/img/swiftnine.svg"
                />
                <div className="mt-[13px] [font-family:'Inter',Helvetica] text-xl font-normal leading-7 tracking-[0] text-[#1d1c20]">
                  MuteTaxes
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-4 pt-[21px]">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-[10px] bg-[#e6e6ff] px-3 py-[3px]"
                  >
                    <div className="[font-family:'Inter',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#1d1c20]">
                      {stat.value}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-center text-xs font-normal leading-4 tracking-[0] text-[#70707b]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <Card className="w-full rounded-2xl border border-solid border-[#31415780] bg-[#e6e6ff] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
                <CardContent className="flex flex-col p-0">
                  <div className="flex w-full justify-center px-6 pb-[3px] pt-[25px]">
                    <div className="inline-flex h-7 items-center rounded-[33554400px] bg-[#3a383e] px-4 py-1.5 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
                      <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-4 tracking-[0.30px] text-white">
                        MONEY BACK GUARANTEE
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center px-[25px] pt-6">
                    <div className="[font-family:'Inter',Helvetica] text-center text-5xl font-normal leading-[48px] tracking-[0] text-[#1544ea]">
                      <span className="font-medium">€</span>
                      <span>3000</span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 px-[25px] pt-8 text-center">
                    <h3 className="w-full [font-family:'Inter',Helvetica] text-lg font-normal leading-7 tracking-[0] text-[#2a2a3a]">
                      Complete Hong Kong PSP Setup
                    </h3>
                    <p className="w-full [font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#70707b]">
                      We ensure your complete payment processor
                      <br />
                      setup is ready to go
                    </p>
                  </div>
                  <ul className="flex w-full list-none flex-col gap-3 px-[25px] pb-0 pt-8">
                    {packageFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex min-h-5 items-center gap-2"
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="Check"
                          src="https://c.animaapp.com/mpv8f0th9epBAX/img/check.svg"
                        />
                        <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#58585f]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mx-[25px] mt-[29px] flex rounded-[14px] border border-solid border-[#9e071180] bg-[#82181a19] p-[13px]">
                    <div className="flex items-start gap-2">
                      <img
                        className="h-[18px] w-4 shrink-0"
                        alt="Warning margin"
                        src="https://c.animaapp.com/mpv8f0th9epBAX/img/warning-margin.svg"
                      />
                      <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#ff080b]">
                        Please ensure you have{" "}
                        <span className="font-bold">€3000</span> ready before
                        <br />
                        reaching out
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-[25px] pt-[19px]">
                    <Button
                      type="button"
                      className="h-auto w-full rounded-3xl bg-[#1544ea] px-7 py-2.5 [font-family:'Inter',Helvetica] text-lg font-medium leading-7 tracking-[-0.36px] text-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] hover:bg-[#1544ea]/90"
                    >
                      Start Your Hong Kong PSP Setup
                    </Button>
                  </div>
                  <div className="flex w-full justify-center px-[25px] pb-[25px] pt-[18px]">
                    <p className="[font-family:'Inter',Helvetica] text-center text-xs font-normal leading-4 tracking-[0] text-[#58585f]">
                      For global entrepreneurs
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="w-full">
                  <p className="[font-family:'Inter',Helvetica] text-center text-sm font-normal leading-5 tracking-[0] text-[#1d1c20]">
                    Discover our mutual connections:
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto flex w-full items-center justify-center gap-2 rounded-[14px] border border-solid border-[#1544ea] bg-[#1544ea12] px-4 py-2 text-[#1544ea] shadow-[0px_1px_2px_#0000000d] hover:bg-[#1544ea1f]"
                >
                  <img
                    className="h-4 w-4 shrink-0"
                    alt="Instagram"
                    src="https://c.animaapp.com/mpv8f0th9epBAX/img/instagram.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#1544ea]">
                    Instagram
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
