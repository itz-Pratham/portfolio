import { LEETCODE_USERNAME } from './constants';
import fallbackData from '../data/leetcode-fallback.json';
import type { LeetCodeStats } from '../types';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const QUERY = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

export async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const res = await fetch(LEETCODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) throw new Error('Failed to fetch from LeetCode GraphQL');

    const data = await res.json();
    const user = data.data.matchedUser;

    if (!user) {
      throw new Error(`User ${LEETCODE_USERNAME} not found`);
    }

    const { submitStats, profile } = user;

    type SubmissionStat = { difficulty: string; count?: number; submissions?: number };

    const totalSolved = submitStats.acSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'All'
    )?.count || 0;

    const easySolved = submitStats.acSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'Easy'
    )?.count || 0;

    const mediumSolved = submitStats.acSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'Medium'
    )?.count || 0;

    const hardSolved = submitStats.acSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'Hard'
    )?.count || 0;

    const totalSubmissions = submitStats.totalSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'All'
    )?.submissions || 1; // Prevent division by zero

    const totalAcSubmissions = submitStats.acSubmissionNum.find(
      (s: SubmissionStat) => s.difficulty === 'All'
    )?.submissions || 0;

    const acceptanceRate = (totalAcSubmissions / totalSubmissions) * 100;

    return {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      acceptanceRate: parseFloat(acceptanceRate.toFixed(1)),
      ranking: profile.ranking,
    };
  } catch (error) {
    console.warn('Failed to fetch LeetCode stats, using fallback:', error);
    return fallbackData; // Fallback to 800+ solved
  }
}
