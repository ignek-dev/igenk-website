'use client';
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

  const [sectionRef, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={sectionRef} className="bg-white text-black overflow-x-hidden">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px] py-16 md:py-16">
          {/* Left: big image + title + subtitle + horizontal line */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <h2 className={`text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
              isInView ? 'animate-when-visible animate-slide-left animation-delay-200' : 'opacity-0'
            }`}>
              Explore What's Shaping <br /> Digital Today
            </h2>
          <p className={`max-w-[500px] text-xl text-gray-700 justify-self-center text-[#101012] leading-relaxed  ${
              isInView ? 'animate-when-visible animate-slide-right animation-delay-200' : 'opacity-0'
            }`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 xl:gap-20">
          <div className={`flex flex-col ${
              isInView ? 'animate-when-visible animate-slide-left animation-delay-200' : 'opacity-0'
            }`}>
            <div className="overflow-hidden rounded-xl bg-gray-100 mt-3">
              <Image src={main?.image || "/images/blog.svg"} alt={main?.title || "Blog Post"} width={856} height={459} className="h-auto w-full object-cover" />
            </div>
            <h3 className="text-4xl md:text-3xl font-semibold line-height-[44px] text-[#101012] pt-2">{main?.title || "Blog Post"}</h3>
            <p className="mt-2 text-lg text-gray-700 text-[#101012]">{main?.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
            <div className="mt-8 border-t border-gray-300 w-full" />
          </div>

          {/* Right: three small cards */}
          <div className={`space-y-7 ${
              isInView ? 'animate-when-visible animate-slide-right animation-delay-200' : 'opacity-0'
            }`}>
            {side.map((item) => (
              <div key={item.id} className="grid grid-cols-[190px_1fr] items-center gap-6">
                <div className="relative aspect-[240/149] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="pb-6">
                  <h4 className="text-2xl md:text-2xl font-semibold line-height-[32px]">{item.title}</h4>
                  <p className="mt-1 text-base text-gray-700 line-clamp-2 line-height-[24px]">{item.excerpt}</p>
                </div>
                  <div className="col-span-2 border-t border-gray-300 w-full -mb-5" />
              </div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  )
}