export const featureTabs = [
  "Liferay-First Upgrade Strategy",
  "Stability, Security & Performance Focus",
  "Minimal Customisation, Maximum Value",
  "Enterprise-Ready Modernisation",
]

export const supprotAndMaintanceServices = [
  {
    text: "Liferay’s Current & Future Roadmap",
    description:
      "By upgrading, organisations align their implementation with supported APIs, modern development patterns, and Liferay’s active innovation roadmap—reducing long-term risk and avoiding dead-end customisations.",
  },
  {
    text: "Reduced Operational Complexity",
    description:
      "A well-executed 7.4 upgrade simplifies the platform by replacing legacy patterns with out-of-the-box capabilities, resulting in cleaner architecture and more predictable operations.",
  },
  {
    text: "Improved Delivery Velocity",
    description:
      "Liferay DXP 7.4 enables teams to build and evolve experiences faster through low-code tooling, improved content management, and clearer separation of concerns. This allows digital teams to respond to business needs without heavy development cycles.",
  },
  {
    text: "Enterprise-Grade Security & Governance",
    description:
      "Running on a modern Liferay baseline ensures access to current security updates, improved authentication models, and governance capabilities expected in enterprise environments—supporting compliance, data protection, and platform resilience.",
  },
  {
    text: "Foundation for Experience Growth",
    description:
      "Rather than extending legacy implementations, upgrading to 7.4 provides a stable foundation on which enterprises can incrementally introduce personalization, headless delivery, workflow automation, and experience optimisation—without repeated rework.",
  },
]

export const upgradePhases = [
  {
    phase: "1. Pre-Upgrade Phase",
    sections: [
      {
        title: "Assessment Of Current Environment",
        points: [
          "Analyse existing architecture, customisations, and integrations",
          "Assess performance, stability, and security",
          "Identify technical risks and remediation paths",
        ],
      },
      {
        title: "Backup Data",
        points: [
          "Configuration Files: Backup crucial configuration files.",
          "Database: Ensure a complete backup of the existing database.",
          "Document Library: Backup repositories such as SharePoint and Documentum.",
          "Application Server: Create a backup of the application server for easy restoration.",
        ],
      },
      {
        title: "Compatibility Check",
        points: [
          "Database compatibility",
          "Custom module and theme validation",
          "Deprecated API and OSGi dependency checks",
        ],
      },
    ],
  },
  {
    phase: "2. Upgrade Phase",
    sections: [
      {
        title: "Setting Up The Environment",
        points: [
          "Prepare target infrastructure for Liferay DXP 7.4",
          "Install required dependencies (Java, server, DB)",
        ],
      },
      {
        title: "Database Upgrade",
        points: [
          "Stop the Liferay server to ensure data integrity.",
          "Create a new schema for the upgraded version and import existing data.",
          "Use the Liferay Upgrade Tool to run database migrations.",
        ],
      },
      {
        title: "Extension & Custom Module Upgrade",
        points: [
          "Upgrade Extensions and Custom Modules.",
          "Modify code based on API changes and dependencies.",
          "Rebuild and deploy updated custom modules using Gradle commands.",
        ],
      },
      {
        title: "Upgrading Themes",
        points: [
          "To guarantee compatibility with the latest version, update custom themes.",
          "Modify styles, templates, and scripts as necessary.",
          "Rebuild and deploy themes using the Liferay Theme Generator.",
        ],
      },
      {
        title: "Functional And Integration Testing",
        points: [
          "Conduct thorough testing to ensure all features, modules, and integrations work as expected.",
          "As problems or bugs come up during testing, find and fix them.",
        ],
      },
    ],
  },
  {
    phase: "3. Post-Upgrade Phase",
    sections: [
      {
        title: "User Acceptance Testing (UAT)",
        points: [
          "Include end users in verifying that the updated system satisfies their needs.",
          "Gather feedback and make necessary adjustments before the final rollout.",
        ],
      },
      {
        title: "Promotion To Production",
        points: [
          "Once UAT is complete and all issues are resolved, promote the upgraded platform to the production environment.",
          "Run final sanity checks to confirm that the system operates smoothly.",
        ],
      },
      {
        title: "Training & Support",
        points: [
          "Educate consumers about new features and functionalities; offer training sessions.",
          "Offer ongoing support to address any post-upgrade questions or issues.",
        ],
      },
    ],
  },
]

export const features = [
  {
    title: "Experience Personalisation",
    desc: "Deliver contextual, role-based experiences with simplified governance and consistent delivery across touchpoints.",
  },
  {
    title: "Low-Code Agility",
    desc: "Adapt, extend, and configure faster using object-based, low-code tools—reducing dependency on heavy development cycles.",
  },
  {
    title: "Workflow & Governance",
    desc: "Automate content and business processes with greater control, clarity, and operational consistency.",
  },
  {
    title: "Headless & Multi-Channel Ready",
    desc: "Reuse content and services across web, mobile, and external channels through API-driven delivery.",
  },
  {
    title: "Operational Insight",
    desc: "Gain better visibility into platform performance and usage to support proactive optimisation.",
  },
  {
    title: "Simplified Integrations",
    desc: "Connect external systems through a stable, flexible integration layer without added complexity.",
  },
]

export const dxpUpgradeServices = [
  {
    text: "Pure Liferay <br/>Focus",
    description:
      "IGNEK is a Liferay boutique company. Our engineers work exclusively with Liferay—deeply understanding its architecture, release patterns, and best-practice evolution.",
  },
  {
    text: "Best-Practice, <br/>OOTB-First Approach",
    description:
      "We prioritise Liferay’s out-of-the-box capabilities and recommended patterns—minimising unnecessary customisation while improving maintainability, performance, and future upgrade readiness.",
  },
  {
    text: "Risk-Controlled <br/>Delivery",
    description:
      "Our upgrade methodology is designed to reduce risk at every stage—through detailed assessments, controlled execution, and validation-led promotion. This ensures platform continuity while enabling modernisation.",
  },
  {
    text: "Enterprise-Grade <br/>Security & Stability",
    description:
      "We align every upgrade with Liferay’s latest security standards, authentication models, and platform hardening practices—strengthening resilience across the digital ecosystem.",
  },
  {
    text: "Integration <br/>Continuity",
    description:
      "We ensure existing enterprise systems, identity providers, content repositories, and business tools continue to work cohesively—without disrupting operational workflows.",
  },
  {
    text: "Enablement <br/>Beyond Go-Live",
    description:
      "Upgrading is only valuable if teams can fully leverage the platform. We provide structured knowledge transfer, documentation, and post-upgrade guidance—so your organisation can confidently evolve on Liferay 7.4.",
  },
]

export const LiferayUpgradeTitle1 = "Why Choose IGNEK For"
export const LiferayUpgradeTitle2 = "Liferay DXP 7.4 Upgrade Services?"
export const LiferayUpgradeSubContent =
  "Liferay DXP 7.4 Upgrade is a pivotal step for organizations looking to enhance their digital experience. At IGNEK, we specialize in delivering seamless and effective Liferay DXP upgrade services, ensuring you unlock the full potential of this powerful platform. Here are several compelling reasons to choose us for your upgrade"

export const LiferayUpgradeData = [
  {
    title: "Proven Liferay Expertise",
    desc: "Our certified Liferay professionals have delivered multiple successful DXP upgrades across industries, ensuring zero data loss, minimal downtime, and optimized performance.",
  },
  {
    title: "Tailored Upgrade Strategy",
    desc: "We don’t believe in one-size-fits-all solutions. Every upgrade plan is customized based on your current setup, integrations, and long-term digital goals.",
  },
  {
    title: "End-to-End Support",
    desc: "From pre-upgrade assessment to post-deployment support, our dedicated Liferay team stays with you at every stage — ensuring business continuity and smooth adoption.",
  },
  {
    title: "Risk-Free Migration",
    desc: "Our structured approach minimizes risks with detailed compatibility checks, data validation, and rollback planning to safeguard your operations.",
  },
  {
    title: "Performance and Security Focused",
    desc: "We fine-tune system performance, enhance scalability, and strengthen data security — helping you fully leverage Liferay DXP 7.4’s advanced features.",
  },
  {
    title: "Business-Centric Approach",
    desc: "We align every technical enhancement with your business outcomes — faster go-to-market, improved customer engagement, and reduced maintenance costs.",
  },
]

export const caseStudies = [
  {
    id: 1,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "Corporate",
    title: "Music License Management Portal: Onboarding & Data Integrity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    id: 2,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "FinTech",
    title: "Transforming Financial Services with Innovations",
    description:
      "Suspendisse potenti. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    id: 3,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "Healthcare",
    title: "Digital Health Platform: Patient-Centric Solutions",
    description:
      "Praesent ut ligula non mi varius sagittis. In hac habitasse platea dictumst. Cras non dolor. Vivamus quis mi.",
  },
  {
    id: 4,
    image: "/images/liferay-pages-image/caseStudy.png",
    tag: "E-commerce",
    title: "Scaling Online Retail with Cloud Technologies",
    description:
      "Curabitur at lacus ac velit ornare lobortis. Vestibulum suscipit nulla quis orci. Donec posuere vulputate arcu.",
  },
]
export const dynamicSteps = [
  { number: 1, title: "Digital Workflows Management" },
  { number: 2, title: "Personalized Experiences" },
  { number: 3, title: "Integration Capabilities" },
  { number: 4, title: "Enhanced Collaboration Tools" },
  { number: 5, title: "Optimized Mobile Experience" },
  { number: 6, title: "Reporting & Insights" },
  { number: 7, title: "Reduced Maintenance Efforts" },
]

export const liferayDxUpgradeHero = {
  badge: "Liferay Services",
  headingLine1: "Liferay",
  headingLine2: "DXP 7.4 Upgrade Services",
  description:
    "We help enterprises move to Liferay DXP 7.4 using a structured, best-practice upgrade approach that prioritises platform stability, out-of-the-box capabilities, and long-term maintainability—while minimising risk, downtime, and unnecessary customisation.",
  subSection: {
    title: "Why Upgrade to Liferay DXP 7.4?",
    description:
      "Liferay DXP 7.4 represents a fundamental shift in how enterprises build, manage, and evolve digital experiences on the Liferay platform. It is designed to reduce operational complexity, improve platform stability, and enable teams to deliver experiences faster—while staying aligned with Liferay’s long-term product direction and best practices.",
  },
};

export const liferayDxUpgradeBenefits = {
  titleLine1: "What Enterprises Gain by ",
  titleLine2: "Upgrading to Liferay DXP 7.4",
  description:
    "For organisations running older versions, upgrading to 7.4 is less about accessing new features and more about establishing a stable, future-ready foundation that supports clean delivery, predictable operations, and continuous evolution of digital experiences.",
};

export const liferayDxUpgradeProcess = {
  title: "Our Liferay DXP 7.4 Upgrade Approach",
  description:
    "At IGNEK, Liferay upgrades are platform re-alignments that strengthen architecture, ",
  description2:
    "reduce maintenance, and future-proof your DXP 7.4 platform.",
};

export const enhanceDigitalExperience = {
  titlePart1: "POST-UPGRADE CAPABILITIES &",
  titlePart2: "EXPERIENCE ENABLEMENT",

  descriptionPart1:
    "Upgrading to Liferay DXP 7.4 establishes a modern, stable foundation ",
  descriptionPart2:
    "that allows enterprises to evolve digital experiences with greater speed, control, and confidence.",
};

export const whyChooseIgnek = {
  titlePart1: "Why Enterprises Choose IGNEK for Liferay DXP 7.4 Upgrades",

  descriptionPart1:
    "Upgrading Liferay is not a version change—it is a platform decision that impacts stability, scalability, and long-term digital maturity. Enterprises partner with IGNEK because we approach upgrades with the same discipline, precision, and strategic intent as a full-scale Liferay implementation.",
};

export const talkToExpertUpgrade = {
  headingPart1: "Assess Your Liferay Upgrade Readiness",
  descriptionPart1: "Get expert guidance from Liferay specialists who focus exclusively on delivering clean, best-practice Liferay upgrades with long-term value in mind.",
};
