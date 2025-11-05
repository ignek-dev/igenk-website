'use client'

import { motion, useTransform } from "framer-motion"
import React from "react"
import { useSharedScroll } from "components/Common/ScrollContextProvider"
import WhatWeBringCard from "./WhatWeBringCard"

// Dummy data for the six cards
const cardData = [
  {
    cardNumber: "01",
    title: "Enterprise Websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "02",
    title: "Employee Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "03",
    title: "Digital Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "04",
    title: "Another Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "05",
    title: "Creative Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
  {
    cardNumber: "06",
    title: "Data Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh et, maximus ante fermentum sit amet.",
  },
]

const WhatWeBring: React.FC = () => {
  // 👇 Use the context hook to get the scroll progress
  const scrollYProgress = useSharedScroll();

  // The rest of the animation logic is the same
  const x = useTransform(scrollYProgress, [0, 0.75], ["0%", "-82%"]);

  return (
    // This section is "sticky" and stays on screen while the parent scrolls
    <section className="sticky top-0 z-10 py-16 flex h-screen items-center overflow-hidden bg-black text-white">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Header content (your styling is preserved) */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="text-5xl font-bold leading-tight line-height-[60px]">
            What We Bring To Your
            <br />
            Digital Experience
          </h2>
          <p className="max-w-xl pt-8.5 text-lg text-gray-300 text-right line-height-[30px]">
            We help businesses craft a clear and actionable digital roadmap...
          </p>
        </div>

        {/* This motion.div moves horizontally based on the scroll progress */}
        <motion.div
          style={{ x }}
          className="flex space-x-11 pt-15 pb-16"
        >
          {cardData.map((card) => (
            <WhatWeBringCard
              key={card.cardNumber}
              cardNumber={card.cardNumber}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeBring
