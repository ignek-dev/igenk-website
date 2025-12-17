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
  subTag: string
}

const ModuleTag = ({ text }: { text: string }) => {
  return (
    <p
      className={`
          inline-block  rounded-full border border-[#00979E] px-3 py-1 text-xs leading-5 lg:text-[0.896vw] lg:leading-[1.344vw] lg:px-[1.042vw] lg:py-[0.313vw]
      `}
    >
      {text}
    </p>
  )
}

const DetailTag = ({ text }: { text: string }) => (
  <span className="rounded-full border font-medium px-3 py-1 text-xs leading-4 border-[#D1D5DB] bg-[#FFFFFF] lg:px-[0.896vw] lg:py-[0.448vw] lg:text-[0.833vw] lg:leading-[1.253vw]"
    style={{
      boxShadow: '0px 3.21px 8.02px 0px rgba(0, 151, 158, 0.25)'
    }}
  >
    {text}
  </span>
)

export const ToolCard = ({ icon, module, title, description, tags, link,subTag }: ToolCardProps) => {
  const isComingSoon = subTag?.trim() !== ""
  return (
    <div className="group relative h-full w-full lg:w-[25.208vw] overflow-hidden rounded-2xl lg:rounded-[0.896vw] border border-[#E5E7EB] p-5 pb-8 lg:px-[1.094vw] lg:pt-[1.094vw] lg:pb-[1.667vw] shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
      {/* This container holds all content that slides up */}
      <div className="flex h-full flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-[25%]">
        {" "}
        <div className="flex w-full justify-between items-start transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
          <Image src={icon} alt={`${title} icon`} width={100} height={100} className="h-16 w-16 lg:h-[5.208vw] lg:w-[5.208vw]" />
          {/* SubTag Logic */}
          {subTag?.trim() !== "" && (
            <span 
              className="rounded-full border  font-medium border-[#D1D5DB] bg-[#FFFFFF] px-3 py-1 text-xs leading-4 lg:px-[0.7vw] lg:py-[0.2vw] lg:text-[0.833vw] lg:leading-[1.253vw]"
              style={{
                boxShadow: '0px 3.21px 8.02px 0px rgba(0, 151, 158, 0.25)'
              }}
            >
              {subTag}
            </span>
          )}
        </div>

        {/* Text Content */}
        <div className="mt-6 lg:mt-[1.563vw]">
          <ModuleTag text={module} />
          <h3 className="mt-4 text-2xl lg:mt-[0.885vw] lg:text-[1.563vw]! lg:leading-[1.875vw]! ">{title}</h3>
        </div>

        {/* Bottom Tags */}
        <div className="flex flex-col justify-between h-full">
          <p className="mt-4 text-sm leading-relaxed text-[#4B5563] lg:line-height-[1.25vw] lg:mt-[0.885vw] lg:text-[0.833vw]">{description}</p>
          <div className="mt-4 lg:mt-[0.885vw] flex flex-wrap gap-2 lg:gap-[0.885vw]">
            {tags.map((tag) => (
              <DetailTag key={tag} text={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Hover Button --- */}
      <div className="absolute -bottom-1 left-0 w-full p-5 pb-6 lg:px-[1.094vw] lg:pt-[1.094vw] lg:pb-[1.667vw] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
        <Link
          href={link}
          className={`block w-full cursor-pointer rounded-full bg-[#0C64CE] py-3 text-base lg:py-[0.807vw] text-center font-semibold text-white transition-colors hover:bg-blue-700
          ${isComingSoon ? "pointer-events-none opacity-90 cursor-default" : ""}
          `}
          style={{
            border: '0.078vw solid #00979E',
            boxShadow: '0px 3px 7.5px 0px rgba(0, 151, 158, 0.25)'
          }}
        >
          {isComingSoon ? "Coming Soon" : "Use It Now"}
        </Link>
      </div>
    </div>
  )
}