"use client"
import { Metadata } from "next"
import { useState } from "react"
import { Pagination } from "components/marketplace/Pagination"
import { ToolCard } from "components/marketplace/ToolCard"
import { featuredModulesSection, liferayMarketplaceHero, toolsData } from "data/marketplace"

// --- Data for the cards ---
const metadata: Metadata = {
  title: "Liferay Marketplace Modules | Apps, Plugins & Extensions",
  description:
    "Enhance your Liferay DXP platform with IGNEK’s marketplace modules, plugins, and extensions. Easy to integrate, upgrade-safe, and designed for scalable digital experiences.",

  openGraph: {
    url: "https://www.ignek.com/marketplace/",
    title: "Liferay Marketplace Modules | Apps, Plugins & Extensions",
    description:
      "Enhance your Liferay DXP platform with IGNEK’s marketplace modules, plugins, and extensions. Easy to integrate, upgrade-safe, and designed for scalable digital experiences.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

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
      <section className="relative bg-black global-container pt-32 pb-16 lg:pt-[7.865vw] lg:pb-[4.427vw] text-white">
        {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" /> */}
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-end lg:gap-0">
              <h1 className="text-[#FFFFFF]">
                {liferayMarketplaceHero.heading}
                <br />
                <span className="block">{liferayMarketplaceHero.headingSpan}</span>
              </h1>
            <p className="w-full text-left text-lg 
            md:text-xl lg:w-[34.479vw] lg:text-[0.938vw] lg:leading-[1.458vw] lg:text-right">
              {liferayMarketplaceHero.description}
            </p>
        </div>
      </section>

      <section className="bg-[##F9FAF7] py-16 lg:pt-[3.333vw] lg:pb-[3.333vw] global-container text-black">
          {/* Header part */}
          <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:justify-between lg:items-center lg:mb-[3.75vw] lg:gap-0">
              <h2 className="">
                {featuredModulesSection.heading} 
                <br />
                {featuredModulesSection.headingSpan}
              </h2>
              <p className="w-full text-left text-[#374151] text-lg
              md:text-xl lg:text-[0.938vw] lg:leading-[1.563vw] lg:text-right lg:w-[42.75vw]">
                {featuredModulesSection.description}
              </p>
            </div>

          {/* --- Grid --- */}
          <div className="grid grid-cols-1 gap-10 lg:gap-[2.083vw] lg:grid-cols-3">
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
            <div className="mt-12 lg:mt-0">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
      </section>
    </main>
  )
}
