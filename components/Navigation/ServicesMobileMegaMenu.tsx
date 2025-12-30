"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { digitalExperienceLinks, featuredService, liferayServicesLinks, serviceTitleData, sliderData, SliderItem } from "data/Navigation"

interface ServicesMobileMegaMenuProps {
  onBack: () => void
  onClose: () => void
}

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

export default function ServicesMobileMegaMenu({ onBack, onClose }: ServicesMobileMegaMenuProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleHireClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsClicked(true)
    setTimeout(() => {
      router.push("/hire-liferay-developer")
      onClose()
    }, 600) // Delay to show animation
  }

  const next = sliderData[(currentIndex + 1) % sliderData.length] as SliderItem

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute inset-0 z-1002 flex flex-col bg-black text-white overflow-y-auto pb-10"
    >
      <div className="flex items-center justify-between px-6 pt-6 pb-3 shrink-0">
        <h2 className="text-[20px]! font-semibold tracking-wide">Services</h2>

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-p14 font-medium text-white/70 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          Back To Menu
        </button>
      </div>

      <div className="flex flex-col px-6 space-y-6">
        {/* Digital Experience Section */}
        <div className="space-y-6">
          <h3 className="text-p18! md:text-p24! font-semibold">{serviceTitleData.title1}</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            {digitalExperienceLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 group"
              >
                <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center shrink-0">
                  <Image src={link.iconUrl} alt={link.text} width={32} height={32} className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[16px] md:text-p16 font-medium text-white/90 group-hover:text-white transition-colors">{link.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Liferay Services Section */}
        <div className="space-y-4">
          <h3 className="text-p18! md:text-p24! font-semibold">{serviceTitleData.title2}</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4.5">
            {liferayServicesLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                onClick={onClose}
                className="text-[16px] md:text-p16 font-medium text-white/80 hover:text-white transition-colors py-1 w-[150px] sm:w-full"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Hire Liferay Expert & Slider Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Hire Liferay Experts Button */}
          <Link
            href="/hire-liferay-developer"
            className={`group relative flex items-center gap-2 rounded-full border py-3 pr-5 pl-5 transition-all duration-300 ease-in-out hover:border-[#0B63CE] hover:bg-[#0B63CE] hover:shadow-[0px_2px_30px_0px_#FFD12E80] ${isClicked ? "border-[#0B63CE] bg-[#0B63CE] shadow-[0px_2px_30px_0px_#FFD12E80]" : "border-[#ffffff33] bg-[#ffffff0d]"}`}
            onClick={handleHireClick}
          >
            <div className={`absolute top-1/2 left-4 -z-10 w-4 h-4 -translate-y-1/2 rotate-[-13.52deg] scale-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isClicked ? "-translate-x-8 translate-y-6 scale-100 opacity-100" : "group-hover:-translate-x-8 group-hover:translate-y-6 group-hover:scale-100 group-hover:opacity-100"}`}>
              <StarIcon />
            </div>
            <div className={`absolute top-1/2 left-2 -z-10 w-3 h-3 -translate-y-1/2 rotate-[-78.26deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isClicked ? "-translate-x-7 -translate-y-7 scale-100 opacity-100" : "group-hover:-translate-x-7 group-hover:-translate-y-7 group-hover:scale-100 group-hover:opacity-100"}`}>
              <StarIcon />
            </div>
            <div className={`absolute top-1/2 right-3 -z-10 w-2.5 h-2.5 -translate-y-1/2 rotate-[10.95deg] scale-0 opacity-0 transition-all delay-100 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isClicked ? "translate-x-6 -translate-y-8 scale-100 opacity-100" : "group-hover:translate-x-6 group-hover:-translate-y-8 group-hover:scale-100 group-hover:opacity-100"}`}>
              <StarIcon />
            </div>
            <div className={`absolute top-1/2 right-1 -z-10 w-3.5 h-3.5 -translate-y-1/2 rotate-[-22.46deg] scale-0 opacity-0 transition-all delay-75 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isClicked ? "translate-x-8 -translate-y-1 scale-100 opacity-100" : "group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100"}`}>
              <StarIcon />
            </div>
            <div className={`absolute top-1/2 right-4 -z-10 w-3.5 h-3.5 -translate-y-1/2 rotate-[24.87deg] scale-0 opacity-0 transition-all delay-150 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isClicked ? "translate-x-6 translate-y-7 scale-100 opacity-100" : "group-hover:translate-x-6 group-hover:translate-y-7 group-hover:scale-100 group-hover:opacity-100"}`}>
              <StarIcon />
            </div>

            <span className="text-[16px] md:text-p20 relative z-10 font-medium text-white">Hire Liferay Experts</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`relative z-10 h-5 w-5 transition-transform ${isClicked ? "translate-x-1" : "group-hover:translate-x-1"}`}
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

          {/* Slider Section */}
          <div className="relative flex items-center justify-center overflow-hidden h-[40px] w-full">
            <div
              key={"out-" + currentIndex}
              className="absolute flex items-center animate-slide-out"
            >
              <Image src={next.icon} alt="" width={32} height={32} />
              <span className="text-p16 md:text-p20 ml-[6px] items-center whitespace-nowrap font-medium text-white/90">
                {next.text}
              </span>
            </div>
            <div
              key={"in-" + currentIndex}
              className="absolute flex items-center animate-slide-in"
            >
              <Image src={next.icon} alt="" width={32} height={32} />
              <span className="text-p16 md:text-p20 ml-[6px] items-center whitespace-nowrap font-medium text-white/90">
                {next.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
