import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className={styles.title}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.divider} />
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}
