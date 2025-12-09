// components/FlexiblePlatforms.tsx
"use client"
import Image from "next/image"
import React from "react"
// import PlatformCard from './PlatformCard';
import { useInView } from "hooks/useInView"
import { flexiblePlatforms } from "data/homepage-content"


const FlexiblePlatforms = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#F9FAF7] text-black py-[3.333vw]">
      <div className="global-container grid items-start gap-[3.073vw] lg:grid-cols-[29.479vw_auto]">
        {/* Left Column: Title and Description */}
        <div
          className={`transition-all duration-[1500ms] ease-out ${
            isInView
              ? "animate-when-visible animate-slide-left animation-delay-200 translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <h2 className="">
            {flexiblePlatforms.titleLine1}
            <span className="block">{flexiblePlatforms.titleLine2}</span>
            <span className="text-[#00979E]">{flexiblePlatforms.titleteal}</span>
          </h2>
          <p className="mt-[0.833vw] p18 text-gray-600">
            {flexiblePlatforms.description}
          </p>
        </div>

        <div
          className={`group relative min-h-[33.646vw] w-[47.292vw] overflow-hidden rounded-[20px] transition-all duration-[1500ms] ease-out ${
            isInView
              ? "animate-when-visible animate-slide-right animation-delay-200 translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          {/* 1. Background Image */}
          <Image
            src={flexiblePlatforms.image}
            alt="Liferay Digital Experience Platform"
            layout="fill"
            objectFit="cover"
            className="transition-transform w-full duration-500 group-hover:scale-105"
          />

          {/* 2. Bottom Shadow Effect */}
          <div className="absolute right-0 bottom-0 left-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />

          {/* 3. Text Overlay (Visible on Hover) */}
          <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-10">
            <h3 className="text-4xl font-bold">{flexiblePlatforms?.platforms?.[0]?.platformName}</h3>
            <div className="mt-[0.833vw] max-w-2xl p18 leading-relaxed text-gray-200">
              {flexiblePlatforms?.platforms?.[0]?.hoverDescription}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlexiblePlatforms
