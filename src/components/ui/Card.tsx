"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends HTMLMotionProps<"div"> {
    glass?: boolean;
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, glass = true, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "rounded-2xl p-6 transition-all duration-300 border border-white/20",
                    glass ? "glass" : "bg-white dark:bg-slate-800 shadow-xl",
                    className
                )}
                whileHover={hoverEffect ? { y: -8, scale: 1.02 } : undefined}
                transition={{ type: "spring", stiffness: 300 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";
