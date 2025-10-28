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
    <section className="bg-white text-black">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
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
          <div ref={cardsRef} className={`space-y-6 transition-all duration-[1500ms] ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
            {side.map((item,index) => (
              <div key={item.id}
                className={`grid grid-cols-[260px_1fr] items-center gap-6 ${index !== 0 && index !== side.length - 1 ? "mb-7" : ""
                  }`}
              >
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <Image src={item.image} alt={item.title} width={240} height={140} className="h-full w-full object-cover" />
                </div>
                <div className="pb-6">
                  <h4 className="text-2xl md:text-2xl font-semibold line-height-[32px]">{item.title}</h4>
                  <p className="mt-1 text-base text-gray-700 line-clamp-2 line-height-[24px]">{item.excerpt}</p>
                </div>
                <div className="col-span-2 border-t border-gray-300 w-full mt-1" />
              </div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  )
}