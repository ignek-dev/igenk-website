"use client"

import AccordionItem from "components/Common/AccordionItem"
import { useInView } from "hooks/useInView" // Adjust path if needed

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
      <div className="mx-auto w-full overflow-x-hidden px-4 py-12 md:px-6 md:py-16 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Top Heading */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2
              className={`${getAnimationClass(
                "animate-slide-top"
              )} line-height-[60px] letter-spacing-[-0.02em] text-5xl font-semibold sm:text-4xl md:text-5xl [@media(min-width:1440px)]:text-4xl [@media(min-width:1520px)]:text-5xl `}
            >
              Your End-to-End Digital Transformation Partner
            </h2>
          </div>
          <p
            className={`${getAnimationClass(
              "animate-slide-top"
            )} line-height-[30px] max-w-3xl pt-6.5 text-right text-lg text-white/80`}
          >
            We empower enterprises to innovate and scale with comprehensive Liferay DXP solutions, combining strategy, design, and technology for seamless digital transformation success.
          </p>
        </div>

        {/* Digital Experience */}
        <div className="mt-21 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <div className="mt-6.5">
              <h3 className="text-2xl font-semibold md:text-4xl">Digital Experience</h3>
              <p className="mt-3 max-w-xl text-lg text-white/80">
                We craft unified and personalized digital experiences using Liferay DXP, ensuring customer engagement, consistency, and business growth across all digital touchpoints.
              </p>
            </div>
          </div>
          <div
            className={`${getAnimationClass(
              "animate-slide-right",
              "animation-delay-200"
            )} grid gap-10 md:grid-cols-2 md:gap-12`}
          >
            <div>
              {[
                {
                  title: "DX Strategy",
                  content: "We define data-driven digital transformation strategies that align technology, business goals, and customer needs for long-term growth.",
                },
                { title: "DX Design", content: "Our design experts create user-centric interfaces and seamless journeys that elevate brand identity and enhance engagement." },
                { title: "DX Engineering", content: "We engineer scalable, secure, and high-performing digital platforms leveraging Liferay DXP to accelerate transformation and innovation." },
              ].map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
              ))}
            </div>
            <div>
              {[
                { title: "DX Intelligence", content: "We integrate analytics and AI-driven insights to optimize performance, personalize experiences, and support informed business decisions." },
                { title: "DX Marketing", content: "We help businesses deliver targeted campaigns and consistent messaging using integrated digital marketing strategies and tools." },
                { title: "DX Infrastructure", content: "We build reliable, cloud-ready infrastructures that support scalability, performance, and security across enterprise digital ecosystems." },
              ].map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </div>

        {/* Staff Augmentation */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-14 lg:mt-24 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <h3 className="text-2xl font-semibold md:text-4xl">Staff augmentation</h3>
            <p className="mt-3 max-w-xl text-lg text-white/80">
              We provide expert Liferay developers and consultants through flexible staff augmentation models, ensuring rapid scalability, domain expertise, and seamless project delivery.
            </p>
          </div>
          <div className={`${getAnimationClass("animate-slide-right", "animation-delay-200")} grid gap-10 md:gap-12`}>
            <div>
              {[
                { title: "Technical Excellence", content: "Delivering innovative, scalable, and reliable Liferay solutions built with unmatched technical expertise and industry best practices." },
                { title: "Value-Based Pricing", content: "Offering transparent, outcome-driven pricing models that align with your business value." },
                { title: "Training", content: "Empowering teams with expert-led Liferay platform training for efficiency and innovation." },
              ].map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
