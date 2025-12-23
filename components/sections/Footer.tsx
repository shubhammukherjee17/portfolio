"use client";

import React from "react";

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/60 backdrop-blur-md z-10 relative">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Shubham Mukherjee. All System Rights Reserved.
                </div>

                <div className="text-gray-500 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-ai-green)] animate-pulse" />
                    Systems Nominal
                </div>

                <div className="text-gray-400 text-sm italic">
                    &quot;Engineering intelligence, one line of code at a time.&quot;
                </div>
            </div>
        </footer>
    );
};
