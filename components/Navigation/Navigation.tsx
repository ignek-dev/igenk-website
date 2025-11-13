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
  const isAboutUsPage = pathname === '/about'
  const isConsultingPage = pathname === "/services/liferay-consulting-and-implementation-services"
  const isHireDeveloperPage = pathname === "/services/liferay-hire-developer"
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const router = useRouter();

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

  return (
    <>
      {activeMenu === null ? (
        <header
          className={`absolute top-0 z-1000 w-full text-white transition-colors duration-300 ${isCareerPage || isAboutUsPage || isConsultingPage || isHireDeveloperPage ? "absolute top-0" : "relative"
            } ${backgroundClass}`}
          // onMouseEnter={() => setIsHeaderHovered(true)}
          onMouseLeave={() => {
            handleMouseLeave()
            setIsHeaderHovered(false)
          }}
        >
          {!isCareerPage && !isAboutUsPage && (
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
          )}{" "}
          <nav className="mx-auto flex w-full items-center px-4 py-6.5 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image src="/images/logo.svg" alt="Ignek logo" width={182} height={86} priority />
            </Link>

            <div className="flex-1" />

            <ul className="mr-6 hidden items-center gap-10 text-lg tracking-wide uppercase md:flex">
              {menu.map((item) => (
                <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
                  <a
                    href={item.href}
                    className={`pb-2 transition-colors ${activeMenu === item.label ? "text-white" : "text-white/90"
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

            <div className="flex items-center gap-4 z-10"
            >
              {/* <button
                type="button"
                aria-label="Calendar"
                className="rounded-full border border-[#00979E] p-2 text-white/80 transition-colors hover:border-[#00979E] hover:text-white"
              >
                <div className="flex h-7 w-7 items-center justify-center cursor-pointer">
                  <Image src="/images/icon/calendar.png" alt="calendar" width={24} height={24} />
                </div>
              </button> */}
              <CalendlyButton />
              <button
                type="button"
                aria-label="Go"
                className="rounded-full border border-[#00979E] p-2 text-white/80 transition-colors hover:border-[#00979E] hover:text-white"
                onClick={() => router.push("/contact")}

              >
                <div className="flex h-7 w-7 items-center justify-center cursor-pointer">
                  <Image src="/images/icon/arrow-tr.png" alt="arrow-top-right" width={24} height={24} />
                </div>
              </button>
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
            transition={{ duration: 1.5 }}
            className={`top-0 left-0 z-50 w-full border-t border-white/10 bg-black text-white ${isScrolled ? "sticky" : "absolute"}`}
          >
            <header
              className={`w-full text-white transition-colors duration-300 ${isCareerPage || isAboutUsPage || isConsultingPage || isHireDeveloperPage ? "absolute top-0" : "relative"
                } ${backgroundClass}`}
              onMouseEnter={() => setIsHeaderHovered(true)}
              onMouseLeave={() => {
                handleMouseLeave()
                setIsHeaderHovered(false)
              }}
            >
              {!isCareerPage && !isAboutUsPage && (
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
              )}{" "}
              <nav className="mx-auto flex w-full items-center px-4 py-6 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
                <Link href="/" className="flex items-center gap-3" aria-label="Home">
                  <Image src="/images/logo.svg" alt="Ignek logo" width={182} height={86} priority />
                </Link>

                <div className="flex-1" />

                <ul className="mr-6 hidden items-center gap-10 text-lg tracking-wide uppercase md:flex">
                  {menu.map((item) => (
                    <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
                      <a
                        href={item.href}
                        className={`pb-2 transition-colors ${activeMenu === item.label ? "text-white" : "text-white/90"
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
                  <CalendlyButton />
                  <button
                    type="button"
                    aria-label="Go"
                    className="rounded-full border border-[#00979E] p-2 text-white/80 transition-colors hover:border-[#00979E] hover:text-white"
                    onClick={() => router.push("/contact")}

                  >
                    <div className="flex h-7 w-7 items-center justify-center cursor-pointer">
                      <Image src="/images/icon/arrow-tr.png" alt="arrow-top-right" width={24} height={24} />
                    </div>
                  </button>
                </div>
              </nav>
              {activeMenu === "Company" && <CompanyMegaMenu />}
              {activeMenu === "Insights" && <InsightsMegaMenu />}
              {activeMenu === "Services" && <ServicesMegaMenu />}
              {activeMenu === "Solutions" && <SolutionsMegaMenu />}
            </header>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
