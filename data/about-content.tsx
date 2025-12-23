import { title } from "process"

export const aboutPageData = {
  heroTag: "About IGNEK",
  heroMaskVideo: "/images/career/multi-color-bg.mp4",

  whyCompaniesTrust: {
    heading: ["Why Companies", "Trust IGNEK?"],
    intro:
      "We deliver consistent, reliable, and practical Liferay-driven solutions that help organisations build scalable systems and long-term digital value.",

    sections: [
      {
        title: "Digital Excellence",
        description:
          "We build high-performing, maintainable solutions that help organisations adopt modern capabilities and achieve tangible, long-term results.",
      },
      {
        title: "Future-Ready Solutions",
        description:
          "From enterprise platforms to custom implementations, our systems are engineered for stability, adaptability, and sustainable growth.",
      },
      {
        title: "Collaborative Approach",
        description:
          "We work closely with stakeholders, ensuring every solution reflects business needs while meeting the highest standards of quality and clarity.",
      },
    ],
  },

  maskedHeadingSvg: "/images/about/about-us-text.svg",
}

export const coreValuesHeader = {
  heading: "Our Core Values",
  subheading:
    "Guiding principles that shape how we design, deliver, and support Liferay solutions—grounded in integrity, engineering discipline, and long-term client value.",
}

export type CoreValue = {
  number: string
  title: string
  description: string
  img: string
}

export const CORE_VALUES: CoreValue[] = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We commit to honesty, accountability, and transparency — ensuring every partnership is built on trust and long-term credibility.",
    img: "/images/about/integrity-img.png",
  },
  {
    number: "02",
    title: "Collaboration",
    description:
      "We believe the best outcomes come from shared ownership, open dialogue, and a mindset of solving challenges together.",
    img: "/images/about/collaboration-img.png",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "We don’t chase trends. We engineer meaningful solutions that deliver real value, drive efficiency, and future-proof digital ecosystems.",
    img: "/images/about/growth-img.png",
  },
  {
    number: "04",
    title: "Excellence",
    description: "From design to delivery, we bring precision, discipline, and quality engineering to every project — no shortcuts, no compromises.",
    img: "/images/about/adaptability-img.png",
  },
  {
    number: "05",
    title: "Growth",
    description: "We continuously evolve, adapt, and embrace new technologies to ensure our clients stay ahead in an ever-changing digital world.",
    img: "/images/about/adaptability-img.png",
  },
  {
    number: "06",
    title: "Impact",
    description: "Every solution we build aims to create measurable, sustainable impact — not just for today, but for the long road ahead.",
    img: "/images/about/adaptability-img.png",
  },
]

export const ceoSectionContent = {
  heading: "Heard From Our CEO",
  description: `
    We were set up in early 2019 and we are passionate about driving innovation through digital transformation.
    With a deep understanding of the rapidly evolving digital landscape, we empower organizations to thrive in the
    digital age. Our mission is to help businesses harness the power of technology to achieve their strategic goals
    and stay ahead in an ever-changing world.

    Through our software services, our aim is to improve customer experience, reduce operational costs,
    and improve business processes which will eventually lead to better revenue for our clients.

    Our core service offerings encompass: Web & CMS Development, Mobile Application Development,
    AI/ML, JavaScript Development, and Liferay Development.
  `,
  ceoName: "Bhavin Panchani",
  linkedIn: "https://in.linkedin.com/in/bhavin-panchani",
  imageSrc: "/images/about/ceo-img.png",
}

export interface TimelineImage {
  src: string
  alt: string
}

export interface TimelineCardData {
  year: number
  title: string
  description: string
  images: TimelineImage[]
  rotation: number
  marginTop: number
}

export const companyTimelineData: TimelineCardData[] = [
  {
    year: 2018,
    title: "IGNEK is Born",
    description:
      "Started by Mr Bhavin Panchani with a clear vision to build innovative digital solutions, rooted in a passion for design, development, and seamless experiences.",
    images: [
      { src: "/images/about/timeline/2018/img-1.JPG", alt: "Office-2018" },
      { src: "/images/about/timeline/2018/img-2.JPG", alt: "Office-2018" },
      { src: "/images/about/timeline/2018/img-3.JPG", alt: "Office-2018" }
    ],
    rotation: -2,
    marginTop: 5.698
  },
  {
    year: 2019,
    title: "First Global Client Win",
    description:
      "Successfully onboarded our first overseas client, setting the tone for a strong international presence and long-term collaborations.",
    images: [{ src: "/images/about/timeline/2019/img-1.jpg", alt: "Office-2019" }],
    rotation: 1.2,
    marginTop: 8.49
  },
  {
    year: 2020,
    title: "Embracing Remote Culture",
    description:
      "Adapted swiftly to global changes, expanded our remote delivery capabilities while maintaining top-notch project quality.",
    images: [{ src: "/images/about/timeline/2020/img-1.jpg", alt: "Office-2020" }],
    rotation: 1.2,
    marginTop: 2.083
  },
  {
    year: 2021,
    title: "Moved to a Bigger Space",
    description:
      "Shifted to a new office to accommodate our growing team and evolving infrastructure needs — a big step toward scalability.",
    images: [{ src: "/images/about/timeline/2021/img-1.jpeg", alt: "Office-2021" }],
    rotation: -2,
    marginTop: 8.438
  },
  {
    year: 2022,
    title: "Team IGNEK Crosses 25+",
    description:
      "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
    images: [{ src: "/images/about/timeline/2022/img-1.jpg", alt: "Office-2022" }],
    rotation: 1.2,
    marginTop: 9.219
  },
  {
    year: 2023,
    title: "New Service Verticals Launched",
    description:
      "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
    images: [{ src: "/images/about/timeline/2023/img-1.jpg", alt: "Office-2023" }],
    rotation: -2,
    marginTop: 1.563
  },
  {
    year: 2024,
    title: "A New Home Again",
    description:
      "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
    images: [{ src: "/images/about/timeline/2024/img-1.JPG", alt: "Office-2024" }],
    rotation: 1.2,
    marginTop: 9.219
  },
  {
    year: 2025,
    title: "IGNEK Goes Global",
    description:
      "Continued innovation and expansion with an even stronger focus on quality and long-term partnerships.",
    images: [{ src: "/images/about/timeline/2025/img-1.jpg", alt: "Office-2025" }],
    rotation: -2,
    marginTop: 3.854
  }
]

export const aboutJourneyContent = {
  title: "From Startup Spark To Tech Powerhouse",

  description:
    "From a small startup to a leading Liferay powerhouse, our journey reflects innovation and excellence.",
};

export type TeamMember = {
  id: string
  name: string
  role: string
  thumb: string
  photos: string[]
  linkedin?: string
}

export const teamSectionContent = {
  titleLine1: "Meet the people",
  titleLine2: "behind the magic",

  description:
    "Our passionate team of Managers, Liferay engineers, architects, and innovators ",
  descLine2:
    "powers IGNEK’s mission, turning complex challenges into performant, scalable, and ",
  descLine3:
    "future-ready digital experiences.",

  members: [
    {
      id: "kishan",
      name: "Kishan Khatsuriya",
      role: "Project Manager",
      thumb: "/images/about/kishan-1.jpg",
      photos: ["/images/about/kishan-1.jpg", "/images/about/kishan-2.png"],
      linkedin: "https://www.linkedin.com/in/kishan-khatsuriya-093540179/",
    },
    {
      id: "kishan2",
      name: "Kishan Khatsuriya",
      role: "Project Manager",
      thumb: "/images/about/kishan-1.jpg",
      photos: ["/images/about/kishan-1.jpg", "/images/about/kishan-2.png"],
      linkedin: "https://www.linkedin.com/in/kishan-khatsuriya-093540179/",
    },
    {
      id: "bhargav",
      name: "Bhargav Vaghasiya",
      role: "Liferay Practice Head",
      thumb: "/images/about/bhargav-1.jpg",
      photos: ["/images/about/bhargav-1.jpg", "/images/about/bhargav-2.png"],
      linkedin: "https://www.linkedin.com/in/bhargavvaghasiya/",
    },
    {
      id: "parth",
      name: "Parth Panchani",
      role: "Sales Head",
      thumb: "/images/about/parth-1.jpg",
      photos: ["/images/about/parth-1.jpg", "/images/about/parth-2.png"],
      linkedin: "https://www.linkedin.com/in/parth-panchani-682b02268/",
    },
    {
      id: "ayushi",
      name: "Ayushi Bhadauria",
      role: "Front-end Team Lead",
      thumb: "/images/about/ayushi-1.jpg",
      photos: ["/images/about/ayushi-1.jpg", "/images/about/ayushi-2.png"],
      linkedin: "https://www.linkedin.com/in/ayushi-bhadauria-847587179/",
    },
    {
      id: "simran",
      name: "Simran Dubey",
      role: "HR Manager",
      thumb: "/images/about/simran-1.jpg",
      photos: ["/images/about/simran-1.jpg", "/images/about/simran-2.png"],
      linkedin: "https://www.linkedin.com/in/simran-dubey-hr-433915225/",
    },
  ] as TeamMember[],
}

export type TestimonialData = {
  id: string
  type: "video-review" | "text"
  videoThumbnail?: string
  logo: string
  companyName: string
  quote: string
  authorName: string
  authorTitle: string
  authorAvatar: string
}

export const testimonialSectionContent = {
  title: "Words That Inspire Us",

  description:
    "Our clients’ trust and feedback fuel our commitment to deliver reliable, high-performing, and future-ready Liferay digital experiences.",

  testimonials: [
    {
      id: "video-review",
      type: "video-review",
      videoThumbnail: "/images/about/ayushi-1.jpg",
      logo: "/images/about/NAVVIS.webp",
      companyName: "NAVVIS",
      quote:
        "Reliability and expertise come to my mind when I think about Bhavin. I was particularly impressed by his reliability and flexibility - though working remotely with him and a time difference of a couple of hours, he responded quickly, reacted flexible to our changing demands and provided well thought-out solutions for things that were hard to solve before. No matter how tricky the problem, he made sure that the communication was always very friendly and clear. Anyone who needs Liferay expertise would be lucky to work with Bhavin.",
      authorName: "Vivienne Nürnberger",
      authorTitle: "Project Manager",
      authorAvatar: "/images/about/vivienne.jpeg",
    },
    {
      id: "unified-aviation",
      type: "text",
      logo: "/images/about/Mibusoft.webp",
      companyName: "Mibusoft Inc.",
      quote:
        "I was overseeing the development of a healthcare portal based on Liferay, led by Bhavin and his exceptional team. Bhavin's swift adoption of FHIR and HL7 healthcare standards showcased his commitment to staying at the forefront of industry advancements. Their expertise in Liferay development is truly remarkable. Bhavin and his dedicated team, known as IGNEK team, possess an innate understanding of the Liferay Portal environment.",
      authorName: "Frederic Morin",
      authorTitle: "Senior Programmer, Mibusoft Inc.",
      authorAvatar: "/images/about/noDp.webp",
    },
    {
      id: "edut",
      type: "text",
      logo: "/images/about/EduT.webp",
      companyName: "EduT",
      quote:
        "I have had privilege to work with Bhavin for one of Manufacturing portal on Liferay Platform. I had the pleasure of witnessing his exceptional expertise in Liferay. He is Liferay Machine who comes with his own bullets ( his Liferay team ). They know almost all Liferay features and more importantly they know very well what would be best/OOTB way for achieving particular requirements. Their technical proficiency and ability to tailor Liferay solutions to the specific needs of manufacturing portals are truly remarkable.",
      authorName: "Sarah Johnson",
      authorTitle: "CTO, EduT",
      authorAvatar: "/images/about/noDp.webp",
    },
  ] as TestimonialData[],
}

export const cardsData = [
  {
    title: "Business Acceleration",
    desc: "We accelerate delivery through optimised architectures, reusable components, and proven Liferay implementation frameworks.",
  },
  {
    title: "Custom Expertise",
    desc: "We design solutions that maximise Liferay’s out-of-the-box capabilities — reducing custom code and improving long-term maintainability.",
  },
  {
    title: "Collaborative Success",
    desc: "We work as an extension of your team, ensuring aligned decisions, transparent communication, and predictable project outcomes.",
  },
  {
    title: "Cutting-Edge Technologies",
    desc: "We apply modern engineering practices and cloud-ready architectures to build scalable, future-proof digital platforms.",
  },
  {
    title: "Well-Tested Delivery",
    desc: "Every solution is validated through strict QA processes to ensure performance, stability, and enterprise-grade security.",
  },
  {
    title: "Enterprise Solutions",
    desc: "We build Liferay platforms that integrate seamlessly with enterprise systems and support multi-site, multi-experience needs.",
  },
  {
    title: "Round-the-Clock Support",
    desc: "Our experts provide continuous monitoring and support to maintain high availability and long-term platform performance.",
  },
]

export const whatMakesUsStandOutData = {
  title: "What Sets IGNEK",
  titleLine2: " Apart?",

  description:
    "We combine deep Liferay expertise with a disciplined delivery approach, ",
  descLine2: "enabling organisations to build reliable, future-ready digital platforms.", 
};
