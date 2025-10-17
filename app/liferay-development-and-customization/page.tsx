import { BlogSection } from "components/Common";
import HeroCTASection from "components/Common/HeroCTASection";
import TalkToExpert from "components/Common/TalkToExpert";
import WhatMake from "components/Common/WhatMake";

export default function LiferayDevelopmentAndCustomizationPage() {
    const featureTabs = [
        "Portal development",
        "Portlet Customization",
        "Theme development",
        "Performance optimization",
        "Liferay Integration"
    ]

    const developmentServices = [
        "Develop public & private sites using Liferay sites, site templates, page templates, and layout features.",
        "Leverage Liferay’s default capabilities like fragments, web content, and layout to build pages.",
        "Create widget templates to render Liferay assets across OOTB portlets like asset publishers, web content displays, and search results.",
        "Use various Liferay search facets to implement a rich search result experience.",
        "Use Liferay’s scheduled content, Kaleo workflow, and User & Role feature to manage content publishing.",
        "Using the Liferay page experience to customize content based on the logged-in users.",
    ]

    const portalDevelopmentService = [
        "Liferay MVC Portlet is a Java-based framework for developing portlets within the Liferay Portal environment, facilitating the creation of dynamic web applications with Model-View-Controller (MVC) architecture.",
        "Liferay Service Builder that automates the generation of service layers, persistence layers, and API classes, streamlining the development process for building robust, scalable applications on the Liferay platform.",
        "Liferay React Portlet combines the versatility of Liferay’s portal framework with the flexibility and interactive user experiences offered by React.js, allowing developers to create dynamic, single-page applications within the Liferay environment.",
        "Develop Rest APIs using Liferay Rest Builder & Liferay Module development using standards like OSGI, JSR 168 and 268"
    ]
    const liferayIntegrationServices = [
        "SSO Integration supports SAML, Keyclock,  LDAP, OpenId, OAuth, and more",
        "Social Media Integration like Facebook and Google login",
        "Analytics integration like Google Analytics and Liferay Analytics Cloud",
        "Google Meet, Microsoft Teams, Zoom and Jitsi integration",
        "SMS and WhatsApp Integration using Twilio",
        "Payment Integration like Stripe, Braintree, Paypal, Vonage and more",
        "File storage integration like Amzon S3, Google Cloud Storage, Microsoft Azure Blob Storage",
        "Data Integration like Liferay Talend Integration",
        "Google Drive and Microsoft Office 365 integration",
        "Much more Third-Party integration using REST API or client SDK",
        "Zendesk Chat Integration and Digital Signature Integration",
        "Google Authentication for multi-factor authentication",
        "Apache ActiveMQ Integration for distributing loads"
    ]

    const customizationServices = [
        { text: "Customizing <br/> JSPs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Implementing <br/>Portlet Filters ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Waiting for <br/> Lifecycle events", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Writing Widget <br/> templates", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Overriding Liferay services <br/> using wrappers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Overriding Liferay MVC <br/> Commands", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Overriding <br/> OSGI Services", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Customizing Core </br> Functionality with Ext", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Model<br/> listeners", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Search model </br>contributor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Context <br/> contributor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " },
        { text: "Implementing Liferay <br/> hooks", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien " }
    ]
    return (
        <main className="pb-16">
            {/* Hero */}
            <section className="relative bg-black text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_10%_0%,#0E7BF8_0%,#00979E_40%,transparent_65%)] opacity-25" />
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] pt-12 pb-16 md:pt-20 md:pb-28">
                    <div className="grid items-start gap-10 md:grid-cols-2 relative">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm text-white/80">Liferay Services</div>
                            <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                                Liferay
                                <br />
                                <span className="block">Development &</span>
                                <span className="block">Customization</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-lg  text-white  sm:text-lg md:mt-16 md:justify-self-end absolute bottom-0">
                            Transform your Liferay Portal with our expert Liferay Theme Development Services. We specialize in converting UX designs into visually captivating HTML and implementing responsive Liferay Theme. Our approach ensures
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
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-20 md:py-[64px] lg:py-[64px]">
                    <div className="grid items-start gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-5xl sm:text-3xl md:text-5xl font-semibold leading-[60px]">Our Liferay Development Services</h2>
                            <p className="mt-4 max-w-xl text-sm text-gray-700 text-[20px]">
                                As a leading Liferay Development Company, we provide comprehensive Liferay Development Services including custom portlets, Rest API integration, portal customization,
                            </p>
                        </div>
                        <div className="space-y-4 md:justify-self-end w-full">
                            {developmentServices.map((txt, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 rounded-lg bg-white p-0 pb-4 ${index === developmentServices.length - 1 ? '' : 'border-b border-gray-200'
                                        }`}
                                >

                                    <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black">
                                        <svg width="40" height="30" viewBox="0 0 12 12" className="text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className=" mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]  items-start">
                    <div className="grid items-start gap-10 md:grid-cols-2 relative">
                        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-[60px]">Our Liferay Custom Module/ Portlet Development Services</h2>
                        <p className="max-w-xl text-xl text-white md:justify-self-end absolute bottom-0 text-white text-right">
                            Our approach blends prevention and rapid response to keep your platform stable, secure, and performing.
                        </p>
                    </div>
                    <section className="bg-black text-white pt-10 w-full">
                        <div className="w-full flex flex-col">
                            {portalDevelopmentService.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-6 py-8 border-b border-gray-300 last:border-b-0 last:pb-0"
                                >
                                    {/* Left Number */}
                                    <span className="text-[64px] font-bold leading-none text-white shrink-0">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>

                                    {/* Right Text */}
                                    <p className="text-xl text-white leading-relaxed w-full">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </section>

            <section className="bg-white text-black">
                <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-[64px] md:py-[64px] lg:py-[64px]">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl font-semibold leading-tight leading-[60px]">Liferay Integration Services</h2>
                    <p className="text-lg text-gray-700 justify-self-center text-[#101012] leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                    </p>
                    <div className="pt-4">
                        <section className="text-white pt-10 w-full">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-gray-300 first:border-t-0">
                                {liferayIntegrationServices.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-6 py-8 px-6 border-b border-gray-300 pl-0 "
                                    >
                                        {/* Left Number */}
                                        <span className="text-xl font-bold leading-none text-white bg-black  w-[64px] h-[64px] flex items-center justify-center shrink-0">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </span>

                                        {/* Right Text */}
                                        <p className="text-xl text-black leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white py-[64px] lg:py-[64px]">
                <div className=" mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]  items-start">
                    <div className="grid items-start gap-10 md:grid-cols-2 relative">
                        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl leading-[60px]">Liferay Portal Customization Services</h2>
                        <p className="max-w-xl text-xl text-white md:justify-self-end absolute bottom-0 text-white text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        </p>
                    </div>
                    <div className="pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[166px] gap-y-10">
                            {customizationServices.map((item, index) => {
                                const isLastRow =
                                    index >= customizationServices.length - (customizationServices.length % 3 || 3);

                                return (
                                    <div
                                        key={index}
                                        className={`flex flex-col ${isLastRow ? "pb-0" : "pb-8"}`}
                                    >
                                        {/* Number */}
                                        <div className="border-b border-gray-300 last:border-b-0">
                                            <span className="text-[20px] font-bold mb-3">
                                                ({index + 1 < 10 ? `0${index + 1}` : index + 1})
                                            </span>

                                            {/* Title */}
                                            <h3
                                                className="text-[30px] font-semibold mb-3 pt-4"
                                                dangerouslySetInnerHTML={{ __html: item.text }}
                                            />
                                        </div>

                                        {/* Description */}
                                        <p className="text-[16px] leading-relaxed text-white pt-4">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <WhatMake />
            <TalkToExpert />
            <BlogSection />

            {/* CTA */}
            {/* <HeroCTASection /> */}
        </main>
    )
}