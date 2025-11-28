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
    text: "AI Blog Workspace",
    href: "https://marketplace.liferay.com/p/ai-blog-workspace",
    icon: "/images/mega-menu/marketplace-e1.png",
  },
  {
    text: "Batch Client Extension Generator",
    href: "https://marketplace.liferay.com/p/batch-client-extension-generator",
    icon: "/images/mega-menu/marketplace-e2.png",
  },
  {
    text: "Email OTP Authentication for Community Edition Of Liferay",
    href: "https://marketplace.liferay.com/p/email-otp-authentication-for-community-edition-of-liferay",
    icon: "/images/mega-menu/marketplace-e3.png",
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
      <div className="global-container mx-auto w-full px-4 py-10 md:px-8">
        <div className="flex w-full justify-between gap-[5.21vw]">
          {/* Left Group (Solutions & Integrations) */}
          <div className="flex gap-[5.21vw]">
            <div>
              <h4 className="mb-9">
                Solutions
              </h4>
              <ul className="space-y-6">
                {solutionsLinks.map((link, index) => (
                  <li key={`sol-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-5 text-white p20"
                    >
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="h-10 w-10 flex-shrink-0 rounded-lg bg-white [@media(min-width:1440px)]:h-12 [@media(min-width:1440px)]:w-12 [@media(min-width:1536px)]:h-[52px] [@media(min-width:1536px)]:w-[52px] [@media(min-width:1920px)]:h-[60px] [@media(min-width:1920px)]:w-[60px]"
                      />
                      {/* CHANGE: Removed whitespace-pre and used dangerouslySetInnerHTML for line breaks */}
                      <span className="max-w-[160px] whitespace-wrap" dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-9">
                Integrations
              </h4>
              <ul className="space-y-6">
                {integrationsLinks.map((link, index) => (
                  <li key={`int-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-5 text-white p20"
                      onClick={onClose}
                    >
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
              <h4 className="mb-9">
                Liferay Marketplace
              </h4>
              <ul className="space-y-6">
                {marketplaceLinks.map((link, index) => (
                  <li key={`mp-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-5 text-white p20"
                    >
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
            <div>
              <h4 className="mb-9">
                Liferay + AI
              </h4>
              <ul className="space-y-6">
                {aiLinks.map((link, index) => (
                  <li key={`ai-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-5 text-white p20"
                    >
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
