"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface TimelineImage {
  src: string;
  alt: string;
}

export interface TimelineCardData {
  year: number;
  title: string;
  description: string;
  images: TimelineImage[];
}

export interface TimelineCardProps {
  data: TimelineCardData;
  tilt?: number;
  showConnector?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  data,
  tilt = 0,
  showConnector = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* Year */}
      <span className="italic text-3xl text-gray-800 mb-3">{data.year}</span>

      {/* Line + Dot */}
      <div className="relative w-0.5 h-10 bg-gray-300">
        <div className="absolute top-full left-1/2 w-3 h-3 bg-teal-500 -translate-x-1/2 mt-1 rounded-full"></div>
      </div>

      {/* Card Wrapper */}
      <div className="relative mt-6 w-[300px] h-[492.42px] flex items-center justify-center">
        {/* === Background Dividers (behind card) === */}
        <div className="absolute inset-0 flex justify-center gap-[76px] opacity-20 z-0">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-[1px] h-[492.42px] bg-[#212121]"
            ></div>
          ))}
        </div>

        {/* === Card === */}
        <div className="relative bg-white rounded-2xl shadow-md overflow-hidden w-full z-10">
          <div className="relative h-48">
            <Image
              src={data.images[currentImageIndex]?.src || ""}
              alt={data.images[currentImageIndex]?.alt || ""}
              fill
              className="object-cover transition-opacity duration-500"
            />

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {data.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                ></button>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-black mb-2">
              {data.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Connector Line Between Cards */}
      {showConnector && (
        <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gray-300 mt-2 -translate-x-1/2 z-0"></div>
      )}
    </div>
  );
};

// -----------------------------
// Main Timeline Component
// -----------------------------
const CompanyTimeline = () => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  const timelineData: TimelineCardData[] = [
    {
      year: 2018,
      title: "IGNEK is Born",
      description:
        "Started by Mr Bhavin Panchani with a clear vision to build innovative digital solutions, rooted in a passion for design, development, and seamless experiences.",
      images: [
        { src: "/images/about/ayushi-1.jpg", alt: "New office reception" },
        { src: "/images/about/kishan.jpg", alt: "Office celebration" },
      ],
    },
    {
      year: 2019,
      title: "First Global Client Win",
      description:
        "Successfully onboarded our first overseas client, setting the tone for a strong international presence and long-term collaborations.",
      images: [
        { src: "/images/about/ayushi-1.jpg", alt: "New office reception" },
        { src: "/images/about/kishan.jpg", alt: "Office celebration" },
      ],
    },
    {
      year: 2020,
      title: "Embracing Remote Culture",
      description:
        "Adapted swiftly to global changes, expanded our remote delivery capabilities while maintaining top-notch project quality.",
      images: [
        { src: "/images/about/ayushi-1.jpg", alt: "New office reception" },
        { src: "/images/about/kishan.jpg", alt: "Office celebration" },
      ],
    },
    {
      year: 2021,
      title: "Moved to a Bigger Space",
      description:
        "Shifted to a new office to accommodate our growing team and evolving infrastructure needs — a big step toward scalability.",
      images: [
        { src: "/images/about/ayushi-1.jpg", alt: "New office reception" },
        { src: "/images/about/kishan.jpg", alt: "Office celebration" },
      ],
    },
    {
      year: 2022,
      title: "Building the Future",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/ayushi-1.jpg", alt: "New office reception" },
        { src: "/images/about/kishan.jpg", alt: "Office celebration" },
      ],
    },
  ];

  const goToPrevious = () => {
    setCurrentScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentScrollIndex((prev) =>
      Math.min(timelineData.length - 4, prev + 1)
    );
  };

  return (
    <section className="py-[64px] bg-gray-50 relative overflow-hidden h-[1078px]">
      {/* Header */}
      <div className="flex items-start justify-between mb-16 relative z-10">
        <div className="pl-[192px]">
          <h2 className="text-5xl font-semibold text-black mb-4">
            From Startup Spark To Tech Powerhouse
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 pr-[192px]">
          <button
            onClick={goToPrevious}
            disabled={currentScrollIndex === 0}
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={currentScrollIndex >= timelineData.length - 4}
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 disabled:opacity-50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative overflow-hidden pl-[192px] pr-[192px] z-10">
        {/* Center Line */}
        <div className="absolute top-[60px] left-[192px] right-[192px] h-[1px] bg-gray-300 z-0"></div>

        {/* Cards Container */}
        <div
          className="relative flex gap-10 transition-transform duration-500 z-10"
          style={{
            transform: `translateX(-${currentScrollIndex * 340}px)`,
          }}
        >
          {timelineData.map((item, i) => (
            <TimelineCard
              key={item.year}
              data={item}
              tilt={i % 2 === 0 ? -3 : 3}
              showConnector={i < timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
