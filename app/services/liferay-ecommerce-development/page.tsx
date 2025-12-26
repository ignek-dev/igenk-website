import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayEcommerceDevelopmentContent from "./EcommerceContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Ecommerce Development Services | Enterprise Commerce - IGNEK",
  description: "Design and implement enterprise-grade ecommerce with Liferay Commerce. IGNEK delivers scalable, secure Liferay ecommerce solutions built for B2B and complex use cases.",
  canonicalUrl: "https://www.ignek.com/services/liferay-ecommerce-development/",
  keywords: ["Liferay Ecommerce", "Liferay Commerce Development", "B2B Ecommerce Liferay"],
})

export default function LiferayEcommerceDevelopmentPage() {
  return <LiferayEcommerceDevelopmentContent />
}
