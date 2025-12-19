// components/WhatWeBringCard.tsx

import React from "react"
import Card from "../Common/Card" // Import your reusable Card component

interface WhatWeBringCardProps {
  cardNumber: string
  title: string
  description: string
}

const WhatWeBringCard: React.FC<WhatWeBringCardProps> = ({ cardNumber, title, description }) => {
  return (
    // We use the generic Card component as the root element
    <Card
      // The 'outline' variant is a good base as it's transparent
      variant="outline"
      // We pass all the unique styles for this section via the className prop
      className="flex min-w-[27.083vw] flex-shrink-0 flex-col rounded-[38px] border-2 border-[#00979E] p-5 lg:p-[2.396vw] hover:border-[#00979E] min-h-[30.677vw]"
    >
      {/* The rest of the content is passed as children to the Card */}
      {/* Card Number */}
    <span className="mb-5 text-p20 md:text-p24 lg:text-p20 font-semibold text-white">({cardNumber})</span>

      {/* Heading */}
      <p className="max-w-[250px] font-bold whitespace-pre-wrap text-[#00979E] text-p20 md:text-p24 lg:text-[2.083vw] leading-[54px]">{title}</p>

      {/* Description */}
      <p className="mt-[4vw] max-w-75 lg:max-w-[22.344vw] p18 leading-relaxed text-white">{description}</p>
    </Card>
  )
}

export default WhatWeBringCard
