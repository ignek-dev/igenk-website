// components/SuccessStories.tsx
"use client"
import React, { useCallback, useEffect, useState } from "react"
import { WPPortfolioPost } from "components/PortfolioList/PortfolioList"
import SuccessStoryCard, { Story } from "./SuccessStoryCard"
import Loader from "components/UI/Loader/Loader"

// CHANGED: Consolidated Provided Services data
export const commonProvidedServices = [
  { name: "Java", iconSrc: "/images/success-stories/java.png" },
  { name: "Bootstrap", iconSrc: "/images/success-stories/bootstrap.png" },
  { name: "Kenesis", iconSrc: "/images/success-stories/javascript.png" },
  { name: "My Sql", iconSrc: "/images/success-stories/mysql.png" },
  { name: "React Js", iconSrc: "/images/success-stories/react.png" },
  { name: "Liferay DXP 7.4", iconSrc: "/images/success-stories/liferay.png" },
  { name: "ElasticSearch", iconSrc: "/images/success-stories/elasticSearch.png" },
  { name: "Jest", iconSrc: "/images/success-stories/jest.png" },
  { name: "HashRouter", iconSrc: "/images/success-stories/hashRouter.png" },
  { name: "TypeScript", iconSrc: "/images/success-stories/typescript.png" },
]

// Dummy Data - Updated to use commonProvidedServices

const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio"
const SuccessStories: React.FC = () => {
  const [posts, setPosts] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const fetchPosts = useCallback(async (idsToFilter: number[]) => {
    try {
      setLoading(true)
      // window.scrollTo({ top: 0, behavior: "smooth" })

      // Build API params
      const params = new URLSearchParams({
        per_page: String(50),
        page: String(1),
        _embed: "",
      })

      const res = await fetch(`${API_BASE}?${params.toString()}`, {
        cache: "no-store",
      })

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)

      const data = (await res.json()) as WPPortfolioPost[]
      // ✅ Filter only posts whose IDs are in the provided array
      const filteredPosts = idsToFilter.length
        ? data
            .filter((post) => idsToFilter.includes(post.id))
            .sort((a, b) => idsToFilter.indexOf(a.id) - idsToFilter.indexOf(b.id))
        : data
      const mappedStories: Story[] = filteredPosts.map((post) => ({
        id: post?.id,
        slug: post?.slug,
        imageSrc: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/portfolio/portfolioImg.png",
        tag: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        title: post.title.rendered,
        description: post.excerpt.rendered,
        services: [], // <-- Add this line to satisfy the interface
      }))

      setPosts(mappedStories)
    } catch (err) {
      console.error("Error fetching posts:", err)
    }finally {
      // Stop Loading
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // const id=[19498,32037,32555]
    const categoryIds = [19498, 32037, 32555]
    fetchPosts(categoryIds)
  }, [fetchPosts])
  // Use the context hook here as well

  const [stuck, setStuck] = useState<Map<number, boolean>>(new Map())

  useEffect(() => {
    const handleScroll = () => {
      const stickyCards = document.querySelectorAll(".success-sticky") as NodeListOf<HTMLElement>
      const map = new Map<number, boolean>()

      stickyCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()

        // ⭐ SAME logic as your WhatMake component
        if (rect.top <= 200) {
          map.set(index, true)
        }
      })

      setStuck(map)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="success-stories" className="stack-clip z-20 h-max w-full rounded-t-[5rem] bg-white text-black shadow-xl">
      <div className="global-container w-full bg-[#F9FAF7] pt-[3.333vw]">
        <div className="w-full px-0">
          {/* Header */}

          {/* Cards Container */}

          <div className="card-stack relative flex flex-col space-y-10">
            {loading ? (
               <div className="flex min-h-[600px] w-full items-center justify-center">
                 <Loader />
               </div>
            ) : (
              <>
            {posts.map((story, index) => (
              <React.Fragment key={index}>
                {/* Title + Description only for first card */}
                {index === 0 && (
                  <div className="mx-auto mb-[2.604vw] max-w-6xl text-center">
                    <h2 className="global-container mb-[0.833vw]">Liferay Solutions We’ve Successfully Delivered.</h2>

                    <p className="p18 mt-1 text-gray-600">Explore the transformative <br />Liferay solutions we’ve implemented.</p>
                  </div>
                )}

                {/* Sticky Card */}
                <div
                  className="success-sticky mb-[3.333vw] sticky transition-all duration-500"
                  style={{
                    top: "200px",
                    zIndex: 10 + index,
                  }}
                  >
                  <SuccessStoryCard story={story} />
                </div>
              </React.Fragment>
            ))}
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories
