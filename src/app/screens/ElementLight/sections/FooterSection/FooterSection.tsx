"use client";
import { MailIcon, PhoneIcon } from "lucide-react";
import { openWhatsAppWithUtm } from "../../../../lib/whatsapp";
import Image from "next/image";

const WA_NUMBERS = ["447848102776", "447445609826", "17869274708"];

const achievements = ["2500+ Successful Setups", "€100M+ Processed Monthly", "4 Years of Excellence", "24/7 Support Guarantee"];

export const FooterSection = () => {
  return (
    <footer className="relative flex flex-col w-full pt-[49px] pb-12 px-4 xl:px-36 bg-black">
      <div className="relative z-10 flex flex-col w-full gap-8">
        <div className="flex flex-col p-2 md:p-8 w-full gap-10 lg:flex-row lg:gap-12 max-w-[1152px] mx-auto">
          <div className="flex flex-col w-full lg:w-[520px] gap-4">
            <Image className="w-[160px] lg:w-[214px] h-auto" alt="MuteTaxes Logo" src="/logo-w.png" width={800} height={600} />
            <p className="font-normal text-[#A1A1AA] text-base lg:text-lg leading-6 lg:leading-7">Your Gateway to Global eCommerce</p>
            <div className="flex flex-col gap-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm text-green-400">✅</span>
                  <span className="text-[#FAFAFA] text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[520px] gap-4">
            <h4 className="text-[#FAFAFA] text-lg lg:text-xl">Get In Touch</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-[#A1A1AA]" />
                <span className="text-[#A1A1AA] text-sm lg:text-base">info@MuteTaxes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#A1A1AA]" />
                <a onClick={() => openWhatsAppWithUtm(WA_NUMBERS, "mutetaxes-hk")} style={{ cursor: "pointer" }} className="text-[#A1A1AA] hover:text-[#1544ea] transition-colors text-sm lg:text-base">
                  WhatsApp: +44 7848 102776
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 w-full border-t border-[#9767e433]">
          <p className="text-center text-[#A1A1AA] text-xs lg:text-sm">© 2026 MuteTaxes. Turning payment problems into profit opportunities.</p>
        </div>
      </div>
    </footer>
  );
};
