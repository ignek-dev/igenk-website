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
import { easySteps, expertiseStats, teamOffersServices, whyHireFromIgnek } from "data/liferay-hire-developer"


 const metadata: Metadata = {
  title: "Hire Liferay Developer | 1-Week Risk-Free Trial - IGNEK",
  description:
    "Hire Liferay developer from us and set up your own Liferay Development team to elevate your Liferay portal development projects.",

  openGraph: {
    url: "https://www.ignek.com/hire-liferay-developer/",
    title: "Hire Liferay Developer | 1-Week Risk-Free Trial - IGNEK",
    description: "Hire Liferay developer from us and set up your own Liferay Development team to elevate your Liferay portal development projects.",
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
  const LiferayHireTitle1 = "Why Hire Liferay Developer"
  const LiferayHireTitle2 = "From IGNEK?"
  const LiferayHireSubContent = "At IGNEK, our Liferay Consultant bring over a decade of experience, crafting secure, scalable solutions across various industries. Hire Liferay developer for innovative problem-solving."

  const LiferayHireData = [
    {
      title: "Certified Liferay Developer",
      desc: "Our developers are certified in Liferay, meaning they’ve undergone rigorous training and testing to prove their proficiency. You can trust their knowledge and abilities.",
    },
    {
      title: "Transparent Communication",
      desc: "We believe in transparent communication throughout the development process. You’ll always be kept in the loop, with regular updates and open dialogue to address any concerns or questions.",
    },
    {
      title: "Flexible Hiring Models",
      desc: "Choose from our flexible hiring models! Tailored to suit your needs, whether it’s hourly, part-time, or full-time. Get the flexibility you need to scale your team as your project demands.",
    },
    {
      title: "Fully Signed NDA",
      desc: "Our fully signed NDA ensures complete confidentiality. Protect your sensitive information with our legally binding agreements. Peace of mind guaranteed.",
    },
    {
      title: "Cost-Effective",
      desc: "Hiring a dedicated Liferay Developer from IGNEK is cost-effective. You get access to top-tier talent without the overhead costs associated with in-house hiring.",
    },
    {
      title: "Easy Exit Policy",
      desc: "Our Easy Exit Policy ensures a hassle-free process when ending services. We prioritize your satisfaction, making transitions smooth and transparent.",
    },
  ]

  // Data for the marquee animation

  return (
    <main className="pb-0">
      {/* Hero Section */}
      <section className="relative bg-[#0B63CE] text-white">
        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

        {/* Main Content with updated padding */}
        <div className="mx-auto w-full px-4 pt-50 pb-16 md:px-8 md:pt-48 md:pb-16 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            {/* Left Side: Text Content */}
            <div>
              <div className="inline-flex w-fit items-center rounded-full border border-white px-8.5 py-[8.8px] text-lg font-normal">
                Hire Us
              </div>
              <h1 className="line-height-[88px] letter-spacing-[-0.02em] mt-13 text-7xl leading-tight font-bold sm:text-5xl md:text-6xl">
                Hire Liferay
                <br />
                <span className="block">Developer</span>
              </h1>
              <p className="line-height-[28px] mt-10 max-w-xl text-lg font-normal">
                We’re a team of certified Liferay developer and Liferay Consultant with deep expertise spanning various
                versions of the Liferay Portal. Our “Liferay first” approach has saved clients significant costs and
                time, resulting in successful deliveries. Hire our Liferay developer for cost-effective solutions and
                faster time-to-market.
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
            <div className="animate-marquee-fast flex min-w-full flex-shrink-0 items-center justify-around">
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
      <section className="bg-[#F6F6F6] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-5xl leading-tight font-bold tracking-tight">Why Hire Liferay Developer From IGNEK?</h2>
            <p className="mt-4 text-lg text-black/80">
              At IGNEK, our Liferay Consultant bring over a decade of experience, crafting secure, scalable solutions
              across various industries. Hire Liferay developer for innovative problem-solving.
            </p>
          </div>

          {/* Grid Structure */}
          <div className="mt-12 grid grid-cols-1 gap-x-42 gap-y-13.5 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="mt-8.5">
                  <h3 className="line-height-[44px] letter-spacing-[-0.02em] text-4xl font-semibold whitespace-pre">
                    {/* Map over the title array to create line breaks */}
                    {item.title.map((line, lineIndex) => (
                      <span key={lineIndex} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Divider */}
                <hr className="my-9 border-t border-[#6B7280]" />

                {/* Description */}
                <p className="text-base leading-relaxed text-[#4B5563]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Get A Certified Liferay Developer In Just 3 Easy Steps */}{" "}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left Side: Heading and Description */}
            <div className="flex flex-col justify-start pt-10">
              <h2 className="line-height-[60px] letter-spacing-[-0.02em] text-5xl leading-tight font-semibold tracking-tight text-[#FFFFFF]">
                Get A Certified Liferay
                <span className="block">Developer In Just 3 Easy Steps</span>
              </h2>
              <p className="mt-6 max-w-lg text-xl text-[#E5E7EB]">
                Hire Liferay developer in just three effortless steps with us! With our refined process, finding the
                perfect Liferay Consultant for your project is quick, efficient, and hassle-free.
              </p>
            </div>

            {/* Right Side: Stepper and Cards */}
            <div className="relative flex flex-col items-start justify-start">
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
                  <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl font-bold">
                    {stepItem.step}
                  </div>

                  {/* Step Card */}
                  <div className="ml-12 w-full rounded-2xl bg-[#FFFFFF] p-7.5 shadow-lg">
                    {/* Icon Container */}
                    <div className="mb-7 flex h-18 w-18 items-center justify-center rounded-full">
                      <Image src={stepItem.icon} alt="step icon" width={72} height={72} objectFit="contain" />
                    </div>
                    <h3 className="line-height-[36px] mb-4.5 text-3xl font-normal text-[#03030F]">{stepItem.title}</h3>
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
            Engagement Model For Hiring
            <span className="block">Dedicated Liferay Developer</span>
          </>
        }
        description="Engage with the Liferay-focused technology partner to get your simple & complex Liferay requirements implemented."
      />
      {/* Services Our Liferay Development Team Offers */}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-5xl leading-tight font-bold tracking-tight">
              Services Our Liferay Development Team Offers
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Explore our expertise in Liferay! We’re experienced and ready to help with everything, from building
              user-friendly interfaces to managing backend systems. Whether you need a custom portal, smooth
              integration, or ongoing support, we’ve got you covered. Partner with us today and make the most of Liferay
              for your business.
            </p>
          </div>
          {/* Services Grid */}
          <div className="mt-16 grid auto-rows-[minmax(260px,auto)] grid-cols-1 md:grid-cols-2">
            {teamOffersServices.map((service, index) => (
              <div key={index} className="flex h-full flex-col justify-between p-9">
                {/* Inner Flex for Icon and Text */}
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex h-[115px] w-[125px] flex-shrink-0 items-center justify-center rounded-full border border-[#1F2937] p-4 shadow-[0px_0px_0px_0.42px_#F4F4F51A]">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={83}
                      height={83}
                      objectFit="contain"
                    />
                  </div>

                  {/* Title + Description */}
                  <div className="flex max-w-[330px] flex-col justify-start [@media(min-width:1440px)]:max-w-[340px] [@media(min-width:1536px)]:max-w-[360px] [@media(min-width:1800px)]:max-w-[380px]">
                    <h3 className="mb-3 text-3xl leading-tight font-semibold text-[#FFFFFF] [@media(min-width:1440px)]:text-2xl [@media(min-width:1536px)]:text-[28px] [@media(min-width:1800px)]:text-3xl">
                      {service.title}
                    </h3>

                    <p className="line-clamp-none text-lg leading-relaxed text-[#E5E7EB]">{service.description}</p>
                  </div>
                </div>

                {/* Divider */}
                {index < teamOffersServices.length - 2 && <hr className="mt-14 border-t border-[#6B7280]" />}
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
      <WhatMake WhatMakeData={LiferayHireData} titleText1={LiferayHireTitle1} titleText2={LiferayHireTitle2} subContext={LiferayHireSubContent} />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
