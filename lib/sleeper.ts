import { demoStandings, divisionAssignments } from "./demo-data";
import { LeagueUser, Matchup, Roster, Standing } from "./types";

const API = "https://api.sleeper.app/v1";

async function sleeperFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`Sleeper request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function points(base?: number, decimal?: number) {
  return Number(`${base ?? 0}.${String(decimal ?? 0).padStart(2, "0")}`);
}

export async function getStandings(): Promise<{
  standings: Standing[];
  source: "live" | "demo";
}> {
  const leagueId = process.env.SLEEPER_LEAGUE_ID;

  if (!leagueId) {
    return { standings: demoStandings, source: "demo" };
  }

  try {
    const [users, rosters] = await Promise.all([
      sleeperFetch<LeagueUser[]>(`/league/${leagueId}/users`),
      sleeperFetch<Roster[]>(`/league/${leagueId}/rosters`)
    ]);

    const userById = new Map(users.map((user) => [user.user_id, user]));

    const standings = rosters
      .slice(0, 8)
      .map((roster): Standing => {
        const user = roster.owner_id ? userById.get(roster.owner_id) : undefined;
        const wins = roster.settings?.wins ?? roster.wins ?? 0;
        const losses = roster.settings?.losses ?? roster.losses ?? 0;
        const ties = roster.settings?.ties ?? roster.ties ?? 0;

        return {
          rosterId: roster.roster_id,
          manager: user?.display_name ?? "Open Franchise",
          team: user?.metadata?.team_name || `${user?.display_name ?? "Open"} Franchise`,
          division: divisionAssignments[roster.roster_id] ?? (roster.roster_id <= 4 ? "American" : "National"),
          wins,
          losses,
          ties,
          pointsFor: points(roster.settings?.fpts, roster.settings?.fpts_decimal),
          pointsAgainst: points(roster.settings?.fpts_against, roster.settings?.fpts_against_decimal),
          streak: "—"
        };
      })
      .sort((a, b) => {
        const winDiff = b.wins - a.wins;
        if (winDiff !== 0) return winDiff;
        return b.pointsFor - a.pointsFor;
      });

    return { standings, source: "live" };
  } catch (error) {
    console.error(error);
    return { standings: demoStandings, source: "demo" };
  }
}

export async function getMatchups(week = 1): Promise<Matchup[]> {
  const leagueId = process.env.SLEEPER_LEAGUE_ID;
  if (!leagueId) return [];

  try {
    return await sleeperFetch<Matchup[]>(`/league/${leagueId}/matchups/${week}`);
  } catch {
    return [];
  }
}
