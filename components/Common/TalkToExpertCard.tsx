import Image from "next/image"
import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"

interface TalkToExpertCardProps {
  title: string
}

const TalkToExpertCard: React.FC<TalkToExpertCardProps> = ({ title }) => {
  return (
   <div className="flex flex-col gap-[2vw] rounded-[1.25vw] bg-[#1C1C1C] px-[1.5vw] py-[2vw]">
  
  {/* Title */}
  <h3 className="text-[1.563vw] leading-[1.875vw] font-bold text-white">
    {title}
  </h3>

  {/* Profile Section */}
  <div className="flex items-center  gap-[2vw]">
    <Image
      src="/images/bhavinImage.png"
      alt="Bhavin Panchani"
      width={110}
      height={110}
      className="rounded-full border-[0.25vw] border-[#00979E] object-cover"
    />
    <div className="flex flex-col gap-[0.5vw]">
      <p className="text-[1.563vw] font-semibold text-white">Bhavin Panchani</p>
      <p className="text-[1.042vw] text-white">CEO @ IGNEK</p>
    </div>
  </div>

  {/* Schedule Meeting Button */}
  <div>
    <ScheduleMeetingButton isFullWidth={true} btnName="Schedule Meeting" />
  </div>

  {/* Prefer Email */}
  <div className="pt-[0.5vw] text-[#FFFFFF]">
    <p className="mb-[0.3vw] text-[0.938vw] text-[#FFFFFF]">Prefer email?</p>
    <a
      href="mailto:sales@ignek.com"
      className="group flex items-center justify-between text-[0.938vw] font-semibold text-white"
    >
      sales@ignek.com
      <div className="flex items-center">
        <div className="mt-[-2vw] rounded-full border border-white p-[0.5vw] flex items-center justify-center">
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
