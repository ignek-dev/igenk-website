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
      className={`flex flex-col items-center justify-center text-center p-6 cursor-pointer bg-[#ffffff]
            ${isSelected ? "border-2 border-purple-500" : "border border-gray-200 hover:border-purple-300"} max-w-[374px] h-[320px] rounded-[12px]`}>
      <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-lg bg-black text-white">
        <Image src={icon} alt={title} width={96} height={96} />
      </div>

      <h3 className="text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-xl font-normal">{description}</p>
    </div>
  );
}
