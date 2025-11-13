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

      <div className="mx-auto w-full px-4 py-12 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full max-w-[588px] flex-col gap-5">
              {insightLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="group flex h-[130px] items-center gap-4 rounded-lg bg-zinc-900/80 p-4 transition-colors duration-300 hover:bg-zinc-800/80"
                >
                  <div className="text-white/70 transition-colors group-hover:text-white">
                    <Image src={link.icon} alt={link.title} width={24} height={24} objectFit="contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{link.title}</h3>
                    <p className="mt-1 text-base text-white/60">{link.description}</p>
                  </div>
                  <IconArrowRight className="size-8 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Event */}
          <div className="col-span-7">
            <h2 className="max-w-1xl mb-6 text-3xl leading-tight font-bold">{featuredEvent.title}</h2>
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
