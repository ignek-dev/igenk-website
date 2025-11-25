"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  <div
  className="cursor-pointer w-auto relative transition flex flex-col"
  onClick={handleClick}
>
  {/* Image */}
  <div className="rounded-[19px] h-[291px] w-[464px] p-1 shadow overflow-hidden w-full">
    <Image
      src={blog.image}
      alt={blog.title}
      width={500}
      height={291}
      className="w-full h-[291px]  rounded-[16px] "
    />
  </div>

  {/* Category */}
  <div className="flex flex-wrap items-center gap-2 text-gray-500 p18 mt-4">
    <span className="px-6 py-3 border rounded-full text-gray-600 ">
      {blog.category}
    </span>
    <span>•</span>
    <span>{blog.readTime}</span>
  </div>

  {/* Title */}
  <h3 className="text-[1.563vw]! loading-[1.875vw] text-gray-900 mt-3 ">
    {blog.title}
  </h3>

  {/* Author Section fixed at bottom */}
  <div className="flex items-center gap-3 text-lg font-normal text-gray-600 mt-auto pt-6">
    <Image
      src={blog.authPic}
      alt={blog.author}
      width={40}
      height={40}
      className="w-10 h-10 object-cover rounded-full border border-gray-200"
    />
    <span className=" p20">{blog.author}</span>
    <span>•</span>
    <span className="p18 text-[#535862]">{blog.date}</span>
  </div>
</div>

);

}
