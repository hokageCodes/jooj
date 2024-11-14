// pages/index.tsx
"use client"
import dynamic from "next/dynamic";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Import components
const AgentPerformanceSection = dynamic(() => import("@/components/agent-performance/AgentPerformance"));
const FeatureSection = dynamic(() => import("@/components/features/Features"));
const QuoteSection = dynamic(() => import("@/components/get-quote/GetQuote"));
const HeroSection = dynamic(() => import("@/components/hero-section/HeroSection"));

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FeatureSection />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AgentPerformanceSection />
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <QuoteSection />
      </motion.div>
    </>
  );
}
