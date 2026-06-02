"use client";
import React from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Badge } from "../../../../components/ui/badge";
import { LinkButton } from "../../../../components/ui/linkButton";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const pricingPlans = [
  {
    title: "Starter Shield",
    subtitle: "Perfect for testing new markets",
    badge: "HK Company + Airwallex Only",
    features: ["Full company registration", "Airwallex banking account"],
    investment: { own: "€1,800", nominee: "€2,200" },
    buttonText: "Get Started in 7 Days",
    buttonVariant: "secondary" as const,
    highlighted: false,
  },
  {
    title: "Fortress Package",
    subtitle: "Complete protection for serious sellers",
    badge: "Everything You Need to Scale",
    features: ["HK Company Registration", "PayPal with VIP Support\n(6% dispute tolerance)", "Airwallex Account", "Payoneer VIP Account and\n5+ more banks", "Access to 9+ PayPal Reps", "Unlimited PayPal Reactivations"],
    investment: { own: "€3,000", nominee: "€3,500" },
    buttonText: "87% of Clients Choose This",
    buttonVariant: "default" as const,
    highlighted: true,
  },
  {
    title: "Titanium Protection",
    subtitle: "Maximum security for high-volume sellers",
    badge: "The Ultimate Safety Net",
    features: ["Everything in Fortress Package PLUS", "OceanPayments Integration\n(2.5% dispute tolerance)", "FREE Legal Letter for Money Holds", "Priority Support Queue", "Dedicated Account Manager"],
    investment: { own: "€4,000", nominee: "€4,500" },
    buttonText: "For Sellers Doing €100K+/Month",
    buttonVariant: "secondary" as const,
    highlighted: false,
  },
];

export const PricingPlansSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-[70px]">
      <div className="mx-auto text-center">
        <Badge style={{ zIndex: "999" }} className="inline-flex items-center justify-center gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 h-auto rounded-[130px] bg-[linear-gradient(89deg,#FFF_-96.04%,#1544ea_82.42%)] shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] border-0 z-100">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-sm sm:text-base text-center tracking-[0] leading-[20px] sm:leading-[24.8px] whitespace-nowrap">MOST POPULAR</span>
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[63px] w-full px-4 sm:px-6 md:px-8 relative">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[133.125px] w-[1372px] h-[455px] rounded-[1372px] bg-[rgba(21,68,234,0.20)] blur-[118px]"></div>
        <header className="flex flex-col justify-center gap-4 sm:gap-5 md:gap-[19.38px] items-center w-full">
          <h2 className="font-normal text-[36px] md:mt-0 mt-4 leading-[120%] sm:text-[40px] md:text-[48px] lg:text-[70px] text-center tracking-tight [font-family:'Cambo',Helvetica] text-transparent bg-clip-text bg-[radial-gradient(50%_50%_at_44%_21%,rgba(21,68,234,1)_0%,rgba(29,28,32,1)_100%)] px-2">
            Choose Your{" "}<br />
            <span className="font-normal tracking-[0.31px]">Armor Level</span>
          </h2>
          <p className="max-w-[658px] px-2 text-[#58585f] text-sm sm:text-base md:text-lg text-center leading-relaxed">
            Choose a plan that suits your needs and budget. Each plan is designed to offer maximum value and flexibility.
          </p>
          <Alert className="flex items-center gap-2 px-3 sm:px-4 py-2 w-auto bg-[#d0323230] rounded-[48px] border border-solid border-[#d03232]">
            <Image className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" alt="Frame" src="/frame-13.svg" width={24} height={24} />
            <AlertDescription className="[font-family:'Inter',Helvetica] text-[#d03232] text-xs sm:text-sm md:text-[16px] text-center leading-tight sm:leading-normal">
              Prices Increase December 1st • Lock in current pricing before December 1st
            </AlertDescription>
          </Alert>
        </header>

        <div className="relative w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[38.75px]">
          {pricingPlans.map((plan, index) => (
            <div className="w-full flex" key={index}>
              <Card className={`flex flex-col w-full border-none ${plan.highlighted ? "xl:h-[862px]" : "xl:h-[780px]"} h-auto gap-4 sm:gap-5 md:gap-[23.25px] px-4 sm:px-5 md:px-[23.25px] py-6 sm:py-7 md:py-8 bg-[#F4F4FE] rounded-2xl sm:rounded-3xl md:rounded-[29.06px] overflow-visible relative`}>
                {plan.highlighted && (
                  <Image src="/grad.svg" width={380} height={500} alt="card-gradient" className="w-full rounded-2xl sm:rounded-3xl md:rounded-[29.06px] z-[0] max-w-full h-auto absolute right-0 top-0" />
                )}
                <CardContent className="flex flex-col justify-between w-full h-full p-0">
                  <div className="flex flex-col gap-12 sm:gap-16 md:gap-[82px] w-full flex-grow">
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-[23px] w-full">
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="[font-family:'Cambo',Helvetica] font-normal text-[#1D1C20] text-[24px] sm:text-[28px] md:text-[32.9px] text-start tracking-[0] leading-[30px] sm:leading-[35px] md:leading-[39.5px]">{plan.title}</h3>
                          <p className="[font-family:'Inter',Helvetica] font-[300] tracking-[-1px] text-[#2A2A3A] text-sm sm:text-base md:text-[18px] text-start leading-[20px] sm:leading-[24px] md:leading-[27.9px]">{plan.subtitle}</p>
                        </div>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#1544ea] text-base sm:text-lg md:text-[19.4px] text-start tracking-[0] leading-[24px] sm:leading-[28px] md:leading-[30.0px]">{plan.badge}</p>
                      </div>
                      <div className="flex flex-col gap-4 sm:gap-5 md:gap-[23px] w-full">
                        <div className="flex gap-2 sm:gap-[10.25px] w-full items-center">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-[#2A2A3A] text-sm sm:text-base md:text-[17.4px] tracking-[0] leading-[20px] sm:leading-[24.4px] whitespace-nowrap">What&apos;s Included</span>
                          <Image className="flex-1 h-px max-w-[191.78px]" alt="Line" src="/line-17.svg" width={192} height={1} />
                        </div>
                        <ul className="flex flex-col gap-3 sm:gap-4 md:gap-[15.5px] w-full">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="inline-flex items-start gap-2 sm:gap-3 md:gap-[11.62px]">
                              <Image src="/blue.svg" alt="check" width={23} height={23} className="w-5 h-5 sm:w-[17.25px] sm:h-[17.25px] shrink-0 mt-0.5" />
                              <span className="[font-family:'Inter',Helvetica] font-normal text-[#595960] text-sm sm:text-base md:text-[17.4px] tracking-[0] leading-[20px] sm:leading-[22px] md:leading-[24.4px]">
                                {feature.split("\n").map((line, lineIndex) => (
                                  <React.Fragment key={lineIndex}>{line}{lineIndex < feature.split("\n").length - 1 && <br />}</React.Fragment>
                                ))}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-3 sm:gap-4 mt-4 sm:mt-5">
                    <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 w-full bg-[#ffffff12] rounded-xl sm:rounded-2xl overflow-hidden relative">
                      <div className="flex gap-3 sm:gap-[23.25px] w-full">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2A2A3A] text-sm sm:text-base md:text-[17.4px]">Your Investment:</span>
                      </div>
                      <div className="flex flex-col justify-start gap-1 sm:gap-[6px]">
                        <span className="text-[#2A2A3A] text-lg sm:text-xl md:text-[24px] font-medium">Own Name: <span className="text-[#1544ea]">{plan.investment?.own}</span></span>
                        <span className="text-[#2A2A3A] text-lg sm:text-xl md:text-[24px] font-medium">With Nominee: <span className="text-[#1544ea]">{plan.investment?.nominee}</span></span>
                      </div>
                      {plan.highlighted && <div className="absolute left-[-201.25px] bottom-[-174px] w-[264px] h-[264px] rounded-full bg-[#1544ea] blur-[62px]" />}
                    </div>
                    <LinkButton
                      variant={plan.buttonVariant}
                      onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")}
                      className={`h-9 px-4 cursor-pointer py-2 w-full sm:px-5 md:px-[23.25px] sm:py-2.5 md:py-[13px] rounded-full sm:rounded-[96.88px] ${plan.highlighted ? "overflow-hidden shadow-[0px_0.97px_1.94px_#0d0d120f] bg-[linear-gradient(0deg,rgba(21,68,234,1)_0%,rgba(21,68,234,1)_100%)] relative" : "bg-[rgba(22,68,235,0.10)] border border-[rgba(22,68,235,0.30)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"}`}
                    >
                      {plan.highlighted && <div className="hidden sm:block absolute top-[37px] left-1 w-[326px] h-20 rounded-[163px/40px] bg-[#d9d9d9] blur-[27px] pointer-events-none" />}
                      <span className={`[font-family:'Inter',Helvetica] font-normal text-xs sm:text-sm md:text-[15.5px] text-center tracking-[0] leading-[18px] sm:leading-[20px] md:leading-[24.0px] ${plan.highlighted ? "text-[#ffffff] relative z-10" : "text-[#1544ea]"}`}>
                        {plan.buttonText}
                      </span>
                    </LinkButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
