import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import DevelopAndCustomization from "./DevelopAndCustomization"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Development & Customization Services | IGNEK",
  description: "Expert Liferay development and customization services to build scalable, secure, and tailored digital experiences aligned with your business needs.",
  canonicalUrl: "https://www.ignek.com/services/liferay-development-and-customization/",
  keywords: ["Liferay Development", "Liferay Customization", "Liferay Module Development"],
})

export default function LiferayDevelopmentAndCustomizationPage() {
  return (
    <DevelopAndCustomization />
  )
}
