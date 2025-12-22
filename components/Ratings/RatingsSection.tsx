// components/RatingsSection.tsx
"use client"

import React from "react"
import { useInView } from "hooks/useInView"
import RatingItem from "./RatingItem"
import { ratingsData } from "data/homepage-content"



const RatingsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the section is visible
  })

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="global-container overflow-x-hidden py-12">
        <div className="flex flex-col flex-wrap lg:flex-nowrap items-center justify-between divide-y divide-gray-200 h-auto lg:h-[192px] md:flex-row lg:divide-x lg:divide-y-0 md:divide-x-0 md:divide-y">
          {ratingsData.map((item, index) => (
            <RatingItem
              key={item.id}
              {...item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RatingsSection
