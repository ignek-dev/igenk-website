import Image from "next/image"
import { jobs, perks } from "data/career"
import JobCard from "../../components/career/JobCard"

export default function CareerPage() {


  return (
    <main className="">
      {/* Hero */}
      <section className="relative flex h-screen flex-col justify-end overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto w-full px-4 pt-16 pb-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-sm text-white/80">
                Career at IGNEK
              </div>

              <div className="text-mask-container mt-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="masked-hero-video"
                  style={{
                    maskImage: "url(/images/career/tex.svg)",
                    WebkitMaskImage: "url(/images/career/tex.svg)",
                  }}
                >
                  <source src="/images/career/multi-color-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="max-w-xl pb-12 text-right text-[20px] leading-[30px] font-normal tracking-[0] text-white/80 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              At IGNEK we value people and it include their growth, learning, and perks that help you succeed personally
              and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="border-t border-white/20 bg-black text-white">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">More Than Just a Job</h2>
            <p className="max-w-xl pb-12 text-right text-[20px] leading-[30px] font-normal tracking-[0] text-white/80 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              At IGNEK to enjoy perks that inspire—learning, flexibility, and a workplace that values your well-being.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 border-[#1F2937] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {perks.map((p, idx) => (
              <div
                key={`${p.title[0]}-${idx}`}
                className={`border-r border-[#1F2937] p-8 text-center ${idx < perks.length - 5 ? "border-b border-[#1F2937]" : ""
                  } career-card`}
              >
                {" "}
                <Image
                  src={p.icon || ""}
                  alt={p.title.join(" ")}
                  width={188}
                  height={127}
                  className="mx-auto max-h-[127px] max-w-[188px] object-cover"
                  style={{ height: "auto", width: "auto" }}
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
      <section className="bg-[#F6F6F6] pb-0 text-black">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-4xl leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-3xl md:text-5xl">
              <span className="block">Apply at IGNEK</span>
            </h2>
            <p className="max-w-xl self-center text-right text-[20px] leading-[30px] font-normal tracking-[0] text-gray-700 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              Explore careers at IGNEK, find your perfect role, and join our team to make an impact that matters.
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
