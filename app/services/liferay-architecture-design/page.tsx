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
    description: "Let us create an Liferay Architecture Design for your platform. We'll make it work smoothly and perfectly suited to your needs.",
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)

  // Custom smooth scroll logic (2-second easing)
  useEffect(() => {
    if (targetScroll === null || !containerRef.current) return

    const start = containerRef.current.scrollLeft
    const distance = targetScroll - start
    const duration = 1200 // 2 seconds
    const startTime = performance.now()

    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      containerRef.current!.scrollLeft = start + distance * ease

      if (progress < 1) requestAnimationFrame(smoothScroll)
    }

    requestAnimationFrame(smoothScroll)
  }, [targetScroll])

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
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2.8 // reduced scroll speed
    setTargetScroll(scrollStart - walk)
  }
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-5xl">
                Liferay
                <br />
                <span className="block">Architecture</span>
                <span className="block">Design</span>
              </h1>
            </div>
            <p className="absolute bottom-0 text-right text-white md:mt-16 md:justify-self-end [@media(min-width:1440px)]:max-w-xl [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:max-w-3xl [@media(min-width:1500px)]:text-lg">
              Liferay Architecture Design Services provides tailored solutions for designing and optimizing Liferay
              applications. We focus on aligning architecture with business needs for enhanced performance and
              scalability. Our services offer strategic guidance from concept to implementation, covering security,
              integrations, and user experience.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-8">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/30 px-11 py-5 text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative mb-[47px] grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold [@media(min-width:1440px)]:text-3xl [@media(min-width:1440px)]:leading-[40px] [@media(min-width:1500px)]:text-4xl [@media(min-width:1500px)]:leading-[50px]">
              Key Deliverables of Our Liferay Architecture Design Services
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-black md:justify-self-end [@media(min-width:1440px)]:text-lg [@media(min-width:1500px)]:text-xl">
              Our Liferay Architecture Design Services deliver clear, actionable outputs that guide your technical and
              business teams toward successful implementation.
            </p>
          </div>
          <div
            className="flex cursor-grab gap-10 overflow-x-hidden"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            ref={containerRef}
          >
            {systemArchitecure.map((item, index) => (
              <div
                key={index}
                className={`max-w-[22%] flex-shrink-0 pr-10 ${index !== systemArchitecure.length - 1 ? "border-r border-[#E5E7EB]" : ""
                  }`}
              >
                <h3 className="mt-[20px] mb-3 text-[36px] leading-normal font-semibold text-gray-600">{item.text}</h3>
                <p className="mt-[30px] mb-[73px] text-base leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold [@media(min-width:1440px)]:text-3xl [@media(min-width:1440px)]:leading-[40px] [@media(min-width:1500px)]:text-4xl [@media(min-width:1500px)]:leading-[50px]">
              Key Activities Under Our Liferay Architecture Design Services
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-white md:justify-self-end [@media(min-width:1440px)]:text-lg [@media(min-width:1500px)]:text-xl">
              We offer design documents for Liferay Portal Architecture, covering system components, security, load
              balancing, backup, user management, site structure, content management, integrations, caching, and
              monitoring.
            </p>
          </div>
          <div className="mt-[67px] grid grid-cols-12 gap-4">
            {keyActivityArchitecureSystem.map((item, index) => (
              <div key={index} className="col-span-12 flex grid grid-cols-12 items-center gap-4 p-4">
                <div className="col-span-3 mb-2 flex items-center border-none pr-[100px] font-semibold [@media(min-width:1440px)]:text-lg [@media(min-width:1500px)]:text-xl [@media(min-width:1800px)]:text-2xl">
                  {item.text}
                </div>
                <div className="col-span-9 flex h-[104px] items-center rounded-[8px] border border-[#1F2937] p-4 [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:text-lg">
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
