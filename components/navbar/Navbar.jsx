"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // GSAP animation for logo
  useEffect(() => {
    gsap.from(".navbar-logo", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav className="sticky top-0 backdrop-blur-sm z-20 text-headingText">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section: Logo and Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="navbar-logo z-30">
            <Image
              src="/assets/logo.webp" // Replace with the actual path
              alt="Company Logo"
              width={100}
              height={32}
              priority
              className="h-8"
            />
          </Link>

          {/* Nav Links (Hidden on small screens) */}
          <ul className="hidden md:flex space-x-8">
            {["Solutions", "Industries", "Fees", "About Rareblocks"].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.05, color: "#fff" }}
                className="transition-colors duration-200 ease-in-out"
              >
                <a href={`#${item.toLowerCase().replace(/\s/g, "")}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: Book Text and CTA Button */}
        <div className="hidden md:flex items-center space-x-6">
          <span className="hover:text-white transition-colors duration-200">Book free Agent evaluation</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-ctaBg text-ctaText px-4 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-80 hover:text-white"
          >
            Get Instant Quote
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-headingText text-2xl z-30"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background flex flex-col items-center justify-center text-headingText md:hidden z-20 pt-18 h-[100vh]"
          >
            {/* Menu Items with staggered entrance using GSAP */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
              className="text-center space-y-6 text-lg"
            >
              {["Solutions", "Industries", "Fees", "About Rareblocks"].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  className="transition-colors duration-200"
                >
                  <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CTA with GSAP Animation */}
            <span className="hover:text-white transition-colors duration-200 mt-8 text-center">
              Book free Agent evaluation
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleMenu}
              className="bg-ctaBg text-ctaText px-6 py-3 mt-6 rounded-lg transition-all duration-200 hover:bg-opacity-80 hover:text-white"
            >
              Get Instant Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
