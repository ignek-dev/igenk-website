// components/TechnologyChip.tsx

import Image from "next/image"
import React from "react"

interface TechnologyChipProps {
  iconSrc: string
  name: string
}

const TechnologyChip: React.FC<TechnologyChipProps> = ({ iconSrc, name }) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-[#D1D5DB] bg-white px-3 py-1.5">
      <Image src={iconSrc} alt={`${name} logo`} width={16} height={16} />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  )
}

export default TechnologyChip
