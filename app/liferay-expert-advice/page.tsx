import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton";
import { BlogSection } from "components/Common";
import HeroCTASection from "components/Common/HeroCTASection";
import TalkToExpert from "components/Common/TalkToExpert";
import WhatMake from "components/Common/WhatMake";

export default function LiferayExpertAdvicePage() {
    const featureTabs = [
        "Liferay Consultation",
        "Liferay Architectural Design",
        "Liferay Customization and Development",
        "Liferay Performance Optimization",
    ]
    const expoerAdvices = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    ]
    const solutions = [
        {
            number: "01",
            title: "Liferay Production Release Issues",
            desc: "Liferay Production Release Issues Navigating Liferay production releases requires precision and a strong grasp of the platform’s intricacies. Our experts provide in-depth analysis and troubleshooting to quickly identify and resolve potential issues. From deployment challenges to compatibility concerns, we deliver actionable insights to ensure a smooth and successful rollout.",
        },
        {
            number: "02",
            title: "Liferay Performance Issues",
            desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
        },
        {
            number: "03",
            title: "Development & Integration",
            desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
        },
        {
            number: "04",
            title: "Liferay Approaches for Architecture",
            desc: "Collaborate with our architects to build a strong architectural foundation for your Liferay deployment. We deliver tailored solutions that are scalable, resilient, and future-proof, ensuring alignment with your business objectives. From cloud migration and microservices adoption to enhancing high availability, our experts provide the guidance needed for long-term success.",
        },
    ];

    return (
        <main className="pb-16">
            {/* Hero */}
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
                    <div className="grid items-start gap-10 md:grid-cols-2 relative">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-white">Liferay Services</div>
                            <h1 className="mt-9 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                                Liferay
                                <br />
                                <span className="block">Expert Advice</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-lg  text-white  sm:text-lg md:mt-16 md:justify-self-end absolute bottom-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </p>
                    </div>

                    {/* Feature tabs */}
                    <div className="mt-15 flex flex-wrap gap-5">
                        {featureTabs.map((label) => (
                            <span key={label} className="inline-flex items-center rounded-full border border-white/30 px-7 py-5 text-lg text-white hover:text-white hover:border-white transition-colors">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
                    <div className="grid items-start gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-5xl sm:text-3xl md:text-5xl font-semibold w-[60%] leading-[60px]">Liferay Expert Advice Service</h2>
                            <p className="mt-4 max-w-xl text-sm text-gray-700 text-[20px]">
                                As a leading Liferay Development Company, we provide comprehensive Liferay Development Services including custom portlets, Rest API integration, portal customization,
                            </p>
                        </div>
                        <div className="space-y-4 md:justify-self-end w-full">
                            {expoerAdvices.map((txt, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 rounded-lg bg-white p-0  ${index === expoerAdvices.length - 1 ? 'pb-0' : 'border-b border-gray-200 pb-4'
                                        }`}
                                >

                                    <span className="flex  h-[70px] w-[70px] items-center justify-center rounded-md">
                                        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.4999 3C17.4999 1.34062 18.8406 0 20.4999 0H23.4999C25.1593 0 26.4999 1.34062 26.4999 3V16.2094L37.9374 9.60938C39.3718 8.78438 41.2093 9.27187 42.0343 10.7062L43.5343 13.3031C44.3593 14.7375 43.8718 16.575 42.4374 17.4L30.9999 24L42.4374 30.6C43.8718 31.425 44.3687 33.2625 43.5343 34.6969L42.0343 37.2937C41.2093 38.7281 39.3718 39.225 37.9374 38.3906L26.4999 31.7906V45C26.4999 46.6594 25.1593 48 23.4999 48H20.4999C18.8406 48 17.4999 46.6594 17.4999 45V31.7906L6.06243 38.4C4.62805 39.225 2.79055 38.7375 1.96555 37.3031L0.46555 34.7063C-0.35945 33.2719 0.12805 31.4344 1.56243 30.6094L12.9999 24L1.56243 17.4C0.12805 16.575 -0.35945 14.7375 0.46555 13.3031L1.96555 10.7062C2.79055 9.2625 4.62805 8.775 6.06243 9.6L17.4999 16.2V3Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-black p-3 font-medium text-[18px]">{txt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-[64px] lg:py-[64px]">
                <div className="grid grid-cols-12 gap-[100px] mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]  items-start">
                    {/* Left Column */}
                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-6">
                        <h1 className="text-5xl font-bold text-white leading-tight leading-[60px]">
                            Solutions For Production, Performance, Development And Architecture
                        </h1>
                        <p className="text-lg text-white leading-relaxed">
                            Our Liferay Expert Advice Services are designed to provide comprehensive support and innovative solutions to enhance your Liferay experience.
                        </p>
                        <div>
                            <ScheduleMeetingButton />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-12 md:col-span-6 gap-12">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col space-y-3 p-6  py-12 first:py-0 first:pb-12 last:pb-0 rounded-1xl shadow-sm hover:shadow-md transition-all duration-300 border-b border-gray-400 last:border-b-0"
                            >
                                <div className="flex items-baseline space-x-3 gap-[28px]">
                                    <span className="text-3xl font-medium text-white">
                                        ({item.number})
                                    </span>
                                    <div className="flex flex-col gap-[28px]">
                                        <h3 className="text-3xl font-medium text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-white text-xl mt-1">{item.desc}</p>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhatMake />
            <TalkToExpert />
            <BlogSection />

            {/* CTA */}
        </main>
    )
}