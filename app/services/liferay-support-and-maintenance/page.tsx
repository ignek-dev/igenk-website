import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  activitiesLeft,
  activitiesRight,
  featureTabs,
  LiferaySupportMaintenanceData,
  LiferaySupportMaintenanceSubContent,
  LiferaySupportMaintenanceTitle1,
  LiferaySupportMaintenanceTitle2,
  supportChecklist,
} from "data/liferay-support-and-maintenance"

export default function LiferaySupportMaintenancePage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-14 md:grid-cols-2">
            <div className="">
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay Support
                <br />
                <span className="block">And Maintenance</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-lg pl-0 text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Ensure your Liferay Portal runs smoothly with expert Liferay Support And Maintenance. Get proactive
              monitoring, timely updates, and reliable technical support for continuous platform performance.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-5 text-lg text-white transition-colors hover:border-white hover:text-white [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:text-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Maintenance core with checklist */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="w-[80%] text-5xl leading-[60px] font-semibold sm:text-3xl md:text-5xl">
                Liferay Support And Maintenance
              </h2>
              <p className="mt-4 max-w-xl text-sm text-[20px] text-gray-700">
                We keep your Liferay environment resilient through proactive monitoring, thorough diagnostics, and
                planned upgrades—backed by clear SLAs.
              </p>
            </div>
            <div className="flex w-full flex-col gap-8 space-y-4 md:justify-self-end">
              {supportChecklist.map((txt) => (
                <div key={txt} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-0">
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-black">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 12 12"
                      className="text-white"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

      {/* Key Activities */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-3xl md:text-4xl [@media(min-width:1440px)]:leading-[50px] [@media(min-width:1800px)]:leading-[60px]">
              Key Activities Under Our Liferay Support And Maintenance Service
            </h2>
            <p className="absolute bottom-0 max-w-lg text-right text-lg text-white md:justify-self-end">
              Our dedicated Liferay team offers ongoing Liferay Support and Maintenance to address the challenges of a
              dynamic business environment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <div className="space-y-8">
                {activitiesLeft.map((item, index) => (
                  <div key={item.title} className="group">
                    {index !== 0 && <div className="border-t border-white/30" />}
                    <div className="relative mt-8 flex items-start gap-6 pl-0">
                      <span className="border border-black bg-white p-8 text-3xl font-medium text-black">
                        {item?.num}
                      </span>
                      <div>
                        <h3 className="text-3xl font-medium whitespace-nowrap">{item.title}</h3>
                        <p className="mt-2 text-xl text-white [@media(min-width:1440px)]:min-h-[104px] [@media(min-width:1500px)]:mb-1 [@media(min-width:1800)]:min-h-full [@media(min-width:1800px)]:mb-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="[@media(min-width:1440px)]:space-y-9.5 [@media(min-width:1500px)]:space-y-9.5 [@media(min-width:1800px)]:space-y-12">
                {activitiesRight.map((item, index) => (
                  <div key={item.title} className="group">
                    {index !== 0 && <div className="border-t border-white/30" />}
                    <div className="relative mt-8 flex items-start gap-6 pl-0">
                      <span className="border border-black bg-white p-8 text-3xl font-medium text-black">
                        {item?.num}
                      </span>
                      <div>
                        <h3 className="text-3xl font-medium">{item.title}</h3>
                        <p className="mt-2 text-xl text-white [@media(min-width:1440px)]:min-h-[101px] [@media(min-width:1500px)]:mb-1 [@media(min-width:1800)]:min-h-full [@media(min-width:1800px)]:mb-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
