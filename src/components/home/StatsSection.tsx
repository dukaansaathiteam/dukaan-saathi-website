"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components/ui/Container";
import { Store, TrendingUp, ShieldCheck, Star } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Active Shops",
        value: 500,
        suffix: "+",
        icon: Store,
        color: "text-blue-500",
    },
    {
        id: 2,
        label: "Daily Transactions",
        value: 10000,
        suffix: "+",
        icon: TrendingUp,
        color: "text-green-500",
    },
    {
        id: 3,
        label: "Uptime",
        value: 99.9,
        suffix: "%",
        decimals: 1,
        icon: ShieldCheck,
        color: "text-purple-500",
    },
    {
        id: 4,
        label: "Rating",
        value: 4.8,
        suffix: "/5",
        decimals: 1,
        icon: Star,
        color: "text-yellow-500",
    },
];

export function StatsSection() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section className="py-20 bg-slate-950 border-y border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-900/20 blur-[100px] rounded-full" />

            <Container>
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                    {stats.map((stat) => (
                        <div key={stat.id} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all">
                            <div className="flex justify-center mb-4">
                                <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color} ring-1 ring-white/10`}>
                                    <stat.icon size={28} />
                                </div>
                            </div>
                            <div className={`text-4xl md:text-5xl font-bold text-white mb-2 font-display`}>
                                {inView ? (
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        decimals={stat.decimals || 0}
                                        separator=","
                                    />
                                ) : (
                                    "0"
                                )}
                                {stat.suffix}
                            </div>
                            <p className="text-slate-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
