"use client"

import { useInView } from "hooks/useInView" // Adjust path if needed
import { Accordion } from "components/Common/Accordion" // <-- new import
import AccordionItem from "components/Common/AccordionItem"
import AccordionMain from "components/Common/AccordionMain"
import { EndToEndSectionData } from "data/homepage-content"
import { useEffect, useState } from "react"

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

  const [columns, setColumns] = useState(2)

useEffect(() => {
  const updateColumns = () => {
    setColumns(window.innerWidth < 768 ? 1 : 2)
  }

  updateColumns()
  window.addEventListener("resize", updateColumns)
  return () => window.removeEventListener("resize", updateColumns)
}, [])

  return (
    // Attach the ref from the hook to the section
    <section ref={sectionRef} className="relative bg-black text-white">
      <div className="global-container w-full pt-0 lg:pt-[3.333vw] py-8 lg:py-[3.333vw]">
        {/* Top Heading */}
        <div className="grid md:gap-10 items-center lg:grid-cols-2 gap-4 lg:gap-0">
          <div>
            <h2 className={`${getAnimationClass("animate-slide-top")}`}>
              {EndToEndSectionData.heading}
            </h2>
          </div>
          <p className={`${getAnimationClass("animate-slide-top")} text-p16 md:text-p18 lg:text-p18 max-w-4xl sm:text-left lg:text-right text-white/80`}>
            {EndToEndSectionData.description}
          </p>
        </div>

        {/* Digital Experience */}
        <div className="mt-6 md:mt-[3.333vw] grid gap-3 md:gap-[3.333vw] grid-cols-1 lg:grid-cols-2">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <div>
              <p className="text-p20 md:text-[2.5rem]! lg:text-[2.083vw]! font-bold!">{EndToEndSectionData.digitalExperience.title}</p>
              <p className="text-p14 md:text-p18 lg:text-p18 mt-5 md:mt-8 lg:mt-[1.25vw] max-w-xl text-[#E5E7EB]">
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
              columns={columns}
              defaultOpenIndex={null}
            />
          </div>
        </div>

        {/* Staff Augmentation */}
        <div className="mt-[72px] md:mt-[4.688vw] grid gap-5! grid-cols-1 lg:grid-cols-2 lg:mt-24 lg:gap-16">
          <div className={getAnimationClass("animate-slide-left", "animation-delay-200")}>
            <p className="text-p20 md:text-[2.5rem]! lg:text-[2.083vw]! font-bold!">{EndToEndSectionData.staffAugmentation.title}</p>
            <p className="mt-5 md:mt-8 lg:mt-[1.25vw] max-w-xl text-p14 md:text-p18 lg:text-p18 text-[#E5E7EB]">
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
