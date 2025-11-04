// components/Liferay/EngagementModels.tsx
"use client";
import { useState } from "react";
import React from "react";

// Data for the engagement models
const engagementModelsData = [
    {
        icon: "/images/liferay-pages-image/liferay-consultation-page/experties.png",
        title: "Dedicated Team",
        description: "Opt for a Liferay Dedicated Team to Leverage Cost-Efficiency and Unmatched Technical Expertise.",
        features: ["Achieve Cost Efficiency", "Enhance IT Infrastructure", "Optimize Project Management"],
    },
    {
        icon: "/images/liferay-pages-image/liferay-consultation-page/add-friend.png",
        title: "Time & Materials",
        description: "Gain total control over your predetermined market schedule with a versatile time and materials model for Liferay development.",
        features: ["Ongoing Software Development Needs", "Supports Part- & Full-time Dev Needs", "Better control over your project"],
    },
    {
        icon: "/images/liferay-pages-image/liferay-consultation-page/chat-message.png",
        title: "Fix Price",
        description: "Implement your requirements with a clear idea and a predetermined budget to shield your product from fluctuating costs.",
        features: ["Minimal financial risk", "Involves the development of an MVP", "Well-defined Scope & Requirements"],
    },
];

interface EngagementModelsProps {
  title: React.ReactNode;
  description: string;
}

export default function EngagementModels({ title, description }: EngagementModelsProps) {
  // The hover state is now managed inside this component
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  return (
    <section className="bg-white py-[64px] text-black">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Section Header - Now uses props for dynamic content */}
        <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight text-[#000000]">
              {title}
            </h2>
          </div>
          <div className="flex h-full items-end justify-end">
            <p className="w-full text-right text-xl text-[#374151] text-normal line-height-[30px] ">
              {description}
            </p>
          </div>
        </div>

        {/* Engagement Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engagementModelsData.map((model) => {
            const isHovered = hoveredModel === model.title;
            return (
              <div
                key={model.title}
                onMouseEnter={() => setHoveredModel(model.title)}
                onMouseLeave={() => setHoveredModel(null)}
                className={`rounded-2xl border p-7 shadow-md transition-colors duration-300 ${
                  isHovered
                    ? "bg-[#0B63CE] border-blue-700 text-white"
                    : "bg-white border-gray-200 text-black"
                }`}
              >
                {/* Card Icon */}
                <img
                  src={model.icon}
                  alt={`${model.title} icon`}
                  className={`mb-8 h-12 w-12 ${isHovered ? "brightness-0 invert" : ""}`}
                />

                {/* Card Title */}
                <h3 className="mb-8 text-3xl font-semibold">{model.title}</h3>

                {/* Divider */}
                <hr className={`mb-8 border-t ${isHovered ? "border-white/30" : "border-gray-200"}`} />

                {/* Card Description */}
                <p className={`mb-8 text-lg ${isHovered ? "text-white/90" : "text-gray-600"}`}>
                  {model.description}
                </p>

                {/* Card Features */}
                <div>
                  {model.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`border-b ${isHovered ? "border-white/30" : "border-gray-200"} ${
                        index === model.features.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 py-4">
                        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-black'}`}>
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
                            className={`transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-lg font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}