"use client"
import Prism from "prismjs";
import React, { useEffect, useRef, useState } from "react";

import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import "../../../../components/Portfolio/PortfolioRenderer.css";
import { BlogSection } from "components/Common";
import CaseStudy from "components/Common/CaseStudy";

const caseStudies = [
    {
        id: 1,
        image: "/images/liferay-pages-image/caseStudy.png",
        tag: "Corporate",
        title: "Music License Management Portal: Onboarding & Data Integrity",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    },
    {
        id: 2,
        image: "/images/liferay-pages-image/caseStudy.png",
        tag: "FinTech",
        title: "Transforming Financial Services with Innovations",
        description:
            "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
        id: 3,
        image: "/images/liferay-pages-image/caseStudy.png",
        tag: "Healthcare",
        title: "Digital Health Platform: Patient-Centric Solutions",
        description:
            "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
    },
    {
        id: 4,
        image: "/images/liferay-pages-image/caseStudy.png",
        tag: "E-commerce",
        title: "Scaling Online Retail with Cloud Technologies",
        description:
            "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
    },
]

// --- TypeScript type for WordPress portfolio post ---
interface WPPortfolioPost {
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
    };
}

export default function PortfolioRenderer({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);

    const [post, setPost] = useState<WPPortfolioPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // --- Load external CSS dynamically ---
    useEffect(() => {
        const cssUrls = [
            "https://www.ignek.com/wp-content/litespeed/css/ad83c34674cf09f56d46e7ed16b9ba6d.css?ver=ac0b8",
            "https://www.ignek.com/wp-content/litespeed/css/e5f517224ca259b2712b7381a2ffa7f0.css?ver=78aff",
            "https://www.ignek.com/wp-content/litespeed/css/0bbfb2c9170dc57a341ba754dd2e7b93.css?ver=13339",
            "https://www.ignek.com/wp-content/litespeed/css/3cd06061990ac340055b721bdb7e91bb.css?ver=5aefa",
            "https://www.gstatic.com/recaptcha/releases/naPR4A6FAh-yZLuCX253WaZq/styles__ltr.css",
            "https://www.ignek.com/wp-content/litespeed/css/641b8ac492ae62e0937c42f5a415e82e.css?ver=d61f9"
        ];

        const links: HTMLLinkElement[] = [];

        cssUrls.forEach((href) => {
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

    // --- Fetch post from WordPress ---
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://insights.ignek.com/wp-json/wp/v2/portfolio/${id}?_embed`);
                if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
                const data = (await res.json()) as WPPortfolioPost;
                setPost(data);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Failed to fetch post");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    // --- Prism syntax highlighting ---
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
            <main className="pb-16">
                <section className="relative bg-black text-white">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                    <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
                        <div className="text-center">
                            <h1
                                className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-7xl"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />

                            <p className="text-lg text-white sm:text-lg md:mt-16"
                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                            />

                        </div>
                    </div>
                </section>
            </main>

            <div className="portfolio-page pb-10">
                <article className="portfolio-article">
                    <div
                        className="portfolio-content elementor-content m-0"
                        ref={contentRef}
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </article>
            </div>
            <CaseStudy caseStudies={caseStudies} />
            <BlogSection />
        </>
    );
}
