"use client";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Modal } from "../../../../components/ui/Modal";
import Image from "next/image";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447445609826"];

const paymentLogos = [
  { alt: "Paypal", src: "/paypal.svg", imgClass: "w-[60px] h-[48px] sm:w-[80px] sm:h-[64px] md:w-[100px] md:h-[78px] xl:w-[113px] xl:h-[88px]" },
  { alt: "Payoneer", src: "/payooner.svg", imgClass: "w-[60px] h-[48px] sm:w-[80px] sm:h-[64px] md:w-[100px] md:h-[78px] xl:w-[113px] xl:h-[88px]" },
  { alt: "Airwallex", src: "/airwallex.svg", imgClass: "w-[60px] h-[48px] sm:w-[80px] sm:h-[64px] md:w-[100px] md:h-[78px] xl:w-[113px] xl:h-[88px]" },
  { alt: "Ocean", src: "/occean.svg", imgClass: "w-[65px] h-[52px] sm:w-[85px] sm:h-[68px] md:w-[108px] md:h-[84px] xl:w-[122px] xl:h-[94px]" },
];

const featureBadgesRow1 = [
  { icon: "/blue-tick.svg", text: "Processor frozen your funds? We fix it." },
  { icon: "/blue-tick.svg", text: "Verified HK PayPal — world's most stable" },
];

const featureBadgesRow2 = [
  { icon: "/blue-tick.svg", text: "Global payments, simplified" },
];

export const HeroSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const handleWhatsAppClick = () => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk");

  return (
    <section className="position-relative pt-10 overflow-hidden">
     
      <div className="min-[540px]:hidden block absolute bottom-0 left-1/2 -translate-x-1/2 w-[157px] h-[335px] bg-[linear-gradient(0deg,rgba(21,68,234,0.7)_10%,rgba(21,68,234,0.8)_55%,rgba(255,255,255,0.2)_100%)] blur-[40px]"></div>
      <div className="min-[540px]:hidden block absolute left-0 w-[34.775px] h-[577.697px] bg-[linear-gradient(10deg,rgba(21,68,234,0.6)_20%,rgba(11,40,163,0.5)_60%,rgba(255,255,255,0.2)_100%)] blur-[40px]"></div>
      <div className="absolute min-[540px]:hidden block right-0 w-[25.976px] h-[431.518px] rotate-[-8.041deg] bg-[linear-gradient(10deg,rgba(21,68,234,0.6)_20%,rgba(11,40,163,0.5)_60%,rgba(255,255,255,0.2)_100%)] blur-[40px]"></div>

      <div className="relative flex flex-col items-center w-full gap-4 sm:gap-5 md:gap-[32px] sm:pb-0 pb-8">
        <div className="flex flex-col items-start w-full gap-3 sm:gap-4 md:gap-[16px] sm:px-0 px-4">
          <div className="flex flex-col gap-4 items-center justify-center w-full mb-2">
            <div className="inline-flex items-center flex-wrap justify-center gap-0">
              {paymentLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative w-[70px] h-[60px] sm:w-[95px] sm:h-[80px] md:w-[110px] md:h-[90px] xl:w-[124px] xl:h-[100px] flex items-center justify-center"
                  style={{ animation: `logoRock${index} 2.5s ease-in-out infinite` }}
                >
                  <img className={`${logo.imgClass} object-contain`} alt={logo.alt} src={logo.src} />
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 pr-2.5 sm:pr-4 py-0.5 sm:py-1 bg-[#1544ea1a] rounded-[555px]">
              <img className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] xl:w-[26px] xl:h-[26px]" alt="HK" src="/HKlogo.svg" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#1544ea] text-[10px] sm:text-xs xl:text-sm text-center tracking-[-0.28px] leading-[24px] sm:leading-[28px] xl:leading-[33px] whitespace-nowrap">
                2,500+
              </span>
              <img className="w-px h-3 sm:h-4" alt="Line" src="/line-239.svg" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#1d1c20] text-[10px] sm:text-xs xl:text-sm text-center tracking-[0] leading-[24px] sm:leading-[28px] xl:leading-[33px] whitespace-nowrap">
                stores processing millions monthly through our HK setups
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start w-full gap-2 sm:gap-3">
            <h1 className="w-full [font-family:'Cambo',Helvetica] font-normal text-[32px] sm:text-[38px] md:text-[46px] lg:text-[54px] xl:text-[60px] text-center leading-[110%] text-[#1d1c20]">
              Process Millions. <br/>Zero Freezes. Zero Surprises.
            </h1>
          </div>

          <div className="max-w-[800px] mx-auto text-center px-2 sm:px-4">
            <p className="text-[#58585f] text-[14px] sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-light">
              <span className="text-[#1d1c20]">Hong Kong&apos;s</span> most trusted payment infrastructure — insider-backed, compliance-ready, and built for merchants who can&apos;t afford downtime.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[650px] items-center justify-center px-2 sm:px-0 gap-1.5 sm:gap-2">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full flex-wrap">
            {featureBadgesRow1.map((badge, index) => (
              <div key={index} className="inline-flex items-center gap-1 sm:gap-2 px-1.5 py-1 sm:p-2 rounded-[50px] border border-solid border-[#ffffff33] bg-[rgba(22,68,235,0.15)]">
                <img className="w-3 h-3 sm:w-4 sm:h-4" alt="Group" src={badge.icon} />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#1d1c20] text-[10px] sm:text-xs xl:text-sm tracking-[0] leading-[13px] sm:leading-[15.4px] whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            {featureBadgesRow2.map((badge, index) => (
              <div key={index} className="inline-flex items-center gap-1 sm:gap-2 px-1.5 py-1 sm:p-2 rounded-[50px] border border-solid border-[#ffffff33] bg-[rgba(22,68,235,0.15)]">
                <img className="w-3 h-3 sm:w-4 sm:h-4" alt="Group" src={badge.icon} />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#1d1c20] text-[10px] sm:text-xs xl:text-sm tracking-[0] leading-[13px] sm:leading-[15.4px] whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start w-full gap-3 sm:gap-4">
          <div className="flex w-auto flex-row items-center justify-center mx-auto lg:w-full gap-2 sm:gap-3">
            <div className="p-[1px] rounded-xl bg-[linear-gradient(to_bottom_right,rgba(21,68,234,1)_0%,rgba(21,68,234,0.25)_15%,rgba(21,68,234,0.25)_90%,rgba(21,68,234,1)_100%)] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(21,68,234,0.45)] active:scale-[0.98]">
              <button
                onClick={handleWhatsAppClick}
                className="relative w-auto h-auto inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-6 sm:py-2 rounded-xl bg-[#1544ea] text-white font-bold overflow-hidden hover:bg-gradient-to-r hover:from-[#1d54f5] hover:to-[#0e3bcf]"
              >
                <div className="w-[326px] h-[80px] absolute left-[-182.5px] bottom-[-76px] rounded-[326px] bg-[#D9D9D9] blur-[27px]"></div>
                <span className="uppercase relative font-normal text-[10px] sm:text-sm tracking-[-0.32px] leading-5 sm:leading-6">
                  CHAT WITH A SPECIALIST
                </span>
              </button>
            </div>

            <div className="p-[1px] rounded-xl bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_15%,rgba(255,255,255,0.1)_85%,rgba(255,255,255,0.6)_100%)] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] active:scale-[0.98]">
              <Button
                onClick={() => setShowCalendly(true)}
                className="relative w-auto h-auto inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-6 sm:py-2 rounded-xl bg-[#212121] text-white font-bold overflow-hidden hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#121212]"
              >
                <div className="absolute w-[326px] h-[80px] left-[-182.5px] bottom-[-76px] rounded-[326px] bg-[#D9D9D9] blur-[27px]"></div>
                <span className="relative text-[10px] font-normal sm:text-sm tracking-[-0.32px] leading-5 sm:leading-6">
                  BOOK A FREE CONSULTATION!
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center w-full px-2">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-[10px] sm:text-xs text-center tracking-[0] leading-4">
              🔒 Secure Setup&nbsp;&nbsp;•&nbsp;&nbsp;💳&nbsp;&nbsp;Card or Bank Transfer&nbsp;&nbsp;•&nbsp;&nbsp;⚡ 7-Day Delivery
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={showCalendly} onClose={() => setShowCalendly(false)}>
        <iframe
          src="https://calendly.com/d/cxy2-dy2-tqk/mutetaxes-consultation-call"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="rounded-b-xl min-h-[700px] sm:min-h-[850px]"
        ></iframe>
      </Modal>
    </section>
  );
};
