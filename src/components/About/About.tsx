'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import styles from './About.module.css';

export default function About() {
    return (
        <AnimatedSection id="about" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle title="About Me" />
                <div className={styles.content}>
                    {/* Bio */}
                    <div className={styles.bio}>
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
                        <p className={styles.paragraph}>
                            I care about understanding how things work under the hood — that&apos;s why
                            I&apos;ve written a Bitcoin Script interpreter in Rust, built a multi-cloud
                            reconciliation engine, and explored VAE-based anomaly detection. I&apos;m
                            drawn to hard problems and I like shipping.
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        {/* Education */}
                        <div className={styles.block}>
                            <span className={styles.blockLabel}>Education</span>
                            <h3 className={styles.blockTitle}>
                                B.Tech — Computer Science Engineering
                            </h3>
                            <p className={styles.blockMeta}>
                                Bhagwan Parshuram Institute of Technology, New Delhi
                            </p>
                            <p className={styles.blockMeta}>
                                CGPA: 9.07 (7th Sem) • Expected Graduation: June 2026
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className={styles.block}>
                            <span className={styles.blockLabel}>Achievements</span>
                            <div className={styles.achievementsList}>
                                <p className={styles.achievementItem}>
                                    Solved 800+ problems on LeetCode and GeeksforGeeks
                                </p>
                                <p className={styles.achievementItem}>
                                    Hackathon top prize (1× winner, 2× finalist)
                                </p>
                                <p className={styles.achievementItem}>
                                    Published mini-bitcoin-script on crates.io
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
