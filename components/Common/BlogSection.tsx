"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BlogData } from "components/Blogmain/BlogCards";
import { WPPost } from "components/BlogSidebar/BlogSidebar";
import posts from "../../data/blogs.json"
import { useInView } from "../../hooks/useInView"

type BlogItem = {
  id: string
  title: string
  excerpt: string
  image: string
}
// const PER_PAGE = 4;
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts";
export default function BlogSection() {
  const list = posts as BlogItem[]
  const main = list[0]
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const currentPage = 1;
  // const [totalPages, setTotalPages] = useState(1);
  console.log("loading", error, loading)
  const fetchBlogs = useCallback(
    async (idsToFilter: number[]) => {
      try {
        setLoading(true);
        setError(null);
        window.scrollTo({ top: 0, behavior: "smooth" });

        const res = await fetch(`${API_URL}?per_page=100&categories=15&_embed`, { cache: "no-store" });

        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

        const data = (await res.json()) as WPPost[];

        // 🧠 Filter only blogs whose IDs match the given array
        const filteredData = idsToFilter.length
          ? data.filter((post) => idsToFilter.includes(post.id))
          : data;

        const formatted: BlogData[] = filteredData.map((post) => ({
          id: post.id,
          slug: post.slug,
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
          desc: post?.excerpt?.rendered || "",
        }));

        setBlogs(formatted);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const ids = [40578, 40314, 39874, 39138]; // example IDs
    fetchBlogs(ids);
  }, [fetchBlogs]);
  const router = useRouter();

  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true })
  if (blogs?.length < 1)
    return <div className="text-black">Loading.......</div>
  return (
    <section className="bg-white text-black">
      <div className="py-12 md:py-16 global-container">
        <div className="grid items-end gap-10 md:grid-cols-2 "
        >
          <h2
            className={`  ${isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
              }`}
          >
            Explore What's Shaping <br /> Digital Today
          </h2>
          <p
            className={`max-w-[100%] justify-self-center text-right text-[0.938vw] leading-relaxed text-[#101012] text-gray-700 ${isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
              }`}
          >
            Explore our blogs for expert insights, trends, and innovations driving digital transformation and shaping the future.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[1.719vw] lg:grid-cols-2  ">
          <div
            className={`flex flex-col  cursor-pointer ${isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
              }`}
            onClick={() => router.push(`/blog/${blogs[0]?.slug}`)}
          >
            <div className="overflow-hidden rounded-[1.042vw] bg-white">
              <Image
                src={blogs[0]?.image || "/images/blog.svg"}
                alt={main?.title || "Blog Post"}
                width={856}
                height={459}
                className=" object-cover max-h-[459px]"
              />
            </div>
            <h3 className="pt-[2.292vw] text-[#101012] ">
              {blogs[0]?.title || "Blog Post"}
            </h3>
            <p className="mt-[0.885vw] p18 text-[#101012] line-clamp-1  "
              dangerouslySetInnerHTML={{ __html: blogs[0]?.desc ?? "" }}
            />
            <div className="mt-3 w-full border-t border-gray-300" />
          </div>

          {/* Right: three small cards */}
          <div
            ref={sectionRef}
            className={` transition-all duration-[1500ms] ease-out ${isInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
          >
            {blogs?.slice(1).map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-[260px_1fr] m-0 items-center cursor-pointer 
                
                  }`}
                onClick={() => router.push(`/blog/${item?.slug}`)}
              >
                <div className="overflow-hidden rounded-[1.042vw] bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className=" ml-5">
                  <div className="text-[1.25vw]">{item.title}</div>
                  <p className="p16 mt-[10px] line-clamp-2  text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.desc ?? "" }}
                  />
                </div>
                <div className="col-span-2 mt-[2.031vw] mb-[2.448vw] w-full border-t border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
