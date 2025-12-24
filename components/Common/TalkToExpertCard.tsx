import Image from "next/image"
import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { expertCardContent } from "data/homepage-content"

interface TalkToExpertCardProps {
  title: string
}

const TalkToExpertCard: React.FC<TalkToExpertCardProps> = ({ title }) => {
  return (
   <div className="flex flex-col rounded-[1.25vw] bg-[#1C1C1C] px-[25px] py-[25px] lg:px-[1.5vw] lg:py-[2vw]">
  
  {/* Title */}
  <h3 className="text-[20px] md:text-[1.875rem] lg:text-[1.563vw]! leading-[1.875vw] font-bold mb-[29px] md:mb-[43px] text-white lg:mb-[2.34375vw]">
        {expertCardContent.headingLine1} <br />
        {expertCardContent.headingLine2}{" "}
        <span className="text-[#00979E]">{expertCardContent.highlightText}</span>
  </h3>

  {/* Profile Section */}
  <div className="flex items-center  gap-[1.3542vw] mb-[29px] md:mb-[43px] lg:mb-[2.23958vw]">
    <Image
      src={expertCardContent.expertImage}
      alt={expertCardContent.expertName}
      width={90}
      height={90}
      className="rounded-full object-cover"
    />
    <div className="flex flex-col gap-[0.5vw]">
      <p className="text-[20px] md:text-[1.875rem] lg:text-[1.563vw] font-semibold text-white">{expertCardContent.expertName}</p>
      <p className="text-[13px] md:text-[1.25rem] lg:text-[1.042vw] text-white">{expertCardContent.expertDesignation}</p>
    </div>
  </div>

  {/* Schedule Meeting Button */}
  <div className="mb-[29px] md:mb-[43px] lg:mb-[2.13542vw]">
    <ScheduleMeetingButton isFullWidth={true} btnName="Schedule Meeting" />
  </div>

  {/* Prefer Email */}
  <div className="pt-[0.5vw] text-[#FFFFFF]">
    <p className="mb-[0.3vw] text-[11px] md:text-p18 lg:text-p18 text-[#FFFFFF]">{expertCardContent.emailLabel}</p>
    <a
      href={`mailto:${expertCardContent.email}`}
      className="group flex items-center justify-between text-[11px] md:text-p18 lg:text-p18 text-white"
    >
      {expertCardContent.email}
      <div className="flex items-center">
        <div className="mt-[-2vw] rounded-full border border-white p-1.5 lg:p-[0.5vw] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
            <path
              d="M1.66683 5.99984L12.3335 5.99984M12.3335 5.99984L7.66683 1.33317M12.3335 5.99984L7.66683 10.6665"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>
</div>

  )
}

export default TalkToExpertCard
