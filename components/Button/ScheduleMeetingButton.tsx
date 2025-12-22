// components/ScheduleMeetingButton.tsx
"use client"
import Image from "next/image"
import React from "react"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"

interface ScheduleMeetingButtonProps {
  btnName: string
  isFullWidth: boolean
  onClick?: () => void // Optional onClick prop
  showIcon?: boolean //  icon props
  // sizeVariant?: "default" | "webinar-hero"; 
}

const ScheduleMeetingButton: React.FC<ScheduleMeetingButtonProps> = ({ btnName, isFullWidth, onClick, showIcon = true}) => {
  return (
    <CalendlyButton 
      customButton={true}
      onClick={onClick}
      customButtonContent={
        <button
          // onClick={handleClick}
          className={`group fancy relative items-center justify-center overflow-hidden rounded-full transition-transform duration-200 hover:scale-105 cursor-pointer ${isFullWidth ? "w-full" : "w-max"
            }`}
        >
          <span className="text-[13px] md:text-[1.563rem] relative z-10 flex items-center justify-center gap-3 rounded-full bg-black px-8 py-3 lg:text-[1.042vw] font-medium text-white">
            {/* Schedule Meeting */}
            {btnName ?? "Schedule Meeting"}
          {/* 3. Conditionally render the image */}
            {showIcon && (
              <Image src="/images/calendar.png" alt="Calendar icon" width={28} height={28} />
            )}
          </span>
        </button>
      }
    />

  )
}

export default ScheduleMeetingButton
