// components/ScheduleMeetingButton.tsx

import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils'; // Assuming your utility path

interface ScheduleMeetingButtonProps {
  btnName: string;
  isFullWidth: boolean
}

const ScheduleMeetingButton: React.FC<ScheduleMeetingButtonProps> = ({ btnName, isFullWidth }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden group hover:scale-105 transition-transform duration-200 fancy ${isFullWidth ? "w-full" : "w-max"
        }`}
    >
      <span className="relative flex items-center gap-3 px-8 py-3 bg-black rounded-full text-white text-lg font-medium z-10">
        {/* Schedule Meeting */}
        {btnName ??  "Schedule Meeting" }
        <Image
          src="/images/calendar.png"
          alt="Calendar icon"
          width={20}
          height={20}
        />
      </span>
    </button>
  );
};

export default ScheduleMeetingButton;