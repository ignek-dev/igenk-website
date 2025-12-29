"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { insightLinks } from "data/Navigation"
import Loader from "components/UI/Loader/Loader"

interface InsightsMobileMegaMenuProps {
  onBack: () => void
  onClose: () => void
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

export default function InsightsMobileMegaMenu({ onBack, onClose }: InsightsMobileMegaMenuProps) {
  const [latestImage, setLatestImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        const cachedRaw = localStorage.getItem("latest_blog_image")
        if (cachedRaw) {
          try {
            const parsed = JSON.parse(cachedRaw) as CachedBlogImage
            if (parsed && typeof parsed === 'object' && parsed.image && parsed.timestamp) {
              const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000
              if (!isExpired) {
                setLatestImage(parsed.image)
                setLoading(false)
                return
              }
            }
          } catch (e) {
            console.warn("Invalid cache in Menu:", e)
          }
        }

        const res = await fetch(
          "https://insights.ignek.com/wp-json/wp/v2/posts?per_page=1&_embed",
          { cache: "no-store" }
        )
        const data = (await res.json()) as WPPost[]
        const img = data?.[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url

        if (img) {
          setLatestImage(img)
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

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute inset-0 z-1002 flex flex-col bg-black text-white overflow-y-auto pb-10"
    >
      <div className="flex items-center justify-between px-6 py-6.5 shrink-0">
        <h2 className="text-[20px]! font-semibold tracking-wide">Insights</h2>

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-p14 font-medium text-white/70 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          Back To Menu
        </button>
      </div>

      <div className="flex flex-col px-6 space-y-8 mt-4">
        {/* Links Section */}
        <div className="flex flex-col gap-[18px]">
          {insightLinks.map((link) => (
            <a
              href={link.href}
              key={link.title}
              onClick={onClose}
              className="group flex items-center gap-4 rounded-[16px] bg-[#0D0D0D] px-6 py-5 transition-all duration-300 hover:bg-[#1a1a1a]"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white/70 transition-colors group-hover:text-white">
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={30}
                  height={30}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div className="flex-1">
                <h5 className="text-p16! md:text-p24! font-medium text-white">{link.title}</h5>
                <p className="text-[10px] md:text-p16 font-regular mt-1 text-white/70">{link.description}</p>
              </div>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-white transition-colors">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          ))}
        </div>

        {/* Featured Image Section */}
        {/* <div className="mt-4">
          <p className="text-p16 text-white/80 mb-6 leading-relaxed">
            Explore practical platform insights that help enterprises build resilient, long-lasting digital experiences.
          </p>
          <Link 
            href="/blog" 
            onClick={onClose} 
            className="group block relative overflow-hidden rounded-[6px] border border-white/10 w-full max-w-[361px] md:max-w-full h-[187px] md:h-[300px]"
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                <Loader />
              </div>
            )}
            {!loading && error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 text-[10px] text-white/50">
                Failed to load latest blog image
              </div>
            )}
            {!loading && !error && latestImage && (
              <Image
                src={latestImage}
                alt="Latest Blog Featured Image"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-[12px] text-white/70"> */}
                    {/* <span>Explore Blog</span> */}
                    {/* <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> */}
                {/* </div>
            </div>
          </Link>
        </div> */}
      </div>
    </motion.div>
  )
}
