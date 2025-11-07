import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react"
import React, { ReactNode } from "react"

// Define the prop types
type PageLinkProps = {
  href?: string
  children: ReactNode
  className?: string
  isActive?: boolean
  isDisabled?: boolean
}

const PageLink = ({
  href = "#",
  children,
  className = "",
  isActive = false,
  isDisabled = false,
}: PageLinkProps) => {
  const baseClasses =
    "flex items-center justify-center px-4 h-10 text-base font-medium"
  const activeClasses = "z-10 bg-black text-white"
  const defaultClasses = "text-gray-600 hover:bg-gray-100"
  const disabledClasses = "text-gray-400 cursor-not-allowed"

  return (
    <a
      href={href}
      className={`
        ${baseClasses}
        ${isActive ? activeClasses : defaultClasses}
        ${isDisabled ? disabledClasses : ""}
        ${className}
      `}
      aria-disabled={isDisabled}
    >
      {children}
    </a>
  )
}

export const Pagination = () => {
  return (
    <nav
      className="mt-16 flex items-center justify-start"
      aria-label="Pagination"
    >
      <div className="flex overflow-hidden rounded-md border border-gray-200">
        <PageLink href="#" className="rounded-l-md">
          <ChevronsLeft className="h-5 w-5 mr-1" /> First
        </PageLink>
        {/* --- UPDATED: "Back" button --- */}
        <PageLink href="#">
          <ChevronLeft className="h-5 w-5 mr-1" /> Back
        </PageLink>
        
        <PageLink href="#" isActive={true}>1</PageLink>
        <PageLink href="#">2</PageLink>
        <PageLink href="#">3</PageLink>
        <PageLink href="#">4</PageLink>
        <PageLink href="#" className="hidden sm:flex">
          ...
        </PageLink>
        <PageLink href="#" className="hidden sm:flex">
          25
        </PageLink>
        
        {/* --- UPDATED: "Next" button --- */}
        <PageLink href="#">
          Next <ChevronRight className="h-5 w-5 ml-1" />
        </PageLink>
        {/* --- UPDATED: "Last" button --- */}
        <PageLink href="#" className="rounded-r-md">
          Last <ChevronsRight className="h-5 w-5 ml-1" />
        </PageLink>
      </div>
    </nav>
  )
}