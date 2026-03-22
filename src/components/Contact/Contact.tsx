'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import styles from './Contact.module.css';

export default function Contact() {
    const contactLinks = [
        { label: 'EMAIL', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
        { label: 'LINKEDIN', value: 'pratham-mittal', href: SOCIAL_LINKS.linkedin },
        { label: 'GITHUB', value: 'itz-Pratham', href: SOCIAL_LINKS.github },
        { label: 'LEETCODE', value: 'itz_Pratham', href: SOCIAL_LINKS.leetcode },
    ];

    return (
        <AnimatedSection id="contact" className={styles.section} threshold={0.4}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    Let&apos;s Build Something
                </motion.h2>

                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    I&apos;m currently open to full-time roles, internships, and contract work —
                    especially in backend systems, ML infrastructure, or full-stack engineering.
                </motion.p>

                <div className={styles.links}>
                    {contactLinks.map((link, idx) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        >
                            <span className={styles.linkLabel}>{link.label}</span>
                            <span className={styles.linkValue}>
                                {link.value} <span className={styles.icon}>↗</span>
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
