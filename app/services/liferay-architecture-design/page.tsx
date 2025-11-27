"use client"
import { Metadata } from "next"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  featureTabs,
  keyActivityArchitecureSystem,
  LiferayArchitectureData,
  LiferayArchitectureSubContent,
  LiferayArchitectureTitle1,
  LiferayArchitectureTitle2,
  systemArchitecure,
} from "data/liferay-architecture-design"

const metadata: Metadata = {
  title: "Liferay Architecture Design Services - IGNEK",
  description:
    "Let us create an Liferay Architecture Design for your platform. We'll make it work smoothly and perfectly suited to your needs.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-architecture-design/",
    title: "Liferay Architecture Design Services - IGNEK",
    description:
      "Let us create an Liferay Architecture Design for your platform. We'll make it work smoothly and perfectly suited to your needs.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayArchitectureDesignPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)

  
  // Intersection Observer to detect when section is in view
 useEffect(() => {
  const section = sectionRef.current
  if (!section) return

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry) {
        setIsInView(entry.isIntersecting)
      }
    },
    {
      threshold: 0.3,
      rootMargin: "0px",
    }
  )

  observer.observe(section)
  return () => observer.disconnect()
}, [])
// Handle page scroll for horizontal scrolling
useEffect(() => {
  if (!containerRef.current || !sectionRef.current) return

  const handlePageScroll = () => {
    const container = containerRef.current
    const section = sectionRef.current
    if (!container || !section) return

    const sectionRect = section.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Simple and reliable progress calculation
    const startScroll = windowHeight * 0.8 // Start when section is 80% from top
    const endScroll = -sectionRect.height * 0.2 // End when section is 20% from bottom

    let progress = 0
    
    if (sectionRect.top < startScroll) {
      progress = 1 - Math.max(0, (sectionRect.top - endScroll) / (startScroll - endScroll))
    }

    const clampedProgress = Math.max(0, Math.min(1, progress))
    const maxScroll = container.scrollWidth - container.clientWidth
    const targetScrollLeft = clampedProgress * maxScroll

    container.scrollLeft = targetScrollLeft
  }

  window.addEventListener("scroll", handlePageScroll, { passive: true })
  return () => window.removeEventListener("scroll", handlePageScroll)
}, [])

// Remove these state variables and functions completely:
// const [isDragging, setIsDragging] = useState(false)
// const [startX, setStartX] = useState(0)
// const [scrollStart, setScrollStart] = useState(0)
// const [targetScroll, setTargetScroll] = useState<number | null>(null)

// Remove these handler functions:
// const handleMouseDown = (e: React.MouseEvent) => { ... }
// const handleMouseUp = () => { ... }
// const handleMouseLeave = () => { ... }
// const handleMouseMove = (e: React.MouseEvent) => { ... }
// const handleWheelScroll = (e: React.WheelEvent) => { ... }

// Also remove the smooth scroll useEffect since we don't need it anymore
  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-[3.333vw] pb-[3.802vw]">
          <div className="relative grid items-start gap-10 text-[3.75vw] md:grid-cols-2">
            <div>
              <div className="p18 banner-tab">Liferay Services</div>
              <h1 className="mt-[2.031vw] leading-tight font-semibold">
                Liferay
                <br />
                <span className="block">Architecture</span>
                <span className="block">Design</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 text-right text-white md:justify-self-end">
              Get Liferay architecture design and optimization services that enhance <br />
              performance, scalability, security, integrations, and user experience.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-9">
            {featureTabs.map((label, index) => (
             <span
                key={index}
                className="p20 inline-flex items-center rounded-full border border-[#374151] px-[1.458vw] py-[0.833vw] text-lg text-white shadow-[0px_4px_10px_0px_#00979E40] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef}>
  <div className="mx-auto w-full">
    <div
      className="flex cursor-grab overflow-x-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
      ref={containerRef}
      // Removed: onWheel, onMouseDown, onMouseUp, onMouseLeave, onMouseMove
    >
      {systemArchitecure.map((item, index) => (
        <div
          key={index}
          className={`flex-shrink-0 px-[3.333vw] ${index === 0 ? "ml-[10vw] pl-0" : ""} ${
            index === systemArchitecure.length - 1 ? "mr-[20vw]" : ""
          } ${index !== systemArchitecure.length - 1 ? "border-r border-[#E5E7EB]" : ""}`}
          style={{ width: "22%" }}
        >
          <div className="flex flex-col gap-[4.688vw]">
            <h3 className="mt-[3.802vw] h-[88px] max-w-[16.51vw] text-[1.875vw] leading-normal font-semibold text-gray-600">
              {item.text}
            </h3>
            <p className="p20 mt-auto mb-[3.802vw] max-w-[15.729vw] leading-relaxed text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-4 py-[3.333vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="w-[41.25vw] text-[2.5vw]! font-semibold">
              Key Activities Under Our Liferay Architecture Design Services
            </h2>
            <p className="max-w-[31.25vw ] text-right text-[0.938vw] font-normal text-white md:self-end md:justify-self-end md:text-right">
              We offer design documents for Liferay Portal Architecture, covering<br/> system components, security, load
              balancing, backup.
            </p>
          </div>

          <div className="mt-[3.49vw] grid grid-cols-1 gap-[1.875vw]">
            {keyActivityArchitecureSystem.map((item, index) => (
              <div
                key={index}
                className="top-32 z-10 flex flex-col bg-black md:flex-row md:items-center "
              >
                {/* Left Text */}
                <div className="flex w-[16.406vw] min-w-[16.406vw] text-[1.563vw] py-[0.833vw] pr-[1.875vw] leading-[1.875vw] font-semibold">
                  {item.text}
                </div>

                {/* Description */}
                <div className="p20 py-[0.938vw] flex items-center rounded-lg border border-[#1F2937] px-[1.875vw] py-[1.146vw]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatMake
        WhatMakeData={LiferayArchitectureData}
        titleText1={LiferayArchitectureTitle1}
        titleText2={LiferayArchitectureTitle2}
        subContext={LiferayArchitectureSubContent}
      />
      {/* <HeroCTASection /> */}
      <TalkToExpert
        heading="Design Scalable Solutions with Experienced Liferay Architecture Experts"
        description="Craft efficient system designs that enhance portal performance and stability."
        buttonText="Explore Architecture Solutions"
      />
      <BlogSection />
    </main>
  )
}
