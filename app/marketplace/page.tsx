import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import MarketplaceContent from "./MarketplaceContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Marketplace Modules | Apps, Plugins & Extensions",
  description: "Enhance your Liferay DXP platform with IGNEK’s marketplace modules, plugins, and extensions. Easy to integrate, upgrade-safe, and designed for scalable digital experiences.",
  canonicalUrl: "https://www.ignek.com/marketplace/",
  keywords: ["Liferay Marketplace", "Liferay Modules", "Liferay Plugins"],
})

export default function MarketplacePage() {
  return <MarketplaceContent />
}
