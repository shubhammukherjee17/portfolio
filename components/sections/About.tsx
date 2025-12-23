"use client";

import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud } from "lucide-react";

export const About = () => {

    return (
        <SectionWrapper id="about" className="py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Narrative */}
                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-5xl font-bold font-mono"
                    >
                        <span className="text-[var(--color-neon-blue)]">01.</span> About Me
                    </motion.h2>

                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I am an <strong className="text-white">AIML Student</strong> and <strong className="text-white">Full Stack Developer</strong> with a passion for building intelligent systems.
                            My journey started with a curiosity about how machines learn, which led me to explore the depths of Neural Networks and Deep Learning.
                        </p>
                        <p>
                            Simultaneously, I fell in love with the art of creating scalable web architectures.
                            I bridge the gap between <span className="text-[var(--color-neon-blue)]">complex AI models</span> and <span className="text-[var(--color-neon-purple)]">user-friendly interfaces</span>.
                        </p>
                        <p>
                            When I&apos;m not training models or debugging code, I&apos;m likely exploring the latest in Cloud Computing or participating in Hackathons to push my limits.
                        </p>
                    </div>
                </div>

                {/* Timeline / Stats */}
                <div className="relative">
                    <GlassCard className="p-8 border-l-4 border-l-[var(--color-neon-blue)]">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Code className="text-[var(--color-neon-blue)]" /> Growth Timeline
                        </h3>

                        <div className="space-y-8 pl-2 border-l border-white/10 relative">
                            {/* Timeline items */}
                            {[
                                { year: "2023", title: "Started AIML Journey", desc: "First Python script & Neural Net" },
                                { year: "2024", title: "Full Stack Mastery", desc: "React, Next.js, Node.js ecosystem" },
                                { year: "2025", title: "Building Intelligent Apps", desc: "Integrating AI agents into web apps" },
                            ].map((item, i) => (
                                <div key={i} className="relative pl-6">
                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--color-neon-blue)] shadow-[0_0_10px_var(--color-neon-blue)]" />
                                    <span className="text-xs font-mono text-[var(--color-neon-blue)] mb-1 block">{item.year}</span>
                                    <h4 className="text-white font-bold">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Floating stats */}
                    <div className="absolute -bottom-6 -right-6 hidden md:block">
                        <GlassCard className="!bg-[var(--color-neon-purple)]/10 backdrop-blur-xl border border-[var(--color-neon-purple)]/30 p-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-xs text-[var(--color-neon-purple)] font-mono">Projects Built</div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
