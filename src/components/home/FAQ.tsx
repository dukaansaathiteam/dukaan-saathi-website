"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Kya mujhe koi app download karna padega?",
        answer: "Nahi! Dukaan Saathi poori tarah se WhatsApp par kaam karta hai. Aapko bas hamare number par message bhejna hai aur aapka kaam shuru.",
    },
    {
        question: "Kya ye Hindi mein kaam karega?",
        answer: "Haan, bilkul! Hum Hindi, English aur Hinglish (jaise hum chat karte hain) sab samajhte hain. Aap voice note bhi bhej sakte hain.",
    },
    {
        question: "Mera shop data safe hai?",
        answer: "Aapka data 100% surakshit hai. Hum enterprise-grade security use karte hain aur aapka data encrypted hota hai. Aap kabhi bhi apna data download kar sakte hain.",
    },
    {
        question: "Agar problem aaye to help milegi?",
        answer: "Humara support team 24/7 available hai. Aap WhatsApp par hi 'Help' likhkar turant sahayata pa sakte hain.",
    },
    {
        question: "Free trial ke baad kya hoga?",
        answer: "14 din ke free trial ke baad aap monthly ya yearly plan le sakte hain. Agar aap plan nahi lete, tab bhi aap apna purana data dekh paenge.",
    },
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-400">
                        Kuch sawal? Humare paas jawab hain.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "rounded-2xl border transition-all duration-300 overflow-hidden",
                                activeIndex === index
                                    ? "bg-white/5 border-[var(--color-secondary)]/50 shadow-lg shadow-orange-500/10"
                                    : "bg-transparent border-white/10 hover:bg-white/5"
                            )}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={cn("text-lg font-medium", activeIndex === index ? "text-white" : "text-slate-300")}>
                                    {faq.question}
                                </span>
                                <div className={cn(
                                    "p-2 rounded-full transition-colors",
                                    activeIndex === index ? "bg-[var(--color-secondary)] text-white" : "bg-white/10 text-slate-400"
                                )}>
                                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-400">
                    <p>
                        if u have further questions please contact:{" "}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=team@dukaansaathi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-secondary)] hover:underline"
                        >
                            team@dukaansaathi.com
                        </a>
                    </p>
                </div>
            </Container>
        </section>
    );
}
