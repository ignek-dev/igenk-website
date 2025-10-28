'use client'

import React, { useRef, useState } from "react"
import WhatWeBringCard from "./WhatWeBringCard"
import { useInView } from "hooks/useInView"

// Dummy data for the six cards
const cardData = [
  {
    cardNumber: "01",
    title: "Enterprise Websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "02",
    title: "Employee Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "03",
    title: "Digital Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "04",
    title: "Another Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "05",
    title: "Creative Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "06",
    title: "Data Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
]

const WhatWeBring = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

    // 2. Instantiate the useInView hook for the section animations
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start when 20% of the section is visible
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault() 
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section ref={sectionRef} className="overflow-hidden bg-black py-16 text-white">
      {/* Container for the header, matching your site's padding */}
      <div className="mx-auto mb-16 w-full px-4 md:px-6 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className={`text-5xl font-bold leading-tight ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}>
            What We Bring To Your
            <br />
            Digital Experience
          </h2>
          <p  className={`max-w-xl pt-2 text-lg text-gray-300 ${
              isInView ? "animate-when-visible animate-slide-top" : "opacity-0"
            }`}>
            We help businesses craft a clear and actionable digital roadmap that aligns with both short-term objectives
            and long-term vision.
          </p>
        </div>
      </div>

      {/* Horizontally scrolling container for the cards */}
      <div
        ref={scrollRef}
        className={`flex cursor-grab select-none space-x-8 overflow-x-auto pb-8 active:cursor-grabbing scrollbar-hide px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] ${
          isInView ? "animate-when-visible animate-slide-right animation-delay-400" : "opacity-0"
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cardData.map((card) => (
          <WhatWeBringCard
            key={card.cardNumber}
            cardNumber={card.cardNumber}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}

export default WhatWeBring
