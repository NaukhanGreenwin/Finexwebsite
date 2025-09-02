"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics (in production, send to analytics)
          const value = 'value' in entry ? entry.value : entry.duration;
          console.log(`${entry.name}: ${value}ms`);
          
          // You can send these to your analytics service
          // analytics.track('web-vital', {
          //   name: entry.name,
          //   value: value,
          // });
        }
      });

      // Observe Web Vitals
      try {
        observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
      } catch {
        // Fallback for older browsers
        console.log("Performance Observer not supported");
      }

      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
