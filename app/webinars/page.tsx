"use client";
import { Metadata } from "next"
import Image from "next/image";
import Link from "next/link";

// --- Interfaces ---

import { featuredWebinar, liferayWebinarsPage, upcomingWebinars, webinarSection } from "../../data/Webinar";

const metadata: Metadata = {
  title: "Liferay Webinars | Expert-Led DXP Training Sessions",
  description:
    "Explore expert-led Liferay DXP webinars featuring technical training, best practices, and on-demand sessions to help you build scalable digital experiences.",

  openGraph: {
    url: "https://www.ignek.com/webinars/",
    title: "Liferay Webinars | Expert-Led DXP Training Sessions",
    description:
      "Explore expert-led Liferay DXP webinars featuring technical training, best practices, and on-demand sessions to help you build scalable digital experiences.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function Webinar() {
  
  return (
    <main className="mt-[-1px]">
      {/* Hero */}
      <section className="global-container relative bg-black pt-32 pb-16 lg:pt-[7.865vw] lg:pb-[4.427vw] text-white">
        {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" /> */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
          <h1 className="text-[#FFFFFF]">
            {liferayWebinarsPage.hero.headingLine1}

            <br />
            <span className="block">{liferayWebinarsPage.hero.headingLine2}</span>
          </h1>
          <p className="w-full lg:w-[39.992vw] lg:text-right text-p16 md:text-p18">
            {liferayWebinarsPage.hero.description}
          </p>
        </div>
      </section>

      <section className="global-container bg-[##F9FAF7] py-12 lg:pt-[3.333vw] lg:pb-[3.333vw] text-black">
         {/* Header part */}
          <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:justify-between lg:items-baseline-last lg:mb-[1.875vw] lg:gap-0">
              <h2 className="">
                {liferayWebinarsPage.pastWebinars.heading} <br/> {liferayWebinarsPage.pastWebinars.headingLine2}
              </h2>
              <p className="w-full text-[#374151] text-p16 md:text-p18 lg:text-right lg:w-[35.75vw]">
                {liferayWebinarsPage.pastWebinars.description}
              </p>
            </div>
     {/* 1. FEATURED IMAGE CARD (Dynamic Banner) */}
        <div className="w-full mb-12 hover:opacity-95 transition-opacity lg:mb-0">
            <Link href={featuredWebinar.link}>
                {/* Aspect Ratio Calculation: 
                   1534 / 753 = ~2.037
                   This ensures the image scales perfectly while keeping the Figma shape.
                */}
                <div className="relative hidden w-full aspect-[1534/753] rounded-xl lg:rounded-[20px] overflow-hidden shadow-lg">
                    <Image
                        src={featuredWebinar.image}
                        alt={featuredWebinar.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </Link>
        </div>

       {/* 2. GRID SECTION TITLE */}
        <div className="mb-8 mt-12 lg:mb-[2.396vw] lg:mt-[3.333vw]">
            <h2 className="text-3xl hidden md:text-4xl font-bold leading-tight">
                {webinarSection.heading}
                <br />
                {webinarSection.headingLine2}
            </h2>
        </div>

       {/* 3. CARD GRID - CORRECTED LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
          {upcomingWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group bg-white rounded-xl rounded-b-none overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full"
            >
              
              {/* TOP: Image Area */}
              <div className="relative w-full bg-black">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  height={254}
                  width={400}
                  className="object-cover max-h-[254px] h-full w-full"
                />
              </div>

              {/* MIDDLE: Dynamic Content */}
              <div className="p-5 flex flex-col flex-grow bg-white lg:p-[0.729vw] lg:pb-[0.833vw]">
                
                {/* Title */}
                <p className="text-p16 lg:text-p24 font-semibold! text-[#2D2C3C]! max-w-[24rem] mb-[0.729vw]">
                  {webinar.title}
                </p>

                {/* Details List (Spacing set to 14px approx 0.729vw) */}
                <div className="flex flex-col gap-3 lg:gap-[0.729vw] text-[0.833vw] text-[#5A5A5A]! mb-6 lg:mb-[1.5vw] flex-grow">
                  
                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5.5 h-5.5 mt-0.5 text-[#5A5A5A]! lg:w-[1.375vw] lg:h-[1.375vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="text-p14 lg:text-p18 font-semibold! text-[#5A5A5A]!">{webinar.location}</span>
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center gap-3">
                     <svg className="w-5.5 h-5.5 mt-0.5 text-[#5A5A5A]! lg:w-[1.375vw] lg:h-[1.375vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                    <span className="text-p14 lg:text-p18 text-[#5A5A5A]!">{webinar.date}</span>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5.5 h-5.5 mt-0.5 text-[#5A5A5A]! lg:w-[1.375vw] lg:h-[1.375vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    <span className="text-p14 lg:text-p18 text-[#5A5A5A]!">{webinar.time}</span>
                  </div>

                  {/* Cost */}
                  <div className="flex items-center gap-3">
                     <svg className="w-5.5 h-5.5 mt-0.5 text-[#5A5A5A]! lg:w-[1.375vw] lg:h-[1.375vw]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
                    <span className="text-p14 lg:text-p18 uppercase font-semibold! text-[#5A5A5A]!">{webinar.cost}</span>
                  </div>
                </div>

                {/* BOTTOM: Register Button */}
                <Link
                  href={webinar.link}
                  className="block w-full text-center  bg-black text-white  rounded-lg font-medium hover:bg-gray-800 transition-colors
                  py-2 px-6 text-base
                  lg:text-[1.25rem] lg:leading-[1.563vw] lg:px-[0.833vw] lg:py-[0.417vw]
                  "
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}