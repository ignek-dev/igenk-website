// components/FAQSection.tsx

import React from 'react';
import AccordionItem from './AccordionItem';
import ExpertCard from './ExpertCard';

const faqItems = [
  {
    title: 'What Services Do You Offer?',
    content: (
      <p>
        We offer end-to-end digital solutions including UX/UI design, custom development, digital
        transformation, staff augmentation, and integration services across platforms like Liferay, ReactJS,
        and more.
      </p>
    ),
  },
  {
    title: 'Do You Work With Small Businesses Or Only Large Enterprises?',
    content: (
      <p>
        We work with businesses of all sizes, from startups to large enterprises. Our solutions are tailored
        to meet the unique needs and goals of each client.
      </p>
    ),
  },
  {
    title: 'How do you ensure project quality and timelines?',
    content: (
      <p>
        We follow agile methodologies, conduct regular quality checks, and maintain transparent communication
        with clients to ensure projects are delivered on time and to the highest quality standards.
      </p>
    ),
  },
  {
    title: 'Can I hire a dedicated developer or team for my project?',
    content: (
      <p>
        Yes, we provide flexible engagement models, including dedicated developer or team hiring, to seamlessly
        integrate with your existing operations.
      </p>
    ),
  },
  {
    title: 'What technologies do you specialize in?',
    content: (
      <p>
        Our expertise spans a wide range of modern technologies including Java, React, Spring Boot, Liferay,
        ElasticSearch, TypeScript, and more.
      </p>
    ),
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-24">
      <div className="mx-auto w-full px-4 md:px-8 [@media(min-width:1440px)]:px-[150px] [@media(min-width:1920px)]:px-[192px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: FAQ Section */}
        <div>
          {/* Main Title and Description */}
          <h2 className="text-5xl font-bold leading-tight mb-8">
            Flexible Platforms.
            <span className="block">Scalable Experiences.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-md mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Ut et massa mi. Aliquam in hendrerit urna.
          </p>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        {/* Right Column: Expert Card */}
        <div className="sticky top-24"> 
          <ExpertCard />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;