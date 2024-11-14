"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function HeroSection() {
  useEffect(() => {
    // GSAP animation for advanced effects (e.g., floating document)
    gsap.fromTo('.floating-document',
      { y: -10, rotate: -5 },
      { y: 10, rotate: 5, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut" }
    );
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-background text-white px-4 sm:px-8 lg:px-0">
      {/* Skewed Text - Always at the top, even on mobile */}
      <motion.div
        className="top-0 left-12 absolute md:top-8 md:left-16 text-accent md:rotate-[-10deg] sm:rotate-0 md:rotate-[-15deg]"
        style={{
          fontFamily: "Reenie Beanie",
          fontSize: '44.78px',
          fontWeight: 500,
          lineHeight: '77.12px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Put a face to it!
      </motion.div>

      {/* Left Section: Text */}
      <div className="flex-1 text-center sm:text-left space-y-4 sm:pl-4 md:pl-[144px]">
        {/* Animated Badge */}
        <motion.div
          className="w-[350px] mt-48 md:mt-[-50px] sm:w-[200px] md:w-[400px] h-[40px] inline-block px-4 py-2 rounded-full bg-[#E4E4E7] text-lg text-[#18181B] font-medium text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Made by Developers, for Developers
        </motion.div>

        {/* Animated Main Heading */}
        <motion.h1
          className="text-3xl sm:text-2xl md:text-5xl lg:text-7xl font-bold leading-tight text-headingText"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Liability insurance <br /> for AI Agents
        </motion.h1>

        {/* Subheading */}
        <p className="text-gray-400 max-w-md mx-auto sm:px-4 md:mx-0 p-4 text-paragraphText">
          Protect your AI Agents with tech errors & omission insurance, similar to what their human counterparts would receive.
        </p>

        {/* Email Input & Button Inside */}
        <div className="relative w-full max-w-md md:max-w-lg mt-4">
          {/* CTA on Desktop (Inlined) */}
          <div className="hidden sm:block">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-[50px] sm:h-[55px] md:h-[60px] lg:h-[90px] rounded-2xl bg-white text-black pl-6 pr-[150px] focus:outline-none"
            />
            <button className="text-fff absolute right-2 top-1/2 transform -translate-y-1/2 h-[40px] sm:h-[45px] md:h-[50px] lg:h-[70px] px-6 bg-background text-lg lg:text-xl text-white rounded-2xl">
              Get Instant Quote
            </button>
          </div>

          {/* CTA on Mobile (Stacked) */}
          <div className="block sm:hidden mt-4 space-y-4 w-full">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-[50px] sm:h-[55px] md:h-[60px] lg:h-[90px] rounded-2xl bg-white text-black pl-6 pr-8 focus:outline-none"
            />
            <button className="w-full h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] bg-background text-lg lg:text-xl text-white rounded-2xl border">
              Get Instant Quote
            </button>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 md:space-x-8 mt-6 text-md sm:text-lg lg:text-lg font-semibold">
          <div className="text-left md:text-center flex items-center gap-2">
            <p className="text-2xl lg:text-3xl text-headingText">$2 million</p>
            <p className="text-gray-400 text-paragraphText">average policy coverage for as low as</p>
          </div>
          <div className="text-center flex items-center gap-2">
            <p className="text-2xl lg:text-3xl text-headingText">$100</p>
            <p className="text-gray-400 text-paragraphText">/month</p>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-8 sm:mt-0">
        <motion.img
          src="/assets/hero-img.webp"
          alt="Document Illustration"
          className="mt-[-100px] floating-document w-64 sm:w-32 md:w-48 lg:w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Custom Media Queries for Additional Control */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            margin-top: 100px;
          }
        }
        @media (max-width: 414px) {
          h1 {
            font-size: 2rem;
          }
          .floating-document {
            width: 10rem;
          }
        }
        @media (max-width: 412px) {
          .floating-document {
            width: 9.5rem;
          }
        }
        @media (max-width: 375px) {
          h1 {
            font-size: 1.8rem;
          }
          .floating-document {
            width: 9rem;
          }
        }
      `}</style>
    </section>
  );
}
