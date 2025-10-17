// components/Achievements.tsx

import React from 'react';
import ScheduleMeetingButton from '../Button/ScheduleMeetingButton';
import StatCard from './StatCard';

const statData = [
  { number: '80+', title: 'Project Completed', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et.' },
  { number: '50+', title: 'In House Developers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et.' },
  { number: '98%', title: 'Client Satisfaction Rate', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et.' },
  { number: '10+', title: 'Years Of Experience', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et.' },
];

const Achievements = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left Column: Title, Description, Button */}
        <div className="flex flex-col items-start">
          <h2 className="text-5xl font-bold leading-tight max-w-lg mb-8">
            Flexible Platforms.
            <br />
            Scalable Experiences.
          </h2>
          <p className="text-gray-300 text-lg max-w-md mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.
          </p>
          <ScheduleMeetingButton
            isFullWidth={false}
            btnName="Schedule Meeting"
          />
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {statData.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;