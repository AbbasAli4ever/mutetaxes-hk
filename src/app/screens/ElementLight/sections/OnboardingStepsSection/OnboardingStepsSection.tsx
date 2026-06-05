"use client";
import React from "react";
import Image from "next/image";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Badge } from "../../../../components/ui/badge";
import { LinkButton } from "../../../../components/ui/linkButton";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";

const WA_NUMBERS = ["447445609826"];

const features = [
  { icon: "/container-2.svg", title: "Hong Kong Company Formation", description: "Full Hong Kong Limited Company formation — registered address, company secretary, government registration, certificate of incorporation" },
  { icon: "/container-5.svg", title: "Insider-Backed PSP Setup", description: "Insider-backed PSP account setup — connected to processors who specialize in high-volume eCommerce (no algorithmic ban risk)" },
  { icon: "/Container-ls-3.svg", title: "Stable Hong Kong PayPal", description: "Verified Hong Kong Business PayPal — the most stable PayPal tier on the planet, period" },
  { icon: "/container-4.svg", title: "HK Multi-Currency Banking", description: "Multi-currency HK business bank account — receive funds globally with institutional-grade banking" },
  { icon: "/Container-ls-5.svg", title: "Hassle-Free Compliance", description: "Full compliance documentation and annual filing management — everything stays clean, always" },
  { icon: "/Container-ls-6.svg", title: "Real Human Support", description: "Dedicated account manager — not a chatbot, not a ticket system, a real human who picks up the phone" },
  { icon: "/container-7.svg", title: "Fully Operational in 7 Days", description: "7-day delivery — from zero to fully operational in one week flat" },
];

const stats = [{ value: "5000+", label: "PSPs Approved" }, { value: "2500+", label: "HK Companies created" }];

const benefits = ["Full support until PSP is active", "HK Company + Bank formation", "Fully active payment processing", "Personal guidance & insider strategies"];

export const OnboardingStepsSection = () => {
  return (
    <section className="flex flex-col xl:flex-row w-full max-w-[1440px] mx-auto items-start justify-center gap-8 md:gap-12 xl:gap-[100px] px-4 sm:px-6 md:px-8 xl:px-[101px] py-8 sm:py-12 xl:py-[70px] relative">
      <div className="inline-flex flex-col items-start gap-8 sm:gap-10 md:gap-12 lg:gap-[57px] relative flex-[0_0_auto] w-full lg:w-auto">
        <div className="inline-flex flex-col items-start gap-4 sm:gap-[18px] relative flex-[0_0_auto] w-full">
          <h2 className="font-normal leading-[120%] relative w-full text-[36px] md:text-[70px]">
            <span className="bg-[radial-gradient(38.63%_62.02%_at_43.72%_20.95%,#1544ea_0%,#1d1c20_100%)] bg-clip-text text-transparent [font-family:'Cambo',Helvetica]">Hong Kong{" "}</span>
            <br />
            <span className="[font-family:'Cambo',Helvetica] font-normal text-[#1d1c20] tracking-[0.31px]">PSP Specialist</span>
          </h2>
          <p className="relative w-full lg:w-[622px] [font-family:'Inter',Helvetica] font-[300] text-[#58585f] text-base sm:text-[18px] md:text-xl tracking-[0] leading-[24px] sm:leading-[27px] md:leading-[29.2px]">
            Swiftnine has assisted in forming more than 3000 Hong Kong companies and has extensive experience guiding clients through complex payment compliance requirements.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-[664px] items-start gap-8 sm:gap-10 md:gap-12 lg:gap-[33px] relative">
          {features.map((feature, index) => (
            <div key={index} className="relative flex items-start w-full gap-3 sm:gap-4">
              <Image className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12" alt={feature.title} src={feature.icon} width={800} height={600} />
              <div className="relative flex flex-col items-start flex-1 gap-1.5 sm:gap-2">
                <h3 className="relative w-full [font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-base sm:text-lg tracking-[0] leading-5 sm:leading-6">{feature.title}</h3>
                <p className="relative w-full [font-family:'Inter',Helvetica] font-normal text-[#58585f] text-sm sm:text-base tracking-[0] leading-[20px] sm:leading-[22.8px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="flex flex-col w-full xl:w-[448px] items-start gap-4 sm:gap-5 md:gap-6 py-6 sm:py-7 md:py-[33px] px-6 sm:px-7 md:px-[33px] relative bg-[#f4f4fe] rounded-2xl sm:rounded-3xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border-0">
        <CardContent className="w-full p-0">
          <div className="flex flex-col items-center justify-center w-full gap-3 py-4">
            <Image className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[98px] md:h-[98px]" alt="Logo" src="/container-11.svg" width={800} height={600} />
            <div className="[font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-lg sm:text-xl text-center tracking-[0] leading-6 sm:leading-7">MuteTaxes</div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-5 sm:mt-10 md:mt-[45px]">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start gap-1 px-0 py-[3px] bg-[#E6E6FF] rounded-[10px]">
                <div className="flex items-start w-full h-7 sm:h-8">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-xl sm:text-2xl text-center tracking-[0] leading-7 sm:leading-8">{stat.value}</div>
                </div>
                <div className="flex items-start w-full h-4">
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs text-center tracking-[0] leading-4">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <Card className="relative w-full mt-4 sm:mt-5 md:mt-6 bg-[#E6E6FF] rounded-xl sm:rounded-2xl border-none">
            <CardContent className="p-0">
              <div className="flex justify-center pt-4 sm:pt-5 md:pt-[25px]">
                <Badge className="h-6 sm:h-7 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#3A383E] rounded-[33554400px] border-0">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] sm:text-xs tracking-[0.30px] leading-3 sm:leading-4">MONEY BACK GUARANTEE</span>
                </Badge>
              </div>
              <div className="flex justify-center mt-3 sm:mt-4 md:mt-[19px]">
                <div className="w-full h-10 sm:h-12 bg-[linear-gradient(138deg,rgba(21,68,234,1)_0%,rgba(11,40,163,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-transparent text-3xl sm:text-4xl md:text-5xl text-center tracking-[0] leading-[40px] sm:leading-[48px]">
                  <span className="font-medium text-[#1d1c20]">€</span>
                  <span className="[font-family:'Inter',Helvetica] text-[#1d1c20]">3000</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-[25px] mt-2 sm:mt-3 md:mt-[12px]">
                <h3 className="relative w-full [font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7">Complete Hong Kong PSP Setup</h3>
                <p className="relative w-full [font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs sm:text-sm text-center tracking-[0] leading-4 sm:leading-5">We ensure your complete payment processor<br />setup is ready to go</p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:gap-3 px-4 sm:px-5 md:px-[25px] mt-4 sm:mt-5 md:mt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center w-full h-5 gap-2">
                    <Image className="relative flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" alt="Check" src="/icon.svg" width={800} height={600} />
                    <div className="flex items-start">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-2 sm:gap-3 px-4 sm:px-5 md:px-[25px] mt-4 sm:mt-5 md:mt-6">
                <Alert className="mt-4 sm:mt-5 md:mt-6 bg-[rgba(130,24,26,0.10)] rounded-[14px] border border-solid border-[rgba(158,7,17,0.50)] p-2 sm:p-[13px]">
                  <AlertDescription className="flex items-start gap-1.5 sm:gap-2">
                    <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" alt="Warning" src="/icon-1.svg" width={800} height={600} />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#FF090B] text-[10px] sm:text-xs tracking-[0] leading-3 sm:leading-4">Please ensure you have <span className="[font-family:'Inter',Helvetica] font-bold">€3000</span> ready before reaching out</span>
                  </AlertDescription>
                </Alert>
              </div>
              <div className="relative px-4 sm:px-5 md:px-[25px] mt-4 sm:mt-5 md:mt-[21px]">
                <LinkButton onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")} className="h-9 px-4 py-2 cursor-pointer relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:px-7 sm:py-6 rounded-[24px] bg-[#1544ea] text-white font-bold overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(21,68,234,0.45)] hover:bg-gradient-to-r hover:from-[#1d54f5] hover:to-[#0e3bcf] active:scale-[0.98]">
                  <div className="hidden sm:block absolute top-[37px] left-1 w-[326px] h-20 bg-[#d9d9d9] rounded-[163px/40px] blur-[27px]" />
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-sm sm:text-base md:text-lg tracking-[-0.36px] leading-6 sm:leading-7 relative px-2">Start Your Hong Kong PSP Setup</span>
                </LinkButton>
              </div>
              <div className="flex justify-center px-4 sm:px-5 md:px-[25px] mt-3 sm:mt-4 pb-4 sm:pb-5 md:pb-[25px]">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#58585f] text-[10px] sm:text-xs text-center tracking-[0] leading-3 sm:leading-4">For global entrepreneurs</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start w-full gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6">
            <div className="flex items-start w-full">
              <span className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1d1c20] text-xs sm:text-sm text-center tracking-[0] leading-4 sm:leading-5">Discover our mutual connections:</span>
            </div>
            <Button asChild variant="outline" className="w-full h-10 sm:h-11 md:h-[46px] bg-[#1644EB12] rounded-[12px] sm:rounded-[14px] border border-[#1644EB] transition-all duration-300 hover:bg-[#f4f4fe]">
              <a href="https://www.instagram.com/swiftninellc/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="Instagram" src="/icon-3.svg" width={800} height={600} />
                <span className="font-normal text-[#1544ea] text-xs sm:text-sm leading-4 sm:leading-5">Instagram</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
