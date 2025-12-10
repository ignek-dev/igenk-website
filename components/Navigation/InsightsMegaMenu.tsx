"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface MegaMenuProps {
  onClose: () => void;
}

interface WPFeaturedMedia {
  source_url: string;
}

interface WPEmbedded {
  "wp:featuredmedia"?: WPFeaturedMedia[];
}

interface WPPost {
  _embedded?: WPEmbedded;
}

interface CachedBlogImage {
  image: string;
  timestamp: number;
}


// --- Icon Components ---
const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    href: "/webinars",
  },
  {
    icon: "/images/mega-menu/marketplace.png",
    title: "Marketplace",
    description: "Modules that make Liferay experience effortless.",
    href: "/marketplace",
  },
]

// --- Dynamic Event Data ---
// To update the event, just change the data in this object
const featuredEvent = {
  title: "Gain the insights that matter. Apply actionable techniques to build more resilient digital experiences.",
  // The path starts from the `public` directory
  imageSrc: "/images/mega-menu/upcoming-webinar.svg",
  imageAlt: "Customer Onboarding with Low Code/No-Code Capabilities of Liferay Portal Webinar",
  href: "/webinars", // Link to the webinar page
}

// --- Main InsightsMegaMenu Component ---
export default function InsightsMegaMenu({ onClose }: MegaMenuProps) {
  const [latestImage, setLatestImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        // 1. Attempt to read from Cache (populated by Prefetcher)
        const cachedRaw = localStorage.getItem("latest_blog_image")
        
        if (cachedRaw) {
          try {
            const parsed = JSON.parse(cachedRaw) as CachedBlogImage

            // Validate that parsed is an object and has the properties we need
            if (parsed && typeof parsed === 'object' && parsed.image && parsed.timestamp) {
              const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000

              if (!isExpired) {
                setLatestImage(parsed.image)
                setLoading(false)
                return // EXIT: Data found in cache, no need to fetch
              }
            }
          } catch (e) {
            console.warn("Invalid cache in Menu:", e)
          }
        }

        // 2. Fallback Fetch (If prefetch didn't finish or cache expired)
        const res = await fetch(
          "https://insights.ignek.com/wp-json/wp/v2/posts?per_page=1&_embed",
          { cache: "no-store" }
        )

        const data = (await res.json()) as WPPost[]
        const img = data?.[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url

        if (img) {
          setLatestImage(img)
          // Update cache for next time
          localStorage.setItem(
            "latest_blog_image",
            JSON.stringify({ image: img, timestamp: Date.now() })
          )
        } else {
          setError(true)
        }
      } catch (err) {
        console.error("Failed to fetch latest blog image in Menu:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

const handleClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  onClose();
};

  return (
    <>
      {/* Background Gradient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-40" /> */}

      <div className="global-container mx-auto w-full px-4 py-9.5 pb-16 md:px-8">
        <div className="grid grid-cols-12 items-start gap-8">
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex w-full max-w-[30.625vw] flex-col gap-[1.75rem]">
              {insightLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="group flex items-center gap-[0.785vw] rounded-[16px] bg-[#0D0D0D] px-[2rem] py-[1.92rem] transition-all duration-300 hover:bg-[#1a1a1a] [@media(min-width:1440px)]:rounded-[0.937vw] [@media(min-width:1920px)]:rounded-[20px]"
                >
                  {/* Icon container */}
                  <div className="flex h-[3.125rem] w-[3.125rem] flex-shrink-0 items-center justify-center text-white/70 transition-colors group-hover:text-white">
                    <Image
                      src={link.icon}
                      alt={link.title}
                      width={45}
                      height={45}
                      className="h-[2.8125rem] w-[2.8125rem] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h5 className="font-medium text-white">{link.title}</h5>
                    <p className="p16 font-regular mt-2 text-white">{link.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <IconArrowRight className="size-8 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Event */}
          <div className="col-span-7 pt-2.5">
            <p className="mb-6 max-w-4xl align-middle text-[1.6667vw]! leading-[2.2917vw] font-semibold! tracking-[-0.02em] text-white">
              {featuredEvent.title}
            </p>
           <Link href="/blog" onClick={handleClick} className="group block">
              <div className="flex items-center overflow-hidden border-white/20 bg-black/20 transition-all duration-300 group-hover:border-white/40">
                {/* Loader */}
                {loading && (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
                    <p className="text-white">Loading latest blog…</p>
                  </div>
                )}

                {/* Error */}
                {!loading && error && <p className="text-white opacity-80">Failed to load latest blog image</p>}

                {/* Image */}
                {!loading && !error && latestImage && (
                  <Image
                    src={latestImage}
                    alt="Latest Blog Featured Image"
                    width={884}
                    height={462}
                    className="max-h-[24.063vw] max-w-[46.042vw] object-cover transition-transform rounded-[14.35px] duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
