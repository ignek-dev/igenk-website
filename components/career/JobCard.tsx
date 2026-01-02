// components/career/JobCard.tsx

"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// --- TypeScript Interfaces for Type Safety ---

interface JobDescription {
  about: string
  responsibilities: string[]
  requirements: string[]
  preferred: string[]
}

interface Job {
  id: string
  postedAgo: string
  title: string
  experience: string
  type: string
  salary: string
  location: string
  description: JobDescription
}

interface JobCardProps {
  job: Job
}

// --- The Job Card Component ---

const JobCard = ({ job }: JobCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5.5 lg:p-6 lg:py-10 text-black shadow-sm">
      {/* Top section: Posted Ago, Title, and View Details Button */}
      <div className="flex flex-col gap-2.5 md:grid md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="mb-2 inline-flex items-center rounded-[8px] bg-[#309689]/10 px-2 py-1 text-xs lg:text-sm font-medium text-[#309689]">
            {job.postedAgo}
          </div>
          <h3 className="text-base! md:text-lg! lg:text-[1.458vw]! font-semibold">{job.title}</h3>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 md:pr-3 md:pb-1 text-sm md:text-base lg:text-xl font-medium w-fit">
          View Details
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Bottom section: Info and Apply Button */}
      <div className="mt-4 lg:mt-2 flex flex-col md:flex-row md:items-center justify-between gap-5.5 md:gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-6 lg:gap-y-2 text-xs md:text-sm lg:text-lg font-medium text-gray-600">
          <span className="flex items-center gap-1.5 lg:gap-3">
            <Image src="/images/icon/briefcase.png" alt="briefcase" width={14} height={14} className="w-3.5 h-3.5 lg:w-6 lg:h-6" /> {job.experience}
          </span>
          <span className="flex items-center gap-1.5 lg:gap-3">
            <Image src="/images/icon/clock.png" alt="clock" width={14} height={14} className="w-3.5 h-3.5 lg:w-6 lg:h-6" /> {job.type}
          </span>
          <span className="flex items-center gap-1.5 lg:gap-3">
            <Image src="/images/icon/wallet.png" alt="salary" width={14} height={14} className="w-3.5 h-3.5 lg:w-6 lg:h-6" /> {job.salary}
          </span>
          <span className="flex items-center gap-1.5 lg:gap-3">
            <Image src="/images/icon/map-pin.png" alt="location" width={14} height={14} className="w-3.5 h-3.5 lg:w-6 lg:h-6" /> {job.location}
          </span>
        </div>
        <Link
          href="#"
          className="w-full md:w-auto md:whitespace-nowrap text-center rounded-full bg-black px-8 py-3 text-sm lg:px-14 lg:py-3.5 lg:p20 text-white transition-transform duration-300 hover:scale-105"
        >
          Apply Now
        </Link>

      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: "24px" }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className=" border-t border-gray-100 pt-4 text-base lg:text-lg font-normal text-[#1F2937]">
              <h4 className="font-semibold">About the Role</h4>
              <p className="mt-2 text-p16 lg:text-lg">{job.description.about}</p>

              <h4 className="mt-4 font-semibold">Key Responsibilities:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-p16 lg:text-lg">
                {job.description.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4 className="mt-4 font-semibold">Requirements:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-p16 lg:text-lg">
                {job.description.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4 className="mt-4 font-semibold">Preferred Skills:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-p16 lg:text-lg">
                {job.description.preferred.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default JobCard
