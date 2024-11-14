"use client"
import { motion } from 'framer-motion';

const QuoteSection = () => {
    return (
        <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-[#18181b] text-white p-4 md:p-6 rounded-tl-lg max-w-[1295px] h-[147px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Headline */}
            <div className="text-center md:text-left md:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold leading-snug max-w-xs">
                    Protect your Agents from liability and errors
                </h2>
            </div>

            {/* Input and Button */}
            <div className="flex items-center w-full md:w-auto bg-white rounded-lg overflow-hidden">
                <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-[386px] h-[55px] text-gray-800 px-4 py-2 outline-none opacity-0 md:opacity-100"
                />
                <button 
                    className="border border-2 text-[#18181b] font-semibold w-[145px] h-[55px] rounded-r-lg"
                >
                    Get Instant Quote
                </button>
            </div>
        </motion.div>
    );
};

export default QuoteSection;
