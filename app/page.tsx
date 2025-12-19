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
import { homepageData, partners } from "data/homepage-content"
import { BlogSection } from "../components/Common"
import Scenes from "../components/Scenes"
import Scene from "components/Scenes"
import SchemaInjector from "seo/schemaInjector"
import { homeFaqSchema } from "seo/homeFaq.schema"


export const metadata: Metadata = {
  title: "IGNEK | Liferay Boutique Consulting & Development Company",
  description:
    "IGNEK is a Liferay Boutique Company and trusted Liferay Consulting Partner delivering development, portal implementation, DXP services, and enterprise solutions that maximise your Liferay investment.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ignek.com/",
    title: "IGNEK | Liferay Boutique Consulting & Development Company",
    description: "IGNEK is a Liferay Boutique Company and trusted Liferay Consulting Partner delivering development, portal implementation, DXP services, and enterprise solutions that maximise your Liferay investment.",
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
  const { hero } = homepageData
  return (
    <>
      <SchemaInjector
        id="home-faq-schema"
        schema={homeFaqSchema}
      />
    <main className="scroll-smooth">
      <section className="relative overflow-hidden bg-black text-white">
        {/* Top-left subtle radial gradient using provided colors */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#00979E] opacity-20 blur-[100px]" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#0E7BF8] opacity-15 blur-[100px]" />
        </div>

          <h1 className="mt-[2.188vw]">
            <Scenes />
          </h1>

        <div className="global-container w-full pb-16">
          
          <div className="mt-[0.850vw] grid items-start gap-8 md:grid-cols-2">
            <p className="p20 max-w-xl leading-[30px] text-[#F3F4F6]">{hero.description} </p>

            <div className="pb-3 md:self-end md:justify-self-end">
              <a
                href={hero.button.link}
                className="group flex items-center justify-center gap-2 rounded-full bg-black/30 px-3 py-3 text-sm text-white transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00979E] bg-black/30">
                  <Image src={hero.button.icon} alt="discover-now" width={18} height={18} />
                </div>
                <span className="pr-2 text-xl font-semibold">{hero.button.text}</span>
              </a>
            </div>
          </div>

          {/* Divider line matching text color */}
          <div className="mt-[3.49vw] border-t border-white/30" />

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

      {/* Wrap the EndToEndSection with a section that has the matching id */}
      <section id="discover">
        <EndToEndSection />
      </section>

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
  </>
  )
}
