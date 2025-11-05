import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import styles from "./wp-content.module.css"
import { getPortfolioBySlug } from "../../../lib/sanity"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPortfolioBySlug(params.slug)
  const title = data?.seoTitle || data?.title || "Portfolio"
  const description = data?.seoDescription || "Portfolio item details"
  return { title, description }
}

export const revalidate = 60

export default async function PortfolioDetailPage({ params }: Props) {
  let data = null
  try {
    data = await getPortfolioBySlug(params.slug)
  } catch (err) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <Link href="/portfolio" className="text-[#00979E]">← Back to Portfolio</Link>
        <div className="mt-6 rounded-md border border-white/10 bg-black/20 p-6">
          <p className="text-white/80">Sanity is not configured. Please set `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_API_VERSION` in your environment.</p>
        </div>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        <p className="text-white/70">Portfolio item not found.</p>
        <Link href="/portfolio" className="mt-4 inline-block text-[#00979E]">Back to Portfolio</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <Link href="/portfolio" className="text-[#00979E]">← Back to Portfolio</Link>
      <article className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{data.title}</h1>
        {data.publishedAt && (
          <p className="mt-2 text-sm text-white/50">Published {new Date(data.publishedAt).toLocaleDateString()}</p>
        )}

        {data.imageUrl && (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-md bg-black/30">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>
        )}

        {data.wordpressLink && (
          <p className="mt-4 text-sm">
            Source: <a href={data.wordpressLink} target="_blank" rel="noopener noreferrer" className="text-[#00979E]">WordPress</a>
          </p>
        )}

        {/* Render imported WordPress HTML */}
        {data.bodyHtml ? (
          <div
            className={`prose prose-invert mt-8 max-w-none ${styles.wpContent}`}
            dangerouslySetInnerHTML={{ __html: data.bodyHtml }}
          />
        ) : (
          <p className="mt-8 text-white/70">No content available.</p>
        )}
      </article>
    </main>
  )
}