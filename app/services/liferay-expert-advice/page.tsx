import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayExpertAdviceContent from "./ExpertAdviceContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Expert Advice | Strategic Liferay Consulting - IGNEK",
  description: "Get expert Liferay advice to assess architecture, performance, and platform direction. IGNEK helps enterprises make informed, upgrade-safe Liferay decisions.",
  canonicalUrl: "https://www.ignek.com/services/liferay-expert-advice/",
  keywords: ["Liferay Expert Advice", "Liferay Platform Audit", "Liferay Strategic Consulting"],
})

export default function LiferayExpertAdvicePage() {
  return <LiferayExpertAdviceContent />
}
