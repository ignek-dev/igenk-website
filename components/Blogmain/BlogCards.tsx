"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify';

export interface BlogData {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  authPic: string
  desc?: string
  slug?: string
}

interface BlogCardProps {
  blog: BlogData;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="relative flex w-auto cursor-pointer flex-col transition" onClick={handleClick}>
      {/* Image */}
      <div className="h-[15.156vw] w-[24.167vw] overflow-hidden rounded-[0.990vw] p-[0.20vw] shadow">
        <div className="relative h-full w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="rounded-[0.833vw]"
            sizes="(max-width: 768px) 100vw, 24.167vw"
          />
        </div>
      </div>

      {/* Category */}
      <div className="p18 mt-[0.938vw] flex flex-wrap items-center gap-2 text-gray-500">
        <span className="p18 w-[9.5vw] rounded-full border border-[#D1D5DB] px-[1.042vw] py-[0.521vw] text-center">
          {blog.category}
        </span>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>

      {/* Title */}
      <h3
        className="loading-[1.875vw] mt-[1.042vw] line-clamp-2 h-[4.7vw] text-[1.563vw]! text-gray-900"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title) }}
      />

      {/* Author Section fixed at bottom */}
      <div className="mt-[1.615vw] flex items-center gap-3 text-lg font-normal text-gray-600">
        <Image
          src={blog.authPic}
          alt={blog.author}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border border-gray-200 object-cover"
        />
        <span className="p20">{blog.author}</span>
        <span>•</span>
        <span className="p18 text-[#535862]">{blog.date}</span>
      </div>
    </div>
  )

}
