// components/AgentPerformanceSection.js
"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AgentPerformanceSection = () => {
  useEffect(() => {
    // You can add animations if needed
  }, []);

  return (
    <section className="bg-background py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Up Agent Performance</h2>
          <p className="text-gray-400 mb-6">
            Tap into our years of domain experience in optimal AI Agent engineering.
            We’ll evaluate and score your current setup. Receive a report of possible
            improvements to enhance agent performance.
          </p>

          {/* CTA Button with Gradient Background */}
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1.5 rounded-lg blur-xl"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #9333EA, #F59E0B)",
              }}
            ></motion.div>
            <button className="relative z-10 bg-black text-white py-3 px-6 rounded-lg font-semibold">
              Free Agent Evaluation
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/assets/Illustration.webp"
            alt="Tasks preview"
            width={500}
            height={300}
            className="w-full max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AgentPerformanceSection;
