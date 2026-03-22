'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/shared/Button';
import styles from './Hero.module.css';

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
    },
});

export default function Hero() {
    return (
        <motion.section
            className={styles.hero}
            initial="hidden"
            animate="visible"
            variants={stagger}
        >
            {/* Availability Badge */}
            <motion.div className={styles.badge} variants={fadeUp(0)}>
                <span className={styles.badgeDot} />
                {SITE_CONFIG.availability}
            </motion.div>

            {/* Name */}
            <motion.h1 className={styles.name} variants={fadeUp(0.1)}>
                Hi, I&apos;m <span className={styles.nameAccent}>{SITE_CONFIG.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p className={styles.title} variants={fadeUp(0.2)}>
                {SITE_CONFIG.title}
            </motion.p>

            {/* Value Proposition */}
            <motion.p className={styles.valueProp} variants={fadeUp(0.3)}>
                {SITE_CONFIG.valueProp}
            </motion.p>

            {/* CTAs */}
            <motion.div className={styles.ctas} variants={fadeUp(0.4)}>
                <Button label="View My Work" href="#projects" variant="primary" arrow />
                <Button
                    label="Download Resume"
                    href={SITE_CONFIG.resumePath}
                    variant="secondary"
                    download
                    newTab
                />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scroll}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
            >
                <span>scroll</span>
                <span className={styles.scrollArrow}>↓</span>
            </motion.div>
        </motion.section>
    );
}
