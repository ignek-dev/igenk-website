import Image from "next/image";
import CardRail, { Card } from "./CardRail";

const cardsData: Card[] = [
  {
    title: "Accelerated Solution",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
  },
  {
    title: "Worthwhile Collaboration",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
  },
  {
    title: "Cutting Edge Technologies",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
  },
  {
    title: "Well Tested Solutions",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
  },
  {
    title: "Cutting Edge Technologies",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
  },
  {
    title: "Worthwhile Collaboration",
    desc: "Following standard serve as strong evidence of our position as the experts in software development services.",
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
      <div className="relative max-w-[1920px] pt-[72px] min-h-[860px]">
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
        <p
          className="absolute left-[1072px] top-[124px] w-[653px] h-[60px] text-right text-[#E5E7EB]"
          style={{
            fontFamily: "Poppins, ui-sans-serif, system-ui",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "30px",
          }}
        >
          Following standard serve as strong evidence of our position as the
          experts in software development services.
        </p>

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
