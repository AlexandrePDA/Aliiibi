"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

// Wraps children with an IntersectionObserver-driven reveal animation.
// No external animation lib — pure CSS classes + IntersectionObserver.
export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
    >
      {children}
    </div>
  );
}
