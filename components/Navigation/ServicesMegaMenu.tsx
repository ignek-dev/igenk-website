// components/ServicesMegaMenu.tsx
import Image from "next/image"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"
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
  { text: "DX Strategy", href: "#", iconUrl: "/images/mega-menu/dx-strategy.png" },
  { text: "DX Design", href: "#", iconUrl: "/images/mega-menu/dx-design.png" },
  { text: "DX Engineering", href: "#", iconUrl: "/images/mega-menu/dx-engineering.png" },
  { text: "DX Intelligence", href: "#", iconUrl: "/images/mega-menu/dx-intelligence.png" },
  { text: "DX Marketing", href: "#", iconUrl: "/images/mega-menu/dx-marketing.png" },
  { text: "DX Infrastructure", href: "#", iconUrl: "/images/mega-menu/dx-infrastructure.png" },
]

// Data for the "Liferay Services" section
const liferayServicesLinks = [
  { text: "Development & Customization", href: "/services/liferay-development-and-customization" },
  { text: "Theme Development", href: "/services/liferay-theme-development" },
  { text: "Expert Advice", href: "/services/liferay-expert-advice" },
  { text: "Proof Of Concept", href: "/services/liferay-proof-of-concept" },
  { text: "Ecommerce Development", href: "/services/liferay-ecommerce-development" },
  { text: "Migration", href: "/services/liferay-migration" },
  { text: "Support & Maintenance", href: "/services/liferay-support-and-maintenance" },
  { text: "Performance Tuning", href: "/services/liferay-performance-tuning" },
  { text: "Upgrade", href: "/services/liferay-upgrade" },
  { text: "Architecture Service", href: "/services/liferay-architecture-design" },
  { text: "Consulting Page", href: "/services/liferay-consulting-and-implementation-services" },
  { text: "Hire Liferay Devloper", href: "/services/liferay-hire-developer" },
]

// --- Main ServicesMegaMenu Component ---
export default function ServicesMegaMenu() {
  return (
    <>
      <div className="mx-auto w-full px-4 py-12 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        <div className="flex items-start gap-16">
          {/* Left Side: Image Card */}
          <div className="flex-shrink-0" style={{ maxWidth: "521px" }}>
            <div className="group relative w-full overflow-hidden rounded-xl">
              {/* Background Image */}
              <Image
                src={featuredService.imageSrc}
                alt="Tech Experts"
                width={521} // Base width from parent style
                height={600} // Estimated height for aspect ratio
                objectFit="cover"
                className="h-auto w-full"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end text-white">
                {/* Container for the text with its own padding */}
                <div className="mr-4 px-8 pb-2">
                  <h2
                    className="text-3xl leading-tight font-bold"
                    dangerouslySetInnerHTML={{ __html: featuredService.title }}
                  ></h2>
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
                    <button  className="mb-3 flex max-h-[47px] w-70 items-center justify-center text-center align-middle text-lg font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
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
            <div className="w-1/3">
              <h3 className="mb-6 text-3xl font-semibold md:text-2xl  whitespace-pre">Digital Experience</h3>
              <ul className="space-y-4">
                {digitalExperienceLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                    >
                      <Image src={link.iconUrl} alt={link.text} width={32} height={32} />
                      <span className="text-xl md:text-lg">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Separator */}
            <div className="mx-6 w-[1px] bg-white/10"></div>

            {/* Liferay Services Section */}
            <div className="w-1/2">
              <h3 className="mb-6 text-3xl font-semibold md:text-2xl">Liferay Services</h3>
              {/* Using a grid to create two columns */}
              <ul className="grid grid-cols-2 gap-x-32 gap-y-4 [@media(min-width:1440px)]:gap-x-68 [@media(min-width:1820px)]:gap-x-32">
                {liferayServicesLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-xl md:text-lg whitespace-pre text-white/80 transition-colors hover:text-white"
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
