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
            We help businesses craft a clear and actionable digital roadmap that aligns with both short-term objectives
            and long-term vision
          </p>
        </div>

        {/* Digital Experience */}
        <div className="mt-21 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <div className="mt-6.5">
              <h3 className="text-2xl font-semibold md:text-4xl">Digital Experience</h3>
              <p className="mt-3 max-w-xl text-lg text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
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
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
                },
                { title: "DX Design", content: "Lorem ipsum dolor sit amet..." },
                { title: "DX Engineering", content: "Lorem ipsum dolor sit amet..." },
              ].map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
              ))}
            </div>
            <div>
              {[
                { title: "DX Intelligence", content: "Lorem ipsum dolor sit amet..." },
                { title: "DX Marketing", content: "Lorem ipsum dolor sit amet..." },
                { title: "DX Infrastructure", content: "Lorem ipsum dolor sit amet..." },
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
          <div className={`${getAnimationClass("animate-slide-right", "animation-delay-200")} grid gap-10 md:gap-12`}>
            <div>
              {[
                { title: "Technical Excellence", content: "Lorem ipsum dolor sit amet..." },
                { title: "Value-Based Pricing", content: "Lorem ipsum dolor sit amet..." },
                { title: "Training", content: "Lorem ipsum dolor sit amet..." },
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
