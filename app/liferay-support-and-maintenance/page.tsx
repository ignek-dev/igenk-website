import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import { BlogSection } from "../../components/Common"

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
      desc: "We monitor performance, availability, user experience, security, logs, content, integrations, ",
    },
    {
      num: "02",
      title: "Content & Configuration",
      desc: "After deployment, adapt Liferay to changing needs through configuration tweaks and content updates,",
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
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
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
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              End‑to‑end support and reliable maintenance for your Liferay platform—ensuring uptime, performance, and
              ongoing improvements.
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

      {/* Support & Maintenance core with checklist */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="w-[70%] text-5xl leading-[60px] font-semibold sm:text-3xl md:text-5xl">
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
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
              Key Activities Under Our Liferay Support And Maintenance Service
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
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
                    <div className="relative mt-6 flex items-start gap-6 pl-0">
                      <span className="border border-black bg-white p-8 text-3xl font-medium text-black">
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
                    <div className="relative mt-6 flex items-start gap-6 pl-0">
                      <span className="border border-black bg-white p-8 text-3xl font-medium text-black">
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
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
