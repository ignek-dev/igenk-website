"use client";

import Image from "next/image";
import { useState } from "react";

const caseStudies = Array(25)
    .fill(0)
    .map((_, i) => ({
        id: i + 1,
        title: "Music License Management Portal : Onboarding & Data Integrity",
        category: "Corporate",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        image: "/mock-image.png", // replace with your own image
        tags: ["Java", "Bootstrap", "Kinesis", "MySql", "React"],
    }));

export default function PortfolioList() {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;
    const totalPages = Math.ceil(caseStudies.length / perPage);
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return (
        <section className="w-full md:w-3/4 lg:w-4/5">
            <div className="grid gap-6">
                {caseStudies.slice(start, end).map((item, index) => {
                    const isImageLeft = index % 2 === 0;

                    return (
                        <div
                            key={item.id}
                            className={`group bg-white rounded-2xl shadow-sm p-5 flex flex-col md:flex-row gap-5 overflow-hidden transition-all duration-500 hover:shadow-lg ${!isImageLeft ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 w-full relative overflow-hidden rounded-xl">
                                <Image
                                    src={"/images/portfolio/portfolioImg.png"}
                                    alt={item.title}
                                    className="object-cover max-h-[440px] w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                                    height={340}
                                    width={574}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col justify-center p-[46px] md:w-1/2 w-full relative">
                                <span className="text-lg bg-gray-100 px-3 py-1 rounded-full w-fit mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-3xl font-semibold leading-snug mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-4">{item.description}</p>

                                {/* Read More Button (Animated on Hover) */}
                                <div className="transition-all duration-500 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition w-full py-6 px-4 text-xl">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
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
