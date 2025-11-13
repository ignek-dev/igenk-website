import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { expoerAdvices, featureTabs, LiferayExpertAdviceData, LiferayExpertAdviceSubContent, LiferayExpertAdviceTitle1, LiferayExpertAdviceTitle2, solutions } from "data/liferayExpert"

export default function LiferayExpertAdvicePage() {
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
                <span className="block">Expert Advice</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Our Liferay Expert Advice Services are here to provide you with the guidance and expertise you need to
              ensure your digital experience platform performs at its best. Whether you are just starting with Liferay
              or looking to optimize and scale your existing setup, our team of seasoned professionals is ready to
              assist you every step of the way.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-5 text-lg text-white transition-colors hover:border-white hover:text-white [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:text-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="w-[60%] text-5xl leading-[60px] font-semibold sm:text-3xl md:text-5xl">
                Liferay Expert Advice Service
              </h2>
              <p className="mt-4 max-w-xl text-sm text-[20px] text-gray-700">
                Gain actionable insights through our Liferay Expert Advice Service and Liferay Consultation, helping you
                enhance performance, implement new features, and create smooth, engaging user experiences.
              </p>
            </div>
            <div className="w-full space-y-4 md:justify-self-end">
              {expoerAdvices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 rounded-lg bg-white p-0 ${
                    index === expoerAdvices.length - 1 ? "pb-0" : "border-b border-gray-200 pb-4"
                  }`}
                >
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-md">
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

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto grid w-full grid-cols-12 items-start gap-[100px] px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          {/* Left Column */}
          <div className="sticky top-10 col-span-12 flex flex-col justify-center space-y-6 md:col-span-6">
            <h1 className="text-5xl leading-[60px] leading-tight font-bold text-white [@media(min-width:1440px)]:text-4xl [@media(min-width:1800px)]:text-5xl">
              Solutions For Production, Performance, Development And Architecture
            </h1>
            <p className="text-lg leading-relaxed text-white">
              From production releases to architecture design, our Liferay Expert Advice Services offer tailored
              strategies and hands-on support to improve efficiency, scalability, and overall platform performance.
            </p>
            <div>
              <ScheduleMeetingButton isFullWidth={false} btnName="Schedule a Call" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 gap-12 md:col-span-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="rounded-1xl flex flex-col space-y-3 border-b border-gray-400 p-6 py-12 shadow-sm transition-all duration-300 first:py-0 first:pb-12 last:border-b-0 last:pb-0 hover:shadow-md"
              >
                <div className="flex items-baseline gap-[28px] space-x-3">
                  <span className="text-3xl font-medium text-white">({item.number})</span>
                  <div className="flex flex-col gap-[28px]">
                    <h3 className="text-3xl font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-xl text-white">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatMake
        WhatMakeData={LiferayExpertAdviceData}
        titleText1={LiferayExpertAdviceTitle1}
        titleText2={LiferayExpertAdviceTitle2}
        subContext={LiferayExpertAdviceSubContent}
      />
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
