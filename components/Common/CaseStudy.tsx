"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react"
import { WPPortfolioPost } from "components/PortfolioList/PortfolioList";
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

const CaseStudy: React.FC<CaseStudyCarouselProps> = ({ caseStudies }) => {
  console.log(caseStudies)
  const [activeIndex, setActiveIndex] = useState(0)
  const [posts, setPosts] = useState<WPPortfolioPost[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const currentPage = 1
  const router = useRouter();
  const PER_PAGE = 10;
  const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio";
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 10)
    }, 4000)
    return () => clearInterval(interval)
  }, [])


  const fetchPosts = useCallback(async () => {
    try {
      // setLoading(true);
      // setError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Build API params dynamically
      const params = new URLSearchParams({
        per_page: String(PER_PAGE),
        page: String(currentPage),
        _embed: "",
      });
      const res = await fetch(`${API_BASE}?${params.toString()}`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data = (await res.json()) as WPPortfolioPost[];
      // const total = Number(res.headers.get("x-wp-totalpages")) || 1;
      setPosts(data);
      // setTotalPages(total);
    } catch (err: unknown) {
      console.log(err)
      // if (err instanceof Error) setError(err.message);
      // else setError("Failed to fetch posts");
    } finally {
      // setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <section className="overflow-hidden bg-black py-16 text-white">
      <div className="max-w-7xl px-[192px]">
        <h2 className="mb-10 px-4 text-3xl font-semibold">Related Case Studies</h2>

        <div className="relative flex transition-transform duration-700 ease-in-out">
          {posts.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[1176px] flex-shrink-0 px-4 transition-transform duration-[2000ms] md:px-4"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${posts.length * 100}%`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="flex flex-col gap-8 rounded-2xl border border-gray-800 bg-[#0f0f0f] p-4 md:flex-row">
                {/* Image */}
                <div className="h-[318px] w-[420px] flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/portfolio/portfolioImg.png"}
                    alt={item.title.rendered}
                    width={420}
                    height={300}
                    objectFit="cover"
                    className="rounded-xl h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <span className="mb-0 inline-block w-[max-content] rounded-full border border-cyan-400 px-4 py-1 text-sm font-medium text-cyan-400">
                    {item._embedded?.["wp:term"]?.[0]?.[0]?.name || "General"}
                  </span>
                  <h3 className="mb-2 text-2xl leading-snug font-bold md:text-3xl"
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                  <p className="mb-2 text-base leading-relaxed text-gray-400 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                  />
                  <button className="w-[max-content] rounded-2xl border border-cyan-400 px-4 py-2 text-sm font-medium text-white transition-all hover:text-cyan-400 cursor-pointer"
                    onClick={() => router.push(`/case-study/id/${item.id}`)}
                  >
                    Read case study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
