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
  liferayArchitectureHeroData,
  liferayArchitectureKeyData,
  LiferayArchitectureSubContent,
  LiferayArchitectureTitle1,
  LiferayArchitectureTitle2,
  systemArchitecure,
  talkToExpertArcData,
} from "data/liferay-architecture-design"

const metadata: Metadata = {
  title: "Liferay Architecture Design Services | Enterprise Liferay Experts – IGNEK",
  description:
    "Design scalable, secure Liferay architectures with IGNEK. Expert Liferay architecture design services built on best practices for long-term enterprise growth.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-architecture-design/",
    title: "Liferay Architecture Design Services | Enterprise Liferay Experts – IGNEK",
    description:
      "Design scalable, secure Liferay architectures with IGNEK. Expert Liferay architecture design services built on best practices for long-term enterprise growth.",
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
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)

  const [isInView, setIsInView] = useState(false)
  const [isStickyActive, setIsStickyActive] = useState(false)

  // detect intersection to know when to enable horizontal handling
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
        // leave threshold low so it becomes active when a chunk of the section is visible
        threshold: 0.25,
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // sticky state (so header can become sticky at the same offset you used)
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      // activate sticky when the top of the section reaches the offset you used previously
      const stickyOffset = 137
      setIsStickyActive(rect.top <= stickyOffset && rect.bottom > stickyOffset)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // wheel and touch mapping to horizontal scroll
  useEffect(() => {
    const container = containerRef.current
    const section = sectionRef.current
    if (!container || !section) return

    let rafId: number | null = null

    const clamp = (v: number, a = 0, b = Infinity) => Math.min(Math.max(v, a), b)

    // performs the actual scrollLeft change on next animation frame for smoothness
    const animateScrollTo = (targetLeft: number) => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        container.scrollLeft = targetLeft
        rafId = null
      })
    }

    const onWheel = (e: WheelEvent) => {
      // only intercept when our section is visible (controlled by IntersectionObserver)
      if (!isInView) return

      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
      if (maxScroll <= 0) return // nothing to do

      const deltaY = e.deltaY

      const atLeft = container.scrollLeft <= 0
      const atRight = container.scrollLeft >= maxScroll - 1 // small epsilon

      // If user attempts to scroll past bounds, allow page to scroll normally.
      // We only preventDefault when we're actually moving the horizontal track.
      if ((deltaY < 0 && atLeft) || (deltaY > 0 && atRight)) {
        return
      }

      e.preventDefault()
      e.stopPropagation()

      // adjust sensitivity here if needed
      const sensitivity = 1 // 1 = direct mapping; <1 slower; >1 faster
      const next = clamp(container.scrollLeft + deltaY * sensitivity, 0, maxScroll)

      animateScrollTo(next)
    }

    // Touch handling for phones
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

      if ((delta < 0 && atLeft) || (delta > 0 && atRight)) {
        // allow page scrolling when track is at bounds
        return
      }

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

  // Drag-to-scroll (mouse + touch) for the horizontal strip
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onPointerDown = (e: PointerEvent) => {
      // Only left mouse button or touch
      if ((e as any).button !== undefined && (e as any).button !== 0) return
      setIsDragging(true)
      dragStartX.current = (e as PointerEvent).clientX
      dragStartScroll.current = container.scrollLeft
      // capture pointer to continue receiving events outside element
      // @ts-ignore - some environments have setPointerCapture on HTMLElement
      if ((e.target as HTMLElement).setPointerCapture) {
        try {
          ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
        } catch (err) {
          // ignore
        }
      }
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const dx = dragStartX.current - e.clientX
      container.scrollLeft = dragStartScroll.current + dx
    }

    const onPointerUp = (e: PointerEvent) => {
      setIsDragging(false)
      // release pointer capture if possible
      // @ts-ignore
      if ((e.target as HTMLElement).releasePointerCapture) {
        try {
          ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
        } catch (err) {
          // ignore
        }
      }
    }

    container.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    // Fallback for touch (older browsers)
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

  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-[3.333vw] pb-[3.802vw]">
          <div className="relative grid items-start gap-10 text-[3.75vw] md:grid-cols-2">
            <div>
              <h1 className="mt-[2.031vw] leading-tight font-semibold">
                {liferayArchitectureHeroData.titleLine1}
                <br />
                <span className="block">{liferayArchitectureHeroData.titleLine2}</span>
                <span className="block">{liferayArchitectureHeroData.titleLine3}</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 text-right text-white md:justify-self-end">
              {liferayArchitectureHeroData.description}
              <br />
              {liferayArchitectureHeroData.description2}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-[1.875vw]">
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

      {/* ===== Horizontal scroll section (UPDATED) ===== */}
      <section ref={sectionRef} className="relative">
        {/* An invisible tall layer gives page vertical scroll room while sticky header remains */}
        <div
          style={{ height: "300vh" }}
          className="pointer-events-none absolute top-[137px] left-0 h-[300vh] w-full"
          aria-hidden="true"
        />

        <div className="mx-auto w-full">
          <div className={`w-full ${isStickyActive ? "sticky top-[137px]" : ""}`}>
            <div
              ref={containerRef}
              // Use cursor-grab while not dragging and grabbing cursor while dragging
              className={`flex ${isDragging ? "cursor-grabbing" : "cursor-grab"} overflow-x-auto [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden`}
              // Prevent native touch scrolling on the container for smoother custom touch control:
              // (we still handle touch at section level to map vertical to horizontal)
              onTouchMove={(e) => {
                // no-op to allow our touch handlers to control scrolling (prevents passive defaults)
              }}
            >
              {systemArchitecure.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-[3.333vw] ${index === 0 ? "ml-[10vw] pl-0" : ""} ${
                    index === systemArchitecure.length - 1 ? "mr-[20vw]" : ""
                  } ${index !== systemArchitecure.length - 1 ? "border-r border-[#9CA3AF]" : ""}`}
                  style={{ width: "22%" }}
                >
                  <div className="flex flex-col gap-[2vw]">
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
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-4 py-[3.333vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="w-[41.25vw] text-[2.5vw]! font-semibold">
              {liferayArchitectureKeyData.titleLine1}
            </h2>
            <p className="max-w-[31.25vw ] self-center text-right text-[0.938vw] font-normal text-white">
              {liferayArchitectureKeyData.description} <br />
              {liferayArchitectureKeyData.description2}
            </p>
          </div>

          <div className="mt-[3.49vw] grid grid-cols-1 gap-[1.875vw]">
            {keyActivityArchitecureSystem.map((item, index) => (
              <div key={index} className="top-32 z-10 flex flex-col bg-black md:flex-row md:items-center">
                {/* Left Text */}
                <div className="flex w-[16.406vw] min-w-[16.406vw] py-[0.833vw] pr-[1.875vw] text-[1.563vw] leading-[1.875vw] font-semibold">
                  {item.text}
                </div>

                {/* Description */}
                <div className="p20 flex items-center rounded-lg border border-[#1F2937] px-[1.875vw] py-[0.938vw] py-[1.146vw]">
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
