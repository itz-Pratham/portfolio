'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import experienceData from '@/data/experience.json';
import type { Experience as ExperienceType } from '@/types';
import styles from './Experience.module.css';

const experiences: ExperienceType[] = experienceData;

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // Smooth physics-based spring for the line fill
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <AnimatedSection id="experience" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle title="Professional Experience" />

                <div className={styles.timelineWrapper} ref={containerRef}>
                    {/* The Scrolling Tracker Line */}
                    <div className={styles.lineTrack}>
                        <motion.div
                            className={styles.lineFill}
                            style={{ scaleY, transformOrigin: 'top' }}
                        />
                    </div>

                    <div className={styles.timelineContent}>
                        {experiences.map((exp) => (
                            <motion.div
                                key={exp.id}
                                className={styles.card}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.roleInfo}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.duration}>{exp.duration}</span>
                                        <span className={styles.location}>{exp.location}</span>
                                    </div>
                                </div>

                                <div className={styles.achievements}>
                                    {exp.achievements.map((achievement, i) => (
                                        <p key={i} className={styles.achievement}>
                                            {achievement}
                                        </p>
                                    ))}
                                </div>

                                <div className={styles.tags}>
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className={styles.pillTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
