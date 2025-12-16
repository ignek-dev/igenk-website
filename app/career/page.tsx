import { Metadata } from "next"
import Image from "next/image"
import { careerHeroData, careerPerksIntroData, jobs, openRolesIntroData, perks } from "data/career"
import JobCard from "../../components/career/JobCard"

export const metadata: Metadata = {
  title: "IGNEK Careers | Join Liferay Experts & Grow",
  description:
    "Explore IGNEK Careers — join a Liferay-first boutique team that values learning, growth, and enterprise-grade projects. View open roles and apply today.",

  openGraph: {
    url: "https://www.ignek.com/career/",
    title: "IGNEK Careers | Join Liferay Experts & Grow",
    description:
      "Explore IGNEK Careers — join a Liferay-first boutique team that values learning, growth, and enterprise-grade projects. View open roles and apply today.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function CareerPage() {


  return (
    <main className="">
      {/* Hero */}
      <section className="relative flex h-screen flex-col justify-end overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto w-full px-4 pt-16 pb-16 md:px-8 global-container">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="p18 banner-tab">
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
            <p className="pb-12 text-right text-[1.042vw] leading-[30px] font-normal tracking-[0] text-white/80  sm:leading-[28px] t md:justify-self-end">
              {careerHeroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="border-t border-white/20 bg-black text-white">
        <div className="mx-auto w-full px-4 py-[3.333vw] md:px-8 global-container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <h2 className="text-[2.5vw] font-semibold leading-[3.125vw]">{careerPerksIntroData.title} <br /> {careerPerksIntroData.title2}</h2>
            <p className="max-w-xl  text-right text-[0.938vw] leading-[1.563vw] font-normal tracking-[0] text-white/80  md:justify-self-end">
              {careerPerksIntroData.description}
            </p>
          </div>

          <div className="mt-[3.646vw] grid grid-cols-2 border-[#1F2937] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {perks.map((p, idx) => {
    const totalItems = perks.length;
    const columns = 5; // for lg screen
    const rowIndex = Math.floor(idx / columns);
    const colIndex = idx % columns;
    
    const isFirstCol = colIndex === 0;
    const isLastCol = colIndex === columns - 1 || idx === totalItems - 1;
    
    return (
      <div
        key={`${p.title[0]}-${idx}`}
        className={`border-r flex flex-col gap-[1.875vw] border-[#1F2937] p-[2.76vw] text-center ${
          idx < perks.length - 5 ? "border-b border-[#1F2937]" : ""
        } ${
          isFirstCol ? "pl-0" : ""
        } ${
          isLastCol ? "pr-0" : ""
        } career-card`}
      >
        <Image
          src={p.icon || ""}
          alt={p.title.join(" ")}
          width={188}
          height={127}
          className="mx-auto max-h-[6.615vw] object-contain max-w-[9.792vw] "
          style={{ height: "auto", width: "189px" }}
        />
        <div className="text-[1.25vw] leading-[1.667vw] font-semibold">
          {p.title[0]}
          <br />
          {p.title[1]}
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-[#F6F6F6] pb-0 text-black">
        <div className="mx-auto w-full px-4 py-[3.333vw] md:px-8 global-container">
          <div className="grid items-start gap-10 auto-grid">
            <h2 className="text-4xl leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-3xl md:text-5xl">
              <span className="block">{openRolesIntroData.title}</span>
            </h2>
            <p className="max-w-3xl self-center text-right text-[20px] leading-[30px] font-normal tracking-[0] text-gray-700 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              {openRolesIntroData.description}
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
