// components/ServicesMegaMenu.tsx
import React, { useEffect, useState } from "react"
import Image from "next/image"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"
import { digitalExperienceLinks, featuredService, liferayServicesLinks, serviceTitleData, sliderData, SliderItem } from "data/Navigation"


interface MegaMenuProps {
  onClose: () => void
}



// NEW LOGIC: Explicitly split the links into two arrays for Flex columns
const liferayCol1 = liferayServicesLinks.slice(0, 5)
const liferayCol2 = liferayServicesLinks.slice(5, 10)

// Data for the Marquee
// UPDATED: Slider Data with specific mapped Icons


// Helper Component for Marquee Items
// const MarqueeGroup = () => (
//   <div className="flex shrink-0 items-center">
//     {marqueeStats.map((stat, index) => (
//       <div key={index} className="flex items-center">
//         {/* Text */}
//         <span className="text-[0.9vw] font-medium whitespace-nowrap text-white opacity-80">{stat}</span>
//         {/* Separator Dot */}
//         <div className="mx-6 flex items-center justify-center">
//           <Image src="/images/icon/Ellipse.png" alt="dot" width={6} height={6} />
//         </div>
//       </div>
//     ))}
//   </div>
// )

// --- REUSABLE STAR COMPONENT ---
const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Define the gradient */}
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#1024FF" />
      </linearGradient>
    </defs>
    {/* Apply the gradient to the path */}
    <path fill="url(#starGradient)" d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
)

// --- Main ServicesMegaMenu Component ---
export default function ServicesMegaMenu({ onClose }: MegaMenuProps) {
 // 1. Set Interval to 4000ms (4 seconds)
  // This matches the animation duration (approx 3.9s animation + 0.1s buffer)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Cast the fallback to SliderItem to satisfy strict TypeScript checks
  const currentSlide = (sliderData[currentIndex] || sliderData[0]) as SliderItem
   const next = sliderData[(currentIndex + 1) % sliderData.length] as SliderItem

  return (
    <>
      <div className="global-container mx-auto w-full px-4 py-[clamp(20px,2vw,38px)] pb-15.5 md:px-8">
        <div className="flex items-start gap-[2.083vw]">
          {/* Left Side: Image Card */}
          <div className="h-[-webkit-fill-available] flex-shrink-0" style={{ maxWidth: "27.135vw" }}>
            <div className="group relative h-full w-full overflow-hidden rounded-[1.041vw] border-[0.156vw] border-white">
              {/* Background Image */}
              <Image
                src={featuredService.imageSrc}
                alt="Tech Experts"
                width={521}
                height={460}
                className="h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div
                className="absolute bottom-[1.40vw] left-0 h-[0.129vw] w-full"
                style={{ backgroundColor: "#00979E" }}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-end text-white">
                <div className="mr-[0.833vw] px-[1.667vw] pb-[0.417vw]">
                  <h4 className="font-bold" dangerouslySetInnerHTML={{ __html: featuredService.title }}></h4>
                </div>
                <CalendlyButton
                  customButton
                  customButtonContent={
                    <button
                      className="mb-[0.833vw] flex cursor-pointer items-center justify-start px-[1.25vw] text-center align-middle text-[0.938vw] font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#00979E" }}
                    >
                      {featuredService.buttonText}
                    </button>
                  }
                />
              </div>
            </div>
          </div>

          {/* Right Side: Service Links */}
          <div className="flex flex-grow">
            {/* Digital Experience Section */}
            <div className="w-1/3.5">
              <h5 className="mb-[1.875vw] font-medium whitespace-pre">{serviceTitleData.title1}</h5>
              <ul className="flex flex-col gap-[1.25vw]">
                {digitalExperienceLinks.map((link) => (
                  <li key={link.text} className="flex h-[40px] items-center">
                    <a
                      href={link.href}
                      className="flex items-center gap-[0.625vw] text-white transition-colors hover:text-white"
                    >
                      <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center">
                        <Image src={link.iconUrl} alt={link.text} width={36} height={40} className="object-contain" />
                      </div>
                      <span className="p20">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Separator */}
            <div className="mx-[2.8125rem] w-[1px] bg-white"></div>

            {/* Liferay Services Section */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h5 className="mb-[1.875vw] font-medium">{serviceTitleData.title2}</h5>

                {/* REPLACED GRID WITH FLEX COLUMNS */}
                <div className="flex gap-[3.65rem]">
                  {/* Column 1 (First 5 items) */}
                  <ul className="flex flex-col gap-y-[1.5rem]">
                    {liferayCol1.map((link) => (
                      <li key={link.text} className="flex h-[40px] items-center">
                        <a
                          href={link.href}
                          className="p20 flex h-full items-center font-medium whitespace-pre text-white transition-colors hover:text-white"
                          onClick={onClose}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Column 2 (Remaining 5 items) */}
                  <ul className="flex flex-col gap-y-[1.5rem]">
                    {liferayCol2.map((link) => (
                      <li key={link.text} className="flex h-[40px] items-center">
                        <a
                          href={link.href}
                          className="p20 flex h-full items-center font-medium whitespace-pre text-white transition-colors hover:text-white"
                          onClick={onClose}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* NEW SECTION: Button + Marquee */}
              <div className="mt-6 flex w-full items-center overflow-visible">
                {/* Hire Liferay Experts Button */}
                <a
                  href="/services/liferay-hire-developer"
                  className="group relative mr-6 flex flex-shrink-0 items-center gap-2 rounded-[1.563vw] border border-[#ffffff33] bg-[#ffffff0d] py-[0.833vw] pr-[1.25vw] pl-[1.458vw] transition-all duration-300 ease-in-out hover:border-[#0B63CE] hover:bg-[#0B63CE] hover:shadow-[0px_2px_30px_0px_#FFD12E80]"
                  onClick={onClose}
                >
                  {/* --- STAR ANIMATION ELEMENTS --- */}

                  {/* LEFT SIDE STARS (2 Stars) */}
                  {/* Left 1: Bottom-Left (Large) */}
                  <div className="absolute top-1/2 left-4 -z-10 w-[1.042vw] h-[1.042vw] -translate-y-1/2 rotate-[-13.52deg] scale-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-8 group-hover:translate-y-6 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  {/* Left 2: Top-Left (Small) */}
                  <div className="absolute top-1/2 left-2 -z-10 w-[0.769vw] h-[0.769vw] -translate-y-1/2 rotate-[-78.26deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-7 group-hover:-translate-y-7 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>

                  {/* RIGHT SIDE STARS (3 Stars) */}
                  {/* Right 1: Top-Right (Small) */}
                  <div className="absolute top-1/2 right-3 -z-10 w-[0.625vw] h-[0.625vw] -translate-y-1/2 rotate-[10.95deg] scale-0 opacity-0 transition-all delay-100 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-6 group-hover:-translate-y-8 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  {/* Right 2: Middle-Right (Medium) */}
                  <div className="absolute top-1/2 right-1 -z-10 w-[0.942vw] h-[0.942vw] -translate-y-1/2 rotate-[-22.46deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  {/* Right 3: Bottom-Right (Small) */}
                  <div className="absolute top-1/2 right-4 -z-10 w-[0.833vw] h-[0.833vw] -translate-y-1/2 rotate-[24.87deg] scale-0 opacity-0 transition-all delay-150 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-6 group-hover:translate-y-7 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>

                  <span className="p20 relative z-10 font-medium text-white">Hire Liferay Experts</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 h-[1.25vw] w-[1.25vw] transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

               {/* --- SLIDER SECTION --- */}
                {/* Added 'mask-image' to fade the text as it slides left towards the button */}
                <div className="relative flex flex-1 items-center overflow-hidden h-[40px]">

                  {/* SLIDE OUT */}
                  <div
                    key={"out-" + currentIndex}
                    className="absolute left-[40px] top-1.5 flex items-center animate-slide-out"
                  >
                    <Image src={next.icon} alt="" width={32} height={32} />
                    <span className="p20 ml-[6px] items-center whitespace-nowrap font-medium text-white">
                      {next.text}
                    </span>
                  </div>

                  {/* SLIDE IN */}
                  <div
                    key={"in-" + currentIndex}
                    className="absolute left-[40px] top-1 flex items-center animate-slide-in"
                  >
                    <Image src={next.icon} alt="" width={32} height={32} />
                    <span className="p20 ml-[6px] items-center whitespace-nowrap font-medium text-white">
                      {next.text}
                    </span>
                  </div>

                </div>
                
              </div>
              {/* End New Section */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
