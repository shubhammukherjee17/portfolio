"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const articles = [
    {
        title: "The Future of Generative AI in Web Development",
        excerpt: "Exploring how LLMs are reshaping the way we build and deploy web applications, from code generation to autonomous agents.",
        date: "Dec 15, 2024",
        tags: ["AI", "Web Dev", "Future"],
        readTime: "5 min read",
    },
    {
        title: "Optimizing Neural Networks for Edge Devices",
        excerpt: "A deep dive into quantization and pruning techniques to run complex models on mobile and IoT devices efficiently.",
        date: "Nov 28, 2024",
        tags: ["Machine Learning", "Optimization", "IoT"],
        readTime: "8 min read",
    },
    {
        title: "Building Scalable Microservices with Node.js",
        excerpt: "Best practices for designing robust microservices architectures, handling inter-service communication, and ensuring fault tolerance.",
        date: "Oct 10, 2024",
        tags: ["Backend", "Microservices", "Node.js"],
        readTime: "6 min read",
    },
];

export const Blog = () => {
    return (
        <SectionWrapper id="blog" className="py-24">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold font-heading mb-4"
                >
                    <span className="text-[var(--color-neon-blue)]">05.</span> Research & Insights
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Thoughts, tutorials, and research findings on the intersection of AI and Software Engineering.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassCard className="h-full flex flex-col group hover:border-[var(--color-neon-purple)] transition-colors cursor-pointer">
                            <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                <span>{article.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {article.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-[var(--color-neon-blue)]">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <ArrowRight className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" size={18} />
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
