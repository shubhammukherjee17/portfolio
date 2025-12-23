"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label?: string;
    className?: string;
}

export const SocialLink = ({ href, icon, label, className }: SocialLinkProps) => {
    return (
        <Link href={href} target="_blank" rel="noreferrer">
            <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                className={cn(
                    "p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)] transition-colors",
                    className
                )}
                title={label}
            >
                {icon}
            </motion.div>
        </Link>
    );
};
