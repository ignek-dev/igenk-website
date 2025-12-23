"use client"

import Image from "next/image"
import React, { useState } from "react"
import { TeamMember, teamSectionContent } from "data/about-content"

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
      onMouseEnter={() => setActiveMember(m)} // desktop
      onFocus={() => setActiveMember(m)}
      onClick={() => setActiveMember(m)} // tablet / mobile
      className={`group h-[14.167vw] w-[13.229vw] overflow-hidden bg-[#111] ${className}`}
      style={{ borderRadius: 16 }}
    >
      <div className="relative h-full w-full mix-blend-luminosity">
        <Image
          src={m.thumb}
          alt={m.name}
          fill
          className="object-cover transition"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </button>
  )
}

const Team: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember>(MEMBERS[0]!)

  const currentPhoto = activeMember.photos[1]

  return (
    <section className="overflow-hidden bg-black px-5 md:px-[10vw] py-10 md:py-[3.333vw] text-white">
      {/* Heading */}
      <div className="mb-9 md:mb-12 lg:mb-[3.333vw]">
        <div className="block lg:flex items-center justify-between">
          <h2>
            {teamSectionContent.titleLine1}
            <br />
            {teamSectionContent.titleLine2}
          </h2>

          <p className="mt-6 lg:mt-0 text-left lg:text-right text-p14 md:text-p18 lg:text-p18 text-[#E5E7EB]">
            {teamSectionContent.description}
            <br className="hidden lg:block" />
            {teamSectionContent.descLine2}
            <br className="hidden lg:block" />
            {teamSectionContent.descLine3}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="block md:flex justify-between gap-[2.917vw]">
          {/* Main Active Card */}
          <div
            className="relative h-[110vw] md:h-[42.5vw] w-full md:w-[32.656vw] overflow-hidden bg-[#0B0B0F]"
            style={{ borderRadius: 20 }}
          >
            <Image
              key={activeMember.name}
              src={currentPhoto ?? ""}
              alt={activeMember.name}
              fill
              priority
              className="object-cover transition-opacity duration-300"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-[46%] to-black/80" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <div className="text-lg md:text-[1.875vw] font-semibold">
                  {activeMember.name}
                </div>
                <div className="text-sm md:text-[0.938vw] text-[#E5E7EB]">
                  {activeMember.role}
                </div>
              </div>

              {activeMember.linkedin && (
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 md:h-[1.979vw] md:w-[1.979vw]"
                >
                  <Image
                    src="/images/about/linkedin.png"
                    width={38}
                    height={38}
                    alt="LinkedIn"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Desktop / Tablet Grid */}
          <div className="hidden md:flex flex-shrink-0 lg:w-auto">
            <div className="flex h-full gap-[2.24vw]">
              <div className="flex h-full flex-col justify-between gap-4">
                <MemberThumb m={MEMBERS[1]!} setActiveMember={setActiveMember} />
                <MemberThumb m={MEMBERS[4]!} setActiveMember={setActiveMember} />
              </div>

              <div className="flex h-full items-center justify-center">
                <MemberThumb m={MEMBERS[3]!} setActiveMember={setActiveMember} />
              </div>

              <div className="flex h-full flex-col justify-between gap-4">
                <MemberThumb m={MEMBERS[2]!} setActiveMember={setActiveMember} />
                <MemberThumb m={MEMBERS[5]!} setActiveMember={setActiveMember} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="mt-9 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {MEMBERS
              .filter((member) => member.id !== "kishan2")
              .map((member) => {
                const isActive = activeMember.id === member.id

                return (
                  <button
                    key={member.id}
                    onClick={() => setActiveMember(member)}
                    className={`relative h-[28vw] w-[24vw] flex-shrink-0 snap-center overflow-hidden rounded-xl
              ${isActive ? "ring-2 ring-white" : "opacity-80"}`}
                  >
                    <Image
                      src={member.thumb}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                )
              })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Team
