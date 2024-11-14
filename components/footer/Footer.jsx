"use client";
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="bg-background text-headingText py-8 md:py-12">
            {/* Footer Top */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
                {/* Left Section: Message */}
                <div className="text-lg md:text-xl font-semibold md:pl-28">
                    <p>Confidently win more <br /> business for your AI Agents</p>
                </div>

                {/* Right Section: Contact Info */}
                <div className="flex flex-col space-y-2 text-sm md:text-base items-center md:items-start md:pr-28">
                    <div className="flex items-center space-x-2">
                        <MdLocationOn />
                        <p>10 Fan Pier Boulevard 3rd floor, <br /> Boston, MA 02210</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdEmail />
                        <p>founders@jooj.ai</p>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="container mx-auto px-4 mt-8">
                <hr className="border-gray-600" />
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left md:pl-32 md:pr-32">
                {/* Left Section: Social Links */}
                <div className="flex space-x-4 text-xl">
                    <a href="#" aria-label="Twitter" className="hover:text-ctaText">
                        <FaTwitter />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-ctaText">
                        <FaFacebookF />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-ctaText">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="GitHub" className="hover:text-ctaText">
                        <FaGithub />
                    </a>
                </div>

                {/* Right Section: Copyright */}
                <p className="text-xs text-center md:text-right">
                    &copy; Copyright 2024, All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
