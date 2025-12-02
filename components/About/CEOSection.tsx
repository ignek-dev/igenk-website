import Image from "next/image"
import React from "react"
import { aboutPageData, ceoSectionContent } from "data/about-content"

type CeoMessageProps = {
  imageSrc?: string
  linkedInHref?: string
}

const CEOSection = () => {
  return (
    <section className="global-container relative isolate overflow-hidden bg-[#000000] py-[5.625vw]">
      <div className="flex justify-between">
        <div
          className="relative max-w-[41.771vw] rounded-[30px] p-[3px]"
          style={{ background: "linear-gradient(129.83deg, #00979E 0.83%, #000000 82.69%)" }}
        >
          <div className="h-full w-full rounded-[27px] bg-black pt-[3.49vw] pr-[2.5vw] pb-[4.115vw] pl-[3.333vw] shadow-[0_4px_4px_0_rgba(0,151,158,0.25)]">
            <h2 className="!text-[2.083vw] tracking-[-2%] text-white">{ceoSectionContent.heading}</h2>

            <p className="mt-[1.51vw] text-justify text-[0.938vw] leading-[1.563vw]">{ceoSectionContent.description}</p>

            <div className="mt-[2.813vw] flex items-center">
              <span
                className="mr-[0.729vw] text-[2.5vw] leading-[2.292vw] tracking-[-2%]"
                style={{ fontFamily: "Rage Italic" }}
              >
                {ceoSectionContent.ceoName}
              </span>

              {ceoSectionContent.linkedIn && (
                <a
                  href={ceoSectionContent.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-[1.875vw] w-[1.875vw] items-center justify-center rounded-[0.417vw] border border-white text-[1.354vw] transition-colors hover:bg-white hover:text-black"
                >
                  in
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute top-[-8.271vw] right-0 h-[57.667vw] w-[51.719vw]">
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
              src={ceoSectionContent.imageSrc}
              alt={ceoSectionContent.ceoName}
              fill
              priority
              className="!h-[117%] object-contain drop-shadow-[0_1.563vw_4.167vw_rgba(0,0,0,0.7)]"
            />
          </div>
          <div
            className="pointer-events-none absolute right-0 bottom-2 left-0 h-[40%]"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.32%, #000 100%)",
            }}
          />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[6.25vw] w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.55),rgba(0,0,0,0))]" />{" "}
        </div>
      </div>
    </section>
  )
}

export default CEOSection
