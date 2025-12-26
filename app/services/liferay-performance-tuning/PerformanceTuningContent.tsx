"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  featureTabs,
  item,
  items,
  liferayPerformanceFeatures,
  liferayPerformanceOutcome,
  liferayPerformanceTuning,
  LiferayPerformanceTuningData,
  LiferayPerformanceTuningSubContent,
  LiferayPerformanceTuningTitle1,
  LiferayPerformanceTuningTitle2,
  liferayPerformanceWhatWeDo,
  serviceDate,
  talkToExpertPerformance,
} from "data/liferay-performance-tuning"

export default function LiferayPerformanceTuningPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (window.innerWidth < 1024) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setTimeout(() => {
            // ✅ controls the slow effect (increase for more slow)

            if (!sectionRef.current) return

            const sectionTop = sectionRef.current.offsetTop
            const sectionBottom = sectionTop + sectionRef.current.offsetHeight
            const scrollPosition = Math.min(window.scrollY + window.innerHeight * 0.6, sectionBottom - 1)

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              for (let i = cardRefs.current.length - 1; i >= 0; i--) {
                const card = cardRefs.current[i]
                if (card) {
                  const cardTop = card.offsetTop

                  if (scrollPosition >= cardTop) {
                    setActiveIndex((prev) => (prev !== i ? i : prev))
                    break
                  }
                }
              }
            }

            ticking = false
          }, 120) // 🔥 Increase this to slow more (200–300 looks very smooth)
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="pb-0">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto pt-24 pb-12 lg:pt-[3.281vw] lg:pb-[3.802vw]">
          <div className="relative flex flex-col gap-9 md:items-start lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              {/* xl:w-[40.156vw] two liner */}
              <h1 className="mt-[2.031vw]">
                {liferayPerformanceTuning.heading}
                <br />
                <span className="block">{liferayPerformanceTuning.heading2}</span>
              </h1>
            </div>
            <p className="text-p16 md:text-p18 w-full text-left text-gray-300 md:justify-self-end lg:absolute lg:bottom-0 lg:max-w-[48.438vw] lg:text-right lg:text-white xl:max-w-[38.438vw]">
              {liferayPerformanceTuning.description} <br />
              {/* {liferayPerformanceTuning.description2} <br /> */}
              {/* {liferayPerformanceTuning.description3} */}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-10 flex flex-wrap gap-4 lg:mt-[3.177vw] lg:gap-[1.875vw]">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="text-p16 md:text-p20 inline-flex items-center rounded-full border border-[#374151] bg-black px-4 py-2 text-white shadow-[0_4px_10px_0_rgba(0,151,158,0.25)] transition-colors lg:rounded-[2.083vw] lg:px-[1.458vw] lg:py-[0.833vw] lg:shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto w-full py-16 lg:pt-[3.333vw] lg:pb-[3.333vw]">
          <div className="flex flex-col items-center gap-4 lg:gap-[1.458vw]">
            <h2 className="text-center text-[#000000]">{liferayPerformanceFeatures.heading}</h2>
            <p className="text-p16 md:text-p18 text-center text-[#374151]">{liferayPerformanceFeatures.description}</p>
          </div>

          <div className="mt-9 grid grid-cols-1 divide-y divide-gray-200 lg:mt-[2.604vw] lg:grid-cols-3 lg:divide-x-3 lg:divide-y-0">
            {liferayPerformanceFeatures.features.slice(0, 3).map((feature, index, arr) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 py-8 text-center lg:gap-[0.417vw] lg:pt-[2.604vw] lg:pb-[3.698vw] ${
                  index === 0 ? "lg:pr-[2.1vw] lg:pl-0" : ""
                } ${index === arr.length - 1 ? "lg:pr-0 lg:pl-[2.1vw]" : ""} ${
                  index !== 0 && index !== arr.length - 1 ? "lg:px-[2.1vw]" : ""
                } `}
              >
                <h3 className="text-xl! font-semibold md:text-3xl! lg:h-[4.5vw] lg:w-[19.688vw] lg:text-[1.563vw]!">
                  {feature.title}
                </h3>
                <p className="text-p16 md:text-p20 mt-1 text-gray-500 lg:mt-[0.156vw]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 divide-y-2 divide-gray-200 border-t-2 border-gray-200 lg:grid-cols-3 lg:divide-x-3 lg:divide-y-0 lg:border-t-3">
            {liferayPerformanceFeatures.features.slice(3, 6).map((feature, index, arr) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 py-8 text-center lg:gap-[0.417vw] lg:pt-[2.604vw] lg:pb-[3.698vw] ${
                  index === 0 ? "lg:pr-[2.1vw] lg:pl-0" : ""
                } ${index === arr.length - 1 ? "lg:pr-0 lg:pl-[2.1vw]" : ""} ${
                  index !== 0 && index !== arr.length - 1 ? "lg:px-[2.1vw]" : ""
                } `}
              >
                <h3 className="text-xl! font-semibold md:text-3xl! lg:h-[4.5vw] lg:w-[19.688vw] lg:text-[1.563vw]!">
                  {feature.title}
                </h3>
                <p className="text-p16 md:text-p20 mt-1 text-gray-500 lg:mt-[0.156vw]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Of Our Liferay Performance Tuning Services */}
      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full py-16 lg:px-[0.208vw] lg:py-[3.333vw]">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            <h2 className=" ">
              {liferayPerformanceOutcome.heading}
              <br />
              {liferayPerformanceOutcome.heading2}
            </h2>
            <p className="text-p16 md:text-p18 w-full text-left text-white lg:bottom-0 lg:max-w-[33.906vw] lg:text-right">
              {liferayPerformanceOutcome.description}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-[3.021vw] lg:gap-0 xl:grid-cols-3">
            {serviceDate?.map((item, index) => {
              const total = serviceDate.length
              const isLastMobile = index === total - 1
              const isLastTwo = index >= total - 2

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between gap-4 lg:gap-[1.042vw] lg:pr-[5.313vw]"
                >
                  <Image
                    src={item?.image ?? ""}
                    alt="Progress icon"
                    width={44}
                    height={44}
                    className="h-10 w-10 lg:h-11 lg:w-11"
                  />
                  <h3 className="text-xl! font-medium! lg:h-[4.688vw] lg:w-[17.292vw] lg:text-[1.563vw]!">
                    {item.title}
                  </h3>
                  <p className="text-p16! md:text-p18! text-white/80 lg:h-[6.25vw] xl:text-[1.042vw]! xl:leading-[1.5625vw]!">
                    {item.desc}
                  </p>
                  <hr
                    className={`mt-[2.292vw] mb-[3.333vw] w-full border-b border-white/20 ${
                      isLastMobile ? "hidden" : ""
                    } md:${isLastTwo ? "hidden" : "block"} lg:${isLastTwo ? "hidden" : "block"} `}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Do With Our Liferay DXP Performance Tuning Services */}
      <section
        className="bg-[#f7f7f7] text-black"
        style={{
          minHeight: `${items.length * 20}vh`,
        }}
        ref={sectionRef}
      >
        <div className="global-container mx-auto w-full px-4 pt-16 lg:pt-[3.333vw]">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            <h2 className="text-3xl font-semibold text-[#000000] lg:w-[43.802vw] lg:text-[2.5vw] lg:leading-[3.125vw]">
              {liferayPerformanceWhatWeDo.heading}
              <br /> {liferayPerformanceWhatWeDo.heading2}
            </h2>
            <p className="text-p16 md:text-p18 w-full text-left text-[#4B5563] lg:bottom-0 lg:max-w-[35.5vw] lg:text-right">
              {liferayPerformanceWhatWeDo.description}
            </p>
          </div>

          <section className="py-12 lg:pt-[3.333vw] lg:pb-[3.333vw]">
            {/* =======================================================
                            MOBILE / TABLET LAYOUT (< 1024px)
                            - Vertical Stack (Accordion-ish)
                            - Clicking title expands detail card below it
                            - First item active by default
                            - Active border only on the Title/Desc container
                           ======================================================= */}
            <div className="flex flex-col gap-8 lg:hidden">
              {item.map((item, index) => {
                const isActive = activeIndex === index
                return (
                  <div key={index} className="flex flex-col">
                    {/* Header: Title + Description */}
                    {/* This is the part that gets the border when active */}
                    <div
                      className={`cursor-pointer border-l-4 py-2 pl-5 transition-all duration-300 ${
                        isActive ? "border-black" : "border-gray-300"
                      } `}
                      onClick={() => setActiveIndex(index)}
                    >
                      <h3 className={`text-xl font-medium! ${isActive ? "text-black" : "text-gray-900"}`}>
                        {item.title}
                      </h3>
                      <p className="text-p16 mt-2 text-gray-700">{item.desc}</p>
                    </div>

                    {/* Details Card: Only visible if active */}
                    {isActive && (
                      <div className="animate-fade-in mt-6 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-xl font-medium!">{item.title}</h3>
                        <ul className="flex flex-col gap-4">
                          {item.details.map((text) => (
                            <li key={text} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="10"
                                  viewBox="0 0 16 12"
                                  fill="none"
                                >
                                  <path
                                    d="M1 7L5 11L15 1"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="text-p18 leading-snug text-gray-800">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {/* =======================================================
                DESKTOP LAYOUT (>= 1024px)
                - Original Scroll Spy & Sticky Card Logic
                - Hidden on mobile/tablet
               ======================================================= */}
            <div className="hidden lg:grid lg:grid-cols-2">
              {/* Left column */}
              <div className="mr-[3.021vw] max-w-[34.583vw] space-y-6 scroll-auto">
                {item.map((item, index) => (
                  <div
                    key={item.title}
                    ref={(el) => {
                      if (el) cardRefs.current[index] = el
                    }}
                    className={`group cursor-pointer border-l-4 pl-[1.667vw] transition-all duration-300 ${
                      activeIndex === index
                        ? "border-black text-black"
                        : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                    } ${index !== items.length - 1 ? "mb-[2.917vw]" : "mb-0"} `}
                  >
                    <h3 className="text-[1.563vw]! font-semibold! text-black">{item.title}</h3>
                    <p className="p16 mt-[0.417vw] max-w-[27.969vw] text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="sticky top-[20.583vw] w-full self-start rounded-xl border border-gray-200 bg-white p-[1.458vw] shadow-sm transition-all duration-500">
                <h3 className="text-[1.563vw]! font-semibold!">{item[activeIndex]?.title}</h3>
                <ul className="mt-[1.25vw] flex flex-col gap-[1.25vw]">
                  {item[activeIndex]?.details.map((text) => (
                    <li key={text} className="flex items-center gap-[1.042vw]">
                      <span className="flex aspect-square h-[1.458vw] w-[1.458vw] shrink-0 items-center justify-center rounded-full bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                          <path
                            d="M1 7L5 11L15 1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-p16 md:text-p20 text-gray-800">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake
        WhatMakeData={LiferayPerformanceTuningData}
        titleText1={LiferayPerformanceTuningTitle1}
        titleText2={LiferayPerformanceTuningTitle2}
        subContext={LiferayPerformanceTuningSubContent}
      />
      <TalkToExpert
        heading={talkToExpertPerformance.heading}
        description={talkToExpertPerformance.description}
        buttonText={talkToExpertPerformance.buttonText}
      />
      <BlogSection />
    </main>
  )
}
