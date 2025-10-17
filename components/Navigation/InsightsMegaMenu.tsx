// InsightsMegaMenu.tsx

// --- Icon Components ---
const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBlog = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="3" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const IconCaseStudies = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconWebinars = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4 14h2V6h-2v12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconPodcast = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18a6 6 0 0 0 6-6h-6V6a6 6 0 1 0 0 12z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18v4" stroke="currentColor" strokeWidth="2" />
        <path d="M22 12h-4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 12H2" stroke="currentColor" strokeWidth="2" />
    </svg>
);
// --- Data for the Insight Links ---
const insightLinks = [
  {
    icon: "/images/icon/blogs.png",
    title: "Blogs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/blogs",
  },
  {
    icon: "/images/icon/case-studies.png",
    title: "Case Studies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/case-studies",
  },
  {
    icon: "/images/icon/webinars.png",
    title: "Webinars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/webinars",
  },
  {
    icon: "/images/icon/blogs.png",
    title: "Podcast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/podcast",
  },
];

// --- Dynamic Event Data ---
// To update the event, just change the data in this object
const featuredEvent = {
  title: "Unlock insights that drive growth — join our upcoming webinar and level up your digital game!",
  // The path starts from the `public` directory
  imageSrc: "/images/mega-menu/Event-image.jpg", 
  imageAlt: "Customer Onboarding with Low Code/No-Code Capabilities of Liferay Portal Webinar",
  href: "#" // Link to the webinar page
};


// --- Main InsightsMegaMenu Component ---
export default function InsightsMegaMenu() {
  return (
    <>
      {/* Background Gradient */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_14%_0%,#00979E_0%,#0E7BF800_60%)] opacity-40" /> */}

      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] py-12">
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Cards */}
          <div className="col-span-5">
            <div className="flex flex-col gap-5 w-full max-w-[588px]">
              {insightLinks.map((link) => (
                <a href={link.href} key={link.title} className="group flex items-center gap-4 p-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/80 transition-colors duration-300 h-[130px]">
                  <div className="text-white/70 group-hover:text-white transition-colors"><img src={link.icon} alt={link.title} className="w-6 h-6 object-contain" /></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-white">{link.title}</h3>
                    <p className="text-base text-white/60 mt-1">{link.description}</p>
                  </div>
                  <IconArrowRight className="size-8 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Event */}
          <div className="col-span-7">
            <h2 className="text-3xl font-bold max-w-1xl leading-tight mb-6">
              {featuredEvent.title}
            </h2>
            <a href={featuredEvent.href} className="block group">
                 <div className="overflow-hidden rounded-[14.35px] border-[1.2px] border-white/20 group-hover:border-white/40 transition-all duration-300">
                     <img 
                        src={featuredEvent.imageSrc} 
                        alt={featuredEvent.imageAlt}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                 </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}


