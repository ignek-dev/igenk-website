// components/ExpertCard.tsx

import Image from "next/image"
import React from "react"
import ScheduleMeetingButton from "../Button/ScheduleMeetingButton" // Reusing your existing button
import { expertCardContent } from "data/homepage-content"

const ExpertCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-[2.188vw] rounded-2xl bg-[#1C1C1C] px-6 py-8 md:px-8 md:py-10 min-w-[28.906vw] min-h-[30.104vw]">
      {/* Top Heading */}
      <p className="text-[1.458vw] leading-snug font-bold text-white">
        {expertCardContent.headingLine1} <br />
        {expertCardContent.headingLine2} <span className="text-[#00979E]">{expertCardContent.highlightText}</span>
      </p>

      {/* Expert Details */}
      <div className="flex items-center gap-[1.354vw]">
        <Image
          src={expertCardContent.expertImage}
          alt={expertCardContent.expertName}
          width={110}
          height={110}
          className="rounded-full border-2 border-[#00979E] object-cover"
        />
        <div>
          <p className="text-[0.9375vw] font-semibold text-white">{expertCardContent.expertName}</p>
          <p className="text-[1.042vw] text-gray-400">{expertCardContent.expertDesignation}</p>
        </div>
      </div>

      {/* Schedule Meeting Button */}
      <div className="mt-[0.521vw]">
        <ScheduleMeetingButton isFullWidth={true} btnName={expertCardContent.ctaText} />
      </div>

      {/* Prefer Email */}
      <div className="pt-2">
        <p className="mb-1 text-[0.938vw] text-gray-400">{expertCardContent.emailLabel}</p>
        <a
          href={`mailto:${expertCardContent.email}`}
          className="group flex items-center justify-between text-[0.833vw] font-semibold text-white"
        >
          {expertCardContent.email}
          <div className="mt-4 flex items-center justify-between">
            <p className="mt-[-30px] rounded-full border border-white p-2 text-[0.9375vw] font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path
                  d="M1.66683 5.99984L12.3335 5.99984M12.3335 5.99984L7.66683 1.33317M12.3335 5.99984L7.66683 10.6665"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ExpertCard
