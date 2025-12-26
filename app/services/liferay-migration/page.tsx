import { Metadata } from "next"
import LiferayMigrationPageContent from "./LiferayMigrationPageContent"
import { constructMetadata } from "seo/metadata.config"

export const metadata: Metadata = constructMetadata({
  title: "Liferay DXP Migration Services | Enterprise Portal Experts",
  description: "Migrate to Liferay DXP with confidence. IGNEK delivers secure, best-practice Liferay migrations with minimal downtime and long-term platform stability.",
  canonicalUrl: "https://www.ignek.com/services/liferay-migration/",
  keywords: ["Liferay Migration", "Liferay DXP Migration", "Enterprise Migration Service"],
})

export default function LiferayMigrationPage() {
  return <LiferayMigrationPageContent/>
}
