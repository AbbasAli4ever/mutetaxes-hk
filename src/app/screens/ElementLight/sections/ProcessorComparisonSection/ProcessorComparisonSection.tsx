import * as React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureItems = [
  "Backed by insiders",
  "Backed by insiders",
  "Trusted by 7‑figure businesses",
];

export const ProcessorComparisonSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-4 py-10 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1238px]">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-[#f4f4fe] shadow-none backdrop-blur-[29px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(29px)_brightness(100%)]">
          <CardContent className="relative flex flex-col items-center gap-[17.89px] px-6 py-[39px] sm:px-8">
            <header className="flex w-full flex-col items-center">
              <Badge className="relative inline-flex h-auto items-center gap-1.5 rounded-[48px] border border-green-400 bg-[#4ade801a] px-3 py-2 text-green-400 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] hover:bg-[#4ade801a]">
                <img
                  className="relative h-4 w-4"
                  alt="Frame"
                  src="https://c.animaapp.com/mpv8f0th9epBAX/img/frame-16.svg"
                />
                <span className="flex items-center justify-center [font-family:'Inter',Helvetica] text-base font-normal leading-6 tracking-[0] text-green-400">
                  Smart Strategy
                </span>
              </Badge>
            </header>
            <div className="flex w-full max-w-[974px] flex-col items-center gap-10">
              <div className="flex w-full max-w-[974px] flex-col items-center px-2">
                <h2 className="w-fit bg-[linear-gradient(90deg,rgba(74,222,128,1)_0%,rgba(29,28,32,1)_100%)] bg-clip-text text-center [font-family:'Cambo',Helvetica] text-[28px] font-normal leading-[1.2] tracking-[0] text-transparent [-webkit-text-fill-color:transparent] sm:text-[34px] lg:text-[40px] lg:leading-[47.6px]">
                  Smart entrepreneurs don&#39;t play roulette with
                  <br />
                  Stripe. They choose a Hong Kong PSP setup
                  <br />
                  engineered by insiders for guaranteed
                  <br />
                  reliability.
                </h2>
              </div>
              <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full items-center justify-center">
                  <Button
                    type="button"
                    className="relative h-auto max-w-full overflow-hidden rounded-xl bg-[#1544ea] px-5 py-3 text-center shadow-none hover:bg-[#1544ea]"
                  >
                    <span className="absolute bottom-[-68px] left-1 h-20 w-[326px] rounded-[326px] bg-[#d9d9d9] blur-[13.5px]" />
                    <span className="relative flex items-center justify-center [font-family:'Inter',Helvetica] text-center text-[15px] font-light leading-7 tracking-[-0.36px] text-white sm:text-[17px]">
                      Escape Stripe/PayPal/Shopify Bans – Unlock a Stable PSP
                      Setup
                    </span>
                  </Button>
                </div>
                <ul className="inline-flex flex-wrap items-start justify-center gap-x-[10px] gap-y-2">
                  {featureItems.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex">
                      <div className="inline-flex h-10 items-center gap-2 rounded-xl px-4 py-2 backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)]">
                        <span className="flex items-center justify-center [font-family:'Inter',Helvetica] text-base font-normal leading-6 tracking-[0] text-green-400">
                          ✓
                        </span>
                        <span className="opacity-90 [font-family:'Inter',Helvetica] text-[15px] font-normal leading-6 tracking-[0] text-[#1d1c20]">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              className="pointer-events-none absolute bottom-[-170px] left-[-100px] w-[891px] max-w-none"
              alt="Rectangle"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-2.svg"
            />
            <img
              className="pointer-events-none absolute bottom-[-186px] left-[28%] w-[1071px] max-w-none"
              alt="Rectangle"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-1.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
