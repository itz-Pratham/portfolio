import { getGitHubStats } from '@/lib/github';
import { getLeetCodeStats } from '@/lib/leetcode';
import CodingProfilesClient from './CodingProfilesClient';

/**
 * Server Component Wrapper
 * Fetches data on the server, avoiding CORS and passing standard data to the client view.
 */
export default async function CodingProfiles() {
    const [gh, lc] = await Promise.all([
        getGitHubStats(),
        getLeetCodeStats()
    ]);

    return <CodingProfilesClient gh={gh} lc={lc} />;
}
