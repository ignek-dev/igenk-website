"use client"
import { Pagination } from "components/marketplace/Pagination"
import { ToolCard } from "components/marketplace/ToolCard"

// --- Data for the cards ---
const toolsData = [
  {
    id: 1,
    icon: "/images/marketplace/ai-blog-workspace.png", // Note: Update paths to your images
    module: "Artificial Intelligence",
    title: "AI Blog Workspace For Liferay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 2,
    icon: "/images/marketplace/batch-client-extension.png",
    module: "Batch",
    title: "Batch Client Extension Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 3,
    icon: "/images/marketplace/email-authentication.png",
    module: "Artificial Intelligence",
    title: "Email OTP Authentication for Community Edition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 4,
    icon: "/images/marketplace/ai-blog-workspace.png",
    module: "Artificial Intelligence",
    title: "AI Blog Workspace For Liferay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 5,
    icon: "/images/marketplace/batch-client-extension.png",
    module: "Batch",
    title: "Batch Client Extension Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 6,
    icon: "/images/marketplace/email-authentication.png",
    module: "Artificial Intelligence",
    title: "Email OTP Authentication for Community Edition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 7,
    icon: "/images/marketplace/ai-blog-workspace.png",
    module: "Artificial Intelligence",
    title: "AI Blog Workspace For Liferay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 8,
    icon: "/images/marketplace/batch-client-extension.png",
    module: "Batch",
    title: "Batch Client Extension Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
  {
    id: 9,
    icon: "/images/marketplace/email-authentication.png",
    module: "Artificial Intelligence",
    title: "Email OTP Authentication for Community Edition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    tags: ["Content Management And Operation", "Content Writing", "Blog Writing"],
  },
]


export default function MarketplacePage() {
  return (
    <main className="">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-9 bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(0deg,rgba(0,0,0,0.23),rgba(0,0,0,0.23))] bg-clip-text text-7xl leading-tight font-bold text-transparent sm:text-5xl md:text-7xl">
                Our Marketplace
                <br />
                <span className="block">Tools For Liferay</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-2xl text-right text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] py-[64px] text-black">
        <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          {/* Header part */}
          <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold tracking-tight text-[#000000]">
                Check Out Our Newly
                <br />
                Launched Tools
              </h2>
            </div>
            <div className="flex h-full items-end justify-end">
              <p className="text-normal line-height-[30px] w-full text-right text-xl text-[#374151]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet
              </p>
            </div>
          </div>

        {/* --- Grid --- */}
          <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
            {toolsData.map((tool) => (
              <ToolCard
                key={tool.id}
                icon={tool.icon}
                module={tool.module}
                title={tool.title}
                description={tool.description}
                tags={tool.tags}
              />
            ))}
          </div>

          {/* --- Pagination --- */}
          <Pagination />
          
        </div>
      </section>
    </main>
  )
}
