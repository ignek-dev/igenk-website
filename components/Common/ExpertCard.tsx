// components/ExpertCard.tsx

import Image from "next/image"
import React from "react"
import ScheduleMeetingButton from "../Button/ScheduleMeetingButton" // Reusing your existing button

const ExpertCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-[#1C1C1C] px-6 py-8 md:px-8 md:py-10">
      {/* Top Heading */}
      <h3 className="text-3xl leading-snug font-bold text-white">
        Connect directly with our CEO to <br />
        fast-track your <span className="text-[#00979E]">Digital Journey.</span>
      </h3>

      {/* Expert Details */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/bhavinImage.png"
          alt="Bhavin Panchani"
          width={64}
          height={64}
          className="rounded-full border-2 border-[#00979E] object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-white">Bhavin Panchani</p>
          <p className="text-sm text-gray-400">CEO @ IGNEK</p>
        </div>
      </div>

      {/* Schedule Meeting Button */}
      <div>
        <ScheduleMeetingButton isFullWidth={true} btnName="Schedule Meeting" />
      </div>

      {/* Prefer Email */}
      <div className="pt-2">
        <p className="mb-1 text-base text-gray-400">Prefer email ?</p>
        <a
          href="mailto:sales@ignek.com"
          className="group flex items-center justify-between text-lg font-semibold text-white"
        >
          sales@ignek.com
          <div className="mt-4 flex items-center justify-between">
            <p className="mt-[-30px] rounded-full border border-white p-2 text-lg font-semibold text-white">
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
