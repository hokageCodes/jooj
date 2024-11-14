"use client"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

const QuoteSection = () => {
    // State to track screen width for rendering mobile or desktop view
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // Adjust 768px to your mobile breakpoint
        };
        
        checkIfMobile(); // Initial check on mount
        window.addEventListener('resize', checkIfMobile); // Update on window resize

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-[#18181b] text-white p-4 md:p-6 rounded-tl-lg max-w-[1295px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Headline */}
            <div className="text-center md:text-left md:flex-1 mb-4 md:mb-0">
                <h2 className="text-lg md:text-2xl font-semibold leading-snug max-w-xs">
                    Protect your Agents from liability and errors
                </h2>
            </div>

            {/* Mobile Layout */}
            {isMobile && (
                <div className="flex flex-col items-center w-full bg-white rounded-lg overflow-hidden">
                    <input 
                        type="email" 
                        placeholder="Enter email address" 
                        className="w-full h-[55px] text-gray-800 px-4 py-2 outline-none mb-3"
                    />
                    <button 
                        className="border border-2 text-[#18181b] font-semibold w-full h-[55px] rounded-lg"
                    >
                        Get Instant Quote
                    </button>
                </div>
            )}

            {/* Desktop Layout (hidden on mobile) */}
            {!isMobile && (
                <div className="flex items-center w-full md:w-auto bg-white rounded-lg overflow-hidden">
                    <input 
                        type="email" 
                        placeholder="Enter email address" 
                        className="w-[386px] h-[55px] text-gray-800 px-4 py-2 outline-none opacity-100"
                    />
                    <button 
                        className="border border-2 text-[#18181b] font-semibold w-[145px] h-[55px] rounded-r-lg"
                    >
                        Get Instant Quote
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default QuoteSection;
