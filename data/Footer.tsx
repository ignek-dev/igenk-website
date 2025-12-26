import { title } from "process";

export const menus: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      items: [
        { label: "About", href: "/about-us" },
        { label: "Career", href: "/career" },
        { label: "Case Study", href: "/portfolio" },
        { label: "Blogs", href: "/blog" },
        { label: "Life At IGNEK", href: "#" },
        { label: "Marketplace", href: "/marketplace" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Enterprise Websites", href: "/contact" },
        { label: "Employee Experience", href: "/contact" },
        { label: "Digital Commerce", href: "/contact" },
        { label: "Partner Experience", href: "/contact" },
        { label: "Supplier Experience", href: "/contact" },
        { label: "Customer Experience", href: "/contact" },
      ],
    },
    // {
    //   title: "Liferay Services",
    //   items: [
    //     { label: "Development and Customization", href: "/services/liferay-development-and-customization" },
    //     // { label: "Theme Development", href: "/services/liferay-theme-development" },
    //     { label: "Expert Advice", href: "/services/liferay-expert-advice" },
    //     { label: "Proof Of Concept", href: "/services/liferay-proof-of-concept" },
    //     { label: "Ecommerce Development", href: "/services/liferay-ecommerce-development" },
    //     { label: "Migration", href: "/services/liferay-migration" },
    //     { label: "Support And Maintenance", href: "/services/liferay-support-and-maintenance" },
    //     { label: "Performance Tuning", href: "/services/liferay-performance-tuning" },
    //     { label: "Upgradation", href: "/services/liferay-upgrade" },
    //     { label: "Architecture Service", href: "/services/liferay-architecture-design" },
    //     { label: "Consultation", href: "/services/liferay-consulting-and-implementation-services" },
    //   ],
    // },
    // {
    //   title: "Integrations",
    //   items: [
    //     { label: "Matomo Integration with Liferay", href: "/contact" },
    //     { label: "Microsoft Teams integration with Liferay", href: "/contact" },
    //     { label: "Jira Integration With Liferay", href: "/contact" },
    //   ],
    // },
    // {
    //   title: "Hire Us",
    //   items: [
    //     { label: "Liferay", href: "/contact" },
    //     { label: "Spring Boot", href: "/contact" },
    //     { label: "ReactJS", href: "/contact" },
    //     { label: "Healthcare", href: "/contact" },
    //   ],
    // },
  ]

export const contactDetailsData = {
    title: "Emails",
    titleCall: "Call",
    titleOffice: "Office",  
  emails: [
    {
      label: "sales@ignek.com",
      href: "mailto:sales@ignek.com",
      sub: "(For sales inquiry)",
    },
    {
      label: "hr@ignek.com",
      href: "mailto:hr@ignek.com",
      sub: "(For hiring inquiry)",
    },
  ],

  calls: [
    {
      label: "(+91) 635 157 6580",
      href: "tel:+916351576580",
      sub: "(For sales inquiry)",
    },
    {
      label: "(+91) 932 849 5160",
      href: "tel:+919328495160",
      sub: "(For hiring inquiry)",
    },
  ],

  offices: [
    {
      label: "Ahmedabad, India",
      sub: "", // optional future address
    },
    {
      label: "Dubai, United Arab Emirates",
      sub: "",
    },
  ],
};

export const footercmpData = {
  title: "IGNEK",
  description:
    "DRIVING DIGITAL SOLUTIONS",
};

export const footerLegalLinksData = {
  copyright: "©2025 IGNEK. All rights reserved",

  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookies Policy", href: "#" },
    { label: "Map", href: "#" },
  ],
};
