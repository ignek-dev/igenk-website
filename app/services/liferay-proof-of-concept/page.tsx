import { Metadata } from "next"
import { BlogSection } from "components/Common"
import Image from "next/image";
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  caseStudies,
  featureTabs,
  liferayPOCServices,
  LiferayProofOfConceptData,
  LiferayProofOfConceptSubContent,
  LiferayProofOfConceptTitle1,
  LiferayProofOfConceptTitle2,
} from "data/liferay-proof-of-concept"


const metadata: Metadata = {
  title: "Liferay POC Services - Enhance Your Business with IGNEK",
  description:
    "Explore IGNEK's Liferay POC services. Test Liferay’s features and see how it can enhance your business with a tailored trial run.",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-poc/",
    title: "Liferay POC Services - Enhance Your Business with IGNEK",
    description: "Explore IGNEK's Liferay POC services. Test Liferay’s features and see how it can enhance your business with a tailored trial run.",
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
      {/* Hero */}
      <section className="bg-black text-white global-container pt-[7.917vw] pb-[3.802vw]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="inline-flex items-center rounded-full border border-white px-[1.51vw] py-[0.521vw] p18 text-white">
          Liferay Services
        </div>
        <div className="flex items-end justify-between mt-[2.031vw]">
          <h1 className=" tracking-[-2%]">
            Liferay Proof
            <br />
            Of Concept
          </h1>
          <p className="text-right p18 text-white w-[35.938vw]">
            Liferay PoC Services help you assess whether Liferay suits your project by demonstrating customizable portal features aligned with your requirements.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="mt-[3.177vw] flex flex-wrap">
          {featureTabs.map((label, index) => (
            <div
              key={index}
              className="inline-flex p20 mr-[1.458vw]  justify-center last:mr-0 items-center rounded-full border border-[#374151] px-[1.458vw] py-[1.094vw] text-white"
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F6F6F6] text-black">
        <div className="global-container py-[3.333vw]">
          <h2 className="tracking-[-2%]">
            What We Do With Liferay POC Services
          </h2>
          <p className="mt-[1.458vw] p18 text-[#374151] !leading-[1.667vw]">
            Our Liferay PoC services align your needs with Liferay’s out-of-the-box capabilities. We provide a
            functional prototype to gauge if Liferay Proof of Concept meets your objectives, document feature
            comparisons, highlight time-to-market reductions, and assess future project risks.
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
        heading="Validate ideas swiftly with Liferay Proof of Concept."
        description="Quickly evaluate Liferay functionality to confirm ideas before full-scale implementation."
        buttonText="Request PoC Consultation"
      />

      <BlogSection />

      {/* CTA */}
    </main>
  )
}
