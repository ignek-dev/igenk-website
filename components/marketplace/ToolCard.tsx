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
          inline-block py-[0.313vw] rounded-full border border-[#00979E] text-[0.896vw] leading-[1.344vw] px-[1.042vw]
      `}
    >
      {text}
    </p>
  )
}

const DetailTag = ({ text }: { text: string }) => (
  <span className="rounded-full border leading-[1.253vw] font-medium border-[#D1D5DB] bg-[#FFFFFF] px-[0.896vw] py-[0.448vw] text-[0.833vw]"
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
    <div className="group relative h-full w-[25.208vw] overflow-hidden rounded-[0.896vw] border border-[#E5E7EB] px-[1.094vw] pt-[1.094vw] pb-[1.667vw] shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
      {/* This container holds all content that slides up */}
      <div className="flex h-full flex-col transition-all duration-300 ease-in-out group-hover:-translate-y-[25%]">
        {" "}
        <div className="flex w-full justify-between items-start transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
          <Image src={icon} alt={`${title} icon`} width={100} height={100} className="h-[5.208vw] w-[5.208vw]" />
          {/* SubTag Logic */}
          {subTag?.trim() !== "" && (
            <span 
              className="rounded-full border leading-[1.253vw] font-medium border-[#D1D5DB] bg-[#FFFFFF] px-[0.7vw] py-[0.2vw] text-[0.833vw]"
              style={{
                boxShadow: '0px 3.21px 8.02px 0px rgba(0, 151, 158, 0.25)'
              }}
            >
              {subTag}
            </span>
          )}
        </div>

        {/* Text Content */}
        <div className="mt-[1.563vw]">
          <ModuleTag text={module} />
          <h3 className="mt-[0.885vw] text-[1.563vw]! leading-[1.875vw]! ">{title}</h3>
        </div>

        {/* Bottom Tags */}
        <div className="flex flex-col justify-between h-full">
          <p className="line-height-[1.25vw] mt-[0.885vw] text-[0.833vw] text-[#4B5563]">{description}</p>
          <div className="mt-[0.885vw] flex flex-wrap gap-[0.885vw]">
            {tags.map((tag) => (
              <DetailTag key={tag} text={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Hover Button --- */}
      <div className="absolute -bottom-1 left-0 w-full px-[1.094vw] pt-[1.094vw] pb-[1.667vw] opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
        <Link
          href={link}
          className={`block w-full cursor-pointer rounded-full bg-[#0C64CE] py-[0.807vw] text-center text-base font-semibold text-white transition-colors hover:bg-blue-700
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