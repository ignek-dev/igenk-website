"use client";
import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScheduleMeetingButton from "components/Button/ScheduleMeetingButton"; // Adjust path if needed

// --- Extended Interface for Detailed View ---
interface InfoSection {
  title: string;
  description: string;
}

interface AgendaItem {
  id: string;
  title: string;
  description: string;
}

interface WhyWatchData {
  title: string;
  description: string;
}

interface WebinarData {
  id: string;
  slug: string; // Added slug for routing
  title: string;
  shortDescription: string;
  
  // Hero Section Data
  fullTitle: string;
  heroDescription: string;

  // Details Section Data
  aboutWebinar: string;
  date: string;
  location: string;
  time: string;
  pricing: string;

  // Dynamic Image
  image: string;

  // Dynamic Content Sections (About Ignek, About Liferay, etc.)
  additionalSections: InfoSection[];

  agenda: AgendaItem[]; // New Agenda Array
  whyWatch: WhyWatchData; // New Section Data

  // For Event: To determine logic
  status: "upcoming" | "past";
}

// --- Expanded Mock Data (Acts as your Database) ---
const webinarsDB: WebinarData[] = [
  {
    id: "featured-1",
    slug: "customer-onboarding-liferay",
    title: "Customer Onboarding with Low Code",
    status: "past",
    shortDescription: "Learn how to streamline onboarding...",
    fullTitle: "Customer Onboarding With Low Code/ No-Code Capabilities of Liferay Portal",
    heroDescription:
      "Explore the possibilities of Liferay, the industry-leading digital experience platform, in this special webinar.",
    aboutWebinar:
      "We're excited to announce our upcoming webinar: \"Customer Onboarding With Low Code/No-Code Capabilities of Liferay Portal\" While working with businesses, we have seen that the onboarding process for new customers is the biggest source of headaches for them, and we always concentrate on finding solutions for the business's problems.",
    date: "26-27 Sep 2025",
    location: "Virtual Webinar",
    time: "7:30 PM - 8:00 PM",
    pricing: "Free",
    image: "/images/webinar/event-image.jpg",
    additionalSections: [
      {
        title: "About IGNEK",
        description:
          "IGNEK, a Digital Solutions provider, spearheads digital transformation in various industries with agile solutions to seize tomorrow’s opportunities, delivering advanced technology solutions and business initiatives globally with professional support.",
      },
      {
        title: "About Liferay",
        description:
          "Liferay helps organizations build for the future by enabling them to create, manage, and scale powerful solutions on the world’s most flexible Digital Experience Platform (DXP). Trusted globally by over a thousand companies spanning multiple industries, Liferay’s open-source platform facilitates the development of marketing and commerce websites, customer portals, intranets, and more.",
      },
    ],
    // --- New Agenda Data from Image ---
    agenda: [
      {
        id: "01",
        title: "01. Introduction",
        description: "Our industry specialist will walk you through the latest Low-code/No-code methodology trend."
      },
      {
        id: "02",
        title: "02. Low-Code / No-Code Concept",
        description: "Discover how to construct applications with minimal or no hand coding by using Liferay as a low-code/no-code development platform."
      },
      {
        id: "03",
        title: "03. How Is It Helpful To Business?",
        description: "Find out how Low-code/No-code may help businesses transition digitally and maintain a competitive edge in today's cutthroat market. Discover how to use Liferay's capabilities to automate your procedures as well."
      },
      {
        id: "04",
        title: "04. Onboarding Process",
        description: "Our engineers will present an onboarding process that will involve multi-level workflows, forms with document uploads, and different Liferay entities."
      },
      {
        id: "05",
        title: "05. Walkthrough The Liferay Workspace",
        description: "Discover how onboarding processes can be created using Liferay workspace to support multiple-level environments."
      },
      {
        id: "06",
        title: "06. Conclusion",
        description: "The advantages of utilizing Liferay's low-code and no-code features include the ability to construct a gateway that truly helps your intended audience based on these findings."
      },
      {
        id: "07",
        title: "07. Q&A",
        description: "During the live Q&A session, interact with our experts directly and have your questions addressed."
      }
    ], // Empty for now, or add generic items
    // --- New Data for "Why Watch" ---
    whyWatch: {
      title: "Why You Should Watch The Webinar",
      description: "Explore the possibilities of Liferay, the industry-leading digital experience platform, in this special webinar. Whether you are a company executive, developer, or IT specialist, this webinar will provide insightful knowledge on how Liferay may change your legacy onboarding process to an automated one."
    }
  },
  {
    id: "1",
    slug: "building-enterprise-liferay-1",
    title: "Building Enterprise Website With Liferay",
    status: "upcoming", 
    shortDescription: "Deliver better results with Liferay tools...",
    fullTitle: "Building Enterprise Website With Liferay DXP",
    heroDescription:
      "Join us to learn how Liferay DXP can transform your enterprise web presence with scalable, secure, and highly customizable solutions.",
    aboutWebinar:
      "In this session, we will dive deep into the architecture of Liferay DXP. We will cover module development, theme creation, and how to leverage the OSGi framework to build resilient enterprise applications.",
    date: "26-27 September 2025",
    location: "Virtual Webinar",
    time: "8:30 AM - 7:30 PM",
    pricing: "Free",
    image: "/images/webinar/card-event-image.png",
    additionalSections: [
      {
        title: "About IGNEK",
        description:
          "IGNEK, a Digital Solutions provider, spearheads digital transformation in various industries with agile solutions to seize tomorrow’s opportunities, delivering advanced technology solutions and business initiatives globally with professional support.",
      },
      {
        title: "About Liferay",
        description:
          "Liferay helps organizations build for the future by enabling them to create, manage, and scale powerful solutions on the world’s most flexible Digital Experience Platform (DXP). Trusted globally by over a thousand companies spanning multiple industries, Liferay’s open-source platform facilitates the development of marketing and commerce websites, customer portals, intranets, and more.",
      },
    ],
    agenda: [
      {
        id: "01",
        title: "01. Introduction",
        description: "Our industry specialist will walk you through the latest Low-code/No-code methodology trend."
      },
      {
        id: "02",
        title: "02. Low-Code/No-Code Page Building in Liferay",
        description: "Discover how Liferay's drag-and-drop interface and OOTB additives empower customers to create pages without writing code."
      },
      {
        id: "03",
        title: "03. Multilingual Content Management with Liferay",
        description: "Learn how Liferay handles multilingual content material, which includes translation workflows, language variations, and content material localization."
      },
      {
        id: "04",
        title: "04. Showcasing Liferay's OOTB Components and Features",
        description: "We'll spotlight key OOTB components and features applicable to multilingual page building, which includes language selectors, content fragments, and page templates."
      },
      {
        id: "05",
        title: "05. Building a Multilingual Page",
        description: "A Practical Demonstration: We'll stroll through a live demonstration of constructing a multilingual web page using Liferay's OOTB tools."
      },
      {
        id: "06",
        title: "06. Best Practices and Tips for Multilingual Liferay Sites",
        description: "We'll share best practices for structuring content, managing translations, and optimizing performance for multilingual websites."
      },
      {
        id: "07",
        title: "07. Conclusion",
        description: "Recap of key takeaways and benefits of using Liferay for multilingual website development."
      },
      {
        id: "08",
        title: "08. Q&A",
        description: "Live Q&A session with our Liferay experts."
      }
    ],
    whyWatch: {
      title: "Why You Should Watch The Webinar",
      description: "Join us to understand the core benefits of using Liferay DXP for large-scale enterprise applications."
    }
  },
  // ... You can add other webinars here
];

// --- Helper to fetch data ---
function getWebinarBySlug(slug: string): WebinarData | undefined {
  return webinarsDB.find((w) => w.slug === slug);
}

// --- Page Component ---
export default function WebinarDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const data = getWebinarBySlug(slug);

  // 2. State for Form Handling
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  if (!data) {
    notFound(); 
  }

  // --- LOGIC FOR BUTTON TEXT AND BEHAVIOR ---
  const isUpcoming = data.status === "upcoming";
  const ctaText = isUpcoming ? "Register Now" : "Get Presentation & Recording";

  // --- SCROLL FUNCTION ---
  const scrollToForm = () => {
    const formSection = document.getElementById("webinar-registration-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setStatus({ type: "error", message: "Please enter a valid email address." });
        setLoading(false);
        return;
    }

    formData.append("access_key", "f4dec7fc-2afe-4db7-9612-886b779847e9"); 
    formData.append("subject", `Webinar Registration: ${data?.title} (${data.status})`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      await response.json();
      
      if (response.ok) {
        setStatus({ type: "success", message: "Request received! We will be in touch." });
        form.reset();
        setTimeout(() => { setStatus({ type: "idle", message: "" }); }, 4000);
      } else {
        setStatus({ type: "error", message: "Submission failed. Please try again." });
        setTimeout(() => { setStatus({ type: "idle", message: "" }); }, 4000);
      }
    } catch (err) {
      console.log(err);
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  // const webinarButtonClasses = "px-16 py-5 text-[1.041vw]"; 

  return (
    <main className="w-full mt-[-1px]">
      
      {/* --- SECTION 1: HERO (Black Background) --- */}
      <section className="relative bg-black text-white pt-[6vw] pb-[6vw] text-center overflow-hidden">
        
        {/* Optional: Blue Glow Effect behind text (Matches your reference image style) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#0E7BF8] opacity-10 blur-[120px] pointer-events-none" />

        <div className="global-container relative z-10 flex flex-col items-center">
          
          {/* H1 Title */}
          <h1 className="text-[3.75vw] font-bold leading-[1.2] mb-[2.24vw] max-w-[80vw]">
            {data.fullTitle}
          </h1>

          {/* Description */}
          <p className="p18 text-[1.041vw] leading-[1.6] text-white max-w-[55vw] mb-[2.24vw]">
            {data.heroDescription}
          </p>

          {/* CTA Button using your Component */}
          <div className="flex justify-center">
            <ScheduleMeetingButton 
              btnName={ctaText} 
              isFullWidth={false}
              onClick={scrollToForm}
              showIcon={false} // <--- Hides icon here 
              // customClasses={webinarButtonClasses}
              //  sizeVariant="webinar-hero"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DETAILS & CONTENT (Light Background) --- */}
      <section className="global-container bg-[#F9FAF7] pt-[3.333vw] pb-[3.333vw] text-black">
        
        {/* 1. About Webinar Text */}
        <div className="mb-[1.875vw]">
          <h2 className="text-[2.5vw] font-semibold mb-[1.667vw]">About Webinar</h2>
          <p className="text-[1.041vw] leading-[1.6] text-[#374151]">
            {data.aboutWebinar}
          </p>
        </div>

        {/* 2. Key Details Grid (Flex implementation with Dividers) */}
        <div className="flex w-full mb-[1.875vw] items-stretch">
          
          {/* Date: Aligned Left. Max Width ~280px */}
          <div className="flex flex-col gap-[1.2vw] w-full max-w-[14.58vw]">
            <h4 className="text-[1.25vw] text-black">Date</h4>
            <p className="p24 text-[#4B5563]! font-medium!">{data.date}</p>
          </div>

          {/* DIVIDER: 
          */}
          <div className="w-[1px] bg-gray-300 mx-[6.09vw]"></div>

          {/* Location */}
          <div className="flex flex-col gap-[1.2vw] w-full max-w-[10.58vw]">
            <h4 className="text-[1.25vw] text-black">Location</h4>
            <p className="p24 text-[#4B5563]! font-medium!">{data.location}</p>
          </div>

          {/* DIVIDER */}
          <div className="w-[1px] bg-gray-300 mx-[6.09vw]"></div>

          {/* Timing */}
          <div className="flex flex-col gap-[1.2vw] w-full max-w-[12.58vw]">
            <h4 className="text-[1.25vw] text-black">Timing</h4>
            <p className="p24 text-[#4B5563]! font-medium!">{data.time}</p>
          </div>

          {/* DIVIDER */}
          <div className="w-[1px] bg-gray-300 mx-[6.09vw]"></div>

          {/* Pricing: Aligned Right. ml-auto pushes it to end if space allows. */}
          <div className="flex flex-col gap-[1.2vw] w-full max-w-[5.58vw]">
            <h4 className="text-[1.25vw] text-black">Pricing</h4>
            <p className="p24 text-[#4B5563]! font-medium! capitalize">{data.pricing}</p>
          </div>
        </div>

        {/* 3. Event Banner Image */}
        <div className="w-full relative aspect-[1534/753] rounded-[1.5vw] overflow-hidden shadow-lg mb-[3.021vw]">
           <Image
             src={data.image}
             alt={data.title}
             fill
             className="object-cover"
             priority
           />
        </div>

        {/* 4. Dynamic "About Host" & "About Technology" Sections */}
        <div className="flex flex-col gap-[3.021vw]">
          {data.additionalSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-[2.5vw] font-semibold mb-[1.5vw]">{section.title}</h2>
              <p className="text-[1.041vw] leading-[1.6] text-[#374151]">
                {section.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* --- SECTION 3: AGENDA (Black Background) --- */}
      {/* Renders only if agenda items exist */}
      {data.agenda && data.agenda.length > 0 && (
        <section className="bg-black text-white pt-[3.333vw] pb-[3.333vw]">
          <div className="global-container flex flex-col lg:flex-row gap-[1.875vw] relative">
            
            {/* LEFT: Sticky Header */}
            {/* 'lg:w-1/3' gives it about 33% width. 'sticky top-[10vw]' keeps it pinned. */}
            <div className="lg:w-1/2 flex flex-col items-start h-fit sticky top-[8vw]">
              <h2 className="text-[2.5vw] font-bold mb-[1.458vw]">Agenda Of Webinar</h2>
              <p className="p18 text-gray-300 mb-[1.458vw] leading-[1.6] max-w-lg">
                In this webinar, you&apos;ll learn how to use Liferay Portal in order to meet the expectations of today&apos;s market. We will also cover :
              </p>
              <ScheduleMeetingButton 
                btnName={ctaText} 
                isFullWidth={false}
                onClick={scrollToForm}
                showIcon={false} // <--- Hides icon here
                // customClasses={webinarButtonClasses}
                //  sizeVariant="webinar-hero"
              />
            </div>

            {/* RIGHT: Scrollable Cards */}
            {/* 'lg:w-2/3' gives it the remaining width. */}
            <div className="lg:w-2/3 flex flex-col gap-[2.5vw]">
              {data.agenda.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full border border-[#1F2937] rounded-[0.417vw] p-[1.875vw] px-[1.458vw] bg-black hover:bg-[#0a0a0a] transition-colors"
                >
                  <h4 className="text-[1.25vw] font-semibold mb-[1.458vw]">
                    {item.title}
                  </h4>
                  
                  {/* Separator Line */}
                  <div className="w-full h-[1px] bg-[#2d333b] mb-[1.458vw]"></div>
                  
                  <p className="p18 text-gray-300 leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      )}

      {/* --- SECTION 4: WHY WATCH & FORM (Light Background) --- */}
      <section id="webinar-registration-form" className="bg-[#F9FAF7] pt-[3.333vw] pb-[3.333vw]">
        <div className="global-container flex flex-col lg:flex-row gap-[7.4vw] relative">
          
          {/* LEFT: Sticky Text */}
          <div className="lg:w-1/2 flex flex-col items-start h-fit sticky top-[8vw]">
            <h2 className="text-[2.5vw] font-bold mb-[1.25vw] leading-tight">
              {data.whyWatch.title}
            </h2>
            <p className="p20 text-black leading-[1.6] max-w-xl ">
              {data.whyWatch.description}
            </p>
          </div>

          {/* RIGHT: Form Card */}
          <div className="lg:w-2/3">
             <div className="w-full bg-white rounded-[2.917vw] border-[1.4px] border-[#EBECF2] p-[2.917vw]">
                
                {/* Header: */}
                <h3 className="text-[1.875vw] font-semibold text-[#19213D] mb-[4.688vw]">
                  {ctaText}
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-[2.3vw]">
                  
                  {/* Row 1: Name Fields */}
                  <div className="flex gap-[1.75vw]">
                    <div className="w-1/2 flex flex-col gap-2">
                       <label className="text-[1.041vw] font-medium text-[#19213D] pb-[0.729vw]">
                         First name*
                       </label>
                       <input
                         name="first_name"
                         required
                         type="text"
                         placeholder="John"
                         className="w-full h-[3.5vw] px-4 rounded-lg border border-gray-200 outline-none focus:border-black transition-colors text-[1vw] autofill-text-dark"
                       />
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                       <label className="text-[1.041vw] font-medium text-[#19213D] pb-[0.729vw]">
                         Last name*
                       </label>
                       <input
                         name="last_name"
                         required 
                         type="text"
                         placeholder="Carter"
                         className="w-full h-[3.5vw] px-4 rounded-lg border border-gray-200 outline-none focus:border-black transition-colors text-[1vw] autofill-text-dark"
                       />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="flex flex-col gap-2">
                     <label className="text-[1.041vw] font-medium text-[#19213D] pb-[0.729vw]">
                       Email address*
                     </label>
                     <input 
                       name="email"
                       required 
                       type="email" 
                       placeholder="john@xyz.com"
                       className="w-full h-[3.5vw] px-4 rounded-lg border border-gray-200 outline-none focus:border-black transition-colors text-[1vw] autofill-text-dark"
                     />
                  </div>

                  {/* Row 3: Designation */}
                  <div className="flex flex-col ">
                     <label className="text-[1.041vw] font-medium text-[#19213D] pb-[0.729vw]">
                       Designation *
                     </label>
                     <input
                       name="designation" 
                       required 
                       type="text"
                       placeholder="Liferay Developer"
                       className="w-full h-[3.5vw] px-4 rounded-lg border border-gray-200 outline-none focus:border-black transition-colors text-[1vw] autofill-text-dark"
                     />
                  </div>

                  {/* Submit Button: 23px radius (1.2vw), Black BG */}
                  <div className="mt-[1.198vw]">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black text-white font-medium py-[1.5vw] rounded-[1.2vw] hover:opacity-90 transition-opacity text-[1.1vw] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                     {loading ? "Processing..." : ctaText}
                    </button>

                    {/* Status Messages */}
                    <div className="mt-3 text-[0.9vw] font-medium h-[1.2vw]">
                        {status.type === "success" && <span className="text-green-600">{status.message}</span>}
                        {status.type === "error" && <span className="text-red-500">{status.message}</span>}
                    </div>
                  </div>

                </form>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}