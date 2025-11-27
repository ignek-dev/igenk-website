"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { BlogData } from "components/Blogmain/BlogCards"
import { ArrowRight } from "lucide-react"
export interface WPPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt?: { rendered: string }
  date?: string
  _embedded?: {
    author?: Array<{
      name: string
      avatar_urls: Record<string, string>
    }>
    ["wp:featuredmedia"]?: Array<{ source_url: string }>
    ["wp:term"]?: Array<Array<{ name: string }>>
  }
  slug: string
}
// const PER_PAGE = 3;
const API_URL = "https://insights.ignek.com/wp-json/wp/v2/posts"
export const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z"
      fill="#FAFAFA"
    />
  </svg>
)
export const MainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
      fill="white"
    />
  </svg>
)
interface BlogSidebarProps {
  categoryId?: number // ✅ make it optional or required
}

const getLinkedInShareUrl = () => {
  if (typeof window === "undefined") return "#"
  const currentUrl = encodeURIComponent(window.location.href)
  return `https://www.linkedin.com/shareArticle?url=${currentUrl}`
}

const IconLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75C0 3.47935 0.289731 4.17882 0.805456 4.69454C1.32118 5.21027 2.02065 5.5 2.75 5.5C3.47935 5.5 4.17882 5.21027 4.69454 4.69454C5.21027 4.17882 5.5 3.47935 5.5 2.75C5.5 2.02065 5.21027 1.32118 4.69454 0.805456C4.17882 0.289731 3.47935 0 2.75 0ZM1.5 2.75C1.5 2.41848 1.6317 2.10054 1.86612 1.86612C2.10054 1.6317 2.41848 1.5 2.75 1.5C3.08152 1.5 3.39946 1.6317 3.63388 1.86612C3.8683 2.10054 4 2.41848 4 2.75C4 3.08152 3.8683 3.39946 3.63388 3.63388C3.39946 3.8683 3.08152 4 2.75 4C2.41848 4 2.10054 3.8683 1.86612 3.63388C1.6317 3.39946 1.5 3.08152 1.5 2.75ZM0 6.75C0 6.55109 0.0790175 6.36032 0.21967 6.21967C0.360322 6.07902 0.551088 6 0.75 6H4.75C4.94891 6 5.13968 6.07902 5.28033 6.21967C5.42098 6.36032 5.5 6.55109 5.5 6.75V19.75C5.5 19.9489 5.42098 20.1397 5.28033 20.2803C5.13968 20.421 4.94891 20.5 4.75 20.5H0.75C0.551088 20.5 0.360322 20.421 0.21967 20.2803C0.0790175 20.1397 0 19.9489 0 19.75V6.75ZM1.5 7.5V19H4V7.5H1.5ZM7 6.75C7 6.55109 7.07902 6.36032 7.21967 6.21967C7.36032 6.07902 7.55109 6 7.75 6H11.75C11.9489 6 12.1397 6.07902 12.2803 6.21967C12.421 6.36032 12.5 6.55109 12.5 6.75V7.184L12.935 6.997C13.6851 6.6766 14.4807 6.47583 15.293 6.402C18.068 6.15 20.5 8.33 20.5 11.13V19.75C20.5 19.9489 20.421 20.1397 20.2803 20.2803C20.1397 20.421 19.9489 20.5 19.75 20.5H15.75C15.5511 20.5 15.3603 20.421 15.2197 20.2803C15.079 20.1397 15 19.9489 15 19.75V12.75C15 12.4185 14.8683 12.1005 14.6339 11.8661C14.3995 11.6317 14.0815 11.5 13.75 11.5C13.4185 11.5 13.1005 11.6317 12.8661 11.8661C12.6317 12.1005 12.5 12.4185 12.5 12.75V19.75C12.5 19.9489 12.421 20.1397 12.2803 20.2803C12.1397 20.421 11.9489 20.5 11.75 20.5H7.75C7.55109 20.5 7.36032 20.421 7.21967 20.2803C7.07902 20.1397 7 19.9489 7 19.75V6.75ZM8.5 7.5V19H11V12.75C11 12.0207 11.2897 11.3212 11.8055 10.8055C12.3212 10.2897 13.0207 10 13.75 10C14.4793 10 15.1788 10.2897 15.6945 10.8055C16.2103 11.3212 16.5 12.0207 16.5 12.75V19H19V11.13C19 9.226 17.339 7.722 15.43 7.896C14.7741 7.9555 14.1317 8.11747 13.526 8.376L12.046 9.011C11.9318 9.06003 11.8073 9.07994 11.6836 9.06893C11.5598 9.05793 11.4407 9.01635 11.337 8.94794C11.2333 8.87953 11.1482 8.78643 11.0894 8.677C11.0306 8.56757 10.9999 8.44524 11 8.321V7.5H8.5Z"
      fill="white"
    />
  </svg>
)
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path
      d="M10.41 23.7164C11.6667 23.9252 12.9492 23.9261 14.2063 23.7189M10.41 23.7164C7.71056 23.2658 5.25722 21.8722 3.48863 19.7837C1.72005 17.6951 0.749633 15.0469 0.75 12.3101C0.750455 10.1043 1.38185 7.94468 2.56969 6.08603C3.75753 4.22737 5.45223 2.74727 7.45384 1.82038C9.45544 0.893482 11.6804 0.558469 13.8662 0.854871C16.052 1.15127 18.1074 2.06672 19.7899 3.49319C21.4724 4.91966 22.7117 6.79763 23.3617 8.9055C24.0116 11.0134 24.0451 13.2632 23.4581 15.3894C22.8711 17.5157 21.6882 19.4297 20.0488 20.9056C18.4095 22.3814 16.3823 23.3576 14.2063 23.7189M10.41 23.7164L10.4088 17.4601H8.0375C7.83859 17.4601 7.64782 17.3811 7.50717 17.2405C7.36652 17.0998 7.2875 16.909 7.2875 16.7101V14.4126C7.2875 14.2137 7.36652 14.0229 7.50717 13.8823C7.64782 13.7416 7.83859 13.6626 8.0375 13.6626H10.4088V9.74762C10.4088 8.75306 10.8038 7.79923 11.5071 7.09597C12.2104 6.39271 13.1642 5.99762 14.1588 5.99762H16.4213C16.7528 5.99762 17.0707 6.12932 17.3051 6.36374C17.5396 6.59816 17.6713 6.9161 17.6713 7.24762V8.54762C17.6713 8.87914 17.5396 9.19708 17.3051 9.4315C17.0707 9.66592 16.7528 9.79762 16.4213 9.79762H15.4563C15.1247 9.79762 14.8068 9.92932 14.5724 10.1637C14.3379 10.3982 14.2063 10.7161 14.2063 11.0476V13.6626H17.0775C17.1864 13.6626 17.2939 13.6863 17.3927 13.732C17.4915 13.7778 17.5791 13.8445 17.6496 13.9275C17.72 14.0105 17.7715 14.1079 17.8005 14.2128C17.8295 14.3177 17.8353 14.4277 17.8175 14.5351L17.505 16.4151C17.4565 16.707 17.306 16.9722 17.0803 17.1635C16.8546 17.3549 16.5684 17.46 16.2725 17.4601H14.2063V23.7189"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
)
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M13.9418 10.392L21.5363 1.5H19.7363L13.1438 9.2205L7.87578 1.5H1.80078L9.76578 13.176L1.80078 22.5H3.60078L10.5638 14.346L16.1273 22.5H22.2023L13.9418 10.392ZM11.4773 13.278L10.6703 12.1155L4.24878 2.865H7.01328L12.1943 10.3305L13.0013 11.493L19.7378 21.198H16.9733L11.4773 13.278Z"
      fill="white"
    />
  </svg>
)

const BlogSidebar = ({ categoryId }: BlogSidebarProps) => {
  const socialLinks = [
    { icon: <IconLinkedIn />, href: getLinkedInShareUrl, label: "LinkedIn" },
    { icon: <IconFacebook />, href: "https://www.facebook.com/ignekinfo/", label: "Facebook" },
    { icon: <IconX />, href: "https://x.com/ignekinfotech", label: "X" },
    { icon: <WhatsappIcon />, href: "tel:+919328495160", label: "WhatsApp" },
    { icon: <MainIcon />, href: "mailto:hr@ignek.com", label: "Mail" },
  ]
  const authorSocialLinks = [
    { icon: <IconLinkedIn />, href: "https://www.linkedin.com/in/bhavin-panchani", label: "LinkedIn" },
    { icon: <MainIcon />, href: "mailto:bhavin.panchani@ignek.com", label: "Mail" },
  ]
  const [blogs, setBlogs] = useState<BlogData[]>([])
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const currentPage = 1
  const fetchBlogs = useCallback(async (idsToFilter: number[]) => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })

      const res = await fetch(`${API_URL}?per_page=100&categories=${categoryId}&_embed`, { cache: "no-store" })

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)

      const data = (await res.json()) as WPPost[]

      
      const filteredData = idsToFilter.length ? data.filter((post) => idsToFilter.includes(post.id)) : data

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
        readTime: `${Math.max(2, Math.ceil((post.content?.rendered?.length || 0) / 1200))} min read`,
        category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blogs/blogImage.png",
        authPic: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/images/blogs/blogAuthor.png",
        desc: post?.excerpt?.rendered || "",
      }))

      setBlogs(formatted)
    } catch (err) {
      console.log(err)
    } finally {
      // setLoading(false);
    }
  }, [])

  // useEffect(() => {
  //     const ids = [40314, 39874, 39138]; // example IDs
  //     fetchBlogs(ids);
  // }, [fetchBlogs]);
  useEffect(() => {
    const categoryMap: Record<number, number[]> = {
      15: [40314, 39874, 39138], // liferay
      16: [40126, 40338, 39747], // react
      21: [28831, 28897, 26212], // spring boot
    }

    const ids = categoryId ? categoryMap[categoryId] || [] : []

    if (ids.length > 0) {
      fetchBlogs(ids)
    }
  }, [categoryId, fetchBlogs])

  const router = useRouter()

  return (
    <div className="mx-auto grid max-w-[1440px] gap-9 pr-[50px] pl-[4.271vw]">
      {/* --- Social Icons --- */}
      <div>
        <h2 className="mt-[2.292vw] mb-4 text-[1.667vw]! leading-[2.083vw] font-medium! text-black">Share On</h2>
        <div className="mt-0 flex gap-[0.625rem]">
          {socialLinks.map((social) => {
            const href = typeof social.href === "function" ? social.href() : social.href

            return (
              <a
                href={href}
                key={social.label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black text-white"
              >
                {social.icon}
              </a>
            )
          })}
        </div>

        <h2 className="mt-9 text-[1.667vw]! font-medium! text-black">Related Blogs</h2>
      </div>

      {/* --- Related Blog Cards --- */}
      <div className="grid gap-[31.5px]">
        {blogs?.map((blog, index) => (
          <div key={blog?.id}>
            <div className="flex items-center overflow-hidden transition">
              {/* Image */}
              <Image
                src={blog?.image}
                alt="Blog thumbnail"
                width={200}
                height={130}
                className="h-[130px] w-full max-w-[200px] rounded-[15px]"
              />

              {/* Text Container */}
              <div className="ml-[14px] flex h-[82px] flex-1 flex-col justify-center gap-2">
                <div className="!p18 mt-[11px] mb-2 w-[14.063vw] leading-snug text-[#101012]">{blog?.title}</div>

                <div
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  className="mt-auto flex cursor-pointer items-center gap-2 text-[16px] leading-[24px] font-medium text-[#4A3AFF]"
                >
                  Read Now <ArrowRight size={20} />
                </div>
              </div>
            </div>

            {index !== blogs.length - 1 && <hr className="mt-[31.5px] border-gray-300" />}
          </div>
        ))}
      </div>

      {/* --- Author Card --- */}
      <div className="rounded-[20px] border-[1.7px] border-[#E5E7EB] bg-white p-[2.375rem] text-center shadow">
        <h2 className="mb-10 text-[1.875vw]! font-semibold! tracking-wide">AUTHOR</h2>
        <h3 className="mb-1 text-[1.563vw]! font-semibold! text-gray-900">Bhavin Panchani</h3>
        <p className="pb-[1.458vw] text-[#121416]">CEO, IGNEK</p>

        <div className="mb-[1.875vw] flex justify-center">
          <Image
            src={"/images/blog/authorImg.png"}
            alt="Author"
            width={186}
            height={186}
            className="max-h-[186px] rounded-full object-cover"
          />
        </div>

        <p className="p16 mb-[1.875vw] leading-relaxed text-[#374151]">
          Bhavin Panchani. Founder & Director. We were set up in early 2019 and are passionate about driving innovation
          through digital transformation.
        </p>

        <div className="flex justify-center gap-[1.25rem]">
          {authorSocialLinks.map((social) => (
            <a
              href={social.href}
              key={social.label}
              aria-label={social.label}
              target="_blank"
              className="flex size-[2.5rem] items-center justify-center rounded-full bg-black text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar
