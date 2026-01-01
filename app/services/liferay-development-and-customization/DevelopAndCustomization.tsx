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

export default function LiferayDevelopmentAndCustomizationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container pt-8 pb-9 lg:pt-[4.271vw] lg:pb-[3.854vw]">
          <div className="relative block lg:grid items-start gap-10 md:grid-cols-2">
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
            <p className="text-p14 mt-[18px] md:mt-[43px] lg:mt-0 md:text-p18 lg:text-p18 static lg:absolute bottom-1 max-w-xl text-left lg:text-right font-normal! text-white lg:justify-self-end">
              {liferayDevCustomizationHeroData.description}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[18px] md:mt-[43px] lg:mt-[2.188vw] flex flex-wrap gap-[1.875vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-3.5 py-2.5 lg:px-[1.458vw] lg:py-[0.833vw] text-p12 md:text-p20 lg:text-p20 text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container py-7 md:py-16 lg:py-[3.333vw]">
          <div className="block lg:grid items-start gap-[7.656vw] md:grid-cols-2">
            <div className="lg:sticky md:top-[10vw] md:h-fit">
              <h2>
                {liferayDevelopmentServicesData.title.split(" ").slice(0, 2).join(" ")}
                <br /> {liferayDevelopmentServicesData.title.split(" ").slice(2).join(" ")}
              </h2>
              <p className="text-p14 md:text-p18 lg:text-p18 mt-[10px] md:mt-[18px] lg:mt-[1.458vw] max-w-[100%] text-gray-700">
                {liferayDevelopmentServicesData.description}
              </p>
            </div>
            <div className="grid w-full pt-7 md:pt-9 lg:pt-2 md:justify-self-end">
              {developmentServices.map((txt, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[18px] md:gap-6 lg:gap-[1.25vw] rounded-lg bg-white ${index === 0 ? "pt-0" : "pt-[26px] md:pt-9 lg:pt-[1.875vw]"
                    } ${index === developmentServices.length - 1 ? "pb-0" : "pb-[26px] md:pb-9 lg:pb-[1.875vw]"} ${index !== developmentServices.length - 1 ? "border-b border-b-2 border-[#D1D5DB]" : ""
                    } `}
                >
                  <span className="flex w-[30px] h-[30px] md:w-[42px] md:h-[42px] lg:h-[2.188vw] lg:w-[2.188vw] items-center justify-center rounded-full bg-black">
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
                  <span className="text-p14  md:text-p20 lg:text-p20 text-black">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-7 md:py-16 lg:py-[3.333vw] text-white">
        <div className="global-container">
          <div className="relative block lg:grid items-center gap-10 md:grid-cols-2">
            <h2>{liferayCustomizationData.title}</h2>
            <p className="text-p14 md:text-p18 lg:text-p18 static lg:absolute max-w-xl  text-left lg:text-right text-white justify-start lg:justify-self-end mt-2.5 md:mt-[34px] lg:mt-0">
              {liferayCustomizationData.description}
            </p>
          </div>
          <section className="w-full bg-black pt-[45px] md:pt-7 lg:pt-[3.75vw] text-white">
            <div className="flex w-full flex-col">
              {portalDevelopmentService.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-[2.188vw] border-b border-gray-300 py-[30px] md:py-[42px] lg:py-[2.188vw] first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* Left Number */}
                  <span className="shrink-0 text-[2.813rem] md:text-[4rem] lg:text-[3.333vw] leading-none font-bold text-white md:mr-[50px] mr-[35px]">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Right Text */}
                  <p className="w-full text-p14 md:text-p20 lg:text-[1.042vw] leading-relaxed text-white">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="global-container py-7 md:py-16 lg:py-[3.333vw]">
          <h2>{liferayIntegrationData.title}</h2>
          <p className="text-p14 md:text-p18 lg:text-p18 mt-2.5 md:mt-4.5 lg:mt-[1.458vw] mb-[6px] md:mb-[2px] lg:mb-[0.729vw] text-[#101012] text-gray-700">
            {liferayIntegrationData.description}
          </p>
          <div>
            <section className="mt-2.604vw w-full text-white">
              <div className="grid w-full grid-cols-1 gap-x-[2.188vw] border-t border-gray-300 first:border-t-0 md:grid-cols-2">
                {liferayIntegrationServices.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4.5 lg:space-x-6 ${index === liferayIntegrationServices.length - 1 ? "" : " border-0 md:border-b"} border-gray-300 px-6 py-[22px] md:py-[36px] lg:py-[1.875vw] pr-0 pl-0`}
                  >
                    {/* Left Number */}
                    <span className="flex h-[53px] w-[53px] md:h-16 md:w-16 lg:h-[3.333vw] lg:w-[3.333vw] shrink-0 items-center justify-center bg-black text-p16 md:text-p20 lg:text-p20 font-bold! text-white">
                      {index + 1 < 10 ? `${index + 1}` : index + 1}
                    </span>

                    {/* Right Text */}
                    <p className="text-p14 md:text-p20 lg:text-p20 text-black">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-black py-7 md:py-16 lg:py-[3.333vw] text-white">
        <div className="global-container">
          <div className="relative block lg:grid items-center gap-10 md:grid-cols-2">
            <h2 dangerouslySetInnerHTML={{ __html: liferayPortalCustomizationData.title }} />
            <p className="text-p14 md:text-p18 lg:text-p18 static lg:absolute max-w-xl lg:text-right text-left text-white justify-start lg:justify-self-end pt-3">
              {liferayPortalCustomizationData.description}
            </p>
          </div>
          <div className="pt-6 md:pt-16 lg:pt-[3.75vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-7 md:gap-x-12 md:gap-y-10 lg:gap-x-[8.646vw] lg:gap-y-[3.333vw] lg:grid-cols-3">
              {customizationServices.map((item, index) => {
                const isLastRow = index >= customizationServices.length - (customizationServices.length % 3 || 3)

                return (
                  <div key={index} className="flex flex-col">
                    {/* Number */}
                    <div className="border-b border-gray-300 last:border-b-0">
                      <span className="text-p14 md:text-p20 lg:text-[1.042vw] font-bold">({index + 1 < 10 ? `0${index + 1}` : index + 1})</span>

                      {/* Title */}
                      <p
                        className="py-3 md:py-6 lg:py-[1.25vw] text-[20px] md:text-[1.875rem] lg:text-[1.563vw] font-medium"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>

                    {/* Description */}
                    <p className="pt-3 md:pt-6 lg:pt-[1.25vw] text-p12 md:text-p16 lg:text-p16 text-white">
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
