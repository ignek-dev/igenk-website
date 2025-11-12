"use client";

import { commonProvidedServices } from "components/success-stories/SuccessStories";
import Image from "next/image";

export default function MarqueeOverlay() {
    return (
        <div className="absolute bottom-2 left-0 w-full h-[60px] overflow-hidden  backdrop-blur-sm">
            <div className="flex animate-marquee  whitespace-nowrap items-center h-full ">
                {commonProvidedServices.map((service, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2 text-black font-medium text-base rounded-xl border border-[#E5E7EB] bg-white mr-4 shadow-sm"
                    >
                        <div className="flex items-center justify-center w-8">
                            <Image
                                src={service.iconSrc}
                                alt={service.name}
                                width={20}
                                height={20}
                                className="object-contain h-full max-h-[20px]"
                            />
                        </div>
                        <span className="whitespace-nowrap">{service.name}</span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {commonProvidedServices.map((service, i) => (
                   <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2 text-black font-medium text-base rounded-xl border border-[#E5E7EB] bg-white mr-4 shadow-sm"
                    >
                        <div className="flex items-center justify-center w-8">
                            <Image
                                src={service.iconSrc}
                                alt={service.name}
                                width={20}
                                height={20}
                                className="object-contain h-full max-h-[20px]"
                            />
                        </div>
                        <span className="whitespace-nowrap">{service.name}</span>
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
