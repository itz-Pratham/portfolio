/* ============================================
   Type Definitions
   ============================================ */

export interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
    problem: string;
    solution: string;
    techStack: string[];
    metrics?: string[];
    links: {
        demo?: string;
        code?: string;
        package?: string;
    };
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    achievements: string[];
    technologies: string[];
}

export interface Skill {
    category: string;
    tags: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    slug: string;
    tags: string[];
}

export interface GitHubRepo {
    name: string;
    description: string;
    language: string;
    stars: number;
    url: string;
}

export interface GitHubStats {
    publicRepos: number;
    followers: number;
    totalStars: number;
    featuredRepos: GitHubRepo[];
}

export interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    acceptanceRate: number;
    ranking: number;
}

export interface ArchitectureCard {
    id: string;
    icon: string;
    title: string;
    description: string;
    flow: string[];
    diagramUrl?: string;
}
