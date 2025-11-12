export const featureTabs = [
    "Data-driven Optimization",
    "Empower Digital Builders",
    "Seamless B2B Buying",
    "Low/no-code Empowerment",
  ]

export const supprotAndMaintanceServices = [
    {
      text: "Enhanced Functionality",
      description:
        "Liferay DXP 7.4 Upgrade introduces advanced features that streamline business processes, improve user experiences, and foster better collaboration across teams. These enhancements enable organizations to create more engaging and personalized digital experiences. ",
    },
    {
      text: "Optimized Performance ",
      description:
        "With the latest upgrade, expect improved load times and system responsiveness. Liferay DXP 7.4 Upgrade is designed to handle higher traffic volumes efficiently, ensuring that users enjoy a smooth and fast experience on your platforms.",
    },
    {
      text: "Stronger Security",
      description:
        "Security is a top priority, and Liferay DXP 7.4 Upgrade delivers robust security enhancements to protect your digital assets. This includes improved authentication mechanisms, better data encryption, and compliance with the latest security standards, helping organizations mitigate risks effectively.",
    },
    {
      text: "Support for New Features",
      description:
        "The Liferay DXP 7.4 Upgrade provides provides access to the latest tools and innovations. This allows businesses to integrate new functionalities that enhance operational efficiency, such as improved content management capabilities and advanced analytics.",
    },
    {
      text: "Seamless Integration",
      description:
        "Liferay DXP 7.4 Upgrade offers better integration capabilities with other systems and applications, ensuring that organizations can create a cohesive digital ecosystem. This helps streamline workflows and facilitates data sharing across platforms.",
    },
  ]

export const upgradePhases = [
    {
      phase: "1. Pre-Upgrade Phase",
      sections: [
        {
          title: "Assessment Of Current Environment",
          points: [
            "Analyze the existing application architecture, identifying customizations and integrations.",
            "Evaluate the performance and security aspects of the current system.",
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
            "Verify that the current database version is compatible with Liferay DXP 7.4.",
            "Review custom modules and themes for compatibility issues.",
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
            "Prepare the new server environment for Liferay DXP 7.4 installation.",
            "Install necessary software dependencies (Java, application server, database).",
          ],
        },
        {
          title: "Database Upgrade Steps",
          points: [
            "Stop the Liferay server to ensure data integrity.",
            "Create a new schema for the upgraded version and import existing data.",
            "Use the Liferay Upgrade Tool to run database migrations.",
          ],
        },
        {
          title: "Upgrading Extensions And Custom Modules",
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
      title: "Advanced Personalization",
      desc: "Create custom experiences for different user segments using enhanced personalization tools.",
    },
    {
      title: "Low-Code Experience Creation",
      desc: "Use low-code capabilities to design and customize digital experiences without extensive coding knowledge.",
    },
    {
      title: "Improved Workflow Automation",
      desc: "Automate content approvals, publishing processes, and task management more efficiently.",
    },
    {
      title: "Headless CMS Flexibility",
      desc: "Utilize headless CMS features to deliver content across various channels and devices.",
    },
    {
      title: "Integrated SEO & Accessibility Audits",
      desc: "We monitor performance, availability, user experience, security, backup, and updates.",
    },
    {
      title: "DocuSign Integration",
      desc: "Simplify document management through DocuSign integration for sending, tracking, & managing contracts.",
    },
  ]

export const dxpUpgradeServices = [
    {
      text: "Liferay <br/> Expertise",
      description:
        "Our team of certified professionals has extensive experience in Liferay implementations and upgrades, ensuring a seamless transition to DXP 7.4 with minimal disruptions.",
    },
    {
      text: "Customized <br/> Upgrade Strategies ",
      description:
        "We develop tailored upgrade strategies based on a thorough assessment of your current environment, aligning the upgrade with your specific business objectives.",
    },
    {
      text: "Comprehensive <br/> Upgrade Process",
      description:
        "Our structured upgrade process covers all phases, including pre-upgrade assessment, database migrations, custom module updates, and post-upgrade testing, ensuring no detail is overlooked.",
    },
    {
      text: "Enhanced </br> Security",
      description:
        "We implement the latest security features of Liferay DXP 7.4 to protect your digital assets, ensuring compliance and safeguarding sensitive information throughout the upgrade.",
    },
    {
      text: "Seamless </br>Integration",
      description:
        "Our focus on maximizing the capabilities of Liferay DXP 7.4 includes ensuring seamless integration with existing systems, enhancing functionality, and creating a cohesive digital ecosystem.",
    },
    {
      text: "Ongoing Support </br/> and Training",
      description:
        "We provide comprehensive training for your team post-upgrade and offer ongoing support to address any issues or questions, ensuring your organization fully leverages the new features.",
    },
  ]