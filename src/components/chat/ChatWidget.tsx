"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Dukaansaathi AI. How can I help you manage your shop today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
                }),
            });

            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.reply }
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[90vw] sm:w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--color-secondary)] to-orange-600 flex items-center justify-center">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Dukaansaathi AI</h3>
                                    <span className="flex items-center gap-1 text-[10px] text-green-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-[var(--color-secondary)] text-white rounded-tr-none"
                                            : "bg-[#1e293b] text-slate-100 rounded-tl-none border border-white/5"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1e293b] p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin text-[var(--color-secondary)]" />
                                        <span className="text-xs text-slate-400">Thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-slate-950/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-secondary)] placeholder:text-slate-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full w-14 h-14 shadow-[0_0_20px_rgba(245,158,11,0.3)] p-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`}
                variant="gradient"
            >
                <MessageCircle size={28} />
            </Button>

            <Button
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full w-14 h-14 shadow-[0_0_20px_rgba(245,158,11,0.3)] p-0 flex items-center justify-center transition-transform duration-300 absolute ${!isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                variant="gradient"
            >
                <X size={28} />
            </Button>
        </div>
    );
}
