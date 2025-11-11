"use client";
import Image from "next/image";
import { useState } from "react";

interface TechCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function TechCard({ icon, title, description }: TechCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`flex flex-col items-center justify-center text-center p-6 cursor-pointer bg-[#ffffff]
            ${isActive ? "border-2 border-purple-500" : "border border-gray-200 hover:border-purple-300"} w-[340px] h-[320px] rounded-[12px]`}>
      <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-lg bg-black text-white">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
