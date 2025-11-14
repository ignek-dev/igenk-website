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
    <section className="relative isolate overflow-hidden h-[892px]">
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
      <div className="relative max-w-[1920px] pt-[64px] min-h-[860px]">
        {/* H1 */}
        <h2
          className="absolute left-[192px] top-[64px] w-[623px] h-[120px] text-white capitalize"
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui",
            fontWeight: 600,
            fontSize: 48,
            lineHeight: "60px",
            letterSpacing: "-0.02em",
          }}
        >
          What Makes Us Stand Out
          <br />
          In A Crowded Market
        </h2>

        {/* Right caption */}
        

        {/* Cards */}
        <CardRail cards={cardsData} />

        {/* Four connected horizontal dividers */}
        <div className="absolute flex left-[192px] top-[828px] bottom-[64px]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border-t-2 border-[#9CA3AF]"
              style={{ width: "383px", opacity: 1 }}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default StandoutSection;
