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
  className="cursor-pointer relative transition p-4 flex flex-col"
  onClick={handleClick}
>
  {/* Image */}
  <div className="rounded-[19px] p-1 shadow overflow-hidden w-full">
    <Image
      src={blog.image}
      alt={blog.title}
      width={500}
      height={300}
      className="w-full rounded-[16px] h-auto object-cover"
    />
  </div>

  {/* Category */}
  <div className="flex flex-wrap items-center gap-2 text-gray-500 text-base font-normal mt-4">
    <span className="px-6 py-3 border rounded-full text-gray-600 font-medium">
      {blog.category}
    </span>
    <span>•</span>
    <span>{blog.readTime}</span>
  </div>

  {/* Title */}
  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3 ">
    {blog.title}
  </h3>

  {/* Author Section fixed at bottom */}
  <div className="flex items-center gap-3 text-lg font-normal text-gray-600 mt-auto pt-4">
    <Image
      src={blog.authPic}
      alt={blog.author}
      width={40}
      height={40}
      className="w-10 h-10 object-cover rounded-full border border-gray-200"
    />
    <span className="font-normal text-[1.222rem]">{blog.author}</span>
    <span>•</span>
    <span className="font-normal text-[1.125rem] text-[#535862]">{blog.date}</span>
  </div>
</div>

);

}
