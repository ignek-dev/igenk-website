"use client"
import Image from "next/image"
import React from "react"
import { BlogSection } from "components/Common"
import EngagementModels from "components/Common/EngagementModels"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import WordsFromCEO from "components/Common/WordsFromCEO"
import LiferayTechnologicalStacks from "components/LiferayTechnologicalStacks"
import {
  easySteps,
  engagementModelsData,
  expertiseStats,
  hireLiferayHeroData,
  hireLiferayStepsData,
  hireLiferayWhyData,
  LiferayHireData,
  LiferayHireSubContent,
  LiferayHireTitle1,
  LiferayHireTitle2,
  liferayServicesHeaderData,
  talkToExperthire,
  teamOffersServices,
  whyHireFromIgnek,
} from "data/hire-liferay-developer"
import SchemaInjector from "seo/schemaInjector"
import { hireLiferayFaqSchema } from "seo/hireLiferayFaq.schema"

export default function LiferayHireDeveloper() {
  // Data for the marquee animation

  return (
    <>
      <SchemaInjector id="hire-liferay-faq-schema" schema={hireLiferayFaqSchema} />
      <main className="pb-0">
        {/* Hero Section */}
        <section className="relative bg-[#0B63CE] text-white">
          {/* Background Gradient */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

          {/* Main Content with updated padding */}
          <div className="global-container py-12 pt-24 lg:py-[4.688vw]">
            <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:mt-13 lg:grid-cols-2">
              {/* Left Side: Text Content */}
              <div>
                {/* <div className="inline-flex mt-[63px] w-fit items-center rounded-full border border-white px-8.5 py-[8.8px] text-lg font-normal">
                {hireLiferayHeroData.badgeText}
              </div> */}
                <h1 className="mt-[2.708vw]">
                  {hireLiferayHeroData.title.line1}
                  <br />
                  <span className="block">{hireLiferayHeroData.title.line2}</span>
                </h1>
                <p className="text-p16 md:text-p18 mt-4.5 w-full md:mt-10 xl:max-w-3xl">
                  {hireLiferayHeroData.description}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="hidden items-center justify-center lg:flex">
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
            <div className="relative flex w-full overflow-hidden pt-14.5 md:pt-20 lg:pt-22">
              <div className="animate-marquee-medium flex min-w-full flex-shrink-0 items-center justify-around">
                {expertiseStats.map((stat, index) => (
                  <React.Fragment key={index}>
                    <span className="mx-4 text-lg font-medium whitespace-nowrap lg:mx-8 lg:text-xl">{stat}</span>
                    <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                  </React.Fragment>
                ))}
                {expertiseStats.map((stat, index) => (
                  <React.Fragment key={`duplicate-${index}`}>
                    <span className="mx-4 text-lg font-medium whitespace-nowrap lg:mx-8 lg:text-xl">{stat}</span>
                    <Image src="/images/icon/Ellipse.png" alt="ecllips" width={14} height={14} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Why Hire Liferay Developer From IGNEK? */}
        <section className="bg-[#F6F6F6] py-16 text-black lg:py-[3.333vw]">
          <div className="global-container">
            {/* Section Header */}
            <div className="w-full">
              <h2>{hireLiferayWhyData.title}</h2>
              <p className="text-p16 md:text-p18 mt-4 text-gray-500 lg:mt-[1.458vw]">
                {hireLiferayWhyData.description}
              </p>
            </div>

            {/* Grid Structure */}
            <div className="mt-16 grid grid-cols-1 gap-x-9 gap-y-9 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:mt-[2.5vw] lg:grid-cols-3 lg:gap-x-42 lg:gap-y-[2.813vw]">
              {whyHireFromIgnek.map((item, index) => (
                <div key={index}>
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-start">
                    <Image
                      src={item.icon}
                      alt={`${item.title.join(" ")} icon`}
                      width={64}
                      height={64}
                      objectFit="contain"
                    />
                  </div>

                  {/* Title Container with fixed height */}
                  <div className="mt-6 lg:mt-[1.875vw]">
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
                  <hr className="my-6 border-t border-[#6B7280] lg:my-[1.875vw]" />

                  {/* Description */}
                  <p className="text-p16 md:text-p18 text-[#4B5563]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Get A Certified Liferay Developer In Just 3 Easy Steps */}{" "}
        <section className="bg-black py-16 py-[3.333vw] text-white">
          <div className="global-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
              {/* Left Side: Heading and Description */}
              <div className="flex flex-col justify-start">
                <h2 className="min-w-[36.719vw] text-[#FFFFFF]">
                  {hireLiferayStepsData.title.line1}
                  <span className="block">{hireLiferayStepsData.title.line2}</span>
                </h2>
                <p className="text-p16 md:text-p18 mt-4 text-[#E5E7EB] lg:mt-[1.458vw] lg:max-w-lg">
                  {hireLiferayStepsData.description}
                </p>
              </div>

              {/* Right Side: Stepper and Cards */}
              <div className="relative flex flex-col items-start justify-start space-y-10 lg:ml-[5.438vw]">
                {easySteps.map((stepItem, index) => (
                  <div
                    key={stepItem.step}
                    className={`relative flex w-full items-center gap-6 lg:gap-[2.5vw] ${
                      index === easySteps.length - 1 ? "mb-2.5" : "mb-12"
                    }`}
                  >
                    {/* Vertical Line */}
                    {index < easySteps.length - 1 && (
                      <div className="absolute top-34 left-[24px] h-[calc(100%+3.7rem)] w-[1.23px] bg-[#EAEAFF] md:top-26 md:left-[32px] md:h-[calc(100%+4.7rem)] lg:top-34"></div>
                    )}
                    {/* Step Number Circle */}
                    <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0C63CE] text-lg font-bold md:h-16 md:w-16 md:text-2xl">
                      {stepItem.step}
                    </div>

                    {/* Step Card */}
                    <div className="ml-3 w-full rounded-2xl bg-[#FFFFFF] p-6 shadow-lg md:ml-6 lg:ml-0 lg:w-[29.167vw] lg:p-[1.51vw]">
                      {/* Icon Container */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full md:h-18 md:w-18 lg:mb-[1.458vw]">
                        <Image src={stepItem.icon} alt="step icon" width={72} height={72} objectFit="contain" />
                      </div>
                      <h4 className="line-height-[36px] mb-4 text-[1.563vw] font-medium text-[#03030F] lg:mb-[0.885vw]">
                        {stepItem.title}
                      </h4>
                      <p className="text-p16 md:text-p18 text-[#03030F]/70">{stepItem.description}</p>
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
        <section className="bg-black py-16 text-white lg:pt-[3.333vw] lg:pb-[0.417vw]">
          <div className="global-container">
            {/* Section Header */}
            <div className="w-full">
              <h2 className="">{liferayServicesHeaderData.title}</h2>
              <p className="text-p16 md:text-p18 mt-4 text-gray-100 lg:mt-[1.458vw]">
                {liferayServicesHeaderData.description}
              </p>
            </div>
            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-12 lg:mt-[3.542vw] lg:grid-cols-2 lg:gap-x-[4.375vw]">
              {teamOffersServices.map((service, index) => {
                const total = teamOffersServices.length
                const isLastMobile = index === total - 1
                const isLastTwo = index >= total - 2

                return (
                  <div key={index} className={`group flex h-full flex-col justify-between pb-8 lg:pb-[2.917vw]`}>
                    {/* Inner Flex for Icon and Text */}
                    <div className="flex w-full flex-row items-start gap-6">
                      {/* Icon */}
                      <div
                        className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border border-[#1F2937] transition-all duration-300 ease-in lg:h-[116px] lg:w-[116px] lg:group-hover:bg-[#1d3fff]"
                        style={{
                          boxShadow: "rgba(29, 63, 255, 0.18) 0px 0px 24px 8px;",
                        }}
                      >
                        <Image
                          src={service.icon}
                          alt={`${service.title} icon`}
                          width={60}
                          height={60}
                          className="object-contain lg:h-[70px] lg:w-[77px]"
                        />
                      </div>

                      {/* Title + Description */}
                      <div className="flex w-full flex-col justify-start md:ml-[27px]">
                        <h4 className="mb-2 text-[1.563vw] font-medium lg:mb-[8px]">{service.title}</h4>

                        <p className="text-p16 md:text-p20 line-clamp-none leading-relaxed text-[#E5E7EB]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr
                      className={`mt-8 w-full border-t border-[#6B7280] lg:mt-[2.917vw] ${
                        isLastMobile ? "hidden" : ""
                      } md:${isLastMobile ? "hidden" : "block"} lg:${isLastTwo ? "hidden" : "block"} `}
                    />
                  </div>
                )
              })}
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
        <TalkToExpert
          heading={talkToExperthire.headingPart1}
          description={talkToExperthire.descriptionPart1}
          buttonText={talkToExperthire.buttonText}
        />
        <BlogSection />
      </main>
    </>
  )
}
