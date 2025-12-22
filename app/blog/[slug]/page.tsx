"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Prism from "prismjs";
import React, { useEffect, useRef, useState } from "react";
import "../../../components/Blog/BlogRenderer.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import BlogSidebar from "components/BlogSidebar/BlogSidebar";
import ExploreServices from "components/ExploreServices/ExploreServices";
import Loader from "components/UI/Loader/Loader";
import { blogCSSLink } from "components/Blog/blogCss";

interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    date?: string;
    _embedded?: {
        ["wp:featuredmedia"]?: Array<{ source_url: string }>;
        author?: Array<{
            name: string;
            avatar_urls?: Record<string, string>;
        }>;
    };
    categories?: number[];
}

function unindentCode(codeString: string): string {
    if (!codeString) return "";

    const trimmedCode = codeString.trim();
    const lines = trimmedCode.split("\n");

    const minIndent = lines.reduce((min, line) => {
        if (line.trim().length === 0) return min;
        const match = line.match(/^\s*/);
        const indent = match ? match[0].length : 0;
        return Math.min(min, indent);
    }, Infinity);

    const indentRegex =
        minIndent !== Infinity && minIndent > 0
            ? new RegExp(`^\\s{${minIndent}}`)
            : null;

    return lines
        .map((line) => {
            const unindentedLine = indentRegex ? line.replace(indentRegex, "") : line;
            return unindentedLine.trimEnd();
        })
        .join("\n");
}

export default function BlogDetails() {
    // ✅ The correct way to get slug
    const params = useParams();
    const slug = params.slug as string;

    const [post, setPost] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);


    useEffect(() => {

        const links: HTMLLinkElement[] = [];

        blogCSSLink.forEach((href) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
            links.push(link);
        });

        return () => {
            links.forEach((link) => document.head.removeChild(link));
        };
    }, []);

    // Fetch post by ID
    useEffect(() => {
        if (!slug) return;

        async function fetchPost() {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://insights.ignek.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
                );
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const data = (await res.json()) as WPPost[];
                setPost(data[0] ?? null);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Failed to fetch post");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [slug]);

    useEffect(() => {
        if (!post || !contentRef.current) return;

        const contentEl = contentRef.current;

        const codeElements = contentEl.querySelectorAll("pre code");
        codeElements.forEach((codeElement) => {
            codeElement.textContent = unindentCode(codeElement.textContent || "");
        });

        const preElements = contentEl.querySelectorAll("pre");
        preElements.forEach((block) => {
            block.classList.add("line-numbers");
        });

        // 🗨️ Convert blockquotes to styled <pre><code>
        const blockquotes = contentEl.querySelectorAll(".elementor-blockquote__content");


        blockquotes.forEach((blockquote) => {
            const el = blockquote as HTMLElement; // ⬅️ cast to HTMLElement
            const pre = document.createElement("pre");
            const code = document.createElement("code");

            el.style.marginLeft = "0"; // now TypeScript knows .style exists
            code.textContent = el.textContent?.trim() || "";
            pre.appendChild(code);

            Object.assign(pre.style, {
                borderLeft: "10px solid #00979e",
                background: "rgb(246, 246, 246)",
                padding: "10px 15px",
                width: "auto",
                overflow: "auto",
                margin: "0",
                marginLeft: "0",
            });

            Object.assign(code.style, {
                color: "#000000",
                whiteSpace: "pre-wrap",
                fontFamily: "Arial, sans-serif",
            });

            el.parentElement?.replaceChild(pre, el);
        });


        // 🧾 Style tables
        const tables = contentEl.querySelectorAll("table");
        tables.forEach((table) => {
            Object.assign(table.style, {
                borderCollapse: "collapse",
                width: "100%", // Changed to 100% for mobile
                maxWidth: "100%",
                background: "#f6f6f6",
                margin: "20px 0",
                fontFamily: "Arial, sans-serif",
                display: "block", // Allows scrolling on mobile if needed
                overflowX: "auto"
            });

            const rows = table.querySelectorAll("tr");
            rows.forEach((tr, index) => {
                tr.style.background = index % 2 === 0 ? "#f6f6f6" : "#eaeaea";
                const cells = tr.querySelectorAll("td");
                cells.forEach((td) => {
                    Object.assign(td.style, {
                        border: "1px solid #ccc",
                        padding: "8px 12px",
                        verticalAlign: "top",
                        color: "#000000",
                    });
                });
            });
        });

        // Highlight all code blocks
        Prism.highlightAllUnder(contentEl);
    }, [post]);

    // Highlight Prism syntax
    useEffect(() => {
        if (!post || !contentRef.current) return;
        Prism.highlightAllUnder(contentRef.current);
    }, [post]);

     if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!post) return null;

    const cleanHTML = post?.content?.rendered
    return (
        <>
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 .global-container">
                    <div className="text-center flex flex-col items-center justify-centerpx-0 py-8 lg:px-6 lg:py-16">
                        <h1 className="bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                            {post?.title?.rendered || "Untitled"}
                        </h1>

                        <div className="max-w-2xl text-lg font-normal text-gray-200 sm:text-xl mt-6 lg:text-[1.25vw] lg:mt-[2.24vw]">
                            <div className="flex items-center justify-center space-x-2 text-white text-p18 lg:text-p24">
                                <Image
                                    src={"/images/blogs/blogAuthor.png"}
                                    alt={"authorI"}
                                    width={58}
                                    height={58}
                                    className="w-10 h-10 lg:w-[3.021vw] lg:h-[3.021vw] object-cover rounded-full"
                                />
                                <span className="">{"Bhavin Panchani"}</span>
                                <span>•</span>
                                <span>{post.date
                                    ? new Date(post.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    : "Unknown date"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="blog-section pb-12 lg:pb-[2.917vw] bg-[#F9FAF7]">
                <div className="flex flex-col lg:grid lg:grid-cols-12 ">
                    {/* MAIN CONTENT */}
                    <div className="order-1 lg:col-span-8 lg:border-r lg:border-[#E3E3E3] p-5 lg:p-0">
                        <article className="wp-post">
                            <div
                                ref={contentRef}
                                className="entry-content prose max-w-none text-gray-800 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: cleanHTML }}
                            />
                            {/* <div className="px-[80px] mb-[40px]">
                                <ExploreServices />
                            </div> */}
                        </article>
                    </div>

                    {/* SIDEBAR */}
                    <div className="order-2 lg:col-span-4 mt-0">
                        <BlogSidebar
                            categoryId={post?.categories?.[0] ?? 0}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
