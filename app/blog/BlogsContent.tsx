"use client"
import { Metadata } from "next"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import BlogCard, { BlogData } from "components/Blogmain/BlogCards"
import TechCard from "components/Blogmain/TechCards"
import { WPPost } from "components/BlogSidebar/BlogSidebar"
import DOMPurify from "dompurify"
import { blogCategorySection, blogHeroSection, blogSection, cardData } from "data/blog"
import Loader from "components/UI/Loader/Loader"


const PER_PAGE = 9
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts"

export default function BlogsContent() {
  const [blogs, setBlogs] = useState<BlogData[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(15)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize state from URL parameters on component mount
  useEffect(() => {
    const category = searchParams.get("category")
    const page = searchParams.get("page")

    if (category) {
      const categoryNum = Number(category)
      if (!isNaN(categoryNum)) {
        setSelectedCategory(categoryNum)
      }
    }

    if (page) {
      const pageNum = Number(page)
      if (!isNaN(pageNum) && pageNum > 0) {
        setCurrentPage(pageNum)
      }
    }
  }, [searchParams])

  // Update URL when category or page changes
  const updateURL = useCallback((category: number | null, page: number) => {
    const params = new URLSearchParams()

    if (category) {
      params.set("category", category.toString())
    }

    if (page > 1) {
      params.set("page", page.toString())
    }

    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog"

    // Use replace instead of push to avoid adding to history stack
    window.history.replaceState(null, "", newUrl)
  }, [])

  // Update URL when state changes
  useEffect(() => {
    updateURL(selectedCategory, currentPage)
  }, [selectedCategory, currentPage, updateURL])

  // Featured blogs for carousel (last 3 blogs)
  const featuredBlogs = blogs?.slice(-3) || []

  // Carousel navigation functions
  const nextSlide = () => {
    if (featuredBlogs.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length)
    }
  }

  const prevSlide = () => {
    if (featuredBlogs.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length)
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (featuredBlogs.length <= 1 || isHovering) return

    const interval = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(interval)
  }, [featuredBlogs.length, isHovering])

  // Fetch posts dynamically from WordPress API
  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true)

      const categoryQuery = selectedCategory ? `&categories=${selectedCategory}` : ""
      const res = await fetch(`${API_URL}?per_page=${PER_PAGE}&page=${currentPage}&${categoryQuery}&_embed`, {
        cache: "no-store",
      })

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)

      const data = await res.json()
      const total = Number(res.headers.get("x-wp-totalpages")) || 1

      const formatted: BlogData[] = (data as WPPost[]).map((post) => ({
        id: post.id,
        slug: post.slug || `post-${post.id}`,
        title: post.title?.rendered || "Untitled",
        author: "Bhavin Panchani",
        date: post.date
          ? new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "Unknown date",
        readTime: `${Math.max(2, Math.ceil((post.content?.rendered?.length || 0) / 1200))} min read`,
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blogs/blogImage.png",
        authPic: "/images/blogs/blogAuthor.png",
        desc:
          post.excerpt?.rendered ||
          "Fetching",
      }))

      setBlogs(formatted)
      setTotalPages(total)
      setCurrentSlide(0)
    } catch (err: unknown) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [currentPage, selectedCategory])

  useEffect(() => {
    fetchBlogs()
  }, [fetchBlogs])

  // Handle category selection
  const handleCategorySelect = (categoryId: number) => {
    setCurrentPage(1)
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId)
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle blog card click with safe slug handling
  const handleBlogClick = (slug: string) => {
    if (slug) {
      router.push(`/blog/${slug}`)
    } else {
      console.error("Blog slug is undefined")
    }
  }

  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full px-5 py-12 md:px-10 md:py-16 lg:px-8 lg:pt-12 lg:pb-16">
          <div className="relative grid items-start gap-6 lg:gap-[0.521vw] lg:grid-cols-2">
            <div>
              <h1 className="mt-9 bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-transparent">
                {blogHeroSection.heading}
                <br />
                {blogHeroSection.heading2}

              </h1>
            </div>
            <p className="relative mt-4 text-lg text-gray-300 lg:p18 lg:absolute lg:bottom-0 lg:max-w-[41.646vw] lg:justify-self-end lg:text-right lg:text-white lg:mt-0"></p>
            <p className="text-p16 lg:text-p18 relative mt-0  lg:absolute lg:bottom-0 lg:max-w-[41.646vw] lg:justify-self-end lg:text-right text-white">
             {blogHeroSection.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-12 lg:pt-[3.333vw] lg:pb-[3.333vw] text-black">
        <div className="global-container mx-auto w-full px-4 md:px-8">
          {/* Header part */}
          <div className="mb-10 grid grid-cols-1 gap-6 lg:mb-[2.25rem] lg:grid-cols-2 lg:items-end lg:gap-8">
            <div>
              <h2 className="tracking-tight text-[#000000]">
                {blogSection.heading}
                {/* <br /> */}
                {/* {blogSection.headingSpan} */}
              </h2>
            </div>

            <div className="flex h-full items-end">
              <p className="p18 w-full lg:text-right text-[#374151]">
                {blogSection.description}

              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="group relative mx-auto w-full">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[640px] overflow-hidden rounded-[22px] shadow-lg">
              {featuredBlogs.length > 0
                ? featuredBlogs.map((blog, index) => (
                    <div
                      key={blog.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "pointer-events-none opacity-0"
                      }`}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {/* Background Image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={blog?.image}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-fill md:object-fill xl:object-cover"
                          priority={index === 0}
                        />
                      </div>

                      {/* Overlay Content */}
                      <div
                        className="absolute inset-0 flex cursor-pointer flex-col justify-end px-6 pb-7 md:px-10 lg:px-[4.375rem] lg:pb-[3rem] text-white"
                        style={{
                          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,100) 100%)",
                        }}
                        onClick={() => blog.slug && handleBlogClick(blog.slug)}
                      >
                        <div className="inset-0 mb-4 lg:mb-[4.896vw] flex items-center justify-between">
                          {featuredBlogs.length > 1 && (
                            <>
                              {/* Previous Arrow */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  prevSlide()
                                }}
                                className={`nav-round-btn relative top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center overflow-hidden transition-all duration-300 hover:bg-black lg:h-16 lg:w-16 ${
                                  isHovering ? "opacity-100" : "opacity-0"
                                } `}
                                aria-label="Previous slide"
                              >
                                <div className="nav-fancy-glow absolute rounded-[42px]"></div>
                                <div className="absolute inset-0.5 rounded-[40px] bg-black"></div>
                                <svg
                                  className="relative z-10 h-9 w-9 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                                  />
                                </svg>
                              </button>

                              {/* Next Arrow */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  nextSlide()
                                }}
                                className={`nav-round-btn relative top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 transform items-center justify-center overflow-hidden transition-all duration-300 hover:bg-black ${
                                  isHovering ? "opacity-100" : "opacity-0"
                                } `}
                                aria-label="Next slide"
                              >
                                <div className="nav-fancy-glow absolute rounded-[42px]"></div>
                                <div className="absolute inset-0.5 rounded-[40px] bg-black"></div>
                                <svg
                                  className="relative z-10 h-8 w-8 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                  />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>

                        <div className="text-p12 md:text-p16 lg:text-p18 mb-2 lg:mb-[0.938vw] flex items-center space-x-2 font-normal text-[#E5E7EB] opacity-90">
                          <span className=" rounded-full border border-[#D1D5DB] px-3 py-1 lg:w-[9.5vw] lg:px-[1.042vw] lg:py-[0.521vw] text-center text-[#E5E7EB]">
                            {blog.category}
                          </span>
                          <span>• {blog?.readTime}</span>
                        </div>

                        <h2
                          className="mb-2 lg:mb-[0.938vw] text-p12! md:text-p16! lg:text-[1.563vw]!"
                          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title) }}
                        />
                        <div className="flex items-center space-x-2 text-xl font-normal">
                          <Image
                            src={blog?.authPic}
                            alt={"Author"}
                            width={40}
                            height={40}
                            className="h-8 w-8 rounded-full object-cover lg:h-[2.083vw] lg:w-[2.083vw]"
                          />
                          <span className="text-p12 md:text-p14 lg:text-p20 font-medium">{blog?.author}</span>
                          <span className="text-p12 md:text-p14 lg:text-p18 opacity-80">• {blog.date}</span>
                        </div>

                        {/* Description on Hover */}
                        <div
                          className={`mt-4 transition-all duration-300 ease-in-out ${
                            isHovering ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                          } overflow-hidden hidden lg:block`}
                        >
                          <p className="line-clamp-2 text-[0.938vw] leading-relaxed text-white/90">
                            {blog.desc
                              ? blog.desc.replace(/<[^>]*>/g, "")
                              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : !loading && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-[22px] bg-gray-200">
                      <p className="text-lg text-gray-500">No featured blogs available</p>
                    </div>
                  )}
            </div>
          </div>

          {/* Category Section */}
          <div className="flex flex-col py-16">
            <h2 className="mb-9 text-4xl md:text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
              {blogCategorySection.heading}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:justify-between lg:gap-[0.677vw]">
              {cardData.map((card, index) => {
                const isSelected = selectedCategory === card.id
                return (
                  <div key={index} onClick={() => handleCategorySelect(card.id)}>
                    <TechCard
                      iconWhite={card.iconWhite}
                      iconBlue={card.iconBlue}
                      title={card.title}
                      description={card.description}
                      isSelected={isSelected}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Blog Grid Section */}
          <div className="">
            <h2 className="mb-9 tracking-tight text-[#000000]">{blogCategorySection.heading2}</h2>

            {loading ? (
              <div className="flex w-full min-h-[50vh] items-center justify-center">
                <Loader />
              </div>
            ) : blogs.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-500">No blogs found for the selected category.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 lg:gap-[3.375rem]">
                  {blogs.map((blog, index) => (
                    <div key={`${blog.id}-${index}`} onClick={() => blog.slug && handleBlogClick(blog.slug)}>
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-start lg:mt-[2.656vw]">
                    <ul className="flex flex-wrap items-center gap-2 font-medium text-p14 lg:text-p20 lg:gap-[0.438vw]">
                      {/* First */}
                      <li
                        className={`flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm lg:text-base  ${
                          currentPage === 1 ? "cursor-not-allowed border-gray-300" : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage > 1 && handlePageChange(1)}
                      >
                        <svg
                          className="mr-1 inline-block h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M17 17l-5-5 5-5"></path>
                        </svg>
                        First
                      </li>

                      {/* Back */}
                      <li
                        className={`flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm lg:text-base ${
                          currentPage === 1 ? "cursor-not-allowed border-gray-300" : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage > 1 && handlePageChange(Math.max(1, currentPage - 1))}
                      >
                        <svg
                          className="mr-1 inline-block h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back
                      </li>

                      {/* Dynamic Pages */}
                      {(() => {
                        const pages = []
                        const maxVisible = 5
                        let start = Math.max(1, currentPage - 2)
                        const end = Math.min(totalPages, start + maxVisible - 1)
                        if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1)

                        if (start > 1) {
                          pages.push(
                            <li
                              key={1}
                              onClick={() => handlePageChange(1)}
                              className={`cursor-pointer rounded-md border px-4 py-2 text-sm lg:text-base hover:bg-gray-100 ${
                                currentPage === 1 ? "bg-black text-white" : ""
                              }`}
                            >
                              1
                            </li>
                          )

                          if (start > 2)
                            pages.push(
                              <li
                                key="dots-start"
                                className="cursor-default rounded-md border px-4 py-2 text-sm lg:text-base text-gray-500 select-none"
                              >
                                ...
                              </li>
                            )
                        }

                        for (let i = start; i <= end; i++) {
                          pages.push(
                            <li
                              key={i}
                              onClick={() => handlePageChange(i)}
                              className={`cursor-pointer rounded-md border px-4 py-2 text-sm lg:text-base transition-all duration-200 ${
                                currentPage === i ? "border-black bg-black text-white" : "hover:bg-gray-100"
                              }`}
                            >
                              {i}
                            </li>
                          )
                        }

                        if (end < totalPages) {
                          if (end < totalPages - 1)
                            pages.push(
                              <li key="dots-end" className="px-4 py-2 text-sm lg:text-base text-gray-500 select-none">
                                ...
                              </li>
                            )
                          pages.push(
                            <li
                              key={totalPages}
                              onClick={() => handlePageChange(totalPages)}
                              className={`cursor-pointer rounded-md border px-4 py-2 text-sm lg:text-base hover:bg-gray-100 ${
                                currentPage === totalPages ? "border-black bg-black text-white" : ""
                              }`}
                            >
                              {totalPages}
                            </li>
                          )
                        }

                        return pages
                      })()}

                      {/* Next */}
                      <li
                        className={`flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm lg:text-base ${
                          currentPage === totalPages
                            ? "cursor-not-allowed border-gray-300 text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() =>
                          currentPage < totalPages && handlePageChange(Math.min(totalPages, currentPage + 1))
                        }
                      >
                        Next
                        <svg
                          className="ml-1 inline-block h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </li>

                      {/* Last */}
                      <li
                        className={`flex cursor-pointer items-center rounded-md border px-4 py-2 text-sm lg:text-base ${
                          currentPage === totalPages
                            ? "cursor-not-allowed border-gray-300 text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage < totalPages && handlePageChange(totalPages)}
                      >
                        Last
                        <svg
                          className="ml-1 inline-block h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M7 7l5 5-5 5"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
