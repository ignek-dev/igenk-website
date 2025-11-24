"use client";
import Image from "next/image";
import { useState } from "react";

interface TechCardProps {
  icon: string;
  title: string;
  description: string;
  isSelected?: boolean
}

export default function TechCard({ icon, title, description, isSelected }: TechCardProps) {
  const [isActive, setIsActive] = useState(false);

 return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`group relative flex flex-col items-center justify-center text-center p-6 cursor-pointer bg-[#ffffff] overflow-hidden
            ${isSelected ? "border-2 border-purple-500" : "border border-gray-200"} 
            max-w-[374px] h-[320px] rounded-[12px] 
            transition-all duration-300 ease-in-out 
            hover:shadow-xl hover:-translate-y-2`}>
      
      {/* Center-out dark background overlay */}
      <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded-[12px]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="group">
  <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-lg bg-black group-hover:bg-white transition-all duration-300 ease-in-out">
    <Image src={icon} alt={title} width={95} height={95} className="transition-transform duration-300" />
  </div>
</div>


        <h3 className="  mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="p20 font-normal text-gray-600 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}
