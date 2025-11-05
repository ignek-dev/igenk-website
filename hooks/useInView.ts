// hooks/useInView.ts
'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit & { triggerOnce?: boolean }) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is visible
        if (entry?.isIntersecting) {
          setIsInView(true)

          // If triggerOnce is true, unobserve the element
          if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        ...options,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options]) // Rerun effect if options change

  return [ref, isInView] as const
}