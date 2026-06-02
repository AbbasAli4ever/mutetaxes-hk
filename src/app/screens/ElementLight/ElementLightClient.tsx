"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { openWhatsAppWithUtm } from "../../lib/whatsapp";

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const PaymentProcessorRiskSection = dynamic(() => import("./sections/PaymentProcessorRiskSection").then(m => m.PaymentProcessorRiskSection), { ssr: false });
const ProcessorComparisonSection = dynamic(() => import("./sections/ProcessorComparisonSection").then(m => m.ProcessorComparisonSection), { ssr: false });
const OnboardingIntroSection = dynamic(() => import("./sections/OnboardingIntroSection/OnboardingIntroSection").then(m => m.OnboardingIntroSection), { ssr: false });
const SupportedPaymentMethodsSection = dynamic(() => import("./sections/SupportedPaymentMethodsSection").then(m => m.SupportedPaymentMethodsSection), { ssr: false });
const PricingPlansSection = dynamic(() => import("./sections/PricingPlansSection/PricingPlansSection").then(m => m.PricingPlansSection), { ssr: false });
const OnboardingStepsSection = dynamic(() => import("./sections/OnboardingStepsSection").then(m => m.OnboardingStepsSection), { ssr: false });
const HongKongPspSpecialistSection = dynamic(() => import("./sections/HongKongPspSpecialistSection/HongKongPspSpecialistSection").then(m => m.HongKongPspSpecialistSection), { ssr: false });
const TeamIntroSection = dynamic(() => import("./sections/TeamIntroSection").then(m => m.TeamIntroSection), { ssr: false });
const OnboardingTeamSection = dynamic(() => import("./sections/OnboardingTeamSection").then(m => m.OnboardingTeamSection), { ssr: false });
const FooterSection = dynamic(() => import("./sections/FooterSection").then(m => m.FooterSection), { ssr: false });

const SectionSpacer = () => <div className="h-[200px]" />;

export default function ElementLightClient() {
  return (
    <>
      <Suspense fallback={<SectionSpacer />}><PaymentProcessorRiskSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><ProcessorComparisonSection /></Suspense>
      <div className="mx-4">
        <Suspense fallback={<SectionSpacer />}><OnboardingIntroSection /></Suspense>
      </div>
      <div className="relative w-full">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20 py-10 lg:py-[70px]">
          <div className="relative w-full max-w-[585px] mx-auto">
            <Image src="/Group691314573.png" alt="Group" width={585} height={400} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>
      <Suspense fallback={<SectionSpacer />}><SupportedPaymentMethodsSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><PricingPlansSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><OnboardingStepsSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><HongKongPspSpecialistSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><TeamIntroSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><OnboardingTeamSection /></Suspense>
      <Suspense fallback={<SectionSpacer />}><FooterSection /></Suspense>
      <a
        onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")}
        className="fixed bottom-5 right-5 sm:bottom-8 cursor-pointer sm:right-8 z-[1000] animate-bounce hover:animate-none"
      >
        <Image src="/whatsapP.webp" alt="WhatsApp" width={100} height={100} loading="eager" className="w-12 h-12 sm:w-20 sm:h-20" />
      </a>
    </>
  );
}
