"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447445609826"];

const processSteps = [
  { number: 1, duration: "3-5 days", title: "Hong Kong Company Formation", description: "We handle your complete Hong Kong Limited company setup with proper business registration, ensuring compliance with local regulations and positioning you for financial services approval.", position: "bottom" },
  { number: 2, duration: "2-3 days", title: "Business Address & Compliance Setup", description: "We secure a legitimate Hong Kong business address that satisfies banking and PSP requirements, plus handle all compliance documentation for smooth approvals.", position: "top" },
  { number: 3, duration: "2-5 days", title: "PayPal HK Verified Account", description: "We complete PayPal Hong Kong setup with proper verification and insider approval tactics, giving you access to PayPal's global payment network from Hong Kong.", position: "bottom" },
  { number: 4, duration: "3-7 days", title: "Airwallex Multi-Currency Account", description: "We open your Airwallex business account with proper documentation, enabling seamless multi-currency operations and global payment processing capabilities.", position: "top" },
  { number: 5, duration: "5-10 days", title: "Ocean Payment Merchant Setup", description: "We activate your Ocean Payment merchant account with insider knowledge of their approval process, ensuring smooth underwriting and rapid account activation.", position: "bottom" },
];

const benefits = ["Unlimited transaction volume", "Multi-currency operations", "Instant fund access", "100% Compliant & Secure"];

export const SupportedPaymentMethodsSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[32px] py-8 sm:py-12 md:py-[70px]">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[1343px] px-4 sm:px-6 md:px-8">
        <header className="flex flex-col items-start gap-4 sm:gap-5 md:gap-[19.31px] w-full">
          <div className="flex flex-col items-center w-full">
            <h2 className="relative w-full text-center bg-[radial-gradient(closest-side,rgba(21,68,234,1)_0%,rgba(29,28,32,1)_100%)] bg-clip-text text-transparent [font-family:'Cambo',Helvetica] lg:text-[70px] text-[36px] leading-[120%] font-normal">
              We Take You From Zero to a Fully<br />
              <span className="text-[#1d1c20]">Activated Hong Kong PSP</span>
            </h2>
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="flex items-center justify-center w-full max-w-[840px] [font-family:'Inter',Helvetica] font-[300] text-[#58585f] text-sm sm:text-base md:text-lg lg:text-[18px] tracking-[-1px] text-center leading-5 sm:leading-6 px-2">
              A Hong Kong PSP setup is a compliance maze... strict rules, banking barriers, and hidden requirements that most entrepreneurs aren&apos;t prepared for.
            </p>
          </div>
        </header>

        {/* Mobile/Tablet/LG Timeline — 1 col on mobile, 2 col on sm+ */}
        <div className="xl:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {processSteps.map((step) => (
            <Card key={step.number} className="w-full bg-[#F4F4FE] rounded-2xl border-0">
              <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6">
                <div className="flex flex-row items-center justify-center gap-3 w-full">
                  <div className="w-12 h-12 rounded-full shadow-[0_0_0_6px_rgba(22,68,235,0.18)] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(180deg, #1644EB 0%, #8EA7FF 100%)" }}>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm">{step.number}</span>
                  </div>
                  <div className="relative">
                    <Image className="w-16 h-8" alt="Duration badge" src="/chatdown.svg" width={800} height={600} />
                    <span className="absolute top-1 left-2 [font-family:'Inter',Helvetica] font-semibold text-white text-xs whitespace-nowrap">{step.duration}</span>
                  </div>
                </div>
                <h3 className="[font-family:'Cambo',Helvetica] font-bold text-[#1D1C20] text-base sm:text-lg text-center leading-6 w-full">{step.title}</h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-400 text-sm text-center leading-5">{step.description}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="w-full bg-[#F4F4FE] rounded-2xl border-0">
            <CardContent className="flex flex-col items-center gap-4 p-4 sm:p-6">
              <div className="w-12 h-12 rounded-full shadow-[0_0_0_6px_rgba(22,68,235,0.18)] flex items-center justify-center shrink-0" style={{ background: "linear-gradient(180deg, #1644EB 0%, #8EA7FF 100%)" }}>
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm">6</span>
              </div>
              <Image className="w-16 h-16 sm:w-20 sm:h-20" alt="Mission accomplished shield" src="/freepik--two-overlapping-luxury-security-shields-front-shie--566.png" width={800} height={600} />
              <h3 className="[font-family:'Cambo',Helvetica] font-bold text-[#1D1C20] text-base sm:text-lg text-center">Mission Accomplished!</h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-zinc-400 text-sm sm:text-[15.5px] text-center leading-5">Your Hong Kong PSP Empire is Active. Now You Have Access To:</p>
              <div className="flex flex-col items-start gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-green-400 text-base">✓</span>
                    <span className="opacity-90 [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-sm sm:text-[15px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden xl:block relative w-full max-w-[1347px] h-[636.57px]">
          <Image className="absolute top-[364px] left-1/2 -translate-x-1/2 w-[1142px] h-px object-cover" alt="Timeline connector" src="/line.svg" width={800} height={600} />
          <div className="absolute top-0 right-[-50px] rounded-[10px] shadow-[0px_5px_15px_rgba(0,0,0,0.3),0px_0px_25px_rgba(21,68,234,0.48)] w-[250px] h-[298px] overflow-hidden">
            <Card className="w-full h-full bg-[#F4F4FE] rounded-[10px] border-0 relative overflow-hidden">
              <div className="absolute left-[-239px] bottom-[-550.461px] w-[297px] h-[828.977px] rotate-[-94.595deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.60)_37.91%,rgba(21,68,234,0.48)_81.25%,rgba(21,68,234,0.12)_100%)] blur-[40px]"></div>
              <CardContent className="flex flex-col items-center gap-4 p-2">
                <Image className="w-[70px] h-[70px]" alt="Mission accomplished shield" src="/freepik--two-overlapping-luxury-security-shields-front-shie--566.png" width={800} height={600} />
                <h3 className="flex items-center justify-center w-[214px] [font-family:'Inter',Helvetica] font-bold text-[#1D1C20] text-lg text-center tracking-[-0.72px] leading-6">Mission Accomplished!</h3>
                <div className="flex flex-col items-center gap-[5px] w-full">
                  <p className="flex items-center justify-center w-full [font-family:'Inter',Helvetica] font-normal text-[#595960] text-[15.5px] text-center tracking-[-0.62px] leading-5">Your Hong Kong PSP Empire is Active. Now You Have Access To:</p>
                  <div className="flex flex-col items-start gap-[5px]">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex justify-center gap-[5px] items-start">
                        <span className="flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-green-400 text-base text-center tracking-[0] leading-6">✓</span>
                        <span className="flex items-center justify-center opacity-90 [font-family:'Inter',Helvetica] font-normal text-[#595960] text-[15px] text-center tracking-[0] leading-6 whitespace-nowrap">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="absolute top-[335px] right-[40px] w-[60px] h-[60px] rounded-full shadow-[0_0_0_6px_rgba(22,68,235,0.18)] flex items-center justify-center" style={{ background: "linear-gradient(180deg, #1644EB 0%, #8EA7FF 100%)" }}>
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[-0.64px] leading-6">6</span>
          </div>
          {processSteps.map((step, index) => {
            const desktopPositions = [
              { left: "0px", top: "295px" },
              { left: "229px", top: "131px" },
              { left: "443px", top: "295px" },
              { left: "674px", top: "131px" },
              { left: "924px", top: "295px" },
            ];
            return (
              <div key={step.number} className="absolute flex flex-col items-center gap-6" style={{ left: desktopPositions[index].left, top: desktopPositions[index].top, width: step.number === 5 ? "234px" : "214px" }}>
                {step.position === "bottom" && (
                  <>
                    <div className="flex flex-col items-start gap-2.5">
                      <div className="relative w-20 h-[35.26px]">
                        <Image className="absolute top-0 left-0 w-[78px] h-[35px]" alt="Duration badge" src="/chatdown.svg" width={800} height={600} />
                        <span className="absolute top-[5px] left-[8px] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-white text-[15px] text-center tracking-[-0.60px] leading-5 whitespace-nowrap">{step.duration}</span>
                      </div>
                      <div className="w-[60px] h-[60px] rounded-full shadow-[0_0_0_6px_rgba(22,68,235,0.18)] flex items-center justify-center" style={{ background: "linear-gradient(180deg, #1644EB 0%, #8EA7FF 100%)" }}>
                        <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[-0.64px] leading-6">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-4">
                      <h3 className="flex items-center justify-center w-[178px] [font-family:'Cambo',Helvetica] font-normal text-[#1D1C20] text-lg text-center tracking-[-0.72px] leading-6">{step.title}</h3>
                      <p className="flex items-center justify-center w-full [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[15.5px] text-center tracking-[-0.62px] leading-5">{step.description}</p>
                    </div>
                  </>
                )}
                {step.position === "top" && (
                  <>
                    <div className="flex flex-col items-center w-full gap-4">
                      <h3 className="flex items-center justify-center w-[178px] [font-family:'Cambo',Helvetica] font-normal text-[#1D1C20] text-lg text-center tracking-[-0.72px] leading-6">{step.title}</h3>
                      <p className="flex items-center justify-center w-full [font-family:'Inter',Helvetica] font-normal text-zinc-400 text-[15.5px] text-center tracking-[-0.62px] leading-5">{step.description}</p>
                    </div>
                    <div className="flex flex-col items-center gap-[13px]">
                      <div className="w-[60px] h-[60px] rounded-full shadow-[0_0_0_6px_rgba(22,68,235,0.18)] flex items-center justify-center" style={{ background: "linear-gradient(180deg, #1644EB 0%, #8EA7FF 100%)" }}>
                        <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[-0.64px] leading-6">{step.number}</span>
                      </div>
                      <div className="relative w-20 h-[35.26px]">
                        <Image className="absolute top-0 left-0 w-[78px] h-[35px]" alt="Duration badge" src="/union-1.svg" width={800} height={600} />
                        <span className="absolute top-2.5 left-[8px] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-white text-[15px] text-center tracking-[-0.60px] leading-5 whitespace-nowrap">{step.duration}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 sm:gap-[24px] w-full max-w-[1343px] px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center w-full gap-3">
          <a onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")} className="h-9 px-4 py-2 cursor-pointer relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:py-6 rounded-xl bg-[#1544ea] text-white font-normal overflow-hidden lg:px-[58px] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(21,68,234,0.45)] hover:bg-gradient-to-r hover:from-[#1d54f5] hover:to-[#0e3bcf] active:scale-[0.98]">
            <div className="hidden sm:block absolute top-10 left-1 w-[326px] h-20 rounded-[163px/40px] bg-[#d9d9d9] blur-[27px]" />
            <span className="relative [font-family:'Inter',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[-0.36px] leading-6 sm:leading-7 text-center">Start Your Hong Kong PSP Setup</span>
          </a>
        </div>
        <div className="inline-flex h-auto items-center gap-2 px-3 sm:px-4 rounded-lg sm:rounded-xl">
          <span className="opacity-90 [font-family:'Inter',Helvetica] font-[300] text-[#58585f]">Complete Hong Kong PSP setup - €4000 investment</span>
        </div>
      </div>
    </section>
  );
};
