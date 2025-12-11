// components/BottomBar.tsx

import { footerLegalLinksData } from "data/Footer"
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
      className="global-container mx-auto w-full bg-[#121212]"
      style={{
        paddingLeft: "0.833vw", // px-4 →
        paddingRight: "0.833vw",
        paddingTop: "1.25vw", // py-6 →
        paddingBottom: "1.25vw",
      }}
    >
      <div className="flex flex-col items-center gap-[1.25vw] text-center md:flex-row">
        {/* Left Section: Copyright and Legal Links */}
        <div className="flex items-center" style={{ gap: "12.5vw" }}>
          <div className="p18 flex flex-col gap-[0.833vw] text-white md:flex-row">
            <p className="flex-shrink-0">{footerLegalLinksData.copyright}</p>
            <div className="flex flex-wrap justify-center" style={{ columnGap: "0.469vw", rowGap: "0.208vw" }}>
              {footerLegalLinksData.links.map((item, index) => (
        <div key={index} className="flex items-center">
          <a href={item.href} className="transition-colors hover:text-white">
            {item.label}
          </a>

          {/* Add separator except after last item */}
          {index !== footerLegalLinksData.links.length - 1 && (
            <span className="text-white mx-[0.2vw]">|</span>
          )}
        </div>
      ))}
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex items-center" style={{ gap: "1.6vw" }}>
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.href} aria-label={icon.name} className="flex-shrink-0" target="blank">
                <Image
                  src={icon.path}
                  alt={icon.alt}
                  width={36}
                  height={36}
                  className="object-contain transition-transform duration-200 hover:scale-110"
                  style={{
                    width: "1.875vw",
                    height: "1.875vw",
                  }}
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
