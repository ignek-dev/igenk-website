import Image from "next/image"
import Link from "next/link"
import { BlogSection } from "../../components/Common"
import HeroCTASection from "components/Common/HeroCTASection"
import WhatMake from "components/Common/WhatMake"
import TalkToExpert from "components/Common/TalkToExpert"



export default function LiferaySupportMaintenancePage() {
  const featureTabs = [
    "Application Maintenance Support",
    "Annual Maintenance Contracts",
    "Application Monitoring",
    "Troubleshooting & Bug Fixes",
  ]

  const supportChecklist = [
    "24×7 availability with SLA‑backed response times",
    "Incident tracking, analysis, and root‑cause resolution",
    "Performance review and optimization across the stack",
    "Release management, patching, and version upgrades",
    "Security audits and vulnerability fixes",
    "Backup & disaster recovery readiness",
  ]

  const activitiesLeft = [
    {
      num: "01",
      title: "Monitoring",
      desc:
        "We monitor performance, availability, user experience, security, logs, content, integrations, ",
    },
    {
      num: "02",
      title: "Content & Configuration",
      desc:
        "After deployment, adapt Liferay to changing needs through configuration tweaks and content updates,",
    },
    {
      num: "03",
      title: "Debugging & Bug fixing",
      desc: "Rapidly resolve post-launch issues, ensuring Liferay Portal’s seamless performance with expert debugging ",
    },
    {
      num: "04",
      title: "Enhancement & Development",
      desc: "We offer post-production Liferay development, unlocking its full potential of Liferay with dynamic enhancements ",
    },
    {
      num: "05",
      title: "Regular Updates",
      desc: "We ensure your Liferay Server remains up-to-date by Regular Updated in Liferay.",
    },
  ]

  const activitiesRight = [
    {
      num: "06",
      title: "Backup and Recovery",
      desc: "Ensure data integrity with scheduled backups and implement a robust disaster recovery plan for reliability.",
    },
    {
      num: "07",
      title: "License Management",
      desc: "Maintain Liferay compliance by monitoring licensing terms, tracking renewals, and ensuring adherence to usage limits.",
    },
    {
      num: "08",
      title: "Performance Tuning",
      desc: "Periodically review and optimize the performance of Liferay, making adjustments to configurations as needed.",
    },
    {
      num: "09",
      title: "Testing Environment",
      desc: "Maintain a separate testing environment to validate updates and changes before applying them",
    },
    {
      num: "10",
      title: "Regular Audits",
      desc: "Conduct regular audits of the Liferay implementation to identify and address any inefficiencies or areas ",
    },
  ]

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <div className="">
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay Support
                <br />
                <span className="block">And Maintenance</span>
              </h1>
            </div>
            <p className="max-w-xl text-lg  text-white  sm:text-lg md:mt-16 md:justify-self-end absolute bottom-0">
              End‑to‑end support and reliable maintenance for your Liferay platform—ensuring uptime, performance, and ongoing improvements.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label) => (
              <span key={label} className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white hover:text-white hover:border-white transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Maintenance core with checklist */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-5xl sm:text-3xl md:text-5xl font-semibold w-[70%] leading-[60px]">Liferay Support And Maintenance</h2>
              <p className="mt-4 max-w-xl text-sm text-gray-700 text-[20px]">
                We keep your Liferay environment resilient through proactive monitoring, thorough diagnostics, and planned upgrades—backed by clear SLAs.
              </p>
            </div>
            <div className="space-y-4 md:justify-self-end w-full flex flex-col gap-8">
              {supportChecklist.map((txt) => (
                <div key={txt} className="flex items-center gap-3 rounded-lg bg-white border border-gray-200 p-0">

                  <span className="flex  h-[70px] w-[70px] items-center justify-center rounded-md bg-black">
                    <svg width="40" height="40" viewBox="0 0 12 12" className="text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-black p-3 font-medium text-[18px]">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-[60px]">Key Activities Under Our Liferay Support And Maintenance Service</h2>
            <p className="max-w-xl text-xl text-white md:justify-self-end absolute bottom-0 text-white text-right">
              Our approach blends prevention and rapid response to keep your platform stable, secure, and performing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <div className="space-y-8">
                {activitiesLeft.map((item, index) => (
                  <div key={item.title} className="group">
                    {index !== 0 && <div className="border-t border-white/30" />}
                    <div className="relative mt-6 pl-0 flex items-start gap-6">
                      <span className="text-3xl text-black font-medium p-8 border border-black bg-white">
                        {item?.num}
                      </span>
                      <div>
                        <h3 className="text-3xl font-medium">{item.title}</h3>
                        <p className="mt-2 text-xl text-white">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="space-y-8">
                {activitiesRight.map((item, index) => (
                  <div key={item.title} className="group">
                    {index !== 0 && <div className="border-t border-white/30" />}
                    <div className="relative mt-6 pl-0 flex items-start gap-6">
                      <span className="text-3xl text-black font-medium p-8 border border-black bg-white">
                        {item?.num}
                      </span>
                      <div>
                        <h3 className="text-3xl font-medium">{item.title}</h3>
                        <p className="mt-2 text-xl text-white">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhatMake />
     <TalkToExpert/>
      <BlogSection />

      {/* CTA */}

    </main>
  )
}