// components/ExpertCard.tsx

import Image from 'next/image';
import React from 'react';
import ScheduleMeetingButton from '../Button/ScheduleMeetingButton'; // Reusing your existing button

const ExpertCard: React.FC = () => {
  return (
    <div className="bg-[#1C1C1C] rounded-2xl px-6 py-8 flex flex-col gap-8 md:px-8 md:py-10">
      {/* Top Heading */}
      <h3 className="text-white text-3xl font-bold leading-snug">
        Connect directly with our CEO to <br />fast-track your{' '}
        <span className="text-[#00979E]">Digital Journey.</span>
      </h3>

      {/* Expert Details */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/bhavinImage.png"
          alt="Bhavin Panchani"
          width={64}
          height={64}
          className="rounded-full object-cover border-2 border-[#00979E]"
        />
        <div>
          <p className="text-white text-lg font-semibold">Bhavin Panchani</p>
          <p className="text-gray-400 text-sm">CEO @ IGNEK</p>
        </div>
      </div>

      {/* Schedule Meeting Button */}
      <div>
        <ScheduleMeetingButton
          isFullWidth={true}
          btnName="Schedule Meeting"
        />
      </div>

      {/* Prefer Email */}
      <div className='pt-2'>
        <p className="text-gray-400 text-base mb-1">Prefer email ?</p>
        <a
          href="mailto:sales@ignek.com"
          className="text-white text-lg font-semibold flex items-center justify-between group"
        >
          sales@ignek.com
          <div className="flex items-center justify-between mt-4">
            <p className="text-white text-lg font-semibold border border-white p-2 rounded-full mt-[-30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M1.66683 5.99984L12.3335 5.99984M12.3335 5.99984L7.66683 1.33317M12.3335 5.99984L7.66683 10.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ExpertCard;