import React from 'react'
import Image from 'next/image';
import ScheduleMeetingButton from 'components/Button/ScheduleMeetingButton';

const TalkToExpertCard = () => {
    return (
        <div className="bg-[#1C1C1C] rounded-2xl px-6 py-8 flex flex-col gap-8 md:px-8 md:py-10 max-w-[555px] ">
            {/* Top Heading */}
            <h3 className="text-white text-3xl font-bold leading-snug">
                Talk To Expert
            </h3>

            {/* Expert Details */}
            <div className="flex items-center gap-8">
                <Image
                    src="/images/bhavinImage.png"
                    alt="Bhavin Panchani"
                    width={110}
                    height={110}
                    className="rounded-full object-cover border-2 border-[#00979E]"
                />
                <div className='flex flex-col gap-2'>
                    <p className="text-white text-3xl font-semibold">Bhavin Panchani</p>
                    <p className="text-white text-lg">CEO @ IGNEK</p>
                </div>
            </div>

            {/* Schedule Meeting Button */}
            <div>
                <ScheduleMeetingButton />
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
                        <p className="text-white text-lg font-semibold border border-white px-2 rounded-full">&#8594;</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TalkToExpertCard