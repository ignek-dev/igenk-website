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
    slug: "music-license-management-portal",
    imageSrc: "/images/portfolio/Music-License-Management-Portal-Onboarding-&-Data-Integrity.webp",
    tag: "Corporate",
    title: "Music License Management Portal : Onboarding & Data Integrity",
    excerpt:
      "This portal is designed to management of music rights, featuring a user-friendly onboarding process for clients. It allows publishers...",
  },
  {
    id: 2,
    slug: "employee-intranet-portal-for-government-entity",
    imageSrc: "/images/portfolio/Employee-Intranet-Portal-for-Government-Entity.webp",
    tag: "Government",
    title: "Employee Intranet Portal for Government Entity",
    excerpt:
      "This Employee Intranet Portal was developed for collaboration among all internal and external users through an open, flexible, and...",
  },
  {
    id: 3,
    slug: "liferay-dxp-based-intranet-portal-migration",
    imageSrc: "/images/portfolio/Liferay-DXP-Based-Intranet-Portal-Migration-from-7.0-to-7.4.webp",
    tag: "Corporate",
    title: "Liferay DXP Based Intranet Portal Migration from 7.0 to 7.4",
    excerpt:
      "We created this project to upgrade the intranet portal from Liferay version 7.0 DXP to 7.4 DXP, including the development and redesign...",
  },
]
 
const CaseStudy: React.FC<CaseStudyCarouselProps> = ({ caseStudies }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [posts, setPosts] = useState<LocalCaseStudy[]>(hardcodedPosts)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200)
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(() => {
    if (!posts.length) return
 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1))
    }, 4000)
 
    return () => clearInterval(interval)
  }, [posts])
 
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-black py-16 text-white">
      <div className="px-4 lg:px-[192px]">
        <p className="mb-6 text-lg font-semibold lg:mb-[1.823vw] lg:text-[1.667vw]">Related Case Studies</p>
 
        {loading ? (
          <div className="absolute inset-0 z-10 flex w-full items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="relative flex gap-[34px] transition-transform duration-[1500ms]">
            <div
              className="flex gap-4 transition-transform duration-[1500ms] lg:gap-[34px]"
              style={{
                width: `${posts.length * (windowWidth <= 1024 ? 100 : 60)}vw`,
                transform: `translateX(-${activeIndex * (windowWidth <= 1024 ? 103 : 60)}vw)`,
              }}
            >
              {posts.map((item) => (
                <div key={item.id} className="w-screen flex-shrink-0 px-2 md:w-[61.1458vw]">
                  <div className="flex flex-col gap-6 rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6 md:max-h-[19.896vw] md:flex-row"
                   style={{
                width: `${windowWidth <= 1024 ? 88 : ''}vw`,
              
              }}
                  >
                    {/* Image */}
                    <div className="h-auto w-full overflow-hidden rounded-xl md:h-[16.5625vw] md:w-1/2">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={424}
                        height={300}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </div>
 
                    {/* Content */}
                    <div className="mt-4 flex w-full flex-col md:mt-0 md:w-1/2">
                      <span className="mb-3 inline-block w-max rounded-full border border-[#00979E] px-3 py-1 text-sm text-white md:text-base">
                        {item.tag}
                      </span>
                      <h3
                        className="mb-2 line-clamp-2 text-lg md:text-[1.5vw]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p
                        className="mb-3 line-clamp-2 text-sm text-gray-400 md:text-[1vw]"
                        dangerouslySetInnerHTML={{ __html: item.excerpt }}
                      />
                      <button
                        className="fancy w-max cursor-pointer rounded-2xl px-4 py-2 transition-all md:px-12 md:py-[0.8333vw]"
                        onClick={() => router.push(`/portfolio/${item.slug}`)}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3 rounded-full bg-black text-[12px] font-medium text-white">
                          Read case study
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
 
export default CaseStudy