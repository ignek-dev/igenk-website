// components/BottomBar.tsx

import { footerLegalLinksData } from "data/Footer"
import Link from "next/link"
import Image from "next/image"
import React from "react"

const socialIcons = [
  { name: "X", path: "/images/icon/twitter.png", alt: "X (formerly Twitter)", href: "https://x.com/ignekinfotech" }, // Placeholder for X
  { name: "Facebook", path: "/images/icon/facebook.png", alt: "Facebook", href: "https://www.facebook.com/ignekinfo/" }, // Placeholder for Facebook
  {
    name: "LinkedIn",
    path: "/images/icon/linkedIn.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/ignek-infotech/about/",
  }, // Placeholder for LinkedIn
  { name: "YouTube", path: "/images/icon/youtube.png", alt: "YouTube", href: "https://www.youtube.com/@ignek6023" }, // Placeholder for YouTube
]

const BottomBar: React.FC = () => {
  return (
    <div
      className="global-container mx-auto w-full bg-[#121212] px-4.5 py-7.5 md:px-[0.833vw] md:py-[1.25vw]"
    >
      <div className="flex flex-col items-center text-center">
        {/* Main Section: Copyright, Links and Social */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-[12.5vw]">
          {/* Left Section: Copyright and Legal Links */}
          <div className="flex flex-col items-center gap-4 text-white md:flex-row md:gap-[0.833vw]">
            <p className="flex-shrink-0 text-p14 md:text-p16 lg:text-p18">
              {footerLegalLinksData.copyright}
            </p>
            <div 
              className="flex flex-col items-center gap-y-2 md:flex-col lg:flex-row md:gap-x-[0.469vw] md:gap-y-0 text-p14 md:text-p16 lg:text-p18 whitespace-nowrap"
            >
              {/* Group 1: Privacy Policy & Terms & Conditions */}
              <div className="flex items-center gap-x-[2vw] md:gap-x-[0.469vw]">
                {footerLegalLinksData.links.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                    <span className="ml-[2vw] text-white md:ml-[0.469vw]">|</span>
                  </div>
                ))}
              </div>

              {/* Group 2: Cookies Policy & Map */}
              <div className="flex items-center gap-x-[2vw] md:gap-x-[0.469vw]">
                {footerLegalLinksData.links.slice(2).map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>

                    {/* Add separator except after the very last item */}
                    {index === 0 && (
                      <span className="ml-[2vw] text-white md:ml-[0.469vw]">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex  items-center gap-6 md:gap-[1.6vw]">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                aria-label={`Visit our ${icon.name} page`}
                className="flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.path}
                  alt={`Ignek on ${icon.name}`}
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain transition-transform duration-200 hover:scale-110 md:h-[1.875vw] md:w-[1.875vw]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
