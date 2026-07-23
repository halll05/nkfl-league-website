export type DivisionName = "American" | "National";

export type LeagueUser = {
  user_id: string;
  display_name: string;
  avatar?: string | null;
  metadata?: {
    team_name?: string;
  };
};

export type Roster = {
  roster_id: number;
  owner_id: string | null;
  wins?: number;
  losses?: number;
  ties?: number;
  settings?: {
    wins?: number;
    losses?: number;
    ties?: number;
    fpts?: number;
    fpts_decimal?: number;
    fpts_against?: number;
    fpts_against_decimal?: number;
  };
};

export type Matchup = {
  matchup_id: number | null;
  roster_id: number;
  points: number;
  players?: string[];
  starters?: string[];
};

export type Standing = {
  rosterId: number;
  manager: string;
  team: string;
  division: DivisionName;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
  streak: string;
};
