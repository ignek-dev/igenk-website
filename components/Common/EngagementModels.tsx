// components/Liferay/EngagementModels.tsx
"use client"
import { engagementModelsinfo, EngagementModelsProps } from "data/hire-liferay-developer"
import Image from "next/image"
import { useState } from "react"

export default function EngagementModels({ title, description }: EngagementModelsProps) {
  const [hoveredModel, setHoveredModel] = useState<string | null>(null)

  return (
    <section className="bg-[#F6F6F6] py-16 lg:py-[64px] text-black">
      <div className="mx-auto w-full global-container">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-14 grid grid-cols-1 items-end gap-6 md:gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[#000000]">{title}</h2>
          </div>
          <div className="flex h-full items-center lg:justify-end">
            <p className="text-p16 md:text-p18 w-full lg:max-w-xl text-left lg:text-right text-[#374151]">
              {description}
            </p>
          </div>
        </div>

        {/* Engagement Cards Grid - 1 Col for Mobile/Tablet, 3 Col for Desktop */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-[2.083vw]">
          {engagementModelsinfo.map((model) => {
            const isHovered = hoveredModel === model.title
            return (
              <div
                key={model.title}
                onMouseEnter={() => setHoveredModel(model.title)}
                onMouseLeave={() => setHoveredModel(null)}
                className={`flex flex-col rounded-2xl border p-6 lg:p-[1.354vw] shadow-md transition-colors duration-300 w-full
                  lg:min-h-[33.333vw] lg:min-w-[25.208vw] ${
                  isHovered ? "border-blue-700 bg-[#0B63CE] text-white" : "border-gray-200 bg-white text-black"
                }`}
              >
                {/* Card Icon */}
                <Image
                  src={model.icon}
                  alt={`${model.title} icon`}
                  width={44}
                  height={44}
                  className={`mb-6 lg:mb-[1.667vw] ${isHovered ? "brightness-0 invert" : ""}`}
                />

                <div className="flex-grow">
                  {/* Card Title */}
                  <h4 className="mb-4 lg:mb-[1.667vw]">{model.title}</h4>

                  {/* Divider */}
                  <hr className={`mb-6 lg:mb-[1.667vw] border-t ${isHovered ? "border-white/30" : "border-[#D1D5DB]"}`} />

                  {/* Card Description */}
                  <p className={`text-p16 md:text-p20 mb-6 lg:mb-[1.667vw] ${isHovered ? "text-white/90" : "text-gray-600"}`}>
                    {model.description}
                  </p>
                </div>

                {/* Card Features */}
                <div className="mt-auto">
                  {model.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`border-b ${isHovered ? "border-white/30" : "border-[#D1D5DB]"} ${
                        index === model.features.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 py-4 lg:py-0 ${index === 0 ? "lg:pt-0" : "lg:pt-[2.083vw]"} ${
                          index === model.features.length - 1 ? "lg:pb-0" : "lg:pb-[2.083vw]"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 lg:h-[2.1875vw] lg:w-[2.1875vw] flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isHovered ? "bg-white" : "bg-black"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-colors duration-300 ${isHovered ? "text-black" : "text-white"}`}
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-p16 md:text-p20">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}