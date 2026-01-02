"use client"

import { useEffect, useState } from "react"
import { useInView } from "hooks/useInView"

type WhatMakeItem = {
  title: string;
  desc: string;
};

// Define props type
type WhatMakeProps = {
  WhatMakeData: WhatMakeItem[];
  titleText1: string;
  titleText2: string;
  subContext: string;
};

const WhatMake: React.FC<WhatMakeProps> = ({ WhatMakeData, titleText1, titleText2, subContext }) => {

  const [stuck, setStuck] = useState<Map<number, boolean>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      const stickyDivs = document.querySelectorAll(
        '.card-stack .lg\\:sticky'
      ) as NodeListOf<HTMLElement>;

      const newMap = new Map<number, boolean>();

      stickyDivs.forEach((stickyDiv, index) => {
        const rect = stickyDiv.getBoundingClientRect();
        if (rect.top <= 200) {
          newMap.set(index, true);
        }
      });

      setStuck(newMap);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className="py-7 lg:py-[3.333vw]">
      <div className="mx-auto w-full px-4  global-container">
        <div className="block lg:flex flex-col gap-16 md:flex-row md:items-start md:justify-between">

          {/* Left Column */}
          <div className="flex-1 space-y-6 pt-1 lg:sticky top-[200px]">
            <h2 className="mb-2.5 md:mb-7 lg:mb-[1.458vw]">
              {titleText1}
              <br className="hidden lg:block" />
              {titleText2}
            </h2>

            <p className="mb-[18px] md:mb-16 lg:mb-0 text-p14 md:text-p20 lg:text-p20 max-w-[658px] text-gray-500">
              {subContext}
            </p>
          </div>

          {/* Right Column - Card Stack */}
          <div className="card-stack relative flex flex-1 flex-col items-end mt-[26px] mb-[26px] md:mt-10 md:mb-10 lg:mt-0 lg:mb-0">
            <div className="relative w-full max-w-[883px]">
              {WhatMakeData.map((item, index) => {
                const [ref, isInView] = useInView({ triggerOnce: true })
                const isLast = index === WhatMakeData.length - 1

                return (
                  <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    key={index}
                    className={`
    md:static lg:sticky
    ${stuck?.get(index) ? "stuck" : ""}
    ${!isLast ? "mb-10" : ""}
    transition-opacity duration-300
    ${isInView ? "animate-stack-in" : "opacity-0"}
  `}
                    style={{ top: "200px" }}
                  >
                    <div className="whatsmake-card flex w-full flex-col justify-center rounded-[1.563vw] border border-[#E5E7EB] bg-white py-7 md:py-10 lg:py-10 px-[30px] backdrop-blur-md md:min-h-[196px]">
                      <h3 className="mb-[13px] md:mb-5 text-[20px]! md:text-[1.875rem]! lg:text-[1.563vw]!">
                        {item.title}
                      </h3>

                      <div className="h-[1.5px] bg-[#D1D5DB]" />

                      <p className="text-p12 md:text-p18 lg:text-p18 mt-[13px] md:mt-5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhatMake