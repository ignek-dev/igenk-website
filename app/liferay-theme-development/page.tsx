import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"

export default function LiferayThemeDevelopmentPage() {
  const featureTabs = [
    "Customized UI Design",
    "Responsive Layouts",
    "Seamless Integration",
    "Scalable Components",
    "Flexible Configuration",
  ]
  const themeDevelopmentServices = [
    "Creating a Liferay theme from scratch using the Liferay Theme Generator",
    "Write Framgements and Create Master Page templates",
    "Create LIferay Frontend Client Extensions",
    "Convert FIGMA/XD/PSD to Liferay theme",
    "Writing clean and valid SCSS and JavaScript",
    "Implement responsive design",
    "Altering Liferay freemarker template",
    "Embedding portlets/widgets in the theme",
    "Implement theme settings",
    "Implement Internationalization and Localization",
    "Liferay theme deployment",
    "LIferay Theme integration with style books",
    "Upgrade the Liferay theme to the new Liferay version",
    "Client extensions for themeCSS, globalCSS, globalJS, stylebook, etc",
    "Use Site Initializer to programmatically set content for  sites.",
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

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Theme Development</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Transform your Liferay Portal with our expert Liferay Theme Development Services. We specialize in
              converting UX designs into visually captivating HTML and implementing responsive Liferay Theme. Our
              approach ensures
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Our Liferay Theme Development Services
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Our Liferay Front-End Developers craft stunning Liferay Theme that define your portal’s appearance. We
            utilize fragments, templates, and OOTB portlets in our Liferay Theme Development services. This ensures a
            seamless and enhanced user experience.
          </p>
          <div className="pt-8">
            <div className="grid grid-cols-1 gap-[38px] sm:grid-cols-2 md:grid-cols-3">
              {themeDevelopmentServices.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[100px] flex-col items-center justify-center rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-md shadow-black"
                  style={{
                    boxShadow: "-10px 10px 0 rgba(0, 0, 0, 1)",
                  }}
                >
                  <p className="text-center text-xl font-medium text-black">{item}</p>
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
    </main>
  )
}
