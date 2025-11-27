// components/SuccessStoryCard.tsx

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { commonProvidedServices } from "./SuccessStories"
import TechnologyChip from "./TechnologyChip"

export interface Story {
  id: number
  slug: string
  imageSrc: string
  tag: string
  title: string
  description: string
  services: { name: string; iconSrc: string }[]
}

const SuccessStoryCard: React.FC<{ story: Story }> = ({ story }) => {
  return (
    // The main card container
    <div className="rounded-2xl border border-[#E5E7EB] bg-white">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 p-[1.25vw]">
        {/* Left Column: Image */}
         <div className="aspect-[4/3] h-auto w-full overflow-hidden rounded-lg">
          <Image
            src={story.imageSrc}
            alt={story.title}
            width={800}
            height={600}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Right Column: Content */}
        <div>
          <span
            className="mb-[1.615vw] inline-block rounded-full border border-[#00979E] bg-white px-4 py-1.5 text-[0.729vw] font-semibold text-gray-800"
            style={{ boxShadow: "0px 0px 12px -2px #00979E" }}
          >
            {story.tag}
          </span>
          <h3 className="mb-[0.938vw] text-[1.563vw] font-bold text-gray-900">{story.title}</h3>
          <p
            className="mb-[1.198vw] line-clamp-3 leading-relaxed text-gray-600"
            dangerouslySetInnerHTML={{ __html: story.description }}
          />
          <Link
            href={`/case-study/${story.slug}`}
            className="mb-[1.146vw] inline-flex items-center gap-1 rounded-full border border-[#00979E] bg-white px-5 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50"
            style={{ boxShadow: "0px 0px 12px -2px #00979E" }}
          >
            Read case study
          </Link>
          <p className="mb-[1.042vw] text-[1.041vw] font-semibold text-gray-800">Provided Services</p>
          <div className="flex flex-wrap gap-3">
            {commonProvidedServices.map((service, idx) => (
              <TechnologyChip key={idx} iconSrc={service.iconSrc} name={service.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStoryCard
