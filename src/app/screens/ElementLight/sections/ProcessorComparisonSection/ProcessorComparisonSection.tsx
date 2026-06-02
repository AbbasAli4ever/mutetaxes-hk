"use client";
import React from "react";

export const ProcessorComparisonSection = () => {
  return (
    <section className="w-full bg-white text-[#1d1c20] py-12 sm:py-[70px] px-4">
      <div className="max-w-[1237px] mx-auto text-center">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm text-white text-center mx-auto bg-[linear-gradient(89deg,#1644EB_0%,#809CFF_80.28%)] [font-family:'Inter',Helvetica] backdrop-blur-[16px] mb-[16px]">
          Here&apos;s Why You&apos;re Exposed
        </div>
        <div className="flex flex-col gap-[42px]">
          <div className="w-full">
            <div className="text-center [font-family:'Cambo',Helvetica] md:text-[52px] lg:text-[70px] text-[32px] leading-[120%] font-normal">
              <span className="text-[#1d1c20]">
                Stripe, Standard PayPal &<br className="sm:block hidden" />Western Processors Were<br />
              </span>
              <span className="bg-[radial-gradient(closest-side,#1544ea_0%,rgba(29,28,32,1)_100%)] bg-clip-text text-transparent">
                Never Built for Scaling<br className="sm:block hidden" />eCommerce
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#58585f] [font-family:'Inter',Helvetica] text-center max-w-[999px] mx-auto mb-[48px] font-[300] text-base md:text-[18px]">
              They were built for SaaS companies charging $49/month with near-zero chargebacks. The moment you start scaling — running aggressive offers, doing high volume, processing internationally — you become a liability to them. Their risk model literally classifies you the same way they classify fraud.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="relative rounded-3xl overflow-hidden border border-[#1544ea33] bg-gradient-to-br from-[#f4f4fe] to-[rgba(21,68,234,0.02)]">
            <div className="absolute right-[-319px] bottom-[-42.764px] w-[300px] h-[399px] bg-[#1544ea] blur-[97px] opacity-20"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-[0.6fr_1fr_1fr] border-b border-[#1544ea22]">
                <div className="p-5 text-[#1d1c20] text-[12px] md:text-[24px] text-left">Feature</div>
                <div className="p-5 text-[#00A63E] md:text-[24px] text-[12px] font-medium border-x border-[#1544ea22] text-left">MuteTaxes HK Setup</div>
                <div className="p-5 text-[#FF6067] font-medium md:text-[24px] text-[12px] text-left">Standard Processors</div>
              </div>
              {[
                { title: "Account Stability", good: "Rock-solid. 8+ years. Zero bans.", bad: "Random bans with zero warning" },
                { title: "Fund Freezes", good: "Funds hit your account like clockwork", bad: "90–180 day holds, no recourse" },
                { title: "Scaling Limits", good: "Built to process $1M+/month", bad: "Flagged the moment you grow" },
                { title: "PayPal Access", good: "Verified HK Business PayPal the most stable tier on the planet", bad: "Weak. Personal. Easily limited." },
                { title: "Tax Efficiency", good: "8.25% HK corporate rate — legally optimized", bad: "Full domestic tax exposure" },
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-[0.6fr_1fr_1fr] border-b last:border-none border-[#1544ea22]">
                  <div className="md:p-5 p-2 md:text-[20px] text-[10px] font-normal text-left text-[#1d1c20]">{row.title}</div>
                  <div className="md:p-5 p-2 flex items-center gap-3 text-[#1d1c20] border-x border-[#1544ea22]">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-green-500 text-black text-xs">✔</span>
                    <p className="lg:text-[14px] text-[12px] font-[300] text-left">{row.good}</p>
                  </div>
                  <div className="md:p-5 p-2 flex items-center gap-3 text-[14px]">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">✕</span>
                    <p className="lg:text-[14px] text-[12px] font-[300] text-left text-[#58585f]">{row.bad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
