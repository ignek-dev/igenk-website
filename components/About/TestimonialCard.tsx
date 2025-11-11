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
        className="flex bg-white rounded-3xl mr-[47px] shadow-sm overflow-hidden min-w-[989px] h-[468px]"
        style={{ scrollSnapAlign: "start" }}
      >
        {/* Video side */}
        <div className="relative w-[500px] h-full">
          {/* Actual video */}
          <video
            ref={videoRef}
            playsInline
            onClick={handleVideoToggle}
            className="absolute rounded-l-3xl inset-0 w-full h-full object-cover cursor-pointer"
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
                className="relative w-[111px] h-[111px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_0_#03002B1A] hover:scale-105 transition-all"
              >
                {/* Play triangle */}
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: "25px solid black",
                    borderTop: "15px solid transparent",
                    borderBottom: "15px solid transparent",
                    marginLeft: "5px",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        {/* Review side */}
        <div className="w-1/2 p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-5">
              <Image
                src={data.logo!}
                alt={data.companyName!}
                width={40}
                height={40}
                className="mr-3"
              />
              <h4 className="text-xl font-semibold text-gray-900 tracking-tight">
                {data.companyName}
              </h4>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              “{data.quote}”
            </p>
          </div>

          <div className="flex items-center mt-6">
            <Image
              src={data.authorAvatar!}
              alt={data.authorName!}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="font-semibold text-gray-900 text-base">
                {data.authorName}
              </p>
              <p className="text-sm text-gray-500">{data.authorTitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Text-only card
  return (
    <div
      className="bg-white rounded-3xl shadow-sm min-w-[500px] mr-[47px]  h-[468px] flex flex-col justify-between"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="p-[55px]">
        <div className="flex items-center mb-5">
          <Image
            src={data.logo!}
            alt={data.companyName!}
            width={40}
            height={40}
            className="mr-3"
          />
          <h4 className="text-xl font-semibold text-gray-900 tracking-tight">
            {data.companyName}
          </h4>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          “{data.quote}”
        </p>
      </div>
      <div className="flex items-center mt-[49px] p-[54px]">
        <Image
          src={data.authorAvatar!}
          alt={data.authorName!}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-900 text-base">
            {data.authorName}
          </p>
          <p className="text-sm text-gray-500">{data.authorTitle}</p>
        </div>
      </div>
    </div>
  );
};
