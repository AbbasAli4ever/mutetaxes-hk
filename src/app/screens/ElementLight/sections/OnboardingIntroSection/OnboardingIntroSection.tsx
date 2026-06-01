import * as React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const plans = [
  {
    name: "Starter Shield",
    description: "Perfect for testing new markets",
    subtitle: "HK Company + Airwallex Only",
    features: ["Full company registration", "Airwallex banking account"],
    investment: {
      ownName: "€1,800",
      nominee: "€2,200",
    },
    cta: "Get Started in 7 Days",
    highlighted: false,
    featured: false,
  },
  {
    name: "Fortress Package",
    description: "Complete protection for serious sellers",
    subtitle: "Everything You Need to Scale",
    features: [
      "HK Company Registration",
      "PayPal with VIP Support\n(6% dispute tolerance)",
      "Airwallex Account",
      "Payoneer VIP Account and\n5+ more banks",
      "Access to 9+ PayPal Reps",
      "Unlimited PayPal Reactivations",
    ],
    investment: {
      ownName: "€3,000",
      nominee: "€3,500",
    },
    cta: "87% of Clients Choose This",
    highlighted: true,
    featured: true,
  },
  {
    name: "Titanium Protection",
    description: "Maximum security for high-volume sellers",
    subtitle: "The Ultimate Safety Net",
    features: [
      "Everything in Fortress Package PLUS",
      "OceanPayments Integration\n(2.5% dispute tolerance)",
      "FREE Legal Letter for Money Holds",
      "Priority Support Queue",
      "Dedicated Account Manager",
    ],
    investment: {
      ownName: "€4,000",
      nominee: "€4,500",
    },
    cta: "For Sellers Doing €100K+/Month",
    highlighted: false,
    featured: false,
  },
] as const;

export const OnboardingIntroSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-0 pt-3.5 pb-[70px]">
      <div className="relative mx-auto flex w-full flex-col items-center gap-[63px] px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[120px] mx-auto hidden h-[455px] w-full max-w-[1372px] rounded-full bg-[#1544ea4c] blur-[59px] lg:block"
        />
        <header className="relative z-10 flex w-full flex-col items-center justify-center gap-[19.4px]">
          <Badge className="rounded-[130px] bg-[linear-gradient(61deg,rgba(22,68,235,1)_0%,rgba(128,156,255,1)_80%)] px-4 py-1.5 text-base font-medium leading-[24.8px] text-white shadow-[0px_4px_24px_#00000040] hover:bg-[linear-gradient(61deg,rgba(22,68,235,1)_0%,rgba(128,156,255,1)_80%)]">
            <span className="[font-family:'Inter',Helvetica]">
              MOST POPULAR
            </span>
          </Badge>
          <div className="flex flex-col items-center px-2">
            <img
              className="h-auto w-full max-w-[396px]"
              alt="Choose your armor"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/choose-your-armor-level.svg"
            />
          </div>
          <div className="max-w-[658px] px-[17.11px] text-center [font-family:'Inter',Helvetica] text-lg font-normal leading-7 tracking-[0] text-[#6f6f6f]">
            Choose a plan that suits your needs and budget. Each plan is
            designed to
            <br />
            offer maximum value and flexibility.
          </div>
          <div className="inline-flex items-center gap-2 rounded-[48px] border border-solid border-[#d03232] bg-[#d0323230] px-4 py-2">
            <img
              className="relative h-6 w-6"
              alt="Frame"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/frame-17.svg"
            />
            <p className="[font-family:'Inter',Helvetica] text-center text-base font-normal leading-6 tracking-[0] text-[#d03232]">
              Prices Increase December 1st • Lock in current pricing before
              December 1st
            </p>
          </div>
        </header>
        <div className="relative z-10 grid w-full max-w-screen-xl grid-cols-1 justify-center gap-[38.8px] md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full w-full items-stretch justify-center"
            >
              <Card
                className={`relative flex w-full flex-col overflow-hidden rounded-[29.06px] border bg-[#f4f4fe] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] ${
                  plan.highlighted
                    ? "min-h-[862px] border-[#6c04fd99]"
                    : "min-h-[780px] border-transparent"
                }`}
              >
                {plan.highlighted && (
                  <img
                    className="pointer-events-none absolute right-px top-px h-[730px] w-[380px] max-w-none"
                    alt="Card gradient"
                    src="https://c.animaapp.com/mpv8f0th9epBAX/img/card-gradient.svg"
                  />
                )}

                <CardContent className="relative z-10 flex h-full flex-1 flex-col justify-between px-[23.25px] py-8">
                  <div className="flex flex-1 flex-col">
                    <div className="flex flex-col gap-[23px]">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="[font-family:'Cambo',Helvetica] text-[32.9px] font-normal leading-[39.5px] tracking-[0] text-[#1d1c20]">
                            {plan.name}
                          </h3>
                          <p className="[font-family:'Inter',Helvetica] text-lg font-light leading-[27.9px] tracking-[-1.00px] text-[#2a2a3a]">
                            {plan.description}
                          </p>
                        </div>
                        <p className="[font-family:'Inter',Helvetica] text-[19.4px] font-normal leading-[30px] tracking-[0] text-[#1544ea]">
                          {plan.subtitle}
                        </p>
                      </div>
                      <div className="flex flex-col gap-[22.99px]">
                        <div className="flex items-center gap-[10.25px]">
                          <h4 className="[font-family:'Inter',Helvetica] text-[17.4px] font-normal leading-[24.4px] tracking-[0] text-[#2a2a3a]">
                            What&#39;s Included
                          </h4>
                          <img
                            className="h-px min-w-0 flex-1"
                            alt="Line"
                            src="https://c.animaapp.com/mpv8f0th9epBAX/img/line.svg"
                          />
                        </div>
                        <ul className="flex flex-col gap-[15.5px]">
                          {plan.features.map((feature, index) => (
                            <li
                              key={`${plan.name}-feature-${index}`}
                              className="flex items-start gap-[11.61px]"
                            >
                              <img
                                className="mt-[1px] h-[25.25px] w-[23.25px] shrink-0"
                                alt="Included"
                                src="https://c.animaapp.com/mpv8f0th9epBAX/img/div-w-5-margin.svg"
                              />
                              <span className="whitespace-pre-line [font-family:'Inter',Helvetica] text-[17.4px] font-normal leading-[24.4px] tracking-[0] text-[#58585f]">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <footer className="pt-5">
                    <div className="flex flex-col gap-4">
                      <div className="relative overflow-hidden rounded-2xl bg-[#ffffff12] p-4">
                        <div className="flex flex-col gap-4">
                          <div className="[font-family:'Inter',Helvetica] text-[17.4px] font-normal leading-6 tracking-[0] text-[#2a2a3a]">
                            Your Investment:
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <p className="[font-family:'Inter',Helvetica] text-2xl font-medium leading-7 tracking-[0]">
                              <span className="text-[#2a2a3a]">Own Name: </span>
                              <span className="text-[#1544ea]">
                                {plan.investment.ownName}
                              </span>
                            </p>
                            <p className="[font-family:'Inter',Helvetica] text-2xl font-medium leading-7 tracking-[0]">
                              <span className="text-[#2a2a3a]">
                                With Nominee:{" "}
                              </span>
                              <span className="text-[#1544ea]">
                                {plan.investment.nominee}
                              </span>
                            </p>
                          </div>
                        </div>
                        {plan.highlighted && (
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-[-174px] left-[-201px] h-[264px] w-[264px] rounded-full bg-[#1544ea] blur-[31px]"
                          />
                        )}
                      </div>
                      <Button
                        type="button"
                        className={`h-9 w-full rounded-[96.88px] px-[23.25px] py-[13px] [font-family:'Inter',Helvetica] text-[15.5px] font-normal leading-6 tracking-[0] shadow-[0px_1px_2px_#0000000d] ${
                          plan.featured
                            ? "bg-[#1544ea] text-white hover:bg-[#1544ea]/90 shadow-[0px_0.97px_1.94px_#0d0d120f]"
                            : "border border-solid border-[#1544ea4c] bg-[#1544ea1a] text-[#1544ea] hover:bg-[#1544ea26]"
                        }`}
                        variant="ghost"
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
