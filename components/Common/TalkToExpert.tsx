import React from 'react'
import TalkToExpertCard from './TalkToExpertCard'
import ScheduleMeetingButton from 'components/Button/ScheduleMeetingButton'

const TalkToExpert = () => {
    return (
        <section className="bg-black text-white py-[64px] lg:py-[64px]">
            <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-start">
                {/* Left Column: Main Content */}
                <div className="lg:col-span-7">
                    <h2 className="text-5xl font-bold leading-tight mb-8 w-[80%]">
                        Elevate user experience through bespoke Liferay theme development service.
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 max-w-md mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Ut et massa mi. Aliquam in hendrerit urna.
                    </p>
                    <ScheduleMeetingButton
                        isFullWidth={false}
                        btnName="Build Your Liferay Portal"
                    />
                </div>

                {/* Right Column: TalkToExpertCard */}
                <div className="lg:col-span-5">
                    <TalkToExpertCard
                        title="Talk To Expert"
                    />
                </div>
            </div>

        </section>
    )
}

export default TalkToExpert