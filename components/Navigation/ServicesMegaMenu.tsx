// components/ServicesMegaMenu.tsx

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
  { text: "Development & Customization", href: "/liferay-development-and-customization" },
  { text: "Theme Development", href: "/liferay-theme-development" },
  { text: "Expert Advice", href: "/liferay-expert-advice" },
  { text: "Proof Of Concept", href: "/liferay-proof-of-concept" },
  { text: "Ecommerce Development", href: "/liferay-ecommerce-development" },
  { text: "Migration", href: "/liferay-migration" },
  { text: "Support & Maintenance", href: "/liferay-support-and-maintenance" },
  { text: "Performance Tuning", href: "/liferay-performance-tuning" },
  { text: "Upgrade", href: "/liferay-upgrade" },
  { text: "Architecture Service", href: "/liferay-architecture-design" },
  { text: "Consulting Page", href: "/liferay-consulting-and-implementation-services" },
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
              <img src={featuredService.imageSrc} alt="Tech Experts" className="h-auto w-full object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              {/* Dark Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end text-white">
                {/* Container for the text with its own padding */}
                <div className="px-8 pb-2 mr-4">
                  <h2
                    className="text-3xl leading-tight font-bold"
                    dangerouslySetInnerHTML={{ __html: featuredService.title }}
                  ></h2>
                </div>

                {/* Button is now a full-width block at the bottom */}
                <a
                  href={featuredService.buttonHref}
                  className="w-70 max-h-[47px] flex items-center justify-center mb-3  align-middle text-center text-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00979E" }}
                >
                  {featuredService.buttonText}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Service Links */}
          <div className="flex flex-grow">
            {/* Digital Experience Section */}
            <div className="w-1/3">
              <h3 className="mb-6 text-3xl font-semibold">Digital Experience</h3>
              <ul className="space-y-4">
                {digitalExperienceLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                    >
                      <img src={link.iconUrl} alt="" className="size-8" />
                      <span className="text-xl">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Separator */}
            <div className="mx-8 w-[1px] bg-white/10"></div>

            {/* Liferay Services Section */}
            <div className="w-1/2">
              <h3 className="mb-6 text-3xl font-semibold">Liferay Services</h3>
              {/* Using a grid to create two columns */}
              <ul className="grid grid-cols-2 gap-x-32 gap-y-4">
                {liferayServicesLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-xl whitespace-pre text-white/80 transition-colors hover:text-white"
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
