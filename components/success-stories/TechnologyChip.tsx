// components/TechnologyChip.tsx

import Image from 'next/image';
import React from 'react';

interface TechnologyChipProps {
  iconSrc: string;
  name: string;
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ iconSrc, name }) => {
  return (
    <div className="flex items-center gap-2 bg-white  border border-gray-200 rounded-md py-1.5 px-3">
      <Image src={iconSrc} alt={`${name} logo`} width={16} height={16} />
      <span className="text-sm text-gray-800 font-medium">{name}</span>
    </div>
  );
};

export default TechnologyChip;