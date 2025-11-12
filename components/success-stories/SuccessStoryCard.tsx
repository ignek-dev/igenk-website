// components/SuccessStoryCard.tsx

import Image from "next/image"
import React from "react"
import TechnologyChip from "./TechnologyChip"

export interface Story {
  imageSrc: string
  tag: string
  title: string
  description: string
  services: { name: string; iconSrc: string }[]
}

const SuccessStoryCard: React.FC<{ story: Story }> = ({ story }) => {
  return (
    // The main card container
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Left Column: Image */}
        <div className="aspect-[4/3] h-auto w-full overflow-hidden rounded-lg">
          <Image
            src={story.imageSrc}
            alt={story.title}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div>
          <span
            className="mb-4 inline-block rounded-full border border-[#00979E] bg-white px-4 py-1.5 text-sm font-semibold text-gray-800"
            style={{ boxShadow: "0px 0px 12px -2px #00979E" }}
          >
            {story.tag}
          </span>
          <h3 className="mb-4 text-3xl font-bold text-gray-900">{story.title}</h3>
          <p className="mb-6 leading-relaxed text-gray-600">{story.description}</p>
          <a
            href="/case-study"
            className="mb-8 inline-flex items-center gap-1 rounded-full border border-[#00979E] bg-white px-5 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
            style={{ boxShadow: "0px 0px 12px -2px #00979E" }}
          >
            Read case study
          </a>

          <h4 className="mb-4 text-lg font-semibold text-gray-800">Provided Services</h4>
          <div className="flex flex-wrap gap-3">
            {story.services.map((service, idx) => (
              <TechnologyChip key={idx} iconSrc={service.iconSrc} name={service.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStoryCard
