import * as React from "react";
import { Button } from "../../components/ui/button";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HongKongPspSpecialistSection } from "./sections/HongKongPspSpecialistSection/HongKongPspSpecialistSection";
import { KeyMetricsSection } from "./sections/KeyMetricsSection";
import { OnboardingIntroSection } from "./sections/OnboardingIntroSection/OnboardingIntroSection";
import { OnboardingStepsSection } from "./sections/OnboardingStepsSection";
import { OnboardingTeamSection } from "./sections/OnboardingTeamSection";
import { PaymentProcessorRiskSection } from "./sections/PaymentProcessorRiskSection";
import { PricingPlansSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { ProcessorComparisonSection } from "./sections/ProcessorComparisonSection";
import { SupportedPaymentMethodsSection } from "./sections/SupportedPaymentMethodsSection";
import { TeamIntroSection } from "./sections/TeamIntroSection";

const headerActions = [
  {
    label: "LET CHAT",
    className: "bg-[#1544ea] text-white hover:bg-[#1544ea]/90",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/icon.svg",
    glowClassName: "-left-14 -bottom-9 w-[98px] h-[70px] bg-[#d9d9d999]",
  },
  {
    label: "BOOK A FREE CONSULTATION!",
    className: "bg-[#212121] text-white hover:bg-[#212121]/90",
    icon: null,
    glowClassName: "right-[-67px] bottom-[-76px] w-[326px] h-20 bg-[#d9d9d9]",
  },
];

export const ElementLight = (): React.JSX.Element => {
  return (
    <div
      className="relative min-h-screen w-full bg-white"
      data-model-id="1224:3941"
    >
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex w-full items-center justify-between bg-[#ffffff0d] px-4 py-3 backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] sm:px-6 lg:px-[100px]">
          <a
            href="#"
            aria-label="Homepage"
            className="block h-[36.56px] w-[180px] shrink-0 bg-[url(https://c.animaapp.com/mpv8f0th9epBAX/img/frame.png)] bg-cover bg-[50%_50%]"
          />
          <nav
            aria-label="Primary actions"
            className="flex items-center gap-3 sm:gap-4"
          >
            {headerActions.map((action) => (
              <Button
                key={action.label}
                type="button"
                className={`relative h-auto overflow-hidden rounded-lg px-4 py-2 text-center text-sm font-medium leading-6 sm:px-6 sm:text-base ${action.className}`}
              >
                {action.icon ? (
                  <img
                    className="relative mr-2 shrink-0"
                    alt=""
                    aria-hidden="true"
                    src={action.icon}
                  />
                ) : null}
                <span
                  className={`absolute blur-[13.5px] ${action.glowClassName}`}
                  aria-hidden="true"
                />
                <span className="[font-family:'Inter',Helvetica] relative whitespace-nowrap tracking-[0]">
                  {action.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex w-full flex-col bg-white pt-[72px]">
        <KeyMetricsSection />
        <HeroSection />
        <PaymentProcessorRiskSection />
        <ProcessorComparisonSection />
        <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-[100px] lg:py-10">
          <div className="mx-auto h-[671px] w-full max-w-[855px] bg-[url(https://c.animaapp.com/mpv8f0th9epBAX/img/group.png)] bg-cover bg-[50%_50%] bg-no-repeat" />
        </section>
        <SupportedPaymentMethodsSection />
        <OnboardingIntroSection />
        <OnboardingStepsSection />
        <PricingPlansSection />
        <HongKongPspSpecialistSection />
        <TeamIntroSection />
        <OnboardingTeamSection />
        <FooterSection />
      </main>
      <div className="fixed bottom-8 right-4 z-40 sm:right-8">
        <button
          type="button"
          aria-label="Open WhatsApp"
          className="block h-20 w-20 rounded-full bg-[url(https://c.animaapp.com/mpv8f0th9epBAX/img/whatsapp.png)] bg-cover bg-[50%_50%]"
        />
      </div>
    </div>
  );
};
