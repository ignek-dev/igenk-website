// components/common/AccordionItem.tsx

"use client" // This component uses client-side state and animation

import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

interface AccordionItemProps {
  title: string
  content: string | React.ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border-b border-gray-700">
      <button
        className="flex w-full items-center justify-between py-6 text-left text-xl font-semibold text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-2xl text-gray-400"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pr-8 pb-6 text-lg leading-relaxed text-gray-400">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionItem
