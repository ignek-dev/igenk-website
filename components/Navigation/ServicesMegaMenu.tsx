// components/ServicesMegaMenu.tsx
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"
import { digitalExperienceLinks, featuredService, liferayServicesLinks, serviceTitleData, sliderData, SliderItem } from "data/Navigation"

interface MegaMenuProps {
  onClose: () => void
}

const liferayCol1 = liferayServicesLinks.slice(0, 5)
const liferayCol2 = liferayServicesLinks.slice(5, 10)

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#1024FF" />
      </linearGradient>
    </defs>
    <path fill="url(#starGradient)" d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
)

export default function ServicesMegaMenu({ onClose }: MegaMenuProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const next = sliderData[(currentIndex + 1) % sliderData.length] as SliderItem

  return (
    <>
      <div className="global-container mx-auto w-full px-4 py-[clamp(20px,2vw,38px)] pb-15.5 md:px-8">
        <div className="flex items-start gap-[2.083vw]">
          <div className="h-[-webkit-fill-available] flex-shrink-0" style={{ maxWidth: "27.135vw" }}>
            <div className="group relative h-full w-full overflow-hidden rounded-[1.041vw] border-[0.156vw] border-white">
              <Image
                src={featuredService.imageSrc}
                alt="Tech Experts"
                width={521}
                height={460}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-grow">
            <div className="w-1/3.5">
              <h5 className="mb-[1.875vw] font-medium whitespace-pre">{serviceTitleData.title1}</h5>
              <ul className="flex flex-col gap-[1.25vw]">
                {digitalExperienceLinks.map((link) => (
                  <li key={link.text} className="flex h-[40px] items-center">
                    <Link
                      href={link.href}
                      scroll={true}
                      onClick={onClose}
                      className="flex items-center gap-[0.625vw] text-white transition-colors hover:text-white"
                    >
                      <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center">
                        <Image src={link.iconUrl} alt={`${link.text} Icon`} width={36} height={40} className="object-contain" />
                      </div>
                      <span className="p20">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-[2.8125rem] w-[1px] bg-white"></div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h5 className="mb-[1.875vw] font-medium">{serviceTitleData.title2}</h5>
                <div className="flex gap-[3.65rem]">
                  <ul className="flex flex-col gap-y-[1.5rem]">
                    {liferayCol1.map((link) => (
                      <li key={link.text} className="flex h-[40px] items-center">
                        <Link
                          href={link.href}
                          className="p20 flex h-full items-center font-medium whitespace-pre text-white transition-colors hover:text-white"
                          onClick={onClose}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-y-[1.5rem]">
                    {liferayCol2.map((link) => (
                      <li key={link.text} className="flex h-[40px] items-center">
                        <Link
                          href={link.href}
                          className="p20 flex h-full items-center font-medium whitespace-pre text-white transition-colors hover:text-white"
                          onClick={onClose}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex w-full items-center overflow-visible">
                {/* Hire Liferay Experts Button */}
                <a
                  href="/services/hire-liferay-developer"
                  className="group relative mr-6 flex flex-shrink-0 items-center gap-2 rounded-[1.563vw] border border-[#ffffff33] bg-[#ffffff0d] py-[0.833vw] pr-[1.25vw] pl-[1.458vw] transition-all duration-300 ease-in-out hover:border-[#0B63CE] hover:bg-[#0B63CE] hover:shadow-[0px_2px_30px_0px_#FFD12E80]"
                  onClick={onClose}
                >
                  <div className="absolute top-1/2 left-4 -z-10 w-[1.042vw] h-[1.042vw] -translate-y-1/2 rotate-[-13.52deg] scale-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-8 group-hover:translate-y-6 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  <div className="absolute top-1/2 left-2 -z-10 w-[0.769vw] h-[0.769vw] -translate-y-1/2 rotate-[-78.26deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-7 group-hover:-translate-y-7 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  <div className="absolute top-1/2 right-3 -z-10 w-[0.625vw] h-[0.625vw] -translate-y-1/2 rotate-[10.95deg] scale-0 opacity-0 transition-all delay-100 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-6 group-hover:-translate-y-8 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
                  <div className="absolute top-1/2 right-1 -z-10 w-[0.942vw] h-[0.942vw] -translate-y-1/2 rotate-[-22.46deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100">
                    <StarIcon />
                  </div>
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
                </Link>

                <div className="relative flex flex-1 items-center overflow-hidden h-[40px]">
                  <div
                    key={"out-" + currentIndex}
                    className="absolute left-[40px] top-1.5 flex items-center animate-slide-out"
                  >
                    <Image src={next.icon} alt="" width={32} height={32} />
                    <span className="p20 ml-[6px] items-center whitespace-nowrap font-medium text-white">
                      {next.text}
                    </span>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
