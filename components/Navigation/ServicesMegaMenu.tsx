// components/ServicesMegaMenu.tsx
import Image from "next/image"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"


interface MegaMenuProps {
  onClose: () => void;
}


// Data for the card on the left
const featuredService = {
  // Path starts from the 'public' directory
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

// Data for the "Liferay Services" section
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
  { text: "Hire Liferay Devloper", href: "/services/liferay-hire-developer" },
  { text: "Migration", href: "/services/liferay-migration" },
  // { text: "Theme Development", href: "/services/liferay-theme-development" },
]

// --- Main ServicesMegaMenu Component ---
export default function ServicesMegaMenu({ onClose }: MegaMenuProps) {
  return (
    <>
      <div className="global-container mx-auto w-full px-4 py-[clamp(20px,2vw,38px)] md:px-8">
        <div className="flex items-start gap-[2.083vw]">
          {/* Left Side: Image Card */}
          <div className="h-[-webkit-fill-available] flex-shrink-0" style={{ maxWidth: "27.135vw" }}>
            <div className="group relative h-full w-full overflow-hidden rounded-[1.041vw] border-[0.156vw] border-white">
              {/* Background Image */}
              <Image
                src={featuredService.imageSrc}
                alt="Tech Experts"
                width={521} // Base width from parent style
                height={460} // Estimated height for aspect ratio
                className="h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              {/* Bottom teal bar connected to button */}
              <div
                className="/* teal bar height */ absolute bottom-[1.40vw] left-0 h-[0.129vw] w-full"
                style={{ backgroundColor: "#00979E" }}
              ></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end text-white">
                {/* Container for the text with its own padding */}
                <div className="mr-[0.833vw] px-[1.667vw] pb-[0.417vw]">
                  <h4 className="font-bold" dangerouslySetInnerHTML={{ __html: featuredService.title }}></h4>
                </div>

                {/* Button is now a full-width block at the bottom */}
                {/* <a
                  href={featuredService.buttonHref}
                  className="mb-3 flex max-h-[47px] w-70 items-center justify-center text-center align-middle text-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00979E" }}
                >
                  {featuredService.buttonText}
                </a> */}
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
              <h4 className="mb-[1.875vw] font-medium whitespace-pre">Digital Experience</h4>
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
            <div className="flex-1">
              <h4 className="mb-[1.875vw] font-medium">Liferay Services</h4>
              {/* Using a grid to create two columns */}
              <ul className="grid grid-cols-2 gap-x-[4.75rem] gap-y-[1.5rem]">
                {liferayServicesLinks.map((link) => (
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
        </div>
      </div>
    </>
  )
}
