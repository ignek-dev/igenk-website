import type { Metadata } from "next"
import PortfolioList from "components/PortfolioList/PortfolioList"

const metadata: Metadata = {
  title: "IGNEK Portfolios : Liferay, ReactJS, Healthcare &amp; More",
  description:
    "Discover IGNEK’s portfolios featuring Liferay, ReactJS, Healthcare, and more. Explore our successful projects and innovative solutions.",

  openGraph: {
    url: "https://www.ignek.com/case-study/",
    title: "IGNEK Portfolios : Liferay, ReactJS, Healthcare &amp; More",
    description: "Discover IGNEK’s portfolios featuring Liferay, ReactJS, Healthcare, and more. Explore our successful projects and innovative solutions.",
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

        <div className="mx-auto w-full px-4 pt-[7.8125vw] pb-[4.427vw] global-container">
          <div className="relative grid justify-between items-end gap-[2.083vw] md:grid-cols-2">

              <h1 className="font-semibold leading-tight text-[3.75vw] sm:text-[2.5vw] md:text-[3.75vw]">
                Our Latest
                <br />
                <span className="block">Case Study</span>
              </h1>

            <p className="text-right text-[0.938vw] ">
              Explore our latest case studies, showcasing real-world solutions,<br />
              success stories, and impactful results delivered to our clients.
            </p>

          </div>
        </div>
      </section>

      <div className="pt-[1.875vw] bg-[#F9FAF7] px-[4.323vw] pb-[4.094vw]">
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
