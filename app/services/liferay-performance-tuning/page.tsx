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
    description:
      "Optimize your Liferay site's speed and efficiency with our Liferay Performance Tuning Services. Enhance user experience and drive better results.",
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
        <div className="global-container mx-auto w-full pt-[7.865vw] pb-[3.854vw]">
          <div className="relative grid items-start justify-between gap-10 md:grid-cols-2">
            <div className="">
             
              <h1 className="mt-[2.031vw] w-[40.156vw]">
                Liferay
                <br />
                <span className="block">Performance Tuning</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 mt-[3.177vw] text-right md:justify-self-end">
              Optimize your Liferay Portal with specialized Liferay Performance Tuning, <br />
              improving speed, stability, and resource efficiency for superior user experience.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 inline-flex flex-wrap gap-[1.563vw]">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="p20 inline-flex items-center rounded-[2.083vw] border border-[#374151] bg-black px-[1.458vw] py-[0.833vw] text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Liferay Performance Tuning - Features Grid */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto w-full pt-[3.333vw] pb-[3.333vw]">
          <div className="flex flex-col items-start gap-[1.458vw]">
            <h2 className="text-[#000000]">Common Liferay Performance Challenges We Solve</h2>
            <p className="p18 text-[#374151]">
              Through expert Liferay Performance Tuning, we identify bottlenecks, optimize configurations, and deliver
              faster, more scalable, and reliable Liferay DXP experiences.
            </p>
          </div>
          {/* Row 1 */}
          <div className="mt-[2.604vw] grid grid-cols-1 divide-y-2 divide-gray-200 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            <div className="flex flex-col items-center gap-[0.417vw] pt-[2.604vw] pr-[0.625vw] pb-[3.698vw] text-center">
              <h3 className="h-[4.5vw] w-[19.688vw] text-center text-[1.563vw]!">Slow Page Load Times</h3>
              <p className="p20 mt-[0.156vw] text-gray-500">
                Delays caused by unoptimized code, heavy themes, or large assets are resolved through Liferay
                Performance Tuning.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[0.417vw] px-[0.625vw] pt-[2.604vw] pb-[3.698vw] text-center">
              <h3 className="w-[19.688vw] text-[1.563vw]! font-semibold">Inefficient Database Queries</h3>
              <p className="p20 text-gray-500">
                Poorly optimized queries slow down portals; we refine indexing and database performance for faster
                results.
              </p>
            </div>
            <div className="g-[0.417vw] flex flex-col items-center pt-[2.604vw] pb-[3.698vw] pl-[0.625vw] text-center">
              <h3 className="w-[19.688vw] text-[1.563vw]! font-semibold">High Server Resource Usage</h3>
              <p className="p20 text-gray-500">
                Memory leaks, unbalanced loads, or heavy CPU usage are minimized with fine-tuned Liferay DXP Performance
                Tuning.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 divide-y-2 divide-gray-200 border-t-2  border-gray-200 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            <div className="flex flex-col items-center gap-[0.417vw] pt-[2.604vw] pr-[0.625vw] pb-[3.698vw] text-center">
              <h3 className="w-[19.688vw] text-[1.563vw]! font-semibold">Scalability Issues Under Heavy Traffic</h3>
              <p className="p20 text-gray-500">
                We prepare portals to handle spikes in traffic with clustering, caching, and distributed deployment.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[0.417vw] px-[0.625vw] pt-[2.604vw] pb-[3.698vw] text-center">
              <h3 className="w-[19.688vw] text-[1.563vw]! font-semibold">Poor Search and Indexing Performance</h3>
              <p className="p20 text-gray-500">
                Slow or inaccurate search results are fixed with optimized indexing and search tuning for seamless user
                experiences.
              </p>
            </div>
            <div className="flex flex-col items-center gap-[0.417vw] pt-[2.604vw] pb-[3.698vw] pl-[0.625vw] text-center">
              <h3 className="w-[19.688vw] text-[1.563vw]! font-semibold">Frequent Downtime and Instability</h3>
              <p className="p20 text-gray-500">
                Through proactive monitoring and fault-tolerant setups, we ensure reliable and stable Liferay Portal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Of Our Liferay Performance Tuning Services */}
      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full px-[0.208vw] py-[3.333vw] md:px-[0.417vw] md:py-[3.333vw] lg:py-[3.333vw]">
          <div className="relative flex flex-row items-center justify-between">
            <h2 className=" ">
              Outcome Of Our Liferay
              <br />
              Performance Tuning Services
            </h2>
            <p className="p18 bottom-0 max-w-[33.906vw] text-right text-white">
              Liferay Performance Tuning improves portal speed, stability, scalability, security, and resource
              efficiency for optimal performance.
            </p>
          </div>

          <div className="mt-[3.021vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDate?.map((item, index) => {
              const isLastRow = index >= serviceDate.length - (serviceDate.length % 3 || 3)

              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between gap-[1.042vw] pr-[5.313vw]"
                >
                  <Image src={item?.image ?? ""} alt="Progress icon" width={44} height={44} />
                  <h3 className="h-[4.688vw] w-[17.292vw] text-[1.563vw]! font-medium!">{item.title}</h3>
                  <p className="p20 h-[6.25vw] text-white/80">{item.desc}</p>
                  {!isLastRow && <hr className="bottom-0 left-0 my-[3.333vw] w-full border-b border-white/20" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* What We Do With Our Liferay DXP Performance Tuning Services */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="global-container mx-auto w-full px-4 py-[3.333vw]">
          <div className="relative flex flex-row items-center justify-between">
            <h2 className="w-[43.802vw] text-[#000000]">
              What We Do With Our Liferay DXP <br /> Performance Tuning Services
            </h2>
            <p className="p18 text[#4B5563] bottom-0 max-w-[35.5vw] text-right">
              We optimize Liferay DXP performance through server tuning, JVM tweaks, and database enhancements to boost
              speed, stability, and scalability.
            </p>
          </div>

          <section className="pt-[3.333vw]">
            <div className="flex">
              {/* Left column */}

              <div className="mr-[3.021vw] max-w-[34.583vw] space-y-6 scroll-auto">
                {items.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group cursor-pointer border-l-4 pl-[1.667vw] transition-all duration-300 ${
                      activeIndex === index
                        ? "border-black text-black"
                        : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                    } ${index !== items.length - 1 ? "mb-[2.917vw]" : "mb-0"} `}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <h3 className="text-[1.563vw]! font-semibold! text-black">{item.title}</h3>
                    <p className="p16 mt-[0.417vw] max-w-[27.969vw] text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="sticky top-60 h-full w-5xl rounded-xl border border-gray-200 bg-white p-[1.458vw] shadow-sm transition-all duration-500">
                <h3 className="text-[1.563vw]! font-semibold!">{item[activeIndex]?.title}</h3>
                <ul className="mt-[1.25vw] flex flex-col gap-[1.25vw]">
                  {item[activeIndex]?.details.map((text) => (
                    <li key={text} className="flex items-center gap-[1.042vw]">
                      <span className="flex aspect-square h-[1.458vw] w-[1.458vw] shrink-0 items-center justify-center rounded-full bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                          <path
                            d="M1 7L5 11L15 1"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="p20 text-gray-800">{text}</span>
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
