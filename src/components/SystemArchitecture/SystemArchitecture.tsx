'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionTitle from '@/components/shared/SectionTitle';
import type { ArchitectureCard } from '@/types';
import styles from './SystemArchitecture.module.css';

const architectures: ArchitectureCard[] = [
    {
        id: 'kafka',
        icon: '⚡',
        title: 'Kafka Streaming Pipeline',
        description:
            'High-throughput event processing — 15,000 msgs/s with real-time anomaly detection and self-healing.',
        flow: ['Kafka', '→ Redis Index', '→ ML Detector', '→ DLQ / Replay'],
    },
    {
        id: 'rag',
        icon: '🧠',
        title: 'RAG Knowledge System',
        description:
            'Retrieval-augmented generation for personalized cold email automation.',
        flow: ['Prompt', '→ Vector Search (ChromaDB)', '→ LLM Generation', '→ Output'],
    },
    {
        id: 'multicloud',
        icon: '☁️',
        title: 'Multi-Cloud Reconciliation',
        description:
            '99.99% event consistency across AWS, GCP, and Azure.',
        flow: ['Publishers (AWS/GCP/Azure)', '→ Kafka Topics', '→ Redis/Bloom Index', '→ Replay Subsystem'],
    },
    {
        id: 'anomaly',
        icon: '📊',
        title: 'Anomaly Detection Loop',
        description:
            'LSTM + EWMA hybrid detection pipeline feeding Kafka for automated recovery.',
        flow: ['Sensor Stream', '→ LSTM + EWMA', '→ Anomaly Score', '→ Kafka Alert', '→ Auto Recovery'],
    },
];

export default function SystemArchitecture() {
    return (
        <AnimatedSection id="architecture" className={styles.section}>
            <div className={styles.container}>
                <SectionTitle
                    title="Systems I've Built"
                    subtitle="Architecture-level thinking behind my most complex projects"
                />
                <div className={styles.grid}>
                    {architectures.map((arch, idx) => (
                        <motion.div
                            key={arch.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.15, ease: 'easeOut' }}
                        >
                            <div className={styles.cardIcon}>{arch.icon}</div>
                            <h3 className={styles.cardTitle}>{arch.title}</h3>
                            <p className={styles.cardDesc}>{arch.description}</p>
                            <div className={styles.flow}>
                                {arch.flow.map((step, i) => (
                                    <span key={i} className={styles.flowStep}>
                                        {step.startsWith('→') ? (
                                            <>
                                                <span className={styles.flowArrow}>→</span>
                                                {step.slice(1)}
                                            </>
                                        ) : (
                                            step
                                        )}
                                    </span>
                                ))}
                            </div>
                            <button
                                className={styles.diagramBtn}
                                onClick={() =>
                                    alert('Diagram coming soon — check back for interactive flow visualizations')
                                }
                            >
                                View Flow Diagram →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
