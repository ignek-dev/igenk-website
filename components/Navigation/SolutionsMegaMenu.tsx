// components/SolutionsMegaMenu.tsx
// --- Data for the Mega Menu ---
import Image from "next/image"
import Link from "next/link"
// const iconUrl = "/images/mega-menu/solution-e1.png"

const solutionsLinks = [
  { text: "Enterprise Websites", href: "/contact", icon: "/images/mega-menu/solution-e1.png" },
  { text: "Employee Experience", href: "/contact", icon: "/images/mega-menu/solution-e2.png" },
  { text: "Digital Commerce", href: "/contact", icon: "/images/mega-menu/solution-e3.png" },
  { text: "Partner Experience", href: "/contact", icon: "/images/mega-menu/solution-e4.png" },
  { text: "Supplier Experience", href: "/contact", icon: "/images/mega-menu/solution-e5.png" },
  { text: "Customer Experience", href: "/contact", icon: "/images/mega-menu/solution-e6.png" },
]

const integrationsLinks = [
  { text: "Matomo Integration with Liferay", href: "/blog/35704", icon: "/images/mega-menu/Integartion-e1.png" },
  { text: "Microsoft Teams Integration with Liferay", href: "/blog/2379", icon: "/images/mega-menu/Integration-e2.png" },
  { text: "Jira Integration with Liferay", href: "/blog/21796", icon: "/images/mega-menu/Integration-e3.png" },
  { text: "Twilio Integration with Liferay", href: "/blog/29103", icon: "/images/mega-menu/Integration-e4.png" },
  { text: "ZOOM Integration with Liferay", href: "/blog/18883", icon: "/images/mega-menu/Integration-e5.png" },
  { text: "Sonar Integration with Liferay", href: "/blog/17663", icon: "/images/mega-menu/Integration-e6.png" },
]

const marketplaceLinks = [
  { text: "AI Blog Workspace", href: "https://marketplace.liferay.com/p/ai-blog-workspace", icon: "/images/mega-menu/marketplace-e1.png" },
  { text: "Batch Client Extension Generator", href: "https://marketplace.liferay.com/p/batch-client-extension-generator", icon: "/images/mega-menu/marketplace-e2.png" },
  { text: "Email OTP Authentication for Community Edition Of Liferay", href: "https://marketplace.liferay.com/p/email-otp-authentication-for-community-edition-of-liferay", icon: "/images/mega-menu/marketplace-e3.png" },
]

const aiLinks = [
  {
    text: "Cognitive Virtual Assistants for Enterprise Experiences",
    href: "/contact",
    icon: "/images/mega-menu/liferay-ai-1.png",
  },
  { text: "AI-Driven Personalization & Engagement", href: "/contact", icon: "/images/mega-menu/liferay-ai-2.png" },
  { text: "Intelligent Search & Knowledge Discovery", href: "/contact", icon: "/images/mega-menu/liferay-ai-3.png" },
  { text: "Autonomous Workflow Optimization", href: "/contact", icon: "/images/mega-menu/liferay-ai-4.png" },
  { text: "Predictive Business Intelligence", href: "/contact", icon: "/images/mega-menu/liferay-ai-5.png" },
  { text: "AI-Enhanced Document Intelligence", href: "/contact", icon: "/images/mega-menu/liferay-ai-6.png" },
]

// --- Main SolutionsMegaMenu Component ---
export default function SolutionsMegaMenu() {
  return (
    <>
      <div className="mx-auto w-full px-4 py-12 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
        <div className="flex w-full justify-between gap-18">
          {/* Left Group (Solutions & Integrations) */}
          <div className="flex gap-x-8 [@media(min-width:1440px)]:gap-x-14">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Solutions</h3>
              <ul className="space-y-4">
                {solutionsLinks.map((link, index) => (
                  <li key={`sol-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 text-lg text-white/100 transition-colors hover:text-white"
                    >
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="flex-shrink-0 rounded-lg bg-[#FFFFFF]"
                      />
                      {/* CHANGE: Removed whitespace-pre and used dangerouslySetInnerHTML for line breaks */}
                      <span dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Integrations</h3>
              <ul className="space-y-4">
                {integrationsLinks.map((link, index) => (
                  <li key={`int-${index}`}>
                   <Link
                      href={link.href}
                      className="flex items-center gap-4 text-lg text-white/100 transition-colors hover:text-white"
                    >
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="flex-shrink-0 rounded-lg"
                      />
                      <span dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-x-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Liferay Marketplace</h3>
              <ul className="space-y-4">
                {marketplaceLinks.map((link, index) => (
                  <li key={`mp-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 text-lg text-white/100 transition-colors hover:text-white"
                    >
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="flex-shrink-0 rounded-lg"
                      />
                      <span dangerouslySetInnerHTML={{ __html: link.text }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Liferay + AI</h3>
              <ul className="space-y-4">
                {aiLinks.map((link, index) => (
                  <li key={`ai-${index}`}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 text-lg text-white/100 transition-colors hover:text-white"
                    >
                      <Image
                        src={link.icon}
                        alt={link.text}
                        width={60}
                        height={60}
                        className="flex-shrink-0 rounded-lg bg-[#FFFFFF]"
                      />{" "}
                      <span dangerouslySetInnerHTML={{ __html: link.text }} />
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
