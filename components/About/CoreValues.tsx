"use client";
import React from "react";

type CoreValue = {
    number: string;
    title: string;
    description: string;
    img: string;
};

const VALUES: CoreValue[] = [
    {
        number: "01",
        title: "Integrity",
        description:
            "We uphold honesty and transparency in every Liferay project, building lasting trust with our clients.",
        img: "/images/about/integrity-img.png",
    },
    {
        number: "02",
        title: "Collaboration",
        description:
            "Through teamwork and open communication, we create impactful Liferay solutions that drive shared success.",
        img: "/images/about/collaboration-img.png",
    },
    {
        number: "03",
        title: "Growth",
        description:
            "We foster continuous learning and innovation, empowering our team and clients to achieve sustainable growth.",
        img: "/images/about/growth-img.png",
    },
    {
        number: "04",
        title: "Adaptability",
        description:
            "We embrace change with agility, evolving our Liferay solutions to meet dynamic business needs.",
        img: "/images/about/adaptability-img.png",
    },
];

const CoreValues = () => {

    return (
        <section className="bg-[#F5F5F6] mx-h-[1078px] relative pb-[64px] global-container">

    {/* Heading */}
    <div className="text-center">
        <h2 className="font-poppins font-bold text-5xl leading-[3.75rem] tracking-[-0.02em] text-[#000000] pt-16">
            Our Core Values
        </h2>

        <p className="font-poppins font-normal text-lg leading-[1.875rem] text-[#4B5563] mt-7 mb-[38px] max-w-[720px] mx-auto">
            Our commitment to integrity, innovation, and teamwork drives us to deliver exceptional Liferay solutions globally.
        </p>
    </div>

    {/* Values Section */}
    <div className=" mt-16">
        {VALUES.map((v, index) => (
            <div
                key={index}
                className="
                    group  h-[191px] 
                    rounded-[4px] bg-[#F5F5F6] 
                    transition-colors duration-300 hover:bg-white
                "
            >
                <div className="relative flex h-full items-center px-0">
                    {/* Number */}
                    <span
                        className="inline-block h-[36px] w-[41px] text-[30px] font-medium leading-[36px] text-[#0B0B0F]"
                        style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui" }}
                    >
                        {v.number}
                    </span>

                    {/* Title */}
                    <h3
                        className="
                            truncate pl-[132px] text-[48px] font-normal 
                            leading-[72px] tracking-[-0.02em] text-[#0B0B0F] 
                            transition-transform duration-300 
                            group-hover:translate-x-[150px]
                        "
                        style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
                    >
                        {v.title}
                    </h3>

                    {/* Description */}
                    <div className="ml-auto">
                        <p
                            className="w-[769px] text-right text-[#4B5563] font-normal text-[24px] leading-[32px]"
                            style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
                        >
                            {v.description}
                        </p>
                    </div>

                    {/* Hover image */}
                    <div
                        className="
                            pointer-events-none absolute left-[211px] top-1/2 z-10 
                            h-[112px] w-[112px] -translate-y-1/2 -translate-x-2 
                            overflow-hidden rounded-[6px] opacity-0 
                            transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100
                        "
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={v.img} alt={v.title} className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

    );
};

export default CoreValues;
