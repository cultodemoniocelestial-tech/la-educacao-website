import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  type?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp";
}

export function AnimatedElement({
  children,
  delay = 0,
  duration = 600,
  type = "fadeInUp",
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationMap = {
    fadeInUp: "animate-in fade-in slide-in-from-bottom-4",
    fadeInLeft: "animate-in fade-in slide-in-from-left-8",
    fadeInRight: "animate-in fade-in slide-in-from-right-8",
    scaleIn: "animate-in fade-in zoom-in-95",
    slideInUp: "animate-in slide-in-from-bottom-8",
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationMap[type] : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

export function FloatingElement({ children }: { children: ReactNode }) {
  return (
    <div className="animate-bounce" style={{ animationDuration: "3s" }}>
      {children}
    </div>
  );
}

export function GlowingElement({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function ParallaxElement({
  children,
  offset = 50,
}: {
  children: ReactNode;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrolled = (windowHeight - elementTop) / (windowHeight + 300);
        setTranslateY(scrolled * offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export function PulseElement({ children }: { children: ReactNode }) {
  return <div className="animate-pulse">{children}</div>;
}
