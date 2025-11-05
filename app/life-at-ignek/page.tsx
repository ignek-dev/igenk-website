import Image from "next/image"
import CalendarSection from "components/life-at-ignek/CalendarSection";
import ImageCardCollage from "components/life-at-ignek/ImageCardCollage";

export default function LifeAtIgnekPage() {
  const values = [
    {
      icon: "/images/life-at-ignek/growth.png",
      title: "Growth",
      description:
        "At IGNEK, growth is more than a goal—it’s part of IGNEK, where employees thrive, learn, and advance in a supportive work culture & team environment.",
    },
    {
      icon: "/images/life-at-ignek/transparency.png",
      title: "Transparency",
      description: "We are very transparent in terms of work, culture, and communication to build trust and strong bonding among employees, teams, and managers.",
    },
    {
      icon: "/images/life-at-ignek/people-first.png",
      title: "People First",
      description:
        "Our success is all about our people. We prioritize well-being, diversity, and inclusion to create an exceptional Employee Experience at IGNEK.",
    },
    {
      icon: "/images/life-at-ignek/be-a-team.png",
      title: "Be a Team",
      description:
        "Teamwork drives Life at IGNEK. Embrace a “Be a Team” mindset, valuing collective success over individual triumphs to achieve more together.",
    },
  ]

  const collageImages = [
    "/images/life-at-ignek/collage-images/image1.png",
    "/images/life-at-ignek/collage-images/image2.png",
    "/images/life-at-ignek/collage-images/image3.png",
    "/images/life-at-ignek/collage-images/image4.png",
    "/images/life-at-ignek/collage-images/image5.png",
  ];

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative flex h-screen flex-col justify-end overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-black bg-[url('/images/heroImage.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto w-full px-4 pt-16 pb-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-sm text-white/80">
                Life at IGNEK Means More Than Just Work
              </div>

              <div className="text-mask-container mt-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="masked-hero-video"
                  style={{
                    maskImage: "url(/images/life-at-ignek/Life-at-ignek-text.svg)",
                    WebkitMaskImage: "url(/images/life-at-ignek/Life-at-ignek-text.svg)",
                    maskPosition: "bottom left",
                    WebkitMaskPosition: "bottom left",
                  }}
                >
                  <source src="/images/career/multi-color-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="pb-4 text-xl text-white/80 md:justify-self-center">
             Discover Life at IGNEK, where Employee Experience thrives, and Work Culture & Team spirit define every step of your journey.
            </p>
          </div>
        </div>
      </section>

        {/* START: NEW Image Collage Section */}
      <section>
        <ImageCardCollage images={collageImages} />
      </section>
      {/* END: NEW Image Collage Section */}


      {/* Our Culture & Values Section */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full px-4 py-24 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="relative grid items-center gap-16 lg:grid-cols-2">
            {/* Left Column: Text Content */}
            <div>
              <div className="absolute top-0 left-0 pt-4">
                <h2 className="text-5xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Culture & Values</h2>
                <p className="max-w-xl text-xl text-white/70 mt-4">
                 Our Culture & Values guide our actions and define our principles, shaping the Employee Experience at IGNEK.
                </p>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Values */}
            <div className="grid grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-start gap-4 rounded-lg">
                  <Image src={value.icon} alt={`${value.title} icon`} width={44} height={44} />
                  <h3 className="text-4xl font-semibold">{value.title}</h3>
                  <p className="text-white/60 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalendarSection />
    </main>
  )
}
