import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    arrow?: boolean;
    onClick?: () => void;
    download?: boolean;
    newTab?: boolean;
}

export default function Button({
    label,
    href,
    variant = 'primary',
    arrow = false,
    onClick,
    download = false,
    newTab = false,
}: ButtonProps) {
    const className = `${styles.button} ${styles[variant]}`;

    const content = (
        <>
            {label}
            {arrow && <span className={styles.arrow}>→</span>}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={className}
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noopener noreferrer' : undefined}
                download={download || undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {content}
        </button>
    );
}
