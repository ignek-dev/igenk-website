// components/SuccessStories.tsx
"use client"
import React, {useRef} from "react"
import SuccessStoryCard, { Story } from "./SuccessStoryCard"
import { motion, useTransform, useScroll } from "framer-motion"
import { useInView } from "hooks/useInView"
import { useSharedScroll } from "components/Common/ScrollContextProvider"

// CHANGED: Consolidated Provided Services data
const commonProvidedServices = [
  { name: "Java", iconSrc: "/images/success-stories/java.png" },
  { name: "Bootstrap", iconSrc: "/images/success-stories/bootstrap.png" },
  { name: "Kenesis", iconSrc: "/images/success-stories/javascript.png" },
  { name: "My Sql", iconSrc: "/images/success-stories/mysql.png" },
  { name: "React Js", iconSrc: "/images/success-stories/react.png" },
  { name: "Liferay DXP 7.4", iconSrc: "/images/success-stories/liferay.png" },
  { name: "ElasticSearch", iconSrc: "/images/success-stories/elasticSearch.png" },
  { name: "Jest", iconSrc: "/images/success-stories/jest.png" },
  { name: "HashRouter", iconSrc: "/images/success-stories/hashRouter.png" },
  { name: "TypeScript", iconSrc: "/images/success-stories/typescript.png" },
]

// Dummy Data - Updated to use commonProvidedServices
const stories: Story[] = [
  {
    imageSrc: "/images/success-stories/Music-license.png",
    tag: "Corporate",
    title: "Music License Management Portal : Onboarding & Data Integrity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    services: commonProvidedServices, // Use the common services array
  },
  {
    imageSrc: "/images/success-stories/Music-license.png",
    tag: "Enterprise",
    title: "Global CRM Platform for a Leading Tech Company",
    description:
      "A second story about a different project, highlighting other skills and outcomes to showcase a range of capabilities.",
    services: commonProvidedServices, // Use the common services array
  },
  {
    imageSrc: "/images/success-stories/Music-license.png",
    tag: "E-Commerce",
    title: "Scalable Online Marketplace for a Retail Giant", // Example for third story
    description:
      "The third story focuses on e-commerce, discussing challenges like payment gateway integration and inventory management.",
    services: commonProvidedServices, // Use the common services array
  },
]

const SuccessStories: React.FC = () => {
  // Use the context hook here as well
  const sharedScrollYProgress = useSharedScroll();

  // This animation starts after the horizontal scroll is 75% complete
const sectionY = useTransform(sharedScrollYProgress, [0.75, 1], ["100%", "0%"])

const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the container is visible
  });

  return (
   <motion.section
      style={{ y: sectionY }}
      id="success-stories"
      className="sticky top-0 z-20 h-screen w-full rounded-t-[5rem] bg-white text-black shadow-xl stack-clip"
    >
      <div className="mx-auto  w-full px-4 py-12 md:px-6 md:py-16 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-4 text-center text-4xl font-semibold md:text-5xl">
              Success Stories
            </h2>
            <p className="mt-1 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
          {/* Cards Container */}
           <div className="space-y-8">
              {stories.map((story, index) => (
             <div 
              key={index} 
              className="sticky"
              // The style attribute creates the stacking offset for each card
              style={{ top: `calc(6rem + ${index * 2}rem)` }}
            >
              <SuccessStoryCard story={story} />
            </div>
          ))}
            </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SuccessStories;