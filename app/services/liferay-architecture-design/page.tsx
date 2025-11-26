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
      threshold: 0.3, // Trigger when 30% of section is visible
      rootMargin: '0px'
    }
  )

  observer.observe(section)
  return () => observer.disconnect()
}, [])
  // Handle page scroll for horizontal scrolling
  useEffect(() => {
    if (!isInView || !containerRef.current || !sectionRef.current) return

    const handlePageScroll = () => {
      const container = containerRef.current
      const section = sectionRef.current
      if (!container || !section) return

      const sectionRect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the section is visible
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      
      // When section enters viewport, start horizontal scroll
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = 1 - (sectionTop / (windowHeight - sectionHeight * 0.3))
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
        
        const maxScroll = container.scrollWidth - container.clientWidth
        const targetScrollLeft = clampedProgress * maxScroll
        
        container.scrollLeft = targetScrollLeft
      }
    }

    window.addEventListener('scroll', handlePageScroll, { passive: true })
    return () => window.removeEventListener('scroll', handlePageScroll)
  }, [isInView])

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

  const handleWheelScroll = (e: React.WheelEvent) => {
    const container = containerRef.current
    if (!container) return

    const scrollThreshold = 10
    const atStart = container.scrollLeft <= scrollThreshold
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - scrollThreshold

    // Apply horizontal scroll within boundaries
    if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
      container.scrollLeft += e.deltaY * 0.8
    }
    
    // Vertical page scroll always works simultaneously
  }

  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-[3.333vw] pb-[3.802vw] ">
          <div className="relative grid items-start gap-10 text-[3.75vw] md:grid-cols-2">
            <div>
              <div className="p18 banner-tab">Liferay Services</div>
              <h1 className="mt-[2.031vw]   leading-tight font-semibold">
                Liferay
                <br />
                <span className="block">Architecture</span>
                <span className="block">Design</span>
              </h1>
            </div>
            <p className="absolute bottom-0 text-right p18 text-white  md:justify-self-end ">
              Get Liferay architecture design and optimization services that enhance <br />
              performance, scalability, security, integrations, and user experience.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-9">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/30 py-[0.833vw] px-[1.458vw] text-[1.042vw] font-semibold text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section - Now works with page scroll */}
      <section ref={sectionRef}>
        <div className="mx-auto w-full">
          <div
            className="
              flex cursor-grab overflow-x-auto
              [&::-webkit-scrollbar]:hidden     
              [-ms-overflow-style:'none']       
              [scrollbar-width:'none']          
            "
            onWheel={handleWheelScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={containerRef}
          >
            {systemArchitecure.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-[3.333vw] ${
                  index === 0 ? "ml-[10vw] pl-0" : ""
                } ${index === systemArchitecure.length - 1 ? "" : ""} ${
                  index !== systemArchitecure.length - 1
                    ? "border-r border-[#E5E7EB]"
                    : ""
                }`}
                style={{ width: "22%" }}
              >
                <div className="flex flex-col gap-[4.688vw]">
                  <h3 className="mt-[3.802vw] max-w-[16.51vw] h-[88px] text-[1.875vw] leading-normal font-semibold text-gray-600">
                    {item.text}
                  </h3>
                  <p className="p20 mt-auto max-w-[15.729vw] mb-[3.802vw] leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-4 py-[3.333vw] ">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="w-[41.25vw] text-[2.5vw] font-semibold">
              Key Activities Under Our Liferay Architecture Design Services
            </h2>
            <p className="text-[0.938vw] max-w-[31.25vw ] text-right font-normal text-white md:self-end md:justify-self-end md:text-right">
              We offer design documents for Liferay Portal Architecture,
               covering system components, security, load balancing, backup,
            </p>
          </div>

          <div className="mt-[3.49vw] grid grid-cols-1 gap-[1.875vw] ">
            {keyActivityArchitecureSystem.map((item, index) => (
              <div
                key={index}
                className="top-32 z-10 flex flex-col bg-black py-[1vw] md:flex-row md:items-center md:gap-[2vw] lg:gap-[3vw]"
              >
                {/* Left Text */}
                <div className="flex w-[16.406vw] min-w-[16.406vw] text-[1.563vw] leading-[1.875vw] font-semibold ">
                  {item.text}
                </div>

                {/* Description */}
                <div className="flex items-center rounded-lg border border-[#1F2937] px-[1.875vw] py-[1.146vw] p20">
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