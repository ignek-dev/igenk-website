"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// Define the properties the component will accept
interface CalendarPopupProps {
  selectedDate: Date
  onDateSelect: (date: Date) => void
  onClose: () => void
}

const CalendarPopup = ({ selectedDate, onDateSelect, onClose }: CalendarPopupProps) => {
  // State to manage the year being displayed in the calendar
  const [displayYear, setDisplayYear] = useState(selectedDate.getFullYear())
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // Handler for when a user clicks on a month
  const handleMonthClick = (monthIndex: number) => {
    const newDate = new Date(displayYear, monthIndex)
    onDateSelect(newDate) // Pass the selected date back to the parent
    onClose() // Close the popup
  }

  return (
    <div className="absolute top-full left-0 z-20 mt-2 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
      {/* Year Navigation */}
      <div className="mb-4 flex items-center justify-between px-2">
        <button
          onClick={() => setDisplayYear((y) => y - 1)}
          className="rounded-full p-1 transition-colors hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-lg font-bold">{displayYear}</span>
        <button
          onClick={() => setDisplayYear((y) => y + 1)}
          className="rounded-full p-1 transition-colors hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      {/* Grid of Months */}
      <div className="grid grid-cols-3 gap-2">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleMonthClick(index)}
            className={`rounded-lg p-2 text-center text-sm font-semibold transition-colors ${
              // Highlight the currently selected month and year
              selectedDate.getFullYear() === displayYear && selectedDate.getMonth() === index
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CalendarPopup
