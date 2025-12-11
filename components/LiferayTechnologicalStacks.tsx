"use client"

import { liferayTechStacksData, stackData } from "data/liferay-hire-developer"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"



export const LiferayTechnologicalStacks = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [topOffset, setTopOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  // Calculate Y offset of the hovered item
  const handleHover = (index: number) => {
    setActiveIndex(index)
    if (itemsRef.current[index] && containerRef.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top
      const itemTop = itemsRef.current[index]!.getBoundingClientRect().top
      const offset = itemTop - containerTop
      setTopOffset(offset)
    }
  }

  useEffect(() => {
    // set initial position on mount
    handleHover(0)
  }, [])

  return (
    <section className="relative bg-[#F6F6F6] py-[3.333vw] text-black">
      <div className="global-container">
        <div className="w-full">
          <h2 className="">{liferayTechStacksData.title}</h2>
          <p className="p18 mt-[1.458vw] text-black/80">
            {liferayTechStacksData.description}
          </p>
        </div>

        {/* Main layout */}
        <div className="item-start relative mt-[3.385vw] flex flex-col md:flex-row md:gap-16" ref={containerRef}>
          {/* Left Side */}
          <div className="relative z-10 flex w-full flex-col gap-y-[3.125vw] md:w-1/4">
            {stackData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                onMouseEnter={() => handleHover(index)}
                className={`relative flex max-w-[362px] cursor-pointer items-center border-l-[5px] border-[#D1D5DB] p-[20px] pl-[32px] transition-all duration-300 ${
                  activeIndex === index ? "bg-blue-600 text-white shadow-md" : "text-black hover:bg-blue-100"
                }`}
                style={{ minHeight: "90px" }}
              >
                <div>
                  <p className="text-[1.563vw] font-medium">{item.category}</p>
                  <p className={`mt-[4px] text-[0.833vw] ${activeIndex === index ? "text-white/90" : "text-black/70"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="w-full transition-all duration-300 md:w-3/4 sticky top-[30%] h-[100%]">
            {(() => {
              const cols = 4
              const items = stackData[activeIndex]?.technologies ?? []
              const total = items.length

              return (
                <div className="tech-grid grid grid-cols-4 overflow-hidden">
                  {items.map((tech, index) => {
                    const colIndex = index % cols
                    const lastCol = colIndex === cols - 1
                    const lastRow = index >= total - cols

                    return (
                      <div
                        key={index}
                        className={`tech-cell relative flex flex-col items-center justify-center py-6 px-7 transition ${
                          lastCol ? "tech-cell--last-col" : ""
                        } ${lastRow ? "tech-cell--last-row" : ""} `}
                      >
                        <Image src={tech.logo} alt={tech.name} width={130} height={130} className="object-contain" />
                        <span className="mt-[0.625vw] text-[1.042vw] font-medium text-black/90">{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiferayTechnologicalStacks
