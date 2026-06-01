import * as React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const timelineSteps = [
  {
    id: 1,
    duration: "3-5 days",
    badgeSrc: "https://c.animaapp.com/mpv8f0th9epBAX/img/duration-badge.svg",
    title: (
      <>
        Hong Kong Company
        <br />
        Formation
      </>
    ),
    description: (
      <>
        We handle your complete Hong
        <br />
        Kong Limited company setup
        <br />
        with proper business
        <br />
        registration, ensuring
        <br />
        compliance with local
        <br />
        regulations and positioning you
        <br />
        for financial services approval.
      </>
    ),
    wrapperClassName:
      "flex flex-col items-center gap-6 xl:absolute xl:top-[291px] xl:left-[-21px]",
    badgePosition: "top",
  },
  {
    id: 2,
    duration: "2-3 days",
    badgeSrc: "https://c.animaapp.com/mpv8f0th9epBAX/img/duration-badge-2.svg",
    title: (
      <>
        Business Address &
        <br />
        Compliance Setup
      </>
    ),
    description: (
      <>
        We secure a legitimate Hong
        <br />
        Kong business address that
        <br />
        satisfies banking and PSP
        <br />
        requirements, plus handle all
        <br />
        compliance documentation for
        <br />
        smooth approvals.
      </>
    ),
    wrapperClassName:
      "flex flex-col items-center gap-6 xl:absolute xl:top-[127px] xl:left-[229px]",
    badgePosition: "bottom",
  },
  {
    id: 3,
    duration: "2-5 days",
    badgeSrc: "https://c.animaapp.com/mpv8f0th9epBAX/img/duration-badge.svg",
    title: (
      <>
        PayPal HK Verified
        <br />
        Account
      </>
    ),
    description: (
      <>
        We complete PayPal Hong
        <br />
        Kong setup with proper
        <br />
        verification and insider
        <br />
        approval tactics, giving you
        <br />
        access to PayPal&apos;s global
        <br />
        payment network from Hong
        <br />
        Kong.
      </>
    ),
    wrapperClassName:
      "flex flex-col items-center gap-6 xl:absolute xl:top-72 xl:left-[448px]",
    badgePosition: "top",
  },
  {
    id: 4,
    duration: "3-7 days",
    badgeSrc: "https://c.animaapp.com/mpv8f0th9epBAX/img/duration-badge-2.svg",
    title: (
      <>
        Airwallex Multi-Currency
        <br />
        Account
      </>
    ),
    description: (
      <>
        We open your Airwallex
        <br />
        business account with proper
        <br />
        documentation, enabling
        <br />
        seamless multi-currency
        <br />
        operations and global payment
        <br />
        processing capabilities.
      </>
    ),
    wrapperClassName:
      "flex flex-col items-center gap-6 xl:absolute xl:top-[127px] xl:left-[674px]",
    badgePosition: "bottom",
  },
  {
    id: 5,
    duration: "5-10 days",
    badgeSrc: "https://c.animaapp.com/mpv8f0th9epBAX/img/duration-badge-1.svg",
    title: (
      <>
        Ocean Payment
        <br />
        Merchant Setup
      </>
    ),
    description: (
      <>
        We activate your Ocean Payment
        <br />
        merchant account with insider
        <br />
        knowledge of their approval
        <br />
        process, ensuring smooth
        <br />
        underwriting and rapid account
        <br />
        activation.
      </>
    ),
    wrapperClassName:
      "flex flex-col items-center gap-6 xl:absolute xl:top-[290px] xl:left-[889px]",
    badgePosition: "top",
  },
];

const missionItems = [
  "Unlimited transaction volume",
  "Multi-currency operations",
  "Instant fund access",
  "100% Compliant & Secure",
];
const StepCircle = ({ step }: { step: number }) => (
  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[6px] border-solid border-[#1544ea2e] bg-[linear-gradient(180deg,rgba(22,68,235,1)_0%,rgba(142,167,255,1)_100%)]">
    <span className="relative mt-[-1.00px] flex items-center [font-family:'Inter',Helvetica] text-base font-bold leading-6 tracking-[-0.64px] text-white">
      {step}
    </span>
  </div>
);

const DurationBadge = ({
  src,
  duration,
}: {
  src: string;
  duration: string;
}) => (
  <div className="relative h-[35px] w-[77px]">
    <img
      className="absolute left-0 top-0 h-[35px] w-[78px]"
      alt="Duration badge"
      src={src}
    />
    <div className="absolute left-[11px] top-[5px] inline-flex h-5 items-center justify-center px-0 pb-px pt-0">
      <span className="relative mt-[-1.50px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[15px] font-normal leading-5 tracking-[-0.60px] text-white">
        {duration}
      </span>
    </div>
  </div>
);

export const SupportedPaymentMethodsSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full px-0 pb-[57px] pt-[70px]">
      <div className="mx-auto flex w-full max-w-[1343px] flex-col items-center gap-8 px-4 md:px-8 xl:gap-[39.99px]">
        <header className="flex w-full flex-col items-start gap-[19.29px]">
          <div className="flex w-full flex-col items-center">
            <img
              className="h-auto w-full max-w-[1071px]"
              alt="We take you from"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/we-take-you-from-zero-to-a-fully-activated-hong-kong-psp-1.svg"
            />
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-[840px] items-center justify-center px-2">
              <p className="mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-lg font-light leading-7 tracking-[-1.00px] text-[#58585f]">
                A Hong Kong PSP setup is a compliance maze... strict rules,
                banking barriers, and hidden requirements that
                <br />
                most entrepreneurs aren&apos;t prepared for.
              </p>
            </div>
          </div>
        </header>
        <div className="relative w-full max-w-[1347px] xl:h-[636.56px]">
          <img
            className="absolute left-1/2 top-[364px] hidden h-px w-[1142px] -translate-x-1/2 xl:block"
            alt="Timeline connector"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/timeline-connector.svg"
          />
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:hidden">
            {timelineSteps.map((step) => (
              <article
                key={step.id}
                className="mx-auto flex w-full max-w-[234px] flex-col items-center gap-6"
              >
                {step.badgePosition === "top" ? (
                  <div className="inline-flex flex-col items-center gap-2.5">
                    <DurationBadge
                      src={step.badgeSrc}
                      duration={step.duration}
                    />
                    <StepCircle step={step.id} />
                  </div>
                ) : (
                  <div className="inline-flex flex-col items-center gap-[13px]">
                    <StepCircle step={step.id} />
                    <DurationBadge
                      src={step.badgeSrc}
                      duration={step.duration}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center gap-[15.5px] self-stretch">
                  <div className="flex w-[178px] items-center justify-center">
                    <h3 className="mt-[-1.00px] text-center [font-family:'Cambo',Helvetica] text-lg font-normal leading-6 tracking-[-0.72px] text-[#1d1c20]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center self-stretch">
                    <p className="mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-[15.5px] font-normal leading-5 tracking-[-0.62px] text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="md:col-span-2">
              <div className="mx-auto flex max-w-[250px] flex-col items-center">
                <div className="mb-[-4px] flex h-[72px] w-[72px] items-center justify-center rounded-full border-[6px] border-solid border-[#1544ea2e] bg-[linear-gradient(180deg,rgba(22,68,235,1)_0%,rgba(142,167,255,1)_100%)]">
                  <span className="relative mt-[-1.00px] flex items-center [font-family:'Inter',Helvetica] text-base font-bold leading-6 tracking-[-0.64px] text-white">
                    6
                  </span>
                </div>
                <Card className="w-full overflow-hidden rounded-[10px] border-0 bg-[linear-gradient(0deg,rgba(244,244,254,1)_0%,rgba(244,244,254,1)_100%)] shadow-[0px_0px_45px_#1544ea66]">
                  <CardContent className="relative flex flex-col items-start p-0">
                    <div className="relative z-10 flex w-full flex-col items-center gap-[15.5px] p-2">
                      <div
                        className="h-[70px] w-[70px] max-w-[250px] bg-cover bg-[50%_50%]"
                        style={{
                          backgroundImage:
                            "url(https://c.animaapp.com/mpv8f0th9epBAX/img/mission-accomplished-shield.png)",
                        }}
                      />
                      <div className="flex w-[214px] items-center justify-center">
                        <h3 className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-lg font-bold leading-6 tracking-[-0.72px] text-[#1d1c20]">
                          Mission Accomplished!
                        </h3>
                      </div>
                      <div className="flex w-full flex-col items-center gap-[5px]">
                        <div className="flex w-full items-center justify-center">
                          <p className="relative mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-[15.5px] font-normal leading-5 tracking-[-0.62px] text-[#58585f]">
                            Your Hong Kong PSP Empire is
                            <br />
                            Active. Now You Have Access To:
                          </p>
                        </div>
                        <ul className="inline-flex flex-col items-start gap-[5px]">
                          {missionItems.map((item) => (
                            <li
                              key={item}
                              className="inline-flex items-start justify-center gap-[5px]"
                            >
                              <span className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-base font-normal leading-6 text-green-400">
                                ✓
                              </span>
                              <span className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[15px] font-normal leading-6 text-[#58585f] opacity-90">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute bottom-[-550px] left-[-239px] h-[829px] w-[297px] rotate-[-94.59deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_38%,rgba(22,68,235,0.48)_81%,rgba(22,68,235,0.12)_100%)] blur-[20px]" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="relative hidden xl:block xl:h-[636.56px]">
            {timelineSteps.map((step) => (
              <article
                key={step.id}
                className={`${step.wrapperClassName} w-[214px]`}
              >
                {step.badgePosition === "top" ? (
                  <div className="inline-flex flex-col items-center gap-2.5">
                    <DurationBadge
                      src={step.badgeSrc}
                      duration={step.duration}
                    />
                    <div className="mb-[-6.00px]">
                      <StepCircle step={step.id} />
                    </div>
                  </div>
                ) : (
                  <div className="inline-flex flex-col items-center gap-[13px]">
                    <div className="mt-[-6.00px]">
                      <StepCircle step={step.id} />
                    </div>
                    <DurationBadge
                      src={step.badgeSrc}
                      duration={step.duration}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center gap-[15.5px] self-stretch">
                  <div className="flex w-[178px] items-center justify-center">
                    <h3 className="mt-[-1.00px] text-center [font-family:'Cambo',Helvetica] text-lg font-normal leading-6 tracking-[-0.72px] text-[#1d1c20]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center self-stretch">
                    <p className="mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-[15.5px] font-normal leading-5 tracking-[-0.62px] text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="absolute right-[-50px] top-0 flex h-[298px] w-[250px] flex-col items-start justify-center rounded-[10px] bg-[#ffffff01] shadow-[0px_0px_45px_#1544ea66]">
              <Card className="h-full w-full overflow-hidden rounded-[10px] border-0 bg-[linear-gradient(0deg,rgba(244,244,254,1)_0%,rgba(244,244,254,1)_100%)] shadow-[0px_1px_2px_-1px_#0000001a]">
                <CardContent className="relative flex h-full flex-col items-start p-0">
                  <div className="relative z-10 flex w-full flex-col items-center gap-[15.5px] p-2">
                    <div
                      className="h-[70px] w-[70px] max-w-[250px] bg-cover bg-[50%_50%]"
                      style={{
                        backgroundImage:
                          "url(https://c.animaapp.com/mpv8f0th9epBAX/img/mission-accomplished-shield.png)",
                      }}
                    />
                    <div className="flex w-[214px] items-center justify-center">
                      <h3 className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap text-center [font-family:'Inter',Helvetica] text-lg font-bold leading-6 tracking-[-0.72px] text-[#1d1c20]">
                        Mission Accomplished!
                      </h3>
                    </div>
                    <div className="relative flex w-full flex-col items-center gap-[5px]">
                      <div className="flex w-full items-center justify-center">
                        <p className="relative mt-[-1.00px] text-center [font-family:'Inter',Helvetica] text-[15.5px] font-normal leading-5 tracking-[-0.62px] text-[#58585f]">
                          Your Hong Kong PSP Empire is
                          <br />
                          Active. Now You Have Access To:
                        </p>
                      </div>
                      <ul className="inline-flex flex-col items-start gap-[5px]">
                        {missionItems.map((item) => (
                          <li
                            key={item}
                            className="inline-flex items-start justify-center gap-[5px]"
                          >
                            <span className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-base font-normal leading-6 text-green-400">
                              ✓
                            </span>
                            <span className="relative mt-[-1.00px] flex w-fit items-center justify-center whitespace-nowrap [font-family:'Inter',Helvetica] text-[15px] font-normal leading-6 text-[#58585f] opacity-90">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-[-550px] left-[-239px] h-[829px] w-[297px] rotate-[-94.59deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_38%,rgba(22,68,235,0.48)_81%,rgba(22,68,235,0.12)_100%)] blur-[20px]" />
                </CardContent>
              </Card>
            </div>
            <div className="absolute right-[34px] top-[329px] flex h-[72px] w-[72px] items-center justify-center rounded-full border-[6px] border-solid border-[#1544ea2e] bg-[linear-gradient(180deg,rgba(22,68,235,1)_0%,rgba(142,167,255,1)_100%)]">
              <span className="relative mt-[-1.00px] flex w-fit items-center [font-family:'Inter',Helvetica] text-base font-bold leading-6 tracking-[-0.64px] text-white">
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[31.99px] flex w-full max-w-[1343px] flex-col items-center gap-6 px-4 md:px-8">
        <div className="flex w-full items-center justify-center">
          <Button
            type="button"
            className="relative inline-flex h-auto min-h-12 overflow-hidden rounded-xl bg-[#1544ea] px-[58px] py-3 text-center [font-family:'Inter',Helvetica] text-lg font-normal leading-7 tracking-[-0.36px] text-white hover:bg-[#1544ea]/90"
          >
            <span className="absolute left-1 top-10 h-20 w-[326px] rounded-[101.5px] bg-[#d9d9d9] blur-[13.5px]" />
            <span className="relative z-10 mt-[-1.00px] flex items-center justify-center whitespace-nowrap">
              Start Your Hong Kong PSP Setup
            </span>
          </Button>
        </div>
        <div className="inline-flex items-center rounded-xl px-4 py-0 backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)]">
          <p className="mt-[-1.00px] whitespace-nowrap [font-family:'Inter',Helvetica] text-base font-light leading-6 tracking-[0] text-neutral-50 opacity-90">
            Complete Hong Kong PSP setup - €4000 investment
          </p>
        </div>
      </div>
    </section>
  );
};
