"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { digitalExperienceLinks, featuredService, liferayServicesLinks, serviceTitleData } from "data/Navigation"

interface ServicesMobileMegaMenuProps {
  onBack: () => void
  onClose: () => void
}

export default function ServicesMobileMegaMenu({ onBack, onClose }: ServicesMobileMegaMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute inset-0 z-1002 flex flex-col bg-black text-white overflow-y-auto pb-10"
    >
      <div className="flex items-center justify-between px-6 py-6.5 shrink-0">
        <h2 className="text-[20px] font-semibold uppercase tracking-wide">Services</h2>

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

      <div className="flex flex-col px-6 space-y-10">
        {/* Digital Experience Section */}
        <div className="space-y-6">
          <h3 className="text-p18! md:text-p24! font-semibold">{serviceTitleData.title1}</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
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
                <span className="text-[10px] md:text-p16 font-medium text-white/90 group-hover:text-white transition-colors">{link.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Liferay Services Section */}
        <div className="space-y-6">
          <h3 className="text-p18! md:text-p24! font-semibold">{serviceTitleData.title2}</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {liferayServicesLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={onClose}
                className="text-[10px] md:text-p16 font-medium text-white/80 hover:text-white transition-colors py-1"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Featured Image Card */}
        <div className="mt-6">
          <div 
            className="relative overflow-hidden border border-white/20 w-full max-w-[360px] md:max-w-full h-[317px] md:h-[400px] rounded-[9px]"
          >
            <Image
              src={featuredService.imageSrc}
              alt="Build With The Top 3% of Tech Experts!"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
