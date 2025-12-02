"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"

const cardsData = [
  {
    title: "Business Acceleration",
    desc: "As a leading Liferay Development Company, we empower businesses with fast, scalable, and result-driven solutions.",
  },
  {
    title: "Custom Expertise",
    desc: "IGNEK crafts tailored Liferay solutions designed to optimize business performance and enhance user engagement.",
  },
  {
    title: "Collaborative Success",
    desc: "Partner with IGNEK, a Liferay Boutique Company, for transparent collaboration and impactful digital transformation outcomes.",
  },
  {
    title: "Cutting-Edge Technologies",
    desc: "We leverage modern tools and Liferay innovations to create seamless, future-ready digital experiences.",
  },
  {
    title: "Well-Tested Delivery",
    desc: "Our Liferay solutions undergo rigorous testing, ensuring stability, scalability, and long-term business value.",
  },
  {
    title: "Enterprise Solutions",
    desc: "IGNEK delivers world-class Liferay development services that adapt to your evolving digital transformation goals.",
  },
  {
    title: "Round-the-Clock Support",
    desc: "Our expert team provides 24/7 assistance, ensuring your Liferay platform runs smoothly without interruptions.",
  },
]

const StandoutSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [scrollMultiplier] = useState(1.5)
  const [progress, setProgress] = useState(0)
  
  const x = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 })

  useEffect(() => {
    function calculateMaxScroll() {
      const scroller = scrollerRef.current
      if (!scroller) return

      const totalWidth = scroller.scrollWidth
      const viewportW = window.innerWidth
      const gap = (3.333 / 100) * viewportW

      const lastCard = scroller.lastElementChild as HTMLElement | null
      const lastCardWidth = lastCard?.offsetWidth || 0

      const maxScrollDistance = Math.max(
        0,
        totalWidth - viewportW - lastCardWidth - gap + lastCardWidth + 400
      )

      setMaxScroll(maxScrollDistance)
    }

    calculateMaxScroll()
    window.addEventListener("resize", calculateMaxScroll)
    const timeout = setTimeout(calculateMaxScroll, 100)
    
    return () => {
      window.removeEventListener("resize", calculateMaxScroll)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const scrollEnd = containerRect.height - window.innerHeight

      if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
        const scrolled = Math.abs(containerRect.top)
        const progressValue = scrolled / scrollEnd
        const clampedProgress = Math.max(0, Math.min(1, progressValue))
        x.set(-clampedProgress * maxScroll)
        setProgress(clampedProgress)
      } else if (containerRect.top > 0) {
        x.set(0)
        setProgress(0)
      } else {
        x.set(-maxScroll)
        setProgress(1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [maxScroll, x])

  const containerHeight = maxScroll * scrollMultiplier + (typeof window !== 'undefined' ? window.innerHeight : 800)

  return (
    <div ref={containerRef} className="relative" style={{ height: `${containerHeight}px`}}>
      <section className="sticky top-[6.5vh] isolate overflow-hidden global-container py-[3.333vw] h-screen">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about/standout-img.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.80)_100%)]" />
        </div>

        {/* Canvas container */}
        <div className="h-full flex flex-col justify-center">
          <div className="flex justify-between items-center">
            {/* H1 */}
            <h2
              className="leading-[3.125vw] mt-[0.1vh] text-white capitalize"
            >
              What Makes Us Stand Out
              <br />
              In A Crowded Market
            </h2>

            <p className="text-right text-[0.938vw] leading-[1.563vw] text-[#E5E7EB]">
              Following standard serve as strong evidence of our position as the
              <br />
              experts in software development services.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            ref={scrollerRef}
            className="flex mt-[5.885vw] w-max gap-[3.333vw] pr-[3.333vw] will-change-transform"
            style={{ x: smoothX }}
          >
            {cardsData.map((card, i) => (
              <div
                key={i}
                className="snap-start relative shrink-0 rounded-[1.563vw] bg-[#00000094] w-[21.719vw] backdrop-blur-[2px] text-center text-white px-[2.76vw] pt-[3.438vw] pb-[4.115vw] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="text-center capitalize text-[1.875vw] leading-[2.604vw] h-[5.208vw] tracking-[-2%]">
                  {card.title}
                </div>

                <div className="text-center h-[6.25vw] text-[#E5E7EB] text-[1.042vw] leading-[1.563vw] mt-[2.24vw]  ">
                  {card.desc}
                </div>

                <div className="h-[0.052vw] bg-[#9CA3AF] mt-[3.177vw]" />
              </div>
            ))}
          </motion.div>

          {/* Scrollbar Progress */}
          <div className="relative w-full mt-[3.875rem]">
            <div className="border border-[#6B7280] "></div>
            <div 
              className="absolute top-0 left-0 border border-[#9CA3AF] transition-all duration-200 ease-out"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StandoutSection