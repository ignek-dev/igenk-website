"use client"


import Image from "next/image"
import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard, { BlogData } from "components/Blogmain/BlogCards"
import TechCard from "components/Blogmain/TechCards"
import { Pagination } from "components/marketplace/Pagination"
import { AnimatePresence, motion } from "framer-motion";

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
    id: 2,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 3,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 4,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 5,
    title: "Build your own Chrome Extension with React",
    author: "Bhavin Panchani",
    date: "Jul 7, 2025",
    readTime: "6 mins read",
    category: "Liferay Blog",
    image: "/images/blogs/blogImage.png",
    authPic: "/images/blogs/blogAuthor.png",
  },
  {
    id: 6,
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
  {
    id: 2,
    icon: "/images/blogs/blog2.jpg",
    authorName: "Bhavin Panchani",
    time: "6 mins read",
    title: "Comparison of Client Extensions and OSGi: Modern vs Traditional Liferay Development",
    category: "Liferay Blog",
    date: "Jul 7, 2025",
  },
  {
    id: 3,
    icon: "/images/blogs/blog3.jpg",
    authorName: "Bhavin Panchani",
    time: "6 mins read",
    title: "Comparison of Client Extensions and OSGi: Modern vs Traditional Liferay Development",
    category: "Liferay Blog",
    date: "Jul 7, 2025",
  }
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
  const [index, setIndex] = useState<number>(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % blogsCardData.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + blogsCardData.length) % blogsCardData.length);

  //  Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentBlog = blogsCardData[index] ?? blogsCardData[0];
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

<div className="flex flex-col items-center justify-center bg-gray-100">
{/* <div className="mx-auto grid h-[640px] w-[100%] gap-6"> */}
      <div className="relative w-full h-[640px] mx-auto overflow-hidden rounded-[22px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBlog?.id || 0}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Card */}
            <div className="relative h-[640px] w-full cursor-pointer overflow-hidden rounded-[22px] shadow-lg">
              {/* Background Image */}
              <div className="relative h-[640px] w-full">
                <Image
                  src={currentBlog?.icon || ""}
                  alt={currentBlog?.title || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-75"
                  priority
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                <div className="mb-4 flex items-center space-x-2 text-sm opacity-90">
                  <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                    {currentBlog?.category || ""}
                  </span>
                  <span>• {currentBlog?.time || ""}</span>
                </div>

                <h2 className="mb-4 text-2xl font-semibold leading-snug">
                  {currentBlog?.title || ""}
                </h2>

                <div className="flex items-center space-x-2 text-sm">
                  <Image
                    src={currentBlog?.icon || ""}
                    alt={currentBlog?.authorName || ""}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-full border-2 border-white/80"
                  />
                  <span className="font-medium">{currentBlog?.authorName || ""}</span>
                  <span className="opacity-80">• {currentBlog?.date || ""}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevCard}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full transition"
        >
         <Image
             src="/images/blogs/prevImage.png"
            alt="Previous"
            width={70}
            height={70}
            className="opacity-90 hover:opacity-100 transition"
          />
        </button>
        <button
          onClick={nextCard}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full transition"
        >
           <Image
            src="/images/blogs/nextImage.png"
            alt="Previous"
            width={70}
            height={70}
            className="opacity-90 hover:opacity-100 transition"
          />
        </button>
      </div>
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
