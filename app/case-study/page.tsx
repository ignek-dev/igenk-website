import type { Metadata } from "next"
import PortfolioList from "components/PortfolioList/PortfolioList"
import { liferaySuccessStoriesSection } from "data/case-study"

const metadata: Metadata = {
  title: "Liferay Case Studies | Enterprise Success Stories",
  description:
    "Explore Liferay case studies showcasing enterprise-grade DXP implementations, customer success stories, and proven outcomes delivered through our Liferay-first approach.",

  openGraph: {
    url: "https://www.ignek.com/case-study/",
    title: "Liferay Case Studies | Enterprise Success Stories",
    description: "Explore Liferay case studies showcasing enterprise-grade DXP implementations, customer success stories, and proven outcomes delivered through our Liferay-first approach.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}
export const revalidate = 60

export default async function PortfolioPage() {

  return (
    <main className="pb-0" >
      {/* Hero */}

      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25"></div>

        <div className="mx-auto w-full px-5 py-12 lg:px-4 lg:pt-[7.8125vw] lg:pb-[4.427vw] global-container">
          <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-end lg:justify-between lg:gap-[2.083vw]">

              <h1 className="font-semibold">
                 {liferaySuccessStoriesSection.heading} 
                <br/>
                  {liferaySuccessStoriesSection.heading2}

              </h1>

            <p className="lg:text-right text-p16 md:text-p18 pb-2">
              {liferaySuccessStoriesSection.description}
            </p>

          </div>
        </div>
      </section>

      <div className="bg-[#F9FAF7] px-5 py-12 lg:pt-[1.875vw] lg:px-[4.323vw] lg:pb-[4.094vw]">
        {/* <section className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h1>
          <p className="mt-2 text-white/70">A curated list of our recent work and success stories.</p>
        </section> */}

        {/* <div className="flex flex-col md:flex-row gap-6 p-[50px] pt-0 pb-0"> */}

        <PortfolioList />
        {/* </div> */}
      </div>
      {/* <PortfolioRenderer/> */}
    </main>
  )
}
