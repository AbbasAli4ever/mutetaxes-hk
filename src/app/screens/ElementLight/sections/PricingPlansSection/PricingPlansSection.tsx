import * as React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const onboardingTeam = [
  {
    image: "https://c.animaapp.com/mpv8f0th9epBAX/img/employee-name.png",
    alt: "Onboarding team member",
  },
  {
    image: "https://c.animaapp.com/mpv8f0th9epBAX/img/employee-name-1.png",
    alt: "Onboarding team member",
  },
  {
    image: "https://c.animaapp.com/mpv8f0th9epBAX/img/employee.png",
    alt: "Onboarding team member",
  },
  {
    image: "https://c.animaapp.com/mpv8f0th9epBAX/img/employee-1.png",
    alt: "Onboarding team member",
  },
];

export const PricingPlansSection = (): React.JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-[58px] px-0 py-[70px]">
      <header className="flex w-full max-w-[1315px] flex-col items-start gap-[19.3px] px-4 md:px-6">
        <div className="flex w-full justify-center">
          <img
            className="h-auto w-full max-w-[970px]"
            alt="We take you from zero to a fully activated Hong Kong PSP"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/we-take-you-from-zero-to-a-fully-activated-hong-kong-psp.svg"
          />
        </div>
        <div className="flex w-full justify-center px-0 md:px-[60px] lg:px-[140px] xl:px-[237.5px]">
          <p className="[font-family:'Inter',Helvetica] text-center text-lg font-light leading-6 tracking-[0] text-[#58585f]">
            A Hong Kong PSP setup is a compliance maze... strict rules, banking
            barriers, and hidden
            <br />
            requirements that most entrepreneurs aren&#39;t prepared for.
          </p>
        </div>
      </header>
      <div className="flex flex-col items-center px-4">
        <h2 className="bg-[linear-gradient(172deg,rgba(22,68,235,1)_0%,rgba(22,68,235,1)_100%)] bg-clip-text text-center [font-family:'Cambo',Helvetica] text-[41px] font-normal leading-[64.9px] tracking-[0] text-transparent">
          Our Onboarding Team
        </h2>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="mx-auto flex min-w-max items-stretch justify-center gap-5 px-4 md:px-6 lg:px-10">
          {onboardingTeam.map((member, index) => (
            <Card
              key={`onboarding-team-${index}`}
              className="w-[345px] rounded-xl border-0 bg-[#ffffff01] shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]"
            >
              <CardContent className="p-0">
                <article className="flex flex-col overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="h-[345px] w-full object-cover object-center"
                  />
                  <div className="flex min-h-[21px] items-center justify-center px-2 pb-2 pt-[15px]">
                    <p className="bg-[linear-gradient(178deg,rgba(151,103,228,1)_0%,rgba(109,5,254,1)_100%)] bg-clip-text text-center [font-family:'Inter',Helvetica] text-base font-normal leading-[13.8px] tracking-[0] text-transparent whitespace-nowrap">
                      Airwallex Support Coordinator
                    </p>
                  </div>
                </article>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
