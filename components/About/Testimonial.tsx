"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { TestimonialCard, TestimonialData } from "./TestimonialCard"
import { aboutPageData, testimonialSectionContent } from "data/about-content"

export const Testimonial: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials = testimonialSectionContent.testimonials

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
    <section className="overflow-hidden bg-[#F6F6F6] py-[3.333vw] pl-[10vw]">
      <div className="mb-[1.458vw] flex justify-between pr-[10vw]">
        <div className="flex flex-col">
          <h2 className="mb-[0.677vw] text-black">{testimonialSectionContent.title}</h2>
          <p className="w-[49.063vw] text-[0.938vw] leading-[1.563vw] text-[#4B5563]">
            {testimonialSectionContent.description}
          </p>
        </div>

        <div className="flex gap-[1.25vw]">
          <button
            onClick={scrollToPrevious}
            className="flex h-[3.333vw] w-[3.333vw] cursor-pointer items-center justify-center rounded-full bg-black text-white disabled:opacity-50"
          >
            <Image
              src="/images/about/arrow-left.png"
              className="h-[1.875vw] w-[1.875vw]"
              alt="left-arrow"
              width={100}
              height={100}
            />
          </button>
          <button
            onClick={scrollToNext}
            className="flex h-[3.333vw] w-[3.333vw] cursor-pointer items-center justify-center rounded-full bg-black text-white disabled:opacity-50"
          >
            <Image
              src="/images/about/arrow-right.png"
              className="h-[1.875vw] w-[1.875vw]"
              alt="right-arrow"
              width={100}
              height={100}
            />
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
