"use client"
import { Metadata } from "next"
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { caseStudies } from "data/liferay-consulting-and-implementation-services"
import {
  ecommerceDevelopment,
  ecommerceDevelopmentUsingLiferay,
  ecommerceDevLiferay,
  ecommerceHero,
  ecommerceOptimization,
  ecommerceProcess,
  ecommerceTalkToExpert,
  featureTabs,
  LiferayEcommerceDevelopmentData,
  LiferayEcommerceDevelopmentSubContent,
  LiferayEcommerceDevelopmentTitle1,
  LiferayEcommerceDevelopmentTitle2,
  steps,
} from "data/liferay-ecommerce-development"

const metadata: Metadata = {
  title: "Liferay Ecommerce Development Company - IGNEK",
  description:
    "Get top-notch Liferay Ecommerce Development services tailored to your business needs. Boost sales, enhance user experience, and grow your online store efficiently.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-ecommerce-development/",
    title: "Liferay Ecommerce Development Company - IGNEK",
    description:
      "Get top-notch Liferay Ecommerce Development services tailored to your business needs. Boost sales, enhance user experience, and grow your online store efficiently.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}
export default function LiferayEcommerceDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  // Ref for the "Visible Content" (Header + Timeline) - logic borrowed from WhatWeBring
  const stickyContentRef = useRef<HTMLElement | null>(null)

  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const [isMounted, setIsMounted] = useState(false)

const [layout, setLayout] = useState({
    maxScroll: 0,
    contentHeight: 0, // Store the actual height of the sticky content
  })
  const x = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 200, damping: 25 })

  useEffect(() => {
    setIsMounted(true)
    function calculateLayout() {
      const scroller = scrollerRef.current
      const stickyContent = stickyContentRef.current
      
      if (!scroller || !stickyContent) return

      // 1. Calculate Horizontal Scroll Distance
      const totalWidth = scroller.scrollWidth
      const viewportW = window.innerWidth
      const maxScrollDistance = Math.max(0, totalWidth - viewportW + 50)

      // 2. Calculate Vertical Content Height (Intrinsic Height)
      const currentContentHeight = stickyContent.offsetHeight

      setLayout({
        maxScroll: maxScrollDistance,
        contentHeight: currentContentHeight
      })
    }

    calculateLayout()
    window.addEventListener("resize", calculateLayout)
    // Small timeout to ensure fonts/DOM are settled
    const timeout = setTimeout(calculateLayout, 100)

    return () => {
      window.removeEventListener("resize", calculateLayout)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
    // Calculate how much we have scrolled RELATIVE to the container's available scroll space
      // We subtract window.innerHeight because the scroll finishes when the bottom of the container hits the bottom of the screen
      const scrollEnd = containerRect.height - window.innerHeight

      // Safety check to avoid division by zero
      if (scrollEnd <= 0) {
        x.set(0)
        return
      }

      if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
        const scrolled = Math.abs(containerRect.top)
        const progressValue = scrolled / scrollEnd
        const clampedProgress = Math.max(0, Math.min(1, progressValue))
        x.set(-clampedProgress * layout.maxScroll)
      } else if (containerRect.top > 0) {
        x.set(0)
      } else {
        x.set(-layout.maxScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [layout.maxScroll, x])

  // Total height = The actual content height + the distance we need to scroll horizontally
  // This mimics the logic: sectionHeight = stickyHeight + horizontalOverflow
  const containerHeight = (layout.contentHeight || 800) + layout.maxScroll

  return (
    <main className="pb-0">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto  pt-[3.281vw] pb-[3.802vw]">
          <div className="3.802vw relative grid items-start gap-10 md:grid-cols-2">
            <div>
              
              <h1 className="mt-[2.031vw]">
                {ecommerceHero.titleLine1}
                <br />
                <span className="block">{ecommerceHero.titleLine2}</span>
                <span className="block">{ecommerceHero.titleLine3}</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 max-w-[35.438vw] text-right text-white md:justify-self-end">
              {ecommerceHero.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-row gap-[1.6vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="p20 inline-flex items-center rounded-[2.083vw] border border-[#374151] bg-black px-[1.458vw] py-[0.833vw] text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto flex w-full flex-col gap-[3.021vw] py-[3.333vw]">
          <div className="flex flex-col gap-[1.458vw]">
            <h2 className="">{ecommerceOptimization.heading}</h2>
            <p className="p18 justify-self-center text-gray-600">
              {ecommerceOptimization.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              {ecommerceDevelopment.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center border-gray-300 py-[1.458vw] ${
                    index !== 0 ? "border-t" : "pt-0"
                  } ${index !== ecommerceDevelopment.length - 1 ? "border-b" : "pb-0"}`}
                >
                  {/* Row Number */}
                  <span className="mr-[5.417vw] max-w-[2.76vw] text-[2.083vw] font-medium text-black">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-[1.563vw]! leading-[36px]! font-normal text-black">{item.text}</h3>

                  {/* Description */}
                  <p className="ml-auto max-w-[39.198vw] text-left text-[1.042vw] font-normal text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="global-container bg-black py-[3.333vw]">
        <div className="mx-auto w-full items-start">
          <div className="flex flex-col gap-[1.458vw]">
            <h2 className="text-white">{ecommerceDevLiferay.heading}</h2>
            <p className="p18 justify-self-center text-gray-100!">
              {ecommerceDevLiferay.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-[1.51vw] gap-y-[4.688vw] pt-[4.063vw] md:grid-cols-2">
            {ecommerceDevelopmentUsingLiferay.map((item, index) => (
              <div
                key={index}
                className="relative z-[1]  flex flex-col rounded-[16px] border border-[#1F2937] bg-black px-[1.875vw] pt-[1.771vw] pb-[1.771vw]"
                style={{
                  boxShadow: "0 0 0 0 rgba(0,0,0,0), 0 0 0 1px rgba(244,244,245,0.10), 0 0 0 0 #FFF",
                }}
              >
                <div className="glow-bg absolute inset-0 -z-10"></div>
                <div style={{}}></div>
                {/* Title */}
                <h3 className="z-10 mt-[-3.385vw] w-max rounded-full border border-gray-700 bg-black px-[1.875vw] py-[0.521vw] text-[1.458vw]! font-medium text-white">
                  {item.text}
                </h3>

                {/* Description */}
                <p className="p20 mt-[1.276vw] font-normal bg-black text-[#D1D5DB]!">{item.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={containerRef} className="relative bg-[#f7f7f7]" style={isMounted ? { height: `${containerHeight}px` } : undefined}>
        <section ref={stickyContentRef} className="sticky top-[5.75vw] flex h-auto flex-col overflow-hidden bg-[#f7f7f7] text-black">
          <div className="mx-auto w-full py-[3.333vw]">
            {/* Heading Row */}
            <div className="global-container flex flex-row items-center gap-10 md:grid-cols-2">
              <h2 className="text-black">{ecommerceProcess.heading}</h2>
              <p className="p18 text-right w-[46.875vw] leading-relaxed text-[#4B5563]">
                {ecommerceProcess.description}
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="pt-[4.01vw] pl-[10vw]  select-none">
              <motion.div
                ref={scrollerRef}
                className="relative flex min-w-max gap-0 will-change-transform"
                style={{ x: smoothX }}
              >
                <div className="relative flex min-w-max gap-[4.833vw] pr-[10vw]">
                  {/* ✅ Perfectly aligned horizontal line */}
                  <div className="absolute top-[2.0835vw] left-0 z-0 h-[4px] w-[85%] bg-black"></div>

                  {steps.map((step, index) => (
                    <div key={index} className="flex w-[24.875vw] flex-col gap-[2.188vw]">
                      <div className="z-10 flex h-[4.167vw] w-[4.167vw] items-center justify-center rounded-full bg-black text-[1.667vw]! text-white">
                        {index + 1}
                      </div>

                      <div className="flex flex-col">
                        {/* ✅ Title */}
                        <h3 className="h-[4.583vw] w-[21.354vw] text-left text-[1.875vw]! font-medium text-black">
                          {step.title}
                        </h3>

                        {/* ✅ Description */}
                        <p className="p20 bottom-0 mt-[1.458vw] w-[25.354vw] text-left text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <CaseStudy caseStudies={caseStudies} />

      <WhatMake
        WhatMakeData={LiferayEcommerceDevelopmentData}
        titleText1={LiferayEcommerceDevelopmentTitle1}
        titleText2={LiferayEcommerceDevelopmentTitle2}
        subContext={LiferayEcommerceDevelopmentSubContent}
      />
      <TalkToExpert
        heading={ecommerceTalkToExpert.heading}
        description={ecommerceTalkToExpert.description}
        buttonText={ecommerceTalkToExpert.buttonText}
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
