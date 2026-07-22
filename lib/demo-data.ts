import { Standing } from "./types";

export const demoStandings: Standing[] = [
  { rosterId: 1, manager: "Marcus", team: "Gridiron Kings", wins: 9, losses: 3, ties: 0, pointsFor: 1542.8, pointsAgainst: 1374.2, streak: "W4" },
  { rosterId: 2, manager: "Alex", team: "Sunday Reapers", wins: 8, losses: 4, ties: 0, pointsFor: 1498.4, pointsAgainst: 1401.7, streak: "W2" },
  { rosterId: 3, manager: "Jordan", team: "Carolina Chaos", wins: 8, losses: 4, ties: 0, pointsFor: 1461.1, pointsAgainst: 1433.9, streak: "L1" },
  { rosterId: 4, manager: "Chris", team: "Fourth & Reckless", wins: 7, losses: 5, ties: 0, pointsFor: 1512.6, pointsAgainst: 1490.3, streak: "W1" },
  { rosterId: 5, manager: "Derrick", team: "The Waiver Wolves", wins: 7, losses: 5, ties: 0, pointsFor: 1422.9, pointsAgainst: 1399.5, streak: "W3" },
  { rosterId: 6, manager: "Taylor", team: "Red Zone Renegades", wins: 6, losses: 6, ties: 0, pointsFor: 1478.2, pointsAgainst: 1468.7, streak: "L2" },
  { rosterId: 7, manager: "Sam", team: "Keeper Creepers", wins: 6, losses: 6, ties: 0, pointsFor: 1398.7, pointsAgainst: 1412.4, streak: "W1" },
  { rosterId: 8, manager: "Ryan", team: "Blitz Brigade", wins: 5, losses: 7, ties: 0, pointsFor: 1364.4, pointsAgainst: 1449.2, streak: "L1" },
  { rosterId: 9, manager: "Devin", team: "Touchdown Syndicate", wins: 5, losses: 7, ties: 0, pointsFor: 1344.9, pointsAgainst: 1458.3, streak: "W1" },
  { rosterId: 10, manager: "Cameron", team: "End Zone Empire", wins: 4, losses: 8, ties: 0, pointsFor: 1312.3, pointsAgainst: 1474.1, streak: "L3" },
  { rosterId: 11, manager: "Pat", team: "Fantasy Outlaws", wins: 3, losses: 9, ties: 0, pointsFor: 1267.8, pointsAgainst: 1498.6, streak: "L5" },
  { rosterId: 12, manager: "Jamie", team: "Bench Mob", wins: 2, losses: 10, ties: 0, pointsFor: 1198.5, pointsAgainst: 1511.4, streak: "L2" }
];

export const demoMatchups = [
  { away: "Carolina Chaos", home: "Gridiron Kings", awayScore: 117.6, homeScore: 122.4, status: "FINAL" },
  { away: "Waiver Wolves", home: "Sunday Reapers", awayScore: 103.8, homeScore: 101.2, status: "FINAL" },
  { away: "Fourth & Reckless", home: "Red Zone Renegades", awayScore: 88.9, homeScore: 90.1, status: "FINAL" }
];
