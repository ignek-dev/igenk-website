// components/Achievements.tsx
"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import StatCard from "./StatCard"
import ScheduleMeetingButton from "../Button/ScheduleMeetingButton"
import { achievementsSection, statData } from "data/homepage-content"



const Achievements = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} className="overflow-x-hidden bg-black py-12 md:py-16 text-white">
      <div className="global-container grid items-start gap-[5vw] lg:grid-cols-2">
        {/* Left Column: Title, Description, Button */}
        <div
          className={`flex flex-col items-start ${isInView ? "animate-when-visible animate-slide-left" : "opacity-0"}`}
        >
          <h2 className="mb-4 md:mb-[1.458vw] max-w-[658px]">
            {achievementsSection.headingLine1}
            <br />
            {achievementsSection.headingLine2}
          </h2>
          <p className="mb-[1.458vw] max-w-[588px] text-p16 md:text-p18 text-gray-300">
            {achievementsSection.description}
          </p>
          {/* <ScheduleMeetingButton isFullWidth={false} btnName={achievementsSection.buttonText} /> */}
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-1 gap-x-[5vw] md:gap-y-[3.49vw] gap-y-[42px] sm:grid-cols-2">
          {statData.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              title={stat.title}
              description={stat.description}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
