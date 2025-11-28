"use client"
import { Metadata } from "next"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { caseStudies } from "data/liferay-consulting-and-implementation-services"
import {
  ecommerceDevelopment,
  ecommerceDevelopmentUsingLiferay,
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)

  // Smooth Scroll Animation
  useEffect(() => {
    if (targetScroll === null || !containerRef.current) return

    const container = containerRef.current
    const start = container.scrollLeft
    const distance = targetScroll - start
    const duration = 1200 // 1.2s
    const startTime = performance.now()

    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic

      container.scrollLeft = start + distance * ease

      if (progress < 1) requestAnimationFrame(smoothScroll)
    }

    requestAnimationFrame(smoothScroll)
  }, [targetScroll])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollStart(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    e.preventDefault()

    const container = containerRef.current
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 2.8

    let newScroll = scrollStart - walk

    // ⭐ LIMIT SCROLL (Don't scroll past last step)
    const maxScroll = container.scrollWidth - container.clientWidth

    if (newScroll < 0) newScroll = 0
    if (newScroll > maxScroll) newScroll = maxScroll

    setTargetScroll(newScroll)
  }
  return (
    <main className="pb-0">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-[3.281vw] pb-[3.802vw]">
          <div className="3.802vw relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="pp18 banner-tab inline-flex items-center">Liferay Services</div>
              <h1 className="mt-9">
                Liferay
                <br />
                <span className="block">Ecommerce</span>
                <span className="block">Development</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 max-w-[26.042vw] text-right text-white md:justify-self-end">
              Liferay Ecommerce Development empowers businesses to build integrated digital commerce platforms that
              enhance customer experiences.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-[1.875vw]">
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
            <h2 className="">Liferay Ecommerce Performance & Scalability Optimization</h2>
            <p className="p18 justify-self-center text-gray-600">
              Our Liferay Ecommerce Development services include performance tuning, scalability planning, and resource
              optimization to guarantee fast load times, responsive interactions, and minimal downtime.
            </p>
          </div>
          <div className="">
            <div className="flex flex-col">
              {ecommerceDevelopment.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[100px] border-gray-300 px-4 py-6 ${
                    index !== 0 ? "border-t" : ""
                  } ${index !== ecommerceDevelopment.length - 1 ? "border-b" : ""}`}
                >
                  {/* Row Number */}
                  <span className="mb-2 text-[30px] font-medium text-black">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 w-[800px] text-[1.563vw] font-medium text-black">{item.text}</h3>

                  {/* Description */}
                  <p className="w-[1800px] text-justify text-[20px] font-normal text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Ecommerce Development Using Liferay
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-white">
            Liferay Ecommerce Development Service streamlines online retail operations with customizable storefronts,
            product management, order processing, and marketing tools for businesses seeking a strong online presence.
          </p>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[63px] pt-15 md:grid-cols-2">
            {ecommerceDevelopmentUsingLiferay.map((item, index) => (
              <div key={index} className="relative z-1 flex flex-col rounded-lg border border-gray-700 p-8">
                {/* Title */}
                <h3 className="absolute z-10 mt-[-60px] mb-2 w-max rounded-full border border-gray-700 bg-black px-8 py-3 text-2xl font-medium text-white">
                  {item.text}
                </h3>

                {/* Description */}
                <p className="text-gray/200 mt-8 text-[20px] font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 lg:py-[64px] [@media(min-width:1440px)]:px-[192px]">
          {/* Heading Row */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <h2 className="text-5xl leading-tight font-semibold">Our Liferay Ecommerce Development Process</h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Liferay Ecommerce enables easy creation and management of digital shopping experiences, combining strong
              content tools with seamless transactions for improved efficiency and user satisfaction.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="pt-16 select-none">
            <div
              ref={containerRef}
              className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative flex min-w-max gap-0">
                {steps.map((step, index) => (
                  <div key={index} className="relative h-[300px] w-[420px] flex-shrink-0 md:w-[600px]">
                    {/* Number + connecting line */}
                    <div className="relative flex w-full items-center">
                      {/* Number */}
                      <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">
                        {step.number}
                      </div>

                      {/* Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 right-0 left-0 -z-0 h-[3px] bg-black"></div>
                      )}
                    </div>

                    {/* Title (same line for all) */}
                    <h3 className="absolute top-[90px] w-[70%] text-left text-4xl font-medium text-black">
                      {step.title}
                    </h3>

                    {/* Description (bottom: 0 for all) */}
                    <p className="absolute bottom-0 w-[70%] text-left text-base leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudy caseStudies={caseStudies} />

      <WhatMake
        WhatMakeData={LiferayEcommerceDevelopmentData}
        titleText1={LiferayEcommerceDevelopmentTitle1}
        titleText2={LiferayEcommerceDevelopmentTitle2}
        subContext={LiferayEcommerceDevelopmentSubContent}
      />
      <TalkToExpert
        heading="Transform Your Online Store with Liferay Ecommerce Development"
        description="Optimize product management, checkout, payment options, and multichannel sales with ease."
        buttonText="Explore E-Commerce Solutions"
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
