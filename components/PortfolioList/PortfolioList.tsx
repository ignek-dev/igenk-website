"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import MarqueeOverlay from "components/MarqueeOverlay/MarqueeOverlay";
import Filters from "components/PortfolioFilters/Filters";

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
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
    const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
    const router = useRouter();
    const PER_PAGE = 3;
    const API_BASE = "https://insights.ignek.com/wp-json/wp/v2/portfolio";

    // useEffect(() => {
    //     async function fetchPosts() {
    //         try {
    //             setLoading(true);
    //             setError(null);
    //             window.scrollTo({ top: 0, behavior: "smooth" });
    //             const res = await fetch(`${API_BASE}?per_page=${PER_PAGE}&page=${currentPage}&_embed`, {
    //                 cache: "no-store",
    //             });

    //             if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    //             const data = (await res.json()) as WPPortfolioPost[];
    //             const total = Number(res.headers.get("x-wp-totalpages")) || 1;

    //             setPosts(data);
    //             setTotalPages(total);
    //         } catch (err: unknown) {
    //             if (err instanceof Error) setError(err.message);
    //             else setError("Failed to fetch posts");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchPosts();
    // }, [currentPage]);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedSearch(searchTerm), 500);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Build API params dynamically
            const params = new URLSearchParams({
                per_page: String(PER_PAGE),
                page: String(currentPage),
                _embed: "",
            });

            if (debouncedSearch) params.append("search", debouncedSearch);
            if (selectedIndustry) params.append("industry", selectedIndustry);
            if (selectedTechnology) params.append("technology", selectedTechnology);

            const res = await fetch(`${API_BASE}?${params.toString()}`, {
                cache: "no-store",
            });

            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

            const data = (await res.json()) as WPPortfolioPost[];
            const total = Number(res.headers.get("x-wp-totalpages")) || 1;
            setPosts(data);
            setTotalPages(total);
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    }, [currentPage, debouncedSearch, selectedIndustry, selectedTechnology]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    // if (loading)
    //     return <div className="p-10 text-center text-gray-500 text-lg">Loading...</div>;
    // if (error)
    //     return (
    //         <div className="p-10 text-center text-red-500 text-lg">
    //             ❌ {error}
    //         </div>
    //     );

    console.log(error)
    return (
        <div className="flex flex-col md:flex-row gap-12 pt-0 pb-0 bg-[#F9FAF7]">
            <Filters
                search={searchTerm}
                setSearch={setSearchTerm}
                selectedIndustry={selectedIndustry}
                setSelectedIndustry={setSelectedIndustry}
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
            />
            <section className="w-full md:w-3/4 lg:w-4/5">
                {
                    loading ? (
                        <div className="p-10 text-center text-gray-500 text-lg">Loading...</div>
                    ) : (
                        <>
                            <div className="grid gap-6">
                                {
                                    posts?.length > 0 ? (
                                        <>
                                            {posts.map((item, index) => {
                                                const isImageLeft = index % 2 === 0;
                                                const imageUrl =
                                                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                    "/images/portfolio/portfolioImg.png";

                                                return (
                                                    <div
                                                        key={item.id}
                                                        className={`group bg-[#F9FAF7] rounded-xl border-2 border-gray-200 shadow-[0_6px_10px_-6px_rgba(0,0,0,0.1)] p-5 flex flex-col md:flex-row gap-5 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_15px_-6px_rgba(0,0,0,0.2)] py-0 ${!isImageLeft ? "md:flex-row-reverse" : ""
                                                            }`}
                                                    >
                                                        {/* Image Section */}
                                                        <div className="md:w-1/2 w-full relative overflow-hidden rounded-xl h-fit m-auto">
                                                            <Image
                                                                src={imageUrl}
                                                                alt={item.title.rendered}
                                                                className="object-contain  w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                                height={330}
                                                                width={574}
                                                            />
                                                            <MarqueeOverlay />
                                                        </div>

                                                        {/* Text Section */}
                                                        <div className="flex flex-col justify-center p-[46px] md:w-1/2 w-full relative">
                                                            <span className="text-lg bg-white px-4 py-1 rounded-full w-fit mb-2">
                                                                {item._embedded?.["wp:term"]?.[0]?.[0]?.name || "General"}
                                                            </span>
                                                            <h3
                                                                className="text-3xl font-semibold leading-snug mb-2"
                                                                dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                                                            />
                                                            <p
                                                                className="text-lg text-gray-600 mb-4 line-clamp-3"
                                                                dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                                                            />
                                                            {/* Read More Button */}
                                                            <div className="transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                                                <button
                                                                    onClick={() => router.push(`/case-study/${item.slug}`)}
                                                                    className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition w-full text-xl cursor-pointer"
                                                                >
                                                                    Read More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}  {/* Pagination */}
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

                                                    {/* Dynamic Page Numbers */}
                                                    {(() => {
                                                        const pages = [];
                                                        const maxVisible = 5; // Number of visible page buttons
                                                        let start = Math.max(1, currentPage - 2);
                                                        const end = Math.min(totalPages, start + maxVisible - 1);

                                                        if (end - start < maxVisible - 1) {
                                                            start = Math.max(1, end - maxVisible + 1);
                                                        }

                                                        // First page + dots
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
                                                        onClick={() =>
                                                            currentPage < totalPages && setCurrentPage((p) => Math.min(totalPages, p + 1))
                                                        }
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

                                        </>
                                    ) : (
                                        <div className="p-10 text-center text-gray-500 text-lg">No Data Found.</div>
                                    )
                                }

                            </div>


                        </>
                    )
                }

            </section>
        </div>

    );
}
