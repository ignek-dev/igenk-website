"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
];

const WhatMake = () => {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <>
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
        <div className="grid items-start gap-10 md:grid-cols-2 relative">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl w-[60%] leading-[60px]">What Makes IGNEK the Right Choice</h2>
          <p className="max-w-xl text-xl  md:justify-self-end absolute bottom-0 text-gray/500 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          </p>
        </div>

      </div>
      <section
        ref={containerRef}
        className="relative w-full h-[500px] overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="sticky top-0 flex flex-col items-center justify-center w-full">
          <div className="sticky top-0 flex flex-col items-center justify-center w-full">
            <motion.div
              // style={{ y }}
              className="flex flex-col items-center justify-center w-full"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-6 relative w-full"
                >
                  <div className="absolute left-0 w-full top-[30px] ">
                    <svg width="1920" height="515" viewBox="0 0 1920 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="959.5" cy="2500" r="2499" stroke="black" strokeWidth="2" />
                    </svg>
                  </div>
                  {/* Black Capsule */}
                  <div className="px-10 py-4 bg-black text-white rounded-full text-xl font-medium shadow-lg z-10 w-auto max-w-screen-xl mx-auto">
                    {item.title}
                  </div>
                  {/* Description */}
                  <div className="mt-8 w-[40%] px-4 max-w-screen-xl mx-auto">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.desc}</h3>
                    <p className="text-gray-400 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


        </div>
      </section>
    </>
  );
};

export default WhatMake;
