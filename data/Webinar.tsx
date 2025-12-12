import { head } from "lodash";

export interface WebinarData {
  id: string;
  title: string;
  category: "Webinar" | "Event";
  date?: string;
  time?: string;
  location?: string;
  cost?: string;
  link: string;
  image: string;
}

// --- Featured Webinar ---
export const featuredWebinar: WebinarData = {
  id: "featured-1",
  title: "Customer Onboarding with Low Code",
  category: "Webinar",
  link: "/webinars/customer-onboarding-liferay",
  image: "/images/webinar/event-image.jpg",
};

// --- Upcoming Webinars ---
export const upcomingWebinars: WebinarData[] = [
  {
    id: "1",
    title:
      "Customer Onboarding With Low Code/No Code Capabilities Of Liferay Portal",
    category: "Webinar",
    location: "Virtual",
    date: "13 November 2024",
    time: "7:00 PM IST",
    cost: "FREE",
    link: "/webinars/customer-onboarding-liferay",
    image:
      "/images/webinar/Customer-Onboarding-With-Low-Code-No-Code-Capabilities-Of-Liferay-Portal.webp",
  },
  {
    id: "2",
    title: "BUILDING ENTERPRISE WEBSITE WITH LIFERAY",
    category: "Webinar",
    location: "Virtual",
    date: "12 February 2025",
    time: "7:00 PM IST",
    cost: "FREE",
    link: "/webinars/building-enterprise-liferay-1",
    image: "/images/webinar/card-event-image.png",
  },
];

export const liferayWebinarsPage = {
  hero: {
    headingLine1: "Liferay DXP",
    headingLine2: "Learning Webinars",
    description:
      "Strengthen your expertise in Liferay DXP through focused technical webinars designed to deliver practical insights, architecture fundamentals, and real-world implementation strategies.",
  },

  pastWebinars: {
    heading: "Past Liferay ",
    headingLine2: " Webinars & Recorded Sessions",
    description:
      "Browse previously hosted Liferay webinars featuring expert-led sessions on DXP capabilities, technical best practices, and proven approaches for building scalable digital experiences.",
  },
};

export const webinarSection = {
  heading: "Check Out Our Newly",
  headingLine2: "Upcoming Webinars",
};

 