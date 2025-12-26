import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayHireDeveloperContent from "./HireDeveloperContent"

export const metadata: Metadata = constructMetadata({
  title: "Hire Liferay Developers | Certified Liferay DXP Experts",
  description: "Hire certified Liferay developers for secure, scalable, and cost-efficient Liferay DXP solutions. Get expert consulting, fast onboarding, and reliable delivery.",
  canonicalUrl: "https://www.ignek.com/hire-liferay-developer/",
  keywords: ["Hire Liferay Developer", "Certified Liferay Developer", "Liferay Staff Augmentation"],
})

export default function LiferayHireDeveloper() {
  return <LiferayHireDeveloperContent />
}
