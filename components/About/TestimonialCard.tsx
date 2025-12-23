import Image from "next/image";
import React, { useRef, useState } from "react";

// src={'/images/about/Testimonial - Global Digital Platform.mp4'}

export interface TestimonialData {
  id: string;
  type: "text" | "video-review";
  videoThumbnail?: string;
  logo?: string;
  companyName?: string;
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  authorAvatar?: string;
}

export const TestimonialCard: React.FC<{ data: TestimonialData }> = ({
  data,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  if (data.type === "video-review") {
    return (
      <div
        className=" flex flex-col md:flex-row
    bg-white rounded-3xl
    mr-4 lg:mr-[2.448vw]
    min-w-[85vw] md:min-w-[85vw] lg:min-w-[51.51vw] shadow-sm overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        {/* Video side */}
        <div className="relative min-w-[50%] lg:min-w-[26.042vw] h-full">
          {/* Actual video */}
          <video
            ref={videoRef}
            playsInline
            onClick={handleVideoToggle}
            className="rounded-l-3xl rounded-r-3xl rounded-b-none  inset-0 w-full h-full object-cover cursor-pointer"
          >
            <source
              src={"/images/about/Testimonial - Global Digital Platform.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay */}
          {!isPlaying && <div className="absolute inset-0 bg-black/10 pointer-events-none" />}

          {/* Play button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handleVideoToggle}
                className="relative w-[5.781vw] h-[5.781vw] rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_0_#03002B1A] hover:scale-105 transition-all"
              >
                {/* Play triangle */}
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: "1.302vw solid black",
                    borderTop: "0.781vw solid transparent",
                    borderBottom: "0.781vw solid transparent",
                    marginLeft: "0.26vw",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        {/* Review side */}
        <div className="lg:p-[2.083vw] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center h-[2.656vw] mb-[0.781vw]">
              <Image
                src={data.logo!}
                alt={data.companyName!}
                width={100}
                height={100}
                className="mr-[0.625vw] h-[2.656vw] w-auto"
              />
            </div>
            <p className="text-[#6F6C90] text-p12 lg:text-p18 py-0 lg:py-5">
              “{data.quote}”
            </p>
          </div>

          <div className="flex items-center mt-[1.771vw]">
            <Image
              src={data.authorAvatar!}
              alt={data.authorName!}
              width={100}
              height={100}
              className="rounded-full h-[3.125vw] w-[3.125vw]"
            />
            <div className="ml-[0.885vw]">
              <p className="font-bold text-[#170F49] leading-[1.042vw] text-[0.938vw]">
                {data.authorName}
              </p>
              <p className="text-[0.938vw] mt-[0.208vw] leading-[1.042vw] text-[#6F6C90]">{data.authorTitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Text-only card
  return (
    <div
      className="bg-white lg:p-[2.083vw] p-6 rounded-3xl shadow-sm min-w-[50%] lg:min-w-[26.042vw] mr-[2.448vw] flex flex-col justify-between"
      style={{ scrollSnapAlign: "start" }}
    >
      <div>
        <div className="flex items-center h-[2.656vw] mb-[0.781vw]">
          <Image
            src={data.logo!}
            alt={data.companyName!}
            width={100}
            height={100}
            className="mr-[0.625vw] h-7 lg:h-[2.656vw] w-auto "
          />
        </div>
        <p className="text-[#6F6C90] text-p12 lg:text-p18 py-0 lg:py-5">
          “{data.quote}”
        </p>
      </div>
      <div className="flex items-center  mt-[1.771vw]">
        <Image
          src={data.authorAvatar!}
          alt={data.authorName!}
          width={100}
          height={100}
          className="rounded-full h-[3.125vw] w-[3.125vw]"
        />
        <div className="ml-[0.885vw]">
          <p className="font-bold text-[#170F49] leading-[1.042vw] text-[0.938vw]">
            {data.authorName}
          </p>
          <p className="text-[0.938vw] mt-[0.208vw] leading-[1.042vw] text-[#6F6C90]">{data.authorTitle}</p>
        </div>
      </div>
    </div>
  );
};
