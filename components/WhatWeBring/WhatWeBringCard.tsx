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
      className="flex h-auto w-[320px] flex-shrink-0 flex-col rounded-[38px] border-2 border-[#00979E] p-8 hover:border-[#00979E] lg:h-[589px] lg:w-[520px] lg:p-8"
    >
      {/* The rest of the content is passed as children to the Card */}
      {/* Card Number */}
      <span className="mb-5 text-xl font-semibold text-white">({cardNumber})</span>

      {/* Heading */}
      <h3 className="mb-8 max-w-[250px] text-5xl font-bold whitespace-pre-wrap text-[#00979E] lg:text-5xl leading-[54px]">{title}</h3>

      {/* Description */}
      <p className="mt-[96px] text-lg leading-relaxed text-white">{description}</p>
    </Card>
  )
}

export default WhatWeBringCard
