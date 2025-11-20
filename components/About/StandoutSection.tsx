import Image from "next/image";
import CardRail, { Card } from "./CardRail";

const cardsData: Card[] = [
  {
    title: "Business Acceleration",
    desc: "As a leading Liferay Development Company, we empower businesses with fast, scalable, and result-driven solutions.",
  },
  {
    title: "Custom Expertise",
    desc: "IGNEK crafts tailored Liferay solutions designed to optimize business performance and enhance user engagement.",
  },
  {
    title: "Collaborative Success",
    desc: "Partner with IGNEK, a Liferay Boutique Company, for transparent collaboration and impactful digital transformation outcomes.",
  },
  {
    title: "Cutting-Edge Technologies",
    desc: "We leverage modern tools and Liferay innovations to create seamless, future-ready digital experiences.",
  },
  {
    title: "Well-Tested Delivery",
    desc: "Our Liferay solutions undergo rigorous testing, ensuring stability, scalability, and long-term business value.",
  },
  {
    title: "Enterprise Solutions",
    desc: "IGNEK delivers world-class Liferay development services that adapt to your evolving digital transformation goals.",
  },
  {
    title: "Round-the-Clock Support",
    desc: "Our expert team provides 24/7 assistance, ensuring your Liferay platform runs smoothly without interruptions.",
  },
];

const StandoutSection = () => {
  return (
    <section className="relative isolate overflow-hidden global-container h-[55.75rem]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/about/standout-img.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.80)_100%)]" />
      </div>

      {/* Canvas container */}
      <div className="pt-[4rem] ">

        <div className="flex justify-between items-end">
          {/* H1 */}
          <h2
            className="w-[38.938rem] h-[7.5rem] text-white capitalize"
            style={{
              fontFamily: "Poppins, ui-sans-serif, system-ui",
              fontWeight: 600,
              fontSize: 48,
              lineHeight: "3.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Makes Us Stand Out
            <br />
            In A Crowded Market
          </h2>

          <p className="text-right text-lg leading-[1.125rem]">Following standard serve as strong evidence of our position as the
            <br/>
             experts in software development services.</p>
          {/* Right caption */}
        </div>

        {/* Cards */}
        <CardRail cards={cardsData} />

        {/* Four connected horizontal dividers */}
       <div className="border border-[#6B7280] border-[0.125rem] mt-[3.875rem]"></div>
      </div>
    </section>

  );
};

export default StandoutSection;
