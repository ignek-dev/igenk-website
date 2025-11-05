"use client"

import { ArrowRight, ChevronsUpDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import CalendarPopup from "./CalendarPopup"

// --- TYPE DEFINITIONS ---
interface LifeAtIgnekEvent {
  tag: string
  date: string
  title: string
  images: string[]
}

// FIXED (Step 1): Define the specific category slugs
type IgnekCategory = "office-trip" | "fun-friday" | "events" | "festivals" | "birthdays" | "achievements"

const lifeAtIgnekData: Record<IgnekCategory, LifeAtIgnekEvent[]> = {
  "office-trip": [
    {
      tag: "Office Trip",
      date: "Aug 6 2025",
      title: "Team IGNEK's Unforgettable Escape to Kumbhalgarh",
      images: [
        "/images/life-at-ignek/calander-images/office-trip.png",
        "/images/life-at-ignek/calander-images/fun-friday.jpg",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
  "fun-friday": [
    {
      tag: "Fun Friday",
      date: "June 27 2025",
      title: "Laughter, Games & Good Vibes – Fun Friday",
      images: [
        "/images/life-at-ignek/calander-images/fun-friday.jpg",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
  events: [
    {
      tag: "Events",
      date: "June 27 2025",
      title: "Laughter, Games & Good Vibes – Fun Friday",
      images: [
        "/images/life-at-ignek/calander-images/events.png",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
  festivals: [
    {
      tag: "Festivals",
      date: "June 27 2025",
      title: "Laughter, Games & Good Vibes – Fun Friday",
      images: [
        "/images/life-at-ignek/calander-images/festival.png",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
  birthdays: [
    {
      tag: "Birthdays",
      date: "June 27 2025",
      title: "Laughter, Games & Good Vibes – Fun Friday",
      images: [
        "/images/life-at-ignek/calander-images/birthdays.png",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
  achievements: [
    {
      tag: "Achievements",
      date: "June 27 2025",
      title: "Laughter, Games & Good Vibes – Fun Friday",
      images: [
        "/images/life-at-ignek/calander-images/achievements.png",
        "/images/life-at-ignek/calander-images/office-trip.png",
      ],
    },
  ],
}

const jumpIntoCategories: { slug: IgnekCategory; name: string; image: string }[] = [
  { slug: "fun-friday", name: "Fun Friday", image: "/images/life-at-ignek/calander-images/fun-friday.jpg" },
  { slug: "office-trip", name: "Office Trips", image: "/images/life-at-ignek/calander-images/office-trip.png" },
  { slug: "events", name: "Events", image: "/images/life-at-ignek/calander-images/events.png" },
  { slug: "festivals", name: "Festivals", image: "/images/life-at-ignek/calander-images/festival.png" },
  { slug: "birthdays", name: "Birthdays", image: "/images/life-at-ignek/calander-images/birthdays.png" },
  { slug: "achievements", name: "Achievements", image: "/images/life-at-ignek/calander-images/achievements.png" },
]

const upcomingEvents = [{ name: "Fun Friday Aug" }, { name: "Diwali 2025" }]

// --- MAIN COMPONENT ---
export default function CalendarSection() {
  const [selectedCategory, setSelectedCategory] = useState<IgnekCategory>("office-trip")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState(new Date("2025-05-01"))
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)

  const activeEvents = lifeAtIgnekData[selectedCategory] || []
  const activeEvent = activeEvents.length > 0 ? activeEvents[0] : null

  useEffect(() => {
    if (!activeEvent || activeEvent.images.length <= 1) return

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex === activeEvent.images.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [activeEvent])

  // Effect to close calendar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [calendarRef])

  const handleCategoryClick = (slug: IgnekCategory) => {
    setSelectedCategory(slug)
    setActiveImageIndex(0)
  }

  const formatDisplayDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" }
    return new Intl.DateTimeFormat("en-US", options).format(date)
  }

  return (
    <section className="overflow-x-none bg-white text-black">
      <div className="flex flex-col items-start px-4 sm:px-6 lg:flex-row lg:justify-center lg:gap-8 lg:px-8">
        {/* Left Column */}
        <aside className="w-full pt-[47px] lg:h-[875px] lg:w-[400px] lg:flex-shrink-0">
          <div className="sticky">
            <div className="max-h-[70vh] overflow-y-auto rounded-3xl bg-[#F7F8F9] p-6 lg:h-[875px] lg:max-h-full">
              <div className="flex items-center">
                <h2 className="letter-spacing-[-0.64px] line-height-[50px] mb-4 text-4xl font-medium">
                  {formatDisplayDate(selectedDate)}
                </h2>
              </div>
              <h3 className="letter-spacing-[-1.01px] line-height-[32px] mb-4 text-3xl font-medium">Filters</h3>
              <div className="relative mt-4" ref={calendarRef}>
                <span className="line-height-[27px] text-lg font-medium text-black/50">By month</span>
                <div className="mt-3 flex w-full items-center justify-between">
                  <h2 className="text-2xl font-semibold">All time</h2>
                  <button
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className="rounded-full border border-black/30 p-2"
                  >
                    <ChevronsUpDown
                      className={`h-6 w-6 text-black transition-transform duration-300 ${
                        isCalendarOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isCalendarOpen && (
                  <CalendarPopup
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    onClose={() => setIsCalendarOpen(false)}
                  />
                )}
              </div>

              <div className="mt-7">
                <h4 className="letter-spacing-[-0.64px] line-height-[32px] text-2xl font-semibold">Jump into</h4>
                <div className="mt-5 grid grid-cols-3 gap-x-11 gap-y-6">
                  {jumpIntoCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`text-center transition-transform duration-200 hover:scale-105 ${
                        selectedCategory === cat.slug ? "font-semibold" : "text-black/50"
                      }`}
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            selectedCategory === cat.slug ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-base">{cat.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Center Column */}
        <main className="relative mt-8 w-full pt-[47px] lg:mt-0 lg:h-[875px] lg:max-w-[1028px]">
          {activeEvent ? (
            <>
              {/* Card 1: Event Details (Unchanged) */}
              <div className="rounded-3xl bg-[#F7F8F9] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/50 px-4 py-2 text-lg font-normal whitespace-nowrap text-black">
                    {activeEvent.tag}
                  </span>
                  <span className="rounded-full border border-black/50 px-4 py-2 text-lg font-normal whitespace-nowrap text-black">
                    {activeEvent.date}
                  </span>
                </div>
                <h3 className="mt-4 text-4xl leading-tight font-bold">{activeEvent.title}</h3>
              </div>

              {/* Card 2: Image Carousel */}
              {activeEvent.images.length > 0 ? (
                <div className="mt-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                    {(() => {
                      const currentImageSrc: string = activeEvent.images[activeImageIndex] ?? activeEvent.images[0]!
                      return (
                        <Image
                          key={activeImageIndex}
                          src={currentImageSrc}
                          alt={activeEvent.title}
                          fill
                          className="object-cover transition-opacity duration-700 ease-in-out"
                          sizes="(max-width: 1024px) 90vw, 50vw"
                        />
                      )
                    })()}
                    {activeEvent.images.length > 1 && (
                      <div className="absolute top-[90%] left-1/2 flex -translate-x-1/2 justify-center space-x-2 py-4">
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
                </div>
              ) : (
                // Optional: Fallback in case an event has no images
                <div className="mt-6">
                  <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                    <p className="text-black/50">No images for this event.</p>
                  </div>
                </div>
              )}
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
                  <span className="text-lg font-normal text-black/60">August</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <p className="text-lg font-normal text-black/50">Today</p>
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
              <h3 className="text-3xl font-normal">Join Us</h3>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-5">
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-1.png"
                    alt="User 1"
                    width={45}
                    height={45}
                    className="z-[5] rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 2"
                    width={45}
                    height={45}
                    className="z-[4] rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 3"
                    width={45}
                    height={45}
                    className="z-[3] rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 4"
                    width={45}
                    height={45}
                    className="z-[2] rounded-full border-2 border-[#F7F8F9]"
                  />
                  <Image
                    src="/images/life-at-ignek/calander-images/reach-out-2.png"
                    alt="User 4"
                    width={45}
                    height={45}
                    className="z-[1] rounded-full border-2 border-[#F7F8F9]"
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
