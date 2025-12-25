import "styles/tailwind.css"
import { Metadata } from 'next'
import { Poppins } from "next/font/google"
import BottomBar from "components/Common/BottomBar"
import { Footer } from "../components/Common"
import Navigation from "../components/Navigation/Navigation"
import BlogImagePrefetcher from "../components/Common/BlogImagePrefetcher"
import SchemaInjector from "seo/schemaInjector"
import { organizationSchema } from "seo/organization.schema"
import { websiteSchema } from "seo/website.schema"

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})


export const metadata: Metadata = {
  title: 'Ignek - Transform Your Digital Experience',
  description: 'Leading digital transformation company...',
  icons: {
    icon: '/images/Favicon.png', // your favicon
    apple: '/images/blogs/liferayIcon.png', // optional
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/rage-italic"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-black">
        <SchemaInjector id="org-schema" schema={organizationSchema} />
        <SchemaInjector id="website-schema" schema={websiteSchema} />
        <BlogImagePrefetcher />
        <Navigation />
        {children}
        <Footer />
        <BottomBar />
      </body>
    </html>
  )
}
