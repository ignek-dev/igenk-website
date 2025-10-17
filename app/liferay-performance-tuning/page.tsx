import { Metadata } from "next"
import Image from "next/image"
import { BlogSection } from "../../components/Common"
import { Button } from "../../components/Button/Button"
import HeroCTASection from "components/Common/HeroCTASection"
import CaseStudy from "components/Common/CaseStudy"
import WhatMake from "components/Common/WhatMake"
import TalkToExpert from "components/Common/TalkToExpert"



export const metadata: Metadata = {
  title: "Liferay Performance Tuning | IGNEK",
  description:
    "Optimize your Liferay platform with IGNEK's performance tuning services: JVM tuning, caching, DB optimization, and more.",
}

const items = [
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
]

const caseStudies = [
  {
    id: 1,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "Corporate",
    title: "Music License Management Portal: Onboarding & Data Integrity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    id: 2,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "FinTech",
    title: "Transforming Financial Services with Innovations",
    description:
      "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    id: 3,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "Healthcare",
    title: "Digital Health Platform: Patient-Centric Solutions",
    description:
      "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
  },
  {
    id: 4,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "E-commerce",
    title: "Scaling Online Retail with Cloud Technologies",
    description:
      "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
  },
];
const featureTabs = [
  "Cache optimization",
  "Database tuning",
  "Server configuration",
  "Code review",
  "Code profiling",
  "Server configuration"
]
export default function LiferayPerformanceTuningPage() {
  return (
    <main className="pb-16">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <div className="">
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
              <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">
                  Performance Tuning</span>
              </h1>
            </div>
            <p className="max-w-xl text-lg  text-white  sm:text-lg md:mt-16 md:justify-self-end absolute bottom-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label, index) => (
              <span key={index} className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white hover:text-white hover:border-white transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Liferay Performance Tuning - Features Grid */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight">Liferay Performance Tuning</h2>
          <p className="text-lg text-gray-700 justify-self-center text-[#101012] leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>

          {/* Row 1 */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold w-[80%] text-center">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold  w-[80%]">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold  w-[80%]">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold w-[80%]">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold w-[80%]">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
            <div className="flexflex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="font-semibold text-3xl font-semibold w-[80%]">Ongoing Technical Assistance</h3>
              <p className="mt-3 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Of Our Liferay Performance Tuning Services */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Outcome Of Our Liferay
              <br />
              Performance Tuning Services
            </h2>
            <p className="max-w-xl text-xl text-white md:justify-self-end absolute bottom-0 text-white text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const isLastRow = index >= items.length - (items.length % 3 || 3);

              return (
                <div key={item.title} className="group min-h-[246px] relative">
                  <Image src="/images/icon/progress.svg" alt="Progress icon" width={32} height={32} />
                  <h3 className="mt-4 text-3xl font-medium w-[60%]">{item.title}</h3>
                  <p className="mt-3 text-white/80 absolute bottom-[40px]">{item.desc}</p>
                  {!isLastRow && (
                    <div className="mt-6 border-t border-white/30 absolute bottom-0 w-full" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Do With Our Liferay DXP Performance Tuning Services */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-[60px]">
              What We Do With Our Liferay DXP Performance Tuning Services
            </h2>
            <p className="max-w-xl text-xl text-gray-700 md:justify-self-end absolute bottom-0 text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left stack */}
            <div className="pr-12">
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
                  <div
                    key={item.title}
                    className="group transition-colors duration-300 hover:border-black pb-[40px] "
                  >
                    <div className="relative mt-6 pl-6 h-[108px] justify-center flex flex-col ">
                      <span className="absolute left-0 top-0 h-full w-1 bg-gray-300 transition-colors duration-300 group-hover:bg-black" />
                      <div>
                        <h3 className="text-[30px] font-medium">{item.title}</h3>
                        <p className="mt-2 text-base text-gray-700">{item.desc}</p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-semibold md:text-3xl">JVM Memory Tuning</h3>
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
                      <span className="text-lg text-gray-800">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudy
        caseStudies={caseStudies}
      />
      <WhatMake />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}



