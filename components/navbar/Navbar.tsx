"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Rocket, Code, User, Mail, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Rocket },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
                    isScrolled ? "py-2" : "py-4"
                )}
            >
                <div className={cn(
                    "max-w-5xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
                    isScrolled ? "bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" : "bg-transparent"
                )}>
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold font-heading tracking-tighter flex items-center gap-2">
                        <span className="text-[var(--color-neon-blue)]">&lt;</span>
                        <span className="text-white">Shubham Mukherjee</span>
                        <span className="text-[var(--color-neon-blue)]">/&gt;</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="hidden md:flex" onClick={() => window.open('/Shubham%20Mukherjee.pdf', '_blank')}>
                            Resume
                        </Button>

                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="text-2xl font-mono text-white hover:text-[var(--color-neon-blue)] flex items-center gap-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <link.icon size={28} />
                                {link.name}
                            </motion.a>
                        ))}
                        <Button variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>
                            Close Menu
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
