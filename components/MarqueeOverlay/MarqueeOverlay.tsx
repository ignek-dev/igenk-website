"use client";

import Image from "next/image";
import { commonProvidedServices } from "components/success-stories/SuccessStories";

export default function MarqueeOverlay() {
    return (
        <div className="absolute bottom-3 left-0 w-full  overflow-hidden">
                <p className="text-[0.833vw] text-[#FFFFFF] mb-[0.26vw] leading-[1.25vw] ml-[1.438rem]">Provided Services</p>
            <div className="flex animate-marquee  whitespace-nowrap items-center h-full ">
                {commonProvidedServices.map((service, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 h-[2.037vw] py-2 text-black font-medium text-base rounded-xl border border-[#E5E7EB] bg-white mr-4 shadow-sm"
                    >
                        <div className="flex items-center justify-center w-8">
                            <Image
                                src={service.iconSrc}
                                alt={service.name}
                                width={20}
                                height={20}
                                className="object-contain h-[1.042vw] w-[1.042vw]"
                            />
                        </div>
                        <span className="whitespace-nowrap text-[0.746vw] leading-[0.746vw]">{service.name}</span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {commonProvidedServices.map((service, i) => (
                   <div
                        key={i}
                        className="flex items-center gap-3 px-4 h-[2.037vw] py-2 text-black font-medium text-base rounded-xl border border-[#E5E7EB] bg-white mr-4 shadow-sm"
                    >
                        <div className="flex items-center justify-center w-8">
                            <Image
                                src={service.iconSrc}
                                alt={service.name}
                                width={20}
                                height={20}
                                className="object-contain h-[1.042vw] w-[1.042vw]"
                            />
                        </div>
                        <span className="whitespace-nowrap text-[0.746vw] leading-[0.746vw]">{service.name}</span>
                    </div>
                ))}
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
        }
      `}</style>
        </div>
    );
}
