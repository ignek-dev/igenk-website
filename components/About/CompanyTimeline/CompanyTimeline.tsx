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
  rotation: number;
  marginTop: number;
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
  const [offsets, setOffsets] = useState<number[]>([6.458, 3.875, 6.458, 3.854]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  // generate random vertical offsets for dividers
  // const randomOffsets = Array.from({ length: 4 }, () => Math.floor(Math.random() * 60) - 30);

  return (
    <div className="relative flex flex-col items-center mt-[5.625vw]">
      {/* Background Dividers (first one has teal square) */}
      <div className="absolute h-[373px] left-1/2 -translate-x-1/2 flex gap-[3.854vw] -z-10 items-start">
        {/* First Divider — main one with teal square */}

        <div className="relative w-[0.052vw]  border border-r-0 border-[#212121] border-opacity-40 h-[32.969vw] flex flex-col items-center">
          <span style={{ top: "-14%", fontFamily: "Times New Roman" }} className="italic leading-[2.531vw] text-[2.615vw] text-[#212121] mb-3 relative z-10">
            {data.year}
          </span>
          <div style={{ marginTop: "-1.563vw" }} className="absolute left-1/2 w-[0.833vw] h-[0.833vw] bg-[#00979E] -translate-x-1/2 mt-[0.417vw]" />
        </div>

        {/* Remaining 4 straight background dividers */}
        {offsets.map((offset, idx) => (
          <div
            key={idx}
            className="w-[0.052vw] bg-[#212121] opacity-20"
            style={{
              height: "15.625vw",
              transform: `translateY(${offset}vw)`,
            }}
          ></div>
        ))}
      </div>

      {/* Card */}
      <div
        className="w-[20.417vw] rounded-[0.833vw] p-[1.25vw] shadow-md bg-white flex flex-col overflow-hidden"
        style={{
          transform: `rotate(${data.rotation}deg)`,
          marginTop: `${data.marginTop}vw`
        }}
      >
        {/* Image at the top */}
        <div className="relative w-[17.917vw] h-[17.917vw]">
          <Image
            src={data.images[currentImageIndex]?.src || ""}
            alt={data.images[currentImageIndex]?.alt || ""}
            fill
            className="object-cover w-[17.917vw] h-[17.917vw] transition-opacity duration-500 rounded-[0.417vw]"
          />
          {/* Dots indicator - only show if more than 1 image */}
          {data.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {data.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-[0.417vw] h-[0.417vw] rounded-full ${idx === currentImageIndex ? "bg-[#000000]" : "bg-[#C4C4C4]"
                    }`}
                  style={{
                    transition: "background 0.2s"
                  }}
                  onClick={() => setCurrentImageIndex(idx)}
                  tabIndex={0}
                ></button>
              ))}
            </div>
          )}
        </div>

        {/* Text content */}
        <div className="flex flex-col mt-[0.335vw]">
          <h3 className="!text-[1.146vw] font-semibold !leading-[1.563vw] tracking-[-0.025vw] text-black">
            {data.title}
          </h3>
          <p className="text-[0.833vw] leading-[1.25vw] text-black">
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

  const timelineData: TimelineCardData[] = [
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
      rotation: -2,
      marginTop: 5.698,
    },
    {
      year: 2019,
      title: "First Global Client Win",
      description:
        "Successfully onboarded our first overseas client, setting the tone for a strong international presence and long-term collaborations.",
      images: [
        { src: "/images/about/timeline/2019/img-1.jpg", alt: "Office-2019" },
      ],
      rotation: 1.2,
      marginTop: 8.49,
    },
    {
      year: 2020,
      title: "Embracing Remote Culture",
      description:
        "Adapted swiftly to global changes, expanded our remote delivery capabilities while maintaining top-notch project quality.",
      images: [
        { src: "/images/about/timeline/2020/img-1.jpg", alt: "Office-2020" },
      ],
      rotation: 1.2,
      marginTop: 2.083,
    },
    {
      year: 2021,
      title: "Moved to a Bigger Space",
      description:
        "Shifted to a new office to accommodate our growing team and evolving infrastructure needs — a big step toward scalability.",
      images: [
        { src: "/images/about/timeline/2021/img-1.jpeg", alt: "Office-2021" },
      ],
      rotation: -2,
      marginTop: 8.438,
    },
    {
      year: 2022,
      title: "Team IGNEK Crosses 25+",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2022/img-1.jpg", alt: "Office-2022" },
      ],
      rotation: 1.2,
      marginTop: 9.219,
    },
    {
      year: 2023,
      title: "New Service Verticals Launched",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2023/img-1.jpg", alt: "Office-2023" },
      ],
      rotation: -2,
      marginTop: 1.563,
    },
    {
      year: 2024,
      title: "A New Home Again",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2024/img-1.JPG", alt: "Office-2024" },
      ],
      rotation: 1.2,
      marginTop: 9.219,
    },
    {
      year: 2025,
      title: "IGNEK Goes Global",
      description:
        "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
      images: [
        { src: "/images/about/timeline/2025/img-1.jpg", alt: "Office-2025" },
      ],
      rotation: -2,
      marginTop: 3.854,
    },
  ];

  return (
    <section className="pt-[3.385vw] pb-[3.802vw] pl-[10vw] bg-[#F6F6F6] overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between pr-[10vw] mb-[1.458vw]">
        <div>
          <h2 className="text-black mb-[1.458vw]">
            From Startup Spark To Tech Powerhouse
          </h2>
          <p className="text-[#4B5563] leading-[1.563vw] text-[0.938vw] w-[46.875vw]">
            From a small startup to a leading Liferay powerhouse, our journey reflects innovation and excellence.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-[1.25vw]">
          <button
            onClick={goToPrevious}
            disabled={currentScrollIndex === 0}
            className="w-[3.333vw] cursor-pointer h-[3.333vw] bg-black text-white rounded-full flex items-center justify-center disabled:opacity-50"
          >
            <Image src="/images/about/arrow-left.png" className="h-[1.875vw] w-[1.875vw]" alt="left-arrow" width={18} height={18} />
          </button>
          <button
            onClick={goToNext}
            disabled={currentScrollIndex >= timelineData.length - 4}
            className="w-[3.333vw] cursor-pointer h-[3.333vw] bg-black text-white rounded-full flex items-center justify-center disabled:opacity-50"
          >
            <Image src="/images/about/arrow-right.png" className="h-[1.875vw] w-[1.875vw]" alt="right-arrow" width={18} height={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div>
        {/* Center Line */}
        {/* <div className="absolute top-[60px] left-[192px] right-[192px] h-[1px] bg-gray-300 z-0"></div> */}

        {/* Cards Container */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentScrollIndex * 340}px)`,
          }}
        >
          {timelineData.length > 0 && (
            <div
              className="relative flex gap-[2.969vw] pl-[0.365vw] transition-transform duration-500 z-10"
              style={{
                transform: `translateX(-${currentScrollIndex * 340}px)`,
              }}
            >
              {timelineData.map((item, i) => (
                <React.Fragment key={item.year}>
                  <TimelineCard
                    data={item}
                    showConnector={false}
                  />
                  {i < timelineData.length - 1 && (
                    <div className="w-[0.052vw] bg-[#212121]/20 h-[20.521vw] self-center relative z-0" />
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