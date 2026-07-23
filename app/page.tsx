import { Nav } from "@/components/Nav";
import { StandingsTable } from "@/components/StandingsTable";
import { demoMatchups } from "@/lib/demo-data";
import { getStandings } from "@/lib/sleeper";

const leagueName = process.env.NEXT_PUBLIC_LEAGUE_NAME || "National Keeper Football League";
const season = process.env.NEXT_PUBLIC_SEASON || "2026";

export default async function Home() {
  const { standings, source } = await getStandings();
  const leader = standings[0];
  const pointsLeader = [...standings].sort((a, b) => b.pointsFor - a.pointsFor)[0];
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const discord = process.env.NEXT_PUBLIC_DISCORD_URL;

  return (
    <main id="top">
      <Nav />

      <header className="hero">
        <div className="yard-lines" />
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> EST. {season} · 8 FRANCHISES · 3 KEEPERS</div>
          <h1>NATIONAL KEEPER<br/><em>FOOTBALL LEAGUE</em></h1>
          <p>Eight franchises. Two divisions. One trophy. Receipts last forever.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#standings">ENTER THE LEAGUE</a>
            <a className="button button-ghost" href="#matchups">WEEKLY ACTION</a>
          </div>
        </div>
        <div className="hero-card">
          <span className="live-dot">LIVE</span>
          <small>CURRENT LEAGUE LEADER</small>
          <strong>{leader.team}</strong>
          <div className="record">{leader.wins}-{leader.losses}</div>
          <p>{leader.pointsFor.toFixed(1)} points scored</p>
        </div>
      </header>

      <section className="ticker" aria-label="league headlines">
        <strong>BREAKING</strong>
        <div>
          <span>{leader.team} controls the throne</span>
          <span>•</span>
          <span>{pointsLeader.team} leads the league in scoring</span>
          <span>•</span>
          <span>American and National division races are live</span>
          <span>•</span>
          <span>Every lineup decision goes on the record</span>
        </div>
      </section>

      <section className="section" id="standings">
        <div className="section-heading">
          <div>
            <span className="kicker">DIVISION RACES</span>
            <h2>American vs. National</h2>
          </div>
          <span className={`source-badge ${source}`}>{source === "live" ? "LIVE SLEEPER DATA" : "DEMO MODE"}</span>
        </div>
        <StandingsTable standings={standings} />
      </section>

      <section className="section dark-section" id="matchups">
        <div className="section-heading">
          <div>
            <span className="kicker">SCOREBOARD</span>
            <h2>Featured Matchups</h2>
          </div>
          <span className="week-label">WEEK 12</span>
        </div>
        <div className="matchup-grid">
          {demoMatchups.map((game, index) => (
            <article className={`matchup-card ${index === 0 ? "featured" : ""}`} key={game.away}>
              {index === 0 && <span className="game-label">GAME OF THE WEEK</span>}
              <span className="status">{game.status}</span>
              <div className="team-line">
                <strong>{game.away}</strong>
                <b>{game.awayScore}</b>
              </div>
              <div className="team-line winner">
                <strong>{game.home}</strong>
                <b>{game.homeScore}</b>
              </div>
              <div className="matchup-footer">View matchup breakdown →</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="power">
        <div className="section-heading">
          <div>
            <span className="kicker">COMMISSIONER'S DESK</span>
            <h2>Power Rankings</h2>
          </div>
          <span className="stamp">TOTALLY UNBIASED</span>
        </div>
        <div className="power-grid">
          {standings.slice(0, 5).map((team, index) => (
            <article className="power-card" key={team.rosterId}>
              <span className="power-number">0{index + 1}</span>
              <div>
                <small>{index === 0 ? "THE FINAL BOSS" : index === 1 ? "ON THE HUNT" : "CONTENDER"}</small>
                <h3>{team.team}</h3>
                <p>{index === 0 ? "Everyone has a plan until this roster drops 145." : "Dangerous, loud, and one lineup decision from disaster."}</p>
              </div>
              <span className="trend">{index === 2 ? "↓1" : "↑1"}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section awards-section" id="awards">
        <div className="section-heading">
          <div>
            <span className="kicker">WEEKLY HARDWARE</span>
            <h2>Glory & Shame</h2>
          </div>
        </div>
        <div className="award-grid">
          <article className="award gold">
            <span>🏆</span><small>MANAGER OF THE WEEK</small><h3>{leader.manager}</h3><p>Pressed every correct button.</p>
          </article>
          <article className="award">
            <span>🔥</span><small>POINTS MONSTER</small><h3>{pointsLeader.team}</h3><p>{pointsLeader.pointsFor.toFixed(1)} points and no apologies.</p>
          </article>
          <article className="award danger">
            <span>🪦</span><small>COACHING DISASTER</small><h3>Bench Mob</h3><p>Forty-two points watched from the bench.</p>
          </article>
          <article className="award">
            <span>💸</span><small>WAIVER HEIST</small><h3>Waiver Wolves</h3><p>$3 FAAB. League-wide regret.</p>
          </article>
        </div>
      </section>

      <section className="section rivalry-section" id="rivalries">
        <div className="rivalry-copy">
          <span className="kicker">BAD BLOOD, GOOD FOOTBALL</span>
          <h2>Rivalry Week</h2>
          <p>History is tracked. Quotes are saved. Excuses are rejected.</p>
          <div className="rivalry-stats">
            <div><strong>7-5</strong><small>SERIES RECORD</small></div>
            <div><strong>1.8</strong><small>AVG. MARGIN</small></div>
            <div><strong>2026</strong><small>NEXT CHAPTER</small></div>
          </div>
        </div>
        <div className="versus">
          <div><span>AC</span><strong>American Division</strong></div>
          <b>VS</b>
          <div><span>NC</span><strong>National Division</strong></div>
        </div>
      </section>

      <section className="section rules-section" id="rules">
        <div>
          <span className="kicker">THE FOUNDATION</span>
          <h2>League Format</h2>
        </div>
        <div className="rule-grid">
          <div><strong>8</strong><span>TEAMS</span></div>
          <div><strong>½</strong><span>PPR</span></div>
          <div><strong>3</strong><span>KEEPERS</span></div>
          <div><strong>4</strong><span>PLAYOFF TEAMS</span></div>
          <div><strong>$200</strong><span>FAAB</span></div>
          <div><strong>∞</strong><span>TRASH TALK</span></div>
        </div>
      </section>

      <footer>
        <div>
          <strong>{leagueName}</strong>
          <span>KEEPERS. CHAOS. GLORY.</span>
        </div>
        <div className="social-links">
          {instagram && <a href={instagram}>Instagram</a>}
          {discord && <a href={discord}>Discord</a>}
          <a href="#top">Back to top ↑</a>
        </div>
        <p>© {season} NKFL. Built for rivalries, receipts, and keeper-league glory.</p>
      </footer>
    </main>
  );
}
