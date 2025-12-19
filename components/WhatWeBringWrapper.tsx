// WhatWeBringResponsive.tsx
"use client"

import { useEffect, useState } from "react"
import WhatWeBringCarousel from "./WhatWeBringCarousel/WhatWeBringCarousel"
import WhatWeBring from "./WhatWeBring/WhatWeBring"

const WhatWeBringResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isDesktop ? <WhatWeBring /> : <WhatWeBringCarousel />
}

export default WhatWeBringResponsive
