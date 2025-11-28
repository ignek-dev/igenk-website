"use client"
import React, { useRef } from "react"
import Image from "next/image";
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
      logo: "/images/about/NAVVIS.webp",
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
      logo: "/images/about/Mibusoft.webp",
      companyName: "Mibusoft Inc. ",
      quote:
        "I was overseeing the development of a healthcare portal based on Liferay, led by Bhavin and his exceptional team. Bhavin's swift adoption of FHIR and HL7 healthcare standards showcased his commitment to staying at the forefront of industry advancements. Their expertise in Liferay development is truly remarkable. Bhavin and his dedicated team, known as IGNEK team, possess an innate understanding of the Liferay Portal environment.",
      authorName: "Frederic Morin",
      authorTitle: "Senior Programmer, Mibusoft Inc.",
      authorAvatar: "/images/about/noDp.webp",
    },
    {
      id: "edut",
      type: "text",
      logo: "/images/about/EduT.webp",
      companyName: "EduT",
      quote: "I have had privilege to work with Bhavin for one of Manufacturing portal on Liferay Platform. I had the pleasure of witnessing his exceptional expertise in Liferay. He is Liferay Machine who comes with his own bullets ( his Liferay team ). They know almost all Liferay features and more importantly they know very well what would be best/OOTB way for achieving particular requirements. Their technical proficiency and ability to tailor Liferay solutions to the specific needs of manufacturing portals are truly remarkable.",
      authorName: "Sarah Johnson",
      authorTitle: "CTO, EduT",
      authorAvatar: "/images/about/noDp.webp",
    }
  ]

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 1050, behavior: "smooth" })
    }
  }

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -1050, behavior: "smooth" })
    }
  }

  return (
    <section className="overflow-hidden pl-[10vw] bg-[#F6F6F6] py-[3.333vw]">
      <div className="mb-[1.458vw] flex justify-between pr-[10vw]">
        <div className="flex flex-col">
          <h2 className="mb-[0.677vw] text-black">
            Words That Inspire
          </h2>
          <p className="w-[49.063vw] text-[0.938vw] leading-[1.563vw] text-[#4B5563]">
            Our clients’ feedback drives us to innovate and excel as Liferay digital experience experts.
          </p>
        </div>

        <div className="flex gap-[1.25vw]">
          <button
            onClick={scrollToPrevious}
            className="w-[3.333vw] cursor-pointer h-[3.333vw] bg-black text-white rounded-full flex items-center justify-center disabled:opacity-50"
          >
            <Image src="/images/about/arrow-left.png" className="h-[1.875vw] w-[1.875vw]" alt="left-arrow" width={100} height={100} />
          </button>
          <button
            onClick={scrollToNext}
            className="w-[3.333vw] cursor-pointer h-[3.333vw] bg-black text-white rounded-full flex items-center justify-center disabled:opacity-50"
          >
            <Image src="/images/about/arrow-right.png" className="h-[1.875vw] w-[1.875vw]" alt="right-arrow" width={100} height={100} />
          </button>
        </div>

      </div>

      <div className="">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex h-full overflow-x-scroll"
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
