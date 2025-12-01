import { Metadata } from "next"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  features,
  featureTabs,
  LiferayMigrationData,
  LiferayMigrationSubContent,
  LiferayMigrationTitle1,
  LiferayMigrationTitle2,
  steps,
} from "data/liferay-migration"

const metadata: Metadata = {
  title: "Liferay Migration Services - IGNEK",
  description:
    "Move smoothly with Liferay Migration Services! Upgrade your digital platform hassle-free with our expert guidance. Elevate your business today!",

  openGraph: {
    url: "https://www.ignek.com/services/liferay-migration/",
    title: "Liferay Migration Services - IGNEK",
    description:
      "Move smoothly with Liferay Migration Services! Upgrade your digital platform hassle-free with our expert guidance. Elevate your business today!",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function LiferayMigrationPage() {
  // const circlePoints = [
  //   { label: "Create Personalized Experiences for Users", pos: "top-4 left-1/2 -translate-x-1/2" },
  //   { label: "Easy Integration Capabilities", pos: "top-1/3 right-4" },
  //   { label: "Rich UI/UX Capabilities", pos: "top-1/2 right-2 -translate-y-1/2" },
  //   { label: "Workflows, Forms, and Collaboration", pos: "bottom-1/3 right-4" },
  //   { label: "Low Code/No Code Features boost Citizen Development", pos: "bottom-4 left-1/2 -translate-x-1/2" },
  //   { label: "Mobile‑ready Capabilities", pos: "bottom-1/3 left-4" },
  //   { label: "Efficient Content Management", pos: "top-1/2 left-2 -translate-y-1/2" },
  // ]

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto mt-[-1px] w-full pt-[7.865vw] pb-[3.802vw]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="p18 banner-tab mb-[2.031vw] inline-flex">Liferay Services</div>
              <h1 className="text-gradient-liferay">
                Liferay
                <br />
                <span className="block">Migration</span>
              </h1>
            </div>
            <p className="p18 absolute bottom-0 w-[28.646vw] text-right md:justify-self-end">
              Upgrade smoothly to the latest Liferay version with expert Liferay Migration to ensures secure data
              transfer, minimal downtime, and optimized platform performance.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-[3.177vw] flex flex-wrap gap-[1.875vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="p20 inline-flex items-center rounded-[2.083vw] border border-[#374151] bg-black px-[1.458vw] py-[0.833vw] text-white shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Circular reasons section */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full pt-[3.75vw] pb-[2.76vw]">
          <div className="relative flex flex-col items-center justify-center px-[0.313vw] text-center">
            {/* Outer Dotted Circle */}
            <div className="relative flex h-[48.125vw] w-[48.125vw] items-center justify-center rounded-full border-[0.104vw] border-dashed border-[#000000]">
              {/* Inner Dotted Circle */}
              <div className="flex h-[31.25vw] w-[31.25vw] items-center justify-center rounded-full border border-dashed border-[#000000]">
                {/* Center Content */}
                <div className="flex max-w-[13.542vw] flex-col items-center text-center">
                  <div className="mx-auto mb-4 flex items-center justify-center rounded-md bg-blue-100">
                    <svg
                      width="91"
                      height="91"
                      viewBox="0 0 91 91"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xlinkHref="http://www.w3.org/1999/xlink"
                    >
                      <rect width="91" height="91" fill="url(#pattern0_3408_4429)" />
                      <defs>
                        <pattern id="pattern0_3408_4429" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use
                            xlinkHref="#image0_3408_4429"
                            transform="translate(-0.321429 -0.303571) scale(0.00586735)"
                          />
                        </pattern>
                        <image
                          id="image0_3408_4429"
                          width="280"
                          height="280"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAOzklEQVR4Ae3dTW4cRxJAYS5oQzB9CC1nSWMuIMAb38Eb/UC2b+DlXMP38AG0FCDA5FF0BA9KssA2pVRkRldWV2Z9AwgmcyIqo15kPLaoRtfVlf8hgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEAjgWfX39y+vv329refr3/49ffr21/+5w8Gy1lYzsRyNq6unl03HirhCFxdPXl+//Tm1d2bm1d3f/uDwVfOwP2T52+fmhkEqgg8+emPH79/cff2KweKcEj3szPw/au7t8vZqTpkgo5J4Ob5u9vvXt29JxevWJJn4P3N63e3x5wed/1VAstPH3IhlqRYTl/RvPdK5qujdsz/01+LyGUFuXwQzfLXpWNOkbv+IoF/fqF7+lPI137PctYZ8IvfL47aERefXd+8urtf66eX63gl9OEMvLh745+wj+iTR/e8vJeBFEihxxn4+D6ZRwfOt8cisLxhqsfhck3SWs7WsabJ3X5GYHlXJhmQQY8zsJytzw6chWMRWN763+NwuSZpLWfrWNPkbj8jQDBE0OuHAcF8Nm7HWyAYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TYiGIIhmOPN/WZ3TDAEQzCbjdvxNiIYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TbqKpgX938+uf3t6VqfC/Ltf3/5z82L+z+LAzH7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MHE7SwMVZ+Yi9rJfqY7adYLJ9X+qLIKJ21kaqDgzF7GX/Up11K4TTK7/U2URTNzO0kDFmbmIvexXqqN2nWBy/Z8qi2DidpYGKs7MRexlv1IdtesEk+v/VFkEE7ezNFBxZi5iL/uV6qhdJ5hc/6fKIpi4naWBijNzEXvZr1RH7TrB5Po/VRbBxO0sDVScmYvYy36lOmrXCSbX/6myCCZuZ2mg4sxcxF72K9VRu04wuf5PlUUwcTtLAxVn5iL2sl+pjtp1gsn1f6osgonbWRqoODMXsZf9SnXUrhNMrv9TZRFM3M7SQMWZuYi97Feqo3adYHL9nyqLYOJ2lgYqzsxF7GW/Uh216wST6/9UWXMJZttnYW/9rOit96sVSSmOYKZSRe5mZhLM1s9unn2/kjhq1wkmN5NTZc0kmM2fhb31s6K33s+Hfk816xe5makEc+ZA1P5kFlf3qBevYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1RDMO2DQzZ1zAjmIiO9r00Jpm5YSKWdE8Hsa9YvUg3BtA8O2dQxI5iLjPS+NiWYumEhlXZOBLOvWb9INQTTPjhkU8eMYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1Rz/cOvvxue9uHBLGa2nK2LHGqb7ofAt7e//WxY4mHBqJ3Rcrb2c9JVchEC39y+vjU87cODWcxsOVsXOdQ23ROBZ9c3L+7eGJh4YDBqYnTf6xP49jQ9aqkg8OT5/VPD0zQ8f+P1dV5Pnr99WnH0hByFwPev/npraL4+NPjU8VnO0lHmxn1WEnjy0x8/fvfy7r0hqhsinAqcXt69X85S5bETdiQCN6/f3ZJMYXB8HGf818LlB9Tzd36xeyRptN7r8tPHX5dIpvUV2nJmvHJpnbYDx//zi9/71oMm/mByenH3xi90DyyK82792fXyXoblDVPLuzKXt377g8FyFpYz8fF9Ln0ednfeuZWNAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwL4J/B+NefvO5FLgiwAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </div>
                  <h2 className="mb-[0.104vw] w-[26.146vw] text-[1.875vw]! font-medium">
                    Why Enterprises Should Migrate To Liferay?
                  </h2>
                  <p className="mt-[0.208vw] text-[0.729vw] leading-relaxed text-gray-600">
                    Liferay provides a scalable platform for personalized customer experiences, with Liferay Portal
                    Migration enhancing content management for efficient delivery.
                  </p>
                </div>
              </div>

              {/* Circular Feature Points */}
              {features.map((feature, index) => (
                <div key={index} className={`absolute ${feature.position} flex flex-col`}>
                  <div className="mb-[0.104vw] flex h-[2.917vw] min-h-[2.917vw] w-[2.917vw] min-w-[2.917vw] items-center justify-center rounded-full bg-black text-white">
                    <svg width="21" height="8" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 10L7 16L22 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className={`${feature.heading} text-[1.042vw] leading-snug font-medium text-gray-800`}>{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process timeline */}
      <section className="bg-black text-white">
        <div className="global-container mx-auto w-full py-[3.333vw]">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="sticky top-0 flex w-[28.698vw] flex-col gap-[1.458vw]">
              <h2 className="leading-[60px] font-semibold">Our Liferay Migration Process</h2>
              <p className="p20 text-gray-500">
                We optimize transitions from legacy systems to Liferay with our proven Liferay Portal Migration
                services, using best practices for seamless upgrades. Our expertise ensures cost-effective, high-quality
                transitions. Here is our Liferay Migration process.
              </p>
              <ScheduleMeetingButton isFullWidth={false} btnName="Schedule Meeting" />
            </div>

            <div>
              <div className="relative">
                <div className="relative mt-[0.313vw] ml-[3.75vw] flex flex-col">
                  {/* Vertical line */}
                  <div
                    className="absolute top-0 left-[2.3vw] h-[89%] bg-white [@media(min-width:2140px)]:h-[90%]"
                    style={{ width: "4px" }}
                  ></div>

                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start ${index !== steps.length - 1 ? "" : "mb-0"}`}
                    >
                      {/* Step circle */}
                      <div className="flex flex-col items-center">
                        <div className="z-10 flex h-[4.688vw] w-[4.688vw] items-center justify-center rounded-full border-4 border-white bg-black text-2xl text-white">
                          {index + 1}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className={`${index !== steps.length - 1 ? "max-w-[34.583vw]" : ""} ml-[3.438vw]`}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-[1.563vw]! font-medium! text-[#FFFFFF]">{step.title}</h3>
                        </div>
                        <p className="text-gray/50 p20 mt-[1.25vw]">{step.desc}</p>
                        {index !== steps.length - 1 ? <hr className="mt-[2.708vw] mb-[2.708vw]" /> : ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies (reuse BlogSection) */}
      <WhatMake
        WhatMakeData={LiferayMigrationData}
        titleText1={LiferayMigrationTitle1}
        titleText2={LiferayMigrationTitle2}
        subContext={LiferayMigrationSubContent}
      />
      <TalkToExpert
        heading="Hassle-Free Liferay Portal Migration"
        description="Ensure smooth upgrades with expert guidance and proven migration strategies."
        buttonText="Start Your Migration"
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
