import { MetadataRoute } from 'next'

async function getBlogPosts() {
  try {
    const res = await fetch('https://insights.ignek.com/wp-json/wp/v2/posts?per_page=100')
    if (!res.ok) return []
    const posts = (await res.json()) as any[]
    return posts.map((post: any) => ({
      url: `https://www.ignek.com/blog/${post.slug}`,
      lastModified: new Date(post.modified),
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ignek.com'

  const staticRoutes = [
    '',
    '/about-us',
    '/career',
    '/blog',
    '/contact',
    '/marketplace',
    '/case-study',
    '/webinars',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const serviceRoutes = [
    '/services/liferay-architecture-design',
    '/services/liferay-consulting-and-implementation-services',
    '/services/liferay-development-and-customization',
    '/services/liferay-ecommerce-development',
    '/services/liferay-expert-advice',
    '/services/liferay-hire-developer',
    '/services/liferay-migration',
    '/services/liferay-performance-tuning',
    '/services/liferay-proof-of-concept',
    '/services/liferay-support-and-maintenance',
    '/services/liferay-theme-development',
    '/services/liferay-upgrade',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const blogPosts = await getBlogPosts()

  return [...staticRoutes, ...serviceRoutes, ...blogPosts]
}
