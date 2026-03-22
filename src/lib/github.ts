import { GITHUB_USERNAME, FEATURED_REPOS } from './constants';
import fallbackData from '../data/github-fallback.json';
import type { GitHubStats } from '../types';

export async function getGitHubStats(): Promise<GitHubStats> {
    try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!userRes.ok) throw new Error('Failed to fetch user');
        const user = await userRes.json();

        const reposRes = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { next: { revalidate: 3600 } }
        );

        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const allRepos = await reposRes.json();

        const totalStars = allRepos.reduce(
            (acc: number, curr: { stargazers_count: number }) => acc + curr.stargazers_count,
            0
        );

        const featuredRepos = allRepos
            .filter((repo: { name: string }) => FEATURED_REPOS.includes(repo.name as string))
            .map((repo: { name: string; description: string; language: string; stargazers_count: number; html_url: string }) => ({
                name: repo.name,
                description: repo.description,
                language: repo.language,
                stars: repo.stargazers_count,
                url: repo.html_url,
            }))
            // Sort by the order defined in constants
            .sort(
                (a: { name: string }, b: { name: string }) =>
                    FEATURED_REPOS.indexOf(a.name as string) - FEATURED_REPOS.indexOf(b.name as string)
            );

        return {
            publicRepos: user.public_repos,
            followers: user.followers,
            totalStars,
            featuredRepos,
        };
    } catch (error) {
        console.warn('Failed to fetch GitHub stats, using fallback:', error);
        return fallbackData;
    }
}
