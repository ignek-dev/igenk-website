"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import MarqueeOverlay from "components/MarqueeOverlay/MarqueeOverlay";
import Filters from "components/PortfolioFilters/Filters";
import Loader from "components/UI/Loader/Loader";

export interface WPPortfolioPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: {
        ["wp:featuredmedia"]?: { source_url: string }[];
        ["wp:term"]?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
    };
    slug: string
}

export default function PortfolioList() {
    const [posts, setPosts] = useState<WPPortfolioPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState<number | null>(-1);
    const [selectedTechnology, setSelectedTechnology] = useState<number | null>(-1);
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
    const router = useRouter();
    const PER_PAGE = 6;
    const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio";

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedSearch(searchTerm), 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const fetchPosts = useCallback(async (reset: boolean = true, pageNumber: number = currentPage) => {
        try {
            if (reset) { 
                setCurrentPage(1);
                pageNumber = 1;
            }
            setLoading(true);
            setError(null);
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Build API params dynamically
            const params = new URLSearchParams({
                per_page: String(PER_PAGE),
                page: String(pageNumber),
                _embed: "",
            });

            if (debouncedSearch) params.append("search", debouncedSearch);
            if (selectedIndustry !== null && selectedIndustry !== 0 && selectedIndustry !== -1) {
                params.append("case-study-category", String(selectedIndustry));
            }

            if (selectedTechnology !== null && selectedTechnology !== 0 && selectedTechnology !== -1) {
                params.append("case-study-category", String(selectedTechnology));
            }

            const res = await fetch(`${API_BASE}?${params.toString()}`, {
                cache: "no-store",
            });

            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

            let data = (await res.json()) as WPPortfolioPost[];
            const total = Number(res.headers.get("x-wp-totalpages")) || 1;

            if (data.length > 0 && debouncedSearch) {
                data = [...data].sort((a, b) => {
                    const s = debouncedSearch.toLowerCase();
                    const aMatch = a.title.rendered.toLowerCase().includes(s) ? 1 : 0;
                    const bMatch = b.title.rendered.toLowerCase().includes(s) ? 1 : 0;

                    return bMatch - aMatch;
                });
            }
            setPosts(data);
            setTotalPages(total);
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch, selectedIndustry, selectedTechnology]);

    const handlePageChange = async (page: number) => {
        await setCurrentPage(page);
        fetchPosts(false, page);
    }

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    console.log(error)
    return (
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-[3.073vw] pt-0 pb-0 bg-[#F9FAF7] ">
            <Filters
                search={searchTerm}
                setSearch={setSearchTerm}
                selectedIndustry={selectedIndustry}
                setSelectedIndustry={setSelectedIndustry}
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
            />
            <section className="w-full lg:w-4/5">
                {
                    loading ? (
                        <div className="flex w-full min-h-[50vh] items-center justify-center">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {posts?.length > 0 ? (
                                <>
                                    {posts.map((item, index) => {
                                        const isImageLeft = index % 2 === 0;
                                        const imageUrl =
                                            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                            "/images/portfolio/portfolioImg.png";

                                        return (
                                            <div
                                                key={item.id}
                                                className={`py-8 md:py-12 ${index === 0 ? "pt-0" : ""} ${index < posts.length - 1 ? "border-b border-gray-300" : ""
                                                    }`}
                                            >
                                                <div
                                                    className={`group bg-[#F9FAF7] pb-0 pt-0 flex flex-col md:flex-row gap-6 lg:gap-[2.396vw] overflow-hidden transition-all duration-500 ${!isImageLeft ? "md:flex-row-reverse" : ""
                                                        }`}
                                                >
                                                    {/* Image */}
                                                    <div className="relative h-[250px] w-full rounded-xl lg:h-[17.76vw] lg:w-[29.896vw]">
                                                        <Image
                                                            src={imageUrl}
                                                            alt={item.title.rendered}
                                                            className="object-cover h-full w-full rounded-xl transition-transform duration-500"
                                                            height={341}
                                                            width={574}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[46.19%] to-black/79 to-100% pointer-events-none rounded-xl" />

                                                        <MarqueeOverlay />
                                                    </div>


                                                    {/* Text */}
                                                    <div className="relative flex w-full flex-col justify-center gap-3 md:w-1/2 lg:gap-[0.729vw]">
                                                        <div className="flex flex-wrap mb-2 gap-2 lg:gap-[0.52vw] lg:mb-[0.729vw]">
                                                            {item._embedded?.["wp:term"]?.[0] && item._embedded?.["wp:term"]?.[0]?.length > 0 && (
                                                                item._embedded?.["wp:term"]?.[0].map((term) => (
                                                                    <span key={term?.name} className="w-fit rounded-full bg-white px-3 py-1 text-xs shadow-md lg:px-[0.833vw] lg:py-[0.4167vw] lg:text-[0.677vw] lg:shadow-xl">
                                                                        {term?.name || "General"}
                                                                    </span>
                                                                ))
                                                            )}
                                                        </div>


                                                        <h3
                                                            className="text-2xl! font-semibold! leading-tight! text-gray-900 lg:text-[1.563vw]! lg:leading-[1.563vw]!"
                                                            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                                                        />

                                                        <p
                                                            className="line-clamp-3 text-sm text-[#4B5563] lg:text-[0.833vw] lg:leading-[1.25vw]"
                                                            dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                                                        />

                                                        <div className="transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                                            <button
                                                                onClick={() => router.push(`/case-study/${item.slug}`)}
                                                                className="w-full cursor-pointer rounded-full bg-[#0C64CE] px-6 py-2 text-base text-white shadow-md transition hover:bg-[#0C64CE] lg:px-[1.25vw] lg:py-[0.52vw] lg:text-[1.0417vw]"
                                                            >
                                                                Read More
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                    {/* Pagination */}
                                    <div className="flex justify-start">
                                        <ul className="flex items-center gap-2 text-sm font-medium lg:text-[1.021vw] lg:leading-[1.458vw]">
                                            {/* First */}
                                            <li
                                                className={`hidden cursor-pointer rounded-md border px-3 py-2 sm:block lg:px-4 ${currentPage === 1
                                                    ? "cursor-not-allowed border-gray-300 text-gray-400"
                                                    : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() => currentPage > 1 && handlePageChange(1)}
                                            >
                                                « First
                                            </li>

                                            {/* Back */}
                                            <li
                                                className={`cursor-pointer rounded-md border px-3 py-2 lg:px-4 ${currentPage === 1
                                                    ? "cursor-not-allowed border-gray-300 text-gray-400"
                                                    : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() => currentPage > 1 && handlePageChange(Math.max(1, currentPage - 1))}
                                            >
                                                ‹ Back
                                            </li>

                                            {/* Dynamic Page Numbers */}
                                            {(() => {
                                                const pages = [];
                                                const maxVisible = 3; // Number of visible page buttons
                                                let start = Math.max(1, currentPage - 1);
                                                const end = Math.min(totalPages, start + maxVisible - 1);

                                                if (end - start < maxVisible - 1) {
                                                    start = Math.max(1, end - maxVisible + 1);
                                                }

                                                // First page + dots
                                                if (start > 1) {
                                                    pages.push(
                                                        <li
                                                            key={1}
                                                            onClick={() => handlePageChange(1)}
                                                            className={`cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100 lg:px-4 ${currentPage === 1 ? "bg-black text-white" : ""
                                                                }`}
                                                        >
                                                            1
                                                        </li>
                                                    );
                                                    if (start > 2) {
                                                        pages.push(
                                                            <li key="dots-start" className="px-2 text-gray-500 select-none">
                                                                ...
                                                            </li>
                                                        );
                                                    }
                                                }

                                                // Visible pages
                                                for (let i = start; i <= end; i++) {
                                                    pages.push(
                                                        <li
                                                            key={i}
                                                            onClick={() => handlePageChange(i)}
                                                            className={`cursor-pointer rounded-md border px-3 py-2 transition-all duration-200 lg:px-4 ${currentPage === i
                                                                ? "bg-black text-white border-black"
                                                                : "hover:bg-gray-100"
                                                                }`}
                                                        >
                                                            {i}
                                                        </li>
                                                    );
                                                }

                                                // Dots + last page
                                                if (end < totalPages) {
                                                    if (end < totalPages - 1) {
                                                        pages.push(
                                                            <li key="dots-end" className="px-2 text-gray-500 select-none">
                                                                ...
                                                            </li>
                                                        );
                                                    }
                                                    pages.push(
                                                        <li
                                                            key={totalPages}
                                                            onClick={() => handlePageChange(totalPages)}
                                                            className={`cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100 lg:px-4 ${currentPage === totalPages ? "bg-black text-white border-black" : ""
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
                                                className={`cursor-pointer rounded-md border px-3 py-2 lg:px-4 ${currentPage === totalPages
                                                    ? "cursor-not-allowed border-gray-300 text-gray-400"
                                                    : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() =>
                                                    currentPage < totalPages && handlePageChange(Math.min(totalPages, currentPage + 1))
                                                }
                                            >
                                                Next ›
                                            </li>

                                            {/* Last */}
                                            <li
                                                className={`hidden cursor-pointer rounded-md border px-3 py-2 sm:block lg:px-4 ${currentPage === totalPages
                                                    ? "cursor-not-allowed border-gray-300 text-gray-400"
                                                    : "hover:bg-gray-100"
                                                    }`}
                                                onClick={() => currentPage < totalPages && handlePageChange(totalPages)}
                                            >
                                                Last »
                                            </li>
                                        </ul>
                                    </div>

                                </>
                            ) : (
                                <div className="p-10 text-center text-lg text-gray-500">No Data Found.</div>
                            )
                            }

                        </>
                    )
                }

            </section>
        </div>

    );
}
