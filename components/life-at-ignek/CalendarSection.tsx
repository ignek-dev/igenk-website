'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

// --- MOCK DATA STRUCTURE ---
const lifeAtIgnekData = {
  'office-trip': [
    {
      tag: 'Office Trip',
      date: 'Aug 6 2025',
      title: "Team IGNEK's Unforgettable Escape to Kumbhalgarh",
      images: [
        '/images/life-at-ignek/calander-images/office-trip.png',
        '/images/life-at-ignek/calander-images/fun-friday.jpg', 
        '/images/life-at-ignek/calander-images/office-trip.png', 
      ],
    },
  ],
  'fun-friday': [
    {
      tag: 'Fun Friday',
      date: 'June 27 2025',
      title: 'Laughter, Games & Good Vibes – Fun Friday',
      images: [
        '/images/life-at-ignek/calander-images/fun-friday.jpg',
        '/images/life-at-ignek/calander-images/office-trip.png', 
      ],
    },
  ],
  'events': [],
  'festivals': [],
  'birthdays': [],
  'achievements': [],
};

const jumpIntoCategories = [
  { slug: 'fun-friday', name: 'Fun Friday', image: '/images/life-at-ignek/calander-images/fun-friday.jpg' },
  { slug: 'office-trip', name: 'Office Trips', image: '/images/life-at-ignek/calander-images/office-trip.png' },
  { slug: 'events', name: 'Events', image: '/images/life-at-ignek/calander-images/reach-out-1.png' }, 
  { slug: 'festivals', name: 'Festivals', image: '/images/life-at-ignek/calander-images/reach-out-2.png' }, 
  { slug: 'birthdays', name: 'Birthdays', image: '/images/life-at-ignek/calander-images/reach-out-1.png' }, 
  { slug: 'achievements', name: 'Achievements', image: '/images/life-at-ignek/calander-images/reach-out-2.png' },
];

const upcomingEvents = [
    { name: "Fun Friday Aug" },
    { name: "Diwali 2025" }
]

// --- MAIN COMPONENT ---
export default function CalendarSection() {
  const [selectedCategory, setSelectedCategory] = useState('office-trip');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeEvents = lifeAtIgnekData[selectedCategory] || [];
  const activeEvent = activeEvents.length > 0 ? activeEvents[0] : null;

  const handleCategoryClick = (slug) => {
    setSelectedCategory(slug);
    setActiveImageIndex(0);
  };
  
  return (
    <section className="overflow-x-none bg-white text-black">
      <div className="flex flex-col items-start px-4 sm:px-6 lg:flex-row lg:justify-center lg:gap-8 lg:px-8">
        {/* Left Column */}
        <aside className="w-full pt-[47px] lg:h-[875px] lg:w-[400px] lg:flex-shrink-0">
          <div className="sticky">
            <div className="max-h-[70vh] overflow-y-auto rounded-3xl bg-[#F7F8F9] p-6 lg:h-[875px] lg:max-h-full">
              <div className="flex items-center">
                <h2 className="text-4xl font-semibold">May 2025</h2>
              </div>
              <h3 className="text-2xl font-bold pt-4">Filters</h3>
              <div className="mt-4">
                <p className="text-sm font-medium text-black/60 pt-3">By month</p>
                <button className="mt-1 flex w-full items-center justify-between">
                  <span className="text-xl font-semibold">All time</span>
                  <ChevronDown className="h-6 w-6 text-black/70" />
                </button>
              </div>

              <div className="mt-6">
                <h4 className="text-2xl font-bold">Jump into</h4>
                <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-6">
                  {jumpIntoCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`text-center transition-transform duration-200 hover:scale-105 ${
                        selectedCategory === cat.slug ? "font-bold" : ""
                      }`}
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-full">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            selectedCategory === cat.slug ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-sm">{cat.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Center Column */}
        <main className="mt-8 w-full pt-[47px] lg:mt-0 lg:h-[875px] lg:max-w-[1028px]">
          {activeEvent ? (
            <>
              {/* Card 1: Event Details */}
              <div className="rounded-3xl bg-[#F7F8F9] p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full bg-gray-200 px-3 py-1.5 text-sm font-semibold tracking-wider text-gray-800 uppercase">
                      {activeEvent.tag}
                    </span>
                    <h3 className="mt-3 text-4xl leading-tight font-bold">{activeEvent.title}</h3>
                  </div>
                  <span className="text-md rounded-full bg-white px-4 py-2 font-semibold whitespace-nowrap text-black/70">
                    {activeEvent.date}
                  </span>
                </div>
              </div>

              {/* Card 2: Image Carousel */}
              <div className="mt-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    key={activeImageIndex} 
                    src={activeEvent.images[activeImageIndex]}
                    alt={activeEvent.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                </div>
                {activeEvent.images.length > 1 && (
                  <div className="flex justify-center space-x-2 py-4">
                    {activeEvent.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          activeImageIndex === index ? "bg-black" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex h-96 items-center justify-center rounded-3xl bg-[#F7F8F9] p-5">
              <p className="text-black/60">Select a category to see the moments!</p>
            </div>
          )}
        </main>

        {/* Right Column */}
        <aside className="mt-8 w-full pt-[47px] lg:mt-0 lg:h-[875px] lg:w-[400px] lg:flex-shrink-0">
          <div className="relative sticky h-[90%] space-y-8">
            <div className="rounded-3xl bg-[#F7F8F9] p-6">
              <div className="flex items-start gap-4">
                <div className="mt-2 gap-2">
                  {/* <span className="h-2 w-2 rounded-full bg-blue-500"></span> */}
                  <p className="text-5xl font-bold">18</p>
                  <span className="font-regular text-lg text-black/60">August</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <p className="font-regular text-lg text-black/50">Today</p>
                  </div>
                  <div className="mt-2 space-y-3">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.name}
                        className="max-w-[165px] rounded-full bg-[#2353FF1A] px-7 py-2 text-center text-base font-medium text-black"
                      >
                        {event.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 w-full rounded-3xl bg-[#F7F8F9] p-6">
              <h3 className="text-2xl font-bold">Join Us</h3>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-4">
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-1.png"
                    alt="User 1"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 2"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-1.png"
                    alt="User 3"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 4"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#F7F8F9]"
                  />
                </div>
                <Link
                  href="/careers"
                  className="group text-md flex items-center gap-3 font-semibold text-black transition-colors hover:text-blue-600"
                >
                  Reach out
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-black/20 transition-all group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}