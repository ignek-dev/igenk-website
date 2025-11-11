"use client"

import { MotionValue, useScroll } from "framer-motion"
import { createContext, ReactNode, useContext, useRef } from "react"

// 1. Create a context to hold the scroll progress value
const ScrollContext = createContext<MotionValue<number> | null>(null)

// 2. Create a custom hook to easily access the context value in child components
export const useSharedScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useSharedScroll must be used within a ScrollContextProvider")
  }
  return context
}

// 3. Create the Provider component
export const ScrollContextProvider = ({ children }: { children: ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // This hook tracks the scroll progress of the ref'd div
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  })

  return (
    // This div creates the "scroll runway" for the animation
    <div ref={scrollContainerRef} className="relative h-[400vh] bg-black">
      {/* The scroll progress is provided to any children */}
      <ScrollContext.Provider value={scrollYProgress}>{children}</ScrollContext.Provider>
    </div>
  )
}
