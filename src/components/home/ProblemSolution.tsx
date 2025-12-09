"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const problems = [
    {
        problem: "Lost Khata Books",
        problemDesc: "Physical books get lost, torn, or damaged easily.",
        solution: "Digital Secure Storage",
        solutionDesc: "Data encoded and backed up on cloud forever.",
    },
    {
        problem: "Manual Calculations",
        problemDesc: "Hours spent tallying daily sales and finding mistakes.",
        solution: "Auto-Calculation",
        solutionDesc: "Instant automated totals with 100% accuracy.",
    },
    {
        problem: "Stock Confusion",
        problemDesc: "Never knowing what's running low until it's too late.",
        solution: "Smart Alerts",
        solutionDesc: "Get notified before you run out of popular items.",
    },
];

function ProblemCard({ item, index }: { item: typeof problems[0]; index: number }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const lastTouchRef = React.useRef(0);

    const handleTouchStart = () => {
        lastTouchRef.current = Date.now();
    };

    const handleMouseEnter = () => {
        // Only trigger hover if no touch event happened recently (prevents ghost clicks/hybrids)
        if (Date.now() - lastTouchRef.current > 500) {
            setIsFlipped(true);
        }
    };

    const handleMouseLeave = () => {
        if (Date.now() - lastTouchRef.current > 500) {
            setIsFlipped(false);
        }
    };

    const handleClick = () => {
        // Only toggle on click if it WAS a touch event. 
        // Mouse users use hover, so clicking shouldn't unexpectedly close it.
        if (Date.now() - lastTouchRef.current < 500) {
            setIsFlipped((prev) => !prev);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-lg dark:shadow-none"
            onTouchStart={handleTouchStart}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Problem State */}
            <div
                className={cn(
                    "absolute inset-0 bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center transition-all duration-500",
                    isFlipped ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}
            >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                    <XCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.problem}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.problemDesc}</p>

                <div className="mt-8 flex items-center text-slate-500 text-xs font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    Hover or Tap to see solution <ArrowRight size={12} className="ml-1" />
                </div>
            </div>

            {/* Solution State */}
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[var(--color-secondary)]/30 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
                    isFlipped ? "opacity-100 scale-100" : "opacity-0 scale-105"
                )}
            >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-[var(--color-secondary)]/5 blur-xl animate-pulse-slow" />

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.solution}</h3>
                    <p className="text-blue-100/80 text-sm leading-relaxed">{item.solutionDesc}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function ProblemSolution() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative transition-colors duration-300">
            {/* Decorative background to make it feel more modern */}
            <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                        Dukaan chalana ab hoga aasan
                    </h2>
                    <p className="text-slate-400">
                        Say goodbye to old headaches. Say hello to smart management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
                        <ProblemCard key={i} item={item} index={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
