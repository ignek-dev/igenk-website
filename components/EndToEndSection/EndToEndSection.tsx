"use client"

import { useInView } from "hooks/useInView" // Adjust path if needed
import { Accordion } from "components/Common/Accordion" // <-- new import
import AccordionItem from "components/Common/AccordionItem"
import AccordionMain from "components/Common/AccordionMain"
import { EndToEndSectionData } from "data/homepage-content"

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
        <div className="grid gap-10 items-center md:grid-cols-2 md:gap-12 lg:gap-0">
          <div>
            <h2 className={`${getAnimationClass("animate-slide-top")}`}>
              {EndToEndSectionData.heading}
            </h2>
          </div>
          <p className={`${getAnimationClass("animate-slide-top")} p18 max-w-4xl text-right text-white/80`}>
            {EndToEndSectionData.description}
          </p>
        </div>

        {/* Digital Experience */}
        <div className="mt-[3.333vw] grid gap-[3.333vw] md:grid-cols-2">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <div>
              <p className="text-[2.083vw] font-semibold">{EndToEndSectionData.digitalExperience.title}</p>
              <p className="p18 mt-[1.25vw] max-w-xl text-[#E5E7EB]">
                {EndToEndSectionData.digitalExperience.description}
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
              items={EndToEndSectionData.digitalExperience.accordion}
              columns={2}
              defaultOpenIndex={null}
            />
          </div>
        </div>

        {/* Staff Augmentation */}
        <div className="mt-[4.688vw] grid gap-12 md:grid-cols-2 md:gap-14 lg:mt-24 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <p className="text-[2.083vw] font-semibold md:text-[40px]">{EndToEndSectionData.staffAugmentation.title}</p>
            <p className="mt-[1.25vw] max-w-xl p18 text-[#E5E7EB]">
              {EndToEndSectionData.staffAugmentation.description}
            </p>
          </div>
          <div className={`${getAnimationClass("animate-slide-right", "animation-delay-200")} grid gap-10 md:gap-12`}>
            <div>
              <AccordionMain
                items={EndToEndSectionData.staffAugmentation.accordion}
                defaultOpenIndex={null}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
