import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"

export default function LiferayProofOfConceptPage() {
  const featureTabs = [
    "Discuss PoC requirements",
    "Assist To Validate The Assumption",
    "Liferay Functionality Identification",
    "Liferay Functionality Identification",
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
  const liferayPOCServices = [
    "Know your industry and understand the requirements",
    "Map high-level requirements against Liferay OOTB features",
    "Create a full Liferay demo using mapped OOTB features",
    "Identify customization and custom development needs",
    "Identify Integration needs with third-party services",
    "Liferay POC Services will help to define a more accurate project & and timeline",
    "Define hardware needs from non-functional requirements.",
    "Identify risks and outline them for communication",
  ]
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
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
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            What We Do With Liferay POC Services
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Our Liferay PoC services align your needs with Liferay’s out-of-the-box capabilities. We provide a
            functional prototype to gauge if Liferay Proof of Concept meets your objectives, document feature
            comparisons, highlight time-to-market reductions, and assess future project risks.
          </p>
          <div className="pt-8">
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 md:grid-cols-3">
              {liferayPOCServices.map((item, index) => (
                <div key={index} className="flex h-[80px] rounded-full border border-[#E5E7EB] bg-white">
                  <span className="flex h-full w-[17%] items-center justify-center rounded-full bg-black">
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
                  <p className="w-[80%] p-3 pr-0 text-left text-xl font-medium text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CaseStudy caseStudies={caseStudies} />
      <WhatMake />
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
