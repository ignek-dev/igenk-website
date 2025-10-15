import { Metadata } from "next"
import Image from "next/image"
import { BlogSection } from "../../components/Common"
import { Button } from "../../components/Button/Button"
import HeroCTASection from "components/Common/HeroCTASection"



export const metadata: Metadata = {
  title: "Liferay Performance Tuning | IGNEK",
  description:
    "Optimize your Liferay platform with IGNEK's performance tuning services: JVM tuning, caching, DB optimization, and more.",
}

export default function LiferayPerformanceTuningPage() {
  return (
    <main className="pb-16">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#00979E_0%,#00979E_40%,transparent_70%)] opacity-25" />
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">
                Liferay Services
              </div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Performance Tuning</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Cache optimization
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Database tuning
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Server configuration
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Code review
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Code profiling
            </Button>
            <Button
              href="#"
              size="sm"
              intent="secondary"
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Server configuration
            </Button>
          </div>
        </div>
      </section>

      {/* Liferay Performance Tuning - Features Grid */}
      <section className="mt-24 bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Liferay Performance Tuning</h2>
          <p className="mt-6 max-w-5xl text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>

          {/* Row 1 */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="px-8 py-12 text-center">
              <h3 className="text-xl font-semibold">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Of Our Liferay Performance Tuning Services */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Outcome Of Our Liferay
              <br />
              Performance Tuning Services
            </h2>
            <p className="max-w-xl text-sm text-white/80 sm:text-base md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Enhanced User Experience",
                desc: "Delivering a faster, more responsive Liferay Portal through optimized resource allocation for efficient CPU, memory & disk use.",
              },
              {
                title: "Scalability",
                desc: "Prepare your Liferay environment for growth with scalable configurations, clustering, and distributed deploy.",
              },
              {
                title: "Load Testing Excellence",
                desc: "We are very transparent in terms of work, culture & communication to build trust & strong bonding among employees.",
              },
              {
                title: "Database Performance",
                desc: "Optimize database access with tuned configurations, indexing, and query optimizations for enhanced performance.",
              },
              {
                title: "Tailored Portal Configuration",
                desc: "Customize Liferay Portal settings to fit your organization’s requirements, ensuring the platform meets your business needs.",
              },
              {
                title: "Web and Application Server Optimization",
                desc: "Fine‑tune web and application server settings, including thread pools and connections, to maximize performance.",
              },
              {
                title: "Reliability and Fault Tolerance",
                desc: "Increase the reliability of your portal with fine‑tuned settings for clustering, failover mechanisms, and session replication.",
              },
              {
                title: "Java Virtual Machine Fine‑Tuning",
                desc: "Optimize JVM settings, including heap size and garbage collection, for improved Java application performance.",
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <Image src="/images/icon/progress.svg" alt="Progress icon" width={32} height={32} />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/80">{item.desc}</p>
                <div className="mt-6 border-t border-white/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do With Our Liferay DXP Performance Tuning Services */}
      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              What We Do With Our Liferay DXP
              <br />
              Performance Tuning Services
            </h2>
            <p className="max-w-xl text-sm text-gray-700 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left stack */}
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "JVM Memory Tuning",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
                  },
                  { title: "Code Optimization", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                  { title: "Liferay theme optimization", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                  { title: "Database Thread Pool & Connection Pool Optimization", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                  { title: "Portal Tuning by Disabling Unnecessary Filters & enabling JS & CSS Caching", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                  { title: "Web server configuration improves performance", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                  { title: "Load Testing and Tuning", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna." },
                ].map((item) => (
                  <div key={item.title} className="group">
                    <div className="border-t border-gray-300 transition-colors duration-300 group-hover:border-black"></div>
                    <div className="relative mt-6 pl-6">
                      <span className="absolute top-1 left-0 h-6 w-1 bg-gray-300 transition-colors duration-300 group-hover:bg-black" />
                      <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold md:text-xl">JVM Memory Tuning</h3>
                <ul className="mt-4 space-y-4">
                  {[
                    "Optimize Heap Memory → Set Initial Heap Size, Set Maximum Heap Size",
                    "Optimize Garbage Collection → Choose Garbage Collector Selection, Adjust GC Threads Numbers",
                    "Set Metaspace",
                    "Set Thread Stack Size",
                    "Generate Heap Dump on OutOfMemory Error",
                    "Use JVM Memory Tuning tools like JVisualVM or JConsole",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black">
                        <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-800">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroCTASection />
      <BlogSection />
    </main>
  )
}



