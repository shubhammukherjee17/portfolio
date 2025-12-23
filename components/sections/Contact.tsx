"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };

        if (!data.name || !data.email || !data.message) {
            alert("Please fill in all fields.");
            return;
        }

        setStatus("sending");

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                // Reset form
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("idle");
                console.error("Submission error:", result);
                alert(`Error: ${result.error || "Failed to send message."}`);
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus("idle");
            alert("Something went wrong. Please check your connection.");
        }
    };

    return (
        <SectionWrapper id="contact" className="py-24">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-3xl md:text-5xl font-bold font-mono mb-8"
                    >
                        <span className="text-[var(--color-neon-blue)]">05.</span> Initialize <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-white">Handshake</span>
                    </motion.h2>

                    <p className="text-gray-400 mb-8 text-lg">
                        Ready to collaborate on the next generation of intelligent web applications?
                        Transmitting signals is just a click away.
                    </p>

                    <div className="space-y-6">
                        <GlassCard className="flex items-center gap-4 p-4 hover:border-[var(--color-neon-blue)] transition-colors">
                            <div className="p-3 rounded-full bg-white/5 text-[var(--color-neon-blue)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-400">Email</h4>
                                <a href="mailto:mukherjeeshubham18@gmail.com" className="text-lg font-bold text-white hover:text-[var(--color-neon-blue)]">
                                    mukherjeeshubham18@gmail.com
                                </a>
                            </div>
                        </GlassCard>

                        <GlassCard className="flex items-center gap-4 p-4 hover:border-[var(--color-neon-purple)] transition-colors">
                            <div className="p-3 rounded-full bg-white/5 text-[var(--color-neon-purple)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-400">Location</h4>
                                <p className="text-lg font-bold text-white">
                                    Kolkata, India / Remote
                                </p>
                            </div>
                        </GlassCard>
                    </div>

                    <h4 className="mt-12 text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest">Connect on Neural Nets</h4>
                    <div className="flex gap-4">
                        {[Github, Linkedin, Twitter].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ y: -5, color: "var(--color-neon-blue)" }}
                                className="p-3 bg-white/5 rounded-lg text-gray-400 border border-white/10 hover:border-[var(--color-neon-blue)] transition-colors"
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <GlassCard className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-[var(--color-neon-blue)] rounded-sm" />
                        Transmission Form
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                    suppressHydrationWarning
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-mono">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[var(--color-neon-blue)] focus:outline-none transition-colors"
                                placeholder="Project details..."
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            glow
                            className="w-full"
                            disabled={status === "sending"}
                        >
                            {status === "idle" && (
                                <>Send Transmission <Send className="ml-2 w-4 h-4" /></>
                            )}
                            {status === "sending" && "Transmitting..."}
                            {status === "success" && "Message Sent 🚀"}
                        </Button>
                    </form>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
};
