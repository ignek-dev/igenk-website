"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import CapabilityCard from "./CapabilityCard"

// Define the image paths at the top for easy management
const platformIconPath = "/images/our-capabilities/plateformSection.png"
const omniChannelIconPath = "/images/our-capabilities/omni-channel.png"

const OurCapabilities: React.FC = () => {
  const capabilitiesData = [
    {
      title: "Platform Selection",
      description: "Choose the right Liferay platform to achieve scalable digital transformation goals.",
    },
    {
      title: "Omni-channel",
      description: "Deliver seamless, consistent experiences across web, mobile, and digital platforms.",
    },
    {
      title: "Platform upgrades",
      description: "Upgrade to the latest Liferay DXP for enhanced performance and security.",
    },
    {
      title: "CMS",
      description: "Empower content teams with flexible, easy-to-manage Liferay CMS solutions.",
    },
    {
      title: "Personalization",
      description: "Engage users with behavior-based, contextual, and data-driven personalized experiences.",
    },
    {
      title: "Search",
      description: "Enhance content discovery and user experience with advanced Liferay search.",
    },
    {
      title: "Commerce",
      description: "Build seamless, integrated Liferay Commerce experiences for digital shopping journeys.",
    },
    {
      title: "DAM",
      description: "Manage and distribute digital assets efficiently with Liferay DAM.",
    },
    {
      title: "Workflow Automation",
      description: "Automate processes, improve governance, and boost efficiency using Liferay workflows.",
    },
    {
      title: "Multisite Management",
      description: "Control multiple sites easily with centralized Liferay platform management.",
    },
    {
      title: "Integrations",
      description: "Connect enterprise systems and tools seamlessly with Liferay DXP.",
    },
    {
      title: "Headless Architecture",
      description: "Deliver flexible, API-driven experiences through Liferay headless architecture.",
    },
    {
      title: "Lowcode",
      description: "Develop faster with Liferay low-code tools and simplified workflows.",
    },
    {
      title: "Security & Governance",
      description: "Ensure enterprise-grade data protection, compliance, and secure Liferay environments.",
    },
    {
      title: "Artificial intelligence",
      description: "Leverage AI insights to personalize experiences and automate smarter decisions.",
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
        <div className="mb-12 flex flex-col lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className={`mb-4 text-4xl font-bold sm:text-5xl lg:mb-0 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            Our Capabilities
          </h2>
          <p
            className={`max-w-xl text-right text-lg text-gray-300 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            We build flexible platforms and scalable digital experiences using Liferay DXP, empowering enterprises with agility, performance, and future-ready digital growth.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "animate-when-visible animate-fade-in animation-delay-200" : "opacity-0"
          }`}
        >
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
