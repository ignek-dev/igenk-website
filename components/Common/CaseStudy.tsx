"use client";
import React, { useEffect, useState } from "react";
export interface CaseStudy {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
}
interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
}

const CaseStudy:React.FC<CaseStudyCarouselProps> = ({caseStudies}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % caseStudies.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black text-white py-16 overflow-hidden">
            <div className="max-w-7xl px-[150px]">
                <h2 className="text-3xl font-semibold mb-10 px-4">
                    Related Case Studies
                </h2>

                <div className="relative flex transition-transform duration-700 ease-in-out" >
                    {caseStudies.map((item) => (
                        <div key={item.id} className="w-full flex-shrink-0 px-4 md:px-4 max-w-[1176px] w-full transition-transform duration-[2000ms]"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`,
                                width: `${caseStudies.length * 100}%`,
                                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        >
                            <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row gap-8 ">
                                {/* Image */}
                                <div className="flex-shrink-0 w-[420px] h-[318px] overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 flex flex-col gap-6">
                                    <span className="inline-block border border-cyan-400 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium mb-0 w-[max-content]">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button className="border border-cyan-400 rounded-2xl px-4 text-white py-2 text-sm font-medium hover:text-cyan-400 transition-all w-[max-content]">
                                        Read case study
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudy