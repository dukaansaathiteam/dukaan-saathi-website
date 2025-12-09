"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    "Unlimited Transactions",
    "Daily PDF Reports",
    "Inventory Management",
    "Bill Generator (GST/Non-GST)",
    "Payment Reminders",
    "Low Stock Alerts",
    "Multi-user Support (up to 3)",
    "Priority Support",
];

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        Simple Pricing
                    </h2>
                    <p className="text-slate-400 mb-8">No hidden charges. Start for free, upgrade as you grow.</p>

                    <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-[var(--color-secondary)] text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isYearly ? 'bg-[var(--color-secondary)] text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            Yearly <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded ml-1">Save 20%</span>
                        </button>
                    </div>
                </div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-secondary)] to-orange-500" />
                    <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-[var(--color-secondary)]/20 blur-[80px] rounded-full" />

                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
                            <p className="text-slate-400 text-sm">Everything you need to run your shop.</p>
                        </div>
                        <div className="hidden bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-bold border border-[var(--color-primary)]/50">
                            MOST POPULAR
                        </div>
                    </div>

                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl md:text-5xl font-bold text-white">₹{isYearly ? "199" : "249"}</span>
                        <span className="text-slate-400">/month</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-green-500" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Button className="w-full text-lg shadow-lg shadow-orange-500/20" variant="gradient" size="lg">
                        <Zap size={20} className="mr-2 fill-current" />
                        Start Free Trial
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4">14-day free trial. No credit card required.</p>
                </motion.div>
            </Container>
        </section>
    );
}
