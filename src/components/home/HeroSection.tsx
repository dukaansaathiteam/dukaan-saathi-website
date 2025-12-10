"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlayCircle, ChevronRight, MessageCircle } from "lucide-react";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Typing effect
    const text = "Har Dukaan Ka Smart Saathi";
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-900 transition-colors duration-300">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/30 blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-900/30 blur-[120px] mix-blend-screen animate-float" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--color-secondary)]/10 blur-[100px] mix-blend-screen animate-pulse-slow" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        #1 WhatsApp Shop AI Tool in India
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display min-h-[1.2em]">
                        {displayText}
                        <span className="animate-pulse text-[var(--color-secondary)]">|</span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                        Manage your inventory, sales, and khata directly from WhatsApp. No complex apps, just simple chats.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="gradient" className="text-lg group relative overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-300">
                            <span className="relative z-10 flex items-center">
                                Start Free Trial
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg gap-2 border-white/10 hover:bg-white/5 backdrop-blur-sm">
                            <PlayCircle size={20} />
                            Watch Demo
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-slate-400 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs text-white  bg-[url(https://i.pravatar.cc/100?img=${i+10})] bg-cover" />
                            ))}
                        </div>
                        <p>Trusted by <span className="text-white font-bold">500+</span> shop owners</p>
                    </div>
                </motion.div>

                {/* Hero Image / Mockup */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Phone Mockup */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-secondary)]/10 to-blue-600/10 rounded-[3.5rem] blur-2xl -z-10" />
                    <div className="relative z-20 mx-auto w-[260px] md:w-[300px] lg:w-[320px] bg-[#020617] rounded-[3rem] border-[6px] border-[#1e293b] shadow-2xl overflow-hidden aspect-[9/19] ring-1 ring-white/10">
                        {/* Screen Content */}
                        <div className="h-full w-full bg-[#0b141a] relative flex flex-col">
                            {/* Header */}
                            <div className="bg-[#1f2c34] p-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center font-bold text-white">D</div>
                                <div>
                                    <h3 className="text-white text-sm font-medium">Dukaan Saathi</h3>
                                    <p className="text-xs text-slate-400">Online</p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 p-4 space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="bg-[#005c4b] p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[85%] ml-auto text-sm text-white shadow-md self-end"
                                >
                                    <p>Aaj ki sales report batao 📊</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2 }}
                                    className="bg-[#1f2c34] p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[85%] text-sm text-white"
                                >
                                    <p className="font-bold mb-1">📅 Today's Summary (9:00 PM)</p>
                                    <div className="space-y-1 text-xs opacity-90">
                                        <div className="flex justify-between"><span>Total Sales:</span> <span>₹12,450</span></div>
                                        <div className="flex justify-between"><span>Orders:</span> <span>42</span></div>
                                        <div className="flex justify-between"><span>Traffic:</span> <span>High 🚀</span></div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 3.5 }}
                                    className="bg-[#005c4b] p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[85%] ml-auto text-sm text-white shadow-md self-end flex items-center gap-2"
                                >
                                    <div className="w-1 h-4 bg-white animate-pulse"></div>
                                    Recording...
                                </motion.div>

                            </div>

                            {/* Input Area */}
                            <div className="p-2 bg-[#1f2c34] flex items-center gap-2">
                                <div className="flex-1 bg-[#2a3942] h-8 rounded-full"></div>
                                <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center"><MessageCircle size={16} className="text-white" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        style={{ y: y2 }}
                        className="absolute top-[-1rem] left-1/2 -translate-x-1/2 md:top-20 md:left-auto md:translate-x-0 md:-left-10 z-30 bg-slate-800 p-3 md:p-4 rounded-xl shadow-xl border border-white/10 flex items-center gap-3 w-max"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold">₹</div>
                        <div>
                            <p className="text-xs text-slate-500">Payment Received</p>
                            <p className="font-bold text-white">₹450.00</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 md:bottom-40 md:left-auto md:translate-x-0 md:-right-5 z-30 bg-slate-800 p-3 md:p-4 rounded-xl shadow-xl border border-white/10 w-max"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <p className="text-xs font-bold text-white">Low Stock Alert</p>
                        </div>
                        <p className="text-sm text-slate-500">Rice Bag (25kg) is low</p>
                    </motion.div>
                </motion.div>

            </Container>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-slate-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
