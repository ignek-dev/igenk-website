"use client"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { ecommerceDevelopment, ecommerceDevelopmentUsingLiferay, featureTabs, steps } from "data/liferay-ecommerce-development"

export default function LiferayEcommerceDevelopmentPage() {
  
  

  const caseStudies = [
    {
      id: 1,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Corporate",
      title: "Music License Management Portal: Onboarding & Data Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    },
    {
      id: 2,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "FinTech",
      title: "Transforming Financial Services with Innovations",
      description:
        "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      id: 3,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Healthcare",
      title: "Digital Health Platform: Patient-Centric Solutions",
      description:
        "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
    },
    {
      id: 4,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "E-commerce",
      title: "Scaling Online Retail with Cloud Technologies",
      description:
        "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
    },
  ]

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
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Ecommerce</span>
                <span className="block">Development</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Liferay Ecommerce Development empowers businesses to build integrated digital commerce platforms that enhance customer experiences while optimizing transaction processes and content management.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 [@media(min-width:1440px)]:px-4  [@media(min-width:1800px)]:px-7 py-5 [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:text-lg text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Ecommerce Development Using Liferay
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Liferay Ecommerce Development Service streamlines online retail operations with customizable storefronts, product management, order processing, and marketing tools for businesses seeking a strong online presence.
          </p>
          <div className="pt-4">
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
                  <h3 className="mb-2 text-[30px] font-medium text-black w-[800px]">{item.text}</h3>

                  {/* Description */}
                  <p className="text-[20px] font-normal text-gray-600 text-justify w-[1800px]">{item.description}</p>
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
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
                Our Liferay Ecommerce Development Process
              </h2>
            </div>
            <div className="relative">
              <p className="absolute justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
                Having completed numerous projects with excellence, we offer a clear and adaptable approach to Liferay Ecommerce Development, guiding you from the inception stage through to the post-release phases.
              </p>
            </div>
          </div>
          <div className="pt-16 select-none">
            <div
              ref={containerRef}
              className="max-w-full cursor-grab overflow-x-hidden active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative ml-[-23%] flex min-w-max [@media(min-width:1440px)]:ml-[-17%]">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex w-1/10 flex-shrink-0 flex-col items-center">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute top-6 right-0 z-0 h-0.5 w-full bg-black"
                        style={{ transform: "translateX(50%)" }}
                      ></div>
                    )}

                    {/* Step Number */}
                    <div className="z-10 flex h-18 w-14 items-center justify-center rounded-full bg-black text-lg font-medium text-white">
                      {step.number}
                    </div>

                    <div className="ml-[45%] flex h-full w-[50%] flex-col justify-between pt-4 text-left">
                      <h3 className="mt-4 text-left text-4xl font-medium text-black">{step.title}</h3>
                      <p className="mt-4 text-left text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudy caseStudies={caseStudies} />

      <WhatMake />
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
