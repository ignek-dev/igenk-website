"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import CapabilityCard from "./CapabilityCard"

// Define the image paths at the top for easy management
const defaultIcon = "/images/our-capabilities/omni-channel.svg"

const OurCapabilities: React.FC = () => {
 const capabilitiesData = [
    {
      iconSrc: "/images/our-capabilities/platform-selection.svg",
      title: "Platform Selection",
      description: "Choose the right Liferay platform to achieve scalable digital transformation goals.",
    },
    {
      iconSrc: "/images/our-capabilities/omni-channel.svg",
      title: "Omni-channel",
      description: "Deliver seamless, consistent experiences across web, mobile, and digital platforms.",
    },
    {
      iconSrc: "/images/our-capabilities/platform-upgrade.svg",
      title: "Platform upgrades",
      description: "Upgrade to the latest Liferay DXP for enhanced performance and security.",
    },
    {
      iconSrc: "/images/our-capabilities/cms.svg",
      title: "CMS",
      description: "Empower content teams with flexible, easy-to-manage Liferay CMS solutions.",
    },
    {
      iconSrc: "/images/our-capabilities/personalization.svg",
      title: "Personalization",
      description: "Engage users with behavior-based, contextual, and data-driven personalized experiences.",
    },
    {
      iconSrc: "/images/our-capabilities/search.svg",
      title: "Search",
      description: "Enhance content discovery and user experience with advanced Liferay search.",
    },
    {
      iconSrc: "/images/our-capabilities/commerce.svg",
      title: "Commerce",
      description: "Build seamless, integrated Liferay Commerce experiences for digital shopping journeys.",
    },
    {
      iconSrc: "/images/our-capabilities/dam.svg",
      title: "DAM",
      description: "Manage and distribute digital assets efficiently with Liferay DAM.",
    },
    {
      iconSrc: "/images/our-capabilities/workflow-automation.svg",
      title: "Workflow Automation",
      description: "Automate processes, improve governance, and boost efficiency using Liferay workflows.",
    },
    {
      iconSrc: "/images/our-capabilities/multisite-management.svg",
      title: "Multisite Management",
      description: "Control multiple sites easily with centralized Liferay platform management.",
    },
    {
      iconSrc: "/images/our-capabilities/integrations.svg",
      title: "Integrations",
      description: "Connect enterprise systems and tools seamlessly with Liferay DXP.",
    },
    {
      iconSrc: "/images/our-capabilities/headless-architecture.svg",
      title: "Headless Architecture",
      description: "Deliver flexible, API-driven experiences through Liferay headless architecture.",
    },
    {
      iconSrc: "/images/our-capabilities/lowcode.svg",
      title: "Lowcode",
      description: "Develop faster with Liferay low-code tools and simplified workflows.",
    },
    {
      iconSrc: "/images/our-capabilities/security-governance.svg",
      title: "Security & Governance",
      description: "Ensure enterprise-grade data protection, compliance, and secure Liferay environments.",
    },
    {
      iconSrc: "/images/our-capabilities/artificial-intelligence.svg",
      title: "Artificial intelligence",
      description: "Leverage AI insights to personalize experiences and automate smarter decisions.",
    },
  ]

  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the section is visible
  })

  return (
    <section ref={sectionRef} className="bg-black py-[3.333vw] text-white pb-10">
      <div className="w-full global-container">
        {/* Header Section */}
        <div className="mb-[5.052vw] flex flex-col lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className={`mb-4 lg:mb-0 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            Our Capabilities
          </h2>
          <p
            className={`max-w-3xl text-right p18 text-gray-300 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}
          >
            We build flexible platforms and scalable digital experiences using Liferay DXP, empowering enterprises with agility, performance, and future-ready digital growth.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div
          className={`grid grid-cols-1 gap-x-[7.708vw] gap-y-[5.729vw] md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "animate-when-visible animate-fade-in animation-delay-200" : "opacity-0"
          }`}
        >
          {capabilitiesData.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              iconSrc={capability.iconSrc ?? defaultIcon}
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
