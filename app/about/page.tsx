"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import CEOImage from "../../ass/ets/ceo-img.png"

type CoreValue = {
    number: string;
    title: string;
    description: string;
    img: string;
};

type CeoMessageProps = {
    imageSrc?: string; // put your provided image in /public/images/ceo.png and leave undefined
    linkedInHref?: string;
};

const ceoMessage: CeoMessageProps = {
    imageSrc: '/images/about/ceo-img.png',
    linkedInHref: 'https://in.linkedin.com/in/bhavin-panchani',
};

type Card = {
    title: string;
    desc: string;
};

const CARDS: Card[] = [
    {
        title: "Accelerated Solution",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Worthwhile Collaboration",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Cutting Edge Technologies",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Well Tested Solutions",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Accelerated Solution",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Accelerated Solution",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
    {
        title: "Accelerated Solution",
        desc:
            "Following standard serve as strong evidence of our position as the experts in software development services.",
    },
];

// Absolute positions for the 5 right cards (Figma-like, tuned for >=1280px)
const CARD_POS = [
    // id order: m1..m5 (MEMBERS[1..5])
    { left: 0, top: 0, w: 230, h: 230 },      // top-left of the right area
    { right: 0, top: 0, w: 230, h: 230 },     // top-right
    { left: 110, top: 260, w: 230, h: 230 },  // mid-left (slightly lower)
    { right: 0, top: 260, w: 230, h: 230 },   // mid-right
    { left: 110, top: 520, w: 230, h: 230 },  // bottom-left
];

const partners = [
    {
        name: "Youngsoft India",
        image: "/images/partner/youngsoftIndia.svg",
    },
    {
        name: "United Nations",
        image: "/images/partner/United-nations.png",
    },
    {
        name: "This",
        image: "/images/partner/This.png",
    },
    {
        name: "Cognizer AI",
        image: "/images/partner/cognizerAI.png",
    },
    {
        name: "Mibusoft",
        image: "/images/partner/mibusoft.png",
    },
    {
        name: "Navvis",
        image: "/images/partner/navvis.png",
    },
    {
        name: "EduTecks",
        image: "/images/partner/youngsoftIndia.svg",
    },
    {
        name: "Infogain",
        image: "/images/partner/youngsoftIndia.svg",
    },
]

function MemberThumb({
    m,
    style,
    setActiveMember,
    defaultMember,
}: {
    m: Member;
    style: React.CSSProperties;
    setActiveMember: (m: Member) => void;
    defaultMember: Member;
}) {
    return (
        <button
            type="button"
            style={style}
            onMouseEnter={() => setActiveMember(m)}
            onFocus={() => setActiveMember(m)}
            onMouseLeave={() => setActiveMember(defaultMember)}
            onBlur={() => setActiveMember(defaultMember)}
            className="group overflow-hidden rounded-[16px] bg-[#111] ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
            <div className="relative h-full w-full">
                <Image src={m.thumb} alt={m.name} fill className="object-cover transition group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[16px] ring-1 ring-inset ring-white/10" />
        </button>
    );
}

const VALUES: CoreValue[] = [
    {
        number: "01",
        title: "Integrity",
        description:
            "We uphold transparency and honesty in every decision, interaction, and business relationship we make.",
        img: "/images/about/integrity-img.png",
    },
    {
        number: "02",
        title: "Collaboration",
        description:
            "Working together across diverse teams, we achieve more through shared ideas, mutual respect, and aligned goals.",
        img: "/images/about/collaboration-img.png",
    },
    {
        number: "03",
        title: "Growth",
        description:
            "We pursue continuous learning and improvement, evolving with every challenge, opportunity, and market shift.",
        img: "/images/about/growth-img.png",
    },
    {
        number: "04",
        title: "Adaptability",
        description:
            "We embrace change with agility and optimism, turning uncertainty into innovation, resilience, and long-term progress.",
        img: "/images/about/adaptability-img.png",
    },
];

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
        thumb: "/images/about/kishan.jpg",
        photos: [
            "/images/about/kishan.jpg",
            "/images/about/kishan.jpg",
            "/images/about/kishan.jpg",
        ],
        linkedin: "#",
    },
    {
        id: "kishan",
        name: "Kishan Khatsuriya",
        role: "Project Manager",
        thumb: "/images/about/kishan.jpg",
        photos: ["/images/about/kishan.jpg", "/images/about/kishan.jpg"],
    },
    {
        id: "bhargav",
        name: "Bhargav Vaghasiya",
        role: "Liferay Practice Head",
        thumb: "/images/about/bhargav.jpg",
        photos: ["/images/about/bhargav.jpg", "/images/about/bhargav.jpg"],
    },
    {
        id: "parth",
        name: "Parth Panchani",
        role: "Sales Head",
        thumb: "/images/about/parth.jpg",
        photos: ["/images/about/parth.jpg", "/images/about/parth.jpg"],
    },
    {
        id: "ayushi",
        name: "Ayushi Bhadauria",
        role: "Front-end Team Lead",
        thumb: "/images/about/aayushi.jpg",
        photos: ["/images/about/aayushi.jpg", "/images/about/aayushi.jpg"],
    },
    {
        id: "simran",
        name: "Simran Dubey",
        role: "HR Manager",
        thumb: "/images/about/simran.jpg",
        photos: ["/images/about/simran.jpg", "/images/about/simran.jpg"],
    },
];

// Intersection Observer hook for reveal animations
function useReveal() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-y-6");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.15 }
        );

        el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => io.observe(n));
        return () => io.disconnect();
    }, []);

    return ref;
}

const SLIDE_INTERVAL_MS = 1800;

export default function AboutUs() {
    const revealRef = useReveal();

    const defaultMember = MEMBERS[0];
    const [activeMember, setActiveMember] = useState<Member>(defaultMember!);
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
        <div ref={revealRef} className="relative bg-[#0B0B0F] text-white">
            <section className="relative overflow-hidden bg-black text-white">
                {/* Top-left subtle radial gradient using provided colors */}
                <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
                    <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#00979E] opacity-20 blur-[100px]" />
                    <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#0E7BF8] opacity-15 blur-[100px]" />
                </div>

                <div className="mx-auto w-full px-4 pt-20 pb-12 md:px-8 md:pb-24 lg:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
                    <h1 className="text-6xl leading-none font-extrabold md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8.25rem]">
                        Transform Your
                        <br />
                        <span className="italic">DIGITAL EXPERIENCE</span>
                        <br />
                        <span>With IGNEK Today</span>
                    </h1>
                    <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
                        <p className="max-w-xl text-xl text-white/80 sm:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        </p>

                        <div className="md:self-end md:justify-self-end pb-3">
                            <a
                                href="#discover"
                                className="group flex items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-3 text-sm text-white transition-colors"
                            >
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 border border-[#00979E]">
                                    <img src="/images/icon/discover-arrow.png" alt="discover-now" />
                                </div>
                                <span className="pr-2 text-xl">Discover More</span>
                            </a>
                        </div>
                    </div>

                    {/* Divider line matching text color */}
                    <div className="mt-14 border-t border-white/30" />

                    {/* Logos row: 7 items with spacing and responsive wrap */}
                    <div className="mt-10 overflow-hidden">
                        {/* Inner container is the animated flex row */}
                        <div className="animate-marquee-fast flex gap-x-16 whitespace-nowrap">
                            {/* We map the partners array twice for a seamless loop */}
                            {[...partners, ...partners].map((partner, idx) => (
                                <div
                                    key={idx}
                                    className="flex w-44 flex-shrink-0 items-center justify-center opacity-80 transition hover:opacity-100"
                                >
                                    <Image src={partner.image} alt={partner.name} width={140} height={40} className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Company */}
            <div className="bg-[#F8F8F8] py-16 px-6 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
                        {/* Left Column - Main Heading */}
                        <div className="lg:pt-0">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                                Why Companies
                                <br />
                                Trust IGNEK
                            </h2>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8">
                            {/* Introductory Paragraph */}
                            <p className="text-lg text-[#555555] leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                            </p>

                            {/* Section 1: Digital Excellence */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-black">
                                    Digital Excellence
                                </h3>
                                <p className="text-base text-[#555555] leading-relaxed">
                                    We craft scalable, high-performing solutions that empower businesses to embrace innovation and achieve measurable results.
                                </p>
                            </div>

                            {/* Horizontal Divider */}
                            <div className="border-t border-gray-300"></div>

                            {/* Section 2: Future-Ready Solutions */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-black">
                                    Future-Ready Solutions
                                </h3>
                                <p className="text-base text-[#555555] leading-relaxed">
                                    From modern web applications to enterprise platforms, we design systems built for adaptability, growth, and long-term success.
                                </p>
                            </div>

                            {/* Horizontal Divider */}
                            <div className="border-t border-gray-300"></div>

                            {/* Section 3: Collaborative Approach */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-black">
                                    Collaborative Approach
                                </h3>
                                <p className="text-base text-[#555555] leading-relaxed">
                                    Our team works hand-in-hand with clients, ensuring every project reflects their vision while meeting the highest standards of quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standout Points*/}
            <section className="relative isolate overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 -z-10">
                    <Image src="/images/about/standout-img.jpg" alt="Background" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.80)_100%)]" />
                </div>

                {/* Canvas container */}
                <div className="relative mx-auto max-w-[1920px] px-[24px] py-[72px] min-h-[860px]">
                    {/* H1 */}
                    <h2
                        className="absolute left-[192px] top-[64px] w-[623px] h-[120px] text-white capitalize"
                        style={{
                            fontFamily: "Poppins, ui-sans-serif, system-ui",
                            fontWeight: 600,
                            fontSize: 48,
                            lineHeight: "60px",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        What Makes Us Stand Out
                        <br />
                        In A Crowded Market
                    </h2>

                    {/* Right caption */}
                    <p
                        className="absolute left-[1072px] top-[124px] w-[653px] h-[60px] text-right text-[#E5E7EB]"
                        style={{
                            fontFamily: "Poppins, ui-sans-serif, system-ui",
                            fontWeight: 400,
                            fontSize: 20,
                            lineHeight: "30px",
                            letterSpacing: "0",
                        }}
                    >
                        Following standard serve as strong evidence of our position as the experts in software development services.
                    </p>

                    {/* Cards rail frame */}
                    <div className="absolute left-[192px] top-[297px] h-[469px] w-[1728px] overflow-hidden">
                        <div className="flex h-full w-full snap-x snap-mandatory gap-[24px] overflow-x-auto overflow-y-hidden scrollbar-hide">
                            {CARDS.map((c, i) => (
                                <div
                                    key={i}
                                    className="snap-start relative shrink-0 rounded-[30px] bg-[#00000094] backdrop-blur-[2px] text-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                                    style={{ width: 417, height: 469 }}
                                >
                                    {/* Title top */}
                                    <div
                                        className="absolute left-[51px] top-[66px] h-[100px] w-[299px] text-center capitalize"
                                        style={{
                                            fontFamily: "Poppins, ui-sans-serif, system-ui",
                                            fontWeight: 500,
                                            fontSize: 36,
                                            lineHeight: "50px",
                                            letterSpacing: "-0.02em",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {c.title}
                                    </div>

                                    {/* Title bottom/description */}
                                    <div
                                        className="absolute left-[51px] top-[209px] h-[120px] w-[316px] text-center"
                                        style={{
                                            fontFamily: "Poppins, ui-sans-serif, system-ui",
                                            fontWeight: 400,
                                            fontSize: 20,
                                            lineHeight: "30px",
                                            letterSpacing: "0",
                                            color: "#E5E7EB",
                                        }}
                                    >
                                        {c.desc}
                                    </div>

                                    {/* Divider */}
                                    <div className="absolute bottom-[28px] left-1/2 h-px w-[72%] -translate-x-1/2 bg-white/18" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Background accents */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[6%] top-[-12%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[120px]" />
                <div className="absolute right-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/18 blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04)_30%,transparent_70%)]" />
            </div>





            {/*Core Values */}
            <section className="bg-[#F5F5F6] h-[1078px]">
                {/* tighter container to reduce side whitespace */}
                {/* <div className="mx-auto max-w-[1140px] px-4 sm:px-5 md:px-6 py-16 md:py-20"> */}
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-poppins font-bold text-[48px] leading-[3.75rem] tracking-[-0.02em] text-center capitalize text-[#0B0B0F] pt-16">
                        Our Core Values
                    </h2>

                    <p className="font-poppins font-normal text-[20px] leading-[30px] text-center text-[#4B5563] mt-7 mb-9 max-w-[720px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                    </p>
                </div>

                {/* Values */}
                {/* <div className="mt-12 md:mt-16 space-y-6"> */}
                {VALUES.map((v, index) => (
                    <div key={index} className="group relative mx-auto h-[191px] w-full max-w-[1536px] rounded-[4px] bg-[#F5F5F6] transition-colors duration-300 hover:bg-white">
                        {/* inner content is relative so absolute children anchor to the row's inner left */}
                        <div className="relative flex h-full items-center px-8">
                            {/* number (Plus Jakarta Sans, 30/36, w41×h36) */}
                            <span
                                className="inline-block h-[36px] w-[41px] text-[30px] font-medium leading-[36px] tracking-[0] text-[#0B0B0F]"
                                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui" }}
                            >
                                {v.number}
                            </span>

                            {/* Title lane (starts at 211px from inner left) */}
                            <h3
                                className="truncate pl-[211px] text-[48px] font-normal leading-[72px] tracking-[-0.02em] text-[#0B0B0F] transition-transform duration-300 group-hover:translate-x-[120px]"
                                style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
                            >
                                {v.title}
                            </h3>


                            {/* Description (kept to the right; adjust basis as needed) */}
                            <div className="ml-auto">
                                <p
                                    className="w-[769px] text-right text-[#4B5563] font-normal text-[24px] leading-[32px] tracking-[0]"
                                    style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }} // or className="font-poppins"
                                >
                                    {v.description}
                                </p>
                            </div>

                            {/* Hover image: starts EXACTLY at 211px from inner left, slightly larger (112×112) */}
                            <div className="pointer-events-none absolute left-[211px] top-1/2 z-10 h-[112px] w-[112px] -translate-y-1/2 -translate-x-2 overflow-hidden rounded-[6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={v.img} alt={v.title} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>

                ))}
                {/* </div> */}
                {/* </div> */}
            </section>

            {/* CEO Section */}
            <section className="relative isolate bg-[#060606] overflow-hidden">
                <div className="relative mx-auto max-w-[1280px] px-6 py-32">
                    {/* Teal-glow card */}
                    <div className="relative max-w-[802px]">
                        <div className="h-full w-full rounded-[30px] p-[3px] bg-[linear-gradient(129.83deg,#00979E_0.83%,#000000_82.69%)] shadow-[0_4px_4px_0_#00979E40]">
                            <div className="h-full w-full rounded-[27px] bg-[#0B0B0F] p-8">
                                <h2 className="text-white text-[34px] font-semibold leading-[44px] tracking-[-0.01em]">
                                    Heard From Our CEO
                                </h2>
                                <p className="mt-4 text-white/80 text-[15px] leading-[28.5px]">
                                    We were set up in early 2019 and we are passionate about driving innovation through
                                    digital transformation. With a deep understanding of the rapidly evolving digital
                                    landscape, we empower organizations to thrive in the digital age. Our mission is to
                                    help businesses to harness the power of technology to achieve their strategic goals
                                    and stay ahead in an ever‑changing world. Through our software services, our aim is to
                                    improve customer experience, reduce operational costs, and improve business processes
                                    which will eventually lead to better revenue for our clients. Our core service offerings
                                    encompass: Web &amp; CMS Development, Mobile Application Development, AI/ML, JavaScript
                                    Development, and Liferay Development.
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="text-white/90 text-[28px]">Bhavin Panchami</span>
                                    <a
                                        href={ceoMessage.linkedInHref}
                                        aria-label="LinkedIn"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] bg-white text-[#0B0B0F]"
                                    >
                                        in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CEO Image */}
                    <div className="absolute right-0 top-0 h-[500px] w-[500px] pointer-events-none">
                        <div
                            className="relative h-full w-full"
                            style={{
                                maskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
                            }}
                        >
                            <Image
                                src={ceoMessage.imageSrc ?? ""}
                                alt="CEO"
                                fill
                                priority
                                className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                            />
                        </div>
                        <div className="pointer-events-none absolute bottom-[-12px] left-1/2 h-[120px] w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),rgba(0,0,0,0))]" />
                    </div>
                </div>
            </section>

            {/*Meet the People*/}
            <section className="relative isolate bg-black text-white">
                <div
                    className="absolute flex items-start justify-between"
                    style={{
                        top: 64,           // left: 186px, top: 64px
                        left: 186,
                        width: 1539,       // width: 1539px, height: 120px
                        height: 120,
                    }}
                >
                    {/* Title */}
                    <h2
                        className="text-white"
                        style={{
                            width: 418,
                            height: 120,
                            fontFamily: "Poppins, ui-sans-serif, system-ui",
                            fontWeight: 600,            // SemiBold
                            fontSize: 48,
                            lineHeight: "60px",
                            letterSpacing: "-0.02em",
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
                        }}
                    >
                        A tight‑knit team of strategists, designers, and developers—united by a shared passion
                    </p>
                </div>
                <div className="mx-auto max-w-[1280px] px-6 py-16">
                    <div className="grid grid-cols-12 gap-10 items-start">
                        {/* Left spotlight card */}
                        <div className="col-span-12 lg:col-span-7">
                            <div className="relative overflow-hidden rounded-[24px] bg-[#0B0B0F] ring-1 ring-white/10">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        key={currentPhoto}
                                        src={currentPhoto ?? ""}
                                        alt={activeMember.name}
                                        fill
                                        priority
                                        className="object-cover transition-opacity duration-500"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
                                </div>
                                <div className="flex items-center justify-between px-6 py-4">
                                    <div>
                                        <div className="text-[20px] font-semibold leading-tight">{activeMember.name}</div>
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
                        </div>

                        {/* Right: five cards, absolute-placed frame for >=lg; grid fallback for <lg */}
                        <div className="col-span-12 lg:col-span-5">
                            {/* Mobile/tablet fallback grid */}
                            <div className="grid grid-cols-2 gap-6 lg:hidden">
                                {MEMBERS.slice(1, 6).map((m) => (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onMouseEnter={() => setActiveMember(m)}
                                        onFocus={() => setActiveMember(m)}
                                        onMouseLeave={() => setActiveMember(defaultMember!)}
                                        onBlur={() => setActiveMember(defaultMember!)}
                                        className="group relative overflow-hidden rounded-[16px] bg-[#111] ring-1 ring-white/10"
                                    >
                                        <div className="relative aspect-[4/3] w-full">
                                            <Image src={m.thumb} alt={m.name} fill className="object-cover transition group-hover:scale-[1.03]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Desktop absolute 2–1–2 layout */}
                            <div className="relative hidden lg:block" style={{ height: 760 }}>
                                {/* Sizes tuned for visual balance; tweak w/h/top values to your Figma */}
                                {/* Top pair */}
                                <MemberThumb
                                    m={MEMBERS[1]!}
                                    style={{ position: "absolute", top: 0, left: 0, width: 230, height: 230 }}
                                    setActiveMember={setActiveMember}
                                    defaultMember={defaultMember!}
                                />
                                <MemberThumb
                                    m={MEMBERS[2]!}
                                    style={{ position: "absolute", top: 0, right: 0, width: 230, height: 230 }}
                                    setActiveMember={setActiveMember}
                                    defaultMember={defaultMember!}
                                />

                                {/* Middle single (centered) */}
                                <MemberThumb
                                    m={MEMBERS[3]!}
                                    style={{
                                        position: "absolute",
                                        top: 265,
                                        left: "50%",
                                        width: 230,
                                        height: 230,
                                        transform: "translateX(-50%)",
                                    }}
                                    setActiveMember={setActiveMember}
                                    defaultMember={defaultMember!}
                                />

                                {/* Bottom pair */}
                                <MemberThumb
                                    m={MEMBERS[4]!}
                                    style={{ position: "absolute", top: 530, left: 0, width: 230, height: 230 }}
                                    setActiveMember={setActiveMember}
                                    defaultMember={defaultMember!}
                                />
                                <MemberThumb
                                    m={MEMBERS[5]!}
                                    style={{ position: "absolute", top: 530, right: 0, width: 230, height: 230 }}
                                    setActiveMember={setActiveMember}
                                    defaultMember={defaultMember!}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keyframes for marquee */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
