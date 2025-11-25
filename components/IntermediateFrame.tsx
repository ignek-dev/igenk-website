import React from "react"

// Array of text to display in the frame
const frameContent = [
  "DELIVER SEAMLESS JOURNEYS",
  "PERSONALIZE EVERY INTERACTION",
  "TRANSFORM CUSTOMER TOUCHPOINTS",
  "AUTOMATE WHAT MATTERS",
  "TURN DATA INTO DECISIONS",
  "LEAD WITH STRATEGY",
]

const IntermediateFrame = () => {
  const marqueeContent = [...frameContent, ...frameContent]
  return (
    <section className="flex h-[83px] w-full items-center justify-around overflow-hidden bg-[#FFFFFF]">
      <div className="animate-marquee-custom flex gap-x-24">
        {marqueeContent.map((text, index) => (
          <p
            key={`${text}-${index}`}
            className="text-[1.25vw] font-normal tracking-wide whitespace-nowrap text-black uppercase"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default IntermediateFrame
