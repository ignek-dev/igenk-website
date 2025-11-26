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
  const baseClasses = "border-[#E9E9E9] rounded-[0.313vw] mr-[0.438vw] border-[0.073vw] py-[0.583vw] px-[0.875vw] flex items-center justify-center  text-[1.021vw] text-[#313131]"
  const activeClasses = "z-10 bg-black text-white"
  const defaultClasses = "text-gray-600 hover:bg-gray-100"
  const disabledClasses = "text-gray-400 cursor-not-allowed opacity-50"

  return (
    <button
      type="button"
      onClick={!isDisabled ? onClick : undefined}
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
  maxVisiblePages?: number // Number of page buttons to show at once
}

export const Pagination = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 4 }: PaginationProps) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  // Generate smart page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    
    // If total pages is less than or equal to maxVisiblePages + 1, show all
    if (totalPages <= maxVisiblePages + 1) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Show first maxVisiblePages pages
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(i)
    }

    // Add ellipsis
    if (totalPages > maxVisiblePages) {
      pages.push("...")
    }

    // Add last page
    if (totalPages > maxVisiblePages) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="mt-[2.5vw] flex items-center justify-start" aria-label="Pagination">
      <div className="flex ">
        {/* First Button - Disabled when on first page */}
        <PageLink 
          onClick={() => onPageChange(1)} 
          isDisabled={isFirstPage} 
          className="rounded-l-md"
        >
          <ChevronsLeft className="mr-[0.292vw] h-[1.167vw] w-[1.167vw]" /> First
        </PageLink>

        {/* Back Button - Disabled when on first page */}
        <PageLink 
          onClick={() => onPageChange(currentPage - 1)} 
          isDisabled={isFirstPage}
        >
          <ChevronLeft className="mr-[0.292vw] h-[1.167vw] w-[1.167vw]" /> Back
        </PageLink>

        {/* Page Number Buttons */}
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === "...") {
            return (
              <div
                key={`ellipsis-${index}`}
                className="border-[#E9E9E9] mr-[0.438vw] border-[0.073vw] py-[0.583vw] px-[0.875vw] flex items-center justify-center text-[1.021vw] text-[#313131]"
              >
                ...
              </div>
            )
          }
          return (
            <PageLink
              key={pageNum}
              onClick={() => onPageChange(pageNum as number)}
              isActive={currentPage === pageNum}
            >
              {pageNum}
            </PageLink>
          )
        })}

        {/* Next Button - Disabled when on last page */}
        <PageLink 
          onClick={() => onPageChange(currentPage + 1)} 
          isDisabled={isLastPage}
        >
          Next <ChevronRight className="ml-[0.292vw] h-[1.167vw] w-[1.167vw]" />
        </PageLink>

        {/* Last Button - Disabled when on last page */}
        <PageLink 
          onClick={() => onPageChange(totalPages)} 
          isDisabled={isLastPage} 
          className="rounded-r-md"
        >
          Last <ChevronsRight className="ml-[0.292vw] h-[1.167vw] w-[1.167vw]" />
        </PageLink>
      </div>
    </nav>
  )
}