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
  const baseClasses = "flex items-center justify-center px-4 h-10 text-base font-medium"
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
    <nav className="mt-16 flex items-center justify-start" aria-label="Pagination">
      <div className="flex overflow-hidden rounded-md border border-gray-200">
        <PageLink onClick={() => onPageChange(1)} isDisabled={isFirstPage} className="rounded-l-md">
          <ChevronsLeft className="mr-1 h-5 w-5" /> First
        </PageLink>
        <PageLink onClick={() => onPageChange(currentPage - 1)} isDisabled={isFirstPage}>
          <ChevronLeft className="mr-1 h-5 w-5" /> Back
        </PageLink>

        {/* Page Number Display */}
        <span className="flex h-10 items-center justify-center bg-white px-4 text-base font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

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
