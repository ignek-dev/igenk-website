"use client"
import Image from "next/image"
import React, { useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import EngagementModels from "components/Common/EngagementModels"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import WordsFromCEO from "components/Common/WordsFromCEO"
import {
  caseStudies,
  consultingServices,
  endToEndLiferayConsultingSection,
  endToEndServices,
  engagementModelsData,
  expertiseStats,
  industriesWeServe,
  industriesWeServeSection,
  LiferayConsultationData,
  LiferayConsultationSubContent,
  liferayconsultationTalk,
  LiferayConsultationTitle1,
  LiferayConsultationTitle2,
  liferayConsultingData,
  liferayConsultingServicesHeader,
  liferayConsultingServicesSection,
  liferayDigitalEdgeData,
  liferayHeroData,
  liferayProjectFeatures,
  liferaySolutions,
  liferaySolutionsSection,
  liferayWhyChooseSection,
} from "data/liferay-consulting-and-implementation-services"
import { useInView } from "hooks/useInView"

export default function LiferayConsultationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  // const [activeServiceTab, setActiveServiceTab] = useState("Portal")
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  console.log(hoveredIndustry)

  // State for the new End-to-End Liferay Consulting Services section
  const [activePillar, setActivePillar] = useState(0) // 0-indexed for Analysis

  const tabs = liferayConsultingData.map((item) => item.label)

  const [activeServiceTab, setActiveServiceTab] = useState(tabs[0])

  const activeServices = liferayConsultingData.find((item) => item.label === activeServiceTab)?.services || []

  const { heading, headingSpan, description, button } = liferayConsultingServicesSection

  const { title, titleSpan, descriptions } = liferaySolutionsSection

  const { sectionTitle, sectionDescription } = liferayWhyChooseSection

  // Data for the new End-to-End Liferay Consulting Services section

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#0B63CE] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container pt-32 pb-16 lg:pt-48 lg:pb-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
            {/* Left Side: Text Content */}
            <div className="text-left lg:col-span-3">
              {/* <div className="p18 banner-tab">{liferayHeroData.tag}</div> */}
              <h1 className="mt-[2.031vw]">
                {liferayHeroData.titleLine1}
                <br />
                <span className="block">{liferayHeroData.titleLine2}</span>
              </h1>
              <p className="text-p16 md:text-p18 mt-[2.813vw] max-w-xl">{liferayHeroData.description}</p>
            </div>

            {/* Right Side: Image */}
            <div className="hidden items-center justify-center lg:col-span-2 lg:flex">
              <Image
                src={liferayHeroData.image.src}
                alt={liferayHeroData.image.alt}
                width={280}
                height={280}
                className="max-w-sm lg:h-auto lg:w-auto"
              />
            </div>
          </div>

          {/* Marquee Animation Bar */}
          <div className="relative flex w-full overflow-hidden pt-22">
            <div className="animate-marquee-medium flex min-w-full flex-shrink-0 items-center justify-around">
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
      <section className="bg-[#F9FAFB] py-[64px] pb-0 text-white lg:py-[64px]">
        <div className="global-container">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="flex flex-1 flex-col justify-between gap-10 py-[64px]">
              {/* STATS (DYNAMIC) */}
              <div className="flex flex-wrap gap-8 md:gap-12 lg:flex-nowrap">
                {liferayDigitalEdgeData.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <p className="text-4xl font-bold text-[#171717] md:text-5xl">{stat.value}</p>

                    <p className="text-sm leading-tight text-gray-600 md:text-base">
                      {stat.isMultiLine
                        ? stat.label.split(" ").map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))
                        : stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* HEADING + DESCRIPTION (DYNAMIC) */}
              <div>
                <h2 className="text-3xl leading-tight font-semibold text-gray-900 md:text-4xl lg:text-5xl">
                  {liferayDigitalEdgeData.heading}
                </h2>

                <p className="mt-4 max-w-xl text-base text-gray-600 md:mt-6 md:text-lg">
                  {liferayDigitalEdgeData.description}
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex flex-1 items-end justify-center">
              {/* GLOW IMAGE */}
              <div className="pointer-events-none bottom-0 h-[320px] w-[320px] opacity-80 sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]">
                <Image
                  src={liferayDigitalEdgeData.images.glow.src}
                  alt={liferayDigitalEdgeData.images.glow.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="global-container">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Left Column */}
            <div className="top-[137px] max-w-[520px] flex-1 space-y-[26px] pt-[4px] md:sticky">
              <h2 className="text-white">
                {heading}
                <span className="block">{headingSpan}</span>
              </h2>
              <p className="p18 max-w-[520px] text-[#D1D5DB]">{description}</p>
              <div className="pt-[2 px]">
                {/* <ScheduleMeetingButton isFullWidth={button.isFullWidth} btnName={button.name} /> */}
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
                      style={{ top: `calc(8.5rem + ${index * 4}rem)` }}
                    >
                      <div className="glow-bg absolute inset-0 -z-10" />
                      <div className="flex w-full flex-col justify-center rounded-2xl border border-gray-700 bg-[#0C0C0C] p-9 pt-6 backdrop-blur-md transition-all duration-300 hover:border-[#00AEEF] md:min-h-[196px]">
                        <h4 className="mb-4 text-white">{item.title}</h4>
                        <div className="mb-4 h-[1px] bg-gray-700" />
                        <p className="p16 text-gray-300">{item.desc}</p>
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
      <section className="relative bg-white py-[64px]">
        <div className="global-container">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-black">
                {title}
                <span className="block">{titleSpan}</span>
              </h2>
            </div>
            <div className="flex h-full items-center justify-end">
              <p className="p18 text-right text-gray-500">{descriptions}</p>
            </div>
          </div>

          {/* Solution Cards Grid */}
          <div className="mt-[48px] flex flex-col gap-[1.7708vw] lg:flex-row">
            {liferaySolutions.map((solution) => {
              const isHovered = hoveredCard === solution.id
              const isDefaultPrimary = hoveredCard === null && solution.id === "Liferay DXP"
              const isCurrentPrimary = isHovered || isDefaultPrimary

              return (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-[340px] items-center rounded-lg p-10 transition-all duration-300 ease-in-out ${
                    isCurrentPrimary
                      ? "min-w-[35.8333vw] flex-grow-[2] basis-0 flex-row justify-between gap-[4.1667vw] bg-[#0B63CE] text-white [@media(min-width:1440px)]:flex-grow-[3] [@media(min-width:1800px)]:flex-grow-[2]"
                      : "w-full flex-grow basis-0 flex-col justify-center border border-gray-200 bg-white text-gray-800 shadow-sm"
                  } `}
                >
                  {isCurrentPrimary ? (
                    // Layout for the active (primary) card
                    <>
                      <div className="text-left">
                        <h4>{solution.title}</h4>
                        <hr className="my-7 border-t border-white/50" />
                        <p className="p18">{solution.description}</p>
                      </div>
                      <Image
                        src={solution.iconActive}
                        alt={`${solution.title} icon`}
                        width={112}
                        height={112}
                        className="h-[8.75vw] w-[8.75vw] flex-shrink-0 object-contain transition-all duration-300 ease-in-out"
                      />
                    </>
                  ) : (
                    // Layout for inactive cards
                    <>
                      <Image
                        src={solution.iconInactive}
                        alt={`${solution.title} icon`}
                        width={120}
                        height={120}
                        className="h-[8.75vw] w-[8.75vw] object-contain transition-all duration-300 ease-in-out"
                      />
                      <h4 className="mt-[44px] text-center">{solution.title}</h4>
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
        <div className="global-container">
          {/* Section Header */}
          <div className="w-full">
            <h2>{sectionTitle}</h2>
            <p className="p18 mt-7 text-white/80">{sectionDescription}</p>
          </div>

          {/* Features List */}
          <div className="mt-9.5">
            {liferayProjectFeatures.map((feature) => (
              <div key={feature.title}>
                <div className="flex flex-col items-start gap-[4.1667vw] py-[57px] md:flex-row md:items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Image src={feature.icon} alt="" width={64} height={64} className="h-16 w-16" />
                  </div>

                  {/* Title */}
                  <div className="w-full flex-shrink-0 md:w-[235px]">
                    <h4>{feature.title}</h4>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="p18 text-white">{feature.description}</p>
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
        <div className="global-container">
          {/* SECTION HEADER */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 md:items-end">
            <h2 className="text-black">{industriesWeServeSection.heading}</h2>

            <p className="p18 text-gray-600 md:text-right">{industriesWeServeSection.description}</p>
          </div>

          {/* INDUSTRIES LIST */}
         <div>
  {industriesWeServe.map((industry) => (
    <div
      key={industry.id}
      className="
        group relative
        flex flex-col items-start gap-4        /* 👈 mobile */
        border-b border-gray-200 py-6
        transition-colors duration-300

        md:flex-row md:items-center md:gap-8   /* 👈 original */
        md:px-4 md:hover:bg-[#0B63CE]
        xl:px-10
      "
    >
      {/* TITLE */}
      <div className="md:min-w-[220px]">
        <h4 className="text-black transition-colors duration-300 md:group-hover:text-white">
          {industry.title}
        </h4>
      </div>

      {/* DESCRIPTION + ARROW (mobile row) */}
      <div className="flex w-full items-center gap-4 md:flex-1">
        <p className="p19 flex-1 max-w-[450px] text-gray-700 transition-colors duration-300 md:group-hover:text-white/80">
          {industry.description}
        </p>

        {/* ARROW */}
        <div className="flex items-center md:ml-auto">
          <div className="
            flex h-9 w-9 items-center justify-center
            rounded-full border border-gray-400
            transition-all duration-300

            md:h-10 md:w-10
            md:group-hover:border-white
            md:group-hover:bg-white
          ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black md:group-hover:text-[#0B63CE]"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* HOVER IMAGE (DESKTOP ONLY — untouched) */}
      <div className="
        pointer-events-none absolute top-1/2 left-[55%]
        hidden h-[140px] w-[190px]
        -translate-y-1/2 opacity-0
        transition-all duration-300

        md:group-hover:block
        md:group-hover:translate-x-4
        md:group-hover:opacity-100
      ">
        <Image
          src={industry.image}
          alt={industry.title}
          width={190}
          height={140}
          className="rounded-lg shadow-lg transition-transform duration-300 md:group-hover:-rotate-6"
        />
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Our Liferay Consulting Services Section */}
      <section className="bg-black py-[64px] text-white">
        <div className="global-container">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-end gap-8 pb-16 md:grid-cols-2">
            <div>
              <h2>
                {liferayConsultingServicesHeader.headingLine1}
                <span className="block">{liferayConsultingServicesHeader.headingLine2}</span>
              </h2>
            </div>
            <div className="flex h-full items-center justify-end">
              <p className="p18 w-full text-right text-white/80">{liferayConsultingServicesHeader.description}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-[4.115vw] flex items-center justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveServiceTab(tab)}
                className={`flex-1 cursor-pointer rounded-full px-8 py-4 text-center text-[1.4583vw] font-medium transition-colors duration-300 md:whitespace-pre ${
                  activeServiceTab === tab
                    ? "border border-blue-600 bg-[#0C63CE] text-white"
                    : "border border-white text-white hover:border-blue-600 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 gap-x-[4.375vw] md:grid-cols-3">
            {activeServices.map((service, index) => (
              <div key={index} className="border-b border-[#9CA3AF]">
                <div className="flex items-start gap-4 pb-[40px]">
                  <Image
                    src="/images/liferay-pages-image/liferay-consultation-page/checkmark-icon.svg"
                    alt="Checkmark icon"
                    width={40}
                    height={40}
                    className="h-10 w-10 flex-shrink-0"
                  />
                  <p className="p24">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: End-to-End Liferay Consulting Services Section */}
      <section className="bg-[#F6F6F6] py-[64px] text-black">
        <div className="global-container">
          {/* Section Header */}
          <div className="mb-11">
            <h2 className="text-black">{endToEndLiferayConsultingSection.heading}</h2>
            <p className="p18 mt-4 text-gray-600">{endToEndLiferayConsultingSection.description}</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[1fr_3fr]">
            {/* Left Column: Numbered Service List */}
            <div className="flex flex-col">
              {endToEndServices.map((service, index) => (
                <div key={index} className="pb-12">
                  <div
                    onMouseEnter={() => setActivePillar(index)}
                    className={`flex w-fit cursor-pointer border-b-1 transition-all duration-300 ${
                      activePillar === index
                        ? "border-black font-semibold text-black"
                        : "border-transparent text-gray-500 hover:text-black"
                    }`}
                  >
                    <h4 className="mr-2">{service.number})</h4>
                    <h4>{service.name}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Interactive Pillars */}
            <div className="relative flex h-[420px] w-full items-start justify-between gap-5">
              {endToEndServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex h-full flex-col justify-between rounded-lg p-7 transition-all duration-300 ease-in-out ${
                    activePillar === index
                      ? "w-[20.3646vw] min-w-[20.3646vw] flex-grow bg-[#0B63CE] text-white shadow-xl"
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
                      <h4 className="min-w-[220px]">{service.name}</h4>
                      <hr className="my-7 w-full border-t-2 border-white/50" />
                      <p className="p18">{service.description}</p>
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
            {engagementModelsData.title.line1}
            <span className="block">{engagementModelsData.title.line2}</span>
          </>
        }
        description={engagementModelsData.description}
      />
      <section className="bg-white text-black"></section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake
        WhatMakeData={LiferayConsultationData}
        titleText1={LiferayConsultationTitle1}
        titleText2={LiferayConsultationTitle2}
        subContext={LiferayConsultationSubContent}
      />
      <TalkToExpert heading={liferayconsultationTalk.heading} description={liferayconsultationTalk.description} />
      <BlogSection />
    </main>
  )
}
