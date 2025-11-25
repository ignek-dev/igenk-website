// components/BottomBar.tsx

import Image from "next/image"
import React from "react"

const socialIcons = [
  { name: "X", path: "/images/icon/twitter.png", alt: "X (formerly Twitter)", href: "https://x.com/ignekinfotech" }, // Placeholder for X
  { name: "Facebook", path: "/images/icon/facebook.png", alt: "Facebook", href: "https://www.facebook.com/ignekinfo/" }, // Placeholder for Facebook
  { name: "LinkedIn", path: "/images/icon/linkedIn.png", alt: "LinkedIn", href: "https://www.linkedin.com/company/ignek-infotech/about/", }, // Placeholder for LinkedIn
  { name: "YouTube", path: "/images/icon/youtube.png", alt: "YouTube", href: "https://www.youtube.com/@ignek6023" }, // Placeholder for YouTube
]

const BottomBar: React.FC = () => {
  return (
    <div className="mx-auto w-full bg-[#121212] px-4 py-6 md:px-8">
      <div className="mx-auto flex flex-col items-center gap-6 text-center md:flex-row md:justify-center">
        {/* Left Section: Copyright and Legal Links */}
        <div className="flex w-full max-w-screen-xl items-center justify-between">
          <div className="flex flex-col items-center gap-4 text-lg text-white md:flex-row md:items-center">
            <p className="flex-shrink-0">©2025 IGNEK. All rights reserved</p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
              <a href="/contact" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/contact" className="transition-colors hover:text-white">
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="/contact" className="transition-colors hover:text-white">
                Cookies Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/contact" className="transition-colors hover:text-white">
                Map
              </a>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.href} aria-label={icon.name} className="flex-shrink-0" target="blank">
                <Image src={icon.path} alt={icon.alt} width={36} height={36} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
