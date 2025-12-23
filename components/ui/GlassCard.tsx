"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    return (
        <motion.div
            initial={hoverEffect ? { opacity: 0.9, y: 0 } : undefined}
            whileHover={hoverEffect ? {
                y: -5,
                opacity: 1,
                boxShadow: "0 4px 30px rgba(0, 243, 255, 0.15)",
                borderColor: "rgba(0, 243, 255, 0.3)"
            } : undefined}
            transition={{ duration: 0.3 }}
            className={cn(
                "glass-panel rounded-xl p-6 relative overflow-hidden",
                "bg-[rgba(10,10,10,0.6)] backdrop-blur-md border border-white/10",
                className
            )}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
