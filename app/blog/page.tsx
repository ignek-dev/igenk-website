"use client"
import { Metadata } from "next";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import BlogCard, { BlogData } from "components/Blogmain/BlogCards"
import TechCard from "components/Blogmain/TechCards"
import { WPPost } from "components/BlogSidebar/BlogSidebar"

const metadata: Metadata = {
  title: "IGNEK : Liferay, ReactJS, Healthcare More Blogs",
  description:
    "IGNEK relentlessly writes blogs/articles to cover important concept/topics of Liferay, Java, ReactJS, VueJS & JavaScript",

  openGraph: {
    url: "https://www.ignek.com/blog/",
    title: "IGNEK : Liferay, ReactJS, Healthcare More Blogs",
    description: "IGNEK relentlessly writes blogs/articles to cover important concept/topics of Liferay, Java, ReactJS, VueJS & JavaScript",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

const cardData = [
  {
    id: 15,
    icon: "/images/blogs/liferayIcon.png",
    title: "Liferay",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
  {
    id: 16,
    icon: "/images/blogs/reactIcon.png",
    title: "React",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
  {
    id: 21,
    icon: "/images/blogs/liferayIcon.png",
    title: "Spring Boot",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
]

const PER_PAGE = 9;
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(15);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const router = useRouter();

  // Featured blogs for carousel (last 3 blogs)
  const featuredBlogs = blogs?.slice(-3) || [];

  // Carousel navigation functions
  const nextSlide = () => {
    if (featuredBlogs.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }
  };

  const prevSlide = () => {
    if (featuredBlogs.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
    }
  };

  // Auto-play functionality - Changed speed to 7 seconds
  useEffect(() => {
    if (featuredBlogs.length <= 1 || isHovering) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Changed from 5000 to 7000ms

    return () => clearInterval(interval);
  }, [featuredBlogs.length, isHovering]);

  // Fetch posts dynamically from WordPress API
  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      
      const categoryQuery = selectedCategory
        ? `&categories=${selectedCategory}`
        : "";
      const res = await fetch(
        `${API_URL}?per_page=${PER_PAGE}&page=${currentPage}&${categoryQuery}&_embed`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data = await res.json();
      const total = Number(res.headers.get("x-wp-totalpages")) || 1;

      const formatted: BlogData[] = (data as WPPost[]).map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title?.rendered || "Untitled",
        author: "Bhavin Panchani",
        date: post.date
          ? new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          : "Unknown date",
        readTime: `${Math.max(
          2,
          Math.ceil((post.content?.rendered?.length || 0) / 1200)
        )} min read`,
        category:
          post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        image:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/images/blogs/blogImage.png",
        authPic: "/images/blogs/blogAuthor.png",
        desc: post.excerpt?.rendered || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
      }));

      setBlogs(formatted);
      setTotalPages(total);
      setCurrentSlide(0);
    } catch (err: unknown) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <main className="pb-5">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 global-container">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-9 bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-transparent">
                Our Latest
                <br />
                Tech Blogs
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-white p18 justify-self-end">
              Explore our latest tech blogs to stay informed on trends, innovations, and best practices across industries, helping you leverage technology effectively for business growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 global-container">
          {/* Header part */}
          <div className="mb-[2.25rem] grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="tracking-tight text-[#000000]">
                Check Out Our Newly
                <br />
                Written Tech Blogs
              </h2>
            </div>

            <div className="flex h-full items-end">
              <p className="w-full text-right text-[#374151]">
                Stay updated with our newly written tech blogs, covering trends, insights, and innovations to help your business stay ahead.
              </p>
            </div>
          </div>

         
{/* Carousel Section */}
<div className="mx-auto w-[100%] relative mb-16 group">
  {/* Carousel Container */}
  <div className="relative h-[640px] overflow-hidden rounded-[22px] shadow-lg">
    {featuredBlogs.length > 0 ? (
      featuredBlogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
              className="object-cover brightness-75"
              priority={index === 0}
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent px-[4.375rem] pb-[3rem] text-white cursor-pointer"
  onClick={() => router.push(`/blog/${blog.slug}`)}
>
  <div className="inset-0 mb-[4.896vw] flex items-center justify-between">
    {featuredBlogs.length > 1 && (
      <>
        {/* Previous Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className={`
            nav-round-btn top-1/2 transform -translate-y-1/2 
            w-16 h-16 flex items-center justify-center 
            transition-all duration-300 hover:bg-black z-20 
            relative overflow-hidden
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}
          aria-label="Previous slide"
        >
          {/* Half Circle Rotating Border */}
          <div className="blog-loader"></div>
          
          {/* Inner background */}
          <div className="absolute inset-0.5 bg-black rounded-[38px]"></div>
          
          <svg 
            className="w-9 h-9 text-white relative z-10" 
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
            e.stopPropagation();
            nextSlide();
          }}
          className={`
            nav-round-btn top-1/2 transform -translate-y-1/2 
            w-16 h-16 flex items-center justify-center 
            transition-all duration-300 hover:bg-black z-20 
            relative overflow-hidden
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}
          aria-label="Next slide"
        >
          {/* Half Circle Rotating Border */}
          <div className="blog-loader"></div>
          
          {/* Inner background */}
          <div className="absolute inset-0.5 bg-black rounded-[38px]"></div>
          
          <svg 
            className="w-9 h-9 text-white relative z-10" 
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

  <div className="mb-[0.938vw] text-[#E5E7EB] flex items-center space-x-2 font-normal p18 opacity-90">
    <span className="rounded-full border border-[#E5E7EB] px-[1.042vw] py-[0.521vw] backdrop-blur-md">
      {blog.category}
    </span>
    <span>• {blog?.readTime}</span>
  </div>

  <h2 className="mb-[0.938vw] ">{blog.title}</h2>
  <div className="flex items-center space-x-2 font-normal text-xl">
    <Image
      src={blog?.authPic}
      alt={"Author"}
      width={40}
      height={40}
      className="w-10 h-10 object-cover rounded-full border-2 border-white/80"
    />
    <span className="font-medium p20">{blog?.author}</span>
    <span className="opacity-80 p18">• {blog.date}</span>
  </div>
  
  {/* Description on Hover */}
  <div className={`mt-4 transition-all duration-300 ease-in-out ${
    isHovering ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
  } overflow-hidden`}>
    <p className="text-white/90 text-lg leading-relaxed line-clamp-2">
      {blog.desc ? blog.desc.replace(/<[^>]*>/g, '') : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."}
    </p>
  </div>
</div>
        </div>
      ))
    ) : (
      !loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-[22px]">
          <p className="text-gray-500 text-lg">No featured blogs available</p>
        </div>
      )
    )}
  </div>
</div>
          {/* Rest of the code remains exactly the same */}
          {/* Category Section */}
          <div className="flex flex-col py-16">
            <h2 className="mb-9 text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
              Browse By Category
            </h2>

            <div className="flex flex-wrap justify-between gap-4">
              {cardData.map((card, index) => {
                const isSelected = selectedCategory === card.id;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentPage(1);
                      setSelectedCategory(
                        selectedCategory === card.id ? null : card.id
                      );
                    }}
                  >
                    <TechCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      isSelected={isSelected}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blog Grid Section */}
          <div className="pb-16">
            <h2 className="mb-9 tracking-tight text-[#000000]">Browse Latest Blog</h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blogs found for the selected category.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-[3.375rem] md:grid-cols-2 lg:grid-cols-3">
                  {blogs.map((blog, index) => (
                    <BlogCard key={`${blog.id}-${index}`} blog={blog} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-left mt-[2.063rem]">
                    <ul className="flex items-center gap-2 p20 font-medium">
                      {/* First */}
                      <li
                        className={`px-4 py-2 flex items-center border rounded-md cursor-pointer ${
                          currentPage === 1
                            ? "cursor-not-allowed border-gray-300 text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage > 1 && setCurrentPage(1)}
                      >
                        <svg
                          className="w-5 h-5 inline-block mr-1"
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
                        className={`px-4 flex items-center py-2 border rounded-md cursor-pointer ${
                          currentPage === 1
                            ? "border-gray-300 cursor-not-allowed text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage > 1 && setCurrentPage((p) => Math.max(1, p - 1))}
                      >
                        <svg
                          className="w-5 h-5 inline-block mr-1"
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
                        const pages = [];
                        const maxVisible = 5;
                        let start = Math.max(1, currentPage - 2);
                        const end = Math.min(totalPages, start + maxVisible - 1);
                        if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);

                        if (start > 1) {
                          pages.push(
                            <li
                              key={1}
                              onClick={() => setCurrentPage(1)}
                              className={`px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 ${
                                currentPage === 1 ? "bg-black text-white" : ""
                              }`}
                            >
                              1
                            </li>
                          );

                          if (start > 2)
                            pages.push(
                              <li
                                key="dots-start"
                                className="px-4 py-2 border rounded-md cursor-default text-gray-500 select-none"
                              >
                                ...
                              </li>
                            );
                        }

                        for (let i = start; i <= end; i++) {
                          pages.push(
                            <li
                              key={i}
                              onClick={() => setCurrentPage(i)}
                              className={`px-4 py-2 border rounded-md cursor-pointer transition-all duration-200 ${
                                currentPage === i
                                  ? "bg-black text-white border-black"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {i}
                            </li>
                          );
                        }

                        if (end < totalPages) {
                          if (end < totalPages - 1) pages.push(
                            <li key="dots-end" className="px-4 py-2 text-gray-500 select-none">...</li>
                          );
                          pages.push(
                            <li
                              key={totalPages}
                              onClick={() => setCurrentPage(totalPages)}
                              className={`px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 ${
                                currentPage === totalPages ? "bg-black text-white border-black" : ""
                              }`}
                            >
                              {totalPages}
                            </li>
                          );
                        }

                        return pages;
                      })()}

                      {/* Next */}
                      <li
                        className={`px-4 py-2 flex items-center border rounded-md cursor-pointer ${
                          currentPage === totalPages
                            ? "border-gray-300 cursor-not-allowed text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage < totalPages && setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      >
                        Next
                        <svg
                          className="w-5 h-5 inline-block ml-1"
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
                        className={`px-4 py-2 flex items-center border rounded-md cursor-pointer ${
                          currentPage === totalPages
                            ? "border-gray-300 cursor-not-allowed text-gray-400"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => currentPage < totalPages && setCurrentPage(totalPages)}
                      >
                        Last
                        <svg
                          className="w-5 h-5 inline-block ml-1"
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