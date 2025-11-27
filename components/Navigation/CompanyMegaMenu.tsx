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
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.41 23.7164C11.6667 23.9252 12.9492 23.9261 14.2063 23.7189M10.41 23.7164C7.71056 23.2658 5.25722 21.8722 3.48863 19.7837C1.72005 17.6951 0.749633 15.0469 0.75 12.3101C0.750455 10.1043 1.38185 7.94468 2.56969 6.08603C3.75753 4.22737 5.45223 2.74727 7.45384 1.82038C9.45544 0.893482 11.6804 0.558469 13.8662 0.854871C16.052 1.15127 18.1074 2.06672 19.7899 3.49319C21.4724 4.91966 22.7117 6.79763 23.3617 8.9055C24.0116 11.0134 24.0451 13.2632 23.4581 15.3894C22.8711 17.5157 21.6882 19.4297 20.0488 20.9056C18.4095 22.3814 16.3823 23.3576 14.2063 23.7189M10.41 23.7164L10.4088 17.4601H8.0375C7.83859 17.4601 7.64782 17.3811 7.50717 17.2405C7.36652 17.0998 7.2875 16.909 7.2875 16.7101V14.4126C7.2875 14.2137 7.36652 14.0229 7.50717 13.8823C7.64782 13.7416 7.83859 13.6626 8.0375 13.6626H10.4088V9.74762C10.4088 8.75306 10.8038 7.79923 11.5071 7.09597C12.2104 6.39271 13.1642 5.99762 14.1588 5.99762H16.4213C16.7528 5.99762 17.0707 6.12932 17.3051 6.36374C17.5396 6.59816 17.6713 6.9161 17.6713 7.24762V8.54762C17.6713 8.87914 17.5396 9.19708 17.3051 9.4315C17.0707 9.66592 16.7528 9.79762 16.4213 9.79762H15.4563C15.1247 9.79762 14.8068 9.92932 14.5724 10.1637C14.3379 10.3982 14.2063 10.7161 14.2063 11.0476V13.6626H17.0775C17.1864 13.6626 17.2939 13.6863 17.3927 13.732C17.4915 13.7778 17.5791 13.8445 17.6496 13.9275C17.72 14.0105 17.7715 14.1079 17.8005 14.2128C17.8295 14.3177 17.8353 14.4277 17.8175 14.5351L17.505 16.4151C17.4565 16.707 17.306 16.9722 17.0803 17.1635C16.8546 17.3549 16.5684 17.46 16.2725 17.4601H14.2063V23.7189" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>

)
export const IconX = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.141 8.892L19.7355 0H17.9355L11.343 7.7205L6.075 0H0L7.965 11.676L0 21H1.8L8.763 12.846L14.3265 21H20.4015L12.141 8.892ZM9.6765 11.778L8.8695 10.6155L2.448 1.365H5.2125L10.3935 8.8305L11.2005 9.993L17.937 19.698H15.1725L9.6765 11.778Z" fill="white"/>
</svg>

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
  // {
  //   image: "/images/mega-menu/LifeAtIgnek.png",
  //   title: "Life#IGNEK",
  //   description: "Experience a collaborative, creative, and energetic work culture at IGNEK.",
  //   href: "/life-at-ignek",
  // },
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

      <div className="global-container mx-auto w-full px-4 py-9.5 md:px-8">
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full max-w-[588px] flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  onClick={onClose}
                  className="group flex h-[150px] items-center gap-5 rounded-[16px] bg-[#0D0D0D] p-4 transition-all duration-300 [@media(min-width:1440px)]:h-[160px] [@media(min-width:1440px)]:rounded-[18px] [@media(min-width:1536px)]:h-[168px] [@media(min-width:1536px)]:rounded-[19px] [@media(min-width:1920px)]:h-[174px] [@media(min-width:1920px)]:rounded-[20px]"
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
                    <h4 className="font-medium text-white">{link.title}</h4>
                    <p className="font-regular p16 mt-4 text-white">{link.description}</p>
                  </div>
                  <IconArrowRight className="size-8 text-white! transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-span-7 pt-9">
            <p className="align-middle text-[1.6667vw]! leading-[2.2917vw] font-semibold! tracking-[-0.02em]">
              We&apos;re the Top #1 Digital experience development company contributing towards a smart World
            </p>
            <p className="p18 mt-4 max-w-3xl text-left! text-[#D1D5DB]">
              IGNEK delivers smart, high-quality digital experiences that transform businesses, improve efficiency, and
              accelerate growth through expert engineering, modern design, and reliable technology solutions.
            </p>

            <div className="mt-16 grid grid-cols-3 gap-y-6 border-white/10">
              <div className="relative pr-4 border-r border-[#4B5563]">
                <h4 className="mb-6.5 font-medium">General</h4>
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
                          objectFit="contain"
                          className="h-[28px] w-[28px] [@media(min-width:1440px)]:h-[32px] [@media(min-width:1440px)]:w-[32px] [@media(min-width:1536px)]:h-[36px] [@media(min-width:1536px)]:w-[36px] [@media(min-width:1920px)]:h-[41px] [@media(min-width:1920px)]:w-[41px]"
                        />
                        <p className="whitespace-wrap p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* <div className="absolute top-0 right-[-1] h-full w-[1px] bg-[#4B5563]" /> */}
              </div>

              {/* Sales sections */}
              <div className="relative px-4 border-r border-[#4B5563]">
                <h4 className="mb-6.5 font-medium">Sales</h4>
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
                          objectFit="contain"
                          className="h-[28px] w-[28px] [@media(min-width:1440px)]:h-[32px] [@media(min-width:1440px)]:w-[32px] [@media(min-width:1536px)]:h-[36px] [@media(min-width:1536px)]:w-[36px] [@media(min-width:1920px)]:h-[41px] [@media(min-width:1920px)]:w-[41px]"
                        />
                        <p className="p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* <div className="absolute top-0 h-full w-[1px] bg-[#4B5563] [@media(min-width:1440px)]:right-[-20] [@media(min-width:1920px)]:right-0" />{" "} */}
                {/* Right border */}
              </div>

              {/* HR sections */}
              <div className="relative pl-4">
                <h4 className="mb-6.5 font-medium">HR</h4>
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
                        <p className="p20 font-semibold! text-[#FFFFFF]">{item.text}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-14 border-white/10 pt-8">
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
