import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import LiferayPerformanceTuningContent from "./PerformanceTuningContent"

export const metadata: Metadata = constructMetadata({
  title: "Liferay Performance Tuning Services | Enterprise Liferay Experts - IGNEK",
  description: "Improve Liferay performance with expert tuning, diagnostics, and optimisation. IGNEK delivers stable, scalable Liferay platforms built for enterprise workloads.",
  canonicalUrl: "https://www.ignek.com/services/liferay-performance-tuning/",
  keywords: ["Liferay Performance Tuning", "Liferay Optimization", "Liferay Speed Audit"],
})

export default function LiferayPerformanceTuningPage() {
  return <LiferayPerformanceTuningContent />
}
