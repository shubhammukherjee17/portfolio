"use client";

import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const experience = [
    {
        role: "Full Stack Developer Intern",
        company: "TechNova Solutions",
        period: "June 2024 - Present",
        desc: [
            "Developed microservices using Node.js and Express.",
            "Optimized frontend performance reducing load time by 30%.",
            "Collaborated with AI team to integrate chatbot APIs."
        ],
    },
    {
        role: "AI Research Fellow",
        company: "University AI Lab",
        period: "Jan 2024 - May 2024",
        desc: [
            "Conducted research on GANs for image synthesis.",
            "Published findings in internal university journal.",
            "Implemented PyTorch models for data classification."
        ],
    },
    {
        role: "Web Development Lead",
        company: "Campus Tech Club",
        period: "2023 - 2024",
        desc: [
            "Led a team of 5 to build the college hackathon portal.",
            "Organized coding workshops for 100+ students.",
        ],
    },
];

export const Experience = () => {
    return (
        <SectionWrapper id="experience" className="py-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-5xl font-bold font-mono mb-16 text-center"
            >
                <span className="text-[var(--color-neon-purple)]">04.</span> Experience
            </motion.h2>

            <div className="space-y-8 max-w-4xl mx-auto">
                {experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <GlassCard className="p-8 group hover:bg-white/5 border border-white/5 hover:border-[var(--color-neon-blue)]/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-[var(--color-neon-purple)] font-medium">
                                        @ {exp.company}
                                    </p>
                                </div>
                                <span className="text-sm font-mono text-gray-400 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {exp.desc.map((d, index) => (
                                    <li key={index} className="flex gap-3 text-gray-400">
                                        <span className="text-[var(--color-neon-blue)] mt-1">▹</span>
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
