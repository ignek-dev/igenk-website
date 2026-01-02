"use client"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  featureTabs,
  keyActivityArchitecureSystem,
  LiferayArchitectureData,
  liferayArchitectureHeroData,
  liferayArchitectureKeyData,
  LiferayArchitectureSubContent,
  LiferayArchitectureTitle1,
  LiferayArchitectureTitle2,
  systemArchitecure,
  talkToExpertArcData,
} from "data/liferay-architecture-design"

export default function LiferayArchitectureDesignContent() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)

  const [isInView, setIsInView] = useState(false)
  const [isStickyActive, setIsStickyActive] = useState(false)

  const ArchitectureCards = ({
    items,
    cardWidth = "22%",
  }: {
    items: typeof systemArchitecure
    cardWidth?: string | number
  }) => (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex-shrink-0 px-[42px]! md:px-16 lg:px-[3.333vw] ${index === 0 ? "ml-0 lg:ml-[7vw] pl-0" : ""
            } ${index === items.length - 1 ? "mr-[20vw]" : ""} ${index !== items.length - 1 ? "border-r border-[#9CA3AF]" : ""
            }`}
          style={{ width: cardWidth }}
        >
          <div className="flex flex-col gap-13 lg:gap-[2vw]">
            <h3 className="mt-13.5 lg:mt-[3.802vw] h-[88px] max-w-[87%] md:max-w-[90%] lg:max-w-[14.51vw] text-gray-600">
              {item.text}
            </h3>
            <p className="text-p12 md:text-p20 lg:text-p20 mt-auto mb-13.5 lg:mb-[3.802vw] w-auto lg:max-w-[20.729vw] leading-relaxed text-gray-500">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) setIsInView(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const stickyOffset = 137
      setIsStickyActive(rect.top <= stickyOffset && rect.bottom > stickyOffset)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const section = sectionRef.current
    if (!container || !section) return

    let rafId: number | null = null
    const clamp = (v: number, a = 0, b = Infinity) => Math.min(Math.max(v, a), b)
    const animateScrollTo = (targetLeft: number) => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        container.scrollLeft = targetLeft
        rafId = null
      })
    }

    const onWheel = (e: WheelEvent) => {
      if (!isInView) return
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
      if (maxScroll <= 0) return

      const deltaY = e.deltaY
      const atLeft = container.scrollLeft <= 0
      const atRight = container.scrollLeft >= maxScroll - 1
      if ((deltaY < 0 && atLeft) || (deltaY > 0 && atRight)) return

      e.preventDefault()
      e.stopPropagation()
      const sensitivity = 1
      const next = clamp(container.scrollLeft + deltaY * sensitivity, 0, maxScroll)
      animateScrollTo(next)
    }

    let touchStartY = 0
    let lastTouchY = 0
    const onTouchStart = (e: TouchEvent) => {
      if (!e.touches?.[0]) return
      touchStartY = e.touches[0].clientY
      lastTouchY = touchStartY
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isInView) return
      if (!e.touches?.[0]) return
      const currentY = e.touches[0].clientY
      const delta = lastTouchY - currentY
      lastTouchY = currentY
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
      if (maxScroll <= 0) return
      const atLeft = container.scrollLeft <= 0
      const atRight = container.scrollLeft >= maxScroll - 1
      if ((delta < 0 && atLeft) || (delta > 0 && atRight)) return

      e.preventDefault()
      e.stopPropagation()
      const sensitivity = 1
      const next = clamp(container.scrollLeft + delta * sensitivity, 0, maxScroll)
      animateScrollTo(next)
    }

    section.addEventListener("wheel", onWheel, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false })

    return () => {
      section.removeEventListener("wheel", onWheel as any)
      section.removeEventListener("touchstart", onTouchStart as any)
      section.removeEventListener("touchmove", onTouchMove as any)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [isInView])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onPointerDown = (e: PointerEvent) => {
      if ((e as any).button !== undefined && (e as any).button !== 0) return
      setIsDragging(true)
      dragStartX.current = e.clientX
      dragStartScroll.current = container.scrollLeft
      if ((e.target as HTMLElement).setPointerCapture) {
        try {
          ; (e.target as HTMLElement).setPointerCapture(e.pointerId)
        } catch { }
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const dx = dragStartX.current - e.clientX
      container.scrollLeft = dragStartScroll.current + dx
    }

    const onPointerUp = (e: PointerEvent) => {
      setIsDragging(false)
      if ((e.target as HTMLElement).releasePointerCapture) {
        try {
          ; (e.target as HTMLElement).releasePointerCapture(e.pointerId)
        } catch { }
      }
    }

    container.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    let touchDragging = false
    let touchStartX = 0
    let touchStartScroll = 0
    const onTouchStartDrag = (ev: TouchEvent) => {
      if (!ev.touches?.[0]) return
      touchDragging = true
      touchStartX = ev.touches[0].clientX
      touchStartScroll = container.scrollLeft
      setIsDragging(true)
    }
    const onTouchMoveDrag = (ev: TouchEvent) => {
      if (!touchDragging) return
      if (!ev.touches?.[0]) return
      const dx = touchStartX - ev.touches[0].clientX
      container.scrollLeft = touchStartScroll + dx
    }
    const onTouchEndDrag = () => {
      touchDragging = false
      setIsDragging(false)
    }

    container.addEventListener("touchstart", onTouchStartDrag, { passive: true })
    container.addEventListener("touchmove", onTouchMoveDrag, { passive: false })
    container.addEventListener("touchend", onTouchEndDrag, { passive: true })

    return () => {
      container.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)

      container.removeEventListener("touchstart", onTouchStartDrag as any)
      container.removeEventListener("touchmove", onTouchMoveDrag as any)
      container.removeEventListener("touchend", onTouchEndDrag as any)
    }
  }, [isDragging])

  const MobileArchitectureCarousel = () => {
    const ref = useRef<HTMLDivElement>(null)

    return (
      <section className="relative lg:hidden">
        <div
          ref={ref}
          className="flex overflow-x-auto scroll-smooth [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          <ArchitectureCards items={systemArchitecure} cardWidth="70%" />
        </div>
      </section>
    )
  }

  return (
    <main>
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-8 lg:pt-[3.333vw] pb-9  lg:pb-[3.802vw]">
          <div className="static lg:relative block lg:grid items-start gap-10 text-[3.75vw] md:grid-cols-2">
            <div>
              <h1 className="mt-[2.031vw] leading-tight font-semibold">
                {liferayArchitectureHeroData.titleLine1}
                <br />
                <span className="block">{liferayArchitectureHeroData.titleLine2}</span>
                <span className="block">{liferayArchitectureHeroData.titleLine3}</span>
              </h1>
            </div>
            <p className="mt-[18px] md:mt-[43px] lg:mt-0 text-p14 md:text-p18 lg:text-p18 static lg:absolute bottom-0 text-left lg:text-right text-white md:justify-self-end">
              {liferayArchitectureHeroData.description}
              <br className="hidden lg:block" />
              {liferayArchitectureHeroData.description2}
            </p>
          </div>

          <div className="mt-9.5 lg:mt-[3.177vw] flex flex-wrap gap-[1.875vw]">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="text-p12 md:text-p20 lg:text-p20 inline-flex items-center rounded-full border border-[#374151] px-4 py-3   lg:px-[1.458vw] lg:py-[0.833vw] text-lg text-white shadow-[0px_4px_10px_0px_#00979E40] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="relative hidden lg:block">
        <div
          style={{ height: "300vh" }}
          className="pointer-events-none absolute top-[137px] left-0 w-full"
        />
        <div className={`w-full ${isStickyActive ? "sticky top-[137px]" : ""}`}>
          <div
            ref={containerRef}
            className={`flex ${isDragging ? "cursor-grabbing" : "cursor-grab"} overflow-x-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden`}
          >
            <ArchitectureCards items={systemArchitecure} cardWidth="22%" />
          </div>
        </div>
      </section>

      <MobileArchitectureCarousel />

      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-4 py-7 md:py-16 lg:py-[3.333vw]">
          <div className="relative block lg:grid items-start gap-10 md:grid-cols-2">
            <h2 className="w-auto lg:w-[41.25vw] font-semibold">
              {liferayArchitectureKeyData.titleLine1}
            </h2>
            <p className="max-w-auto lg:max-w-[31.25vw] self-center text-left lg:text-right text-p14 md:text-p18 lg:text-p18 text-white mt-2.5 md:mt-7 lg:mt-0">
              {liferayArchitectureKeyData.description} <br className="hidden lg:block" />
              {liferayArchitectureKeyData.description2}
            </p>
          </div>

          <div className="mt-4 lg:mt-[3.49vw] grid grid-cols-1 gap-[25px] md:gap-9 lg:gap-[1.875vw]">
            {keyActivityArchitecureSystem.map((item, index) => (
              <div key={index} className="top-32 z-10 flex flex-col bg-black justify-between md:flex-row md:items-center">
                <div className="flex md:w-[16.406vw] w-full min-w-[16.406vw] py-3 lg:py-[0.833vw] pr-6 lg:pr-[1.875vw] text-[1.25rem] md:text-[1.875rem] lg:text-[1.563vw] lg:leading-[1.875vw] font-semibold md:leading-9">
                  {item.text}
                </div>
                <div className="md:max-w-[28.313rem] lg:max-w-none text-p14 lg:text-p20 flex items-center rounded-lg border border-[#1F2937]  md:mt-0 px-[25px] md:px-9 lg:px-[1.875vw] py-2 lg:py-[1.146vw]">
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
      <TalkToExpert
        heading={talkToExpertArcData.heading}
        description={talkToExpertArcData.description}
        buttonText={talkToExpertArcData.buttonText}
      />
      <BlogSection />
    </main>
  )
}
