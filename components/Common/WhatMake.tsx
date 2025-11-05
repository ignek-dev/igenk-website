"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
// declare var window: any;
const highlights = [
  {
    title: "Liferay–First Approach",
    desc: "We specialize exclusively in latest Liferay development, ensuring deep focus and unmatched expertise.",
    sub: "We work as an extension of your team, aligning with your goals instead of just delivering tasks.",
  },
  // {
  //   title: "Strategic Proof of Concept",
  //   desc: "We validate ideas early through small, high-impact prototypes.",
  //   sub: "This helps ensure alignment with business goals before full-scale implementation.",
  // },
  // {
  //   title: "End-to-End Support",
  //   desc: "From design to deployment, we manage the full lifecycle of your Liferay solution.",
  //   sub: "You can rely on us for maintenance, upgrades, and continuous improvement.",
  // },
]

const WhatMake = () => {
  const containerRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <>
      <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        <div className="relative grid items-start gap-10 md:grid-cols-2">
          <h2 className="w-[60%] text-3xl leading-[60px] font-semibold sm:text-4xl md:text-5xl">
            What Makes IGNEK the Right Choice
          </h2>
          <p className="text-gray/500 absolute bottom-0 max-w-xl text-right text-xl md:justify-self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla,
          </p>
        </div>
      </div>
      <section
        ref={containerRef}
        className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
      >
        <div className="sticky top-0 flex w-full flex-col items-center justify-center">
          <div className="sticky top-0 flex w-full flex-col items-center justify-center">
            <motion.div
              // style={{ y }}
              className="flex w-full flex-col items-center justify-center"
            >
              {highlights.map((item, index) => (
                <div key={index} className="relative flex w-full flex-col items-center space-y-6 text-center">
                  <div className="absolute top-[30px] left-0 w-full">
                    <svg
                      width="1920"
                      height="515"
                      viewBox="0 0 1920 515"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="959.5" cy="2500" r="2499" stroke="black" strokeWidth="2" />
                    </svg>
                  </div>
                  {/* Black Capsule */}
                  <div className="z-10 mx-auto w-auto max-w-screen-xl rounded-full bg-black px-10 py-4 text-xl font-medium text-white shadow-lg">
                    {item.title}
                  </div>
                  {/* Description */}
                  <div className="mx-auto mt-8 w-[40%] max-w-screen-xl px-4">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.desc}</h3>
                    <p className="font-medium text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatMake
