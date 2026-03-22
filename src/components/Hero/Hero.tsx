'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './Hero.module.css';

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
});

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <motion.div
                className={styles.heroContent}
                initial="hidden"
                animate="visible"
                variants={stagger}
            >
                {/* Availability Badge */}
                <motion.div className={styles.badge} variants={fadeUp(0)}>
                    <span className={styles.badgeDot} />
                    {SITE_CONFIG.availability}
                </motion.div>

                {/* Massive Name */}
                <motion.h1 className={styles.massiveTitle} variants={fadeUp(0.05)}>
                    Hi, I&apos;m <span className={styles.nameAccent}>{SITE_CONFIG.name}.</span>
                </motion.h1>

                {/* Role */}
                <motion.h2 className={styles.roleTitle} variants={fadeUp(0.1)}>
                    {SITE_CONFIG.title}
                </motion.h2>

                {/* Value Proposition */}
                <motion.p className={styles.valueProp} variants={fadeUp(0.2)}>
                    {SITE_CONFIG.tagline}
                </motion.p>
                <motion.p className={styles.subText} variants={fadeUp(0.3)}>
                    I design and build production-grade software that handles real complexity.
                </motion.p>

                {/* Text Links */}
                <motion.div className={styles.linksBlock} variants={fadeUp(0.4)}>
                    <a href="#projects" className={styles.textLink}>
                        View My Work <span className={styles.arrow}>↗</span>
                    </a>
                    <a href={SITE_CONFIG.resumePath} target="_blank" rel="noreferrer" className={styles.textLink}>
                        Download Resume <span className={styles.arrow}>↗</span>
                    </a>
                </motion.div>
            </motion.div>

        </section>
    );
}
