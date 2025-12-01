import { Metadata } from "next"
import Image from "next/image";
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  activities,
  featureTabs,
  LiferaySupportMaintenanceData,
  LiferaySupportMaintenanceSubContent,
  LiferaySupportMaintenanceTitle1,
  LiferaySupportMaintenanceTitle2,
  supportChecklist,
} from "data/liferay-support-and-maintenance"

const metadata: Metadata = {
  title: "Liferay Support And Maintenance Services - IGNEK",
  description:
    "Keep your Liferay platform running smoothly with our Liferay Support And Maintenance Services. Get expert assistance and ensure continuous operation!",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-support-and-maintenance/",
    title: "Liferay Support And Maintenance Services - IGNEK",
    description: "Keep your Liferay platform running smoothly with our Liferay Support And Maintenance Services. Get expert assistance and ensure continuous operation!",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}


export default function LiferaySupportMaintenancePage() {
  return (
    <main className="pb-0">
      <section className="global-container pt-[7.917vw] pb-[3.802vw] bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

        <div className="inline-flex items-center rounded-full border border-white px-[1.51vw] py-[0.521vw] p18 text-white">
          Liferay Services
        </div>
        <div className="flex items-end justify-between mt-[2.031vw]">
          <h1 className="">
            Liferay Support
            <br />
            And Maintenance
          </h1>
          <p className="text-right p18 text-white w-[38.438vw]">
            Get expert Liferay Support and Maintenance with proactive monitoring, timely updates, and dependable technical assistance for smooth platform performance.
          </p>
        </div>

        <div className="mt-[3.177vw] flex flex-wrap">
          {featureTabs.map((label) => (
            <span
              key={label}
              className="inline-flex p20 mr-[1.458vw]  justify-center last:mr-0 items-center rounded-full border border-[#374151] px-[1.458vw] py-[1.094vw] text-white"
              style={{
                boxShadow: '0 4px 10px 0 rgba(0, 151, 158, 0.25)'
              }}
            >
              {label}
            </span>
          ))}
        </div>

      </section>

      {/* Support & Maintenance core with checklist */}
      <section className="bg-[#F6F6F6] global-container text-black py-[3.333vw]">
        <div className="flex justify-between">
          <div className="w-[33.229vw]">
            <h2>
              Liferay Support And Maintenance
            </h2>
            <p className="text-[#374151] p18 mt-[1.458vw]">
              We keep your Liferay environment resilient through proactive monitoring, thorough diagnostics, and
              planned upgrades—backed by clear SLAs.
            </p>
          </div>
          <div className="flex w-[40.729vw] flex-col ">
            {supportChecklist.map((txt) => (
              <div key={txt} className="flex mb-[2.5vw] last:mb-0 items-center rounded-[0.521vw] border border-[#D1D5DB] bg-white">
                <span className="flex h-[3.75vw] w-[3.75vw] items-center justify-center rounded-[0.521vw] bg-black">
                  <Image src="/images/about/check.png" className="h-[1.875vw] w-[1.875vw]" alt="check-sign" width={100} height={100} />

                </span>
                <p className="ml-[0.833vw] p18 ">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="bg-black global-container py-[3.333vw] text-white">

        <div className="flex items-center justify-between">
          <h2 className="">
            Key Activities Under Our Liferay <br /> Support And Maintenance Service
          </h2>
          <p className="w-[28.906vw] p18 text-[#E5E7EB] text-right">
            Our dedicated Liferay team offers ongoing Liferay <br /> Support and Maintenance to address the challenges <br />of a
            dynamic business environment.
          </p>
        </div>

        <div className="mt-[3.021vw] grid grid-cols-1 gap-x-[111px] lg:grid-cols-2">
          {activities.map((item, index) => (
            <div key={item.title} className="group">
              <div className={`flex ${index < activities.length - 2 ? 'border-b border-[#6B7280]' : ''} ${index < activities.length - 2 ? 'pb-[2.917vw]' : ''} ${index !== 0 && index !== 1 ? 'pt-[2.917vw]' : ''}`}>
                <span className="min-h-[5.208vw] leading-[1.25vw] mr-[1.25vw] min-w-[5.208vw] max-h-[5.208vw] max-w-[5.208vw] border border-black bg-white text-black flex items-center justify-center text-[1.563vw]">
                  {item?.num}
                </span>
                <div>
                  <p className="text-[1.563vw] mb-[0.417vw] leading-[2.292vw] font-medium tracking-[-2%]">{item.title}</p>
                  <p className="p20 text-[#E5E7EB] !leading-[1.25vw]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhatMake
        WhatMakeData={LiferaySupportMaintenanceData}
        titleText1={LiferaySupportMaintenanceTitle1}
        titleText2={LiferaySupportMaintenanceTitle2}
        subContext={LiferaySupportMaintenanceSubContent}
      />
      <TalkToExpert
        heading="24×7 Liferay Support and Maintenance Services"
        description="Proactive monitoring, updates, and troubleshooting for uninterrupted portal performance."
        buttonText="Get Support and Maintanance for Liferay Services"
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
