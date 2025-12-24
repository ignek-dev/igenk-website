import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayConsultationContent from "./ConsultationContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Consulting & Implementation Services | IGNEK",
  description: "IGNEK delivers strategic Liferay consulting, implementation, integration, migration, and support services to help enterprises build scalable digital experiences.",
  canonicalUrl: "https://www.ignek.com/services/liferay-consulting-and-implementation-services/",
  keywords: ["Liferay Consulting", "Liferay Implementation", "Liferay DXP Services"],
})

export default function LiferayConsultationPage() {
  return <LiferayConsultationContent />
}
