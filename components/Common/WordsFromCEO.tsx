import { ceoSectionData } from "data/liferay-consulting-and-implementation-services"
import Image from "next/image"
import React from "react"

const CEOSection = () => {
  return (
    <section className="global-container relative isolate overflow-hidden bg-[#000000] py-16 lg:py-[5.625vw]">
      {/* Outer wrapper: flex-col for mobile (stacks card then image), lg:flex-row for desktop */}
      <div className="flex flex-col lg:flex-row lg:justify-between text-white">
        
        {/* Content Card */}
        <div
          className="relative w-full lg:max-w-[41.771vw] rounded-[20px] lg:rounded-[30px] p-[2px] lg:p-[3px] z-10"
          style={{ background: "linear-gradient(129.83deg, #00979E 0.83%, #000000 82.69%)" }}
        >
          <div className="h-full w-full rounded-[18px] lg:rounded-[27px] bg-black px-6 py-10 md:p-12 lg:pt-[3.4896vw] lg:pr-[2.5vw] lg:pb-[2.2917vw] lg:pl-[3.333vw] shadow-[0_4px_4px_0_rgba(0,151,158,0.25)]">
            {/* Heading: text-2xl/3xl for mobile, vw for desktop */}
            <h2 className="text-2xl md:text-3xl lg:!text-[2.083vw] tracking-[-2%] text-white leading-tight font-semibold">
              {ceoSectionData.heading}
            </h2>

            {/* Message: text-p16 for mobile, vw for desktop */}
            <p className="mt-6 lg:mt-[1.51vw] text-justify text-p16 lg:text-[0.938vw] lg:leading-[1.563vw] text-white/90">
              {ceoSectionData.message}
            </p>

            <div className="mt-8 lg:mt-[1.51vw]">
              {/* Signature Name */}
              <span
                className="mr-2 text-4xl lg:text-[2.5vw] lg:leading-[2.292vw] tracking-[-2%]"
                style={{ fontFamily: "Rage Italic" }}
              >
                {ceoSectionData.ceoName}
              </span>
              {/* CEO Title: text-p18 for mobile, xl for desktop */}
              <p className="text-p18 lg:text-xl text-gray-400 mt-1 lg:mt-0">
                {ceoSectionData.ceoTitle}
              </p>
            </div>
          </div>
        </div>

        {/* CEO Image Container */}
        {/* Mobile: Relative position below card | Desktop: Absolute right-bottom overlay */}
        <div className="relative mt-8 h-[85vw] w-full top-[-10.271vw] sm:h-[60vw] md:h-[50vw] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:h-[57.667vw] lg:w-[51.719vw] lg:pointer-events-none">
          <div
            className="relative h-full w-full lg:top-[-3.271vw]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
            }}
          >
            <Image
              src={ceoSectionData.imageSrc}
              alt="CEO"
              fill
              priority
              className="object-contain  lg:!h-[117%] drop-shadow-[0_1.563vw_4.167vw_rgba(0,0,0,0.7)]"
            />
          </div>
          
          {/* Bottom Fade Gradient */}
          <div
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-[30%] lg:h-[40%]"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.32%, #000 100%)",
            }}
          />
          
          {/* Subtle Shadow/Glow Base */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[10vw] lg:h-[6.25vw] w-[80%] lg:w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),rgba(0,0,0,0))]" />
        </div>

      </div>
    </section>
  )
}

export default CEOSection