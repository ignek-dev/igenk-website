// components/common/Card.tsx

import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "lib/utils"

// Define the styles and variants for the card using CVA
const cardVariants = cva(
  // Base classes applied to all cards
  "transition-all duration-300",
  {
    variants: {
      // Different visual styles
      variant: {
        elevated: "bg-white shadow-lg hover:shadow-xl",
        outline: "bg-transparent border border-gray-200 hover:border-gray-300",
        filled: "bg-gray-100",
      },
      // Different padding sizes
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      // Different border radiuses (shapes)
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    // Default variants if none are provided
    defaultVariants: {
      variant: "elevated",
      padding: "md",
      radius: "lg",
    },
  }
)

// Define the props for the Card component
// It combines the CVA variants with standard React props like className and children
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> = ({ className, variant, padding, radius, children, ...props }) => {
  return (
    // We use clsx to merge the classes from CVA with any custom classes passed via the `className` prop
    <div className={cn(cardVariants({ variant, padding, radius }), className)} {...props}>
      {children}
    </div>
  )
}

export default Card
