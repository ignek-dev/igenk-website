"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "lib/utils";

interface BackgroundLinesProps {
  children?: React.ReactNode;
  className?: string;
  lineCount?: number;
}

interface LineData {
  id: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
  delay: number;
  duration: number;
}

export const BackgroundLines: React.FC<BackgroundLinesProps> = ({
  children,
  className,
  lineCount = 300,
}) => {
  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    const colors = [
      "#ff6b6b",
      "#feca57",
      "#48dbfb",
      "#1dd1a1",
      "#5f27cd",
      "#ff9ff3",
      "#54a0ff",
      "#ff793f",
    ];

    const generatedLines = Array.from({ length: lineCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotate: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)] || "#ffffff",
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
    }));

    setLines(generatedLines);
  }, [lineCount]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-black text-white",
        className
      )}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {lines.map((line) => (
          <motion.span
            key={line.id}
            className="absolute block rounded-full"
            style={{
              width: "20px",
              height: "2px",
              top: `${line.y}vh`,
              left: `${line.x}vw`,
              rotate: `${line.rotate}deg`,
              backgroundColor: line.color,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
};
