"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { aboutDigitalExperienceData, companyLinks, contactDetails } from "data/Navigation"

interface CompanyMobileMegaMenuProps {
  onBack: () => void
  onClose: () => void
}

const IconLinkedIn = () => (
  <Image src="/images/mega-menu/linkedin-dark.png" alt="LinkedIn" width={32} height={32} />
)
const IconFacebook = () => (
  <Image src="/images/mega-menu/facebook-dark.png" alt="Facebook" width={32} height={32} />
)
const IconX = () => (
  <Image src="/images/mega-menu/tweeter-dark.png" alt="X" width={32} height={32} />
)
const IconInstagram = () => (
  <Image src="/images/mega-menu/instagram-dark.png" alt="Instagram" width={32} height={32} />
)

const socialLinks = [
  { icon: <IconLinkedIn />, href: "https://www.linkedin.com/company/ignek-infotech/about/", label: "LinkedIn" },
  { icon: <IconFacebook />, href: "https://www.facebook.com/ignekinfo/", label: "Facebook" },
  { icon: <IconX />, href: "https://x.com/ignekinfotech", label: "X" },
  { icon: <IconInstagram />, href: "https://www.instagram.com/_ignek/", label: "Instagram" },
]

export default function CompanyMobileMegaMenu({ onBack, onClose }: CompanyMobileMegaMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute inset-0 z-1002 flex flex-col bg-black text-white overflow-y-auto pb-10"
    >
      <div className="flex items-center justify-between px-6 py-6.5">
        <h2 className="text-[20px] font-semibold uppercase tracking-wide">Company</h2>

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

      <div className="flex flex-col px-6 space-y-[18px]">
        {companyLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            onClick={onClose}
            className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 group"
          >

            <Image
              src={link.image}
              alt={link.title}
              width={80}
              height={80}
              className="rounded-lg object-cover w-20 h-20"
            />
            <div className="flex-1 mt-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-p18! md:text-p24! font-medium">{link.title}</h3>
                    {link.subheading && (
                        <span className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70 whitespace-nowrap">
                            {link.subheading}
                        </span>
                    )}
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform group-hover:translate-x-1">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
              <p className="text-[10px] md:text-p16 text-white/60 mt-1 line-clamp-2">{link.description}</p>

            </div>
          </Link>
        ))}
      </div>

      <div className="px-6 mt-12 space-y-8">
        <div className="space-y-4 text-center">
            <h4 className="text-p18! md:text-p24! font-semibold leading-tight">{aboutDigitalExperienceData.title}</h4>
            <p className="text-[10px] md:text-p16 text-white/70 leading-relaxed uppercase">{aboutDigitalExperienceData.description}</p>
        </div>


        {/* Contact Sections */}
        <div className="space-y-10 py-6 border-t border-white/10">
            {/* General */}
            <div className="space-y-4 text-center">
                <h5 className="text-p18! md:text-p24! font-semibold uppercase tracking-widest text-white/50">{aboutDigitalExperienceData.subtitle1}</h5>
                <div className="space-y-4 flex flex-col items-center">
                    {contactDetails.general.map((item) => (
                        <a key={item.text} href={item.href} onClick={onClose} className="flex items-center gap-3">
                            <Image src={item.icon} alt={item.text} width={24} height={24} className="opacity-80" />
                            <span className="text-[10px] md:text-p16 font-medium">{item.text}</span>
                        </a>
                    ))}
                </div>
            </div>


            {/* Sales */}
            <div className="space-y-4 text-center">
                <h5 className="text-p18! md:text-p24! font-semibold uppercase tracking-widest text-white/50">{aboutDigitalExperienceData.subtitle2}</h5>
                <div className="space-y-4 flex flex-col items-center">
                    {contactDetails.sales.map((item) => (
                        <a key={item.text} href={item.href} onClick={onClose} className="flex items-center gap-3">
                            <Image src={item.icon} alt={item.text} width={24} height={24} className="opacity-80" />
                            <span className="text-[10px] md:text-p16 font-medium">{item.text}</span>
                        </a>
                    ))}
                </div>
            </div>


            {/* HR */}
            <div className="space-y-4 text-center">
                <h5 className="text-p18! md:text-p24! font-semibold uppercase tracking-widest text-white/50">{aboutDigitalExperienceData.subtitle3}</h5>
                <div className="space-y-4 flex flex-col items-center">
                    {contactDetails.hr.map((item) => (
                        <a key={item.text} href={item.href} onClick={onClose} className="flex items-center gap-3">
                            <Image src={item.icon} alt={item.text} width={24} height={24} className="opacity-80" />
                            <span className="text-[10px] md:text-p16 font-medium">{item.text}</span>
                        </a>
                    ))}
                </div>
            </div>

        </div>

        {/* Office */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center md:items-center text-center md:text-center space-y-4">
            <div 
                className="flex items-start justify-center md:justify-start gap-3 cursor-pointer"
                onClick={() => {
                    window.open("https://maps.app.goo.gl/Ek7djBmoQwA1NUK48", "_blank")
                    onClose()
                }}
            >
                <Image src="/images/icon/location.png" alt="location" width={24} height={24} className="mt-1" />
                <p className="text-[10px] md:text-p16 font-medium leading-relaxed max-w-xs md:max-w-md">{aboutDigitalExperienceData.location}</p>
            </div>
        </div>


        {/* Socials */}
        <div className="flex justify-center gap-6 mt-10">
            {socialLinks.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                    {social.icon}
                </a>
            ))}
        </div>
      </div>
    </motion.div>
  )
}
