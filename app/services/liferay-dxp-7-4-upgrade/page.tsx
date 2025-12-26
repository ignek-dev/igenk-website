import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayUpgradeContent from "./UpgradeContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay DXP 7.4 Upgrade Services | Best Practice Migration",
  description: "Upgrade to Liferay DXP 7.4 with best-practice consulting, secure migration, minimal downtime, and scalable enterprise performance from Liferay experts.",
  canonicalUrl: "https://www.ignek.com/services/liferay-dxp-7-4-upgrade/",
  keywords: ["Liferay Upgrade", "Liferay DXP Upgrade", "Liferay 7.4 Upgrade"],
})

export default function LiferayUpgradePage() {
  return <LiferayUpgradeContent />
}
