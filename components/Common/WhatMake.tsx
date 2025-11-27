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

  const [stuck, setStuck] = useState<Map<number, boolean>>();

  useEffect(() => {
    const handleScroll = () => {
      const stickyDivs = document.querySelectorAll('.card-stack .sticky') as NodeListOf<HTMLElement>;

      if (stickyDivs) {
        stickyDivs.forEach((stickyDiv, index) => {
          const rect = stickyDiv.getBoundingClientRect();
          const map = new Map<number, boolean>();

          if (rect.top <= 200) {
            map.set(index, true);
            setStuck(map);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-[3.333vw] ">
      <div className="mx-auto w-full px-4  global-container">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">

          {/* Left Column */}
          <div className="flex-1 space-y-6 pt-1 md:sticky top-[200px]">
            <h2 className="mb-[1.458vw] tracking-tight">
              {titleText1}
              <br />
              {titleText2}
            </h2>

            <p className="p20 leading-[1.563vw] max-w-[658px] text-gray-500">
              {subContext}
            </p>
          </div>

          {/* Right Column - Card Stack */}
          <div className="card-stack relative flex flex-1 flex-col items-end">
            <div className="relative w-full max-w-[883px]">
              {WhatMakeData.map((item, index) => {
                const [ref, isInView] = useInView({ triggerOnce: true })

                return (
                  <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    key={index}
                    className={`sticky ${stuck?.get(index) ? "stuck" : ""} mb-10 transition-opacity duration-500 ${isInView ? "animate-stack-in" : "opacity-0"
                      }`}
                    style={{ top: "200px" }}
                  >
                    <div className="whatsmake-card flex w-full flex-col justify-center rounded-[1.563vw] border border-[#E5E7EB] bg-white py-10 px-[30px] backdrop-blur-md md:min-h-[196px]">
                      <h3 className="mb-[20] text-[1.563vw]! leading-tight  font-semibold">{item.title}</h3>
                      <div className=" h-[1.5px] bg-[#D1D5DB]" />
                      <p className="p18 mt-[1.042vw] leading-relaxed">{item.desc}</p>
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