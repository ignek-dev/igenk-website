import Image from "next/image"
import Link from "next/link"

// --- Data for the Mega Menu ---
// --- Icon Components (can be in their own file or here) ---

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Social Icons
export const IconLinkedIn = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)
export const IconFacebook = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)
export const IconX = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
)
export const IconInstagram = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const companyLinks = [
  {
    image: "/images/mega-menu/AboutUS.png",
    title: "About Us",
    description: "We are a digital solutions company focused on innovation and quality.",
    href: "/about",
  },
  {
    image: "/images/mega-menu/Careers.png", // Replace with your actual image path
    title: "Careers",
    description: "Join our team and grow your skills through exciting real-world projects.",
    href: "/career",
  },
  {
    image: "/images/mega-menu/LifeAtIgnek.png", // Replace with your actual image path
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

export default function CompanyMegaMenu() {
  return (
    <>
      {/* <div className="inset-x-0 top-full bg-black text-white border-t border-white/10 z-50"> */}
      {/* Background Gradient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-40" /> */}

      <div className="mx-auto w-full px-4 py-12 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full max-w-[588px] flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.title}
                  className="group flex h-[174px] items-center gap-5 rounded-[20px] bg-[#0D0D0D] p-4 transition-all duration-300"
                >
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={143}
                    height={127}
                    className="flex-shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{link.title}</h3>
                    <p className="mt-1 text-lg text-white/70">{link.description}</p>
                  </div>
                  <IconArrowRight className="size-8 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-span-7">
            <h2 className="max-w-1xl text-3xl leading-tight font-bold">
              We&apos;re the Top #1 Digital experience development company contributing towards a smart World
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-white/70">
              IGNEK delivers smart, high-quality digital experiences that transform businesses, improve efficiency, and
              accelerate growth through expert engineering, modern design, and reliable technology solutions.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-6 border-white/10 pt-8">
              <div className="relative pr-4">
                <h4 className="mb-3 text-2xl font-semibold">General</h4>
                <ul className="space-y-2">
                  {contactDetails.general.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-xl text-white/80 transition-colors hover:text-white"
                      >
                        <Image src={item.icon} alt={item.text} width={24} height={24} objectFit="contain" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-white/10" />
              </div>

              {/* Sales sections */}
              <div className="relative px-4">
                <h4 className="mb-3 text-2xl font-semibold">Sales</h4>
                <ul className="space-y-2">
                  {contactDetails.sales.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-xl text-white/80 transition-colors hover:text-white"
                      >
                        <Image src={item.icon} alt={item.text} width={24} height={24} objectFit="contain" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-white/10" /> {/* Right border */}
              </div>

              {/* HR sections */}
              <div className="relative pl-4">
                <h4 className="mb-3 text-2xl font-semibold">HR</h4>
                <ul className="space-y-2">
                  {contactDetails.hr.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="flex items-center gap-2 text-xl text-white/80 transition-colors hover:text-white"
                      >
                        <Image src={item.icon} alt={item.text} width={24} height={24} objectFit="contain" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-16 border-white/10 pt-8">
              <div className="flex max-w-md items-center gap-3 text-xl leading-7 text-white/80">
                <Image
                  src={"/images/icon/location.png"}
                  alt={"Location"}
                  width={41}
                  height={41}
                  objectFit="cover"
                  className="flex-shrink-0 rounded-md"
                />
                E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat - 382470
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                    className="flex size-12 items-center justify-center rounded-full bg-white text-black/70 transition-colors hover:bg-gray-200"
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
