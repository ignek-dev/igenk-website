"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import AccordionMain from "./AccordionMain"
import ExpertCard from "./ExpertCard"

const faqItems = [
  {
    title: "What Services Do You Offer?",
    content:
      "We offer end-to-end digital solutions including UX/UI design, custom development, digital transformation, staff augmentation, and integration services across platforms like Liferay, ReactJS, and more.",
  },
  {
    title: "Do You Work With Small Businesses Or Only Large Enterprises?",
    content:
      "We work with businesses of all sizes, from startups to large enterprises. Our solutions are tailored to meet the unique needs and goals of each client.",
  },
  {
    title: "How do you ensure project quality and timelines?",
    content:
      "We follow agile methodologies, conduct regular quality checks, and maintain transparent communication with clients to ensure projects are delivered on time and to the highest quality standards.",
  },
  {
    title: "Can I hire a dedicated developer or team for my project?",
    content:
      "Yes, we provide flexible engagement models, including dedicated developer or team hiring, to seamlessly integrate with your existing operations.",
  },
  {
    title: "What technologies do you specialize in?",
    content:
      "Our expertise spans a wide range of modern technologies including Java, React, Spring Boot, Liferay, ElasticSearch, TypeScript, and more.",
  },
]

const HeroCTASection: React.FC = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} className="bg-black py-16 text-white lg:py-16">
      <div className="global-container grid min-h-[40vh] items-stretch gap-[6.25vw] lg:grid-cols-2">
        {/* LEFT : Title, Text & FAQ */}
        <div
          className={`${
            isInView ? "animate-when-visible animate-slide-left" : "opacity-0"
          } flex h-full flex-col justify-between w-[44.531vw]`}
        >
          <h2 className="">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>

          <p className="mt-[0.833vw] mb-12 text-lg text-gray-400">
            We design and develop digital solutions that adapt and grow with your business needs. Our platforms are
            built to deliver seamless performance, exceptional user experiences, and long-term scalability.
          </p>

          {/* UPDATED: One AccordionMain for all FAQ */}
          <AccordionMain items={faqItems} defaultOpenIndex={null} />
        </div>

        {/* RIGHT : Expert Card */}
        <div
          className={`${
            isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
          } flex justify-end`}
        >
          <div className="sticky top-24 ml-auto">
            <ExpertCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCTASection
