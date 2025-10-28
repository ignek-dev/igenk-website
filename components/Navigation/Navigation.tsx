"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import CompanyMegaMenu from "components/Navigation/CompanyMegaMenu";
import InsightsMegaMenu from "components/Navigation/InsightsMegaMenu";
import ServicesMegaMenu from "components/Navigation/ServicesMegaMenu";
import SolutionsMegaMenu from "components/Navigation/SolutionsMegaMenu";
import { usePathname } from "next/navigation"; // Import usePathname hook



const menu = [
  { label: "Company", href: "#" },
  { label: "Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Insights", href: "#" },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname(); // Get the current path
  const isCareerPage = pathname === '/career' || pathname === '/life-at-ignek'; // Check if it's the career page
   console.log("Current activeMenu:", activeMenu);

   const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const handleMouseEnter = (label: string) => {
      setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const backgroundClass = isCareerPage && !isHeaderHovered ? 'bg-transparent' : 'bg-black';

  return (
    <header
      className={`z-50 w-full text-white transition-colors duration-300 ${isCareerPage ? 'absolute top-0' : 'relative'} ${backgroundClass}`}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHeaderHovered(false);
      }}
    >
      {!isCareerPage && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
      )}{" "}
      <nav className="mx-auto flex w-full items-center px-4 py-6.5 md:px-6 [@media(min-width:1440px)]:px-[193px] [@media(min-width:1920px)]:px-[192px]">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image src="/images/logo.svg" alt="Ignek logo" width={182} height={86} priority />
        </Link>

        <div className="flex-1" />

        <ul className="mr-6 hidden items-center gap-10 text-lg tracking-wide uppercase md:flex">
          {menu.map((item) => (
            <li key={item.label} onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
              <a
                href={item.href}
                className={`pb-2 transition-colors ${
                  activeMenu === item.label ? "text-white" : "text-white/90"
                } hover:text-white`}
              >
                {item.label}
              </a>
              {/* Active state bottom border */}
              {activeMenu === item.label && (
                <div className="absolute bottom-0 left-0 h-[3px] w-full" style={{ backgroundColor: "#00979E" }}></div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Calendar"
            className="rounded-full border border-[#00979E] p-2 text-white/80 transition-colors hover:border-[#00979E] hover:text-white"
          >
            <div className="flex h-7 w-7 items-center justify-center">
              <img src="/images/icon/calendar.png" alt="calendar" className="max-h-full max-w-full" />
            </div>
          </button>
          <button
            type="button"
            aria-label="Go"
            className="rounded-full border border-[#00979E] p-2 text-white/80 transition-colors hover:border-[#00979E] hover:text-white"
          >
            <div className="flex h-7 w-7 items-center justify-center">
              <img src="/images/icon/arrow-tr.png" alt="arrow-top-right" className="max-h-full max-w-full" />
            </div>
          </button>
        </div>
      </nav>
      {activeMenu === "Company" && <CompanyMegaMenu />}
      {activeMenu === "Insights" && <InsightsMegaMenu />}
      {activeMenu === "Services" && <ServicesMegaMenu />}
      {activeMenu === "Solutions" && <SolutionsMegaMenu />}
    </header>
  )
}