import React from 'react'
import Image from 'next/image';
import ScheduleMeetingButton from 'components/Button/ScheduleMeetingButton';

interface TalkToExpertCardProps {
    title: string
}

const TalkToExpertCard: React.FC<TalkToExpertCardProps> = ({ title }) => {
    return (
        <div className="bg-[#1C1C1C] rounded-2xl px-6 py-8 flex flex-col gap-8 md:px-8 md:py-10 max-w-[555px] ">
            <h3 className="text-white text-3xl font-bold leading-snug">
                {title}
            </h3>

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
                    <div className="flex items-center justify-between">
                        <p className="text-white text-lg font-semibold border border-white p-2 rounded-full mt-[-30px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <path d="M1.66683 5.99984L12.3335 5.99984M12.3335 5.99984L7.66683 1.33317M12.3335 5.99984L7.66683 10.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default TalkToExpertCard