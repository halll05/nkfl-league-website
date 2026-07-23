import { Standing } from "@/lib/types";

function DivisionTable({ title, teams }: { title: string; teams: Standing[] }) {
  const sortedTeams = [...teams].sort((a, b) => {
    const winDiff = b.wins - a.wins;
    if (winDiff !== 0) return winDiff;
    return b.pointsFor - a.pointsFor;
  });

  return (
    <div className="division-card">
      <div className="division-title">
        <span>{title}</span>
        <small>{sortedTeams.length} TEAMS</small>
      </div>

      <table>
        <thead>
          <tr>
            <th>RK</th>
            <th>FRANCHISE</th>
            <th>W-L-T</th>
            <th>PF</th>
            <th>PA</th>
            <th>STREAK</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={team.rosterId}>
              <td><span className={`rank rank-${index + 1}`}>{index + 1}</span></td>
              <td>
                <strong>{team.team}</strong>
                <small>{team.manager}</small>
              </td>
              <td>{team.wins}-{team.losses}{team.ties ? `-${team.ties}` : ""}</td>
              <td>{team.pointsFor.toFixed(1)}</td>
              <td>{team.pointsAgainst.toFixed(1)}</td>
              <td><span className={team.streak.startsWith("W") ? "win" : "loss"}>{team.streak}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StandingsTable({ standings }: { standings: Standing[] }) {
  const american = standings.filter((team) => team.division === "American");
  const national = standings.filter((team) => team.division === "National");

  return (
    <div className="division-standings">
      <DivisionTable title="American Division" teams={american} />
      <DivisionTable title="National Division" teams={national} />
    </div>
  );
}
