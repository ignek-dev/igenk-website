"use client"

import { useState } from "react"

export type AccordionItem = {
  title: string
  content: string | React.ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  defaultOpenIndex?: number | null
}

export function Accordion({ items, defaultOpenIndex = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className="divide-y divide-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="py-4 first:pt-0 last:pb-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-white">{item.title}</span>
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white/80 group-hover:text-white"
              >
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && <p className="mt-2 text-sm text-white/70">{item.content}</p>}
          </div>
        )
      })}
    </div>
  )
}
