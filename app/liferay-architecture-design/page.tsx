"use client"
import { BlogSection } from "components/Common";
import HeroCTASection from "components/Common/HeroCTASection";
import WhatMake from "components/Common/WhatMake";
import { useEffect, useRef, useState } from "react";

export default function LiferayArchitectureDesignPage() {
    const featureTabs = [
        "System Architecture",
        "Database Architecture",
        "Deployment Architecture",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum"
    ]
    const systemArchitecure = [
        { text: "System Architecure1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" },
        { text: "System Architecure7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque" }
    ]
    const keyActivityArchitecureSystem = [
        { text: "Understand Business Goals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "System Components & frameworks", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "Protocols & Communication Channels", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "Aligning OOTB features with Use Cases.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "Draw Diagrams", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "System Testing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "Monitoring and Analytics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
        { text: "Custom Development & Customization", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." }
    ]
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);
    const [targetScroll, setTargetScroll] = useState<number | null>(null);

    // Custom smooth scroll logic (2-second easing)
    useEffect(() => {
        if (targetScroll === null || !containerRef.current) return;

        const start = containerRef.current.scrollLeft;
        const distance = targetScroll - start;
        const duration = 1200; // 2 seconds
        const startTime = performance.now();

        const smoothScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            containerRef.current!.scrollLeft = start + distance * ease;

            if (progress < 1) requestAnimationFrame(smoothScroll);
        };

        requestAnimationFrame(smoothScroll);
    }, [targetScroll]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollStart(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2.8; // reduced scroll speed
        setTargetScroll(scrollStart - walk);
    };
    return (
        <main className="pb-16">
            {/* Hero */}
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
                    <div className="grid items-start gap-10 md:grid-cols-2">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
                            <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                                Liferay
                                <br />
                                <span className="block">Architecture</span>
                                <span className="block">Design</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </p>
                    </div>

                    {/* Feature tabs */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        {featureTabs.map((label, index) => (
                            <span key={index} className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white transition-colors">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[0px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
                    <div className="flex overflow-x-hidden  gap-10"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        ref={containerRef}
                    >
                        {systemArchitecure.map((item, index) => (
                            <div
                                key={index}
                                className={`max-w-[22%] flex-shrink-0 pr-10 ${index !== systemArchitecure.length - 1 ? "border-r border-[#E5E7EB]" : ""
                                    }`}
                            >
                                <h3 className="text-[36px] font-semibold text-gray-600 mb-3 leading-normal mt-[73px]">
                                    {item.text}
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mt-[90px] mb-[73px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
                    <div className="grid items-start gap-10 md:grid-cols-2 relative">
                        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">Key Activities Under Our Liferay Architecture Design Services</h2>
                        <p className="max-w-xl text-xl text-white md:justify-self-end absolute bottom-0 text-white text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-[67px]">
                        {keyActivityArchitecureSystem.map((item, index) => (
                            <div key={index} className="col-span-12 p-4 grid grid-cols-12 gap-4 flex items-center">
                                <div className="col-span-3  font-medium text-3xl font-semibold mb-2 border-none pr-[100px] flex items-center">{item.text}</div>
                                <div className="col-span-9 border p-4 border-[#1F2937] rounded-[8px] text-xl h-[104px] flex items-center">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhatMake />
            <HeroCTASection />
            <BlogSection />
        </main>
    )
}