import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import TalkToExpertCard from "./TalkToExpertCard"

const TalkToExpert = ({
  heading = "Maximize Your Business with Expert Liferay Consulting Services",
  description = "Get personalized guidance to optimize, customize, and enhance your Liferay platform efficiently.",
  buttonText = "Build Your Liferay Portal",
}) => {
  return (
    <section className="bg-black py-[2.917vw] text-white ">
      <div className="mx-auto w-full px-4 md:px-8 grid grid-cols-1 items-start gap-[5.208vw] lg:grid-cols-12  global-container">

        {/* Left Column: Main Content */}
        <div className="lg:col-span-7 mt-[2.708vw] flex flex-col gap-[1.82vw]">
          <h2 className=" w-4/5 text-[2.5vw] text-[#FFFFFF] leading-tight font-bold">
            {heading}
          </h2>

          <p className="  text-[0.938vw] text-gray-400 leading-relaxed">
            {description}
          </p>

          <ScheduleMeetingButton isFullWidth={false} btnName={buttonText} />
        </div>

        {/* Right Column: TalkToExpertCard */}
        <div className="lg:col-span-5 bg-[#121212] rounded-[1.25vw] w-[28.906vw]  mt-10 lg:mt-0">
          <TalkToExpertCard title="Talk To Expert" />
        </div>

      </div>
    </section>

  )
}

export default TalkToExpert
