"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-[var(--color-primary)]">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 bg-blue-900">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-80" />
                <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] rounded-full bg-indigo-500/30 blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[80%] h-[80%] rounded-full bg-[var(--color-secondary)]/20 blur-[150px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">
                    Ready to Smartify Your Dukaan?
                </h2>

                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join the retail revolution. No credit card required. Cancel anytime.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                    <Button size="lg" variant="gradient" className="text-xl px-12 py-8 shadow-2xl shadow-orange-500/40 group">
                        Start Free Trial Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button size="lg" variant="outline" className="text-xl px-10 py-8 border-white/30 hover:bg-white/10 text-white">
                        Talk to Sales
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-blue-200">
                    {["Instant Setup", "24/7 Support", "Secure Payment", "cancel Anytime"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <CheckCircle size={18} className="text-[var(--color-secondary)]" />
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
