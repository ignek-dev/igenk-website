import Image from "next/image"
import Link from "next/link"
import "../../styles/icon-arrow.css"

// --- Data for the Mega Menu ---
// --- Icon Components (can be in their own file or here) ---

interface MegaMenuProps {
  onClose: () => void;
}

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={`arrow-responsive ${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Social Icons
export const IconLinkedIn = () => (
   <Image
    src="/images/mega-menu/linkedin-dark.png"
    alt="LinkedIn"
    width={36}
    height={36}
    className="social-icon"
  />
)
export const IconFacebook = () => (
   <Image
    src="/images/mega-menu/facebook-dark.png"
    alt="Facebook"
    width={36}
    height={36}
    className="social-icon"
  />
)
export const IconX = () => (
  <Image
    src="/images/mega-menu/tweeter-dark.png"
    alt="X"
    width={36}
    height={36}
    className="social-icon"
  />

)
export const IconInstagram = () => (
   <Image
    src="/images/mega-menu/instagram-dark.png"
    alt="Instagram"
    width={36}
    height={36}
    className="social-icon"
  />
)

const companyLinks = [
  {
    image: "/images/mega-menu/AboutUS.png",
    title: "About Us",
    description: "We are a digital solutions company focused on innovation and quality.",
    href: "/about-us",
  },
  {
    image: "/images/mega-menu/Careers.png", // Replace with your actual image path
    title: "Careers",
    description: "Join our team and grow your skills through exciting real-world projects.",
    href: "/career",
  },
  {
    image: "/images/mega-menu/LifeAtIgnek.png",
    title: "Life#IGNEK",
    description: "Experience a collaborative, creative, and energetic work culture at IGNEK.",
    href: "/life-at-ignek",
  },
]

const contactDetails = {
  general: [
    { icon: "/images/icon/mail.png", text: "connect@ignek.com", href: "mailto:connect@ignek.com" },
    { icon: "/images/icon/teams.png", text: "info@ignek.com", href: "mailto:info@ignek.com" },
  ],
  sales: [
    { icon: "/images/icon/mail.png", text: "sales@ignek.com", href: "mailto:sales@ignek.com" },
    { icon: "/images/icon/whatsapp.png", text: "(+91) 635 157 6580", href: "tel:+916351576580" },
  ],
  hr: [
    { icon: "/images/icon/mail.png", text: "hr@ignek.com", href: "mailto:hr@ignek.com" },
    { icon: "/images/icon/whatsapp.png", text: "(+91) 932 849 5160", href: "tel:+919328495160" },
  ],
}

const socialLinks = [
  { icon: <IconLinkedIn />, href: "https://www.linkedin.com/company/ignek-infotech/about/", label: "LinkedIn" },
  { icon: <IconFacebook />, href: "https://www.facebook.com/ignekinfo/", label: "Facebook" },
  { icon: <IconX />, href: "https://x.com/ignekinfotech", label: "X" },
  { icon: <IconInstagram />, href: "https://www.instagram.com/_ignek/", label: "Instagram" },
]

// --- Main MegaMenu Component ---

export default function CompanyMegaMenu({ onClose }: MegaMenuProps) {
  return (
    <>
      {/* <div className="inset-x-0 top-full bg-black text-white border-t border-white/10 z-50"> */}
      {/* Background Gradient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-40" /> */}

      <div className="global-container mx-auto w-full px-4 py-10 pb-16 md:px-8">
        <div className="grid grid-cols-12 items-start gap-[3.1875rem]">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full flex-col gap-7">
              {companyLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  onClick={onClose}
                  className="group flex h-[150px] items-center gap-7.5 rounded-[16px] bg-[#0D0D0D] p-6 transition-all duration-300 [@media(min-width:1440px)]:h-[160px] [@media(min-width:1440px)]:rounded-[18px] [@media(min-width:1536px)]:h-[168px] [@media(min-width:1536px)]:rounded-[19px] [@media(min-width:1920px)]:h-[174px] [@media(min-width:1920px)]:rounded-[20px]"
                >
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={143}
                    height={127}
                    className="flex-shrink-0 rounded-lg object-cover"
                    style={{
                      width: "7.45vw",
                      height: "6.61vw",
                      borderRadius: "1.04vw",
                    }}
                  />
                  <div className="flex-1">
                    <h5 className="font-medium text-white">{link.title}</h5>
                    <p className="font-regular p16 mt-4 text-white">{link.description}</p>
                  </div>
                  <IconArrowRight className="size-8 mr-3 text-white! transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-span-7 pt-9">
            <p className="align-middle text-[1.6667vw]! leading-[2.2917vw] font-semibold! tracking-[-0.02em]">
              We&apos;re the Top #1 Digital experience development company contributing towards a smart World
            </p>
            <p className="p18 mt-4 max-w-4xl text-left! text-[#D1D5DB]">
              IGNEK delivers smart, high-quality digital experiences that transform businesses, through expert engineering, modern design, and reliable technology solutions.
            </p>

           <div className="mt-16 flex border-white/10">
              <div className="flex-grow w-1/3 relative pr-[2.375rem] border-r border-[#4B5563]">
                <h5 className="mb-6.5 font-medium">General</h5>
                <ul className="space-y-2">
                  {contactDetails.general.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                      >
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={41}
                          height={41}
                          className="h-[28px] w-[28px] object-contain [@media(min-width:1440px)]:h-[32px] [@media(min-width:1440px)]:w-[32px] [@media(min-width:1536px)]:h-[36px] [@media(min-width:1536px)]:w-[36px] [@media(min-width:1920px)]:h-[41px] [@media(min-width:1920px)]:w-[41px]"
                        />
                        <p className="whitespace-wrap p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* <div className="absolute top-0 right-[-1] h-full w-[1px] bg-[#4B5563]" /> */}
              </div>

              {/* Sales sections */}
              <div className="flex-grow-[1.2] relative px-[2.375rem] border-r border-[#4B5563]">
                <h5 className="mb-6.5 font-medium">Sales</h5>
                <ul className="space-y-2">
                  {contactDetails.sales.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                      >
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={41}
                          height={41}
                          className="h-[28px] w-[28px] object-contain [@media(min-width:1440px)]:h-[32px] [@media(min-width:1440px)]:w-[32px] [@media(min-width:1536px)]:h-[36px] [@media(min-width:1536px)]:w-[36px] [@media(min-width:1920px)]:h-[41px] [@media(min-width:1920px)]:w-[41px]"
                        />
                        <p className="whitespace-nowrap p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* <div className="absolute top-0 h-full w-[1px] bg-[#4B5563] [@media(min-width:1440px)]:right-[-20] [@media(min-width:1920px)]:right-0" />{" "} */}
                {/* Right border */}
              </div>

              {/* HR sections */}
              <div className="flex-grow w-1/3.5 relative pl-[2.375rem]">
                <h5 className="mb-6.5 font-medium">HR</h5>
                <ul className="space-y-2">
                  {contactDetails.hr.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                      >
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={41}
                          height={41}
                          objectFit="contain"
                          className="h-[28px] w-[28px] [@media(min-width:1440px)]:h-[32px] [@media(min-width:1440px)]:w-[32px] [@media(min-width:1536px)]:h-[36px] [@media(min-width:1536px)]:w-[36px] [@media(min-width:1920px)]:h-[41px] [@media(min-width:1920px)]:w-[41px]"
                        />
                        <p className="whitespace-nowrap p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-25 border-white/10 pt-8">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-[1.0417vw]">
                <Image
                  src={"/images/icon/location.png"}
                  alt={"Location"}
                  width={41}
                  height={41}
                  objectFit="cover"
                  className="flex-shrink-0 rounded-md"
                />
                <p className="p20 max-w-[23.438vw] font-semibold! text-[#FFFFFF]">
                  E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470
                </p>
              </div>
              <div className="flex items-center gap-[1.042vw]">
                {socialLinks.map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                    className="flex size-12.5 items-center justify-center rounded-full text-black bg-white transition-colors hover:bg-gray-200"
                    target="blank"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
