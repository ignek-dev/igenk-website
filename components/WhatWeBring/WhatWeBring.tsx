"use client"

import { motion, useTransform } from "framer-motion"
import React from "react"
import { useSharedScroll } from "components/Common/ScrollContextProvider"
import WhatWeBringCard from "./WhatWeBringCard"

// Dummy data for the six cards
const cardData = [
  {
    cardNumber: "01",
    title: "Enterprise Websites",
    description:
      "We build robust and scalable enterprise websites powered by Liferay DXP, enabling organizations to deliver personalized, secure, and high-performing digital experiences. Our solutions are designed to align with your brand’s goals, ensuring seamless integration, user-centric design, and long-term adaptability. With our expertise, we help enterprises transform their online presence into an impactful digital ecosystem that drives engagement and business growth.",
  },
  {
    cardNumber: "02",
    title: "Employee Experience",
    description:
      "Our employee experience solutions create connected, engaging, and efficient digital workplaces built on Liferay DXP. We focus on collaboration, accessibility, and personalization to enhance productivity and satisfaction. By integrating modern tools and intuitive interfaces, we empower employees to work smarter, communicate effectively, and stay aligned with organizational goals, fostering a culture of innovation and performance.",
  },
  {
    cardNumber: "03",
    title: "Digital Commerce",
    description:
      "We deliver end-to-end Liferay Commerce solutions that transform how businesses sell and interact online. From product management and secure payments to personalized shopping journeys, our platforms offer seamless, data-driven commerce experiences. Our goal is to help enterprises scale effortlessly, boost customer loyalty, and increase conversion rates through innovative, flexible, and future-ready digital commerce architectures.",
  },
  {
    cardNumber: "04",
    title: "Another Service",
    description:
      "Our tailored Liferay implementation services address diverse business challenges with innovative, strategic, and technology-driven solutions. We partner with enterprises to plan, design, and deliver digital transformation initiatives that create measurable impact. By combining deep Liferay expertise with agile methodologies, we ensure every project aligns with your business objectives and drives sustainable digital growth.",
  },
  {
    cardNumber: "05",
    title: "Creative Solutions",
    description:
      "We blend creativity and technology to craft meaningful digital experiences that inspire and engage. Our team focuses on design thinking, storytelling, and seamless functionality to create visually stunning and user-friendly solutions. From concept to execution, we transform ideas into impactful digital assets that enhance brand visibility, drive interaction, and deliver exceptional customer experiences.",
  },
  {
    cardNumber: "06",
    title: "Data Insights",
    description:
      "We turn complex data into actionable business intelligence through Liferay analytics and AI-driven insights. Our solutions help organizations uncover trends, predict behavior, and make informed decisions that accelerate growth. By integrating analytics seamlessly into your digital ecosystem, we empower you to measure performance, enhance user experiences, and optimize outcomes across all business channels.",
  },
]

const WhatWeBring: React.FC = () => {
  // 👇 Use the context hook to get the scroll progress
  const scrollYProgress = useSharedScroll()

  // The rest of the animation logic is the same
  const x = useTransform(scrollYProgress, [0, 0.75], ["0%", "-82%"])

  return (
    // This section is "sticky" and stays on screen while the parent scrolls
    <section className="sticky top-0 z-10 flex h-screen items-center overflow-hidden bg-black py-16 text-white">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        {/* Header content (your styling is preserved) */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between [@media(min-width:1280px)]:mt-24 [@media(min-width:1800px)]:mt-0">
          <h2 className="line-height-[60px] text-5xl leading-tight font-bold [@media(min-width:1440px)]:text-4xl [@media(min-width:1520px)]:text-5xl [@media(min-width:1520px)]:pt-8">
            What We Bring To Your
            <br />
            Digital Experience
          </h2>
          <p className="line-height-[30px] max-w-xl pt-8.5 text-right text-lg text-gray-300">
            We empower businesses to deliver exceptional digital experiences through innovative strategies, design, and technology built on the power of Liferay DXP.
          </p>
        </div>

        {/* This motion.div moves horizontally based on the scroll progress */}
        <motion.div style={{ x }} className="flex space-x-11 pt-15 pb-16">
          {cardData.map((card) => (
            <WhatWeBringCard
              key={card.cardNumber}
              cardNumber={card.cardNumber}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeBring
