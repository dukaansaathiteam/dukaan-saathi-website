"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

const messages = [
    { id: 1, type: "user", text: "10kg Chini add kardo", delay: 1000 },
    { id: 2, type: "bot", text: "✅ Added: 10kg Sugar\n📦 Current Stock: 45kg\n💰 Price: ₹42/kg", delay: 2500 },
    { id: 3, type: "user", text: "2kg Chini bechi cash mein", delay: 4500 },
    { id: 4, type: "bot", text: "✅ Sale Recorded: ₹84\n💳 Mode: Cash\n📉 Remaining Stock: 43kg", delay: 6000 },
    { id: 5, type: "user", text: "Dukaan ki report bhejo", delay: 8000 },
    { id: 6, type: "bot", text: "📊 Today's Summary:\nTotal Sales: ₹4,520\nTotal Orders: 24\nTop Item: Rice\n\nDownload PDF 👇", delay: 9500 },
];

export function DemoSection() {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

    useEffect(() => {
        // Reset based on intersection could be added, but infinite loop for demo is good
        // For now simple reliable timeout chain
        let timers: NodeJS.Timeout[] = [];

        const runDemo = () => {
            setVisibleMessages([]);
            let currentTime = 0;

            messages.forEach((msg) => {
                const timer = setTimeout(() => {
                    setVisibleMessages((prev) => [...prev, msg.id]);
                }, currentTime + msg.delay);
                timers.push(timer);
            });

            // Loop
            const resetTimer = setTimeout(() => {
                runDemo();
            }, 15000); // Restart after 15s
            timers.push(resetTimer);
        };

        runDemo();

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                            Dekho Kaise Kaam Karta Hai
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            It's as simple as chatting with a friend. No complex forms, no training needed.
                            Just strictly business.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Instant Updates", "Secure & Private", "Regional Language Support"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Phone Demo */}
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

                        {/* Screen */}
                        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#0b141a] relative flex flex-col">
                            {/* Header */}
                            <div className="bg-[#1f2c34] px-4 py-3 pb-2 pt-8 flex items-center gap-3 z-10 shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-sm">DS</div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-sm">Dukaan Saathi 🤖</div>
                                    <div className="text-[10px] text-slate-400">Business Account</div>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-5">
                                <AnimatePresence mode="popLayout">
                                    {messages.map((msg) => (
                                        visibleMessages.includes(msg.id) && (
                                            <motion.div
                                                key={msg.id}
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                layout
                                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${msg.type === 'user'
                                                    ? 'bg-[#005c4b] text-white rounded-tr-none'
                                                    : 'bg-[#1f2c34] text-white rounded-tl-none whitespace-pre-wrap'
                                                    }`}>
                                                    {msg.text}
                                                    <div className={`text-[10px] text-right mt-1 opacity-60 flex justify-end gap-1 ${msg.type === 'user' ? "text-green-200" : "text-slate-400"}`}>
                                                        10:0{msg.id} AM {msg.type === 'user' && '✓✓'}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            <div className="bg-[#1f2c34] p-2 flex items-center gap-2">
                                <div className="flex-1 h-9 bg-[#2a3942] rounded-full px-4 flex items-center text-slate-400 text-sm">
                                    Type a message...
                                </div>
                                <div className="w-9 h-9 bg-[#00a884] rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
