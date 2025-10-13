import Image from "next/image"
import Link from "next/link"

export default function CareerPage() {
  const perks = [
    { title: ["5 Days", "Working"], icon: "/images/career/gibly-images/5-days-working.png" },
    { title: ["Festival", "Celebration"], icon: "/images/career/gibly-images/festival-celebration.png" },
    { title: ["Rewards &", "Benefits"], icon: "/images/career/gibly-images/rewards-benefits.png" },
    { title: ["Certification", "Program"], icon: "/images/career/gibly-images/certification-program.png" },
    { title: ["Skills", "Improvement"], icon: "/images/career/gibly-images/skills-improvment.png" },
    { title: ["Referral", "Program"], icon: "/images/career/gibly-images/referral-program.png" },
    { title: ["Friendly Work", "Culture"], icon: "/images/career/gibly-images/friendly-work-culture.png" },
    { title: ["Training &", "Development"], icon: "/images/career/gibly-images/training-development.png" },
    { title: ["Enterprise", "Projects"], icon: "/images/career/gibly-images/enterprise-project.png" },
    { title: ["Leave Carry", "Forward"], icon: "/images/career/gibly-images/leave-carry-forward.png" },
    { title: ["Yearly Domenstic", "Trip"], icon: "/images/career/gibly-images/yearly-trip.png" },
    { title: ["Hybrid", "Work"], icon: "/images/career/gibly-images/hybrid-work.png" },
    { title: ["Fun", "Activities"], icon: "/images/career/gibly-images/fun-activities.png" },
    { title: ["Flexible", "Timing"], icon: "/images/career/gibly-images/flexible-timing.png" },
    { title: ["Reliable", "Opportunities"], icon: "/images/career/gibly-images/reliable-opportunities.png" },
    { title: ["Professional", "Growth"], icon: "/images/career/gibly-images/professional-growth.png" },
    { title: ["Team", "Lunch"], icon: "/images/career/gibly-images/team-lunch.png" },
    { title: ["Stay", "Happy"], icon: "/images/career/gibly-images/stay-happy.png" },
    { title: ["Free", "Snacks"], icon: "/images/career/gibly-images/free-snacks.png" },
    { title: ["Work Life", "Balance"], icon: "/images/career/gibly-images/work-life-balance.png" },
  ];

  const jobs = [
    {
      id: "sales-head",
      title: "Sales Head – IT Services & Consulting",
      tags: ["Full‑time", "2‑5y", "Ahmedabad"],
    },
    { id: "content-writer", title: "Technical Content Writer", tags: ["Full‑time", "0‑2y", "Remote"] },
    { id: "react-dev", title: "ReactJS Developer", tags: ["Full‑time", "2‑4y", "Ahmedabad"] },
    { id: "qa-engineer", title: "QA Engineer", tags: ["Full‑time", "1‑3y", "Remote"] },
  ]

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative flex h-screen flex-col justify-end text-white">
        <div className="absolute inset-0 -z-10 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto w-full px-4 pt-20 pb-16 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-sm text-white/80">
                Career
              </div>
              <h1 className="mt-6 text-[98px] leading-tight font-semibold sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-[#0E7BF8] via-white to-[#00979E] bg-clip-text text-transparent">
                  Grow With Us,
                  <br />
                  Shine With Us
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-xl text-white/80 md:justify-self-end">
              We’re a growth culture that values creativity, collaboration, and grit. Join us to build products and
              experiences that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="border-t border-white/20 bg-black text-white">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">
              Perks & Benefits That Go <br /> Beyond The Paycheck
            </h2>
            <p className="max-w-xl text-xl text-white/80 md:justify-self-end">
              We invest in experiences, opportunities, and support systems that help you thrive professionally and
              personally.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2  border-[#1F2937] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {perks.map((p, idx) => (
              <div key={`${p.title[0]}-${idx}`} className={`border-r border-[#1F2937] p-8 text-center ${idx < perks.length - 5 ? 'border-b border-[#1F2937]' : ''} career-card `}>
                {" "}
                <img
                  src={p.icon || ""}
                  alt={p.title.join(" ")}
                  className="mx-auto max-h-[127px] max-w-[188px] object-cover"
                />
                <div className="mt-4 text-2xl leading-tight font-semibold">
                  {p.title[0]}
                  <br />
                  {p.title[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-white pb-16 text-black">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Your Next Opportunity Awaits</h2>
            <p className="max-w-xl text-sm text-gray-700 md:justify-self-end">
              Be part of a culture that values creativity, collaboration, and growth.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div>
                    <div className="text-base font-semibold md:text-lg">{job.title}</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-gray-300 px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href="#" className="rounded-full border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100">
                      View Details
                    </Link>
                    <Link
                      href="#"
                      className="inline-block rounded-full bg-gradient-to-r from-black via-black to-[#00979E] p-[2px]"
                    >
                      <span className="block rounded-full bg-black px-4 py-2 text-sm text-white">Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}