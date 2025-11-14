"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BlogData } from "components/Blogmain/BlogCards";
import { IconFacebook, IconLinkedIn, IconX } from "components/Navigation/CompanyMegaMenu";

export interface WPPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    excerpt?: { rendered: string };
    date?: string;
    _embedded?: {
        author?: Array<{
            name: string;
            avatar_urls: Record<string, string>;
        }>;
        ["wp:featuredmedia"]?: Array<{ source_url: string }>;
        ["wp:term"]?: Array<Array<{ name: string }>>;
    };
    slug: string;

}
// const PER_PAGE = 3;
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts";
export const WhatsappIcon = () => (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="#FAFAFA" />
    </svg>
)
export const MainIcon = () => (
    <svg width="22" height="22" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="white" />
    </svg>
)
interface BlogSidebarProps {
    categoryId?: number; // ✅ make it optional or required
}
const BlogSidebar = ({ categoryId }: BlogSidebarProps) => {
    const socialLinks = [
        { icon: <IconLinkedIn />, href: "https://www.linkedin.com/company/ignek-infotech/about/", label: "LinkedIn" },
        { icon: <IconFacebook />, href: "https://www.facebook.com/ignekinfo/", label: "Facebook" },
        { icon: <IconX />, href: "https://x.com/ignekinfotech", label: "X" },
        { icon: <WhatsappIcon />, href: "", label: "WhatsApp" },
        { icon: <MainIcon />, href: "", label: "Mail" },
    ]
    const authorSocialLinks = [
        { icon: <IconLinkedIn />, href: "https://www.linkedin.com/company/ignek-infotech/about/", label: "LinkedIn" },
        { icon: <MainIcon />, href: "", label: "Mail" },
    ]
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    // const currentPage = 1
    const fetchBlogs = useCallback(
        async (idsToFilter: number[]) => {
            try {
                window.scrollTo({ top: 0, behavior: "smooth" });

                const res = await fetch(`${API_URL}?per_page=100&categories=${categoryId}&_embed`, { cache: "no-store" });

                if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

                const data = (await res.json()) as WPPost[];

                // 🧠 Filter only blogs whose IDs match the given array
                const filteredData = idsToFilter.length
                    ? data.filter((post) => idsToFilter.includes(post.id))
                    : data;

                const formatted: BlogData[] = filteredData.map((post) => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title?.rendered || "Untitled",
                    author: post._embedded?.author?.[0]?.name || "Bhavin Panchani",
                    date: post.date
                        ? new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })
                        : "Unknown date",
                    readTime: `${Math.max(
                        2,
                        Math.ceil((post.content?.rendered?.length || 0) / 1200)
                    )} min read`,
                    category:
                        post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
                    image:
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "/images/blogs/blogImage.png",
                    authPic:
                        post._embedded?.author?.[0]?.avatar_urls?.["96"] ||
                        "/images/blogs/blogAuthor.png",
                    desc: post?.excerpt?.rendered || "",
                }));

                setBlogs(formatted);
            } catch (err) {
                console.log(err)
            } finally {
                // setLoading(false);
            }
        },
        []
    );

    // useEffect(() => {
    //     const ids = [40314, 39874, 39138]; // example IDs
    //     fetchBlogs(ids);
    // }, [fetchBlogs]);
    useEffect(() => {
        const categoryMap: Record<number, number[]> = {
            15: [40314, 39874, 39138], // liferay
            16: [40126, 40338, 39747], // react
            21: [28831, 28897, 26212], // spring boot
        };

        const ids = categoryId ? categoryMap[categoryId] || [] : [];

        if (ids.length > 0) {
            fetchBlogs(ids);
        }
    }, [categoryId, fetchBlogs]);

    const router = useRouter();

    return (
        <div className="grid gap-10  mx-auto p-4 pr-[50px]">
            {/* --- Social Icons --- */}
            <div>
                <h2 className="text-black text-3xl mb-4 mt-8 font-medium">Share On</h2>
                <div className="flex gap-6 mt-0">
                    {socialLinks.map((social) => (
                        <a
                            href={social.href}
                            key={social.label}
                            aria-label={social.label}
                            className="flex size-12 items-center justify-center rounded-full bg-black text-white"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>


            {/* --- Related Blog Cards --- */}
            <div className="grid gap-4">
                <h2 className="text-black text-3xl mb-4 font-medium">Related Blogs</h2>
                {blogs?.map((blog) => (
                    <div
                        key={blog?.id}
                        className="flex bg-white items-center  shadow hover:shadow-md overflow-hidden transition pb-8"
                    >
                        <Image
                            src={blog?.image}
                            alt="Blog thumbnail"
                            width={200}
                            height={130}
                            className="object-cover w-full max-w-[200px] rounded-lg h-[130px]"
                        />
                        <div className="flex flex-col justify-center p-4">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                {blog?.title}
                            </h3>
                            <div
                                onClick={() => router.push(`/blog/${blog.slug}`)}
                                className="text-indigo-600 font-medium text-sm flex items-center gap-1 cursor-pointer"
                            >
                                Read Now →
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Author Card --- */}
            <div className="bg-white rounded-3xl shadow p-8 text-center">
                <h2 className="text-lg font-bold tracking-wide mb-2">AUTHOR</h2>
                <h3 className="text-xl font-semibold text-gray-900">Bhavin Panchani</h3>
                <p className="text-sm text-gray-500 mb-6">CEO, IGNEK</p>

                <div className="flex justify-center mb-6">
                    <Image
                        src={"/images/blog/authorImg.png"}
                        alt="Author"
                        width={186}
                        height={186}
                        className="rounded-full object-cover max-h-[186px]"
                    />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Bhavin Panchani. Founder & Director. We were set up in early 2019 and
                    are passionate about driving innovation through digital transformation.
                </p>

                <div className="flex justify-center gap-4">
                    {authorSocialLinks.map((social) => (
                        <a
                            href={social.href}
                            key={social.label}
                            aria-label={social.label}
                            className="flex size-12 items-center justify-center rounded-full bg-black text-white"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
