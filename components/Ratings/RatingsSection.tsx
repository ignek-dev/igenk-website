// components/RatingsSection.tsx
'use client';

import React from 'react';
import { useInView } from 'hooks/useInView';
import RatingItem from './RatingItem';

const ratingsData = [
  { logoSrc: '/images/ratings/google_logo.webp', logoAlt: 'Google', ratingValue: '4.9' },
  { logoSrc: '/images/ratings/upwork-logo.svg.png', logoAlt: 'Upwork', ratingValue: '5.0' },
  { logoSrc: '/images/ratings/clutch-logo.png', logoAlt: 'Clutch', ratingValue: '5.0' },
  { logoSrc: '/images/ratings/ambition.png', logoAlt: 'Ambition', ratingValue: '5.0' },
];

const RatingsSection: React.FC = () => {

  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section ref={sectionRef} className="bg-white">
            <div className="mx-auto w-full overflow-x-hidden px-4 py-12 md:px-6 md:py-13.5 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">

        <div className="
          flex flex-col md:flex-row md:h-[192px] items-center justify-between
          divide-y divide-gray-200 md:divide-y-0 md:divide-x
          ">
          {ratingsData.map((rating, index) => (
            <RatingItem
              key={index}
              logoSrc={rating.logoSrc}
              logoAlt={rating.logoAlt}
              ratingValue={rating.ratingValue}
              isInView={isInView}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;