"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export default function Tooltip({ text, children, className = "" }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 z-[100] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-sm"
          >
            {text}
            {/* Tiny arrow pointing up (Optional) */}
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-neutral-900/90"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}