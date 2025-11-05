import Image from "next/image";
import JobCard from "../../components/career/JobCard"

export default function CareerPage() {
  const perks = [
    { title: ["5 Days", "Working"], icon: "/images/career/gibly-images/5-days-working.png" },
    { title: ["Festival", "Celebration"], icon: "/images/career/gibly-images/festival-celebration.png" },
    { title: ["Rewards &", "Benefits"], icon: "/images/career/gibly-images/rewards-benefits.png" },
    { title: ["Certification", "Program"], icon: "/images/career/gibly-images/certification-program.png" },
    { title: ["Skills", "Improvement"], icon: "/images/career/gibly-images/skills-improvment.png" },
    { title: ["Referral", "Program"], icon: "/images/career/gibly-images/referral-program.png" },
    { title: ["Friendly Work", "Culture"], icon: "/images/career/gibly-images/friendly-work-culture.png" },
    { title: ["Training &", "Development"], icon: "/images/career/gibly-images/training-development.png" },
    { title: ["Enterprise", "Projects"], icon: "/images/career/gibly-images/enterprise-project.png" },
    { title: ["Leave Carry", "Forward"], icon: "/images/career/gibly-images/leave-carry-forward.png" },
    { title: ["Yearly Domenstic", "Trip"], icon: "/images/career/gibly-images/yearly-trip.png" },
    { title: ["Hybrid", "Work"], icon: "/images/career/gibly-images/hybrid-work.png" },
    { title: ["Fun", "Activities"], icon: "/images/career/gibly-images/fun-activities.png" },
    { title: ["Flexible", "Timing"], icon: "/images/career/gibly-images/flexible-timing.png" },
    { title: ["Reliable", "Opportunities"], icon: "/images/career/gibly-images/reliable-opportunities.png" },
    { title: ["Professional", "Growth"], icon: "/images/career/gibly-images/professional-growth.png" },
    { title: ["Team", "Lunch"], icon: "/images/career/gibly-images/team-lunch.png" },
    { title: ["Stay", "Happy"], icon: "/images/career/gibly-images/stay-happy.png" },
    { title: ["Free", "Snacks"], icon: "/images/career/gibly-images/free-snacks.png" },
    { title: ["Work Life", "Balance"], icon: "/images/career/gibly-images/work-life-balance.png" },
  ];

  const jobs = [
  {
    id: "sales-head",
    postedAgo: "2 day ago",
    title: "Sales Head – IT Services & Consulting",
    experience: "5+ Year Experience",
    type: "Full time",
    salary: "8LPA - 12LPA",
    location: "Ahmedabad, Gujarat (Onsite)",
    description: {
      about: "We are looking for a skilled and detail-oriented Sales Head with over 5 years of experience in the IT services sector. You will work closely with our executive team to drive sales strategy and expand our client base.",
      responsibilities: [
        "Develop and execute strategic plans to achieve sales targets.",
        "Create and communicate sales goals and ensure C-level executives are informed on the progress.",
        "Build and maintain long-lasting, strong relationships with customers.",
      ],
      requirements: [
        "Bachelor’s degree in Business, Marketing, or a related field.",
        "Minimum 5 years of proven experience in a sales leadership role.",
        "Excellent understanding of technology, software, or development-related topics.",
      ],
      preferred: [
        "Experience with CRM software like Salesforce.",
        "Strong negotiation and communication skills.",
      ]
    }
  },
  {
    id: "content-writer",
    postedAgo: "2 day ago",
    title: "Technical Content Writer",
    experience: "1+ Year Experience",
    type: "Full time",
    salary: "3LPA - 6LPA",
    location: "Ahmedabad, Gujarat (Onsite)",
    description: {
      about: "We are looking for a skilled and detail-oriented Technical Content Writer with over 1 year of experience in writing clear, concise, and engaging technical content. You will work closely with our product, development, and marketing teams to create content that simplifies complex technical concepts for our target audience.",
      responsibilities: [
        "Create high-quality technical articles, blogs, whitepapers, case studies, and user guides.",
        "Collaborate with subject matter experts (SMEs), developers, and product teams to gather information.",
        "Translate technical information into easy-to-understand content for various audiences.",
        "Edit, proofread, and update existing technical documents for accuracy and consistency.",
        "Optimise content for SEO best practices.",
      ],
      requirements: [
        "Bachelor’s degree in Computer Science, or a related field.",
        "Minimum 1 year of proven experience in technical writing/content writing.",
        "Strong understanding of technology, software, or development-related topics.",
        "Familiarity with SEO practices and content management systems (CMS) like WordPress.",
      ],
      preferred: [
        "Basic understanding of programming languages, APIs, or web development tools.",
        "Knowledge of documentation tools like Confluence, Notion, or Markdown.",
      ]
    }
  },
];

  return (
    <main className="">
      {/* Hero */}
      <section className="relative flex h-screen flex-col justify-end overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-[url('/images/career_bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto w-full px-4 pt-16 pb-16 md:px-8 [@media(min-width:1440px)]:px-[192px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-lg text-sm text-white/80">
                Career at IGNEK
              </div>

              <div className="text-mask-container mt-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="masked-hero-video"
                  style={{
                    maskImage: "url(/images/career/tex.svg)",
                    WebkitMaskImage: "url(/images/career/tex.svg)",
                  }}
                >
                  <source src="/images/career/multi-color-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="max-w-xl pb-12 text-right text-[20px] leading-[30px] font-normal tracking-[0] text-white/80 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              At IGNEK we value people and it include their growth, learning, and perks that help you succeed personally
              and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="border-t border-white/20 bg-black text-white">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl">More Than Just a Job</h2>
            <p className="max-w-xl pb-12 text-right text-[20px] leading-[30px] font-normal tracking-[0] text-white/80 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              At IGNEK to enjoy perks that inspire—learning, flexibility, and a workplace that values your well-being.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 border-[#1F2937] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {perks.map((p, idx) => (
              <div
                key={`${p.title[0]}-${idx}`}
                className={`border-r border-[#1F2937] p-8 text-center ${
                  idx < perks.length - 5 ? "border-b border-[#1F2937]" : ""
                } career-card`}
              >
                {" "}
                <Image
                  src={p.icon || ""}
                  alt={p.title.join(" ")}
                  width={188}
                  height={127}
                  className="mx-auto max-h-[127px] max-w-[188px] object-cover"
                  style={{ height: "auto", width: "auto" }}
                />
                <div className="mt-4 text-2xl leading-tight font-semibold">
                  {p.title[0]}
                  <br />
                  {p.title[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-[#F6F6F6] pb-16 text-black">
        <div className="mx-auto w-full px-4 py-16 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <h2 className="text-4xl leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-3xl md:text-5xl">
              <span className="block">Apply at IGNEK</span>
            </h2>
            <p className="max-w-xl self-center text-right text-[20px] leading-[30px] font-normal tracking-[0] text-gray-700 sm:text-[18px] sm:leading-[28px] md:justify-self-end">
              Explore careers at IGNEK, find your perfect role, and join our team to make an impact that matters.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}