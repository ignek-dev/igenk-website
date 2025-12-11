import { Metadata } from "next"
import CEOSection from "components/About/CEOSection"
import Journey from "components/About/CompanyTimeline/CompanyTimeline"
import CoreValues from "components/About/CoreValues"
import StandoutSection from "components/About/StandoutSection"
import Team from "components/About/Team"
import { Testimonial } from "components/About/Testimonial"
import { BackgroundLines } from "components/Common/BackgroundLines"
import { aboutPageData } from "data/about-content"

export const metadata: Metadata = {
  title: "About IGNEK | Liferay Boutique Company",
  description:
    "A leading Liferay Boutique Company and trusted Liferay Consulting Partner. We specialize in delivering digital experience platform solutions with expert Liferay development and consulting services.",

  openGraph: {
    url: "https://www.ignek.com/about-us/",
    title: "About IGNEK | Liferay Boutique Company",
    description:
      "A leading Liferay Boutique Company and trusted Liferay Consulting Partner. We specialize in delivering digital experience platform solutions with expert Liferay development and consulting services.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function AboutUs() {
  const { heroTag, heroMaskVideo, maskedHeadingSvg, whyCompaniesTrust } = aboutPageData
  return (
    <div className="relative bg-[#0B0B0F] text-white">
      <BackgroundLines className="global-container relative flex flex-col items-start justify-center overflow-hidden bg-black text-white">
        <section className="relative mt-[12.031vw] mb-[6.406vw] w-full">
          <div className="grid items-end">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              {/* Tag */}
              <div className="inline-flex items-center self-start rounded-full border border-[0.052vw] border-white px-[1.51vw] py-[0.521vw] text-[0.938vw] leading-[1.458vw] text-white">
                {heroTag}
              </div>

              {/* Masked Text Video */}
              <div
                className="relative mt-[1.25vw] h-[17.5vw] w-[45.885vw] self-start overflow-hidden"
                style={{
                  WebkitMaskImage: `url(${maskedHeadingSvg})`,
                  maskImage: `url(${maskedHeadingSvg})`,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "bottom left",
                  maskPosition: "bottom left",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 h-[17.5vw] w-[45.885vw] object-cover"
                >
                  <source src={heroMaskVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* About Company */}
      <div className="global-container bg-[#F8F8F8] pt-[3.333vw] pb-[4.479vw]">
        <div>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Left Column - Main Heading */}
            <div className="">
              <h2 className="font-bold text-black">
                {whyCompaniesTrust.heading[0]}
                <br />
                {whyCompaniesTrust.heading[1]}
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Introductory Paragraph */}
              <p className="mb-[1.042vw] pt-[1.563vw] text-right text-[0.938vw] leading-[1.563vw] text-[#374151]">
                {whyCompaniesTrust.intro}
              </p>

              {whyCompaniesTrust.sections.map((section, i) => (
              <div key={i} className={i === 0 ? "mt-[4.375vw]" : "mt-[3.333vw]"}>
                <h4 className="text-[1.563vw] !font-semibold text-black">
                  {section.title}
                </h4>
                <div className="border-gray-[0.052vw] mt-[1.042vw] mb-[1.042vw] border"></div>
                <p className="text-[1.042vw] leading-[1.563vw] text-[#374151]">
                  {section.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Standout Points*/}
      <StandoutSection />

      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-12%] left-[6%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[120px]" />
        <div className="absolute top-[18%] right-[-12%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/18 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04)_30%,transparent_70%)]" />
      </div>

      {/*Core Values */}
      <CoreValues />

            {/* CEO Section - hidden */}
            {/* <CEOSection /> */}

            {/* Jorney Section - hidden */}
            {/* <Journey /> */}

      {/*Meet the People*/}
      <Team />

      {/*Testimonials*/}
      <Testimonial />
    </div>
  )
}
