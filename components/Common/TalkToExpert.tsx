import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import TalkToExpertCard from "./TalkToExpertCard"

const TalkToExpert = () => {
  return (
    <section className="bg-black py-[64px] text-white lg:py-[64px]">
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-20 px-4 md:px-8 lg:grid-cols-12 lg:gap-16 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-7">
          <h2 className="mb-8 w-[80%] text-5xl leading-tight font-bold">
            Elevate user experience through bespoke Liferay theme development service.
          </h2>
          <p className="mt-6 mb-12 max-w-md text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Ut et massa mi. Aliquam in hendrerit urna.
          </p>
          <ScheduleMeetingButton isFullWidth={false} btnName="Build Your Liferay Portal" />
        </div>

        {/* Right Column: TalkToExpertCard */}
        <div className="lg:col-span-5">
          <TalkToExpertCard title="Talk To Expert" />
        </div>
      </div>
    </section>
  )
}

export default TalkToExpert
