// Use dynamic import to avoid TypeScript module resolution issues in some IDE setups
import { env } from "../env.mjs"

type SanityClient = {
  fetch<T>(query: string, params?: Record<string, unknown>): Promise<T>
}

type SanityClientConfig = {
  projectId: string
  dataset: string
  apiVersion: string
  useCdn?: boolean
  token?: string
}

async function getSanityClient(): Promise<SanityClient> {
  const mod: { createClient: (config: SanityClientConfig) => SanityClient } | null = await import(
    "@sanity/client"
  ).catch(() => null)
  if (!mod?.createClient) {
    throw new Error("Sanity client package is not available. Ensure '@sanity/client' is installed.")
  }
  const projectId = env.SANITY_PROJECT_ID
  const dataset = env.SANITY_DATASET
  const apiVersion = env.SANITY_API_VERSION

  if (!projectId || !dataset || !apiVersion) {
    throw new Error("Sanity env not configured. Please set SANITY_PROJECT_ID, SANITY_DATASET, and SANITY_API_VERSION.")
  }

  return mod.createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: env.SANITY_READ_TOKEN,
  })
}

export type SanityImage = {
  asset?: {
    _ref?: string
    _type?: string
    url?: string
  }
}

export type PortfolioListItem = {
  _id: string
  title: string
  slug: { current: string }
  imageUrl?: string | null
  publishedAt?: string | null
  tags?: string[]
}

export type Portfolio = {
  _id: string
  title: string
  slug: { current: string }
  seoTitle?: string | null
  seoDescription?: string | null
  imageUrl?: string | null
  mainImage?: SanityImage | null
  bodyHtml?: string | null
  publishedAt?: string | null
  modifiedAt?: string | null
  wordpressLink?: string | null
  status?: string | null
}

export async function getPortfolioList(): Promise<PortfolioListItem[]> {
  const query = `*[_type == "portfolio"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    tags,
    "imageUrl": mainImage.asset->url
  }`
  const client = await getSanityClient()
  return client.fetch(query)
}

export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
  const query = `*[_type == "portfolio" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seoTitle,
    seoDescription,
    publishedAt,
    modifiedAt,
    wordpressLink,
    status,
    bodyHtml,
    "imageUrl": mainImage.asset->url,
    mainImage
  }`
  const client = await getSanityClient()
  return client.fetch(query, { slug })
}
