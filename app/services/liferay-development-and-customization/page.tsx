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
    description:
      "Our Liferay Development and Customization Services, to create custom portals and applications perfectly suited to your business needs.",
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
        <div className="global-container pt-[4.271vw] pb-[3.854vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              {/* <div className="inline-flex items-center rounded-full border border-white/30 px-[1.51vw] py-[0.521vw] text-[0.938vw] text-white">
                {liferayDevCustomizationHeroData.tag}
              </div> */}
              <h1 className="mt-[2.031vw]">
                {liferayDevCustomizationHeroData.titleLine1}
                <br />
                <span className="block">{liferayDevCustomizationHeroData.titleLine2}</span>
                <span className="block">{liferayDevCustomizationHeroData.titleLine3}</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-1 max-w-xl text-right font-normal! text-white md:justify-self-end">
              {liferayDevCustomizationHeroData.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[2.188vw] flex flex-wrap gap-[1.875vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-[1.458vw] py-[0.833vw] text-[1.042vw] text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container py-[3.333vw]">
          <div className="grid items-start gap-[7.656vw] md:grid-cols-2">
            <div className="md:sticky md:top-[10vw] md:h-fit">
              <h2>
                {liferayDevelopmentServicesData.title.split(" ").slice(0, 2).join(" ")}
                <br /> {liferayDevelopmentServicesData.title.split(" ").slice(2).join(" ")}
              </h2>
              <p className="p18 mt-[1.458vw] max-w-[100%] font-normal! text-gray-700">
                {liferayDevelopmentServicesData.description}
              </p>
            </div>
            <div className="grid w-full pt-[8px] md:justify-self-end">
              {developmentServices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[1.25vw] rounded-lg bg-white ${
                    index === 0 ? "pt-0" : "pt-[1.875vw]"
                  } ${index === developmentServices.length - 1 ? "pb-0" : "pb-[1.875vw]"} ${
                    index !== developmentServices.length - 1 ? "border-b border-b-2 border-[#D1D5DB]" : ""
                  } `}
                >
                  <span className="flex h-[2.188vw] w-[2.188vw] items-center justify-center rounded-full bg-black">
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
                  <span className="p20 text-black">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[3.333vw] text-white">
        <div className="global-container">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2>{liferayCustomizationData.title}</h2>
            <p className="p18 absolute max-w-xl text-right font-normal! text-white md:justify-self-end">
              {liferayCustomizationData.description}
            </p>
          </div>
          <section className="w-full bg-black pt-[3.75vw] text-white">
            <div className="flex w-full flex-col">
              {portalDevelopmentService.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-[2.188vw] border-b border-gray-300 py-[2.188vw] first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* Left Number */}
                  <span className="shrink-0 text-[3.333vw] leading-none font-bold text-white">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Right Text */}
                  <p className="w-full text-[1.042vw] leading-relaxed text-white">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container py-[3.333vw]">
          <h2>{liferayIntegrationData.title}</h2>
          <p className="p18 mt-[1.458vw] mb-[0.729vw] text-[#101012] text-gray-700">
            {liferayIntegrationData.description}
          </p>
          <div>
            <section className="mt-2.604vw w-full text-white">
              <div className="grid w-full grid-cols-1 gap-x-[2.188vw] border-t border-gray-300 first:border-t-0 md:grid-cols-2">
                {liferayIntegrationServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 border-b border-gray-300 px-6 py-[1.875vw] pr-0 pl-0"
                  >
                    {/* Left Number */}
                    <span className="flex h-[3.333vw] w-[3.333vw] shrink-0 items-center justify-center bg-black text-xl leading-none font-bold text-white">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>

                    {/* Right Text */}
                    <p className="p20 text-black">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-black py-[3.333vw] text-white">
        <div className="global-container">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <h2 dangerouslySetInnerHTML={{ __html: liferayPortalCustomizationData.title }} />
            <p className="p18 absolute max-w-xl text-right text-white md:justify-self-end">
              {liferayPortalCustomizationData.description}
            </p>
          </div>
          <div className="pt-[3.75vw]">
            <div className="grid grid-cols-1 gap-x-[8.646vw] gap-y-[3.333vw] md:grid-cols-3">
              {customizationServices.map((item, index) => {
                const isLastRow = index >= customizationServices.length - (customizationServices.length % 3 || 3)

                return (
                  <div key={index} className="flex flex-col">
                    {/* Number */}
                    <div className="border-b border-gray-300 last:border-b-0">
                      <span className="text-[1.042vw] font-bold">({index + 1 < 10 ? `0${index + 1}` : index + 1})</span>

                      {/* Title */}
                      <p
                        className="py-[1.25vw] text-[1.563vw] leading-[36px] font-medium"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>

                    {/* Description */}
                    <p className="pt-[1.25vw] text-[0.833vw] leading-[24px] font-normal! text-white">
                      {item.description}
                    </p>
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
