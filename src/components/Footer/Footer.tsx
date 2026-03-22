'use client';

import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.nameRow}>
                        <span className={styles.name}>{SITE_CONFIG.name}</span>
                        <div className={styles.social}>
                            <a href={`mailto:${SITE_CONFIG.email}`} className={styles.socialLink}>
                                Email
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                LinkedIn
                            </a>
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                GitHub
                            </a>
                            <a
                                href={SOCIAL_LINKS.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                LeetCode
                            </a>
                        </div>
                    </div>
                    <p className={styles.title}>{SITE_CONFIG.title}</p>
                </div>

                <div className={styles.bottom}>
                    <p>
                        © {year} • Built with Next.js, TypeScript, Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
