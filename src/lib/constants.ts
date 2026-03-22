/* ============================================
   Site Configuration — Single Source of Truth
   ============================================ */

export const SITE_CONFIG = {
    name: 'Pratham Mittal',
    title: 'Backend & Distributed Systems Engineer',
    tagline: 'Building scalable distributed systems and AI-powered backend infrastructure',
    valueProp:
        'I design and build production-grade software that handles real complexity — from multi-cloud event reconciliation engines processing 1M+ daily events to LLM-powered automation tools.',
    availability: 'Open to opportunities',
    email: 'prathammittal355@gmail.com',
    phone: '+918595537057',
    resumePath: 'https://drive.google.com/file/d/1MUaKex87R_pbTqdRIeJlmtCHSuwxtRyF/view?usp=sharing',
} as const;

export const SOCIAL_LINKS = {
    github: 'https://github.com/itz-Pratham',
    linkedin: 'https://www.linkedin.com/in/pratham-mittal-4b59a725a/',
    leetcode: 'https://leetcode.com/u/itz_Pratham/',
} as const;

export const GITHUB_USERNAME = 'itz-Pratham';
export const LEETCODE_USERNAME = 'itz_Pratham';

export const FEATURED_REPOS: string[] = [
    'helios-platform',
    'mini-bitcoin-script',
    'VAE-Based-Multimodal-Anomaly-Detection-System',
] as const;

export const NAV_ITEMS = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
] as const;
