import Image from "next/image"
import React from "react"

interface CapabilityCardProps {
  iconSrc: string
  title: string
  description: string
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col">
      {/* Icon and Title */}
      <div className="mb-3 flex items-center space-x-3">
        <Image src={iconSrc} alt={`${title} icon`} width={48} height={48} className="object-contain" />
        <p className="text-[1.667vw] font-semibold text-white whitespace-pre">{title}</p>
      </div>

      {/* "Progress Bar" */}
      <video
        src="/images/our-capabilities/progressbar-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="mb-4 h-1 w-full rounded-full object-cover"
      >
        {/* Providing a fallback for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
      {/* Description */}
      <p className="p16 leading-relaxed text-gray-300">{description}</p>
    </div>
  )
}

export default CapabilityCard
