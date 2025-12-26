import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import ContactContent from "./ContactContent"

export const metadata: Metadata = constructMetadata({
  title: "Contact IGNEK | Speak With Liferay DXP Experts",
  description: "Contact IGNEK for Liferay DXP consulting, support, and implementation inquiries. Connect with our experts for guidance on digital experience solutions.",
  canonicalUrl: "https://www.ignek.com/contact-us/",
  keywords: ["Contact Ignek", "Liferay Support", "Liferay Consulting Contact"],
})

export default function ContactPage() {
  return <ContactContent />
}
