"use client"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { dxpUpgradeServices, features, featureTabs, supprotAndMaintanceServices, upgradePhases } from "data/liferay-upgrade"

export default function LiferayUpgradePage() {
  
  const caseStudies = [
    {
      id: 1,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Corporate",
      title: "Music License Management Portal: Onboarding & Data Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    },
    {
      id: 2,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "FinTech",
      title: "Transforming Financial Services with Innovations",
      description:
        "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      id: 3,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Healthcare",
      title: "Digital Health Platform: Patient-Centric Solutions",
      description:
        "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
    },
    {
      id: 4,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "E-commerce",
      title: "Scaling Online Retail with Cloud Technologies",
      description:
        "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
    },
  ]
  const dynamicSteps = [
    { number: 1, title: "Ongoing Technical Assistance" },
    { number: 2, title: "Ongoing Technical Assistance" },
    { number: 3, title: "Ongoing Technical Assistance" },
    { number: 4, title: "Ongoing Technical Assistance" },
    { number: 5, title: "Ongoing Technical Assistance" },
    { number: 6, title: "Ongoing Technical Assistance" },
    { number: 7, title: "Ongoing Technical Assistance" },
    { number: 8, title: "Ongoing Technical Assistance" },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)

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
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">DXP 7.4 Upgrade</span>
              </h1>
            </div>
<<<<<<< Updated upstream
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
=======
            <p className="absolute bottom-0 max-w-xl text-lg text-right text-white sm:text-base md:mt-16 md:justify-self-end">
              Liferay DXP 7.4 introduces advanced features, enhanced performance, and stronger security for a more powerful digital experience. Our upgrade services cover database optimization, workspace setup, module updates, and theme enhancements, ensuring a smooth transition. Maximize the benefits of Liferay DXP 7.4 Upgrade with our seamless upgrade process, designed to meet your business needs.
>>>>>>> Stashed changes
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">Liferay DXP 7.4 Upgrade</h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>
          <div className="ml-[-20px] pt-4">
            <div
              ref={containerRef}
              className="max-w-full cursor-grab overflow-x-hidden active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative flex min-w-max">
                {dynamicSteps.map((step, index) => (
                  <div key={index} className="relative flex w-1/11 flex-shrink-0 flex-col items-center">
                    {/* Number */}
                    {index % 2 == 0 && (
                      <p className="mt-2 mb-4 text-center text-3xl font-medium text-black">{step.title}</p>
                    )}
                    <div></div>
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-medium text-white ${
                        index % 2 !== 0 ? "top-[100px]" : ""
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Text */}
                    {index % 2 !== 0 && (
                      <p className="mt-4 mt-[116px] text-center text-3xl font-medium text-black">{step.title}</p>
                    )}

                    {/* Connecting line */}
                    {index < dynamicSteps.length - 1 && (
                      <div
                        className="absolute top-[120px] right-0 z-0 h-1.5 bg-gray-200"
                        style={{ width: "100%", transform: "translateX(50%)" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white md:py-[64px] lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
              Key Benefits of Liferay DXP 7.4 Upgrade
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
              Liferay DXP 7.4 Upgrade is essential for organizations aiming to enhance their digital experience capabilities and stay competitive in today’s fast-paced environment. Here are several compelling reasons to consider the upgrade
            </p>
          </div>
          <div className="pt-12">
            <div className="grid grid-cols-1 gap-x-[166px] gap-y-10 md:grid-cols-3">
              {supprotAndMaintanceServices.map((item, index) => (
                <div key={index} className="flex flex-col pb-8">
                  <div className="flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <h3
                      className="mb-3 w-[50%] pt-4 text-[30px] font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    <span className="mb-3 pt-4 text-[30px] font-semibold">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="pt-4 text-[16px] leading-relaxed text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-[64px] text-black md:py-[64px] lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
              Liferay DXP 7.4 Upgrade Process : A Complete Guide
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-lg text-gray-700 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet
            </p>
          </div>
          <div className="pt-12">
            <div className="grid grid-cols-1 border border-gray-300 md:grid-cols-3">
              {upgradePhases.map((phase, index) => (
                <div key={index} className={`border-gray-300 ${index !== upgradePhases.length - 1 ? "border-r" : ""}`}>
                  {/* Phase Header */}
                  <div className="mb-4 bg-black px-4 py-3 text-center text-3xl font-semibold text-white">
                    {phase.phase}
                  </div>

                  {/* Sections */}
                  {phase.sections.map((section, idx) => (
                    <div key={idx} className="mb-6 p-6 last:mb-0">
                      <h3 className="mb-3 text-3xl font-medium">{section.title}</h3>

                      {section.points.map((point, pIndex) => (
                        <div key={pIndex} className="mb-4 flex gap-4">
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
                          <p key={pIndex}>{point}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white lg:py-24">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Enhance Digital Experiences with the Liferay DXP 7.4 Upgrade
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
              Our dedicated Liferay team offers ongoing Liferay Support and Maintenance to address the challenges of a
              dynamic
            </p>
          </div>
          <div className="relative pt-12">
            <div className="relative grid gap-x-40 gap-y-20 md:grid-cols-2">
              {features.map((item, index) => (
                <div className="relative" key={index}>
                  <div
                    className={`w-[566px] rounded-full border border-gray-700 bg-black p-6 text-center transition-all hover:border-blue-500 ${
                      index == 0 || index == 4 || index == 3 ? "ml-[100px]" : ""
                    } `}
                  >
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="absolute mt-12 flex w-max translate-x-[330%] translate-y-[35%] flex-col items-center justify-center">
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
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAOzklEQVR4Ae3dTW4cRxJAYS5oQzB9CC1nSWMuIMAb38Eb/UC2b+DlXMP38AG0FCDA5FF0BA9KssA2pVRkRldWV2Z9AwgmcyIqo15kPLaoRtfVlf8hgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEAjgWfX39y+vv329refr3/49ffr21/+5w8Gy1lYzsRyNq6unl03HirhCFxdPXl+//Tm1d2bm1d3f/uDwVfOwP2T52+fmhkEqgg8+emPH79/cff2KweKcEj3szPw/au7t8vZqTpkgo5J4Ob5u9vvXt29JxevWJJn4P3N63e3x5wed/1VAstPH3IhlqRYTl/RvPdK5qujdsz/01+LyGUFuXwQzfLXpWNOkbv+IoF/fqF7+lPI137PctYZ8IvfL47aERefXd+8urtf66eX63gl9OEMvLh745+wj+iTR/e8vJeBFEihxxn4+D6ZRwfOt8cisLxhqsfhck3SWs7WsabJ3X5GYHlXJhmQQY8zsJytzw6chWMRWN763+NwuSZpLWfrWNPkbj8jQDBE0OuHAcF8Nm7HWyAYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TYiGIIhmOPN/WZ3TDAEQzCbjdvxNiIYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TbqKpgX938+uf3t6VqfC/Ltf3/5z82L+z+LAzH7foN9CNZyto43Ue74XwR6CmYRwr82W+GbRVglwcy+X+m+97pOMCsc+NEv0VMwfdh8+AS+L36c4+z77VUkpboIps+JHOqq4wnm6qp0oHuB38t+pTr2uk4wvU7kQNclmLhZpQGOM3MRpf1GWyeYXP+nyiKYuJ2lwY4zcxGl/UZbJ5hc/6fKIpi4naXBjjNzEaX9RlsnmFz/p8oimLidpcGOM3MRpf1GWyeYXP+nyiKYuJ2lwY4zcxGl/UZbJ5hc/6fKIpi4naXBjjNzEaX9RlsnmFz/p8oimLidpcGOM3MRpf1GWyeYXP+nyiKYuJ2lwY4zcxGl/UZbJ5hc/6fKIpi4naXBjjNzEaX9RlsnmFz/p8oimLidpcGOM3MRpf1GWyeYXP+nyiKYuJ2lwY4zcxGl/UZbJ5hc/6fKIpi4naXBjjNzEaX9RlsnmFz/p8oimLidpcGOM3MRpf1GWyeYXP+nyiKYuJ2lwY4zcxGl/UZbJ5hc/6fKIpi4naXBjjNzEaX9RlsnmFz/p8rqK5hn1z1glQZtrY/mfFzzXvYr1bHXdYJ5fJIO+H1PwXz8PN51oX74XN7CZ9POvt9eRVKqi2DWPftDXq2nYG5e3v+53ufkPrv+8Hm8L7/yod+z71cQa2nAL71OMEMqYd2iuwpmsIG49EDOtj/BrDurQ16NYDwXqZfYCGZIJaxbNMEQDMGsO1OudkKAYAiGYE4GwpfrEiAYgiGYdWfK1U4IEAzBEMzJQPhyXQJdBeNZ0V98AmV6oLfmeea/Ai5na93T6mrDEegpmPXeA/OAdU/Ppk6LIjm4W/M89/4I5uHcHvarnoLpA3U/z6Y+dwBb87fm2Vrf43iC6dOxoa46nmD282zqxwPV+/teB6tX3QTTq2MDXZdg4mb1GsDW68aV5iJa66iNJ5hcP6bKIpi4nbUD1TsurjQX0atugsn1Y6osgonb2WsAW68bV5qLaK2jNp5gcv2YKotg4nbWDlTvuLjSXESvugkm14+psggmbmevAWy9blxpLqK1jtp4gsn1Y6osgonbWTtQvePiSnMRveommFw/psoimLidvQaw9bpxpbmI1jpq4wkm14+psggmbmftQPWOiyvNRfSqm2By/Zgqi2DidvYawNbrxpXmIlrrqI0nmFw/psoimLidtQPVOy6uNBfRq26CyfVjqiyCidvZawBbrxtXmotoraM2nmBy/Zgqi2DidtYOVO+4uNJcRK+6CSbXj6myCCZuZ68BbL1uXGkuorWO2niCyfVjqiyCidtZO1C94+JKcxG96iaYXD+myiKYuJ29BrD1unGluYjWOmrjCSbXj6my+gpm7mdT1w7aWnFbP3v73LoJZipV5G6mp2A8K3rdDxTfmifB5GZK1gmBnoKZ/tnUyc/WTQ/u1s/ePvP+vII5GbSjftlVMGce0PQg2nfdpxkkeRLMUa1yct8Es+5fY0jxgSfBnAzaUb8kmIeBIId1WRDMUa1yct8Es+5QkdQDT4I5GbSjfkkwDwNBDuuyIJijWuXkvglm3aEiqQeeBHMyaEf9sqtgBnuWcrMctr6/rfdL/uvRJ44Ec1SrnNx3T8GM9izlT4NR+9+t72/r/Wo5lOII5mTQjvplT8H0YVp+NnXpoPda3/r+tt7vXG4E06djQ111PMGUn0197kC05vdqdKmOrfcr1VG7TjC9OjbQdQnm4ZeStYPzKa5Xmz9d//F/t97v8f6t3xNMr44NdF2CIZhWcdTGE8xAIuhVKsEQTK0wWuMIptfUDnRdgiGYVnHUxhPMQCLoVSrBEEytMFrjCKbX1A50XYIhmFZx1MYTzEAi6FUqwRBMrTBa4wim19QOdF2CIZhWcdTGE8xAIuhVKsEQTK0wWuMIptfUDnRdgiGYVnHUxhPMQCLoVSrBEEytMFrjCKbX1A50XYIhmFZx1MYTzEAi6FUqwRBMrTBa4wim19QOdF2CIZhWcdTGE8xAIuhVKsEQTK0wWuMIptfUDnTdvoLZ9tnUrQNwbvzWz4reer9z+RDMQCLoVWpPwYz2LOXWgdr6/rber5XH43iC6TW1A123p2A2fzb1mR9S/XhAwu+3flb01vudyZNgBhJBr1K7CubMAxoOuOvv4hnUpT4RTK+pHei6BJP/JW9psKx/ZEowA4mgV6kEQzC9hEgwvaZ2oOsSDMEQzEADO1qpBEMwBDPa1A5UL8EQDMEMNLCjlTqVYLZ+dvPs+535r3TL2RptHtS7MoGZBLP1s5tn3+/cVzYEs/Kwjni5mQTTh3/5Wdiz70cwfTp8qKsSTNzu0qDFmbmIvexXqqN23SuYXP+nyiKYuJ2lgYozcxF72a9UR+06weT6P1UWwcTtLA1UnJmL2Mt+pTpq1wkm1/+psggmbmdpoOLMXMRe9ivVUbtOMLn+T5VFMHE7SwMVZ+Yi9rJfqY7adYLJ9X+qLIKJ21kaqDgzF7GX/Up11K4TTK7/U2URTNzO0kDFmbmIvexXqqN2nWBy/Z8qi2DidpYGKs7MRexlv1IdtesEk+v/VFkEE7ezNFBxZi5iL/uV6qhdJ5hc/6fKIpi4naWBijNzEXvZr1RH7TrB5Po/VRbBxO0sDVScmYvYy36lOmrXCSbX/6myCCZuZ2mg4sxcxF72K9VRu04wuf5PlUUwcTtLAxVn5iL2sl+pjtp1gsn1f6osgonbWRqoODMXsZf9SnXUrhNMrv9TZRFM3M7SQMWZuYi97Feqo3adYHL9nyqLYOJ2lgYqzsxF7GW/Uh216wST6/9UWXMJZttnYW/9rOit96sVSSmOYKZSRe5mZhLM1s9unn2/kjhq1wkmN5NTZc0kmM2fhb31s6K33s+Hfk816xe5makEc+ZA1P5kFlf3qBevYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1RDMO2DQzZ1zAjmIiO9r00Jpm5YSKWdE8Hsa9YvUg3BtA8O2dQxI5iLjPS+NiWYumEhlXZOBLOvWb9INQTTPjhkU8eMYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1Rz/cOvvxue9uHBLGa2nK2LHGqb7ofAt7e//WxY4mHBqJ3Rcrb2c9JVchEC39y+vjU87cODWcxsOVsXOdQ23ROBZ9c3L+7eGJh4YDBqYnTf6xP49jQ9aqkg8OT5/VPD0zQ8f+P1dV5Pnr99WnH0hByFwPev/npraL4+NPjU8VnO0lHmxn1WEnjy0x8/fvfy7r0hqhsinAqcXt69X85S5bETdiQCN6/f3ZJMYXB8HGf818LlB9Tzd36xeyRptN7r8tPHX5dIpvUV2nJmvHJpnbYDx//zi9/71oMm/mByenH3xi90DyyK82792fXyXoblDVPLuzKXt377g8FyFpYz8fF9Ln0ednfeuZWNAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwL4J/B+NefvO5FLgiwAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </span>
                <p className="font-medium text-gray-300">Liferay DXP 7.4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-[64px] text-black md:py-[64px] lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
              Why Choose IGNEK For Liferay DXP 7.4 Upgrade Services?
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-lg text-gray-700 md:justify-self-end">
              Liferay DXP 7.4 Upgrade is a pivotal step for organizations looking to enhance their digital experience.
              At IGNEK, we specialize in
            </p>
          </div>
          <div className="pt-12">
            <div className="grid grid-cols-1 gap-x-[166px] gap-y-10 md:grid-cols-3">
              {dxpUpgradeServices.map((item, index) => (
                <div key={index} className="flex flex-col pb-8">
                  <div className="flex items-center justify-between border-b border-gray-300 last:border-b-0">
                    <h3
                      className="mb-3 pt-4 text-[30px] font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                  {/* Description */}
                  <p className="pt-4 text-lg leading-relaxed text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudy caseStudies={caseStudies} />

      <WhatMake />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
