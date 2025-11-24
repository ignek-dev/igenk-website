"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import AccordionItem from "./AccordionItem"
import ExpertCard from "./ExpertCard"

const faqItems = [
  {
    title: "What Services Do You Offer?",
    content: (
      <p>
        We offer end-to-end digital solutions including UX/UI design, custom development, digital transformation, staff
        augmentation, and integration services across platforms like Liferay, ReactJS, and more.
      </p>
    ),
  },
  {
    title: "Do You Work With Small Businesses Or Only Large Enterprises?",
    content: (
      <p>
        We work with businesses of all sizes, from startups to large enterprises. Our solutions are tailored to meet the
        unique needs and goals of each client.
      </p>
    ),
  },
  {
    title: "How do you ensure project quality and timelines?",
    content: (
      <p>
        We follow agile methodologies, conduct regular quality checks, and maintain transparent communication with
        clients to ensure projects are delivered on time and to the highest quality standards.
      </p>
    ),
  },
  {
    title: "Can I hire a dedicated developer or team for my project?",
    content: (
      <p>
        Yes, we provide flexible engagement models, including dedicated developer or team hiring, to seamlessly
        integrate with your existing operations.
      </p>
    ),
  },
  {
    title: "What technologies do you specialize in?",
    content: (
      <p>
        Our expertise spans a wide range of modern technologies including Java, React, Spring Boot, Liferay,
        ElasticSearch, TypeScript, and more.
      </p>
    ),
  },
]

const HeroCTASection: React.FC = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} className="bg-black py-16 text-white lg:py-16">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 global-container xl:gap-20">
        {/* Left Column: FAQ Section */}
        <div className={isInView ? "animate-when-visible animate-slide-left" : "opacity-0"}>
          {/* Main Title and Description */}
          <h2 className="mb-8">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>
          <p className="mt-6 mb-12 text-lg text-gray-400">
            We design and develop digital solutions that adapt and grow with your business needs. Our platforms are built to deliver seamless performance, exceptional user experiences, and long-term scalability.
          </p>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        {/* Right Column: Expert Card */}
        <div
          className={`sticky top-24 ${
            isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
          }`}
        >
          <ExpertCard />
        </div>
      </div>
    </section>
  )
}

export default HeroCTASection
