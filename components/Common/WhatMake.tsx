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
    <section className="py-16 lg:py-16">
      <div className="mx-auto w-full px-4 md:px-8 global-container">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">

          {/* Left Column */}
          <div className="flex-1 space-y-6 pt-1 md:sticky md:top-48 lg:top-36">
            <h1 className="text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] leading-tight font-bold tracking-tight">
              {titleText1}
              <br />
              {titleText2}
            </h1>

            <p className="text-base md:text-lg leading-7 max-w-[658px] text-gray-500">
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
                    className={`sticky ${stuck?.get(index) ? "stuck" : ""} mb-16 transition-opacity duration-500 ${isInView ? "animate-stack-in" : "opacity-0"
                      }`}
                    style={{ top: "200px" }}
                  >
                    <div className="whatsmake-card flex w-full flex-col justify-center rounded-2xl border border-[#E5E7EB] bg-white p-9 pt-6 backdrop-blur-md md:min-h-[196px]">
                      <h3 className="mb-3 text-2xl leading-tight font-semibold">{item.title}</h3>
                      <div className="mb-4 h-[1.5px] bg-[#E5E7EB]" />
                      <p className="text-lg leading-relaxed">{item.desc}</p>
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