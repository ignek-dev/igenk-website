"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
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
  // { label: "Portfolio", href: "/portfolio" },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname() // Get the current path
  const isCareerPage = pathname === "/career" // Check if it's the career page
  const isAboutUsPage = pathname === '/about-us'
  const isConsultingPage = pathname === "/services/liferay-consulting-and-implementation-services"
  const isHireDeveloperPage = pathname === "/services/liferay-hire-developer"
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const router = useRouter();

  const isBluePage = isConsultingPage || isHireDeveloperPage;

  const closeMenu = () => setActiveMenu(null)

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label)
    setIsHeaderHovered(true)
  }
  const handleMouseLeave = () => setActiveMenu(null)
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // when scrolled 50px from top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const backgroundClass = isHeaderHovered
    ? "bg-black"
    : isScrolled
      ? "bg-black sticky"
      : isCareerPage || isAboutUsPage
        ? "bg-transparent"
        : isConsultingPage || isHireDeveloperPage
          ? "bg-[#0B63CE]"
          : "bg-black"

  const buttonInnerColor =
    isHeaderHovered || isScrolled
      ? "#000"
      : isCareerPage
      ? "transparent" 
      : isBluePage
      ? "#0B63CE"
      : "#000";

  return (
    <>
      {activeMenu === null ? (
        <header
          className={`absolute top-0 z-1000 w-full text-white transition-colors duration-300 ${
            isCareerPage || isAboutUsPage || isConsultingPage || isHireDeveloperPage ? "absolute top-0" : "relative"
          } ${backgroundClass}`}
          // onMouseEnter={() => setIsHeaderHovered(true)}
          onMouseLeave={() => {
            handleMouseLeave()
            setIsHeaderHovered(false)
          }}
        >
          {!isCareerPage && !isAboutUsPage && !isConsultingPage && !isHireDeveloperPage && (
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_35%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
          )}{" "}
          <nav className="global-container mx-auto flex w-full items-center px-4 py-6.5 md:px-8">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image
                src="/images/logo.svg"
                alt="Ignek logo"
                width={182}
                height={86}
                priority
                className="logo-responsive"
              />
            </Link>

            <div className="flex-1" />

            <ul className="mr-6 hidden items-center gap-10 text-lg tracking-wide uppercase md:flex">
              {menu.map((item) => (
                <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
                  <a
                    href={item.href}
                    className={`pb-2 transition-colors [@media(min-width:1440px)]:text-xl [@media(min-width:1920px)]:text-2xl ${
                      activeMenu === item.label ? "text-white" : "text-white/90"
                    } hover:text-white`}
                  >
                    {item.label}
                  </a>
                  {/* Active state bottom border */}
                  {activeMenu === item.label && (
                    <div
                      className="absolute bottom-0 left-0 h-[3px] w-full"
                      style={{ backgroundColor: "#00979E" }}
                    ></div>
                  )}
                </li>
              ))}
            </ul>

            <div className="z-10 flex items-center gap-4.5">
              <CalendlyButton buttonColor={buttonInnerColor} />
              <Tooltip text="Contact Us">
                <div className="nav-fancy-button">
                  <div
                    className="nav-fancy-glow"
                    style={{ "--button-bg-color": buttonInnerColor } as React.CSSProperties}
                  ></div>
                  <button
                    type="button"
                    aria-label="Contact-Us"
                    className="nav-round-btn cursor-pointer"
                    onClick={() => router.push("/contact")}
                  >
                    <div className="nav-round-btn-inner cursor-pointer">
                      <Image src="/images/icon/arrow-tr.png" alt="arrow-top-right" width={28} height={28} />
                    </div>
                  </button>
                </div>
              </Tooltip>
            </div>
          </nav>
        </header>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMenu}
            initial={{ opacity: 1, y: -300 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`top-0 left-0 z-50 w-full overflow-hidden rounded-b-[80px] border-t border-white/10 bg-black text-white shadow-2xl ${
              isScrolled ? "sticky" : "absolute"
            }`}
          >
            <header
              className={`w-full text-white transition-colors duration-300 ${
                // Force black bg when menu is open to blend with the dropdown container
                "bg-black"
              }`}
              onMouseEnter={() => setIsHeaderHovered(true)}
              onMouseLeave={() => {
                handleMouseLeave()
                setIsHeaderHovered(false)
              }}
            >
              {!isCareerPage && !isAboutUsPage && !isConsultingPage && !isHireDeveloperPage && (
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_35%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
              )}{" "}
              <nav className="global-container mx-auto flex w-full items-center px-4 py-6 md:px-8">
                <Link href="/" className="flex items-center gap-3" aria-label="Home">
                  <Image
                    src="/images/logo.svg"
                    alt="Ignek logo"
                    width={182}
                    height={86}
                    priority
                    className="logo-responsive"
                  />
                </Link>

                <div className="flex-1" />

                <ul className="mr-6 hidden items-center gap-10 text-lg tracking-wide uppercase md:flex">
                  {menu.map((item) => (
                    <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
                      <a
                        href={item.href}
                        className={`pb-2 transition-colors [@media(min-width:1440px)]:text-xl [@media(min-width:1920px)]:text-2xl ${
                          activeMenu === item.label ? "text-white" : "text-white/90"
                        } hover:text-white`}
                      >
                        {item.label}
                      </a>
                      {/* Active state bottom border */}
                      {activeMenu === item.label && (
                        <div
                          className="absolute bottom-0 left-0 h-[3px] w-full"
                          style={{ backgroundColor: "#00979E" }}
                        ></div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <CalendlyButton buttonColor={buttonInnerColor} />
                  <Tooltip text="Contact Us">
                    <div className="nav-fancy-button">
                      <div className="nav-fancy-glow"></div>
                      <button
                        type="button"
                        aria-label="Contact-Us"
                        className="nav-round-btn"
                      onClick={() => router.push("/contact")}
                    >
                      <div className="nav-round-btn-inner cursor-pointer">
                        <Image src="/images/icon/arrow-tr.png" alt="arrow-top-right" width={46} height={46} />
                      </div>
                    </button>
                  </div>
                  </Tooltip>
                </div>
              </nav>
              {activeMenu === "Company" && <CompanyMegaMenu onClose={closeMenu} />}
              {activeMenu === "Insights" && <InsightsMegaMenu onClose={closeMenu} />}
              {activeMenu === "Services" && <ServicesMegaMenu onClose={closeMenu} />}
              {activeMenu === "Solutions" && <SolutionsMegaMenu onClose={closeMenu} />}
            </header>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
