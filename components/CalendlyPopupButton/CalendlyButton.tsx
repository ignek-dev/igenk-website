"use client";

import Image from "next/image";
import { ReactNode, useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
    };
  }
}

interface CalendlyButtonProps {
  url?: string;
  customButton?: boolean;
  customButtonContent?: ReactNode;
}

export default function CalendlyButton({
  url = "https://calendly.com/ignek/30min",
  customButton = false,
  customButtonContent,
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => console.log("Calendly loaded");
    document.body.appendChild(script);
  }, []);

  const handleOpenCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      alert("Calendly widget is still loading. Please try again in a moment.");
    }
  };

  if (customButton && customButtonContent) {
    return (
      <div onClick={handleOpenCalendly} className="inline-block cursor-pointer">
        {customButtonContent}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label="Calendar"
      onClick={handleOpenCalendly}
      className="nav-round-btn"
    >
      <div className="nav-round-btn-inner">
        <Image
          src="/images/icon/calendar.png"
          alt="calendar"
          width={28}
          height={28}
        />
      </div>
    </button>
  );
}
