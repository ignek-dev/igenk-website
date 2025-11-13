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
      <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="grid items-center gap-10 md:grid-cols-2 "
        >
          <h2
            className={`text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl [@media(min-width:1440px)]:text-4xl [@media(min-width:1520px)]:text-5xl ${isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
              }`}
          >
            Explore What's Shaping <br /> Digital Today
          </h2>
          <p
            className={`max-w-[100%] justify-self-center text-right text-xl leading-relaxed text-[#101012] text-gray-700 ${isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
              }`}
          >
            Explore our blogs for expert insights, trends, and innovations driving digital transformation and shaping the future.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16  xl:gap-20">
          <div
            className={`flex flex-col space-y-2 cursor-pointer ${isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
              }`}
            onClick={() => router.push(`/blog/${blogs[0]?.id}`)}
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src={blogs[0]?.image || "/images/blog.svg"}
                alt={main?.title || "Blog Post"}
                width={856}
                height={459}
                className="h-auto object-cover max-h-[459px] max-w-[856px]"
              />
            </div>
            <h3 className="line-height-[44px] pt-2 text-4xl font-semibold text-[#101012] md:text-3xl [@media(min-width:1440px)]:pt-15 [@media(min-width:1520px)]:pt-17 [@media(min-width:1800px)]:pt-2">
              {blogs[0]?.title || "Blog Post"}
            </h3>
            <p className="mt-2 text-lg text-[#101012] text-gray-700 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: blogs[0]?.desc ?? "" }}
            />
            <div className="mt-6 w-full border-t border-gray-300" />
          </div>

          {/* Right: three small cards */}
          <div
            ref={sectionRef}
            className={`space-y-4 transition-all duration-[1500ms] ease-out ${isInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
          >
            {blogs?.slice(1).map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-[260px_1fr] items-center gap-5 cursor-pointer ${index !== 0 && index !== blogs.length - 1 ? "mb-7" : ""
                  }`}
                onClick={() => router.push(`/blog/${item?.id}`)}
              >
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="[@media(min-width:1800px)]:pb-6">
                  <h4 className="line-height-[24px] text-xl font-semibold [@media(min-width:1440px)]:text-lg [@media(min-width:1520px)]:text-xl [@media(min-width:1820px)]:text-xl">{item.title}</h4>
                  <p className="line-height-[24px] mt-1 line-clamp-2 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.desc ?? "" }}
                  />
                </div>
                <div className="col-span-2 mt-1 w-full border-t border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
