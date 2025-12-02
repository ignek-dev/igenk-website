"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { aboutJourneyContent, aboutPageData, companyTimelineData, TimelineCardData } from "data/about-content"

export interface TimelineCardProps {
  data: TimelineCardData
  tilt?: number
  showConnector?: boolean
}

const TimelineCard: React.FC<TimelineCardProps> = ({ data, tilt = 0, showConnector = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [offsets, setOffsets] = useState<number[]>([6.458, 3.875, 6.458, 3.854])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [data.images.length])

  return (
    <div className="relative mt-[5.625vw] flex flex-col items-center">
      <div className="absolute left-1/2 -z-10 flex h-[373px] -translate-x-1/2 items-start gap-[3.854vw]">
        <div className="border-opacity-40 relative flex h-[32.969vw] w-[0.052vw] flex-col items-center border border-r-0 border-[#9CA3AF]">
          <span
            style={{ top: "-14%", fontFamily: "Times New Roman" }}
            className="relative z-10 mb-3 text-[2.615vw] leading-[2.531vw] text-[#212121] italic"
          >
            {data.year}
          </span>
          <div
            style={{ marginTop: "-1.563vw" }}
            className="absolute left-1/2 mt-[0.417vw] h-[0.833vw] w-[0.833vw] -translate-x-1/2 bg-[#00979E]"
          />
        </div>

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

      <div
        className="flex w-[20.417vw] flex-col overflow-hidden rounded-[0.833vw] bg-white p-[1.25vw] shadow-md"
        style={{
          transform: `rotate(${data.rotation}deg)`,
          marginTop: `${data.marginTop}vw`,
        }}
      >
        <div className="relative h-[17.917vw] w-[17.917vw]">
          <Image
            src={data.images[currentImageIndex]?.src || ""}
            alt={data.images[currentImageIndex]?.alt || ""}
            fill
            className="h-[17.917vw] w-[17.917vw] rounded-[0.417vw] object-cover transition-opacity duration-500"
          />
          {data.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1">
              {data.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-[0.417vw] w-[0.417vw] rounded-full ${
                    idx === currentImageIndex ? "bg-[#000000]" : "bg-[#C4C4C4]"
                  }`}
                  style={{
                    transition: "background 0.2s",
                  }}
                  onClick={() => setCurrentImageIndex(idx)}
                  tabIndex={0}
                ></button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-[0.335vw] flex flex-col">
          <h3 className="!text-[1.146vw] !leading-[1.563vw] font-semibold tracking-[-0.025vw] text-black">
            {data.title}
          </h3>
          <p className="text-[0.833vw] leading-[1.25vw] text-black">{data.description}</p>
        </div>
      </div>

      {showConnector && (
        <div className="absolute top-full left-1/2 z-0 mt-2 h-24 w-0.5 -translate-x-1/2 bg-gray-300"></div>
      )}
    </div>
  )
}

const CompanyTimeline = () => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentScrollIndex((prev) => Math.max(0, prev - 1))
  }

  const cardsVisible = 3
  const maxScrollIndex = Math.max(0, companyTimelineData.length - cardsVisible)

  const goToNext = () => {
    setCurrentScrollIndex((prev) => Math.min(maxScrollIndex, prev + 1))
  }

  const scrollAmountVw = 23.438

  return (
    <section className="overflow-hidden bg-[#F6F6F6] pt-[3.385vw] pb-[3.802vw] pl-[10vw]">
      <div className="mb-[1.458vw] flex items-start justify-between pr-[10vw]">
        <div>
          <h2 className="mb-[1.458vw] text-black">{aboutJourneyContent.title}</h2>
          <p className="w-[46.875vw] text-[0.938vw] leading-[1.563vw] text-[#4B5563]">
            {aboutJourneyContent.description}
          </p>
        </div>

        <div className="flex gap-[1.25vw]">
          <button
            onClick={goToPrevious}
            className="flex h-[3.333vw] w-[3.333vw] cursor-pointer items-center justify-center rounded-full bg-black text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Image
              src="/images/about/arrow-left.png"
              className="h-[1.875vw] w-[1.875vw]"
              alt="left-arrow"
              width={18}
              height={18}
            />
          </button>
          <button
            onClick={goToNext}
            className="flex h-[3.333vw] w-[3.333vw] cursor-pointer items-center justify-center rounded-full bg-black text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Image
              src="/images/about/arrow-right.png"
              className="h-[1.875vw] w-[1.875vw]"
              alt="right-arrow"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>

      <div>
        <div className="overflow-hidden">
          {companyTimelineData.length > 0 && (
            <div
              className="relative z-10 flex gap-[2.969vw] pl-[0.365vw] transition-transform duration-500"
              style={{
                transform: `translateX(-${currentScrollIndex * scrollAmountVw}vw)`,
              }}
            >
              {companyTimelineData.map((item, i) => (
                <React.Fragment key={item.year}>
                  <TimelineCard data={item} showConnector={false} />
                  {i < companyTimelineData.length - 1 && (
                    <div className="relative z-0 h-[20.521vw] w-[0.052vw] flex-shrink-0 self-center bg-[#212121]/20" />
                  )}
                </React.Fragment>
              ))}
              <div className="w-[10vw] flex-shrink-0" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline
