import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayArchitectureDesignContent from "./ArchitectureDesignContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Architecture Design Services | Enterprise Liferay Experts – IGNEK",
  description: "Design scalable, secure Liferay architectures with IGNEK. Expert Liferay architecture design services built on best practices for long-term enterprise growth.",
  canonicalUrl: "https://www.ignek.com/services/liferay-architecture-design/",
  keywords: ["Liferay Architecture", "Liferay System Design", "Enterprise Liferay Architecture"],
})

export default function LiferayArchitectureDesignPage() {
  return <LiferayArchitectureDesignContent />
}
