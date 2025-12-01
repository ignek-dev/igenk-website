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
              <div className="p18 banner-tab inline-flex items-center">Liferay Services</div>
              <h1 className="mt-[2.031vw]">
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
          <div>
            <div className="flex flex-col">
              {ecommerceDevelopment.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center justify-between border-gray-300 py-6 ${
                    index !== 0 ? "border-t pt-[1.458vw]" : "pt-0"
                  } ${index !== ecommerceDevelopment.length - 1 ? "border-b" : "pb-0"}`}
                >
                  {/* Row Number */}
                  <span className="mb-2 max-w-[2.76vw] text-[2.083vw] font-medium text-black">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 text-[1.563vw]! leading-[36px]! font-normal text-black">{item.text}</h3>

                  {/* Description */}
                  <p className="max-w-[39.198vw] text-left text-[1.042vw] font-normal text-gray-600">
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
            <h2 className="text-white">Ecommerce Development Using Liferay</h2>
            <p className="p18 justify-self-center text-gray-100!">
              Liferay Ecommerce Development Service streamlines online retail operations with customizable storefronts,
              product management, order processing, and marketing tools for businesses seeking a strong online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-[1.51vw] gap-y-[4.688vw] pt-[4.063vw] md:grid-cols-2">
            {ecommerceDevelopmentUsingLiferay.map((item, index) => (
              <div
                key={index}
                className="relative z-1 flex flex-col rounded-lg border border-gray-700 px-[1.875vw] pt-[1.771vw] pb-[1.771vw]"
              >
                {/* Title */}
                <h3 className="absolute z-10 mt-[-3.385vw] w-max rounded-full border border-gray-700 bg-black px-[1.875vw] py-[0.521vw] text-[1.458vw]! font-medium text-white">
                  {item.text}
                </h3>

                {/* Description */}
                <p className="p20 mt-[1.276vw] font-normal text-[#D1D5DB]!">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full  py-[3.333vw]">
          {/* Heading Row */}
          <div className="global-container grid items-center gap-10 md:grid-cols-2">
            <h2 className="text-black">Our Liferay Ecommerce Development Process</h2>

            <p className="p18 leading-relaxed text-gray-500">
              Liferay Ecommerce enables easy creation and management of digital shopping experiences, combining strong
              content tools with seamless transactions for improved efficiency and user satisfaction.
            </p>
          </div>

          {/* Horizontal Timeline */}
      <div className="pt-[4.01vw] select-none">
  <div
    ref={containerRef}
    className="w-full cursor-grab overflow-hidden pl-[10vw] active:cursor-grabbing"
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
  >
    <div className="relative flex min-w-max gap-[14.833vw]">

      {/* ✅ Perfectly aligned horizontal line */}
      <div className="absolute left-0 top-[2.0835vw] h-[4px] w-[91%] bg-black z-0"></div>

      {steps.map((step, index) => (
        <div
          key={index}
            className="relative h-[17.396vw] w-[21.875vw] flex  flex-col"
        >
         
            <div className="z-10  flex h-[4.167vw] w-[4.167vw] items-center justify-center rounded-full bg-black text-[1.667vw] text-white">
              {index + 1}
            </div>
        

          <div className=" flex flex-col  pt-[2.188vw]">
            {/* ✅ Title */}
            <h3 className="absolute h-[4.583vw] w-[21.354vw] text-left text-[1.875vw]! font-medium text-black">
              {step.title}
            </h3>

            {/* ✅ Description */}
            <p className="p18 absolute bottom-0 w-[25.354vw] text-left text-gray-600">
              {step.description}
            </p>
          </div>
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
