'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import Tag from '@/components/shared/Tag';
import experienceData from '@/data/experience.json';
import type { Experience as ExperienceType } from '@/types';
import styles from './Experience.module.css';

const experiences: ExperienceType[] = experienceData;

export default function Experience() {
    return (
        <AnimatedSection id="experience" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle title="Professional Experience" />
                <div className={styles.timeline}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.12, ease: 'easeOut' }}
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
                                    <Tag key={tech} label={tech} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
