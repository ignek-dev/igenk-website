import Image from "next/image"
import React from "react"

type CeoMessageProps = {
  imageSrc?: string
  linkedInHref?: string
}

const ceoMessage: CeoMessageProps = {
  imageSrc: "/images/about/ceo-img.png",
  linkedInHref: "https://in.linkedin.com/in/bhavin-panchani",
}

const CEOSection = () => {
  return (
    <section className="global-container relative isolate overflow-hidden bg-[#000000] py-[5.625vw]">
      <div className="flex justify-between text-white">
        <div
          className="relative max-w-[41.771vw] rounded-[30px] p-[3px]"
          style={{ background: "linear-gradient(129.83deg, #00979E 0.83%, #000000 82.69%)" }}
        >
          <div className="h-full w-full rounded-[27px] bg-black pt-[3.49vw] pr-[2.5vw] pb-[4.115vw] pl-[3.333vw] shadow-[0_4px_4px_0_rgba(0,151,158,0.25)]">
            <h2 className="!text-[2.083vw] tracking-[-2%] text-white">Heard From Our CEO</h2>

            <p className="mt-[1.51vw] text-justify text-[0.938vw] leading-[1.563vw] text-white">
              Over the past decade, my journey with Liferay has been a fascinating one. I’ve been there from its version
              6.0 and have watched it take significant steps in OSGI frameworks. I’ve followed its progress in OSGI
              frameworks and witnessed its evolution from a basic Enterprise Content Management System (CMS) into a
              comprehensive and highly Advanced Digital Experience Platform (DXP). Along the way, I’ve seen the
              introduction of groundbreaking solutions like Liferay Commerce, the establishment of Liferay Analytics
              Cloud, and the enhancement of its headless architecture capabilities. Liferay stands as a genuine digital
              experience platform, consistently leading the way in the domain of digital transformation. It empowers
              businesses to craft immersive and personalized experiences for both customers and employees. What truly
              sets Liferay apart is its exceptional ability to tailor solutions to meet the unique needs of various
              industries. Working with Liferay has been a both enlightening  and fulfilling experience, and I’m excited
              to continue this journey.
            </p>

            <div className="mt-[2.813vw]">
              <span
                className="mr-[0.729vw] text-[2.5vw] leading-[2.292vw] tracking-[-2%]"
                style={{ fontFamily: "Rage Italic" }}
              >
                Bhavin Panchani
              </span>
              <p className="line-height-[30px] text-xl text-gray-400">
                Liferay Certified, Liferay Architect, 10+ Years Of Experience
              </p>
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
              src={ceoMessage.imageSrc ?? ""}
              alt="CEO"
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
