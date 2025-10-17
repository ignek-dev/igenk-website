import { BlogSection } from "components/Common"
import CaseStudy from "components/Common/CaseStudy"
import HeroCTASection from "components/Common/HeroCTASection"
import WhatMake from "components/Common/WhatMake"

export default function LiferayEcommerceDevelopmentPage() {
    const featureTabs = [
        "Integrated shopping platform",
        "Personalized customer experience",
        "Multichannel sales support",
        "Seamless checkout process",
    ]

    const ecommerceDevelopment = [
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Efficient User Interfaces", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " }
    ]
    const ecommerceDevelopmentUsingLiferay = [
        { text: "Product and Catalog Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Cart Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Warehouse management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Order management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Personalization and Targeting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Analytics and Reporting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Integration support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " },
        { text: "Look and feel customization", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, " }
    ]
    const steps = [
        {
            number: 1,
            title: "Pre-Development Analysis and Planning",
            description: "We explore your business needs and craft a detailed development blueprint, outlining milestones, budget considerations, and a timeline for execution."
        },
        {
            number: 2,
            title: "Prototyping",
            description: "You'll receive prototypes for the product, category, and homepage. After UI/UX testing and optimization, we'll seek your approval before proceeding to the design phase."
        },
        {
            number: 3,
            title: "Design Development",
            description: "Pre-built themes are available, but for a distinctive impact, we specialize in custom designs tailored to your customers' specific needs and business goals."
        },
        {
            number: 4,
            title: "Testing & QA",
            description: "Ensure everything works perfectly and meets quality standards."
        },
        {
            number: 5,
            title: "Launch",
            description: "Deploy the product and monitor its performance."
        }
    ];

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
    ];
    return (
        <main className="pb-16">
            {/* Hero */}
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
                    <div className="grid items-start gap-10 md:grid-cols-2">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
                            <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                                Liferay
                                <br />
                                <span className="block">Ecommerce</span>
                                <span className="block">Development</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-sm text-white/80 sm:text-base md:mt-16 md:justify-self-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </p>
                    </div>

                    {/* Feature tabs */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        {featureTabs.map((label) => (
                            <span key={label} className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white transition-colors">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight">Liferay Ecommerce Development</h2>
                    <p className="text-lg text-gray-700 justify-self-center text-[#101012] leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                    </p>
                    <div className="pt-4">
                        <div className="flex flex-col">
                            {ecommerceDevelopment.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-[100px] items-center py-6 px-4 border-gray-300 ${index !== 0 ? "border-t" : ""} ${index !== ecommerceDevelopment.length - 1 ? "border-b" : ""}`}
                                >
                                    {/* Row Number */}
                                    <span className="text-[30px] font-medium text-black mb-2">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-[30px] font-medium text-black mb-2">
                                        {item.text}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[20px] font-normal text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-20 lg:py-24">
                <div className=" mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]  items-start">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight">Ecommerce Development Using Liferay</h2>
                    <p className="text-lg text-white justify-self-center text-[#101012] leading-relaxed mt-4">
                        Liferay Ecommerce Development Service streamlines online retail operations with customizable storefronts, product management, order processing, and marketing tools for businesses seeking a strong online presence.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[63px] pt-15">
                        {ecommerceDevelopmentUsingLiferay.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col p-8 border border-gray-700 rounded-lg relative z-1"
                            >

                                {/* Title */}
                                <h3 className="text-2xl font-medium text-white mb-2 py-3 px-8 border border-gray-700 rounded-full w-max absolute mt-[-60px] z-10 bg-black">
                                    {item.text}
                                </h3>

                                {/* Description */}
                                <p className="text-[20px] font-normal text-gray/200 mt-8">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-24 lg:py-28">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight">Our Liferay Ecommerce Development Process</h2>
                        <p className="text-lg text-gray-700 justify-self-center text-[#101012] leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        </p>
                    </div>
                    <div className="pt-8">
                        <div className="max-w-full overflow-x-auto">
                            <div className="flex relative min-w-max ml-[-25%]">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center relative w-1/5 flex-shrink-0"
                                    >
                                        {/* Connecting line */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute top-6 right-0 w-full h-0.5 bg-black z-0" style={{ transform: "translateX(50%)" }}></div>
                                        )}

                                        {/* Step Number */}
                                        <div className="z-10 w-14 h-18 flex items-center justify-center bg-black text-white rounded-full font-medium text-lg">
                                            {step.number}
                                        </div>


                                        <div className="flex flex-col w-[50%] ml-[45%] text-left pt-4 justify-between h-full">
                                            <h3 className="mt-4 text-4xl font-medium text-black text-left">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-base text-left mt-4">
                                                {step.description}
                                            </p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CaseStudy
                caseStudies={caseStudies}
            />

            <WhatMake />
            <HeroCTASection />
            <BlogSection />

            {/* CTA */}
        </main>
    )
}