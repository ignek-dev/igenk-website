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

export default function LiferayConsultationContent() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const [activePillar, setActivePillar] = useState(0)

  const tabs = liferayConsultingData.map((item) => item.label)
  const [activeServiceTab, setActiveServiceTab] = useState(tabs[0])
  const activeServices = liferayConsultingData.find((item) => item.label === activeServiceTab)?.services || []

  const { heading, headingSpan, description } = liferayConsultingServicesSection
  const { title, titleSpan, descriptions } = liferaySolutionsSection
  const { sectionTitle, sectionDescription } = liferayWhyChooseSection

  return (
    <main>
      <section className="relative bg-[#0B63CE] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container pt-40 pb-16 md:pt-48 md:pb-20">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5">
            <div className="col-span-3">
              <h1 className="mt-[2.031vw]">
                {liferayHeroData.titleLine1}
                <br />
                <span className="block">{liferayHeroData.titleLine2}</span>
              </h1>
              <p className="p18 mt-[2.813vw] max-w-xl">{liferayHeroData.description}</p>
            </div>
            <div className="flex items-center justify-center md:col-span-2">
              <Image src={liferayHeroData.image.src} alt={liferayHeroData.image.alt} width={280} height={280} className="h-auto max-w-sm" />
            </div>
          </div>
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

      <section className="bg-[#F9FAFB] py-[64px]">
        <div className="global-container flex">
          <div className="flex flex-1 flex-col gap-[12.396vw]">
            <div className="flex-no-wrap grid-cols-2 items-center gap-[6.6667vw] [@media(min-width:1440px)]:grid [@media(min-width:1800px)]:flex">
              {liferayDigitalEdgeData.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <p className="text-5xl font-bold text-[#171717]">{stat.value}</p>
                  <p className="p20 text-gray-600">
                    {stat.isMultiLine ? stat.label.split(" ").map((line, i) => (<React.Fragment key={i}>{line} <br /></React.Fragment>)) : stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-gray-900">{liferayDigitalEdgeData.heading}</h2>
              <p className="p20 mt-[2.083vw] mb-[3.125vw] max-w-[500px] text-gray-600">{liferayDigitalEdgeData.description}</p>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <div className="absolute bottom-0 h-full w-[600px] opacity-80">
              <Image src={liferayDigitalEdgeData.images.glow.src} alt={liferayDigitalEdgeData.images.glow.alt} fill objectFit="contain" className="scale-147 [@media(min-width:1440px)]:scale-152 [@media(min-width:1500px)]:scale-147" sizes="600px" />
            </div>
            <Image src={liferayDigitalEdgeData.images.tablet.src} alt={liferayDigitalEdgeData.images.tablet.alt} width={500} height={500} objectFit="contain" className="relative z-10 h-auto w-[500px] scale-125 [@media(min-width:1440px)]:scale-129 [@media(min-width:1500px)]:scale-125" style={{ minWidth: "650px", marginTop: "-60px", marginBottom: "17px" }} />
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="global-container">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            <div className="top-[137px] max-w-[520px] flex-1 space-y-[26px] pt-[4px] md:sticky">
              <h2 className="text-white">{heading}<span className="block">{headingSpan}</span></h2>
              <p className="p18 max-w-[520px] text-[#D1D5DB]">{description}</p>
            </div>
            <div className="relative flex flex-1 flex-col items-end">
              <div className="relative w-full max-w-[883px]">
                {consultingServices.map((item, index) => {
                  const [ref, isInView] = useInView({ triggerOnce: true })
                  return (
                    <div ref={ref as React.RefObject<HTMLDivElement>} key={index} className={`sticky mb-16 transition-opacity duration-500 ${isInView ? "animate-stack-in" : "opacity-0"}`} style={{ top: `calc(8.5rem + ${index * 4}rem)` }}>
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

      <section className="bg-white py-[64px] relative">
        <div className="global-container">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div><h2 className="text-black">{title}<span className="block">{titleSpan}</span></h2></div>
            <div className="flex h-full items-center justify-end"><p className="p18 text-right text-gray-500">{descriptions}</p></div>
          </div>
          <div className="mt-[48px] flex flex-col gap-[1.7708vw] lg:flex-row">
            {liferaySolutions.map((solution) => {
              const isHovered = hoveredCard === solution.id
              const isDefaultPrimary = hoveredCard === null && solution.id === "Liferay DXP"
              const isCurrentPrimary = isHovered || isDefaultPrimary
              return (
                <div key={solution.id} onMouseEnter={() => setHoveredCard(solution.id)} onMouseLeave={() => setHoveredCard(null)} className={`flex h-[340px] items-center rounded-lg p-10 transition-all duration-300 ease-in-out ${isCurrentPrimary ? "min-w-[35.8333vw] flex-grow-[2] basis-0 flex-row justify-between gap-[4.1667vw] bg-[#0B63CE] text-white [@media(min-width:1440px)]:flex-grow-[3] [@media(min-width:1800px)]:flex-grow-[2]" : "w-full flex-grow basis-0 flex-col justify-center border border-gray-200 bg-white text-gray-800 shadow-sm"}`}>
                  {isCurrentPrimary ? (
                    <>
                      <div className="text-left">
                        <h4>{solution.title}</h4>
                        <hr className="my-7 border-t border-white/50" />
                        <p className="p18">{solution.description}</p>
                      </div>
                      <Image src={solution.iconActive} alt={`${solution.title} icon`} width={112} height={112} className="h-[8.75vw] w-[8.75vw] flex-shrink-0 object-contain transition-all duration-300 ease-in-out" />
                    </>
                  ) : (
                    <>
                      <Image src={solution.iconInactive} alt={`${solution.title} icon`} width={120} height={120} className="h-[8.75vw] w-[8.75vw] object-contain transition-all duration-300 ease-in-out" />
                      <h4 className="mt-[44px] text-center">{solution.title}</h4>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white">
        <div className="global-container">
          <div className="w-full">
            <h2>{sectionTitle}</h2>
            <p className="p18 mt-7 text-white/80">{sectionDescription}</p>
          </div>
          <div className="mt-9.5">
            {liferayProjectFeatures.map((feature: any) => (
              <div key={feature.title}>
                <div className="flex flex-col items-start gap-[4.1667vw] py-[57px] md:flex-row md:items-center">
                  <div className="flex-shrink-0"><Image src={feature.icon} alt="" width={64} height={64} className="h-16 w-16" /></div>
                  <div className="w-full flex-shrink-0 md:w-[235px]"><h4>{feature.title}</h4></div>
                  <div className="flex-1"><p className="p18 text-white">{feature.description}</p></div>
                </div>
                <hr className="border-t border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[64px] text-black">
        <div className="global-container">
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div><h2 className="text-black">{industriesWeServeSection.heading}</h2></div>
            <div className="flex h-full items-end justify-end"><p className="p18 w-full text-right text-gray-600">{industriesWeServeSection.description}</p></div>
          </div>
          <div>
            {industriesWeServe.map((industry) => (
              <div key={industry.id} onMouseEnter={() => setHoveredIndustry(industry.id)} onMouseLeave={() => setHoveredIndustry(null)} className={`group relative flex cursor-pointer items-center border-b border-gray-200 py-10 transition-colors duration-300 hover:bg-[#0B63CE] [@media(min-width:1440px)]:px-4 [@media(min-width:1800px)]:px-10`}>
                <div className="min-w-[16.8229vw] flex-shrink-0"><h4 className="text-black transition-colors duration-300 group-hover:text-white">{industry.title}</h4></div>
                <div className="flex-1 pr-8">
                  <p className="text-rgb(0, 0, 0, 0.85) p20 max-w-[450px] transition-colors duration-300 group-hover:text-white/80">{industry.description}</p>
                  <div className={`absolute top-1/2 left-[55.875vw] z-10 h-[9.0625vw] w-[10.9896vw] -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-100`}>
                    <Image src={industry.image} alt={industry.title} width={190} height={140} objectFit="cover" className="h-[140px] w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:-rotate-10" />
                  </div>
                </div>
                <div className="relative right-3 flex flex-shrink-0 items-center">
                  <div className={`flex h-[2.5vw] w-[2.5vw] flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:border-white group-hover:bg-white`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black transition-colors duration-300 group-hover:text-[#0B63CE]"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white">
        <div className="global-container">
          <div className="grid grid-cols-1 items-end gap-8 pb-16 md:grid-cols-2">
            <div><h2>{liferayConsultingServicesHeader.headingLine1}<span className="block">{liferayConsultingServicesHeader.headingLine2}</span></h2></div>
            <div className="flex h-full items-center justify-end"><p className="p18 w-full text-right text-white/80">{liferayConsultingServicesHeader.description}</p></div>
          </div>
          <div className="mb-[4.115vw] flex items-center justify-center gap-4">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveServiceTab(tab)} className={`flex-1 cursor-pointer rounded-full px-8 py-4 text-center text-[1.4583vw] font-medium transition-colors duration-300 md:whitespace-pre ${activeServiceTab === tab ? "border border-blue-600 bg-[#0C63CE] text-white" : "border border-white text-white hover:border-blue-600 hover:text-white"}`}>{tab}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-10 gap-x-[4.375vw] md:grid-cols-3">
            {activeServices.map((service, index) => (
              <div key={index} className="border-b border-[#9CA3AF]"><div className="flex items-start gap-4 pb-[40px]"><Image src="/images/liferay-pages-image/liferay-consultation-page/checkmark-icon.svg" alt="Checkmark icon" width={40} height={40} className="h-10 w-10 flex-shrink-0" /><p className="p24">{service}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[64px] text-black">
        <div className="global-container">
          <div className="mb-11">
            <h2 className="text-black">{endToEndLiferayConsultingSection.heading}</h2>
            <p className="p18 mt-4 text-gray-600">{endToEndLiferayConsultingSection.description}</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[1fr_3fr]">
            <div className="flex flex-col">
              {endToEndServices.map((service, index) => (
                <div key={index} className="pb-12"><div onMouseEnter={() => setActivePillar(index)} className={`flex w-fit cursor-pointer border-b-1 transition-all duration-300 ${activePillar === index ? "border-black font-semibold text-black" : "border-transparent text-gray-500 hover:text-black"}`}><h4 className="mr-2">{service.number})</h4><h4>{service.name}</h4></div></div>
              ))}
            </div>
            <div className="relative flex h-[420px] w-full items-start justify-between gap-5">
              {endToEndServices.map((service, index) => (
                <div key={index} className={`flex h-full flex-col justify-between rounded-lg p-7 transition-all duration-300 ease-in-out ${activePillar === index ? "w-[20.3646vw] min-w-[20.3646vw] flex-grow bg-[#0B63CE] text-white shadow-xl" : "w-[20%] flex-grow-0 border border-[#E5E7EB] bg-white text-gray-400"}`}>
                  <div className="h-16"><span className={`block w-min -rotate-90 transform text-5xl font-medium transition-colors duration-300 ${activePillar === index ? "text-white" : "text-gray-400"}`}>{service.number}</span></div>
                  {activePillar === index && <div className="pt-4"><h4 className="min-w-[220px]">{service.name}</h4><hr className="my-7 w-full border-t-2 border-white/50" /><p className="p18">{service.description}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WordsFromCEO />
      <EngagementModels title={<>{engagementModelsData.title.line1}<span className="block">{engagementModelsData.title.line2}</span></>} description={engagementModelsData.description} />
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake WhatMakeData={LiferayConsultationData} titleText1={LiferayConsultationTitle1} titleText2={LiferayConsultationTitle2} subContext={LiferayConsultationSubContent} />
      <TalkToExpert heading={liferayconsultationTalk.heading} description={liferayconsultationTalk.description} />
      <BlogSection />
    </main>
  )
}
