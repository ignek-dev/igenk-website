// components/FlexiblePlatforms.tsx
"use client"
import Image from "next/image"
import React from "react"
// import PlatformCard from './PlatformCard';
import { useInView } from "hooks/useInView"

const platformsData = [
  {
    platformName: "Liferay",
    hoverDescription: (
      <p>
        Liferay is a <strong>Digital Experience Platform (DXP)</strong> that enables organizations to build and manage{" "}
        <strong>digital experiences across various channels</strong>. It provides tools for creating and managing
        websites, portals, intranets, and more. Liferay is known for its{" "}
        <strong>flexibility, scalability, and open-source</strong> nature.
      </p>
    ),
  },
]

const FlexiblePlatforms = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#F9FAF7] py-20 text-black lg:py-16">
      <div className="global-container grid items-start gap-12 lg:grid-cols-2">
        {/* Left Column: Title and Description */}
        <div
          className={`transition-all duration-[1500ms] ease-out ${
            isInView
              ? "animate-when-visible animate-slide-left animation-delay-200 translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <h2 className="">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>
          <p className="mt-6 p18 text-gray-600">
            We specialize in Liferay DXP framework development, offering expert Liferay Consulting, Liferay Implementation, and Liferay Portal Development Services that help enterprises create connected, scalable, and high-performing digital ecosystems built for the future. Our team ensures seamless integration, optimized performance, and personalized user experiences that accelerate digital transformation and business growth.
          </p>
        </div>

        <div
          className={`group relative min-h-[646px] w-full overflow-hidden rounded-[20px] transition-all duration-[1500ms] ease-out ${
            isInView
              ? "animate-when-visible animate-slide-right animation-delay-200 translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          {/* 1. Background Image */}
          <Image
            src="/images/liferay_image.webp"
            alt="Liferay Digital Experience Platform"
            layout="fill"
            objectFit="cover"
            className="transition-transform w-full duration-500 group-hover:scale-105"
          />

          {/* 2. Bottom Shadow Effect */}
          <div className="absolute right-0 bottom-0 left-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />

          {/* 3. Text Overlay (Visible on Hover) */}
          <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-10">
            <h3 className="text-4xl font-bold">{platformsData[0]?.platformName}</h3>
            <div className="mt-4 max-w-2xl p18 leading-relaxed text-gray-200">
              {platformsData[0]?.hoverDescription}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlexiblePlatforms
