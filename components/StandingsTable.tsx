import { Standing } from "@/lib/types";

export function StandingsTable({ standings }: { standings: Standing[] }) {
  return (
    <div className="table-shell">
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
          {standings.map((team, index) => (
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
