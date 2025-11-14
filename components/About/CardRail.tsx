"use client";
import React, { useEffect, useRef, useState } from "react";

export type Card = {
  title: string;
  desc: string;
};

interface CardRailProps {
  cards: Card[];
  width?: number;
  height?: number;
}

const CardRail: React.FC<CardRailProps> = ({ cards, width = 417, height = 469 }) => {
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
      className={`absolute top-[297px] px-[192px] pl-0 right-0 h-[469px] overflow-hidden transition-all duration-300 ${
        isAtStart ? "left-[192px]" : "left-[192px]"
      }`}
    >
      <div
        ref={scrollRef}
        className="flex h-full w-full gap-[64px] overflow-x-auto overflow-y-hidden 
                   scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory px-[192px]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="snap-start relative shrink-0 rounded-[30px] bg-[#00000094] 
                       backdrop-blur-[2px] text-center text-white 
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            style={{ width, height }}
          >
            {/* Title */}
            <div
              className="absolute left-[51px] top-[66px] h-[100px] w-[299px] text-center capitalize"
              style={{
                fontFamily: "Poppins, ui-sans-serif, system-ui",
                fontWeight: 500,
                fontSize: 36,
                lineHeight: "50px",
                letterSpacing: "-0.02em",
              }}
            >
              {c.title}
            </div>

            {/* Description */}
            <div
              className="absolute left-[51px] top-[209px] h-[120px] w-[316px] text-center"
              style={{
                fontFamily: "Poppins, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "30px",
                color: "#E5E7EB",
              }}
            >
              {c.desc}
            </div>

            {/* Divider */}
            <div className="absolute bottom-[70px] left-1/2 h-px w-[72%] -translate-x-1/2 bg-white/18" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRail;
