"use client"

import { liferayTechStacksData, stackData } from "data/hire-liferay-developer"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

export const LiferayTechnologicalStacks = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cols, setCols] = useState(4) // Dynamic column count for grid math
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleResize = () => {
      setCols(window.innerWidth < 1024 ? 2 : 4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleInteraction = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative bg-[#F6F6F6] py-16 lg:py-[3.333vw] text-black">
      <div className="global-container">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-[2.5vw] font-semibold">{liferayTechStacksData.title}</h2>
          <p className="text-p16 md:text-p18 mt-4 lg:mt-[1.458vw] text-black/80">
            {liferayTechStacksData.description}
          </p>
        </div>

        {/* ========================================================
            MOBILE LAYOUT
           ======================================================== */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {stackData.map((item, index) => {
            const isActive = activeIndex === index;
            const techItems = item.technologies ?? [];
            const total = techItems.length;

            return (
              <div key={index} className="flex flex-col">
                {/* Category Header */}
                <div
                  onClick={() => handleInteraction(index)}
                  className={`relative flex cursor-pointer items-center border-l-[5px] p-5 pl-8 transition-all duration-300 shadow-sm
                    ${isActive ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black border-gray-300"}
                  `}
                >
                  <div>
                    <h4 className="text-xl font-medium">{item.category}</h4>
                    <p className={`mt-1 text-sm ${isActive ? "text-white/90" : "text-black/70"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Tech Grid */}
                {isActive && (
                  <div className="mt-4 bg-white rounded-xl overflow-hidden border border-gray-200 animate-fade-in">
                    <div className="tech-grid grid grid-cols-2">
                      {techItems.map((tech, techIdx) => {
                        const colIndex = techIdx % 2;
                        const isLastCol = colIndex === 1;
                        const isLastRow = techIdx >= total - 2;

                        return (
                          <div 
                            key={techIdx} 
                            className={`tech-cell relative flex flex-col items-center justify-center text-center p-6 transition
                              ${isLastCol ? "tech-cell--last-col" : ""} 
                              ${isLastRow ? "tech-cell--last-row" : ""}
                            `}
                          >
                            <Image src={tech.logo} alt={tech.name} width={80} height={80} className="object-contain" />
                            <span className="mt-3 text-sm font-medium text-black/90">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================
            TABLET & DESKTOP LAYOUT: SIDE-BY-SIDE 
           ======================================================== */}
        <div className="item-start relative mt-10 lg:mt-[3.385vw] hidden md:flex md:flex-row md:gap-8 lg:gap-16" ref={containerRef}>
          {/* Left Side: Categories */}
          <div className="relative z-10 flex w-1/3 lg:w-1/4 flex-col gap-y-4 lg:gap-y-[1.5vw]">
            {stackData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                // Click for Tablet, Hover for Desktop
                onClick={() => handleInteraction(index)}
                onMouseEnter={() => handleInteraction(index)}
                className={`relative flex cursor-pointer items-center border-l-[5px] p-4 lg:p-[20px] pl-6 lg:pl-[32px] transition-all duration-300 
                  ${activeIndex === index ? "bg-blue-600 text-white shadow-md border-blue-600" : "text-black hover:bg-blue-100 border-[#D1D5DB]"}`}
                style={{ minHeight: "90px" }}
              >
                <div>
                  <h4 className="text-lg! lg:text-[1.563vw]! font-medium! leading-tight!">{item.category}</h4>
                  <p className={`mt-1 lg:mt-[4px] text-xs lg:text-[0.833vw] hidden md:block ${activeIndex === index ? "text-white/90" : "text-black/70"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Technology Grid with Borders */}
          <div className="w-2/3 lg:w-3/4 bg-white lg:bg-transparent rounded-xl lg:rounded-none border border-gray-200 lg:border-none transition-all duration-300 md:sticky md:top-[20%] lg:top-[20%] h-fit">
            <div className={`tech-grid grid overflow-hidden border-t border-l border-gray-200 ${cols === 2 ? "grid-cols-2" : "grid-cols-4"}`}>
              {stackData[activeIndex]?.technologies.map((tech, index) => {
                const total = stackData[activeIndex]?.technologies?.length ?? 0;
                const colIndex = index % cols
                const lastCol = colIndex === cols - 1
                const lastRow = index >= total - cols

                return (
                  <div
                    key={index}
                    className={`tech-cell relative flex flex-col items-center justify-center py-8 lg:py-10 px-4 lg:px-7 transition
                      ${lastCol ? "tech-cell--last-col" : ""} 
                      ${lastRow ? "tech-cell--last-row" : ""}
                    `}
                  >
                    <div className="relative w-16 h-16 lg:w-[130px] lg:h-[130px]">
                      <Image src={tech.logo} alt={tech.name} fill className="object-contain" />
                    </div>
                    <span className="mt-3 lg:mt-[0.625vw] text-sm lg:text-[1.042vw] font-medium text-black/90">{tech.name}</span>
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

export default LiferayTechnologicalStacks