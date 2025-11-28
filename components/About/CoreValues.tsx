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
        <section className="bg-[#F5F5F6] mx-h-[1078px]  py-[3.333vw] relative global-container">

            {/* Heading */}
            <div className="flex flex-col items-center">
                <h2 className="text-[#000000]">
                    Our Core Values
                </h2>

                <p className="text-[0.938vw] leading-[1.563vw] text-[#4B5563] pt-[1.458vw] w-[40.781vw] text-center">
                    Our commitment to integrity, innovation, and teamwork drives us to deliver exceptional Liferay solutions globally.
                </p>
            </div>

            {/* Values Section */}
            <div className=" mt-[1.979vw]">
                {VALUES.map((v, index) => (
                    <div
                        key={index}
                        className="
                    group  h-[9.948vw] pl-[1.979vw] pr-[2.188vw]
                    bg-[#F5F5F6]
                    duration-300 hover:bg-white
                "
                    >
                        <div className="relative flex h-full items-center px-0">
                            {/* Number */}
                            <p
                                className="text-[1.563vw] text-[#000000] leading-[1.875vw] font-medium"
                            >
                                {v.number}
                            </p>

                            {/* Title */}
                            <h2
                                className="
                            truncate pl-[132px] !leading-[3.75vw] !font-normal
                            text-[#000000] 
                            transition-transform duration-300 
                            group-hover:pl-[15.625vw]
                            "
                            // group-hover:translate-x-[8.906vw]
                            >
                                {v.title}
                            </h2>

                            {/* Description */}
                            <div className="ml-auto">
                                <p
                                    className="w-[38.177vw] text-right text-[#4B5563] font-normal text-[1.25vw] leading-[1.667vw]"
                                >
                                    {v.description}
                                </p>
                            </div>

                            {/* Hover image */}
                            <div
                                className="
                            pointer-events-none absolute left-[8.229vw] top-1/2 z-10 
                            h-[6.25vw] w-[6.25vw] -translate-y-1/2 -translate-x-2 
                            overflow-hidden rounded-[0.313vw] opacity-0 
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
