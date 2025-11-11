import Image from "next/image";
import React from "react";

type CeoMessageProps = {
    imageSrc?: string; // put your provided image in /public/images/ceo.png and leave undefined
    linkedInHref?: string;
};

const ceoMessage: CeoMessageProps = {
    imageSrc: '/images/about/ceo-img.png',
    linkedInHref: 'https://in.linkedin.com/in/bhavin-panchani',
};

const CEOSection = () => {
    return (
        <section className="relative isolate h-[849px] bg-[#060606] overflow-hidden" >
            <div className="relative max-w-[1280px] left-[192px] px-6 py-32">
                {/* Teal-glow card */}
                <div className="relative max-w-[802px] h-[633px] ">
                    <div className="h-full w-full rounded-[30px] p-[3px] bg-[linear-gradient(129.83deg,#00979E_0.83%,#000000_82.69%)] shadow-[0_4px_4px_0_#00979E40]">
                        <div className="h-[633px] w-[802px] rounded-[27px] bg-[#0B0B0F] p-[64px] flex flex-col">
                            {/* Heading */}
                            <h2 className="text-white text-[34px] font-semibold leading-[44px] tracking-[-0.01em] mb-[29px]">
                                Heard From Our CEO
                            </h2>

                            {/* Paragraph */}
                            <p className="font-poppins font-normal text-[18px] leading-[30px] tracking-[0%] text-justify text-white/90 flex-grow">
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

                            {/* CEO Name + LinkedIn */}
                            <div className="mt-[47px] flex items-center gap-3">
                                <span className="font-[RageItalic] font-normal text-[48px] leading-[44px] tracking-[-0.02em] text-justify text-white">Bhavin Panchani</span>

                                {ceoMessage.linkedInHref && (
                                    <a
                                        href={ceoMessage.linkedInHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-[8px] border border-white text-white text-[20px] hover:bg-white hover:text-black transition-colors"
                                    >
                                        in
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                {/* CEO Image */}
                <div className="absolute left-[680px] right-0 top-[-82px] h-[992px] w-[993px] pointer-events-none">
                    <div
                        className="relative top-[-82px] h-full w-full"
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
                            className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                        />
                    </div>

                    {/* Bottom radial shadow */}
                    <div className="pointer-events-none absolute bottom-[-12px] left-1/2 h-[120px] w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),rgba(0,0,0,0))]" />
                </div>
            </div>
        </section>
    );
};

export default CEOSection;
