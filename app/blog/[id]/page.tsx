"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
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

// TypeScript types
interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        ["wp:featuredmedia"]?: Array<{ source_url: string }>;
    };
}

export default function BlogDetails() {
    const { id } = useParams(); // ✅ Get ID from route
    const [post, setPost] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Fetch post by ID
    useEffect(() => {
        if (!id) return;

        async function fetchPost() {
            try {
                setLoading(true);
                const res = await fetch(`https://www.ignek.com/wp-json/wp/v2/posts/${id}?_embed`);
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
    }, [id]);

    // Highlight Prism syntax
    useEffect(() => {
        if (!post || !contentRef.current) return;
        Prism.highlightAllUnder(contentRef.current);
    }, [post]);

    if (loading) return <p>Loading post…</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!post) return null;

    const cleanHTML = post.content.rendered
        .replace(/\\\//g, "/")
        .replace(/<xmp>/g, "")
        .replace(/<\/xmp>/g, "");
    return (
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
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
}
