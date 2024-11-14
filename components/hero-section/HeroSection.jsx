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
            {/* Skewed Text */}
            <motion.div
                className="absolute top-8 left-16 text-accent rotate-[-10deg] md:rotate-[-15deg]"
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
            <div className="flex-1 text-center md:text-left space-y-4 md:pl-[144px]">
                {/* Animated Badge */}
                <motion.div
                    className="w-[250px] md:w-[400px] h-[40px] inline-block px-4 py-2 rounded-full bg-[#E4E4E7] text-lg text-[#18181B] font-medium text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Made by Developers, for Developers
                </motion.div>

                {/* Animated Main Heading */}
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-headingText"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Liability insurance <br /> for AI Agents
                </motion.h1>

                {/* Subheading */}
                <p className="text-gray-400 max-w-md mx-auto md:mx-0 p-4 text-paragraphText">
                    Protect your AI Agents with tech errors & omission insurance, similar to what their human counterparts would receive.
                </p>

                {/* Email Input & Button Inside */}
                <div className="relative w-full max-w-md md:max-w-lg mt-4">
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full h-[50px] md:h-[60px] lg:h-[90px] rounded-2xl bg-white text-black pl-6 pr-[150px] focus:outline-none"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[40px] md:h-[50px] lg:h-[70px] px-6 bg-ctaBg text-lg lg:text-xl text-white rounded-2xl hover:bg-gray-800">
                        Get Instant Quote
                    </button>
                </div>

                {/* Pricing Information */}
                <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mt-6 text-md lg:text-lg font-semibold">
                    <div className="text-center flex items-center gap-2">
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
            <div className="flex-1 flex justify-center mt-8 md:mt-0">
                <motion.img
                    src="/assets/hero-img.webp"  // replace with your image path
                    alt="Document Illustration"
                    className="floating-document w-32 sm:w-40 md:w-48 lg:w-[600px]"
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
