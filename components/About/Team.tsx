"use client";

import Image from "next/image";
import React, { useState } from "react";

type Member = {
    id: string;
    name: string;
    role: string;
    thumb: string;
    photos: string[];
    linkedin?: string;
};

const MEMBERS: Member[] = [
    {
        id: "kishan",
        name: "Kishan Khatsuriya",
        role: "Project Manager",
        thumb: "/images/about/kishan-1.jpg",
        photos: [
            "/images/about/kishan-1.jpg",
            "/images/about/kishan-2.png",
        ],
        linkedin: "https://www.linkedin.com/in/kishan-khatsuriya-093540179/",
    },
    {
        id: "kishan2",
        name: "Kishan Khatsuriya",
        role: "Project Manager",
        thumb: "/images/about/kishan-1.jpg",
        photos: [
            "/images/about/kishan-1.jpg",
            "/images/about/kishan-2.png",
        ],
        linkedin: "https://www.linkedin.com/in/kishan-khatsuriya-093540179/"
    },
    {
        id: "bhargav",
        name: "Bhargav Vaghasiya",
        role: "Liferay Practice Head",
        thumb: "/images/about/bhargav-1.jpg",
        photos: ["/images/about/bhargav-1.jpg", "/images/about/bhargav-2.png"],
        linkedin: "https://www.linkedin.com/in/bhargavvaghasiya/"
    },
    {
        id: "parth",
        name: "Parth Panchani",
        role: "Sales Head",
        thumb: "/images/about/parth-1.jpg",
        photos: ["/images/about/parth-1.jpg", "/images/about/parth-2.png"],
        linkedin: "https://www.linkedin.com/in/parth-panchani-682b02268/"
    },
    {
        id: "ayushi",
        name: "Ayushi Bhadauria",
        role: "Front-end Team Lead",
        thumb: "/images/about/ayushi-1.jpg",
        photos: ["/images/about/ayushi-1.jpg", "/images/about/ayushi-2.png"],
        linkedin: "https://www.linkedin.com/in/ayushi-bhadauria-847587179/"
    },
    {
        id: "simran",
        name: "Simran Dubey",
        role: "HR Manager",
        thumb: "/images/about/simran-1.jpg",
        photos: ["/images/about/simran-1.jpg", "/images/about/simran-2.png"],
        linkedin: "https://www.linkedin.com/in/simran-dubey-hr-433915225/"
    },
];

function MemberThumb({
    m,
    setActiveMember,
    className = "",
}: {
    m: Member;
    setActiveMember: (m: Member) => void;
    className?: string;
}) {
    return (
        <button
            type="button"
            onMouseEnter={() => setActiveMember(m)}
            onFocus={() => setActiveMember(m)}
            className={`group overflow-hidden bg-[#111] w-[13.229vw] h-[14.167vw]
                       ${className}`}
            style={{
                borderRadius: 1,
            }}
        >
            <div className="relative h-full w-full mix-blend-luminosity">
                <Image
                    src={m.thumb}
                    alt={m.name}
                    fill
                    className="object-cover transition "
                    style={{ borderRadius: 16 }}
                />
                <div className="absolute inset-0 bg-black/20" style={{ borderRadius: 16 }} />
            </div>

        </button>
    );
}

const Team: React.FC = () => {
    const [activeMember, setActiveMember] = useState<Member>(MEMBERS[0]!);

    // Always use the first photo from the photos array
    const currentPhoto = activeMember.photos[1];

    return (
        <section className="bg-black text-white px-[10vw] py-[3.333vw] overflow-hidden">
            {/* Heading + Description */}
            <div className="mb-[3.333vw]">
                <div className="flex justify-between items-center">
                    {/* Title */}
                    <h2 className="font-semibold text-[2.5vw] leading-[3.125vw]">
                        Meet the people
                        <br />
                        behind the magic
                    </h2>

                    {/* Description */}
                    <p className="text-[0.938vw] text-[#E5E7EB] text-right leading-[1.458vw]">
                        Our passionate team of innovators and <br /> experts brings IGNEK's vision and Liferay excellence to life.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full">
                <div className="flex justify-between gap-[2.917vw]">
                    {/* Left large spotlight card */}
                    <div
                        className="overflow-hidden relative bg-[#0B0B0F]
                                       w-[32.656vw] h-[42.5vw]"
                        style={{
                            borderRadius: 20,
                            opacity: 1,
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={currentPhoto ?? ""}
                                alt={activeMember.name}
                                fill
                                priority
                                className="object-cover"
                                style={{ borderRadius: 20 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[46.19%] to-black/79 to-100% pointer-events-none rounded-xl" />

                        </div>
                        <div className="absolute bottom-[2.031vw] left-[3.125vw] right-[3.125vw] flex items-center justify-between">
                            <div>
                                <div className="text-[1.875vw] font-semibold leading-[2.292vw] mb-[0.104vw]">
                                    {activeMember.name}
                                </div>
                                <div className="text-[0.938vw] leading-[1.458vw] text-[#E5E7EB]">{activeMember.role}</div>
                            </div>

                            {activeMember.linkedin ? (
                                <a
                                    href={activeMember.linkedin}
                                    aria-label="LinkedIn"
                                    className="h-[1.979vw] w-[1.979vw] rounded-lg "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src={"/images/about/linkedin.png"}
                                        width={38}
                                        height={38}
                                        alt={activeMember.name} />
                                </a>
                            ) : null}
                        </div>
                    </div>

                    {/* Right grid of thumbnails */}
                    <div className="w-full lg:w-auto flex-shrink-0">
                        {/* Desktop: Custom 2-1-2 layout */}
                        <div className="hidden lg:flex gap-[2.24vw] h-full">
                            {/* Left column (2 images) */}
                            <div className="flex flex-col justify-between h-full gap-4 xl:gap-5 2xl:gap-6">
                                <MemberThumb
                                    m={MEMBERS[1]!}
                                    setActiveMember={setActiveMember}
                                />
                                <MemberThumb
                                    m={MEMBERS[4]!}
                                    setActiveMember={setActiveMember}
                                />
                            </div>

                            {/* Middle column (1 image, centered) */}
                            <div className="flex items-center justify-center h-full">
                                <MemberThumb
                                    m={MEMBERS[3]!}
                                    setActiveMember={setActiveMember}
                                />
                            </div>

                            {/* Right column (2 images) */}
                            <div className="flex flex-col justify-between h-full gap-4 xl:gap-5 2xl:gap-6">
                                <MemberThumb
                                    m={MEMBERS[2]!}
                                    setActiveMember={setActiveMember}
                                />
                                <MemberThumb
                                    m={MEMBERS[5]!}
                                    setActiveMember={setActiveMember}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;