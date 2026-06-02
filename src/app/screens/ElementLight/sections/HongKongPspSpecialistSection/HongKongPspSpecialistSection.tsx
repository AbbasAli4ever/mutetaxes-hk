"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, videoTestimonials } from "../../../../data/testimonials";
import TestimonialCard from "../../../../components/ui/TestimonialCard";

const employeeData = [
  { title: "Airwallex Support Coordinator", image: "/AirwallexSupportCoordinator.png" },
  { title: "Airwallex Support Coordinator", image: "/AirwallexSupportCoordinator1.png" },
  { title: "Airwallex Support Coordinator", image: "/AirwallexSupportCoordinator3.png" },
  { title: "Airwallex Support Coordinator", image: "/AirwallexSupportCoordinator11.png" },
  { title: "Airwallex Support Coordinator", image: "/AirwallexSupportCoordinator14.png" },
  { title: "Banking Support Coordinator", image: "/BankingSupportCoordinator.png" },
  { title: "Banking Support Coordinator", image: "/BankingSupportCoordinator1.png" },
  { title: "Banking Support Coordinator", image: "/BankingSupportCoordinator2.png" },
  { title: "Company Registration Specialist", image: "/CompanyRegistrationSpecialist.png" },
  { title: "Customer Success Assistant", image: "/CustomerSuccessAssistant15.png" },
  { title: "PayPal Support Coordinator", image: "/PayPalSupportCoordinator.png" },
  { title: "PayPal Support Coordinator", image: "/PayPalSupportCoordinator8.png" },
  { title: "PayPal Support Coordinator", image: "/PayPalSupportCoordinator15.png" },
];

export const HongKongPspSpecialistSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Testimonials / GSAP
  const row1Ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const swiperSectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState(videoTestimonials.map((vid) => vid.muted));
  const [showSwipeHint, setShowSwipeHint] = useState(false);

  const toggleMute = (index: number) => {
    const currentlyMuted = mutedStates[index];
    const newMutedStates = mutedStates.map((_, i) => (i === index ? !currentlyMuted : true));
    setMutedStates(newMutedStates);
    videoRefs.current.forEach((vid, i) => { if (vid) vid.muted = newMutedStates[i]; });
  };

  useEffect(() => {
    const swiperSection = swiperSectionRef.current;
    if (!swiperSection) return;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showTimer = setTimeout(() => {
            setShowSwipeHint(true);
            hideTimer = setTimeout(() => setShowSwipeHint(false), 5000);
          }, 3000);
          observer.unobserve(swiperSection);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(swiperSection);
    return () => { observer.disconnect(); clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    const row = row1Ref.current;
    if (!row) return;
    const totalWidth = row.scrollWidth / 2;
    gsap.set(row, { x: 0 });
    const tl = gsap.to(row, {
      x: -totalWidth, duration: 40, ease: "none", repeat: -1,
      modifiers: { x: gsap.utils.unitize((value) => { const v = parseFloat(value); return v <= -totalWidth ? v + totalWidth : v; }) },
    });
    const wrapper = wrapperRef.current;
    const slowDown = () => tl.timeScale(0.2);
    const speedUp = () => tl.timeScale(1);
    wrapper?.addEventListener("mouseenter", slowDown);
    wrapper?.addEventListener("mouseleave", speedUp);
    return () => { wrapper?.removeEventListener("mouseenter", slowDown); wrapper?.removeEventListener("mouseleave", speedUp); tl.kill(); };
  }, []);

  return (
    <section className="flex flex-col items-center w-full py-[40px] lg:py-[70px]">
      {/* Team carousel heading */}
      <div className="flex flex-col w-full max-w-[1315px] gap-[19.31px] px-4">
        <div className="flex flex-col items-center w-full">
          <h2 className="[font-family:'Cambo',Helvetica] font-normal sm:px-0 px-2 text-[32px] leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[58px] xl:leading-[120%] lg:text-[70px] text-center tracking-[-1.45px]">
            <span className="bg-gradient-to-r from-[rgba(21,68,234,1)] to-[rgba(29,28,32,1)] bg-clip-text text-transparent tracking-[-0.81px]">
              We Take You From Zero to a <br className="sm:block hidden" />Fully{" "}
            </span>
            <span className="text-[#1d1c20] font-normal tracking-[-0.81px]">Activated Hong Kong PSP</span>
          </h2>
        </div>
        <p className="max-w-[840px] mx-auto flex flex-col items-center font-[300] text-[#58585f] md:text-[18px] text-md text-center tracking-[0] leading-6">
          A Hong Kong PSP setup is a compliance maze... strict rules, banking barriers, and hidden requirements that most entrepreneurs aren&apos;t prepared for.
        </p>
      </div>

      <h2 className="[font-family:'Cambo',Helvetica] text-[26px] lg:text-[41px] text-center mx-10 leading-[64.9px] font-normal bg-[linear-gradient(138deg,rgba(21,68,234,1)_0%,#1d1c20_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] mt-8">
        Our Onboarding Team
      </h2>

      {/* Team Swiper */}
      <div className="w-full max-w-[1440px] relative mt-4">
        <Swiper
          modules={[Navigation, Autoplay, FreeMode]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={2000}
          freeMode={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1440: { slidesPerView: 4 } }}
        >
          {employeeData.map((employee, index) => (
            <SwiperSlide key={index}>
              <Card className="w-full h-[366px] bg-transparent border-0 overflow-hidden cursor-pointer" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <CardContent className="relative w-full h-full p-0">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image className="w-full h-auto object-cover" alt={employee.title} src={employee.image} width={800} height={600} />
                    <div className={`absolute bottom-0 lg:bottom-10 xl:bottom-5 left-0 right-0 h-[60%] bg-gradient-to-t from-black/80 via-black/40 to-transparent hidden md:block transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`} />
                    <div className={`absolute bottom-0 lg:bottom-10 xl:bottom-6 left-0 right-0 px-3 transition-all duration-300 ${hoveredIndex === index ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-4"}`}>
                      <p className="[font-family:'Inter',Helvetica] text-white text-center font-medium text-sm tracking-[0] leading-5 whitespace-nowrap drop-shadow-md">
                        {employee.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Testimonials heading */}
      <div className="relative w-full max-w-[1440px] text-center mt-16 px-4">
        <Badge className="bg-[#f4f4fe] mb-4 mx-auto flex justify-center w-fit rounded-[32px] border border-solid border-[#1544ea33] shadow-[inset_0px_-7px_11px_#1544ea1f] backdrop-blur-[2px] px-[15px] py-[5px]">
          <span className="font-medium text-[#1544ea] text-sm">Wall of love</span>
        </Badge>
        <h2 className="[font-family:'Cambo',Helvetica] font-normal text-[36px] leading-[34px] sm:text-[70px] sm:leading-[48px] md:leading-[58px] lg:leading-[120%] text-transparent bg-clip-text bg-[radial-gradient(50%_50%_at_44%_21%,rgba(21,68,234,1)_0%,rgba(29,28,32,1)_100%)]">
          <span className="bg-[radial-gradient(38.63%_62.02%_at_43.72%_70.95%,#1544ea_10%,#1d1c20_100%)] bg-clip-text text-transparent">Our Clients Come</span>
          <br />First, <span className="[font-family:'Cambo',Helvetica] font-normal">Always</span>
        </h2>
        <p className="text-[#58585f] font-[300] text-[14px] sm:text-[16px] max-w-[600px] mx-auto">We take pride in the moment our clients become our friends.</p>
      </div>

      {/* Video Swiper */}
      <div ref={swiperSectionRef} className="relative w-full max-w-[1216px] px-2 lg:px-2 mt-10">
        {showSwipeHint && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] sm:hidden pointer-events-none">
            <Image src="/videos/swipeleftgif.gif" alt="Swipe left hint" className="w-24 h-24 drop-shadow-2xl" width={96} height={96} unoptimized />
          </div>
        )}
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="w-full h-[480px]"
        >
          {videoTestimonials.map((vid, index) => (
            <SwiperSlide key={index}>
              <Card className="relative w-full h-[480px] bg-[#171717] rounded-[20px] border-[15px] border-[#171717] overflow-hidden">
                <CardContent className="relative w-full h-full p-0 rounded-[20px]">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    className="absolute inset-0 object-cover w-full h-full rounded-[20px]"
                    src={vid.video} autoPlay loop muted={mutedStates[index]} playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 rounded-[20px] to-transparent" />
                  <button onClick={() => toggleMute(index)} className="absolute z-20 flex hidden items-center justify-center w-10 h-10 text-white rounded-full top-4 right-4 bg-white/20 backdrop-blur-md">
                    <Image src={mutedStates[index] ? "/mute.png" : "/unmute.png"} className="w-5 h-5" alt={mutedStates[index] ? "Muted" : "Unmuted"} width={20} height={20} />
                  </button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prevBtn hidden sm:flex absolute left-[-50px] top-1/2 -translate-y-1/2 z-[60] bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full items-center justify-center">
          <Image src="/left-arrow.svg" alt="Previous" className="w-10 h-10 object-contain" width={60} height={60} />
        </button>
        <button className="nextBtn hidden sm:flex absolute right-[-50px] top-1/2 -translate-y-1/2 z-[60] bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full items-center justify-center">
          <Image src="/right-arrow.svg" alt="Next" className="w-10 h-10 object-contain" width={60} height={60} />
        </button>
      </div>

      {/* GSAP Scroller */}
      <div ref={wrapperRef} className="relative w-full max-w-[1216px] h-[330px] lg:h-[285px] overflow-hidden mt-10">
        <div ref={row1Ref} className="absolute top-0 left-0 flex flex-row items-center gap-6 w-max">
          {testimonials.map((t, i) => <TestimonialCard key={`t1-${i}`} {...t} />)}
          {testimonials.map((t, i) => <TestimonialCard key={`t2-${i}`} {...t} />)}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/80 via-transparent to-white/80" />
      </div>
    </section>
  );
};
