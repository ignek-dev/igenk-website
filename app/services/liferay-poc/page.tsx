import { Metadata } from "next"
import { constructMetadata } from "seo/metadata.config"
import ProofOfConcept from "./ProofOfConcept"

export const metadata: Metadata = constructMetadata({
  title: "Liferay POC Services | Proof of Concept for Liferay DXP - IGNEK",
  description: "Validate your Liferay strategy with a structured Proof of Concept. IGNEK helps enterprises assess feasibility, architecture, and platform fit before full implementation.",
  canonicalUrl: "https://www.ignek.com/services/liferay-proof-of-concept/",
  keywords: ["Liferay Proof of Concept", "Liferay POC", "Liferay Feasibility Study"],
})

export default function LiferayProofOfConceptPage() {
  return (
    <ProofOfConcept />
  )
}
