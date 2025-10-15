import Image from "next/image"
import Link from "next/link"
import { BlogSection } from "../../components/Common"
import HeroCTASection from "components/Common/HeroCTASection"

export default function LiferayMigrationPage() {
  const featureTabs = [
    "Seamless Migration to Liferay DXP",
    "Upgrading/Migration",
    "Ensure Long‑Term Support & Scalability",
  ]

  const circlePoints = [
    { label: "Create Personalized Experiences for Users", pos: "top-4 left-1/2 -translate-x-1/2" },
    { label: "Easy Integration Capabilities", pos: "top-1/3 right-4" },
    { label: "Rich UI/UX Capabilities", pos: "top-1/2 right-2 -translate-y-1/2" },
    { label: "Workflows, Forms, and Collaboration", pos: "bottom-1/3 right-4" },
    { label: "Low Code/No Code Features boost Citizen Development", pos: "bottom-4 left-1/2 -translate-x-1/2" },
    { label: "Mobile‑ready Capabilities", pos: "bottom-1/3 left-4" },
    { label: "Efficient Content Management", pos: "top-1/2 left-2 -translate-y-1/2" },
  ]

  const steps = [
    {
      title: "Requirement Understanding",
      desc:
        "We analyze business goals, existing setup, and key constraints to map current state to desired outcomes.",
    },
    {
      title: "Migration Planning",
      desc:
        "Define source systems, data strategy, cut‑over plan, timelines, and risks to ensure a predictable migration.",
    },
    {
      title: "Portal Design – UI/UX",
      desc:
        "Establish information architecture, design systems, and interaction models for an intuitive experience.",
    },
    {
      title: "Portal Development",
      desc:
        "Develop new features, port legacy content, configure integrations, and prepare environments for migration.",
    },
    {
      title: "Portal Migration QA",
      desc:
        "Verify integrity and performance with automated and manual tests to ensure parity and reliability.",
    },
    {
      title: "Portal Deployment & Production Release",
      desc:
        "Plan deployment windows, cut‑over, and post‑release monitoring for a smooth transition to Liferay.",
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
                Liferay
                <br />
                <span className="block">Migration</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
              Migrate confidently to Liferay with a proven plan that protects data, accelerates delivery, and unlocks new capabilities.
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

      {/* Circular reasons section */}
      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="relative mx-auto grid place-items-center rounded-xl bg-gray-50 p-12">
            {/* Outer circle */}
            <div className="relative h-[520px] w-[520px] rounded-full border border-gray-200">
              {/* Inner circle */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white shadow-sm flex items-center justify-center text-center px-6">
                <div>
                  <Image src="/images/logo.svg" alt="Liferay" width={28} height={28} className="mx-auto" />
                  <h3 className="mt-3 text-base font-semibold">Why Enterprises Should Migrate To Liferay?</h3>
                  <p className="mt-2 text-xs text-gray-700">Unlock modern Liferay capabilities with improved performance, security, and flexibility.</p>
                </div>
              </div>
              {/* Points around the circle */}
              {circlePoints.map((p) => (
                <div key={p.label} className={`absolute ${p.pos} w-52 text-xs text-gray-800`}>• {p.label}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process timeline */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Our Liferay Migration Process</h2>
              <p className="mt-4 max-w-xl text-sm text-white/80">
                Understand objectives, plan dependencies, and execute migrations with predictable outcomes.
              </p>
              <Link
                href="mailto:sales@ignek.com"
                className="mt-8 inline-block rounded-full p-[2px] bg-gradient-to-r from-black via-black to-[#00979E]"
              >
                <span className="block rounded-full bg-black px-5 py-2 text-sm text-white">Schedule Meeting</span>
              </Link>
            </div>

            <div>
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-px bg-white/30" />
                <div className="space-y-10">
                  {steps.map((s, idx) => (
                    <div key={s.title} className="grid grid-cols-[56px_1fr] items-start gap-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-transparent text-sm">{String(idx + 1).padStart(2, "0")}</div>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold md:text-lg">{s.title}</h3>
                        <p className="mt-2 text-sm text-white/80">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies (reuse BlogSection) */}
      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 md:pt-16 lg:pt-20">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Related Case Studies</h2>
        </div>
      </section>
      <BlogSection />

      {/* CTA */}
     <HeroCTASection />
    </main>
  )
}