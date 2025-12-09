"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-white border-t border-white/10 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="bg-gradient-to-tr from-[var(--color-secondary)] to-orange-600 p-2 rounded-lg text-white">
                                <ShoppingBag size={24} />
                            </div>
                            <span className="text-2xl font-bold font-display tracking-tight">
                                Dukaan<span className="text-[var(--color-secondary)]">Saathi</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering Indian retailers with smart, WhatsApp-based tools to manage their shops effortlessly.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="bg-white/5 p-2 rounded-full hover:bg-[var(--color-secondary)] hover:text-white transition-all hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Product</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Live Demo</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
                        <p className="text-slate-400 mb-4">Subscribe for latest updates and retail tips.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-[var(--color-secondary)] text-white placeholder:text-slate-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color-secondary)] p-1.5 rounded-md hover:brightness-110 transition-all"
                            >
                                <Send size={16} className="text-white" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Dukaan Saathi. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
