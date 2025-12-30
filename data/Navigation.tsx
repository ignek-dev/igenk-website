// company data navigation component

export interface CompanyLink {
  image: string;
  title: string;
  description: string;
  href: string;
  subheading?: string;
}

export const companyLinks: CompanyLink[] = [
  {
    image: "/images/mega-menu/AboutUS.png",
    title: "About Us",
    description: "We are a digital solutions company focused on innovation and quality.",
    href: "/about-us",
  },
  {
    image: "/images/mega-menu/Careers.png", // Replace with your actual image path
    title: "Careers",
    description: "Join our team and grow your skills through exciting real-world projects.",
    href: "/career",
  },
    {
    image: "/images/mega-menu/LifeAtIgnek.png",
    title: "Life#IGNEK",
    subheading: "Coming Soon",
    description: "Experience a collaborative, creative, and energetic work culture at IGNEK.",
    href: "",
  },
]

export const contactDetails = {
  general: [
    { icon: "/images/icon/mail.png", text: "connect@ignek.com", href: "mailto:connect@ignek.com" },
    { icon: "/images/icon/teams.png", text: "info@ignek.com", href: "mailto:info@ignek.com" },
  ],
  sales: [
    { icon: "/images/icon/mail.png", text: "sales@ignek.com", href: "mailto:sales@ignek.com" },
    { icon: "/images/icon/whatsapp.png", text: "(+91) 635 157 6580", href: "tel:+916351576580" },
  ],
  hr: [
    { icon: "/images/icon/mail.png", text: "hr@ignek.com", href: "mailto:hr@ignek.com" },
    { icon: "/images/icon/whatsapp.png", text: "(+91) 932 849 5160", href: "tel:+919328495160" },
  ],

}

export const aboutDigitalExperienceData = {
  title:
    "We are a Liferay-Focused Digital Experience Company Enabling Smarter Enterprise Solutions",

  description:
    "IGNEK designs and delivers enterprise-grade digital experiences on Liferay, combining disciplined engineering, purposeful design, and platform-first implementation to support long-term business growth.",
  subtitle1: "General", 
  subtitle2: "Sales", 
  subtitle3: "HR",    
  location: "Ahmedabad, India.",

};


// insights data navigation component

export const insightLinks = [
  {
    icon: "/images/icon/blogs.png",
    title: "Blogs",
    description: "The latest industry news, updates and info.",
    href: "/blog",
  },
  {
    icon: "/images/icon/case-studies.png",
    title: "Case Studies",
    description: "Take a closer look at the projects we've delivered",
    href: "/portfolio",
  },
  {
    icon: "/images/icon/webinars.png",
    title: "Webinars",
    description: "Watch our latest organized webinar",
    href: "/webinar",
  },
  {
    icon: "/images/mega-menu/marketplace.png",
    title: "Marketplace",
    description: "Modules that make Liferay experience effortless.",
    href: "/marketplace",
  },
]

export const featuredEvent = {
  title: "Explore practical platform insights that help enterprises build resilient, long-lasting digital experiences.",
  // The path starts from the `public` directory
  imageSrc: "/images/mega-menu/upcoming-webinar.svg",
  imageAlt: "Customer Onboarding with Low Code/No-Code Capabilities of Liferay Portal Webinar",
  href: "/webinar", // Link to the webinar page
}

// Service data navigation component

export const featuredService = {
  imageSrc: "/images/mega-menu/sevices-megamenu/Services-megamenu.webp",
  title: "Build With The<br /> Top 3% of<br /> Tech Experts!",
  buttonText: "Book Consultant Now",
  buttonHref: "#",
}

export const digitalExperienceLinks = [
  { text: "DX Strategy", href: "/contact", iconUrl: "/images/mega-menu/dx-strategy.png" },
  { text: "DX Design", href: "/contact", iconUrl: "/images/mega-menu/dx-design.png" },
  { text: "DX Engineering", href: "/contact", iconUrl: "/images/mega-menu/dx-engineering.png" },
  { text: "DX Intelligence", href: "/contact", iconUrl: "/images/mega-menu/dx-intelligence.png" },
  { text: "DX Marketing", href: "/contact", iconUrl: "/images/mega-menu/dx-marketing.png" },
  { text: "DX Infrastructure", href: "/contact", iconUrl: "/images/mega-menu/dx-infrastructure.png" },
]

export const liferayServicesLinks = [
  { text: "Development & Customization", href: "/services/liferay-development-and-customization" },
  { text: "Upgradation", href: "/services/liferay-dxp-7-4-upgrade" },
  { text: "Migration", href: "/services/liferay-migration" },
  { text: "Architecture", href: "/services/liferay-architecture-design" },
  { text: "Performance Tuning", href: "/services/liferay-performance-tuning" },
  { text: "Ecommerce Development", href: "/services/liferay-ecommerce-development" },
  { text: "Consulting", href: "/services/liferay-consulting" },
  { text: "Support & Maintenance", href: "/services/liferay-support-and-maintenance" },
  { text: "Proof Of Concept", href: "/services/liferay-poc" },
  { text: "Expert Advice", href: "/services/liferay-expert-advice" },
  // { text: "Hire Liferay Devloper", href: "/services/liferay-hire-developer" },
  // { text: "Theme Development", href: "/services/liferay-theme-development" },
]

export interface SliderItem {
  text: string;
  icon: string;
}

export const sliderData: SliderItem[] = [
  { 
    text: "Certified Developers", 
    icon: "/images/mega-menu/sevices-megamenu/certified-liferay-developers.svg" 
  },
  { 
    text: "24×7 Support", 
    icon: "/images/mega-menu/sevices-megamenu/expert-support.svg" 
  },
  { 
    text: "Dedicated Team", 
    icon: "/images/mega-menu/sevices-megamenu/dedicated-skilled-team.svg" 
  },
  { 
    text: "Fast Delivery", 
    icon: "/images/mega-menu/sevices-megamenu/fast-project-delivery.svg" 
  },
  { 
    text: "Proven Expertise", 
    icon: "/images/mega-menu/sevices-megamenu/proven-technical-expertise.svg" 
  },
  { 
    text: "On-Demand Developers", 
    icon: "/images/mega-menu/sevices-megamenu/on-demand-developers.svg" 
  },
];

export const serviceTitleData = {
  title1: "Digital Experience",
  title2: "Liferay Services",
};


// Solution data navigation component

export interface IntegrationLink {
  id: number;
  text: string;
  icon: string;
  href: string; // This will start as empty/fallback and get updated
}

export const solutionsLinks = [
  { text: "Enterprise Websites", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e1.svg" },
  { text: "Employee Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e2.svg" },
  { text: "Digital Commerce", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e3.svg" },
  { text: "Partner Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e4.svg" },
  { text: "Supplier Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e5.svg" },
  { text: "Customer Experience", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/solution-e6.svg" },
]

export const initialIntegrationsConfig: IntegrationLink[] = [
  { id: 35704, text: "Matomo Integration with Liferay", href: "", icon: "/images/mega-menu/Integartion-e1.png" },
  { id: 2379, text: "Microsoft Teams Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e2.png" },
  { id: 21796, text: "Jira Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e3.png" },
  { id: 29103, text: "Twilio Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e4.png" },
  { id: 18883, text: "ZOOM Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e5.png" },
  { id: 17663, text: "Sonar Integration with Liferay", href: "", icon: "/images/mega-menu/Integration-e6.png" },
]

export const marketplaceLinks = [
  {
    text: "Batch Client Extension Generator",
    href: "https://marketplace.liferay.com/p/batch-client-extension-generator",
    icon: "/images/mega-menu/marketplace-e2.png",
  },
  {
    text: "AI Blog Workspace",
    href: "https://marketplace.liferay.com/p/ai-blog-workspace",
    icon: "/images/mega-menu/marketplace-e1.png",
  },
  {
    text: "Service Builder Migration Utility",
    href: "#",
    subheading: "Coming Soon",
    icon: "/images/mega-menu/solution-mega-icons/service-builder.png",
  },
  {
    text: "Liferay CE Email MFA",
    href: "https://marketplace.liferay.com/p/email-otp-authentication-for-community-edition-of-liferay",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ce-email-mfa.png",
  },
  {
    text: "Collection display grid view with Item Highlight",
    href: "https://marketplace.liferay.com/p/collection-display-grid-view-with-item-highlight",
    icon: "/images/mega-menu/solution-mega-icons/collection-display-grid-view-with-item-highlight.png",
  },
  {
    text: "Sticky Notes for the Portal",
    href: "https://marketplace.liferay.com/p/sticky-notes-for-the-portal",
    icon: "/images/mega-menu/solution-mega-icons/sticky-notes-for-a-portal-option.png",
  },
]

export const aiLinks = [
  {
    text: "AI Virtual Assistants (Public & Internal)",
    href: "/contact",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ai-1.svg",
  },
  {
    text: "Intelligent Content Creation & Publishing",
    href: "/contact",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ai-7.svg",
  },
  {
    text: "AI-Driven Workflow Optimization",
    href: "/contact",
    icon: "/images/mega-menu/solution-mega-icons/liferay-ai-8.svg",
  },
  // { text: "Personalization & Engagement", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-2.svg" },
  // { text: "Intelligent Search & Knowledge Discovery", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-3.svg" },
  // { text: "Autonomous Workflow Optimization", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-4.svg" },
  // { text: "Predictive Business Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-5.svg" },
  // { text: "AI-Enhanced Document Intelligence", href: "/contact", icon: "/images/mega-menu/solution-mega-icons/liferay-ai-6.svg" },
]

export const solutionTitleData = {
  title1: "Solutions",
  title2: "Integrations",
  title3: "Liferay Marketplace",
  title4: "Liferay + AI",
};