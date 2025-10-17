import Image from "next/image"
import Link from "next/link"
import { BlogSection } from "../../components/Common"
import HeroCTASection from "components/Common/HeroCTASection"
import WhatMake from "components/Common/WhatMake"
import TalkToExpert from "components/Common/TalkToExpert"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"

export default function LiferayMigrationPage() {
  const featureTabs = [
    "Seamless Migration to Liferay DXP",
    "Upgrading/Migration",
    "Ensure Long‑Term Support & Scalability",
  ]

  const circlePoints = [
    { label: "Create Personalized Experiences for Users", pos: "top-4 left-1/2 -translate-x-1/2" },
    { label: "Easy Integration Capabilities", pos: "top-1/3 right-4" },
    { label: "Rich UI/UX Capabilities", pos: "top-1/2 right-2 -translate-y-1/2" },
    { label: "Workflows, Forms, and Collaboration", pos: "bottom-1/3 right-4" },
    { label: "Low Code/No Code Features boost Citizen Development", pos: "bottom-4 left-1/2 -translate-x-1/2" },
    { label: "Mobile‑ready Capabilities", pos: "bottom-1/3 left-4" },
    { label: "Efficient Content Management", pos: "top-1/2 left-2 -translate-y-1/2" },
  ]

  const steps = [
    {
      title: "Requirement Understanding",
      desc:
        "We analyze the current portal, compare it with the new version's needs, and identify improvements for a smooth transition and clear migration requirements.",
    },
    {
      title: "Migration Planning",
      desc:
        "We ensure a smooth Liferay transition by planning design, architecture, and data migration. Once approved, we migrate your data and workflow for a secure, seamless upgrade.",
    },
    {
      title: "Portal Design – UI/UX",
      desc:
        "Our UI & UX experts design intuitive interfaces, develop mock screens to finalize the theme, and complete the portal's design. We conduct review sessions for any adjustments.",
    },
    {
      title: "Portal Development",
      desc:
        "We handle your Liferay upgrade, including content migration, theme development, data transfer, and media migration, optimizing for a seamless digital experience.",
    },
    {
      title: "Portal Migration QA",
      desc:
        "We’ll verify migration with manual and automated tests to ensure everything works perfectly. Our QA team will validate content, media, and database against the legacy system.",
    },
    {
      title: "Portal Deployment & Production Release",
      desc:
        "After QA approval, we’ll transition to the new platform while keeping the old system running for a few weeks. This enables cross-validation, including SEO impact and user behavior.",
    },
  ]

  const features = [
    {
      title: "Easy Integration Capabilities",
      position: "top-[-10px] left-1/2  right-[-100px]",
    },
    {
      title: "B2B & B2C Digital Commerce",
      position: "top-[25%] right-[30px] flex flex-row",
    },
    {
      title: "Forms, Workflow, and Collaboration",
      position: "bottom-[20%] right-[-18%] flex flex-row",
    },
    {
      title: "Low Code/No Code Tool for Rapid Custom Development",
      position: "bottom-[10%] left-1/2 -translate-x-1/2 min-w-[347px]",
    },
    {
      title: "Native Headless Capabilities",
      position: "bottom-[22%] left-[-130px] flex flex-row-reverse ",
    },
    {
      title: "Efficient Content Management System",
      position: "top-[45%] left-[-20px] flex flex-row-reverse",
    },
    {
      title: "Create Personalized Experiences for Users",
      position: "top-[20%] left-[-135px] flex flex-row-reverse",
    },
  ];
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
          <div className="grid items-start gap-10 md:grid-cols-2 relative">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">Liferay Services</div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Migration</span>
              </h1>
            </div>
            <p className="max-w-xl text-lg  text-white  sm:text-lg md:mt-16 md:justify-self-end absolute bottom-0">
              Migrate confidently to Liferay with a proven plan that protects data, accelerates delivery, and unlocks new capabilities.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-5">
            {featureTabs.map((label) => (
              <span key={label} className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white hover:text-white hover:border-white transition-colors">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Circular reasons section */}
      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="relative flex flex-col items-center justify-center  text-center px-6">
            {/* Outer Dotted Circle */}
            <div className="relative w-[700px] h-[700px] rounded-full border-2 border-dotted border-gray-300 flex items-center justify-center">
              {/* Inner Dotted Circle */}
              <div className="w-[400px] h-[400px] rounded-full border border-dotted border-gray-300 flex items-center justify-center">
                {/* Center Content */}
                <div className="max-w-[260px]">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100">
                    <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                      <rect width="91" height="91" fill="url(#pattern0_3408_4429)" />
                      <defs>
                        <pattern id="pattern0_3408_4429" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image0_3408_4429" transform="translate(-0.321429 -0.303571) scale(0.00586735)" />
                        </pattern>
                        <image id="image0_3408_4429" width="280" height="280" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAYAAACHjumMAAAOzklEQVR4Ae3dTW4cRxJAYS5oQzB9CC1nSWMuIMAb38Eb/UC2b+DlXMP38AG0FCDA5FF0BA9KssA2pVRkRldWV2Z9AwgmcyIqo15kPLaoRtfVlf8hgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEAjgWfX39y+vv329refr3/49ffr21/+5w8Gy1lYzsRyNq6unl03HirhCFxdPXl+//Tm1d2bm1d3f/uDwVfOwP2T52+fmhkEqgg8+emPH79/cff2KweKcEj3szPw/au7t8vZqTpkgo5J4Ob5u9vvXt29JxevWJJn4P3N63e3x5wed/1VAstPH3IhlqRYTl/RvPdK5qujdsz/01+LyGUFuXwQzfLXpWNOkbv+IoF/fqF7+lPI137PctYZ8IvfL47aERefXd+8urtf66eX63gl9OEMvLh745+wj+iTR/e8vJeBFEihxxn4+D6ZRwfOt8cisLxhqsfhck3SWs7WsabJ3X5GYHlXJhmQQY8zsJytzw6chWMRWN763+NwuSZpLWfrWNPkbj8jQDBE0OuHAcF8Nm7HWyAYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TYiGIIhmOPN/WZ3TDAEQzCbjdvxNiIYgiGY4839ZndMMARDMJuN2/E2IhiCIZjjzf1md0wwBEMwm43b8TbqKpgX938+uf3t6VqfC/Ltf3/5z82L+z+LAzH7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MHE7SwMVZ+Yi9rJfqY7adYLJ9X+qLIKJ21kaqDgzF7GX/Up11K4TTK7/U2URTNzO0kDFmbmIvexXqqN2nWBy/Z8qi2DidpYGKs7MRexlv1IdtesEk+v/VFkEE7ezNFBxZi5iL/uV6qhdJ5hc/6fKIpi4naWBijNzEXvZr1RH7TrB5Po/VRbBxO0sDVScmYvYy36lOmrXCSbX/6myCCZuZ2mg4sxcxF72K9VRu04wuf5PlUUwcTtLAxVn5iL2sl+pjtp1gsn1f6osgonbWRqoODMXsZf9SnXUrhNMrv9TZRFM3M7SQMWZuYi97Feqo3adYHL9nyqLYOJ2lgYqzsxF7GW/Uh216wST6/9UWXMJZttnYW/9rOit96sVSSmOYKZSRe5mZhLM1s9unn2/kjhq1wkmN5NTZc0kmM2fhb31s6K33s+Hfk816xe5makEc+ZA1P5kFlf3qBevYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1RDMO2DQzZ1zAjmIiO9r00Jpm5YSKWdE8Hsa9YvUg3BtA8O2dQxI5iLjPS+NiWYumEhlXZOBLOvWb9INQTTPjhkU8eMYC4y0vvalGDqhoVU2jkRzL5m/SLVEEz74JBNHTOCuchI72tTgqkbFlJp50Qw+5r1i1Rz/cOvvxue9uHBLGa2nK2LHGqb7ofAt7e//WxY4mHBqJ3Rcrb2c9JVchEC39y+vjU87cODWcxsOVsXOdQ23ROBZ9c3L+7eGJh4YDBqYnTf6xP49jQ9aqkg8OT5/VPD0zQ8f+P1dV5Pnr99WnH0hByFwPev/npraL4+NPjU8VnO0lHmxn1WEnjy0x8/fvfy7r0hqhsinAqcXt69X85S5bETdiQCN6/f3ZJMYXB8HGf818LlB9Tzd36xeyRptN7r8tPHX5dIpvUV2nJmvHJpnbYDx//zi9/71oMm/mByenH3xi90DyyK82792fXyXoblDVPLuzKXt377g8FyFpYz8fF9Ln0ednfeuZWNAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwL4J/B+NefvO5FLgiwAAAABJRU5ErkJggg==" />
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-medium mb-2">
                    Why Enterprises Should Migrate To Liferay?
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mt-4">
                    Liferay provides a scalable platform for personalized customer
                    experiences, with Liferay Portal Migration enhancing content
                    management for efficient delivery.
                  </p>
                </div>
              </div>

              {/* Circular Feature Points */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute ${feature.position} flex flex-col items-center w-48 text-center`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white mb-2  min-h-[40px] min-w-[40px]">
                    ✓
                  </div>
                  <p className="text-xl font-medium text-gray-800 leading-snug">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process timeline */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="w-[80%] sticky top-0">
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-[60px]">Our Liferay Migration Process</h2>
              <p className="mt-4 max-w-xl text-lg text-white mb-8">
                Understand objectives, plan dependencies, and execute migrations with predictable outcomes.
              </p>
              <ScheduleMeetingButton />
            </div>

            <div>
              <div className="relative">
                <div className="relative flex flex-col ml-12">
                  {/* Vertical line */}
                  <div
                    className="absolute left-7 top-0 bg-white h-[90%]"
                    style={{ width: "4px" }}
                  ></div>

                  {steps.map((step, index) => (
                    <div key={index}
                      className={`flex items-start relative ${index !== steps.length - 1 ? "mb-12" : "mb-0"
                        }`}
                    >
                      {/* Step circle */}
                      <div className="flex flex-col items-center">
                        <div className="w-15 h-15 bg-black text-white rounded-full border-4 border-white flex items-center justify-center z-10 text-2xl">
                          {index + 1}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className={`${index !== steps.length - 1 ? 'border-b border-white/20 pb-8' : ''} ml-8 `}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-medium md:text-3xl">{step.title}</h3>
                        </div>
                        <p className="mt-4 text-lg text-gray/50 ">{step.desc}</p>
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
      <WhatMake />
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}