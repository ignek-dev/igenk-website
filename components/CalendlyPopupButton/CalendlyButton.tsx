"use client"

import Image from "next/image"
import { ReactNode, useEffect } from "react"
import Tooltip from "components/UI/Tooltip"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      closePopupWidget: () => void
    }
  }
}

interface CalendlyButtonProps {
  url?: string
  customButton?: boolean
  customButtonContent?: ReactNode
  buttonColor?: string
  onClick?: () => void // Add optional onClick prop
}

export default function CalendlyButton({
  url = "https://calendly.com/ignek/30min",
  customButton = false,
  customButtonContent,
  buttonColor = "#000",
  onClick,
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => console.log("Calendly loaded")
    document.body.appendChild(script)
  }, [])

  const handleOpenCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url })
    } else {
      alert("Calendly widget is still loading. Please try again in a moment.")
    }
  }

  // 3. Determine which action to take
  // If an external onClick is provided (like scrolling), use it. Otherwise, use Calendly.
  const handleAction = onClick || handleOpenCalendly;

  if (customButton && customButtonContent) {
    return (
      <div onClick={handleAction} className="cursor-pointer">
        {customButtonContent}
      </div>
    )
  }

  return (
    <Tooltip text="Schedule Meeting">
      <div className="border border-[#00979E] rounded-full hover:bg-white/10 transition-colors">
        {/* <div className="" style={{ "--button-bg-color": buttonColor } as React.CSSProperties}></div> */}
        <button type="button" aria-label="Schedule-Meeting" onClick={handleAction} className="nav-round-btn">
          <div className="nav-round-btn-inner cursor-pointer">
            <Image src="/images/icon/calendar.png" alt="calendar" width={24} height={24} />
          </div>
        </button>
      </div>
    </Tooltip>
  )
}
