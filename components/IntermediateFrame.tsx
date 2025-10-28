import React from 'react';

// Array of text to display in the frame
const frameContent = [
  'DELIVER SEAMLESS JOURNEYS',
  'PERSONALIZE EVERY INTERACTION',
  'TRANSFORM CUSTOMER TOUCHPOINTS',
  'AUTOMATE WHAT MATTERS',
  'TURN DATA INTO DECISIONS',
  'LEAD WITH STRATEGY',
];

const IntermediateFrame = () => {
    const marqueeContent = [...frameContent, ...frameContent];
  return (
    <section className="w-full h-[83px] bg-[#FFFFFF] flex items-center justify-around overflow-hidden">
      <div className="flex animate-marquee-custom gap-x-24">
        {marqueeContent.map((text, index) => (
          <p
            key={`${text}-${index}`}
            className="font-normal text-black uppercase text-[24px] tracking-wide whitespace-nowrap"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default IntermediateFrame;