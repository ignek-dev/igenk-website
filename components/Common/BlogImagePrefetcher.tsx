"use client"

import { useEffect } from "react"

// --- Interfaces for Type Safety ---
interface CachedBlogImage {
  image: string;
  timestamp: number;
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

export default function BlogImagePrefetcher() {
  useEffect(() => {
    async function prefetchBlogImage() {
      try {
        // 1. Check Cache
        const cachedRaw = localStorage.getItem("latest_blog_image")
        
        if (cachedRaw) {
          try {
            // We assert 'parsed' is our Interface type
            const parsed = JSON.parse(cachedRaw) as CachedBlogImage

            // Safety check: ensure it is actually an object with the properties we need
            if (parsed && typeof parsed === 'object' && parsed.timestamp) {
               const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000
               if (!isExpired) {
                 return // Cache is valid, stop here
               }
            }
          } catch (e) {
            console.warn("Error parsing cache in prefetcher", e)
          }
        }

        // 2. Fetch from API
        const res = await fetch(
          "https://insights.ignek.com/wp-json/wp/v2/posts?per_page=1&_embed",
          { cache: "no-store" }
        )
        
        // Explicitly type the API response as an array of WPPost
        const data = (await res.json()) as WPPost[]
        
        // Now TypeScript knows 'data' is an array, so data[0] is valid
        const img = data?.[0]?._embedded?.["wp:featuredmedia"]?.[0]?.source_url

        if (img) {
          const cacheData: CachedBlogImage = { image: img, timestamp: Date.now() }
          localStorage.setItem("latest_blog_image", JSON.stringify(cacheData))
        }
      } catch (err) {
        console.error("Background prefetch failed:", err)
      }
    }

    prefetchBlogImage()
  }, [])

  return null
}