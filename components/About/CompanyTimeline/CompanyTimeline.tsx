"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface TimelineImage {
  src: string;
  alt: string;
}

export interface TimelineCardData {
  year: number;
  title: string;
  description: string;
  images: TimelineImage[];
  marginTop?: number;
}

export interface TimelineCardProps {
  data: TimelineCardData;
  marginTop: number;
  tilt?: number;
  showConnector?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  data,
  tilt = 0,
  showConnector = false,
  marginTop
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    const newOffsets = Array.from({ length: 4 }, () => Math.floor(Math.random() * 80 - 30));
    setOffsets(newOffsets);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  // generate random vertical offsets for dividers
  // const randomOffsets = Array.from({ length: 4 }, () => Math.floor(Math.random() * 60) - 30);

  return (
    <div className="relative flex flex-col items-center mt-16">
      {/* Background Dividers (first one has teal square) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-[60px] -z-10 items-start">
        {/* First Divider — main one with teal square */}

        <div className="relative w-[1px] bg-gray-400 h-[633px] flex flex-col items-center">
          <span style={{ top: "-11%" }} className="italic text-3xl text-gray-800 mb-3 relative z-10">
            {data.year}
          </span>
          <div style={{ marginTop: "-30px" }} className="absolute left-1/2 w-4 h-4 bg-teal-500 -translate-x-1/2 mt-2" />
        </div>

        {/* Remaining 4 straight background dividers */}
        {offsets.map((offset, idx) => (
          <div
            key={idx}
            className="w-[1px] bg-[#212121]"
            style={{
              height: "500px",
              opacity: 0.25,
              transform: `translateY(${offset}px)`,
            }}
          ></div>
        ))}
      </div>

      {/* Card */}
      <div
        className="w-[392px] h-[530px] rounded-[16px] p-[24px] shadow-md bg-white flex flex-col overflow-hidden"
        style={{
          transform: `rotate(${tilt}deg)`,
          marginTop: `${marginTop}px`
        }}
      >
        {/* Image at the top */}
        <div className="relative w-[343px] h-[343px]">
          <Image
            src={data.images[currentImageIndex]?.src || ""}
            alt={data.images[currentImageIndex]?.alt || ""}
            fill
            className="object-cover transition-opacity duration-500 rounded-[8px]"
          />
          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {data.images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full border border-white ${idx === currentImageIndex ? "bg-white" : "bg-white/60"
                  }`}
                style={{
                  transition: "background 0.2s"
                }}
                onClick={() => setCurrentImageIndex(idx)}
                tabIndex={0}
              ></button>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col justify-end">
          <h3 className="font-poppins font-semibold text-[22px] leading-[30px] tracking-[-0.48px] align-middle text-black">
            {data.title}
          </h3>
          <p className="font-poppins font-normal text-[16px] leading-[24px] tracking-[0] align-middle text-black">
            {data.description}
          </p>
        </div>
      </div>

      {/* Optional connector to next card */}
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

  const goToPrevious = () => {
    setCurrentScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentScrollIndex((prev) =>
      Math.min(timelineData.length - 4, prev + 1)
    );
  };

  const baseTimelineData: TimelineCardData[] = [
    {
      year: 2018,
      title: "IGNEK is Born",
      description:
        "Started by Mr Bhavin Panchani with a clear vision to build innovative digital solutions, rooted in a passion for design, development, and seamless experiences.",
      images: [
        { src: "/images/about/timeline/2018/img-1.JPG", alt: "Office-2018" },
        { src: "/images/about/timeline/2018/img-2.JPG", alt: "Office-2018" },
        { src: "/images/about/timeline/2018/img-3.JPG", alt: "Office-2018" },
      ],
    },
    {
      year: 2019,
      title: "First Global Client Win",
      description:
        "Successfully onboarded our first overseas client, setting the tone for a strong international presence and long-term collaborations.",
      images: [
        { src: "/images/about/timeline/2019/img-1.jpg", alt: "Office-2019" },
      ],
    },
    {
      year: 2020,
      title: "Embracing Remote Culture",
      description:
        "Adapted swiftly to global changes, expanded our remote delivery capabilities while maintaining top-notch project quality.",
      images: [
        { src: "/images/about/timeline/2020/img-1.jpg", alt: "Office-2020" },
      ],
    },
    {
      year: 2021,
      title: "Moved to a Bigger Space",
      description:
        "Shifted to a new office to accommodate our growing team and evolving infrastructure needs — a big step toward scalability.",
      images: [
        { src: "/images/about/timeline/2021/img-1.jpeg", alt: "Office-2021" },
      ],
    },
    {
      year: 2022,
      title: "Team IGNEK Crosses 25+",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2022/img-1.jpg", alt: "Office-2022" },
      ],
    },
    {
      year: 2023,
      title: "New Service Verticals Launched",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2023/img-1.jpg", alt: "Office-2023" },
      ],
    },
    {
      year: 2024,
      title: "A New Home Again",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2024/img-1.JPG", alt: "Office-2024" },
      ],
    },
    {
      year: 2025,
      title: "IGNEK Goes Global",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2025/img-1.jpg", alt: "Office-2025" },
      ],
    },
  ];


  // Add random marginTop to each item
  // let prevMargin = 202;

  // const staggeredMargins = generateStaggeredMargins(baseTimelineData.length);

  const [timelineData, setTimelineData] = useState<TimelineCardData[]>([]);

  useEffect(() => {
    const randomized = baseTimelineData.map((item, i) => ({
      ...item,
      marginTop:
        i === 0
          ? 202
          : Math.floor(Math.random() * (260 - 70 + 1)) + 70,
    }));
    setTimelineData(randomized);
  }, []);



  return (
    <section className="py-[64px] h-[1117px] bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between mb-12">
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
      <div className="relative overflow-hidden h-[860px] pl-[192px] pr-[192px]">
        {/* Center Line */}
        {/* <div className="absolute top-[60px] left-[192px] right-[192px] h-[1px] bg-gray-300 z-0"></div> */}

        {/* Cards Container */}
        <div
          className="relative flex gap-24 transition-transform duration-500 z-10 "
          style={{
            transform: `translateX(-${currentScrollIndex * 340}px)`,
          }}
        >
          {timelineData.length > 0 && (
            <div
              className="relative flex gap-10 transition-transform duration-500 z-10"
              style={{
                transform: `translateX(-${currentScrollIndex * 340}px)`,
              }}
            >
              {timelineData.map((item, i) => (
                <React.Fragment key={item.year}>
                  <TimelineCard
                    data={item}
                    tilt={i % 2 === 0 ? -2 : 2}
                    showConnector={false}
                    marginTop={item.marginTop!}
                  />
                  {i < timelineData.length - 1 && (
                    <div className="w-[1px] bg-[#212121]/20 h-[394px] self-center relative z-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
