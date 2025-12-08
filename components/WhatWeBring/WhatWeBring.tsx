"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useCallback, useLayoutEffect, useRef, useState } from "react"
import WhatWeBringCard from "./WhatWeBringCard"
import { cardData, whatWeBringHeader } from "data/homepage-content"

const WhatWeBring: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardsViewportRef = useRef<HTMLDivElement | null>(null)
  const [layout, setLayout] = useState({
    stickyHeight: 0,
    scrollDistance: 0,
    sectionHeight: 0,
  })

  const progress = useMotionValue(0)
  const progressRef = useRef(0)

  const updateProgress = useCallback(
    (nextValue: number) => {
      if (layout.scrollDistance <= 0) return
      const clamped = Math.max(0, Math.min(1, nextValue))
      progressRef.current = clamped
      progress.set(clamped)
    },
    [layout.scrollDistance, progress]
  )

  useLayoutEffect(() => {
    const computeLayout = () => {
      const stickyHeight = stickyRef.current?.offsetHeight ?? 0
      const trackWidth = trackRef.current?.scrollWidth ?? 0
      const containerWidth = cardsViewportRef.current?.offsetWidth ?? window.innerWidth
      const horizontalOverflow = Math.max(0, trackWidth - containerWidth)

      // keep section height tightly bound to visible content while ensuring sticky has a tiny scroll runway
      const extra = horizontalOverflow > 0 ? 1 : 0

      setLayout({
        stickyHeight,
        scrollDistance: horizontalOverflow,
        sectionHeight: stickyHeight + extra,
      })
    }

    computeLayout()

    const resizeObserver = new ResizeObserver(() => computeLayout())
    if (stickyRef.current) resizeObserver.observe(stickyRef.current)
    if (trackRef.current) resizeObserver.observe(trackRef.current)
    window.addEventListener("resize", computeLayout)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", computeLayout)
    }
  }, [])

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl || layout.scrollDistance <= 0) return

    const isWithinSection = () => {
      const cardsEl = cardsViewportRef.current
      if (!cardsEl) return false
      const rect = cardsEl.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      // Activate horizontal scroll only when the cards strip is fully visible in the viewport
      return rect.top >= 0 && rect.bottom <= viewportHeight
    }

    const handleWheel = (event: WheelEvent) => {
      if (!isWithinSection()) return
      const delta = event.deltaY
      if (
        (delta > 0 && progressRef.current >= 1) ||
        (delta < 0 && progressRef.current <= 0)
      ) {
        return
      }

      event.preventDefault()
      const next = progressRef.current + delta / (layout.scrollDistance || 1)
      updateProgress(next)
    }

    let touchStartY = 0
    const handleTouchStart = (event: TouchEvent) => {
      const firstTouch = event.touches[0]
      if (!firstTouch) return
      touchStartY = firstTouch.clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!isWithinSection()) return
      const firstTouch = event.touches[0]
      if (!firstTouch) return
      const currentY = firstTouch.clientY
      const delta = touchStartY - currentY
      touchStartY = currentY

      if (
        (delta > 0 && progressRef.current >= 1) ||
        (delta < 0 && progressRef.current <= 0)
      ) {
        return
      }

      event.preventDefault()
      const next = progressRef.current + delta / (layout.scrollDistance || 1)
      updateProgress(next)
    }

    sectionEl.addEventListener("wheel", handleWheel, { passive: false })
    sectionEl.addEventListener("touchstart", handleTouchStart, { passive: false })
    sectionEl.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      sectionEl.removeEventListener("wheel", handleWheel)
      sectionEl.removeEventListener("touchstart", handleTouchStart)
      sectionEl.removeEventListener("touchmove", handleTouchMove)
    }
  }, [layout.scrollDistance, layout.stickyHeight, updateProgress])

  const xMotion = useTransform(progress, (value) => -value * layout.scrollDistance)
  const x = useSpring(xMotion, { stiffness: 160, damping: 26, mass: 0.6 })

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: layout.sectionHeight || undefined }}
      className="relative bg-black text-white"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 z-10 flex items-center overflow-hidden py-[3.333vw]"
      >
        <div className="w-full global-container">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <h2>
                {whatWeBringHeader.headingLine1}
              <br />
                {whatWeBringHeader.headingLine2}
            </h2>
            <p className="max-w-[46.594vw] text-right p18 text-gray-300">
                 {whatWeBringHeader.description}
            </p>
          </div>

          <div ref={cardsViewportRef} className="pt-[3.177vw]">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex space-x-11"
            >
              {cardData.map((card) => (
                <div key={card.cardNumber} className="flex-shrink-0">
                  <WhatWeBringCard
                    cardNumber={card.cardNumber}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBring
