"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Code, Database, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialLink } from "../ui/SocialLink";

const projects = [
    {
        title: "AI Image Synthesizer",
        description: "A deep learning model integration that generates realistic images from text prompts. Built with Next.js and Stable Diffusion API.",
        tags: ["Next.js", "Python", "PyTorch", "Tailwind"],
        category: "AI/ML",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "EcoTrack Analytics",
        description: "Full-stack dashboard for tracking carbon footprints for enterprises. Visualization using D3.js and realtime data from IoT sensors.",
        tags: ["React", "Node.js", "MongoDB", "D3.js"],
        category: "Full Stack",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Neural Chatbot Agent",
        description: "An intelligent conversational agent capable of context-aware responses, built using OpenAI GPT-4 and custom embeddings.",
        tags: ["TypeScript", "OpenAI", "Pinecone", "Vercel"],
        category: "AI/ML",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Cloud Native E-commerce",
        description: "Microservices based e-commerce platform with automated CI/CD pipelines and Kubernetes orchestration.",
        tags: ["Spring Boot", "Docker", "Kubernetes", "AWS"],
        category: "Cloud",
        github: "https://github.com",
        demo: "https://demo.com",
    },
];

const categories = ["All", "Full Stack", "AI/ML", "Cloud"];

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category === filter
    );

    return (
        <SectionWrapper id="projects" className="py-24">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-5xl font-bold font-mono mb-4"
                    >
                        <span className="text-[var(--color-neon-blue)]">03.</span> Featured Projects
                    </motion.h2>
                    <p className="text-gray-400">A selection of my recent work.</p>
                </div>

                {/* Filters */}
                <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${filter === cat
                                    ? "bg-[var(--color-neon-blue)] text-black font-bold shadow-lg shadow-cyan-500/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid md:grid-cols-2 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlassCard className="h-full flex flex-col group hover:border-[var(--color-neon-blue)]/50 transition-colors">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[var(--color-neon-blue)]/30 transition-colors">
                                        {project.category === "AI/ML" ? <Brain className="text-[var(--color-neon-purple)]" /> :
                                            project.category === "Cloud" ? <Database className="text-[var(--color-ai-green)]" /> :
                                                <Code className="text-[var(--color-neon-blue)]" />}
                                    </div>
                                    <div className="flex gap-3">
                                        <SocialLink href={project.github} icon={<Github size={18} />} />
                                        <SocialLink href={project.demo} icon={<ExternalLink size={18} />} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
};
