"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import AccordionMain from "./AccordionMain"
import ExpertCard from "./ExpertCard"
import { faqItems, heroCTASection } from "data/homepage-content"



const HeroCTASection: React.FC = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} className="bg-black py-16 text-white lg:py-16">
      <div className="global-container grid min-h-[40vh] items-stretch gap-[6.25vw] lg:grid-cols-2">
        {/* LEFT : Title, Text & FAQ */}
        <div
          className={`${
            isInView ? "animate-when-visible animate-slide-left" : "opacity-0"
          } flex h-full flex-col justify-between w-[44.531vw]`}
        >
          <h2 className="">
            {heroCTASection.headingLine1}
            <span className="block">{heroCTASection.headingLine2}</span>
          </h2>

          <p className="mt-[0.833vw] mb-12 text-lg text-gray-400">
            {heroCTASection.description}
          </p>

          {/* UPDATED: One AccordionMain for all FAQ */}
          <AccordionMain items={faqItems} defaultOpenIndex={null} />
        </div>

        {/* RIGHT : Expert Card */}
        <div
          className={`${
            isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
          } flex justify-end`}
        >
          <div className="sticky top-24 ml-auto">
            <ExpertCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTASection
