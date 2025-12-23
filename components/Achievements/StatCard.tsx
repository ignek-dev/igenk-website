// components/StatCard.tsx

import React from "react"

interface StatCardProps {
  number: string
  title: string
  description: string
  isInView: boolean
  index: number
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description, isInView, index }) => {
  // Determine animation direction based on the card's index
  const animationDirection = index < 2 ? "animate-slide-top" : "animate-slide-bottom"

  // Add a staggered delay for a nicer effect

  return (
    <div
      className={`flex flex-col ${
        isInView ? `animate-when-visible ${animationDirection} animation-delay-200` : "opacity-0"
      }`}
    >
      <div className="line-height-[88px] mb-[67px] md:mb-[3.49vw] text-8xl font-semibold text-white">{number}</div>
      <div className="mb-[51px] md:mb-[2.656vw] border-t border-gray-700" /> {/* Horizontal line */}
      <p className="line-height-[32px] mb-[0.833vw] text-p20 md:text-p24 lg:text-p24 font-semibold text-white">{title}</p>
      <p className="w-full text-p16 md:text-p18 leading-relaxed text-gray-400">{description}</p>
    </div>
  )
}

export default StatCard
