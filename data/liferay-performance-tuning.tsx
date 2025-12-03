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
  "Enhanced User Interaction Speed",

  "Data Load Optimization",
  "Configuration Fine-Tuning",
  "Comprehensive Performance Analysis",
  "Proactive Monitoring and Maintenance",
]

export const LiferayPerformanceTuningTitle1 = "Why Choose IGNEK For Liferay"
export const LiferayPerformanceTuningTitle2 = "Performance Tuning?"
export const LiferayPerformanceTuningSubContent =
  "At IGNEK, Our expert engineers use up to date software’s and vast knowledge to craft solutions that match your needs and expectations. Putting clients first is our thing, and we’re proud to support our very first business client till today!"

export const LiferayPerformanceTuningData = [
  {
    title: "Performance Experts",
    desc: "Our specialists analyze and fine-tune your portal for maximum speed, reliability, and efficiency.",
  },
  {
    title: "Customized Optimization",
    desc: "We tailor performance strategies to your unique configurations, user load, and business requirements.",
  },
  {
    title: "Proactive Issue Resolution",
    desc: "We identify bottlenecks and optimize resources before they impact user experience.",
  },
  {
    title: "Scalability-First Approach",
    desc: "Prepare your portal for growth with optimized caching, clustering, and distributed deployments.",
  },
  {
    title: "End-to-End Performance Audits",
    desc: "From code profiling to server tuning, we monitor and optimize continuously for lasting improvements.",
  },
  {
    title: "Ongoing Support & Monitoring",
    desc: "We provide continuous guidance, ensuring your portal remains fast, stable, and future-ready.",
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
    title: "Enhanced User Experience",
    desc: "Delivering a faster, more responsive Liferay Portal through optimized resource allocation for efficient CPU, memory & disk use.",
    image: "/images/liferay-pages-image/Enhanced-User-Experience.svg",
  },
  {
    title: "Scalability",
    desc: "Prepare your Liferay environment for growth with scalable configurations, clustering, and distributed deploy.",
    image: "/images/liferay-pages-image/Scalability.svg",
  },
  {
    title: "Load Testing Excellence",
    desc: "We are very transparent in terms of work, culture & communication to build trust & strong bonding among employees",
    image: "/images/liferay-pages-image/Load-Testing-Excellence.svg",
  },
  {
    title: "Database Performance",
    desc: "Optimize database access with tuned configurations, indexing, and query optimizations for enhanced performance.",
    image: "/images/liferay-pages-image/Database-Performance.svg",
  },
  {
    title: "Tailored Portal Configuration",
    desc: "Customize Liferay Portal settings to fit your organization’s requirements, ensuring the platform meets your business needs.",
    image: "/images/liferay-pages-image/Tailored-Portal-Configuration.svg",
  },
  {
    title: "Web and Application Server Optimization",
    desc: "Fine-tune web and application server settings, including thread pools and connections, to maximize performance.",
    image: "/images/liferay-pages-image/Web-Application-Server.svg",
  },
  {
    title: "Reliability and Fault Tolerance",
    desc: "Increase the reliability of your portal with fine-tuned settings for clustering, failover mechanisms, and session replication.",
    image: "/images/liferay-pages-image/Reliability-and-Fault.svg",
  },
  {
    title: "Java Virtual Machine Fine-Tuning",
    desc: "Optimize JVM settings, including heap size and garbage collection, for improved Java application performance.",
    image: "/images/liferay-pages-image/JVM-Fine-Tuning.svg",
  },
]

export const item = [
  {
    title: "JVM Memory Tuning",
    desc: "Optimize heap memory, adjust GC threads, and tune memory usage for peak JVM performance.",
    details: [
      "Optimize Heap Memory → Set Initial Heap Size, Set Maximum Heap Size",
      "Optimize Garbage Collection → Choose Garbage Collector Selection, Adjust GC Threads Numbers",
      "Set Metaspace",
      "Set Thread Stack Size",
      "Generate Heap Dump on OutOfMemory Error",
      "Use JVM Memory Tuning tools like JVisualVM or JConsole",
    ],
  },
  {
    title: "Code Optimization",
    desc: "Improve code efficiency and reduce CPU overhead for faster execution.",
    details: [
      "Search Indexing Optimization",
      "Improve code reviews and efficiency with code splitting.",
      "Minimize Database Queries",
      "Data Lazy Loading",
      "Use Efficient Algorithms and Data Structures",
      "Optimize Loops and Iterations",
      "Review External Dependencies",
      "Avoid Heavy Transactions and Excessive Logging",
    ],
  },
  {
    title: "Liferay theme optimization",
    desc: "Enhance UI responsiveness and reduce CSS/JS load times.",
    details: [
      "Minification and Compression of CSS and Javascript files",
      "Optimize and compress images",
      "Lazy loading of the resources",
      "CSS Sprites to combine multiple images into a single image file",
      "Remove Unused CSS and JavaScript",
      "CDN Integration",
      "Keep External Dependencies Minimal",
    ],
  },
  {
    title: "Database Thread Pool & Connection Pool Optimization",
    desc: "Tune database connection pools to reduce latency.",
    details: [
      "Fine-tune Thread and Connection Pools",
      "Monitor and adjust connection pool settings based on database usage",
      "Implement database connection pooling strategies",
      "Regularly review and optimize database queries and transactions to reduce connection pool contention and improve overall performance.",
    ],
  },
  {
    title: "Portal Tuning by Disabling Unnecessary Filters & enabling JS & CSS Caching",
    desc: "Improve overall page rendering time by optimizing filters and caching.",
    details: ["Disable Unnecessary Filters", "Enable JavaScript & CSS Caching", "Optimize Web Server Configuration"],
  },
  {
    title: "Web server configuration improves performance",
    desc: "Fine-tune web server parameters for higher throughput.",
    details: [
      "Utilize caching mechanisms such as content caching, reverse proxy caching, and HTTP caching headers to reduce server load and improve response times.",
      "Implement load balancing and clustering techniques to distribute incoming traffic across multiple servers for improved scalability and fault tolerance.",
      "Utilize content delivery networks (CDNs) to cache and deliver static assets closer to end-users, reducing latency and improving overall website performance.",
    ],
  },
  {
    title: "Load Testing and Tuning",
    desc: "Simulate heavy traffic to find and fix performance bottlenecks.",
    details: [
      "Utilize tools like Apache JMeter or Gatling for load testing to simulate real-world scenarios and identify bottlenecks",
      "Analyze results to optimize system configurations such as thread pools, caching, and scalability",
      "Implement caching strategies and horizontal scaling to handle peak loads effectively.",
      "Monitor key performance metrics and iterate on tuning efforts for continuous optimization.",
    ],
  },
]

export const liferayPerformanceTuning = {
  label: "Liferay Services",
  heading: "Liferay Performance Tuning",
  heading2: "Performance Tuning",
  description:
    "Optimize your Liferay Portal with specialized Liferay Performance Tuning, ",
  description2:  
    "improving speed, stability, and resource efficiency for superior user experience.",
};

export const liferayPerformanceFeatures = {
  heading: "Common Liferay Performance Challenges We Solve",
  description:
    "Through expert Liferay Performance Tuning, we identify bottlenecks, optimize configurations, and deliver faster, more scalable, and reliable Liferay DXP experiences.",
  features: [
    {
      title: "Slow Page Load Times",
      description:
        "Delays caused by unoptimized code, heavy themes, or large assets are resolved through Liferay Performance Tuning.",
    },
    {
      title: "Inefficient Database Queries",
      description:
        "Poorly optimized queries slow down portals; we refine indexing and database performance for faster results.",
    },
    {
      title: "High Server Resource Usage",
      description:
        "Memory leaks, unbalanced loads, or heavy CPU usage are minimized with fine-tuned Liferay DXP Performance Tuning.",
    },
    {
      title: "Scalability Issues Under Heavy Traffic",
      description:
        "We prepare portals to handle spikes in traffic with clustering, caching, and distributed deployment.",
    },
    {
      title: "Poor Search and Indexing Performance",
      description:
        "Slow or inaccurate search results are fixed with optimized indexing and search tuning for seamless user experiences.",
    },
    {
      title: "Frequent Downtime and Instability",
      description:
        "Through proactive monitoring and fault-tolerant setups, we ensure reliable and stable Liferay Portal performance.",
    },
  ],
};

export const liferayPerformanceOutcome = {
  heading: "Outcome Of Our Liferay",
  heading2: "Performance Tuning Services",
  description:
    "Liferay Performance Tuning improves portal speed, stability, scalability, security, and resource efficiency for optimal performance.",
};

export const liferayPerformanceWhatWeDo = {
  heading: "What We Do With Our Liferay DXP ",
  heading2: " Performance Tuning Services",
  description:
    "We optimize Liferay DXP performance through server tuning, JVM tweaks, and database enhancements to boost speed, stability, and scalability.",
};

export const talkToExpertPerformance = {
  heading: "Liferay Optimization for Peak Performance",
  description: "Reduce bottlenecks, enhance throughput, and ensure stable portal operations.",
  buttonText: "Start Performance Tuning",
};

