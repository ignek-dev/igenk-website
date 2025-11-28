"use client"

import { useInView } from "hooks/useInView" // Adjust path if needed
import { Accordion } from "components/Common/Accordion" // <-- new import
import AccordionItem from "components/Common/AccordionItem"
import AccordionMain from "components/Common/AccordionMain"
// removed single AccordionItem import because we use the parent Accordion

export default function EndToEndSection() {
  // Use the hook here! We pass `triggerOnce: true`.
  const [sectionRef, isInView] = useInView({ triggerOnce: true })

  // Base class to keep elements hidden before animation
  const initialClass = "opacity-0"

  // Conditionally apply animation classes based on `isInView`
  const getAnimationClass = (animation: string, delay?: string) => {
    return isInView ? `animate-when-visible ${animation} ${delay || ""}` : initialClass
  }

  return (
    // Attach the ref from the hook to the section
    <section ref={sectionRef} className="relative bg-black text-white">
      <div className="global-container w-full py-[3.333vw]">
        {/* Top Heading */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-0">
          <div>
            <h2 className={`${getAnimationClass("animate-slide-top")}`}>
              Your End-to-End Digital Transformation Partner
            </h2>
          </div>
          <p className={`${getAnimationClass("animate-slide-top")} p18 max-w-4xl pt-6.5 text-right text-white/80`}>
            We empower enterprises to innovate and scale with comprehensive Liferay DXP solutions, combining strategy,
            design, and technology for seamless digital transformation success.
          </p>
        </div>

        {/* Digital Experience */}
        <div className="mt-[3.333vw] grid gap-[3.333vw] md:grid-cols-2">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <div className="mt-6.5">
              <p className="text-[2.083vw] font-semibold">Digital Experience</p>
              <p className="p18 mt-[1.25vw] max-w-xl text-white/80">
                We craft unified and personalized digital experiences using Liferay DXP, ensuring customer engagement,
                consistency, and business growth across all digital touchpoints.
              </p>
            </div>
          </div>
          <div
            className={`${getAnimationClass(
              "animate-slide-right",
              "animation-delay-200"
            )}`}
          >
            <AccordionMain
              items={[
                {
                  title: "DX Strategy",
                  content:
                    "We define data-driven digital transformation strategies that align technology, business goals, and customer needs for long-term growth.",
                },
                {
                  title: "DX Design",
                  content:
                    "Our design experts create user-centric interfaces and seamless journeys that elevate brand identity and enhance engagement.",
                },
                {
                  title: "DX Engineering",
                  content:
                    "We engineer scalable, secure, and high-performing digital platforms leveraging Liferay DXP to accelerate transformation and innovation.",
                },
                {
                  title: "DX Intelligence",
                  content:
                    "We integrate analytics and AI-driven insights to optimize performance, personalize experiences, and support informed business decisions.",
                },
                {
                  title: "DX Marketing",
                  content:
                    "We help businesses deliver targeted campaigns and consistent messaging using integrated digital marketing strategies and tools.",
                },
                {
                  title: "DX Infrastructure",
                  content:
                    "We build reliable, cloud-ready infrastructures that support scalability, performance, and security across enterprise digital ecosystems.",
                },
              ]}
              columns={2}
              defaultOpenIndex={null}
            />
          </div>
        </div>

        {/* Staff Augmentation */}
        <div className="mt-[5.052vw] grid gap-12 md:grid-cols-2 md:gap-14 lg:mt-24 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <p className="text-2xl pt-[1.563vw] font-semibold md:text-[40px]">Staff augmentation</p>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              We provide expert Liferay developers and consultants through flexible staff augmentation models, ensuring
              rapid scalability, domain expertise, and seamless project delivery.
            </p>
          </div>
          <div className={`${getAnimationClass("animate-slide-right", "animation-delay-200")} grid gap-10 md:gap-12`}>
            <div>
              <AccordionMain
                items={[
                  {
                    title: "Technical Excellence",
                    content:
                      "Delivering innovative, scalable, and reliable Liferay solutions built with unmatched technical expertise and industry best practices.",
                  },
                  {
                    title: "Value-Based Pricing",
                    content: "Offering transparent, outcome-driven pricing models that align with your business value.",
                  },
                  {
                    title: "Training",
                    content:
                      "Empowering teams with expert-led Liferay platform training for efficiency and innovation.",
                  },
                ]}
                defaultOpenIndex={null}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
