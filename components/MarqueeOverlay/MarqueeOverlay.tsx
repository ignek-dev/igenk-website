"use client";

import Image from "next/image";
import { commonProvidedServices } from "components/success-stories/SuccessStories";

export default function MarqueeOverlay() {
    return (
        <div className="absolute bottom-3 left-0 w-full overflow-hidden pl-4 lg:pl-[1.198vw]">
            <p className="mb-1 text-xs lg:text-[0.833vw] text-[#FFFFFF] lg:mb-[0.26vw] lg:leading-[1.25vw]">Provided Services</p>
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap items-center h-full">
                    {commonProvidedServices.map((service, i) => (
                        <div
                            key={i}
                            className="mr-3 flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-black shadow-sm lg:mr-4 lg:h-[2.037vw] lg:gap-3 lg:rounded-xl lg:px-4 lg:py-2"
                        >
                            <div className="flex w-5 items-center justify-center lg:w-8">
                                <Image
                                    src={service.iconSrc}
                                    alt={service.name}
                                    width={20}
                                    height={20}
                                    className="h-4 w-4 object-contain lg:h-[1.042vw] lg:w-[1.042vw]"
                                />
                            </div>
                            <span className="whitespace-nowrap text-xs font-medium lg:text-[0.746vw] lg:leading-[0.746vw]">{service.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {commonProvidedServices.map((service, i) => (
                        <div
                            key={`dup-${i}`}
                            className="mr-3 flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-black shadow-sm lg:mr-4 lg:h-[2.037vw] lg:gap-3 lg:rounded-xl lg:px-4 lg:py-2"
                        >
                            <div className="flex w-5 items-center justify-center lg:w-8">
                                <Image
                                    src={service.iconSrc}
                                    alt={service.name}
                                    width={20}
                                    height={20}
                                    className="h-4 w-4 object-contain lg:h-[1.042vw] lg:w-[1.042vw]"
                                />
                            </div>
                            <span className="whitespace-nowrap text-xs font-medium lg:text-[0.746vw] lg:leading-[0.746vw]">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    display: inline-flex;
                    min-width: 200%;
                    animation: marquee 25s linear infinite;
                    padding-left: 0;
                }
            `}</style>
        </div>
    );
}