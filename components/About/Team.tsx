"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

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
        linkedin: "#",
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
    },
    {
        id: "bhargav",
        name: "Bhargav Vaghasiya",
        role: "Liferay Practice Head",
        thumb: "/images/about/bhargav-1.jpg",
        photos: ["/images/about/bhargav-1.jpg", "/images/about/bhargav-2.png"],
    },
    {
        id: "parth",
        name: "Parth Panchani",
        role: "Sales Head",
        thumb: "/images/about/parth-1.jpg",
        photos: ["/images/about/parth-1.jpg", "/images/about/parth-2.png"],
    },
    {
        id: "ayushi",
        name: "Ayushi Bhadauria",
        role: "Front-end Team Lead",
        thumb: "/images/about/ayushi-1.jpg",
        photos: ["/images/about/ayushi-1.jpg", "/images/about/ayushi-2.png"],
    },
    {
        id: "simran",
        name: "Simran Dubey",
        role: "HR Manager",
        thumb: "/images/about/simran-1.jpg",
        photos: ["/images/about/simran-1.jpg", "/images/about/simran-2.png"],
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
            className={`group overflow-hidden bg-[#111] ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                       w-[10rem] h-[170px]
                       sm:w-[11.25rem] sm:h-[11.938px]
                       md:w-[12.5rem] md:h-[13.25rem]
                       lg:w-[13.75rem] lg:h-[14.563rem]
                       xl:w-[13.75rem] xl:h-[14.563rem]
                       2xl:w-[17.688rem] 2xl:h-[19rem]
                       [@media(min-width:1536px)]:w-[15.313rem]
                       [@media(min-width:1800px)]:w-[17.313rem]
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
                    className="object-cover transition group-hover:scale-[1.03]"
                    style={{ borderRadius: 16 }}
                />
                <div className="absolute inset-0 bg-black/20" style={{ borderRadius: 16 }} />
            </div>

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" style={{ borderRadius: 16 }} />
        </button>
    );
}

const SLIDE_INTERVAL_MS = 1800;

const Team: React.FC = () => {
    const [activeMember, setActiveMember] = useState<Member>(MEMBERS[0]!);
    const [slideIndex, setSlideIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        setSlideIndex(0);
        timerRef.current = setInterval(() => {
            setSlideIndex((i) => (i + 1) % Math.max(activeMember.photos.length, 1));
        }, SLIDE_INTERVAL_MS);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [activeMember]);

    useEffect(() => {
        activeMember.photos.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, [activeMember]);

    const currentPhoto = useMemo(
        () => activeMember.photos[slideIndex % activeMember.photos.length],
        [activeMember, slideIndex]
    );

    return (
        <section className="relative isolate bg-black text-white global-container py-8 px-4 sm:py-12 md:px-8 lg:py-16 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                {/* Heading + Description */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 xl:gap-16">
                        {/* Title */}
                        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl leading-tight tracking-tight capitalize max-w-md">
                            Meet the people
                            <br />
                            behind the magic
                        </h2>

                        {/* Description */}
                        <p className="font-poppins text-base sm:text-lg lg:text-xl text-white/80 max-w-xl lg:text-right lg:mt-12 xl:mt-16">
                            Our passionate team of innovators and experts brings IGNEK's vision and Liferay excellence to life.
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full">
                    <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-6 xl:gap-8">
                        {/* Left large spotlight card */}
                        <div 
                            className="relative overflow-hidden bg-[#0B0B0F] ring-1 ring-white/10 flex-shrink-0
                                       w-[21.25rem] h-[27.688rem]
                                       sm:w-[25rem] sm:h-[32.563rem]
                                       md:w-[28.125rem] md:h-[36.625]
                                       lg:w-[28.125rem] lg:h-[36.625]
                                       xl:w-[31.25rem] xl:h-[43.75rem]
                                       2xl:w-[38.125rem] 2xl:h-[51rem]
                                       [@media(min-width:1536px)]:w-[28.125rem] [@media(min-width:1536px)]:h-[39.5rem]
                                       [@media(min-width:1700px)]:w-[31.25rem] [@media(min-width:1700px)]:h-[40.688rem]
                                       [@media(min-width:1800px)]:w-[39.375rem] [@media(min-width:1800px)]:h-[44.75rem]
                                       [@media(min-width:1900px)]:w-[37.5rem] [@media(min-width:1900px)]h-[48.813rem]"
                            style={{
                                borderRadius: 20,
                                opacity: 1,
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    key={currentPhoto}
                                    src={currentPhoto ?? ""}
                                    alt={activeMember.name}
                                    fill
                                    priority
                                    className="object-cover transition-opacity duration-500"
                                    style={{ borderRadius: 20 }}
                                />
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" style={{ borderRadius: 20 }} />
                            </div>
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                                <div>
                                    <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                                        {activeMember.name}
                                    </div>
                                    <div className="text-xs sm:text-sm text-white/70">{activeMember.role}</div>
                                </div>
                                {activeMember.linkedin ? (
                                    <a
                                        href={activeMember.linkedin}
                                        aria-label="LinkedIn"
                                        className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white text-[#0B0B0F] font-semibold flex-shrink-0"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        in
                                    </a>
                                ) : null}
                            </div>
                        </div>

                        {/* Right grid of thumbnails */}
                        <div className="w-full lg:w-auto flex-shrink-0">
                            {/* Mobile: 2x3 grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
                                {MEMBERS.slice(1).map((member) => (
                                    <MemberThumb
                                        key={member.id}
                                        m={member}
                                        setActiveMember={setActiveMember}
                                        className="!w-full !h-auto aspect-[254/272]"
                                    />
                                ))}
                            </div>

                            {/* Desktop: Custom 2-1-2 layout */}
                            <div className="hidden lg:flex lg:gap-4 xl:gap-5 2xl:gap-6 h-full">
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
            </div>
        </section>
    );
};

export default Team;