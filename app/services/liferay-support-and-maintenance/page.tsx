import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import SupportAndMaintenance from "./SupportAndMaintenance"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Support and Maintenance Services | Enterprise Support - IGNEK",
  description: "Ensure long-term stability and reliability with expert Liferay support and maintenance. IGNEK delivers proactive, enterprise-grade Liferay platform support.",
  canonicalUrl: "https://www.ignek.com/services/liferay-support-and-maintenance/",
  keywords: ["Liferay Support", "Liferay Maintenance", "Liferay SLA Support"],
})


export default function LiferaySupportMaintenancePage() {
  return (
   <SupportAndMaintenance />
  )
}
