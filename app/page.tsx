import { Metadata } from "next"
import Image from "next/image"

import Achievements from "components/Achievements/Achievements"
import HeroCTASection from "components/Common/HeroCTASection"
import { ScrollContextProvider } from "components/Common/ScrollContextProvider"
import EndToEndSection from "components/EndToEndSection/EndToEndSection"
import FlexiblePlatforms from "components/FlexiblePlatforms/FlexiblePlatforms"
import IntermediateFrame from "components/IntermediateFrame"
import OurCapabilities from "components/OurCapabilities/OurCapabilities"
import RatingsSection from "components/Ratings/RatingsSection"
import SuccessStories from "components/success-stories/SuccessStories"
import WhatWeBring from "components/WhatWeBring/WhatWeBring"
import { partners } from "data/homepage-content"
import { BlogSection } from "../components/Common"


export const metadata: Metadata = {
  title: "Ignek - Transform Your Digital Experience",
  description:
    "Leading digital transformation company providing cutting-edge solutions for modern businesses. Transform your digital experience with Ignek today.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ignek.com/",
    title: "Ignek - Transform Your Digital Experience",
    description: "Leading digital transformation company providing cutting-edge solutions for modern businesses.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <main className="">
      <section className="relative overflow-hidden bg-black text-white">
        {/* Top-left subtle radial gradient using provided colors */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#00979E] opacity-20 blur-[100px]" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#0E7BF8] opacity-15 blur-[100px]" />
        </div>

        <div className="global-container w-full py-16">
          <h1 className="!text-[6.875vw] letter-spacing-[0.04em] font-extrabold !leading-[6.9vw]">
            Transform Your
            <br />
            <span className="italic">DIGITAL EXPERIENCE</span>
            <br />
            <span>With IGNEK Today</span>
          </h1>
          <div className="mt-20 grid items-start gap-8 md:grid-cols-2">
            <p className="max-w-xl p20 text-white/80 leading-[30px]">
              Transform your digital landscape with cutting-edge DXP solutions tailored to your unique business needs.
            </p>

            <div className="pb-3 md:self-end md:justify-self-end">
              <a
                href="#discover"
                className="group flex items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-3 text-sm text-white transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00979E] bg-black/30">
                  <Image src="/images/icon/discover-arrow.png" alt="discover-now" width={18} height={18} />
                </div>
                <span className="pr-2 text-xl font-semibold">Discover More</span>
              </a>
            </div>
          </div>

          {/* Divider line matching text color */}
          <div className="mt-17.5 border-t border-white/30" />

          {/* Logos row: 7 items with spacing and responsive wrap */}
          <div className="mt-12 overflow-hidden">
            {/* Inner container is the animated flex row */}
            <div className="animate-marquee-fast flex gap-x-16 whitespace-nowrap">
              {/* We map the partners array twice for a seamless loop */}
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex w-44 flex-shrink-0 items-center justify-center opacity-80 transition hover:opacity-100"
                >
                  <Image src={partner.image} alt={partner.name} width={203} height={54} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODIFICATION: Replace the entire section with our new component */}
      <EndToEndSection />

      <IntermediateFrame />
      <OurCapabilities />
      <FlexiblePlatforms />

      <ScrollContextProvider>
        <WhatWeBring />
      </ScrollContextProvider>
      <SuccessStories />

      <Achievements />
      <BlogSection />
      <HeroCTASection />
      <RatingsSection />
    </main>
  )
}
