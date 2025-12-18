export const featureTabs = [
  "Liferay-First upgrade Strategy",
  "Platform Stability",
  "Security Focus",
  "Minimal Customisation",
  "Enterprise Modernisation",
]

export const supprotAndMaintanceServices = [
  {
    text: "Strategic Roadmap",
    description:
      "By upgrading, organisations align their implementation with supported APIs, modern development patterns, and Liferay’s active innovation roadmap—reducing long-term risk and avoiding dead-end customisations.",
  },
  {
    text: "Operational Efficiency",
    description:
      "A well-executed 7.4 upgrade simplifies the platform by replacing legacy patterns with out-of-the-box capabilities, resulting in cleaner architecture and more predictable operations.",
  },
  {
    text: "Improved Delivery",
    description:
      "Liferay DXP 7.4 enables to build and evolve experiences faster through low-code tooling and improved content management. This allows digital teams to respond to business needs without heavy development cycles.",
  },
  {
    text: "Enterprise Security",
    description:
      "Running on a modern Liferay baseline ensures access to current security updates, improved authentication models, and governance capabilities expected in enterprise environments.",
  },
  {
    text: "Experience Foundation",
    description:
      "Upgrading to 7.4 provides a stable foundation on which enterprises can incrementally introduce personalization, headless delivery, workflow automation, and experience optimisation.",
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
    desc: "Adapt, extend, and configure faster using object based, low code tools reducing dependency on heavy development cycles.",
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
      "IGNEK is a Liferay boutique company with engineers dedicated exclusively to the platform, ensuring deep architectural knowledge.",
  },
  {
    text: "Best-Practice, <br/>OOTB-First Approach",
    description:
      "We leverage Liferay’s OOTB capabilities to reduce customisation while improving performance and upgrade readiness.",
  },
  {
    text: "Risk-Controlled <br/>Delivery",
    description:
      "Our upgrade approach minimises risk through structured assessments, controlled execution, and validation-driven delivery.",
  },
  {
    text: "Enterprise-Grade <br/>Security & Stability",
    description:
      "Every upgrade aligns with Liferay’s latest security standards and hardening practices to ensure platform resilience.",
  },
  {
    text: "Integration <br/>Continuity",
    description:
      "We maintain seamless integration with enterprise systems, identity providers, and business tools without operational disruption.",
  },
  {
    text: "Enablement <br/>Beyond Go-Live",
    description:
      "We provide knowledge transfer and guidance so teams can confidently operate and evolve on Liferay 7.4.",
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
    "We help enterprises move to Liferay DXP 7.4 using a structured, best-practice upgrade approach that prioritises stability, out-of-the-box capabilities, and long-term maintainability—while minimising risk and downtime.",
  subSection: {
    title: "Why Upgrade to Liferay DXP 7.4?",
    description:
      "Liferay DXP 7.4 represents a fundamental shift in how enterprises build, manage, and evolve digital experiences on the Liferay platform. It is designed to reduce operational complexity, improve platform stability, and enable teams to deliver experiences faster while staying aligned with Liferay’s best practices.",
  },
};

export const liferayDxUpgradeBenefits = {
  titleLine1: "What Enterprises Gain by ",
  titleLine2: "Upgrading to Liferay DXP 7.4?",
  description:
    "For organisations on older versions, upgrading to 7.4 focuses on building a stable, future-ready foundation that enables predictable operations and continuous digital evolution.",
};

export const liferayDxUpgradeProcess = {
  title: "Our Liferay DXP 7.4 Upgrade Approach",
  description:
    "At IGNEK, Liferay upgrades are platform re-alignments that strengthen architecture, ",
  description2:
    "reduce maintenance, and future-proof your DXP 7.4 platform.",
};

export const enhanceDigitalExperience = {
  titlePart1: "Post Upgrade Capabilities & ",
  titlePart2: "Experience Enablement",

  descriptionPart1:
    "Upgrading to Liferay DXP 7.4 establishes a modern, stable ",
  descriptionPart2:
    "foundation that allows enterprises to evolve digital experiences.",
};

export const whyChooseIgnek = {
  titlePart1: "Why Choose IGNEK for",
  titlePart2: "Liferay DXP 7.4 Upgrades?",

  descriptionPart1:
    "Upgrading Liferay is a strategic platform decision impacting stability, scalability, and long-term digital maturity, delivered by IGNEK with disciplined, implementation-level precision.",
};

export const talkToExpertUpgrade = {
  headingPart1: "Evaluate Your Liferay Upgrade Readiness with Experts",
  descriptionPart1: "Gain a structured assessment of your current Liferay platform to identify risks, dependencies, and upgrade opportunities, and define a clear, best-practice path to a stable, future-ready Liferay 7.4 implementation.",
};
