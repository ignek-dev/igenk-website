import { Metadata } from "next"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  customizationServices,
  developmentServices,
  featureTabs,
  liferayCustomizationData,
  liferayDevCustomizationHeroData,
  LiferayDevelopmentAndCustomizationData,
  LiferayDevelopmentAndCustomizationSubContent,
  LiferayDevelopmentAndCustomizationTitle1,
  LiferayDevelopmentAndCustomizationTitle2,
  liferayDevelopmentServicesData,
  liferayIntegrationData,
  liferayIntegrationServices,
  liferayPortalCustomizationData,
  portalDevelopmentService,
  talkToExpertData,
} from "data/liferay-development-and-customization"

const metadata: Metadata = {
  title: "Liferay Development and Customization Services - IGNEK",
  description:
    "Our Liferay Development and Customization Services, to create custom portals and applications perfectly suited to your business needs.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-development-and-customization/",
    title: "Liferay Development and Customization Services - IGNEK",
    description: "Our Liferay Development and Customization Services, to create custom portals and applications perfectly suited to your business needs.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayDevelopmentAndCustomizationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="pt-[4.271vw] pb-[3.802vw] global-container">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-[1.51vw] py-[0.521vw] text-[0.938vw] text-white">
                {liferayDevCustomizationHeroData.tag}
              </div>
              <h1 className="mt-[2.031vw]">
                {liferayDevCustomizationHeroData.titleLine1}
                <br />
                <span className="block">{liferayDevCustomizationHeroData.titleLine2}</span>
                <span className="block">{liferayDevCustomizationHeroData.titleLine3}</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl text-right text-[0.938vw] text-white  md:justify-self-end">
              {liferayDevCustomizationHeroData.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[2.188vw] flex flex-wrap gap-[1.875vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-[1.458vw] py-[0.833vw] text-white transition-colors hover:border-white hover:text-white text-[1.042vw]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="py-[3.333vw] global-container">
          <div className="grid items-start gap-[7.656vw] md:grid-cols-2">
            <div>
              <h2>
                {liferayDevelopmentServicesData.title.split(" ").slice(0, 2).join(" ")}<br/> {liferayDevelopmentServicesData.title.split(" ").slice(2).join(" ")}
              </h2>
              <p className="mt-[1.458vw] max-w-[100%] text-sm text-[1.042vw] text-gray-700">
                {liferayDevelopmentServicesData.description}
              </p>
            </div>
            <div className="w-full md:justify-self-end">
              {developmentServices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[1.25vw] rounded-lg bg-white p-0 mt-[1.771vw] mb-[1.771vw] ${index === developmentServices.length - 1 ? "" : "border-b border-gray-200"
                    }`}
                >
                  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black">
                    <svg
                      width="40"
                      height="30"
                      viewBox="0 0 12 12"
                      className="text-white"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[1.042vw] font-medium text-black">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl [@media(min-width:1440px)]:text-4xl [@media(min-width:1800px)]:text-5xl">
              {liferayCustomizationData.title}
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
              {liferayCustomizationData.description}
            </p>
          </div>
          <section className="w-full bg-black pt-10 text-white">
            <div className="flex w-full flex-col">
              {portalDevelopmentService.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 border-b border-gray-300 py-8 last:border-b-0 last:pb-0"
                >
                  {/* Left Number */}
                  <span className="shrink-0 text-[64px] leading-none font-bold text-white">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Right Text */}
                  <p className="w-full text-xl leading-relaxed text-white">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-[60px] leading-tight font-semibold sm:text-4xl md:text-5xl">
            {liferayIntegrationData.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#101012] text-gray-700">
            {liferayIntegrationData.description}
          </p>
          <div className="pt-4">
            <section className="w-full pt-10 text-white">
              <div className="grid w-full grid-cols-1 border-t border-gray-300 first:border-t-0 md:grid-cols-2">
                {liferayIntegrationServices.map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 border-b border-gray-300 px-6 py-8 pl-0">
                    {/* Left Number */}
                    <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center bg-black text-xl leading-none font-bold text-white">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    {/* Right Text */}
                    <p className="text-xl leading-relaxed text-black">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
              {liferayPortalCustomizationData.title}
            </h2>
            <p className="absolute bottom-0 max-w-xl text-right text-xl text-white md:justify-self-end">
              {liferayPortalCustomizationData.description}
            </p>
          </div>
          <div className="pt-12">
            <div className="grid grid-cols-1 gap-x-[166px] gap-y-10 md:grid-cols-3">
              {customizationServices.map((item, index) => {
                const isLastRow = index >= customizationServices.length - (customizationServices.length % 3 || 3)

                return (
                  <div key={index} className={`flex flex-col ${isLastRow ? "pb-0" : "pb-8"}`}>
                    {/* Number */}
                    <div className="border-b border-gray-300 last:border-b-0">
                      <span className="mb-3 text-[20px] font-bold">
                        ({index + 1 < 10 ? `0${index + 1}` : index + 1})
                      </span>

                      {/* Title */}
                      <h3
                        className="mb-3 pt-4 text-[30px] font-bold [@media(min-width:1440px)]:text-[20px] [@media(min-width:1500px)]:text-[23px] [@media(min-width:1800px)]:text-[30px]"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>

                    {/* Description */}
                    <p className="pt-4 text-[16px] leading-relaxed text-white">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <WhatMake
        WhatMakeData={LiferayDevelopmentAndCustomizationData}
        titleText1={LiferayDevelopmentAndCustomizationTitle1}
        titleText2={LiferayDevelopmentAndCustomizationTitle2}
        subContext={LiferayDevelopmentAndCustomizationSubContent}
      />
      <TalkToExpert
        heading={talkToExpertData.heading}
        description={talkToExpertData.description}
        buttonText={talkToExpertData.buttonText}
      />
      <BlogSection />

      {/* CTA */}
      {/* <HeroCTASection /> */}
    </main>
  )
}
