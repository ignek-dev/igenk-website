// components/SolutionsMegaMenu.tsx
// --- Data for the Mega Menu ---
"use client"
import { aiLinks, initialIntegrationsConfig, IntegrationLink, marketplaceLinks, solutionsLinks, solutionTitleData } from "data/Navigation";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
// const iconUrl = "/images/mega-menu/solution-e1.png"

interface MegaMenuProps {
  onClose: () => void;
}

// 1. Define the interface for our link data


interface WPPost {
  id: number;
  slug: string;
}



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
              <h5 className="mb-9">{solutionTitleData.title1}</h5>
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
              <h5 className="mb-9">{solutionTitleData.title2}</h5>
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
              <h5 className="mb-9">{solutionTitleData.title3}</h5>
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
              <h5 className="mb-9">{solutionTitleData.title4}</h5>
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
