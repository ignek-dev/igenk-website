"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface WPPortfolioPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: {
        ["wp:featuredmedia"]?: { source_url: string }[];
    };
}

export default function PortfolioList() {
    const [posts, setPosts] = useState<WPPortfolioPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const PER_PAGE = 5;
    const API_BASE = "https://www.ignek.com/wp-json/wp/v2/portfolio";

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
                const res = await fetch(`${API_BASE}?per_page=${PER_PAGE}&page=${currentPage}&_embed`, {
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
        }

        fetchPosts();
    }, [currentPage]);

    if (loading)
        return <div className="p-10 text-center text-gray-500 text-lg">Loading...</div>;
    if (error)
        return (
            <div className="p-10 text-center text-red-500 text-lg">
                ❌ {error}
            </div>
        );

    return (
        <section className="w-full md:w-3/4 lg:w-4/5">
            <div className="grid gap-6">
                {posts.map((item, index) => {
                    const isImageLeft = index % 2 === 0;
                    const imageUrl =
                        item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/images/portfolio/portfolioImg.png";

                    return (
                        <div
                            key={item.id}
                            className={`group bg-white rounded-2xl shadow-sm p-5 flex flex-col md:flex-row gap-5 overflow-hidden transition-all duration-500 hover:shadow-lg ${!isImageLeft ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 w-full relative overflow-hidden rounded-xl">
                                <Image
                                    src={imageUrl}
                                    alt={item.title.rendered}
                                    className="object-contain max-h-[350px] w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                                    height={350}
                                    width={574}
                                />
                                
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col justify-center p-[46px] md:w-1/2 w-full relative">
                                <span className="text-lg bg-gray-100 px-3 py-1 rounded-full w-fit mb-2">
                                    Corporate
                                </span>
                                {/* <div className="flex flex-wrap gap-3">
                                    {commonProvidedServices.map((service, idx) => (
                                        <TechnologyChip key={idx} iconSrc={service.iconSrc} name={service.name} />
                                    ))}
                                </div> */}
                                <h3
                                    className="text-3xl font-semibold leading-snug mb-2 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                                />
                                <p
                                    className="text-lg text-gray-600 mb-4 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                                />
                                {/* Read More Button */}
                                <div className="transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition w-full text-xl"

                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-start mt-10">
                <ul className="flex gap-2 text-lg">
                    <li
                        className={`px-3 py-1 border rounded-lg cursor-pointer ${currentPage === 1
                            ? "text-gray-400 border-gray-300"
                            : "hover:bg-indigo-50"
                            }`}
                        onClick={() => setCurrentPage(1)}
                    >
                        « First
                    </li>
                    <li
                        className={`px-3 py-1 border rounded-lg cursor-pointer ${currentPage === 1
                            ? "text-gray-400 border-gray-300"
                            : "hover:bg-indigo-50"
                            }`}
                        onClick={() =>
                            setCurrentPage((p) => Math.max(1, p - 1))
                        }
                    >
                        ‹ Back
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <li
                            key={i}
                            className={`px-3 py-1 border rounded-lg cursor-pointer ${currentPage === i + 1
                                ? "bg-indigo-600 text-white"
                                : "hover:bg-indigo-50"
                                }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </li>
                    )).slice(0, 5)}

                    <li
                        className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-indigo-50"
                        onClick={() =>
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                    >
                        Next ›
                    </li>
                    <li
                        className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-indigo-50"
                        onClick={() => setCurrentPage(totalPages)}
                    >
                        Last »
                    </li>
                </ul>
            </div>
        </section>
    );
}
