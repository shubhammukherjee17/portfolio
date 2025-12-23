"use client";

import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const skills = {
    Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    Backend: ["Node.js", "Express.js", "Java", "Python", "GraphQL", "WebSockets"],
    Database: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
    "AI / ML": ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenAI API", "Hugging Face"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Git/GitHub", "Vercel"],
};

export const TechStack = () => {
    return (
        <SectionWrapper id="skills" className="py-20">
            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold font-mono mb-4"
                >
                    <span className="text-[var(--color-neon-purple)]">02.</span> Tech Stack
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    My weapon of choice for building scalable, intelligent applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items], index) => (
                    <GlassCard key={category} className="hover:bg-white/5 transition-colors group">
                        <h3 className="text-xl font-bold text-[var(--color-neon-blue)] mb-6 border-b border-white/10 pb-2 inline-block">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(188, 19, 254, 0.2)" }}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 cursor-default hover:text-white transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 bg-[var(--color-neon-blue)] rounded-full shadow-[0_0_10px_var(--color-neon-blue)]" />
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};
