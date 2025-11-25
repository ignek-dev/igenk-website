"use client";
import React, { useEffect, useRef, useState } from "react";

export type Card = {
  title: string;
  desc: string;
};

interface CardRailProps {
  cards: Card[];
}

const CardRail: React.FC<CardRailProps> = ({ cards}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Track scroll position and apply threshold tolerance
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const tolerance = 5; // allows small rounding errors
      setIsAtStart(scrollEl.scrollLeft <= tolerance);
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`pl-0 mt-[5.885vw] overflow-hidden transition-all duration-300 ${isAtStart ? "left-[10vw]" : "left-[10vw]"
        }`}
    >
      <div
        ref={scrollRef}
        className="flex h-full w-full gap-[3.333vw] overflow-x-auto overflow-y-hidden 
                   scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory "
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="snap-start relative shrink-0 rounded-[1.563vw] bg-[#00000094] w-[21.719vw]
                       backdrop-blur-[2px] text-center text-white px-[2.76vw] pt-[3.438vw] pb-[4.115vw]
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)]"

          >
            {/* Title */}
            <div
              className="text-center capitalize text-[1.875vw] leading-[2.604vw] tracking-[-2%]"

            >
              {c.title}
            </div>

            {/* Description */}
            <div
              className="text-center h-[6.25vw] text-[#E5E7EB] text-[1.042vw] leading-[1.563vw] mt-[2.24vw] overflow-hidden line-clamp-4"
            >
              {c.desc}
            </div>

            {/* Divider */}
            <div className="h-[0.052vw] bg-[#9CA3AF] mt-[3.177vw]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRail;
