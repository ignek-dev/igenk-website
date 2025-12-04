"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import WhatWeBringCard from "./WhatWeBringCard"
import { cardData, whatWeBringHeader } from "data/homepage-content"

const START_BUFFER_FRAC = 0.15
const END_BUFFER_FRAC = 0.25

const MAX_TOP_BUFFER_PX_DESKTOP = 120
const MAX_TOP_BUFFER_PX_MOBILE = 64

const WhatWeBring: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [topBufferPx, setTopBufferPx] = useState<number>(0)
  const [bottomBufferPx, setBottomBufferPx] = useState<number>(0)
  const [travelPx, setTravelPx] = useState(0)

  useEffect(() => {
    function recompute() {
  const scroller = scrollerRef.current;
  if (!scroller) return;

  const totalWidth = scroller.scrollWidth;
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  const gap = 44;
  const pr  = 44;

  const lastCard = scroller.lastElementChild as HTMLElement | null;
  const lastCardWidth = lastCard?.offsetWidth || 0;

  const horizontalDistancePx = Math.max(
    0,
    totalWidth - viewportW - lastCardWidth - gap - pr + lastCardWidth + 400
  );

  // raw buffers
  const rawTopPx = Math.round(START_BUFFER_FRAC * viewportH);
  const rawBottomPx = Math.round(END_BUFFER_FRAC * viewportH);

  // clamp top buffer — smaller on mobile
  const maxTopPx = 64; // tweak values to taste
  const topPx = Math.min(rawTopPx, maxTopPx);

  // optionally clamp bottom too (if you want)
  const maxBottomPx = 200;
  const bottomPx = Math.min(rawBottomPx, maxBottomPx);

  const newContainerHeight = horizontalDistancePx + viewportH + topPx + bottomPx;

  setContainerHeight(newContainerHeight);
  setTopBufferPx(topPx);
  setBottomBufferPx(bottomPx);
  setTravelPx(horizontalDistancePx);
}


    recompute()
    window.addEventListener("resize", recompute)
    return () => window.removeEventListener("resize", recompute)
  }, [])

  // useScroll scoped to the containerRef — returns progress 0..1 while scrolling through container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // full scroll over the container's height
  })

  const computeRaw = () => {
    // Avoid division by zero if containerHeight not ready
    if (containerHeight <= 0) return { start: START_BUFFER_FRAC, end: 1 - END_BUFFER_FRAC }

    const start = topBufferPx / containerHeight // progress value where movement starts
    const end = 1 - bottomBufferPx / containerHeight // progress value where movement ends
    // clamp to sensible min/max
    const s = Math.min(Math.max(start, 0), 0.5)
    const e = Math.max(Math.min(end, 1), 0.5)
    return { start: s, end: e }
  }

  const { start, end } = computeRaw()

  // Make a four-point transform so we have explicit pause at beginning and end
  const rawX = useTransform(scrollYProgress, [0, start, end, 1], ["0px", "0px", `-${travelPx}px`, `-${travelPx}px`])

  const x = useSpring(rawX, { stiffness: 90, damping: 16 })

  return (
    // tall parent — scroll passes through this and the sticky child remains visible during scroll
    <div ref={containerRef} style={{ height: containerHeight }} className="relative bg-black">
      {/* Top pause buffer (px) to ensure initial pause — keeps first cards visible */}
      {containerHeight > 0 && <div style={{ height: topBufferPx }} />}
      {/* <div style={{ height: topBufferPx }} /> */}

      <section
        ref={stickyRef}
        className="sticky top-0 z-10 flex items-center overflow-hidden py-[3.333vw] text-white"
        style={{ height: "100vh" }}
      >
        <div className="global-container w-full">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2>
              {whatWeBringHeader.headingLine1}
              <br />
              {whatWeBringHeader.headingLine2}
            </h2>
            <p className="p18 w-[38.594vw] pt-0 text-right text-gray-300">{whatWeBringHeader.description}</p>
          </div>

          {/* Horizontal scroller */}
          <motion.div
            ref={scrollerRef}
            style={{ x }}
            className="flex w-max gap-8 pt-15 pr-11 pb-16"
          >
            {cardData.map((card) => (
              <WhatWeBringCard
                key={card.cardNumber}
                cardNumber={card.cardNumber}
                title={card.title}
                description={card.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ height: bottomBufferPx }} />
    </div>
  )
}

export default WhatWeBring
