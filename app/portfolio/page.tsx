import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPortfolioList } from "../../lib/sanity"

export const metadata: Metadata = {
  title: "Portfolio | IGNEK",
  description: "Explore our portfolio of projects and case studies.",
}

export const revalidate = 60

export default async function PortfolioPage() {
  let items: Awaited<ReturnType<typeof getPortfolioList>> = []
  try {
    items = await getPortfolioList()
  } catch {
    return (
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h1>
          <p className="mt-2 text-white/70">A curated list of our recent work and success stories.</p>
        </section>
        <div className="rounded-md border border-white/10 bg-black/20 p-6">
          <p className="text-white/80">Sanity is not configured. Please set `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_API_VERSION` in your environment.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h1>
        <p className="mt-2 text-white/70">A curated list of our recent work and success stories.</p>
      </section>

      {items.length === 0 ? (
        <p className="text-center text-white/70">No portfolio items found.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item._id} className="group rounded-lg border border-white/10 bg-black/20 p-4 transition-colors hover:border-[#00979E]">
              <Link href={`/portfolio/${item.slug.current}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-black/30">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-white/50">No image</div>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                {item.publishedAt && (
                  <p className="mt-1 text-sm text-white/50">{new Date(item.publishedAt).toLocaleDateString()}</p>
                )}
                {item.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}