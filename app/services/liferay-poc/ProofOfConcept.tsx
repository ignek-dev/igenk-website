import { BlogSection } from "components/Common"
import Image from "next/image";
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  featureTabs,
  liferayPocHeroData,
  liferayPOCServices,
  liferayPocWhatWeDoData,
  LiferayProofOfConceptData,
  LiferayProofOfConceptSubContent,
  LiferayProofOfConceptTitle1,
  LiferayProofOfConceptTitle2,
  talkToExpertPocData,
} from "data/liferay-proof-of-concept"

export default function LiferayProofOfConceptPage() {
  return (
    <main>
      <section className="bg-black text-white global-container pt-[7.917vw] pb-9 lg:pb-[3.802vw]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        {/* <div className="inline-flex items-center rounded-full border border-white px-[1.51vw] py-[0.521vw] p18 text-white">
          {liferayPocHeroData.badge}
        </div> */}
        <div className="block lg:flex items-end justify-between mt-[2.031vw]">
          <h1 className="mb-[18px] md:mb-[43px] lg:mb-0 tracking-[-2%]">
            {liferayPocHeroData.title.line1}
            <br />
            {liferayPocHeroData.title.line2}
          </h1>
          <p className="text-left lg:text-right text-p14 md:text-p18 lg:text-p18 text-white w-auto lg:w-[35.938vw]">
            {liferayPocHeroData.description}
          </p>
        </div>

        <div className="mt-9.5 lg:mt-[3.177vw] block lg:flex flex-wrap">
          {featureTabs.map((label, index) => (
            <div
              key={index}
              className="lg:inline-flex text-p12 md:text-p20 lg:text-p20 mb-5 md:mb-7 lg:mb-0 mr-[1.458vw] w-fit  justify-center last:mr-0 items-center rounded-full border border-[#374151] px-4 py-3 lg:px-[1.458vw] lg:py-[1.094vw] text-white"
              style={{
                boxShadow: '0 4px 10px 0 rgba(0, 151, 158, 0.25)'
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F6F6F6] text-black">
        <div className="global-container py-7 md:py-16 lg:py-[3.333vw]">
          <h2 className="">
            {liferayPocWhatWeDoData.title}
          </h2>
          <p className="mt-2.5 md:mt-[1.458vw] text-p14 md:text-p18 lg:text-p18 text-[#374151]">
            {liferayPocWhatWeDoData.description}
          </p>
          <div className="pt-7 md:pt-9 lg:pt-[2.5vw]">
            <div className="block lg:grid grid-cols-1 gap-x-[2.917vw]  gap-y-[2.708vw] sm:grid-cols-2 md:grid-cols-3">
              {liferayPOCServices.map((item, index) => {
                const isLast = index === liferayPOCServices.length - 1

                return (
                  <div
                    key={index}
                    className={`
        flex items-center pr-[0.625vw] rounded-full border border-[#D1D5DB] bg-white
        ${!isLast ? "mb-7 md:mb-24 lg:mb-0" : ""}
      `}
                  >
                    <span className="flex min-w-13.5 min-h-13.5 md:min-h-18 md:min-w-18 lg:min-h-[3.75vw] mr-3 md:mr-4 lg:mr-[0.833vw] lg:min-w-[3.75vw] items-center justify-center rounded-full bg-black">
                      <Image
                        src="/images/about/check.png"
                        className="w-[27px] h-[27px] md:w-9 md:h-9 lg:h-[1.875vw] lg:w-[1.875vw]"
                        alt="check-sign"
                        width={100}
                        height={100}
                      />
                    </span>

                    <p className="text-p14 md:text-p18 lg:text-p18 py-[9px] md:py-[10px] lg:py-[0.625vw]">
                      {item}
                    </p>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake
        WhatMakeData={LiferayProofOfConceptData}
        titleText1={LiferayProofOfConceptTitle1}
        titleText2={LiferayProofOfConceptTitle2}
        subContext={LiferayProofOfConceptSubContent}
      />
      <TalkToExpert
        heading={talkToExpertPocData.heading}
        description={talkToExpertPocData.description}
        buttonText={talkToExpertPocData.buttonText}
      />

      <BlogSection />

      {/* CTA */}
    </main>
  )
}
