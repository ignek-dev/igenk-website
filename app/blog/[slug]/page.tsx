import { Metadata } from "next"
import { notFound } from "next/navigation"
import { constructMetadata } from "seo/metadata.config"
import BlogContent from "./BlogContent"

interface WPPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  date?: string
  categories?: number[]
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>
  }
}

async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`https://insights.ignek.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = (await res.json()) as WPPost[]
    return data[0] ?? null
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return constructMetadata({
      title: "Post Not Found | IGNEK",
      description: "The requested blog post could not be found.",
    })
  }

  return constructMetadata({
    title: `${post.title.rendered} | IGNEK Blog`,
    description: post.excerpt.rendered.replace(/<[^>]*>?/gm, "").substring(0, 160),
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    canonicalUrl: `https://www.ignek.com/blog/${slug}/`,
    ogTitle: post.title.rendered,
    ogDescription: post.excerpt.rendered.replace(/<[^>]*>?/gm, "").substring(0, 160),
  })
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return <BlogContent post={post} />
}
