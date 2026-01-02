import Image from "next/image";
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  activities,
  featureTabs,
  liferaySupportCta,
  LiferaySupportMaintenanceData,
  LiferaySupportMaintenanceSubContent,
  LiferaySupportMaintenanceTitle1,
  LiferaySupportMaintenanceTitle2,
  supportActivities,
  supportBanner,
  supportChecklist,
  supportCore,
} from "data/liferay-support-and-maintenance"

export default function LiferaySupportMaintenancePage() {
  return (
    <main className="pb-0">
      <section className="global-container bg-black pt-8 pb-9 text-white lg:pt-[7.917vw] lg:pb-[3.802vw]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

        {/* <div className="inline-flex items-center rounded-full border border-white px-[1.51vw] py-[0.521vw] p18 text-white">
          Liferay Services
        </div> */}
        <div className="mt-8 flex flex-col justify-between gap-4.5 lg:mt-[2.031vw] lg:flex-row lg:items-end lg:gap-0">
          <h1 className="">
            <span className="md:hidden">
              {supportBanner.heading3}
              <br />
              {supportBanner.heading4}
            </span>
            <span className="hidden md:block">
              {supportBanner.heading}
              <br />
              {supportBanner.heading2}
            </span>
          </h1>
          <p className="text-p16 md:text-p18 w-full pb-0 text-left text-white lg:w-[38.438vw] lg:pb-3 lg:text-right">
            {supportBanner.description}
          </p>
        </div>

        <div className="mt-4.5 flex flex-wrap gap-3 lg:mt-[3.177vw] lg:gap-0">
          {featureTabs.map((label) => (
            <span
              key={label}
              className="text-p16 md:text-p18 lg:text-p20 inline-flex items-center justify-center rounded-full border border-[#374151] px-4 py-3 text-white lg:mr-[1.458vw] lg:px-[1.458vw] lg:py-[1.094vw] lg:text-[1.041vw] lg:last:mr-0"
              // className="inline-flex p20 mr-[1.458vw]  justify-center last:mr-0 items-center rounded-full border border-[#374151] px-[1.458vw] py-[1.094vw] text-white"
              style={{
                boxShadow: "0 4px 10px 0 rgba(0, 151, 158, 0.25)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Support & Maintenance core with checklist */}
      <section className="global-container bg-[#F6F6F6] py-7 text-black lg:py-[3.333vw]">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:gap-0">
          <div className="h-auto w-full lg:sticky lg:top-[200px] lg:h-[100%] lg:w-[33.229vw]">
            <h2>{supportCore.heading}</h2>
            <p className="text-p16 md:text-p18 mt-2.5 text-[#374151] lg:mt-[1.458vw]">{supportCore.description}</p>
          </div>

          {/* Right Side (List) */}
          <div className="flex w-full flex-col lg:w-[40.729vw]">
            {supportChecklist.map((txt) => (
              <div
                key={txt}
                className="mb-7 flex items-center rounded-lg border border-[#D1D5DB] bg-white  last:mb-0 lg:mb-[2.5vw] lg:rounded-[0.521vw] lg:p-0"
              >
                <span className="flex h-14.5 w-14.5 flex-shrink-0 items-center justify-center rounded-md bg-black lg:h-[3.75vw] lg:w-[3.75vw] lg:rounded-[0.521vw]">
                  <Image
                    src="/images/about/check.png"
                    className="h-7 w-7 lg:h-[1.875vw] lg:w-[1.875vw]"
                    alt="check-sign"
                    width={100}
                    height={100}
                  />
                </span>
                <p className="text-p16 md:text-p18 ml-4 p-1 lg:ml-[0.833vw]">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="global-container bg-black py-7 text-white lg:py-[3.333vw]">
        <div className="flex flex-col items-start justify-between gap-2.5  lg:flex-row lg:items-center lg:gap-0">
          <h2 className="">
            <span className="md:hidden">
              {supportActivities.heading} {supportActivities.heading2}
            </span>
            <span className="hidden md:block">
              {supportActivities.heading} <br /> {supportActivities.heading2}
            </span>
          </h2>
          <p className="text-p16 md:text-p18 w-full text-left text-[#E5E7EB] lg:w-[28.906vw] lg:text-right">
            {supportActivities.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:mt-[3.021vw] lg:grid-cols-2 lg:gap-x-[111px]">
          {activities.map((item, index) => {
            const isLast = index === activities.length - 1
            const isLastTwo = index >= activities.length - 2

            return (
              <div key={item.title} className="group">
                <div
                  className={`flex border-b border-[#6B7280] py-7 ${isLast ? "border-b-0" : ""} /* Mobile */ lg:${isLastTwo ? "border-b-0" : "border-b"
                    } /* Desktop */ ${index !== 0 && index !== 1 ? "lg:pt-[2.917vw]" : ""} ${index < activities.length - 2 ? "lg:pb-[2.917vw]" : ""
                    } `}
                >
                  {" "}
                  <span className="mr-3 flex h-13.5 w-13.5 min-w-[3.5rem] items-center justify-center border border-black bg-white text-xl font-medium text-black lg:mr-[1.25vw] lg:max-h-[5.208vw] lg:min-h-[5.208vw] lg:max-w-[5.208vw] lg:min-w-[5.208vw] lg:text-[1.563vw] lg:leading-[1.25vw]">
                    {item?.num}
                  </span>
                  <div>
                    <p className="mb-1 text-xl font-medium tracking-tight lg:mb-[0.417vw] lg:text-[1.563vw] lg:leading-[2.292vw] lg:tracking-[-2%]">
                      {item.title}
                    </p>
                    <p className="text-p16 md:text-p20 leading-relaxed! text-[#E5E7EB] lg:leading-[1.25vw]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <WhatMake
        WhatMakeData={LiferaySupportMaintenanceData}
        titleText1={LiferaySupportMaintenanceTitle1}
        titleText2={LiferaySupportMaintenanceTitle2}
        subContext={LiferaySupportMaintenanceSubContent}
      />
      <TalkToExpert
        heading={liferaySupportCta.heading}
        description={liferaySupportCta.description}
        buttonText={liferaySupportCta.buttonText}
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
