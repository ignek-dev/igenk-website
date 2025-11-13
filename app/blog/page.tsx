"use client"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import BlogCard, { BlogData } from "components/Blogmain/BlogCards"
import TechCard from "components/Blogmain/TechCards"
import { WPPost } from "components/BlogSidebar/BlogSidebar"

const blogsCardData = [
  {
    id: 1,
    icon: "/images/blogs/blog1.jpg", // Note: Update paths to your images
    authorName: "Bhavin Panchani",
    time: "6 mins read",
    title: "Comparison of Client Extensions and OSGi: Modern vs Traditional Liferay Development",
    category: "Liferay Blog",
    date: "Jul 7, 2025",
  },
]
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
  // {
  //   icon: "/images/blogs/liferayIcon.png",
  //   title: "Node Js",
  //   description: "Explore strategies, leadership skills, and growth tactics for",
  // },
]
// interface WPBlogPost {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   date: string;
//   _embedded?: {
//     author?: { name: string }[];
//     "wp:featuredmedia"?: { source_url: string }[];
//   };
// }

const PER_PAGE = 9;
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(15);

  // --- Fetch posts dynamically from WordPress API ---
  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      // setError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Prepare category filter query
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
        title: post.title?.rendered || "Untitled",
        author: post._embedded?.author?.[0]?.name || "Bhavin Panchani",
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
        authPic:
          post._embedded?.author?.[0]?.avatar_urls?.["96"] ||
          "/images/blogs/blogAuthor.png",
      }));

      setBlogs(formatted);
      setTotalPages(total);
    } catch (err: unknown) {
      // if (err instanceof Error) setError(err.message);
      // else setError("Failed to fetch blogs");
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
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-9 bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-7xl leading-tight font-bold text-transparent sm:text-5xl md:text-7xl">
                Our Latest
                <br />
                Tech Blogs
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Explore our latest tech blogs to stay informed on trends, innovations, and best practices across industries, helping you leverage technology effectively for business growth and operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Header part */}
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
                Check Out Our Newly
                <br />
                Written Tech Blogs
              </h2>
            </div>

            <div className="flex h-full items-end justify-end">
              <p className="text-normal line-height-[30px] w-full text-right text-xl text-[#374151]">
                Stay updated with our newly written tech blogs, covering trends, insights, and innovations to help your business stay ahead.
              </p>
            </div>
          </div>
          {/* <main className="p-6">
      <BlogCarousel />
    </main> */}

          <div className="mx-auto grid h-[640px] w-[100%] gap-6">
            {blogsCardData.map((blog) => (
              <div key={blog.title} className="relative cursor-pointer overflow-hidden rounded-[22px] shadow-lg">
                {/* Background Image */}
                <div className="relative h-[640px] w-full">
                  <Image
                    src={blog.icon}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover brightness-75"
                    priority
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
                  <div className="mb-[1.125rem] flex items-center space-x-2 text-sm opacity-90">
                    <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">{blog.category}</span>
                    <span>• {blog.time}</span>
                  </div>

                  <h2 className="mb-[1.125rem] text-lg leading-snug font-semibold">{blog.title}</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <Image
                      src={blog.icon}
                      alt={blog.authorName}
                      // width={40}
                      // height={40}
                      // className="rounded-[50%] border-2 border-white/80"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded-full border-2 border-white/80"
                    />
                    <span className="font-medium">{blog.authorName}</span>
                    <span className="opacity-80">• {blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col py-16">
            {/* Section Title */}
            <h2 className="mb-6 text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
              Browse By Category
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {cardData.map((card, index) => {
                const isSelected = selectedCategory === card.id; // ✅ compare id to id
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentPage(1); // reset pagination
                      // ✅ toggle select by id
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
          <div className="pb-16">
            <h2 className="mb-6 text-5xl leading-tight font-semibold tracking-tight text-[#000000]">Browse Latest Blog</h2>
            <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
              {
                loading ? (
                  <p>Loading post…</p>
                ) : (
                  blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                  ))
                )
              }

            </div>

            <div className="flex justify-left mt-10">
              <ul className="flex items-center gap-2 text-base font-medium">
                {/* First */}
                <li
                  className={`px-4 py-2 border rounded-md cursor-pointer ${currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={() => currentPage > 1 && setCurrentPage(1)}
                >
                  « First
                </li>

                {/* Back */}
                <li
                  className={`px-4 py-2 border rounded-md cursor-pointer ${currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={() => currentPage > 1 && setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  ‹ Back
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
                        className={`px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 ${currentPage === 1 ? "bg-black text-white" : ""
                          }`}
                      >
                        1
                      </li>
                    );
                    if (start > 2)
                      pages.push(<li key="dots-start" className="px-2 text-gray-500 select-none">...</li>);
                  }

                  for (let i = start; i <= end; i++) {
                    pages.push(
                      <li
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`px-4 py-2 border rounded-md cursor-pointer transition-all duration-200 ${currentPage === i
                          ? "bg-black text-white border-black"
                          : "hover:bg-gray-100"
                          }`}
                      >
                        {i}
                      </li>
                    );
                  }

                  if (end < totalPages) {
                    if (end < totalPages - 1)
                      pages.push(<li key="dots-end" className="px-2 text-gray-500 select-none">...</li>);
                    pages.push(
                      <li
                        key={totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 ${currentPage === totalPages ? "bg-black text-white border-black" : ""
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
                  className={`px-4 py-2 border rounded-md cursor-pointer ${currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={() => currentPage < totalPages && setCurrentPage((p) => Math.min(totalPages, p + 1))}
                >
                  Next ›
                </li>

                {/* Last */}
                <li
                  className={`px-4 py-2 border rounded-md cursor-pointer ${currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                    }`}
                  onClick={() => currentPage < totalPages && setCurrentPage(totalPages)}
                >
                  Last »
                </li>
              </ul>
            </div>



          </div>
        </div>
      </section>
    </main>
  )
}
