import * as React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const topCards = [
  {
    title: (
      <>
        Your account has
        <br />
        been suspended
      </>
    ),
    description: (
      <>
        You wake up to the &quot;Your account
        <br />
        has been suspended&quot; email. No
        <br />
        warning. No explanation. Just…
        <br />
        done.
      </>
    ),
    content: (
      <div className="relative h-[209.44px] w-[239px] shrink-0">
        <div className="absolute left-0 top-0 flex h-[173px] w-[216px] flex-col items-start gap-[18px] rounded-[15px] border-[1.56px] border-solid border-[#ffffff0a] bg-[#e1e4e8] pl-[20.25px] pr-[92.27px] py-[18px]">
          <div className="inline-flex items-center gap-[9px]">
            <img
              className="h-[63.26px] w-[63.26px] rounded-[14px] object-cover"
              alt="Image"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/image-2.png"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-[9px]">
            <div className="flex w-full flex-col items-start justify-center gap-[11.25px]">
              <div className="mt-[-1.13px] w-fit whitespace-nowrap text-center text-[24.8px] font-normal leading-[27.2px] tracking-[0] text-[#d03232] [font-family:'Sharp_Grotesk_PE_Trial_Book-20',Helvetica]">
                $547,39
              </div>
              <div className="w-fit whitespace-nowrap text-center text-[15.8px] font-light leading-[17.3px] tracking-[0] text-[#58585f] [font-family:'Manrope',Helvetica]">
                Stripe
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute left-[161px] top-[131px] h-[78px] w-[78px]"
          alt="Group"
          src="https://c.animaapp.com/mpv8f0th9epBAX/img/group-691314571.png"
        />
      </div>
    ),
    leftGlow: "https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-5-svg-1.svg",
    rightGlow: "https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-svg-1.svg",
  },
  {
    title: <>Pending payouts</>,
    description: (
      <>
        Your $47,000 (or $147,000 or
        <br />
        $347,000) in pending payouts?
        <br />
        Held for 90-180 days. Good luck
        <br />
        making payroll.
      </>
    ),
    content: (
      <img
        className="relative shrink-0"
        alt="Div"
        src="https://c.animaapp.com/mpv8f0th9epBAX/img/div.svg"
      />
    ),
    leftGlow: "https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-5-svg.svg",
    rightGlow: "https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle-svg.svg",
  },
];

const bottomCards = [
  {
    title: <>You&apos;re Flagged.</>,
    description: (
      <>
        You scramble to find a new processor — but
        <br />
        now you&apos;re &quot;flagged.&quot; Every application gets
        <br />
        denied. You&apos;re radioactive.
      </>
    ),
    media: (
      <img
        className="h-[136.44px] w-[326px]"
        alt="Group"
        src="https://c.animaapp.com/mpv8f0th9epBAX/img/group-691314572.png"
      />
    ),
    mediaClassName: "justify-between",
  },
  {
    title: (
      <>
        Your ad spend keeps
        <br />
        burning
      </>
    ),
    description: (
      <>
        Your ad spend keeps burning. Your customers
        <br />
        keep ordering. But you can&apos;t collect a single
        <br />
        dollar. Revenue goes to zero overnight.
      </>
    ),
    media: (
      <div className="absolute left-[45px] top-[186px] h-[310px] w-[310px] bg-[url(https://c.animaapp.com/mpv8f0th9epBAX/img/ellipse-210.png)] bg-[100%_100%]">
        <img
          className="absolute left-7 top-7 h-[253px] w-[253px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mpv8f0th9epBAX/img/ellipse-211.png"
        />
        <img
          className="absolute left-14 top-14 h-[197px] w-[197px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mpv8f0th9epBAX/img/ellipse-212.png"
        />
        <img
          className="absolute left-[124px] top-[91px] h-[67px] w-[50px]"
          alt="Frame"
          src="https://c.animaapp.com/mpv8f0th9epBAX/img/frame-18.svg"
        />
        <div className="absolute left-[3px] top-9 flex h-14 w-14 bg-[url(https://c.animaapp.com/mpv8f0th9epBAX/img/ellipse-207.svg)] bg-[100%_100%]">
          <img
            className="ml-[9.1px] mt-[9.1px] h-[38.28px] w-[38.28px]"
            alt="Image"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/image-7.png"
          />
        </div>
        <div className="absolute left-[243px] top-3.5 h-[46px] w-[46px] rotate-[6.53deg]">
          <img
            className="absolute -left-0.5 -top-0.5 h-[51px] w-[51px] rotate-[-6.53deg]"
            alt="Ellipse"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/ellipse-213.svg"
          />
          <img
            className="absolute left-[3px] top-[3px] h-10 w-10 rotate-[-6.53deg]"
            alt="Image"
            src="https://c.animaapp.com/mpv8f0th9epBAX/img/image-8.png"
          />
        </div>
      </div>
    ),
    specialLayout: true,
  },
  {
    title: (
      <>
        Your Business at mercy of
        <br />a support ticket
      </>
    ),
    description: (
      <>
        Your 7-figure business — the one you spent
        <br />
        years building — is now completely at the
        <br />
        mercy of a support ticket that nobody
        <br />
        answers.
      </>
    ),
    media: (
      <img
        className="relative z-0 mt-0 w-full flex-[0_0_auto] self-stretch"
        alt="Div w full"
        src="https://c.animaapp.com/mpv8f0th9epBAX/img/div-w-full.svg"
      />
    ),
    mediaClassName: "justify-between pt-6 pb-[0.36px]",
  },
];

export const HeroSection = (): React.JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-[59px] pt-[107px] sm:px-6 lg:px-[103px]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/mpv8f0th9epBAX/img/rectangle.svg"
      />
      <div className="relative mx-auto flex w-full max-w-[1234px] flex-col items-center gap-14">
        <header className="flex flex-col items-center gap-5">
          <Badge className="inline-flex rounded-[48px] border border-solid border-[#d03232] bg-[#d0323230] px-[18px] py-2 text-base font-normal leading-6 text-[#d03232] hover:bg-[#d0323230] [font-family:'Inter',Helvetica]">
            <img
              className="mr-1.5 h-4 w-4"
              alt="Frame"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/frame-15.svg"
            />
            The Ugly Truth Nobody Talks About
          </Badge>
          <div className="flex w-full max-w-[877px] flex-col items-center px-4">
            <img
              className="h-auto w-full max-w-[737px]"
              alt="The payment"
              src="https://c.animaapp.com/mpv8f0th9epBAX/img/the-payment-processor-ticking-time-bomb.svg"
            />
          </div>
          <div className="flex max-w-[877px] flex-col items-center px-4 sm:px-[49.38px]">
            <p className="mt-[-1.00px] text-center text-lg font-light leading-[27px] tracking-[0] text-[#58585f] [font-family:'Inter',Helvetica]">
              Right now — this very second — your payment processor is running
              your account
              <br />
              through their risk algorithm. And here&apos;s what they&apos;re
              deciding:
            </p>
          </div>
        </header>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {topCards.map((card, index) => (
              <Card
                key={`top-card-${index}`}
                className="relative overflow-hidden rounded-3xl border-0 bg-slate-100 px-8 py-0 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] backdrop-blur-[29px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(29px)_brightness(100%)]"
              >
                <CardContent className="relative flex min-h-[273px] items-center gap-[37px] p-0">
                  {card.content}
                  <div className="inline-flex min-w-[229px] max-w-[229px] flex-col items-start px-0 pb-0 pt-3">
                    <div className="flex w-full flex-col items-start px-0 pb-3 pt-0">
                      <h3 className="mt-[-1.00px] w-fit text-2xl font-normal leading-8 tracking-[0] text-[#1d1c20] [font-family:'Inter',Helvetica]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="relative flex w-full flex-col items-start">
                      <p className="mt-[-1.00px] w-fit text-sm font-normal leading-[21px] tracking-[0] text-[#58585f] [font-family:'Inter',Helvetica]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute left-[-257px] top-[149px] h-[362px] w-[541px]"
                    alt="Rectangle svg"
                    src={card.leftGlow}
                  />
                  <img
                    className="absolute left-[193px] top-[149px] h-[362px] w-[541px]"
                    alt="Rectangle svg"
                    src={card.rightGlow}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {bottomCards.map((card, index) => (
              <Card
                key={`bottom-card-${index}`}
                className="relative overflow-hidden rounded-3xl border-0 bg-slate-100 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] backdrop-blur-[29px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(29px)_brightness(100%)]"
              >
                <div className="absolute bottom-0 left-0 h-[60px] w-full bg-[linear-gradient(0deg,rgba(208,50,50,0.4)_0%,rgba(208,50,50,0.2)_50%,rgba(208,50,50,0)_100%)]" />
                <CardContent className="p-0">
                  {card.specialLayout ? (
                    <div className="relative h-[338px] w-full overflow-hidden">
                      <div className="absolute left-8 top-6 flex w-[calc(100%_-_84px)] max-w-[311px] flex-col items-start px-0 pb-0 pt-3">
                        <div className="flex w-full flex-col items-start">
                          <h3 className="mt-[-1.00px] self-stretch text-2xl font-normal leading-8 tracking-[0] text-[#1d1c20] [font-family:'Inter',Helvetica]">
                            {card.title}
                          </h3>
                        </div>
                        <div className="relative flex w-full flex-col items-start px-0 pb-0 pt-[9px]">
                          <p className="mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-[0] text-[#58585f] [font-family:'Inter',Helvetica]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      {card.media}
                    </div>
                  ) : (
                    <div
                      className={`relative flex h-[338px] w-full flex-col items-start px-8 py-6 ${card.mediaClassName ?? ""}`}
                    >
                      <div className="relative z-[1] flex w-[311px] max-w-[311px] flex-col items-start px-0 pb-0 pt-3">
                        <div className="flex w-full flex-col items-start">
                          <h3 className="mt-[-1.00px] self-stretch text-2xl font-normal leading-8 tracking-[0] text-[#1d1c20] [font-family:'Inter',Helvetica]">
                            {card.title}
                          </h3>
                        </div>
                        <div className="relative flex w-full flex-col items-start px-0 pb-0 pt-[9px]">
                          <p className="mt-[-1.00px] self-stretch text-sm font-normal leading-5 tracking-[0] text-[#58585f] [font-family:'Inter',Helvetica]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      {card.media}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
