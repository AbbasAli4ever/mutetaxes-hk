import React from "react";

const impactData = [
  { value: "2500+", title: "Stores Protected", gradient: "bg-[radial-gradient(81.58%_65.71%_at_4.57%_28.07%,#1544ea_0%,#1d1c20_100%)]" },
  { value: "$100M+", title: "Revenue Processed", gradient: "bg-[radial-gradient(81.58%_65.71%_at_4.57%_28.07%,#1544ea_0%,#1d1c20_100%)]" },
  { value: "50+", title: "Countries Served", gradient: "bg-[radial-gradient(81.58%_65.71%_at_4.57%_28.07%,#1544ea_0%,#1d1c20_100%)]" },
  { value: "8Years", title: "In The Game", gradient: "bg-[radial-gradient(81.58%_65.71%_at_4.57%_28.07%,#1544ea_0%,#1d1c20_100%)]" },
];

export const KeyMetricsSection = () => {
  return (
    <>
      {/* Desktop / Tablet — hidden on mobile < 540px */}
      <section className="relative max-[540px]:hidden left-0 right-0 md:bottom-[-80px] bottom-[-40px] px-3 sm:px-4 lg:px-6">
        <div
          className="mx-auto relative max-w-[1176px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] bg-[#F1F5F9] py-5 sm:py-6 lg:py-[32px] overflow-hidden"
          style={{ zIndex: "10" }}
        >
          {/* Glow blobs */}
          <div className="absolute w-[297px] h-[553px] left-[-168px] top-[-514.65px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.60)_37.91%,rgba(21,68,234,0.48)_81.25%,rgba(21,68,234,0.12)_100%)] blur-[40px]" />
          <div className="absolute w-[298px] h-[672px] right-[-116px] top-[-454px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.60)_37.91%,rgba(21,68,234,0.48)_81.25%,rgba(21,68,234,0.12)_100%)] blur-[40px]" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[60px] px-4 sm:px-6 lg:px-[32px]">
            {impactData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center xl:items-start text-center xl:text-left py-2 ${index < 3 ? "lg:border-r lg:border-[#606062]" : ""}`}
              >
                <div
                  className={`font-normal leading-tight bg-clip-text text-transparent
                    text-[24px] sm:text-[30px] md:text-[38px] lg:text-[46px] xl:text-[50px]
                    ${item.gradient}`}
                >
                  {item.value}
                </div>
                <div className="text-[#595960] text-[12px] sm:text-[14px] md:text-[16px] lg:text-lg xl:text-xl mt-0.5">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile — only shown < 540px */}
      <section className="max-[540px]:block [font-family:'Cambo',Helvetica] hidden py-0 px-4">
        <div>
          <h2 className="text-[30px] font-semibold leading-[110%] text-[#1d1c20]">
            <span className="bg-[radial-gradient(circle,#1544ea_0%,#1d1c20_100%)] bg-clip-text text-transparent">Our</span> Impact
          </h2>
        </div>
        <div className="w-full mt-5 flex flex-col gap-4">
          {impactData.map((item, index) => (
            <div key={index} className="px-5 py-6 bg-[#F1F5F9] rounded-[20px] overflow-hidden relative">
              <div className="absolute left-[-168px] top-[-299px] w-[297px] h-[633px] bg-[linear-gradient(180deg,rgba(255,255,255,0.60)_37.91%,rgba(21,68,234,0.48)_81.25%,rgba(21,68,234,0.12)_100%)] blur-[40px]" />
              <div
                className={`relative z-10 font-medium text-[40px] leading-tight bg-clip-text text-transparent ${item.gradient}`}
              >
                {item.value}
              </div>
              <div className="relative z-10 mt-1 text-[#595960] text-[16px]">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
