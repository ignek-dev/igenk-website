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
    <div className="group relative flex w-full cursor-pointer flex-col transition hover:-translate-y-1" onClick={handleClick}>
      {/* Image */}
      <div className="w-full overflow-hidden bg-white shadow-sm
        h-[220px] rounded-xl p-1
        lg:h-[15.156vw] lg:w-[24.167vw] lg:rounded-[0.990vw] lg:p-[0.20vw] lg:shadow">
        <div className="relative h-full w-full overflow-hidden rounded-lg lg:rounded-[0.833vw]">
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
      <div className="flex flex-wrap items-center text-gray-500
        mt-4 gap-3 
        text-p14 md:text-p16 lg:text-p18 lg:mt-[0.938vw] lg:gap-2">
        <span className="rounded-full border border-[#D1D5DB] text-center
          px-3 py-1
          lg:w-[9.5vw] lg:px-[1.042vw] lg:py-[0.521vw] text-p16  md:text-p18">
          {blog.category}
        </span>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>

      {/* Title */}
      <h3
        className="line-clamp-2 h-auto text-gray-900 font-bold
          mt-4 text-xl!
          lg:loading-[1.875vw] lg:mt-[1.042vw] lg:h-[4.7vw] lg:text-[1.563vw]!"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title) }}
      />

      {/* Author Section fixed at bottom */}
      <div className="flex items-center font-normal text-gray-600
        mt-5 gap-2 
        lg:mt-[1.615vw]">
        <Image
          src={blog.authPic}
          alt={blog.author}
          width={40}
          height={40}
          className="rounded-full border border-gray-200 object-cover
            h-10 w-10
            lg:h-[2.083vw] lg:w-[2.083vw]"
        />
        <span className="text-p16 md:text-p18 lg:text-p20">{blog.author}</span>
        <span>•</span>
        <span className="text-p14 lg:text-p18 text-[#535862]">{blog.date}</span>
      </div>
    </div>
  )

}
