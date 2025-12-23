"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export const SectionWrapper = ({ children, id, className, delay = 0 }: SectionWrapperProps) => {
    return (
        <section id={id} className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};
