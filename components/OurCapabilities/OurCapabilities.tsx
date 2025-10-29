"use client"

import React from "react"
import CapabilityCard from "./CapabilityCard"
import { useInView } from "hooks/useInView"

// Define the image paths at the top for easy management
const platformIconPath = "/images/our-capabilities/plateformSection.png"
const omniChannelIconPath = "/images/our-capabilities/omni-channel.png"

const OurCapabilities: React.FC = () => {
  const capabilitiesData = [
    {
      title: "Platform Selection",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Omni-channel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Platform upgrades",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "CMS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Personalization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Search",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Commerce",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "DAM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Workflow Automation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Multisite Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Integrations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Headless Architecture",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Lowcode",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Security & Governance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
    {
      title: "Artificial intelligence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
    },
  ]

   const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the section is visible
  })

  return (
    <section ref={sectionRef} className="bg-black py-16 text-white">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-20">
          <h2  className={`text-4xl sm:text-5xl font-bold mb-4 lg:mb-0 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}>Our Capabilities</h2>
          <p className={`max-w-xl text-lg text-gray-300 text-right ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ${
            isInView ? "animate-when-visible animate-fade-in animation-delay-200" : "opacity-0"
          }`}>
          {capabilitiesData.map((capability, index) => (
            <CapabilityCard
              key={index}
              // Alternate between the two icons based on whether the index is even or odd
              iconSrc={index % 2 === 0 ? platformIconPath : omniChannelIconPath}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurCapabilities
