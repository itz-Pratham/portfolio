'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import Tag from '@/components/shared/Tag';
import skillsData from '@/data/skills.json';
import type { Skill } from '@/types';
import styles from './TechStack.module.css';

const skills: Skill[] = skillsData;

export default function TechStack() {
    return (
        <AnimatedSection id="skills" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle title="Technical Expertise" />
                <div className={styles.categories}>
                    {skills.map((skill, catIdx) => (
                        <div key={skill.category} className={styles.category}>
                            <span className={styles.categoryLabel}>{skill.category}</span>
                            <div className={styles.tags}>
                                {skill.tags.map((tag, tagIdx) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: catIdx * 0.08 + tagIdx * 0.04,
                                            ease: 'easeOut',
                                        }}
                                    >
                                        <Tag label={tag} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
