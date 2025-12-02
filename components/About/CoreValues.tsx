"use client"
import { CORE_VALUES, coreValuesHeader } from "data/about-content"
import React from "react"


const CoreValues = () => {
  return (
    <section className="mx-h-[1078px] global-container relative bg-[#F5F5F6] py-[3.333vw]">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className="text-[#000000]">{coreValuesHeader.heading}</h2>

        <p className="w-[40.781vw] pt-[1.458vw] text-center text-[0.938vw] leading-[1.563vw] text-[#4B5563]">
          {coreValuesHeader.subheading}
        </p>
      </div>

      {/* Values Section */}
      <div className="mt-[1.979vw]">
        {CORE_VALUES.map((v, index) => (
          <div
            key={index}
            className="group h-[9.948vw] bg-[#F5F5F6] pr-[2.188vw] pl-[1.979vw] duration-300 hover:bg-white"
          >
            <div className="relative flex h-full items-center px-0">
              {/* Number */}
              <p className="text-[1.563vw] leading-[1.875vw] font-medium text-[#000000]">{v.number}</p>

              {/* Title */}
              <h2
                className="truncate pl-[132px] !leading-[3.75vw] !font-normal text-[#000000] transition-transform duration-300 group-hover:pl-[15.625vw]"
                // group-hover:translate-x-[8.906vw]
              >
                {v.title}
              </h2>

              {/* Description */}
              <div className="ml-auto">
                <p className="w-[38.177vw] text-right text-[1.25vw] leading-[1.667vw] font-normal text-[#4B5563]">
                  {v.description}
                </p>
              </div>

              {/* Hover image */}
              <div className="pointer-events-none absolute top-1/2 left-[8.229vw] z-10 h-[6.25vw] w-[6.25vw] -translate-x-2 -translate-y-1/2 overflow-hidden rounded-[0.313vw] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt={v.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues
