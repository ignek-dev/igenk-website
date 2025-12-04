"use client"
import { Metadata } from "next"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  dxpUpgradeServices,
  dynamicSteps,
  enhanceDigitalExperience,
  features,
  featureTabs,
  liferayDxUpgradeBenefits,
  liferayDxUpgradeHero,
  liferayDxUpgradeProcess,
  LiferayUpgradeData,
  LiferayUpgradeSubContent,
  LiferayUpgradeTitle1,
  LiferayUpgradeTitle2,
  supprotAndMaintanceServices,
  talkToExpertUpgrade,
  upgradePhases,
  whyChooseIgnek,
} from "data/liferay-upgrade"

const metadata: Metadata = {
  title: "Liferay DXP 7.4 Upgrade Services | Seamless Migration",
  description:
    "Liferay DXP 7.4 Upgrade  for seamless migration and enhanced performance. Experience full support for new features transform your digital journey today!	",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-dxp-7-4-upgrade/",
    title: "Liferay DXP 7.4 Upgrade Services | Seamless Migration",
    description:
      "Liferay DXP 7.4 Upgrade  for seamless migration and enhanced performance. Experience full support for new features transform your digital journey today!	",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

const rowHeights = ["h-[19.5vw]", "h-[23.5vw]", "h-[18.5vw]"]

export default function LiferayUpgradePage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)

  const phases = upgradePhases
  const maxRows = Math.max(...phases.map((p) => p.sections.length))

  // Custom smooth scroll logic (2-second easing)
  useEffect(() => {
    if (targetScroll === null || !containerRef.current) return

    const start = containerRef.current.scrollLeft
    const distance = targetScroll - start
    const duration = 1200 // 2 seconds
    const startTime = performance.now()

    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      containerRef.current!.scrollLeft = start + distance * ease

      if (progress < 1) requestAnimationFrame(smoothScroll)
    }

    requestAnimationFrame(smoothScroll)
  }, [targetScroll])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollStart(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2.8 // reduced scroll speed
    setTargetScroll(scrollStart - walk)
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container w-full pt-[7.865vw] pb-[3.802vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              {/* <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div> */}
              <h1 className="mt-[2.031vw] leading-tight font-semibold">
                {liferayDxUpgradeHero.headingLine1}
                <br />
                <span className="block">{liferayDxUpgradeHero.headingLine2}</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 mt-[1.458vw] text-right text-white md:justify-self-end lg:max-w-xl xl:max-w-2xl">
              {liferayDxUpgradeHero.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="p20 inline-flex items-center rounded-full border border-white/30 py-5 text-white transition-colors hover:border-white hover:text-white [@media(min-width:1440px)]:px-5 [@media(min-width:1800px)]:px-7"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container py-12 lg:py-16">
          <h2 className="leading-tight font-semibold">{liferayDxUpgradeHero.subSection.title}</h2>

          <p className="p18 mt-[1.458vw] leading-relaxed text-[#101012] text-gray-700">
            {liferayDxUpgradeHero.subSection.description}
          </p>

          <div className="ml-[-20px] pt-[3.594vw]">
            {/* OUTER DRAG WRAPPER */}
            <div
              ref={containerRef}
              className="no-scrollbar w-full cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {/* INNER SCROLLABLE TRACK */}
              <div className="relative flex flex-nowrap pr-[320px]">
                {/* 👇 THE CONNECTOR LINE — FULL WIDTH, SCROLLS WITH CONTENT */}
                <div
                  className="pointer-events-none absolute top-[125px] z-0"
                  style={{ width: dynamicSteps.length * 260 + "px" }}
                >
                  <div className="mx-6 h-1 bg-gray-200"></div>
                </div>

                {/* 👇 LOOP ITEMS */}
                {dynamicSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex w-[260px] flex-shrink-0 flex-col items-center px-6 sm:w-[220px] md:w-[240px] lg:w-[260px]"
                  >
                    {/* TOP TITLE */}
                    {index % 2 === 0 && (
                      <p className="mb-4 w-[16.406vw] text-center text-[1.563vw] leading-[36px] font-medium text-black">
                        {step.title}
                      </p>
                    )}

                    {/* SPACER */}
                    <div style={{ height: 0 }} />

                    {/* DOT */}
                    <div
                      className={`p24 relative z-20 flex h-[4.167vw] w-[4.167vw] items-center justify-center rounded-full bg-black font-medium text-white ${
                        index === 0 ? "mt-[35px]" : index % 2 !== 0 ? "mt-[88px]" : "mt-0"
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* BOTTOM TITLE */}
                    {index % 2 !== 0 && (
                      <p className="mt-6 w-[16.406vw] text-center text-[1.563vw] leading-[36px] font-medium text-black">
                        {step.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white md:py-[64px] lg:py-[64px]">
        <div className="global-container items-start">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2 className="">
              {liferayDxUpgradeBenefits.titleLine1} <br /> {liferayDxUpgradeBenefits.titleLine2}
            </h2>
            <p className="p18 absolute max-w-[37vw] text-right text-white md:justify-self-end">
              {liferayDxUpgradeBenefits.description}
            </p>
          </div>
          <div className="pt-[3.021vw]">
            <div className="grid grid-cols-1 gap-[4.01vw] md:grid-cols-3">
              {supprotAndMaintanceServices.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <p
                      className="whitespace-wrap mb-[1.875vw] max-w-[215px] text-[1.563vw] font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <span className="mb-3 pt-4 text-[40px] font-semibold">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="p20 pt-[1.875vw] text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-[64px] text-black md:py-[64px] lg:py-[64px]">
        <div className="global-container items-start">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2 className="[@media(min-width:1440px)]:max-w-[430px] [@media(min-width:1500px)]:max-w-[430px]">
              {liferayDxUpgradeProcess.title}
            </h2>
            <p className="p18 absolute max-w-4xl text-right text-gray-700 md:justify-self-end">
              {liferayDxUpgradeProcess.description}<br/> {liferayDxUpgradeProcess.description2}
            </p>
          </div>
          <div className="pt-[3.021vw]">
            {/* Header Row */}
            <div className="grid grid-cols-1 border border-gray-300 md:grid-cols-3">
              {phases.map((phase, idx) => (
                <div key={idx} className={`border-gray-300 ${idx !== phases.length - 1 ? "border-r" : ""}`}>
                  <div className="bg-black py-[1.458vw] text-center text-[1.563vw] font-semibold text-white">
                    {phase.phase}
                  </div>
                </div>
              ))}
            </div>

            {/* Section Rows */}
            <div className="border-t border-r border-b border-l border-black">
              {Array.from({ length: maxRows }).map((_, rowIdx) => {
                const height = rowHeights[rowIdx] || "min-h-[16.5vw]"

                return (
                  <div key={rowIdx} className={`grid grid-cols-1 md:grid-cols-3 ${height} border-black`}>
                    {phases.map((phase, colIdx) => {
                      const section = phase.sections[rowIdx]

                      return (
                        <div
                          key={colIdx}
                          className={`px-[2.188vw] ${rowIdx === 0 ? "pt-[1.25vw]" : ""} ${
                            colIdx !== phases.length - 1 ? "border-r border-black" : ""
                          }`}
                        >
                          {section ? (
                            <div className="flex h-full flex-col">
                              {/* Title */}
                              <p className="mb-3 text-[1.563vw] font-medium">{section.title}</p>

                              {/* Points */}
                              <div className="flex-1 overflow-auto pr-2">
                                {section.points.map((point, i) => (
                                  <div key={i} className="mb-4 flex items-start gap-4">
                                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center">
                                      <svg
                                        width="20"
                                        height="18"
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.375 1.125H1.125V16.875H16.875V11.625"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.625 8.625L9.375 12.375L18.375 2.625"
                                          stroke="black"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>

                                    <p className="p20">{point}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="h-full" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="global-container items-start">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2 className="min-w-[51.51vw]">
              {enhanceDigitalExperience.titlePart1} <br /> {enhanceDigitalExperience.titlePart2}
            </h2>
            <p className="p18 absolute max-w-xl text-right text-white md:justify-self-end">
              {enhanceDigitalExperience.descriptionPart1} <br /> {enhanceDigitalExperience.descriptionPart2}
            </p>
          </div>
          <div className="relative pt-[3.021vw]">
            <div className="relative grid gap-x-40 gap-y-[4.427vw] md:grid-cols-2">
              {features.map((item, index) => (
                <div className="relative" key={index}>
                  <div
                    className={`glow-box w-[29.479vw] rounded-full border border-gray-700 bg-black p-6 text-center transition-all hover:border-blue-500 ${
                      index == 0 || index == 4 || index == 3 ? "ml-[100px]" : ""
                    } `}
                  >
                    <p className="mb-2 text-[1.25vw] font-semibold">{item.title}</p>
                    <p className="text-[0.833vw] leading-[24px] text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="absolute mt-12 flex w-max flex-col items-center justify-center [@media(min-width:1440px)]:translate-x-[240%] [@media(min-width:1440px)]:translate-y-[45%] [@media(min-width:1500px)]:translate-x-[264%] [@media(min-width:1800px)]:translate-x-[325%] [@media(min-width:1800px)]:translate-y-[35%]">
                <span className="mt-1 inline-flex h-50 w-50 items-center justify-center">
                  <svg
                    width="149"
                    height="149"
                    viewBox="0 0 149 149"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xlinkHref="http://www.w3.org/1999/xlink"
                  >
                    <rect width="149" height="149" fill="url(#pattern0_3408_4131)" />
                    <defs>
                      <pattern id="pattern0_3408_4131" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use
                          xlinkHref="#image0_3408_4131"
                          transform="translate(-0.321429 -0.303571) scale(0.00586735)"
                        />
                      </pattern>
                      <image
                        id="image0_3408_4131"
                        width="280"
                        height="280"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAOzklEQVR4Ae3dTW4cRxJAYS5oQzB9CC1nSWMuIMAb38Eb/UC2b+DlXMP38AG0FCDA5FF0BA9KssA2pVRkRldWV2Z9AwgmcyIqo15kPLaoRtfVlf8hgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEAjgWfX39y+vv329refr3/49ffr21/+5w8Gy1lYzsRyNq6unl03HirhCFxdPXl+//Tm1d2bm1d3f/uDwVfOwP2T52+fmhkEqgg8+emPH79/cff2KweKcEj3szPw/au7t8vZqTpkgo5J4Ob5u9vvXt29JxevWJJn4P3N63e3x5wed/1VAstPH3IhlqRYTl/RvPdK5qujdsz/01+LyGUFuXwQzfLXpWNOkbv+IoF/fqF7+lPI137PctYZ8IvfL47aERefXd+8urtf66eX63gl9OEMvLh745+wj+iTR/e8vJeBFEihxxn4+D6ZRwfOt8cisLxhqsfhck3SWs7WsabJ3X5GYHlXJhmQQY8zsJytzw6chWMRWN763+NwuSZpLWfrWNPkbj8jQDBE0OuHAcF8Nm7HWyAYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TYiGIIhmOPN/WZ3TDAEQzCbjdvxNiIYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TbqKpgX938+uf3t6VqfC/Ltf3/5z82L+z+LAzH7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MHE7SwMVZ+Yi9rJfqY7adYLJ9X+qLIKJ21kaqDgzF7GX/Up11K4TTK7/U2URTNzO0kDFmbmIvexXqqN2nWBy/Z8qi2DidpYGKs7MRexlv1IdtesEk+v/VFkEE7ezNFBxZi5iL/uV6qhdJ5hc/6fKIpi4naWBijNzEXvZr1RH7TrB5Po/VRbBxO0sDVScmYvYy36lOmrXCSbX/6myCCZuZ2mg4sxcxF72K9VRu04wuf5PlUUwcTtLAxVn5iL2sl+pjtp1gsn1f6osgonbWRqoODMXsZf9SnXUrhNMrv9TZRFM3M7SQMWZuYi97Feqo3adYHL9nyqLYOJ2lgYqzsxF7GW/Uh216wST6/9UWXMJZttnYW/9rOit96sVSSmOYKZSRe5mZhLM1s9unn2/kjhq1wkmN5NTZc0kmM2fhb31s6K33s+Hfk816xe5makEc+ZA1P5kFlf3qBevYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1RDMO2DQzZ1zAjmIiO9r00Jpm5YSKWdE8Hsa9YvUg3BtA8O2dQxI5iLjPS+NiWYumEhlXZOBLOvWb9INQTTPjhkU8eMYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1Rz/cOvvxue9uHBLGa2nK2LHGqb7ofAt7e//WxY4mHBqJ3Rcrb2c9JVchEC39y+vjU87cODWcxsOVsXOdQ23ROBZ9c3L+7eGJh4YDBqYnTf6xP49jQ9aqkg8OT5/VPD0zQ8f+P1dV5Pnr99WnH0hByFwPev/npraL4+NPjU8VnO0lHmxn1WEnjy0x8/fvfy7r0hqhsinAqcXt69X85S5bETdiQCN6/f3ZJMYXB8HGf818LlB9Tzd36xeyRptN7r8tPHX5dIpvUV2nJmvHJpnbYDx//zi9/71oMm/mByenH3xi90DyyK82792fXyXoblDVPLuzKXt377g8FyFpYz8fF9Ln0ednfeuZWNAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwL4J/B+NefvO5FLgiwAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </span>
                <p className="text-[1.042vw] font-medium text-white">Liferay DXP 7.4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="bg-[#f7f7f7] py-[64px] text-black md:py-[64px] lg:py-[64px]">
        <div className="global-container items-start">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2 className="">{whyChooseIgnek.titlePart1}</h2>
            <p className="p18 absolute max-w-2xl items-center text-right text-gray-700 md:justify-self-end">
              {whyChooseIgnek.descriptionPart1}
            </p>
          </div>
          <div className="pt-[3.021vw]">
            <div className="grid grid-cols-1 gap-x-[166px] gap-y-[5.208vw] md:grid-cols-3">
              {dxpUpgradeServices.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <p
                      className="mb-[1.25vw] text-[30px] font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                  {/* Description */}
                  <p className="p20 pt-[1.25vw] text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>      

      {/* <CaseStudy caseStudies={caseStudies} /> */}

      {/* <WhatMake
        WhatMakeData={LiferayUpgradeData}
        titleText1={LiferayUpgradeTitle1}
        titleText2={LiferayUpgradeTitle2}
        subContext={LiferayUpgradeSubContent}
      /> */}
      <TalkToExpert
        heading={talkToExpertUpgrade.headingPart1}
        description={talkToExpertUpgrade.descriptionPart1}
        buttonText={talkToExpertUpgrade.button}
      />
      <BlogSection />
    </main>
  )
}
