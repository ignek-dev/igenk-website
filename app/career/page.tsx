import { Metadata } from "next"
import Image from "next/image"
import { careerHeroData, careerPerksIntroData, jobs, openRolesIntroData, perks } from "data/career"
import JobCard from "../../components/career/JobCard"
import { constructMetadata } from "seo/metadata.config"

export const metadata: Metadata = constructMetadata({
  title: "IGNEK Careers | Join Liferay Experts & Grow",
  description: "Explore IGNEK Careers — join a Liferay-first boutique team that values learning, growth, and enterprise-grade projects. View open roles and apply today.",
  canonicalUrl: "https://www.ignek.com/career/",
  keywords: ["Liferay Careers", "Ignek Jobs", "Work at Ignek"],
})

export default function CareerPage() {


  return (
    <main className="">
      {/* Hero */}
      <section className="relative flex pt-40 lg:h-screen flex-col justify-end overflow-hidden text-white bg-black">
        <div className="hidden md:block absolute inset-0 z-0 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="hidden md:block absolute inset-0 z-0 bg-black/60" />

        <div className="hidden md:block absolute bottom-0 left-0 h-24 w-full z-0 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 mx-auto w-full px-4! pt-[58px] pb-[28px] lg:px-8 lg:pt-16 lg:pb-16 global-container">
          <div className="grid items-end lg:grid-cols-2">
            <div>
              <div className="text-p12 md:text-p16 lg:text-p18 banner-tab">
                {careerHeroData.badgeText}

              </div>

              <div className="text-mask-container mt-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="masked-hero-video"
                  style={{
                    maskImage: "url(/images/career/career.svg)",
                    WebkitMaskImage: "url(/images/career/career.svg)",
                  }}
                >
                  <source src="/images/career/multi-color-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="mt-5 pb-3 lg:pb-12 text-left lg:text-right text-p16! md:text-p18! lg:text-[1.042vw]! font-normal tracking-[0] text-white/80  md:justify-self-end">
              {careerHeroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="border-t border-white/20 bg-black text-white">
        <div className="mx-auto w-full px-5 py-7 lg:py-[3.333vw] md:px-8 global-container">
          <div className="grid items-center gap-2.5 lg:gap-10 md:grid-cols-1 lg:grid-cols-2">
            <h2 className="text-2xl! md:text-5xl! lg:text-[2.5vw]! font-semibold leading-tight lg:leading-[3.125vw]">{careerPerksIntroData.title} <br /> {careerPerksIntroData.title2}</h2>
            <p className="w-full text-left lg:text-right text-p16 md:text-p18 lg:text-[0.938vw] leading-relaxed lg:leading-[1.563vw] font-normal tracking-[0] text-white/80 md:max-w-xl  lg:justify-self-end">
              {careerPerksIntroData.description}
            </p>
          </div>

          <div className="mt-6 lg:mt-[3.646vw] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-[#1F2937]  border-[#1F2937]">
            {perks.map((p, idx) => (
              <div
                key={`${p.title[0]}-${idx}`}
                className="flex flex-col gap-5 lg:gap-[1.875vw] bg-black p-7 lg:p-[2.76vw] text-center"
              >
                <Image
                  src={p.icon || ""}
                  alt={p.title.join(" ")}
                  width={188}
                  height={127}
                  className="mx-auto h-16 w-auto md:h-20 lg:h-auto lg:max-h-[6.615vw] object-contain lg:max-w-[9.792vw]"
                  style={{ width: "189px" }}
                />
                <div className="text-p16 md:text-p18 lg:text-[1.25vw]! leading-tight lg:leading-[1.667vw] font-medium! lg:font-semibold!">
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
      <section className="bg-[#F6F6F6] pb-0 text-black">
        <div className="mx-auto w-full px-5 py-7 lg:py-[3.333vw] md:px-8 global-container">
          <div className="grid items-start gap-2.5 lg:gap-10 lg:grid-cols-2">
            <h2 className="text-2xl! md:text-5xl! lg:text-[2.5vw]!  font-semibold text-balance">
              <span className="block md:text-5xl">{openRolesIntroData.title}</span>
            </h2>
            <p className="w-full text-left lg:text-right text-p16 md:text-p18 lg:text-[1.25vw] leading-relaxed lg:leading-[1.667vw] font-normal tracking-[0] text-gray-700 md:max-w-3xl lg:justify-self-end">
              {openRolesIntroData.description}
            </p>
          </div>

          <div className="mt-6 lg:mt-12 space-y-3.5 lg:space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
