"use client"

import Image from "next/image"
import React, { useState } from "react"
import { aboutPageData, TeamMember, teamSectionContent } from "data/about-content"

const MEMBERS = teamSectionContent.members


function MemberThumb({
  m,
  setActiveMember,
  className = "",
}: {
  m: TeamMember
  setActiveMember: (m: TeamMember) => void
  className?: string
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => setActiveMember(m)}
      onFocus={() => setActiveMember(m)}
      className={`group h-[14.167vw] w-[13.229vw] overflow-hidden bg-[#111] ${className}`}
      style={{
        borderRadius: 1,
      }}
    >
      <div className="relative h-full w-full mix-blend-luminosity">
        <Image src={m.thumb} alt={m.name} fill className="object-cover transition" style={{ borderRadius: 16 }} />
        <div className="absolute inset-0 bg-black/20" style={{ borderRadius: 16 }} />
      </div>
    </button>
  )
}

const Team: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember>(MEMBERS[0]!)

  // Always use the first photo from the photos array
  const currentPhoto = activeMember.photos[1]

  return (
    <section className="overflow-hidden bg-black px-[10vw] py-[3.333vw] text-white">
      {/* Heading + Description */}
      <div className="mb-[3.333vw]">
        <div className="flex items-center justify-between">
          {/* Title */}
          <h2 className="text-[2.5vw] leading-[3.125vw] font-semibold">
            {teamSectionContent.titleLine1}
            <br />
            {teamSectionContent.titleLine2}
          </h2>

          {/* Description */}
          <p className="text-right text-[0.938vw] leading-[1.458vw] text-[#E5E7EB]">
            {teamSectionContent.description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        <div className="flex justify-between gap-[2.917vw]">
          {/* Left large spotlight card */}
          <div
            className="relative h-[42.5vw] w-[32.656vw] overflow-hidden bg-[#0B0B0F]"
            style={{
              borderRadius: 20,
              opacity: 1,
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={currentPhoto ?? ""}
                alt={activeMember.name}
                fill
                priority
                className="object-cover"
                style={{ borderRadius: 20 }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-transparent from-[46.19%] to-black/79 to-100%" />
            </div>
            <div className="absolute right-[3.125vw] bottom-[2.031vw] left-[3.125vw] flex items-center justify-between">
              <div>
                <div className="mb-[0.104vw] text-[1.875vw] leading-[2.292vw] font-semibold">{activeMember.name}</div>
                <div className="text-[0.938vw] leading-[1.458vw] text-[#E5E7EB]">{activeMember.role}</div>
              </div>

              {activeMember.linkedin ? (
                <a
                  href={activeMember.linkedin}
                  aria-label="LinkedIn"
                  className="h-[1.979vw] w-[1.979vw] rounded-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={"/images/about/linkedin.png"} width={38} height={38} alt={activeMember.name} />
                </a>
              ) : null}
            </div>
          </div>

          {/* Right grid of thumbnails */}
          <div className="w-full flex-shrink-0 lg:w-auto">
            {/* Desktop: Custom 2-1-2 layout */}
            <div className="hidden h-full gap-[2.24vw] lg:flex">
              {/* Left column (2 images) */}
              <div className="flex h-full flex-col justify-between gap-4 xl:gap-5 2xl:gap-6">
                <MemberThumb m={MEMBERS[1]!} setActiveMember={setActiveMember} />
                <MemberThumb m={MEMBERS[4]!} setActiveMember={setActiveMember} />
              </div>

              {/* Middle column (1 image, centered) */}
              <div className="flex h-full items-center justify-center">
                <MemberThumb m={MEMBERS[3]!} setActiveMember={setActiveMember} />
              </div>

              {/* Right column (2 images) */}
              <div className="flex h-full flex-col justify-between gap-4 xl:gap-5 2xl:gap-6">
                <MemberThumb m={MEMBERS[2]!} setActiveMember={setActiveMember} />
                <MemberThumb m={MEMBERS[5]!} setActiveMember={setActiveMember} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
