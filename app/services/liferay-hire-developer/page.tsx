"use client"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"
import { BlogSection } from "components/Common"
import EngagementModels from "components/Common/EngagementModels"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import WordsFromCEO from "components/Common/WordsFromCEO"
import LiferayTechnologicalStacks from "components/LiferayTechnologicalStacks"
import { easySteps, engagementModelsData, expertiseStats, hireLiferayHeroData, hireLiferayStepsData, hireLiferayWhyData, LiferayHireData, LiferayHireSubContent, LiferayHireTitle1, LiferayHireTitle2, liferayServicesHeaderData, teamOffersServices, whyHireFromIgnek } from "data/liferay-hire-developer"

const metadata: Metadata = {
  title: "Hire Liferay Developer | 1-Week Risk-Free Trial - IGNEK",
  description:
    "Hire Liferay developer from us and set up your own Liferay Development team to elevate your Liferay portal development projects.",

  openGraph: {
    url: "https://www.ignek.com/hire-liferay-developer/",
    title: "Hire Liferay Developer | 1-Week Risk-Free Trial - IGNEK",
    description:
      "Hire Liferay developer from us and set up your own Liferay Development team to elevate your Liferay portal development projects.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayHireDeveloper() {


  // Data for the marquee animation

  return (
    <main className="pb-0">
      {/* Hero Section */}
      <section className="relative bg-[#0B63CE] text-white">
        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

        {/* Main Content with updated padding */}
        <div className="global-container py-[4.688vw]">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 mt-13">
            {/* Left Side: Text Content */}
            <div>
              <div className="inline-flex mt-[63px] w-fit items-center rounded-full border border-white px-8.5 py-[8.8px] text-lg font-normal">
                {hireLiferayHeroData.badgeText}
              </div>
              <h1 className="mt-[2.708vw]">
                {hireLiferayHeroData.title.line1}
                <br />
                <span className="block">{hireLiferayHeroData.title.line2}</span>
              </h1>
              <p className="line-height-[28px] mt-10 max-w-3xl text-lg font-normal">
                {hireLiferayHeroData.description}
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/liferay-pages-image/liferay-consultation-page/Liferay-dxp.png"
                alt="Liferay DXP"
                width={280}
                height={280}
                className="h-auto max-w-sm"
              />
            </div>
          </div>

          {/* Marquee Animation Bar */}
          <div className="relative flex w-full overflow-hidden pt-22">
            <div className="animate-marquee-medium flex min-w-full flex-shrink-0 items-center justify-around">
              {expertiseStats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="mx-8 text-xl font-medium">{stat}</span>
                  <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                </React.Fragment>
              ))}
              {expertiseStats.map((stat, index) => (
                <React.Fragment key={`duplicate-${index}`}>
                  <span className="mx-8 text-xl font-medium">{stat}</span>
                  <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Hire Liferay Developer From IGNEK? */}
      <section className="bg-[#F6F6F6] py-[3.333vw] text-black">
        <div className="global-container">
          {/* Section Header */}
          <div className="w-full">
            <h2>{hireLiferayWhyData.title}</h2>
            <p className="p18 mt-[1.458vw] text-gray-500">
              {hireLiferayWhyData.description}
            </p>
          </div>

          {/* Grid Structure */}
          <div className="mt-[2.5vw] grid grid-cols-1 gap-x-42 gap-y-[2.813vw] md:grid-cols-2 lg:grid-cols-3">
            {whyHireFromIgnek.map((item, index) => (
              <div key={index}>
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.title.join(" ")} icon`}
                    width={64}
                    height={64}
                    objectFit="contain"
                  />
                </div>

                {/* Title Container with fixed height */}
                <div className="mt-[1.875vw]">
                  <h3 className="whitespace-pre">
                    {/* Map over the title array to create line breaks */}
                    {item.title.map((line, lineIndex) => (
                      <span key={lineIndex} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Divider */}
                <hr className="my-[1.875vw] border-t border-[#6B7280]" />

                {/* Description */}
                <p className="p16 text-[#4B5563]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Get A Certified Liferay Developer In Just 3 Easy Steps */}{" "}
      <section className="bg-black py-[3.333vw] text-white">
        <div className="global-container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side: Heading and Description */}
            <div className="flex flex-col justify-start">
              <h2 className="min-w-[36.719vw] text-[#FFFFFF]">
                {hireLiferayStepsData.title.line1}
                <span className="block">{hireLiferayStepsData.title.line2}</span>
              </h2>
              <p className="p18 mt-[1.458vw] max-w-lg text-[#E5E7EB]">
                {hireLiferayStepsData.description}
              </p>
            </div>

            {/* Right Side: Stepper and Cards */}
            <div className="relative flex flex-col items-start justify-start ml-[5.438vw]">
              {easySteps.map((stepItem, index) => (
                <div
                  key={stepItem.step}
                  className={`relative flex w-full items-center ${index === easySteps.length - 1 ? "mb-2.5" : "mb-12"}`}
                >
                  {/* Vertical Line */}
                  {index < easySteps.length - 1 && (
                    <div className="absolute top-35 left-[32px] h-[calc(100%+4.7rem)] w-[1.23px] bg-[#EAEAFF]"></div>
                  )}
                  {/* Step Number Circle */}
                  <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#0C63CE] text-2xl font-bold">
                    {stepItem.step}
                  </div>

                  {/* Step Card */}
                  <div className="ml-[2.5vw] w-[29.167vw] rounded-2xl bg-[#FFFFFF] p-[1.51vw] shadow-lg">
                    {/* Icon Container */}
                    <div className="mb-[1.458vw] flex h-18 w-18 items-center justify-center rounded-full">
                      <Image src={stepItem.icon} alt="step icon" width={72} height={72} objectFit="contain" />
                    </div>
                    <p className="line-height-[36px] mb-[0.885vw] text-[1.563vw] font-medium text-[#03030F]">
                      {stepItem.title}
                    </p>
                    <p className="text-lg text-[#03030F]/70">{stepItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Models Section */}
      <EngagementModels
        title={
          <>
            {engagementModelsData.titleLine1}
            <span className="block">{engagementModelsData.titleLine2}</span>
          </>
        }
        description={engagementModelsData.description}
      />
      {/* Services Our Liferay Development Team Offers */}
      <section className="bg-black pt-[3.333vw] pb-[0.417vw] text-white">
        <div className="global-container">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="">{liferayServicesHeaderData.title}</h2>
            <p className="p18 mt-[1.458vw] text-gray-100">
              {liferayServicesHeaderData.description}
            </p>
          </div>
          {/* Services Grid */}
          <div className="mt-[3.542vw] grid grid-cols-1 gap-x-[4.375vw] md:grid-cols-2">
            {teamOffersServices.map((service, index) => (
              <div key={index} className={`flex h-full group flex-col justify-between pb-[2.917vw]`}>
                {/* Inner Flex for Icon and Text */}
                <div className="flex w-full items-start">
                  {/* Icon */}
                  <div
                    className="flex h-[116px] w-[116px] flex-shrink-0 items-center justify-center rounded-full border border-[#1F2937] group-hover:bg-[#1d3fff] transition-all duration-300 ease-in"
                    style={{
                     boxShadow: "rgba(29, 63, 255, 0.18) 0px 0px 24px 8px;"
                    }}
                  >
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={77}
                      height={70}
                      objectFit="contain"
                    />
                  </div>

                  {/* Title + Description */}
                  <div className="ml-[27px] flex w-full flex-col justify-start">
                    <p className="mb-[8px] text-[1.563vw] font-medium">{service.title}</p>

                    <p className="line-clamp-none p20 leading-relaxed text-[#E5E7EB]">{service.description}</p>
                  </div>
                </div>

                {/* Divider */}
                {index < teamOffersServices.length - 2 && <hr className="mt-[2.917vw] border-t border-[#6B7280]" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Liferay Technological Stacks */}
      <LiferayTechnologicalStacks />
      {/* Words from CEO */}
      <WordsFromCEO />
      {/* <section className="bg-white text-black"></section> */}
      <WhatMake
        WhatMakeData={LiferayHireData}
        titleText1={LiferayHireTitle1}
        titleText2={LiferayHireTitle2}
        subContext={LiferayHireSubContent}
      />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
