"use client"
import Image from "next/image"
import React, { useState } from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import EngagementModels from "components/Common/EngagementModels"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import WordsFromCEO from "components/Common/WordsFromCEO"
import {
  caseStudies,
  consultingServices,
  endToEndServices,
  expertiseStats,
  industriesWeServe,
  LiferayConsultationData,
  LiferayConsultationSubContent,
  LiferayConsultationTitle1,
  LiferayConsultationTitle2,
  liferayProjectFeatures,
  liferaySolutions,
} from "data/liferay-consulting-and-implementation-services"
import { useInView } from "hooks/useInView"

export default function LiferayConsultationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [activeServiceTab, setActiveServiceTab] = useState("Portal")
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  console.log(hoveredIndustry)

  // State for the new End-to-End Liferay Consulting Services section
  const [activePillar, setActivePillar] = useState(0) // 0-indexed for Analysis

  const liferayConsultingTabs = ["Portal", "Enterprise CRM", "Collaboration & social", "E- Commerce"]

  const portalServices = [
    "Simplified UI Development",
    "Flexible Enterprise Integration Framework",
    "Out-of-the-box Tools",
    "Secure Single Sign On (SSO)",
    "Custom Fields",
    "Rules Engine Integration",
    "User Groups, Organizations and Sites",
    "Headless Support",
    "SOA Framework",
    "User Personalization",
    "Multi-Tenancy Support",
    "Built-in Customization Features",
    "Role Based Content Delivery",
    "Single-Click Configuration",
    "Dynamic Drag & Drop",
    "Workflow Framework",
    "User-Driven Workflow & Approval",
    "Auditing & Performance Monitoring",
    "Working from Your Desktop with Liferay Sync",
    "Search & Tagging",
    "Multi-language Support",
    "OpenSocial",
  ]
  const EnterpriseServices = [
    "Web Publishing",
    "Unified Documents & Media",
    "Mounting Multiple Content Repositories",
    "User Defined Content Categories Asset Publisher",
    "Workspace Publishing",
    "Easy Rich Text Editors",
    "Web Content Structures and Templates",
    "Template/Structure Comments",
    "Integration with Microsoft Office®",
    "One-Click Page Creation",
    "Quick Site Creation",
    "User-Driven Workflow & Approval",
    "Live Page Editing and Scheduling",
    "Staging and Easy Website Planning",
    "Document Conversion and Multi-File Uploads",
    "Drag-and-Drop Site Maps",
    "Faceted Search",
    "Multi-Tier Search",
    "Dynamic Tagging",
    "Search Engine Optimization (SEO)",
    "Easy Integration",
    "Dynamic Virtual Hosting and Vanity URL",
    "Multi-Language Support",
    "Customisable Pages",
  ]
  const CollaborationServices = [
    "KnowledgeBase",
    "Wikis",
    "Message Boards",
    "Blogs",
    "RSS",
    "Activity Tracking",
    "Instant Message",
    "Email",
    "Shared Calendar",
    "Tags & Categories",
    "Announcements & Alerts",
    "Dynamic Data Lists",
    "Polls",
    "Social Equity",
  ]
  const CommerceServices = [
    "E-commerce Solution",
    "Intuitive Online Storefront",
    "Seamless Product Management",
    "Flexible Pricing and Promotion Options",
    "Integrated Payment Gateways",
    "Customizable Shopping Cart",
    "Order Management System",
    "CRM Integration",
    "Customer Support and Assistance",
    "Scalable Architecture for Growing Businesses",
    "Customizable Themes and Templates",
    "Personalized Shopping Experience",
    "Multi-channel Selling Support",
    "Dynamic Product Recommendations",
    "Real-time Inventory Management",
    "Secure Checkout Process",
    "Mobile Commerce Compatibility",
    "Customer Reviews and Ratings",
    "Analytics and Reporting Tools",
    "Responsive Design for Any Device",
    "Integration with Social Media Platforms",
    "SEO Optimization Features",
  ]

  const liferayConsultingServicesData: Record<string, string[]> = {
    Portal: portalServices,
    "Enterprise CRM": EnterpriseServices,
    "Collaboration & social": CollaborationServices,
    "E- Commerce": CommerceServices,
  }



  // Data for the new End-to-End Liferay Consulting Services section


  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-[#0B63CE] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-40 pb-16 md:px-8 md:pt-48 md:pb-20 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5">
            {/* Left Side: Text Content */}
            <div className="col-span-3">
              <div className="inline-flex w-fit items-center rounded-full border border-white px-8.5 py-[8.8px] text-lg font-normal">
                Liferay Services
              </div>
              <h1 className="line-height-[88px] letter-spacing-[-0.02em] mt-13 text-7xl leading-tight font-bold sm:text-5xl md:text-6xl [@media(min-width:1440px)]:text-5xl [@media(min-width:1800px)]:text-6xl">
                Liferay Consulting &
                <br />
                <span className="block">Implementation Services</span>
              </h1>
              <p className="line-height-[28px] mt-10 max-w-xl text-lg font-normal">
                Optimize your digital ecosystem through tailored Liferay Consulting for seamless implementation,
                customization, and dedicated support.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="flex items-center justify-center md:col-span-2">
              <Image
                src="/images/liferay-pages-image/liferay-consultation-page/Liferay-dxp.png"
                alt="Liferay DXP"
                width={280}
                height={280}
                className="h-auto max-w-sm"
              />
            </div>
          </div>

          {/* Marquee Animation Bar */}
          <div className="relative flex w-full overflow-hidden pt-22">
            <div className="animate-marquee-fast flex min-w-full flex-shrink-0 items-center justify-around">
              {expertiseStats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="mx-8 text-xl font-medium">{stat}</span>
                  <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                </React.Fragment>
              ))}
              {expertiseStats.map((stat, index) => (
                <React.Fragment key={`duplicate-${index}`}>
                  <span className="mx-8 text-xl font-medium">{stat}</span>
                  <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Edge Section */}
      <section className="bg-[#F9FAFB] py-[64px]">
        <div className="mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Left Content */}
          <div className="flex flex-1 flex-col justify-between gap-25">
            {/* Stats Row */}
            <div className="flex-no-wrap grid-cols-2 items-center gap-20 [@media(min-width:1440px)]:grid [@media(min-width:1800px)]:flex">
              {/* Stat 1 */}
              <div className="flex gap-3">
                <p className="text-5xl font-bold text-gray-900">30%</p>
                <p className="text-lg leading-tight text-gray-600">
                   Project Success
                </p>
              </div>
              {/* Stat 2 */}
              <div className="flex gap-3">
                <p className="text-5xl font-bold text-gray-900">20%</p>
                <p className="text-lg leading-tight whitespace-nowrap text-gray-600">
                  Cost Efficiency
                </p>
              </div>
              {/* Stat 3 */}
              <div className="flex gap-3">
                <p className="text-5xl font-bold text-gray-900">10%</p>
                <p className="text-lg leading-tight text-gray-600">
                  Revenue Growth
                </p>
              </div>
              
            </div>
            

            {/* Heading and Description Block - Positioned below with a top margin */}
            <div className="mt-24">
              <h2 className="text-[40px] leading-[52px] font-bold text-gray-900">
                Your Digital Edge for Transformation Always Evolving with Liferay Consulting
              </h2>
              <p className="mt-6 max-w-[500px] text-[16px] leading-[26px] text-gray-600">
               Simplifying complexity and driving transformation with expert Liferay Consulting services.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex flex-1 items-center justify-center">
            {/* RGB Glow Background */}
            <div className="absolute bottom-0 h-full w-[600px] opacity-80">
              <Image
                src="/images/liferay-pages-image/rgb-radiant.png"
                alt="Glow background"
                fill
                objectFit="contain"
                className="scale-147 [@media(min-width:1440px)]:scale-152 [@media(min-width:1500px)]:scale-147"
                sizes="600px"
              />
            </div>

            {/* Tablet Image*/}
            <Image
              src="/images/liferay-pages-image/tablet-image.png"
              alt="Tablet Preview"
              width={500}
              height={500}
              objectFit="contain"
              className="relative z-10 h-auto w-[500px] scale-125 [@media(min-width:1440px)]:scale-129 [@media(min-width:1500px)]:scale-125"
              style={{ minWidth: "650px", marginTop: "-60px", marginBottom: "17px" }}
            />
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Left Column */}
            <div className="max-w-[520px] flex-1 space-y-[26px] pt-[4px] md:sticky md:top-24">
              <h1 className="text-5xl leading-[64px] font-bold tracking-[-0.02em] text-white">
                Our Liferay
                <span className="block">Consulting Services</span>
              </h1>
              <p className="max-w-[520px] text-[18px] leading-[28px] text-[#D1D5DB]">
                Our Liferay Consulting Services help you maximize the potential of the Liferay platform. From
                development to support, we’re here to ensure you create top-notch digital experiences for your users.
              </p>
              <div className="pt-[26px]">
                <ScheduleMeetingButton isFullWidth={false} btnName="Schedule Meeting" />
              </div>
            </div>

            {/* Right Column - Card Stack */}
            <div className="relative flex flex-1 flex-col items-end">
              <div className="relative w-full max-w-[883px]">
                {consultingServices.map((item, index) => {
                  const [ref, isInView] = useInView({ triggerOnce: true })

                  return (
                    <div
                      ref={ref as React.RefObject<HTMLDivElement>}
                      key={index}
                      className={`sticky mb-16 transition-opacity duration-500 ${
                        isInView ? "animate-stack-in" : "opacity-0"
                      }`}
                      style={{ top: `calc(6rem + ${index * 4}rem)` }}
                    >
                      <div className="flex w-full flex-col justify-center rounded-2xl border border-gray-700 bg-[#0C0C0C] p-9 pt-6 backdrop-blur-md transition-all duration-300 hover:border-[#00AEEF] md:min-h-[196px]">
                        <h3 className="mb-3 text-2xl leading-tight font-semibold text-white">{item.title}</h3>
                        <div className="mb-4 h-[1px] bg-gray-700" />
                        <p className="text-lg leading-relaxed text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liferay Solutions */}
      <section className="bg-white py-[64px]">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-bold tracking-tight text-black">
                We Provide Top-Notch
                <span className="block">Liferay Solutions</span>
              </h2>
            </div>
            <div className="flex h-full items-end">
              <p className="text-xl leading-relaxed text-gray-500 md:text-right">
                We deliver top-quality Liferay Consulting Services. From setup to support, we’ve got you covered for all
                your digital needs.
              </p>
            </div>
          </div>

          {/* Solution Cards Grid */}
          <div className="mt-16 flex flex-col gap-8 lg:flex-row">
            {liferaySolutions.map((solution) => {
              const isHovered = hoveredCard === solution.id
              const isDefaultPrimary = hoveredCard === null && solution.id === "Liferay DXP"
              const isCurrentPrimary = isHovered || isDefaultPrimary

              return (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-[340px] items-center rounded-lg p-8 transition-all duration-300 ease-in-out ${
                    isCurrentPrimary
                      ? "w-full flex-grow-[2] basis-0 flex-row justify-between gap-8 bg-[#0B63CE] text-white [@media(min-width:1440px)]:flex-grow-[3] [@media(min-width:1800px)]:flex-grow-[2]"
                      : "w-full flex-grow basis-0 flex-col justify-center border border-gray-200 bg-white text-gray-800 shadow-sm"
                  } `}
                >
                  {isCurrentPrimary ? (
                    // Layout for the active (primary) card
                    <>
                      <div className="text-left">
                        <h3 className="text-3xl font-semibold">{solution.title}</h3>
                        <hr className="my-4 max-w-[120px] border-t border-white/50" />
                        <p className="text-base leading-relaxed">{solution.description}</p>
                      </div>
                      <Image
                        src={solution.icon}
                        alt={`${solution.title} icon`}
                        width={112}
                        height={112}
                        className="h-28 w-28 flex-shrink-0 object-contain transition-all duration-300 ease-in-out"
                      />
                    </>
                  ) : (
                    // Layout for inactive cards
                    <>
                      <Image
                        src={solution.icon}
                        alt={`${solution.title} icon`}
                        width={120}
                        height={120}
                        className="h-30 w-30 object-contain transition-all duration-300 ease-in-out"
                      />
                      <h3 className="mt-6 text-center text-xl font-semibold">{solution.title}</h3>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Liferay Can Be Best Choice For Your Project ? */}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-5xl leading-tight font-bold tracking-tight md:whitespace-pre">
              Why Liferay Can Be Best Choice For Your Project ?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Explore our expertise in Liferay! We’re experienced and ready to help with everything, from building
              user-friendly interfaces to managing backend systems. Whether you need a custom portal, smooth
              integration, or ongoing support, we’ve got you covered. Partner with us today and make the most of Liferay
              for your business.
            </p>
          </div>

          {/* Features List */}
          <div className="mt-9.5">
            {liferayProjectFeatures.map((feature) => (
              <div key={feature.title}>
                <div className="flex flex-col items-start py-[57px] md:flex-row md:items-center md:gap-24">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image src={feature.icon} alt="" width={64} height={64} className="h-16 w-16" />
                  </div>

                  {/* Title */}
                  <div className="w-full flex-shrink-0 md:w-[235px]">
                    <h3 className="text-3xl font-semibold">{feature.title}</h3>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-white">{feature.description}</p>
                  </div>
                </div>
                {/* Divider */}
                <hr className="border-t border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-white py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="letter-spacing-[-0.02em] line-height-[60px] text-5xl leading-tight font-semibold text-black">
                Industries We Serve
              </h2>
            </div>
            <div className="flex h-full items-end justify-end">
              <p className="line-height-[30px] w-full text-right text-xl font-normal text-gray-600">
                We help every industry grow digitally through tailored Liferay Consulting and innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Industries List */}
          <div>
            {industriesWeServe.map((industry) => (
              <div
                key={industry.id}
                onMouseEnter={() => setHoveredIndustry(industry.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className={`group relative flex cursor-pointer items-center border-b border-gray-200 py-10 transition-colors duration-300 hover:bg-[#0B63CE] [@media(min-width:1440px)]:px-4 [@media(min-width:1800px)]:px-10`}
              >
                {/* Column 1: Title */}
                <div className="w-1/3 flex-shrink-0">
                  <h3 className="line-height-[36px] text-3xl font-semibold text-black transition-colors duration-300 group-hover:text-white">
                    {industry.title}
                  </h3>
                </div>

                {/* Column 2: Description */}
                <div className="flex-1 pr-8">
                  <p className="text-rgb(0, 0, 0, 0.85) line-height-[30px] max-h-[60px] max-w-[450px] text-lg transition-colors duration-300 group-hover:text-white/80">
                    {industry.description}
                  </p>
                  <div
                    className={`absolute top-1/2 z-10 w-[180px] -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-100 [@media(min-width:1440px)]:right-30 [@media(min-width:1800px)]:right-65`}
                  >
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={190}
                      height={140}
                      objectFit="cover"
                      className="h-[140px] w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:-rotate-10"
                    />
                  </div>
                </div>

                {/* Column 3: Image & Icon Container */}
                <div className="relative right-3 flex flex-shrink-0 items-center">
                  {/* Image (conditionally visible) */}

                  {/* Arrow Icon */}
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-white group-hover:bg-white`}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black transition-colors duration-300 group-hover:text-[#0B63CE]"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Liferay Consulting Services Section */}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-end gap-8 pb-16 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-bold tracking-tight">
                Our Liferay
                <span className="block">Consulting Services</span>
              </h2>
            </div>
            <div className="flex h-full items-end justify-end">
              <p className="w-full text-right text-xl text-white/80">
                Through expert Liferay Consulting, we design and implement secure, flexible, and user-centric digital platforms for every business need.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-10 flex items-center justify-center gap-4">
            {liferayConsultingTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveServiceTab(tab)}
                className={`flex-1 cursor-pointer rounded-full px-8 py-4 text-center text-2xl font-medium transition-colors duration-300 md:whitespace-pre ${
                  activeServiceTab === tab
                    ? "border border-blue-600 bg-blue-600 text-white"
                    : "border border-white text-white hover:border-blue-600 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {liferayConsultingServicesData[activeServiceTab]?.map((service: string, index: number) => (
              <div key={index} className="border-b border-gray-700 px-6">
                <div className="flex items-start gap-4 py-[40px]">
                  <Image
                    src="/images/liferay-pages-image/liferay-consultation-page/checkmark-icon.svg"
                    alt="Checkmark icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-shrink-0"
                  />
                  <p className="text-2xl font-medium [@media(min-width:1440px)]:text-xl [@media(min-width:1800px)]:text-2xl">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: End-to-End Liferay Consulting Services Section */}
      <section className="bg-[#F6F6F6] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl leading-tight font-semibold tracking-tight text-black">
              We Offer end-to-end Liferay Consulting Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Delivering complete Liferay Consulting solutions from planning to maintenance for seamless digital transformation and growth.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[1fr_3fr]">
            {/* Left Column: Numbered Service List */}
            <div className="flex flex-col">
              {endToEndServices.map((service, index) => (
                <div key={index} className="py-6">
                  <div
                    onMouseEnter={() => setActivePillar(index)}
                    className={`inline-block cursor-pointer border-b-1 transition-all duration-300 ${
                      activePillar === index
                        ? "border-black font-semibold text-black"
                        : "border-transparent text-gray-500 hover:text-black"
                    }`}
                  >
                    <span className="mr-4 text-2xl font-semibold">{service.number})</span>
                    <span className="text-2xl font-semibold">{service.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Interactive Pillars */}
            <div className="relative flex h-[500px] w-full items-start justify-between gap-5">
              {endToEndServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex h-full flex-col justify-between rounded-lg p-6 transition-all duration-300 ease-in-out ${
                    activePillar === index
                      ? "w-full flex-grow bg-[#0B63CE] text-white shadow-xl"
                      : "w-[20%] flex-grow-0 border border-[#E5E7EB] bg-white text-gray-400"
                  }`}
                >
                  {/* Rotated Number */}
                  <div className="h-16">
                    <span
                      className={`block w-min -rotate-90 transform text-5xl font-medium transition-colors duration-300 ${
                        activePillar === index ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Content for Active Pillar */}
                  {activePillar === index && (
                    <div className="pt-4">
                      <h3 className="min-w-[220px] text-3xl font-bold">{service.name}</h3>
                      <hr className="my-4 w-full border-t-2 border-white/50" />
                      <p className="text-base leading-relaxed">{service.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Words from CEO */}
      <WordsFromCEO />

      {/* Engagement Models Section */}
      <EngagementModels
        title={
          <>
            Our Liferay Consulting
            <span className="block">Services Engagement Models</span>
          </>
        }
        description="Engage with the Liferay-focused technology partner to get your simple & complex Liferay requirements implemented."
      />
      <section className="bg-white text-black"></section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake
        WhatMakeData={LiferayConsultationData}
        titleText1={LiferayConsultationTitle1}
        titleText2={LiferayConsultationTitle2}
        subContext={LiferayConsultationSubContent}
      />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
