// WhatWeBringCarousel.tsx
"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
// import WhatWeBringCard from "./WhatWeBringCard"
// import WhatWeBringHeader from "./WhatWeBringHeader"
import { cardData } from "data/homepage-content"
import WhatWeBringCard from "components/WhatWeBring/WhatWeBringCard"

const CARD_WIDTH = 360 // incl gap – tweak once visually

const WhatWeBringCarousel = () => {
  const [index, setIndex] = useState(0)

  const maxIndex = cardData.length - 1

  return (
    <section className="bg-black py-16 text-white overflow-hidden">
      <div className="global-container">
        
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2>
              What We Bring To Your
              <br />
              Digital Experience
            </h2>
            <p className="max-w-xl pt-0 text-left lg:text-right p18 text-gray-300">
              We empower businesses to deliver exceptional digital experiences through innovative strategies, design, and technology built on the power of Liferay DXP.
            </p>
          </div>

        {/* Cards */}
        <motion.div
          animate={{ x: `-${index * CARD_WIDTH}px` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-12 flex w-max gap-11 pr-11"
        >
          {cardData.map((card) => (
            <WhatWeBringCard key={card.cardNumber} {...card} />
          ))}
        </motion.div>

        {/* Arrows */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 disabled:opacity-40"
          >
            ←
          </button>

          <button
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            disabled={index === maxIndex}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBringCarousel
