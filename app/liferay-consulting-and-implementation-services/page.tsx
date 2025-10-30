"use client"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import HeroCTASection from "components/Common/HeroCTASection"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { useState } from "react"

export default function LiferayConsultationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [activeServiceTab, setActiveServiceTab] = useState("Portal")
  const featureTabs = [
    "Scalable Solution Architecture",
    "Customized Liferay Solutions",
    "User-Centric Consulting Approach",
    "Strategic Deployment Guidance",
  ]

  const caseStudies = [
    {
      id: 1,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Corporate",
      title: "Music License Management Portal: Onboarding & Data Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    },
    {
      id: 2,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "FinTech",
      title: "Transforming Financial Services with Innovations",
      description:
        "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      id: 3,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Healthcare",
      title: "Digital Health Platform: Patient-Centric Solutions",
      description:
        "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
    },
    {
      id: 4,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "E-commerce",
      title: "Scaling Online Retail with Cloud Technologies",
      description:
        "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
    },
  ]

  const consultingServices = [
    {
      number: "01",
      title: "Liferay Production Release Issues",
      desc: "Liferay Production Release Issues Navigating Liferay production releases requires precision and a strong grasp of the platform’s intricacies. Our experts provide in-depth analysis and troubleshooting to quickly identify and resolve potential issues. From deployment challenges to compatibility concerns, we deliver actionable insights to ensure a smooth and successful rollout.",
    },
    {
      number: "02",
      title: "Liferay Performance Issues",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
    {
      number: "03",
      title: "Development & Integration",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
    {
      number: "04",
      title: "Liferay Approaches for Architecture",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
    {
      number: "05",
      title: "Liferay Production Release Issues",
      desc: "Liferay Production Release Issues Navigating Liferay production releases requires precision and a strong grasp of the platform’s intricacies. Our experts provide in-depth analysis and troubleshooting to quickly identify and resolve potential issues. From deployment challenges to compatibility concerns, we deliver actionable insights to ensure a smooth and successful rollout.",
    },
    {
      number: "06",
      title: "Liferay Performance Issues",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
    {
      number: "07",
      title: "Development & Integration",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
    {
      number: "08",
      title: "Liferay Approaches for Architecture",
      desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
    },
  ]

  const liferayProjectFeatures = [
    {
      title: "Highly Customizable",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Highly Scalable",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "One portal for all solutions",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Integration",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Collaboration tools",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Security",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Wide range of OOTB Features",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Personalization",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
    {
      title: "Analytics",
      description:
        "Liferay customization options encompass creating custom modules, themes, widget templates, model listeners, service wrappers, JSP overrides, global translation overrides, OSGi service modifications, portlet filters, and many more.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/web.png",
    },
  ]

  const liferaySolutions = [
    {
      id: "Liferay DXP", // Use title as unique ID
      title: "Liferay DXP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
      icon: "/images/liferay-pages-image/liferay-consultation-page/Liferay-dxp.png",
    },
    {
      id: "Liferay Commerce",
      title: "Liferay Commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.", // Add description for all cards
      icon: "/images/liferay-pages-image/liferay-consultation-page/Liferay-commerce.png",
    },
    {
      id: "Analytics Cloud",
      title: "Analytics Cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.", // Add description for all cards
      icon: "/images/liferay-pages-image/liferay-consultation-page/Analytics-cloud.png",
    },
    {
      id: "DXP Cloud",
      title: "DXP Cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.", // Add description for all cards
      icon: "/images/liferay-pages-image/liferay-consultation-page/Dxp-cloud.png",
    },
  ]

  const liferayConsultingTabs = ["Portal", "Enterprise CRM", "Collaboration & social", "E- Commerce"]

  const baseServices = [
    "Simplified UI Development",
    "Flexible Enterprise Integration Framework",
    "Out-of-the-box Tools",
    "Secure Single Sign On (SSO)",
    "Rules Engine Integration",
    "User Groups, Organizations and Sites",
    "Headless Support",
  ]

  // Create a 21-item array by repeating the base services
  const fullServiceList = [...baseServices, ...baseServices, ...baseServices]

  const liferayConsultingServicesData: any = {
    Portal: fullServiceList,
    "Enterprise CRM": fullServiceList,
    "Collaboration & social": fullServiceList,
    "E- Commerce": fullServiceList,
  }

  const chunkArray = (array: any[], size: number) => {
    const chunkedArr: any[] = []
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size))
    }
    return chunkedArr
  }
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-[#0B63CE] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-40 pb-16 md:px-8 md:pt-48 md:pb-20 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="line-height-[28px] inline-flex items-center rounded-full border border-white px-8.5 py-[8.8px] text-lg font-normal text-white">
                Liferay Services
              </div>
              <h1 className="line-height-[88px] letter-spacing-[-0.02em] mt-9 text-7xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
                Liferay Consulting &
                <br />
                <span className="block">Implementation Services</span>
              </h1>
              {/* Feature tabs */}
              <div className="mt-12 flex flex-wrap gap-7.5">
                {featureTabs.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-[#9CA3AF] px-4 py-4 text-xl font-semibold text-white transition-colors"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-end justify-end">
              <p className="line-height-[28px] absolute bottom-0 max-w-xl text-right text-lg font-normal text-white sm:text-lg md:mt-16 md:justify-self-end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Edge Section */}
      <section className="bg-[#F9FAFB] py-[64px]">
        <div className="mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Left Content */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-[120px]">
              <div>
                <p className="text-[28px] leading-[36px] font-bold text-gray-900">1×</p>
                <p className="text-[14px] leading-[20px] text-gray-600">Faster Deployments</p>
              </div>
              <div>
                <p className="text-[28px] leading-[36px] font-bold text-gray-900">18%</p>
                <p className="text-[14px] leading-[20px] text-gray-600">Increased Adoption</p>
              </div>
              <div>
                <p className="text-[28px] leading-[36px] font-bold text-gray-900">+5%</p>
                <p className="text-[14px] leading-[20px] text-gray-600">Lower TCO</p>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mt-[64px] text-[40px] leading-[52px] font-bold text-gray-900">
              Your Digital Edge for <br /> Transformation, Always Evolving.
            </h2>

            {/* Description */}
            <p className="mt-[40px] max-w-[500px] text-[16px] leading-[26px] text-gray-600">
              Run your business smarter — track performance, approve automations, and get instant insights right from
              your phone.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex flex-1 items-center justify-end">
            {/* RGB Glow Background */}
            <div className="absolute right-0 bottom-0 h-[600px] w-[600px] opacity-80">
              <img
                src="/images/liferay-pages-image/rgb-radiant.png"
                alt="Glow background"
                className="h-full w-full scale-110 object-contain"
              />
            </div>

            {/* Tablet Image */}
            <img
              src="/images/liferay-pages-image/tablet-image.png"
              alt="Tablet Preview"
              className="relative z-10 h-auto w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            {/* Left Column */}
            <div className="max-w-[520px] flex-1 space-y-[26px] pt-[4px]">
              <h1 className="text-5xl leading-[64px] font-bold tracking-[-0.02em] text-white">
                Our Liferay
                <span className="block">Consulting Services</span>
              </h1>
              <p className="max-w-[520px] text-[18px] leading-[28px] text-[#D1D5DB]">
                We optimize transitions from legacy systems to Liferay with our proven Liferay Portal Migration
                services, using best practices for seamless.
              </p>
              <div className="pt-[26px]">
                <ScheduleMeetingButton isFullWidth={false} btnName="Schedule Meeting" />
              </div>{" "}
            </div>

            {/* Right Column */}
            <div className="flex flex-1 flex-col items-end space-y-16.5">
              {consultingServices.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full max-w-[883px] flex-col justify-center rounded-2xl border border-gray-700 bg-[#0C0C0C]/70 px-9 py-7 backdrop-blur-md transition-all duration-300 hover:border-[#00AEEF] md:min-h-[196px]"
                >
                  <h3 className="mb-3 text-2xl leading-tight font-semibold text-white">{item.title}</h3>
                  <div className="mb-4 h-[1px] bg-gray-700" />
                  <p className="text-lg leading-relaxed text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liferay Solutions */}
      <section className="bg-white py-[64px]">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-bold tracking-tight text-black">
                We Provide Top-Notch
                <span className="block">Liferay Solutions</span>
              </h2>
            </div>
            <div className="flex h-full items-end">
              <p className="text-xl leading-relaxed text-gray-500 md:text-right">
                We deliver top-quality Liferay Consulting Services. From setup to support, we’ve got you covered for all
                your digital needs.
              </p>
            </div>
          </div>

          {/* Solution Cards Grid */}
          <div className="mt-16 flex flex-col gap-8 lg:flex-row">
            {liferaySolutions.map((solution) => {
              const isHovered = hoveredCard === solution.id
              const isDefaultPrimary = hoveredCard === null && solution.id === "Liferay DXP"
              const isCurrentPrimary = isHovered || isDefaultPrimary

              return (
                <div
                  key={solution.id}
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex h-[340px] items-center rounded-lg p-8 transition-all duration-500 ease-in-out ${
                    isCurrentPrimary
                      ? "w-full flex-grow-[2] basis-0 flex-row justify-between gap-8 bg-[#0B63CE] text-white"
                      : "w-full flex-grow basis-0 flex-col justify-center border border-gray-200 bg-white text-gray-800 shadow-sm"
                  } `}
                >
                  {isCurrentPrimary ? (
                    // Layout for the active (primary) card
                    <>
                      <div className="text-left">
                        <h3 className="text-3xl font-semibold">{solution.title}</h3>
                        <hr className="my-4 max-w-[120px] border-t border-white/50" />
                        <p className="text-base leading-relaxed">{solution.description}</p>
                      </div>
                      <img
                        src={solution.icon}
                        alt={`${solution.title} icon`}
                        className="h-24 w-24 flex-shrink-0 object-contain transition-all duration-300 ease-in-out"
                      />
                    </>
                  ) : (
                    // Layout for inactive cards
                    <>
                      <img
                        src={solution.icon}
                        alt={`${solution.title} icon`}
                        className="h-20 w-20 object-contain transition-all duration-300 ease-in-out"
                      />
                      <h3 className="mt-6 text-center text-xl font-semibold">{solution.title}</h3>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Liferay Can Be Best Choice For Your Project ? */}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-5xl leading-tight font-bold tracking-tight">
              Why Liferay Can Be Best Choice For Your Project ?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              APIs (Application Programming Interfaces) act as bridges between systems, allowing seamless communication.
              Integrating APIs with your ReactJS application enhances functionality and opens new possibilities. Our API
              Integration Service optimizes performance with effective error handling.
            </p>
          </div>

          {/* Features List */}
          <div className="mt-9.5">
            {liferayProjectFeatures.map((feature) => (
              <div key={feature.title}>
                {/* 👇 The gap is now controlled by a single property here */}
                <div className="flex flex-col items-start py-[57px] md:flex-row md:items-center md:gap-24">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <img src={feature.icon} alt="" className="h-16 w-16" />
                  </div>

                  {/* Title */}
                  <div className="w-full flex-shrink-0 md:w-[235px]">
                    <h3 className="text-3xl font-semibold">{feature.title}</h3>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-white">{feature.description}</p>
                  </div>
                </div>
                {/* Divider */}
                <hr className="border-t border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Liferay Consulting Services Section */}
      <section className="bg-black py-[64px] text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Section Header */}
          <div className="grid grid-cols-1 items-end gap-8 pb-16 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-bold tracking-tight">
                Our Liferay
                <span className="block">Consulting Services</span>
              </h2>
            </div>
            <div className="flex h-full items-end justify-end">
              <p className="w-full text-right text-xl text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-16 flex items-center justify-center gap-4">
            {liferayConsultingTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveServiceTab(tab)}
                className={`flex-1 rounded-full px-8 py-4 text-center text-2xl font-medium transition-colors duration-300 ${
                  activeServiceTab === tab
                    ? "border border-blue-600 bg-blue-600 text-white"
                    : "border border-white text-white hover:border-blue-600 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {liferayConsultingServicesData[activeServiceTab].map((service: any, index: number) => (
              <div key={index} className="border-b border-gray-700 px-6">
                <div className="flex items-start gap-4 py-[40px]">
                  <img
                    src="/images/liferay-pages-image/liferay-consultation-page/checkmark-icon.svg" // Replace with your icon path
                    alt="Checkmark icon"
                    className="h-10 w-10 flex-shrink-0"
                  />
                  <p className="text-2xl font-medium">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black"></section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake />
      <TalkToExpert />
      <BlogSection />
    </main>
  )
}
