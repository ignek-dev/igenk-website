"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import CalendlyButton from "components/CalendlyPopupButton/CalendlyButton"
import CompanyMegaMenu from "components/Navigation/CompanyMegaMenu"
import InsightsMegaMenu from "components/Navigation/InsightsMegaMenu"
import ServicesMegaMenu from "components/Navigation/ServicesMegaMenu"
import SolutionsMegaMenu from "components/Navigation/SolutionsMegaMenu"
import Tooltip from "components/UI/Tooltip"

const menu = [
  { label: "Company", href: "#" },
  { label: "Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Insights", href: "#" },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname() // Get the current path
  const router = useRouter();

  // Ref to the navbar to calculate the "Safe Zone" boundaries dynamically
  const navRef = useRef<HTMLElement>(null)

  const isCareerPage = pathname === "/career" // Check if it's the career page
  const isAboutUsPage = pathname === '/about-us'
  const isConsultingPage = pathname === "/services/liferay-consulting-and-implementation-services"
  const isHireDeveloperPage = pathname === "/services/liferay-hire-developer"
  const isBluePage = isConsultingPage || isHireDeveloperPage;

  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // when scrolled 50px from top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setActiveMenu(null)
    setIsHeaderHovered(false)
  }

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label)
    setIsHeaderHovered(true)
  }
// Closes menu when mouse leaves the entire HEADER container (Nav + MegaMenu)
  const handleHeaderLeave = () => {
    setActiveMenu(null)
    setIsHeaderHovered(false)
  }

  // --- NEW: Logic to handle hovering inside the drawer ---
  const handleDrawerMouseMove = (e: React.MouseEvent) => {
    if (!navRef.current) return

    // 1. Get the computed style of the nav to find the exact padding size
    // This accounts for the 10vw padding set by .global-container
    const style = window.getComputedStyle(navRef.current)
    const paddingLeft = parseFloat(style.paddingLeft) || 0
    const paddingRight = parseFloat(style.paddingRight) || 0
    const navWidth = navRef.current.offsetWidth

    // 2. Define the "Safe Zone" (The content area between the paddings)
    // If mouse X is less than left padding OR greater than (width - right padding), 
    // it means we are in the "X" zone (the empty sides).
    if (e.clientX < paddingLeft || e.clientX > (navWidth - paddingRight)) {
      closeMenu() // Close immediately if in the gutters
    } else {
      setIsHeaderHovered(true) // Keep open if in the content center
    }
  }

  // --- FIX: Dynamic Position Logic ---
  // If it's a special page (Career/About), use 'absolute' to overlay content.
  // Otherwise (Home), use 'sticky' so it takes up space and pushes the Hero down.
  const positionClass = (isCareerPage || isAboutUsPage || isBluePage) 
    ? "absolute top-0" 
    : "sticky top-0"

// Determine Background Colors
  const backgroundClass = activeMenu
    ? "bg-black" // Force black when menu is open so it blends
    : isHeaderHovered
    ? "bg-black"
    : isScrolled
    ? "bg-black"
    : isCareerPage || isAboutUsPage
    ? "bg-transparent"
    : isBluePage
    ? "bg-[#0B63CE]"
    : "bg-black"

  const buttonInnerColor =
    activeMenu || isHeaderHovered || isScrolled
      ? "#000"
      : isCareerPage
      ? "transparent"
      : isBluePage
      ? "#0B63CE"
      : "#000"

  return (
    <header
      className={`${positionClass} z-1000 w-full text-white transition-colors duration-300 ${backgroundClass}`}
      // onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={handleHeaderLeave}
    >
      {/* Background Gradient for specific pages when menu is closed */}
      {!activeMenu && !isCareerPage && !isAboutUsPage && !isConsultingPage && !isHireDeveloperPage && (
        <div className="pointer-events-none absolute inset-0 -z-100 bg-[radial-gradient(800px_circle_at_35%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
      )}

      <nav
        ref={navRef}
        className="global-container relative z-20 mx-auto flex w-full items-center bg-inherit px-4 py-6.5 md:px-8"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image src="/images/logo.svg" alt="Ignek logo" width={182} height={86} priority className="logo-responsive" />
        </Link>
        <div className="flex-1" />

        <ul className="mr-6 hidden items-center gap-[1.875vw] text-[1.25vw] leading-[1.94vw] font-normal tracking-wide uppercase md:flex">
          {menu.map((item) => (
            <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative h-full">
              <a
                href={item.href}
                className={`block px-[0.5vw] py-[0.4vw] transition-colors ${
                  activeMenu === item.label ? "text-white" : "text-white/90"
                } hover:text-white`}
              >
                <span className="relative inline-block">
                  {item.label}

                  {activeMenu === item.label && (
                    <span
                      className="absolute left-0 w-full"
                      style={{
                        bottom: "-0.2vw",
                        height: "0.156vw",
                        backgroundColor: "#00979E",
                      }}
                    />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4.5">
          <CalendlyButton buttonColor={buttonInnerColor} />
          <Tooltip text="Contact Us">
            <div className="rounded-full border border-[#00979E] transition-colors hover:bg-white/10">
              <div className="" style={{ "--button-bg-color": buttonInnerColor } as React.CSSProperties}></div>
              <button
                type="button"
                aria-label="Contact-Us"
                className="nav-round-btn cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                <div className="nav-round-btn-inner cursor-pointer">
                  <Image src="/images/icon/arrow-tr.png" alt="arrow-top-right" width={24} height={24} />
                </div>
              </button>
            </div>
          </Tooltip>
        </div>
      </nav>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key="mega-menu-drawer"
            initial={{ opacity: 1, y: -300 }}
            // whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -300 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-full left-0 z-10 w-full overflow-hidden rounded-b-[80px] bg-black shadow-2xl"
            // --- FIX: Logic to close menu when hovering the "X" (Void) areas ---
            onMouseMove={handleDrawerMouseMove}
          >
            {activeMenu === "Company" && <CompanyMegaMenu onClose={closeMenu} />}
            {activeMenu === "Insights" && <InsightsMegaMenu onClose={closeMenu} />}
            {activeMenu === "Services" && <ServicesMegaMenu onClose={closeMenu} />}
            {activeMenu === "Solutions" && <SolutionsMegaMenu onClose={closeMenu} />}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
