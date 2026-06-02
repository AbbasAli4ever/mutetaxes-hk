import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";


interface TestimonialCardProps {
  stars: string;
  text: string;
  name: string;
  handle: string; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  text,
  name,
  handle,
}) => {
  return (
    <div className="relative w-[83vw] h-[-webkit-fill-available] rounded-lg sm:w-[420px] border border-[#DDDDF8] bg-[#F4F4FE] shadow-lg flex flex-col justify-between">
      {/* Inner content */}
    <div className="relative z-10 flex flex-col flex-1 p-4 sm:p-5 pb-0 overflow-hidden">
        {/* Stars */}
            <Image className="w-full " alt="Stars" src={stars} width={120} height={24} />

        {/* Text - scrollable if too long */}
        <p className="text-sm text-[#595960] font-inter flex-1 overflow-y-auto pt-2 pr-1">
          {text}
        </p>
      </div>

      {/* Avatar and name - fixed at bottom */}
      <div className="relative z-10 flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 mt-auto  border-[#2a2a3a]/50">
        <Avatar className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex-shrink-0">
          <AvatarImage src="/profile.png" alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col min-w-0 flex-1">
          <div className="text-sm sm:text-xs font-medium text-[#595960] truncate">
            {name}
          </div>
          <div className="text-xs sm:text-sm text-[#595960] truncate">{handle}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
