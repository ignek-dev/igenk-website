// InsightsMegaMenu.tsx
import Image from "next/image"
import Link from "next/link"
// --- Icon Components ---
const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// --- Data for the Insight Links ---
const insightLinks = [
  {
    icon: "/images/icon/blogs.png",
    title: "Blogs",
    description: "The latest industry news, updates and info.",
    href: "/blog",
  },
  {
    icon: "/images/icon/case-studies.png",
    title: "Case Studies",
    description: "Take a closer look at the projects we've delivered",
    href: "/case-study",
  },
  {
    icon: "/images/icon/webinars.png",
    title: "Webinars",
    description: "Watch our latest organized webinar",
    href: "/contact",
  },
  {
    icon: "/images/icon/blogs.png",
    title: "Marketplace",
    description: "Modules that make your Liferay experience effortless.",
    href: "/marketplace",
  },
]

// --- Dynamic Event Data ---
// To update the event, just change the data in this object
const featuredEvent = {
  title: "Unlock insights that drive growth — join our upcoming webinar and level up your digital game!",
  // The path starts from the `public` directory
  imageSrc: "/images/mega-menu/Event-image.jpg",
  imageAlt: "Customer Onboarding with Low Code/No-Code Capabilities of Liferay Portal Webinar",
  href: "/webinar", // Link to the webinar page
}

// --- Main InsightsMegaMenu Component ---
export default function InsightsMegaMenu() {
  return (
    <>
      {/* Background Gradient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-40" /> */}

      <div className="global-container mx-auto w-full px-4 py-9.5 md:px-8">
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full max-w-[30.625vw] flex-col gap-[1.041vw]">
              {insightLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="group /* 1440px → use vw scaling */ /* 1920px → match the design exactly */ flex h-[130px] items-center gap-[1.041vw] rounded-[16px] bg-[#0D0D0D] p-8 transition-all duration-300 [@media(min-width:1440px)]:h-[8.333vw] [@media(min-width:1440px)]:rounded-[0.937vw] [@media(min-width:1920px)]:h-[129px] [@media(min-width:1920px)]:rounded-[20px]"
                >
                  {/* Icon container */}
                  <div className="/* At 1440px+ scale using vw */ h-[40px] w-[40px] text-white/70 transition-colors group-hover:text-white sm:h-[44px] sm:w-[44px] md:h-[48px] md:w-[48px] xl:h-[2.604vw] xl:w-[2.604vw]">
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={50}
                      height={50}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{link.title}</h4>
                    <p className="p16 font-regular mt-1 text-white">{link.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <IconArrowRight className="size-8 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Event */}
          <div className="col-span-7 pt-4">
            <p className="mb-6 max-w-4xl align-middle text-[1.6667vw]! leading-[2.2917vw] font-semibold! tracking-[-0.02em] text-white">
              {featuredEvent.title}
            </p>
            <Link href={featuredEvent.href} className="group block">
              <div className="overflow-hidden rounded-[14.35px] border-[1.2px] border-white/20 transition-all duration-300 group-hover:border-white/40">
                <Image
                  src={featuredEvent.imageSrc}
                  alt={featuredEvent.imageAlt}
                  width={800} // Base width for aspect ratio
                  height={450} // Base height for aspect ratio
                  objectFit="cover" // from object-cover class
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
