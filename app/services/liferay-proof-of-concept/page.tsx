import { Metadata } from "next"
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


const metadata: Metadata = {
  title: "Liferay POC Services | Proof of Concept for Liferay DXP - IGNEK",
  description:
    "Validate your Liferay strategy with a structured Proof of Concept. IGNEK helps enterprises assess feasibility, architecture, and platform fit before full implementation.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-poc/",
    title: "Liferay POC Services | Proof of Concept for Liferay DXP - IGNEK",
    description: "Validate your Liferay strategy with a structured Proof of Concept. IGNEK helps enterprises assess feasibility, architecture, and platform fit before full implementation.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayProofOfConceptPage() {
  return (
    <main>
      <section className="bg-black text-white global-container pt-[7.917vw] pb-[3.802vw]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        {/* <div className="inline-flex items-center rounded-full border border-white px-[1.51vw] py-[0.521vw] p18 text-white">
          {liferayPocHeroData.badge}
        </div> */}
        <div className="flex items-end justify-between mt-[2.031vw]">
          <h1 className=" tracking-[-2%]">
            {liferayPocHeroData.title.line1}
            <br />
            {liferayPocHeroData.title.line2}
          </h1>
          <p className="text-right p18 text-white w-[35.938vw]">
            {liferayPocHeroData.description}
          </p>
        </div>

        <div className="mt-[3.177vw] flex flex-wrap">
          {featureTabs.map((label, index) => (
            <div
              key={index}
              className="inline-flex p20 mr-[1.458vw]  justify-center last:mr-0 items-center rounded-full border border-[#374151] px-[1.458vw] py-[1.094vw] text-white"
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
        <div className="global-container py-[3.333vw]">
          <h2 className="tracking-[-2%]">
            {liferayPocWhatWeDoData.title}
          </h2>
          <p className="mt-[1.458vw] p18 text-[#374151] !leading-[1.667vw]">
            {liferayPocWhatWeDoData.description}
          </p>
          <div className="pt-[2.5vw]">
            <div className="grid grid-cols-1 gap-x-[2.917vw] gap-y-[2.708vw] sm:grid-cols-2 md:grid-cols-3">
              {liferayPOCServices.map((item, index) => (
                <div key={index} className="flex items-center pr-[0.625vw] rounded-full border border-[#D1D5DB] bg-white">
                  <span className="flex min-h-[3.75vw] mr-[0.833vw] min-w-[3.75vw] items-center justify-center rounded-full bg-black">
                    <Image src="/images/about/check.png" className="h-[1.875vw] w-[1.875vw]" alt="check-sign" width={100} height={100} />
                  </span>
                  <p className="p18 !leading-[1.25vw] !font-medium py-[0.625vw]">
                    {item}
                  </p>
                </div>
              ))}
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
