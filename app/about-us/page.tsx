import { Metadata } from "next";
import CEOSection from "components/About/CEOSection";
import Journey from "components/About/CompanyTimeline/CompanyTimeline";
import CoreValues from "components/About/CoreValues";
import StandoutSection from "components/About/StandoutSection";
import Team from "components/About/Team";
import { Testimonial } from "components/About/Testimonial";
import { BackgroundLines } from "components/Common/BackgroundLines";


export const metadata: Metadata = {
    title: "Learn About Our Team  - IGNEK Architecture Design Services - IGNEK",
    description:
        "Serving large organizations and start-ups for over 5 years, IGNEK is an expert in developing and deploying business solutions powered by cutting-edge technology.",

    openGraph: {
        url: "https://www.ignek.com/about-us/",
        title: "Learn About Our Team  - IGNEK Architecture Design Services - IGNEK",
        description: "Serving large organizations and start-ups for over 5 years, IGNEK is an expert in developing and deploying business solutions powered by cutting-edge technology.",
        images: [
            {
                width: 1200,
                height: 630,
                url: "/og-image.png",
            },
        ],
    },
}
// const partners = [
//     {
//         name: "Youngsoft India",
//         image: "/images/partner/youngsoftIndia.svg",
//     },
//     {
//         name: "United Nations",
//         image: "/images/partner/United-nations.png",
//     },
//     {
//         name: "This",
//         image: "/images/partner/This.png",
//     },
//     {
//         name: "Cognizer AI",
//         image: "/images/partner/cognizerAI.png",
//     },
//     {
//         name: "Mibusoft",
//         image: "/images/partner/mibusoft.png",
//     },
//     {
//         name: "Navvis",
//         image: "/images/partner/navvis.png",
//     },
//     {
//         name: "EduTecks",
//         image: "/images/partner/youngsoftIndia.svg",
//     },
//     {
//         name: "Infogain",
//         image: "/images/partner/youngsoftIndia.svg",
//     },
// ]

export default function AboutUs() {
    return (
        <div className="relative bg-[#0B0B0F] text-white">
            <BackgroundLines className="relative flex flex-col justify-center bg-black text-white overflow-hidden">
                <section className="relative top-[60px] w-full h-[670px] px-4 pt-20  pb-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
                    <div className="grid items-end mt-[64px] lg:grid-cols-2">
                        {/* Left Column */}
                        <div className="flex flex-col justify-center">
                            {/* Tag */}
                            <div className="inline-flex items-center rounded-full border border-white/30 px-[29px] py-[10px] text-sm text-white/80 self-start">
                                About IGNEK
                            </div>

                            {/* Masked Text Video */}
                            <div
                                className="relative mt-6 w-[881px] h-[336px] overflow-hidden"
                                style={{
                                    WebkitMaskImage: "url(/images/about/about-us-text.svg)",
                                    maskImage: "url(/images/about/about-us-text.svg)",
                                    WebkitMaskSize: "100% 100%",
                                    maskSize: "100% 100%",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskPosition: "bottom left",
                                    maskPosition: "bottom left",
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 h-[336px] w-[881px] object-cover"
                                >
                                    <source src="/images/career/multi-color-bg.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                </section>
            </BackgroundLines>


            {/* About Company */}
            <div className="bg-[#F8F8F8] pt-16 pb-[5.25rem] global-container">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
                        {/* Left Column - Main Heading */}
                        <div className="lg:pt-0 w-[492px]">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                                Why Companies
                                <br />
                                Trust IGNEK
                            </h2>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8">
                            {/* Introductory Paragraph */}
                            <p className="text-lg text-[#555555] leading-[1.875rem] pt-[30px] text-left mb-[20px]">
                                Companies trust IGNEK for proven Liferay expertise, innovation, reliability, and transformative digital experience solutions.
                            </p>

                            {/* Section 1: Digital Excellence */}
                            <div className="mt-[4rem]">
                                <h3 className="text-3xl leading-[2.25rem] font-bold text-black">
                                    Digital Excellence
                                </h3>
                                <div className="border-gray-[0.063rem] border mt-[1.25rem] mb-[1.25rem]"></div>
                                <p className="text-xl text-[#555555] leading-[1.875rem]">
                                    We craft scalable, high-performing solutions that empower businesses to embrace innovation and achieve measurable results.
                                </p>
                            </div>

                            {/* Section 2: Future-Ready Solutions */}
                            <div className="mt-[4rem]">
                                <h3 className="text-3xl leading-[2.25rem] font-bold text-black">
                                    Future-Ready Solutions
                                </h3>
                                <div className="border-gray-[0.063rem] border mt-[1.25rem] mb-[1.25rem]"></div>
                                <p className="text-xl text-[#555555] leading-[1.875rem]">
                                    From modern web applications to enterprise platforms, we design systems built for adaptability, growth, and long-term success.
                                </p>
                            </div>

                            {/* Section 3: Collaborative Approach */}
                            <div className="mt-[4rem]">
                                <h3 className="text-3xl leading-[2.25rem] font-bold text-black">
                                    Collaborative Approach
                                </h3>
                                <div className="border-gray-[0.063rem] border mt-[1.25rem] mb-[1.25rem]"></div>
                                <p className="text-xl text-[#555555] leading-[1.875rem]">
                                    Our team works hand-in-hand with clients, ensuring every project reflects their vision while meeting the highest standards of quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standout Points*/}
            <StandoutSection />

            {/* Background accents */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[6%] top-[-12%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[120px]" />
                <div className="absolute right-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/18 blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.04)_30%,transparent_70%)]" />
            </div>

            {/*Core Values */}
            <CoreValues />

            {/* CEO Section */}
            <CEOSection />

            {/* Jorney Section */}
            <Journey />

            {/*Meet the People*/}
            <Team />

            {/*Testimonials*/}
            <Testimonial />
        </div>
    );
}
