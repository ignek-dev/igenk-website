import { image } from "html2canvas/dist/types/css/types/image"
import { head } from "lodash"
export const items = [
  {
    title: "JVM Memory Tuning",
    desc: "Optimize JVM settings for enhanced performance with our Liferay Performance Tuning Services, improving efficiency.",
  },
  {
    title: "Code Optimization",
    desc: "Improve application logic and reduce processing time using Liferay Portal Performance optimization services.",
  },
  {
    title: "Liferay theme optimization",
    desc: "Enhance UI responsiveness and speed with Liferay DXP Performance Tuning techniques for better UX.",
  },
  {
    title: "Database Thread Pool & Connection Pool Optimization",
    desc: "Fine-tune database connections to boost performance using our Liferay Performance optimization services.",
  },
  {
    title: "Portal Tuning by Disabling Unnecessary Filters & enabling JS & CSS Caching",
    desc: "Increase portal speed with caching and filter optimizations via Liferay Portal Performance optimization services.",
  },
  {
    title: "Web server configuration improves performance",
    desc: "Maximize server efficiency and response times using Liferay DXP Performance Tuning best practices.",
  },
  {
    title: "Load Testing and Tuning",
    desc: "Simulate peak traffic and optimize system resources through Liferay Performance Tuning Services.",
  },
]

export const featureTabs = [
  "Performance Diagnostics",
  "Platform Optimisation",
  "Scalability & Load Readiness",
  "Stability & Reliability Engineering",
  "Continuous Performance Monitoring",
]

export const LiferayPerformanceTuningTitle1 = "Why Enterprises Choose IGNEK For Liferay"
export const LiferayPerformanceTuningTitle2 = "Performance Tuning?"
export const LiferayPerformanceTuningSubContent =
  "At IGNEK, our engineers combine hands-on expertise with modern performance tools to deliver precise, impactful optimization. From our first client to today, we stay committed to building long-term success."

export const LiferayPerformanceTuningData = [
  {
    title: "Pure Liferay Performance Expertise",
    desc: "We specialise exclusively in Liferay. Our tuning approach is grounded in deep platform knowledge, real-world enterprise workloads, and a clear understanding of how Liferay behaves at scale.",
  },
  {
    title: "Diagnostics Before Optimisation",
    desc: "We don’t apply generic fixes. Every tuning engagement starts with structured analysis and evidence-based diagnostics to ensure performance improvements are targeted, measurable, and safe.",
  },
  {
    title: "Platform-First, OOTB-Aligned Approach",
    desc: "Optimisation decisions respect Liferay’s architecture and recommended patterns. This ensures performance gains remain stable, upgrade-safe, and maintainable over time.",
  },
  {
    title: "Scalability and Stability Focus",
    desc: "We tune platforms to perform consistently under growth, peak traffic, and complex integrations—reducing risk and improving operational confidence.",
  },
  {
    title: "End-to-End Performance Visibility",
    desc: "Our assessments cover the full stack—from JVM and application behaviour to database interaction and infrastructure—eliminating blind spots that cause recurring issues.",
  },
  {
    title: "Continuous Optimisation Mindset",
    desc: "Performance tuning is not a one-time activity. We support ongoing monitoring, refinement, and advisory services to keep platforms healthy as usage and demands evolve.",
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

export const serviceDate = [
  {
    title: "Consistent User Experience",
    desc: "Improved response times and reduced latency ensure users experience predictable, smooth interactions across the platform—regardless of load or complexity.",
    image: "/images/liferay-pages-image/Enhanced-User-Experience.svg",
  },
  {
    title: "Scalable Platform Behaviour",
    desc: "We align the platform to handle growth confidently, ensuring Liferay scales without degradation as traffic, content, and integrations increase.",
    image: "/images/liferay-pages-image/Scalability.svg",
  },
  {
    title: "Production-Ready Load Assurance",
    desc: "Through controlled load validation, we confirm the platform performs reliably under real-world enterprise usage scenarios before issues surface in production.",
    image: "/images/liferay-pages-image/Load-Testing-Excellence.svg",
  },
  {
    title: "Efficient Data Processing",
    desc: "Optimised data access patterns improve throughput and reduce contention, enabling the platform to support complex content and transactional workloads efficiently.",
    image: "/images/liferay-pages-image/Database-Performance.svg",
  },
  {
    title: "Aligned Platform Configuration",
    desc: "Liferay configuration is tuned to match how the platform is actually used—ensuring resources are allocated appropriately and unnecessary overhead is removed.",
    image: "/images/liferay-pages-image/Tailored-Portal-Configuration.svg",
  },
  {
    title: "Optimised Server & Runtime Behaviour",
    desc: "Application and web server configurations are refined to maximise throughput, improve concurrency handling, and reduce runtime contention.",
    image: "/images/liferay-pages-image/Web-Application-Server.svg",
  },
  {
    title: "Resilient & Fault-Tolerant Operations",
    desc: "The platform is structured to recover gracefully from failures, reducing downtime and improving overall system reliability.",
    image: "/images/liferay-pages-image/Reliability-and-Fault.svg",
  },
  {
    title: "Optimised JVM Performance",
    desc: "Runtime behaviour is stabilised through controlled memory management and garbage collection strategies aligned with enterprise workloads.",
    image: "/images/liferay-pages-image/JVM-Fine-Tuning.svg",
  },
]

export const item = [
  {
    title: "JVM Memory Tuning",
    desc: "Optimize heap memory, adjust GC threads, and tune memory usage for peak JVM performance.",
    details: [
      "Optimize heap sizing (initial, max)",
      "OConfigure garbage collectors & GC threads",
      "Adjust Metaspace & thread stack size",
      "Generate heap dumps for debugging",
      "Use tools like JVisualVM, JConsole",
    ],
  },
  {
    title: "Code Optimization",
    desc: "Improve code efficiency and reduce CPU overhead for faster execution.",
    details: [
      "Optimize search indexing",
      "Improve code efficiency through splitting & refactoring",
      "Reduce unnecessary database calls",
      "Implement lazy loading",
      "Use optimized algorithms and data structures",
      "Clean up loops, iterations, and external dependencies",
      "Reduce heavy transactions & log overhead",
    ],
  },
  {
    title: "Liferay theme optimization",
    desc: "Enhance UI responsiveness and reduce CSS/JS load times.",
    details: [
      "Minify & compress CSS/JS",
      "Optimize and compress images",
      "Apply lazy loading",
      "Use CSS sprites",
      "Remove unused assets",
      "Leverage CDN for faster delivery",
    ],
  },
  {
    title: "Database Thread & Connection Pool Tuning",
    desc: "Tune database connection pools to reduce latency.",
    details: [
      "Optimize thread and connection pools",
      "Fine-tune connection handling",
      "Reduce pool contention",
      "Improve transaction efficiency",
    ],
  },
  {
    title: "Portal Tuning & Filter Optimization",
    desc: "Improve overall page rendering time by optimizing filters and caching.",
    details: ["Disable Unnecessary Filters", "Enable JavaScript & CSS Caching", "Refine portal-level performance configurations"],
  },
  {
    title: "Web Server Configuration Optimization",
    desc: "Fine-tune web server parameters for higher throughput.",
    details: [
      "Implement caching (content, reverse proxy, HTTP headers)",
      "Enable load balancing & clustering",
      "Use CDNs for faster asset delivery",
    ],
  },
  {
    title: "Load Testing and Tuning",
    desc: "Simulate heavy traffic to find and fix performance bottlenecks.",
    details: [
      "Use JMeter, Gatling for performance simulations",
      "Analyze bottlenecks and adjust configurations",
      "Implement scaling and caching strategies",
      "Monitor key metrics for continuous improvement",
    ],
  },
]

export const liferayPerformanceTuning = {
  label: "Liferay Services",
  heading: "Liferay",
  heading2: "Performance Tuning",
  description:
    "We approaches performance tuning as a platform discipline—diagnosing ",
  description2:  
    "bottlenecks across architecture, configuration, and runtime behaviour to ",
  description3:
    "restore stability, scalability, and predictable performance at enterprise scale.",
};

export const liferayPerformanceFeatures = {
  heading: "Common Liferay Performance Challenges We Address",
  description:
    "Performance degradation in Liferay typically emerges from accumulated architectural, configuration, and operational decisions—not from a single failing component. Our performance engagements focus on identifying systemic constraints and restoring platform balance so Liferay performs consistently under real enterprise workloads.",
  features: [
    {
      title: "Unpredictable Page Response",
      description:
        "We address experience slowdowns caused by rendering overhead, asset delivery inefficiencies, and request-processing bottlenecks—ensuring consistent response times across user journeys.",
    },
    {
      title: "Data Access Inefficiencies",
      description:
        "We identify and correct database interaction patterns that limit throughput, including query behaviour, indexing strategy, and transactional load that impacts overall platform responsiveness.",
    },
    {
      title: "Resource Saturation",
      description:
        "When CPU, memory, or thread resources are over-consumed, platform stability suffers. We rebalance resource utilisation to restore predictable runtime behaviour.",
    },
    {
      title: "Scaling Constraints Under Load",
      description:
        "We resolve limitations that surface during peak usage by aligning caching strategies, clustering models, and deployment topology with Liferay’s scalability patterns.",
    },
    {
      title: "Search & Indexing Bottlenecks",
      description:
        "We stabilise indexing behaviour and optimise search execution to ensure fast, reliable discovery across content-heavy platforms.",
    },
    {
      title: "Operational Instability",
      description:
        "Recurring restarts, degraded sessions, or inconsistent behaviour are symptoms of deeper platform issues. We focus on stabilising the environment to ensure reliability over time.",
    },
  ],
};

export const liferayPerformanceOutcome = {
  heading: "Measured Platform Improvements ",
  heading2: "After Liferay Performance Tuning",
  description:
    "Our tuning engagements are designed to produce measurable improvements that enterprises can rely on long-term. It restores confidence in the platform by improving operational predictability.",
};

export const liferayPerformanceWhatWeDo = {
  heading: "Liferay Performance Tuning ",
  heading2: "Execution Areas",
  description:
    "We focus on the runtime, configuration, and architectural layers that directly influence platform behaviour under enterprise workloads. Each tuning activity is driven by diagnostics, evidence, and measurable impact—not assumptions.",
};

export const talkToExpertPerformance = {
  heading: "Get Expert Guidance on Liferay Performance Tuning",
  description: "Sustainable performance is achieved through the right architectural decisions, disciplined tuning, and continuous optimisation. We help enterprises restore platform stability, improve scalability, and ensure their Liferay environments perform reliably under real-world demand.",
  buttonText: "Start Performance Tuning",
};

