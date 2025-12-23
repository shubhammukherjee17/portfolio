"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

const commands = {
    help: "Available commands: help, whoami, skills, projects, contact, clear, exit",
    whoami: "Shubham Mukherjee | AI Engineer & Full Stack Developer",
    skills: "Frontend: React, Next.js | Backend: Node, Python | AI: PyTorch, TensorFlow",
    projects: "Check out the projects section for a refined list.",
    contact: "Email: mukherjeeshubham18@gmail.com",
};

export const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["Welcome to the AI Terminal. Type 'help' for commands."]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (cmd === "clear") {
            setHistory([]);
        } else if (cmd === "exit") {
            setIsOpen(false);
        } else if (cmd in commands) {
            setHistory(prev => [...prev, `> ${input}`, commands[cmd as keyof typeof commands]]);
        } else if (cmd !== "") {
            setHistory(prev => [...prev, `> ${input}`, `Command not found: ${cmd}. Type 'help' for assistance.`]);
        }

        setInput("");
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 p-4 bg-black border border-[var(--color-neon-blue)] rounded-full text-[var(--color-neon-blue)] shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all"
            >
                <TerminalIcon size={24} />
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            width: isMaximized ? "100vw" : "600px",
                            height: isMaximized ? "100vh" : "400px",
                            bottom: isMaximized ? 0 : "5rem",
                            right: isMaximized ? 0 : "2rem",
                            borderRadius: isMaximized ? 0 : "0.75rem"
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        className="fixed z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 handle cursor-move">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => setIsOpen(false)} />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer" />
                                <span className="ml-2 text-gray-400">guest@aidev:~</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white">
                                    {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                                </button>
                                <button onClick={() => setIsOpen(false)} className="hover:text-white">
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow p-4 overflow-y-auto font-mono" onClick={() => inputRef.current?.focus()}>
                            {history.map((line, i) => (
                                <div key={i} className={cn("mb-1 break-words", line.startsWith(">") ? "text-[var(--color-neon-blue)]" : "text-gray-300")}>
                                    {line}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleCommand} className="p-4 border-t border-white/10 flex items-center gap-2">
                            <span className="text-[var(--color-neon-green)]">➜</span>
                            <span className="text-[var(--color-neon-blue)]">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow bg-transparent border-none outline-none text-white font-mono"
                                autoFocus
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
