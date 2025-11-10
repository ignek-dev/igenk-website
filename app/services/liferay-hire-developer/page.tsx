"use client"
import Image from "next/image"
import React from "react"
import { BlogSection } from "components/Common"
import EngagementModels from "components/Common/EngagementModels"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import WordsFromCEO from "components/Common/WordsFromCEO"
import LiferayTechnologicalStacks from "components/LiferayTechnologicalStacks"

export default function LiferayHireDeveloper() {
  // Data for the marquee animation
  const expertiseStats = [
    "10 Years of Liferay Expertise",
    "50+ Liferay Projects Delivered",
    "20+ Certified Liferay Experts",
    "24x7 Technical Support",
  ]

  const whyHireFromIgnek = [
    {
      icon: "/images/icon/certified-developer.png",
      title: ["Certified Liferay", "Developer"],
      description:
        "We create templates for your ReactJS projects, optimizing scalability and efficiency. Our experts leverage React’s component-based architecture, from defining data flows to architecting modular components to ensure seamless integration, we lay the foundation for robust and future-proof web applications.",
    },
    {
      icon: "/images/icon/certified-developer.png", // Replace with the correct icon path
      title: ["Transparent", "Communication"],
      description:
        "We analyze your React codebase using tools like ESlint and Prettier to enforce coding standards. Our reviews focus on exact component architecture, state management, and type-checking with TypeScript, suggesting improvements for code readability and maintainability.",
    },
    {
      icon: "/images/icon/certified-developer.png", // Replace with the correct icon path
      title: ["Flexible", "Hiring Models"],
      description:
        "Our performance wizards optimize your React app with efficient data fetching strategies using GraphQL or REST, and techniques like lazy loading and code splitting. Leveraging tools like React Profiler, we identify and eliminate performance constraints, resulting in a faster user interface.",
    },
    {
      icon: "/images/icon/certified-developer.png", // Replace with the correct icon path
      title: ["Fully", "Signed NDA"],
      description:
        "We tailor React components to your specific needs, using advanced patterns like Higher Order Components (HOC) and render props. We create dynamic user interfaces, utilizing React hooks and Context API to implement intricate features and custom functionalities that set your application apart.",
    },
    {
      icon: "/images/icon/certified-developer.png", // Replace with the correct icon path
      title: ["Cost", "Effective"],
      description:
        "We conduct version symphonies, employing tools like Babel for automatic code transformations. From introducing new features to optimizing dependencies, our developers ensure a secure and efficient upgrade process that aligns with your project’s goals.",
    },
    {
      icon: "/images/icon/certified-developer.png", // Replace with the correct icon path
      title: ["Easy", "Exit Policy"],
      description:
        "We employ tools like React DevTools and Redux DevTools to investigate and resolve bugs and Jest and Enzyme for comprehensive testing. Utilizing techniques such as console.log statements, breakpoints, and error boundary components, we dissect your code, identify issues.",
    },
  ]

  const easySteps = [
    {
      step: "01",
      icon: "/images/icon/search-circle.svg",
      title: "Discover & Diagnose",
      description:
        "First, you tell us what you need. Explain your project requirements, goals, and any specific features you want.",
    },
    {
      step: "02",
      icon: "/images/icon/search-circle.svg",
      title: "Screening & Select",
      description: "We'll carefully screen our pool of developers to find the best fit for your project.",
    },
    {
      step: "03",
      icon: "/images/icon/search-circle.svg",
      title: "Onboard Developer",
      description: "Once you've chosen your developer, we'll handle the onboarding process smoothly.",
    },
  ]

  const teamOffersServices = [
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Development and Customization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Theme Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Expert Advice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Proof Of Concept",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Ecommerce Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Migration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Support And Maintenance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Performance Tuning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Upgradation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
    {
      icon: "/images/icon/services.png", // Replace with your icon path
      title: "Liferay Architecture",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    },
  ]

  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#0B63CE] text-white">
        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />

        {/* Main Content with updated padding */}
        <div className="mx-auto w-full px-4 pt-40 pb-16 md:px-8 md:pt-48 md:pb-20 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet.
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
              Transform your business with our ReactJS Custom Application Development Services. Our team of highly
              skilled ReactJS developers is committed to delivering exceptional solutions to help you achieve your
              business objectives.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
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
                    <div className="absolute top-30 left-[32px] h-[calc(100%+5.5rem)] w-[1.23px] bg-[#EAEAFF]"></div>
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
              Our Spring Boot microservices are designed to be small and operate independently, providing several
              benefits. This approach facilitates easier maintenance, enhances productivity, improves fault tolerance,
              aligns better with business objectives, and more.
            </p>
          </div>
          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
            {teamOffersServices.map((service, index) => (
              <div key={index} className="p-9">
                {/* Content Wrapper */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="h-[115px] w-[115px] flex-shrink-0 rounded-full border border-[#1F2937] p-4 shadow-[0px_0px_0px_0.42px_#F4F4F51A]">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={83}
                      height={83}
                      objectFit="contain"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="max-h-[120px] max-w-[455px]">
                    <h3 className="mb-2 text-3xl font-semibold text-[#FFFFFF] [@media(min-width:1440px)]:text-2xl [@media(min-width:1800px)]:text-3xl">{service.title}</h3>
                    <p className="text-xl text-[#E5E7EB]">{service.description}</p>
                  </div>
                </div>

                {/* Partial Divider */}
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
      <WhatMake />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
