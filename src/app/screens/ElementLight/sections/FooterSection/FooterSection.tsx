import * as React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featureItems = [
  "2500+ Successful Setups",
  "€100M+ Processed Monthly",
  "4 Years of Excellence",
  "24/7 Support Guarantee",
];

const contactItems = [
  {
    text: "info@MuteTaxes.com",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/frame-13.svg",
    href: "mailto:info@MuteTaxes.com",
  },
  {
    text: "WhatsApp: +44 7848 102776",
    icon: "https://c.animaapp.com/mpv8f0th9epBAX/img/frame-14.svg",
    href: "https://wa.me/447848102776",
  },
];

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="relative w-full border-t border-[#9767e433] bg-black px-4 pt-12 pb-12 sm:px-6 lg:px-12 xl:px-36">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="grid gap-12 p-0 md:grid-cols-2 md:items-start">
            <section className="flex min-w-0 flex-col items-start gap-4">
              <div
                className="h-[43.5px] w-[214px] max-w-[520px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/mpv8f0th9epBAX/img/swiftnine-logo.png)",
                }}
                aria-label="MuteTaxes logo"
                role="img"
              />
              <p className="[font-family:'Inter',Helvetica] text-lg font-normal leading-7 tracking-[0] text-zinc-400">
                Your Gateway to Global eCommerce
              </p>
              <ul className="flex w-full flex-col items-start gap-2">
                {featureItems.map((item) => (
                  <li key={item} className="flex w-full items-center gap-2">
                    <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] text-green-400">
                      ✅
                    </span>
                    <span className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] text-neutral-50">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex min-w-0 flex-col items-start gap-4">
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-normal leading-7 tracking-[0] text-neutral-50">
                Get In Touch
              </h2>
              <address className="flex w-full not-italic flex-col items-start gap-3">
                {contactItems.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex w-full items-center gap-3 transition-opacity hover:opacity-80"
                  >
                    <img className="h-5 w-5" alt="" src={item.icon} />
                    <span className="[font-family:'Inter',Helvetica] text-base font-normal leading-6 tracking-[0] text-zinc-400">
                      {item.text}
                    </span>
                  </a>
                ))}
              </address>
            </section>
          </CardContent>
        </Card>
        <div className="border-t border-[#9767e433] pt-8">
          <p className="[font-family:'Inter',Helvetica] text-center text-sm font-normal leading-5 tracking-[0] text-zinc-400">
            © 2026 MuteTaxes. Turning payment problems into profit
            opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};
