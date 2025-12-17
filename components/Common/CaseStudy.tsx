"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useCallback, useEffect, useState } from "react"
import { WPPortfolioPost } from "components/PortfolioList/PortfolioList"
import Loader from "components/UI/Loader/Loader"

interface LocalCaseStudy {
  id: number
  slug: string
  imageSrc: string
  tag: string
  title: string
  excerpt: string
}

export interface CaseStudy {
  id: number
  image: string
  tag: string
  title: string
  description: string
}
interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[]
}

const hardcodedPosts: LocalCaseStudy[] = [
  {
    id: 1,
    slug: "mri-portal-portfolio",
    imageSrc: "/images/portfolio/Music-License-Management-Portal-Onboarding-&-Data-Integrity.webp",
    tag: "Corporate",
    title: "Music License Management Portal : Onboarding & Data Integrity",
    excerpt: "This portal is designed to management of music rights, featuring a user-friendly onboarding process for clients. It allows publishers..."
  },
  {
    id: 2,
    slug: "employee-intranet-portal-for-government-entity",
    imageSrc: "/images/portfolio/Employee-Intranet-Portal-for-Government-Entity.webp",
    tag: "Government",
    title: "Employee Intranet Portal for Government Entity",
    excerpt: "This Employee Intranet Portal was developed for collaboration among all internal and external users through an open, flexible, and..."
  },
  {
    id: 3,
    slug: "liferay-dxp-based-intranet-portal-migration",
    imageSrc: "/images/portfolio/Liferay-DXP-Based-Intranet-Portal-Migration-from-7.0-to-7.4.webp",
    tag: "Corporate",
    title: "Liferay DXP Based Intranet Portal Migration from 7.0 to 7.4",
    excerpt: "We created this project to upgrade the intranet portal from Liferay version 7.0 DXP to 7.4 DXP, including the development and redesign..."
  }
]

const CaseStudy: React.FC<CaseStudyCarouselProps> = ({ caseStudies }) => {
  // console.log(caseStudies)
  const [activeIndex, setActiveIndex] = useState(0)
  const [posts, setPosts] = useState<LocalCaseStudy[]>(hardcodedPosts)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const currentPage = 1
  const router = useRouter()
  // const PER_PAGE = 10;
  // const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio"
  
  useEffect(() => {
  if (!posts.length) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === posts.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, [posts]);

  /* // --- COMMENTED OUT API LOGIC ---
  const fetchPosts = useCallback(
    async (idsToFilter: number[]) => {
      try {
        // window.scrollTo({ top: 0, behavior: "smooth" })
        setLoading(true)

        // Build API params
        const params = new URLSearchParams({
          per_page: String(50),
          page: String(currentPage),
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
        setPosts(filteredPosts)
      } catch (err) {
        console.error("Error fetching posts:", err)
      }finally {
        setLoading(false)
      }
    },
    [currentPage]
  )

  useEffect(() => {
    // const id=[19498,32037,32555]
    const categoryIds = [19498, 32037, 32555]
    fetchPosts(categoryIds)
  }, [fetchPosts])
  */
 
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black py-16 text-white">
      <div className="max-w-7xl px-[192px]">
        <p className="mb-[1.823vw] px-4 text-[1.667vw] font-semibold">Related Case Studies</p>

        {loading ? (
          <div className="absolute inset-0 z-10 flex w-full items-center justify-center">
            {/* You can adjust the scale or margin if needed */}
            <Loader />
          </div>
        ) : (
        <div
          className="relative flex gap-[34px] transition-transform duration-[1500ms]"
          style={{
            width: `${posts.length * 100}%`,
            transform: `translateX(-${activeIndex * (108 / posts.length)}%)`,
          }}
        >
          {posts.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[61.1458vw] flex-shrink-0"
              // style={{
              //   transform: `translateX(-${activeIndex * 100}%)`,
              //   width: `${posts.length * 100}%`,
              //   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              // }}
            >
              <div className="flex max-h-[19.896vw] flex-col gap-8 rounded-2xl border border-gray-800 bg-[#0f0f0f] p-[1.667vw] md:flex-row">
                {/* Image */}
                <div className="h-[16.5625vw] max-w-[424px] flex-shrink-0 overflow-hidden rounded-xl md:w-1/2">
                  <Image
                    // src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/portfolio/portfolioImg.png"} //API
                    // alt={item.title.rendered} //API
                    src={item.imageSrc}
                    alt={item.title}
                    width={424}
                    height={300}
                    objectFit="cover"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col md:w-1/2">
                  <span className="p16 mb-[1.6146vw] inline-block w-[max-content] rounded-full border border-[#00979E] px-4 py-1 text-white">
                    {/* {item._embedded?.["wp:term"]?.[0]?.[0]?.name || "General"} */}
                    {item.tag}
                  </span>
                  <h3
                    className="mb-[0.9375vw] line-clamp-2"
                    // dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="p16 mb-[1.1979vw] line-clamp-2 text-gray-400"
                    // dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  />
                  <button
                    className="fancy rounded-2xle w-[max-content] cursor-pointer px-12 py-[0.8333vw] transition-all"
                    onClick={() => router.push(`/case-study/${item.slug}`)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 rounded-full bg-black text-[15px] font-medium text-white">
                      Read case study
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

export default CaseStudy
