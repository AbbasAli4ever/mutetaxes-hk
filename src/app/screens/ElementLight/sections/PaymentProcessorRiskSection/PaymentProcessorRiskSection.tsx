import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const rowOne = [
  { id: 1, image: "/card1.svg", head: "Your account has been suspended", subHeading: 'You wake up to the "Your account has been suspended" email. No warning. No explanation. Just… done.' },
  { id: 2, image: "/card2.svg", head: "Pending payouts", subHeading: "Your $47,000 (or $147,000 or $347,000) in pending payouts? Held for 90-180 days. Good luck making payroll." },
];

export const PaymentProcessorRiskSection = () => {
  return (
    <section className="relative w-full px-0 md:px-4 xl:px-0 pb-12 sm:pb-[70px] md:pt-[165px] pt-[40px] z-0 bg-white">
      <div className="relative flex flex-col w-full max-w-[1234px] mx-auto items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[56px] px-4 sm:px-6 md:px-8 lg:px-0">
        <header className="inline-flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
          <Badge variant="outline" className="inline-flex items-center gap-1.5 px-3 sm:px-4 md:px-[18px] py-1.5 sm:py-2 bg-[#d0323230] rounded-[48px] border border-solid border-[#d03232] hover:bg-[#d0323230]">
            <AlertCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d03232]" />
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#d03232] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[17.6px]">
              The Ugly Truth Nobody Talks About
            </span>
          </Badge>

          <h2 className="w-full max-w-[877px] [font-family:'Cambo',Helvetica] px-2 sm:px-4 leading-[110%] text-transparent font-normal text-[26px] sm:text-[28px] md:text-[36px] lg:text-[70px] text-center tracking-[0]">
            <span className="bg-gradient-to-r from-[rgba(208,50,50,1)] to-[rgba(29,28,32,1)] bg-clip-text">
              The Payment Processor<br />
            </span>
            <span className="font-normal leading-[110%] tracking-wide text-[#1d1c20]">
              Ticking Time Bomb
            </span>
          </h2>
          <p className="max-w-[694px] mx-auto text-[#58585f] leading-[150%] font-[300] md:text-[18px] text-[18px] text-center">
            Right now — this very second — your payment processor is running your account through their risk algorithm. And here&apos;s what they&apos;re deciding:
          </p>
        </header>

        <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {rowOne.map((items, index) => (
              <Card key={index} className="relative bg-[#F1F5F9] lg:px-[32px] md:px-[18px] px-0 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-[58px] border-0">
                <div className="max-[540px]:block hidden absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80.818px] h-[416.821px] rotate-[-94.595deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_10.91%,rgba(208,50,50,0.60)_81.25%,rgba(208,50,50,0.12)_100%)] blur-[34.588px] z-0"></div>
                <CardContent className="relative p-4 sm:p-5 md:p-6 flex flex-col gap-4 max-[540px]:flex-col-reverse lg:flex-row justify-between items-start lg:items-center lg:h-[273px] lg:p-0">
                  <Image className="hidden lg:block absolute top-[149px] left-[-257px] w-[850px] h-[362px] pointer-events-none" alt="" src="/rectangle-5.svg" width={800} height={600} />
                  <Image className="hidden lg:block absolute top-[149px] left-[193px] w-[850px] h-[362px] pointer-events-none" alt="" src="/rectangle.svg" width={800} height={600} />
                  <div>
                    <Image src={items.image} alt="card Image" width={257} height={257} className="z-50" />
                  </div>
                  <div className="sm:max-w-[229px] max-w-full lg:ps-0 pt-4 lg:pt-3">
                    <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#1D1C20] leading-[28px] text-lg sm:text-xl pb-[12px] md:text-2xl tracking-[0] sm:leading-7 md:leading-8">{items.head}</h3>
                    <p className="[font-family:'Inter',Helvetica] font-extralight text-[#58585f] text-sm md:text-sm tracking-[0] leading-[18px] md:pt-0 pt-[9px] md:leading-[21px]">{items.subHeading}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-[24px]">
            {[
              { head: "You're Flagged.", text: 'You scramble to find a new processor — but now you\'re "flagged." Every application gets denied. You\'re radioactive.', img: "/card4.svg" },
              { head: "Your ad spend keeps burning", text: "Your ad spend keeps burning. Your customers keep ordering. But you can't collect a single dollar. Revenue goes to zero overnight.", img: "/card5.svg" },
              { head: "Your Business at mercy of a support ticket", text: "Your 7-figure business — the one you spent years building — is now completely at the mercy of a support ticket that nobody answers.", img: "/card6.svg" },
            ].map((card, index) => (
              <Card key={index} className="relative bg-[#F1F5F9] rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-[58px] border-0">
                <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#D03232]/40 via-[#D0323233]/20 to-transparent pointer-events-none" />
                <div className="max-[540px]:block hidden absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80.818px] h-[416.821px] rotate-[-94.595deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_10.91%,rgba(208,50,50,0.60)_81.25%,rgba(208,50,50,0.12)_100%)] blur-[34.588px] z-0"></div>
                <CardContent className="relative p-4 sm:p-5 md:p-6 lg:h-[338px] lg:px-[32px] px-[18px] flex flex-col justify-between">
                  <div className="relative z-10 sm:max-w-[311px] max-w-full pt-4 lg:pt-3">
                    <h3 className="text-[#1D1C20] text-lg sm:text-xl md:text-2xl">{card.head}</h3>
                    <p className="text-[#58585f] text-sm pt-[9px]">{card.text}</p>
                  </div>
                  <div className="w-full text-center pt-4">
                    <Image src={card.img} alt="card Image" width={326} height={136} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
