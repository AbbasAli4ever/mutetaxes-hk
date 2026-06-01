import * as React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureBadges = [
  "Processor frozen your funds? We fix it.",
  "Verified HK PayPal — world's most stable",
  "Global payments, simplified",
];

const metrics = [
  { value: "2500+", label: "Stores Protected" },
  { value: "$100M+", label: "Revenue Processed" },
  { value: "50+", label: "Countries Served" },
  { value: "8Years", label: "In The Game" },
];

export const KeyMetricsSection = (): React.JSX.Element => {
  return (
    <section className="relative flex w-full flex-col items-center px-4 pb-0 pt-[70px] sm:px-6 lg:px-0">
      <div className="flex w-full flex-col items-center overflow-hidden pt-10">
        <div className="relative flex w-full max-w-[1176px] flex-col items-center gap-8">
          <header className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center gap-4 pb-2">
              <img
                className="h-auto max-w-full"
                alt="Div inline flex"
                src="https://c.animaapp.com/mpv8f0th9epBAX/img/div-inline-flex.svg"
              />
              <Badge className="h-auto rounded-[555px] bg-[#1544ea21] px-2 py-1 hover:bg-[#1544ea21]">
                <div className="flex items-center gap-2">
                  <img
                    className="h-[26px] w-[26px]"
                    alt="Image"
                    src="https://c.animaapp.com/mpv8f0th9epBAX/img/image-1.svg"
                  />
                  <span className="flex items-center justify-center [font-family:'Inter',Helvetica] text-sm font-medium leading-6 tracking-[-0.28px] text-[#1544ea] whitespace-nowrap">
                    2,500+
                  </span>
                  <span className="h-4 w-px bg-[#2a2a3a]" />
                  <span className="flex items-center justify-center [font-family:'Inter',Helvetica] text-sm font-medium leading-6 text-[#58585f] whitespace-nowrap">
                    stores processing millions monthly through our HK setups
                  </span>
                </div>
              </Badge>
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex w-full flex-col items-center">
                <h2 className="[font-family:'Cambo',Helvetica] text-center text-4xl font-normal leading-tight tracking-[0] text-black sm:text-5xl lg:text-6xl lg:leading-[66px]">
                  Process Millions.
                </h2>
                <h2 className="[font-family:'Cambo',Helvetica] text-center text-4xl font-normal leading-tight tracking-[0] text-black sm:text-5xl lg:text-6xl lg:leading-[66px]">
                  Zero Freezes. Zero Surprises.
                </h2>
              </div>
              <div className="mx-auto max-w-[758px] px-4">
                <p className="mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-lg font-light leading-7 tracking-[0] text-[#58585f] sm:text-xl">
                  <span className="text-[#58585f]">Hong Kong&#39;s</span>
                  <span className="text-[#99a0ae]">&nbsp;</span>
                  <span className="text-[#58585f]">
                    most trusted payment infrastructure — insider-backed,
                    compliance-
                    <br />
                    ready, and built for merchants who can&#39;t afford
                    downtime.
                  </span>
                </p>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {featureBadges.slice(0, 2).map((item) => (
                <Badge
                  key={item}
                  className="h-auto rounded-[50px] border border-solid border-[#ffffff33] bg-[#1544ea26] p-2 hover:bg-[#1544ea26]"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="h-4 w-4"
                      alt="Group"
                      src="https://c.animaapp.com/mpv8f0th9epBAX/img/group-1.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0] text-[#1544ea] whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                </Badge>
              ))}
            </div>
            <Badge className="h-auto rounded-[50px] border border-solid border-[#ffffff33] bg-[#1544ea26] p-2 hover:bg-[#1544ea26]">
              <div className="flex items-center gap-2">
                <img
                  className="h-4 w-4"
                  alt="Group"
                  src="https://c.animaapp.com/mpv8f0th9epBAX/img/group-1.svg"
                />
                <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0] text-[#1544ea] whitespace-nowrap">
                  {featureBadges[2]}
                </span>
              </div>
            </Badge>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-xl bg-[linear-gradient(178deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.25)_15%,rgba(255,255,255,0.25)_90%,rgba(255,255,255,1)_100%)] p-px">
                <Button className="relative h-auto overflow-hidden rounded-xl bg-[#1544ea] px-6 py-2 [font-family:'Inter',Helvetica] text-sm font-normal leading-6 tracking-[-0.32px] text-white hover:bg-[#1544ea]">
                  <span className="absolute bottom-[-76px] left-[-182px] h-20 w-[326px] rounded-[326px] bg-[#d9d9d9] blur-[13.5px]" />
                  <span className="relative">CHAT WITH A SPECIALIST</span>
                </Button>
              </div>
              <div className="rounded-xl bg-[linear-gradient(178deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.1)_15%,rgba(255,255,255,0.1)_85%,rgba(255,255,255,0.6)_100%)] p-px">
                <Button className="relative h-auto overflow-hidden rounded-xl bg-[#212121] px-6 py-2 [font-family:'Inter',Helvetica] text-sm font-normal leading-6 tracking-[-0.32px] text-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] hover:bg-[#212121]">
                  <span className="absolute bottom-[-76px] left-[-182px] h-20 w-[326px] rounded-[326px] bg-[#d9d9d9] blur-[13.5px]" />
                  <span className="relative">BOOK A FREE CONSULTATION!</span>
                </Button>
              </div>
            </div>
            <p className="px-2 text-center [font-family:'Inter',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#58585f] whitespace-nowrap">
              🔒 Secure Setup&nbsp;&nbsp;•&nbsp;&nbsp; 💳&nbsp;&nbsp;Card or
              Bank Transfer&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp; ⚡ 7-Day
              Delivery
            </p>
          </div>
        </div>
      </div>
      <Card className="relative mt-10 w-full max-w-[1176px] overflow-hidden rounded-3xl border-0 bg-slate-100 py-8 shadow-none">
        <span className="pointer-events-none absolute left-[-168px] top-[-515px] h-[553px] w-[297px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.6)_38%,rgba(22,68,235,0.48)_81%,rgba(22,68,235,0.12)_100%)]" />
        <span className="pointer-events-none absolute right-[-116px] top-[-454px] h-[672px] w-[298px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.6)_38%,rgba(22,68,235,0.48)_81%,rgba(22,68,235,0.1)_100%)]" />
        <CardContent className="px-8 py-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[60px]">
            {metrics.map((metric, index) => (
              <article
                key={metric.label}
                className={`flex w-full flex-col items-start ${
                  index < metrics.length - 1
                    ? "border-b border-[#606062] pb-6 sm:border-b-0 sm:pb-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex flex-col items-start">
                  <div className="[background:radial-gradient(50%_50%_at_5%_28%,rgba(22,68,235,1)_0%,rgba(29,28,32,1)_100%)] bg-clip-text text-[42px] font-normal leading-[52px] tracking-[0] text-transparent [-webkit-text-fill-color:transparent] sm:text-[50px] sm:leading-[62.5px] [font-family:'Inter',Helvetica] whitespace-nowrap">
                    {metric.value}
                  </div>
                  <p className="mt-[-1.00px] [font-family:'Inter',Helvetica] text-xl font-normal leading-7 tracking-[0] text-[#58585f] whitespace-nowrap">
                    {metric.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
