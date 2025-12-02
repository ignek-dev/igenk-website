// components/Common/AccordionMain.tsx
"use client";

import React, { useMemo, useState } from "react";
import AccordionItem from "./AccordionItem"; // make sure AccordionItem accepts `removeTopPadding?: boolean`

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

  // CSS grid template for dynamic columns (works reliably with Tailwind + inline style)
  const gridStyle =
    columns && columns > 1
      ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
      : undefined;

  return (
    <div className="w-full">
      <div className="grid gap-[4.583vw]" style={gridStyle}>
        {itemsPerColumn.map((colItems, colIdx) => (
          <div key={colIdx}>
            {colItems.map((item, i) => {
              // compute global index so openIndex maps across all columns
              const perCol = Math.ceil(items.length / columns);
              const globalIndex = colIdx * perCol + i;
              const isOpen = openIndex === globalIndex;

              // first row in each column should have top padding removed
              const isFirstRowInColumn = i === 0;

              return (
                <AccordionItem
                  key={`${item.title}-${globalIndex}`}
                  title={item.title}
                  content={item.content}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? null : globalIndex)}
                  removeTopPadding={isFirstRowInColumn}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
