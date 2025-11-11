"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "hooks/useInView"

// declare var window: any;
const highlights = [
  {
    title: "Liferay-First Approach",
    desc: "We specialize exclusively in latest Liferay development, ensuring deep focus and unmatched expertise.",
    // sub: "We work as an extension of your team, aligning with your goals instead of just delivering tasks.",
  },
  {
    title: "Partner, Not Vendor",
    desc: "We work as an extension of your team, aligning with your goals instead of just delivering tasks.",
    // sub: "This helps ensure alignment with business goals before full-scale implementation.",
  },
  {
    title: "Best Practices Only",
    desc: "Every solution follows Liferay and industry best practices for security, scalability, and sustainability.",
    // sub: "You can rely on us for maintenance, upgrades, and continuous improvement.",
  },
  {
    title: "Pre-Sales Support",
    desc: "Strengthen your proposals with our technical insights and solution expertise.",
    // sub: "You can rely on us for maintenance, upgrades, and continuous improvement.",
  },
  {
    title: "Accelerated Delivery",
    desc: "Benefit from our library of ready-to-use modules, connectors, and integrations.",
    // sub: "You can rely on us for maintenance, upgrades, and continuous improvement.",
  },
  {
    title: "Proven Industry Recognition",
    desc: "Top-rated on Upwork, with 200+ technical blogs and detailed case studies showcasing our success.",
    // sub: "You can rely on us for maintenance, upgrades, and continuous improvement.",
  },
]

const WhatMake = () => {
  return (
    <section className="py-[64px] lg:py-[64px]">
    <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
      <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
        {/* Left Column */}
        <div className="flex-1 space-y-[26px] pt-[4px] md:sticky md:top-24">
          <h1 className="text-5xl leading-[64px] font-bold tracking-[-0.02em]">
          What Makes IGNEK 
          <br/>The Right Choice
          </h1>
          <p className="leading-[28px] max-w-[520px] text-gray/500 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla,
          </p>
        </div>

        {/* Right Column - Card Stack */}
        <div className="relative flex flex-1 flex-col items-end">
          <div className="relative w-full max-w-[883px]">
            {highlights.map((item, index) => {
              const [ref, isInView] = useInView({ triggerOnce: true })

              return (
                <div
                  ref={ref as React.RefObject<HTMLDivElement>}
                  key={index}
                  className={`sticky mb-16 transition-opacity duration-500 ${
                    isInView ? "animate-stack-in" : "opacity-0"
                  }`}
                  style={{ top: `calc(6rem + ${index * 4}rem)` }}>
                  <div className="whatsmake-card flex w-full flex-col justify-center rounded-2xl border border-[#E5E7EB] bg-[#ffffff] p-9 pt-6 backdrop-blur-md md:min-h-[196px]">
                    <h3 className="mb-3 text-2xl leading-tight font-semibold">{item.title}</h3>
                    <div className="mb-4 h-[1.8px] bg-[#E5E7EB]" />
                    <p className="text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatMake
