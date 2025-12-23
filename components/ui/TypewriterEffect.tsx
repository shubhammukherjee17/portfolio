"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: TypewriterEffectProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        // Typing speeds
        const typeSpeed = isDeleting ? 50 : 150;
        const pauseBeforeDelete = 2000;

        const handleType = () => {
            setCurrentText((prev) => {
                if (isDeleting) {
                    return word.substring(0, prev.length - 1);
                } else {
                    return word.substring(0, prev.length + 1);
                }
            });

            if (!isDeleting && currentText === word) {
                // Finished typing word, wait then delete
                setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
            } else if (isDeleting && currentText === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleType, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className={className}>
            <span>{currentText}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={cursorClassName}
            >
                |
            </motion.span>
        </div>
    );
};
