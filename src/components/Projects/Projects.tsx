'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import Tag from '@/components/shared/Tag';
import Button from '@/components/shared/Button';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';
import styles from './Projects.module.css';

const projects: Project[] = projectsData;

export default function Projects() {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggle = (id: string) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    return (
        <AnimatedSection id="projects" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title="Featured Projects"
                    subtitle="Ambitious systems built to solve real engineering problems"
                />
                <div className={styles.grid}>
                    {projects.map((project, idx) => {
                        const isOpen = expanded === project.id;
                        return (
                            <motion.div
                                key={project.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                                onClick={() => toggle(project.id)}
                            >
                                {/* Header */}
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>{project.category}</span>
                                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                                        ›
                                    </span>
                                </div>

                                {/* Name & Description */}
                                <h3 className={styles.projectName}>{project.name}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>

                                {/* Tags (always visible) */}
                                <div className={styles.tags}>
                                    {project.techStack.map((tech) => (
                                        <Tag key={tech} label={tech} />
                                    ))}
                                </div>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            className={styles.expandedContent}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            {/* Problem */}
                                            <div className={styles.detailBlock}>
                                                <span className={styles.detailLabel}>Problem</span>
                                                <p className={styles.detailText}>{project.problem}</p>
                                            </div>

                                            {/* Solution */}
                                            <div className={styles.detailBlock}>
                                                <span className={styles.detailLabel}>Solution</span>
                                                <p className={styles.detailText}>{project.solution}</p>
                                            </div>

                                            {/* Impact */}
                                            {project.metrics && project.metrics.length > 0 && (
                                                <div className={styles.detailBlock}>
                                                    <span className={styles.detailLabel}>Impact</span>
                                                    <div className={styles.metricsList}>
                                                        {project.metrics.map((metric) => (
                                                            <span key={metric} className={styles.metric}>
                                                                {metric}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Links */}
                                            <div className={styles.links}>
                                                {project.links.demo && (
                                                    <Button
                                                        label="View Live"
                                                        href={project.links.demo}
                                                        variant="ghost"
                                                        arrow
                                                        newTab
                                                    />
                                                )}
                                                {project.links.code && (
                                                    <Button
                                                        label="View Code"
                                                        href={project.links.code}
                                                        variant="ghost"
                                                        arrow
                                                        newTab
                                                    />
                                                )}
                                                {project.links.package && (
                                                    <Button
                                                        label="Package"
                                                        href={project.links.package}
                                                        variant="ghost"
                                                        arrow
                                                        newTab
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}
