// components/SolutionsMegaMenu.tsx
// --- Data for the Mega Menu ---
import Image from "next/image"
import Link from "next/link"
// const iconUrl = "/images/mega-menu/solution-e1.png"

interface MegaMenuProps {
  onClose: () => void;
}

const solutionsLinks = [
  { text: "Enterprise Websites", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e1.svg" },
  { text: "Employee Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e2.svg" },
  { text: "Digital Commerce", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e3.svg" },
  { text: "Partner Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e4.svg" },
  { text: "Supplier Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e5.svg" },
  { text: "Customer Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e6.svg" },
]

const integrationsLinks = [
  { text: "Matomo Integration with Liferay", href: "/blog/35704", icon: "/images/mega-menu/Integartion-e1.png" },
  {
    text: "Microsoft Teams Integration with Liferay",
    href: "/blog/2379",
    icon: "/images/mega-menu/Integration-e2.png",
  },
  { text: "Jira Integration with Liferay", href: "/blog/21796", icon: "/images/mega-menu/Integration-e3.png" },
  { text: "Twilio Integration with Liferay", href: "/blog/29103", icon: "/images/mega-menu/Integration-e4.png" },
  { text: "ZOOM Integration with Liferay", href: "/blog/18883", icon: "/images/mega-menu/Integration-e5.png" },
  { text: "Sonar Integration with Liferay", href: "/blog/17663", icon: "/images/mega-menu/Integration-e6.png" },
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
    text: "Cognitive Virtual Assistants for Enterprise Experiences",
    href: "/contact",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ai-1.svg",
  },
  { text: "AI-Driven Personalization & Engagement", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-2.svg" },
  { text: "Intelligent Search & Knowledge Discovery", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-3.svg" },
  { text: "Autonomous Workflow Optimization", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-4.svg" },
  { text: "Predictive Business Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-5.svg" },
  { text: "AI-Enhanced Document Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-6.svg" },
]

// --- Main SolutionsMegaMenu Component ---
export default function SolutionsMegaMenu({ onClose }: MegaMenuProps) {
  return (
    <>
      <div className="global-container mx-auto w-full px-4 py-10 pb-16 md:px-8">
        <div className="flex w-full justify-between gap-[5.21vw]">
          {/* Left Group (Solutions & Integrations) */}
          <div className="flex gap-[5.21vw]">
            <div>
              <h5 className="mb-9">Solutions</h5>
              <ul className="space-y-6">
                {solutionsLinks.map((link, index) => (
                  <li key={`sol-${index}`}>
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white">
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
                {integrationsLinks.map((link, index) => (
                  <li key={`int-${index}`}>
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white" onClick={onClose}>
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
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white">
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />
                      <div className="flex max-w-[320px] items-baseline">
                        <span className="font-medium" dangerouslySetInnerHTML={{ __html: link.text }} />

                        {link.subheading && (
                          <span className="rounded-full align-middle bg-white/10 px-1.5 py-1 text-sm font-medium text-white/70 border inline-block whitespace-nowrap
             filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                            {link.subheading}
                          </span>
                        )}
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
                    <Link href={link.href} className="p20 flex items-center gap-5 text-white">
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
