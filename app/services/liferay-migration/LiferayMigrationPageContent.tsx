"use client"
import { BlogSection } from "components/Common"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"
import {
  features,
  featureTabs,
  heroMigration,
  LiferayMigrationData,
  liferayMigrationProcess,
  LiferayMigrationSubContent,
  liferayMigrationTalk,
  LiferayMigrationTitle1,
  LiferayMigrationTitle2,
  steps,
  whyMigrateLiferay,
} from "data/liferay-migration"

export default function LiferayMigrationPage() {
  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto mt-[-1px] w-full pt-24 pb-12 lg:pt-[7.865vw] lg:pb-[3.802vw]">
          <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-gradient-liferay">
                {heroMigration.titlePart1}
                <br />
                <span className="block">{heroMigration.titlePart2}</span>
              </h1>
            </div>
            <p className="text-p16 md:text-p18 relative w-full text-left md:justify-self-end lg:absolute lg:bottom-0 lg:w-[28.646vw] lg:text-right lg:text-white">
              {heroMigration.descriptionPart1}
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-10 flex flex-wrap gap-4 lg:mt-[3.177vw] lg:gap-[1.875vw]">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="text-p16 md:text-p20 inline-flex items-center rounded-full border border-[#374151] bg-black px-4 py-2 text-white shadow-[0_4px_10px_0_rgba(0,151,158,0.25)] transition-colors lg:rounded-[2.083vw] lg:px-[1.458vw] lg:py-[0.833vw] lg:shadow-[0_0.208vw_0.521vw_0_rgba(0,151,158,0.25)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Circular reasons section */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full py-16 lg:pt-[3.333vw] lg:pb-[3.333vw]">
          <div className="relative flex flex-col items-center justify-center px-4 text-center lg:px-[0.313vw]">
            {/* Outer Dotted Circle */}
            <div className="relative flex h-[75vw] w-[75vw] items-center justify-center rounded-full border-[1px] border-dashed border-[#000000] md:h-[70vw] md:w-[70vw] lg:h-[48.125vw] lg:w-[48.125vw] lg:border-[0.104vw]">
              {/* Inner Dotted Circle */}
              <div className="flex h-[60vw] w-[60vw] items-center justify-center rounded-full border-[1px] border-dashed border-[#000000] md:h-[50vw] md:w-[50vw] lg:h-[31.25vw] lg:w-[31.25vw] lg:border-[0.104vw]">
                {/* Center Content */}
                <div className="flex flex-col items-center gap-2 px-2 text-center lg:gap-[1.823vw]">
                  <div className="mx-auto flex items-center justify-center rounded-md">
                    <svg
                      width="91"
                      height="91"
                      className="h-10 w-10 md:h-16 md:w-16 lg:h-[4.74vw] lg:w-[4.74vw]"
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
                  <h2 className="w-full text-[2vw]! leading-tight! font-medium lg:w-[26.146vw] lg:text-[1.875vw] lg:font-medium">
                    {whyMigrateLiferay.titlePart1} {whyMigrateLiferay.titlePart2}
                  </h2>
                  <p className="text-[2vw] text-gray-600 lg:w-[21.75vw] lg:text-[0.833vw]">
                    {whyMigrateLiferay.descPart1} {whyMigrateLiferay.descPart2}
                  </p>
                </div>
              </div>

              {/* Circular Feature Points */}
              {features.map((feature, index) => (
                <div key={index} className={`absolute ${feature.position} flex flex-col items-center`}>
                  <div className="mb-1 flex h-[6vw] w-[6vw] items-center justify-center rounded-full bg-black lg:mb-[0.104vw] lg:h-[2.917vw] lg:w-[2.917vw]">
                    <div className="p-1 text-white lg:p-[36px]">
                      <svg
                        className="h-2 w-2 md:h-4 md:w-4 lg:h-[17px] lg:w-[23px]"
                        width="23"
                        height="17"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L7 16L22 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p
                    className={`${feature.heading} text-[max(7px,1.6vw)] leading-tight font-medium text-gray-800 lg:text-[1.042vw]`}
                  >
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process timeline */}
      <section className="bg-black py-16 text-white lg:py-0">
        <div className="global-container mx-auto w-full lg:py-[3.333vw]">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-[8.417vw]">
            <div className="relative flex w-full flex-col gap-6 lg:sticky lg:top-[10.417vw] lg:w-1/2 lg:gap-[1.458vw]">
              <h2 className="leading-[60px] font-semibold">{liferayMigrationProcess.title}</h2>
              <p className="text-p16 lg:text-p18 text-gray-100">{liferayMigrationProcess.description}</p>
              {/* <ScheduleMeetingButton isFullWidth={false} btnName="Schedule Meeting" /> */}
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative flex flex-col lg:mt-[0.313vw]">
                  {/* Vertical line */}
                  <div
                    className="absolute top-0 left-5 h-[86%] w-[2px] bg-white md:left-7 md:h-[89%] lg:left-[1.999vw] lg:w-[4px]"
                    // style={{ width: "4px" }}
                  ></div>

                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start ${index !== steps.length - 1 ? "" : "mb-10 lg:mb-0"}`}
                    >
                      {/* Step circle */}
                      <div className="flex flex-col items-center">
                        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-lg text-white md:h-14 md:w-14 md:text-2xl lg:h-[4.167vw] lg:w-[4.167vw] lg:border-4">
                          {index + 1}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="ml-6 flex-1 lg:ml-[3.438vw]">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl! font-medium text-white md:text-2xl! lg:text-[1.563vw]! lg:font-medium">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-p16 md:text-p20 mt-2 text-gray-50 lg:mt-[1.25vw]">{step.desc}</p>
                        {index !== steps.length - 1 ? <hr className="mt-8 mb-[2.708vw] lg:mt-[2.708vw]" /> : ""}
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
        heading={liferayMigrationTalk.heading}
        description={liferayMigrationTalk.description}
        buttonText={liferayMigrationTalk.buttonText}
      />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
