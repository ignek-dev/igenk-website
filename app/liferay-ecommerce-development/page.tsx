"use client"
import { useEffect, useRef, useState } from "react"
import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import TalkToExpert from "components/Common/TalkToExpert"
import WhatMake from "components/Common/WhatMake"

export default function LiferayEcommerceDevelopmentPage() {
  const LiferayEcommerceDevelopmentTitle1 = "Why Choose IGNEK For Liferay"
  const LiferayEcommerceDevelopmentTitle2 ="Ecommerce Development?"
  const LiferayEcommerceDevelopmentSubContent = "At IGNEK, Our expert engineers use up to date software’s and vast knowledge to craft solutions that match your needs and expectations. Putting clients first is our thing, and we’re proud to support our very first business client till today!"
 
  const LiferayEcommerceDevelopmentData = [
    {
      title: "Strong Expertise",
      desc: "We are experts with years of experience, dedicated to staying updated on the latest trends and advancements.",
    },
    {
      title: "Client First",
      desc: "Our tailored solutions prioritize client satisfaction, aligning with your objectives to foster trust and mutual success.",
    },
    {
      title: "Effective Communication",
      desc: "We are experts with years of experience, dedicated to staying updated on the latest trends and advancements.",
    },
    {
      title: "On Time Delivery",
      desc: "We prioritize deadlines, ensuring timely delivery without ever compromising on quality.",
    },
    {
      title: "Results Focused",
      desc: "Our dedicated team works hard to deliver measurable results, driving your business forward toward collective success.",
    },
    {
      title: "End-to-End Support",
      desc: "We provide complete support, from start to finish, and ongoing guidance even after project completion.",
    },
  ]
  const featureTabs = [
    "Integrated shopping platform",
    "Personalized customer experience",
    "Multichannel sales support",
    "Seamless checkout process",
  ]

  const ecommerceDevelopment = [
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Efficient User Interfaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
  ]
  const ecommerceDevelopmentUsingLiferay = [
    {
      text: "Product and Catalog Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Cart Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Warehouse management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Order management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Personalization and Targeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Analytics and Reporting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Integration support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
    {
      text: "Look and feel customization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ",
    },
  ]
  const steps = [
    {
      number: 1,
      title: "Pre-Development Analysis and Planning",
      description:
        "We explore your business needs and craft a detailed development blueprint, outlining milestones, budget considerations, and a timeline for execution.",
    },
    {
      number: 2,
      title: "Prototyping",
      description:
        "You'll receive prototypes for the product, category, and homepage. After UI/UX testing and optimization, we'll seek your approval before proceeding to the design phase.",
    },
    {
      number: 3,
      title: "Design Development",
      description:
        "Pre-built themes are available, but for a distinctive impact, we specialize in custom designs tailored to your customers' specific needs and business goals.",
    },
    {
      number: 4,
      title: "Store Development",
      description:
        "We build your e-commerce infrastructure, customize features, and integrate both customers and products, using sprints with regular progress updates.",
    },
    {
      number: 5,
      title: "Extensions and Integrations",
      description:
        "Your store integrates with extensions and third-party systems as needed. Unsure which system fits? We guide you in choosing and integrating the best solution.",
    },
    {
      number: 6,
      title: "Quality Control",
      description:
        "Thorough testing of features and integrations is conducted meticulously, ensuring any bugs are swiftly addressed to mitigate security risks and safeguard against potential data loss.",
    },
    {
      number: 7,
      title: "Project Release",
      description:
        "Your store is live and functional! After project completion, you can continue working with us for ongoing e-commerce consultation and comprehensive post-release support.",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Corporate",
      title: "Music License Management Portal: Onboarding & Data Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    },
    {
      id: 2,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "FinTech",
      title: "Transforming Financial Services with Innovations",
      description:
        "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      id: 3,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "Healthcare",
      title: "Digital Health Platform: Patient-Centric Solutions",
      description:
        "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
    },
    {
      id: 4,
      image: "/images/liferay-pages-image/caseStudy.png",
      tag: "E-commerce",
      title: "Scaling Online Retail with Cloud Technologies",
      description:
        "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollStart, setScrollStart] = useState(0)
  const [targetScroll, setTargetScroll] = useState<number | null>(null)

  // Custom smooth scroll logic (2-second easing)
  useEffect(() => {
    if (targetScroll === null || !containerRef.current) return

    const start = containerRef.current.scrollLeft
    const distance = targetScroll - start
    const duration = 1200 // 2 seconds
    const startTime = performance.now()

    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      containerRef.current!.scrollLeft = start + distance * ease

      if (progress < 1) requestAnimationFrame(smoothScroll)
    }

    requestAnimationFrame(smoothScroll)
  }, [targetScroll])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollStart(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2.8 // reduced scroll speed
    setTargetScroll(scrollStart - walk)
  }

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
        <div className="mx-auto w-full px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-28 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">
                Liferay Services
              </div>
              <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                Liferay
                <br />
                <span className="block">Ecommerce</span>
                <span className="block">Development</span>
              </h1>
            </div>
            <p className="absolute bottom-0 max-w-xl text-lg text-white sm:text-lg md:mt-16 md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus.
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mt-15 flex flex-wrap gap-4">
            {featureTabs.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 [@media(min-width:1440px)]:text-base [@media(min-width:1500px)]:text-lg text-lg text-white transition-colors hover:border-white hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Liferay Ecommerce Development
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue.
          </p>
          <div className="pt-4">
            <div className="flex flex-col">
              {ecommerceDevelopment.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[100px] border-gray-300 px-4 py-6 ${
                    index !== 0 ? "border-t" : ""
                  } ${index !== ecommerceDevelopment.length - 1 ? "border-b" : ""}`}
                >
                  {/* Row Number */}
                  <span className="mb-2 text-[30px] font-medium text-black">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 text-[30px] font-medium text-black w-[700px]">{item.text}</h3>

                  {/* Description */}
                  <p className="text-[20px] font-normal text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[64px] text-white lg:py-[64px]">
        <div className="mx-auto w-full items-start px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            Ecommerce Development Using Liferay
          </h2>
          <p className="mt-4 justify-self-center text-lg leading-relaxed text-[#101012] text-white">
            Liferay Ecommerce Development Service streamlines online retail operations with customizable storefronts,
            product management, order processing, and marketing tools for businesses seeking a strong online presence.
          </p>
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[63px] pt-15 md:grid-cols-2">
            {ecommerceDevelopmentUsingLiferay.map((item, index) => (
              <div key={index} className="relative z-1 flex flex-col rounded-lg border border-gray-700 p-8">
                {/* Title */}
                <h3 className="absolute z-10 mt-[-60px] mb-2 w-max rounded-full border border-gray-700 bg-black px-8 py-3 text-2xl font-medium text-white">
                  {item.text}
                </h3>

                {/* Description */}
                <p className="text-gray/200 mt-8 text-[20px] font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] text-black">
        <div className="mx-auto w-full px-4 py-[64px] md:px-8 md:py-[64px] lg:py-[64px] [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight font-semibold sm:text-4xl md:text-5xl">
                Our Liferay Ecommerce Development Process
              </h2>
            </div>
            <div className="relative">
              <p className="absolute justify-self-center text-lg leading-relaxed text-[#101012] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
              </p>
            </div>
          </div>
          <div className="pt-16 select-none">
            <div
              ref={containerRef}
              className="max-w-full cursor-grab overflow-x-hidden active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative ml-[-23%] flex min-w-max [@media(min-width:1440px)]:ml-[-17%]">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex w-1/10 flex-shrink-0 flex-col items-center">
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute top-6 right-0 z-0 h-0.5 w-full bg-black"
                        style={{ transform: "translateX(50%)" }}
                      ></div>
                    )}

                    {/* Step Number */}
                    <div className="z-10 flex h-18 w-14 items-center justify-center rounded-full bg-black text-lg font-medium text-white">
                      {step.number}
                    </div>

                    <div className="ml-[45%] flex h-full w-[50%] flex-col justify-between pt-4 text-left">
                      <h3 className="mt-4 text-left text-4xl font-medium text-black">{step.title}</h3>
                      <p className="mt-4 text-left text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudy caseStudies={caseStudies} />
      <WhatMake WhatMakeData={LiferayEcommerceDevelopmentData} titleText1={LiferayEcommerceDevelopmentTitle1} titleText2={LiferayEcommerceDevelopmentTitle2} subContext={LiferayEcommerceDevelopmentSubContent}/>
      <TalkToExpert />
      <BlogSection />

      {/* CTA */}
    </main>
  )
}
