"use client"
import { useState } from "react"
import { Pagination } from "components/marketplace/Pagination"
import { ToolCard } from "components/marketplace/ToolCard"

// --- Data for the cards ---
const toolsData = [
  {
    id: 1,
    icon: "/images/marketplace/ai-blog-workspace.png", // Note: Update paths to your images
    module: "Content Management and Operations",
    title: "AI Blog Workspace For Liferay",
    description:
      "Automate your entire Liferay blog workflow with AI technology that generates content, images, and styles, all at once.",
    tags: ["Blog Generation","Generative AI", "Content Automation"],
    link: "https://marketplace.liferay.com/p/ai-blog-workspace",
    subTag:"",
  },
  {
    id: 2,
    icon: "/images/marketplace/batch-client-extension.png",
    module: "Batch",
    title: "Batch Client Extension Generator",
    description:
      "Create extensions in bulk with automation, enabling developers to save time and simplify their Liferay project workflows.",
    tags: ["Batch Automation","Objects","Liferay Client Extension"],
    link: "https://marketplace.liferay.com/p/batch-client-extension-generator",
    subTag:"",
  },
  {
    id: 3,
    icon: "/images/marketplace/email-authentication.png",
    module: "Identity Management & Governance",
    title: "Liferay CE Email MFA",
    description:
      "Enable simple and secure email OTP login for Liferay CE user overcome verification to visitors and better protect the portal in general.",
    tags: ["OAuth", "MFA","2FA For Community Edition"],
    link: "https://marketplace.liferay.com/p/email-otp-authentication-for-community-edition-of-liferay",
    subTag:"",
  },
  {
    id: 4,
    icon: "/images/marketplace/collection-display.png",
    module: "Content Management and Operations",
    title: "Collection display grid view with Item Highlight",
    description:
      "A custom fragment that enhances Liferay’s Collection Display by allowing one item to be highlighted with a unique layout and styling for better visual emphasis.",
    tags: ["Collection Layout", "Highlighted Item","Custom Grid"],
    link: "https://marketplace.liferay.com/p/collection-display-grid-view-with-item-highlight",
    subTag:"",
  },
  {
    id: 5,
    icon: "/images/marketplace/sticky-notes.png",
    module: "Content Management and Operations",
    title: "Sticky Notes for the Portal",
    description:
      "A global sticky-notes widget that lets users quickly create, edit, and manage notes across all pages, stored locally in the browser.",
    tags: ["Productivity", "Notes Panel","LocalStorage"],
    link: "https://marketplace.liferay.com/p/sticky-notes-for-the-portal",
    subTag:"",
  },
  {
    id: 6,
    icon: "/images/marketplace/service-builder-migration-utility.png",
    module: "Data Migration",
    title: "Service Builder Schema-to-Object Converter",
    description:
      "Creates object definitions based on your service file and migrates existing data from legacy tables; also handles relationships between the tables.",
    tags: ["Liferay service", "Objects","Migration Automation"],
    link: "#",
    subTag:"Coming Soon",
  },
]

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
                Explore the Liferay 

                <br />
                <span className="block">Marketplace Module</span>
              </h1>
            <p className="w-[34.479vw] text-[0.938vw] leading-[1.458vw] text-right">
              Explore modules, plugins, and add-ons to optimize development, extend functionality, and create scalable Liferay DXP solutions.
            </p>
        </div>
      </section>

      <section className="bg-[##F9FAF7] pt-[3.333vw] pb-[3.333vw] global-container text-black">
          {/* Header part */}
          <div className="flex justify-between items-center mb-[3.75vw]">
              <h2 className="">
                Featured Liferay 
                <br />
                Marketplace Modules
              </h2>
              <p className="text-[#374151] text-[0.938vw] leading-[1.563vw] text-right w-[42.75vw]">
                Explore our curated collection of Liferay Marketplace modules, apps, and plugins designed to extend functionality, streamline integrations, and enhance your DXP platform.

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
