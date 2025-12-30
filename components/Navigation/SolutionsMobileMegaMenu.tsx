"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { aiLinks, initialIntegrationsConfig, IntegrationLink, marketplaceLinks, solutionsLinks, solutionTitleData } from "data/Navigation"

interface SolutionsMobileMegaMenuProps {
  onBack: () => void
  onClose: () => void
}

interface WPPost {
  id: number;
  slug: string;
}

let cachedIntegrations: IntegrationLink[] = [...initialIntegrationsConfig];
let isDataFetched = false;

interface SolutionLink {
  text: string
  href: string
  icon: string
  subheading?: string
}

export default function SolutionsMobileMegaMenu({ onBack, onClose }: SolutionsMobileMegaMenuProps) {
  const [integrations, setIntegrations] = useState<IntegrationLink[]>(cachedIntegrations);

  useEffect(() => {
    if (isDataFetched) return;

    async function fetchIntegrationSlugs() {
      try {
        const ids = initialIntegrationsConfig.map((link) => link.id).join(",");
        const res = await fetch(`https://insights.ignek.com/wp-json/wp/v2/posts?include=${ids}&_fields=id,slug`);
        if (!res.ok) throw new Error("Failed to fetch slugs");
        const posts = await res.json() as WPPost[];
        const updatedLinks = initialIntegrationsConfig.map((link) => {
          const foundPost = posts.find((p) => p.id === link.id);
          return {
            ...link,
            href: foundPost?.slug ? `/blog/${foundPost.slug}` : "",
          };
        });
        cachedIntegrations = updatedLinks;
        isDataFetched = true;
        setIntegrations(updatedLinks);
      } catch (err) {
        console.error("Error updating menu links:", err);
      }
    }
    fetchIntegrationSlugs();
  }, []);

  const renderSection = (title: string, links: SolutionLink[], columns: number = 2) => (
    <div className="space-y-3">
      <h3 className="text-p18! md:text-p24! font-semibold">{title}</h3>
      <div className={`grid ${columns === 1 ? "grid-cols-1 gap-y-[18px]" : "grid-cols-2 gap-x-10 gap-y-4.5"}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href || "#"}
            onClick={onClose}
            className="flex items-center gap-3 group"
          >
            <div className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] flex items-center justify-center shrink-0 rounded-lg bg-white overflow-hidden p-1">
              <Image src={link.icon} alt={link.text} width={34} height={34} className="object-contain" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center flex-wrap gap-2">
                    <span className="text-[16px] md:text-p16 font-medium text-white/90 group-hover:text-white transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: link.text }} />
                    {link.subheading && (
                        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] md:text-p12 font-medium text-white leading-none whitespace-nowrap">
                            {link.subheading}
                        </span>
                    )}
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="absolute inset-0 z-1002 flex flex-col bg-black text-white overflow-y-auto pb-10"
    >
      <div className="flex items-center justify-between px-6 py-6.5 shrink-0">
        <h2 className="text-[20px]! font-semibold tracking-wide">Solutions</h2>

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-p14 font-medium text-white/70 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          Back To Menu
        </button>
      </div>

      <div className="flex flex-col px-6 space-y-4 md:space-y-10">
        {renderSection(solutionTitleData.title1, solutionsLinks)}
        <div className="w-full h-px bg-white/10" />
        {renderSection(solutionTitleData.title2, integrations, 1)}
        <div className="w-full h-px bg-white/10" />
        {renderSection(solutionTitleData.title3, marketplaceLinks, 1)}
        <div className="w-full h-px bg-white/10" />
        {renderSection(solutionTitleData.title4, aiLinks, 1)}
      </div>
    </motion.div>
  )
}
