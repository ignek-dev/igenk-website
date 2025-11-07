"use client"
import Image from "next/image"
import posts from "../../data/blogs.json"
import { useInView } from "../../hooks/useInView"

type BlogItem = {
  id: string
  title: string
  excerpt: string
  image: string
}

export default function BlogSection() {
  const list = posts as BlogItem[]
  const main = list[0]
  const side = list.slice(1, 4)

  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="bg-white text-black">
      <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <h2
            className={`text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl [@media(min-width:1440px)]:text-4xl [@media(min-width:1520px)]:text-5xl ${
              isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
            }`}
          >
            Explore What's Shaping <br /> Digital Today
          </h2>
          <p
            className={`max-w-[500px] justify-self-center text-xl leading-relaxed text-[#101012] text-gray-700 ${
              isInView ? "animate-when-visible animate-slide-right animation-delay-200" : "opacity-0"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla,
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[1fr_0.8fr] xl:gap-20">
          <div
            className={`flex flex-col space-y-2 ${
              isInView ? "animate-when-visible animate-slide-left animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={main?.image || "/images/blog.svg"}
                alt={main?.title || "Blog Post"}
                width={856}
                height={459}
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="line-height-[44px] pt-2 text-4xl font-semibold text-[#101012] md:text-3xl">
              {main?.title || "Blog Post"}
            </h3>
            <p className="mt-2 text-lg text-[#101012] text-gray-700">
              {main?.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>
            <div className="mt-6 w-full border-t border-gray-300" />
          </div>

          {/* Right: three small cards */}
          <div
            ref={sectionRef}
            className={`space-y-4 transition-all duration-[1500ms] ease-out ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            {side.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-[260px_1fr] items-center gap-5 ${
                  index !== 0 && index !== side.length - 1 ? "mb-7" : ""
                }`}
              >
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pb-6">
                  <h4 className="line-height-[32px] text-2xl font-semibold md:text-2xl">{item.title}</h4>
                  <p className="line-height-[24px] mt-1 line-clamp-2 text-base text-gray-700">{item.excerpt}</p>
                </div>
                <div className="col-span-2 mt-1 w-full border-t border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
