"use client"
import { Metadata } from "next"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  expoerAdvices,
  featureTabs,
  LiferayExpertAdviceData,
  LiferayExpertAdviceSubContent,
  LiferayExpertAdviceTitle1,
  LiferayExpertAdviceTitle2,
  solutions,
} from "data/liferayExpert"

const metadata: Metadata = {
  title: "Liferay Expert Advice | Optimize Your Digital Experience - IGNEK",
  description:
    "Discover unparalleled Liferay expert advice and services to enhance your digital experience platform. Contact us to elevate your Liferay environment.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-expert-advice/",
    title: "Liferay Expert Advice | Optimize Your Digital Experience - IGNEK",
    description:
      "Discover unparalleled Liferay expert advice and services to enhance your digital experience platform. Contact us to elevate your Liferay environment.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayExpertAdvicePage() {
 

  return (
    <main className="pb-0">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full pt-12 pb-[3.802vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-[12.396vw]">
                Liferay
                <br />
                <span className="block">Expert Advice</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 max-w-[40vw] text-right text-white md:justify-self-end">
              Our Liferay Expert Advice Services are here to provide you with the guidance and expertise you need to
              ensure your digital experience platform performs at its best.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] inline-flex flex-wrap gap-[1.5vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="p20 inline-flex items-center rounded-[2.083vw] border border-[#374151] bg-black px-[1.458vw] py-[0.833vw] text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container mx-auto w-full py-[3.333vw]">
          <div className="flex flex-row items-start gap-[8.75vw]">
            <div className="flex flex-col gap-[1.458vw]">
              <h2 className="">Liferay Expert Advice Service</h2>
              <p className="p18 mt-4 max-w-[44.229vw] text-gray-600">
                Gain actionable insights through our Liferay Expert Advice Service and Liferay Consultation, helping you
                enhance performance, implement new features, and create smooth, engaging user experiences.
              </p>
            </div>
            <div className="w-full space-y-[1.979vw] md:justify-self-end">
              {expoerAdvices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[1.458vw] ${
                    index === expoerAdvices.length - 1 ? "pb-0" : "border-b-2 border-gray-200 pb-[1.979vw]"
                  }`}
                >
                  <span className="flex h-[2.5vw] w-[2.5vw] items-center justify-center rounded-md">
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.4999 3C17.4999 1.34062 18.8406 0 20.4999 0H23.4999C25.1593 0 26.4999 1.34062 26.4999 3V16.2094L37.9374 9.60938C39.3718 8.78438 41.2093 9.27187 42.0343 10.7062L43.5343 13.3031C44.3593 14.7375 43.8718 16.575 42.4374 17.4L30.9999 24L42.4374 30.6C43.8718 31.425 44.3687 33.2625 43.5343 34.6969L42.0343 37.2937C41.2093 38.7281 39.3718 39.225 37.9374 38.3906L26.4999 31.7906V45C26.4999 46.6594 25.1593 48 23.4999 48H20.4999C18.8406 48 17.4999 46.6594 17.4999 45V31.7906L6.06243 38.4C4.62805 39.225 2.79055 38.7375 1.96555 37.3031L0.46555 34.7063C-0.35945 33.2719 0.12805 31.4344 1.56243 30.6094L12.9999 24L1.56243 17.4C0.12805 16.575 -0.35945 14.7375 0.46555 13.3031L1.96555 10.7062C2.79055 9.2625 4.62805 8.775 6.06243 9.6L17.4999 16.2V3Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="p-3 text-sm text-[18px] font-medium text-black">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="global-container bg-black py-[3.333vw] text-white">
        <div className="flex w-full flex-row items-start gap-[10.573vw]">
          {/* Left Column */}
          <div className="sticky top-10 flex flex-col gap-[1.458vw]">
            <h1 className="w-[33.073vw] text-white">Solutions For Architecture To Production</h1>
            <p className="p18 text-gray-100">
              From production releases to architecture design, our Liferay Expert Advice Services offer tailored
              strategies and hands-on support to improve efficiency, scalability, and overall platform performance.
            </p>
            <div>
              <ScheduleMeetingButton isFullWidth={false} btnName="Schedule a Call" />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex z-  flex-col items-end">
            <div  className="relative">
              {solutions.map((item, index) => (
                <div
                  key={index}
                   style={{ top: `calc(10vw + ${index * 6}vw)` }}
                       className={`sticky mb-10 transition-opacity duration-500 bg-black    `}                >
                  {index!==0?<hr />:<hr className="hidden"/>} 
                  <div className="flex items-baseline gap-[3.438vw] mt-7">
                   
                    <span className="text-[1.563vw] leading-[3.125vw] font-normal text-white">
                      ({item.number})
                    </span>
                    <div className="flex flex-col gap-[1.458vw]">
                     
                      <h3 className="w-[17.76vw] text-[1.563vw]! leading-[1.875vw]! font-normal! text-white">
                        {item.title}
                      </h3>
                      <p className="p20 text-gray-100">{item.desc}</p>
                      
                    </div>
                  </div>
                   
                </div>
                
              ))}
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
        heading="Get Professional Guidance for Liferay Optimization"
        description="Schedule a Liferay consultation today and start optimizing your environment effectively."
        buttonText="Consult Our Experts"
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
