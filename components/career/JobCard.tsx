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
    <div className="rounded-2xl border border-gray-100 bg-white p-6 py-10 text-black shadow-sm">
      {/* Top section: Posted Ago, Title, and View Details Button */}
      <div className="grid grid-cols-[1fr_auto] items-end gap-4">
        <div>
          <div className="mb-2 inline-flex items-center rounded-[8px] bg-[#309689]/10 px-2 py-1 text-sm font-medium text-[#309689]">
            {job.postedAgo}
          </div>
          <h3 className="text-[1.75rem] font-semibold">{job.title}</h3>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 pr-3 pb-2 text-xl font-medium">
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
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg font-medium text-gray-600">
          <span className="flex items-center gap-3">
            <Image src="/images/icon/briefcase.png" alt="briefcase" width={24} height={24} /> {job.experience}
          </span>
          <span className="flex items-center gap-3">
            <Image src="/images/icon/clock.png" alt="clock" width={24} height={24} /> {job.type}
          </span>
          <span className="flex items-center gap-3">
            <Image src="/images/icon/wallet.png" alt="salary" width={24} height={24} /> {job.salary}
          </span>
          <span className="flex items-center gap-3">
            <Image src="/images/icon/map-pin.png" alt="location" width={24} height={24} /> {job.location}
          </span>
        </div>
        <Link
          href="#"
          className="gap-8 rounded-full bg-black px-14 py-3.5 text-xl font-semibold text-white transition hover:bg-gray-800"
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
            <div className=" border-gray-200 text-lg font-noraml text-[#1F2937]">
              <h4 className="">About the Role</h4>
              <p className="mt-2">{job.description.about}</p>

              <h4 className="mt-4 ">Key Responsibilities:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {job.description.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4 className="mt-4 ">Requirements:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {job.description.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4 className="mt-4 ">Preferred Skills:</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5">
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
