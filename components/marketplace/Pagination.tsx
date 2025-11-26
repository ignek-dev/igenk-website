import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import React, { ReactNode } from "react"

// Define the prop types for PageLink
type PageLinkProps = {
  children: ReactNode
  className?: string
  isActive?: boolean
  isDisabled?: boolean
  onClick: () => void
}

const PageLink = ({ children, className = "", isActive = false, isDisabled = false, onClick }: PageLinkProps) => {
  const baseClasses = "border-[#E9E9E9] mr-[0.438vw] border-[0.073vw] py-[0.583vw] px-[0.875vw] flex items-center justify-center  text-[1.021vw] text-[#313131]"
  const activeClasses = "z-10 bg-black text-white"
  const defaultClasses = "text-gray-600 hover:bg-gray-100"
  const disabledClasses = "text-gray-400 cursor-not-allowed"

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={` ${baseClasses} ${isActive ? activeClasses : defaultClasses} ${
        isDisabled ? disabledClasses : ""
      } ${className} `}
    >
      {children}
    </button>
  )
}

// Define the prop types for Pagination
type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  return (
    <nav className="mt-[2.5vw] flex items-center justify-start" aria-label="Pagination">
      <div className="flex ">
        <PageLink onClick={() => onPageChange(1)} isDisabled={isFirstPage} className="rounded-l-md">
          <ChevronsLeft className="mr-[0.292vw] h-[1.167vw] w-[1.167vw]" /> First
        </PageLink>
        <PageLink onClick={() => onPageChange(currentPage - 1)} isDisabled={isFirstPage}>
          <ChevronLeft className="mr-[0.292vw] h-[1.167vw] w-[1.167vw]" /> Back
        </PageLink>

        {/* Page Number Display */}
        <div className="border-[#E9E9E9] mr-[0.438vw] border-[0.073vw] py-[0.583vw] px-[0.875vw] flex items-center justify-center  text-[1.021vw] text-[#313131]">
          Page {currentPage} of {totalPages}
        </div>

        <PageLink onClick={() => onPageChange(currentPage + 1)} isDisabled={isLastPage}>
          Next <ChevronRight className="ml-1 h-5 w-5" />
        </PageLink>
        <PageLink onClick={() => onPageChange(totalPages)} isDisabled={isLastPage} className="rounded-r-md">
          Last <ChevronsRight className="ml-1 h-5 w-5" />
        </PageLink>
      </div>
    </nav>
  )
}
