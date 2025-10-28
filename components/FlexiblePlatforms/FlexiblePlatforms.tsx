// components/FlexiblePlatforms.tsx

import React from 'react';
// import PlatformCard from './PlatformCard';
import Image from 'next/image';

const platformsData = [
  {
    platformName: 'Liferay',
    hoverDescription: (
      <p>
        Liferay is a <strong>Digital Experience Platform (DXP)</strong> that enables organizations to build and manage <strong>digital experiences across various channels</strong>. It provides tools for creating and managing websites, portals, intranets, and more. Liferay is known for its <strong>flexibility, scalability, and open-source</strong> nature.
      </p>
    ),
  },
];

const FlexiblePlatforms = () => {
  return (
    <section className="bg-[#F9FAF7] text-black py-20 lg:py-16 overflow-hidden">
      <div className="mx-auto w-full px-4 md:px-6 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title and Description */}
        <div>
          <h2 className="text-5xl sm:text-5xl font-bold leading-tight">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Ut et massa mi. Aliquam in hendrerit urna.
          </p>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden w-[680px] h-[496px]  ">
          {/* 1. Background Image */}
          <Image
            src="/images/liferay-details.jpg"
            alt="Liferay Digital Experience Platform"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />

          {/* 2. Bottom Shadow Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />

          {/* 3. Text Overlay (Visible on Hover) */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white 
                       bg-black/40 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-500">
            <h3 className="text-4xl font-bold">{platformsData[0]?.platformName}</h3>
            <div className="mt-4 text-lg text-gray-200 leading-relaxed max-w-2xl">
              {platformsData[0]?.hoverDescription}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlexiblePlatforms;