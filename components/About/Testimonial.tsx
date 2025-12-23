"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { TestimonialCard, TestimonialData } from "./TestimonialCard"
import { aboutPageData, testimonialSectionContent } from "data/about-content"

export const Testimonial: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials = testimonialSectionContent.testimonials

  const scrollToNext = () => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.firstElementChild?.clientWidth || 0

    container.scrollBy({ left: cardWidth + 24, behavior: "smooth" })
  }

  const scrollToPrevious = () => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.firstElementChild?.clientWidth || 0

    container.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" })
  }


  return (
    <section className="overflow-hidden bg-[#F6F6F6] py-7 md:py-16 lg:py-[3.333vw] pl-4 md:pl-[10vw]">
      <div className="mb-4 lg:mb-[1.458vw] flex justify-between pr-[10vw] gap-8 lg:gap-0">
        <div className="flex flex-col">
          <h2 className="mb-[0.677vw] text-black">{testimonialSectionContent.title}</h2>
          <p className="w-auto lg:w-[49.063vw] text-p14 md:text-p18 lg:text-p18 text-[#4B5563]">
            {testimonialSectionContent.description}
          </p>
        </div>

        <div className="hidden md:flex gap-[1.25vw] mt-5 lg:mt-0">
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
          className=" flex flex-col
    md:flex-row
    gap-6
    md:gap-0
    md:overflow-x-scroll
    md:scrollbar-hide"
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
