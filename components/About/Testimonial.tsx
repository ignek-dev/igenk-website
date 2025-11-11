"use client";
import React, { useRef } from "react";
import { TestimonialCard, TestimonialData } from "./TestimonialCard";

export const Testimonial: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // ... (testimonials data omitted for brevity)

  const testimonials: TestimonialData[] = [
    // ... (Testimonial data here) ...
    {
      id: "video-review",
      type: "video-review",
      videoThumbnail: "/images/about/ayushi-1.jpg",
      logo: "/images/about/logo.svg",
      companyName: "Logoipsum",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud",
      authorName: "Sophie Moore",
      authorTitle: "Webflow Developer",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
    {
      id: "unified-aviation",
      type: "text",
      logo: "/images/about/logo.svg",
      companyName: "UNIFIED AVIATION",
      quote:
        "We were particularly impressed by their expertise and capabilities in software understanding and implementation",
      authorName: "Paul Trotter",
      authorTitle: "Product Director, Unified Aviation",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
    {
      id: "edut",
      type: "text",
      logo: "/images/about/logo.svg",
      companyName: "EduT",
      quote:
        "Exceptional service and innovative solutions that transformed our educational platform",
      authorName: "Sarah Johnson",
      authorTitle: "CTO, EduT",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
    {
      id: "techcorp",
      type: "text",
      logo: "/images/about/logo.svg",
      companyName: "TechCorp",
      quote:
        "Outstanding partnership that delivered beyond our expectations",
      authorName: "Michael Chen",
      authorTitle: "VP Engineering",
      authorAvatar: "/images/about/ayushi-1.jpg",
    },
  ];

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      // Adjusted scroll amount to match a typical card width + margin for smoother navigation
      scrollContainerRef.current.scrollBy({ left: 1050, behavior: "smooth" }); 
    }
  };

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      // Adjusted scroll amount
      scrollContainerRef.current.scrollBy({ left: -1050, behavior: "smooth" });
    }
  };

  return (
    <section className="py-[64px] bg-gray-50 h-[758px] relative overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between mb-[28px]">
        <div className="pl-[192px]">
          <h2 className="font-poppins font-semibold text-[48px] text-black leading-[60px] tracking-[-0.02em] capitalize">
            Trusted By Clients Worldwide
          </h2>
          <p className="font-poppins text-gray-600 w-[942px] font-normal text-[20px] leading-[30px] tracking-[0] align-middle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex space-x-3 mt-2 pr-[191px]">
          <button
            onClick={scrollToPrevious}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <button
            onClick={scrollToNext}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors ring-2 ring-teal-400 shadow-lg"
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll Wrapper: Defines the fixed-height viewport for scrolling */}
      <div className="absolute top-[225px] inset-x-0 h-[468px]">
        {/* Carousel: Now flex and horizontally scrollable */}
        <div
          ref={scrollContainerRef}
          // The fix is here: using overflow-x-scroll and removing absolute positioning
          className="flex h-full space-x-8 overflow-x-scroll scrollbar-hide pl-[192px] pr-[191px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};