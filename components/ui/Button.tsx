"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {

        // Base styles
        const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden group";

        // Variants
        const variants = {
            primary: "bg-[var(--color-neon-blue)] text-black hover:bg-cyan-300",
            secondary: "bg-[var(--color-neon-purple)] text-white hover:bg-purple-600",
            outline: "bg-transparent border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] hover:bg-[rgba(0,243,255,0.1)]",
        };

        // Sizes
        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        // Glow Effect
        const glowStyles = glow ? "shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]" : "";

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], glowStyles, className)}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
                {variant !== 'outline' && (
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
