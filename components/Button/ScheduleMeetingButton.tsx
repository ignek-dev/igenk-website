// components/ScheduleMeetingButton.tsx
"use client"
import Image from "next/image"
import React from "react"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"

interface ScheduleMeetingButtonProps {
  btnName: string
  isFullWidth: boolean
}

const ScheduleMeetingButton: React.FC<ScheduleMeetingButtonProps> = ({ btnName, isFullWidth }) => {
  return (
    <CalendlyButton 
      customButton={true}
      customButtonContent={
        <button
          // onClick={handleClick}
          className={`group fancy relative items-center justify-center overflow-hidden rounded-full transition-transform duration-200 hover:scale-105 cursor-pointer ${isFullWidth ? "w-full" : "w-max"
            }`}
        >
          <span className="relative z-10 flex items-center gap-3 rounded-full bg-black px-8 py-3 text-[1.042vw] font-medium text-white">
            {/* Schedule Meeting */}
            {btnName ?? "Schedule Meeting"}
            <Image src="/images/calendar.png" alt="Calendar icon" width={20} height={20} />
          </span>
        </button>
      }
    />

  )
}

export default ScheduleMeetingButton
