"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
export interface CaseStudy {
  id: number
  image: string
  tag: string
  title: string
  description: string
}
interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[]
}

const CaseStudy: React.FC<CaseStudyCarouselProps> = ({ caseStudies }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="overflow-hidden bg-black py-16 text-white">
      <div className="max-w-7xl px-[150px]">
        <h2 className="mb-10 px-4 text-3xl font-semibold">Related Case Studies</h2>

        <div className="relative flex transition-transform duration-700 ease-in-out">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[1176px] flex-shrink-0 px-4 transition-transform duration-[2000ms] md:px-4"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${caseStudies.length * 100}%`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="flex flex-col gap-8 rounded-2xl border border-gray-800 bg-[#0f0f0f] p-4 md:flex-row">
                {/* Image */}
                <div className="h-[318px] w-[420px] flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={420}
                    height={318}
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                  <span className="mb-0 inline-block w-[max-content] rounded-full border border-cyan-400 px-4 py-1 text-sm font-medium text-cyan-400">
                    {item.tag}
                  </span>
                  <h3 className="mb-4 text-2xl leading-snug font-bold md:text-3xl">{item.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-gray-400">{item.description}</p>
                  <button className="w-[max-content] rounded-2xl border border-cyan-400 px-4 py-2 text-sm font-medium text-white transition-all hover:text-cyan-400">
                    Read case study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
