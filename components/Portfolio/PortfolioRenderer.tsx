"use client"
import Prism from "prismjs";
import { useEffect, useRef, useState } from "react";

import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import "./PortfolioRenderer.css";


// --- TypeScript type for WordPress portfolio post ---
interface WPPortfolioPost {
    title: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
    };
}

const POST_API = "https://www.ignek.com/wp-json/wp/v2/portfolio/32555?_embed";

export default function PortfolioRenderer() {
    const [post, setPost] = useState<WPPortfolioPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // --- Fetch post from WordPress ---
    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(POST_API);
                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
                const data = (await res.json()) as WPPortfolioPost;
                setPost(data);

            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Failed to fetch post");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, []);

    // --- Highlight code blocks with Prism ---
    useEffect(() => {
        if (post && contentRef.current) {
            Prism.highlightAllUnder(contentRef.current);
        }
    }, [post]);

    if (loading) return <p>Loading…</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!post) return null;

    return (
        <>
            <main className="pb-16" >
                {/* Hero */}
                <section className="relative bg-black text-white">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                    <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
                        <div className="text-center">
                            <div>
                                <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                                   Enterprise Website Redesign : Multilingual Waste Management Solutions with Enhanced User Experience
                                </h1>
                            </div>
                            <p className="text-lg text-white sm:text-lg md:mt-16">
                               We developed Enterprise Website Redesign for a waste management company, transforming their online presence. The new site includes dynamic home pages with videos, multilingual support, and integrated social feeds, ensuring users can access services and information with ease. The redesigned site offers improved user experience and multilingual capabilities, catering to a diverse audience.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <div className="portfolio-page">
                <article className="portfolio-article">
                    <h1
                        className="portfolio-title"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    {/* {featured && (
                    <div className="portfolio-featured">
                        <Image src={featured} alt={post.title.rendered} 
                        width={100}
                        height={100}
                        />
                    </div>
                )} */}
                    <div
                        className="portfolio-content elementor-content"
                        ref={contentRef}
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </article>
            </div>
        </>
    );
}
