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
      className={`group relative flex flex-col items-center justify-center text-center p-6 cursor-pointer bg-[#ffffff] overflow-hidden
            
            max-w-[374px] h-[320px] rounded-[12px] 
            transition-all duration-300 ease-in-out 
            hover:shadow-xl hover:-translate-y-2`}>

      {/* Dark background overlay */}
      <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded-[12px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* ICON SWITCH ON HOVER */}
        <div className="flex items-center justify-center w-[95px] h-[95px] mb-4 rounded-lg bg-black group-hover:bg-white transition-all duration-300 ease-in-out">
          {/* Default (white icon) */}
          <Image
            src={iconWhite}
            alt={title}
            width={53}
            height={53}
            className="transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Blue icon on hover */}
          <Image
            src={iconBlue}
            alt={title}
            width={53}
            height={53}
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Text */}
        <h3 className="text-[1.563vw]!  mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="p20 font-normal text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

      </div>
    </div>
  );
}
