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
  desc?:string
}

interface BlogCardProps {
  blog: BlogData;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${blog.id}`); // ✅ navigate to dynamic route
  };
  return (
    <div className="bg-white rounded-[19px] h-[480px] cursor-pointer"
      onClick={handleClick}

    >
      <div className="bg-white rounded-[19px] p-4 h-[302px]">
        <div className="rounded-[19px] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={475}
            height={250}
            className="w-full object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center space-x-2 text-gray-500 text-sm mt-4">
          <span className="px-3 py-1 border rounded-full text-gray-600 font-medium">
            {blog.category}
          </span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-3">
          {/* {blog.title.length > 35 ? `${blog.title.slice(0, 85)}...` : blog.title} */}
          {blog.title}
        </h3>

        <div className="flex items-center mt-4 space-x-2 text-sm text-gray-600">
          <Image
            src={blog.authPic}
            alt={blog.author}
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full border border-gray-200"
          />
          <span className="font-medium">{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
}
