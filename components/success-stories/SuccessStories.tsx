// components/SuccessStories.tsx
"use client"
import { motion, useTransform } from "framer-motion"
import React, { useCallback, useEffect, useState } from "react"
import { useSharedScroll } from "components/Common/ScrollContextProvider"
import { WPPortfolioPost } from "components/PortfolioList/PortfolioList"
import SuccessStoryCard, { Story } from "./SuccessStoryCard"

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


const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio";
const SuccessStories: React.FC = () => {
  const [posts, setPosts] = useState<Story[]>([]);
  const fetchPosts = useCallback(
    async (idsToFilter: number[]) => {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Build API params
        const params = new URLSearchParams({
          per_page: String(50),
          page: String(1),
          _embed: "",
        });

        const res = await fetch(`${API_BASE}?${params.toString()}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

        const data = (await res.json()) as WPPortfolioPost[];
        // ✅ Filter only posts whose IDs are in the provided array
        const filteredPosts = idsToFilter.length
          ? data
            .filter((post) => idsToFilter.includes(post.id))
            .sort(
              (a, b) => idsToFilter.indexOf(a.id) - idsToFilter.indexOf(b.id)
            )
          : data;
        const mappedStories: Story[] = filteredPosts.map((post) => ({
          id: post?.id,
          imageSrc:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/images/portfolio/portfolioImg.png",
          tag: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
          title: post.title.rendered,
          description: post.excerpt.rendered,
          services: [], // <-- Add this line to satisfy the interface
        }))

        setPosts(mappedStories)
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    },
    []
  );

  useEffect(() => {
    // const id=[19498,32037,32555]
    const categoryIds = [19498, 32037, 32555];
    fetchPosts(categoryIds);
  }, [fetchPosts]);
  // Use the context hook here as well
  const sharedScrollYProgress = useSharedScroll()

  // This animation starts after the horizontal scroll is 75% complete
  const sectionY = useTransform(sharedScrollYProgress, [0.75, 1], ["100%", "0%"])

  return (
    <motion.section
      style={{ y: sectionY }}
      id="success-stories"
      className="stack-clip sticky top-0 z-20 h-max w-full rounded-t-[5rem] bg-white text-black shadow-xl"
    >
      <div className="mx-auto w-full px-4 py-12 md:px-6 md:py-16 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="w-full px-0">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-4 text-center text-4xl font-semibold md:text-5xl">Success Stories</h2>
            <p className="mt-1 text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          {/* Cards Container */}
          <div className="space-y-8">
            {posts.map((story, index) => (
              <div
                key={index}
                // className="sticky"
                // The style attribute creates the stacking offset for each card
                style={{ top: `calc(6rem + ${index * 2}rem)` }}
              >
                <SuccessStoryCard story={story} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SuccessStories
