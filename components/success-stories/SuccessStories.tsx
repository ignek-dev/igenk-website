// components/SuccessStories.tsx
'use client';
import React from 'react';
import SuccessStoryCard, { Story } from './SuccessStoryCard';
import motion from 'framer-motion';
import { useInView } from 'hooks/useInView';

// CHANGED: Consolidated Provided Services data
const commonProvidedServices = [
  { name: 'Java', iconSrc: '/images/success-stories/java.png' }, { name: 'Bootstrap', iconSrc: '/images/success-stories/bootstrap.png' }, { name: 'Kenesis', iconSrc: '/images/success-stories/javascript.png' }, { name: 'My Sql', iconSrc: '/images/success-stories/mysql.png' }, { name: 'React Js', iconSrc: '/images/success-stories/react.png' },
  { name: 'Liferay DXP 7.4', iconSrc: '/images/success-stories/liferay.png' }, { name: 'ElasticSearch', iconSrc: '/images/success-stories/elasticSearch.png' }, { name: 'Jest', iconSrc: '/images/success-stories/jest.png' }, { name: 'HashRouter', iconSrc: '/images/success-stories/hashRouter.png' },
  { name: 'TypeScript', iconSrc: '/images/success-stories/typescript.png' }
];

// Dummy Data - Updated to use commonProvidedServices
const stories: Story[] = [
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'Corporate',
    title: 'Music License Management Portal : Onboarding & Data Integrity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
    services: commonProvidedServices // Use the common services array
  },
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'Enterprise',
    title: 'Global CRM Platform for a Leading Tech Company',
    description: 'A second story about a different project, highlighting other skills and outcomes to showcase a range of capabilities.',
    services: commonProvidedServices // Use the common services array
  },
  {
    imageSrc: '/images/success-stories/Music-license.png',
    tag: 'E-Commerce',
    title: 'Scalable Online Marketplace for a Retail Giant', // Example for third story
    description: 'The third story focuses on e-commerce, discussing challenges like payment gateway integration and inventory management.',
    services: commonProvidedServices // Use the common services array
  }
];


const SuccessStories: React.FC = () => {
   const [ref, isInView] = useInView({ triggerOnce: true })
  return (
    <section ref={ref}  className={`relative bg-white text-black py-12 transition-all mt-[-80px] rounded-t-[5rem] shadow-xl z-10 ${
        isInView ? 'animate-slide-top opacity-100' : 'opacity-0 translate-y-10'
      }`}>
      <div className="mx-auto w-full px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2  className={`text-center text-4xl md:text-5xl font-semibold mb-6 transition-all duration-700 ${
            isInView ? 'animate-slide-top opacity-100' : 'opacity-0'
          }`}>Success Stories</h2>
          <p className="mt-2 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </div>

        {/* Cards Container - uses space-y to add margin between cards */}
        <div className="space-y-8">
          {stories.map((story, index) => (
             <div 
              key={index} 
              className="sticky"
              // The style attribute creates the stacking offset for each card
              style={{ top: `calc(6rem + ${index * 2}rem)` }}
            >
              <SuccessStoryCard story={story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;