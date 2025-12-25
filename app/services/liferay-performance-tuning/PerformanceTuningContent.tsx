"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  featureTabs,
  item,
  items,
  liferayPerformanceFeatures,
  liferayPerformanceOutcome,
  liferayPerformanceTuning,
  LiferayPerformanceTuningData,
  LiferayPerformanceTuningSubContent,
  LiferayPerformanceTuningTitle1,
  LiferayPerformanceTuningTitle2,
  liferayPerformanceWhatWeDo,
  serviceDate,
  talkToExpertPerformance,
} from "data/liferay-performance-tuning"

export default function LiferayPerformanceTuningContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setTimeout(() => {
            if (!sectionRef.current) return;
            const sectionTop = sectionRef.current.offsetTop;
            const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
            const scrollPosition = Math.min(window.scrollY + window.innerHeight * 0.6, sectionBottom - 1);
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              for (let i = cardRefs.current.length - 1; i >= 0; i--) {
                const card = cardRefs.current[i];
                if (card) {
                  const cardTop = card.offsetTop;
                  if (scrollPosition >= cardTop) {
                    setActiveIndex((prev) => prev !== i ? i : prev);
                    break;
                  }
                }
              }
            }
            ticking = false;
          }, 120);
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="pb-0">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-[7.865vw] pb-[3.854vw]">
          <div className="relative grid items-start justify-between gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-[2.031vw] w-[40.156vw]">
                {liferayPerformanceTuning.heading}<br />
                <span className="block">{liferayPerformanceTuning.heading2}</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 mt-[3.177vw] text-right md:justify-self-end">
              {liferayPerformanceTuning.description} <br />
              {liferayPerformanceTuning.description2} <br />
              {liferayPerformanceTuning.description3}
            </p>
          </div>
          <div className="mt-[3.177vw] inline-flex flex-wrap gap-[1.563vw]">
            {featureTabs.map((label, index) => (
              <span key={index} className="p20 inline-flex items-center rounded-[2.083vw] border border-[#374151] bg-black px-[1.458vw] py-[0.833vw] text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto w-full pt-[3.333vw] pb-[3.333vw]">
          <div className="flex flex-col items-center gap-[1.458vw]">
            <h2 className="text-[#000000] text-center">{liferayPerformanceFeatures.heading}</h2>
            <p className="p18 text-[#374151]">{liferayPerformanceFeatures.description}</p>
          </div>
          <div className="mt-[2.604vw] grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x-3 md:divide-y-0">
            {liferayPerformanceFeatures.features.slice(0, 3).map((feature, index, arr) => (
              <div key={index} className={`flex flex-col items-center gap-[0.417vw] pt-[2.604vw] pb-[3.698vw] text-center ${index === 0 ? "pr-[2.1vw] pl-0" : ""} ${index === arr.length - 1 ? "pr-0 pl-[2.1vw]" : ""} ${index !== 0 && index !== arr.length - 1 ? "px-[2.1vw]" : ""} `}>
                <h3 className="h-[4.5vw] w-[19.688vw] text-center text-[1.563vw]!">{feature.title}</h3>
                <p className="p20 mt-[0.156vw] text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 divide-y-2 divide-gray-200 border-t-3 border-gray-200 md:grid-cols-3 md:divide-x-3 md:divide-y-0">
            {liferayPerformanceFeatures.features.slice(3, 6).map((feature, index, arr) => (
              <div key={index} className={`flex flex-col items-center gap-[0.417vw] pt-[2.604vw] pb-[3.698vw] text-center ${index === 0 ? "pr-[2.1vw] pl-0" : ""} ${index === arr.length - 1 ? "pr-0 pl-[2.1vw]" : ""} ${index !== 0 && index !== arr.length - 1 ? "px-[2.1vw]" : ""} `}>
                <h3 className="h-[4.5vw] w-[19.688vw] text-[1.563vw]! font-semibold">{feature.title}</h3>
                <p className="p20 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-[0.208vw] py-[3.333vw] md:px-[0.417vw] md:py-[3.333vw] lg:py-[3.333vw]">
          <div className="relative flex flex-row items-center justify-between">
            <h2 className=" ">
              {liferayPerformanceOutcome.heading}<br />
              {liferayPerformanceOutcome.heading2}
            </h2>
            <p className="p18 bottom-0 max-w-[33.906vw] text-right text-white">{liferayPerformanceOutcome.description}</p>
          </div>
          <div className="mt-[3.021vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDate?.map((item, index) => {
              const isLastRow = index >= serviceDate.length - (serviceDate.length % 3 || 3)
              return (
                <div key={item.title} className="group relative flex flex-col justify-between gap-[1.042vw] pr-[5.313vw]">
                  <Image src={item?.image ?? ""} alt="Progress icon" width={44} height={44} />
                  <h3 className="h-[4.688vw] w-[17.292vw] text-[1.563vw]! font-medium!">{item.title}</h3>
                  <p className="p20 h-[6.25vw] text-white/80">{item.desc}</p>
                  {!isLastRow && <hr className="bottom-0 left-0 mt-[2.292vw] mb-[3.333vw] w-full border-b border-white/20" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black" style={{ minHeight: `${items.length * 20}vh` }} ref={sectionRef}>
        <div className="global-container mx-auto w-full px-4 pt-[3.333vw] ">
          <div className="relative flex flex-row items-center justify-between">
            <h2 className="w-[43.802vw] text-[#000000]">
              {liferayPerformanceWhatWeDo.heading}<br /> {liferayPerformanceWhatWeDo.heading2}
            </h2>
            <p className="p18 text[#4B5563] bottom-0 max-w-[35.5vw] text-right">{liferayPerformanceWhatWeDo.description}</p>
          </div>
          <section className="pt-[3.333vw] pb-[3.333vw] ">
            <div className="grid grid-cols-1 md:grid md:grid-cols-2">
              <div className="mr-[3.021vw] max-w-[34.583vw] space-y-6 scroll-auto">
                {item.map((item, index) => (
                  <div key={item.title} ref={(el) => { if (el) cardRefs.current[index] = el; }} className={`group cursor-pointer border-l-4 pl-[1.667vw] transition-all duration-300 ${activeIndex === index ? "border-black text-black" : "border-gray-300 text-gray-600 hover:border-black hover:text-black"} ${index !== items.length - 1 ? "mb-[2.917vw]" : "mb-0"} `}>
                    <h3 className="text-[1.563vw]! font-semibold! text-black">{item.title}</h3>
                    <p className="p16 mt-[0.417vw] max-w-[27.969vw] text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="sticky top-[20.583vw] self-start w-full rounded-xl border border-gray-200 bg-white p-[1.458vw] shadow-sm transition-all duration-500">
                <h3 className="text-[1.563vw]! font-semibold!">{item[activeIndex]?.title}</h3>
                <ul className="mt-[1.25vw] flex flex-col gap-[1.25vw]">
                  {item[activeIndex]?.details.map((text) => (
                    <li key={text} className="flex items-center gap-[1.042vw]">
                      <span className="flex aspect-square h-[1.458vw] w-[1.458vw] shrink-0 items-center justify-center rounded-full bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                          <path d="M1 7L5 11L15 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="p20 text-gray-800">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake WhatMakeData={LiferayPerformanceTuningData} titleText1={LiferayPerformanceTuningTitle1} titleText2={LiferayPerformanceTuningTitle2} subContext={LiferayPerformanceTuningSubContent} />
      <TalkToExpert heading={talkToExpertPerformance.heading} description={talkToExpertPerformance.description} buttonText={talkToExpertPerformance.buttonText} />
      <BlogSection />
    </main>
  )
}
