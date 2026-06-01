import * as React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    text: "Working with SwiftNine Limited has been absolutely amazing! They handled our HK setup professionally from start to finish.",
    footerImage: "https://c.animaapp.com/mpv8f0th9epBAX/img/div-relative-1.svg",
  },
  {
    text: "Had a really great experience with SwiftNine! Great service and would recommend to my friends and family.",
    footerImage: "https://c.animaapp.com/mpv8f0th9epBAX/img/div-relative-1.svg",
  },
  {
    text: "The perfect partner for all e-commerce solutions. Especially when it comes to Hong Kong setups, Swiftnine offers the best and most affordable service in the area. A big thank you to Swiftnine; I can only recommend them to everyone and would gladly use them again!",
    footerImage: "https://c.animaapp.com/mpv8f0th9epBAX/img/div-relative-1.svg",
  },
  {
    text: "SWIFTNINE is absolutely outstanding! 🌟🌟🌟 Their assistance was incredibly helpful, and I couldn't be more satisfied. 🤝🙂",
    footerImage: "https://c.animaapp.com/mpv8f0th9epBAX/img/div-relative-1.svg",
  },
  {
    text: "Topnotch service! Fast response with fast delivery. The support is amazing as well, I had no issues or anything during the process! I highly recommend it!",
    stars: "https://c.animaapp.com/mpv8f0th9epBAX/img/stars.svg",
    author: "Selim Onbekend",
    avatar: "https://c.animaapp.com/mpv8f0th9epBAX/img/selim-onbekend.png",
  },
  {
    text: "Working with SwiftNine Limited was an absolute pleasure. They handled our Hong Kong company setup professionally from start to finish. Every step — from documentation to communication with local authorities — was smooth, fast, and transparent.",
    stars: "https://c.animaapp.com/mpv8f0th9epBAX/img/stars.svg",
    author: "Davidsantoos YT",
    avatar: "https://c.animaapp.com/mpv8f0th9epBAX/img/davidsantoos-yt.png",
  },
  {
    text: "I had an amazing experience with SwiftNine Limited – their service is absolutely outstanding. They helped me set up a Hong Kong company (HKA), open a bank account, and navigate the whole process with impressive speed and efficiency. Compared to other providers, their pricing is unbeatable – it's honestly a no-brainer.",
    stars: "https://c.animaapp.com/mpv8f0th9epBAX/img/stars.svg",
    author: "gli mea",
    avatar: "https://c.animaapp.com/mpv8f0th9epBAX/img/gli-mea.png",
  },
];

export const HongKongPspSpecialistSection = (): React.JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-[50px] px-4 py-[70px] md:px-6">
      <header className="flex w-full max-w-[1440px] flex-col items-center">
        <div className="inline-flex items-center justify-center rounded-[32px] bg-[linear-gradient(61deg,rgba(22,68,235,1)_0%,rgba(128,156,255,1)_80%)] px-[15px] py-[5px] shadow-[inset_0px_-7px_11px_1px_#a48fff1f,0px_4px_24px_#00000040] backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)]">
          <p className="[font-family:'Inter',Helvetica] text-center text-sm font-medium leading-5 tracking-[0] text-white">
            Wall of love
          </p>
        </div>
        <div className="flex w-full flex-col items-center px-0 pb-0 pt-4">
          <img
            className="h-auto w-full max-w-[546px]"
            alt="Our clients come first, always"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/our-clients-come-first--always.svg"
          />
        </div>
        <div className="flex w-full max-w-[600px] flex-col items-center">
          <p className="[font-family:'Inter',Helvetica] text-center text-base font-light leading-6 tracking-[0] text-[#58585f]">
            We take pride in the moment our clients become our friends.
          </p>
        </div>
      </header>
      <img
        className="w-full max-w-[1216px]"
        alt="Section divider"
        src="https://c.animaapp.com/mpv8f0th9epBAX/img/div-relative.svg"
      />
      <div className="relative w-full max-w-[1216px] overflow-hidden">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-${index}`}
              className="h-full rounded-[17px] border border-solid border-[#ddddf7] bg-[#f4f4fe] shadow-none"
            >
              <CardContent className="flex h-full min-h-[341.6px] flex-col justify-between p-0">
                <div className="flex flex-1 flex-col items-start p-5">
                  {testimonial.stars ? (
                    <img
                      className="w-full flex-none"
                      alt="Stars"
                      src={testimonial.stars}
                    />
                  ) : (
                    <div className="h-[17.83px] w-full" />
                  )}

                  <div className="flex w-full flex-1 flex-col pt-2">
                    <p
                      className={`[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[0] ${
                        testimonial.stars
                          ? "text-[#58585f]"
                          : "text-neutral-400"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
                {testimonial.author && testimonial.avatar ? (
                  <footer className="flex w-full items-center gap-4 p-5">
                    <div className="flex h-8 w-8 items-start justify-center overflow-hidden rounded-full">
                      <div
                        className="h-full w-full bg-cover bg-[50%_50%]"
                        style={{
                          backgroundImage: `url(${testimonial.avatar})`,
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                      <p className="[font-family:'Inter',Helvetica] mt-[-1.00px] flex self-stretch text-xs font-medium leading-4 tracking-[0] text-[#f4f0ff]">
                        {testimonial.author}
                      </p>
                      <div className="h-5 w-full" />
                    </div>
                  </footer>
                ) : (
                  <img
                    className="w-full"
                    alt="Testimonial footer"
                    src={testimonial.footerImage}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_12%,rgba(255,255,255,0)_88%,rgba(255,255,255,1)_100%)]" />
      </div>
    </section>
  );
};
