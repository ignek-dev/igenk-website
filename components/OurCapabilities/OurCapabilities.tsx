"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import CapabilityCard from "./CapabilityCard"
import { capabilitiesData } from "data/homepage-content"

// Define the image paths at the top for easy management
const defaultIcon = "/images/our-capabilities/omni-channel.svg"

const OurCapabilities: React.FC = () => {


  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the section is visible
  })

  return (
    <section ref={sectionRef} className="bg-black py-[46px] lg:py-[3.333vw] text-white">
      <div className="w-full global-container">
        {/* Header Section */}
        <div className="mb-[5.052vw] flex flex-col lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className={`mb-4 lg:mb-0 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            {capabilitiesData.capabilitiesHeading}
          </h2>
          <p
            className={`max-w-3xl text-left lg:text-right text-p16 md:text-p18 lg:text-p18 text-gray-300 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            {capabilitiesData.capabilitiesSubtext}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div
          className={`grid grid-cols-1 gap-x-[7.708vw] gap-y-[5.729vw] md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "animate-when-visible animate-fade-in animation-delay-200" : "opacity-0"
          }`}
        >
          {capabilitiesData?.capabilities?.map((item, index) => (
            <CapabilityCard
              key={index}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurCapabilities
