import { Metadata } from 'next'

const siteConfig = {
  name: 'Ignek',
  description: 'Ignek is a Liferay Boutique Company and trusted Liferay Consulting Partner delivering development, portal implementation, DXP services, and enterprise solutions that maximise your Liferay investment.',
  url: 'https://www.ignek.com',
  ogImage: '/og-image.png',
  keywords: [
    'Liferay',
    'Liferay Consulting',
    'Liferay Development',
    'Digital Transformation',
    'DXP',
    'Boutique Consulting',
    'Enterprise Solutions',
    'Portal Implementation',
    'Liferay Expert'
  ]
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/images/Favicon.png',
  noIndex = false,
  keywords = siteConfig.keywords,
  canonicalUrl = siteConfig.url,
  ogTitle,
  ogDescription,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string | { icon: string; apple?: string }
  noIndex?: boolean
  keywords?: string[]
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
} = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: [image],
      creator: '@ignek',
      site: '@ignek',
    },
    icons: typeof icons === 'string' ? {
      icon: icons,
      apple: '/images/blogs/liferayIcon.png',
    } : icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const baseMetadata = constructMetadata()
