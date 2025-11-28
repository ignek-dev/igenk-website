"use client";

import React, { useMemo, useState } from "react";
import AccordionItem from "./AccordionItem"; // controlled version: isOpen + onToggle

export type AccordionEntry = {
  title: string;
  content: string | React.ReactNode;
};

type AccordionMainProps = {
  items: AccordionEntry[];
  defaultOpenIndex?: number | null;
  columns?: number; // how many visual columns to split into
};

export default function AccordionMain({
  items,
  defaultOpenIndex = null,
  columns = 1,
}: AccordionMainProps) {
  // single openIndex controls all items across columns
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  // split items into N columns (balanced)
  const itemsPerColumn = useMemo(() => {
    const perCol = Math.ceil(items.length / columns);
    const cols: AccordionEntry[][] = [];
    for (let c = 0; c < columns; c++) {
      cols.push(items.slice(c * perCol, c * perCol + perCol));
    }
    return cols;
  }, [items, columns]);

  return (
    <div className={`w-full`}>
      <div className={`grid gap-[4.583vw] md:grid-cols-${columns}`}>
        {itemsPerColumn.map((colItems, colIdx) => (
          <div key={colIdx}>
            {colItems.map((item, i) => {
              // compute global index so openIndex maps across all columns
              const globalIndex = colIdx * Math.ceil(items.length / columns) + i;
              const isOpen = openIndex === globalIndex;
              return (
                <AccordionItem
                  key={item.title + "-" + globalIndex}
                  title={item.title}
                  content={item.content}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? null : globalIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
