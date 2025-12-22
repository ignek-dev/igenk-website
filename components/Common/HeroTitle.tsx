"use client"

import Scenes from "components/Scenes"
import StaticHeroText from "./StaticHeroText"

const HeroTitle = () => {
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 1440

  return (
    <h1 className="mt-[2.188vw]">
      {isDesktop ? <Scenes /> : <StaticHeroText />}
    </h1>
  )
}

export default HeroTitle
