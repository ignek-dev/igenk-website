import Image from "next/image"
import Link from "next/link"
import React from "react"

// Define the type for the props
type ToolCardProps = {
  icon: string
  module: string
  title: string
  description: string
  tags: string[]
  link: string
}

const ModuleTag = ({ text }: { text: string }) => {
  return (
    <span
      className={`
        rounded-full border px-6 py-2.5 text-base font-medium
        text-gray-900
        border-[#00979E] /* --- Applied to all top modules --- */
      `}
    >
      {text}
    </span>
  )
}

const DetailTag = ({ text }: { text: string }) => (
  <span className="rounded-full border border-gray-200 bg-[#FFFFFF] px-6 py-2.5 text-base font-medium text-[#000000]">
    {text}
  </span>
)

export const ToolCard = ({ icon, module, title, description, tags, link }: ToolCardProps) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-lg border border-gray-200 p-7.5 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
      {/* This container holds all content that slides up */}
      <div className="flex h-full flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-[25%]">
        {" "}
        <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
          <Image src={icon} alt={`${title} icon`} width={68} height={68} className="h-25 w-25" />
        </div>
        {/* Text Content */}
        <div className="mt-9 flex-grow">
          <ModuleTag text={module} />
          <h3 className="mt-7 text-3xl font-semibold text-black">{title}</h3>
          <p className="font-regular line-height-[24px] mt-4 text-base text-[#4B5563]">{description}</p>
        </div>
        {/* Bottom Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <DetailTag key={tag} text={tag} />
          ))}
        </div>
      </div>

      {/* --- Hover Button --- */}
      <div className="absolute -bottom-1 left-0 w-full p-4 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
        <Link
          href={link}
          className="block w-full cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Use It Now
        </Link>
      </div>
    </div>
  )
}