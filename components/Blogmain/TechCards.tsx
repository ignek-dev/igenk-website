"use client";
import Image from "next/image";
import { useState } from "react";

interface TechCardProps {
  iconWhite: string;
  iconBlue: string;
  title: string;
  description: string;
  isSelected?: boolean;
}

export default function TechCard({ iconWhite, iconBlue, title, description, isSelected }: TechCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`group relative flex flex-col items-center justify-center text-center p-[2.604vw] cursor-pointer bg-[#ffffff] overflow-hidden
            
            /* MOBILE / TABLET DEFAULTS */
            w-full h-auto min-h-[280px] rounded-xl p-6
            
            /* DESKTOP (LG) OVERRIDES (Your original styles) */
            lg:max-w-[374px] lg:h-[320px] lg:rounded-[12px] lg:p-[2.604vw]
            
            transition-all duration-300 ease-in-out 
            hover:shadow-xl hover:-translate-y-2`}>

      {/* Dark background overlay */}
      <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded-xl lg:rounded-[12px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ICON SWITCH ON HOVER */}
        <div className="flex items-center justify-center mb-4 rounded-lg bg-black group-hover:bg-white transition-all duration-300 ease-in-out
          w-20 h-20 
          lg:w-[95px] lg:h-[95px]">
          {/* Default (white icon) */}
          <Image
            src={iconWhite}
            alt={title}
            width={53}
            height={53}
            className="w-10 h-10 lg:w-[53px] lg:h-[53px] transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Blue icon on hover */}
          <Image
            src={iconBlue}
            alt={title}
            width={53}
            height={53}
            className="absolute w-10 h-10 lg:w-[53px] lg:h-[53px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Text */}
        <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-white transition-colors duration-300
          text-xl 
          lg:text-[1.563vw]!">
          {title}
        </h3>

        <p className="font-normal text-gray-600 group-hover:text-gray-300 transition-colors duration-300
          text-sm 
          lg:p20">
          {description}
        </p>

      </div>
    </div>
  );
}
