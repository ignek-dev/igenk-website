"use client"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import {
  dxpUpgradeServices,
  dynamicSteps,
  enhanceDigitalExperience,
  features,
  featureTabs,
  liferayDxUpgradeBenefits,
  liferayDxUpgradeHero,
  liferayDxUpgradeProcess,
  supprotAndMaintanceServices,
  talkToExpertUpgrade,
  upgradePhases,
  whyChooseIgnek,
} from "data/liferay-upgrade"

const rowHeights = [
  "h-[28vw] md:h-[16rem] lg:h-[19.5vw]",
  "h-[32vw] md:h-[19rem] lg:h-[23.5vw]",
  "h-[26vw] md:h-[15rem] lg:h-[18.5vw]",
]

const CheckIcon = ({ className = "" }) => (
  <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.375 1.125H1.125V16.875H16.875V11.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.625 8.625L9.375 12.375L18.375 2.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function LiferayUpgradeContent() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)
  const [stepWidth, setStepWidth] = useState(260)

  const phases = upgradePhases
  const maxRows = Math.max(...phases.map((p) => p.sections.length))

  const calculateStepWidth = () => {
    const width = window.innerWidth
    if (width >= 1024) return 260
    if (width >= 768) return 240
    if (width >= 640) return 220
    return 260
  }

  useEffect(() => {
    const handleResize = () => setStepWidth(calculateStepWidth())
    setStepWidth(calculateStepWidth())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (targetScroll === null || !containerRef.current) return
    const start = containerRef.current.scrollLeft
    const distance = targetScroll - start
    const duration = 1200
    const startTime = performance.now()
    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      if (containerRef.current) containerRef.current.scrollLeft = start + distance * ease
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2.8
    setTargetScroll(scrollStart - walk)
  }

  return (
    <main>
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container w-full pt-[7.865vw] lg:pb-[3.802vw] md:pb-16 pb-[45px]">
          <div className="relative block lg:grid items-start gap-[18px] md:gap-[43px] lg:gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-[2.031vw] leading-tight font-semibold">
                {liferayDxUpgradeHero.headingLine1}<br />
                <span className="block">{liferayDxUpgradeHero.headingLine2}</span>
              </h1>
            </div>
            <p className="text-p14 md:text-p18 lg:text-p18 static lg:absolute bottom-0 mt-[1.458vw] text-left lg:text-right text-white justify-start lg:justify-self-end lg:max-w-xl xl:max-w-2xl">
              {liferayDxUpgradeHero.description}
            </p>
          </div>
          <div className="mt-[25px] md:mt-[18px] lg:mt-[3.177vw] flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span key={label} className="text-p14 md:text-p20 lg:text-p20 inline-flex items-center rounded-full border border-white/30 px-[17px] py-[10px] md:px-7 md:py-[18px] lg:py-5 text-white transition-colors hover:border-white hover:text-white">{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container py-7 md:py-16 lg:py-[3.333vw]">
          <h2 className="leading-tight font-semibold">{liferayDxUpgradeHero.subSection.title}</h2>
          <p className="text-p14 md:text-p18 lg:text-p18 mt-2.5 md:mt-7 lg:mt-[1.458vw] text-gray-700">{liferayDxUpgradeHero.subSection.description}</p>
          <div className="ml-[-20px] pt-[3.594vw]">
            <div ref={containerRef} className="no-scrollbar w-full cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}>
              <div className="relative flex flex-nowrap">
                <div className="pointer-events-none absolute top-[70px] md:top-[103px] lg:top-[125px] z-0" style={{ width: (dynamicSteps.length - 1) * stepWidth + 50 + "px", left: stepWidth / 2 + "px" }}>
                  <div className="h-1 bg-gray-200"></div>
                </div>
                {dynamicSteps.map((step, index) => (
                  <div key={index} className="relative flex flex-shrink-0 flex-col items-center px-6 w-[220px] md:w-[250px] lg:w-[260px]">
                    {index % 2 === 0 && <p className="mb-4 w-[176px] md:w-[250px] lg:w-[16.406vw] text-center text-[15px] md:text-[1.5rem] lg:text-[1.563vw] md:leading-9 leading-[18px] font-medium text-black">{step.title}</p>}
                    <div className={`text-[12px] md:text-[24px] lg:text-[24px] relative z-20 w-10 h-10 flex md:h-[4.167vw] md:w-[4.167vw] items-center justify-center rounded-full bg-black font-medium text-white ${index === 0 ? "mt-[0px]" : index % 2 !== 0 ? "mt-[52px] md:mt-[88px]" : "mt-0"}`}>{step.number}</div>
                    {index % 2 !== 0 && <p className="mt-6 text-[15px] md:text-[1.5rem] w-[150px] md:w-[240px] lg:w-[16.406vw] text-center lg:text-[1.563vw] md:leading-9 leading-[18px] font-medium text-black">{step.title}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-7 text-white md:py-16 lg:py-[3.333vw]">
        <div className="global-container items-start">
          <div className="relative block lg:grid items-center gap-10 md:grid-cols-2">
            <h2>{liferayDxUpgradeBenefits.titleLine1}<br />{liferayDxUpgradeBenefits.titleLine2}</h2>
            <p className="text-p14 md:text-p18 lg:text-p18 static lg:absolute max-w-full lg:max-w-[37vw] text-left lg:text-right text-white justify-start lg:justify-self-end mt-2.5 md:mt-7 lg:mt-0">{liferayDxUpgradeBenefits.description}</p>
          </div>
          <div className="pt-[22px] md:pt-[37px] lg:pt-[3.021vw]">
            <div className="grid grid-cols-1 gap-[39px] md:gap-[58px] lg:gap-[4.01vw] md:grid-cols-2 lg:grid-cols-3">
              {supprotAndMaintanceServices.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="pb-[18px] md:pb-9 lg:pb-[1.875vw] flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <p className="whitespace-wrap max-w-[180px] md:max-w-[215px] text-[20px] md:text-[30px] lg:text-[1.563vw] font-semibold" dangerouslySetInnerHTML={{ __html: item.text }} />
                    <span className="mb-3 pt-4 text-[27px] md:text-[2.5rem] lg:text-[2.083vw] font-semibold">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  </div>
                  <p className="text-[13px] md:text-[20px] lg:text-p20 pt-6 md:pt-9 lg:pt-[1.875vw] text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-7 text-black md:py-16 lg:py-[3.333vw]">
        <div className="global-container items-start">
          <div className="relative block lg:grid items-center gap-10 md:grid-cols-2">
            <h2 className="[@media(min-width:1440px)]:max-w-[430px]">{liferayDxUpgradeProcess.title}</h2>
            <p className="mt-9 md:mt-7 lg:mt-0 text-p14 md:text-p18 lg:text-p18 static lg:absolute max-w-4xl lg:text-right text-left text-gray-700 justify-start lg:justify-self-end">{liferayDxUpgradeProcess.description}<br className="hidden lg:block" /> {liferayDxUpgradeProcess.description2}</p>
          </div>
          <div className="hidden md:block">
            <div className="pt-9 lg:pt-[3.021vw]">
              <div className="grid grid-cols-1 border border-gray-300 md:grid-cols-3">
                {phases.map((phase, idx) => (
                  <div key={idx} className={`border-gray-300 ${idx !== phases.length - 1 ? "border-r" : ""}`}>
                    <div className="bg-black py-[1.458vw] text-center text-[16px] lg:text-[1.563vw] font-semibold text-white">{phase.phase}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-r border-b border-l border-black">
                {Array.from({ length: maxRows }).map((_, rowIdx) => (
                  <div key={rowIdx} className={`grid grid-cols-1 md:grid-cols-3 ${rowHeights[rowIdx] || "min-h-[16.5vw]"} border-black`}>
                    {phases.map((phase, colIdx) => {
                      const section = phase.sections[rowIdx]
                      return (
                        <div key={colIdx} className={`px-[2.188vw] ${rowIdx === 0 ? "pt-[1.25vw]" : ""} ${colIdx !== phases.length - 1 ? "border-r border-black" : ""}`}>
                          {section ? (
                            <div className="flex h-full flex-col">
                              <p className="mb-3 text-[14px] lg:text-[1.563vw] font-medium">{section.title}</p>
                              <div className="flex-1 overflow-auto pr-2">
                                {section.points.map((point, i) => (
                                  <div key={i} className="mb-3 lg:mb-4 flex items-start gap-4">
                                    <span className="mt-1 inline-flex w-2.5 h-2.5 lg:h-5 lg:w-5 items-center justify-center"><CheckIcon className="h-full w-full" /></span>
                                    <p className="text-p12 lg:text-p20">{point}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : <div className="h-full" />}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="pt-6">
              {phases.map((phase, phaseIdx) => (
                <div key={phaseIdx} className="border border-black bg-white mb-4">
                  <div className="bg-black py-3 text-center font-semibold text-white">{phase.phase}</div>
                  {phase.sections.map((section, idx) => (
                    <div key={idx} className="p-4">
                      <p className="mb-3 font-medium text-[14px]">{section.title}</p>
                      <ul className="space-y-3">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-4 w-4 shrink-0"><CheckIcon className="h-full w-full text-black" /></span>
                            <span className="text-p12">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-7 md:py-16 text-white lg:py-[3.333vw]">
        <div className="global-container items-start">
          <div className="relative block lg:grid items-center gap-10 md:grid-cols-2">
            <h2 className="min-w-[51.51vw]">{enhanceDigitalExperience.titlePart1} <br /> {enhanceDigitalExperience.titlePart2}</h2>
            <p className="text-p14 pt-2.5 md:pt-7 lg:pt-0 md:text-p18 lg:text-p18 static lg:absolute max-w-xl text-left lg:text-right text-white justify-start lg:justify-self-end">{enhanceDigitalExperience.descriptionPart1} <br className="hidden lg:block"/> {enhanceDigitalExperience.descriptionPart2}</p>
          </div>
          <div className="relative pt-[22px] md:pt-[67px] lg:pt-[3.021vw]">
            <div className="relative grid md:gap-x-25 lg:gap-x-40 gap-y-[4.427vw] md:grid-cols-2">
              {features.map((item, index) => (
                <div className="relative" key={index}>
                  <div className={`glow-box md:w-[260px] lg:w-[29.479vw] rounded-full border border-gray-700 bg-black p-4 md:p-3 lg:p-6 text-center transition-all hover:border-blue-500 ${index == 2 ? "mb-[185px] md:mb-0" : ""} ${index == 0 || index == 4 || index == 3 ? "md:ml-[50px] lg:ml-[100px]" : ""}`}>
                    <p className="mb-2 text-p16 lg:text-p24">{item.title}</p>
                    <p className="text-p12 lg:text-p16 text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-7 text-black md:py-16 lg:py-[3.333vw]">
        <div className="global-container items-start">
          <div className="relative lg:grid items-center gap-10 md:grid-cols-2">
            <h2>{whyChooseIgnek.titlePart1}<br />{whyChooseIgnek.titlePart2}</h2>
            <p className="pt-4 md:pt-7 lg:pt-0 text-p14 md:text-p18 lg:text-p18 static lg:absolute max-w-2xl text-left lg:text-right text-gray-700 justify-start lg:justify-self-end">{whyChooseIgnek.descriptionPart1}</p>
          </div>
          <div className="pt-4 md:pt-9 lg:pt-[3.021vw]">
            <div className="grid grid-cols-1 gap-y-[47px] md:gap-x-16 md:gap-y-16 lg:gap-x-[166px] lg:gap-y-[5.208vw] md:grid-cols-2 lg:grid-cols-3">
              {dxpUpgradeServices.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <h4 className="mb-[17px] md:mb-6 lg:mb-[1.25vw] md:leading-[34px]!" dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <p className="text-[15px] md:text-p20 lg:text-p20 pt-[17px] md:pt-6 lg:pt-[1.25vw] text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TalkToExpert heading={talkToExpertUpgrade.headingPart1} description={talkToExpertUpgrade.descriptionPart1} />
      <BlogSection />
    </main>
  )
}
