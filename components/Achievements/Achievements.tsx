// components/Achievements.tsx
"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import StatCard from "./StatCard"
import ScheduleMeetingButton from "../Button/ScheduleMeetingButton"

const statData = [
  {
    number: "80+",
    title: "Project Completed",
    description: "We’ve successfully delivered a diverse range of digital products—from corporate websites to complex enterprise solutions.",
  },
  {
    number: "50+",
    title: "In House Developers",
    description: "Our experienced and dedicated team of developers ensures quality, security, and on-time delivery in every project.",
  },
  {
    number: "98%",
    title: "Client Satisfaction Rate",
    description: "We focus on collaboration, transparency, and innovation—earning the trust and satisfaction of clients across industries.",
  },
  {
    number: "10+",
    title: "Years Of Experience",
    description: "With over a decade in the industry, we bring deep expertise, proven methodologies, and strategic insights to every project.",
  },
]

const Achievements = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} className="overflow-x-hidden bg-black py-16 text-white">
      <div className="mx-auto grid w-full items-start gap-16 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Left Column: Title, Description, Button */}
        <div
          className={`flex flex-col items-start ${isInView ? "animate-when-visible animate-slide-left" : "opacity-0"}`}
        >
          <h2 className="mb-8 max-w-lg text-5xl leading-tight font-bold">
            Flexible Platforms.
            <br />
            Scalable Experiences.
          </h2>
          <p className="mb-10 max-w-md text-lg text-gray-300">
            We design and develop digital solutions that adapt and grow with your business needs. Our platforms are built to deliver seamless performance, exceptional user experiences, and long-term scalability.
          </p>
          <ScheduleMeetingButton isFullWidth={false} btnName="Schedule Meeting" />
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
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
