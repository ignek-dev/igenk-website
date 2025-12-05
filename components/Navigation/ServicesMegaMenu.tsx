// components/ServicesMegaMenu.tsx
import React from "react"
import Image from "next/image"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"

interface MegaMenuProps {
  onClose: () => void
}

// Data for the card on the left
const featuredService = {
  imageSrc: "/images/mega-menu/Services-megamenu.jpg",
  title: "Build With The<br /> Top 3% of<br /> Tech Experts!",
  buttonText: "Book Consultant Now",
  buttonHref: "#",
}

// Data for the "Digital Experience" section
const digitalExperienceLinks = [
  { text: "DX Strategy", href: "/contact", iconUrl: "/images/mega-menu/dx-strategy.png" },
  { text: "DX Design", href: "/contact", iconUrl: "/images/mega-menu/dx-design.png" },
  { text: "DX Engineering", href: "/contact", iconUrl: "/images/mega-menu/dx-engineering.png" },
  { text: "DX Intelligence", href: "/contact", iconUrl: "/images/mega-menu/dx-intelligence.png" },
  { text: "DX Marketing", href: "/contact", iconUrl: "/images/mega-menu/dx-marketing.png" },
  { text: "DX Infrastructure", href: "/contact", iconUrl: "/images/mega-menu/dx-infrastructure.png" },
]

// Data for the "Liferay Services" section (Original Data)
const liferayServicesLinks = [
  { text: "Consulting Page", href: "/services/liferay-consulting-and-implementation-services" },
  { text: "Performance Tuning", href: "/services/liferay-performance-tuning" },
  { text: "Proof Of Concept", href: "/services/liferay-proof-of-concept" },
  { text: "Support & Maintenance", href: "/services/liferay-support-and-maintenance" },
  { text: "Architecture", href: "/services/liferay-architecture-design" },
  { text: "Ecommerce Development", href: "/services/liferay-ecommerce-development" },
  { text: "Development & Customization", href: "/services/liferay-development-and-customization" },
  { text: "Expert Advice", href: "/services/liferay-expert-advice" },
  { text: "Upgradation", href: "/services/liferay-upgrade" },
  // { text: "Hire Liferay Devloper", href: "/services/liferay-hire-developer" },
  { text: "Migration", href: "/services/liferay-migration" },
  // { text: "Theme Development", href: "/services/liferay-theme-development" },
]

// NEW LOGIC: Explicitly split the links into two arrays for Flex columns
const liferayCol1 = liferayServicesLinks.slice(0, 5);
const liferayCol2 = liferayServicesLinks.slice(5, 10);

// Data for the Marquee
const marqueeStats = [
  "Certified Developers",
  "24×7 Support",
  "Dedicated Team",
  "Fast Delivery",
  "Proven Expertise",
  "On-Demand Developers",
  "Long-Term Dev Support",
]

// Helper Component for Marquee Items
const MarqueeGroup = () => (
  <div className="flex shrink-0 items-center">
    {marqueeStats.map((stat, index) => (
      <div key={index} className="flex items-center">
        {/* Text */}
        <span className="text-[0.9vw] font-medium text-white opacity-80 whitespace-nowrap">{stat}</span>
        {/* Separator Dot */}
        <div className="mx-6 flex items-center justify-center">
           <Image src="/images/icon/Ellipse.png" alt="dot" width={6} height={6} />
        </div>
      </div>
    ))}
  </div>
)

// --- Main ServicesMegaMenu Component ---
export default function ServicesMegaMenu({ onClose }: MegaMenuProps) {
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
              <h5 className="mb-[1.875vw] font-medium whitespace-pre">Digital Experience</h5>
              <ul className="flex flex-col gap-[1.25vw]">
                {digitalExperienceLinks.map((link) => (
                  <li key={link.text} className="flex h-[40px] items-center">
                    <a
                      href={link.href}
                      className="flex items-center gap-[0.625vw] text-white transition-colors hover:text-white"
                    >
                      <div className="flex h-[40px] w-[40px] items-center justify-center flex-shrink-0">
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
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h5 className="mb-[1.875vw] font-medium">Liferay Services</h5>
                
                {/* REPLACED GRID WITH FLEX COLUMNS */}
                <div className="flex gap-[6.95rem]">
                  
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
              {/* mt-6 adds the 24px spacing requested */}
              <div className="mt-6 flex w-full items-center overflow-hidden">
                
                {/* Hire Liferay Experts Button */}
                <a
                  href="/services/liferay-hire-developer" 
                  className="group mr-6 flex flex-shrink-0 items-center gap-3 rounded-[30px] border border-[#ffffff33] bg-[#ffffff0d] pl-[1.458vw] pr-[1.25vw] py-[0.833vw] transition-all hover:bg-[#ffffff20]"
                  onClick={onClose}
                >
                  <span className="p20 font-medium text-white">Hire Liferay Experts</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1.25vw] h-[1.25vw]transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Marquee Animation */}
                <div className="relative flex flex-1 overflow-hidden w-[10vw]">
                   <div className="animate-marquee-medium flex items-center">
                      <MarqueeGroup />
                      <MarqueeGroup />
                      <MarqueeGroup />
                      <MarqueeGroup />
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