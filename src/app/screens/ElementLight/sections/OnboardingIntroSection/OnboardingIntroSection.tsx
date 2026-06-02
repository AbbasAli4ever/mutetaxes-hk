"use client";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import Image from "next/image";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const features = [
  { text: "Backed by insiders" },
  { text: "Trusted by 7-figure businesses" },
  { text: "100% Money-Back Guarantee" },
];

export const OnboardingIntroSection = () => {
  return (
    <section className="relative w-full max-w-[1238px] mx-auto bg-[#F4F4FE] rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-[58px] py-8 md:py-12 lg:py-[39px] px-4 md:px-6 lg:px-8">
      <div className="text-center mb-[19px]">
        <Badge className="px-3 py-2 bg-[#4ade801a] border-[#4ade80] inline-flex items-center gap-1.5 rounded-[48px] border border-solid">
          <Image className="relative flex-[0_0_auto] w-4 h-4" alt="Frame" src="/green-tick.svg" width={16} height={16} />
          <span className="[font-family:'Inter',Helvetica] font-semibold text-[#4ade80] text-sm md:text-base text-center tracking-[0] leading-[17.6px] whitespace-nowrap">
            Smart Strategy
          </span>
        </Badge>
      </div>
      <div className="flex flex-col w-full max-w-[974px] mx-auto items-center gap-6 md:gap-8 lg:gap-10">
        <h2 className="w-full max-w-[974px] [font-family:'Cambo',Helvetica] text-transparent font-normal text-[26px] sm:text-3xl md:text-[36px] lg:text-[40px] text-center tracking-[0] leading-[34px] md:leading-[47.6px] px-2">
          <span className="bg-[linear-gradient(90deg,#4ADE80_0%,#1D1C20_100%)] bg-clip-text text-transparent">
            Smart entrepreneurs don&apos;t play roulette with{" "}
            <span className="hidden md:inline"><br /></span>
            Stripe. They choose a Hong Kong PSP setup{" "}
            <span className="hidden md:inline"><br /></span>
            engineered by insiders for guaranteed <br />reliability.
          </span>
        </h2>
        <div className="flex flex-col items-center w-full gap-4 md:gap-[24px]">
          <div className="flex items-center justify-center w-full">
            <a
              onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")}
              className="h-9 px-[20px] py-2 cursor-pointer relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:py-6 rounded-xl bg-[#1544ea] text-white font-bold overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(21,68,234,0.45)] hover:bg-gradient-to-r hover:from-[#1d54f5] hover:to-[#0e3bcf] active:scale-[0.98]"
            >
              <div className="absolute left-[3.5px] bottom-[-68px] w-[326px] h-[80px] rounded-[326px] bg-[#D9D9D9] blur-[27px]"></div>
              <span className="relative [font-family:'Inter',Helvetica] font-[300] text-[#ffffff] text-[11px] lg:text-[17px] tracking-[-0.36px] leading-tight sm:leading-7 text-center sm:whitespace-nowrap">
                Escape Stripe/PayPal/Shopify Bans – Unlock a Stable PSP Setup
              </span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-7 md:inline-flex md:items-start">
            {features.map((feature, index) => (
              <Badge key={index} variant="outline" className={`h-auto md:h-10 inline-flex items-center gap-2 px-3 md:px-4 lg:py-2 py-0 rounded-xl backdrop-blur-[2px] border-0 ${index > 0 ? "md:ml-[-18px]" : ""}`}>
                <span className="[font-family:'Inter',Helvetica] font-normal text-green-400 text-sm md:text-base text-center tracking-[0] leading-6 whitespace-nowrap">✓</span>
                <span className="opacity-90 [font-family:'Inter',Helvetica] font-normal text-[#1D1C20] text-xs md:text-[15px] text-center tracking-[0] leading-6 whitespace-nowrap">{feature.text}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Image className="absolute top-[366px] left-[-100px] w-[891px] h-[366px] hidden lg:block opacity-50" alt="Rectangle" src="/GreenRectangle2.svg" width={891} height={366} />
      <Image className="absolute top-[372px] left-[358px] w-[1071px] h-[380px] hidden lg:block opacity-50" alt="Rectangle" src="/GreenRectangle.svg" width={1071} height={380} />
    </section>
  );
};
