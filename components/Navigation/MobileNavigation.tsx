import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CompanyMobileMegaMenu from "./CompanyMobileMegaMenu"
import ServicesMobileMegaMenu from "./ServicesMobileMegaMenu"
import SolutionsMobileMegaMenu from "./SolutionsMobileMegaMenu"
import InsightsMobileMegaMenu from "./InsightsMobileMegaMenu"

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "Company", href: "#", hasSubMenu: true },
  { label: "Services", href: "#", hasSubMenu: true },
  { label: "Solutions", href: "#", hasSubMenu: true },
  { label: "Insights", href: "#", hasSubMenu: true },
]

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  if (!isOpen) return null

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.hasSubMenu) {
      setActiveSubMenu(item.label)
    } else {
      onClose()
    }
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-0 z-1001 flex flex-col bg-black text-white overflow-hidden"
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-6.5 shrink-0">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/logo.svg"
              alt="Ignek logo"
              width={100}
              height={40}
              priority
              className="w-[124px] h-auto"
            />
          </Link>
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 mt-8 space-y-6">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => handleItemClick(item)}
              className="flex items-center justify-between py-2 border-b border-white/10 cursor-pointer"
            >
              <span className="text-p24 font-medium uppercase">{item.label}</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <Image src="/images/icon/arrow-tr.png" alt="arrow" width={16} height={16} className={item.hasSubMenu ? "" : "rotate-45"} />
              </div>
            </div>
          ))}
        </nav>

        <div className="flex flex-col px-6 mt-12 mb-12 space-y-10 text-center">
          {/* Emails Section */}
          <div className="space-y-4">
            <h3 className="text-p18 font-semibold uppercase tracking-wider text-white/50">Emails</h3>
            <div className="space-y-2">
              <div>
                <p className="text-p20 font-medium">sales@ignek.com</p>
                <p className="text-p14 text-white/60">(For sales inquiry)</p>
              </div>
              <div>
                <p className="text-p20 font-medium">Hr@ignek.com</p>
                <p className="text-p14 text-white/60">(For hiring inquiry)</p>
              </div>
            </div>
          </div>

          {/* Call Section */}
          <div className="space-y-4">
            <h3 className="text-p18 font-semibold uppercase tracking-wider text-white/50">Call</h3>
            <div className="space-y-2">
              <div>
                <p className="text-p20 font-medium">(+91) 635 157 6580</p>
                <p className="text-p14 text-white/60">(For sales inquiry)</p>
              </div>
              <div>
                <p className="text-p20 font-medium">(+91) 932 849 5160</p>
                <p className="text-p14 text-white/60">(For hiring inquiry)</p>
              </div>
            </div>
          </div>

          {/* Office Section */}
          <div className="space-y-4">
            <h3 className="text-p18 font-semibold uppercase tracking-wider text-white/50">Office</h3>
            <p className="text-p16 leading-relaxed">
              E 910-912, Ganesh Glory 11, Jagatpur Road, SG Highway, Ahmedabad, Gujarat – 382470
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeSubMenu === "Company" && (
          <CompanyMobileMegaMenu
            key="company-submenu"
            onBack={() => setActiveSubMenu(null)}
            onClose={onClose}
          />
        )}
        {activeSubMenu === "Services" && (
          <ServicesMobileMegaMenu
            key="services-submenu"
            onBack={() => setActiveSubMenu(null)}
            onClose={onClose}
          />
        )}
        {activeSubMenu === "Solutions" && (
          <SolutionsMobileMegaMenu
            key="solutions-submenu"
            onBack={() => setActiveSubMenu(null)}
            onClose={onClose}
          />
        )}
        {activeSubMenu === "Insights" && (
          <InsightsMobileMegaMenu
            key="insights-submenu"
            onBack={() => setActiveSubMenu(null)}
            onClose={onClose}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

