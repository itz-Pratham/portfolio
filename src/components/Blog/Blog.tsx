'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import blogData from '@/data/blog.json';
import type { BlogPost } from '@/types';
import styles from './Blog.module.css';

const posts: BlogPost[] = blogData;

export default function Blog() {
    return (
        <AnimatedSection id="blog" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title="Technical Writing"
                    subtitle="Thoughts on distributed systems, ML engineering, and building software."
                />
                <div className={styles.grid}>
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.15, ease: 'easeOut' }}
                        >
                            <a
                                href={`#blog`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Blog pages coming soon!');
                                }}
                                className={styles.card}
                            >
                                <div className={styles.meta}>
                                    <span className={styles.date}>📝 {post.date}</span>
                                    <span className={styles.readTime}>• {post.readTime}</span>
                                </div>
                                <h3 className={styles.title}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <div className={styles.tags}>
                                    {post.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.readMore}>
                                    Read More <span className={styles.arrow}>→</span>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
