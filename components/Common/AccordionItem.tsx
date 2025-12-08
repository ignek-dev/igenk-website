// components/common/AccordionItem.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface AccordionItemProps {
  title: string;
  content: string | React.ReactNode;
  isOpen: boolean;            // NEW
  onToggle: () => void;       // 
  removeTopPadding?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  removeTopPadding = false,
}) => {
  return (
    <div className="w-full border-b border-gray-700">
      <button
        className={`flex w-full items-center justify-between pb-[1.563vw] text-left text-xl font-semibold text-white focus:outline-none
          ${removeTopPadding ? "pt-0" : "pt-[1.563vw]"}`}
        onClick={onToggle}
      >
        <span className="p24 leading-[36px]">{title}</span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 0 : 45 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-2xl text-gray-400 cursor-pointer"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.2765 4.27661C-1.42561 9.97871 -1.42561 19.2574 4.2765 24.9595C9.9786 30.6616 19.2573 30.6616 24.9594 24.9595C30.6615 19.2574 30.6615 9.97871 24.9594 4.27661C19.2573 -1.4255 9.9786 -1.4255 4.2765 4.27661ZM5.86749 5.8676C10.7097 1.02542 18.5262 1.02542 23.3684 5.8676C28.2106 10.7098 28.2106 18.5263 23.3684 23.3685C18.5262 28.2107 10.7097 28.2107 5.86749 23.3685C1.02531 18.5263 1.02531 10.7098 5.86749 5.8676ZM9.04947 10.6406L13.0269 14.618L9.04947 18.5955L10.6405 20.1865L14.6179 16.209L18.5954 20.1865L20.1864 18.5955L16.2089 14.618L20.1864 10.6406L18.5954 9.04958L14.6179 13.0271L10.6405 9.04958L9.04947 10.6406Z"
              fill="white"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pr-8 pb-[1.563vw] p16 leading-[25px] text-gray-400">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
