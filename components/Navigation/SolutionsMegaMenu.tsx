// components/SolutionsMegaMenu.tsx
// --- Data for the Mega Menu ---
"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
// const iconUrl = "/images/mega-menu/solution-e1.png"

interface MegaMenuProps {
  onClose: () => void;
}

// 1. Define the interface for our link data
interface IntegrationLink {
  id: number;
  text: string;
  icon: string;
  href: string; // This will start as empty/fallback and get updated
}

interface WPPost {
  id: number;
  slug: string;
}

const solutionsLinks = [
  { text: "Enterprise Websites", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e1.svg" },
  { text: "Employee Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e2.svg" },
  { text: "Digital Commerce", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e3.svg" },
  { text: "Partner Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e4.svg" },
  { text: "Supplier Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e5.svg" },
  { text: "Customer Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e6.svg" },
]

// 2. Static configuration (Icons and Titles)
// We use the 'id' here to fetch the correct slug later.
const initialIntegrationsConfig: IntegrationLink[] = [
  { id: 35704, text: "Matomo Integration with Liferay", href: "", icon: "/images/mega-menu/Integartion-e1.png" },
  { id: 2379, text: "Microsoft Teams Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e2.png" },
  { id: 21796, text: "Jira Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e3.png" },
  { id: 29103, text: "Twilio Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e4.png" },
  { id: 18883, text: "ZOOM Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e5.png" },
  { id: 17663, text: "Sonar Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e6.png" },
]

const marketplaceLinks = [
  {
    text: "Batch Client Extension Generator",
    href: "https://marketplace.liferay.com/p/batch-client-extension-generator",
    icon: "/images/mega-menu/marketplace-e2.png",
  },
  {
    text: "AI Blog Workspace",
    href: "https://marketplace.liferay.com/p/ai-blog-workspace",
    icon: "/images/mega-menu/marketplace-e1.png",
  },
  {
    text: "Service Builder Migration Utility",
    href: "#",
    subheading: "Coming Soon",
    icon: "/images/mega-menu/solution-mega-icons/service-builder-migration-utility.png",
  },
  {
    text: "Liferay CE Email MFA",
    href: "https://marketplace.liferay.com/p/email-otp-authentication-for-community-edition-of-liferay",
    icon: "/images/mega-menu/marketplace-e3.png",
  },
  {
    text: "Collection display grid view with Item Highlight",
    href: "https://marketplace.liferay.com/p/collection-display-grid-view-with-item-highlight",
    icon: "/images/mega-menu/solution-mega-icons/collection-display-grid-view-with-item-highlight.png",
  },
  {
    text: "Sticky Notes for the Portal",
    href: "https://marketplace.liferay.com/p/sticky-notes-for-the-portal",
    icon: "/images/mega-menu/solution-mega-icons/sticky-notes-for-a-portal-option.png",
  },
]

const aiLinks = [
  {
    text: "Virtual Assistants for Enterprise Experiences",
    href: "/contact",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ai-1.svg",
  },
  { text: "Personalization & Engagement", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-2.svg" },
  { text: "Intelligent Search & Knowledge Discovery", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-3.svg" },
  { text: "Autonomous Workflow Optimization", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-4.svg" },
  { text: "Predictive Business Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-5.svg" },
  { text: "AI-Enhanced Document Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-6.svg" },
]

// --- CACHE VARIABLES (Defined Outside Component) ---
// These persist in memory as long as the page is not refreshed.
let cachedIntegrations: IntegrationLink[] = [...initialIntegrationsConfig];
let isDataFetched = false;

// --- Main SolutionsMegaMenu Component ---
export default function SolutionsMegaMenu({ onClose }: MegaMenuProps) {
  // State to hold the fetched integration links
  const [integrations, setIntegrations] = useState<IntegrationLink[]>(cachedIntegrations);

  

 useEffect(() => {

  // If data is already fetched in this session, don't fetch again.
    if (isDataFetched) {
      return;
    }
    async function fetchIntegrationSlugs() {
      try {
        // 3. Create a comma-separated list of IDs to fetch in one go
        const ids = initialIntegrationsConfig.map((link) => link.id).join(",");

        // 4. Fetch the posts, asking only for 'id' and 'slug' to be fast
        const res = await fetch(`https://insights.ignek.com/wp-json/wp/v2/posts?include=${ids}&_fields=id,slug`);
        
        if (!res.ok) throw new Error("Failed to fetch slugs");
        
       const posts = await res.json() as WPPost[];
        // 5. Update our state: Map the original config to the new API data
       const updatedLinks = initialIntegrationsConfig.map((link) => {
          const foundPost = posts.find((p) => p.id === link.id);
          return {
            ...link,
            href: foundPost?.slug ? `/blog/${foundPost.slug}` : "",
          };
        });

        // Update the global cache and flag
        cachedIntegrations = updatedLinks;
        isDataFetched = true;
        
        // Update local state to trigger re-render
        setIntegrations(updatedLinks);
      } catch (err) {
        console.error("Error updating menu links:", err);
      }
    }

    fetchIntegrationSlugs();
  }, []);

  return (
    <>
      <div className="global-container mx-auto w-full px-4 py-9.5 pb-16 md:px-8">
        <div className="flex w-full justify-between gap-[5.21vw]">
          {/* Left Group (Solutions & Integrations) */}
          <div className="flex gap-[5.21vw]">
            <div>
              <h5 className="mb-9">Solutions</h5>
              <ul className="space-y-6">
                {solutionsLinks.map((link, index) => (
                  <li key={`sol-${index}`}>
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white" onClick={onClose}>
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />
                      {/* CHANGE: Removed whitespace-pre and used dangerouslySetInnerHTML for line breaks */}
                      <span className="whitespace-wrap max-w-[160px]" dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-9">Integrations</h5>
              <ul className="space-y-6">
                {integrations.map((link, index) => (
                  <li key={`int-${index}`}>
                    <Link href={link.href || "#"} className="p20 flex items-center gap-5 text-white" onClick={onClose}>
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />
                      <span className="max-w-[280px]" dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-[5.21vw]">
            <div>
              <h5 className="mb-9">Liferay Marketplace</h5>
              <ul className="space-y-6">
                {marketplaceLinks.map((link, index) => (
                  <li key={`mp-${index}`}>
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white" onClick={onClose} target="_blank">
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />
                      <div className="flex max-w-[320px] items-center">
                        <div className="font-medium">
                          {/* dangerouslySetInnerHTML={{ __html: link.text } */}
                          {link.text}
                          {link.subheading && (
                            <span
                              className="inline-flex min-w-[7.188vw] justify-center rounded-full border bg-white/10  text-[0.833vw] font-medium text-white"
                              style={{ marginLeft: "8px" }}
                            >
                              {link.subheading}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-9">Liferay + AI</h5>
              <ul className="space-y-6">
                {aiLinks.map((link, index) => (
                  <li key={`ai-${index}`}>
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white" onClick={onClose}>
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />{" "}
                      <span className="max-w-[280px]" dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
