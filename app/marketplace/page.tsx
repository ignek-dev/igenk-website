"use client"
import { useState } from "react"
import { Pagination } from "components/marketplace/Pagination"
import { ToolCard } from "components/marketplace/ToolCard"
import { featuredModulesSection, liferayMarketplaceHero, toolsData } from "data/marketplace"

// --- Data for the cards ---


export default function MarketplacePage() {
  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState<number>(1)
  const ITEMS_PER_PAGE = 9

  const totalItems = toolsData.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  // --- Calculate items for the current page ---
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentTools = toolsData.slice(startIndex, endIndex)
  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black global-container pt-[7.865vw] pb-[4.427vw] text-white">
        {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" /> */}
          <div className="flex justify-between items-end">
              <h1 className="text-[#FFFFFF]">
                {liferayMarketplaceHero.heading}
                <br />
                <span className="block">{liferayMarketplaceHero.headingSpan}</span>
              </h1>
            <p className="w-[34.479vw] text-[0.938vw] leading-[1.458vw] text-right">
              {liferayMarketplaceHero.description}
            </p>
        </div>
      </section>

      <section className="bg-[##F9FAF7] pt-[3.333vw] pb-[3.333vw] global-container text-black">
          {/* Header part */}
          <div className="flex justify-between items-center mb-[3.75vw]">
              <h2 className="">
                {featuredModulesSection.heading} 
                <br />
                {featuredModulesSection.headingSpan}
              </h2>
              <p className="text-[#374151] text-[0.938vw] leading-[1.563vw] text-right w-[42.75vw]">
                {featuredModulesSection.description}
              </p>
            </div>

          {/* --- Grid --- */}
          <div className="grid grid-cols-1 gap-[2.083vw] md:grid-cols-2 lg:grid-cols-3">
            {currentTools.map((tool) => (
              <ToolCard
                key={tool.id}
                icon={tool.icon}
                module={tool.module}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
                link={tool.link}
                subTag={tool.subTag}
              />
            ))}
          </div>

          {/* --- Pagination (now dynamic) --- */}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
      </section>
    </main>
  )
}
