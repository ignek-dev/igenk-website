"use client"

import { useEffect, useState } from "react"
import StandoutSection from "./StandoutSection"
import StandoutSectionCarousel from "./StandoutSectionCarousel"

const StandoutSectionWrapper = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isDesktop ? <StandoutSection /> : <StandoutSectionCarousel />
}

export default StandoutSectionWrapper
