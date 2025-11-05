import Image from "next/image"
import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"

interface TalkToExpertCardProps {
  title: string
}

const TalkToExpertCard: React.FC<TalkToExpertCardProps> = ({ title }) => {
  return (
    <div className="flex max-w-[555px] flex-col gap-8 rounded-2xl bg-[#1C1C1C] px-6 py-8 md:px-8 md:py-10">
      <h3 className="text-3xl leading-snug font-bold text-white">{title}</h3>

      <div className="flex items-center gap-8">
        <Image
          src="/images/bhavinImage.png"
          alt="Bhavin Panchani"
          width={110}
          height={110}
          className="rounded-full border-2 border-[#00979E] object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold text-white">Bhavin Panchani</p>
          <p className="text-lg text-white">CEO @ IGNEK</p>
        </div>
      </div>

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
          <div className="flex items-center justify-between">
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

export default TalkToExpertCard
