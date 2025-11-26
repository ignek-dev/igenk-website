import Image from "next/image";
import React from "react";

type CeoMessageProps = {
    imageSrc?: string; 
    linkedInHref?: string;
};

const ceoMessage: CeoMessageProps = {
    imageSrc: '/images/about/ceo-img.png',
    linkedInHref: 'https://in.linkedin.com/in/bhavin-panchani',
};

const CEOSection = () => {
    return (
        <section className="relative isolate global-container py-[5.625vw] bg-[#000000] overflow-hidden" >
            <div className="flex justify-between">
                <div className="relative max-w-[41.771vw] rounded-[30px] p-[3px]" style={{ background: 'linear-gradient(129.83deg, #00979E 0.83%, #000000 82.69%)' }}>
                    <div className="h-full w-full bg-black rounded-[27px] pt-[3.49vw] pr-[2.5vw] pl-[3.333vw] pb-[4.115vw] shadow-[0_4px_4px_0_rgba(0,151,158,0.25)]">
                        <h2 className="text-white !text-[2.083vw] tracking-[-2%]">
                            Heard From Our CEO
                        </h2>

                        <p className="text-[0.938vw] mt-[1.51vw] leading-[1.563vw] text-justify">
                            We were set up in early 2019 and we are passionate about driving innovation through
                            digital transformation. With a deep understanding of the rapidly evolving digital
                            landscape, we empower organizations to thrive in the digital age. Our mission is to
                            help businesses to harness the power of technology to achieve their strategic goals
                            and stay ahead in an ever-changing world. Through our software services, our aim is to
                            improve customer experience, reduce operational costs, and improve business processes
                            which will eventually lead to better revenue for our clients. Our core service offerings
                            encompass: Web &amp; CMS Development, Mobile Application Development, AI/ML, JavaScript
                            Development, and Liferay Development.
                        </p>

                        <div className="mt-[2.813vw] flex items-center">
                            <span className="mr-[0.729vw] text-[2.5vw] leading-[2.292vw] tracking-[-2%]"
                                style={{ fontFamily: "Rage Italic" }}
                            >Bhavin Panchani</span>

                            {ceoMessage.linkedInHref && (
                                <a
                                    href={ceoMessage.linkedInHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="inline-flex items-center justify-center w-[1.875vw] h-[1.875vw] rounded-[0.417vw] border border-white text-[1.354vw] hover:bg-white hover:text-black transition-colors"
                                >
                                    in
                                </a>
                            )}
                        </div>
                    </div>
                </div>


                <div className="absolute right-0 top-[-8.271vw] h-[57.667vw] w-[51.719vw] pointer-events-none">
                    <div
                        className="relative top-[-3.271vw] h-full w-full"
                        style={{
                            maskImage:
                                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.92) 92%, rgba(0,0,0,0.85) 100%)",
                        }}
                    >
                        <Image
                            src={ceoMessage.imageSrc ?? ''}
                            alt="CEO"
                            fill
                            priority
                            className="object-contain !h-[117%] drop-shadow-[0_1.563vw_4.167vw_rgba(0,0,0,0.7)]"
                        />
                    </div>

                    <div
                        className="absolute bottom-2 left-0 right-0 h-[40%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.32%, #000 100%)'
                        }}
                    />

                    <div className="pointer-events-none absolute bottom-0 left-1/2 h-[6.25vw] w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),rgba(0,0,0,0))]" />                </div>
            </div>
        </section>
    );
};

export default CEOSection;
