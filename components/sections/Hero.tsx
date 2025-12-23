"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-[var(--color-neon-blue)] bg-[rgba(0,243,255,0.05)] mb-6">
                        <span className="text-[var(--color-neon-blue)] font-mono text-sm tracking-widest">SYSTEM ONLINE</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-white">Hello, I&apos;m</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">
                            Shubham
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-400 mb-8 font-mono h-[60px]">
                        <TypewriterEffect
                            words={[
                                "AI & Machine Learning Engineer",
                                "Full Stack Developer",
                                "Problem Solver",
                                "Tech Enthusiast"
                            ]}
                            cursorClassName="text-[var(--color-neon-purple)] text-2xl"
                        />
                    </div>

                    <p className="text-gray-400 max-w-lg mb-8 text-lg">
                        Building intelligent systems with scalable web architectures.
                        Merging the power of AI with modern full-stack development.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" glow onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" onClick={() => window.open('/Shubham%20Mukherjee.pdf', '_blank')}>
                            Download CV <Download className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="mt-12 flex gap-4">
                        <SocialLink href="https://github.com/shubhammukherjee17" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/theshubhammukherjee" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:mukherjeeshubham18@gmail.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </motion.div>

                {/* Visual / Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center relative"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                        {/* Glowing Orbs/Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[var(--color-neon-blue)] opacity-20 blur-[80px] rounded-full animate-pulse" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            {/* Placeholder image - Replace '/profile.jpg' with your actual image path */}
                            <img
                                src="/profile-pic.jpg"
                                alt="Shubham Mukherjee"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Floating Tech Badges */}
                            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)]/30">
                                    AI Engineer
                                </span>
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-[var(--color-neon-purple)] border border-[var(--color-neon-purple)]/30">
                                    Full Stack
                                </span>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-black/80 border border-[var(--color-neon-blue)] p-3 rounded-xl text-xs font-mono text-[var(--color-neon-blue)] backdrop-blur-md z-30"
                        >
                            Recommended: 98%
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-black/80 border border-[var(--color-neon-purple)] p-3 rounded-xl text-xs font-mono text-[var(--color-neon-purple)] backdrop-blur-md z-30"
                        >
                            Level: 99
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
