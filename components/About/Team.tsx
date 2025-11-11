"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Placeholder component for thumbnails
// interface MemberThumbProps {
//     m: Member;
//     style?: React.CSSProperties;
//     setActiveMember: (member: Member) => void;
//     defaultMember: Member;
// }

type Member = {
    id: string;
    name: string;
    role: string;
    thumb: string;
    photos: string[]; // slideshow images (same aspect as left card)
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
        id: "kishan",
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
    style,
    setActiveMember,
}: {
    m: Member;
    style: React.CSSProperties;
    setActiveMember: (m: Member) => void;
}) {
    return (
        <button
            type="button"
            style={style}
            onMouseEnter={() => setActiveMember(m)}
            onFocus={() => setActiveMember(m)}
            className="group overflow-hidden rounded-[16px] bg-[#111] ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
            <div className="relative h-full w-full mix-blend-luminosity">
                <Image
                    src={m.thumb}
                    alt={m.name}
                    fill
                    className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[16px] ring-1 ring-inset ring-white/10" />
        </button>
    );
}


const SLIDE_INTERVAL_MS = 1800;

const Team: React.FC = () => {
    // const defaultMember = MEMBERS[0];
    //  You will replace these with actual states
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
        <section
            className="relative isolate bg-black text-white"
            style={{
                height: 1126,
                opacity: 1,
            }}
        >
            {/* Heading + Description */}
            <div
                className="absolute flex items-start justify-between"
                style={{
                    position: "absolute",
                    top: 64,
                    left: 186,
                    width: 1539,
                    height: 120,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    opacity: 1,
                }}
            >
                {/* Title */}
                <h2
                    className="text-white"
                    style={{
                        width: 418,
                        height: 120,
                        fontFamily: "Poppins, ui-sans-serif, system-ui",
                        fontWeight: 600,
                        fontSize: 48,
                        lineHeight: "60px",
                        letterSpacing: "-0.02em",
                        textTransform: "capitalize",
                        margin: 0,
                    }}
                >
                    Meet the people
                    <br />
                    behind the magic
                </h2>

                {/* Description */}
                <p
                    className="text-right text-white/80"
                    style={{
                        width: 450,
                        height: 56,
                        fontFamily: "Poppins, ui-sans-serif, system-ui",
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: "28px",
                        letterSpacing: "0",
                        marginTop: 64,
                    }}
                >
                    A tight-knit team of strategists, designers, and developers—united by a
                    shared passion
                </p>
            </div>

            {/* Main Content Area */}
            <div
                className="absolute flex justify-between"
                style={{
                    top: 248,
                    left: 186,
                    right: 202,
                    bottom: 64,
                    width: "fit-content",
                    position: "relative",
                    height: 816,
                }}
            >
                {/* Left large spotlight card */}
                <div
                    className="relative overflow-hidden rounded-[20px] bg-[#0B0B0F] ring-1 ring-white/10"
                    style={{
                        width: 627,
                        height: 816,
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            key={currentPhoto}
                            src={currentPhoto ?? ""}
                            alt={activeMember.name}
                            fill
                            priority
                            className="object-cover transition-opacity duration-500 rounded-[20px]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <div>
                            <div className="text-[20px] font-semibold leading-tight">
                                {activeMember.name}
                            </div>
                            <div className="text-sm text-white/70">{activeMember.role}</div>
                        </div>
                        {activeMember.linkedin ? (
                            <a
                                href={activeMember.linkedin}
                                aria-label="LinkedIn"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0B0B0F]"
                                target="_blank"
                                rel="noreferrer"
                            >
                                in
                            </a>
                        ) : null}
                    </div>
                </div>

                {/* Right five images (2–1–2 layout) */}
                <div
                    className="relative"
                    style={{
                        width: 905,
                        height: 816,
                    }}
                >
                    {/* Left column (2 images) */}
                    <MemberThumb
                        m={MEMBERS[1]!}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 683 - 627,
                            width: 254,
                            height: 272,
                            borderRadius: 16,
                        }}
                        setActiveMember={setActiveMember}
                    />
                    <MemberThumb
                        m={MEMBERS[4]!}
                        style={{
                            position: "absolute",
                            top: 544,
                            left: 683 - 627,
                            width: 254,
                            height: 272,
                            borderRadius: 16,
                        }}
                        setActiveMember={setActiveMember}
                    />

                    {/* Middle column */}
                    <MemberThumb
                        m={MEMBERS[3]!}
                        style={{
                            position: "absolute",
                            top: 272,
                            left: 980 - 627,
                            width: 255,
                            height: 272,
                            borderRadius: 16,
                        }}
                        setActiveMember={setActiveMember}
                    />

                    {/* Right column (2 images) */}
                    <MemberThumb
                        m={MEMBERS[2]!}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 1277 - 627,
                            width: 254,
                            height: 272,
                            borderRadius: 16,
                        }}
                        setActiveMember={setActiveMember}
                    />
                    <MemberThumb
                        m={MEMBERS[5]!}
                        style={{
                            position: "absolute",
                            top: 544,
                            left: 1277 - 627,
                            width: 254,
                            height: 272,
                            borderRadius: 16,
                        }}
                        setActiveMember={setActiveMember}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
