import { Metadata } from "next"
import Image from "next/image"
import { BlogSection } from "../components/Common"
import AccordionItem from "components/Common/AccordionItem"
import IntermediateFrame from "components/IntermediateFrame"
import OurCapabilities from "components/OurCapabilities/OurCapabilities"
import FlexiblePlatforms from "components/FlexiblePlatforms/FlexiblePlatforms"
import WhatWeBring from "components/WhatWeBring/WhatWeBring"
import Achievements from "components/Achievements/Achievements"
import SuccessStories from "components/success-stories/SuccessStories"
import HeroCTASection from "components/Common/HeroCTASection"
import RatingsSection from "components/Ratings/RatingsSection"
import EndToEndSection from "components/EndToEndSection/EndToEndSection"
import { ScrollContextProvider } from "components/Common/ScrollContextProvider"

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

const partners = [
  {
    name: "Youngsoft India",
    image: "/images/partner/youngsoftIndia.svg",
  },
  {
    name: "United Nations",
    image: "/images/partner/United-nations.png",
  },
  {
    name: "This",
    image: "/images/partner/This.png",
  },
  {
    name: "Cognizer AI",
    image: "/images/partner/cognizerAI.png",
  },
  {
    name: "Mibusoft",
    image: "/images/partner/mibusoft.png",
  },
  {
    name: "Navvis",
    image: "/images/partner/navvis.png",
  },
  {
    name: "EduTecks",
    image: "/images/partner/youngsoftIndia.svg",
  },
  {
    name: "Infogain",
    image: "/images/partner/youngsoftIndia.svg",
  },
]

export default function HomePage() {
  return (
    <main className="">
      <section className="relative overflow-hidden bg-black text-white">
        {/* Top-left subtle radial gradient using provided colors */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#00979E] opacity-20 blur-[100px]" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#0E7BF8] opacity-15 blur-[100px]" />
        </div>

        <div className="mx-auto w-full px-4 pt-20 pb-12 md:px-6 md:pb-16 lg:pb-20 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <h1 className="text-6xl leading-none font-extrabold md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8.25rem]">
            Transform Your
            <br />
            <span className="italic">DIGITAL EXPERIENCE</span>
            <br />
            <span>With IGNEK Today</span>
          </h1>
          <div className="mt-18 grid items-start gap-8 md:grid-cols-2">
            <p className="max-w-xl text-xl text-white/80 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            </p>

            <div className="md:self-end md:justify-self-end pb-3">
              <a
                href="#discover"
                className="group flex items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-3 text-sm text-white transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 border border-[#00979E]"> 
                  <img src="/images/icon/discover-arrow.png" alt="discover-now" />
                </div>
                <span className="pr-2 text-xl">Discover More</span>
              </a>
            </div>
          </div>

          {/* Divider line matching text color */}
          <div className="mt-16.5 border-t border-white/30" />

          {/* Logos row: 7 items with spacing and responsive wrap */}
          <div className="mt-10 overflow-hidden">
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
        <SuccessStories />
      </ScrollContextProvider>

      <Achievements />
      <BlogSection />
      <HeroCTASection />
      <RatingsSection />
    </main>
  )
}
