"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-lg shadow-blue-900/20",
                gradient: "bg-gradient-to-r from-[var(--color-secondary)] to-orange-600 text-white hover:brightness-110 shadow-lg shadow-orange-500/30 border-none",
                outline: "border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 glass",
                ghost: "hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200",
                link: "underline-offset-4 hover:underline text-[var(--color-primary)]",
                white: "bg-white text-[var(--color-primary)] hover:bg-gray-50 shadow-md",
            },
            size: {
                default: "h-11 py-2 px-6",
                sm: "h-9 px-3 rounded-md",
                lg: "h-14 px-8 rounded-xl text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
