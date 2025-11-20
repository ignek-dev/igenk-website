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
import { blogCSSLink } from "data/blogCss";

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
                width: "fit-content",
                background: "#f6f6f6",
                margin: "20px 0",
                fontFamily: "Arial, sans-serif",
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

    if (loading) return <p>Loading post…</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!post) return null;

    const cleanHTML = post?.content?.rendered
    return (
        <>
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 .global-container">
                    <div className="text-center flex flex-col items-center justify-center px-6 py-16">
                        <h1 className="bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                            {post?.title?.rendered || "Untitled"}
                        </h1>

                        <div className="max-w-2xl mt-6 text-2xl font-normal text-gray-200 sm:text-xl md:mt-10">
                            <div className="flex items-center mt-4 space-x-2  text-white">
                                <Image
                                    src={post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/images/blogs/blogAuthor.png"}
                                    alt={"authorI"}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-cover rounded-full border border-gray-200"
                                />
                                <span className="">{post._embedded?.author?.[0]?.name || "Bhavin Panchani"}</span>
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
            <div className="blog-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-8 border-r border-[#E3E3E3]">
                        <article className="wp-post font-sans">
                            <div
                                ref={contentRef}
                                className="entry-content prose max-w-none text-gray-800 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: cleanHTML }}
                            />
                            <div className="px-[80px] mb-[40px]">
                                <ExploreServices />
                            </div>
                        </article>
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-4">
                        <BlogSidebar
                            categoryId={post?.categories?.[0] ?? 0}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
