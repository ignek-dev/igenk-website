"use client"
import { Metadata } from "next"
import Image from "next/image"
import { useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  featureTabs,
  items,
  LiferayPerformanceTuningData,
  LiferayPerformanceTuningSubContent,
  LiferayPerformanceTuningTitle1,
  LiferayPerformanceTuningTitle2,
  serviceDate,
} from "data/liferay-performance-tuning"

 const metadata: Metadata = {
  title: "Liferay Performance Tuning Services - IGNEK",
  description:
    "Optimize your Liferay site's speed and efficiency with our Liferay Performance Tuning Services. Enhance user experience and drive better results.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-performance-tuning/",
    title: "Liferay Performance Tuning Services - IGNEK",
    description: "Optimize your Liferay site's speed and efficiency with our Liferay Performance Tuning Services. Enhance user experience and drive better results.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}
const item = [
  {
    title: "JVM Memory Tuning",
    desc: "Optimize heap memory, adjust GC threads, and tune memory usage for peak JVM performance.",
    details: [
      "Optimize Heap Memory → Set Initial Heap Size, Set Maximum Heap Size",
      "Optimize Garbage Collection → Choose Garbage Collector Selection, Adjust GC Threads Numbers",
      "Set Metaspace",
      "Set Thread Stack Size",
      "Generate Heap Dump on OutOfMemory Error",
      "Use JVM Memory Tuning tools like JVisualVM or JConsole",
    ],
  },
  {
    title: "Code Optimization",
    desc: "Improve code efficiency and reduce CPU overhead for faster execution.",
    details: [
      "Search Indexing Optimization",
      "Improve code reviews and efficiency with code splitting.",
      "Minimize Database Queries",
      "Data Lazy Loading",
      "Use Efficient Algorithms and Data Structures",
      "Optimize Loops and Iterations",
      "Review External Dependencies",
      "Avoid Heavy Transactions and Excessive Logging",
    ],
  },
  {
    title: "Liferay theme optimization",
    desc: "Enhance UI responsiveness and reduce CSS/JS load times.",
    details: [
      "Minification and Compression of CSS and Javascript files",
      "Optimize and compress images",
      "Lazy loading of the resources",
      "CSS Sprites to combine multiple images into a single image file",
      "Remove Unused CSS and JavaScript",
      "CDN Integration",
      "Keep External Dependencies Minimal",
    ],
  },
  {
    title: "Database Thread Pool & Connection Pool Optimization",
    desc: "Tune database connection pools to reduce latency.",
    details: [
      "Fine-tune Thread and Connection Pools",
      "Monitor and adjust connection pool settings based on database usage",
      "Implement database connection pooling strategies",
      "Regularly review and optimize database queries and transactions to reduce connection pool contention and improve overall performance.",
    ],
  },
  {
    title: "Portal Tuning by Disabling Unnecessary Filters & enabling JS & CSS Caching",
    desc: "Improve overall page rendering time by optimizing filters and caching.",
    details: ["Disable Unnecessary Filters", "Enable JavaScript & CSS Caching", "Optimize Web Server Configuration"],
  },
  {
    title: "Web server configuration improves performance",
    desc: "Fine-tune web server parameters for higher throughput.",
    details: [
      "Utilize caching mechanisms such as content caching, reverse proxy caching, and HTTP caching headers to reduce server load and improve response times.",
      "Implement load balancing and clustering techniques to distribute incoming traffic across multiple servers for improved scalability and fault tolerance.",
      "Utilize content delivery networks (CDNs) to cache and deliver static assets closer to end-users, reducing latency and improving overall website performance.",
    ],
  },
  {
    title: "Load Testing and Tuning",
    desc: "Simulate heavy traffic to find and fix performance bottlenecks.",
    details: [
      "Utilize tools like Apache JMeter or Gatling for load testing to simulate real-world scenarios and identify bottlenecks",
      "Analyze results to optimize system configurations such as thread pools, caching, and scalability",
      "Implement caching strategies and horizontal scaling to handle peak loads effectively.",
      "Monitor key performance metrics and iterate on tuning efforts for continuous optimization.",
    ],
  },
]

export default function LiferayPerformanceTuningPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <main className="pb-0">
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full   pb-16  pt-[7.865vw] global-container">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div className="">
              <div className="p18 banner-tab">
                Liferay Services
              </div>
              <h1 className="mt-[2.552vw] ">
                Liferay
                <br />
                <span className="block">Performance Tuning</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl p18 mt-[3.177vw] md:justify-self-end">
              Optimize your Liferay Portal with specialized Liferay Performance Tuning, improving speed, stability, and
              resource efficiency for superior user experience.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-[0.521vw] ">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/30 py-[0.833vw] px-[1.458vw] p20 text-white transition-colors hover:border-white hover:text-white "
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Liferay Performance Tuning - Features Grid */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="justify-self-center text-center text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Common Liferay Performance Challenges We Solve
          </h2>
          <p className="mt-4 justify-self-center text-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Through expert Liferay Performance Tuning, we identify bottlenecks, optimize configurations, and deliver
            faster, more scalable, and reliable Liferay DXP experiences.
          </p>

          {/* Row 1 */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-center text-3xl font-semibold">Slow Page Load Times</h3>
              <p className="mt-3 text-gray-700">
                Delays caused by unoptimized code, heavy themes, or large assets are resolved through Liferay
                Performance Tuning.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-3xl font-semibold">Inefficient Database Queries</h3>
              <p className="mt-3 text-gray-700">
                Poorly optimized queries slow down portals; we refine indexing and database performance for faster
                results.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-3xl font-semibold">High Server Resource Usage</h3>
              <p className="mt-3 text-gray-700">
                Memory leaks, unbalanced loads, or heavy CPU usage are minimized with fine-tuned Liferay DXP Performance
                Tuning.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-3xl font-semibold">Scalability Issues Under Heavy Traffic</h3>
              <p className="mt-3 text-gray-700">
                We prepare portals to handle spikes in traffic with clustering, caching, and distributed deployment.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-3xl font-semibold">Poor Search and Indexing Performance</h3>
              <p className="mt-3 text-gray-700">
                Slow or inaccurate search results are fixed with optimized indexing and search tuning for seamless user
                experiences.
              </p>
            </div>
            <div className="flexflex-col items-center justify-center px-8 py-12 text-center">
              <h3 className="w-[90%] text-3xl font-semibold">Frequent Downtime and Instability</h3>
              <p className="mt-3 text-gray-700">
                Through proactive monitoring and fault-tolerant setups, we ensure reliable and stable Liferay Portal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Of Our Liferay Performance Tuning Services */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl [@media(min-width:1400px)]:text-4xl [@media(min-width:1800px)]:text-5xl">
              Outcome Of Our Liferay
              <br />
              Performance Tuning Services
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
              Liferay Performance Tuning improves portal speed, stability, scalability, security, and resource
              efficiency for optimal performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDate?.map((item, index) => {
              const isLastRow = index >= serviceDate.length - (serviceDate.length % 3 || 3)

              return (
                <div key={item.title} className="group relative min-h-[246px]">
                  <Image src={item?.image ?? ""} alt="Progress icon" width={32} height={32} />
                  <h3 className="mt-4 min-h-[80px] text-3xl font-medium [@media(min-width:1400px)]:w-[89%] [@media(min-width:1800px)]:w-[65%]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/80">{item.desc}</p>
                  {!isLastRow && <div className="absolute bottom-0 mt-6 w-full border-t border-white/30" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Do With Our Liferay DXP Performance Tuning Services */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-4xl [@media(min-width:1400px)]:leading-[40px] [@media(min-width:1800px)]:text-5xl [@media(min-width:1800px)]:leading-[60px]">
              What We Do With Our Liferay DXP Performance Tuning Services
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-gray-700 md:justify-self-end">
              We optimize Liferay DXP performance through server tuning, JVM tweaks, and database enhancements to boost speed, stability, and scalability.
            </p>
          </div>

          <section className="pt-13">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              {/* Left column */}
              <div className="pr-12">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group cursor-pointer border-l-4 pl-6 transition-all duration-300 ${activeIndex === index
                          ? "border-black text-black"
                          : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                        } mb-10`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <h3 className="text-lg font-semibold md:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-500 md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="h-max w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500">
                <h3 className="text-2xl font-semibold md:text-3xl">{item[activeIndex]?.title}</h3>
                <ul className="mt-6 space-y-4">
                  {item[activeIndex]?.details.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="flex aspect-square w-5 shrink-0 items-center justify-center rounded-full bg-black md:w-6">
                        <svg
                          viewBox="0 0 12 12"
                          className="h-[50%] w-[50%] text-white"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 6l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-base leading-snug text-gray-800">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake
        WhatMakeData={LiferayPerformanceTuningData}
        titleText1={LiferayPerformanceTuningTitle1}
        titleText2={LiferayPerformanceTuningTitle2}
        subContext={LiferayPerformanceTuningSubContent}
      />
      <TalkToExpert
        heading="Liferay Optimization for Peak Performance"
        description="Reduce bottlenecks, enhance throughput, and ensure stable portal operations."
        buttonText="Start Performance Tuning"
      />
      <BlogSection />
    </main>
  )
}
