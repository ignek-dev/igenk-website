"use client";

import Prism from "prismjs";
import React, { useEffect, useRef, useState } from "react";
import './BlogRenderer.css'

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

const POST_API = "https://insights.ignek.com/wp-json/wp/v2/posts/40578?_embed";

// 🧠 Helper: removes indentation
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

// ✅ TypeScript types
interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        ["wp:featuredmedia"]?: Array<{
            source_url: string;
        }>;
    };
}

export default function PostRenderer() {
    const [post, setPost] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // 🧭 Fetch post on mount
    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(POST_API);
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const data = (await res.json()) as WPPost;
                setPost(data);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Failed to fetch post");
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, []);

    // 🧠 Enhance content after render
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

     if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!post) return null;




    const cleanHTML = post.content.rendered
    // .replace(/\\\//g, "/")
    // .replace(/<xmp>/g, "")
    // .replace(/<\/xmp>/g, "");

    // return (
    //     <article className="wp-post" style={{ fontFamily: "Arial, sans-serif" }}>
    //         <h1
    //             className="wp-post-title"
    //             dangerouslySetInnerHTML={{ __html: post.title.rendered }}
    //         />
    //         {featured && (
    //             <div className="wp-featured-image">
    //                 <img
    //                     src={featured}
    //                     alt={post.title.rendered}
    //                     style={{
    //                         width: "100%",
    //                         maxHeight: "400px",
    //                         objectFit: "cover",
    //                         borderRadius: "8px",
    //                         margin: "20px 0",
    //                     }}
    //                 />
    //             </div>
    //         )}
    //         <div
    //             className="entry-content"
    //             ref={contentRef}
    //             dangerouslySetInnerHTML={{ __html: cleanHTML }}
    //             style={{ lineHeight: "1.6", fontSize: "16px" }}
    //         />
    //     </article>
    // );
    return (
        <div className="blog-section">
            {/* GRID LAYOUT — 4 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 ">
                {/* --- MAIN ARTICLE (3 cols) --- */}
                <div className="lg:col-span-8 border-r border-[#E3E3E3]">
                    <article className="wp-post font-sans">
                        <div
                            className="entry-content prose max-w-none text-gray-800 leading-relaxed"
                            ref={contentRef}
                            dangerouslySetInnerHTML={{ __html: cleanHTML }}
                        />
                        {/* <div className="px-[80px] mb-[40px]">
                            <ExploreServices />
                        </div> */}
                    </article>
                </div>

                {/* --- SIDEBAR (1 col) --- */}
                <div className="lg:col-span-4">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
}
