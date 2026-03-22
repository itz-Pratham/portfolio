'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    threshold?: number;
}

/**
 * Wrapper that triggers fade-in + slide-up animation
 * when the section scrolls into the viewport.
 * Animates only once (no replay on scroll back up).
 */
export default function AnimatedSection({
    children,
    className,
    id,
    delay = 0,
    threshold = 0,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: threshold, margin: "0px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1] as const,
            }}
        >
            {children}
        </motion.section>
    );
}
