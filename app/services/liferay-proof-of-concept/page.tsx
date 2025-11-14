import { BlogSection } from "components/Common"
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

export default function LiferayProofOfConceptPage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1820px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay Proof
                <br />
                <span className="block">Of Concept</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Liferay Proof of Concept (PoC) Services help evaluate whether Liferay is the right fit for your project by showcasing customizable portal features your requirements.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-4 [@media(min-width:1440px)]:gap-2 [@media(min-width:1800px)]:gap-4">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-white transition-colors hover:border-white hover:text-white [@media(min-width:1440px)]:px-4 [@media(min-width:1440px)]:text-sm [@media(min-width:1500px)]:text-base [@media(min-width:1800px)]:px-7 [@media(min-width:1800px)]:text-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            What We Do With Liferay POC Services
          </h2>
          <p className="mt-7 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Our Liferay PoC services align your needs with Liferay’s out-of-the-box capabilities. We provide a
            functional prototype to gauge if Liferay Proof of Concept meets your objectives, document feature
            comparisons, highlight time-to-market reductions, and assess future project risks.
          </p>
          <div className="pt-8">
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 md:grid-cols-3">
              {liferayPOCServices.map((item, index) => (
                <div key={index} className="flex min-h-[80px] rounded-full border border-[#E5E7EB] bg-white">
                  <span className="flex h-full items-center justify-center rounded-full bg-black [@media(min-width:1440px)]:w-[38%] [@media(min-width:1800px)]:w-[25%]">
                    <svg
                      width="40"
                      height="40"
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
                  <p className="whitespace-wrap w-full p-4 pr-4 text-left text-lg font-medium text-black [@media(min-width:1440px)]:text-sm [@media(min-width:1500px)]:text-sm [@media(min-width:1800px)]:text-base">
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
