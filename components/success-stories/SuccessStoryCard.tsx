// components/SuccessStoryCard.tsx

import React from 'react';
import Image from 'next/image';
import TechnologyChip from './TechnologyChip';

export interface Story {
  imageSrc: string;
  tag: string;
  title: string;
  description: string;
  services: { name: string; iconSrc: string }[];
}


const SuccessStoryCard: React.FC<{story: Story}> = ({ story }) => {
 return (
    // The main card container
    <div className="bg-white rounded-2xl border border-[#E5E7EB]  p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div className="w-full h-auto aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={story.imageSrc}
            alt={story.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div>
          <span className="inline-block border border-[#00979E] bg-white text-gray-800 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          style={{ boxShadow: '0px 0px 12px -2px #00979E' }}
          >
            {story.tag}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {story.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {story.description}
          </p>
          <a href="/case-studies" className="inline-flex items-center gap-1 bg-white border  border-[#00979E] text-gray-800 rounded-full px-5 py-2 text-sm font-semibold hover:bg-gray-50 transition-all mb-8" 
          style={{ boxShadow: '0px 0px 12px -2px #00979E' }}
          >
            Read case study
          </a>

          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Provided Services
          </h4>
          <div className="flex flex-wrap gap-3">
            {story.services.map((service, idx) => (
              <TechnologyChip key={idx} iconSrc={service.iconSrc} name={service.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
