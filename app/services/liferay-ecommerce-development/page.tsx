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
  title: "Liferay Ecommerce Development Services | Enterprise Commerce - IGNEK",
  description:
    "Design and implement enterprise-grade ecommerce with Liferay Commerce. IGNEK delivers scalable, secure Liferay ecommerce solutions built for B2B and complex use cases.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-ecommerce-development/",
    title: "Liferay Ecommerce Development Services | Enterprise Commerce - IGNEK",
    description:
      "Design and implement enterprise-grade ecommerce with Liferay Commerce. IGNEK delivers scalable, secure Liferay ecommerce solutions built for B2B and complex use cases.",
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
      // Logic only needed for Desktop scroll-to-horizontal effect
      if (window.innerWidth < 1024) return;

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
      if (window.innerWidth < 1024) {
        x.set(0); // Reset position for mobile swipe container
        return;
      }

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
        <div className="global-container mx-auto pt-24 pb-12 lg:pt-[3.281vw] lg:pb-[3.802vw]">
          <div className="relative flex flex-col gap-9 md:items-start lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <h1 className="mt-[2.031vw]">
                {ecommerceHero.titleLine1}
                <br />
                <span className="block">{ecommerceHero.titleLine2}</span>
                <span className="block">{ecommerceHero.titleLine3}</span>
              </h1>
            </div>
            <p className="text-p16 md:text-p18 w-full text-left text-gray-300 md:justify-self-end lg:absolute lg:bottom-0 lg:max-w-[35.438vw] lg:text-right lg:text-white">
              {ecommerceHero.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-10 flex flex-wrap gap-4 lg:mt-[3.177vw] lg:flex-row lg:gap-[1.6vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="text-p16 md:text-p20 inline-flex items-center rounded-full border border-[#374151] bg-black px-5 py-2 text-white shadow-[0_4px_10px_0_rgba(0,151,158,0.25)] transition-colors lg:rounded-[2.083vw] lg:px-[1.458vw] lg:py-[0.833vw]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto flex w-full flex-col gap-10 py-16 lg:gap-[3.021vw] lg:py-[3.333vw]">
          <div className="flex flex-col gap-4 lg:gap-[1.458vw]">
            <h2 className="">{ecommerceOptimization.heading}</h2>
            <p className="text-p16 md:text-p18 justify-self-center text-gray-600">
              {ecommerceOptimization.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              {ecommerceDevelopment.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col border-gray-300 py-10 lg:flex-row lg:items-center lg:py-[1.458vw] ${
                    index !== 0 ? "border-t" : "pt-0"
                  } ${index !== ecommerceDevelopment.length - 1 ? "border-b" : "pb-0"}`}
                >
                  {/* Row Number */}
                  <div className="flex items-center gap-7 md:mb-4 md:gap-3 lg:mb-0">
                    <span className="max-w-[2.76vw] text-2xl font-medium text-black md:text-3xl lg:mr-[5.417vw] lg:text-[2.083vw]">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h4 className="text-xl! font-semibold! text-black md:hidden md:text-2xl! md:font-medium! lg:text-[1.563vw]!">
                      {item.text}
                    </h4>
                  </div>

                  {/* Desktop Title */}
                  <h4 className="hidden text-2xl font-semibold! text-black md:block md:font-medium! lg:text-[1.563vw] lg:leading-[36px]">
                    {item.text}
                  </h4>

                  {/* Description */}
                  <p className="text-p16 md:text-p18 mt-8 w-full text-left font-normal text-gray-600 lg:mt-0 lg:ml-auto lg:max-w-[39.198vw] lg:text-[1.042vw]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="global-container bg-black py-16 lg:py-[3.333vw]">
        <div className="mx-auto w-full items-start">
          <div className="flex flex-col gap-4 lg:gap-[1.458vw]">
            <h2 className="text-white">{ecommerceDevLiferay.heading}</h2>
            <p className="text-p16 md:text-p18 justify-self-center text-gray-100!">{ecommerceDevLiferay.description}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-16 md:gap-x-6 md:gap-y-16 lg:grid-cols-2 lg:gap-x-[1.51vw] lg:gap-y-[4.688vw] lg:pt-[4.063vw]">
            {ecommerceDevelopmentUsingLiferay.map((item, index) => (
              <div
                key={index}
                className="relative z-[1] flex flex-col rounded-2xl border border-[#1F2937] bg-black p-6 md:p-8 lg:px-[1.875vw] lg:py-[1.771vw]"
                style={{
                  boxShadow: "0 0 0 0 rgba(0,0,0,0), 0 0 0 1px rgba(244,244,245,0.10), 0 0 0 0 #FFF",
                }}
              >
                <div className="glow-bg absolute inset-0 -z-10"></div>
                <div style={{}}></div>
                {/* Title */}
                <h3 className="z-10 -mt-12 w-max rounded-full border border-gray-700 bg-black px-6 py-2 text-base! font-medium text-white md:-mt-14 md:px-8 md:text-xl! lg:-mt-[3.385vw] lg:px-[1.875vw] lg:py-[0.521vw] lg:text-[1.458vw]!">
                  {item.text}
                </h3>

                {/* Description */}
                <p className="text-p12 md:text-p20 mt-4 bg-black font-normal text-[#D1D5DB]! lg:mt-[1.276vw]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        ref={containerRef}
        className="relative bg-[#f7f7f7]"
        style={
          isMounted
            ? {
                height: typeof window !== "undefined" && window.innerWidth >= 1024 ? `${containerHeight}px` : "auto",
              }
            : undefined
        }
      >
        {" "}
        <section
          ref={stickyContentRef}
          className="lg:sticky top-0 flex h-auto flex-col overflow-hidden bg-[#f7f7f7] text-black lg:top-[5.75vw]"
        >
          <div className="mx-auto w-full py-16 lg:py-[3.333vw]">
            {/* Heading Row */}
            <div className="global-container flex flex-col gap-6 lg:flex-row md:items-center md:justify-between lg:gap-10">
              <h2 className="text-black">{ecommerceProcess.heading}</h2>
              <p className="text-p16 lg:text-p18 w-full text-left leading-relaxed text-[#4B5563] lg:text-right lg:w-[47.875vw]">
                {ecommerceProcess.description}
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="pt-16 lg:pt-[4.01vw] select-none overflow-x-auto scrollbar-hide">
              <motion.div
                ref={scrollerRef}
                className="relative flex min-w-max gap-0 will-change-transform px-[4vw] md:px-[3.6vw] lg:px-[10vw]"
                style={{ 
                  // Use smoothX motion only for Desktop
                  x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? smoothX : 0 
                }}
              >
                <div className="relative flex min-w-max gap-12 md:gap-20 lg:gap-[4.833vw] pr-[10vw]">
                  {/* ✅ Perfectly aligned horizontal line */}
                  <div className="absolute top-8 md:top-10 lg:top-[2.0835vw] left-0 z-0 h-[3px] md:h-[4px] w-full bg-black"></div>

                  {steps.map((step, index) => (
                    <div key={index} className="flex w-64 md:w-80 lg:w-[24.875vw] flex-col gap-8 lg:gap-[2.188vw]">
                      <div className="z-10 flex h-16 w-16 md:h-20 md:w-20 lg:h-[4.167vw] lg:w-[4.167vw] items-center justify-center rounded-full bg-black text-xl md:text-2xl lg:text-[1.667vw] font-bold text-white">
                        {index + 1}
                      </div>

                      <div className="flex flex-col">
                        {/* ✅ Title */}
                        <h3 className="h-20 w-full text-left text-xl! font-semibold text-black md:h-24 md:text-2xl! lg:h-[4.583vw] lg:w-[21.354vw] lg:text-[1.875vw]! lg:font-medium">
                          {step.title}
                        </h3>

                        {/* ✅ Description */}
                        <p className="text-p16 md:text-p20 bottom-0 mt-4 w-full text-left text-gray-600 lg:mt-[1.458vw] lg:w-[25.354vw]">
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
