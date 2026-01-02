import React from "react"
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"
import TalkToExpertCard from "./TalkToExpertCard"

const TalkToExpert = ({
  heading = "Ready to Hire Certified Liferay Developers?",
  description = "Connect with our team to discuss your requirements and get expert guidance on your Liferay project.",
  buttonText = "Build Your Liferay Portal",
}) => {
  return (
    <section className="bg-black py-7 lg:py-[2.917vw] text-white ">
      <div className="mx-auto w-full px-4 md:px-8 grid grid-cols-1 items-start gap-[5.208vw] lg:grid-cols-12 global-container">

        {/* Left Column: Main Content */}
        <div className="lg:col-span-7 mt-[2.708vw] flex flex-col gap-[1.82vw]">
          <h2 className="w-4/5 text-[#FFFFFF]">
            {heading}
          </h2>

          <p className="text-p18 lg:text-p18! text-gray-400 mt-[30px] lg:mt-0">
            {description}
          </p>
        </div>

        {/* Right Column: TalkToExpertCard */}
        <div className="lg:col-span-5 bg-[#121212] rounded-[1.25vw] w-auto lg:w-[28.906vw] mt-[35px] lg:mt-0">
          <TalkToExpertCard title="Talk To Expert" />
        </div>

      </div>
    </section>

  )
}

export default TalkToExpert
