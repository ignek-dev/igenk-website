import { useEffect, useState, useRef } from "react";
import Prism from "prismjs";

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

const POST_API = "https://www.ignek.com/wp-json/wp/v2/portfolio/32548?_embed";

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

            } catch (err: any) {
                setError(err.message || "Failed to fetch post");
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

    const featured = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return (
        <main className="portfolio-page">
            <article className="portfolio-article">
                <h1
                    className="portfolio-title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                {featured && (
                    <div className="portfolio-featured">
                        <img src={featured} alt={post.title.rendered} />
                    </div>
                )}
                <div
                    className="portfolio-content elementor-content"
                    ref={contentRef}
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </article>
        </main>
    );
}
