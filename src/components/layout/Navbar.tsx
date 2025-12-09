"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "py-2 bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm"
                    : "py-4 bg-transparent border-transparent"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-tr from-[var(--color-secondary)] to-orange-600 p-2 rounded-lg text-white transform group-hover:rotate-12 transition-transform">
                            <ShoppingBag size={24} />
                        </div>
                        <span className="text-3xl font-bold font-display text-white tracking-tight -mt-1 relative top-[-2px]">
                            Dukaan<span className="text-[var(--color-secondary)]">Saathi</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "font-medium transition-colors relative group",
                                    "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-secondary)] transition-all group-hover:w-full" />
                            </Link>
                        ))}

                        <Button variant={scrolled ? "gradient" : "white"} size="sm" className="ml-4 font-bold">
                            Start Free Trial
                        </Button>
                    </nav>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-4 md:hidden">

                        <button
                            className="text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <Container className="py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" variant="gradient">
                                Start Free Trial
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
