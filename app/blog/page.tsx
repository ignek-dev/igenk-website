"use client"
import { Suspense } from "react"
import BlogsContent from "./BlogsContent"

export default function Blogs() {
  return (
    <Suspense fallback={<BlogsSkeleton />}>
      <BlogsContent />
    </Suspense>
  )
}

function BlogsSkeleton() {
  return (
    <main className="">
      {/* Hero Skeleton */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="global-container mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-22">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="mt-9 h-16 bg-gray-700 rounded animate-pulse w-3/4"></div>
            </div>
            <div className="p18 absolute bottom-0 max-w-2xl justify-self-end text-right">
              <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAF7] pt-[3.333vw] pb-[3.333vw] text-black">
        <div className="global-container mx-auto w-full px-4 md:px-8">
          {/* Loading skeleton for the rest of the content */}
          <div className="h-96 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </section>
    </main>
  )
}