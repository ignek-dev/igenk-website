// components/SuccessStories.tsx
"use client"
import React, { useCallback, useEffect, useState } from "react"
import { WPPortfolioPost } from "components/PortfolioList/PortfolioList"
import SuccessStoryCard, { Story } from "./SuccessStoryCard"
import Loader from "components/UI/Loader/Loader"

// --- Interfaces & Constants for Caching ---
interface CachedSuccessStories {
  data: Story[];
  timestamp: number;
}

// const CACHE_KEY = "ignek_success_stories_cache"
// const CACHE_DURATION = 24 * 60 * 60 * 1000 //24 Hours

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

// --- HARDCODED DATA (Replaces API Call) ---
const hardcodedStories: Story[] = [
  {
    id: 1,
    // UPDATE THIS SLUG to match your actual case study URL
    slug: "music-license-management-portal", 
    // UPDATE THIS IMAGE PATH to your actual image
    imageSrc: "/images/portfolio/Music-License-Management-Portal-Onboarding-&-Data-Integrity.webp", 
    tag: "Corporate",
    title: "Music License Management Portal : Onboarding & Data Integrity",
    description: "This portal is designed to management of music rights, featuring a user-friendly onboarding process for clients. It allows publishers, authors, and musicians to publish their music and content . Through integration with the main OTT platform, the portal...",
    services: [] // Services are handled by commonProvidedServices in the card
  },
  {
    id: 2,
    // UPDATE THIS SLUG to match your actual case study URL
    slug: "liferay-dxp-based-intranet-portal-migration",
    // UPDATE THIS IMAGE PATH to your actual image
    imageSrc: "/images/portfolio/Liferay-DXP-Based-Intranet-Portal-Migration-from-7.0-to-7.4.webp", 
    tag: "Corporate",
    title: "Liferay DXP Based Intranet Portal Migration from 7.0 to 7.4",
    description: "We created this project to upgrade the intranet portal from Liferay version 7.0 DXP to 7.4 DXP, including the development and redesign of key modules. As part of the Liferay 7.0 to 7.4 Upgrade, we migrated data and code while integrating advanced...",
    services: []
  },
  {
    id: 3,
    // UPDATE THIS SLUG to match your actual case study URL
    slug: "employee-intranet-portal-for-government-entity",
    // UPDATE THIS IMAGE PATH to your actual image
    imageSrc: "/images/portfolio/Employee-Intranet-Portal-for-Government-Entity.webp", 
    tag: "Government",
    title: "Employee Intranet Portal for Government Entity",
    description: "This Employee Intranet Portal was developed for collaboration among all internal and external users through an open, flexible, and user-friendly solution. Key features include a Space Reservation System for booking venues, Business Opportunity...",
    services: []
  }
]

// Dummy Data - Updated to use commonProvidedServices

// const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio"

const SuccessStories: React.FC = () => {
  const [posts, setPosts] = useState<Story[]>(hardcodedStories)
  const [loading, setLoading] = useState(false)

  /* // --- COMMENTED OUT API LOGIC FOR FUTURE USE ---
  const fetchPosts = useCallback(async (idsToFilter: number[]) => {
    try {
      const cachedRaw = localStorage.getItem(CACHE_KEY)
      if (cachedRaw) {
        try {
          const parsed = JSON.parse(cachedRaw) as CachedSuccessStories
          const now = Date.now()
          
          // Check if cache exists, has data, and is not older than 24 hours
          if (parsed && parsed.data && (now - parsed.timestamp < CACHE_DURATION)) {
            setPosts(parsed.data)
            setLoading(false)
            return // STOP HERE - Do not call API
          }
        } catch (e) {
          console.warn("Invalid cache for success stories", e)
        }
      }
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

      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: mappedStories,
        timestamp: Date.now()
      }))

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
  */

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

                    <p className="text-p16 md:text-p18 mt-1 text-gray-600">Explore the transformative <br />Liferay solutions we’ve implemented.</p>
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
