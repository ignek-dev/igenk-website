"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Blog {
  icon: string;
  title: string;
  authorName: string;
  date: string;
  time: string;
  category: string;
 authorPic: string;
}

const blogsCardData: Blog[] = [
  {
    icon: "/images/blogs/blog1.jpg",
    title:
      "Comparison of Client Extensions and OSGi: Modern vs Traditional Liferay Development",
    authorName: "Bhavin Panchani",
    date: "Jul 7, 2025",
    time: "6 mins read",
    category: "Liferay Blog",
    authorPic:""
  },
  {
    icon: "/images/blogs/blog1.jpg",
    title: "Building Scalable Web Apps with React and Next.js",
    authorName: "Dipali Balas",
    date: "Aug 12, 2025",
    time: "5 mins read",
    category: "Frontend",
    authorPic:""
  },
  {
    icon: "/images/blogs/blog1.jpg",
    title: "Designing with Accessibility in Mind",
    authorName: "Alex Morgan",
    date: "Sep 15, 2025",
    time: "4 mins read",
    category: "UI/UX",
    authorPic:""
  },
];

const BlogsCardsHighlight = () => {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blogsCardData.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x: `-${index * 100}%`, transition: { duration: 0.8, ease: "easeInOut" } });
  }, [index, controls]);

  return (
<div className="mx-auto grid gap-6 p-6 h-[640px] w-[100%]">
      <motion.div
        className="flex w-full h-full"
        animate={controls}
        initial={{ x: 0 }}
      >
        {blogsCardData?.map((blog) => (
          <div
            key={blog.title}
            className="relative min-w-full cursor-pointer overflow-hidden rounded-[22px]"
          >
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
              {/* Top Info */}
              <div className="mb-[1.125rem] flex items-center space-x-2 text-sm opacity-90">
                <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                  {blog.category}
                </span>
                <span>• {blog.time}</span>
              </div>

              {/* Title */}
              <h2 className="mb-[1.125rem] text-lg leading-snug font-semibold">
                {blog.title}
              </h2>

              {/* Author Info */}
              
              <div className="flex items-center space-x-2 text-sm">
                <Image
                  src={blog.icon}
                  alt={blog.authorName}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white/80"
                />
                <span className="font-medium">{blog.authorName}</span>
                <span className="opacity-80">• {blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {blogsCardData.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsCardsHighlight;
