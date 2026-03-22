'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';
import { SOCIAL_LINKS } from '@/lib/constants';
import type { GitHubStats, LeetCodeStats } from '@/types';
import styles from './CodingProfiles.module.css';

interface Props {
    gh: GitHubStats;
    lc: LeetCodeStats;
}

export default function CodingProfilesClient({ gh, lc }: Props) {
    const totalLC = lc.easySolved + lc.mediumSolved + lc.hardSolved;

    return (
        <AnimatedSection id="profiles" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.mainTitle}>Coding Profiles</h2>
                    <p className={styles.mainSubtitle}>Building in the open and solving hard problems</p>
                </div>
                <div className={styles.columns}>
                    {/* GitHub Column */}
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className={styles.columnTitle}>GitHub</h3>
                        <p className={styles.columnSubtitle}>Open Source &amp; Contributions</p>

                        <div className={styles.statsGrid}>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>{gh.publicRepos}</div>
                                <div className={styles.statLabel}>Repos</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>{gh.totalStars}</div>
                                <div className={styles.statLabel}>Stars</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>{gh.followers}</div>
                                <div className={styles.statLabel}>Followers</div>
                            </div>
                        </div>

                        <div className={styles.repos}>
                            {gh.featuredRepos.map((repo) => (
                                <a
                                    key={repo.name}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.repo}
                                >
                                    <h4 className={styles.repoName}>{repo.name}</h4>
                                    <p className={styles.repoDesc}>{repo.description}</p>
                                    <div className={styles.repoMeta}>
                                        <span className={styles.repoLang}>{repo.language}</span>
                                        <span className={styles.repoStars}>★ {repo.stars}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className={styles.cta}>
                            <Button
                                label="View GitHub Profile"
                                href={SOCIAL_LINKS.github}
                                variant="ghost"
                                arrow
                                newTab
                            />
                        </div>
                    </motion.div>

                    {/* LeetCode Column */}
                    <motion.div
                        className={styles.column}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h3 className={styles.columnTitle}>LeetCode</h3>
                        <p className={styles.columnSubtitle}>Problem Solving</p>

                        <div className={styles.statsGrid}>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>{lc.totalSolved}</div>
                                <div className={styles.statLabel}>Solved</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>{lc.acceptanceRate}%</div>
                                <div className={styles.statLabel}>Acceptance</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>Top {Math.round(lc.ranking / 1000)}k</div>
                                <div className={styles.statLabel}>Ranking</div>
                            </div>
                        </div>

                        <div className={styles.distribution}>
                            {/* Easy */}
                            <div className={styles.distBlock}>
                                <div className={styles.distRow}>
                                    <span className={styles.distLabel}>Easy</span>
                                    <span className={styles.distValue}>{lc.easySolved}</span>
                                </div>
                                <div className={styles.distBar}>
                                    <div
                                        className={`${styles.distFill} ${styles.easy}`}
                                        style={{ width: `${(lc.easySolved / totalLC) * 100}%` }}
                                    />
                                </div>
                            </div>
                            {/* Medium */}
                            <div className={styles.distBlock}>
                                <div className={styles.distRow}>
                                    <span className={styles.distLabel}>Medium</span>
                                    <span className={styles.distValue}>{lc.mediumSolved}</span>
                                </div>
                                <div className={styles.distBar}>
                                    <div
                                        className={`${styles.distFill} ${styles.medium}`}
                                        style={{ width: `${(lc.mediumSolved / totalLC) * 100}%` }}
                                    />
                                </div>
                            </div>
                            {/* Hard */}
                            <div className={styles.distBlock}>
                                <div className={styles.distRow}>
                                    <span className={styles.distLabel}>Hard</span>
                                    <span className={styles.distValue}>{lc.hardSolved}</span>
                                </div>
                                <div className={styles.distBar}>
                                    <div
                                        className={`${styles.distFill} ${styles.hard}`}
                                        style={{ width: `${(lc.hardSolved / totalLC) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.cta}>
                            <Button
                                label="View LeetCode Profile"
                                href={SOCIAL_LINKS.leetcode}
                                variant="ghost"
                                arrow
                                newTab
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}
