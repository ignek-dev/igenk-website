"use client"

import { motion,  useSpring, useTransform } from "framer-motion"
import React from "react"
import { useSharedScroll } from "components/Common/ScrollContextProvider"
import WhatWeBringCard from "./WhatWeBringCard"

// Dummy data for the six cards
const cardData = [
  {
    cardNumber: "01",
    title: "Enterprise Websites",
    description:
      "We build robust and scalable enterprise websites powered by Liferay DXP, enabling organizations to deliver personalized, secure, and high-performing digital experiences. Our solutions align with your brand goals, ensuring seamless integration, user-centric design, and long-term adaptability. With our expertise, we help enterprises transform their online presence into a powerful digital ecosystem that drives engagement and growth.",
  },
  {
    cardNumber: "02",
    title: "Employee Experience",
    description:
      "Our employee experience solutions create connected, engaging, and efficient digital workplaces on Liferay DXP. With a focus on collaboration, accessibility, and personalization, we boost productivity and satisfaction. By integrating modern tools and intuitive interfaces, we empower employees to work smarter, communicate seamlessly, and drive a culture of innovation and performance.",
  },
  {
    cardNumber: "03",
    title: "Digital Commerce",
    description:
      "We deliver end-to-end Liferay Commerce solutions that transform how businesses sell and engage online. From product management and secure payments to personalized shopping experiences, our platforms enable seamless, data-driven commerce. We help enterprises scale effortlessly, boost customer loyalty, and drive higher conversions through innovative, flexible, and future-ready digital commerce architectures.",
  },
  {
    cardNumber: "04",
    title: "Partner Experience",
    description:
      "We create unified partner experience solutions on Liferay DXP that strengthen collaboration and transparency. By centralizing communication, resources, and performance insights, we help organizations build stronger partner relationships. Our tailored portals enable seamless onboarding, real-time updates, and mutual growth through trust and efficiency.",
  },
  {
    cardNumber: "05",
    title: "Supplier Experience",
    description:
      "Our supplier experience platforms streamline communication and operations between enterprises and their suppliers. Built on Liferay DXP, these solutions ensure visibility, compliance, and efficiency across the supply chain. With intuitive workflows and self-service tools, we simplify procurement, strengthen relationships, and enhance supplier engagement.",
  },
  {
    cardNumber: "06",
    title: "Customer Experience",
    description:
      "We design personalized customer experience solutions powered by Liferay DXP to build trust and loyalty. By connecting data, content, and insights, we enable brands to deliver consistent, meaningful interactions across every touchpoint. The result — smoother journeys, stronger engagement, and lasting customer satisfaction.",
  },
]

const WhatWeBring: React.FC = () => {
  // 👇 Use the context hook to get the scroll progress
  const scrollYProgress = useSharedScroll()

  // The rest of the animation logic is the same
  const rawX = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-120%"])
  const x = useSpring(rawX, { stiffness: 90, damping: 14 })

  return (
    // This section is "sticky" and stays on screen while the parent scrolls
    <section className="sticky top-0 z-10 flex items-center overflow-hidden bg-black py-16 text-white">
      <div className="w-full global-container">
        {/* Header content (your styling is preserved) */}
        <div className="flex flex-col align-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="">
            What We Bring To Your
            <br />
            Digital Experience
          </h2>
          <p className="max-w-xl pt-0 text-right p18 text-gray-300">
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
