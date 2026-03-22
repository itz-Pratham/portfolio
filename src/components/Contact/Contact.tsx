'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import styles from './Contact.module.css';

export default function Contact() {
    const contactLinks = [
        { label: 'RESUME', href: SITE_CONFIG.resumePath },
        { label: 'GITHUB', href: SOCIAL_LINKS.github },
        { label: 'LINKEDIN', href: SOCIAL_LINKS.linkedin },
        { label: 'LEETCODE', href: SOCIAL_LINKS.leetcode },
        { label: 'MAIL', href: `mailto:${SITE_CONFIG.email}` },
    ];

    return (
        <section id="contact" className={styles.section}>

            {/* About Me Section embedded above Contact */}
            <div className={styles.aboutContainer} id="about">
                <div className={styles.bioCol}>
                    <h3 className={styles.aboutTitle}>About Me</h3>
                    <p className={styles.paragraph}>
                        I&apos;m a software engineer with a deep interest in building systems that
                        actually work at scale — from distributed event pipelines handling millions
                        of messages per day, to ML models that detect anomalies in real-time streams.
                    </p>
                    <p className={styles.paragraph}>
                        I started with competitive programming (800+ problems on LeetCode + GFG),
                        moved into ML and GenAI, and then found my passion at the intersection:
                        building intelligent, reliable backend systems. My most interesting work
                        lives where engineering depth meets applied AI.
                    </p>
                    <p className={styles.paragraph}>
                        Currently interning at Juspay, where I&apos;m building on the Breeze/1CCO
                        platform used by tens of thousands of daily users. Before that, I interned
                        at EXL Services (GenAI pipelines) and DRDO (ML model optimization).
                    </p>
                </div>

                <div className={styles.eduCol}>
                    <div className={styles.block}>
                        <span className={styles.blockLabel}>Education</span>
                        <h4 className={styles.blockTitle}>B.Tech — Computer Science</h4>
                        <p className={styles.blockMeta}>Bhagwan Parshuram Institute of Technology</p>
                        <p className={styles.blockMeta}>CGPA: 9.07 • Expected Graduation: June 2026</p>
                    </div>

                    <div className={styles.block}>
                        <span className={styles.blockLabel}>Achievements</span>
                        <ul className={styles.achievementsList}>
                            <li className={styles.achievementItem}>Solved 800+ problems on LeetCode and GFG</li>
                            <li className={styles.achievementItem}>Hackathon top prize (1× winner, 2× finalist)</li>
                            <li className={styles.achievementItem}>Published mini-bitcoin-script on crates.io</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Massive Let's Talk Footer */}
            <div className={styles.contactContainer}>
                <div className={styles.leftCol}>
                    <motion.h2
                        className={styles.massiveText}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        LET&apos;S<br />TALK.
                    </motion.h2>
                </div>

                <div className={styles.rightCol}>
                    {contactLinks.map((link, idx) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        >
                            {link.label} <span className={styles.arrow}>↗</span>
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className={styles.subFooter}>
                <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js & Framer Motion.</p>
            </div>
        </section>
    );
}
