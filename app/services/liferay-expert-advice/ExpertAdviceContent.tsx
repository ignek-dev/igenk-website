"use client"

import { useEffect, useRef, useState } from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  expertAdviceHero,
  expertAdviceSection,
  expertAdviceSolutions,
  expoerAdvices,
  featureTabs,
  LiferayExpertAdviceData,
  LiferayExpertAdviceSubContent,
  LiferayExpertAdviceTitle1,
  LiferayExpertAdviceTitle2,
  liferayExpertCTA,
  solutions,
} from "data/liferayExpert"

export default function LiferayExpertAdvicePage() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = (entry.target as HTMLElement).dataset.index
            if (!idx) return

            setVisibleCards((prev) => {
              const updated = new Set(prev)
              updated.add(idx)
              return updated
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="pb-0">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-8 pb-9 lg:pt-12 lg:pb-[3.802vw]">
          <div className="relative grid items-start gap-4.5 lg:grid-cols-2 lg:gap-10">
            <div>
              <h1 className="mt-8 lg:mt-[7.865vw]">
                {expertAdviceHero.heading}
                <br />
                <span className="block">{expertAdviceHero.heading2}</span>
              </h1>
            </div>
            <p className="text-p16! md:text-p18! relative bottom-0 w-full text-left text-gray-300 md:justify-self-end lg:absolute lg:max-w-[52vw] lg:text-right lg:text-white xl:max-w-[40vw]">
              {expertAdviceHero.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-10 inline-flex flex-wrap gap-5 lg:mt-[3.177vw] lg:gap-[1.5vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="text-p16! md:text-p18! lg:text-p20-lg! inline-flex items-center rounded-full border border-[#374151] bg-black px-4 py-3 text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors lg:rounded-[2.083vw] lg:px-[1.458vw] lg:py-[0.833vw]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container mx-auto w-full py-7 lg:py-[3.333vw]">
          <div className="flex flex-col items-start gap-7 lg:flex-row lg:gap-[8.75vw]">
            <div className="static flex flex-col gap-2.5 lg:sticky lg:top-[10.417vw] lg:gap-[1.458vw]">
              <h2 className="">{expertAdviceSection.heading}</h2>
              <p className="text-p16 md:text-p18 w-full text-gray-600 lg:max-w-[44.229vw]">
                {expertAdviceSection.description}
              </p>
            </div>
            <div className="w-full space-y-9 pt-0 md:justify-self-end lg:space-y-[1.979vw] lg:pt-[0.417vw]">
              {expoerAdvices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 lg:gap-[1.458vw] ${index === expoerAdvices.length - 1 ? "pb-0" : "border-b-2 border-gray-200 pb-9 lg:pb-[1.979vw]"
                    }`}
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md lg:h-[2.5vw] lg:w-[2.5vw]">
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.4999 3C17.4999 1.34062 18.8406 0 20.4999 0H23.4999C25.1593 0 26.4999 1.34062 26.4999 3V16.2094L37.9374 9.60938C39.3718 8.78438 41.2093 9.27187 42.0343 10.7062L43.5343 13.3031C44.3593 14.7375 43.8718 16.575 42.4374 17.4L30.9999 24L42.4374 30.6C43.8718 31.425 44.3687 33.2625 43.5343 34.6969L42.0343 37.2937C41.2093 38.7281 39.3718 39.225 37.9374 38.3906L26.4999 31.7906V45C26.4999 46.6594 25.1593 48 23.4999 48H20.4999C18.8406 48 17.4999 46.6594 17.4999 45V31.7906L6.06243 38.4C4.62805 39.225 2.79055 38.7375 1.96555 37.3031L0.46555 34.7063C-0.35945 33.2719 0.12805 31.4344 1.56243 30.6094L12.9999 24L1.56243 17.4C0.12805 16.575 -0.35945 14.7375 0.46555 13.3031L1.96555 10.7062C2.79055 9.2625 4.62805 8.775 6.06243 9.6L17.4999 16.2V3Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="text-p16 md:text-p20 text-black">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="global-container bg-black py-7 text-white lg:py-[3.333vw]">
        <div className="flex w-full flex-col items-start gap-9 lg:flex-row lg:gap-[10.573vw]">
          {/* Left Column */}
          <div className="static flex flex-col gap-2.5 lg:sticky lg:top-[10.417vw] lg:gap-[1.458vw]">
            <h2 className="w-full text-white lg:w-[33.073vw]">{expertAdviceSolutions.heading}</h2>
            <p className="text-p16 md:text-p18 text-gray-100">{expertAdviceSolutions.description}</p>
            {/* <div>
              <ScheduleMeetingButton isFullWidth={false} btnName="Schedule a Call" />
            </div> */}
          </div>

          {/* Right Column */}
          <div className="relative z-10 flex w-full flex-col items-end">
            <div className="relative w-full">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  data-index={index}
                  className={`static flex w-full flex-col justify-start bg-black transition-all duration-500 lg:sticky`}
                  style={{ top: `calc(8.417vw + ${index * 8}vw)` }}
                >
                  {/* Separator Line: Using border-t is more stable than <hr> for sticky layouts */}
                  <div className={`w-full border-t border-[#6B7280] ${index === 0 ? "border-none" : ""}`}></div>

                  <div className={`pt-7 pb-7 md:pt-9 md:pb-9 lg:pt-[1.5vw] lg:pb-[4vw]`}>
                    <div className="flex flex-col gap-7 md:flex-row md:items-baseline md:gap-9 lg:gap-[3.438vw]">
                      <span className="text-2xl font-normal text-white lg:text-[1.563vw] lg:leading-[3.125vw]">
                        ({item.number})
                      </span>
                      <div className="flex flex-col gap-7 md:gap-9 lg:gap-[1.458vw]">
                        <h3 className="w-full font-semibold text-white md:text-[1.563vw] md:leading-[1.875vw] md:font-normal lg:w-[22.76vw]">
                          {item.title}
                        </h3>
                        <p className="text-p16 md:text-p20 text-gray-100">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-0 lg:h-[50vh]" />
            </div>
          </div>
        </div>
      </section>
      <WhatMake
        WhatMakeData={LiferayExpertAdviceData}
        titleText1={LiferayExpertAdviceTitle1}
        titleText2={LiferayExpertAdviceTitle2}
        subContext={LiferayExpertAdviceSubContent}
      />
      <TalkToExpert
        heading={liferayExpertCTA.heading}
        description={liferayExpertCTA.description}
        buttonText={liferayExpertCTA.buttonText}
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
