"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cardsData, whatMakesUsStandOutData } from "data/about-content"

const CARD_GAP_VW = 3.333

const StandoutSectionCarousel = () => {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const [index, setIndex] = useState(0)

    const totalCards = cardsData.length

    const handleNext = () => {
        setIndex((prev) => Math.min(prev + 1, totalCards - 1))
    }

    const handlePrev = () => {
        setIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
        <section className="relative isolate overflow-hidden global-container py-[6vw]">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/about/standout-img.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.80)_100%)]" />
            </div>

            {/* Heading */}
            <div className="mb-[6vw]">
                <h2 className="text-white capitalize mb-3">
                    {whatMakesUsStandOutData.title}
                </h2>
                <p className="text-[#E5E7EB] text-p14">
                    {whatMakesUsStandOutData.description}
                </p>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
                <motion.div
                    ref={trackRef}
                    className="flex w-max gap-[3.333vw]"
                    animate={{
                        x: `-${index * (50 + CARD_GAP_VW)}vw`,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        mass: 0.8,
                    }}
                >
                    {cardsData.map((card, i) => (
                        <div
                            key={i}
                            className="relative shrink-0 rounded-[16px] bg-black/58 h-[18rem] md:h-[29rem] lg:h-[24.479vw] w-[80vw] md:w-[45vw] backdrop-blur-[2px] text-center text-white px-6 pt-8 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        >
                            <div className="text-[20px] md:text-[2.25rem] lg:text-[1.875vw] font-medium mb-[2.6rem] lg:mb-4">
                                {card.title}
                            </div>
                            <div className="text-[#E5E7EB] text-p14 md:text-p20">
                                {card.desc}
                            </div>
                            <div className="absolute bottom-[12%] left-6 right-6 h-px bg-[#9CA3AF]" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Controls */}
            <div className="flex justify-end gap-4 mt-8">
                <button
                    onClick={handlePrev}
                    disabled={index === 0}
                    className="h-10 w-10 rounded-full border border-white/40 text-white disabled:opacity-30"
                >
                    ←
                </button>

                <button
                    onClick={handleNext}
                    disabled={index === totalCards - 1}
                    className="h-10 w-10 rounded-full border border-white/40 text-white disabled:opacity-30"
                >
                    →
                </button>
            </div>
        </section>
    )
}

export default StandoutSectionCarousel
