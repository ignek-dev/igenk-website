"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import CompanyMegaMenu from "components/Navigation/CompanyMegaMenu";
import InsightsMegaMenu from "components/Navigation/InsightsMegaMenu";
import ServicesMegaMenu from "components/Navigation/ServicesMegaMenu";
import SolutionsMegaMenu from "components/Navigation/SolutionsMegaMenu";




const menu = [
  { label: "Company", href: "#" },
  { label: "Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Insights", href: "#" },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
   console.log("Current activeMenu:", activeMenu);

  const handleMouseEnter = (label: string) => {
      setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <header className="relative w-full bg-black text-white" onMouseLeave={handleMouseLeave}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-20" />
      <nav className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-6 flex items-center">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image src="/images/logo.svg" alt="Ignek logo" width={182} height={86} priority />
        </Link>

        <div className="flex-1" />

        <ul className="hidden md:flex items-center gap-10 text-lg tracking-wide mr-6 uppercase">
          {menu.map((item) => (
            <li key={item.label}  onMouseEnter={() => handleMouseEnter(item.label)} className="relative">
               <a 
                href={item.href} 
                className={`transition-colors pb-2 ${activeMenu === item.label ? 'text-white' : 'text-white/90'} hover:text-white`}
              >
                {item.label}
              </a>
              {/* Active state bottom border */}
              {activeMenu === item.label && (
                <div 
                  className="absolute bottom-0 left-0 w-full h-[3px]"
                  style={{ backgroundColor: '#00979E' }}
                ></div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Calendar"
            className="rounded-full border border-[#00979E] p-2 text-white/80 hover:text-white hover:border-[#00979E] transition-colors"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <img src="/images/icon/calendar.png" alt="calendar" className="max-w-full max-h-full" />
            </div>
          </button>
          <button
            type="button"
            aria-label="Go"
            className="rounded-full border border-[#00979E] p-2 text-white/80 hover:text-white hover:border-[#00979E] transition-colors"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <img src="/images/icon/arrow-tr.png" alt="arrow-top-right" className="max-w-full max-h-full" />
            </div>
          </button>
        </div>
      </nav>

      {activeMenu === 'Company' && <CompanyMegaMenu />}
      {activeMenu === 'Insights' && <InsightsMegaMenu />}
       {activeMenu === 'Services' && <ServicesMegaMenu />}
       {activeMenu === 'Solutions' && <SolutionsMegaMenu />}
    </header>
  )
}