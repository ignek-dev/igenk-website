"use client"
import React, { useRef } from "react"
import { TestimonialCard, TestimonialData } from "./TestimonialCard"

export const Testimonial: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // ... (testimonials data omitted for brevity)

  const testimonials: TestimonialData[] = [
    // ... (Testimonial data here) ...
    {
      id: "video-review",
      type: "video-review",
      videoThumbnail: "/images/about/ayushi-1.jpg",
      logo: "/images/about/navvis_logo.jpeg",
      companyName: "NAVVIS",
      quote:
        "Reliability and expertise come to my mind when I think about Bhavin. I was particularly impressed by his reliability and flexibility - though working remotely with him and a time difference of a couple of hours, he responded quickly, reacted flexible to our changing demands and provided well thought-out solutions for things that were hard to solve before. No matter how tricky the problem, he made sure that the communication was always very friendly and clear. Anyone who needs Liferay expertise would be lucky to work with Bhavin.",
      authorName: "Vivienne Nürnberger",
      authorTitle: "Project Manager",
      authorAvatar: "/images/about/vivienne.jpeg",
    },
    {
      id: "unified-aviation",
      type: "text",
      logo: "/images/about/mibusoft_inc__logo.jpeg",
      companyName: "Mibusoft Inc. ",
      quote:
        "I was overseeing the development of a healthcare portal based on Liferay, led by Bhavin and his exceptional team. Bhavin's swift adoption of FHIR and HL7 healthcare standards showcased his commitment to staying at the forefront of industry advancements. Their expertise in Liferay development is truly remarkable. Bhavin and his dedicated team, known as IGNEK team, possess an innate understanding of the Liferay Portal environment.",
      authorName: "Frederic Morin",
      authorTitle: "Senior Programmer, Mibusoft Inc.",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
    {
      id: "edut",
      type: "text",
      logo: "/images/about/logo.svg",
      companyName: "EduT",
      quote: "Exceptional service and innovative solutions that transformed our educational platform",
      authorName: "Sarah Johnson",
      authorTitle: "CTO, EduT",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
    {
      id: "techcorp",
      type: "text",
      logo: "/images/about/logo.svg",
      companyName: "TechCorp",
      quote: "Outstanding partnership that delivered beyond our expectations",
      authorName: "Michael Chen",
      authorTitle: "VP Engineering",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
  ]

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      // Adjusted scroll amount to match a typical card width + margin for smoother navigation
      scrollContainerRef.current.scrollBy({ left: 1050, behavior: "smooth" })
    }
  }

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      // Adjusted scroll amount
      scrollContainerRef.current.scrollBy({ left: -1050, behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[758px] overflow-hidden bg-gray-50 py-[64px]">
      {/* Header */}
      <div className="mb-[28px] flex items-start justify-between">
        <div className="pl-[192px]">
          <h2 className="font-poppins text-[48px] leading-[60px] font-semibold tracking-[-0.02em] text-black capitalize">
            Words That Inspire
          </h2>
          <p className="font-poppins w-[942px] align-middle text-[20px] leading-[30px] font-normal tracking-[0] text-gray-600">
            Our clients’ feedback drives us to innovate and excel as Liferay digital experience experts.
          </p>
        </div>

        {/* Arrows */}
        <div className="mt-2 flex space-x-3 pr-[191px]">
          <button
            onClick={scrollToPrevious}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-gray-800"
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <button
            onClick={scrollToNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg ring-2 ring-teal-400 transition-colors hover:bg-gray-800"
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll Wrapper: Defines the fixed-height viewport for scrolling */}
      <div className="absolute inset-x-0 top-[225px] h-[468px]">
        {/* Carousel: Now flex and horizontally scrollable */}
        <div
          ref={scrollContainerRef}
          // The fix is here: using overflow-x-scroll and removing absolute positioning
          className="scrollbar-hide flex h-full space-x-8 overflow-x-scroll pr-[191px] pl-[192px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
