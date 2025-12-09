"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MessageSquare, Database, TrendingUp } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Send a Hello",
        description: "Simply send 'Hi' to our WhatsApp number to get started. No installation required.",
        icon: MessageSquare,
    },
    {
        id: "02",
        title: "Add Inventory",
        description: "Speak or type your items to add them to your digital shop. 'Add 50kg Rice'.",
        icon: Database,
    },
    {
        id: "03",
        title: "Start Selling",
        description: "Record sales instantly and get daily reports automatically at 9PM.",
        icon: TrendingUp,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        3 Steps Mein Shuru Karo
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Starting your digital journey takes less than 2 minutes.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Text Side */}
                                <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400">{step.description}</p>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group hover:scale-110 transition-transform duration-300">
                                        <step.icon size={32} />
                                    </div>
                                    <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-blue-500/10 rounded-full blur-2xl -z-10 animate-pulse-slow" />
                                </div>

                                {/* Empty/Visual Side */}
                                <div className="flex-1 hidden md:block">
                                    <div className="text-[120px] font-bold text-white/5 font-display leading-none select-none">
                                        {step.id}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
