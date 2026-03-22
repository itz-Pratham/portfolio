'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';
import styles from './Projects.module.css';

const projects: Project[] = projectsData;

export default function Projects() {
    return (
        <AnimatedSection id="projects" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title="Featured Projects"
                    subtitle="Ambitious systems built to solve real engineering problems"
                />
                <div className={styles.projectsList}>
                    {projects.map((project, idx) => {
                        const indexStr = String(idx + 1).padStart(2, '0');
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                className={`${styles.projectRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                            >
                                {/* Visual Mockup Side */}
                                <div className={styles.visualCol}>
                                    <div className={styles.mockupContainer}>
                                        <div className={styles.glowBackdrop} />
                                        <div className={styles.mockupGlass}>
                                            <div className={styles.macChrome}>
                                                <span className={`${styles.macDot} ${styles.macRed}`} />
                                                <span className={`${styles.macDot} ${styles.macYellow}`} />
                                                <span className={`${styles.macDot} ${styles.macGreen}`} />
                                            </div>
                                            <div className={styles.mockupInner}>
                                                <span className={styles.mockupTitle}>{project.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={styles.contentCol}>
                                    <div className={styles.projectHeader}>
                                        <span className={styles.metaInfo}>
                                            {indexStr} / {project.category.toUpperCase()}
                                        </span>
                                        <div className={styles.metaLine} />
                                    </div>

                                    <h3 className={styles.projectName}>{project.name}</h3>

                                    <p className={styles.projectDesc}>
                                        {project.solution || project.description}
                                    </p>

                                    <div className={styles.tags}>
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className={styles.pillTag}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.links}>
                                        <a
                                            href={project.links.demo || project.links.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.textLink}
                                        >
                                            View <span className={styles.arrow}>↗</span>
                                        </a>
                                        {project.links.code && (
                                            <a href={project.links.code} target="_blank" rel="noreferrer" className={styles.textLink}>
                                                GitHub <span className={styles.arrow}>↗</span>
                                            </a>
                                        )}
                                        {project.links.package && (
                                            <a href={project.links.package} target="_blank" rel="noreferrer" className={styles.textLink}>
                                                Package <span className={styles.arrow}>↗</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}
