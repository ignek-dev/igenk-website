import Image from "next/image"
import Link from "next/link"
import { BlogSection } from "../../components/Common"
import HeroCTASection from "components/Common/HeroCTASection"



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
        "Proactive system health, availability, and application telemetry to keep your Liferay services optimized.",
    },
    {
      num: "02",
      title: "Content & Configuration",
      desc:
        "Day‑to‑day content operations, metadata, and configuration through governed workflows.",
    },
    {
      num: "03",
      title: "Debugging & Bug fixing",
      desc: "Identify problems, reproduce issues, and deploy hotfixes swiftly.",
    },
    {
      num: "04",
      title: "Enhancement & Development",
      desc: "Plan and deliver small enhancements without disrupting stability.",
    },
    {
      num: "05",
      title: "Regular Updates",
      desc: "Keep dependencies current with secure, tested updates and patches.",
    },
  ]

  const activitiesRight = [
    {
      num: "06",
      title: "Backup and Recovery",
      desc: "Tested recovery strategies, verified backups, and documented runbooks.",
    },
    {
      num: "07",
      title: "License Management",
      desc: "Compliance monitoring, renewals, and capacity planning for licenses.",
    },
    {
      num: "08",
      title: "Performance Tuning",
      desc: "JVM, DB, and server optimizations aligned to real workload patterns.",
    },
    {
      num: "09",
      title: "Testing Environment",
      desc: "CI/CD‑ready test lanes for quick validation before production changes.",
    },
    {
      num: "10",
      title: "Regular Audits",
      desc: "Security, performance, and compliance audits to maintain quality.",
    },
  ]

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay Support
                <br />
                <span className="block">And Maintenance</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
              End‑to‑end support and reliable maintenance for your Liferay platform—ensuring uptime, performance, and ongoing improvements.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-10 flex flex-wrap gap-5">
            {featureTabs.map((label) => (
              <span key={label} className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Maintenance core with checklist */}
      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Liferay Support And Maintenance</h2>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                We keep your Liferay environment resilient through proactive monitoring, thorough diagnostics, and planned upgrades—backed by clear SLAs.
              </p>
            </div>
            <div className="space-y-4 md:justify-self-end w-full">
              {supportChecklist.map((txt) => (
                <div key={txt} className="flex items-center gap-3 rounded-lg bg-gray-100 p-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black">
                    <svg width="16" height="16" viewBox="0 0 12 12" className="text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-800">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Key Activities Under Our Liferay Support And Maintenance Service</h2>
            <p className="max-w-xl text-sm text-white/80 md:justify-self-end">
              Our approach blends prevention and rapid response to keep your platform stable, secure, and performing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <div className="space-y-8">
                {activitiesLeft.map((item) => (
                  <div key={item.title} className="group">
                    <div className="border-t border-white/30" />
                    <div className="relative mt-6 pl-6">
                      <span className="absolute top-1 left-0 h-6 w-1 bg-white/30" />
                      <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="rounded-xl border border-white/30 bg-transparent p-6">
                <div className="space-y-6">
                  {activitiesRight.map((it) => (
                    <div key={it.title} className="grid grid-cols-[36px_1fr] items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-sm">{it.num}</div>
                      <div>
                        <h4 className="text-base font-semibold md:text-lg">{it.title}</h4>
                        <p className="mt-1 text-sm text-white/80">{it.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies (reuse BlogSection for now) */}
      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-12 md:py-16 lg:py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Related Case Studies</h2>
        </div>
      </section>
      <BlogSection />

      {/* CTA */}
      <HeroCTASection />
    </main>
  )
}