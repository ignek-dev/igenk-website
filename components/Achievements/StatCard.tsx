// components/StatCard.tsx

import React from 'react';

interface StatCardProps {
  number: string;
  title: string;
  description: string;
  isInView: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description, isInView, index }) => {

  // Determine animation direction based on the card's index
  const animationDirection = index < 2 ? 'animate-slide-top' : 'animate-slide-bottom';
  
  // Add a staggered delay for a nicer effect

  return (
    <div className={`flex flex-col ${
      isInView ? `animate-when-visible ${animationDirection} animation-delay-200` : 'opacity-0'
    }`}>
      <div className="text-white text-7xl font-bold mb-4">
        {number}
      </div>
      <div className="border-t border-gray-700 pt-4 mb-4" /> {/* Horizontal line */}
      <h4 className="text-white text-xl font-semibold mb-2">
        {title}
      </h4>
      <p className="text-gray-400 text-base">
        {description}
      </p>
    </div>
  );
};

export default StatCard;