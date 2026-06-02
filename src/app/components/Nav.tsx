"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { openWhatsAppWithUtm } from "../lib/whatsapp";

const Modal = dynamic(() => import("./ui/Modal").then(m => m.Modal), { ssr: false });

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const Nav = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const handleWhatsAppClick = () => {
    openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk");
  };
  return (
    <>
      <nav className="flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-[100px] py-3 w-full z-50 bg-[#ffffff0d] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MuteTaxes"
            className="w-[120px] sm:w-[160px] md:w-[180px] h-auto object-contain"
            width={180}
            height={50}
            priority
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="relative sm:gap-2 gap-1 overflow-hidden bg-[#1544ea] uppercase flex items-center justify-center px-3 sm:px-6 py-2 rounded-lg text-white font-medium text-[9px] sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1544ea]/80 active:scale-[0.97]"
          >
            <div className="absolute left-[-56px] bottom-[-35.98px] w-[98px] h-[70px] bg-[#D9D9D9] blur-[27px]"></div>
            <img src="/whatsapp-icon.svg" alt="icon" className="max-w-full h-auto" />
            Let Chat
          </button>
          <button
            onClick={() => setShowCalendly(true)}
            className="sm:block hidden relative overflow-hidden bg-[#212121] uppercase flex items-center justify-center px-3 sm:px-6 py-2 rounded-lg text-white font-medium text-[9px] sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#212121]/80 active:scale-[0.97]"
          >
            <div className="absolute right-[-67.5px] bottom-[-76px] w-[326px] h-[80px] rounded-[326px] bg-[#D9D9D9] blur-[27px]"></div>
            Book a Free Consultation!
          </button>
        </div>
      </nav>
      <Modal isOpen={showCalendly} onClose={() => setShowCalendly(false)}>
        <iframe
          src="https://calendly.com/d/cvs4-phh-xky/swiftnine-payments-booking"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="rounded-b-xl min-h-[700px] sm:min-h-[850px]"
        ></iframe>
      </Modal>
    </>
  );
};

export default Nav;
