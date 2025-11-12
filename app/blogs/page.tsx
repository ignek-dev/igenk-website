"use client"
import Image from "next/image"
import BlogCard, { BlogData } from "components/Blogmain/BlogCards"
import { Pagination } from "components/marketplace/Pagination"
import TechCard from "components/Blogmain/TechCards"

const blogs: BlogData[] = [
  {
    id: 1,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 1,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 1,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 1,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 1,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 2,
    title: "Learn how to optimize React apps",
    author: "Bhavin Panchani",
    date: "Jul 10, 2025",
    readTime: "5 mins read",
    category: "Performance",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
]

const blogsCardData = [
  {
    id: 1,
    icon: "/images/blogs/blog1.jpg", // Note: Update paths to your images
    authorName: "Bhavin Panchani",
    time: "6 mins read",
    title: "Comparison of Client Extensions and OSGi: Modern vs Traditional Liferay Development",
    category: "Liferay Blog",
    date: "Jul 7, 2025",
  },
  // {
  //   id: 2,
  //   icon: "/images/marketplace/batch-client-extension.png",
  //   module: "Batch",
  //   title: "Batch Client Extension Generator",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  //   tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  // },
  // {
  //   id: 3,
  //   icon: "/images/marketplace/email-authentication.png",
  //   module: "Artificial Intelligence",
  //   title: "Email OTP Authentication for Community Edition",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  //   tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  // }
]
const cardData = [
  {
    icon: "/images/blogs/liferayIcon.png",
    title: "Liferay",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
  {
    icon: "/images/blogs/reactIcon.png",
    title: "React",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
  {
    icon: "/images/blogs/liferayIcon.png",
    title: "Liferay",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
  {
    icon: "/images/blogs/liferayIcon.png",
    title: "Liferay",
    description: "Explore strategies, leadership skills, and growth tactics for",
  },
]

export default function Blogs() {
  return (
    <main className="pb-5">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-9 bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-7xl leading-tight font-bold text-transparent sm:text-5xl md:text-7xl">
                Our Latest
                <br />
                Tech Blogs
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Header part */}
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
                Check Out Our Newly
                <br />
                Written Tech Blogs
              </h2>
            </div>

            <div className="flex h-full items-end justify-end">
              <p className="text-normal line-height-[30px] w-full text-right text-xl text-[#374151]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet
              </p>
            </div>
          </div>
          {/* <main className="p-6">
      <BlogCarousel />
    </main> */}

          <div className="mx-auto grid h-[640px] w-[100%] gap-6">
            {blogsCardData.map((blog) => (
              <div key={blog.title} className="relative cursor-pointer overflow-hidden rounded-[22px] shadow-lg">
                {/* Background Image */}
                <div className="relative h-[640px] w-full">
                  <Image
                    src={blog.icon}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover brightness-75"
                    priority
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
                  <div className="mb-[1.125rem] flex items-center space-x-2 text-sm opacity-90">
                    <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">{blog.category}</span>
                    <span>• {blog.time}</span>
                  </div>

                  <h2 className="mb-[1.125rem] text-lg leading-snug font-semibold">{blog.title}</h2>
                  <div className="flex items-center space-x-2 text-sm">
                    <Image
                      src={blog.icon}
                      alt={blog.authorName}
                      // width={40}
                      // height={40}
                      // className="rounded-[50%] border-2 border-white/80"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded-full border-2 border-white/80"
                    />
                    <span className="font-medium">{blog.authorName}</span>
                    <span className="opacity-80">• {blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col py-16">
            {/* Section Title */}
            <h2 className="mb-6 text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
              Browse By Category
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-4">
              {cardData.map((card, index) => (
                <TechCard key={index} icon={card.icon} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
          <div className="pb-16">
            <h2 className="mb-6 text-5xl leading-tight font-semibold tracking-tight text-[#000000]">Browse Latest Blog</h2>
              <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog,index) => (
                  <BlogCard key={index} blog={blog} />
                ))}
              </div>
            
            

            {/* --- Pagination --- */}
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  )
}
