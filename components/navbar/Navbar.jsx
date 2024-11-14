"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 backdrop-blur-sm z-20 text-headingText">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Left Section: Logo and Nav Links */}
                <div className="flex items-center space-x-6">
                    {/* Logo */}
                    <div className="z-30">
                        <Link href="/" aria-label="Home">
                            <Image 
                                src="/assets/logo.webp" // Replace with the actual path
                                alt="Company Logo"
                                width={100}
                                height={32}
                                priority
                                className="h-8"
                            />
                        </Link>
                    </div>

                    {/* Nav Links (Hidden on small screens) */}
                    <ul className="hidden md:flex space-x-8">
                        <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
                        <li><a href="#industries" className="hover:text-white">Industries</a></li>
                        <li><a href="#fees" className="hover:text-white">Fees</a></li>
                        <li><a href="#about" className="hover:text-white">About Rareblocks</a></li>
                    </ul>
                </div>

                {/* Right Section: Book Text and CTA Button */}
                <div className="hidden md:flex items-center space-x-6">
                    <span className="hover:text-white">Book free Agent evaluation</span>
                    <button className="bg-ctaBg text-ctaText px-4 py-2 rounded-lg hover:bg-opacity-80 hover:text-white">
                        Get Instant Quote
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-headingText text-2xl z-30" aria-label="Toggle navigation">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Fullscreen Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-background bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-headingText md:hidden z-20">
                    <ul className="text-center space-y-6 text-lg">
                        <li><a href="#solutions" onClick={toggleMenu} className="hover:text-white">Solutions</a></li>
                        <li><a href="#industries" onClick={toggleMenu} className="hover:text-white">Industries</a></li>
                        <li><a href="#fees" onClick={toggleMenu} className="hover:text-white">Fees</a></li>
                        <li><a href="#about" onClick={toggleMenu} className="hover:text-white">About Rareblocks</a></li>
                    </ul>
                    <span className="hover:text-white hidden">Book free Agent evaluation</span>
                    <button onClick={toggleMenu} className="but text-ctaText px-6 py-3 rounded-lg hover:bg-opacity-80 hover:text-white">
                        Get Instant Quote
                    </button>
                </div>
            )}
        </nav>
    );
}
