import type { Metadata } from "next"
import Filters from "components/PortfolioFilters/Filters"
import PortfolioList from "components/PortfolioList/PortfolioList"

export const metadata: Metadata = {
  title: "Portfolio | IGNEK",
  description: "Explore our portfolio of projects and case studies.",
}

export const revalidate = 60

export default async function PortfolioPage() {
  // let items: Awaited<ReturnType<typeof getPortfolioList>> = []
  // try {
  //   items = await getPortfolioList()
  // } catch {
  //   return (
  //     <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
  //       <section className="mb-8 text-center">
  //         <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h1>
  //         <p className="mt-2 text-white/70">A curated list of our recent work and success stories.</p>
  //       </section>
  //       <div className="rounded-md border border-white/10 bg-black/20 p-6">
  //         <p className="text-white/80">
  //           Sanity is not configured. Please set `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_API_VERSION` in your
  //           environment.
  //         </p>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <main className="pb-16" >
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Our Latest
                <br />
                <span className="block">Case Study</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto  px-4 py-12 md:px-8">
        {/* <section className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Portfolio</h1>
          <p className="mt-2 text-white/70">A curated list of our recent work and success stories.</p>
        </section> */}

        <div className="flex flex-col md:flex-row gap-6 p-[50px] pt-0 pb-0">
          <Filters />
          <PortfolioList />
        </div>
      </div>
        {/* <PortfolioRenderer/> */}
    </main>
  )
}
