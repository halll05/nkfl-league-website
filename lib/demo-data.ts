import { Standing } from "./types";

export const demoStandings: Standing[] = [
  { rosterId: 1, manager: "Marcus", team: "Gridiron Kings", division: "American", wins: 7, losses: 3, ties: 0, pointsFor: 1284.6, pointsAgainst: 1142.2, streak: "W4" },
  { rosterId: 2, manager: "Alex", team: "Sunday Reapers", division: "American", wins: 6, losses: 4, ties: 0, pointsFor: 1248.4, pointsAgainst: 1178.7, streak: "W2" },
  { rosterId: 3, manager: "Jordan", team: "Carolina Chaos", division: "American", wins: 5, losses: 5, ties: 0, pointsFor: 1211.1, pointsAgainst: 1203.9, streak: "L1" },
  { rosterId: 4, manager: "Chris", team: "Fourth & Reckless", division: "American", wins: 4, losses: 6, ties: 0, pointsFor: 1192.6, pointsAgainst: 1230.3, streak: "W1" },
  { rosterId: 5, manager: "Derrick", team: "The Waiver Wolves", division: "National", wins: 7, losses: 3, ties: 0, pointsFor: 1262.9, pointsAgainst: 1159.5, streak: "W3" },
  { rosterId: 6, manager: "Taylor", team: "Red Zone Renegades", division: "National", wins: 5, losses: 5, ties: 0, pointsFor: 1228.2, pointsAgainst: 1218.7, streak: "L2" },
  { rosterId: 7, manager: "Sam", team: "Keeper Creepers", division: "National", wins: 4, losses: 6, ties: 0, pointsFor: 1158.7, pointsAgainst: 1222.4, streak: "W1" },
  { rosterId: 8, manager: "Jamie", team: "Bench Mob", division: "National", wins: 2, losses: 8, ties: 0, pointsFor: 1018.5, pointsAgainst: 1261.4, streak: "L2" }
];

export const divisionAssignments: Record<number, "American" | "National"> = {
  // American Division
  2: "American",
  4: "American",
  6: "American",
  8: "American",

  // National Division
  1: "National",
  3: "National",
  5: "National",
  7: "National"
};

export const demoMatchups = [
  { away: "Carolina Chaos", home: "Gridiron Kings", awayScore: 117.6, homeScore: 122.4, status: "FINAL" },
  { away: "Waiver Wolves", home: "Sunday Reapers", awayScore: 103.8, homeScore: 101.2, status: "FINAL" },
  { away: "Fourth & Reckless", home: "Red Zone Renegades", awayScore: 88.9, homeScore: 90.1, status: "FINAL" }
];
